// Wizard Data & Logic

const categories = {
    polymer: {
        label: "Ürünler",
        subcategories: ["Polimerler", "Kimyasallar", "Endüstriyel Malzemeler", "Boyalar"],
        fields: [
            { id: "product_type", label: "Ürün Cinsi", type: "text", placeholder: "Örn: PVC, PP, PE" },
            { id: "spec", label: "Spesifik Özellik (MFI / K Değeri)", type: "text", placeholder: "Örn: K70, MFI 2-3" },
            { id: "origin", label: "Tercih Edilen Menşei", type: "text", placeholder: "Örn: Avrupa, Uzakdoğu, Petkim" },
            { id: "application", label: "Uygulama Alanı", type: "text", placeholder: "Örn: Kablo, Enjeksiyon, Boru" },
            { id: "quantity", label: "Miktar (Ton/Kg)", type: "number", placeholder: "10" },
            { id: "packaging", label: "Ambalaj Tipi", type: "select", options: ["Bigbag", "25kg Torba", "Dökme / Silobas", "Oktabin"] },
            { id: "status", label: "Ürün Durumu", type: "select", options: ["Hazır Stok", "Yolda / Gelecek", "Üretim Siparişi"] },
            { id: "customs", label: "Gümrük Durumu", type: "select", options: ["Millileşmiş (TR Stok)", "Antrepo", "Yurtdışı (FCA/FOB)"] },
            { id: "location", label: "Teslim Yeri / Depo", type: "text", placeholder: "Örn: İstanbul Avrupa" },
            { id: "payment", label: "Ödeme Yöntemi", type: "select", options: ["Peşin", "30 Gün Vade", "60 Gün Vade", "DBS"] },
            { id: "deadline", label: "Son Teklif Tarihi", type: "date" }
        ]
    },
    machine: {
        label: "Makineler",
        subcategories: ["Enjeksiyon Makineleri", "Ekstrüzyon Hatları", "Geri Dönüşüm Sistemleri", "Yedek Parça"],
        fields: [
            { id: "machine_type", label: "Makine Tipi", type: "text", placeholder: "Örn: Tek Vida Ekstruder" },
            { id: "brand", label: "Marka Tercihi", type: "text", placeholder: "Örn: KraussMaffei, Engel" },
            { id: "capacity", label: "Kapasite / Tonaj", type: "text", placeholder: "Örn: 500kg/saat veya 200 Ton" },
            { id: "condition", label: "Durum", type: "select", options: ["Sıfır", "İkinci El - Az Kullanılmış", "İkinci El - Yenilenmiş"] },
            { id: "year_min", label: "Minimum Model Yılı", type: "number", placeholder: "2015" },
            { id: "budget", label: "Bütçe Aralığı ($)", type: "text", placeholder: "50.000 - 100.000" },
            { id: "location", label: "Teslimat Ülkesi/Şehri", type: "text", placeholder: "Türkiye / İstanbul" },
            { id: "deadline", label: "Son Teklif Tarihi", type: "date" }
        ]
    },
    service: {
        label: "Hizmetler",
        subcategories: ["Fuar ve Organizasyon", "Gümrük Müşavirliği", "Danışmanlık", "Test ve Analiz"],
        fields: [
            { id: "service_detail", label: "Hizmet Detayı", type: "textarea", placeholder: "İhtiyacınızı detaylı açıklayınız..." },
            { id: "date_range", label: "Tarih Aralığı", type: "text", placeholder: "Örn: 10-15 Ekim" },
            { id: "location", label: "Hizmet Yeri", type: "text", placeholder: "Örn: Almanya K Fuarı" },
            { id: "budget", label: "Tahmini Bütçe", type: "text", placeholder: "" }
        ]
    },
    logistics: {
        label: "Lojistik",
        subcategories: ["Karayolu (Yurtiçi)", "Uluslararası Nakliye", "Denizyolu", "Depolama"],
        fields: [
            { id: "from_loc", label: "Çıkış Noktası", type: "text", placeholder: "Şehir/Ülke" },
            { id: "to_loc", label: "Varış Noktası", type: "text", placeholder: "Şehir/Ülke" },
            { id: "load_type", label: "Yük Tipi", type: "select", options: ["Paletli", "Dökme", "Konteyner", "Komple Tır"] },
            { id: "weight", label: "Ağırlık / Hacim", type: "text", placeholder: "24 Ton / 80 m3" },
            { id: "date_ready", label: "Yükleme Tarihi", type: "date" }
        ]
    }
};

let currentData = {};

function updateSubCategories() {
    const category = document.querySelector('input[name="category"]:checked').value;
    const subSelect = document.getElementById('subcategory-select');
    const subs = categories[category].subcategories;

    subSelect.innerHTML = subs.map(sub => `<option value="${sub}">${sub}</option>`).join('');
}

function nextStep(step) {
    if (step === 2) {
        // Collect Step 1 Data
        const categoryKey = document.querySelector('input[name="category"]:checked').value;
        const subCategory = document.getElementById('subcategory-select').value;

        currentData.category = categories[categoryKey].label;
        currentData.subCategory = subCategory;
        currentData.categoryKey = categoryKey;

        // Render Step 2 Form
        renderForm(categoryKey);
    } else if (step === 3) {
        // Collect Step 2 Data
        const inputs = document.querySelectorAll('#dynamic-form input, #dynamic-form select, #dynamic-form textarea');
        let isValid = true;

        inputs.forEach(input => {
            currentData[input.id] = input.value;
            if (input.required && !input.value) isValid = false;
        });

        // Simple validation check (optional)
        // if(!isValid) { alert('Lütfen tüm alanları doldurun.'); return; }

        renderReview();
    }

    // UI Transition
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    // Update Indicators
    document.querySelectorAll('.step-indicator').forEach((el, idx) => {
        if (idx + 1 === step) el.classList.add('active');
        if (idx + 1 < step) el.classList.add('completed');
        if (idx + 1 > step) el.classList.remove('active', 'completed');
    });
}

function prevStep(step) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    document.querySelectorAll('.step-indicator').forEach((el, idx) => {
        if (idx + 1 === step) {
            el.classList.add('active');
            el.classList.remove('completed');
        }
        if (idx + 1 > step) el.classList.remove('active', 'completed');
    });
}

function renderForm(key) {
    const form = document.getElementById('dynamic-form');
    const fields = categories[key].fields;

    let html = '<div class="form-grid">';

    fields.forEach(field => {
        let inputHtml = '';
        if (field.type === 'select') {
            inputHtml = `<select id="${field.id}" class="form-select" style="width:100%; padding:0.8rem; border:1px solid #cbd5e1; border-radius:8px;">
                ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>`;
        } else if (field.type === 'textarea') {
            inputHtml = `<textarea id="${field.id}" class="form-select" rows="3" style="width:100%; padding:0.8rem; border:1px solid #cbd5e1; border-radius:8px;" placeholder="${field.placeholder || ''}"></textarea>`;
        } else {
            inputHtml = `<input type="${field.type}" id="${field.id}" class="form-select" style="width:100%; padding:0.8rem; border:1px solid #cbd5e1; border-radius:8px;" placeholder="${field.placeholder || ''}">`;
        }

        // Full width for textarea
        const colClass = field.type === 'textarea' ? 'grid-column: span 2;' : '';

        html += `
            <div class="form-group" style="${colClass}">
                <label style="display:block; margin-bottom:0.5rem; font-weight:500; color:#334155;">${field.label}</label>
                ${inputHtml}
            </div>
        `;
    });

    html += '</div>';
    form.innerHTML = html;
}

function renderReview() {
    const container = document.getElementById('review-content');
    const fields = categories[currentData.categoryKey].fields;

    let html = `<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem;">
        <div><strong>Kategori:</strong> ${currentData.category}</div>
        <div><strong>Alt Kategori:</strong> ${currentData.subCategory}</div>
        <hr style="grid-column: span 2; border: 0; border-top: 1px solid #e2e8f0; margin: 0.5rem 0;">`;

    fields.forEach(field => {
        let val = currentData[field.id];
        if (val) {
            html += `<div><strong style="color:#64748b; font-size:0.9rem;">${field.label}:</strong> <br> ${val}</div>`;
        }
    });

    html += `</div>`;
    container.innerHTML = html;
}

function submitRequest() {
    // Here we would send data to backend...
    alert('Talebiniz başarıyla oluşturuldu ve onay için moderatöre iletildi.\n\n(Simülasyon: 1 Kredi hesabınızdan düşüldü)');
    // Redirect to market or dashboard
    window.location.href = 'market.html';
}
