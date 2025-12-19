# Proje Yapılacaklar Listesi (To-Do List)

## 1. Temel Kurulum ve Arayüz Tasarımı (Frontend)
- [x] **Proje Yapısı**: HTML, CSS, ve JS dosyalarının oluşturulması.
- [x] **Ana Sayfa (Landing Page)**: 
    - Hero bölümü (Slogan ve çağrı butonu).
    - Kategorilerin görsel olarak listelenmesi (Ürünler, Makineler, Hizmetler, Lojistik).
    - "Nasıl Çalışır?" bölümü.
    - (YENİ) Canlı Piyasa Tablosu ve Ticker.
- [x] **Global Stil Dosyası**: Modern renk paleti, tipografi ve düzen (CSS).

## 2. Kullanıcı Paneli ve Pazar Yeri
- [x] **Giriş/Kayıt Ekranları**: Login ve Register HTML sayfaları.
- [x] **Pazar Yeri (Marketplace)**: (YENİ - Polymerio'dan Esinlenildi)
    - Döviz kurları (Ticker).
    - Gelişmiş Filtreleme (Hızlı butonlar ve Search).
    - Detaylı Ürün Tablosu (Menşei, MFI, Depo durumu).
- [x] **Panel Düzeni**: Sidebar (yan menü) ve Header yapısı.

## 3. Veritabanı ve Backend
- [x] **Veritabanı Şeması**: Basitleştirilmiş tablo yapısı (Foreign Key yok, TEXT ağırlıklı).
- [x] **SQL Dosyası**: `schema.sql` hazır.

## 4. Talep ve Teklif Yönetimi (Core Features)
- [x] **Talep Oluşturma Sihirbazı**:
    - [x] Kategori seçimi (Ürünler, Makineler, Hizmetler, Lojistik).
    - [x] Dinamik formlar (Örn: PVC için 'Menşei', 'Miktar', 'MFI').
    - [x] Özet ekranı ve onay butonu.
- [x] **Talepleri Listeleme**: `market.html` sayfası bu işlevi görüyor.
- [ ] **Teklif Verme Ekranı**: Satıcıların gelen talebe fiyat girdiği ekran.
    - `market.html` üzerinden "Teklif Ver" butonuna bağlanacak.

## 5. Kredi ve Ödeme Sistemi
- [ ] **Kredi Paketleri Sayfası**: 10, 20, 50 Kredi paketlerinin gösterimi ve satın alma butonu.
- [ ] **Bakiye Kontrolü**: İşlem yapmadan önce kredi kontrolü simülasyonu.

## 6. Yazılım ve Mantık (JavaScript Simulation)
- [x] **Veri Yapıları**: Kategori ve form verileri `wizard.js` içinde tanımlandı.
- [x] **Etkileşimler**: Butonlara tıklayınca formların açılması, verilerin listeye eklenmesi (Simülasyon).

## 7. Gelişmiş Admin Paneli (YENİ)
- [ ] **Admin Dashboard (Genel Bakış)**:
    - Toplam Üye, Aktif İlan, Günlük İşlem Hacmi grafikleri.
    - Onay bekleyen üyeler ve ilanlar için özet kartlar.
- [ ] **Üye Yönetimi (CRM)**:
    - Üye listesi, detay görüntüleme, Bloklama/Aktif etme.
    - Kurumsal üyelik (Vergi No) doğrulama onay mekanizması.
- [ ] **Piyasa Yönetimi**:
    - **Ticker Yönetimi**: Ana sayfadaki Döviz/Hammadde fiyatlarını manuel güncelleme ya da API bağlama ayarı.
    - **Market İlan Yönetimi**: Hatalı veya yasaklı ilanları silme/düzenleme.
- [ ] **Kategori ve Form Yönetimi**:
    - Dinamik form yapısı için kategori bazlı alan (Menşei, MFI vb.) ekleme/çıkarma.
- [ ] **Finans ve Kredi Yönetimi**:
    - Kullanıcılara manuel kredi tanımlama (EFT/Havale kontrolü sonrası).
    - Geçmiş kredi harcama loglarını izleme.
- [ ] **Site Ayarları**:
    - Logo, iletişim bilgileri, SEO başlıkları düzenleme.
    - "Duyuru" bandı oluşturma.
