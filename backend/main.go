package main

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"
)

// Message represents a contact form submission
type Message struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Subject   string    `json:"subject"`
	Message   string    `json:"message"`
	IP        string    `json:"ip"`
	CreatedAt time.Time `json:"created_at"`
	IsRead    bool      `json:"is_read"`
}

// Stats represents visitor and website statistics
type Stats struct {
	TotalVisits    int64            `json:"total_visits"`
	TotalMessages  int              `json:"total_messages"`
	UnreadMessages int              `json:"unread_messages"`
	DailyVisits    map[string]int64 `json:"daily_visits"`
	ServerStarted  time.Time        `json:"server_started"`
	Uptime         string           `json:"uptime,omitempty"`
}

// AppState manages thread-safe application state
type AppState struct {
	mu            sync.RWMutex
	messages      []Message
	stats         Stats
	adminTokens   map[string]time.Time
	dataDir       string
	telegramToken string
	telegramChat  string
	adminEmail    string
	adminPassHash string
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	dataDir := os.Getenv("DATA_DIR")
	if dataDir == "" {
		dataDir = "data"
	}
	if err := os.MkdirAll(dataDir, 0755); err != nil {
		log.Fatalf("Error creating data directory: %v", err)
	}

	adminEmail := getEnv("ADMIN_EMAIL", "ithac4290@gmail.com")
	adminPass := getEnv("ADMIN_PASSWORD", "jahongir@1212")

	app := &AppState{
		messages:      make([]Message, 0),
		adminTokens:   make(map[string]time.Time),
		dataDir:       dataDir,
		telegramToken: os.Getenv("TELEGRAM_BOT_TOKEN"),
		telegramChat:  os.Getenv("TELEGRAM_CHAT_ID"),
		adminEmail:    adminEmail,
		adminPassHash: hashPassword(adminPass),
		stats: Stats{
			DailyVisits:   make(map[string]int64),
			ServerStarted: time.Now(),
		},
	}

	// Load existing data from disk
	app.loadData()

	mux := http.NewServeMux()

	// Public API Endpoints
	mux.HandleFunc("/api/health", app.handleHealth)
	mux.HandleFunc("/api/contact", app.handleContact)
	mux.HandleFunc("/api/stats/visit", app.handleVisit)
	mux.HandleFunc("/api/auth/login", app.handleLogin)
	mux.HandleFunc("/api/auth/verify", app.handleVerifyAuth)

	// Admin / Protected Endpoints
	mux.HandleFunc("/api/stats", app.handleStats)
	mux.HandleFunc("/api/messages", app.handleMessages)
	mux.HandleFunc("/api/messages/", app.handleSingleMessage)

	// Wrap with Middleware: Logging, Panic recovery, CORS
	handler := app.corsMiddleware(app.loggingMiddleware(mux))

	server := &http.Server{
		Addr:         "127.0.0.1:" + port,
		Handler:      handler,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// Graceful shutdown channel
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	go func() {
		log.Printf("🚀 Jahongir Code Go Backend running on port %s", port)
		log.Printf("📁 Data directory: %s", dataDir)
		if app.telegramToken != "" && app.telegramChat != "" {
			log.Printf("📱 Telegram notifications active (Chat ID: %s)", app.telegramChat)
		} else {
			log.Printf("ℹ️ Telegram notifications disabled (set TELEGRAM_BOT_TOKEN & TELEGRAM_CHAT_ID to enable)")
		}
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server error: %v", err)
		}
	}()

	<-stop
	log.Println("Shutting down Go backend gracefully...")
	app.saveData()
	log.Println("Go backend stopped cleanly.")
}

// ------------------- Handlers -------------------

// handleHealth returns service status and info
func (app *AppState) handleHealth(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	app.mu.RLock()
	uptime := time.Since(app.stats.ServerStarted).Round(time.Second).String()
	app.mu.RUnlock()

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"status":     "healthy",
		"service":    "Jahongir Code Backend",
		"engine":     "Golang net/http",
		"version":    "1.0.0",
		"uptime":     uptime,
		"timestamp":  time.Now().Format(time.RFC3339),
		"authorized": true,
	})
}

// handleContact handles contact form submissions
func (app *AppState) handleContact(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req struct {
		Name    string `json:"name"`
		Email   string `json:"email"`
		Subject string `json:"subject"`
		Message string `json:"message"`
	}

	contentType := r.Header.Get("Content-Type")
	if strings.Contains(contentType, "application/json") {
		body, err := io.ReadAll(io.LimitReader(r.Body, 1024*64)) // 64KB max
		if err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]interface{}{"error": "Xabarni o'qishda xatolik"})
			return
		}
		if err := json.Unmarshal(body, &req); err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]interface{}{"error": "JSON formati noto'g'ri"})
			return
		}
	} else {
		// Form data
		if err := r.ParseForm(); err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]interface{}{"error": "Formani o'qishda xatolik"})
			return
		}
		req.Name = r.FormValue("name")
		req.Email = r.FormValue("email")
		req.Subject = r.FormValue("subject")
		req.Message = r.FormValue("message")
	}

	// Validate
	req.Name = strings.TrimSpace(req.Name)
	req.Email = strings.TrimSpace(req.Email)
	req.Subject = strings.TrimSpace(req.Subject)
	req.Message = strings.TrimSpace(req.Message)

	if req.Name == "" || req.Email == "" || req.Message == "" {
		writeJSON(w, http.StatusBadRequest, map[string]interface{}{
			"error": "Iltimos, ism, email va xabar matnini to'liq kiriting.",
		})
		return
	}

	if !strings.Contains(req.Email, "@") || !strings.Contains(req.Email, ".") {
		writeJSON(w, http.StatusBadRequest, map[string]interface{}{
			"error": "Iltimos, to'g'ri email manzil kiriting.",
		})
		return
	}

	if req.Subject == "" {
		req.Subject = "Portfoliodan yangi murojaat"
	}

	msg := Message{
		ID:        generateID(),
		Name:      req.Name,
		Email:     req.Email,
		Subject:   req.Subject,
		Message:   req.Message,
		IP:        getClientIP(r),
		CreatedAt: time.Now(),
		IsRead:    false,
	}

	app.mu.Lock()
	app.messages = append([]Message{msg}, app.messages...)
	app.stats.TotalMessages = len(app.messages)
	app.updateUnreadCount()
	app.mu.Unlock()

	// Asynchronously save to file
	go app.saveData()

	// Asynchronously notify Telegram
	go app.sendTelegramNotification(msg)

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"success": true,
		"message": "Xabaringiz muvaffaqiyatli qabul qilindi! Tez orada siz bilan bog'lanamiz.",
		"id":      msg.ID,
	})
}

// handleVisit records page visits
func (app *AppState) handleVisit(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	today := time.Now().Format("2006-01-02")

	app.mu.Lock()
	app.stats.TotalVisits++
	app.stats.DailyVisits[today]++
	app.mu.Unlock()

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"success": true,
		"visits":  app.stats.TotalVisits,
	})
}

// handleStats returns visitor and message statistics
func (app *AppState) handleStats(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	app.mu.RLock()
	statsCopy := app.stats
	statsCopy.TotalMessages = len(app.messages)
	statsCopy.Uptime = time.Since(app.stats.ServerStarted).Round(time.Second).String()
	app.mu.RUnlock()

	writeJSON(w, http.StatusOK, statsCopy)
}

// handleLogin handles admin authentication with Email and Password
func (app *AppState) handleLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req struct {
		Email    string `json:"email"`
		Username string `json:"username"`
		Password string `json:"password"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]interface{}{"error": "Noto'g'ri so'rov formati"})
		return
	}

	emailInput := strings.TrimSpace(req.Email)
	if emailInput == "" {
		emailInput = strings.TrimSpace(req.Username)
	}
	passInput := strings.TrimSpace(req.Password)

	// Admin credential check against environment settings
	if !strings.EqualFold(emailInput, app.adminEmail) || hashPassword(passInput) != app.adminPassHash {
		time.Sleep(200 * time.Millisecond) // mitigate brute-force
		writeJSON(w, http.StatusUnauthorized, map[string]interface{}{"error": "Email yoki parol noto'g'ri"})
		return
	}

	token := generateToken()

	app.mu.Lock()
	app.adminTokens[token] = time.Now().Add(24 * time.Hour)
	app.mu.Unlock()

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"success": true,
		"token":   token,
		"user": map[string]string{
			"email": app.adminEmail,
			"name":  "Jahongir Mirzayev",
			"role":  "admin",
		},
	})
}

// handleVerifyAuth verifies if the provided token is still valid
func (app *AppState) handleVerifyAuth(w http.ResponseWriter, r *http.Request) {
	token := app.extractToken(r)
	if !app.isAuthorized(token) {
		writeJSON(w, http.StatusUnauthorized, map[string]interface{}{"authorized": false})
		return
	}

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"authorized": true,
		"email":      app.adminEmail,
	})
}

// handleMessages lists all messages (Admin only)
func (app *AppState) handleMessages(w http.ResponseWriter, r *http.Request) {
	token := app.extractToken(r)
	if !app.isAuthorized(token) {
		writeJSON(w, http.StatusUnauthorized, map[string]interface{}{"error": "Avtorizatsiya talab qilinadi"})
		return
	}

	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	app.mu.RLock()
	defer app.mu.RUnlock()

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"messages": app.messages,
		"total":    len(app.messages),
		"unread":   app.stats.UnreadMessages,
	})
}

// handleSingleMessage handles actions on a specific message (e.g. DELETE /api/messages/{id} or PATCH /api/messages/{id}/read)
func (app *AppState) handleSingleMessage(w http.ResponseWriter, r *http.Request) {
	token := app.extractToken(r)
	if !app.isAuthorized(token) {
		writeJSON(w, http.StatusUnauthorized, map[string]interface{}{"error": "Avtorizatsiya talab qilinadi"})
		return
	}

	parts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
	// /api/messages/{id} or /api/messages/{id}/read
	if len(parts) < 3 {
		http.NotFound(w, r)
		return
	}
	id := parts[2]

	app.mu.Lock()
	defer app.mu.Unlock()

	// DELETE
	if r.Method == http.MethodDelete {
		found := false
		newMsgs := make([]Message, 0, len(app.messages))
		for _, m := range app.messages {
			if m.ID == id {
				found = true
				continue
			}
			newMsgs = append(newMsgs, m)
		}
		if !found {
			writeJSON(w, http.StatusNotFound, map[string]interface{}{"error": "Xabar topilmadi"})
			return
		}
		app.messages = newMsgs
		app.stats.TotalMessages = len(app.messages)
		app.updateUnreadCount()
		go app.saveData()
		writeJSON(w, http.StatusOK, map[string]interface{}{"success": true})
		return
	}

	// PATCH (Mark as read)
	if r.Method == http.MethodPatch || r.Method == http.MethodPost {
		for i := range app.messages {
			if app.messages[i].ID == id {
				app.messages[i].IsRead = true
				app.updateUnreadCount()
				go app.saveData()
				writeJSON(w, http.StatusOK, map[string]interface{}{"success": true, "message": app.messages[i]})
				return
			}
		}
		writeJSON(w, http.StatusNotFound, map[string]interface{}{"error": "Xabar topilmadi"})
		return
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

// ------------------- Middleware -------------------

func (app *AppState) corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, X-Admin-Token")
		w.Header().Set("Access-Control-Max-Age", "86400")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func (app *AppState) loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		rw := &responseWriter{ResponseWriter: w, status: http.StatusOK}

		defer func() {
			if err := recover(); err != nil {
				log.Printf("PANIC recovered in %s %s: %v", r.Method, r.URL.Path, err)
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			}
		}()

		next.ServeHTTP(rw, r)
		log.Printf("%s %s %d %s [%s]", r.Method, r.URL.Path, rw.status, time.Since(start), getClientIP(r))
	})
}

type responseWriter struct {
	http.ResponseWriter
	status int
}

func (rw *responseWriter) WriteHeader(code int) {
	rw.status = code
	rw.ResponseWriter.WriteHeader(code)
}

// ------------------- Telegram Notification -------------------

func (app *AppState) sendTelegramNotification(msg Message) {
	if app.telegramToken == "" || app.telegramChat == "" {
		return
	}

	text := fmt.Sprintf(
		"🔔 *Yangi Murojaat (jahongircode.uz)*\n\n"+
			"👤 *Ism:* %s\n"+
			"📧 *Email:* %s\n"+
			"📌 *Mavzu:* %s\n"+
			"🌐 *IP:* `%s`\n"+
			"⏰ *Vaqt:* %s\n\n"+
			"💬 *Xabar:*\n%s",
		escapeMarkdown(msg.Name),
		escapeMarkdown(msg.Email),
		escapeMarkdown(msg.Subject),
		msg.IP,
		msg.CreatedAt.Format("02.01.2006 15:04:05"),
		escapeMarkdown(msg.Message),
	)

	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", app.telegramToken)
	data := url.Values{
		"chat_id":    {app.telegramChat},
		"text":       {text},
		"parse_mode": {"Markdown"},
	}

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.PostForm(apiURL, data)
	if err != nil {
		log.Printf("Telegram error: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		b, _ := io.ReadAll(resp.Body)
		log.Printf("Telegram send failed (status %d): %s", resp.StatusCode, string(b))
	} else {
		log.Printf("Telegram notification sent for message ID: %s", msg.ID)
	}
}

// ------------------- Data Persistence -------------------

func (app *AppState) loadData() {
	app.mu.Lock()
	defer app.mu.Unlock()

	// Messages
	msgPath := filepath.Join(app.dataDir, "messages.json")
	if data, err := os.ReadFile(msgPath); err == nil {
		var msgs []Message
		if err := json.Unmarshal(data, &msgs); err == nil {
			app.messages = msgs
			log.Printf("Loaded %d existing messages from %s", len(msgs), msgPath)
		}
	}

	// Stats
	statsPath := filepath.Join(app.dataDir, "stats.json")
	if data, err := os.ReadFile(statsPath); err == nil {
		var st Stats
		if err := json.Unmarshal(data, &st); err == nil {
			app.stats.TotalVisits = st.TotalVisits
			if st.DailyVisits != nil {
				app.stats.DailyVisits = st.DailyVisits
			}
			log.Printf("Loaded stats: %d total visits", st.TotalVisits)
		}
	}

	app.updateUnreadCount()
}

func (app *AppState) saveData() {
	app.mu.RLock()
	defer app.mu.RUnlock()

	msgPath := filepath.Join(app.dataDir, "messages.json")
	if data, err := json.MarshalIndent(app.messages, "", "  "); err == nil {
		_ = os.WriteFile(msgPath, data, 0644)
	}

	statsPath := filepath.Join(app.dataDir, "stats.json")
	if data, err := json.MarshalIndent(app.stats, "", "  "); err == nil {
		_ = os.WriteFile(statsPath, data, 0644)
	}
}

func (app *AppState) updateUnreadCount() {
	count := 0
	for _, m := range app.messages {
		if !m.IsRead {
			count++
		}
	}
	app.stats.UnreadMessages = count
	app.stats.TotalMessages = len(app.messages)
}

// ------------------- Auth Helpers -------------------

func (app *AppState) extractToken(r *http.Request) string {
	auth := r.Header.Get("Authorization")
	if strings.HasPrefix(auth, "Bearer ") {
		return strings.TrimPrefix(auth, "Bearer ")
	}
	if t := r.Header.Get("X-Admin-Token"); t != "" {
		return t
	}
	return r.URL.Query().Get("token")
}

func (app *AppState) isAuthorized(token string) bool {
	if token == "" {
		return false
	}
	app.mu.RLock()
	defer app.mu.RUnlock()

	exp, ok := app.adminTokens[token]
	if !ok {
		return false
	}
	return time.Now().Before(exp)
}

// ------------------- Utilities -------------------

func writeJSON(w http.ResponseWriter, status int, data interface{}) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(data)
}

func generateID() string {
	return strconv.FormatInt(time.Now().UnixNano(), 36)
}

func generateToken() string {
	bytes := make([]byte, 32)
	_, _ = rand.Read(bytes)
	return hex.EncodeToString(bytes)
}

func hashPassword(p string) string {
	h := sha256.Sum256([]byte(p))
	return hex.EncodeToString(h[:])
}

func getEnv(key, defaultVal string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return defaultVal
}

func getClientIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		parts := strings.Split(xff, ",")
		return strings.TrimSpace(parts[0])
	}
	if xrip := r.Header.Get("X-Real-IP"); xrip != "" {
		return strings.TrimSpace(xrip)
	}
	return r.RemoteAddr
}

func escapeMarkdown(s string) string {
	replacer := strings.NewReplacer(
		"_", "\\_",
		"*", "\\*",
		"[", "\\[",
		"`", "\\`",
	)
	return replacer.Replace(s)
}
