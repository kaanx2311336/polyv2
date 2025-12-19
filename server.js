const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Statik dosyaları 'public' klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa yönlendirmesi
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
