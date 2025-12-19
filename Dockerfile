FROM node:18-slim

# Çalışma dizinini oluştur
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# Tüm kaynak kodunu kopyala
COPY . .

# Uygulamanın çalışacağı portu belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "server.js"]
