# 🚀 Full-Stack Dasturchi Portfoliosi

Zamonaviy, tezkor, minimalist va ultra-responsive shaxsiy portfolio veb-sayti.

## 🌟 Asosiy Xususiyatlar

- **Dizayn & Estetika**:
  - Zamonaviy Dark Mode (qorong‘i mavzu) neon glow va cyber gradient effektlari bilan.
  - Silliq interaktiv animatsiyalar, hover effektlari va typing effekti.
  - Glassmorphism (xira shisha) kartalari va Bento Grid uslubi.
  - 100% barcha qurilmalarga moslashuvchan (Mobile, Tablet, Desktop).

- **Bo‘limlar**:
  1. **Hero qismi**: Ism, interaktiv o'zgaruvchi shior (typing text), 3 asosiy yo'nalish, statistik hisoblagichlar va cyber profile card.
  2. **Xizmatlar (Services)**:
     - 🌐 Veb-saytlar va Veb-ilovalar (Frontend / Backend)
     - 🤖 Telegram Botlar va Mini Apps (TMA WebApps)
     - 📱 Mobil Ilovalar (iOS & Android)
  3. **Loyihalar (Portfolio)**:
     - Kategoriyalar bo‘yicha dinamik filtrlash (*Barchasi*, *Veb-saytlar*, *Telegram botlar*, *Mobil ilovalar*).
     - SVG mockuplar, tavsif, texnologik badges, GitHub va Live Demo / Bot havolalari.
  4. **Texnologiyalar (Tech Stack)**:
     - React, Next.js, Node.js, Python, FastAPI, Aiogram, Flutter, PostgreSQL, Docker va boshqalar.
  5. **Bog‘lanish (Contact)**:
     - Telegram, GitHub, LinkedIn, Email ma'lumotlari.
     - Validatsiyaga ega, loading spinner va toast bildirishnomali tezkor xabar shakli.
     - To‘g‘ridan-to‘g‘ri shaxsiy Telegram botingizga xabar kelishini sozlash imkoniyati.

---

## 📁 Loyiha Tuzilmasi

```text
partfolyo/
├── index.html              # Asosiy HTML sahifasi
├── css/
│   └── style.css           # Maxsus stillar, animatsiyalar va neon effektlar
├── js/
│   └── main.js             # Filtrlash, mobil menyu, forma va animatsiya skriptlari
├── assets/
│   ├── icons/
│   │   └── favicon.svg     # Sayt belgisi (favicon)
│   └── images/             # Loyihalar va avatar SVG mockuplari
│       ├── avatar.svg
│       ├── project-crm.svg
│       ├── project-ecommerce.svg
│       ├── project-tma.svg
│       ├── project-telegram-bot.svg
│       ├── project-mobile-health.svg
│       └── project-mobile-fintech.svg
└── README.md               # Qo'llanma
```

---

## ⚡ Qanday ishga tushirish mumkin?

Hech qanday qo‘shimcha dasturlarni o‘rnatish shart emas!

### 1-usul: To'g'ridan-to'g'ri brauzerda ochish
`index.html` faylini istalgan brauzerda (Chrome, Firefox, Edge, Safari) ikki marta bosib oching.

### 2-usul: Mahalliy server bilan (Tavsiya etiladi)
Terminalda quyidagi buyruqlardan birini ishga tushiring:

```bash
# Python orqali:
python3 -m http.server 3000

# Yoki Node.js (npx) orqali:
npx serve .
```
So'ng brauzeringizda `http://localhost:3000` manziliga kiring.

---

## ⚙️ Sozlash va Shaxsiylashtirish

1. **Ism va ma'lumotlarni o'zgartirish**:
   - `index.html` faylida o'zingizning ismingiz, ijtimoiy tarmoq havolalaringiz (Telegram username, GitHub, LinkedIn) va elektron pochtangizni yozing.
2. **Formani Telegramga ulash**:
   - `js/main.js` faylini oching.
   - `TELEGRAM_CONFIG` ob'ektini toping:
     ```javascript
     const TELEGRAM_CONFIG = {
       ENABLED: true, // 'true' qiling
       BOT_TOKEN: "SIZNING_BOT_TOKENINGIZ",
       CHAT_ID: "SIZNING_TELEGRAM_CHAT_IDINGIZ"
     };
     ```
   - Endi saytdan yuborilgan har bir xabar avtomatik sizning Telegramingizga keladi!

---

## 🚀 Deploy qilish (Bepul Hosting)

- **Vercel**: `vercel` buyrug'ini tering yoki GitHub repozitoriyangizni Vercel platformasiga ulang.
- **GitHub Pages**: Repozitoriyani GitHub'ga yuklab, *Settings -> Pages* bo'limidan `main` branch'ni tanlang.
- **Netlify**: Papkani shunchaki [Netlify Drop](https://app.netlify.com/drop) ga sudrab tashlang.
