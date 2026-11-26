/**
 * Admin Panel Controller
 * Mirzayev Jahongir Portfolio Management
 */

document.addEventListener("DOMContentLoaded", () => {
  initAuth();
  initTabs();
  initStatusToggle();
  renderProjects();
  renderMessages();
  initProjectModal();
});

/* ==========================================================================
   1. Authentication
   ========================================================================== */
function initAuth() {
  const loginOverlay = document.getElementById("login-overlay");
  const adminContent = document.getElementById("admin-content");
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("admin-password");
  const logoutBtn = document.getElementById("logout-btn");

  const isAuthenticated = sessionStorage.getItem("mirzayev_admin_auth") === "true";

  if (isAuthenticated) {
    loginOverlay.classList.add("hidden");
    adminContent.classList.remove("hidden");
  } else {
    loginOverlay.classList.remove("hidden");
    adminContent.classList.add("hidden");
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = passwordInput.value.trim();

    if (entered === "admin123" || entered === "mirzayev2026") {
      sessionStorage.setItem("mirzayev_admin_auth", "true");
      loginOverlay.classList.add("hidden");
      adminContent.classList.remove("hidden");
      renderProjects();
      renderMessages();
    } else {
      alert("Xato parol! Standart: admin123 yoki mirzayev2026");
      passwordInput.value = "";
      passwordInput.focus();
    }
  });

  logoutBtn.addEventListener("click", () => {
    if (confirm("Haqiqatan ham admin paneldan chiqmoqchimisiz?")) {
      sessionStorage.removeItem("mirzayev_admin_auth");
      window.location.reload();
    }
  });
}

/* ==========================================================================
   2. Tabs Navigation
   ========================================================================== */
function initTabs() {
  const tabProjectsBtn = document.getElementById("tab-projects-btn");
  const tabMessagesBtn = document.getElementById("tab-messages-btn");
  const sectionProjects = document.getElementById("section-projects");
  const sectionMessages = document.getElementById("section-messages");

  tabProjectsBtn.addEventListener("click", () => {
    tabProjectsBtn.classList.add("active", "text-cyan-400", "border-cyan-400");
    tabProjectsBtn.classList.remove("text-slate-400", "border-transparent");

    tabMessagesBtn.classList.remove("active", "text-cyan-400", "border-cyan-400");
    tabMessagesBtn.classList.add("text-slate-400", "border-transparent");

    sectionProjects.classList.remove("hidden");
    sectionMessages.classList.add("hidden");
  });

  tabMessagesBtn.addEventListener("click", () => {
    tabMessagesBtn.classList.add("active", "text-cyan-400", "border-cyan-400");
    tabMessagesBtn.classList.remove("text-slate-400", "border-transparent");

    tabProjectsBtn.classList.remove("active", "text-cyan-400", "border-cyan-400");
    tabProjectsBtn.classList.add("text-slate-400", "border-transparent");

    sectionMessages.classList.remove("hidden");
    sectionProjects.classList.add("hidden");
  });
}

/* ==========================================================================
   3. Status Toggle (Available / Busy)
   ========================================================================== */
function initStatusToggle() {
  const toggleBtn = document.getElementById("toggle-status-btn");
  const label = document.getElementById("status-label");
  const currentStatus = DataStore.getSiteStatus();

  function updateStatusUI(status) {
    if (status === "available") {
      label.textContent = "Loyihalarga ochiq";
      toggleBtn.className = "px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
      toggleBtn.querySelector("span").className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
    } else {
      label.textContent = "Band (Yangi buyurtma olinmaydi)";
      toggleBtn.className = "px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 bg-rose-500/20 text-rose-300 border border-rose-500/30";
      toggleBtn.querySelector("span").className = "w-2 h-2 rounded-full bg-rose-400";
    }
  }

  updateStatusUI(currentStatus);

  toggleBtn.addEventListener("click", () => {
    const newStatus = DataStore.getSiteStatus() === "available" ? "busy" : "available";
    DataStore.setSiteStatus(newStatus);
    updateStatusUI(newStatus);
  });
}

/* ==========================================================================
   4. Projects Rendering & CRUD
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById("admin-projects-list");
  const countBadge = document.getElementById("stat-projects-count");
  const tabBadge = document.getElementById("tab-projects-badge");
  const projects = DataStore.getProjects();

  countBadge.textContent = projects.length;
  tabBadge.textContent = projects.length;

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-500 font-mono text-sm">
        Hozircha birorta ham loyiha qo‘shilmagan. Yuqoridagi tugma orqali yangi loyiha qo‘shing!
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
      <div>
        <div class="relative h-40 bg-slate-950 rounded-xl overflow-hidden mb-4 border border-slate-800">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
          <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full ${p.badgeClass || 'bg-cyan-500/90'} text-white text-[10px] font-mono uppercase font-bold">
            ${p.categoryName || p.category}
          </span>
        </div>

        <h4 class="font-bold text-base text-white mb-1.5">${p.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">${p.description}</p>
        
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${(p.tags || []).map(t => `<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">${t}</span>`).join('')}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 font-mono text-xs">
        <a href="${p.demoUrl || '#'}" target="_blank" class="text-cyan-400 hover:underline flex items-center gap-1">
          Demo ↗
        </a>
        <div class="flex items-center gap-2">
          <button onclick="editProject('${p.id}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors">
            Tahrirlash
          </button>
          <button onclick="deleteProject('${p.id}')" class="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors">
            O‘chirish
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.deleteProject = function(id) {
  if (confirm("Ushbu loyihani o‘chirishni xohlaysizmi?")) {
    const list = DataStore.getProjects().filter(p => p.id !== id);
    DataStore.saveProjects(list);
    renderProjects();
  }
};

window.editProject = function(id) {
  const project = DataStore.getProjects().find(p => p.id === id);
  if (!project) return;

  document.getElementById("project-edit-id").value = project.id;
  document.getElementById("form-title").value = project.title;
  document.getElementById("form-category").value = project.category;
  document.getElementById("form-image").value = project.image;
  document.getElementById("form-description").value = project.description;
  document.getElementById("form-tags").value = (project.tags || []).join(", ");
  document.getElementById("form-github").value = project.githubUrl || "";
  document.getElementById("form-demo").value = project.demoUrl || "";

  document.getElementById("modal-title").textContent = "Loyihani tahrirlash";
  document.getElementById("project-modal").classList.remove("hidden");
};

/* ==========================================================================
   5. Project Modal & Form Submission
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const openBtn = document.getElementById("open-new-project-btn");
  const addTrigger = document.getElementById("add-project-trigger");
  const closeBtn = document.getElementById("close-modal-btn");
  const cancelBtn = document.getElementById("cancel-modal-btn");
  const form = document.getElementById("project-form");
  const resetDefaultsBtn = document.getElementById("reset-defaults-btn");

  function openModal() {
    form.reset();
    document.getElementById("project-edit-id").value = "";
    document.getElementById("modal-title").textContent = "Yangi loyiha qo‘shish";
    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  openBtn?.addEventListener("click", openModal);
  addTrigger?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);
  cancelBtn?.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const editId = document.getElementById("project-edit-id").value;
    const title = document.getElementById("form-title").value.trim();
    const category = document.getElementById("form-category").value;
    const image = document.getElementById("form-image").value;
    const description = document.getElementById("form-description").value.trim();
    const tagsStr = document.getElementById("form-tags").value.trim();
    const tags = tagsStr.split(",").map(t => t.trim()).filter(Boolean);
    const githubUrl = document.getElementById("form-github").value.trim() || "https://github.com/mirzayevjahongir";
    const demoUrl = document.getElementById("form-demo").value.trim() || "#contact";

    let categoryName = "Veb-sayt";
    let badgeClass = "bg-cyan-500/90";
    let demoText = "Live Demo";

    if (category === "telegram") {
      categoryName = "Telegram Bot / TMA";
      badgeClass = "bg-blue-500/90";
      demoText = "Botni ochish";
    } else if (category === "mobile") {
      categoryName = "Mobil Ilova";
      badgeClass = "bg-purple-500/90";
      demoText = "Ko‘rish";
    }

    const projects = DataStore.getProjects();

    if (editId) {
      // Edit existing
      const index = projects.findIndex(p => p.id === editId);
      if (index !== -1) {
        projects[index] = {
          ...projects[index],
          title, category, categoryName, badgeClass, image, description, tags, githubUrl, demoUrl, demoText
        };
      }
    } else {
      // Create new
      const newProj = {
        id: "proj_" + Date.now(),
        title,
        category,
        categoryName,
        badgeClass,
        image,
        description,
        tags,
        githubUrl,
        demoUrl,
        demoText,
        createdDate: new Date().toISOString().split("T")[0]
      };
      projects.unshift(newProj);
    }

    DataStore.saveProjects(projects);
    closeModal();
    renderProjects();
  });

  resetDefaultsBtn?.addEventListener("click", () => {
    if (confirm("Barcha loyihalarni standart holatiga (6 ta namunaviy loyiha) qaytarishni tasdiqlaysizmi?")) {
      DataStore.saveProjects(DEFAULT_PROJECTS);
      renderProjects();
    }
  });
}

/* ==========================================================================
   6. Messages Rendering & Actions
   ========================================================================== */
function renderMessages() {
  const container = document.getElementById("admin-messages-list");
  const countBadge = document.getElementById("stat-messages-count");
  const unreadBadge = document.getElementById("stat-unread-badge");
  const tabBadge = document.getElementById("tab-messages-badge");
  const clearBtn = document.getElementById("clear-messages-btn");

  const messages = DataStore.getMessages();
  const unreadCount = messages.filter(m => !m.isRead).length;

  countBadge.textContent = messages.length;
  tabBadge.textContent = messages.length;
  unreadBadge.textContent = `${unreadCount} yangi`;

  if (messages.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-500 font-mono text-sm">
        Hozircha birorta ham xabar kelib tushmagan.
      </div>
    `;
    return;
  }

  container.innerHTML = messages.map(m => `
    <div class="p-5 rounded-2xl ${m.isRead ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/5'} border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
      <div class="space-y-1.5 flex-1">
        <div class="flex items-center gap-3">
          <span class="font-bold text-white text-base">${m.name}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono ${m.isRead ? 'bg-slate-800 text-slate-400' : 'bg-cyan-500/20 text-cyan-400 font-semibold'}">
            ${m.isRead ? 'O‘qilgan' : 'Yangi'}
          </span>
          <span class="text-[11px] font-mono text-slate-500">${m.date}</span>
        </div>
        
        <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
          <span class="text-cyan-400 font-semibold">📞 ${m.contact}</span>
          <span class="text-slate-600">•</span>
          <span class="text-indigo-300">💼 ${m.service}</span>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed pt-1 font-sans bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">${m.message}</p>
      </div>

      <div class="flex items-center gap-2 shrink-0 font-mono text-xs">
        ${!m.isRead ? `
          <button onclick="markMessageRead('${m.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-colors">
            ✓ O‘qildi
          </button>
        ` : ''}
        ${m.contact.startsWith('@') ? `
          <a href="https://t.me/${m.contact.replace('@', '')}" target="_blank" class="px-3 py-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition-colors flex items-center gap-1">
            Telegramda javob ↗
          </a>
        ` : `
          <a href="mailto:${m.contact}" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors">
            Email yozish
          </a>
        `}
        <button onclick="deleteMessage('${m.id}')" class="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors">
          O‘chirish
        </button>
      </div>
    </div>
  `).join('');

  clearBtn.onclick = () => {
    if (confirm("Barcha xabarlarni tozalashni xohlaysizmi?")) {
      DataStore.saveMessages([]);
      renderMessages();
    }
  };
}

window.markMessageRead = function(id) {
  const list = DataStore.getMessages();
  const item = list.find(m => m.id === id);
  if (item) {
    item.isRead = true;
    DataStore.saveMessages(list);
    renderMessages();
  }
};

window.deleteMessage = function(id) {
  if (confirm("Ushbu xabarni o‘chirishni xohlaysizmi?")) {
    const list = DataStore.getMessages().filter(m => m.id !== id);
    DataStore.saveMessages(list);
    renderMessages();
  }
};
