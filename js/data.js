/**
 * Data Storage & State Management
 * Mirzayev Jahongir Portfolio & Admin Engine
 */

const DEFAULT_PROJECTS = [
  {
    id: "proj_1",
    title: "Apex CRM & Analitika Tizimi",
    category: "web",
    categoryName: "Veb-sayt",
    description: "Kompaniya savdolari, mijozlar bazasi, xodimlar faoliyati va real vaqtdagi daromadlar analitikasini boshqaruvchi SaaS platforma.",
    badgeClass: "bg-cyan-500/90",
    image: "assets/images/project-crm.svg",
    tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "#contact",
    demoText: "Live Demo",
    featured: true,
    createdDate: "2026-10-15"
  },
  {
    id: "proj_2",
    title: "Nova Store - E-Commerce Do‘kon",
    category: "web",
    categoryName: "Veb-sayt",
    description: "Smart gadjetlar uchun to‘liq funksional internet do‘kon: savat, onlayn to‘lovlar (Click/Payme), filtrlash va mijoz kabineti.",
    badgeClass: "bg-pink-500/90",
    image: "assets/images/project-ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "#contact",
    demoText: "Live Demo",
    featured: true,
    createdDate: "2026-09-20"
  },
  {
    id: "proj_3",
    title: "FastFood Express (TMA)",
    category: "telegram",
    categoryName: "Telegram Mini App",
    description: "Telegram ichida ishlovchi Mini App do‘kon. Geolokatsiya orqali manzilni aniqlash, taom tanlash va bir bosishda to‘lov qilish.",
    badgeClass: "bg-blue-500/90",
    image: "assets/images/project-tma.svg",
    tags: ["TMA SDK", "Vue 3 / Vite", "FastAPI", "Click/Payme"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "https://t.me",
    demoText: "Botni ochish",
    featured: true,
    createdDate: "2026-11-01"
  },
  {
    id: "proj_4",
    title: "SmartAssistant AI Bot",
    category: "telegram",
    categoryName: "Telegram Bot",
    description: "Sun'iy intellekt integratsiyalangan biznes bot: hisobotlarni tahlil qilish, PDF hujjatlar generatsiyasi va CRM bilan to‘liq sinxronizatsiya.",
    badgeClass: "bg-emerald-500/90",
    image: "assets/images/project-telegram-bot.svg",
    tags: ["Python 3.11", "Aiogram 3", "OpenAI API", "Redis"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "https://t.me",
    demoText: "Bot Linki",
    featured: true,
    createdDate: "2026-10-28"
  },
  {
    id: "proj_5",
    title: "HealthTrack Pro (Flutter)",
    category: "mobile",
    categoryName: "Mobil Ilova (iOS/Android)",
    description: "Kundalik qadamlar, kaloriyalar, uyqu sifati va suv ichish me'yorlarini hisoblovchi zamonaviy salomatlik mobil dasturi.",
    badgeClass: "bg-teal-500/90",
    image: "assets/images/project-mobile-health.svg",
    tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "#contact",
    demoText: "Ko‘rish",
    featured: true,
    createdDate: "2026-08-12"
  },
  {
    id: "proj_6",
    title: "FinWallet - Moliya Boshqaruvi",
    category: "mobile",
    categoryName: "Mobil Ilova (Fintech)",
    description: "Xarajat va daromadlarni hisob-kitob qilish, virtual kartalar balansi va oylik byudjet grafigini vizual ko‘rsatuvchi ilova.",
    badgeClass: "bg-purple-500/90",
    image: "assets/images/project-mobile-fintech.svg",
    tags: ["React Native", "Expo", "Redux", "SQLite"],
    githubUrl: "https://github.com/mirzayevjahongir",
    demoUrl: "#contact",
    demoText: "Ko‘rish",
    featured: true,
    createdDate: "2026-07-04"
  }
];

const DEFAULT_MESSAGES = [
  {
    id: "msg_1",
    name: "Alisher Usmonov",
    contact: "@alisher_corp",
    service: "Telegram Bot yoki Mini App",
    message: "Assalomu alaykum! Bizning restoran tarmog'imiz uchun Telegram Mini App buyurtma qilmoqchimiz. Narx va muddatlar bo'yicha bog'lansangiz.",
    date: "2026-11-23 11:45",
    isRead: false
  },
  {
    id: "msg_2",
    name: "Dilorom Karimova",
    contact: "dilorom@startup.uz",
    service: "Veb-sayt yoki Veb-ilova",
    message: "Salom, online ta'lim platformasi uchun Next.js da frontend va Django backend yaratish kerak.",
    date: "2026-11-22 17:30",
    isRead: true
  }
];

// Helper to access LocalStorage with fallback
const DataStore = {
  getProjects() {
    try {
      const stored = localStorage.getItem("mirzayev_portfolio_projects");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Storage error:", e);
    }
    this.saveProjects(DEFAULT_PROJECTS);
    return DEFAULT_PROJECTS;
  },

  saveProjects(projects) {
    try {
      localStorage.setItem("mirzayev_portfolio_projects", JSON.stringify(projects));
    } catch (e) {
      console.warn("Storage error:", e);
    }
  },

  getMessages() {
    try {
      const stored = localStorage.getItem("mirzayev_portfolio_messages");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Storage error:", e);
    }
    this.saveMessages(DEFAULT_MESSAGES);
    return DEFAULT_MESSAGES;
  },

  saveMessages(messages) {
    try {
      localStorage.setItem("mirzayev_portfolio_messages", JSON.stringify(messages));
    } catch (e) {
      console.warn("Storage error:", e);
    }
  },

  addMessage(messageObj) {
    const list = this.getMessages();
    const newMsg = {
      id: "msg_" + Date.now(),
      date: new Date().toLocaleString("uz-UZ"),
      isRead: false,
      ...messageObj
    };
    list.unshift(newMsg);
    this.saveMessages(list);
    return newMsg;
  },

  getSiteStatus() {
    return localStorage.getItem("mirzayev_site_status") || "available"; // 'available' or 'busy'
  },

  setSiteStatus(status) {
    localStorage.setItem("mirzayev_site_status", status);
  }
};
