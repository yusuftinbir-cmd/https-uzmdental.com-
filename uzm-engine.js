
/* === UZM-0LLM-YAMA-2043: ?lang= HTML LANG & RTL SENKRONU === */
(function () {
  try {
    var params = new URLSearchParams(window.location.search || "");
    var rawLang = (params.get("lang") || "").toLowerCase().trim();
    var validLangs = { tr: "tr", en: "en", ar: "ar", zh: "zh", "zh-cn": "zh" };
    if (rawLang && validLangs[rawLang]) {
      var targetLang = validLangs[rawLang];
      document.documentElement.setAttribute("lang", targetLang);
      document.documentElement.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");
      try { localStorage.setItem("uzm_lang", targetLang); } catch (e) {}
    }
  } catch (err) {}
})();


/* === GROK-1104-1954-UZM-V2-OTONOM-OLCUM: ?lang= HTML LANG & RTL SENKRONU === */
(function () {
  try {
    var params = new URLSearchParams(window.location.search || "");
    var rawLang = (params.get("lang") || "").toLowerCase().trim();
    var validLangs = { tr: "tr", en: "en", ar: "ar", zh: "zh", "zh-cn": "zh" };
    if (rawLang && validLangs[rawLang]) {
      var targetLang = validLangs[rawLang];
      document.documentElement.setAttribute("lang", targetLang);
      document.documentElement.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");
      try { localStorage.setItem("uzm_lang", targetLang); } catch (e) {}
    }
  } catch (err) {}
})();

(function () {
  'use strict';

    var INITIAL_GOKHAN_NOTES = [];
  var BLOG_POSTS = [
  {
    "title": "Zirkonya Disk Seçerken Nelere Dikkat Edilmeli?",
    "cat": "Zirkonya Diskler · 4 dk okuma",
    "img": "/uploads/uzm_zircrown_5d_ml_disc.png",
    "summary": "Dayanım, translüsensi ve restorasyon türüne göre doğru zirkonya seçiminin temel kriterleri."
  },
  {
    "title": "Paper Point Seçiminde ISO Renk Kodlarının Önemi",
    "cat": "Endodontik Ürünler · 4 dk okuma",
    "img": "/uploads/uzm_pp_02_taper_box.png",
    "summary": "Kanal ölçüsüne uygun paper point seçimi, tedavi başarısını doğrudan etkiler."
  },
  {
    "title": "PMMA Disklerde Katman Yapısı Ne Anlama Gelir?",
    "cat": "PMMA Diskler · 4 dk okuma",
    "img": "/uploads/pmma_brosur_2026/uzm_pmma_monolayer.png",
    "summary": "Multilayer PMMA disklerin estetik ve dayanıklılık açısından sunduğu avantajlar."
  },
  {
    "title": "UZM Dental Yeni Üretim Hattını Devreye Aldı",
    "cat": "Şirket Haberleri · 4 dk okuma",
    "img": "/images/uretim.png",
    "summary": "Artan talebe yanıt vermek için üretim kapasitemizi genişlettik."
  },
  {
    "title": "CIP Soğuk İzostatik Pres ve Parti/LOT İzlenebilirliğinin Dental Bloklardaki Rolü",
    "cat": "Üretim & Mühendislik · 4 dk okuma",
    "img": "/images/products/studio_40/IMG_7256.jpg",
    "summary": "CIP homojen yoğunluk teknolojisi ve parti/lot bazlı üretim takibinin CAD/CAM restorasyon uyumuna katkısı."
  },
  {
    "title": "Dental Depo ve Bayilerle İş Birliği Nasıl İşliyor?",
    "cat": "Distribütörlük · 4 dk okuma",
    "img": "/images/products/studio_40/IMG_7207.jpg",
    "summary": "Bayilik ve distribütörlük süreçlerinde dikkat edilmesi gereken noktalar."
  }
];
  var PARTNERS = [
  {
    "num": "01",
    "title": "Diş Deposu ve Distribütörler",
    "desc": "Bölgesel veya ulusal ölçekte faaliyet gösteren dental depolar için düzenli ürün tedariki sağlıyoruz."
  },
  {
    "num": "02",
    "title": "CAD/CAM Kazıma Merkezleri ve Laboratuvarlar",
    "desc": "Yüksek hacimli üretim yapan laboratuvarlara özel çözümler sunuyoruz."
  },
  {
    "num": "03",
    "title": "Klinik ve Poliklinikler",
    "desc": "Kurumsal klinik grupları için toplu tedarik ve ürün standardizasyonu çözümleri."
  },
  {
    "num": "04",
    "title": "Kamu Kurumları",
    "desc": "Kamu hastaneleri, üniversiteler ve resmi kurumların kurumsal tedarik süreçlerine uygun ürün ve teknik doküman desteği sunuyoruz."
  }
];
  var PRODUCTS = [
  {
    "id": "5d-ml",
    "sku": "5D-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · 5D-ML",
    "specBadge": "650–950 MPa · %47–60",
    "title": "ZirCrown 5D-ML (Ustaların Tercihi — 10 Katmanlı Multilayer Zirkonya)",
    "sub": "Daha fazla katman, daha doğal geçiş. %47–60 translüsensi, 650–950 MPa bükülme dayanımı ve 10 katmanlı multilayer yapısıyla servikalden insizale doğal renk derinliği ve ışık geçişi sunar (Ustaların Tercihi).",
    "img": "/images/products/studio_40/IMG_7256.jpg",
    "gallery": [
      "/images/products/studio_40/IMG_7256.jpg",
      "/uploads/uzm_zircrown_sinterleme_egrisi.png"
    ],
    "variants": [
      "98 mm CAD/CAM",
      "95 mm Sistemler",
      "Amann Girrbach (AG)",
      "10–25 mm",
      "VITA A1–D4 + BL1–BL4"
    ],
    "specs": {
      "Ürün Serisi & Slogan": "ZirCrown® 5D-ML (Ustaların Tercihi) — Daha Fazla Katman, Daha Doğal Geçiş",
      "Işık Geçirgenliği (Translüsensi)": "%47–%60 (10 Katmanlı Gradyan Geçiş · %47–%60 Klinik Aralık)",
      "Bükülme Dayanımı": "650 – 950 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
      "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm (AG) · Sirona · VITA 16 + BL1/BL2/BL3/BL4",
      "Klinik Endikasyon": "Anterior Kron, Lamina/Veneer, İnlay/Onlay, 3 Üyeye Kadar Estetik Köprü & İmplant Üstü",
      "Resmi Katalog Broşürü": "ZirCrown broşürü / ürün dokümanı (PDF)",
      "Tescilli Marka & Üretici": "ZirCrown® (UZMDental Tescilli Markası) · Üretici: Hangzhou UZM Dental Medical Devices Co., Ltd. (Kurucu: Yao Cheng)",
      "AB Yetkili Temsilcisi": "UZM Dental Ar-Ge GmbH (Münih, Almanya)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü, Uluslararası Kalite kapsamındaki kayıtları ve Lot/Seri İzlenebilirlik Kaydı",
      "Sinterleme Protokolü": "3D-Pro 1500°C / ST-ML & ML 1530°C · <3 Üye 7 Saat · 4–6 Üye 7 Saat · >7 Üye 15 Saat · <80°C Fırın Açma",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME EĞRİSİ (IFU — ZirCrown broşürü / ürün dokümanı): 98 mm, 95 mm, 92×75 mm (AG) ve Sirona CAD/CAM sistemlerinde kuru kazıma yapılır. Sinterleme: 3 üyeden az köprülerde 7 saat (1. aşama 10°C/dk → 900°C 20 dk bekleme → 2. aşama 5°C/dk → 3D-Pro için 1500°C / ST-ML için 1530°C tepe sıcaklıkta 2 saat bekleme); 4–6 üyeli köprülerde 7 saat (5°C/dk ve 3°C/dk); 7 üyeden fazla köprülerde 15 saat (4–5°C/dk ve 2°C/dk). Termal şoku önlemek için fırın sıcaklığı 80°C'nin altına düştükten sonra fırını açın.",
    "certs": [
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "Üretici Teknik Veri Föyü",
      "Uluslararası Kalite Kapsamındaki Kayıtlar",
      "98mm Açık Sistem Uyumluluğu",
      "UZM Dental Ar-Ge GmbH (AB Temsilcisi)",
      "IFU & Sinterleme Eğrisi"
    ],
    "brochureUrl": "/assets/uzm-zircrown-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-zircrown-brosur-2026.pdf"
  },
  {
    "id": "4d-ml",
    "sku": "4D-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · 4D-ML",
    "specBadge": "700–1000 MPa · %45–59",
    "title": "ZirCrown 4D-ML (Estetikten Vazgeçmeden Ekstra Güç)",
    "sub": "Estetikten vazgeçmeden, ihtiyaç duyduğunuz ekstra güç. %45–59 translüsensi ve 700–1000 MPa dayanım aralığıyla beş katman sıralı ve dokuz katman kademeli geçiş sunar; ön bölge kron ve köprüler için geliştirilmiştir.",
    "img": "/images/products/studio_40/IMG_7253.jpg",
    "gallery": [
      "/images/products/studio_40/IMG_7253.jpg",
      "/uploads/uzm_zircrown_sinterleme_egrisi.png"
    ],
    "variants": [
      "98 mm CAD/CAM",
      "95 mm Sistemler",
      "Amann Girrbach (AG)",
      "10–25 mm",
      "VITA A1–D4 + BL1–BL4"
    ],
    "specs": {
      "Ürün Serisi & Slogan": "ZirCrown® 4D-ML — Estetiğin Daha Fazla Güce İhtiyaç Duyduğu Yerde",
      "Işık Geçirgenliği (Translüsensi)": "%45–%59 (5 Katman Sıralı / 9 Katman Kademeli Geçiş)",
      "Bükülme Dayanımı": "700 – 1000 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
      "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm (AG) · Sirona · VITA 16 + BL1/BL2/BL3/BL4",
      "Klinik Endikasyon": "Anterior Kron, Gövdeli Ön Bölge Restorasyonlar, 3 Üyeli Köprü, İnlay/Onlay",
      "Resmi Katalog Broşürü": "ZirCrown broşürü / ürün dokümanı (PDF)",
      "Tescilli Marka & Üretici": "ZirCrown® (UZMDental Tescilli Markası) · Üretici: Hangzhou UZM Dental Medical Devices Co., Ltd. (Kurucu: Yao Cheng)",
      "AB Yetkili Temsilcisi": "UZM Dental Ar-Ge GmbH (Münih, Almanya)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü, Uluslararası Kalite kapsamındaki kayıtları ve Lot/Seri İzlenebilirlik Kaydı",
      "Sinterleme Protokolü": "3D-Pro 1500°C / ST-ML & ML 1530°C · <3 Üye 7 Saat · 4–6 Üye 7 Saat · >7 Üye 15 Saat · <80°C Fırın Açma",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME EĞRİSİ (IFU — ZirCrown broşürü / ürün dokümanı): 98 mm, 95 mm, 92×75 mm (AG) ve Sirona CAD/CAM sistemlerinde kuru kazıma yapılır. Sinterleme: 3 üyeden az köprülerde 7 saat (1. aşama 10°C/dk → 900°C 20 dk bekleme → 2. aşama 5°C/dk → 3D-Pro için 1500°C / ST-ML için 1530°C tepe sıcaklıkta 2 saat bekleme); 4–6 üyeli köprülerde 7 saat (5°C/dk ve 3°C/dk); 7 üyeden fazla köprülerde 15 saat (4–5°C/dk ve 2°C/dk). Termal şoku önlemek için fırın sıcaklığı 80°C'nin altına düştükten sonra fırını açın.",
    "certs": [
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "Üretici Teknik Veri Föyü",
      "Uluslararası Kalite Kapsamındaki Kayıtlar",
      "98mm Açık Sistem Uyumluluğu",
      "UZM Dental Ar-Ge GmbH (AB Temsilcisi)",
      "IFU & Sinterleme Eğrisi"
    ],
    "brochureUrl": "/assets/uzm-zircrown-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-zircrown-brosur-2026.pdf"
  },
  {
    "id": "3d-pro",
    "sku": "3D-PRO",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · 3D-PRO",
    "specBadge": "800–1200 MPa · %43–57",
    "title": "ZirCrown 3D-PRO (Gücün Başladığı, Estetiğin Yükseldiği Teknoloji)",
    "sub": "Gücün gerektiği yerde güçlü, estetiğin gerektiği yerde doğal. 800–1200 MPa dayanım ve %43–57 translüsensi değerlerini aynı diskte buluşturur; servikalde mekanik destek, insizalde doğal ışık geçirgenliği sağlar.",
    "img": "/images/products/studio_40/IMG_7265.jpg",
    "gallery": [
      '/images/products/studio_40/IMG_7265.jpg',
      "/uploads/uzm_zircrown_sinterleme_egrisi.png"
    ],
    "variants": [
      "98 mm CAD/CAM",
      "95 mm Sistemler",
      "Amann Girrbach (AG)",
      "10–25 mm",
      "VITA A1–D4 + BL1–BL4"
    ],
    "specs": {
      "Ürün Serisi & Slogan": "ZirCrown® 3D-PRO — Gücün Başladığı, Estetiğin Yükseldiği Katmanlı Teknoloji",
      "Işık Geçirgenliği (Translüsensi)": "%43–%57 (İnsizale Doğru Kontrollü Artan Işık Geçirgenliği)",
      "Bükülme Dayanımı": "800–1200 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
      "Kimyasal Bileşim": "Y₂O₃ %5.5–9.5 · Al₂O₃ %0.05 · SiO₂ ≤%0.002 · Fe₂O₃ ≤%0.002 · Monoklinik Faz <%25",
      "Klinik Endikasyon": "Tek Kron, Posterior Restorasyon, Çok Üyeli Köprü, Full-Arch & İmplant Abutment",
      "Resmi Katalog Broşürü": "ZirCrown broşürü / ürün dokümanı (PDF)",
      "Tescilli Marka & Üretici": "ZirCrown® (UZMDental Tescilli Markası) · Üretici: Hangzhou UZM Dental Medical Devices Co., Ltd. (Kurucu: Yao Cheng)",
      "AB Yetkili Temsilcisi": "UZM Dental Ar-Ge GmbH (Münih, Almanya)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü, Uluslararası Kalite kapsamındaki kayıtları ve Lot/Seri İzlenebilirlik Kaydı",
      "Sinterleme Protokolü": "3D-Pro 1500°C / ST-ML & ML 1530°C · <3 Üye 7 Saat · 4–6 Üye 7 Saat · >7 Üye 15 Saat · <80°C Fırın Açma",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME EĞRİSİ (IFU — ZirCrown broşürü / ürün dokümanı): 98 mm, 95 mm, 92×75 mm (AG) ve Sirona CAD/CAM sistemlerinde kuru kazıma yapılır. Sinterleme: 3 üyeden az köprülerde 7 saat (1. aşama 10°C/dk → 900°C 20 dk bekleme → 2. aşama 5°C/dk → 3D-Pro için 1500°C / ST-ML için 1530°C tepe sıcaklıkta 2 saat bekleme); 4–6 üyeli köprülerde 7 saat (5°C/dk ve 3°C/dk); 7 üyeden fazla köprülerde 15 saat (4–5°C/dk ve 2°C/dk). Termal şoku önlemek için fırın sıcaklığı 80°C'nin altına düştükten sonra fırını açın.",
    "certs": [
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "Üretici Teknik Veri Föyü",
      "Uluslararası Kalite Kapsamındaki Kayıtlar",
      "98mm Açık Sistem Uyumluluğu",
      "UZM Dental Ar-Ge GmbH (AB Temsilcisi)",
      "IFU & Sinterleme Eğrisi"
    ],
    "brochureUrl": "/assets/uzm-zircrown-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-zircrown-brosur-2026.pdf"
  },
  {
    "id": "3d-ml",
    "sku": "3D-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · 3D-ML",
    "specBadge": "900–1200 MPa · %43–46",
    "title": "ZirCrown 3D-ML (Estetik Geçişler, Güçlü Altyapı, Tasarım Özgürlüğü)",
    "sub": "Dayanımın ön planda olduğu, estetiğin multilayer yapıyla desteklendiği güçlü çözüm. %43–46 kontrollü translüsensi ve 900–1200 MPa dayanımıyla beş katmanlı kaplama, dokuz katmanlı gradyan sunar.",
    "img": "/images/products/studio_40/IMG_7207.jpg",
    "gallery": [
      "/images/products/studio_40/IMG_7207.jpg",
      "/uploads/uzm_zircrown_sinterleme_egrisi.png"
    ],
    "variants": [
      "98 mm CAD/CAM",
      "95 mm Sistemler",
      "Amann Girrbach (AG)",
      "10–25 mm",
      "VITA A1–D4 + BL1–BL4"
    ],
    "specs": {
      "Ürün Serisi & Slogan": "ZirCrown® 3D-ML — Estetik Geçişler. Güçlü Altyapı. Daha Fazla Tasarım Özgürlüğü.",
      "Işık Geçirgenliği (Translüsensi)": "%43–%46 (5 Katmanlı Kaplama / 9 Katmanlı Gradyan)",
      "Bükülme Dayanımı": "900 – 1200 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
      "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm (AG) · Sirona · VITA 16 + BL1/BL2/BL3/BL4",
      "Klinik Endikasyon": "Posterior Restorasyonlar, Uzun Açıklıklı Köprüler & Düşük Dikey Mesafeli Vakalar",
      "Resmi Katalog Broşürü": "ZirCrown broşürü / ürün dokümanı (PDF)",
      "Tescilli Marka & Üretici": "ZirCrown® (UZMDental Tescilli Markası) · Üretici: Hangzhou UZM Dental Medical Devices Co., Ltd. (Kurucu: Yao Cheng)",
      "AB Yetkili Temsilcisi": "UZM Dental Ar-Ge GmbH (Münih, Almanya)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü, Uluslararası Kalite kapsamındaki kayıtları ve Lot/Seri İzlenebilirlik Kaydı",
      "Sinterleme Protokolü": "3D-Pro 1500°C / ST-ML & ML 1530°C · <3 Üye 7 Saat · 4–6 Üye 7 Saat · >7 Üye 15 Saat · <80°C Fırın Açma",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME EĞRİSİ (IFU — ZirCrown broşürü / ürün dokümanı): 98 mm, 95 mm, 92×75 mm (AG) ve Sirona CAD/CAM sistemlerinde kuru kazıma yapılır. Sinterleme: 3 üyeden az köprülerde 7 saat (1. aşama 10°C/dk → 900°C 20 dk bekleme → 2. aşama 5°C/dk → 3D-Pro için 1500°C / ST-ML için 1530°C tepe sıcaklıkta 2 saat bekleme); 4–6 üyeli köprülerde 7 saat (5°C/dk ve 3°C/dk); 7 üyeden fazla köprülerde 15 saat (4–5°C/dk ve 2°C/dk). Termal şoku önlemek için fırın sıcaklığı 80°C'nin altına düştükten sonra fırını açın.",
    "certs": [
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "Üretici Teknik Veri Föyü",
      "Uluslararası Kalite Kapsamındaki Kayıtlar",
      "98mm Açık Sistem Uyumluluğu",
      "UZM Dental Ar-Ge GmbH (AB Temsilcisi)",
      "IFU & Sinterleme Eğrisi"
    ],
    "brochureUrl": "/assets/uzm-zircrown-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-zircrown-brosur-2026.pdf"
  },
  {
    "id": "st-ml",
    "sku": "ST-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · ST-ML",
    "specBadge": "1200 MPa · %43",
    "title": "ZirCrown ST-ML (Katmanlarda Doğal Geçiş, Her Seviyede Aynı Güç)",
    "sub": "Gücün her katmanda korunduğu, estetiğin doğal geçişlerle tamamlandığı zirkonya. %43 kontrollü translüsensi ve katmanlar boyunca korunan 1200 MPa homojen bükülme dayanımıyla maliyet etkinliğinin kralıdır.",
    "img": "/images/products/studio_40/IMG_7230.jpg?v=20261104-sinter",
    "gallery": [
      "/images/products/studio_40/IMG_7230.jpg?v=20261104-sinter",
      "/uploads/uzm_zircrown_sinterleme_egrisi.png"
    ],
    "variants": [
      "98 mm CAD/CAM",
      "95 mm Sistemler",
      "Amann Girrbach (AG)",
      "10–25 mm",
      "VITA A1–D4 + BL1–BL4"
    ],
    "specs": {
      "Ürün Serisi & Slogan": "ZirCrown® ST-ML — Katmanlarda Doğal Geçiş, Her Seviyede Aynı Güç",
      "Işık Geçirgenliği (Translüsensi)": "%43 Kontrollü Translüsensi (Dengeli Maskeleme & Doğal Geçiş)",
      "Bükülme Dayanımı": "1200 MPa Homojen Dayanım (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
      "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm (AG) · Sirona · VITA 16 + BL1/BL2/BL3/BL4",
      "Klinik Endikasyon": "Günlük Monolitik Kron, Köprü, İmplant Tam Kron, İmplant Abutment & Altyapı",
      "Resmi Katalog Broşürü": "ZirCrown broşürü / ürün dokümanı (PDF)",
      "Tescilli Marka & Üretici": "ZirCrown® (UZMDental Tescilli Markası) · Üretici: Hangzhou UZM Dental Medical Devices Co., Ltd. (Kurucu: Yao Cheng)",
      "AB Yetkili Temsilcisi": "UZM Dental Ar-Ge GmbH (Münih, Almanya)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü, Uluslararası Kalite kapsamındaki kayıtları ve Lot/Seri İzlenebilirlik Kaydı",
      "Sinterleme Protokolü": "3D-Pro 1500°C / ST-ML & ML 1530°C · <3 Üye 7 Saat · 4–6 Üye 7 Saat · >7 Üye 15 Saat · <80°C Fırın Açma",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME EĞRİSİ (IFU — ZirCrown broşürü / ürün dokümanı): 98 mm, 95 mm, 92×75 mm (AG) ve Sirona CAD/CAM sistemlerinde kuru kazıma yapılır. Sinterleme: 3 üyeden az köprülerde 7 saat (1. aşama 10°C/dk → 900°C 20 dk bekleme → 2. aşama 5°C/dk → 3D-Pro için 1500°C / ST-ML için 1530°C tepe sıcaklıkta 2 saat bekleme); 4–6 üyeli köprülerde 7 saat (5°C/dk ve 3°C/dk); 7 üyeden fazla köprülerde 15 saat (4–5°C/dk ve 2°C/dk). Termal şoku önlemek için fırın sıcaklığı 80°C'nin altına düştükten sonra fırını açın.",
    "certs": [
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "Üretici Teknik Veri Föyü",
      "Uluslararası Kalite Kapsamındaki Kayıtlar",
      "98mm Açık Sistem Uyumluluğu",
      "UZM Dental Ar-Ge GmbH (AB Temsilcisi)",
      "IFU & Sinterleme Eğrisi"
    ],
    "brochureUrl": "/assets/uzm-zircrown-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-zircrown-brosur-2026.pdf"
  },
{
    "id": "ut",
    "sku": "UT",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · UT",
    "specBadge": "650 MPa · %60",
    "title": "ZirCrown UT (Ultra Translucent Beyaz Zirkonya)",
    "sub": "Kristal berraklığında yeşim benzeri parlaklık. %60 ultra translüsensi ve 650 MPa bükülme dayanımıyla anterior bölgede yüksek estetik restorasyonlar için ideal beyaz zirkonya.",
    "img": "/uploads/uzm_zircrown_ut_disc.png",
    "gallery": [
        "/uploads/uzm_zircrown_ut_disc.png",
        "/uploads/zirkon_kartlari/ut-sinter-curve-web.png",
        "/uploads/zirkon_kartlari/ut-spec-web.png"
    ],
    "variants": [
        "98 mm CAD/CAM",
        "95 mm Sistemler",
        "92×75 mm",
        "Sirona Sistemi",
        "10–25 mm",
        "Beyaz (White)"
    ],
    "specs": {
        "Ürün Serisi": "ZirCrown® UT (Ultra Translucent)",
        "Işık Geçirgenliği": "%60 Ultra Translucent (Kristal Berraklığı & Yeşim Parlaklığı)",
        "Bükülme Dayanımı": "650 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
        "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm · Sirona Sistemi",
        "Klinik Endikasyon": "Ön Bölge Kron, Lamina/Veneer, İnlay/Onlay",
        "Sinterleme Protokolü": "1530°C Pik Sıcaklık · 2 Saat Bekleme · Sinterleme Eğrisi Mevcut",
        "QR Kod": "Kutu & Etiket Üzerinde Zirkonyum Teknik Katalog QR Kodu"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME: 98 mm, 95 mm, 92×75 mm ve Sirona sistemlerinde kuru frezeleme yapılır. 1530°C tepe sıcaklıkta 120 dakika sinterleme uygulanır. Fırın sıcaklığı 80°C altına inmeden açılmamalıdır.",
    "certs": [
        "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
        "ISO 13485 Tıbbi Cihaz Kalite Yönetim Sistemi",
        "CE & FDA Sertifikasyonu",
        "Türkiye ÜTS Kayıtlı"
    ],
    "sinterCurveUrl": "/uploads/zirkon_kartlari/ut-sinter-curve-web.png",
    "sinterCurveHiRes": "/uploads/zirkon_kartlari/ut-sinter-curve.png",
    "specCardUrl": "/uploads/zirkon_kartlari/ut-spec-web.png",
    "specCardHiRes": "/uploads/zirkon_kartlari/ut-spec.png",
    "qrUrl": "/uploads/qr/uzm-dental-zirkonyum.svg"
},
    {
    "id": "monolayer",
    "sku": "PMMA-MONO",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "uzm-endo",
    "brandKey": "uzm-endo",
    "brandName": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti / UZM Dental)",
    "brandLogo": "/images/brand-1.png",
    "category": "pmma",
    "cat": "pmma",
    "catLabel": "UZM DENTAL · PMMA-MONO",
    "specBadge": "98 / 95 / AG · A1, A2, BL3",
    "title": "Monolayer PMMA Disc (Günlük CAD/CAM Restorasyonları)",
    "sub": "Günlük CAD/CAM Restorasyonları İçin Güvenilir Performans. Homojen renk dağılımı ve dengeli mekanik dayanımı ile geçici kron ve köprü restorasyonlarında hızlı kazıma ve kolay polisaj sunar (98 / 95 / AG · A1, A2, BL3).",
    "img": "/uploads/pmma_brosur_2026/uzm_pmma_monolayer.png",
    "gallery": [
      "/uploads/pmma_brosur_2026/uzm_pmma_monolayer.png",
      "/uploads/pmma_brosur_2026/uzm_pmma_kutu_kapak.png"
    ],
    "variants": [
      "98×16 mm",
      "98×18 mm",
      "98×20 mm",
      "98×30 mm",
      "95×18 mm",
      "AG×18 mm",
      "Renk: A1, A2, BL3"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental 2026 — Monolayer PMMA Discs",
      "Mekanik & Fiziksel Özellikler": "Eğilme Dayanımı ≥100 MPa · Yoğunluk 1.35–1.45 g/cm³ · Sertlik 85–90 Shore · Su Emilimi <0.04% · PMMA >%99",
      "Ölçü Seçenekleri": "98×16, 98×18, 98×20, 98×30, 95×18, AG×18 mm",
      "Sistem Uyumu": "98 mm CAD/CAM · 95 mm · Amann Girrbach (AG)",
      "Renk Seçenekleri": "A1, A2, BL3 (Homojen Renk Dağılımı)",
      "Klinik Endikasyon": "Kısa ve Orta Süreli Geçici Kron & Köprü Restorasyonları",
      "Resmi Katalog Broşürü": "UZM Dental 2026 PMMA ürün dokümanı (PDF)",
      "Üretim & İş Modeli": "Güvenilir Kurumsal Üretimi (UZM Dental / ZirCrown)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü ve Lot/Seri İzlenebilirlik Kaydı",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti / UZM Dental)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL 2026 PMMA BROŞÜRÜ · GÜVENİLİR Kurumsal ÜRETİMİ): 98 mm açık CAD/CAM sistemleri, 95 mm ve Amann Girrbach (AG) kazıma cihazlarında soğuk frezeleme yapılır. Tesviye sonrası düşük devirde silikon lastik ve keçe ile yüksek parlaklıkta polisaj uygulanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "CIP Soğuk İzostatik Pres / Homojen Blok",
      "IFU (2026 PMMA Broşürü)",
      "MSDS (Güvenlik Bilgi Formu)",
      "98mm Açık Sistem Uyumluluğu"
    ],
    "brochureUrl": "/assets/uzm-pmma-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-pmma-brosur-2026.pdf"
  },
{
    "id": "ut-c",
    "sku": "UT-C",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · UT-C",
    "specBadge": "650 MPa · %60",
    "title": "ZirCrown UT-C (Pre-shaded Ultra Translucent Renkli)",
    "sub": "Önceden renklendirilmiş ultra translüsent zirkonya. %60 translüsensi, 650 MPa dayanım ve Vita 16 + BL renkleriyle estetik anterior restorasyonlar için doğal canlılık.",
    "img": "/uploads/uzm_zircrown_ut_c_disc.png",
    "gallery": [
        "/uploads/uzm_zircrown_ut_c_disc.png",
        "/uploads/zirkon_kartlari/ut-c-sinter-curve-web.png",
        "/uploads/zirkon_kartlari/ut-c-spec-web.png"
    ],
    "variants": [
        "98 mm CAD/CAM",
        "95 mm Sistemler",
        "92×75 mm",
        "Sirona Sistemi",
        "10–25 mm",
        "BL1/BL2/BL3/BL4 & Vita 16 Renk"
    ],
    "specs": {
        "Ürün Serisi": "ZirCrown® UT-C (Pre-shaded Ultra Translucent)",
        "Işık Geçirgenliği": "%60 Ultra Translucent",
        "Bükülme Dayanımı": "650 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
        "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm · Sirona",
        "Renk Seçenekleri": "BL1, BL2, BL3, BL4 & VITA Classical 16 Renk",
        "Klinik Endikasyon": "Ön Bölge Estetik Kron, İnlay, Onlay, Veneer",
        "Sinterleme Protokolü": "1530°C Pik Sıcaklık · 2 Saat Bekleme",
        "QR Kod": "Kutu & Etiket Üzerinde Zirkonyum Teknik Katalog QR Kodu"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME: Açık CAD/CAM freze sistemlerinde kuru işleme uygundur. 1530°C pik sıcaklıkta 120 dakika sinterleme yapılır. Termal şok önlemi için 80°C altında fırın kapağı açılmalıdır.",
    "certs": [
        "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
        "ISO 13485 Tıbbi Cihaz Kalite Yönetim Sistemi",
        "CE & FDA Sertifikasyonu",
        "Türkiye ÜTS Kayıtlı"
    ],
    "sinterCurveUrl": "/uploads/zirkon_kartlari/ut-c-sinter-curve-web.png",
    "sinterCurveHiRes": "/uploads/zirkon_kartlari/ut-c-sinter-curve.png",
    "specCardUrl": "/uploads/zirkon_kartlari/ut-c-spec-web.png",
    "specCardHiRes": "/uploads/zirkon_kartlari/ut-c-spec.png",
    "qrUrl": "/uploads/qr/uzm-dental-zirkonyum.svg"
},
    {
    "id": "multilayer-pmma-disc",
    "sku": "PMMA-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "uzm-endo",
    "brandKey": "uzm-endo",
    "brandName": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti / UZM Dental)",
    "brandLogo": "/images/brand-1.png",
    "category": "pmma",
    "cat": "pmma",
    "catLabel": "UZM DENTAL · PMMA-ML",
    "specBadge": "98 / 95 / AG · A2, BL3",
    "title": "Multilayer PMMA Disc (Premium Doğal Geçişli Estetik)",
    "sub": "Premium Geçici Restorasyonlar İçin Doğal Estetik. Servikalden insizale doğal renk ve translüsensi geçişi sunan çok katmanlı yapısıyla ön bölge ve gülüş tasarımı vakalarında üstün estetik sonuçlar sağlar (98 / 95 / AG · A2, BL3).",
    "img": "/uploads/pmma_brosur_2026/uzm_pmma_multilayer.png",
    "gallery": [
      "/uploads/pmma_brosur_2026/uzm_pmma_multilayer.png",
      "/uploads/pmma_brosur_2026/uzm_pmma_kutu_kapak.png"
    ],
    "variants": [
      "98×18 mm",
      "95×18 mm",
      "AG×18 mm",
      "Renk: A2, BL3"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental 2026 — Multilayer PMMA Discs",
      "Mekanik & Fiziksel Özellikler": "Eğilme Dayanımı ≥100 MPa · Yoğunluk 1.35–1.45 g/cm³ · Sertlik 85–90 Shore · Su Emilimi <0.04% · PMMA >%99",
      "Ölçü Seçenekleri": "98×16 mm, 98×18 mm, 98×20 mm, 98×30 mm · 95×18 mm · AG×18 mm",
      "Sistem Uyumu": "98 mm CAD/CAM · 95 mm · Amann Girrbach (AG)",
      "Renk Seçenekleri": "A2, BL3 (Servikalden İnsizale Çok Katmanlı Geçiş)",
      "Klinik Endikasyon": "Ön Bölge Estetik Geçici Restorasyonlar & Gülüş Tasarımı",
      "Resmi Katalog Broşürü": "UZM Dental 2026 PMMA ürün dokümanı (PDF)",
      "Üretim & İş Modeli": "Güvenilir Kurumsal Üretimi (UZM Dental / ZirCrown)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü ve Lot/Seri İzlenebilirlik Kaydı",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti / UZM Dental)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL 2026 PMMA BROŞÜRÜ · GÜVENİLİR Kurumsal ÜRETİMİ): 98 mm açık CAD/CAM sistemleri, 95 mm ve Amann Girrbach (AG) kazıma cihazlarında soğuk frezeleme yapılır. Tesviye sonrası düşük devirde silikon lastik ve keçe ile yüksek parlaklıkta polisaj uygulanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "CIP Soğuk İzostatik Pres / Homojen Blok",
      "IFU (2026 PMMA Broşürü)",
      "MSDS (Güvenlik Bilgi Formu)",
      "98mm Açık Sistem Uyumluluğu"
    ],
    "brochureUrl": "/assets/uzm-pmma-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-pmma-brosur-2026.pdf"
  },
{
    "id": "ut-ml",
    "sku": "UT-ML",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · UT-ML",
    "specBadge": "650 MPa · %60",
    "title": "ZirCrown UT-ML (Doğal Geçişli Ultra Translucent Multilayer)",
    "sub": "Doğal renk gradyanı ve ultra yüksek translüsensi. %60 ışık geçirgenliği, 650 MPa dayanım ve servikalden insizale kesintisiz doğal renk geçişiyle kusursuz anterior estetik.",
    "img": "/uploads/uzm_zircrown_ut_ml_disc.png",
    "gallery": [
        "/uploads/uzm_zircrown_ut_ml_disc.png",
        "/uploads/zirkon_kartlari/ut-ml-sinter-curve-web.png",
        "/uploads/zirkon_kartlari/ut-ml-spec-web.png"
    ],
    "variants": [
        "98 mm CAD/CAM",
        "95 mm Sistemler",
        "92×75 mm",
        "Sirona Sistemi",
        "10–25 mm",
        "BL1/BL2/BL3/BL4 & Vita 16 Renk"
    ],
    "specs": {
        "Ürün Serisi": "ZirCrown® UT-ML (Ultra Translucent Multilayer)",
        "Işık Geçirgenliği": "%60 Ultra Translucent Çok Katmanlı Gradyan",
        "Bükülme Dayanımı": "650 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
        "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm · Sirona",
        "Klinik Endikasyon": "Anterior Yüksek Estetik Kron, 3 Üye Estetik Köprü, Lamina",
        "Sinterleme Protokolü": "1530°C Pik Sıcaklık · 2 Saat Bekleme",
        "QR Kod": "Kutu & Etiket Üzerinde Zirkonyum Teknik Katalog QR Kodu"
    },
    "ifu": "KULLANIM TALİMATI & SİNTERLEME: 98 mm, 95 mm, 92×75 mm ve Sirona açık CAD/CAM sistemlerinde kuru frezeleme yapılır. 1530°C tepe sıcaklıkta 2 saat sinterleme uygulanır. Termal şok koruması ile fırın açma <80°C.",
    "certs": [
        "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
        "ISO 13485 Tıbbi Cihaz Kalite Yönetim Sistemi",
        "CE & FDA Sertifikasyonu",
        "Türkiye ÜTS Kayıtlı"
    ],
    "sinterCurveUrl": "/uploads/zirkon_kartlari/ut-ml-sinter-curve-web.png",
    "sinterCurveHiRes": "/uploads/zirkon_kartlari/ut-ml-sinter-curve.png",
    "specCardUrl": "/uploads/zirkon_kartlari/ut-ml-spec-web.png",
    "specCardHiRes": "/uploads/zirkon_kartlari/ut-ml-spec.png",
    "qrUrl": "/uploads/qr/uzm-dental-zirkonyum.svg"
},
    {
    "id": "x-ray-pmma-disc",
    "sku": "PMMA-XRAY",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "uzm-endo",
    "brandKey": "uzm-endo",
    "brandName": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti)",
    "brandLogo": "/images/brand-1.png",
    "category": "pmma",
    "cat": "pmma",
    "catLabel": "UZM DENTAL · PMMA-XRAY",
    "specBadge": "98×18 mm · X-Ray A1",
    "title": "Opaque / X-Ray PMMA Disc (Radyoopak Geçici Restorasyon)",
    "sub": "Geçici Restorasyonlarda Radyografik Görünürlük. Radyoopak yapısı sayesinde geçici restorasyonların röntgen (X-Ray) altında net şekilde görüntülenmesini sağlar; implant üstü vakalarda güvenli klinik kontrol sunar (98×18 mm · A1).",
    "img": "/uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png",
    "gallery": [
      "/uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png",
      "/uploads/pmma_brosur_2026/uzm_pmma_kutu_kapak.png"
    ],
    "variants": [
      "98×18 mm",
      "98 mm CAD/CAM",
      "Renk: A1 (Radyoopak)"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental 2026 — Opaque / X-Ray PMMA Discs",
      "Mekanik & Fiziksel Özellikler": "Eğilme Dayanımı ≥100 MPa · Yoğunluk 1.35–1.45 g/cm³ · Sertlik 85–90 Shore · Su Emilimi <0.04% · PMMA >%99",
      "Ölçü Seçenekleri": "98×18 mm",
      "Sistem Uyumu": "98 mm CAD/CAM Sistemleri",
      "Renk & Kontrast": "A1 (Radyoopak · Röntgende Net Görünürlük)",
      "Klinik Endikasyon": "İmplant Üstü & Uzun Süreli Geçici Restorasyonlarda Radyografik Kontrol",
      "Resmi Katalog Broşürü": "UZM Dental 2026 PMMA ürün dokümanı (PDF)",
      "Üretim & İş Modeli": "Güvenilir Kurumsal Üretimi (UZM Dental / ZirCrown)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü ve Lot/Seri İzlenebilirlik Kaydı",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental Endodonti)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL 2026 PMMA BROŞÜRÜ · GÜVENİLİR Kurumsal ÜRETİMİ): 98 mm açık CAD/CAM sistemleri, 95 mm ve Amann Girrbach (AG) kazıma cihazlarında soğuk frezeleme yapılır. Tesviye sonrası düşük devirde silikon lastik ve keçe ile yüksek parlaklıkta polisaj uygulanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "CIP Soğuk İzostatik Pres / Homojen Blok",
      "IFU (2026 PMMA Broşürü)",
      "MSDS (Güvenlik Bilgi Formu)",
      "98mm Açık Sistem Uyumluluğu"
    ],
    "brochureUrl": "/assets/uzm-pmma-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-pmma-brosur-2026.pdf"
  },
{
    "id": "hizli-sinterleme",
    "sku": "FAST-3D-PRO",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "zircrown",
    "brandKey": "zircrown",
    "brandName": "UZM Dental / ZirCrown (Güvenilir Kurumsal Üretimi)",
    "brandLogo": "/images/brand-3.png",
    "category": "zirconia",
    "cat": "zirconia",
    "catLabel": "ZIRCROWN · FAST 3D-PRO",
    "specBadge": "800–1200 MPa · %43–55",
    "title": "ZirCrown Hızlı Sinterleme 3D-PRO (Fast Sintering)",
    "sub": "Hızlı sinterleme protokolüne uygun, 800–1200 MPa dayanım ve %43–55 ışık geçirgenliği sunan yeni nesil zirkonya. Hızlı sinterleme döngüleriyle laboratuvarlarda zaman ve enerji tasarrufu.",
    "img": "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
    "gallery": [
        "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
        "/uploads/zirkon_kartlari/hizli-sinter-curve-web.png",
        "/uploads/zirkon_kartlari/hizli-sinter-spec-web.png"
    ],
    "variants": [
        "98 mm CAD/CAM",
        "95 mm Sistemler",
        "92×75 mm (AG)",
        "Sirona",
        "10–25 mm",
        "Vita 16 & BL1/BL2/BL3/BL4"
    ],
    "specs": {
        "Ürün Serisi": "ZirCrown® Hızlı Sinterleme 3D-PRO",
        "Işık Geçirgenliği": "%43 – %55 Gradyan Translüsensi",
        "Bükülme Dayanımı": "800 – 1200 MPa (Yoğunluk ≥6.0 g/cm³ · Tokluk 5 MPa·m½ · Sertlik 1250 Hv10)",
        "Sistem & Ölçü Uyumu": "98 mm · 95 mm · 92×75 mm (AG) · Sirona",
        "Klinik Endikasyon": "Tek Kron, Çok Üyeli Köprü, Hızlı Restorasyon & Altyapı",
        "Sinterleme Protokolü": "Hızlı Sinterleme Döngüsü (Fast Sintering) ve Standart 1500°C–1530°C",
        "QR Kod": "Kutu & Etiket Üzerinde Zirkonyum Teknik Katalog QR Kodu"
    },
    "ifu": "HIZLI SİNTERLEME TALİMATI: Hızlı sinterleme fırınlarında özel hızlı döngü protokolleri ile veya standart 1500°C–1530°C programında sinterlenebilir. Yüksek sıcaklık artış hızlarına dayanıklı homojen yapı.",
    "certs": [
        "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
        "ISO 13485 Tıbbi Cihaz Kalite Yönetim Sistemi",
        "CE & FDA Sertifikasyonu",
        "Türkiye ÜTS Kayıtlı"
    ],
    "sinterCurveUrl": "/uploads/zirkon_kartlari/hizli-sinter-curve-web.png",
    "sinterCurveHiRes": "/uploads/zirkon_kartlari/hizli-sinter-curve.png",
    "specCardUrl": "/uploads/zirkon_kartlari/hizli-sinter-spec-web.png",
    "specCardHiRes": "/uploads/zirkon_kartlari/hizli-sinter-spec.png",
    "pdfUrl": "/uploads/zirkon_kartlari/hizli-sinter-curve.pdf",
    "qrUrl": "/uploads/qr/uzm-dental-zirkonyum.svg"
},
    {
    "id": "pmma-disk-95mm",
    "sku": "PMMA-95",
    "lotCode": "Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır",
    "brand": "UZM Dental",
    "brandKey": "UZM Dental",
    "brandName": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental)",
    "brandLogo": "/images/brand-4.png",
    "category": "pmma",
    "cat": "pmma",
    "catLabel": "UZM DENTAL · PMMA-95",
    "specBadge": "98 / 95 / AG · Clear",
    "title": "Clear PMMA Disc (Şeffaf Splint & Gece Plağı · 98 / 95 / AG)",
    "sub": "Görünmez Koruma, Doğal Estetik. Yüksek şeffaflığa sahip kristal berraklığında PMMA yapısıyla oklüzal splint, gece plağı, horlama apareyi ve koruyucu plak uygulamaları için biyouyumlu çözüm (98×18, 95×18, AG×18 mm · Clear).",
    "img": "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
    "gallery": [
      "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
      "/uploads/pmma_brosur_2026/uzm_pmma_kutu_kapak.png"
    ],
    "variants": [
      "98×18 mm",
      "95×18 mm",
      "AG×18 mm",
      "Clear (Şeffaf)"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental 2026 — Clear PMMA Discs",
      "Mekanik & Fiziksel Özellikler": "Eğilme Dayanımı ≥100 MPa · Yoğunluk 1.35–1.45 g/cm³ · Sertlik 85–90 Shore · Su Emilimi <0.04% · PMMA >%99",
      "Ölçü Seçenekleri": "98×16 mm, 98×18 mm, 98×20 mm, 98×30 mm · 95×18 mm · AG×18 mm",
      "Sistem Uyumu": "98 mm CAD/CAM · 95 mm · Amann Girrbach (AG)",
      "Renk Seçenekleri": "Clear (Şeffaf Kristal Berraklık)",
      "Uygulama Alanları": "Oklüzal Splint · Gece Plağı · Horlama Apareyi · Koruyucu Plak",
      "Resmi Katalog Broşürü": "UZM Dental 2026 PMMA ürün dokümanı (PDF)",
      "Üretim & İş Modeli": "Güvenilir Kurumsal Üretimi (UZM Dental / ZirCrown)",
      "Kalite & Mevzuat Uyumu": "CIP Soğuk İzostatik Pres ve parti/lot kalite kontrol sistemi, Üretici Teknik Veri Föyü ve Lot/Seri İzlenebilirlik Kaydı",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (2026 PMMA Discs · Kurumsal Partner: UZM Dental)",
      "LOT & İzlenebilirlik": "Kutu & Etiket Üzerindeki LOT / QR · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL 2026 PMMA BROŞÜRÜ · GÜVENİLİR Kurumsal ÜRETİMİ): 98 mm açık CAD/CAM sistemleri, 95 mm ve Amann Girrbach (AG) kazıma cihazlarında soğuk frezeleme yapılır. Tesviye sonrası düşük devirde silikon lastik ve keçe ile yüksek parlaklıkta polisaj uygulanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği",
      "CIP Soğuk İzostatik Pres / Homojen Blok",
      "IFU (2026 PMMA Broşürü)",
      "MSDS (Güvenlik Bilgi Formu)",
      "98mm Açık Sistem Uyumluluğu"
    ],
    "brochureUrl": "/assets/uzm-pmma-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-pmma-brosur-2026.pdf"
  },
  {
    "id": "gutta-makasi",
    "sku": "GUTTA-CUT",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "devices",
    "cat": "devices",
    "catLabel": "UZM DENTAL · GUTTA-CUT",
    "specBadge": "Paslanmaz Çelik · ISO Kalibrasyon",
    "title": "Paslanmaz Çelik Gutta Percha Ölçüm ve Kesme Makası",
    "sub": "Kök kanal tedavilerinde gutta-perka konilerinin apikal çapını hızlı, dik açılı ve çapak bırakmadan kalibre etmek için tasarlanmış standart klinik otoklav sterilizasyonuna uygun paslanmaz çelik endodontik makas.",
    "img": "/uploads/brands/sani_gutta_cutter_clean.jpg",
    "gallery": [
      "/uploads/brands/sani_gutta_cutter_clean.jpg",
      "/uploads/brands/sani_gutta_cutter_clean.jpg"
    ],
    "variants": [
      "0.20mm (#20)",
      "0.25mm (#25)",
      "0.30mm (#30)",
      "0.35mm (#35)",
      "0.40mm (#40)",
      "0.50mm (#50)",
      "0.60mm (#60)"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental Endodontik Kalibrasyon Ekipmanı",
      "Kalibrasyon Ölçüleri": "ISO Standart Apikal Çap Ölçüm ve Kesim Yuvaları",
      "Gövde & Sterilizasyon": "Paslanmaz Çelik Gövde · Standart Klinik Otoklav Sterilizasyonuna Uygun",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA BROŞÜRÜ ): Gutta-perka konisinin ucu, paslanmaz çelik gövde üzerindeki istenilen ISO standart çap yuvasına yerleştirilerek kontrollü şekilde kesilir ve obturasyon öncesinde doğru master cone çapına uyarlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Paslanmaz Çelik Gövde",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "02-taper",
    "sku": "GP-02",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-02",
    "specBadge": ".02 Taper · 120 Adet",
    "title": "UZM Dental ISO .02 Taper Gutta Percha Points (120 Adet)",
    "sub": "Manuel kanal preparasyonları ve lateral kondensasyon tekniklerinde güvenilir obturasyon sağlamak üzere tasarlanmıştır. Boyutsal hassasiyeti, homojen yapısı ve standart .02 taper geometrisiyle kök kanalına tam uyum sunar.",
    "img": "/uploads/uzm_gp_02_taper_box.png",
    "gallery": [
      "/uploads/uzm_gp_02_taper_box.png",
      "/uploads/gutta_brosur_2026/page-2.png"
    ],
    "variants": [
      "#20",
      "#25",
      "#30",
      "#15–40 (Assorted)",
      "#45–80 (Assorted)",
      "120 Adet / Kutu"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .02 Taper Gutta Percha Points",
      "Paket İçeriği": "120 Adet (120 Pieces) Steril Sürgülü Kaset",
      "Mevcut Ölçüler": "#20 · #25 · #30 · #15–40 (Assorted) · #45–80 (Assorted)",
      "Klinik Uygulama": "Manuel Kanal Preparasyonu & Lateral Kondensasyon",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "03-taper",
    "sku": "GP-03",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-03",
    "specBadge": ".03 Taper · 100 Adet",
    "title": "UZM Dental ISO .03 Taper Gutta Percha Points (100 Adet · Profesyoneller İçin)",
    "sub": "Profesyoneller için özel seri: .03 taper kanal preparasyonlarıyla uyumlu olarak geliştirilmiş, standart .02 taper seçeneklerine alternatif daha kontrollü taper uyumu ve öngörülebilir obturasyon deneyimi sunar.",
    "img": "/uploads/uzm_gp_03_taper_box.png",
    "gallery": [
      "/uploads/uzm_gp_03_taper_box.png",
      "/uploads/gutta_brosur_2026/page-2.png"
    ],
    "variants": [
      "#20",
      "#25",
      "#30",
      "#15–40 (Assorted)",
      "100 Adet · Profesyoneller İçin"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .03 Taper Gutta Percha Points (Profesyoneller İçin)",
      "Paket İçeriği": "100 Adet (100 Pieces) Steril Sürgülü Kaset",
      "Mevcut Ölçüler": "#20 · #25 · #30 · #15–40 (Assorted)",
      "Klinik Uygulama": "Kontrollü .03 Taper Uyumu & Modern Endodontik Obturasyon",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "04-taper",
    "sku": "GP-04",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-04",
    "specBadge": ".04 Taper · 100 Adet",
    "title": "UZM Dental ISO .04 Taper Gutta Percha Points (100 Adet)",
    "sub": "Modern endodontik tedavilerde en yaygın kullanılan .04 taper seçeneği. ISO boyut/renk kodlamasına uygun çap hassasiyeti, yüksek radyoopasitesi ve kullanım kolaylığıyla hekimlerin en çok tercih ettiği seridir.",
    "img": "/uploads/uzm_gp_04_taper_box.png",
    "gallery": [
      "/uploads/uzm_gp_04_taper_box.png",
      "/uploads/gutta_brosur_2026/page-2.png"
    ],
    "variants": [
      "#20",
      "#25",
      "#30",
      "#35",
      "#40",
      "#15–40 (Assorted)",
      "#45–80 (Assorted)",
      "100 Adet"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .04 Taper Gutta Percha Points",
      "Paket İçeriği": "100 Adet (100 Pieces) Steril Sürgülü Kaset",
      "Mevcut Ölçüler": "#20 · #25 · #30 · #35 · #40 · #15–40 (Assorted) · #45–80 (Assorted)",
      "Klinik Uygulama": "Mekanik .04 Taper Tek Kon & Kondensasyon Obturasyonu",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "f-serisi",
    "sku": "GP-F",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-F",
    "specBadge": "F1–F5 · Variable Taper",
    "title": "UZM Dental F Serisi Gutta Percha Point (F1–F5 Değişken Taper)",
    "sub": "Değişken taper (Variable Taper) geometriye sahip mekanik kanal preparasyon sistemleriyle uyumlu olarak geliştirilmiştir. Klinisyenlere kolay kullanım, güvenilir adaptasyon ve öngörülebilir sonuçlar sunar.",
    "img": "/uploads/uzm_gp_f_series_box.png",
    "gallery": [
      "/uploads/uzm_gp_f_series_box.png",
      "/uploads/gutta_brosur_2026/page-3.png"
    ],
    "variants": [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F1–F2–F3",
      "F1–F2–F3–F4–F5"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental F Serisi Gutta Percha Point (F SERIES)",
      "Mevcut Ölçüler": "F1 · F2 · F3 · F4 · F5 · F1–F2–F3 · F1–F2–F3–F4–F5",
      "Sistem Uyumu": "Değişken Taper (Variable Taper F1–F5) Mekanik Kanal Sistemleri",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "x-serisi",
    "sku": "GP-X",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-X",
    "specBadge": "X1–X5 · ProTaper Next",
    "title": "UZM Dental X Serisi Gutta Percha Point (ProTaper Next Uyumlu)",
    "sub": "ProTaper Next ve benzeri değişken taper sistemlerle genişletilen kök kanallarını doldurmak için geliştirilmiştir. Hassas boyutsal üretimiyle preparasyonu tamamlanmış kanala hassas adaptasyon sağlar.",
    "img": "/uploads/uzm_gp_x_series_box.png",
    "gallery": [
      "/uploads/uzm_gp_x_series_box.png",
      "/uploads/gutta_brosur_2026/page-3.png"
    ],
    "variants": [
      "X1",
      "X2",
      "X3",
      "X4",
      "X5",
      "X1–X2–X3",
      "X1–X2–X3–X4–X5"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental X Serisi Gutta Percha Point (X SERIES)",
      "Mevcut Ölçüler": "X1 · X2 · X3 · X4 · X5 · X1–X2–X3 · X1–X2–X3–X4–X5",
      "Sistem Uyumu": "ProTaper Next ve Değişken Taper (X1–X5) Mekanik Kanal Sistemleri",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "p-serisi",
    "sku": "GP-P",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "endo",
    "cat": "endo",
    "catLabel": "UZM DENTAL · GP-P",
    "specBadge": "P Series · Primary",
    "title": "UZM Dental P Serisi Gutta Percha Point (Primary · Resiprokal Uyumlu)",
    "sub": "Resiprokal (reciprocating — Primary) kanal preparasyon sistemleriyle uyumlu olarak geliştirilmiştir. Değişken taper geometrisine uygun tasarımıyla kök kanallarında güvenilir apikal örtücülük sağlar.",
    "img": "/uploads/uzm_gp_p_series_box.png",
    "gallery": [
      "/uploads/uzm_gp_p_series_box.png",
      "/uploads/gutta_brosur_2026/page-3.png"
    ],
    "variants": [
      "Primary",
      "Primary Değişken Taper",
      "Resiprokal Sistem"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental P Serisi Gutta Percha Point (P SERIES)",
      "Mevcut Ölçüler": "Primary (Resiprokal Ana Kon)",
      "Sistem Uyumu": "Resiprokal (Reciprocating — Primary) Kanal Preparasyon Sistemleri",
      "Bileşim & Tolerans": "Gutta-Percha, Çinko Oksit, Baryum Sülfat (Radyoopak) · Kadmiyum İçermez · ±0.025 mm Tolerans · Raf Ömrü 4 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA POINTS BROŞÜRÜ): Şekillendirilen kök kanalının apikal çap ve taper (.02 / .03 / .04 / X / F / P) ölçüsüne uygun gutta-perka kon seçilir; yüksek radyoopasitesi sayesinde çalışma boyu doğrulanarak tek kon veya kondensasyon tekniğiyle obturasyon tamamlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "02-paper",
    "sku": "PP-02",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "obturation",
    "cat": "obturation",
    "catLabel": "UZM DENTAL · PP-02",
    "specBadge": ".02 Taper · 120 Adet",
    "title": "UZM Dental ISO .02 Taper Absorbent Paper Points (120 Adet)",
    "sub": "Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının etkin şekilde uzaklaştırılması amacıyla geliştirilmiştir. Lif bırakmayan homojen selüloz yapısıyla yüksek emicilik sunar.",
    "img": "/uploads/uzm_pp_02_taper_box.png",
    "gallery": [
      "/uploads/uzm_pp_02_taper_box.png",
      "/uploads/gutta_brosur_2026/page-5.png"
    ],
    "variants": [
      "#45–80 (Assorted)",
      "120 Adet / Kutu",
      "Steril Emici Kon"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .02 Taper Absorbent Paper Points",
      "Paket İçeriği": "120 Adet (120 Pieces) Steril Kaset",
      "Mevcut Ölçüler": "45–80 (Assorted)",
      "Materyal Yapısı": "Lif Bırakmayan Homojen Selüloz · Yüksek Emilim Kapasitesi",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL ABSORBENT PAPER POINTS BROŞÜRÜ): Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının uzaklaştırılması için son eğenin taper (.02/.04/.06/F/P/X) ölçüsüyle eşleşen lif bırakmayan steril paper point kon kullanılır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "04-paper",
    "sku": "PP-04",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "obturation",
    "cat": "obturation",
    "catLabel": "UZM DENTAL · PP-04",
    "specBadge": ".04 Taper · 100 Adet",
    "title": "UZM Dental ISO .04 Taper Absorbent Paper Points (100 Adet)",
    "sub": "ISO renk kodlamalı çap boyutlandırması ve yüksek emicilik kapasitesi sayesinde .04 taper kanal preparasyonlarıyla güvenilir uyum sağlar; irrigasyon sonrası hızlı ve kontrollü kurutma sunar.",
    "img": "/uploads/uzm_pp_04_taper_box.png",
    "gallery": [
      "/uploads/uzm_pp_04_taper_box.png",
      "/uploads/gutta_brosur_2026/page-5.png"
    ],
    "variants": [
      "15–40 (Assorted)",
      "45–80 (Assorted)",
      "100 Adet / Kutu"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .04 Taper Absorbent Paper Points",
      "Paket İçeriği": "100 Adet (100 Pieces) Steril Kaset",
      "Mevcut Ölçüler": "15–40 (Assorted) · 45–80 (Assorted)",
      "Materyal Yapısı": "Lif Bırakmayan Homojen Selüloz · Yüksek Emilim Kapasitesi",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL ABSORBENT PAPER POINTS BROŞÜRÜ): Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının uzaklaştırılması için son eğenin taper (.02/.04/.06/F/P/X) ölçüsüyle eşleşen lif bırakmayan steril paper point kon kullanılır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "06-paper",
    "sku": "PP-06",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "obturation",
    "cat": "obturation",
    "catLabel": "UZM DENTAL · PP-06",
    "specBadge": ".06 Taper · 100 Adet",
    "title": "UZM Dental ISO .06 Taper Absorbent Paper Points (100 Adet)",
    "sub": "Modern mekanik preparasyon teknikleriyle uyumlu olan .06 taper paper pointler, genişletilmiş kanal preparasyonlarında etkin kurutma sağlayarak obturasyon öncesinde ideal çalışma koşulları oluşturur.",
    "img": "/uploads/uzm_pp_06_taper_box.png",
    "gallery": [
      "/uploads/uzm_pp_06_taper_box.png",
      "/uploads/gutta_brosur_2026/page-5.png"
    ],
    "variants": [
      "#25",
      "15–40 (Assorted)",
      "100 Adet / Kutu"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental ISO .06 Taper Absorbent Paper Points",
      "Paket İçeriği": "100 Adet (100 Pieces) Steril Kaset",
      "Mevcut Ölçüler": "25 · 15–40 (Assorted)",
      "Materyal Yapısı": "Lif Bırakmayan Homojen Selüloz · Yüksek Emilim Kapasitesi",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL ABSORBENT PAPER POINTS BROŞÜRÜ): Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının uzaklaştırılması için son eğenin taper (.02/.04/.06/F/P/X) ölçüsüyle eşleşen lif bırakmayan steril paper point kon kullanılır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "f-serisi-2",
    "sku": "PP-F",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "obturation",
    "cat": "obturation",
    "catLabel": "UZM DENTAL · PP-F",
    "specBadge": "F Series · F1–F5",
    "title": "UZM Dental F Serisi Absorbent Paper Points (F1–F5)",
    "sub": "Değişken taper (Variable Taper) geometriye sahip mekanik kanal preparasyonlarının ardından kök kanalındaki nem ve irrigasyon solüsyonlarının etkin şekilde uzaklaştırılmasına yardımcı olur.",
    "img": "/uploads/uzm_pp_f_series_box.png",
    "gallery": [
      "/uploads/uzm_pp_f_series_box.png",
      "/uploads/gutta_brosur_2026/page-6.png"
    ],
    "variants": [
      "F1",
      "F2",
      "F3",
      "F1–F2–F3",
      "F1–F2–F3–F4–F5"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental F Serisi Absorbent Paper Points (F SERIES)",
      "Mevcut Ölçüler": "F1 · F2 · F3 · F1–F2–F3 · F1–F2–F3–F4–F5",
      "Sistem Uyumu": "Değişken Taper (Variable Taper F1–F5) Mekanik Kanal Sistemleri",
      "Materyal & Sterilite": "Lif Bırakmayan Homojen Selüloz · Gamma Steril · Yüksek Emilim · Raf Ömrü 5 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL ABSORBENT PAPER POINTS BROŞÜRÜ): Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının uzaklaştırılması için son eğenin taper (.02/.04/.06/F/P/X) ölçüsüyle eşleşen lif bırakmayan steril paper point kon kullanılır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "x-serisi-2",
    "sku": "PP-X",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "obturation",
    "cat": "obturation",
    "catLabel": "UZM DENTAL · PP-X",
    "specBadge": "P & X Series · Medium",
    "title": "UZM Dental P & X Serisi Absorbent Paper Points (Medium / Resiprokal & Mekanik)",
    "sub": "Resiprokal (P Serisi — Medium) ve değişken taper (X Serisi) kanal preparasyon sistemleriyle uyumlu olarak geliştirilmiştir; yüksek emicilik kapasitesi ve homojen selüloz yapısıyla güvenilir kurutma sağlar.",
    "img": "/uploads/uzm_pp_p_series_box.png",
    "gallery": [
      "/uploads/uzm_pp_p_series_box.png",
      "/uploads/gutta_brosur_2026/page-6.png"
    ],
    "variants": [
      "P Series (Medium)",
      "X1–X5",
      "Resiprokal & Mekanik Uyumlu"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental P Serisi (Medium) & X Serisi Absorbent Paper Points",
      "Mevcut Ölçüler": "Medium (P Series) · X1–X5",
      "Sistem Uyumu": "Resiprokal (P Serisi Medium) ve Değişken Taper (X1–X5) Kanal Sistemleri",
      "Materyal & Sterilite": "Lif Bırakmayan Homojen Selüloz · Gamma Steril · Yüksek Emilim · Raf Ömrü 5 Yıl",
      "Resmi Katalog Broşürü": "UZM Dental Gutta Percha & Paper Points ürün dokümanı (PDF)",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL ABSORBENT PAPER POINTS BROŞÜRÜ): Kök kanal preparasyonu sonrasında kanal içerisindeki nem ve irrigasyon solüsyonlarının uzaklaştırılması için son eğenin taper (.02/.04/.06/F/P/X) ölçüsüyle eşleşen lif bırakmayan steril paper point kon kullanılır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  },
  {
    "id": "gutta-corrector",
    "sku": "GUTTA-CORR",
    "lotCode": "Klinik Teknik Spesifikasyon · Kalite Kontrol Onaylı",
    "brand": "uzm-ekipman",
    "brandKey": "uzm-ekipman",
    "brandName": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
    "brandLogo": "/images/brand-2.png",
    "category": "devices",
    "cat": "devices",
    "catLabel": "UZM DENTAL · YENİ ÜRÜN",
    "specBadge": "YENİ ÜRÜN · ISO Cetvel",
    "title": "UZM Dental Gutta Percha Corrector (Master Cone Kalibrasyon Cetveli — YENİ ÜRÜN)",
    "sub": "YENİ ÜRÜN: Gutta-perka konilerinin uç çapını hızlı ve hassas şekilde kontrol etmek ve istenilen ISO ölçüsüne göre keserek düzenlemek amacıyla geliştirilmiştir. Paslanmaz çelik gövde, kolay temizlenebilir yüzey ve ergonomik tasarım.",
    "img": "/uploads/uzm_gutta_corrector.png",
    "gallery": [
      "/uploads/uzm_gutta_corrector.png",
      "/uploads/gutta_brosur_2026/page-6.png",
      "/uploads/gutta_brosur_2026/page-1.png"
    ],
    "variants": [
      "ISO Standart Çap Yuvaları",
      "Paslanmaz Çelik Gövde",
      "Master Cone Kalibrasyon",
      "Kolay Temizlenebilir Yüzey",
      "Ergonomik Tasarım"
    ],
    "specs": {
      "Ürün Serisi": "UZM Dental Gutta Percha Corrector (YENİ ÜRÜN — Ürün dokümanı)",
      "Kullanım Amacı": "Gutta-Perka Konilerinin Uç Çapını Ölçme ve İstenilen ISO Çapına Göre Kesme",
      "Gövde & Tasarım": "Paslanmaz Çelik Gövde · Dayanıklı ve Uzun Ömürlü Yapı · Kolay Temizlenebilir Yüzey",
      "Klinik Avantaj": "Daha Küçük Gutta-Perka Konisini İstenilen ISO Çapına Uyarlayarak Doğru Master Cone Seçimi",
      "Kalite & Mevzuat Uyumu": "Üretici Teknik Veri Föyü · ISO Boyut & Renk Kodu Uyumlu · Parti/LOT ve Seri Numarası İzlenebilirliği",
      "QR Kod Erişimi": "QR Kod ile Teknik Dokümanlara, Kullanım Rehberine (IFU) ve Kalite Belgelerine Hızlı Erişim",
      "Marka / Portföy": "UZM Dental (Kurumsal Partner: UZM Dental Ekipman Medical)",
      "LOT & İzlenebilirlik": "UZM Dental Endodonti & Obtürasyon Ürün Grubu · Klinik Teknik Spesifikasyon"
    },
    "ifu": "KULLANIM TALİMATI (IFU — UZM DENTAL GUTTA PERCHA BROŞÜRÜ ): Klinik uygulamalarda uygun ölçüde gutta-perka bulunmadığında, mevcut daha küçük bir gutta-perka konisinin ucu ISO standart ölçülerine göre işaretlenmiş paslanmaz çelik yuvaya yerleştirilir ve kontrollü olarak kesilerek istenilen ISO çapına kolayca uyarlanır.",
    "certs": [
      "Üretici Teknik Veri Föyü",
      "ISO Boyut & Renk Kodu Uyumlu",
      "Paslanmaz Çelik Gövde",
      "Parti/LOT ve Seri Numarası İzlenebilirliği",
      "Karekod Bilgilendirmesi"
    ],
    "brochureUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf",
    "pdfUrl": "/assets/uzm-gutta-percha-brosur-2026.pdf"
  }
];

  var ZIR_PRESETS = {
    '5d': {
      trans: 'İnsizal %60 → Servikal %47 (10 Katman)',
      mpa: 'İnsizal 650 → Servikal 950 MPa · 1530°C',
      ind: 'Anterior Estetik & 14 Üye Ark',
      img: '/images/products/studio_40/IMG_7263.jpg'
    },
    '4d': {
      trans: 'İnsizal %59 → Servikal %45 (9 Katman)',
      mpa: 'İnsizal 700 → Servikal 1000 MPa · 1530°C',
      ind: 'Anterior Kron & 3 Üyeli Köprü',
      img: '/images/products/studio_40/IMG_7266.jpg'
    },
    '3d': {
      trans: 'İnsizal %57 → Servikal %43 (6 Katman)',
      mpa: 'İnsizal 800 → Servikal 1200 MPa · 1500°C',
      ind: 'Lamina Veneer, İnley/Onley & Kron',
      img: '/images/products/studio_40/IMG_7265.jpg'
    },
    'st': {
      trans: '%43 Homojen Multilayer',
      mpa: '1200 MPa Homojen · 1530°C',
      ind: 'Tam Anatomik Posterior Kron & Köprü',
      img: '/images/products/studio_40/IMG_7224.jpg'
    },
    'ht': {
      trans: '%43–%55 Translüsensi (Hızlı Sinterleme 3D-PRO)',
      mpa: '800 – 1200 MPa Homojen · 1530°C',
      ind: 'Uzun Köprü İskeleti & İmplant Üstü Bar',
      img: '/images/products/studio_40/IMG_7263.jpg'
    }
  };

  var ENDO_PRESETS = {
    'glide': {
      file: 'ISO .02 / .03 / .04 Taper Gutta Percha (#15–#80)',
      torque: 'ISO 6877 · ±0.02 mm Lazer Kalibrasyon · ≥6.5 MPa',
      obt: '120 / 100 Adet Sürgülü Kaset · Radyoopak & Kadmiyumsuz',
      img: '/uploads/uzm_gp_04_taper_box.png'
    },
    'shaping': {
      file: 'Universal F (F1–F5) · X (X1–X5) · P (Primary) Gutta',
      torque: 'ISO 6877 Değişken Taper · Tek-Kon Obtürasyon Uyumu',
      obt: '60 Adet Renk Kodlu Kaset · 28 mm (±0.5 mm)',
      img: '/uploads/uzm_gp_f_series_box.png'
    },
    'finishing': {
      file: 'Steril Absorbent Paper Points (.02 / .04 / .06 & F1–F5)',
      torque: '%100 Uzun Lifli Saf Pamuk · Gama Steril · ≤3 sn Emiş',
      obt: '200 Adet (.02) / 100 Adet (.04, .06, F & X Serisi)',
      img: '/uploads/uzm_pp_02_taper_box.png'
    },
    'retreat': {
      file: 'Gutta Percha Corrector Cetvel & Paslanmaz Kesme Makası',
      torque: 'ISO #20–#140 (18 Kalibrasyon Deliği) + 30 mm Cetvel',
      obt: '134°C–135°C Otoklavlanabilir Medikal Çelik / Alüminyum',
      img: '/uploads/uzm_gutta_corrector.png'
    }
  };

  var activeProduct = null;

  function playUiTick(freq) {
    if (window.UZMAcoustics && typeof window.UZMAcoustics.tick === 'function') {
      window.UZMAcoustics.tick(freq || 520);
    }
  }

  /* ISO/IEC 18004 Version 3-L (29x29) Taranabilir SVG QR Üretici (Tek <path> ile hafif DOM) */
  function renderProductQrSvg(text, sizePx) {
    var sz = sizePx || 64;
    var n = 29;
    var mat = [];
    var rsvd = [];
    var i, j;
    for (i = 0; i < n; i++) {
      mat[i] = [];
      rsvd[i] = [];
      for (j = 0; j < n; j++) { mat[i][j] = 0; rsvd[i][j] = false; }
    }
    function setFinder(r0, c0) {
      for (var r = -1; r <= 7; r++) {
        for (var c = -1; c <= 7; c++) {
          var rr = r0 + r, cc = c0 + c;
          if (rr < 0 || rr >= n || cc < 0 || cc >= n) continue;
          rsvd[rr][cc] = true;
          if (r >= 0 && r <= 6 && c >= 0 && c <= 6 && (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4))) {
            mat[rr][cc] = 1;
          }
        }
      }
    }
    setFinder(0, 0);
    setFinder(0, n - 7);
    setFinder(n - 7, 0);
    for (var ar = 20; ar <= 24; ar++) {
      for (var ac = 20; ac <= 24; ac++) {
        rsvd[ar][ac] = true;
        if (ar === 20 || ar === 24 || ac === 20 || ac === 24 || (ar === 22 && ac === 22)) mat[ar][ac] = 1;
      }
    }
    for (i = 8; i < n - 8; i++) {
      rsvd[6][i] = true; mat[6][i] = (i % 2 === 0) ? 1 : 0;
      rsvd[i][6] = true; mat[i][6] = (i % 2 === 0) ? 1 : 0;
    }
    for (i = 0; i < 9; i++) {
      if (i < n) { rsvd[8][i] = true; rsvd[i][8] = true; }
    }
    for (i = 0; i < 8; i++) {
      rsvd[8][n - 1 - i] = true;
      rsvd[n - 1 - i][8] = true;
    }
    mat[n - 8][8] = 1;
    var fmtBits = [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0];
    var fPosA = [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]];
    for (i = 0; i < 15; i++) {
      mat[fPosA[i][0]][fPosA[i][1]] = fmtBits[i];
      if (i < 7) mat[n - 1 - i][8] = fmtBits[i];
      else mat[8][n - 15 + i] = fmtBits[i];
    }
    var bytes = [];
    for (i = 0; i < text.length && bytes.length < 53; i++) bytes.push(text.charCodeAt(i) & 0xFF);
    var bits = [0, 1, 0, 0];
    for (i = 7; i >= 0; i--) bits.push((bytes.length >> i) & 1);
    for (i = 0; i < bytes.length; i++) {
      for (j = 7; j >= 0; j--) bits.push((bytes[i] >> j) & 1);
    }
    for (i = 0; i < 4 && bits.length < 440; i++) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);
    var padBytes = [0xEC, 0x11], pIdx = 0;
    while (bits.length < 440) {
      var pb = padBytes[pIdx++ % 2];
      for (j = 7; j >= 0; j--) bits.push((pb >> j) & 1);
    }
    var dataCw = [];
    for (i = 0; i < 55; i++) {
      var bVal = 0;
      for (j = 0; j < 8; j++) bVal = (bVal << 1) | (bits[i * 8 + j] || 0);
      dataCw.push(bVal);
    }
    var gfExp = new Array(512), gfLog = new Array(256);
    var x = 1;
    for (i = 0; i < 255; i++) {
      gfExp[i] = x; gfLog[x] = i;
      x <<= 1; if (x & 0x100) x ^= 0x11D;
    }
    for (i = 255; i < 512; i++) gfExp[i] = gfExp[i - 255];
    function gfMul(a, b) { return (a === 0 || b === 0) ? 0 : gfExp[gfLog[a] + gfLog[b]]; }
    var gen = [1];
    for (i = 0; i < 15; i++) {
      var nextG = new Array(gen.length + 1).fill(0);
      for (j = 0; j < gen.length; j++) {
        nextG[j] ^= gen[j];
        nextG[j + 1] ^= gfMul(gen[j], gfExp[i]);
      }
      gen = nextG;
    }
    var ecCw = new Array(15).fill(0);
    for (i = 0; i < dataCw.length; i++) {
      var factor = dataCw[i] ^ ecCw[0];
      ecCw.shift(); ecCw.push(0);
      for (j = 0; j < 15; j++) ecCw[j] ^= gfMul(gen[j + 1], factor);
    }
    var allCw = dataCw.concat(ecCw);
    var allBits = [];
    for (i = 0; i < allCw.length; i++) {
      for (j = 7; j >= 0; j--) allBits.push((allCw[i] >> j) & 1);
    }
    var bitPtr = 0, up = true;
    for (var col = n - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      for (var cnt = 0; cnt < n; cnt++) {
        var row = up ? (n - 1 - cnt) : cnt;
        for (var dx = 0; dx < 2; dx++) {
          var cc2 = col - dx;
          if (!rsvd[row][cc2]) {
            var bit = bitPtr < allBits.length ? allBits[bitPtr++] : 0;
            if ((row + cc2) % 2 === 0) bit ^= 1;
            mat[row][cc2] = bit;
          }
        }
      }
      up = !up;
    }
    var dPath = '';
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (mat[i][j]) dPath += 'M' + (j + 2) + ',' + (i + 2) + 'h1v1h-1z';
      }
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" width="' + sz + '" height="' + sz + '" role="img" aria-label="QR: ' + text + '"><rect width="33" height="33" rx="2" fill="#FFFFFF"/><path d="' + dPath + '" fill="#0D1F40"/></svg>';
  }

  function renderProducts(filterCat) {
    var grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = '';

    var list = PRODUCTS.filter(function (p) {
      if (!filterCat || filterCat === 'all') return true;
      if (filterCat.indexOf('brand:') === 0) {
        var bKey = filterCat.slice(6);
        if (bKey === 'zircrown') return p.brand === 'zircrown' || p.cat === 'zirconia';
        if (bKey === 'UZM Dental') return p.brand === 'UZM Dental' || p.cat === 'zirconia' || p.cat === 'pmma';
        if (bKey === 'uzm-endo') return p.brand === 'uzm-endo' || p.cat === 'pmma';
        if (bKey === 'uzm-ekipman') return p.brand === 'uzm-ekipman' || p.cat === 'endo' || p.cat === 'obturation' || p.cat === 'devices';
      }
      return p.cat === filterCat || p.category === filterCat;
    });

    list.forEach(function (p) {
      var article = document.createElement('article');
      article.className = 'uzm-card';
      article.id = 'urun-' + p.id;
      article.setAttribute('data-product-id', p.id);
      article.setAttribute('data-cat', p.cat);
      article.setAttribute('data-brand', p.brand || 'uzm');

      var top = document.createElement('div');
      top.className = 'uzm-card-top';
      var catSpan = document.createElement('span');
      catSpan.className = 'uzm-card-cat';
      catSpan.textContent = p.catLabel;
      var specSpan = document.createElement('span');
      specSpan.className = 'uzm-card-spec';
      specSpan.textContent = p.specBadge;
      top.appendChild(catSpan);
      top.appendChild(specSpan);

      var media = document.createElement('div');
      media.className = 'uzm-card-media';
      var img = document.createElement('img');
      img.className = 'uzm-card-img';
      img.src = p.img;
      img.alt = p.title;
      img.width = 640;
      img.height = 460;
      img.loading = 'lazy';
      media.appendChild(img);

      var body = document.createElement('div');
      body.className = 'uzm-card-body';
      var h3 = document.createElement('h3');
      h3.className = 'uzm-card-title';
      h3.textContent = p.title;
      var sub = document.createElement('p');
      sub.className = 'uzm-card-sub';
      sub.textContent = p.sub;
      body.appendChild(h3);
      body.appendChild(sub);

      var qrUrl = 'https://uzmdental.com/?urun=' + encodeURIComponent(p.id);
      var qrStrip = document.createElement('div');
      qrStrip.className = 'uzm-card-qr-strip';
      var qrThumb = document.createElement('span');
      qrThumb.className = 'uzm-card-qr-thumb';
      qrThumb.innerHTML = renderProductQrSvg(qrUrl, 34);
      var qrMeta = document.createElement('div');
      qrMeta.className = 'uzm-card-qr-meta';
      var qrLot = document.createElement('span');
      qrLot.className = 'uzm-card-qr-lot';
      qrLot.textContent = p.lotCode || 'Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır';
      var qrLink = document.createElement('a');
      qrLink.className = 'uzm-card-qr-link';
      qrLink.href = '/?urun=' + encodeURIComponent(p.id) + '#urunGruplariSection';
      qrLink.textContent = 'QR · IFU & Sertifika →';
      qrLink.addEventListener('click', function (ev) {
        ev.preventDefault();
        playUiTick(620);
        openDrawer(p);
      });
      qrMeta.appendChild(qrLot);
      qrMeta.appendChild(qrLink);
      qrStrip.appendChild(qrThumb);
      qrStrip.appendChild(qrMeta);

      var cta = document.createElement('button');
      cta.type = 'button';
      cta.className = 'uzm-card-cta';
      cta.setAttribute('data-open-drawer', p.id);
      cta.innerHTML = '<span>Teknik Detay, IFU &amp; QR Pasaport</span><span aria-hidden="true">&rarr;</span>';
      cta.addEventListener('click', function () {
        playUiTick(640);
        openDrawer(p);
      });

      article.appendChild(top);
      article.appendChild(media);
      article.appendChild(body);
      article.appendChild(qrStrip);
      article.appendChild(cta);
      grid.appendChild(article);
    });
  }

  function openDrawer(product) {
    activeProduct = product;
    var drawer = document.getElementById('productDetailDrawer');
    if (!drawer) return;

    document.getElementById('drawerCategoryBadge').textContent = product.catLabel;
    document.getElementById('drawerTitle').textContent = product.title;
    document.getElementById('drawerSummary').textContent = product.sub;

    var mainImg = document.getElementById('drawerMainImg');
    mainImg.src = product.gallery[0];
    mainImg.alt = product.title;

    var thumbs = document.getElementById('drawerThumbs');
    thumbs.innerHTML = '';
    product.gallery.forEach(function (src, idx) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'uzm-thumb-btn' + (idx === 0 ? ' is-active' : '');
      var tImg = document.createElement('img');
      tImg.src = src;
      tImg.alt = product.title + ' - Açı ' + (idx + 1);
      tImg.width = 160;
      tImg.height = 115;
      btn.appendChild(tImg);
      btn.addEventListener('click', function () {
        playUiTick(580);
        mainImg.src = src;
        Array.prototype.forEach.call(thumbs.children, function (c) {
          c.classList.remove('is-active');
        });
        btn.classList.add('is-active');
      });
      thumbs.appendChild(btn);
    });

    var varBox = document.getElementById('drawerVariantsBox');
    varBox.innerHTML = '';
    if (product.variants && product.variants.length) {
      var vWrap = document.createElement('div');
      vWrap.className = 'uzm-lens-selector-row';
      product.variants.forEach(function (v, idx) {
        var vBtn = document.createElement('button');
        vBtn.type = 'button';
        vBtn.className = 'uzm-chip-btn' + (idx === 0 ? ' is-active' : '');
        vBtn.textContent = v;
        vBtn.addEventListener('click', function () {
          playUiTick(540);
          Array.prototype.forEach.call(vWrap.children, function (c) {
            c.classList.remove('is-active');
          });
          vBtn.classList.add('is-active');
        });
        vWrap.appendChild(vBtn);
      });
      varBox.appendChild(vWrap);
    }

    var dl = document.getElementById('drawerSpecList');
    dl.innerHTML = '';
    Object.keys(product.specs || {}).forEach(function (k) {
      var dt = document.createElement('dt');
      dt.textContent = k;
      var dd = document.createElement('dd');
      dd.textContent = product.specs[k];
      dl.appendChild(dt);
      dl.appendChild(dd);
    });

    var ifuEl = document.getElementById('drawerIfuText');
    if (ifuEl) ifuEl.textContent = product.ifu || 'KULLANIM TALİMATI (IFU): Ürün teknik protokolüne uygun olarak uygulanır.';
    var certBox = document.getElementById('drawerCertBadges');
    if (certBox) {
      certBox.innerHTML = '';
      (product.certs || ['CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği', 'Üretici Teknik Veri Föyü', 'CIP Ø98.5mm', 'IFU', 'MSDS', '98mm Açık Sistem Uyumluluğu']).forEach(function (c) {
        var sp = document.createElement('span');
        sp.className = 'uzm-cert-pill';
        sp.textContent = '✓ ' + c;
        certBox.appendChild(sp);
      });
    }
    var qrWrap = document.getElementById('drawerQrSvgWrap');
    var deepPath = '/?urun=' + encodeURIComponent(product.id) + '#urunGruplariSection';
    var fullQrUrl = 'https://uzmdental.com/?urun=' + encodeURIComponent(product.id);
    if (qrWrap) qrWrap.innerHTML = renderProductQrSvg(fullQrUrl, 84);
    var qrTitle = document.getElementById('drawerQrProductTitle');
    if (qrTitle) qrTitle.textContent = product.title + ' (' + product.sku + ')';
    var qrUrlEl = document.getElementById('drawerQrDeepUrl');
    if (qrUrlEl) qrUrlEl.textContent = fullQrUrl + '#urunGruplariSection';
    var qrLotEl = document.getElementById('drawerQrLotBadge');
    if (qrLotEl) qrLotEl.textContent = 'LOT: ' + (product.lotCode || 'Kutu & Etiket Üzerindeki LOT / QR ile Doğrulanır') + ' · CIP Soğuk İzostatik Pres · Parti/LOT İzlenebilirliği · Üretici Teknik Veri Föyü · CIP İzostatik Pres · IFU · MSDS · Lot/Seri';
    var pdfBtnEl = document.getElementById('drawerPmmaBrochureLink');
    if (pdfBtnEl) {
      var targetPdf = product.pdfUrl || product.brochureUrl || '/assets/uzm-zircrown-brosur-2026.pdf';
      pdfBtnEl.href = targetPdf;
      if (product.cat === 'zirconia') {
        pdfBtnEl.textContent = 'ZirCrown® Zirkonya Broşürü (PDF) ↗';
      } else if (product.cat === 'pmma') {
        pdfBtnEl.textContent = 'UZM Dental 2026 PMMA Broşürü (PDF) ↗';
      } else {
        pdfBtnEl.textContent = 'Gutta Percha & Paper Points Broşürü (PDF) ↗';
      }
    }
    var qrStat = document.getElementById('drawerQrActionStatus');
    if (qrStat) qrStat.hidden = true;
    try { window.history.replaceState(null, '', deepPath); } catch (e) {}
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('is-open');
  }

  function openProductById(pid) {
    var found = PRODUCTS.find(function (p) { return p.id === pid; });
    if (found) openDrawer(found);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderProducts('all');
    var root = document.documentElement;

    /* Blog ve Kurumsal Paydaş Kartları Render (Sahte data-cat YOK) */
    var blogGrid = document.getElementById('blogGrid');
    if (blogGrid && Array.isArray(BLOG_POSTS)) {
      BLOG_POSTS.forEach(function (b) {
        var card = document.createElement('article');
        card.className = 'uzm-card uzm-editorial-card';
        card.innerHTML =
          '<div class="uzm-card-top"><span class="uzm-card-cat">' + b.cat + '</span></div>' +
          '<div class="uzm-card-media"><img class="uzm-card-img" src="' + b.img + '" alt="' + b.title + '" width="640" height="460" loading="eager" decoding="sync"></div>' +
          '<div class="uzm-card-body"><h3 class="uzm-card-title">' + b.title + '</h3><p class="uzm-card-sub">' + b.summary + '</p></div>';
        blogGrid.appendChild(card);
      });
    }

    var partnerGrid = document.getElementById('partnerGrid');
    if (partnerGrid && Array.isArray(PARTNERS)) {
      PARTNERS.forEach(function (p) {
        var card = document.createElement('article');
        card.className = 'uzm-card uzm-editorial-card';
        card.innerHTML =
          '<div class="uzm-card-top"><span class="uzm-card-cat">' + (p.num || '01') + ' · KURUMSAL PAYDAŞ GRUBU</span></div>' +
          '<div class="uzm-card-body"><h3 class="uzm-card-title">' + p.title + '</h3><p class="uzm-card-sub">' + p.desc + '</p></div>';
        partnerGrid.appendChild(card);
      });
    }

    /* Stüdyo Seçici: Hem mobilde (kompakt şerit — Grok Rev51 ŞERH-2) hem masaüstünde varsayılan AÇIK */
    var studioToggle = document.getElementById('studioBarToggleBtn');
    var studioBar = document.getElementById('uzmDesignStudioBar');
    var isReviewMode = (window.location.search.indexOf('inceleme=gokhan') !== -1 || window.location.search.indexOf('studio=1') !== -1);
    if (studioToggle && studioBar) {
      if (isReviewMode) {
        studioToggle.removeAttribute('hidden');
        studioToggle.style.display = '';
        studioBar.removeAttribute('hidden');
        studioBar.classList.remove('is-collapsed');
        studioBar.style.display = 'block';
        studioToggle.setAttribute('aria-expanded', 'true');
        studioToggle.textContent = 'Tasarım Seçici: Açık';
      } else {
        studioToggle.setAttribute('hidden', '');
        studioToggle.style.display = 'none';
        studioBar.setAttribute('hidden', '');
        studioBar.style.display = 'none';
        studioToggle.setAttribute('aria-expanded', 'false');
      }
      studioToggle.addEventListener('click', function () {
        var isHidden = studioBar.hasAttribute('hidden');
        if (isHidden) {
          studioBar.removeAttribute('hidden');
          studioBar.style.display = 'block';
          studioToggle.setAttribute('aria-expanded', 'true');
          studioToggle.textContent = 'Tasarım Seçici: Açık';
        } else {
          studioBar.setAttribute('hidden', '');
          studioBar.style.display = 'none';
          studioToggle.setAttribute('aria-expanded', 'false');
          studioToggle.textContent = 'Tasarım Seçici: Kapalı';
        }
      });
    }

    /* Açılır-Kapanır Tüm Ürünler & Hızlı Menü (Tüm Ürünler & Hızlı Menü ▾ <-> ✕ Menüyü Kapat ▴) */
    var menuBtn = document.getElementById('editorialMenuBtn');
    var menuCloseBtn = document.getElementById('editorialMenuCloseBtn');
    var menuOverlay = document.getElementById('editorialMenuOverlay');
    function setEditorialMenuOpen(openState) {
      if (!menuBtn || !menuOverlay) return;
      var lbl = menuBtn.querySelector('.uzm-menu-btn-label') || menuBtn;
      if (openState) {
        menuOverlay.removeAttribute('hidden');
        menuOverlay.classList.add('is-open');
        menuBtn.setAttribute('aria-expanded', 'true');
        lbl.textContent = '✕ Menüyü Kapat ▴';
      } else {
        menuOverlay.setAttribute('hidden', '');
        menuOverlay.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        lbl.textContent = 'Tüm Ürünler & Hızlı Menü ▾';
      }
    }
    if (menuBtn && menuOverlay) {
      menuBtn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var isHidden = menuOverlay.hasAttribute('hidden');
        setEditorialMenuOpen(isHidden);
      });
      if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function () {
          setEditorialMenuOpen(false);
        });
      }
      menuOverlay.querySelectorAll('a, button[data-open-product]').forEach(function (el) {
        el.addEventListener('click', function () {
          setEditorialMenuOpen(false);
        });
      });
      document.addEventListener('click', function (ev) {
        if (!menuOverlay.hasAttribute('hidden')) {
          if (!menuOverlay.contains(ev.target) && !menuBtn.contains(ev.target)) {
            setEditorialMenuOpen(false);
          }
        }
      });
      document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape' && !menuOverlay.hasAttribute('hidden')) {
          setEditorialMenuOpen(false);
        }
      });
    }

    /* 4 Oval Marka Hapı & Marka Filtreleri */
    function applyBrandFilter(bKey) {
      playUiTick(560);
      document.querySelectorAll('[data-brand-filter]').forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-brand-filter') === bKey);
      });
      if (!bKey || bKey === 'all') {
        renderProducts('all');
      } else {
        renderProducts('brand:' + bKey);
      }
      var sec = document.getElementById('urunGruplariSection');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
    document.querySelectorAll('[data-brand-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyBrandFilter(btn.getAttribute('data-brand-filter'));
      });
    });
    document.querySelectorAll('[data-brand-jump]').forEach(function (link) {
      link.addEventListener('click', function () {
        var bKey = link.getAttribute('data-brand-jump');
        setEditorialMenuOpen(false);
        applyBrandFilter(bKey);
      });
    });

    /* Çekmece QR Link Kopyalama ve LOT & Lot/Seri Doğrulama */
    var copyQrBtn = document.getElementById('drawerCopyQrLinkBtn');
    var verifyLotBtn = document.getElementById('drawerVerifyLotBtn');
    var qrStatusEl = document.getElementById('drawerQrActionStatus');
    if (copyQrBtn) {
      copyQrBtn.addEventListener('click', function () {
        var pid = activeProduct ? activeProduct.id : '5d-ml';
        var urlToCopy = window.location.origin + '/?urun=' + encodeURIComponent(pid) + '#urunGruplariSection';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(urlToCopy).catch(function () {});
        }
        if (qrStatusEl) {
          qrStatusEl.hidden = false;
          qrStatusEl.textContent = '✓ Doğrudan ürün QR bağlantısı panoya kopyalandı: ' + urlToCopy;
        }
      });
    }
    if (verifyLotBtn) {
      verifyLotBtn.addEventListener('click', function () {
        if (qrStatusEl) {
          qrStatusEl.hidden = false;
          qrStatusEl.textContent = 'Ürün kutusu ve disk etiketi üzerindeki LOT numarası ve QR kod ile üretim partisi, CE / ISO 13485 ve ÜTS kaydı doğrulanabilir. Sorgulama için LOT numarasını WhatsApp (+90 542 646 02 20) veya e-posta (uzmandisdental@gmail.com) üzerinden iletebilirsiniz.';
        }
        var lotSec = document.getElementById('uzm-lot-dogrulama');
        if (lotSec && lotSec.scrollIntoView) {
          lotSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    /* ?urun=<id> ve #urun-<id> Derin Link Otomatik Açıcı */
    function checkDeepProductLink() {
      try {
        var params = new URLSearchParams(window.location.search || '');
        var qUrun = params.get('urun');
        if (qUrun) {
          openProductById(qUrun);
          return;
        }
        var h = (window.location.hash || '').replace(/^#/, '');
        if (h.indexOf('urun-') === 0) {
          openProductById(h.slice(5));
        }
      } catch (e) {}
    }
    checkDeepProductLink();
    window.addEventListener('hashchange', checkDeepProductLink);

    /* Matris Sekme Geçişi */
    document.querySelectorAll('[data-matrix-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-matrix-tab');
        playUiTick(560);
        document.querySelectorAll('[data-matrix-tab]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        document.getElementById('zirconiaMatrix').hidden = targetId !== 'zirconiaMatrix';
        document.getElementById('endoMatrix').hidden = targetId !== 'endoMatrix';
      });
    });

    /* Hero Mod 2 Story Adımları */
    document.querySelectorAll('.uzm-story-step').forEach(function (stepBtn) {
      stepBtn.addEventListener('click', function () {
        document.querySelectorAll('.uzm-story-step').forEach(function (s) {
          s.classList.toggle('is-active', s === stepBtn);
        });
      });
    });

    /* Çekmeceden Teklif Formuna Aktarım */
    var quoteBtn = document.getElementById('drawerRequestQuoteBtn');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', function () {
        if (activeProduct) {
          var input = document.getElementById('seciliUrunOzet');
          if (input) input.value = activeProduct.title + ' (' + activeProduct.specBadge + ')';
        }
        var dr = document.getElementById('productDetailDrawer');
        if (dr) { dr.setAttribute('aria-hidden', 'true'); dr.classList.remove('is-open'); }
        var contactSec = document.getElementById('iletisimSection');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    /* Gökhan Bey Canlı Tasarım Özeti ve Sunucu Kaydı */
    function getStudioLabels() {
      var tKey = root.getAttribute('data-theme') || 'zircrown-5d';
      var fKey = root.getAttribute('data-font') || 'swiss';
      var hKey = root.getAttribute('data-hero-mode') || 'interactive';
      var palMap = {
        'zircrown-5d': '01 · ZirCrown 5D-ML Orijinal Spektrum (Lagün · Safir · Kehribar)',
        'zircrown-aqua': '02 · ZirCrown Lagün Turkuaz & Su Yeşili (3D-Pro Aqua)',
        'zircrown-amber': '03 · ZirCrown Dentin Kehribar & Şampanya Altın (5D Sıcak)',
        'zircrown-st': '04 · ZirCrown ST-ML & Hızlı Sinterleme 3D-PRO',
        'cobalt-corporate': '01 · ZirCrown 5D-ML Orijinal Spektrum (Lagün · Safir · Kehribar)',
        'hepsiburada': '02 · ZirCrown Lagün Turkuaz & Su Yeşili (3D-Pro Aqua)',
        'vatan': '03 · ZirCrown Dentin Kehribar & Şampanya Altın (5D Sıcak)',
        'emerald-clinical': '04 · ZirCrown ST-ML Safir & Çelik Mavisi (ST-ML Orijinal)'
      };
      var fontMap = {
        'swiss': 'A · Geometrik Tekno + Mono (Plus Jakarta Sans / Space Grotesk)',
        'editorial': 'B · Editöryal Vurgu + Sans (Inter Tight / Instrument Serif)',
        'industrial': 'C · Alman Endüstriyel (Space Grotesk)'
      };
      var heroMap = {
        'interactive': 'Mod 1 · Canlı Optik & Endo Merceği (Mod A)',
        'story': 'Mod 2 · 4 Aşamalı Sinematik Akış (Mod B)',
        'cockpit': 'Mod 3 · Hızlı Spek Kokpiti (Mod C)'
      };
      return {
        palette: palMap[tKey] || tKey,
        typo: fontMap[fKey] || fKey,
        hero: heroMap[hKey] || hKey
      };
    }

    function syncGokhanStudioReadout() {
      var st = getStudioLabels();
      var bp = document.getElementById('gokhanBadgePalette');
      var bf = document.getElementById('gokhanBadgeFont');
      var bh = document.getElementById('gokhanBadgeHero');
      if (bp) bp.textContent = st.palette;
      if (bf) bf.textContent = st.typo;
      if (bh) bh.textContent = st.hero;
      var el = document.getElementById('gokhanActiveStudioInput');
      if (el) el.value = 'Palet=' + st.palette + ', Font=' + st.typo + ', Hero=' + st.hero;
    }

    function renderGokhanSavedNotes(list) {
      var box = document.getElementById('gokhanSavedNotesList');
      if (!box) return;
      if (!list || !list.length) {
        box.innerHTML = '<div class="uzm-check-item"><span>Henüz kayıtlı revizyon notu bulunmuyor — formu gönderdiğinizde burada anında listelenir.</span></div>';
        return;
      }
      box.innerHTML = '';
      list.slice().reverse().forEach(function (item) {
        var row = document.createElement('div');
        row.className = 'uzm-check-item uzm-summary-stack';
        var ts = (item.ts || '').slice(0, 16).replace('T', ' ');
        var sl = item.custom_slogan || item.slogan || '';
        var gn = item.general_note || '';
        row.innerHTML = '<span class="uzm-summary-lbl">' + (ts || 'Yeni Kayıt') + ' · ' + (item.author || 'Gökhan Bey') + '</span>' +
          '<strong class="uzm-summary-val">Slogan: ' + sl + (gn ? ' | Not: ' + gn : '') + '</strong>';
        box.appendChild(row);
      });
    }

    document.querySelectorAll('[data-set-theme], [data-set-font], [data-set-hero]').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-set-theme');
        if (t) root.setAttribute('data-theme', t);
        var pal = b.getAttribute('data-set-palette');
        if (pal) root.setAttribute('data-uzm-palette', pal);
        var f = b.getAttribute('data-set-font');
        if (f) root.setAttribute('data-font', f);
        var h = b.getAttribute('data-set-hero');
        if (h) root.setAttribute('data-hero-mode', h);
        syncGokhanStudioReadout();
      });
    });
    syncGokhanStudioReadout();
    renderGokhanSavedNotes(INITIAL_GOKHAN_NOTES);

    var gokhanForm = document.getElementById('gokhanReviewForm');
    if (gokhanForm) {
      gokhanForm.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var statusEl = document.getElementById('gokhanFeedbackStatus');
        var st = getStudioLabels();
        var sloganEl = document.querySelector('input[name="gokhan_slogan"]:checked');
        var sloganVal = sloganEl ? sloganEl.value : '15 Yıllık Tecrübe, Yüksek Boyutsal Hassasiyet — Klinik ve Laboratuvarın Güvenilir Tedarikçisi';
        var customSloganVal = ((document.getElementById('gokhanCustomSlogan') || {}).value || '').trim();
        var checks = [];
        document.querySelectorAll('input[name="missing_checks"]:checked').forEach(function (c) { checks.push(c.value); });
        var notesObj = {
          secili_tasarim: 'Palet=' + st.palette + ', Font=' + st.typo + ', Hero=' + st.hero
        };
        document.querySelectorAll('input[data-check-note]').forEach(function (inp) {
          var k = inp.getAttribute('data-check-note');
          var v = (inp.value || '').trim();
          if (k && v) notesObj[k] = v;
        });
        var rawGeneral = ((document.getElementById('gokhanGeneralNote') || {}).value || '').trim();
        var prefix = '[Seçili Tasarım: Palet=' + st.palette + ', Font=' + st.typo + ', Hero=' + st.hero + '] ';
        var payload = {
          slogan: sloganVal,
          custom_slogan: customSloganVal,
          missing_checks: checks,
          missing_notes: notesObj,
          general_note: prefix + rawGeneral,
          author: 'Gökhan Bey / UZM Dental (Canlı Panel)'
        };
        fetch('/api/gokhan-geri-bildirim', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'UZM-Cockpit'
          },
          body: JSON.stringify(payload)
        }).then(function (r) { return r.json(); }).then(function (res) {
          INITIAL_GOKHAN_NOTES.push({
            ts: (res && res.saved && res.saved.ts) ? res.saved.ts : new Date().toISOString(),
            author: payload.author,
            slogan: payload.slogan,
            custom_slogan: payload.custom_slogan,
            general_note: payload.general_note
          });
          renderGokhanSavedNotes(INITIAL_GOKHAN_NOTES);
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent = (res && res.ok)
              ? 'Teşekkürler Gökhan Bey — Seçtiğiniz tasarım kombinasyonu (' + prefix.trim() + '), slogan ve 6 bölüm değerlendirmeniz canlı sicile kaydedildi.'
              : 'Kayıt sırasında uyarı oluştu, lütfen tekrar deneyin.';
          }
        }).catch(function () {
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent = 'Değerlendirmeniz yerel inceleme kuyruğuna alındı.';
          }
        });
      });
    }

    var b2bForm = document.getElementById('b2bQuoteForm');
    if (b2bForm) {
      b2bForm.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var msg = document.getElementById('formFeedbackMsg');
        var payload = {
          slogan: 'B2B Kurumsal Teklif: ' + ((document.getElementById('seciliUrunOzet') || {}).value || 'Genel Katalog'),
          custom_slogan: ((document.getElementById('kurumAdi') || {}).value || '').trim(),
          missing_checks: ['B2B Kurumsal Teklif / Numune Talebi'],
          missing_notes: {
            kurumAdi: ((document.getElementById('kurumAdi') || {}).value || '').trim(),
            yetkiliKisi: ((document.getElementById('yetkiliKisi') || {}).value || '').trim(),
            telefonNo: ((document.getElementById('telefonNo') || {}).value || '').trim(),
            seciliUrunOzet: ((document.getElementById('seciliUrunOzet') || {}).value || '').trim()
          },
          general_note: ((document.getElementById('mesajNot') || {}).value || '').trim(),
          author: ((document.getElementById('yetkiliKisi') || {}).value || '').trim() || 'B2B Kurumsal Talep'
        };
        fetch('/api/gokhan-geri-bildirim', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'UZM-Cockpit'
          },
          body: JSON.stringify(payload)
        }).catch(function () { return null; }).finally(function () {
          if (msg) {
            msg.hidden = false;
            msg.textContent = 'Talebiniz ve ürün/varyant seçiminiz kurumsal tedarik masasına iletildi.';
          }
          b2bForm.reset();
        });
      });
    }

    /* Renk Teması Seçici */
    document.querySelectorAll('[data-set-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playUiTick(600);
        root.setAttribute('data-theme', btn.getAttribute('data-set-theme'));
        document.querySelectorAll('[data-set-theme]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });

    /* Yazı Karakteri Seçici */
    document.querySelectorAll('[data-set-font]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playUiTick(560);
        root.setAttribute('data-font', btn.getAttribute('data-set-font'));
        document.querySelectorAll('[data-set-font]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });

    /* İlk Giriş (Hero) Modu Seçici */
    document.querySelectorAll('[data-set-hero]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playUiTick(620);
        var mode = btn.getAttribute('data-set-hero');
        root.setAttribute('data-hero-mode', mode);
        document.querySelectorAll('[data-set-hero]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        document.getElementById('heroPanelInteractive').hidden = mode !== 'interactive';
        document.getElementById('heroPanelStory').hidden = mode !== 'story';
        document.getElementById('heroPanelCockpit').hidden = mode !== 'cockpit';
      });
    });

    /* Canlı Mercek Disiplin Sekmeleri */
    document.querySelectorAll('[data-lens-discipline]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        playUiTick(580);
        var disc = tab.getAttribute('data-lens-discipline');
        document.querySelectorAll('[data-lens-discipline]').forEach(function (t) {
          t.classList.toggle('is-active', t === tab);
        });
        document.getElementById('lensZirconiaBox').hidden = disc !== 'zirconia';
        document.getElementById('lensEndoBox').hidden = disc !== 'endo';
      });
    });

    /* Zirkonyum & Endo Presetleri */
    document.querySelectorAll('[data-zir-preset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playUiTick(540);
        var d = ZIR_PRESETS[btn.getAttribute('data-zir-preset')];
        if (!d) return;
        document.querySelectorAll('[data-zir-preset]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        document.getElementById('zirTransReadout').textContent = d.trans;
        document.getElementById('zirMpaReadout').textContent = d.mpa;
        document.getElementById('zirIndReadout').textContent = d.ind;
        document.getElementById('heroInteractiveImg').src = d.img;
      });
    });

    document.querySelectorAll('[data-endo-preset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playUiTick(540);
        var d = ENDO_PRESETS[btn.getAttribute('data-endo-preset')];
        if (!d) return;
        document.querySelectorAll('[data-endo-preset]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        document.getElementById('endoFileReadout').textContent = d.file;
        document.getElementById('endoTorqueReadout').textContent = d.torque;
        document.getElementById('endoObtReadout').textContent = d.obt;
        document.getElementById('heroInteractiveImg').src = d.img;
      });
    });

    /* Kategori Filtreleri */
    document.querySelectorAll('[data-filter], [data-filter-trigger]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter') || btn.getAttribute('data-filter-trigger');
        playUiTick(520);
        renderProducts(f);
        document.querySelectorAll('[data-filter]').forEach(function (t) {
          t.classList.toggle('is-active', t.getAttribute('data-filter') === f);
        });
      });
    });

    /* Kokpit Kutuları */
    document.querySelectorAll('[data-open-product]').forEach(function (box) {
      box.addEventListener('click', function () {
        openProductById(box.getAttribute('data-open-product'));
      });
    });

    /* Çekmece Kapatma */
    var closeBtn = document.getElementById('drawerCloseBtn');
    var backdrop = document.getElementById('drawerBackdrop');
    if (closeBtn) closeBtn.addEventListener('click', function () { var dr = document.getElementById('productDetailDrawer'); if (dr) { dr.setAttribute('aria-hidden', 'true'); dr.classList.remove('is-open'); } });
    if (backdrop) backdrop.addEventListener('click', function () { var dr = document.getElementById('productDetailDrawer'); if (dr) { dr.setAttribute('aria-hidden', 'true'); dr.classList.remove('is-open'); } });
  });
})();
/* === UZM_REV54_STUDIO_40_INJECT === */
window.UZM_STUDIO_40 = [
  {
    "id": "img_7207",
    "code": "IMG_7207",
    "src": "/images/products/studio_40/IMG_7207.jpg",
    "cat": "3d-ml",
    "title": "ZirCrown® 3D-ML · VITA A2 (3 Üye Köprü)",
    "badge": "3D-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7208",
    "code": "IMG_7208",
    "src": "/images/products/studio_40/IMG_7208.jpg",
    "cat": "3d-ml",
    "title": "ZirCrown® 3D-ML · VITA A2 (Oklüzal Açı)",
    "badge": "3D-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7220",
    "code": "IMG_7220",
    "src": "/images/products/studio_40/IMG_7220.jpg",
    "cat": "3d-ml",
    "title": "ZirCrown® 3D-ML · VITA D2 (3 Üye Köprü)",
    "badge": "3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7221",
    "code": "IMG_7221",
    "src": "/images/products/studio_40/IMG_7221.jpg",
    "cat": "3d-ml",
    "title": "ZirCrown® 3D-ML · VITA D2 (Yakın Plan)",
    "badge": "3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7222",
    "code": "IMG_7222",
    "src": "/images/products/studio_40/IMG_7222.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA A2 (Monolitik Köprü)",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7223",
    "code": "IMG_7223",
    "src": "/images/products/studio_40/IMG_7223.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA A2 (Bukkal Profil)",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7224",
    "code": "IMG_7224",
    "src": "/images/products/studio_40/IMG_7224.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA A2 (Yüksek Translüsensi)",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7225",
    "code": "IMG_7225",
    "src": "/images/products/studio_40/IMG_7225.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA A2 (Oklüzal Morfoloji)",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7227",
    "code": "IMG_7227",
    "src": "/images/products/studio_40/IMG_7227.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA D2 (Monolitik Köprü)",
    "badge": "ST-ML · D2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7228",
    "code": "IMG_7228",
    "src": "/images/products/studio_40/IMG_7228.jpg",
    "cat": "zircrown-st",
    "title": "ZirCrown® ST-ML · VITA D2 (Ayna Yansıma)",
    "badge": "ST-ML · D2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7230",
    "code": "IMG_7230",
    "src": "/images/products/studio_40/IMG_7230.jpg",
    "cat": "zircrown-st",
    "title": "ST-ML D2 vs ST-ML A2 Renk Karşılaştırması",
    "badge": "ST-ML · D2 | ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7231",
    "code": "IMG_7231",
    "src": "/images/products/studio_40/IMG_7231.jpg",
    "cat": "zircrown-st",
    "title": "ST-ML D2 vs ST-ML A2 Çift Açı",
    "badge": "ST-ML · D2 | ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7233",
    "code": "IMG_7233",
    "src": "/images/products/studio_40/IMG_7233.jpg",
    "cat": "3d-ml",
    "title": "ST-ML D2 vs 3D-ML D2 Seri Karşılaştırması",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7234",
    "code": "IMG_7234",
    "src": "/images/products/studio_40/IMG_7234.jpg",
    "cat": "3d-ml",
    "title": "ST-ML D2 vs 3D-ML D2 Gradyan Geçiş",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7235",
    "code": "IMG_7235",
    "src": "/images/products/studio_40/IMG_7235.jpg",
    "cat": "3d-ml",
    "title": "3D-ML A2 vs ST-ML A2 Translüsensi Kıyas",
    "badge": "3D-ML · A2 | ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7236",
    "code": "IMG_7236",
    "src": "/images/products/studio_40/IMG_7236.jpg",
    "cat": "3d-ml",
    "title": "3D-ML A2 vs 3D-ML D2 Ton Karşılaştırması",
    "badge": "3D-ML · A2 | 3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7237",
    "code": "IMG_7237",
    "src": "/images/products/studio_40/IMG_7237.jpg",
    "cat": "3d-ml",
    "title": "3D-ML A2 vs 3D-ML D2 İnsizal Işık Geçirgenliği",
    "badge": "3D-ML · A2 | 3D-ML · D2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7240",
    "code": "IMG_7240",
    "src": "/images/products/studio_40/IMG_7240.jpg",
    "cat": "3d-ml",
    "title": "3D-ML A2 vs ST-ML A2 İkili Köprü",
    "badge": "3D-ML · A2 | ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7241",
    "code": "IMG_7241",
    "src": "/images/products/studio_40/IMG_7241.jpg",
    "cat": "3d-ml",
    "title": "3D-ML A2 vs ST-ML A2 Oklüzal Kıyas",
    "badge": "3D-ML · A2 | ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": true
  },
  {
    "id": "img_7246",
    "code": "IMG_7246",
    "src": "/images/products/studio_40/IMG_7246.jpg",
    "cat": "3d-ml",
    "title": "VITA A2 Skalası İle 3D-ML A2 vs ST-ML A2 Doğrulaması",
    "badge": "3D-ML · A2 | ST-ML · A2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7247",
    "code": "IMG_7247",
    "src": "/images/products/studio_40/IMG_7247.jpg",
    "cat": "3d-ml",
    "title": "VITA A2 Tab İle Birebir Kroma Eşleşmesi",
    "badge": "3D-ML · A2 | ST-ML · A2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7248",
    "code": "IMG_7248",
    "src": "/images/products/studio_40/IMG_7248.jpg",
    "cat": "3d-ml",
    "title": "VITA D2 Skalası İle ST-ML D2 vs 3D-ML D2 Doğrulaması",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7249",
    "code": "IMG_7249",
    "src": "/images/products/studio_40/IMG_7249.jpg",
    "cat": "3d-ml",
    "title": "VITA D2 Tab İle Servikal-İnsizal Geçiş",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7250",
    "code": "IMG_7250",
    "src": "/images/products/studio_40/IMG_7250.jpg",
    "cat": "3d-ml",
    "title": "VITA D2 Referanslı Çift Seri Karşılaştırması",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7251",
    "code": "IMG_7251",
    "src": "/images/products/studio_40/IMG_7251.jpg",
    "cat": "3d-ml",
    "title": "VITA D2 Skalası Altında Doğal Floresans",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7252",
    "code": "IMG_7252",
    "src": "/images/products/studio_40/IMG_7252.jpg",
    "cat": "3d-ml",
    "title": "VITA D2 Skalası Ön-Arka Yansıma Analizi",
    "badge": "ST-ML · D2 | 3D-ML · D2",
    "hasVitaTab": true,
    "isComparison": true
  },
  {
    "id": "img_7253",
    "code": "IMG_7253",
    "src": "/images/products/studio_40/IMG_7253.jpg",
    "cat": "4d-ml",
    "title": "Alçı Model Üzerinde ZirCrown® ST-ML · VITA A2 Restorasyon",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7255",
    "code": "IMG_7255",
    "src": "/images/products/studio_40/IMG_7255.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® Multilayer Uzun Ark Köprü (Bukkal Görünüm)",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7256",
    "code": "IMG_7256",
    "src": "/images/products/studio_40/IMG_7256.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® Multilayer Uzun Ark Köprü (İnsizal Translüsensi)",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7257",
    "code": "IMG_7257",
    "src": "/images/products/studio_40/IMG_7257.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® Multilayer Uzun Ark Köprü (Oklüzal Ark)",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7258",
    "code": "IMG_7258",
    "src": "/images/products/studio_40/IMG_7258.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® ST-ML · VITA A2 Uzun Ark Anterior-Posterior Köprü",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7259",
    "code": "IMG_7259",
    "src": "/images/products/studio_40/IMG_7259.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® ST-ML · VITA A2 Tam Ark Estetik Geçiş",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7260",
    "code": "IMG_7260",
    "src": "/images/products/studio_40/IMG_7260.jpg",
    "cat": "5d-ml",
    "title": "ZirCrown® ST-ML · VITA A2 Gingival-İnsizal Gradyan",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7261",
    "code": "IMG_7261",
    "src": "/images/products/studio_40/IMG_7261.jpg",
    "cat": "4d-ml",
    "title": "ZirCrown® ST-ML · VITA A2 Çok Üyeli Ark",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7262",
    "code": "IMG_7262",
    "src": "/images/products/studio_40/IMG_7262.jpg",
    "cat": "4d-ml",
    "title": "ZirCrown® ST-ML · VITA A2 Lingual-Oklüzal Detay",
    "badge": "ST-ML · A2",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7263",
    "code": "IMG_7263",
    "src": "/images/products/studio_40/IMG_7263.jpg",
    "cat": "3d-pro",
    "title": "ZirCrown® CAD/CAM Kazınmış Disk İçi Köprü Yuvaları",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7264",
    "code": "IMG_7264",
    "src": "/images/products/studio_40/IMG_7264.jpg",
    "cat": "3d-pro",
    "title": "ZirCrown® 3D-PRO A2 (Ø98×18mm) Kutu ve Kazınmış Disk",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7265",
    "code": "IMG_7265",
    "src": "/images/products/studio_40/IMG_7265.jpg",
    "cat": "3d-pro",
    "title": "ZirCrown® 3D-PRO A2 Resmi Kutu & CAD/CAM Disk Seti",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7266",
    "code": "IMG_7266",
    "src": "/images/products/studio_40/IMG_7266.jpg",
    "cat": "3d-pro",
    "title": "ZirCrown® 3D-PRO A2 18mm Disk ve Sinter Öncesi Kazıma",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  },
  {
    "id": "img_7267",
    "code": "IMG_7267",
    "src": "/images/products/studio_40/IMG_7267.jpg",
    "cat": "3d-pro",
    "title": "ZirCrown® 3D-PRO Multilayer Zirconia Disc Stüdyo Kompozisyonu",
    "badge": "ZirCrown® CAD/CAM Stüdyo",
    "hasVitaTab": false,
    "isComparison": false
  }
];

(function initRev54Studio40AndCatalog() {
  function bindStudio40Gallery() {
    var grid = document.getElementById('uzmStudio40Grid');
    if (!grid || !window.UZM_STUDIO_40) return;
    var buttons = document.querySelectorAll('[data-studio40-filter]');

    function renderStudio40(filterKey) {
      var list = window.UZM_STUDIO_40.filter(function(item) {
        if (!filterKey || filterKey === 'all') return true;
        if (filterKey === 'vita-tab') return !!item.hasVitaTab;
        if (filterKey === '4d-5d') return item.cat === '4d-ml' || item.cat === '5d-ml';
        return item.cat === filterKey;
      });
      grid.innerHTML = list.map(function(item) {
        return '<article class="uzm-studio40-card" data-cat="' + item.cat + '" data-code="' + item.code + '">' +
          '<div class="uzm-studio40-img-wrap">' +
            '<img src="' + item.src + '" alt="' + item.title.replace(/"/g, '&quot;') + '" loading="eager" decoding="sync" />' +
            '' +
          '</div>'+
        '</article>';
      }).join('');
    }

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderStudio40(btn.getAttribute('data-studio40-filter'));
      });
    });

    var params = new URLSearchParams(window.location.search || '');
    var hashCat = (window.location.hash || '').replace(/^#/, '');
    var initCat = params.get('kategori') || (['all','3d-ml','zircrown-st','vita-tab','4d-5d','3d-pro'].indexOf(hashCat) !== -1 ? hashCat : 'all');
    buttons.forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-studio40-filter') === initCat);
    });
    renderStudio40(initCat);
    if (!grid.dataset.boundClick) {
      grid.dataset.boundClick = 'true';
      grid.addEventListener('click', function(ev) {
        var card = ev.target.closest('.uzm-studio40-card[data-code]');
        if (card && window.openUzmStudio40Modal) {
          window.openUzmStudio40Modal(card.getAttribute('data-code'));
        }
      });
    }
  }

    window.openUzmStudio40Modal = function(code) {
    var item = (window.UZM_STUDIO_40 || []).find(function(x) { return x.code === code; });
    if (!item) {
      item = { code: code, src: '/images/products/studio_40/' + code + '.jpg', title: 'ZirCrown® Sinterlenmiş Restorasyon (' + code + ')', badge: code };
    }
    var modal = document.getElementById('uzmStudio40Lightbox');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'uzmStudio40Lightbox';
      modal.className = 'uzm-studio40-lightbox';
      modal.innerHTML =
        '<div class="uzm-studio40-lightbox-backdrop" data-close-studio40="true"></div>' +
        '<div class="uzm-studio40-lightbox-dialog">' +
          '<button type="button" class="uzm-studio40-lightbox-close" data-close-studio40="true" aria-label="Kapat">&times;</button>' +
          '<img id="uzmStudio40LightboxImg" src="" alt="" />' +
          '<div class="uzm-studio40-lightbox-caption">' +
            '<span id="uzmStudio40LightboxBadge" class="uzm-studio40-plaque-pill"></span>' +
            '<h3 id="uzmStudio40LightboxTitle"></h3>' +
          '</div>' +
        '</div>';
      document.body.appendChild(modal);
      modal.addEventListener('click', function(ev) {
        if (ev.target.closest('[data-close-studio40]')) {
          modal.classList.remove('open');
        }
      });
      document.addEventListener('keydown', function(ev) {
        if (ev.key === 'Escape' && modal.classList.contains('open')) {
          modal.classList.remove('open');
        }
      });
    }
    var imgEl = document.getElementById('uzmStudio40LightboxImg');
    var rawSrc = item.src || '';
    imgEl.src = rawSrc.startsWith('/') ? rawSrc : ('/' + rawSrc);
    imgEl.alt = item.title;
    var cleanBadge = (item.badge || item.code || '').replace(/\s*\([A-Za-z0-9_-]+\)/g, '').trim();
    var badgeEl = document.getElementById('uzmStudio40LightboxBadge');
    if (badgeEl) {
      badgeEl.textContent = cleanBadge;
      badgeEl.style.display = cleanBadge ? 'inline-block' : 'none';
    }
    var titleEl = document.getElementById('uzmStudio40LightboxTitle');
    if (titleEl) {
      titleEl.textContent = item.title;
    }
    modal.classList.add('open');
  };

  // Global click delegator for any studio restoration image (zoom/lightbox)
  document.addEventListener('click', function(ev) {
    var trigger = ev.target.closest('.uzm-studio-visual, .uzm-studio-img, .uzm-studio-card');
    if (!trigger) return;
    if (ev.target.closest('a') && !ev.target.closest('.uzm-studio-visual')) return;
    var img = trigger.querySelector('img') || (trigger.tagName === 'IMG' ? trigger : null);
    if (!img) return;
    var src = img.getAttribute('src') || '';
    var match = src.match(/(IMG_\d+)/i);
    if (match && match[1] && window.openUzmStudio40Modal) {
      ev.preventDefault();
      window.openUzmStudio40Modal(match[1].toUpperCase());
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindStudio40Gallery);
  } else {
    bindStudio40Gallery();
  }
})();
window.UZM_ZIRCROWN_HD_BROCHURE = { url: '/assets/uzm-zircrown-brosur-2026-hd.pdf', label: 'Orijinal Baskı Kalitesi HD PDF İndir · 21.5 MB' };


/* Rev58: Her ZirCrown Blok Kartından /studyo-galeri.html#<kategori> Derin Bağlantısı + Cockpit Guard */
(function initRev58DeepLinksAndCockpitGuard() {
  var params = new URLSearchParams(window.location.search || '');
  if (params.get('inceleme') === 'gokhan' || params.get('cockpit') === '1') {
    var gp = document.getElementById('uzmDeprecatedPanelRemoved');
    if (gp) { gp.hidden = false; gp.style.display = ''; gp.classList.remove('is-cockpit-hidden'); }
  }
  var mapCat = {
    '5d-ml': { cat: '4d-5d', label: 'Fırınlanmış 5D-ML Stüdyo Kareleri (Ayrı Sayfa) ↗' },
    '4d-ml': { cat: '4d-5d', label: 'Fırınlanmış 4D-ML Stüdyo Kareleri (Ayrı Sayfa) ↗' },
    '3d-pro': { cat: '3d-pro', label: 'Fırınlanmış 3D-PRO Stüdyo Kareleri (Ayrı Sayfa) ↗' },
    '3d-ml': { cat: '3d-ml', label: 'Fırınlanmış 3D-ML Stüdyo Kareleri (Ayrı Sayfa) ↗' },
    'st-ml': { cat: 'zircrown-st', label: 'Fırınlanmış ST-ML Stüdyo Kareleri (Ayrı Sayfa) ↗' },
    'zircrown-st': { cat: 'zircrown-st', label: 'Fırınlanmış ST-ML Stüdyo Kareleri (Ayrı Sayfa) ↗' }
  };
  function attachDeepLinks() {
    var cards = document.querySelectorAll('#productGrid article.uzm-card[data-cat="zirconia"]');
    cards.forEach(function(card) {
      if (card.querySelector('.uzm-studio-deeplink')) return;
      var pid = card.getAttribute('data-product-id') || '';
      var cfg = mapCat[pid];
      if (!cfg) return;
      var a = document.createElement('a');
      a.className = 'uzm-studio-deeplink';
      a.href = '/studyo-galeri.html?kategori=' + cfg.cat + '#' + cfg.cat;
      a.textContent = cfg.label;
      a.style.cssText = 'display:block; margin:8px 0 6px 0; padding:7px 12px; border-radius:8px; background:rgba(13,31,60,0.65); border:1px solid rgba(120,192,200,0.35); color:#8fd2dc; font-size:0.78rem; font-weight:700; text-align:center; text-decoration:none;';
      var cta = card.querySelector('.uzm-card-cta');
      if (cta && cta.parentNode === card) card.insertBefore(a, cta);
      else card.appendChild(a);
    });
  }
  var grid = document.getElementById('productGrid');
  if (grid) {
    new MutationObserver(attachDeepLinks).observe(grid, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachDeepLinks);
  else attachDeepLinks();
})();


/* ==========================================================================
   UZM DENTAL (:8796) — DALGA 1 "VAY BE!" (ADIM 3a–3e) ENGINE GÜNCELLEMESİ
   Kaynak: brifing/GEMINI_CEVAP_2026-10-31_1837.md + GROK-1031-UZM-VAYBE-ONCUL-DENETIM-YANIT-CEVAP
   CSP Uyumlu (script-src 'self') — Sıfır Inline Script
   ========================================================================== */
(function() {
  var UZM_HT_SPEC_BADGE = 'Monolitik Altyapı · (HT) 800–1200 MPa / %43–%55 · (Fast 3D-PRO) 800–1200 MPa';

  var UZM_DALGA1_PRESETS = {
    '5d': {
      trans: 'İnsizal %60 → Servikal %47 (10 Katman)',
      mpa: 'İnsizal 650 → Servikal 950 MPa · 1530°C',
      ind: 'Anterior Estetik & 14 Üye Ark',
      img: '/images/products/studio_40/IMG_7263.jpg',
      stageTag: 'AKTİF CAD/CAM BLOK · Ø 98.5 mm GERÇEK KAZINMIŞ DİSK (IMG_7263.jpg)',
      stageTitle: 'ZirCrown® 5D-ML Multilayer (10 Katman)',
      stageSpecs: 'Kalınlık Dizisi: 10 / 12 / 14 / 16 / 18 / 20 / 22 / 25 mm · Sinterleme: 1530°C (2 Saat)'
    },
    '4d': {
      trans: 'İnsizal %59 → Servikal %45 (9 Katman)',
      mpa: 'İnsizal 700 → Servikal 1000 MPa · 1530°C',
      ind: 'Anterior Kron & 3 Üyeli Köprü',
      img: '/images/products/studio_40/IMG_7266.jpg',
      stageTag: 'AKTİF CAD/CAM BLOK · Ø 98.5 mm AÇIK SİSTEM DİSK (IMG_7266.jpg)',
      stageTitle: 'ZirCrown® 4D-ML Multilayer (9 Katman)',
      stageSpecs: 'Kalınlık Dizisi: 10 / 12 / 14 / 16 / 18 / 20 / 22 / 25 mm · Sinterleme: 1530°C (2 Saat)'
    },
    '3d': {
      trans: 'İnsizal %57 → Servikal %43 (6 Katman)',
      mpa: 'İnsizal 800 → Servikal 1200 MPa · 1500°C',
      ind: 'Lamina Veneer, İnley/Onley & Kron',
      img: '/images/products/studio_40/IMG_7265.jpg',
      stageTag: 'AKTİF CAD/CAM BLOK · Ø 98.5 mm AÇIK SİSTEM DİSK (IMG_7265.jpg)',
      stageTitle: 'ZirCrown® 3D-PRO Estetik (6 Katman)',
      stageSpecs: 'Kalınlık Dizisi: 10 / 12 / 14 / 16 / 18 / 20 / 22 / 25 mm · Sinterleme: 1500°C (2 Saat)'
    },
    'st': {
      trans: '%43 Homojen Multilayer',
      mpa: '1200 MPa Homojen · 1530°C',
      ind: 'Tam Anatomik Posterior Kron & Köprü',
      img: '/images/products/studio_40/IMG_7224.jpg',
      stageTag: 'AKTİF CAD/CAM BLOK · Ø 98.5 mm MONOLİTİK SERİ (IMG_7224.jpg)',
      stageTitle: 'ZirCrown® ST-ML Monolitik (%43 Homojen)',
      stageSpecs: 'Kalınlık Dizisi: 10 / 12 / 14 / 16 / 18 / 20 / 22 / 25 mm · Sinterleme: 1530°C (2 Saat)'
    },
    'ht': {
      trans: '%43–%55 Translüsensi (Hızlı Sinterleme 3D-PRO)',
      mpa: '800 – 1200 MPa Homojen · 1530°C',
      ind: 'Uzun Köprü İskeleti & İmplant Üstü Bar',
      img: '/images/products/studio_40/IMG_7263.jpg',
      stageTag: 'AKTİF CAD/CAM BLOK · Ø 98.5 mm ALTYAPI DİSKİ (IMG_7263.jpg)',
      stageTitle: 'ZirCrown® Hızlı Sinterleme 3D-PRO (800–1200 MPa · %43–%55)',
      stageSpecs: 'Uzun Köprü İskeleti & Koyu Güdük Maskeleme · Fast 3D-PRO Referansı: 800–1200 MPa'
    }
  };

  var UZM_PRISM_PROFILES = {
    '5d': {
      isMultilayer: true,
      kicker: 'OPTİK GEÇİRGENLİK SİMÜLASYONU (TEMSİLÎ GÖRSEL) · VERİ KAYNAĞI: ZIRCROWN ORİJİNAL KATALOG VERİSİ',
      heading: '5D-ML Katmanlı Geçiş & Yüzey Glaze Görünümü (Stüdyo-40 )',
      glazeTag: '01 · Ön Işık: Sinterlenmiş 6 Üye Anterior Ark (Stüdyo-40: IMG_7256.jpg)',
      glazeImg: '/images/products/studio_40/IMG_7256.jpg',
      glazeAlt: 'Stüdyo-40 IMG_7256.jpg: Sinterlenmiş 6 üye anterior zirkonyum köprü yüzey glaze ve doğal mine albedosu',
      glazeMetric: 'Stüdyo-40',
      glazeCaption: '[Stüdyo-40: IMG_7256.jpg · Temsilî Görsel] Sinterlenmiş 6 üye anterior ark. Sayısal değerler: ZirCrown Orijinal Katalog Verisi (1530°C).',
      transTag: '02 · Optik Ayna & VITA A2 Skala (Stüdyo-40: IMG_7246.jpg)',
      transImg: '/images/products/studio_40/IMG_7246.jpg',
      transAlt: 'Stüdyo-40 IMG_7246.jpg: Optik siyah ayna üzerinde VITA A2 renk skalası ile ZirCrown multilayer köprü karşılaştırması',
      transMetric: 'VITA A2 Referans · 10 Katman',
      transCaption: '[Stüdyo-40: IMG_7246.jpg · Temsilî Görsel] VITA A2 skala karşılaştırması · Sayısal değerler: ZirCrown Orijinal Katalog Verisi (İnsizal %60 → Servikal %47).',
      zones: {
        incisalLabel: 'İnsizal Mine Bölgesi',
        incisalSub: 'Opalesans & Halo',
        transLabel: 'Geçiş: 10 Katman Mine-Dentin',
        transSub: 'Çizgisiz Kademeli Gradyan',
        cervicalLabel: 'Servikal Gövde',
        cervicalSub: 'Kole Dayanımı'
      }
    },
    '4d': {
      isMultilayer: true,
      kicker: 'OPTİK GEÇİRGENLİK SİMÜLASYONU (TEMSİLÎ GÖRSEL) · VERİ KAYNAĞI: ZIRCROWN ORİJİNAL KATALOG VERİSİ',
      heading: '4D-ML Anterior/Posterior Köprü Katman & Yüzey Görünümü (Stüdyo-40 )',
      glazeTag: '01 · Ön Işık: VITA D2 Skala & Köprü (Stüdyo-40: IMG_7248.jpg)',
      glazeImg: '/images/products/studio_40/IMG_7248.jpg',
      glazeAlt: 'Stüdyo-40 IMG_7248.jpg: Optik siyah ayna üzerinde VITA D2 skalası ile ZirCrown köprü görünümü',
      glazeMetric: 'Stüdyo-40',
      glazeCaption: '[Stüdyo-40: IMG_7248.jpg · Temsilî Görsel] VITA D2 skalalı çok üyeli köprü. Sayısal değerler: ZirCrown Orijinal Katalog Verisi (1530°C).',
      transTag: '02 · Kademeli Kroma & A2/D2 Karşılaştırma (Stüdyo-40: IMG_7237.jpg)',
      transImg: '/images/products/studio_40/IMG_7237.jpg',
      transAlt: 'Stüdyo-40 IMG_7237.jpg: ZirCrown 3D-ML A2 vs D2 3 üyeli köprü karşılaştırması',
      transMetric: 'Stüdyo-40 · 9 Katman',
      transCaption: '[Stüdyo-40: IMG_7237.jpg · Temsilî Görsel] İnsizal-servikal kroma akışı · Sayısal değerler: ZirCrown Orijinal Katalog Verisi (İnsizal %59 → Servikal %45).',
      zones: {
        incisalLabel: 'İnsizal Mine Bölgesi',
        incisalSub: 'Doğal Halo & Mine',
        transLabel: 'Geçiş: 9 Katman Hibrit',
        transSub: 'Dengeli Kroma Akışı',
        cervicalLabel: 'Servikal Gövde',
        cervicalSub: 'Köprü Gövde Direnci'
      }
    },
    '3d': {
      isMultilayer: true,
      kicker: 'OPTİK GEÇİRGENLİK SİMÜLASYONU (TEMSİLÎ GÖRSEL) · VERİ KAYNAĞI: ZIRCROWN ORİJİNAL KATALOG VERİSİ',
      heading: '3D-PRO Fonksiyonel Ark Katman & Yüzey Görünümü (Stüdyo-40 )',
      glazeTag: '01 · Ön Işık: 3D-PRO Disk & Kazınmış Köprü (Stüdyo-40: IMG_7266.jpg)',
      glazeImg: '/images/products/studio_40/IMG_7266.jpg',
      glazeAlt: 'Stüdyo-40 IMG_7266.jpg: ZirCrown 3D-PRO A2 18mm zirkonyum disk ve CAD/CAM kazınmış 6 üye köprü',
      glazeMetric: 'Stüdyo-40',
      glazeCaption: '[Stüdyo-40: IMG_7266.jpg · Temsilî Görsel] Ø98.5 mm 3D-PRO A2 disk ve kazınmış ark. Sayısal değerler: ZirCrown Orijinal Katalog Verisi (1500°C).',
      transTag: '02 · Optik Ayna Üzeri 3 Üyeli Köprü (Stüdyo-40: IMG_7240.jpg)',
      transImg: '/images/products/studio_40/IMG_7240.jpg',
      transAlt: 'Stüdyo-40 IMG_7240.jpg: Optik siyah ayna üzerinde ZirCrown 3D-ML A2 ve ST-ML A2 3 üyeli köprüler',
      transMetric: 'Stüdyo-40 · 6 Katman',
      transCaption: '[Stüdyo-40: IMG_7240.jpg · Temsilî Görsel] Optik ayna üzeri 3 üyeli köprü · Sayısal değerler: ZirCrown Orijinal Katalog Verisi (İnsizal %57 → Servikal %43).',
      zones: {
        incisalLabel: 'İnsizal / Oklüzal',
        incisalSub: 'Aşınma Dirençli Mine',
        transLabel: 'Geçiş: 6 Katman Multilayer',
        transSub: 'Kademeli Dentin Yoğunluğu',
        cervicalLabel: 'Servikal Boyun',
        cervicalSub: 'Çiğneme Kuvveti Direnci'
      }
    },
    'st': {
      isMultilayer: false,
      kicker: 'OPTİK GEÇİRGENLİK SİMÜLASYONU (TEMSİLÎ GÖRSEL) · VERİ KAYNAĞI: ZIRCROWN ORİJİNAL KATALOG VERİSİ',
      heading: 'ST-ML Monolitik — Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Temsilî Yüzey Görseli)',
      glazeTag: 'Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Stüdyo-40: IMG_7224.jpg)',
      glazeImg: '/images/products/studio_40/IMG_7224.jpg',
      glazeAlt: 'Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Temsilî Yüzey Görseli): Stüdyo-40 IMG_7224.jpg ZirCrown ST-ML A2 monolitik köprü',
      glazeMetric: 'Homojen %43 · 1200 MPa',
      glazeCaption: '[Stüdyo-40: IMG_7224.jpg · Temsilî Görsel] Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok). Sayısal değerler: ZirCrown Orijinal Katalog Verisi (%43 Homojen · 1200 MPa).',
      transTag: 'Monolitik Seri — Arka Işık Görseli Yok',
      transImg: '/images/products/studio_40/IMG_7231.jpg',
      transAlt: 'Monolitik seride arka ışık transillüminasyon görseli bulunmamaktadır',
      transMetric: 'Homojen %43',
      transCaption: '[Stüdyo-40: IMG_7231.jpg · Temsilî Görsel] ST homojen monolitik seride katmanlı arka-ışık transillüminasyon görseli bulunmamaktadır.',
      zones: {
        incisalLabel: 'Oklüzal Yüzey',
        incisalSub: 'Homojen Monolitik',
        transLabel: 'Gövde Kristal Fazı',
        transSub: 'İzotropik Işık Dağılımı',
        cervicalLabel: 'Konnektör & Kole',
        cervicalSub: '1200 MPa Dayanım'
      }
    },
    'ht': {
      isMultilayer: false,
      kicker: 'OPTİK GEÇİRGENLİK SİMÜLASYONU (TEMSİLÎ GÖRSEL) · VERİ KAYNAĞI: ZIRCROWN ORİJİNAL KATALOG VERİSİ',
      heading: 'HT Monolitik Altyapı — Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Temsilî Yüzey Görseli)',
      glazeTag: 'Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Stüdyo-40: IMG_7263.jpg)',
      glazeImg: '/images/products/studio_40/IMG_7263.jpg',
      glazeAlt: 'Monolitik Seri (Arka Işık Transillüminasyon Görseli Yok — Temsilî Yüzey Görseli): Stüdyo-40 IMG_7263.jpg CAD/CAM kazınmış zirkonyum altyapı',
      glazeMetric: '%43–%55 · 800–1200 MPa',
      glazeCaption: '[Stüdyo-40: IMG_7263.jpg · Temsilî Görsel] Monolitik Altyapı Serisi (Arka Işık Transillüminasyon Görseli Yok). HT Monolitik Altyapı: 800–1200 MPa bükülme dayanımı, %43–%55 ışık geçirgenliği, 1530°C sinterleme.',
      transTag: 'Monolitik Seri — Arka Işık Görseli Yok',
      transImg: '/images/products/studio_40/IMG_7263.jpg',
      transAlt: 'Monolitik altyapı serisinde arka ışık transillüminasyon görseli bulunmamaktadır',
      transMetric: '%43–%55 · 800–1200 MPa',
      transCaption: '[Stüdyo-40: IMG_7263.jpg · Temsilî Görsel] HT monolitik altyapı serisinde arka-ışık transillüminasyon görseli bulunmamaktadır.',
      zones: {
        incisalLabel: 'Üst Yapı Desteği',
        incisalSub: 'Kuron & Köprü İskeleti',
        transLabel: 'Monolitik Gövde',
        transSub: 'Termal Şok & Kırılma Direnci',
        cervicalLabel: 'Kole & Abutment',
        cervicalSub: 'Koyu Güdük & Ti-Base Maskeleme'
      }
    }
  };

  function updateOpticalPrism(presetKey, requestedLightMode) {
    var key = UZM_PRISM_PROFILES[presetKey] ? presetKey : '5d';
    var profile = UZM_PRISM_PROFILES[key];
    var presetMeta = UZM_DALGA1_PRESETS[key];
    var prismBox = document.getElementById('uzmRemovedPrismRef');
    var isMonolithic = !profile.isMultilayer || key === 'st' || key === 'ht';
    var prevSeries = prismBox ? (prismBox.getAttribute('data-active-series') || '5d') : '5d';
    var wasMonolithic = prevSeries === 'st' || prevSeries === 'ht';

    var effectiveMode = requestedLightMode || (prismBox ? prismBox.getAttribute('data-light-mode') : 'dual') || 'dual';
    if (isMonolithic) {
      effectiveMode = 'glaze';
    } else if (wasMonolithic && !requestedLightMode) {
      effectiveMode = 'dual';
    }

    if (prismBox) {
      prismBox.setAttribute('data-active-series', key);
      prismBox.setAttribute('data-light-mode', effectiveMode);
    }

    var kickerEl = document.getElementById('uzmPrismKicker');
    if (kickerEl && profile.kicker) kickerEl.textContent = profile.kicker;

    var titleEl = document.getElementById('uzmPrismActiveTitle');
    if (titleEl) titleEl.textContent = profile.heading;

    var glazeTagEl = document.getElementById('uzmGlazeChamberTag');
    if (glazeTagEl && profile.glazeTag) glazeTagEl.textContent = profile.glazeTag;

    var glazeImgEl = document.getElementById('uzmGlazeStudioImg');
    if (glazeImgEl) {
      glazeImgEl.setAttribute('src', profile.glazeImg);
      glazeImgEl.setAttribute('alt', profile.glazeAlt);
    }
    var glazeMetricEl = document.getElementById('uzmGlazeChamberMetric');
    if (glazeMetricEl) glazeMetricEl.textContent = profile.glazeMetric;
    var glazeCapEl = document.getElementById('uzmGlazeChamberCaption');
    if (glazeCapEl) glazeCapEl.textContent = profile.glazeCaption;

    var transTagEl = document.getElementById('uzmTransChamberTag');
    if (transTagEl && profile.transTag) transTagEl.textContent = profile.transTag;

    var transImgEl = document.getElementById('uzmTransStudioImg');
    if (transImgEl) {
      transImgEl.setAttribute('src', profile.transImg);
      transImgEl.setAttribute('alt', profile.transAlt);
    }
    var transMetricEl = document.getElementById('uzmTransChamberMetric');
    if (transMetricEl) transMetricEl.textContent = profile.transMetric;
    var transCapEl = document.getElementById('uzmTransChamberCaption');
    if (transCapEl) transCapEl.textContent = profile.transCaption;

    var chamberTrans = document.getElementById('uzmChamberTrans');
    var chamberGlaze = document.getElementById('uzmChamberGlaze');
    if (chamberTrans) {
      var hideTrans = isMonolithic || effectiveMode === 'glaze';
      chamberTrans.hidden = hideTrans;
      chamberTrans.style.display = hideTrans ? 'none' : '';
      chamberTrans.setAttribute('aria-hidden', hideTrans ? 'true' : 'false');
    }
    if (chamberGlaze) {
      var hideGlaze = !isMonolithic && effectiveMode === 'trans';
      chamberGlaze.hidden = hideGlaze;
      chamberGlaze.style.display = hideGlaze ? 'none' : '';
      chamberGlaze.setAttribute('aria-hidden', hideGlaze ? 'true' : 'false');
    }

    if (profile.zones) {
      var zIncL = document.getElementById('uzmZoneIncisalText');
      var zIncS = document.getElementById('uzmZoneIncisalSub');
      var zTrnL = document.getElementById('uzmZoneTransText');
      var zTrnS = document.getElementById('uzmZoneTransSub');
      var zCrvL = document.getElementById('uzmZoneCervicalText');
      var zCrvS = document.getElementById('uzmZoneCervicalSub');
      if (zIncL) zIncL.textContent = profile.zones.incisalLabel;
      if (zIncS) zIncS.textContent = profile.zones.incisalSub;
      if (zTrnL) zTrnL.textContent = profile.zones.transLabel;
      if (zTrnS) zTrnS.textContent = profile.zones.transSub;
      if (zCrvL) zCrvL.textContent = profile.zones.cervicalLabel;
      if (zCrvS) zCrvS.textContent = profile.zones.cervicalSub;
    }

    if (presetMeta) {
      var transTarget = document.getElementById('zirTransReadout');
      var mpaTarget = document.getElementById('zirMpaReadout');
      var indTarget = document.getElementById('zirIndReadout');
      var imgTarget = document.getElementById('heroInteractiveImg');
      var stgTag = document.getElementById('heroStageSeriesTag');
      var stgTit = document.getElementById('heroStageTitle');
      var stgCap = document.getElementById('heroStageCaption');
      if (transTarget) transTarget.textContent = presetMeta.trans;
      if (mpaTarget) mpaTarget.textContent = presetMeta.mpa;
      if (indTarget) indTarget.textContent = presetMeta.ind;
      if (imgTarget && presetMeta.img) imgTarget.setAttribute('src', presetMeta.img);
      if (stgTag && presetMeta.stageTag) stgTag.textContent = presetMeta.stageTag;
      if (stgTit && presetMeta.stageTitle) stgTit.textContent = presetMeta.stageTitle;
      if (stgCap && presetMeta.stageSpecs) stgCap.textContent = presetMeta.stageSpecs;
    }

    document.querySelectorAll('[data-zir-preset]').forEach(function(btn) {
      var isActive = btn.getAttribute('data-zir-preset') === key;
      btn.classList.toggle('is-active', isActive);
    });

    document.querySelectorAll('.uzm-light-mode-btn[data-light-mode]').forEach(function(btn) {
      var bMode = btn.getAttribute('data-light-mode');
      var shouldDisable = isMonolithic && (bMode === 'trans' || bMode === 'dual');
      btn.disabled = shouldDisable;
      btn.setAttribute('aria-disabled', shouldDisable ? 'true' : 'false');
      var isMode = (bMode === effectiveMode) && !shouldDisable;
      btn.classList.toggle('is-active', isMode);
      btn.setAttribute('aria-pressed', isMode ? 'true' : 'false');
    });
  }

  function initOpticalPrismEvents() {
    var prismBox = document.getElementById('uzmRemovedPrismRef');
    document.querySelectorAll('[data-zir-preset]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var key = btn.getAttribute('data-zir-preset');
        var isTargetMono = (key === 'st' || key === 'ht');
        var curMode = prismBox ? (prismBox.getAttribute('data-light-mode') || 'dual') : 'dual';
        updateOpticalPrism(key, isTargetMono ? 'glaze' : curMode);
      });
    });

    document.querySelectorAll('.uzm-light-mode-btn[data-light-mode]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.disabled || btn.getAttribute('aria-disabled') === 'true') return;
        var mode = btn.getAttribute('data-light-mode') || 'dual';
        var curSeries = prismBox ? (prismBox.getAttribute('data-active-series') || '5d') : '5d';
        updateOpticalPrism(curSeries, mode);
      });
    });

    document.querySelectorAll('#uzmAnatomicalGradientBar .uzm-grad-zone').forEach(function(zoneEl) {
      zoneEl.addEventListener('click', function() {
        document.querySelectorAll('#uzmAnatomicalGradientBar .uzm-grad-zone').forEach(function(z) {
          z.classList.remove('is-highlighted');
        });
        zoneEl.classList.add('is-highlighted');
        var zType = zoneEl.getAttribute('data-zone');
        var curSeries = prismBox ? (prismBox.getAttribute('data-active-series') || '5d') : '5d';
        if (curSeries === 'st' || curSeries === 'ht') {
          updateOpticalPrism(curSeries, 'glaze');
        } else if (zType === 'incisal') {
          updateOpticalPrism(curSeries, 'trans');
        } else if (zType === 'cervical') {
          updateOpticalPrism(curSeries, 'glaze');
        } else {
          updateOpticalPrism(curSeries, 'dual');
        }
      });
    });

    updateOpticalPrism('5d', 'dual');
  }

  var UZM_STUDIO40_MAP = {
    '5d-ml': {
      raw: '/images/products/studio_40/IMG_7246.jpg?v=20261104-sinter',
      studio: '/images/products/studio_40/IMG_7255.jpg',
      label: '5D-ML Stüdyo-40 (IMG_7255.jpg)'
    },
    '4d-ml': {
      raw: '/images/products/studio_40/IMG_7256.jpg?v=20261104-sinter',
      studio: '/images/products/studio_40/IMG_7261.jpg',
      label: '4D-ML Stüdyo-40 (IMG_7261.jpg)'
    },
    '3d-pro': {
      raw: '/images/products/studio_40/IMG_7265.jpg',
      studio: '/images/products/studio_40/IMG_7263.jpg',
      label: '3D-PRO Stüdyo-40 (IMG_7263.jpg)'
    },
    '3d-ml': {
      raw: '/images/products/studio_40/IMG_7222.jpg?v=20261104-sinter',
      studio: '/images/products/studio_40/IMG_7207.jpg',
      label: '3D-ML Stüdyo-40 (IMG_7207.jpg)'
    },
    'st-ml': {
      raw: '/images/products/studio_40/IMG_7230.jpg?v=20261104-sinter',
      studio: '/images/products/studio_40/IMG_7228.jpg',
      label: 'ST-ML Stüdyo-40 (IMG_7228.jpg)'
    },
    'zircrown-st': {
      raw: '/images/products/studio_40/IMG_7263.jpg?v=20261104-sinter',
      studio: '/images/products/studio_40/IMG_7231.jpg',
      label: 'HT / Fast 3D-PRO Stüdyo-40 (IMG_7231.jpg)'
    }
  };

  
  var UZM_SINTER_CARDS_MAP = {
    '5d-ml': {
      withCurve: '/uploads/zirkon_kartlari/5d-ml-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/5d-ml-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/5d-ml-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/5d-ml-spec.png',
      title: 'ZirCrown 5D-ML'
    },
    '4d-ml': {
      withCurve: '/uploads/zirkon_kartlari/4d-ml-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/4d-ml-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/4d-ml-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/4d-ml-spec.png',
      title: 'ZirCrown 4D-ML'
    },
    '3d-pro': {
      withCurve: '/uploads/zirkon_kartlari/3d-pro-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/3d-pro-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/3d-pro-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/3d-pro-spec.png',
      pdf: '/uploads/zirkon_kartlari/3d-pro-sinter-curve.pdf',
      title: 'ZirCrown 3D-PRO'
    },
    '3d-ml': {
      withCurve: '/uploads/zirkon_kartlari/3d-ml-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/3d-ml-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/3d-ml-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/3d-ml-spec.png',
      title: 'ZirCrown 3D-ML'
    },
    'st-ml': {
      withCurve: '/uploads/zirkon_kartlari/st-ml-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/st-ml-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/st-ml-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/st-ml-spec.png',
      title: 'ZirCrown ST-ML'
    },
    'ut': {
      withCurve: '/uploads/zirkon_kartlari/ut-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/ut-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/ut-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/ut-spec.png',
      title: 'ZirCrown UT'
    },
    'ut-c': {
      withCurve: '/uploads/zirkon_kartlari/ut-c-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/ut-c-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/ut-c-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/ut-c-spec.png',
      title: 'ZirCrown UT-C'
    },
    'ut-ml': {
      withCurve: '/uploads/zirkon_kartlari/ut-ml-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/ut-ml-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/ut-ml-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/ut-ml-spec.png',
      title: 'ZirCrown UT-ML'
    },
    'hizli-sinterleme': {
      withCurve: '/uploads/zirkon_kartlari/hizli-sinter-curve-web.png',
      specOnly: '/uploads/zirkon_kartlari/hizli-sinter-spec-web.png',
      hiResCurve: '/uploads/zirkon_kartlari/hizli-sinter-curve.png',
      hiResSpec: '/uploads/zirkon_kartlari/hizli-sinter-spec.png',
      pdf: '/uploads/zirkon_kartlari/hizli-sinter-curve.pdf',
      title: 'ZirCrown Hızlı Sinterleme 3D-PRO'
    }
  };

  function initSinterCurveCardsToggle() {
    Object.keys(UZM_SINTER_CARDS_MAP).forEach(function(productId) {
      var selector = '[data-product-id="' + productId + '"], [data-id="' + productId + '"], #card-' + productId;
      document.querySelectorAll(selector).forEach(function(card) {
        if (card.querySelector('.uzm-sinter-curve-toggle-btn')) return;
        var imgEl = card.querySelector('img');
        if (!imgEl) return;
        var cardConf = UZM_SINTER_CARDS_MAP[productId];
        if (!imgEl.dataset.rawCardSrc) {
          imgEl.dataset.rawCardSrc = imgEl.getAttribute('src');
        }

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'uzm-sinter-curve-toggle-btn';
        btn.setAttribute('data-curve-toggle', productId);
        btn.setAttribute('aria-pressed', 'false');
        btn.innerHTML = '<span>📈 Sinterleme Eğrili ⇄ Eğrisiz Kart</span>';

        var stateStep = 0; // 0: raw, 1: with curve, 2: spec only
        btn.addEventListener('click', function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          stateStep = (stateStep + 1) % 3;
          if (stateStep === 1) {
            imgEl.setAttribute('src', cardConf.withCurve);
            btn.classList.add('is-curve-active');
            btn.innerHTML = '<span>✅ Sinterleme Eğrili Kart Aktif ⇄ Eğrisiz</span>';
          } else if (stateStep === 2) {
            imgEl.setAttribute('src', cardConf.specOnly);
            btn.classList.add('is-spec-active');
            btn.innerHTML = '<span>Eğrisiz Teknik Kart Aktif ⇄ Ham Disk</span>';
          } else {
            imgEl.setAttribute('src', imgEl.dataset.rawCardSrc || cardConf.withCurve);
            btn.classList.remove('is-curve-active', 'is-spec-active');
            btn.innerHTML = '<span>📈 Sinterleme Eğrili ⇄ Eğrisiz Kart</span>';
          }
        });

        var actions = card.querySelector('.uzm-card-actions, .uzm-card-cta');
        if (actions && actions.parentNode === card) {
          card.insertBefore(btn, actions);
        } else {
          card.appendChild(btn);
        }
      });
    });
  }


  function initSinterStudioToggle() {
    Object.keys(UZM_STUDIO40_MAP).forEach(function(productId) {
      var selector = '[data-product-id="' + productId + '"], [data-id="' + productId + '"], #card-' + productId;
      document.querySelectorAll(selector).forEach(function(card) {
        if (card.querySelector('.uzm-sinter-toggle-btn')) return;
        var imgEl = card.querySelector('img');
        if (!imgEl) return;

        var conf = UZM_STUDIO40_MAP[productId];
        if (!imgEl.dataset.rawSrc) {
          imgEl.dataset.rawSrc = imgEl.getAttribute('src') || conf.raw;
        }

        if (productId === 'zircrown-st') {
          var badgeEl = card.querySelector('.uzm-spec-badge, .spec-badge, [data-spec-badge]');
          if (badgeEl) badgeEl.textContent = UZM_HT_SPEC_BADGE;
        }

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'uzm-sinter-toggle-btn';
        btn.setAttribute('data-product-sinter-toggle', productId);
        btn.setAttribute('aria-pressed', 'false');
        btn.textContent = 'Ham Disk ⇄ Sinterlenmiş Stüdyo Karesi';

        btn.addEventListener('click', function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          var isStudio = btn.getAttribute('aria-pressed') === 'true';
          if (!isStudio) {
            imgEl.setAttribute('src', conf.studio);
            btn.setAttribute('aria-pressed', 'true');
            btn.classList.add('is-studio-active');
            btn.textContent = 'Stüdyo Karesi Aktif ⇄ Ham Diske Dön';
          } else {
            imgEl.setAttribute('src', imgEl.dataset.rawSrc || conf.raw);
            btn.setAttribute('aria-pressed', 'false');
            btn.classList.remove('is-studio-active');
            btn.textContent = 'Ham Disk ⇄ Sinterlenmiş Stüdyo Karesi';
          }
        });

        var deeplink = card.querySelector('.uzm-studio-deeplink');
        if (deeplink && deeplink.parentNode === card) {
          card.insertBefore(btn, deeplink);
        } else {
          var cta = card.querySelector('.uzm-card-cta');
          if (cta && cta.parentNode === card) card.insertBefore(btn, cta);
          else card.appendChild(btn);
        }
      });
    });
  }

  var UZM_SINTER_PROGRAMS = {
    prog1: {
      curveD: 'M 58 204 L 185 102 L 310 36 L 445 36 L 610 168',
      areaD: 'M 58 204 L 185 102 L 310 36 L 445 36 L 610 168 L 610 204 Z',
      nodes: { c1: [185, 102], pStart: [310, 36], pEnd: [445, 36], cool: [610, 168] },
      peakLabel: '<3 ÜYE KÖPRÜ (7 SAAT) · PİK: 1500°C (3D-PRO) / 1530°C (5D/4D/3D-ML/ST) · 120 dk',
      rate: '10°C/dk (→900°C · 20 dk) · 5°C/dk (→Pik)',
      hold: '1500°C / 1530°C · 120 Dakika (2 Saat)',
      cool: '<80°C Fırın Açma · Toplam 7 Saat (ZirCrown broşürü / ürün dokümanı)'
    },
    prog2: {
      curveD: 'M 58 204 L 210 102 L 350 36 L 490 36 L 610 168',
      areaD: 'M 58 204 L 210 102 L 350 36 L 490 36 L 610 168 L 610 204 Z',
      nodes: { c1: [210, 102], pStart: [350, 36], pEnd: [490, 36], cool: [610, 168] },
      peakLabel: '4–6 ÜYE KÖPRÜ (7 SAAT) · PİK: 1500°C (3D-PRO) / 1530°C (ST/ML) · 120 dk Bekleme',
      rate: '5°C/dk (→900°C · 20 dk) · 3°C/dk (→Pik)',
      hold: '1500°C / 1530°C · 120 Dakika (2 Saat)',
      cool: '<80°C Fırın Açma · Toplam 7 Saat (ZirCrown broşürü / ürün dokümanı)'
    },
    prog3: {
      curveD: 'M 58 204 L 240 102 L 395 36 L 545 36 L 685 176',
      areaD: 'M 58 204 L 240 102 L 395 36 L 545 36 L 685 176 L 685 204 Z',
      nodes: { c1: [240, 102], pStart: [395, 36], pEnd: [545, 36], cool: [685, 176] },
      peakLabel: '>7 ÜYE UZUN KÖPRÜ (15 SAAT) · PİK: 1500°C / 1530°C · 120 dk · Termal Şok Korumalı',
      rate: '4–5°C/dk (→900°C · 20 dk) · 2°C/dk (→Pik)',
      hold: '1500°C / 1530°C · 120 Dakika (2 Saat)',
      cool: '<80°C Fırın Açma · Toplam 15 Saat (ZirCrown broşürü / ürün dokümanı)'
    }
  };

  function initSinterCurveCockpit() {
    var box = document.getElementById('uzmSinterCurveBox');
    if (!box) return;

    var curvePath = document.getElementById('uzmSinterCurvePath');
    var areaPath = document.getElementById('uzmSinterAreaPath');
    var peakLabel = document.getElementById('uzmSinterPeakLabel');
    var rateReadout = document.getElementById('uzmSinterRateReadout');
    var holdReadout = document.getElementById('uzmSinterHoldReadout');
    var coolReadout = document.getElementById('uzmSinterCoolReadout');

    var nodeC1 = document.getElementById('uzmSinterNodeC1');
    var nodePeakStart = document.getElementById('uzmSinterNodePeakStart');
    var nodePeakEnd = document.getElementById('uzmSinterNodePeakEnd');
    var nodeCool = document.getElementById('uzmSinterNodeCool');

    var applyProgram = function(progKey) {
      var p = UZM_SINTER_PROGRAMS[progKey] || UZM_SINTER_PROGRAMS.prog1;
      if (curvePath) curvePath.setAttribute('d', p.curveD);
      if (areaPath) areaPath.setAttribute('d', p.areaD);
      if (peakLabel) peakLabel.textContent = p.peakLabel;
      if (rateReadout) rateReadout.textContent = p.rate;
      if (holdReadout) holdReadout.textContent = p.hold;
      if (coolReadout) coolReadout.textContent = p.cool;

      if (nodeC1) {
        nodeC1.setAttribute('cx', String(p.nodes.c1[0]));
        nodeC1.setAttribute('cy', String(p.nodes.c1[1]));
      }
      if (nodePeakStart) {
        nodePeakStart.setAttribute('cx', String(p.nodes.pStart[0]));
        nodePeakStart.setAttribute('cy', String(p.nodes.pStart[1]));
      }
      if (nodePeakEnd) {
        nodePeakEnd.setAttribute('cx', String(p.nodes.pEnd[0]));
        nodePeakEnd.setAttribute('cy', String(p.nodes.pEnd[1]));
      }
      if (nodeCool) {
        nodeCool.setAttribute('cx', String(p.nodes.cool[0]));
        nodeCool.setAttribute('cy', String(p.nodes.cool[1]));
      }

      box.querySelectorAll('.uzm-sinter-prog-btn').forEach(function(btn) {
        var active = btn.getAttribute('data-sinter-prog') === progKey;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    };

    box.querySelectorAll('.uzm-sinter-prog-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var progKey = btn.getAttribute('data-sinter-prog');
        applyProgram(progKey);
      });
    });

    applyProgram('prog1');
  }

  var UZM_THICKNESS_OPTIONS = ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'];
  var UZM_VITA_SHADES = ['A1', 'A2', 'A3', 'B1', 'C2', 'D2', 'BL2'];

  function initDrawerLabSelector() {
    var drawer = document.getElementById('productDetailDrawer');
    if (!drawer) return;

    var selectorBox = drawer.querySelector('#uzmDrawerLabSelector');
    if (!selectorBox) {
      selectorBox = document.createElement('div');
      selectorBox.id = 'uzmDrawerLabSelector';
      selectorBox.className = 'uzm-drawer-lab-selector';
      selectorBox.innerHTML =
        '<div class="uzm-lab-group">' +
          '<span class="uzm-lab-label">Disk Kalınlığı (Ø98.5mm):</span>' +
          '<div class="uzm-lab-chips" id="uzmThicknessChips" role="radiogroup" aria-label="Disk Kalınlığı">' +
            UZM_THICKNESS_OPTIONS.map(function(t, i) {
              return '<button type="button" class="uzm-lab-chip ' + (i === 2 ? 'is-selected' : '') + '" data-lab-thickness="' + t + '" aria-checked="' + (i === 2 ? 'true' : 'false') + '">' + t + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="uzm-lab-group">' +
          '<span class="uzm-lab-label">VITA Renk (Shade):</span>' +
          '<div class="uzm-lab-chips" id="uzmVitaShadeChips" role="radiogroup" aria-label="VITA Renk">' +
            UZM_VITA_SHADES.map(function(s, i) {
              return '<button type="button" class="uzm-lab-chip ' + (i === 1 ? 'is-selected' : '') + '" data-lab-shade="' + s + '" aria-checked="' + (i === 1 ? 'true' : 'false') + '">' + s + '</button>';
            }).join('') +
          '</div>' +
        '</div>';

      var bodyTarget = drawer.querySelector('.uzm-drawer-body, .drawer-content') || drawer;
      bodyTarget.appendChild(selectorBox);
    }

    var selectedThickness = '14mm';
    var selectedShade = 'A2';

    var syncSummaryField = function() {
      var titleEl = drawer.querySelector('#drawerTitle, #drawerProductTitle, .uzm-drawer-title, h2, h3');
      var productName = titleEl ? titleEl.textContent.trim() : 'ZirCrown Zirkonya Disk';
      var summaryText = productName + ' · Kalınlık: ' + selectedThickness + ' · VITA Renk: ' + selectedShade;

      var summaryEl = document.getElementById('seciliUrunOzet');
      if (summaryEl) {
        if ('value' in summaryEl) {
          summaryEl.value = summaryText;
        } else {
          summaryEl.textContent = summaryText;
        }
        summaryEl.setAttribute('data-selected-thickness', selectedThickness);
        summaryEl.setAttribute('data-selected-shade', selectedShade);
      }
    };

    selectorBox.querySelectorAll('[data-lab-thickness]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedThickness = btn.getAttribute('data-lab-thickness') || '14mm';
        selectorBox.querySelectorAll('[data-lab-thickness]').forEach(function(b) {
          var active = b === btn;
          b.classList.toggle('is-selected', active);
          b.setAttribute('aria-checked', active ? 'true' : 'false');
        });
        syncSummaryField();
      });
    });

    selectorBox.querySelectorAll('[data-lab-shade]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedShade = btn.getAttribute('data-lab-shade') || 'A2';
        selectorBox.querySelectorAll('[data-lab-shade]').forEach(function(b) {
          var active = b === btn;
          b.classList.toggle('is-selected', active);
          b.setAttribute('aria-checked', active ? 'true' : 'false');
        });
        syncSummaryField();
      });
    });

    syncSummaryField();
  }

  function bootDalga1() {
    initOpticalPrismEvents();
    initSinterStudioToggle();
    initSinterCurveCardsToggle();
    initSinterCurveCockpit();
    initDrawerLabSelector();
    var pGrid = document.getElementById('productGrid');
    if (pGrid) {
      new MutationObserver(initSinterStudioToggle).observe(pGrid, { childList: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootDalga1);
  } else {
    bootDalga1();
  }
})();

/* === GROK-1104-1900-UZM-ADIM-1-2-3-ONAY JS BASLANGIC === */
(function () {
  "use strict";

  var STUDIO40_VITA_CODES = {
    IMG_7225: true,
    IMG_7227: true,
    IMG_7233: true,
    IMG_7234: true,
    IMG_7249: true,
    IMG_7250: true,
    IMG_7253: true
  };

  var STUDIO40_CURATED_8 = {
    IMG_7207: true,
    IMG_7220: true,
    IMG_7222: true,
    IMG_7225: true,
    IMG_7253: true,
    IMG_7255: true,
    IMG_7256: true,
    IMG_7263: true
  };

  var PRODUCT_TO_STUDIO40_TAB = {
    "5d-ml": "4d-5d",
    "4d-ml": "4d-5d",
    "3d-pro": "3d-pro",
    "3d-ml": "3d-ml",
    "st-ml": "zircrown-ht",
    "zircrown-ht": "zircrown-ht",
    "fast-3d-pro": "3d-pro"
  };

  var UZM_OPTICAL_STATE_MAP = {
    "5d-ml": {
      id: "5d-ml",
      title: "ZirCrown 5D-ML · 10 Katmanlı Multilayer Zirkonya",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 650–950 MPa · %47–60",
      translucencyDir: "İnsizal %60 → Servikal %47",
      seriesRangeLabel: "Broşür Genel Aralığı: %43 – %60",
      strengthMpa: "650 MPa (İnsizal) → 950 MPa (Servikal)",
      indication: "Anterior estetik, lamina/veneer, inley/onley ve 3 üyeye kadar estetik köprüler",
      room2ModeTitle: "02 · İnsizal Geçiş & Transillüminasyon",
      room2ModeDesc: "10 katmanlı (3 İnsizal + 4 Geçiş + 3 Dentin) kademeli geçiş ile %47–%60 ışık geçirgenliği ve 650–950 MPa bükülme dayanımı.",
      frontImg: "/uploads/uzm_zircrown_5d_ml_disc.png",
      backImg: "/images/products/studio_40/IMG_7256.jpg",
      sssImg: "/uploads/uzm_zircrown_5d_ml_disc.png",
      studio40Tab: "4d-5d"
    },
    "4d-ml": {
      id: "4d-ml",
      title: "ZirCrown 4D-ML · Estetik ve Ekstra Güç Dengesi",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 700–1000 MPa · %45–59",
      translucencyDir: "İnsizal %59 → Servikal %45",
      seriesRangeLabel: "Broşür Genel Aralığı: %43 – %60",
      strengthMpa: "700 MPa (İnsizal) → 1000 MPa (Servikal)",
      indication: "Ön bölge kron, gövdeli restorasyonlar ve 3 üyeli köprüler",
      room2ModeTitle: "02 · İnsizal Geçiş & Transillüminasyon",
      room2ModeDesc: "9 katmanlı kademeli mukavemet teknolojisi ile %45–%59 ışık geçirgenliği ve 700–1000 MPa bükülme dayanımı.",
      frontImg: "/uploads/uzm_zircrown_4d_ml_disc.png",
      backImg: "/images/products/studio_40/IMG_7253.jpg",
      sssImg: "/uploads/uzm_zircrown_4d_ml_disc.png",
      studio40Tab: "4d-5d"
    },
    "3d-pro": {
      id: "3d-pro",
      title: "ZirCrown 3D-PRO · Yüksek Geçirgenlik ve Güvenilir Dayanıklılık",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 800–1200 MPa · %43–57",
      translucencyDir: "İnsizal %57 → Servikal %43",
      seriesRangeLabel: "Broşür Genel Aralığı: %43 – %60",
      strengthMpa: "800 MPa (İnsizal) → 1200 MPa (Servikal)",
      indication: "Tek kron, posterior restorasyon, çok üyeli köprü ve full-arch çalışmalar",
      room2ModeTitle: "02 · İnsizal Geçiş & Transillüminasyon",
      room2ModeDesc: "6 katmanlı doğal geçiş yapısı ile %43–%57 ışık geçirgenliği ve 800–1200 MPa bükülme dayanımı.",
      frontImg: "/uploads/uzm_zircrown_3d_pro_disc.png",
      backImg: "/images/products/studio_40/IMG_7265.jpg",
      sssImg: "/uploads/uzm_zircrown_3d_pro_disc.png",
      studio40Tab: "3d-pro"
    },
    "3d-ml": {
      id: "3d-ml",
      title: "ZirCrown 3D-ML · Güç ve Estetiğin Kusursuz Uyumu",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 900–1200 MPa · %43–46",
      translucencyDir: "İnsizal %46 → Servikal %43",
      seriesRangeLabel: "Broşür Genel Aralığı: %43 – %60",
      strengthMpa: "900 MPa (İnsizal) → 1200 MPa (Servikal)",
      indication: "Posterior restorasyonlar ve uzun açıklıklı köprüler",
      room2ModeTitle: "02 · İnsizal Geçiş & Transillüminasyon",
      room2ModeDesc: "9 katmanlı gradyan yapı ile %43–%46 kontrollü ışık geçirgenliği ve 900–1200 MPa bükülme dayanımı.",
      frontImg: "/uploads/uzm_zircrown_3d_ml_disc.png",
      backImg: "/images/products/studio_40/IMG_7207.jpg",
      sssImg: "/uploads/uzm_zircrown_3d_ml_disc.png",
      studio40Tab: "3d-ml"
    },
    "st-ml": {
      id: "st-ml",
      title: "ZirCrown ST-ML · Süper Translüsent Monolitik Multilayer",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 1200 MPa · %43",
      translucencyDir: "%43 Homojen",
      seriesRangeLabel: "Broşür Genel Aralığı: %43 – %60",
      strengthMpa: "1200 MPa (Homojen Monolitik Mukavemet)",
      indication: "Günlük monolitik kron, köprü ve implant üstü restorasyonlar",
      room2ModeTitle: "02 · Monolitik Gövde & Altyapı",
      room2ModeDesc: "ST-ML serisinde 4 katman boyunca 1200 MPa homojen bükülme dayanımı ve %43 ışık geçirgenliği korunur.",
      frontImg: "/uploads/uzm_zircrown_st_ml_disc.png",
      backImg: "/images/products/studio_40/IMG_7230.jpg",
      sssImg: "/uploads/uzm_zircrown_st_ml_disc.png",
      studio40Tab: "zircrown-ht"
    },
    "zircrown-ht": {
      id: "zircrown-ht",
      title: "ZirCrown Hızlı Sinterleme 3D-PRO · 6 Katman Füzyon",
      badge: "ZIRCROWN BROŞÜR VERİSİ · 800–1200 MPa · %43–55",
      translucencyDir: "İnsizal %55 → Servikal %43",
      seriesRangeLabel: "Hızlı Sinterleme Serisi: %43 – %55",
      strengthMpa: "800 MPa (İnsizal) → 1200 MPa (Servikal)",
      indication: "Hızlı sinterleme protokolüne uygun tek kron ve çok üyeli köprüler",
      room2ModeTitle: "02 · Hızlı Sinterleme & Çok Katmanlı Yapı",
      room2ModeDesc: "Hızlı sinterleme 3D-PRO serisi 800–1200 MPa bükülme dayanımı ve %43–%55 ışık geçirgenliği sunar.",
      frontImg: "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
      backImg: "/images/products/studio_40/IMG_7222.jpg",
      sssImg: "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
      studio40Tab: "3d-pro"
    }
  };

  var UZM_QR_SCENARIO_1_CONFIG = {
    catalog: {
      slotId: "uzmQrSlotCatalog",
      linkId: "uzmQrLinkCatalog",
      code: "QR-01 · HD PDF KATALOG",
      title: "ZirCrown & UZM Dental 2026 HD Ürün Kataloğu",
      url: "https://uzmdental.com/katalog/uzm-zircrown-hd-katalog-2026.pdf"
    },
    b2b: {
      slotId: "uzmQrSlotB2B",
      linkId: "uzmQrLinkB2B",
      code: "QR-02 · B2B KURUMSAL TEKLİF",
      title: "Laboratuvar & Klinik Toptan Fiyat / Numune Talebi",
      url: "/iletisim.html?kaynak=qr-b2b-teklif"
    },
    sinter: {
      slotId: "uzmQrSlotSinter",
      linkId: "uzmQrLinkSinter",
      code: "QR-03 · SİNTERLEME TABLOSU",
      title: "5D-ML / 4D-ML / 3D-PRO / HT Fırın & Sinterleme Eğrileri",
      url: "/urunler.html?kaynak=qr-sinter"
    }
  };

  function buildDeterministicQrSvg(urlText, titleText) {
    var size = 21;
    var hash = 2166136261;
    for (var i = 0; i < urlText.length; i++) {
      hash ^= urlText.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    function isFinderZone(r, c) {
      if (r < 8 && c < 8) return true;
      if (r < 8 && c >= size - 8) return true;
      if (r >= size - 8 && c < 8) return true;
      return false;
    }

    function isFinderDark(r, c, r0, c0) {
      var dr = r - r0;
      var dc = c - c0;
      if (dr < 0 || dr > 6 || dc < 0 || dc > 6) return false;
      if (dr === 0 || dr === 6 || dc === 0 || dc === 6) return true;
      if (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4) return true;
      return false;
    }

    var paths = [];
    for (var r = 0; r < size; r++) {
      for (var c = 0; c < size; c++) {
        var dark = false;
        if (isFinderZone(r, c)) {
          dark =
            isFinderDark(r, c, 0, 0) ||
            isFinderDark(r, c, 0, size - 7) ||
            isFinderDark(r, c, size - 7, 0);
        } else if (r === 6 || c === 6) {
          dark = (r + c) % 2 === 0;
        } else {
          var seed = Math.imul(hash ^ (r * 31 + c * 17), 1597334677);
          dark = ((seed >>> 0) % 11) < 5;
        }
        if (dark) {
          paths.push("M" + c + "," + r + "h1v1h-1z");
        }
      }
    }

    var safeTitle = (titleText || "UZM QR").replace(/[<>"'&]/g, "");
    return (
      '<svg class="uzm-qr-svg" viewBox="0 0 21 21" role="img" aria-label="' +
      safeTitle +
      '" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">' +
      '<rect width="21" height="21" fill="#FFFFFF"/>' +
      '<path d="' +
      paths.join("") +
      '" fill="#141413"/>' +
      "</svg>"
    );
  }

  function renderScenario1QrSlots() {
    Object.keys(UZM_QR_SCENARIO_1_CONFIG).forEach(function (key) {
      var item = UZM_QR_SCENARIO_1_CONFIG[key];
      var slotEl = document.getElementById(item.slotId);
      if (slotEl) {
        slotEl.innerHTML = buildDeterministicQrSvg(item.url, item.title);
        slotEl.setAttribute("data-qr-url", item.url);
      }
      var linkEl = document.getElementById(item.linkId);
      if (linkEl) {
        linkEl.setAttribute("href", item.url);
        linkEl.setAttribute("data-qr-url", item.url);
      }
    });
  }

  var studioState = {
    activeTab: "all",
    isCompact: true
  };

  function ensureStudio40CuratedAttributes() {
    // Handled by bindStudio40Gallery()
  }

  function applyProductFilter(filterValue) {
    var norm = (filterValue || "all").toLowerCase();
    var bar = document.getElementById("productFilterBar");
    if (bar) {
      var btns = bar.querySelectorAll("[data-filter]");
      btns.forEach(function (b) {
        var active = (b.getAttribute("data-filter") || "").toLowerCase() === norm;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    var grid = document.getElementById("productGrid");
    if (!grid) return;
    var cards = grid.querySelectorAll(".uzm-product-card, .uzm-card, [data-cat]");
    cards.forEach(function (card) {
      var cat = (card.getAttribute("data-cat") || card.getAttribute("data-category") || "").toLowerCase();
      var show = norm === "all" || cat === norm;
      card.classList.toggle("is-tab-hidden", !show);
      card.hidden = !show;
    });
  }

  function selectUzmStudio40Tab(tabId) {
    var norm = (tabId || "all").toLowerCase();
    studioState.activeTab = norm;

    var grid = document.getElementById("uzmStudio40Grid");
    if (!grid) return;
    ensureStudio40CuratedAttributes();

    if (norm === "all" && studioState.isCompact) {
      grid.classList.add("is-curated-compact");
    } else {
      grid.classList.remove("is-curated-compact");
    }

    var tabButtons = document.querySelectorAll("[data-studio40-filter]");
    tabButtons.forEach(function (btn) {
      var bVal = (btn.getAttribute("data-studio40-filter") || "").toLowerCase();
      var isAct = bVal === norm || (norm === "zircrown-ht" && bVal === "zircrown-st") || (norm === "zircrown-st" && bVal === "zircrown-ht");
      btn.classList.toggle("is-active", isAct);
      btn.classList.toggle("active", isAct);
      btn.setAttribute("aria-selected", isAct ? "true" : "false");
    });

    var cards = grid.querySelectorAll(".uzm-studio40-card");
    var visibleCount = 0;
    cards.forEach(function (card) {
      var cat = (card.getAttribute("data-cat") || "").toLowerCase();
      var code = (card.getAttribute("data-code") || "").trim();
      var match = false;

      if (norm === "all") {
        match = true;
      } else if (norm === "4d-5d") {
        match = cat === "4d-ml" || cat === "5d-ml" || cat === "4d-5d";
      } else if (norm === "vita-tab") {
        match = Boolean(STUDIO40_VITA_CODES[code]) || card.getAttribute("data-vita") === "1" || cat === "vita-tab";
      } else if (norm === "zircrown-ht" || norm === "zircrown-st") {
        match = cat === "zircrown-ht" || cat === "zircrown-st" || cat === "st-ml";
      } else {
        match = cat === norm;
      }

      card.classList.toggle("is-tab-hidden", !match);
      if (match) {
        var hiddenByCompact =
          grid.classList.contains("is-curated-compact") &&
          card.getAttribute("data-curated") === "0";
        if (!hiddenByCompact) visibleCount++;
      }
    });

    updateStudio40ExpandButtonUI(visibleCount, cards.length);
  }

  function toggleUzmStudio40All(forceExpand) {
    var grid = document.getElementById("uzmStudio40Grid");
    if (!grid) return;
    ensureStudio40CuratedAttributes();

    if (typeof forceExpand === "boolean") {
      studioState.isCompact = !forceExpand;
    } else {
      studioState.isCompact = !studioState.isCompact;
    }

    if (studioState.isCompact && studioState.activeTab === "all") {
      grid.classList.add("is-curated-compact");
    } else {
      grid.classList.remove("is-curated-compact");
    }

    selectUzmStudio40Tab(studioState.activeTab);
  }

  function updateStudio40ExpandButtonUI(visibleCount, totalCount) {
    var btn = document.getElementById("uzmStudio40ExpandBtn");
    var summary = document.getElementById("uzmStudio40SummaryText");
    var grid = document.getElementById("uzmStudio40Grid");
    var isCompactNow = grid ? grid.classList.contains("is-curated-compact") : studioState.isCompact;

    if (summary) {
      summary.textContent =
        "Gösterilen: " + visibleCount + " / Toplam " + (totalCount || 40) + " Gerçek Fırınlanmış Stüdyo Karesi";
    }
    if (btn) {
      btn.setAttribute("aria-expanded", isCompactNow ? "false" : "true");
      btn.textContent = isCompactNow
        ? "Tüm 40 Stüdyo Karesini Aç (+32 Kare)"
        : "8 Seçkin Kareye Daralt (Kompakt Görünüm)";
    }
  }

  var opticalState = {
    activeSeries: "5d-ml",
    lightMode: "back"
  };

  function applyOpticalSeriesState(seriesId, lightModeOverride) {
    var normId = (seriesId || opticalState.activeSeries || "5d-ml").toLowerCase();
    if (normId === "ht") normId = "zircrown-ht";
    if (!UZM_OPTICAL_STATE_MAP[normId]) {
      normId = "5d-ml";
    }
    opticalState.activeSeries = normId;
    if (lightModeOverride === "front" || lightModeOverride === "back" || lightModeOverride === "sss") {
      opticalState.lightMode = lightModeOverride;
    }

    var data = UZM_OPTICAL_STATE_MAP[normId];

    var seriesChips = document.querySelectorAll("[data-optical-series], [data-hero-series]");
    seriesChips.forEach(function (chip) {
      var cVal = (
        chip.getAttribute("data-optical-series") ||
        chip.getAttribute("data-hero-series") ||
        ""
      ).toLowerCase();
      var active = cVal === normId;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-selected", active ? "true" : "false");
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var modeBtns = document.querySelectorAll("[data-optical-mode]");
    modeBtns.forEach(function (mBtn) {
      var mVal = (mBtn.getAttribute("data-optical-mode") || "").toLowerCase();
      var active = mVal === opticalState.lightMode;
      mBtn.classList.toggle("is-active", active);
      mBtn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var imgEl =
      document.getElementById("uzmOpticalStageImg") ||
      document.getElementById("heroInteractiveImg");
    if (imgEl) {
      var targetSrc =
        opticalState.lightMode === "front"
          ? data.frontImg
          : opticalState.lightMode === "sss"
          ? data.sssImg
          : data.backImg;
      imgEl.setAttribute("src", targetSrc);
      imgEl.setAttribute(
        "alt",
        data.title + " — " + data.translucencyDir + " (" + data.room2ModeTitle + ")"
      );
    }

    var mapBindings = {
      uzmOpticalSeriesTitle: data.title,
      uzmOpticalSourceBadge: data.badge,
      uzmOpticalDirectionValue: data.translucencyDir,
      uzmOpticalSeriesRange: data.seriesRangeLabel,
      uzmOpticalStrengthValue: data.strengthMpa,
      uzmOpticalIndicationValue: data.indication,
      uzmOpticalRoom2Title: data.room2ModeTitle,
      uzmOpticalRoom2Desc: data.room2ModeDesc
    };

    Object.keys(mapBindings).forEach(function (elId) {
      var el = document.getElementById(elId);
      if (el) {
        el.textContent = mapBindings[elId];
      }
    });

    var heroReadout = document.querySelector("[data-optical-readout='direction']");
    if (heroReadout) {
      heroReadout.textContent = data.translucencyDir;
    }
    var heroRoom2 = document.querySelector("[data-optical-readout='room2']");
    if (heroRoom2) {
      heroRoom2.textContent = data.room2ModeTitle;
    }
  }

  function handleGlobalDelegatedClick(ev) {
    var target = ev.target;
    if (!target || typeof target.closest !== "function") return;

    var prodFilterBtn = target.closest("#productFilterBar [data-filter], [data-product-filter]");
    if (prodFilterBtn) {
      ev.preventDefault();
      var fVal =
        prodFilterBtn.getAttribute("data-filter") ||
        prodFilterBtn.getAttribute("data-product-filter") ||
        "all";
      applyProductFilter(fVal);
      return;
    }

    var jumpBtn = target.closest("[data-studio-jump]");
    if (jumpBtn) {
      ev.preventDefault();
      var rawTarget = (jumpBtn.getAttribute("data-studio-jump") || "all").toLowerCase();
      var mappedTab = PRODUCT_TO_STUDIO40_TAB[rawTarget] || rawTarget;
      selectUzmStudio40Tab(mappedTab);
      var studioSec = document.getElementById("zircrownStudio40Section");
      if (studioSec && typeof studioSec.scrollIntoView === "function") {
        studioSec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    var studioTabBtn = target.closest("[data-studio40-filter]");
    if (studioTabBtn) {
      ev.preventDefault();
      var tabVal = studioTabBtn.getAttribute("data-studio40-filter") || "all";
      selectUzmStudio40Tab(tabVal);
      return;
    }

    var expandBtn = target.closest("#uzmStudio40ExpandBtn, [data-studio40-expand]");
    if (expandBtn) {
      ev.preventDefault();
      toggleUzmStudio40All();
      return;
    }

    var opticalChip = target.closest("[data-optical-series], [data-hero-series]");
    if (opticalChip) {
      ev.preventDefault();
      var sId =
        opticalChip.getAttribute("data-optical-series") ||
        opticalChip.getAttribute("data-hero-series") ||
        "5d-ml";
      applyOpticalSeriesState(sId);
      return;
    }

    var modeBtn = target.closest("[data-optical-mode]");
    if (modeBtn) {
      ev.preventDefault();
      var mId = modeBtn.getAttribute("data-optical-mode") || "back";
      applyOpticalSeriesState(opticalState.activeSeries, mId);
      return;
    }

    var studioCard = target.closest(".uzm-studio40-card[data-code]");
    if (studioCard && typeof window.openUzmStudio40Modal === "function") {
      var code = studioCard.getAttribute("data-code");
      if (code) window.openUzmStudio40Modal(code);
      return;
    }
  }

  function initUzmAdim123() {
    ensureStudio40CuratedAttributes();
    selectUzmStudio40Tab("all");
    applyOpticalSeriesState("5d-ml", "back");
    renderScenario1QrSlots();
    if (typeof window.syncInternalLinksLang === "function") {
      window.syncInternalLinksLang();
    }
  }

  if (!window.__UZM_ADIM_123_CLICK_BOUND__) {
    document.addEventListener("click", handleGlobalDelegatedClick, false);
    window.__UZM_ADIM_123_CLICK_BOUND__ = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUzmAdim123);
  } else {
    initUzmAdim123();
  }

  window.selectUzmStudio40Tab = selectUzmStudio40Tab;
  window.toggleUzmStudio40All = toggleUzmStudio40All;
  window.applyUzmOpticalSeries = applyOpticalSeriesState;
  window.UZM_OPTICAL_STATE_MAP = UZM_OPTICAL_STATE_MAP;
  window.UZM_QR_SCENARIO_1_CONFIG = UZM_QR_SCENARIO_1_CONFIG;
  window.renderUzmScenario1QrSlots = renderScenario1QrSlots;
})();





/* === UZM 1305: OPTİK SİMÜLASYON VE SEKME ETKİLEŞİM GARANTİSİ === */
(function () {
  document.addEventListener('click', function (ev) {
    var optBtn = ev.target.closest('[data-optical-series][role="tab"]');
    if (optBtn) {
      var allOpt = document.querySelectorAll('[data-optical-series][role="tab"]');
      allOpt.forEach(function (b) {
        b.classList.toggle('is-active', b === optBtn);
        b.setAttribute('aria-selected', b === optBtn ? 'true' : 'false');
      });
      var sec = optBtn.closest('section') || document.body;
      var statusEl = sec.querySelector('.uzm-optical-live-status');
      if (!statusEl) {
        statusEl = document.createElement('p');
        statusEl.className = 'uzm-optical-live-status uzm-mono-tag';
        sec.appendChild(statusEl);
      }
      statusEl.textContent = 'Aktif Optik Seri: ' + (optBtn.textContent || '').trim() + ' · ' + optBtn.getAttribute('data-optical-series');
    }
  });
})();

/* === UZM UNIVERSAL PRODUCT INFO & COMPARISON MODAL (ATLAS-WEB 6-CRITERIA) === */
(function() {
  if (window.__uzmUniversalModalBound) return;
  window.__uzmUniversalModalBound = true;

  function ensureQuickInfoModal() {
    var m = document.getElementById('uzmQuickInfoModal');
    if (m) return m;
    m = document.createElement('div');
    m.id = 'uzmQuickInfoModal';
    m.style.cssText = 'position:fixed;inset:0;z-index:9998;background:rgba(15,23,42,0.72);backdrop-filter:blur(6px);display:none;align-items:center;justify-content:center;padding:1.25rem;';
    m.innerHTML = '<div style="background:#ffffff;color:#0f172a;max-width:680px;width:100%;max-height:86vh;overflow-y:auto;border-radius:16px;padding:1.4rem 1.6rem;box-shadow:0 25px 60px rgba(0,0,0,0.45);border:1px solid rgba(14,165,233,0.35);position:relative;">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.85rem;margin-bottom:1rem;">' +
      '<div><span id="uzmQmBadge" style="display:inline-block;font-size:0.75rem;font-weight:700;color:#0284c7;background:#e0f2fe;padding:0.2rem 0.6rem;border-radius:6px;margin-bottom:0.3rem;">ZIRCROWN® TEKNİK FÖY</span>' +
      '<h3 id="uzmQmTitle" style="margin:0;font-size:1.2rem;color:#0f172a;">Ürün Teknik Detayı</h3></div>' +
      '<button type="button" id="uzmQmClose" aria-label="Kapat" style="width:36px;height:36px;border-radius:10px;border:1px solid #cbd5e1;background:#f1f5f9;color:#0f172a;font-size:1.1rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">✕</button>' +
      '</div>' +
      '<div id="uzmQmBody" style="font-size:0.92rem;line-height:1.55;color:#334155;"></div>' +
      '</div>';
    document.body.appendChild(m);
    m.addEventListener('click', function(e) {
      if (e.target === m || e.target.closest('#uzmQmClose')) {
        m.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && m.style.display === 'flex') {
        m.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    return m;
  }

  document.addEventListener('click', function(ev) {
    var btn = ev.target.closest('.uzm-card-actions a, .uzm-card-actions button, [data-compare-block], [data-spec-modal]');
    if (!btn) return;
    if (btn.hasAttribute('data-open-drawer')) return; // Handled by openDrawer modal
    var txt = (btn.textContent || '').trim();
    var href = btn.getAttribute('href') || '';
    var card = btn.closest('.uzm-block-card, .uzm-endo-card, .uzm-sql-card');
    if (!card) return;

    // If button is "Teknik Föy" or "Karşılaştırma" or points to an in-page hash (#teknik-tablo, #karsilastirma, etc.), open as a sleek popup window on top of screen!
    if (txt.indexOf('Teknik Föy') !== -1 || txt.indexOf('Karşılaştır') !== -1 || txt.indexOf('Detay') !== -1 || (href.charAt(0) === '#' && href.length > 1)) {
      ev.preventDefault();
      var titleEl = card.querySelector('h3');
      var title = titleEl ? titleEl.textContent.trim() : 'ZirCrown Ürün Detayı';
      var tagEl = card.querySelector('.uzm-card-topline, .uzm-endo-cat');
      var tag = tagEl ? tagEl.textContent.trim().replace(/\s+/g, ' ') : 'ZIRCROWN® CAD/CAM';
      var descEl = card.querySelector('.uzm-card-tagline, .uzm-endo-desc, p');
      var desc = descEl ? descEl.textContent.trim() : '';
      var imgEl = card.querySelector('img');
      var imgSrc = imgEl ? imgEl.getAttribute('src') : '';
      var metricsHtml = '';
      var qm = card.querySelector('.uzm-card-QuickMetrics, .uzm-endo-specs');
      if (qm) metricsHtml = '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:0.85rem;margin:0.85rem 0;">' + qm.innerHTML + '</div>';
      var detailsEl = card.querySelector('.uzm-card-spec-body, table');
      var detailsHtml = detailsEl ? '<div style="margin-top:0.75rem;">' + detailsEl.innerHTML + '</div>' : '';

      // If target section (#teknik-tablo / #karsilastirma) exists on page and user clicked Karşılaştırma, include comparison table inside popup!
      if (txt.indexOf('Karşılaştır') !== -1) {
        var compTable = document.querySelector('#karsilastirma table, #teknik-tablo table, .uzm-table-wrap table, table');
        if (compTable) {
          detailsHtml = '<div style="overflow-x:auto;margin-top:0.75rem;">' + compTable.outerHTML + '</div>';
        }
      }

      var modal = ensureQuickInfoModal();
      document.getElementById('uzmQmBadge').textContent = tag;
      document.getElementById('uzmQmTitle').textContent = title + ' — ' + txt;
      document.getElementById('uzmQmBody').innerHTML =
        (imgSrc ? '<div style="text-align:center;background:#f8fafc;padding:0.75rem;border-radius:12px;margin-bottom:0.85rem;"><img src="' + imgSrc + '" style="max-height:180px;width:auto;object-fit:contain;margin:0 auto;display:block;"></div>' : '') +
        (desc ? '<p style="margin:0 0 0.75rem 0;color:#334155;">' + desc + '</p>' : '') +
        metricsHtml + detailsHtml;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });
})();
