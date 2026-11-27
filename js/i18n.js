/**
 * Workfolio - Multi-language (UZ, EN, RU), Day/Night Theme & Admin Sync Engine
 */

const TRANSLATIONS = {
  uz: {
    // Nav
    nav_home: "Bosh sahifa",
    nav_about: "Men haqimda",
    nav_services: "Xizmatlar",
    nav_skills: "Ko'nikmalar",
    nav_experience: "Tajriba",
    nav_portfolio: "Portfolio",
    nav_contact: "Bog'lanish",
    nav_letstalk: "Bog'lanish",

    // Hero
    hero_status: "Yangi loyihalar uchun ochiq",
    hero_title_pre: "Men <span class=\"profile-name-text\">Jahongir Mirzayev</span>,",
    hero_title_hl: "Full-Stack dasturchi",
    hero_title_post: "va dasturiy muhandisman. Yuqori sifatli raqamli yechimlar yarataman.",
    hero_lead: "Zamonaviy veb-saytlar, Telegram botlar, Mini Applar va mobil ilovalar yaratish bo'yicha professional Full-Stack dasturchi. Yuqori sifat, tezkorlik va toza arxitektura kafolati.",
    hero_btn_work: "Loyihalarimni ko'rish",
    hero_btn_talk: "Keling, gaplashamiz",

    // Clients
    clients_eyebrow: "Ilg'or jamoalar va startaplar tomonidan bildirilgan ishonch",

    // About
    about_title: "Men haqimda",
    about_subtitle: "Qisqacha hikoya va bosib o'tilgan yo'lni ifodalovchi raqamlar",
    about_story: "Men ko'p tarmoqli mahsulot dizayneri va front-end dasturchiman. Asosiy maqsadim — asoschilarning xom g'oyalarini toza, qulay va xavfsiz raqamli mahsulotlarga aylantirishdir. Tadqiqotga asoslangan dizayn qarorlarini toza va tushunarli kod bilan birlashtiraman.",
    stat_years: "Yillik Tajriba",
    stat_projects: "Bitirilgan Loyihalar",
    stat_clients: "Mamnun Mijozlar",
    stat_awards: "Yutuqlar va Mukofotlar",

    // Services
    services_title: "Nimalar qila olaman",
    services_subtitle: "To'liq tsikldagi professional xizmatlar to'plami",
    service_1_title: "UI / UX Dizayn",
    service_1_desc: "Aniq iyerarxiya va qulay harakatlarga ega tadqiqotga asoslangan interfeyslar.",
    service_2_title: "Front-End Dasturlash",
    service_2_desc: "Zamonaviy freymvorklarda piksel darajasida aniq va tezkor veb-yechimlar.",
    service_3_title: "Dizayn Tizimlari",
    service_3_desc: "Jamoalarga barqaror va tezkor ishlash imkonini beruvchi komponentlar kutubxonasi.",
    service_4_title: "Brend & Identika",
    service_4_desc: "Mahsulotlarga esda qolarli va o'ziga xos vizual qiyofa baxsh etuvchi dizayn.",
    service_5_title: "Mahsulot Strategiyasi",
    service_5_desc: "Noma'lum maqsadlarni aniq, tasdiqlangan yo'l xaritalariga aylantirish.",

    // Skills
    skills_title: "Ko'nikmalar & Texnologiyalar",
    skills_subtitle: "Har kuni ishlatadigan vositalarim va texnologik stek",
    skills_intro_title: "Dizayn didi va muhandislik intizomi uyg'unligi.",
    skills_intro_desc: "Men kanva (dizayn) va kod bazasi o'rtasida erkin harakatlanaman, bu esa g'oyaning ishlab chiqarishgacha o'z sifatini yo'qotmasligini ta'minlaydi.",
    skill_1: "Interfeys Dizayni",
    skill_2: "Front-End Dasturlash",
    skill_3: "Dizayn Tizimlari",
    skill_4: "Prototiplash & Harakat",
    skill_5: "Brend & Vizual Identika",

    // Experience
    experience_title: "Ish Tajribasi",
    experience_subtitle: "Bugungi bilim va ko'nikmalarimni shakllantirgan muhim bosqichlar",
    exp_work_title: "Mehnat Faoliyati",
    exp_edu_title: "Ta'lim & Mukofotlar",
    exp_job_1_role: "Katta Mahsulot Dizayneri",
    exp_job_1_desc: "Analitika platformasida yetakchi dizayner, tadqiqotlardan tortib tayyor interfeys va dizayn tizimigacha boshqargan.",
    exp_job_2_role: "Mahsulot Dizayneri & Front-End",
    exp_job_2_desc: "Startaplar uchun marketing saytlari va veb-ilovalarni loyihalash va ishlab chiqish.",
    exp_job_3_role: "UI Dizayner",
    exp_job_3_desc: "Fintex, sog'liqni saqlash va iste'molchi mahsulotlari bo'yicha interfeyslar yaratish.",
    exp_edu_1_title: "BFA, Kommunikatsiya Dizayni",
    exp_edu_1_desc: "Imtiyozli diplom bilan tugatgan. Tipografiya va qulay tizimlar yaratishga ixtisoslashgan.",
    exp_edu_2_title: "Awwwards — Kun Sayti",
    exp_edu_2_desc: "Murakkab analitika mahsulotida yuqori sifatli dizayn va foydalanish qulayligi uchun taqdirlangan.",
    exp_edu_3_title: "CSS Design Awards — G'olib",
    exp_edu_3_desc: "Yorqin, yaxlit brend va qulay e-tijorat tajribasi uchun mukofotlangan.",
    btn_download_resume: "To'liq Rezyumeni Yuklab Olish",

    // Portfolio
    portfolio_title: "Tanlangan Ishlar",
    portfolio_subtitle: "Amalga oshirilgan loyihalar va ularning biznesga keltirgan foydasi",
    case_1_cat: "Veb Ilova · 2024",
    case_1_title: "Lumen Analytics",
    case_1_desc: "Mahsulot ko'rsatkichlarini kuzatishning qulay usuli. Axborot arxitekturasini yangilab, tahlil qilish vaqtini ikki baravar qisqartirdik.",
    case_2_cat: "Mobil Ilova · 2023",
    case_2_title: "Pace Fitness",
    case_2_desc: "Haqiqiy harakatlar va motivatsiyaga asoslangan iOS ilovasi. Uch oy ichida kunlik faol foydalanuvchilar soni ikki baravarga oshdi.",
    case_3_cat: "Brending · 2023",
    case_3_title: "Marrow Coffee",
    case_3_desc: "Kofe korxonasi uchun to'liq vizual tizim — logotip, qadoqlash va iliq brend tili.",
    btn_view_case: "Keys-stadini ko'rish",

    // Testimonials
    testimonials_title: "Mijozlar Fikrlari",
    testimonials_subtitle: "Men bilan birga ishlash baxtiga muyassar bo'lgan insonlar fikri",
    test_1_quote: "Jahongir mujmal g'oyani foydalanuvchilar sevadigan mahsulotga aylantirdi. Dizayn va kod tafsilotlari ajoyib darajada edi.",
    test_2_quote: "Dizayn va muhandislikda birdek kuchli mutaxassisni topish qiyin. Muddatlar bajarildi, muloqot aniq, natija kutganimizdan ham a'lo.",
    test_3_quote: "Bizning loyihamiz Jahongir kelishidan oldin tartibsiz edi. U butun jamoaga ikki baravar tez harakat qilish imkonini berdi.",

    // Process
    process_title: "Qanday ishlayman",
    process_subtitle: "Loyihalarni o'z vaqtida va sifatli topshirishga xizmat qiluvchi 4 bosqich",
    process_step_1_title: "O'rganish",
    process_step_1_desc: "Biz dastlabki kundan to'g'ri muammoni hal qilish uchun maqsadlar va cheklovlarni chuqur tahlil qilamiz.",
    process_step_2_title: "Loyihalash",
    process_step_2_desc: "Vayrfreymlar har bir bosqichda birgalikda ko'rib chiqilib, sayqallangan interaktiv dizaynga aylanadi.",
    process_step_3_title: "Dasturlash",
    process_step_3_desc: "Dizaynlar sifatini yo'qotmagan holda qulay va tezkor front-end kodiga aylantiriladi.",
    process_step_4_title: "Ishga tushirish",
    process_step_4_desc: "Mahsulotni ishga tushiramiz, natijalarni o'lchaymiz va qo'llab-quvvatlaymiz.",

    // CTA
    cta_title: "G'oyangizni hayotga tatbiq etishga tayyormisiz?",
    cta_lead: "Kelgusi oy boshlanadigan bitta yangi loyiha uchun o'rnim bor. Agar puxta loyiha ustida ishlayotgan bo'lsangiz, uni eshitishdan xursand bo'laman.",
    cta_btn: "Keling, birga ishlaymiz",

    // Contact
    contact_title: "Bog'lanish",
    contact_subtitle: "Loyihangiz haqida so'zlab bering va men tez orada javob beraman",
    contact_name_placeholder: "Ismingiz",
    contact_email_placeholder: "Elektron pochtangiz",
    contact_subject_placeholder: "Mavzu",
    contact_message_placeholder: "Xabaringiz",
    contact_btn_send: "Xabar Yuborish",
    contact_loading: "Yuborilmoqda...",
    contact_sent: "Xabaringiz muvaffaqiyatli yuborildi. Rahmat!",

    // Footer
    footer_bio: "Insonlarga qulay, zamonaviy va tezkor raqamli tajribalar yaratuvchi mahsulot dizayneri va dasturchi.",
    footer_navigate: "Navigatsiya",
    footer_what_i_do: "Yo'nalishlarim",
    footer_say_hello: "Aloqa",
    footer_admin_link: "Admin Boshqaruv Paneli",

    // Admin translations
    admin_overview: "Umumiy Ko'rinish",
    admin_profile: "Profil Sozlamalari",
    admin_projects: "Loyihalar",
    admin_messages: "Xabarlar",
    admin_settings: "Tizim Sozlamalari",
    admin_welcome: "Xush kelibsiz, Admin! 👋",
    admin_welcome_sub: "Portfolio veb-saytingiz statistikasi va so'nggi ma'lumotlar.",
    admin_add_project: "Yangi loyiha qo'shish",
    admin_send_test: "Sinov xabari yuborish",
    admin_stat_visits: "Saytga tashriflar soni",
    admin_stat_projects: "Faol loyihalar soni",
    admin_stat_messages: "Kelib tushgan xabarlar",
    admin_stat_status: "Tizim holati (Aktiv)",
    admin_recent_msgs: "So'nggi kelgan xabarlar",
    admin_view_all: "Barchasini ko'rish →",
    admin_logout: "Chiqish",
    admin_view_site: "Saytni ko'rish",
    admin_login_title: "Workfolio Admin",
    admin_login_subtitle: "Portfolio boshqaruv tizimiga kirish",
    admin_login_pass_lbl: "Maxfiy Parol (PIN)",
    admin_login_btn: "Tizimga Kirish",
    admin_login_quick: "1-bosishda tezkor kirish (admin123)",
    admin_login_back: "Bosh sahifaga qaytish",
    admin_profile_heading: "Dasturchi Profili & Asosiy Ma'lumotlar",
    admin_profile_sub: "Bu yerdagi o'zgarishlar darhol bosh sahifadagi matnlarda aks etadi.",
    admin_profile_save: "O'zgarishlarni Saqlash",
    admin_projects_heading: "Portfolio Loyihalari",
    admin_projects_sub: "Mavjud loyihalarni tahrirlash, o'chirish yoki yangisini qo'shish.",
    admin_new_project_btn: "Yangi Loyiha",
    admin_search_proj_placeholder: "Loyiha nomi yoki kategoriya bo'yicha qidirish...",
    admin_th_image: "Rasm",
    admin_th_title: "Nomi",
    admin_th_category: "Kategoriya",
    admin_th_year: "Yil",
    admin_th_actions: "Amallar",
    admin_messages_heading: "Kelib Tushgan Xabarlar",
    admin_messages_sub: "Saytdagi aloqa formasi orqali yuborilgan barcha xabarlar.",
    admin_btn_clear_all: "Barchasini tozalash",
    admin_filter_all: "Barchasi",
    admin_filter_unread: "Faqat Yangilar",
    admin_filter_read: "O'qilganlar",
    admin_th_sender: "Yuboruvchi",
    admin_th_subject: "Mavzu",
    admin_th_message: "Xabar",
    admin_th_time: "Vaqt",
    admin_th_status: "Holat",
    admin_settings_heading: "Tizim Sozlamalari",
    admin_stats_heading: "Bosh Sahifadagi Statistika Hisoblagichlarini O'zgartirish",
    admin_stats_sub: "Bu yerdagi raqamlar bosh sahifaning 'About Me' bo'limidagi dinamik hisoblagichlarda aks etadi.",
    admin_stat_years_lbl: "Yillik Tajriba",
    admin_stat_projects_lbl: "Bitirilgan Loyihalar",
    admin_stat_clients_lbl: "Mamnun Mijozlar",
    admin_stat_awards_lbl: "Mukofotlar Soni",
    admin_btn_save_stats: "Statistikalarni Saqlash",
    admin_change_pass_heading: "Admin Parolini O'zgartirish",
    admin_lbl_new_pass: "Yangi parol",
    admin_btn_update_pass: "Parolni yangilash",
    admin_backup_heading: "Zaxira Nusxa (Backup & Restore)",
    admin_backup_sub: "Loyiha, profil va xabarlarni bitta JSON faylga yuklab oling yoki qayta tiklang.",
    admin_btn_download_backup: "Zaxirani yuklab olish (JSON)",
    admin_btn_restore_backup: "Zaxiradan tiklash",
    admin_reset_heading: "Boshlang'ich Holatga Qaytarish (Reset)",
    admin_reset_sub: "Barcha o'zgartirishlarni tozalab, tizimni asl standart holatga keltiradi.",
    admin_btn_reset: "Standart holatga qaytarish",

    // Service Details Page
    sd_page_title: "Xizmat Tafsilotlari",
    sd_page_desc: "Mijozlar ehtiyojiga moslashtirilgan, yuqori sifatli va zamonaviy raqamli xizmatlar tavsifi.",
    sd_breadcrumb_home: "Bosh sahifa",
    sd_breadcrumb_current: "Xizmat tafsilotlari",
    sd_sidebar_all_services: "Barcha Xizmatlar",
    sd_sidebar_ui_ux: "UI / UX Dizayn",
    sd_sidebar_frontend: "Front-End Dasturlash",
    sd_sidebar_design_systems: "Dizayn Tizimlari",
    sd_sidebar_mobile: "Mobil Ilovalar Dizayni",
    sd_sidebar_brand: "Brend & Identika",
    sd_sidebar_strategy: "Mahsulot Strategiyasi",
    sd_help_title: "Loyihangiz bormi?",
    sd_help_desc: "Qanday mahsulot yaratmoqchi ekanligingizni ayting, 1 ish kunida javob beraman.",
    sd_help_btn: "Bog'lanish",
    sd_main_title: "UI / UX Dizayn",
    sd_main_lead: "Murakkab muammolarni aniq, qulay va intuitiv raqamli mahsulotlarga aylantiruvchi tadqiqotga asoslangan interfeys dizayni. Dastlabki tahlildan to tayyor dizayngacha har bir ekran o'z o'rniga ega bo'lishini ta'minlayman.",
    sd_main_desc_1: "Foydalanuvchi tajribasini chuqur o'rganish orqali biznesingiz uchun eng optimal va samarali yechimlarni topamiz. Har bir funksiya foydalanuvchiga qulaylik yaratishi va konversiyani oshirishi shart.",
    sd_included_title: "Xizmat ichiga nimalar kiradi",
    sd_inc_1: "Foydalanuvchi tadqiqotlari & intervyular",
    sd_inc_2: "Axborot arxitekturasi",
    sd_inc_3: "Vayrfreymlar va prototiplar",
    sd_inc_4: "Yuqori aniqlikdagi UI dizayn",
    sd_inc_5: "Foydalanish qulayligini (Usability) testlash",
    sd_inc_6: "Dasturchilarga topshirish va spetsifikatsiyalar",
    sd_process_title: "Qanday ishlaymiz",
    sd_step_1_title: "Tahlil & Maqsad",
    sd_step_1_desc: "Dizayn to'g'ri muammoni hal qilishi uchun maqsadlar, auditoriya va cheklovlarni aniqlaymiz.",
    sd_step_2_title: "Dizayn & Sayqallash",
    sd_step_2_desc: "Bosqichma-bosqich eskizlar va vizual dizayn, har bir bosqich birgalikda tasdiqlanadi.",
    sd_step_3_title: "Yetkazib berish",
    sd_step_3_desc: "Dasturlash uchun tayyorlangan hujjatlashtirilgan dizayn fayllari va doimiy yordam.",

    // Portfolio Details Page
    pd_page_title: "Loyiha Tafsilotlari",
    pd_page_desc: "Amalga oshirilgan loyihaning maqsadlari, bajarilgan ishlar va erishilgan natijalar tahlili.",
    pd_breadcrumb_home: "Bosh sahifa",
    pd_breadcrumb_current: "Loyiha tafsilotlari",
    pd_meta_title: "Loyiha Ma'lumotlari",
    pd_lbl_category: "Kategoriya",
    pd_lbl_client: "Buyurtmachi",
    pd_lbl_timeline: "Muddati",
    pd_lbl_role: "Rolim",
    pd_lbl_website: "Veb-sayt",
    pd_btn_live: "Jonli Ko'rish",
    pd_writeup_title: "Lumen Analytics — ma'lumotlarni o'qishning qulay usuli",
    pd_writeup_lead: "Lumen platformasiga ko'rsatkichlar oqimini har qanday band rahbar bir necha soniyada tahlil qila oladigan qulay ko'rinishga keltirish kerak edi. Biz axborot arxitekturasini noldan qayta qurdik va qulay interfeysni taqdim etdik.",
    pd_writeup_desc_1: "Foydalanuvchi testlari shuni ko'rsatdiki, ortiqcha ma'lumotlarni tozalash va muhim grafiklarni markazga qo'yish qaror qabul qilish tezligini 40% ga oshirdi.",
    pd_writeup_desc_2: "Dizayn tizimi komponentlari tufayli dasturlash jamoasi yangi sahifalarni 2 barobar tezroq yaratishga muvaffaq bo'ldi.",
    pd_hl_1: "40% tezroq yuklanish tezligi",
    pd_hl_2: "2x ko'proq kunlik faol foydalanuvchi",
    pd_hl_3: "WCAG AA standartlariga to'liq mos"
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_letstalk: "Let's Talk",

    // Hero
    hero_status: "Available for new projects",
    hero_title_pre: "I'm <span class=\"profile-name-text\">Jahongir Mirzayev</span>, a",
    hero_title_hl: "Full-Stack developer",
    hero_title_post: "& software engineer crafting high-impact digital products.",
    hero_lead: "Experienced Full-Stack developer crafting modern web applications, Telegram bots, Mini Apps, and mobile apps with clean architecture and high performance.",
    hero_btn_work: "View My Work",
    hero_btn_talk: "Let's Talk",

    // Clients
    clients_eyebrow: "Trusted by forward-thinking teams and studios",

    // About
    about_title: 'About Me',
    about_subtitle: "A short story, and a few numbers that sum up the journey",
    about_story: "I'm a multidisciplinary product designer and front-end developer based in Austin, Texas. I help founders turn rough ideas into refined, usable products — pairing research-driven design decisions with clean, accessible code. When I'm not pushing pixels you'll find me sketching type, mentoring juniors, or chasing good coffee.",
    stat_years: "Years Experience",
    stat_projects: "Projects Shipped",
    stat_clients: "Happy Clients",
    stat_awards: "Awards Won",

    // Services
    services_title: "What I Do",
    services_subtitle: "A focused set of services, delivered end to end",
    service_1_title: "UI / UX Design",
    service_1_desc: "Research-led interfaces with clear hierarchy and effortless flows.",
    service_2_title: "Front-End Development",
    service_2_desc: "Pixel-accurate, accessible builds in modern frameworks.",
    service_3_title: "Design Systems",
    service_3_desc: "Scalable component libraries that keep teams shipping consistently.",
    service_4_title: "Brand & Identity",
    service_4_desc: "Distinct visual identities that give products a memorable voice.",
    service_5_title: "Product Strategy",
    service_5_desc: "Turning fuzzy goals into focused, validated roadmaps.",

    // Skills
    skills_title: "Skills & Tools",
    skills_subtitle: "The craft and software I reach for every day",
    skills_intro_title: "A blend of design taste and engineering rigor.",
    skills_intro_desc: "I move comfortably between the canvas and the codebase, which means designs stay faithful from concept to production. Here's where I spend most of my time.",
    skill_1: "Interface Design",
    skill_2: "Front-End Development",
    skill_3: "Design Systems",
    skill_4: "Prototyping & Motion",
    skill_5: "Brand & Visual Identity",

    // Experience
    experience_title: "Experience",
    experience_subtitle: "The roles and milestones that shaped how I work today",
    exp_work_title: "Work",
    exp_edu_title: "Education & Awards",
    exp_job_1_role: "Senior Product Designer",
    exp_job_1_desc: "Lead designer on the analytics platform, owning everything from research to shipped UI and the design system that supports it.",
    exp_job_2_role: "Product Designer & Front-End",
    exp_job_2_desc: "Designed and built marketing sites and web apps for early-stage startups, bridging design and engineering on small teams.",
    exp_job_3_role: "UI Designer",
    exp_job_3_desc: "Crafted interfaces and brand systems for agency clients across fintech, health, and consumer products.",
    exp_edu_1_title: "BFA, Communication Design",
    exp_edu_1_desc: "Graduated with honors. Focused on typography, interaction design, and the craft of building usable systems.",
    exp_edu_2_title: "Awwwards — Site of the Day",
    exp_edu_2_desc: "Recognized for design excellence and accessibility on a complex data product.",
    exp_edu_3_title: "CSS Design Awards — Winner",
    exp_edu_3_desc: "Honored for a bold, cohesive brand and e-commerce experience.",
    btn_download_resume: "Download Full Resume",

    // Portfolio
    portfolio_title: "Selected Work",
    portfolio_subtitle: "A closer look at a few projects and the impact they made",
    case_1_cat: "Web App · 2024",
    case_1_title: "Lumen Analytics",
    case_1_desc: "A calmer way to read product metrics. We rebuilt the information architecture and shipped a focused dashboard that cut time-to-insight in half.",
    case_2_cat: "Mobile App · 2023",
    case_2_title: "Pace Fitness",
    case_2_desc: "An iOS coaching app designed around real gestures and motivation. Daily active users doubled within three months of launch.",
    case_3_cat: "Branding · 2023",
    case_3_title: "Marrow Coffee",
    case_3_desc: "A full identity system for a specialty roaster — logo, packaging, and a warm visual language that scaled across every touchpoint.",
    btn_view_case: "View case study",

    // Testimonials
    testimonials_title: "Kind Words",
    testimonials_subtitle: "A few notes from people I've had the joy of working with",
    test_1_quote: "Jahongir translated a vague idea into a product our users adore. The detail in both design and code was outstanding.",
    test_2_quote: "Rare to find someone equally strong in design and engineering. Deadlines met, communication clear, result above expectations.",
    test_3_quote: "Our codebase and design were messy before Jahongir. He brought order and consistency that let the whole team move twice as fast.",

    // Process
    process_title: "How I Work",
    process_subtitle: "A simple, collaborative process that keeps projects on track",
    process_step_1_title: "Discover",
    process_step_1_desc: "We dig into your goals, users, and constraints so we're solving the right problem from day one.",
    process_step_2_title: "Design",
    process_step_2_desc: "Wireframes evolve into polished, interactive designs — reviewed together at every milestone.",
    process_step_3_title: "Build",
    process_step_3_desc: "Designs become accessible, performant front-end code with no fidelity lost in handoff.",
    process_step_4_title: "Launch",
    process_step_4_desc: "We ship, measure, and refine — with support through release and beyond.",

    // CTA
    cta_title: "Ready to bring your idea to life?",
    cta_lead: "I have room for one new project starting next month. If you're building something thoughtful, I'd love to hear about it.",
    cta_btn: "Let's Work Together",

    // Contact
    contact_title: "Get in Touch",
    contact_subtitle: "Tell me about your project and I'll be in touch shortly",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Your Email",
    contact_subject_placeholder: "Subject",
    contact_message_placeholder: "Your Message",
    contact_btn_send: "Send Message",
    contact_loading: "Sending Message...",
    contact_sent: "Your message has been sent. Thank you!",

    // Footer
    footer_bio: "Product designer and front-end developer crafting accessible, human-centered digital experiences. Always happy to talk about a new idea.",
    footer_navigate: "Navigate",
    footer_what_i_do: "What I Do",
    footer_say_hello: "Say Hello",
    footer_admin_link: "Admin Management Panel",

    // Admin translations
    admin_overview: "Overview",
    admin_profile: "Profile Settings",
    admin_projects: "Projects",
    admin_messages: "Inquiries",
    admin_settings: "System Settings",
    admin_welcome: "Welcome back, Admin! 👋",
    admin_welcome_sub: "Here is your portfolio website overview and latest activity.",
    admin_add_project: "Add New Project",
    admin_send_test: "Send Test Message",
    admin_stat_visits: "Total Site Visits",
    admin_stat_projects: "Active Projects",
    admin_stat_messages: "Received Inquiries",
    admin_stat_status: "System Status (Online)",
    admin_recent_msgs: "Recent Inquiries",
    admin_view_all: "View All →",
    admin_logout: "Logout",
    admin_view_site: "View Live Site",
    admin_login_title: "Workfolio Admin",
    admin_login_subtitle: "Sign in to portfolio management system",
    admin_login_pass_lbl: "Secret Password (PIN)",
    admin_login_btn: "Sign In",
    admin_login_quick: "1-Click Quick Login (admin123)",
    admin_login_back: "Back to Homepage",
    admin_profile_heading: "Developer Profile & Core Details",
    admin_profile_sub: "Changes made here immediately reflect on the live homepage.",
    admin_profile_save: "Save Profile Changes",
    admin_projects_heading: "Portfolio Projects",
    admin_projects_sub: "Manage, edit, delete existing projects or add new ones.",
    admin_new_project_btn: "New Project",
    admin_search_proj_placeholder: "Search by project title or category...",
    admin_th_image: "Image",
    admin_th_title: "Title",
    admin_th_category: "Category",
    admin_th_year: "Year",
    admin_th_actions: "Actions",
    admin_messages_heading: "Received Inquiries",
    admin_messages_sub: "All messages submitted via the contact form on your portfolio.",
    admin_btn_clear_all: "Clear All Messages",
    admin_filter_all: "All Messages",
    admin_filter_unread: "Unread Only",
    admin_filter_read: "Read Messages",
    admin_th_sender: "Sender",
    admin_th_subject: "Subject",
    admin_th_message: "Message",
    admin_th_time: "Time",
    admin_th_status: "Status",
    admin_settings_heading: "System Settings",
    admin_stats_heading: "Update Homepage Dynamic Counters",
    admin_stats_sub: "These numbers update the live counter numbers in the About Me section.",
    admin_stat_years_lbl: "Years Experience",
    admin_stat_projects_lbl: "Projects Completed",
    admin_stat_clients_lbl: "Satisfied Clients",
    admin_stat_awards_lbl: "Awards Won",
    admin_btn_save_stats: "Save Counter Values",
    admin_change_pass_heading: "Change Admin Password",
    admin_lbl_new_pass: "New Password",
    admin_btn_update_pass: "Update Password",
    admin_backup_heading: "Backup & Restore Data",
    admin_backup_sub: "Export all projects, profile and inquiries as a single JSON file or restore from a backup.",
    admin_btn_download_backup: "Download Backup (JSON)",
    admin_btn_restore_backup: "Restore Backup",
    admin_reset_heading: "Factory Reset to Defaults",
    admin_reset_sub: "Clear all local overrides and restore initial sample portfolio data.",
    admin_btn_reset: "Reset to Default State",

    // Service Details Page
    sd_page_title: "Service Details",
    sd_page_desc: "Detailed breakdown of focused, end-to-end digital services tailored to client needs.",
    sd_breadcrumb_home: "Home",
    sd_breadcrumb_current: "Service Details",
    sd_sidebar_all_services: "All Services",
    sd_sidebar_ui_ux: "UI / UX Design",
    sd_sidebar_frontend: "Front-End Development",
    sd_sidebar_design_systems: "Design Systems",
    sd_sidebar_mobile: "Mobile Design",
    sd_sidebar_brand: "Brand & Identity",
    sd_sidebar_strategy: "Product Strategy",
    sd_help_title: "Have a project?",
    sd_help_desc: "Tell me what you're building and I'll reply within one business day.",
    sd_help_btn: "Get in Touch",
    sd_main_title: "UI / UX Design",
    sd_main_lead: "Research-led interface design that turns complex problems into clear, intuitive products. I partner with you from discovery through high-fidelity design to make sure every screen earns its place.",
    sd_main_desc_1: "Through in-depth user research and iterative prototyping, we uncover key insights that drive meaningful business outcomes and delightful user interactions.",
    sd_included_title: "What's included",
    sd_inc_1: "User research & interviews",
    sd_inc_2: "Information architecture",
    sd_inc_3: "Wireframes & prototypes",
    sd_inc_4: "High-fidelity UI design",
    sd_inc_5: "Usability testing",
    sd_inc_6: "Design handoff & specs",
    sd_process_title: "How we'll work",
    sd_step_1_title: "Discover",
    sd_step_1_desc: "We align on goals, users, and constraints so the design solves the right problem.",
    sd_step_2_title: "Design",
    sd_step_2_desc: "Iterative wireframes and visuals, reviewed together at every milestone.",
    sd_step_3_title: "Deliver",
    sd_step_3_desc: "Polished, documented files ready for development — with support through build.",

    // Portfolio Details Page
    pd_page_title: "Portfolio Details",
    pd_page_desc: "A deep dive into project objectives, design solutions, and measurable impact.",
    pd_breadcrumb_home: "Home",
    pd_breadcrumb_current: "Portfolio Details",
    pd_meta_title: "Project Details",
    pd_lbl_category: "Category",
    pd_lbl_client: "Client",
    pd_lbl_timeline: "Timeline",
    pd_lbl_role: "Role",
    pd_lbl_website: "Website",
    pd_btn_live: "Live Preview",
    pd_writeup_title: "Lumen Analytics — a calmer way to read your data",
    pd_writeup_lead: "Lumen needed a dashboard that turned a firehose of metrics into something a busy founder could scan in seconds. We rebuilt the information architecture from the ground up and shipped a focused, accessible interface.",
    pd_writeup_desc_1: "User testing revealed that decluttering non-essential metrics and highlighting focal graphs accelerated executive decision-making speed by 40%.",
    pd_writeup_desc_2: "A modular, scalable design system allowed engineering to ship subsequent analytical views twice as fast.",
    pd_hl_1: "40% faster load times",
    pd_hl_2: "2x daily active users",
    pd_hl_3: "WCAG AA compliant"
  },

  ru: {
    // Nav
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_services: "Услуги",
    nav_skills: "Навыки",
    nav_experience: "Опыт",
    nav_portfolio: "Портфолио",
    nav_contact: "Контакты",
    nav_letstalk: "Связаться",

    // Hero
    hero_status: "Доступен для новых проектов",
    hero_title_pre: "Я <span class=\"profile-name-text\">Джахонгир Мирзаев</span>,",
    hero_title_hl: "Full-Stack разработчик",
    hero_title_post: "и инженер программного обеспечения. Создаю надежные цифровые решения.",
    hero_lead: "Профессиональный Full-Stack разработчик современных веб-сайтов, Telegram ботов, Mini Apps и мобильных приложений с гарантией качества и чистого кода.",
    hero_btn_work: "Мои проекты",
    hero_btn_talk: "Обсудить проект",

    // Clients
    clients_eyebrow: "Доверие ведущих команд, стартапов и студий",

    // About
    about_title: "Обо мне",
    about_subtitle: "Краткая история и ключевые цифры профессионального пути",
    about_story: "Я мультидисциплинарный продуктовый дизайнер и фронтенд-разработчик из Остина, штат Техас. Помогаю предпринимателям превращать идеи в качественные, удобные продукты, сочетая обоснованные решения с чистым, доступным кодом.",
    stat_years: "Лет опыта",
    stat_projects: "Завершенных проектов",
    stat_clients: "Довольных клиентов",
    stat_awards: "Наград и побед",

    // Services
    services_title: "Что я делаю",
    services_subtitle: "Сфокусированный набор услуг с полным циклом реализации",
    service_1_title: "UI / UX Дизайн",
    service_1_desc: "Интерфейсы на основе исследований с четкой иерархией и естественными сценариями.",
    service_2_title: "Фронтенд-разработка",
    service_2_desc: "Пиксельно точные и быстрые решения на современных фреймворках.",
    service_3_title: "Дизайн-системы",
    service_3_desc: "Масштабируемые библиотеки компонентов для быстрой и согласованной работы команды.",
    service_4_title: "Брендинг и айдентика",
    service_4_desc: "Уникальный визуальный стиль, придающий продукту запоминающийся образ.",
    service_5_title: "Продуктовая стратегия",
    service_5_desc: "Превращение размытых целей в сфокусированные и проверенные планы развития.",

    // Skills
    skills_title: "Навыки и стек",
    skills_subtitle: "Инструменты и технологии, которые я использую ежедневно",
    skills_intro_title: "Баланс дизайнерского вкуса и инженерной точности.",
    skills_intro_desc: "Я свободно перемещаюсь между макетами и кодовой базой, поэтому дизайн остается верным замыслу на этапе продакшена.",
    skill_1: "Дизайн интерфейсов",
    skill_2: "Фронтенд-разработка",
    skill_3: "Дизайн-системы",
    skill_4: "Прототипирование и анимация",
    skill_5: "Брендинг и айдентика",

    // Experience
    experience_title: "Опыт работы",
    experience_subtitle: "Роли и этапы, сформировавшие мой подход к разработке",
    exp_work_title: "Карьера",
    exp_edu_title: "Образование и награды",
    exp_job_1_role: "Старший продуктовый дизайнер",
    exp_job_1_desc: "Ведущий дизайнер платформы аналитики: от пользовательских исследований до релизов и дизайн-системы.",
    exp_job_2_role: "Продуктовый дизайнер и фронтенд",
    exp_job_2_desc: "Проектирование и создание веб-сервисов для перспективных стартапов на ранних стадиях.",
    exp_job_3_role: "UI-дизайнер",
    exp_job_3_desc: "Создание интерфейсов и брендинга для клиентов агентства в финтехе и медицине.",
    exp_edu_1_title: "BFA, Дизайн коммуникаций",
    exp_edu_1_desc: "Окончил с отличием Техасский университет в Остине. Специализация на типографике и удобных интерфейсах.",
    exp_edu_2_title: "Awwwards — Сайт дня",
    exp_edu_2_desc: "Признание за выдающийся дизайн и доступность сложного аналитического продукта.",
    exp_edu_3_title: "CSS Design Awards — Победитель",
    exp_edu_3_desc: "Награда за смелый, целостный брендинг и безупречный пользовательский опыт.",
    btn_download_resume: "Скачать полное резюме",

    // Portfolio
    portfolio_title: "Избранные работы",
    portfolio_subtitle: "Несколько проектов и измеримое влияние, которое они оказали",
    case_1_cat: "Веб-приложение · 2024",
    case_1_title: "Lumen Analytics",
    case_1_desc: "Спокойный и наглядный способ чтения аналитики. Мы переработали информационную архитектуру и сократили время получения инсайтов вдвое.",
    case_2_cat: "Мобильное приложение · 2023",
    case_2_title: "Pace Fitness",
    case_2_desc: "iOS-приложение для тренировок с фокусом на мотивацию. Число ежедневных активных пользователей удвоилось за 3 месяца.",
    case_3_cat: "Брендинг · 2023",
    case_3_title: "Marrow Coffee",
    case_3_desc: "Полная система визуальной идентификации для обжарщика кофе — логотип, упаковка и дизайн коммуникаций.",
    btn_view_case: "Смотреть кейс",

    // Testimonials
    testimonials_title: "Отзывы клиентов",
    testimonials_subtitle: "Несколько слов от партнеров, с которыми мне довелось сотрудничать",
    test_1_quote: "Джахонгир превратил абстрактную идею в продукт, который обожают клиенты. Внимание к деталям в дизайне и коде было на высоте.",
    test_2_quote: "Редко встретишь специалиста, одинаково сильного в дизайне и инженерии. Сроки соблюдены, коммуникация на 10/10.",
    test_3_quote: "До Джахонгира наша кодовая база была в хаосе. Он привел все к идеальному порядку, что позволило команде ускориться вдвое.",

    // Process
    process_title: "Как я работаю",
    process_subtitle: "Простой и прозрачный процесс для успешного запуска проектов",
    process_step_1_title: "Анализ",
    process_step_1_desc: "Мы погружаемся в цели, пользователей и ограничения, чтобы с первого дня решать истинную проблему.",
    process_step_2_title: "Дизайн",
    process_step_2_desc: "Вайрфреймы превращаются в интерактивный дизайн и тестируются на каждом этапе.",
    process_step_3_title: "Разработка",
    process_step_3_desc: "Макеты становятся доступным, быстрым фронтенд-кодом без потери исходного качества.",
    process_step_4_title: "Релиз",
    process_step_4_desc: "Запускаем, измеряем показатели и оказываем пост-релизную поддержку.",

    // CTA
    cta_title: "Готовы воплотить вашу идею в жизнь?",
    cta_lead: "В следующем месяце у меня открывается слот для одного масштабного проекта. Буду рад обсудить ваши задачи.",
    cta_btn: "Начать сотрудничество",

    // Contact
    contact_title: "Связаться",
    contact_subtitle: "Расскажите о вашей задаче, и я отвечу в течение 24 часов",
    contact_name_placeholder: "Ваше имя",
    contact_email_placeholder: "Ваш Email",
    contact_subject_placeholder: "Тема проекта",
    contact_message_placeholder: "Ваше сообщение",
    contact_btn_send: "Отправить сообщение",
    contact_loading: "Отправка сообщения...",
    contact_sent: "Ваше сообщение успешно отправлено. Спасибо!",

    // Footer
    footer_bio: "Продуктовый дизайнер и фронтенд-разработчик, создающий доступные и удобные цифровые продукты.",
    footer_navigate: "Навигация",
    footer_what_i_do: "Что я делаю",
    footer_say_hello: "Связь",
    footer_admin_link: "Панель администратора",

    // Admin translations
    admin_overview: "Обзор",
    admin_profile: "Настройки профиля",
    admin_projects: "Проекты",
    admin_messages: "Сообщения",
    admin_settings: "Настройки системы",
    admin_welcome: "Добро пожаловать, Админ! 👋",
    admin_welcome_sub: "Статистика вашего портфолио и последние сообщения.",
    admin_add_project: "Добавить проект",
    admin_send_test: "Отправить тестовое сообщение",
    admin_stat_visits: "Количество визитов",
    admin_stat_projects: "Активные проекты",
    admin_stat_messages: "Входящие сообщения",
    admin_stat_status: "Статус системы (Онлайн)",
    admin_recent_msgs: "Последние сообщения",
    admin_view_all: "Смотреть все →",
    admin_logout: "Выйти",
    admin_view_site: "Перейти на сайт",
    admin_login_title: "Workfolio Admin",
    admin_login_subtitle: "Вход в панель управления портфолио",
    admin_login_pass_lbl: "Секретный пароль (PIN)",
    admin_login_btn: "Войти в систему",
    admin_login_quick: "Быстрый вход в 1 клик (admin123)",
    admin_login_back: "Вернуться на главную",
    admin_profile_heading: "Профиль разработчика и данные",
    admin_profile_sub: "Изменения здесь немедленно обновляются на главной странице.",
    admin_profile_save: "Сохранить профиль",
    admin_projects_heading: "Проекты портфолио",
    admin_projects_sub: "Управление, редактирование, удаление проектов и добавление новых.",
    admin_new_project_btn: "Новый проект",
    admin_search_proj_placeholder: "Поиск по названию или категории...",
    admin_th_image: "Фото",
    admin_th_title: "Название",
    admin_th_category: "Категория",
    admin_th_year: "Год",
    admin_th_actions: "Действия",
    admin_messages_heading: "Входящие сообщения",
    admin_messages_sub: "Все сообщения, отправленные через контактную форму.",
    admin_btn_clear_all: "Очистить все сообщения",
    admin_filter_all: "Все",
    admin_filter_unread: "Только новые",
    admin_filter_read: "Прочитанные",
    admin_th_sender: "Отправитель",
    admin_th_subject: "Тема",
    admin_th_message: "Сообщение",
    admin_th_time: "Время",
    admin_th_status: "Статус",
    admin_settings_heading: "Настройки системы",
    admin_stats_heading: "Изменение счетчиков на главной",
    admin_stats_sub: "Эти значения обновляют динамические счетчики в блоке «Обо мне».",
    admin_stat_years_lbl: "Лет опыта",
    admin_stat_projects_lbl: "Завершенных проектов",
    admin_stat_clients_lbl: "Довольных клиентов",
    admin_stat_awards_lbl: "Количество наград",
    admin_btn_save_stats: "Сохранить счетчики",
    admin_change_pass_heading: "Смена пароля администратора",
    admin_lbl_new_pass: "Новый пароль",
    admin_btn_update_pass: "Обновить пароль",
    admin_backup_heading: "Резервное копирование и экспорт",
    admin_backup_sub: "Скачайте или восстановите проекты, профиль и сообщения в виде одного JSON-файла.",
    admin_btn_download_backup: "Скачать бэкап (JSON)",
    admin_btn_restore_backup: "Восстановить из файла",
    admin_reset_heading: "Сброс к исходным настройкам",
    admin_reset_sub: "Удалить все пользовательские данные и вернуть исходные демонстрационные материалы.",
    admin_btn_reset: "Сбросить к исходным",

    // Service Details Page
    sd_page_title: "Детали Услуги",
    sd_page_desc: "Подробный обзор профессиональных цифровых услуг полного цикла для ваших задач.",
    sd_breadcrumb_home: "Главная",
    sd_breadcrumb_current: "Детали услуги",
    sd_sidebar_all_services: "Все Услуги",
    sd_sidebar_ui_ux: "UI / UX Дизайн",
    sd_sidebar_frontend: "Фронтенд-разработка",
    sd_sidebar_design_systems: "Дизайн-системы",
    sd_sidebar_mobile: "Мобильный дизайн",
    sd_sidebar_brand: "Брендинг и айдентика",
    sd_sidebar_strategy: "Продуктовая стратегия",
    sd_help_title: "Есть проект?",
    sd_help_desc: "Расскажите о вашей идее, и я свяжусь с вами в течение одного рабочего дня.",
    sd_help_btn: "Связаться",
    sd_main_title: "UI / UX Дизайн",
    sd_main_lead: "Дизайн интерфейсов на основе исследований, превращающий сложные задачи в понятные и интуитивные продукты. Мы пройдем путь от идеи до идеального интерфейса.",
    sd_main_desc_1: "Благодаря глубокому исследованию пользователей и тестированию прототипов мы находим решения, которые приносят пользу бизнесу и радость клиентам.",
    sd_included_title: "Что входит в услугу",
    sd_inc_1: "Исследования пользователей и интервью",
    sd_inc_2: "Информационная архитектура",
    sd_inc_3: "Вайрфреймы и интерактивные прототипы",
    sd_inc_4: "Высокоточный UI дизайн макетов",
    sd_inc_5: "Юзабилити-тестирование интерфейса",
    sd_inc_6: "Спецификации и передача в разработку",
    sd_process_title: "Как мы будем работать",
    sd_step_1_title: "Исследование",
    sd_step_1_desc: "Определяем бизнес-цели, портрет пользователя и ограничения для точного решения.",
    sd_step_2_title: "Проектирование",
    sd_step_2_desc: "Поэтапная разработка макетов и прототипов с совместным обсуждением результатов.",
    sd_step_3_title: "Передача",
    sd_step_3_desc: "Финальные макеты со всеми состояниями и дизайн-системой, готовые к разработке.",

    // Portfolio Details Page
    pd_page_title: "Детали Проекта",
    pd_page_desc: "Подробный обзор целей проекта, технических решений и достигнутых результатов.",
    pd_breadcrumb_home: "Главная",
    pd_breadcrumb_current: "Детали проекта",
    pd_meta_title: "Информация о проекте",
    pd_lbl_category: "Категория",
    pd_lbl_client: "Клиент",
    pd_lbl_timeline: "Сроки",
    pd_lbl_role: "Роль",
    pd_lbl_website: "Веб-сайт",
    pd_btn_live: "Смотреть онлайн",
    pd_writeup_title: "Lumen Analytics — понятный способ анализа данных",
    pd_writeup_lead: "Lumen требовался дашборд, превращающий поток метрик в понятную картину за секунды. Мы с нуля переработали архитектуру и создали доступный интерфейс.",
    pd_writeup_desc_1: "Тестирование показало, что удаление вторичных метрик и акцент на ключевых графиках ускорили принятие управленческих решений на 40%.",
    pd_writeup_desc_2: "Модульная дизайн-система позволила инженерной команде выпускать новые экраны в два раза быстрее.",
    pd_hl_1: "На 40% быстрее загрузка",
    pd_hl_2: "В 2 раза больше активных пользователей",
    pd_hl_3: "Соответствие стандартам WCAG AA"
  }
};

/* --------------------------------------------------
 * Language Controller
 * -------------------------------------------------- */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'uz';
  localStorage.setItem('workfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update text elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = TRANSLATIONS[lang][key];
      } else {
        // If element has a child icon, preserve the icon
        const icon = el.querySelector('i');
        if (icon && el.childNodes.length > 0) {
          // If icon is at the start
          if (el.childNodes[0].nodeType === Node.ELEMENT_NODE && el.childNodes[0].tagName === 'I') {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + TRANSLATIONS[lang][key]));
          } else if (icon) {
            // Icon at the end
            el.innerHTML = '';
            el.appendChild(document.createTextNode(TRANSLATIONS[lang][key] + ' '));
            el.appendChild(icon);
          } else {
            el.textContent = TRANSLATIONS[lang][key];
          }
        } else {
          el.textContent = TRANSLATIONS[lang][key];
        }
      }
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Update switcher labels across all dropdowns (flags removed)
  const langLabels = document.querySelectorAll('#current-lang-label, .current-lang-label');
  const langTexts = { uz: 'Uz', en: 'En', ru: 'Ru' };
  langLabels.forEach(lbl => {
    lbl.textContent = langTexts[lang] || 'Uz';
  });

  // Update active state in dropdown
  document.querySelectorAll('.lang-select-item').forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Re-sync dynamic admin overrides
  if (typeof initAdminDataSync === 'function') {
    initAdminDataSync();
  }
}

/* --------------------------------------------------
 * Day / Night Theme Controller (Tungi va Kunduzgi rejim)
 * -------------------------------------------------- */
function applyThemeImmediately() {
  const savedTheme = localStorage.getItem('workfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-mode');
    if (document.body) document.body.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
    if (document.body) document.body.classList.remove('light-mode');
  }
}
// Run right away
applyThemeImmediately();

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    document.documentElement.classList.add('light-mode');
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('workfolio_theme', 'light');
    updateThemeIcon('light');
  } else {
    document.body.classList.remove('light-mode');
    document.documentElement.classList.remove('light-mode');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('workfolio_theme', 'dark');
    updateThemeIcon('dark');
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('workfolio_theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function updateThemeIcon(theme) {
  const btns = document.querySelectorAll('.theme-toggle-btn, #theme-toggle-btn');
  btns.forEach(btn => {
    if (theme === 'light') {
      btn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
      btn.setAttribute('title', 'Tungi rejimga o\'tish (Dark Mode)');
      btn.setAttribute('aria-label', 'Dark mode');
    } else {
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
      btn.setAttribute('title', 'Kunduzgi rejimga o\'tish (Light Mode)');
      btn.setAttribute('aria-label', 'Light mode');
    }
  });
}

/* --------------------------------------------------
 * Admin Data Sync & Dynamic Content Engine
 * -------------------------------------------------- */
function initAdminDataSync() {
  // 1. Track visit
  try {
    let visits = parseInt(localStorage.getItem('workfolio_visits') || '142', 10);
    visits++;
    localStorage.setItem('workfolio_visits', visits);
  } catch (e) {}

  // 2. Load custom profile overrides if saved in Admin
  const savedProfile = localStorage.getItem('workfolio_profile');
  if (savedProfile) {
    try {
      const p = JSON.parse(savedProfile);
      if (p.name) {
        document.querySelectorAll('.profile-name-text').forEach(el => el.textContent = p.name);
      }
      if (p.role) {
        document.querySelectorAll('.profile-role-text').forEach(el => el.textContent = p.role);
      }
      if (p.lead) {
        const leadEl = document.querySelector('.hero-lead-text');
        if (leadEl) leadEl.textContent = p.lead;
      }
      if (p.status) {
        const statusEl = document.querySelector('.hero-status-text');
        if (statusEl) statusEl.textContent = p.status;
      }
      if (p.email) {
        document.querySelectorAll('.profile-email-text').forEach(el => {
          const icon = el.querySelector('i');
          if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + p.email));
          } else {
            el.textContent = p.email;
          }
          if (el.tagName === 'A') el.href = `mailto:${p.email}`;
        });
      }
      if (p.phone) {
        document.querySelectorAll('.profile-phone-text').forEach(el => {
          const icon = el.querySelector('i');
          if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + p.phone));
          } else {
            el.textContent = p.phone;
          }
          if (el.tagName === 'A') el.href = `tel:${p.phone.replace(/[^0-9+]/g, '')}`;
        });
      }
      if (p.location) {
        document.querySelectorAll('.profile-location-text').forEach(el => {
          const icon = el.querySelector('i');
          if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + p.location));
          } else {
            el.textContent = p.location;
          }
        });
      }
      if (p.telegram) {
        document.querySelectorAll('.social-telegram').forEach(el => el.href = p.telegram);
      }
      if (p.github) {
        document.querySelectorAll('.social-github').forEach(el => el.href = p.github);
      }
      if (p.instagram) {
        document.querySelectorAll('.social-instagram').forEach(el => el.href = p.instagram);
      }
      if (p.linkedin) {
        document.querySelectorAll('.social-linkedin').forEach(el => el.href = p.linkedin);
      }
    } catch (e) {}
  }

const DEFAULT_PORTFOLIO_PROJECTS = [
  {
    id: "proj_1",
    title: "Apex CRM & Analitika Tizimi",
    category: "Veb Ilova · 2024",
    desc: "Kompaniya savdolari, mijozlar bazasi va real vaqtdagi daromadlar analitikasini boshqaruvchi to'liq SaaS platforma.",
    image: "assets/images/project-crm.svg",
    link: "/portfolio-details"
  },
  {
    id: "proj_2",
    title: "Nova Store - E-Commerce Do'kon",
    category: "Veb Sayt · 2024",
    desc: "Smart gadjetlar uchun to'liq funksional internet do'kon: savat, onlayn to'lovlar (Click/Payme) va mijoz shaxsiy kabineti.",
    image: "assets/images/project-ecommerce.svg",
    link: "/portfolio-details"
  },
  {
    id: "proj_3",
    title: "FastFood Express (TMA)",
    category: "Telegram Mini App · 2024",
    desc: "Telegram ichida ishlovchi Mini App do'kon. Geolokatsiya orqali manzilni aniqlash, taom tanlash va bir bosishda to'lov qilish.",
    image: "assets/images/project-tma.svg",
    link: "https://t.me"
  },
  {
    id: "proj_4",
    title: "SmartAssistant AI Bot",
    category: "Telegram Bot · 2024",
    desc: "Sun'iy intellekt integratsiyalangan biznes bot: hisobotlarni tahlil qilish, PDF hujjatlar generatsiyasi va avtomatlashtirish.",
    image: "assets/images/project-telegram-bot.svg",
    link: "https://t.me"
  },
  {
    id: "proj_5",
    title: "HealthTrack Pro",
    category: "Mobil Ilova · 2024",
    desc: "Kundalik qadamlar, kaloriyalar, uyqu sifati va suv ichish me'yorlarini hisoblovchi zamonaviy Flutter mobil ilovasi.",
    image: "assets/images/project-mobile-health.svg",
    link: "/portfolio-details"
  },
  {
    id: "proj_6",
    title: "FinWallet - Moliya Boshqaruvi",
    category: "Fintech Mobil · 2024",
    desc: "Xarajat va daromadlarni hisob-kitob qilish, virtual kartalar balansi va oylik byudjet grafigini vizual ko'rsatuvchi ilova.",
    image: "assets/images/project-mobile-fintech.svg",
    link: "/portfolio-details"
  }
];

// 3. Dynamic Portfolio Projects Sync on home page
  const casesContainer = document.getElementById('portfolioCasesContainer');
  if (casesContainer) {
    let rawProjects = localStorage.getItem('workfolio_projects');
    if (!rawProjects) {
      localStorage.setItem('workfolio_projects', JSON.stringify(DEFAULT_PORTFOLIO_PROJECTS));
      rawProjects = JSON.stringify(DEFAULT_PORTFOLIO_PROJECTS);
    }
    if (rawProjects) {
      try {
        const projects = JSON.parse(rawProjects);
        if (projects && projects.length > 0) {
          const currentLang = localStorage.getItem('workfolio_lang') || 'uz';
          const btnLabel = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].btn_view_case) || "Keys-stadini ko'rish";

          casesContainer.innerHTML = projects.map((p, idx) => {
            const isReverse = idx % 2 === 1 ? ' reverse' : '';
            const orderImg = idx % 2 === 1 ? ' order-lg-2' : '';
            const orderCopy = idx % 2 === 1 ? ' order-lg-1' : '';
            return `
              <article class="case${isReverse}" data-aos="fade-up" data-aos-delay="${100 + (idx % 3) * 50}">
                <div class="row g-4 align-items-center">
                  <div class="col-lg-6${orderImg}">
                    <a href="${p.link || '/portfolio-details'}" class="shot">
                      <img src="${p.image || 'assets/img/portfolio/portfolio-1.webp'}" alt="${p.title}" class="img-fluid" loading="lazy">
                    </a>
                  </div>
                  <div class="col-lg-6${orderCopy}">
                    <div class="copy">
                      <span class="cat">${p.category || 'Web App'}</span>
                      <h3>${p.title}</h3>
                      <p>${p.desc || ''}</p>
                      <a href="${p.link || '/portfolio-details'}" class="more">
                        <span data-i18n="btn_view_case">${btnLabel}</span> <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            `;
          }).join('');
        }
      } catch (e) {}
    }
  }

  // 4. Dynamic Statistics Counters Sync on home page
  const rawStats = localStorage.getItem('workfolio_stats');
  if (rawStats) {
    try {
      const s = JSON.parse(rawStats);
      const counters = document.querySelectorAll('.counter .purecounter');
      if (counters.length >= 4) {
        if (s.years) { counters[0].setAttribute('data-purecounter-end', s.years); counters[0].textContent = s.years; }
        if (s.projects) { counters[1].setAttribute('data-purecounter-end', s.projects); counters[1].textContent = s.projects; }
        if (s.clients) { counters[2].setAttribute('data-purecounter-end', s.clients); counters[2].textContent = s.clients; }
        if (s.awards) { counters[3].setAttribute('data-purecounter-end', s.awards); counters[3].textContent = s.awards; }
      }
    } catch (e) {}
  }

  // 5. Dynamic Services Sync on home page
  const servicesContainer = document.querySelector('.service-rows');
  if (servicesContainer) {
    const rawServices = localStorage.getItem('workfolio_services');
    if (rawServices) {
      try {
        const services = JSON.parse(rawServices);
        if (services && services.length > 0) {
          servicesContainer.innerHTML = services.map((s, idx) => `
            <div class="col-12" data-aos="fade-up" data-aos-delay="${100 + (idx * 50)}">
              <a href="${s.link || '/service-details'}" class="row-item"><span class="n">${s.num || String(idx + 1).padStart(2, '0')}</span>
                <div class="body">
                  <h3>${s.title}</h3>
                  <p>${s.desc}</p>
                </div><i class="bi bi-arrow-up-right"></i>
              </a>
            </div>
          `).join('');
        }
      } catch (e) {}
    }
  }
}

/* --------------------------------------------------
 * Document Ready Init
 * -------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Theme init
  const savedTheme = localStorage.getItem('workfolio_theme') || 'dark';
  setTheme(savedTheme);

  // Bind all theme buttons
  document.querySelectorAll('.theme-toggle-btn, #theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // Language init
  const savedLang = localStorage.getItem('workfolio_lang') || 'uz';
  setLanguage(savedLang);

  // Bind language click items
  document.querySelectorAll('.lang-select-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Admin sync
  initAdminDataSync();
});
