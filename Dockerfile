FROM alpine:3.18

# Node.js ve npm'i paket yöneticisinden yükle (Docker Hub yerine Alpine repolarını kullanır)
RUN apk add --no-cache nodejs npm

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
