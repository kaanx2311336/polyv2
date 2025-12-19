-- Veritabanı Oluşturma
CREATE DATABASE IF NOT EXISTS tradeflow;
USE tradeflow;

-- 1. Kullanıcılar Tablosu
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name TEXT,
    email TEXT,
    password_hash TEXT,
    tax_id TEXT,
    phone TEXT,
    credits INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Kategoriler Tablosu
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    parent_id INT DEFAULT NULL
);

-- 3. Talepler Tablosu
CREATE TABLE IF NOT EXISTS requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_no TEXT,
    user_id INT,
    category_id INT,
    
    product_name TEXT,
    quantity TEXT,
    
    -- JSON yerine TEXT olarak tutuyoruz
    details TEXT, 
    
    deadline DATETIME,
    status TEXT DEFAULT 'active', -- active, review, completed, expired
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Teklifler Tablosu
CREATE TABLE IF NOT EXISTS offers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT,
    seller_id INT,
    
    price DECIMAL(15, 2),
    currency TEXT, -- USD, EUR, TL
    unit TEXT, -- Ton, Adet vb.
    
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Kredi İşlem Geçmişi
CREATE TABLE IF NOT EXISTS credit_transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount INT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Başlangıç Verileri (Seed Data)

-- Ana Kategoriler
INSERT INTO categories (id, name, parent_id) VALUES (1, 'ÜRÜNLER', NULL);
INSERT INTO categories (id, name, parent_id) VALUES (2, 'MAKİNELER', NULL);
INSERT INTO categories (id, name, parent_id) VALUES (3, 'HİZMETLER', NULL);
INSERT INTO categories (id, name, parent_id) VALUES (4, 'LOJİSTİK', NULL);

-- Alt Kategoriler
INSERT INTO categories (name, parent_id) VALUES ('Polimerler', 1);
INSERT INTO categories (name, parent_id) VALUES ('Kimyasal Katkı Malzemeleri', 1);
INSERT INTO categories (name, parent_id) VALUES ('Teknik ve Endüstriyel Malzemeler', 1);

INSERT INTO categories (name, parent_id) VALUES ('Yeni Makineler', 2);
INSERT INTO categories (name, parent_id) VALUES ('İkinci El Makineler', 2);
