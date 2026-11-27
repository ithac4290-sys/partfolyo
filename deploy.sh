#!/bin/bash
set -e

echo "🔄 GitHub dan eng so'nggi o'zgarishlar tortib olinmoqda..."
cd /var/www/mirzayev-jahongir.uz
git pull origin main

echo "⚙️ Golang backend qayta tekshirilmoqda va kompilyatsiya qilinmoqda..."
cd backend
go build -o server main.go
cd ..

echo "🔄 PM2 xizmati yangilanmoqda..."
pm2 restart jahongircode-backend || pm2 start ecosystem.config.js
pm2 save

echo "🔄 Nginx qayta ishga tushirilmoqda..."
sudo systemctl reload nginx

echo "✅ Barcha o'zgarishlar muvaffaqiyatli yangilandi va PM2 faol!"
