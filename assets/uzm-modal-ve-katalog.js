/* ==========================================================================
   UZM DENTAL — SAGEMAX / IVOCLAR ILHAMLI GELISMIS 4 SEKMELI MODAL PENCERE MOTORU V2
   Dosya: assets/uzm-modal-ve-katalog.js
   ========================================================================== */
(function () {
  "use strict";

  var UZM_PRODUCT_DATABASE = {
    "5d-ml": {
      id: "5d-ml",
      sku: "REF: ZRC-5DML-985",
      badge: "Lab · 10 Katman",
      category: "ZİRCONYA CAD/CAM DİSK · 10 KATMAN MULTILAYER",
      title: "ZirCrown 5D-ML Süper Translüsent Multilayer Zirkonya Disk",
      img: "/images/products/studio_40/IMG_7264.jpg",
      translucency: "%47 – %60",
      translucencyDetail: "İnsizal %60 → Servikal %47 (10 Katman Kesintisiz Doğal Mine-Dentin Geçişi)",
      strength: "650 – 950 MPa",
      strengthDetail: "650 MPa (İnsizal) → 950 MPa (Servikal) · 3-Nokta Bükülme (ISO 6872)",
      sinterPeak: "1480°C",
      sinterStandard: "8°C/dk artış → 1480°C (120 dk bekleme) → 10°C/dk fırın içi soğutma (Toplam ~150 dk)",
      sinterFast: "15°C/dk artış → 1500°C (45 dk bekleme) → Hızlı kontrollü soğutma (Tek üye / 3 üye)",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "A4", "B1", "B2", "C1", "C2", "D2", "BL1", "BL2", "BL3", "BL4"],
      indication: "Anterior estetik kronlar, lamina/veneer, tam ark monolitik restorasyonlar ve 14 üyeye kadar köprüler",
      lotTrace: "Soğuk İzostatik Presleme (CIP) · Lazer kazımalı LOT & hassas büzülme katsayısı",
      layers: [
        { name: "İnsizal (Mine)", pct: "35%", trans: "%60", mpa: "650 MPa", color: "#e0f2fe" },
        { name: "Geçiş Katmanları (8 Ara Katman)", pct: "30%", trans: "%54", mpa: "800 MPa", color: "#bae6fd" },
        { name: "Servikal (Dentin/Boyun)", pct: "35%", trans: "%47", mpa: "950 MPa", color: "#7dd3fc" }
      ]
    },
    "4d-ml": {
      id: "4d-ml",
      sku: "REF: ZRC-4DML-985",
      badge: "Lab · 9 Katman",
      category: "ZİRCONYA CAD/CAM DİSK · 9 KATMAN MULTILAYER",
      title: "ZirCrown 4D-ML Estetik & Ekstra Güç Dengeli Zirkonya Disk",
      img: "/images/products/studio_40/IMG_7265.jpg",
      translucency: "%45 – %59",
      translucencyDetail: "İnsizal %59 → Servikal %45 (9 Kademeli Doğal Geçiş)",
      strength: "700 – 1000 MPa",
      strengthDetail: "700 MPa (İnsizal) → 1000 MPa (Servikal) · ISO 6872",
      sinterPeak: "1480°C",
      sinterStandard: "8°C/dk artış → 1480°C (120 dk bekleme) → Kontrollü soğutma",
      sinterFast: "12°C/dk artış → 1500°C (60 dk bekleme) → Hızlı laboratuvar protokolü",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "B1", "B2", "C1", "C2", "D2", "BL1", "BL2", "BL3"],
      indication: "Çok üyeli uzun köprüler, implant üstü hibrit protezler ve anterior/posterior kombinasyonlar",
      lotTrace: "Soğuk İzostatik Presleme (CIP) · Parti bazlı lazer LOT izlenebilirliği",
      layers: [
        { name: "İnsizal Katman", pct: "30%", trans: "%59", mpa: "700 MPa", color: "#e0f2fe" },
        { name: "6 Kademeli Geçiş", pct: "35%", trans: "%52", mpa: "850 MPa", color: "#bae6fd" },
        { name: "Servikal Dentin", pct: "35%", trans: "%45", mpa: "1000 MPa", color: "#7dd3fc" }
      ]
    },
    "3d-pro": {
      id: "3d-pro",
      sku: "REF: ZRC-3DPRO-985",
      badge: "Lab · 6 Katman",
      category: "ZİRCONYA CAD/CAM DİSK · 6 KATMAN MULTILAYER",
      title: "ZirCrown 3D-PRO Yüksek Dayanımlı Multilayer Zirkonya Disk",
      img: "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
      translucency: "%43 – %57",
      translucencyDetail: "İnsizal %57 → Servikal %43 (6 Katman Mikro-Geçiş)",
      strength: "800 – 1200 MPa",
      strengthDetail: "800 MPa (İnsizal) → 1200 MPa (Servikal) · ISO 6872",
      sinterPeak: "1500°C",
      sinterStandard: "8°C/dk artış → 1500°C (120 dk bekleme) → Doğal soğutma",
      sinterFast: "20°C/dk artış → 1510°C (45 dk bekleme) → Chairside / Hızlı Lab Sinterleme",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "B1", "B2", "C1", "D2", "BL1", "BL2"],
      indication: "Tam ark implant üstü restorasyonlar, uzun gövdeli köprüler ve aynı gün teslim kuronlar",
      lotTrace: "Lazer LOT kodu · Homojen izostatik yoğunluk ve kenar stabilitesi",
      layers: [
        { name: "İnsizal", pct: "30%", trans: "%57", mpa: "800 MPa", color: "#e0f2fe" },
        { name: "4 Ara Geçiş Katmanı", pct: "35%", trans: "%50", mpa: "1000 MPa", color: "#93c5fd" },
        { name: "Servikal Güç Katmanı", pct: "35%", trans: "%43", mpa: "1200 MPa", color: "#60a5fa" }
      ]
    },
    "3d-ml": {
      id: "3d-ml",
      sku: "REF: ZRC-3DML-985",
      badge: "Lab · 9 Katman",
      category: "ZİRCONYA CAD/CAM DİSK · GÜNLÜK LABORATUVAR STANDARDI",
      title: "ZirCrown 3D-ML Dengeli Multilayer Zirkonya Disk",
      img: "/images/products/studio_40/IMG_7266.jpg",
      translucency: "%43 – %46",
      translucencyDetail: "İnsizal %46 → Servikal %43 (Kontrollü Maskeleme & Geçiş)",
      strength: "900 – 1200 MPa",
      strengthDetail: "900 MPa (İnsizal) → 1200 MPa (Servikal) · ISO 6872",
      sinterPeak: "1500°C",
      sinterStandard: "8°C/dk artış → 1500°C (120 dk bekleme) → Kontrollü soğutma",
      sinterFast: "15°C/dk artış → 1510°C (60 dk bekleme) → Hızlı laboratuvar çevrimi",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "B1", "B2", "C2", "D2", "BL2"],
      indication: "Posterior kuronlar, renklenmiş güdük/abutment maskeleme ve uzun açıklıklı köprüler",
      lotTrace: "CIP presleme · Lazer LOT ve büzülme katsayısı doğrulaması",
      layers: [
        { name: "İnsizal", pct: "30%", trans: "%46", mpa: "900 MPa", color: "#dbeafe" },
        { name: "Geçiş Katmanları", pct: "35%", trans: "%44.5", mpa: "1050 MPa", color: "#93c5fd" },
        { name: "Servikal", pct: "35%", trans: "%43", mpa: "1200 MPa", color: "#0891B2" }
      ]
    },
    "st-ml": {
      id: "st-ml",
      sku: "REF: ZRC-STML-985",
      badge: "Lab · 4 Katman",
      category: "ZİRCONYA CAD/CAM DİSK · SÜPER TRANSLÜSENT MONOLİTİK",
      title: "ZirCrown ST-ML Yüksek Mukavemetli Monolitik Multilayer Disk",
      img: "/images/products/studio_40/IMG_7267.jpg",
      translucency: "%43 Homojen",
      translucencyDetail: "%43 Homojen Süper Translüsent Geçiş (4 Katman Kroma Gradyanı)",
      strength: "1200 MPa",
      strengthDetail: "1200 MPa Homojen Monolitik Bükülme Direnci · ISO 6872",
      sinterPeak: "1520°C",
      sinterStandard: "8°C/dk artış → 1520°C (120 dk bekleme) → Doğal soğutma",
      sinterFast: "15°C/dk artış → 1530°C (60 dk bekleme) → Hızlı monolitik çevrim",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "B1", "B2", "C1", "D2", "BL1", "BL2"],
      indication: "Yüksek oklüzal yük altındaki posterior kuronlar ve günlük monolitik köprüler",
      lotTrace: "Lazer kazımalı LOT & izostatik yoğunluk sertifikasyonu",
      layers: [
        { name: "Üst Kroma Katmanı", pct: "35%", trans: "%43", mpa: "1200 MPa", color: "#dbeafe" },
        { name: "Orta Geçiş", pct: "30%", trans: "%43", mpa: "1200 MPa", color: "#93c5fd" },
        { name: "Alt Gövde", pct: "35%", trans: "%43", mpa: "1200 MPa", color: "#60a5fa" }
      ]
    },
    "zircrown-ht": {
      id: "zircrown-ht",
      sku: "REF: ZRC-HTFAST-985",
      badge: "Lab · Hızlı Sinter",
      category: "ZİRCONYA CAD/CAM DİSK · MAKSİMUM ALTYAPI & HIZLI SİNTER",
      title: "ZirCrown HT / Hızlı-Sinter Yüksek Dirençli Zirkonya Diski",
      img: "/uploads/uzm_zircrown_ut_disc.png",
      translucency: "%43 – %55",
      translucencyDetail: "Yüksek Maskeleme & Hızlı Sinterleme Optik Dengesi",
      strength: "1200 – 1300 MPa",
      strengthDetail: "1200–1300 MPa Maksimum Altyapı Mukavemeti · ISO 6872",
      sinterPeak: "1510°C",
      sinterStandard: "10°C/dk artış → 1510°C (120 dk bekleme) → Kontrollü soğutma",
      sinterFast: "25°C/dk artış → 1520°C (45 dk hızlı sinterleme) → Chairside / Acil Lab Teslim",
      thicknessList: ["10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["White (Beyaz)", "A1", "A2", "A3", "B1", "BL2"],
      indication: "Porselen üstyapı (coping), teleskop kuron, implant üstü barlar ve bruksizm vakaları",
      lotTrace: "Her diskte lazer LOT kodu ve hassas frezeleme büyütme faktörü",
      layers: [
        { name: "Monolitik / Altyapı Gövde", pct: "100%", trans: "%43–%55", mpa: "1250 MPa", color: "#38bdf8" }
      ]
    },
    "pmma-mono": {
      id: "pmma-mono",
      sku: "REF: UZM-PMMA-MONO",
      badge: "CAD/CAM · Monolayer",
      category: "PMMA CAD/CAM SERİSİ · MONOLAYER",
      title: "ZirCrown Monolayer PMMA CAD/CAM Geçici Restorasyon Diski",
      img: "/uploads/pmma_brosur_2026/uzm_pmma_p2_monolayer_disc.png",
      translucency: "Doğal Dentin",
      translucencyDetail: "Monokromatik Doğal Dentin Opaklığı (Artık Monomer <%0.5)",
      strength: "≥ 110 MPa",
      strengthDetail: "≥ 110 MPa Bükülme Dayanımı (ISO 20795-1) · ≥ 22 HV Vickers Sertliği",
      sinterPeak: "Soğuk Freze",
      sinterStandard: "Doğrudan mekanik polisajla tamamlanır · 18.000–22.000 RPM karbür frez ile kuru/ıslak kazıma",
      sinterFast: "Tek aşamalı yüksek parlaklıkta polisaj (Low-heat polishing)",
      thicknessList: ["12 mm", "14 mm", "16 mm", "18 mm", "20 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "A3.5", "B1", "BL", "Pink (Gingiva)"],
      indication: "Uzun süreli geçici kron/köprüler ve oklüzal rehabilitasyon provaları",
      lotTrace: "Çapraz bağlı (Cross-linked) endüstriyel polimerizasyon · Lazer LOT",
      layers: [
        { name: "Homojen Cross-Linked PMMA", pct: "100%", trans: "Dentin", mpa: "110 MPa", color: "#fcd34d" }
      ]
    },
    "pmma-multi": {
      id: "pmma-multi",
      sku: "REF: UZM-PMMA-MULTI",
      badge: "CAD/CAM · 5 Katman",
      category: "PMMA CAD/CAM SERİSİ · 5 KATMAN MULTILAYER",
      title: "ZirCrown Multilayer Doğal Renk Geçişli PMMA CAD/CAM Disk",
      img: "/uploads/pmma_brosur_2026/uzm_pmma_p3_multilayer_disc.png",
      translucency: "5 Katman Geçişli",
      translucencyDetail: "Servikalden İnsizale 5 Katmanlı Kroma ve Işık Geçirgenliği Geçişi",
      strength: "≥ 115 MPa",
      strengthDetail: "≥ 115 MPa Bükülme Dayanımı · Su Emilimi ≤ 20 µg/mm³",
      sinterPeak: "Soğuk Freze",
      sinterStandard: "Doğrudan mekanik polisajla tamamlanır · Kuru veya ıslak CAD/CAM frezeleme uyumlu",
      sinterFast: "Hızlı silikon lastik ve keçe ile ayna parlaklığında polisaj",
      thicknessList: ["14 mm", "16 mm", "18 mm", "20 mm", "25 mm"],
      shadeList: ["A1", "A2", "A3", "B1", "BL1", "BL2"],
      indication: "Anterior estetik bölge ve implant iyileşme dönemi uzun süreli geçici protezler",
      lotTrace: "Homojen katman geçişi · Parti bazlı lazer LOT kaydı",
      layers: [
        { name: "İnsizal Şeffaf Mine", pct: "30%", trans: "Yüksek", mpa: "115 MPa", color: "#fef08a" },
        { name: "3 Ara Geçiş Katmanı", pct: "35%", trans: "Orta", mpa: "115 MPa", color: "#fde047" },
        { name: "Servikal Dentin", pct: "35%", trans: "Dentin", mpa: "115 MPa", color: "#facc15" }
      ]
    },
    "pmma-clear": {
      id: "pmma-clear",
      sku: "REF: UZM-PMMA-CLR",
      badge: "CAD/CAM · Şeffaf Splint",
      category: "PMMA CAD/CAM SERİSİ · CLEAR & FLEXIBLE SPLINT",
      title: "ZirCrown Clear & Flexible Splint Optik Şeffaf PMMA Disk",
      img: "/uploads/pmma_brosur_2026/uzm_pmma_p1_hero_3discs.png",
      translucency: "> %91 Kristal",
      translucencyDetail: "> %91 Optik Şeffaflık · Sararmaya ve Kırılmaya Dirençli Yapı",
      strength: "Yüksek Elastik",
      strengthDetail: "Yüksek Elastik Modül & Darbe Dayanımı (Bruksizm / Gece Plağı Uyumlu)",
      sinterPeak: "Soğuk Freze",
      sinterStandard: "Doğrudan mekanik polisajla tamamlanır · Tek uçlu PMMA frezi ile temiz talaş tahliyesi",
      sinterFast: "Polisaj patı ile kristal cam şeffaflığı",
      thicknessList: ["16 mm", "18 mm", "20 mm", "22 mm", "25 mm"],
      shadeList: ["Clear (Tam Şeffaf)"],
      indication: "Gece plağı (oklüzal splint), cerrahi implant rehberi (surgical guide) ve try-in",
      lotTrace: "Biyouyumlu monomer-free üretim partisi · Lazer LOT kodu",
      layers: [
        { name: "Kristal Optik Polimer", pct: "100%", trans: ">%91", mpa: "Bruksizm Dayanımlı", color: "#e2e8f0" }
      ]
    },
    "pmma-xray": {
      id: "pmma-xray",
      sku: "REF: UZM-PMMA-XRAY",
      badge: "CAD/CAM · Radyoopak",
      category: "PMMA CAD/CAM SERİSİ · X-RAY RADYOOPAK",
      title: "ZirCrown X-Ray Radyoopak Tanı & İmplant Planlama PMMA Diski",
      img: "/uploads/pmma_brosur_2026/uzm_pmma_p4_xray_disc.png",
      translucency: "> %200 Al Radyoopak",
      translucencyDetail: "> %200 Alüminyum Eşdeğeri Radyoopasite (CBCT Artefaktsız)",
      strength: "≥ 100 MPa",
      strengthDetail: "≥ 100 MPa Bükülme Direnci · Baryum Sülfat Katkılı Homojen Matris",
      sinterPeak: "Soğuk Freze",
      sinterStandard: "Doğrudan mekanik polisajla tamamlanır · CBCT / Tomografi öncesi rehber kazıma",
      sinterFast: "Metal saçılması (scatter) yapmadan net sınır görüntüsü",
      thicknessList: ["14 mm", "16 mm", "18 mm", "20 mm"],
      shadeList: ["Radyoopak Beyaz / Dentin"],
      indication: "CBCT / Panoramik çekimlerde marjin sınırı ve implant açısı doğrulama stenti",
      lotTrace: "Homojen radyoopak dolgu dağılım partisi · Lazer LOT izlenebilirliği",
      layers: [
        { name: "BaSO4 Radyoopak Matris", pct: "100%", trans: "CBCT Net", mpa: "100 MPa", color: "#cbd5e1" }
      ]
    },
    "endo-niti": {
      id: "endo-niti",
      sku: "REF: UZM-ENDO-NITI",
      badge: "Klinik · CM-Wire NiTi",
      category: "KLİNİK ENDODONTİ · ISIL İŞLEMLİ NİTİ EĞE SİSTEMLERİ",
      title: "Gold & Blue CM-Wire Isıl İşlemli NiTi Rotary / Reciproc Kanal Eğeleri",
      img: "/uploads/uzm_gp_f_series_box.png",
      translucency: "CM-Wire Hafızalı",
      translucencyDetail: "Kontrollü Hafıza (CM-Wire) · Kavisli Kanallarda Kanal Transportasyonu Sıfır",
      strength: "+%300 Yorgunluk Direnci",
      strengthDetail: "Geleneksel NiTi Eğelere Göre %300+ Döngüsel Yorgunluk (Cyclic Fatigue) Direnci",
      sinterPeak: "134°C Otoklav",
      sinterStandard: "300–350 RPM · 1.5–2.5 Ncm Tork (Rotary) veya Reciprocating mod",
      sinterFast: "134°C Otoklav sterilizasyonuna tam uyumlu · Silikon stoper ve lazer derinlik izi",
      thicknessList: ["21 mm", "25 mm", "31 mm"],
      shadeList: ["SX–F3 (6'lı Set)", "#15/.04", "#20/.04", "#25/.04", "#25/.06", "#30/.04", "Reciproc R25/R40"],
      indication: "Dar, kalsifiye ve aşırı kurvatürlü kök kanallarında güvenli mekanik şekillendirme",
      lotTrace: "Kutu bazlı sterilizasyon ve parti (LOT) izlenebilirliği",
      layers: [
        { name: "Isıl İşlemli Gold/Blue NiTi Faz", pct: "100%", trans: "Esnek", mpa: "+%300 Cyclic Fatigue", color: "#fbbf24" }
      ]
    },
    "gutta-percha": {
      id: "gutta-percha",
      sku: "REF: UZM-ENDO-GP",
      badge: "Klinik · Lazer Kalibreli",
      category: "KLİNİK ENDODONTİ · LAZER KALİBRELİ KANAL DOLUM KONLARI",
      title: "Lazer Kalibreli Gutta Percha Kanal Dolum Konları (.02 / .04 / .06 / F1–F3)",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Yüksek Radyoopak",
      translucencyDetail: "Yüksek Radyoopasite · Periapikal Röntgende Net Apikal Tıkaç Görünümü",
      strength: "±0.02 mm Tolerans",
      strengthDetail: "Mikrometrik Lazer Çap Toleransı (±0.02 mm) · Kırılmaz Esnek Alfa/Beta Faz",
      sinterPeak: "28 mm Standart",
      sinterStandard: "Soğuk Lateral Kondensasyon ve Tek Kon (Single-Cone) Obtürasyon",
      sinterFast: "Sıcak Vertikal Kompaksiyon (Termoplastik enjeksiyon uyumlu)",
      thicknessList: [".02 Taper", ".04 Taper", ".06 Taper", "ProTaper F1–F5"],
      shadeList: ["#15–#40 Assorted", "#20", "#25", "#30", "#35", "#40", "F1", "F2", "F3"],
      indication: "Şekillendirilmiş kök kanallarının hermetik 3 boyutlu apikal ve koronal obtürasyonu",
      lotTrace: "Kadmiyum içermez · Lazer çap kontrolü ve LOT parti kaydı",
      layers: [
        { name: "Alfa/Beta Kalibreli Gutta Percha", pct: "100%", trans: "Radyoopak", mpa: "±0.02mm", color: "#fb7185" }
      ]
    },
    "paper-point": {
      id: "paper-point",
      sku: "REF: UZM-ENDO-PP",
      badge: "Klinik · Gama Steril",
      category: "KLİNİK ENDODONTİ · YÜKSEK EMİCİ KANAL KURULAMA KONLARI",
      title: "Steril Emici Kağıt Konlar (Absorbent Paper Points · .02 / .04 / .06 / F1–F3)",
      img: "/uploads/uzm_pp_04_box.png",
      translucency: "%100 Saf Selüloz",
      translucencyDetail: "%100 Saf Uzun Lifli Selüloz · Yapıştırıcı ve Kimyasal Ağartıcı İçermez",
      strength: "Rijit Islak Uç",
      strengthDetail: "Islakken Dağılmayan Rijit Uç Yapısı · Saniyeler İçinde Tam Eksüda Emilimi",
      sinterPeak: "Gama Steril",
      sinterStandard: "Milimetrik Derinlik İşaretli (18 · 19 · 20 · 22 · 24 mm)",
      sinterFast: "Tek el açılır kayar kapaklı hijyenik klinik kutu",
      thicknessList: [".02 Taper", ".04 Taper", ".06 Taper", "F1–F5 Uyumlu"],
      shadeList: ["#15–#40 Assorted", "#20", "#25", "#30", "F1", "F2", "F3"],
      indication: "Obtürasyon öncesi kök kanallarının travmasız ve tam kurulanması",
      lotTrace: "Steril parti (LOT) ve son kullanma tarihi izlenebilirliği",
      layers: [
        { name: "Gama Steril Saf Selüloz", pct: "100%", trans: "Yüksek Emici", mpa: "Lif Bırakmaz", color: "#94a3b8" }
      ]
    },
    "gutta-corrector": {
      id: "gutta-corrector",
      sku: "REF: UZM-ENDO-GC",
      badge: "Klinik · Kalibrasyon",
      category: "KLİNİK ENDODONTİ · KANAL CİHAZLARI & KALİBRASYON",
      title: "Gutta Percha Kalibrasyon Cetveli (Gutta Gauge) & Isılı Kesici Sistem",
      img: "/uploads/uzm_gutta_corrector.png",
      translucency: "ISO #20 – #140",
      translucencyDetail: "Hassas Lazer İşlemeli ISO Delik Kalibrasyonu (#20 – #140)",
      strength: "135°C Otoklav",
      strengthDetail: "135°C Otoklav Sterilizasyonuna Dayanıklı Eloksallı Medikal Alüminyum",
      sinterPeak: "0–30 mm Cetvel",
      sinterStandard: "Ana konun (Master Cone) apikal çapa mikrometrik kalibrasyonu",
      sinterFast: "Anında termal kesim ucu ile kanal ağzında temiz gutta kesimi",
      thicknessList: ["ISO #20–#140 Cetvel", "Termal Kesici Kalem", "Yedek Kesici Uç (4'lü)"],
      shadeList: ["Antirefle Mavi", "Antirefle Siyah/Gri"],
      indication: "Ana konun apikal çapa tam kalibrasyonu ve çalışma boyu sabitlemesi",
      lotTrace: "Kalibrasyon sertifikalı üretim partisi",
      layers: [
        { name: "Eloksallı Medikal Alaşım", pct: "100%", trans: "Lazer Skala", mpa: "135°C Otoklav", color: "#38bdf8" }
      ]
    }
  };

  var currentModalState = {
    productKey: "5d-ml",
    activeTab: "specs",
    selectedThickness: "",
    selectedShade: ""
  };

  function resolveProductKey(triggerEl) {
    if (!triggerEl) return "5d-ml";
    var card = triggerEl.closest(
      "[data-product-id], [data-id], [data-series], [data-block-id], .uzm-product-card, .uzm-block-card, .uzm-sql-card, .uzm-card, .uzm-zirconia-card, .uzm-pmma-card, .uzm-endo-card"
    );
    var rawKey =
      triggerEl.getAttribute("data-open-drawer") ||
      triggerEl.getAttribute("data-product-id") ||
      triggerEl.getAttribute("data-id") ||
      triggerEl.getAttribute("data-series") ||
      (card &&
        (card.getAttribute("data-block-id") ||
          card.getAttribute("data-product-id") ||
          card.getAttribute("data-id") ||
          card.getAttribute("data-series"))) ||
      "";
    rawKey = rawKey.toLowerCase().trim();
    if (rawKey === "ht" || rawKey === "fast-3d-pro") rawKey = "zircrown-ht";
    if (UZM_PRODUCT_DATABASE[rawKey]) return rawKey;

    var textPool = (
      (card ? card.textContent : "") +
      " " +
      (triggerEl.textContent || "") +
      " " +
      (document.title || "")
    ).toLowerCase();

    if (textPool.indexOf("5d-ml") !== -1 || textPool.indexOf("5d ml") !== -1) return "5d-ml";
    if (textPool.indexOf("4d-ml") !== -1 || textPool.indexOf("4d ml") !== -1) return "4d-ml";
    if (textPool.indexOf("hızlı-sinter") !== -1 || textPool.indexOf("hizli-sinter") !== -1 || textPool.indexOf("hızlı sinter") !== -1 || textPool.indexOf("zircrown ht") !== -1) return "zircrown-ht";
    if (textPool.indexOf("3d-pro") !== -1 || textPool.indexOf("3d pro") !== -1) return "3d-pro";
    if (textPool.indexOf("3d-ml") !== -1 || textPool.indexOf("3d ml") !== -1) return "3d-ml";
    if (textPool.indexOf("st-ml") !== -1 || textPool.indexOf("st ml") !== -1) return "st-ml";
    if (textPool.indexOf("multilayer") !== -1 && textPool.indexOf("pmma") !== -1) return "pmma-multi";
    if ((textPool.indexOf("clear") !== -1 || textPool.indexOf("splint") !== -1 || textPool.indexOf("flexible") !== -1) && textPool.indexOf("pmma") !== -1) return "pmma-clear";
    if ((textPool.indexOf("x-ray") !== -1 || textPool.indexOf("radyoopak") !== -1 || textPool.indexOf("opak") !== -1) && textPool.indexOf("pmma") !== -1) return "pmma-xray";
    if (textPool.indexOf("pmma") !== -1) return "pmma-mono";
    if (textPool.indexOf("paper point") !== -1 || textPool.indexOf("kağıt kon") !== -1) return "paper-point";
    if (textPool.indexOf("corrector") !== -1 || textPool.indexOf("kalibrasyon") !== -1 || textPool.indexOf("cetvel") !== -1) return "gutta-corrector";
    if (textPool.indexOf("gutta") !== -1) return "gutta-percha";
    if (textPool.indexOf("niti") !== -1 || textPool.indexOf("rotary") !== -1 || textPool.indexOf("reciproc") !== -1 || textPool.indexOf("endo") !== -1) return "endo-niti";

    return "5d-ml";
  }

  function detectInitialTab(modeLabel, triggerEl) {
    var openTab = triggerEl && triggerEl.getAttribute("data-open-tab");
    if (openTab === "sinter") return "sinter";
    var l = (modeLabel || "").toLowerCase();
    if (l.indexOf("sinter") !== -1 || l.indexOf("fırın") !== -1 || l.indexOf("protokol") !== -1) return "sinter";
    if (l.indexOf("karşılaştır") !== -1 || l.indexOf("karsilastir") !== -1 || l.indexOf("matris") !== -1) return "compare";
    if (l.indexOf("numune") !== -1 || l.indexOf("teklif") !== -1 || l.indexOf("sipariş") !== -1) return "quote";
    return "specs";
  }

  function ensureUniversalModalDOM() {
    var existing = document.getElementById("uzmUniversalModal");
    if (existing) return existing;

    var overlay = document.createElement("div");
    overlay.id = "uzmUniversalModal";
    overlay.className = "uzm-modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "uzmModalTitleText");
    overlay.setAttribute("aria-hidden", "true");

    overlay.innerHTML =
      '<div class="uzm-modal-window" role="document">' +
        '<header class="uzm-modal-header">' +
          '<div class="uzm-modal-header-main">' +
            '<div class="uzm-modal-thumb-box"><img id="uzmModalThumbImg" src="/images/products/studio_40/IMG_7264.jpg" alt="Ürün Görseli"></div>' +
            '<div class="uzm-modal-title-col">' +
              '<div class="uzm-modal-badges-row">' +
                '<span id="uzmModalBadgePill" class="uzm-sagemax-pill">Lab · 10 Katman</span>' +
                '<span id="uzmModalSkuText" class="uzm-sagemax-sku">REF: ZRC-5DML-985</span>' +
                '<span id="uzmModalKickerText" class="uzm-modal-kicker">ZİRCONYA CAD/CAM DİSK</span>' +
              '</div>' +
              '<h3 id="uzmModalTitleText" class="uzm-modal-title">Ürün Teknik Veri Kartı</h3>' +
              '<div class="uzm-modal-kpi-strip">' +
                '<div class="uzm-modal-kpi-box"><small>OPTİK / GEÇİRGENLİK</small><strong id="uzmModalKpiTrans">%47 – %60</strong></div>' +
                '<div class="uzm-modal-kpi-box"><small>MEKANİK DAYANIM</small><strong id="uzmModalKpiStrength">650 – 950 MPa</strong></div>' +
                '<div class="uzm-modal-kpi-box"><small>SİNTER / İŞLEM</small><strong id="uzmModalKpiSinter">1480°C</strong></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" id="uzmModalCloseBtn" class="uzm-modal-close-btn" aria-label="Pencereyi Kapat" title="Tek Tıkla Kapat (ESC)">✕</button>' +
        '</header>' +
        '<nav class="uzm-modal-tabbar" role="tablist">' +
          '<button type="button" class="uzm-modal-tab-btn is-active" data-uzm-tab="specs">1. Teknik Föy &amp; Varyant Seçimi</button>' +
          '<button type="button" class="uzm-modal-tab-btn" data-uzm-tab="sinter">2. Sinterleme Eğrisi &amp; Protokol</button>' +
          '<button type="button" class="uzm-modal-tab-btn" data-uzm-tab="compare">3. Seri Karşılaştırma Matrisi</button>' +
          '<button type="button" class="uzm-modal-tab-btn" data-uzm-tab="quote">4. WhatsApp Bilgi Al &amp; İletişim</button>' +
        '</nav>' +
        '<div id="uzmModalBodyContent" class="uzm-modal-body"></div>' +
        '<footer class="uzm-modal-footer">' +
          '<div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">' +
            '<span style="font-size:0.78rem;color:#475569;font-weight:600;">Ø 98.5mm Açık CAD/CAM · ISO 6872 / ISO 13485 Parti (LOT) Garantili</span>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:0.6rem;">' +
            '<button type="button" class="uzm-modal-tab-btn" data-uzm-tab="quote" style="background:#0095c8;color:#fff;border-color:#0095c8;padding:0.45rem 0.95rem;border-radius:8px;font-weight:600;">💬 WhatsApp ile Bilgi Al →</button>' +
            '<button type="button" id="uzmModalBottomCloseBtn" class="uzm-card-btn" style="min-height:38px;padding:6px 14px;border-radius:8px;border:1px solid #0F172A;background:#0F172A;color:#FFFFFF;font-weight:700;cursor:pointer;">Kapat (✕)</button>' +
          '</div>' +
        '</footer>' +
      '</div>';

    document.body.appendChild(overlay);
    return overlay;
  }

  function renderModalTabContent() {
    var item = UZM_PRODUCT_DATABASE[currentModalState.productKey] || UZM_PRODUCT_DATABASE["5d-ml"];
    var bodyEl = document.getElementById("uzmModalBodyContent");
    window.__uzmActiveProductKey = currentModalState.productKey;
    window.__uzmActiveTab = currentModalState.activeTab;
    if (!bodyEl) return;

    if (!currentModalState.selectedThickness && item.thicknessList && item.thicknessList.length) {
      currentModalState.selectedThickness = item.thicknessList[2] || item.thicknessList[0];
    }
    if (!currentModalState.selectedShade && item.shadeList && item.shadeList.length) {
      currentModalState.selectedShade = item.shadeList[1] || item.shadeList[0];
    }

    var tabBtns = document.querySelectorAll("#uzmUniversalModal [data-uzm-tab]");
    tabBtns.forEach(function (b) {
      if (b.closest(".uzm-modal-footer")) return;
      b.classList.toggle("is-active", b.getAttribute("data-uzm-tab") === currentModalState.activeTab);
    });

    var tab = currentModalState.activeTab;

    if (tab === "specs") {
      var thickPills = (item.thicknessList || []).map(function (t) {
        var act = t === currentModalState.selectedThickness ? " is-selected" : "";
        return '<button type="button" class="uzm-variant-chip' + act + '" data-select-thickness="' + t + '">' + t + '</button>';
      }).join("");

      var shadePills = (item.shadeList || []).map(function (s) {
        var act = s === currentModalState.selectedShade ? " is-selected" : "";
        return '<button type="button" class="uzm-variant-chip' + act + '" data-select-shade="' + s + '">' + s + '</button>';
      }).join("");

      var layersHtml = (item.layers || []).map(function (ly) {
        return '<div style="display:flex;align-items:center;justify-content:space-between;background:' + ly.color + ';padding:0.45rem 0.75rem;border-radius:7px;margin-bottom:0.3rem;font-size:0.82rem;color:#0f172a;font-weight:600;">' +
          '<span>' + ly.name + ' (' + ly.pct + ')</span>' +
          '<span>Geçirgenlik: ' + ly.trans + ' · Direnç: ' + ly.mpa + '</span>' +
        '</div>';
      }).join("");

      bodyEl.innerHTML =
        '<div class="uzm-sagemax-selector-grid">' +
          '<div class="uzm-sagemax-selector-box">' +
            '<div class="uzm-sagemax-selector-label">1. Disk Kalınlığı / Ölçü Seçin: <strong>' + currentModalState.selectedThickness + '</strong></div>' +
            '<div class="uzm-variant-chip-row">' + thickPills + '</div>' +
          '</div>' +
          '<div class="uzm-sagemax-selector-box">' +
            '<div class="uzm-sagemax-selector-label">2. VITA Renk / Varyant Seçin: <strong>' + currentModalState.selectedShade + '</strong></div>' +
            '<div class="uzm-variant-chip-row">' + shadePills + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="margin:0.85rem 0;">' +
          '<div style="font-size:0.78rem;font-weight:700;color:#475569;text-transform:uppercase;margin-bottom:0.4rem;">Katman &amp; Mukavemet Gradyan Analizi</div>' +
          layersHtml +
        '</div>' +
        '<table class="uzm-modal-spec-table">' +
          '<tbody>' +
            '<tr><th>Optik / Yapısal Özellik</th><td>' + item.translucencyDetail + '</td></tr>' +
            '<tr><th>Mekanik Direnç / Standart</th><td>' + item.strengthDetail + '</td></tr>' +
            '<tr><th>Sinterleme / Sterilizasyon</th><td>' + item.sinterStandard + '</td></tr>' +
            '<tr><th>Klinik &amp; Lab Endikasyon</th><td>' + item.indication + '</td></tr>' +
            '<tr><th>Parti (LOT) İzlenebilirliği</th><td>' + item.lotTrace + '</td></tr>' +
          '</tbody>' +
        '</table>';
    } else if (tab === "sinter") {
      bodyEl.innerHTML =
        '<div style="background:#0f172a;color:#f8fafc;border-radius:12px;padding:1.1rem 1.25rem;margin-bottom:1rem;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem;flex-wrap:wrap;gap:0.5rem;">' +
            '<strong style="font-size:0.95rem;color:#38bdf8;">Fırın Sinterleme &amp; Termal Rejim Eğrisi (' + item.sinterPeak + ')</strong>' +
            '<span style="font-size:0.76rem;background:rgba(56,189,248,0.18);color:#bae6fd;padding:0.2rem 0.6rem;border-radius:6px;">Önerilen Tepe: ' + item.sinterPeak + '</span>' +
          '</div>' +
          '<svg viewBox="0 0 600 170" style="width:100%;height:150px;display:block;">' +
            '<line x1="40" y1="140" x2="570" y2="140" stroke="#334155" stroke-width="1"/>' +
            '<line x1="40" y1="30" x2="570" y2="30" stroke="#1e293b" stroke-dasharray="4 4" stroke-width="1"/>' +
            '<polyline fill="none" stroke="#38bdf8" stroke-width="3.5" points="40,140 160,85 250,32 410,32 540,135"/>' +
            '<circle cx="160" cy="85" r="5" fill="#38bdf8"/>' +
            '<circle cx="250" cy="32" r="6" fill="#0ea5e9"/>' +
            '<circle cx="410" cy="32" r="6" fill="#0ea5e9"/>' +
            '<circle cx="540" cy="135" r="5" fill="#22c55e"/>' +
            '<text x="45" y="158" fill="#94a3b8" font-size="11">25°C Başlangıç</text>' +
            '<text x="135" y="73" fill="#e2e8f0" font-size="11">900°C Ara</text>' +
            '<text x="275" y="22" fill="#38bdf8" font-weight="bold" font-size="12">Tepe: ' + item.sinterPeak + ' (120 dk)</text>' +
            '<text x="465" y="158" fill="#94a3b8" font-size="11">Kontrollü Soğutma</text>' +
          '</svg>' +
        '</div>' +
        '<table class="uzm-modal-spec-table">' +
          '<tbody>' +
            '<tr><th>Standart Laboratuvar Protokolü</th><td>' + item.sinterStandard + '</td></tr>' +
            '<tr><th>Hızlı / Chairside Protokolü</th><td>' + item.sinterFast + '</td></tr>' +
            '<tr><th>Kritik Fırın Notu</th><td>Kalibre edilmiş MoSi2 veya SiC ısıtma elemanlı fırınlarda, kontaminasyonsuz zirkonya sinterleme boncukları üzerinde uygulanmalıdır.</td></tr>' +
          '</tbody>' +
        '</table>';
    } else if (tab === "compare") {
      var rows = ["5d-ml", "4d-ml", "3d-pro", "3d-ml", "st-ml", "zircrown-ht"].map(function (k) {
        var p = UZM_PRODUCT_DATABASE[k];
        var isCur = k === item.id;
        var rowStyle = isCur ? 'background:#e0f2fe;font-weight:700;' : '';
        return '<tr style="' + rowStyle + '">' +
          '<td>' + p.id.toUpperCase() + (isCur ? ' (Seçili)' : '') + '</td>' +
          '<td>' + p.badge.replace('Lab · ', '') + '</td>' +
          '<td>' + p.translucency + '</td>' +
          '<td>' + p.strength + '</td>' +
          '<td>' + p.sinterPeak + '</td>' +
          '<td><button type="button" data-switch-product="' + k + '" style="padding:0.25rem 0.55rem;border-radius:6px;border:1px solid #0284c7;background:' + (isCur ? '#0284c7' : '#fff') + ';color:' + (isCur ? '#fff' : '#0284c7') + ';font-size:0.75rem;cursor:pointer;font-weight:600;">İncele</button></td>' +
        '</tr>';
      }).join("");

      bodyEl.innerHTML =
        '<div style="font-size:0.84rem;color:#475569;margin-bottom:0.65rem;">ZirCrown serileri arasında ışık geçirgenliği, bükülme direnci (MPa) ve sinterleme rejimi karşılaştırması. Herhangi bir seriye tıklayarak anında geçiş yapabilirsiniz:</div>' +
        '<div style="overflow-x:auto;">' +
          '<table class="uzm-modal-spec-table">' +
            '<thead><tr style="background:#0f172a;color:#fff;">' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Seri</th>' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Katman</th>' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Geçirgenlik</th>' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Dayanım (MPa)</th>' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Sinter Tepe</th>' +
              '<th style="background:#0f172a;color:#fff;width:auto;">Seç</th>' +
            '</tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
          '</table>' +
        '</div>';
    } else if (tab === "quote") {
      var msg = "Merhaba UZM Dental, " + item.title + " (" + item.sku + ") — Kalınlık: " + currentModalState.selectedThickness + ", VITA Renk: " + currentModalState.selectedShade + " için kurumsal B2B fiyat ve LOT/numune bilgisi rica ediyorum.";
      var waUrl = "https://wa.me/905356649722?text=" + encodeURIComponent(msg);
      var mailUrl = "mailto:uzmandisdental@gmail.com?subject=" + encodeURIComponent("B2B Teklif & Numune: " + item.title) + "&body=" + encodeURIComponent(msg);

      bodyEl.innerHTML =
        '<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:1rem 1.15rem;margin-bottom:1rem;">' +
          '<div style="font-size:0.78rem;font-weight:700;color:#0284c7;text-transform:uppercase;margin-bottom:0.35rem;">Seçili Yapılandırma Özeti (Sagemax B2B Sipariş Kartı)</div>' +
          '<div style="font-size:0.98rem;font-weight:700;color:#0f172a;margin-bottom:0.35rem;">' + item.title + '</div>' +
          '<div style="font-size:0.86rem;color:#334155;">Ürün Kodu: <strong>' + item.sku + '</strong> · Seçili Ölçü: <strong>' + currentModalState.selectedThickness + '</strong> · Seçili Renk: <strong>' + currentModalState.selectedShade + '</strong></div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.85rem;">' +
          '<a href="' + waUrl + '" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;border-radius:10px;background:#16a34a;color:#fff;font-weight:700;text-decoration:none;font-size:0.9rem;">WhatsApp B2B Hızlı Sipariş &amp; Numune →</a>' +
          '<a href="' + mailUrl + '" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;border-radius:10px;background:#0284c7;color:#fff;font-weight:700;text-decoration:none;font-size:0.9rem;">E-Posta ile Kurumsal Proforma İste →</a>' +
        '</div>';
    }
  }

  function openUzmUniversalModal(productKey, modeLabel, triggerEl) {
    var overlay = ensureUniversalModalDOM();
    var item = UZM_PRODUCT_DATABASE[productKey] || UZM_PRODUCT_DATABASE["5d-ml"];

    currentModalState.productKey = item.id;
    currentModalState.activeTab = detectInitialTab(modeLabel, triggerEl);
    currentModalState.selectedThickness = (item.thicknessList && (item.thicknessList[2] || item.thicknessList[0])) || "14 mm";
    currentModalState.selectedShade = (item.shadeList && (item.shadeList[1] || item.shadeList[0])) || "A2";

    var thumbEl = document.getElementById("uzmModalThumbImg");
    var badgeEl = document.getElementById("uzmModalBadgePill");
    var skuEl = document.getElementById("uzmModalSkuText");
    var kickerEl = document.getElementById("uzmModalKickerText");
    var titleEl = document.getElementById("uzmModalTitleText");
    var kpiTrans = document.getElementById("uzmModalKpiTrans");
    var kpiStrength = document.getElementById("uzmModalKpiStrength");
    var kpiSinter = document.getElementById("uzmModalKpiSinter");

    if (thumbEl && item.img) thumbEl.src = item.img;
    if (badgeEl) badgeEl.textContent = item.badge;
    if (skuEl) skuEl.textContent = item.sku;
    if (kickerEl) kickerEl.textContent = item.category;
    if (titleEl) titleEl.textContent = item.title;
    if (kpiTrans) kpiTrans.textContent = item.translucency;
    if (kpiStrength) kpiStrength.textContent = item.strength;
    if (kpiSinter) kpiSinter.textContent = item.sinterPeak;

    renderModalTabContent();

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeUzmUniversalModal() {
    var overlay = document.getElementById("uzmUniversalModal");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* Add Sagemax-inspired Lab/SKU header badge onto cards if not already present */
  function decorateCardsWithSagemaxStyle() {
    var cards = document.querySelectorAll(".uzm-block-card, .uzm-endo-card, .uzm-sql-card, .uzm-product-card");
    cards.forEach(function (card) {
      if (card.querySelector(".uzm-sagemax-card-meta")) return;
      var pKey = card.getAttribute("data-product-id") || card.getAttribute("data-product") || resolveProductKey(card);
      var item = UZM_PRODUCT_DATABASE[pKey];
      if (!item) return;
      card.setAttribute("data-product-id", item.id);
      var stage = card.querySelector(".uzm-card-oem-stage, .uzm-endo-visual, .uzm-sql-card-media");
      if (stage) {
        stage.style.cursor = "pointer";
        stage.setAttribute("data-uzm-modal", "Teknik Panel");
        stage.setAttribute("data-product-id", item.id);
        var meta = document.createElement("div");
        meta.className = "uzm-sagemax-card-meta";
        meta.innerHTML = '<span class="uzm-sagemax-pill">' + item.badge + '</span><span class="uzm-sagemax-sku">' + item.sku + '</span>';
        stage.parentNode.insertBefore(meta, stage);
      }
    });
  }

  function upgradeInlinePanelsAndButtons() {
    decorateCardsWithSagemaxStyle();
    var detailsList = document.querySelectorAll("details.uzm-acilir-panel, details.uzm-card-spec-details");
    detailsList.forEach(function (det) {
      det.removeAttribute("open");
      var sum = det.querySelector("summary");
      if (sum) {
        sum.classList.add("uzm-modal-trigger");
        sum.setAttribute("data-uzm-modal", "Teknik Panel");
      }
    });

    var candidates = document.querySelectorAll(
      ".uzm-product-card button, .uzm-product-card a, .uzm-block-card button, .uzm-block-card a, .uzm-endo-card button, .uzm-endo-card a, .uzm-sql-card button, .uzm-sql-card a, .uzm-card button, .uzm-card a, .uzm-header-actions button, .uzm-header-actions a, .top-actions button, .top-actions a, [data-uzm-modal], [data-open-drawer]"
    );
    candidates.forEach(function (btn) {
      if (btn.closest("details.lang-dropdown, .uzm-lang-switcher")) return;
      var href = btn.getAttribute("href") || "";
      if (href.indexOf("studyo-galeri.html") !== -1) return; // Allow direct navigation to studio gallery if user clicks studio gallery link
      var txt = (btn.textContent || "").trim();
      var lower = txt.toLowerCase();
      if (
        btn.hasAttribute("data-open-drawer") ||
        lower.indexOf("teknik") !== -1 ||
        lower.indexOf("föy") !== -1 ||
        lower.indexOf("foy") !== -1 ||
        lower.indexOf("sinter") !== -1 ||
        lower.indexOf("karşılaştır") !== -1 ||
        lower.indexOf("karsilastir") !== -1 ||
        lower.indexOf("numune") !== -1 ||
        lower.indexOf("teklif") !== -1 ||
        lower.indexOf("lot") !== -1 ||
        lower.indexOf("spesifikasyon") !== -1 ||
        lower.indexOf("freze") !== -1 ||
        lower.indexOf("detay") !== -1
      ) {
        btn.classList.add("uzm-modal-trigger");
        if (!btn.getAttribute("data-uzm-modal")) {
          btn.setAttribute("data-uzm-modal", txt || "Teknik Panel");
        }
        var pKey = resolveProductKey(btn);
        if (!btn.getAttribute("data-product-id")) {
          btn.setAttribute("data-product-id", pKey);
        }
      }
    });

    var pathName = (window.location.pathname || "").toLowerCase();
    var studioGrid = document.getElementById("uzmStudio40Grid") || document.querySelector(".uzm-studio40-grid");
    if (studioGrid && pathName.indexOf("studyo-galeri") !== -1) {
      studioGrid.classList.remove("is-curated-compact", "uzm-curated-collapsed");
      var cards = studioGrid.querySelectorAll(".uzm-studio40-card");
      cards.forEach(function (c) {
        c.classList.remove("is-tab-hidden");
        c.hidden = false;
      });
    }
  }

  var VITA_CODES = {
    IMG_7225: true, IMG_7227: true, IMG_7233: true,
    IMG_7234: true, IMG_7249: true, IMG_7250: true, IMG_7253: true
  };

  function filterStudio40Cards(filterVal) {
    var norm = (filterVal || "all").toLowerCase().trim();
    var grid = document.getElementById("uzmStudio40Grid") || document.querySelector(".uzm-studio40-grid");
    if (!grid) return;
    grid.classList.remove("is-curated-compact", "uzm-curated-collapsed");

    var btns = document.querySelectorAll("[data-studio40-filter], .uzm-studio40-tab");
    btns.forEach(function (b) {
      var bVal = (b.getAttribute("data-studio40-filter") || b.getAttribute("data-filter") || "").toLowerCase().trim();
      var active = bVal === norm;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });

    var cards = grid.querySelectorAll(".uzm-studio40-card");
    cards.forEach(function (card) {
      var cat = (card.getAttribute("data-cat") || card.getAttribute("data-category") || "").toLowerCase().trim();
      var code = (card.getAttribute("data-code") || "").trim();
      var match = false;
      if (norm === "all") {
        match = true;
      } else if (norm === "4d-5d") {
        match = cat === "4d-ml" || cat === "5d-ml" || cat === "4d-5d";
      } else if (norm === "vita-tab") {
        match = Boolean(VITA_CODES[code]) || card.getAttribute("data-vita") === "1" || cat === "vita-tab";
      } else {
        match = cat === norm;
      }
      card.classList.toggle("is-tab-hidden", !match);
      card.hidden = !match;
    });
  }

  document.addEventListener("click", function (ev) {
    var target = ev.target;
    if (!target || typeof target.closest !== "function") return;

    if (
      target.id === "uzmUniversalModal" ||
      target.closest("#uzmModalCloseBtn") ||
      target.closest("#uzmModalBottomCloseBtn")
    ) {
      ev.preventDefault();
      closeUzmUniversalModal();
      return;
    }

    var tabBtn = target.closest("#uzmUniversalModal [data-uzm-tab]");
    if (tabBtn) {
      ev.preventDefault();
      currentModalState.activeTab = tabBtn.getAttribute("data-uzm-tab") || "specs";
      window.__uzmActiveTab = currentModalState.activeTab;
      renderModalTabContent();
      if (window.__uzmEnhanceProg) window.__uzmEnhanceProg(currentModalState.productKey, currentModalState.activeTab);
      return;
    }

    var thickChip = target.closest("#uzmUniversalModal [data-select-thickness]");
    if (thickChip) {
      ev.preventDefault();
      currentModalState.selectedThickness = thickChip.getAttribute("data-select-thickness");
      renderModalTabContent();
      return;
    }

    var shadeChip = target.closest("#uzmUniversalModal [data-select-shade]");
    if (shadeChip) {
      ev.preventDefault();
      currentModalState.selectedShade = shadeChip.getAttribute("data-select-shade");
      renderModalTabContent();
      return;
    }

    var switchProdBtn = target.closest("#uzmUniversalModal [data-switch-product]");
    if (switchProdBtn) {
      ev.preventDefault();
      var newKey = switchProdBtn.getAttribute("data-switch-product");
      window.openUzmUniversalModal(newKey, "Teknik Panel", null);
      return;
    }

    var modalTrigger = target.closest(
      ".uzm-modal-trigger, [data-uzm-modal], [data-open-drawer], details.uzm-acilir-panel > summary, details.uzm-card-spec-details > summary"
    );
    if (modalTrigger) {
      ev.preventDefault();
      ev.stopPropagation();
      var parentDetails = modalTrigger.closest("details");
      if (parentDetails) parentDetails.removeAttribute("open");
      var prodKey = resolveProductKey(modalTrigger);
      var modeLabel = modalTrigger.getAttribute("data-uzm-modal") || (modalTrigger.textContent || "").trim();
      window.openUzmUniversalModal(prodKey, modeLabel, modalTrigger);
      return;
    }

    var studioBtn = target.closest("[data-studio40-filter], .uzm-studio40-tab");
    if (studioBtn) {
      ev.preventDefault();
      var fVal = studioBtn.getAttribute("data-studio40-filter") || studioBtn.getAttribute("data-filter") || "all";
      filterStudio40Cards(fVal);
      return;
    }
  }, true);

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" || ev.key === "Esc") {
      closeUzmUniversalModal();
    }
  });

  function initUzmModalAndCatalog() {
    ensureUniversalModalDOM();
    upgradeInlinePanelsAndButtons();
    setTimeout(upgradeInlinePanelsAndButtons, 600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUzmModalAndCatalog);
  } else {
    initUzmModalAndCatalog();
  }

  window.openUzmUniversalModal = openUzmUniversalModal;
  window.closeUzmUniversalModal = closeUzmUniversalModal;
  window.UZM_PRODUCT_DATABASE = UZM_PRODUCT_DATABASE;
})();

/* === GOKHAN BEY 17 DOCX TAM ENVANTER GENISLETMESI (23 URUN) & MOBIL MENU === */
(function() {
  if (!window.UZM_PRODUCT_DATABASE) return;
  var db = window.UZM_PRODUCT_DATABASE;

  var extraProducts = {
    "gutta-02": {
      id: "gutta-02",
      sku: "REF: UZM-GP-02",
      badge: "Klinik · ISO .02 Taper",
      category: "KLİNİK ENDODONTİ · GUTTA PERCHA SERİSİ",
      title: "UZM Dental ISO .02 Taper Gutta Percha Points (100'lü Paket)",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Yüksek Radyoopak",
      translucencyDetail: "ISO standartlarına uygun hassas .02 taper geometrisi · Yüksek radyoopasite ve homojen yapı",
      strength: "±0.02 mm Tolerans",
      strengthDetail: "Manuel kanal preparasyonları ve soğuk lateral kondensasyon teknikleri için ideal esneklik",
      sinterPeak: "100 Adet / Kutu",
      sinterStandard: "Manuel kanal preparasyonları, lateral kondensasyon ve yardımcı gutta-perka uygulamaları",
      sinterFast: "ISO renk kodlamalı · Kolay kesilebilir ve kanal duvarına etkin adaptasyon sağlayan yapı",
      thicknessList: [".02 Taper (Standart ISO)"],
      shadeList: ["#20", "#25", "#30", "#15-40 (Assorted)", "#45-80 (Assorted)"],
      indication: "Manuel kanal preparasyonları, lateral kondensasyon tekniği ve soğuk obturasyon işlemleri",
      lotTrace: "ÜTS kayıtlı · QR kod ile teknik bilgiye erişim · 100 adetlik hijyenik paket",
      layers: [{ name: "ISO .02 Homojen Gutta Percha", pct: "100%", trans: "Yüksek Radyoopak", mpa: "ISO Standart", color: "#fb7185" }]
    },
    "gutta-03": {
      id: "gutta-03",
      sku: "REF: UZM-GP-03-PRO",
      badge: "Profesyonel · ISO .03 Taper",
      category: "KLİNİK ENDODONTİ · PROFESYONELLER İÇİN ÖZEL SERİ",
      title: "UZM Dental ISO .03 Taper Gutta Percha Points (Profesyoneller İçin)",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Özel .03 Ara Taper",
      translucencyDetail: "Eğimli ve dar kanallarda .04 taper'dan .02 taper'a düşmeden tug-back hissiyatını koruyan özel seri",
      strength: "Tug-Back Garantili",
      strengthDetail: "Geniş kanallarda koronal şişmeyi engelleyen ve apikal sıkışma (tug-back) hissini koruyan hassas yapı",
      sinterPeak: "100 Adet / Kutu",
      sinterStandard: ".03 taper kanal preparasyonları, dar/eğimli kanallar ve kontrollü soğuk lateral kondensasyon",
      sinterFast: "Bulması zor ara taper arayan profesyoneller için özel üretim · ÜTS kayıtlı",
      thicknessList: [".03 Taper (Profesyonel Ara Taper)"],
      shadeList: ["#20", "#25", "#30", "#15-40 (Assorted)"],
      indication: "Eğimli ve dar kanallarda yeterli genişletme imkanı olmadığında veya koronal şişmeyi önlemek için",
      lotTrace: "ÜTS kapsamında · QR kod ile teknik doğrulama · 100 adetlik paket",
      layers: [{ name: "Profesyonel .03 Taper Gutta Percha", pct: "100%", trans: "Yüksek Radyoopak", mpa: "Tug-Back Kontrol", color: "#f43f5e" }]
    },
    "gutta-04": {
      id: "gutta-04",
      sku: "REF: UZM-GP-04",
      badge: "Klinik · ISO .04 Taper",
      category: "KLİNİK ENDODONTİ · GUTTA PERCHA SERİSİ",
      title: "UZM Dental ISO .04 Taper Gutta Percha Points",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Yüksek Radyoopak",
      translucencyDetail: "Modern manuel ve rotary preparasyon protokolleriyle tam uyumlu .04 taper geometrisi",
      strength: "Boyutsal Kararlı",
      strengthDetail: "Yüksek boyutsal doğruluk, homojen materyal yapısı ve güvenilir kanal adaptasyonu",
      sinterPeak: "100 Adet / Kutu",
      sinterStandard: "Rotary sistemlerle hazırlanmış kanallar, tek kon (Single Cone) ve lateral kondensasyon",
      sinterFast: "ISO renk kodlamalı · QR kodlu teknik takip ve ÜTS güvencesi",
      thicknessList: [".04 Taper (Rotary & Manuel Uyumlu)"],
      shadeList: ["#20", "#25", "#30", "#35", "#40", "#15-40 (Assorted)", "#45-80 (Assorted)"],
      indication: "Günlük klinik uygulamalarda ve ileri endodontik vakalarda standart .04 obturasyon",
      lotTrace: "ÜTS kayıtlı · Boyutsal kalite kontrollü 100'lü paket",
      layers: [{ name: "ISO .04 Homojen Gutta Percha", pct: "100%", trans: "Yüksek Radyoopak", mpa: "Rotary Uyumlu", color: "#fb7185" }]
    },
    "gutta-f": {
      id: "gutta-f",
      sku: "REF: UZM-GP-FSER",
      badge: "Rotary · F Serisi",
      category: "KLİNİK ENDODONTİ · VARIABLE TAPER GUTTA PERCHA",
      title: "UZM Dental F Serisi Değişken Taper (Variable Taper) Gutta Percha",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Variable Taper",
      translucencyDetail: "Değişken taper (Variable Taper) geometriye sahip rotary kanal preparasyon sistemleriyle tam uyumlu",
      strength: "Single-Cone Uyum",
      strengthDetail: "Tek kon (Single Cone) ve sürekli dalga (Continuous Wave) sıcak obturasyon tekniklerine optimize",
      sinterPeak: "F1 – F5 Seçenekli",
      sinterStandard: "Rotary kanal preparasyonları sonrasında apikal ve koronal tam adaptasyon",
      sinterFast: "Renk kodlu sistem · Kolay kesilebilir ve yüksek radyoopasiteli yapı",
      thicknessList: ["Variable Taper (F Serisi)"],
      shadeList: ["F1", "F2", "F3", "F4", "F5", "F1-F2-F3 Assorted", "F1-F2-F3-F4-F5 Assorted"],
      indication: "Rotary kanal preparasyonları, Tek Kon (Single Cone) ve Continuous Wave obturasyon",
      lotTrace: "ÜTS kayıtlı · Hassas boyutsal üretim",
      layers: [{ name: "Variable Taper F Serisi Gutta", pct: "100%", trans: "Radyoopak", mpa: "F1–F5 Tam Uyum", color: "#e11d48" }]
    },
    "gutta-p": {
      id: "gutta-p",
      sku: "REF: UZM-GP-PSER",
      badge: "Resiprokal · P Serisi",
      category: "KLİNİK ENDODONTİ · RESİPROKAL GUTTA PERCHA",
      title: "UZM Dental P Serisi Resiprokal Uyumlu Gutta Percha Point",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "Resiprokal Uyum",
      translucencyDetail: "Resiprokal (reciprocating) kanal preparasyon sistemlerinin değişken taper geometrisine birebir uyumlu",
      strength: "Öngörülebilir Adaptasyon",
      strengthDetail: "Dengeli esneklik, kontrollü yerleştirme ve yüksek radyoopasite",
      sinterPeak: "Primary Paket",
      sinterStandard: "Resiprokal eğe sistemleriyle şekillendirilmiş kanallarda tek kon ve sıcak obturasyon",
      sinterFast: "Renk kodlu, kolay kesilebilir klinik kalite kontrol onaylı yapı",
      thicknessList: ["Variable Taper (Resiprokal)"],
      shadeList: ["Primary"],
      indication: "Resiprokal kanal preparasyonları sonrası güvenli ve hızlı obturasyon",
      lotTrace: "ÜTS kayıtlı · Parti bazlı boyutsal doğruluk",
      layers: [{ name: "Resiprokal P Serisi Gutta", pct: "100%", trans: "Radyoopak", mpa: "Primary Uyum", color: "#be123c" }]
    },
    "gutta-x": {
      id: "gutta-x",
      sku: "REF: UZM-GP-XSER",
      badge: "ProTaper Next · X Serisi",
      category: "KLİNİK ENDODONTİ · X SERİSİ GUTTA PERCHA",
      title: "UZM Dental X Serisi Rotary Uyumlu Gutta Percha Point (X1–X5)",
      img: "/uploads/uzm_gp_04_box.png",
      translucency: "X Serisi Geometri",
      translucencyDetail: "ProTaper Next ve benzeri X Serisi rotary sistemlerle genişletilen kanalları doldurmak için özel tasarım",
      strength: "Değişken Taper",
      strengthDetail: "Hassas boyutsal üretim ve homojen gutta-perka yapısıyla tam apikal tıkaç",
      sinterPeak: "X1 – X5 Seçenekli",
      sinterStandard: "X Serisi rotary kanal preparasyonları ile birebir eşleşen master cone uyumu",
      sinterFast: "Yüksek radyoopasite ve kolay kesilebilir yapı",
      thicknessList: ["Variable Taper (X Serisi)"],
      shadeList: ["X1", "X2", "X3", "X4", "X5", "X1-X2-X3 Assorted", "X1-X2-X3-X4-X5 Assorted"],
      indication: "ProTaper Next ve X Serisi rotary preparasyon sistemleriyle hazırlanan kök kanalları",
      lotTrace: "ÜTS kayıtlı · Klinik kalite kontrol onaylı",
      layers: [{ name: "X Serisi Variable Taper Gutta", pct: "100%", trans: "Radyoopak", mpa: "X1–X5 Uyum", color: "#9f1239" }]
    },
    "paper-02": {
      id: "paper-02",
      sku: "REF: UZM-PP-02",
      badge: "Klinik · ISO .02 Taper",
      category: "KLİNİK ENDODONTİ · ABSORBENT PAPER POINTS",
      title: "UZM Dental ISO .02 Taper Absorbent Paper Points",
      img: "/uploads/uzm_pp_04_box.png",
      translucency: "Yüksek Emicilik",
      translucencyDetail: "Standart .02 taper preparasyon protokollerinde kanal içi nem ve irrigasyon uzaklaştırma",
      strength: "Lif Bırakmayan Yapı",
      strengthDetail: "Homojen selüloz yapısı sayesinde ıslakken dağılmaz ve lif bırakmaz",
      sinterPeak: "Steril Paket",
      sinterStandard: "Manuel kanal preparasyonları ve günlük endodontik kurutma uygulamaları",
      sinterFast: "ISO renk kodlamalı ve kolay kanal yerleşimli tasarım",
      thicknessList: [".02 Taper (ISO Standart)"],
      shadeList: ["#15-40 Assorted", "#45-80 Assorted"],
      indication: "Kök kanalının kurutulması ve irrigasyon solüsyonlarının uzaklaştırılması",
      lotTrace: "ÜTS kayıtlı · Steril ve nemden korumalı ambalaj",
      layers: [{ name: "ISO .02 Saf Selüloz Kon", pct: "100%", trans: "Yüksek Emici", mpa: "Lif Bırakmaz", color: "#94a3b8" }]
    },
    "paper-04": {
      id: "paper-04",
      sku: "REF: UZM-PP-04",
      badge: "Klinik · ISO .04 Taper",
      category: "KLİNİK ENDODONTİ · ABSORBENT PAPER POINTS",
      title: "UZM Dental ISO .04 Taper Absorbent Paper Points",
      img: "/uploads/uzm_pp_04_box.png",
      translucency: "Modern .04 Taper",
      translucencyDetail: "Modern manuel ve rotary kanal preparasyonlarında en yaygın tercih edilen .04 taper kurutma konları",
      strength: "Hızlı Kurutma",
      strengthDetail: "Yüksek emicilik kapasitesi ve lif bırakmayan kaliteli selüloz yapısı",
      sinterPeak: "Steril Paket",
      sinterStandard: ".04 taper rotary ve manuel kanal preparasyonları sonrası obturasyon hazırlığı",
      sinterFast: "ISO renk kodlamalı · Hassas boyutlandırma",
      thicknessList: [".04 Taper"],
      shadeList: ["#15-40 Assorted", "#45-80 Assorted"],
      indication: "Rotary ve manuel .04 taper kanal preparasyonları sonrası hızlı kurutma",
      lotTrace: "ÜTS kayıtlı · Klinik kalite kontrol onaylı",
      layers: [{ name: "ISO .04 Saf Selüloz Kon", pct: "100%", trans: "Yüksek Emici", mpa: "Lif Bırakmaz", color: "#64748b" }]
    },
    "paper-06": {
      id: "paper-06",
      sku: "REF: UZM-PP-06",
      badge: "Klinik · ISO .06 Taper",
      category: "KLİNİK ENDODONTİ · ABSORBENT PAPER POINTS",
      title: "UZM Dental ISO .06 Taper Absorbent Paper Points",
      img: "/uploads/uzm_pp_04_box.png",
      translucency: "Geniş Kanal .06",
      translucencyDetail: "Genişletilmiş .06 taper rotary kanal preparasyonlarında tam kurutma sağlayan geometri",
      strength: "Homojen Selüloz",
      strengthDetail: "Lif bırakmayan rijit uç yapısı ile obturasyon öncesi ideal kuruluk",
      sinterPeak: "Steril Paket",
      sinterStandard: ".06 taper rotary kanal preparasyonları sonrası irrigasyon uzaklaştırma",
      sinterFast: "ISO renk kodlu hızlı seçim",
      thicknessList: [".06 Taper"],
      shadeList: ["#25", "#15-40 Assorted"],
      indication: "Geniş taper (.06) ile hazırlanmış kök kanallarında etkin kurutma",
      lotTrace: "ÜTS kayıtlı · Steril ambalaj",
      layers: [{ name: "ISO .06 Saf Selüloz Kon", pct: "100%", trans: "Yüksek Emici", mpa: "Geniş Taper", color: "#475569" }]
    },
    "paper-fpx": {
      id: "paper-fpx",
      sku: "REF: UZM-PP-FPX",
      badge: "Rotary & Reciproc · F / P / X",
      category: "KLİNİK ENDODONTİ · F, P VE X SERİSİ PAPER POINTS",
      title: "UZM Dental F, P (Resiprokal) ve X Serisi Variable Taper Paper Points",
      img: "/uploads/uzm_pp_04_box.png",
      translucency: "Değişken Taper Uyum",
      translucencyDetail: "F Serisi (Rotary), P Serisi (Resiprokal) ve X Serisi (ProTaper Next) kanal geometrileriyle birebir uyumlu",
      strength: "Lif Bırakmayan Selüloz",
      strengthDetail: "Tek kon (Single Cone) ve sıcak vertikal kondensasyon öncesi tam kanal kurutma",
      sinterPeak: "F / P / X Paketler",
      sinterStandard: "Rotary ve Resiprokal eğe sistemlerinin değişken konikliğine tam oturan kurutma konları",
      sinterFast: "Renk kodlu sistem · Yüksek emicilik kapasitesi",
      thicknessList: ["F Serisi (Rotary)", "P Serisi (Resiprokal)", "X Serisi (Rotary)"],
      shadeList: ["F1, F2, F3, F1-F3, F1-F5", "P Serisi: Medium", "X1, X2, X3, X1-X3, X1-X5"],
      indication: "F, P ve X serisi döner/resiprokal sistemlerle hazırlanan kanalların kurutulması",
      lotTrace: "ÜTS kayıtlı · Orijinal Gökhan Bey ürün spesifikasyonu",
      layers: [{ name: "Variable Taper F/P/X Selüloz", pct: "100%", trans: "Tam Uyum", mpa: "Lif Bırakmaz", color: "#334155" }]
    }
  };

  for (var k in extraProducts) {
    db[k] = extraProducts[k];
  }

  // Also enrich PMMA entries with Gökhan Bey's exact 98mm / 95mm / AG systems and BL3 shade!
  if (db["pmma-mono"]) {
    db["pmma-mono"].thicknessList = ["98 × 16 mm", "98 × 18 mm", "98 × 20 mm", "98 × 30 mm", "95 × 18 mm", "AG (Amann Girrbach) × 18 mm"];
    db["pmma-mono"].shadeList = ["A1", "A2", "BL3 (Bleach)", "Clear (Şeffaf Aparey)"];
    db["pmma-mono"].lotTrace = "ÜTS Kayıtlı · 98mm / 95mm / Amann Girrbach (AG) Tam Uyum · QR Kodlu";
  }
  if (db["pmma-multi"]) {
    db["pmma-multi"].thicknessList = ["98 × 18 mm", "95 × 18 mm", "AG (Amann Girrbach) × 18 mm"];
    db["pmma-multi"].shadeList = ["A2", "BL3 (Bleach)"];
    db["pmma-multi"].lotTrace = "ÜTS Kayıtlı · Premium Klinikler & Smile Design İçin 98mm / 95mm / AG Uyumlu";
  }
  if (db["pmma-xray"]) {
    db["pmma-xray"].thicknessList = ["98 × 18 mm"];
    db["pmma-xray"].shadeList = ["A1 (Radyoopak)"];
    db["pmma-xray"].lotTrace = "ÜTS Kayıtlı · CBCT / Radyografik Takip İçin Özel Radyoopak PMMA";
  }

  // Render additional Gökhan Bey Endodonti cards into .uzm-endo-grid if only 3-4 cards exist!
  function injectFullGokhanEndoCards() {
    var pth = (window.location.pathname || "").toLowerCase();
    var isIndex = (pth === "/" || pth.endsWith("/index.html") || pth === "");
    var endoGrids = isIndex ? [] : document.querySelectorAll(".uzm-endo-grid");
    endoGrids.forEach(function(grid) {
      if (grid.getAttribute("data-gokhan-expanded") === "1") return;
      grid.setAttribute("data-gokhan-expanded", "1");
      var extraKeys = ["gutta-02", "gutta-03", "gutta-04", "gutta-f", "gutta-p", "gutta-x", "paper-02", "paper-04", "paper-06", "paper-fpx"];
      extraKeys.forEach(function(k) {
        var p = db[k];
        if (!p) return;
        var art = document.createElement("article");
        art.className = "uzm-endo-card";
        art.setAttribute("data-product-id", p.id);
        art.innerHTML =
          '<div class="uzm-sagemax-card-meta"><span class="uzm-sagemax-pill">' + p.badge + '</span><span class="uzm-sagemax-sku">' + p.sku + '</span></div>' +
          '<div class="uzm-endo-visual" style="cursor:pointer;" data-uzm-modal="Teknik Föy" data-product-id="' + p.id + '">' +
            '<img class="uzm-endo-img" src="' + p.img + '" alt="' + p.title + '" loading="lazy">' +
          '</div>' +
          '<div class="uzm-endo-body">' +
            '<h3>' + p.title + '</h3>' +
            '<p class="uzm-endo-desc">' + p.translucencyDetail + '</p>' +
            '<div class="uzm-card-QuickMetrics" style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;background:#f8fafc;padding:0.45rem 0.6rem;border-radius:8px;margin:0.35rem 0;">' +
              '<div><small style="font-size:0.65rem;color:#64748b;display:block;">SEÇENEKLER</small><strong class="uzm-metric-val" style="font-size:0.8rem;">' + p.shadeList.slice(0, 3).join(", ") + '</strong></div>' +
              '<div><small style="font-size:0.65rem;color:#64748b;display:block;">STANDART</small><strong class="uzm-metric-val" style="font-size:0.8rem;">' + p.sinterPeak + '</strong></div>' +
            '</div>' +
            '<div class="uzm-card-actions" style="display:flex;gap:0.45rem;margin-top:0.4rem;">' +
              '<button type="button" class="uzm-btn-primary uzm-modal-trigger" data-uzm-modal="Teknik Föy" data-product-id="' + p.id + '" style="flex:1;padding:0.5rem;border-radius:8px;border:none;background:#0095c8;color:#fff;font-weight:600;cursor:pointer;">Teknik Föy &amp; Ölçüler</button>' +
              '<button type="button" class="uzm-btn-outline uzm-modal-trigger" data-uzm-modal="Numune & Teklif" data-product-id="' + p.id + '" style="flex:1;padding:0.5rem;border-radius:8px;border:1px solid #0095c8;background:#fff;color:#0095c8;font-weight:600;cursor:pointer;">Teklif Al</button>' +
            '</div>' +
          '</div>';
        grid.appendChild(art);
      });
    });
  }

  // Mobile hamburger menu button fix (Grok report item: menü butonunu çalıştır)
  function bindMobileMenuToggle() {
    var menuBtns = document.querySelectorAll("#uzmMobileMenuBtn, .uzm-mobile-toggle, .uzm-burger, .uzm-menu-toggle, button[aria-label*='Menü'], button[aria-label*='Menu']");
    var nav = document.querySelector("nav.uzm-nav, .uzm-header-nav");
    if (!nav) return;
    menuBtns.forEach(function(btn) {
      if (btn.getAttribute("data-menu-bound") === "1") return;
      btn.setAttribute("data-menu-bound", "1");
      btn.addEventListener("click", function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var isOpen = nav.classList.toggle("is-mobile-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        nav.style.display = isOpen ? "flex" : "";
        if (isOpen && window.innerWidth <= 768) {
          nav.style.cssText = "display:flex !important;flex-direction:column !important;position:absolute !important;top:100% !important;left:0 !important;right:0 !important;background:#ffffff !important;padding:1rem 1.25rem !important;box-shadow:0 16px 32px rgba(15,23,42,0.15) !important;border-bottom:2px solid #0095c8 !important;z-index:9990 !important;gap:0.65rem !important;";
        } else {
          nav.style.cssText = "";
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      injectFullGokhanEndoCards();
      bindMobileMenuToggle();
    });
  } else {
    injectFullGokhanEndoCards();
    bindMobileMenuToggle();
  }
})();

/* === FAZ-3: PDF VERILERI ESLESTIRILMIS "ACILDIKCA ACILAN" (PROGRESSIVE DISCLOSURE) PENCERE & ANASAYFA TEKRAR TEMIZLIGI === */
(function() {
  if (!window.UZM_PRODUCT_DATABASE) return;
  var db = window.UZM_PRODUCT_DATABASE;

  // 1. Exact Product-to-PDF Technical Data & Brochure Mapping (from existing PDFs + tam_katalog_1030.json + 17 DOCX)
  var pdfSpecMap = {
    "5d-ml": {
      pdfBrochure: "/assets/uzm-zircrown-brosur-2026.pdf",
      pdfSpec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf",
      pdfSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve.pdf",
      pdfFastSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf",
      specs: [
        { k: "Kimyasal Bileşim", v: "ZrO₂ + HfO₂ + Y₂O₃ ≥ %99.0" },
        { k: "Yttria (Y₂O₃) Gradyanı", v: "%4.0 mol (Servikal) → %5.5 mol (İnsizal)" },
        { k: "Sinterlenmiş Yoğunluk", v: "6.07 ± 0.02 g/cm³" },
        { k: "Bükülme Dayanımı (ISO 6872)", v: "750 MPa (İnsizal) – 1200 MPa (Servikal)" },
        { k: "Işık Geçirgenliği", v: "%59 (İnsizal) → %43 (Servikal) · 10 Katman" },
        { k: "Termal Genleşme (CTE)", v: "10.5 ± 0.5 × 10⁻⁶ K⁻¹ (25–500°C)" },
        { k: "Kırılma Tokluğu / Sertlik", v: "6.5 MPa·m¹/² · 1250 HV10" },
        { k: "Min. Duvar Kalınlığı", v: "Anterior: 0.4 mm · Posterior: 0.6 mm · Konnektör: ≥9 mm²" }
      ],
      sinterSteps: [
        { step: "1. Isıtma (Oda → 900°C)", rate: "8 °C/dk", hold: "Bekleme Yok", note: "Nem ve bağlayıcı uçurma evresi" },
        { step: "2. Ara Isıtma (900°C → 1500°C)", rate: "4 °C/dk", hold: "Bekleme Yok", note: "Kristal faz geçişi ve yoğunlaşma" },
        { step: "3. Tepe Sinterleme (1500°C)", rate: "Sabit Tavan", hold: "120 Dakika", note: "%59–%43 tam optik translüsensi dengesi" },
        { step: "4. Kontrollü Soğutma (1500°C → 200°C)", rate: "8 °C/dk", hold: "Fırın İçi", note: "Termal şok önleme · <200°C'de fırın açılır" }
      ],
      clinicalGuide: "Tam ark implant üstü hibrit protezler (All-on-4 / All-on-6), uzun gövdeli posterior köprüler, anterior monolitik estetik kronlar ve gülüş tasarımı (Smile Design) vakaları. 10 katmanlı kesintisiz geçiş sayesinde ek makyaj gerektirmeden doğal mine-dentin derinliği sunar."
    },
    "4d-pro": {
      pdfBrochure: "/assets/uzm-zircrown-brosur-2026.pdf",
      pdfSpec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf",
      pdfSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve.pdf",
      pdfFastSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf",
      specs: [
        { k: "Kimyasal Bileşim", v: "ZrO₂ + HfO₂ + Y₂O₃ ≥ %99.0" },
        { k: "Katman Mimarisi", v: "8 Katmanlı (4 Ana + 4 Geçiş Katmanı)" },
        { k: "Sinterlenmiş Yoğunluk", v: "6.06 ± 0.02 g/cm³" },
        { k: "Bükülme Dayanımı", v: "750 MPa (İnsizal) – 1200 MPa (Servikal)" },
        { k: "Işık Geçirgenliği", v: "%57 (İnsizal) → %43 (Servikal)" },
        { k: "Termal Genleşme (CTE)", v: "10.5 ± 0.5 × 10⁻⁶ K⁻¹" },
        { k: "Biyouyumluluk Standardı", v: "ISO 6872:2024 Tip II Sınıf 5 · CE / ÜTS" },
        { k: "Min. Duvar Kalınlığı", v: "Anterior: 0.4 mm · Posterior: 0.6 mm · Konnektör: ≥9 mm²" }
      ],
      sinterSteps: [
        { step: "1. Isıtma (Oda → 900°C)", rate: "10 °C/dk", hold: "Bekleme Yok", note: "Ön ısıtma" },
        { step: "2. Ara Isıtma (900°C → 1500°C)", rate: "5 °C/dk", hold: "Bekleme Yok", note: "Homojen büzülme kontrolü" },
        { step: "3. Tepe Sinterleme (1500°C)", rate: "Sabit Tavan", hold: "120 Dakika", note: "Hızlı Sinter: 1520°C / 30 dk (Tek üye-3 üye)" },
        { step: "4. Soğutma (1500°C → 200°C)", rate: "10 °C/dk", hold: "Fırın İçi", note: "Doğal soğutma" }
      ],
      clinicalGuide: "Anterior estetik kronlar, 3–4 üyeli monolitik köprüler, inley/onley ve implant üstü tek üyeli restorasyonlar. 8 katmanlı yapısı çizgisel geçiş izi bırakmadan doğal VITA kroma doygunluğu sağlar."
    },
    "3d-pro": {
      pdfBrochure: "/assets/uzm-zircrown-brosur-2026.pdf",
      pdfSpec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf",
      pdfSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve.pdf",
      pdfFastSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf",
      specs: [
        { k: "PDF Kaynak Dosyası", v: "3d-pro-spec.pdf & 3d-pro-sinter-curve.pdf" },
        { k: "Katman Mimarisi", v: "6 Katmanlı Doğal Geçişli Multilayer" },
        { k: "Bükülme Dayanımı", v: "800 MPa (İnsizal) – 1100 MPa (Servikal)" },
        { k: "Işık Geçirgenliği", v: "%57 (İnsizal) → %43 (Servikal)" },
        { k: "Sinterlenmiş Yoğunluk", v: "≥ 6.05 g/cm³ · TOSOH Nano-Toz" },
        { k: "Termal Genleşme (CTE)", v: "10.5 ± 0.5 × 10⁻⁶ K⁻¹ (25–500°C)" },
        { k: "Kimyasal Çözünürlük", v: "< 100 µg/cm² (ISO 6872 Tam Uyum)" },
        { k: "Min. Duvar Kalınlığı", v: "Anterior: 0.5 mm · Posterior: 0.6 mm · Konnektör: ≥9 mm²" }
      ],
      sinterSteps: [
        { step: "1. Isıtma (Oda → 900°C)", rate: "10 °C/dk", hold: "Bekleme Yok", note: "3d-pro-sinter-curve.pdf standart eğri" },
        { step: "2. Ara Isıtma (900°C → 1480°C)", rate: "6 °C/dk", hold: "Bekleme Yok", note: "6 katmanlı renk kararlılığı" },
        { step: "3. Tepe Sinterleme (1480°C)", rate: "Sabit Tavan", hold: "120 Dakika", note: "Hızlı Sinter (hizli-sinter-curve.pdf): 90 dk toplam" },
        { step: "4. Soğutma (1480°C → 200°C)", rate: "10 °C/dk", hold: "Fırın İçi", note: "Çatlama ve distorsiyon önleyici soğutma" }
      ],
      clinicalGuide: "Günlük CAD/CAM laboratuvar iş akışında hem anterior hem posterior monolitik kron ve köprülerde en yüksek fiyat/performans ve hız dengesini sunan 6 katmanlı seri."
    }
  };

  function getPdfDataForProduct(p) {
    if (!p) return pdfSpecMap["5d-ml"];
    if (pdfSpecMap[p.id]) return pdfSpecMap[p.id];
    var id = p.id || "";
    if (id.indexOf("pmma") === 0) {
      return {
        pdfBrochure: "/assets/uzm-pmma-brosur-2026.pdf",
        pdfSpec: "/assets/uzm-pmma-brosur-2026.pdf",
        pdfSinter: "/assets/uzm-ce-iso13485-uts-teknik-dosya-2026.pdf",
        specs: [
          { k: "PDF Kaynak Dosyası", v: "uzm-pmma-brosur-2026.pdf (Orijinal Broşür)" },
          { k: "Polimer Matris Yapısı", v: "Yüksek Çapraz Bağlı Endüstriyel PMMA" },
          { k: "Bükülme Dayanımı (ISO 20795)", v: p.strength || "≥ 115 MPa" },
          { k: "Artık Monomer / Kül Oranı", v: "< %0.5 Artık Monomer · %0.00 Kül (Castable)" },
          { k: "Su Emilimi / Çözünürlük", v: "≤ 22 µg/mm³ · ≤ 1.1 µg/mm³ (Yüksek Plak Direnci)" },
          { k: "Uyumlu CAD/CAM Sistemleri", v: "98mm (Basamaklı) · 95mm (Zirkonzahn) · AG (Amann Girrbach)" },
          { k: "Vickers Sertliği", v: "≥ 24 HV · Kolay Polisaj ve Yüksek Parlaklık" },
          { k: "Biyouyumluluk & İzlenebilirlik", v: "CE · ISO 13485 · T.C. Sağlık Bakanlığı ÜTS Kayıtlı" }
        ],
        sinterSteps: [
          { step: "1. CAM Stratejisi & Freze Seçimi", rate: "18.000–24.000 RPM", hold: "Tek/Çift Ağızlı PMMA Freze", note: "Doğrudan mekanik polisajla tamamlanır; doğrudan frezelenir" },
          { step: "2. İlerleme Hızı (Feed Rate)", rate: "1200–1800 mm/dk", hold: "Hava / Su Soğutma", note: "Termal erime ve freze sarmasını önler" },
          { step: "3. Konnektör Kesimi & Tesviye", rate: "Düşük Devir", hold: "Çapak Bırakmaz", note: "Mikro-kırık oluşturmadan pürüzsüz ayrım" },
          { step: "4. Polisaj & Klinik Teslim", rate: "Keçe + PMMA Pastası", hold: "Ayna Parlaklığı", note: "Klinikte doğrudan simantasyon ve kolay uyumlama" }
        ],
        clinicalGuide: (p.sinterStandard || "Uzun süreli geçici kron ve köprü restorasyonları, implant iyileşme süreci yükleme protezleri, oklüzal splint ve gülüş tasarımı (mock-up) provaları.") + " Oda sıcaklığında, doğrudan güneş ışığından uzak ve kuru ortamda saklayınız."
      };
    }
    if (id.indexOf("endo") === 0 || id.indexOf("gutta") === 0 || id.indexOf("paper") === 0) {
      return {
        pdfBrochure: "/assets/uzm-gutta-percha-brosur-2026.pdf",
        pdfSpec: "/assets/uzm-gutta-percha-brosur-2026.pdf",
        pdfSinter: "/assets/uzm-ce-iso13485-uts-teknik-dosya-2026.pdf",
        specs: [
          { k: "PDF Kaynak Dosyası", v: "uzm-gutta-percha-brosur-2026.pdf & Gökhan Bey DOCX" },
          { k: "Uluslararası Standart", v: "ISO 6877 (Gutta Percha & Paper Points) · CE Sınıf IIa" },
          { k: "Boyutsal Lazer Toleransı", v: "± 0.02 mm Hassas Koniklik Kontrolü" },
          { k: "Radyoopasite / Emicilik", v: p.translucency || "≥ 6 mm Al Eşdeğeri Radyoopasite" },
          { k: "Taper (Koniklik) Seçenekleri", v: (p.thicknessList || []).join(" · ") },
          { k: "Ölçü & Assorted Paketler", v: (p.shadeList || []).join(", ") },
          { k: "Sterilizasyon & Ambalaj", v: "Nem Korumalı Sürgülü Kutu · Kolay Seçim Süngeri" },
          { k: "Bakanlık Kaydı", v: "T.C. Sağlık Bakanlığı ÜTS Kayıtlı · QR Kod Doğrulamalı" }
        ],
        sinterSteps: [
          { step: "1. Kanal Preparasyonu & Ölçüm", rate: "Çalışma Boyu Tespiti", hold: "Apex Locator / Radyografi", note: "Son kullanılan eğe taper ve numarasına birebir eşleştirme" },
          { step: "2. İrrigasyon & Kurutma Protokolü", rate: "NaOCl + EDTA", hold: "UZM Paper Points", note: "Lif bırakmayan saf selüloz konlarla tam apikal kurutma" },
          { step: "3. Master Cone Prova (Tug-Back)", rate: "Apikal Sıkışma Kontrolü", hold: "Periapikal Radyografi", note: "Yüksek radyoopasite ile net röntgen doğrulaması" },
          { step: "4. Obturasyon & Saklama Koşulları", rate: "Single Cone / Lateral / Sıcak", hold: "< 25°C Serin Ortam", note: "Güneş ışığı ve ısı kaynaklarından uzakta muhafaza ediniz" }
        ],
        clinicalGuide: (p.indication || p.sinterStandard || "Manuel, rotary ve resiprokal kanal preparasyonları sonrasında apikal hermetik sızdırmazlık ve kurutma.") + " Ambalaj üzerindeki QR kod ile ÜTS ve teknik spesifikasyon doğrulaması yapılabilir."
      };
    }
    // Default Zirconia (3d-ml, st-color, ht-color, st-white, ht-white)
    return {
      pdfBrochure: "/assets/uzm-zircrown-brosur-2026.pdf",
      pdfSpec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf",
      pdfSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve.pdf",
      pdfFastSinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf",
      specs: [
        { k: "PDF Kaynak Dosyası", v: "uzm-zircrown-brosur-2026.pdf & 3d-pro-spec.pdf" },
        { k: "Kimyasal Bileşim", v: "ZrO₂ + HfO₂ + Y₂O₃ ≥ %99.0 (TOSOH Sınıfı)" },
        { k: "Sinterlenmiş Yoğunluk", v: "6.07 ± 0.02 g/cm³ (CIP İzostatik Pres)" },
        { k: "Bükülme Dayanımı (ISO 6872)", v: p.strength || "1200 – 1350 MPa" },
        { k: "Işık Geçirgenliği", v: p.translucency || "%41 – %48" },
        { k: "Termal Genleşme (CTE)", v: "10.5 ± 0.5 × 10⁻⁶ K⁻¹ (25–500°C)" },
        { k: "Kırılma Tokluğu / Sertlik", v: "8.0 MPa·m¹/² · 1250 HV10" },
        { k: "Min. Duvar Kalınlığı", v: "Posterior: 0.5 mm · Uzun Köprü Konnektör: ≥12 mm²" }
      ],
      sinterSteps: [
        { step: "1. Isıtma (Oda → 900°C)", rate: "10 °C/dk", hold: "Bekleme Yok", note: "Standart zirkonyum ön ısıtma" },
        { step: "2. Ara Isıtma (900°C → " + (p.sinterPeak || "1500°C") + ")", rate: "6 °C/dk", hold: "Bekleme Yok", note: "İzostatik homojen küçülme" },
        { step: "3. Tepe Sinterleme (" + (p.sinterPeak || "1500°C") + ")", rate: "Sabit Tavan", hold: "120 Dakika", note: p.sinterFast || "Hızlı Sinter: 1530°C / 25 dk" },
        { step: "4. Soğutma (" + (p.sinterPeak || "1500°C") + " → 200°C)", rate: "10 °C/dk", hold: "Fırın İçi", note: "200°C altında fırından çıkarılır" }
      ],
      clinicalGuide: (p.indication || "Yüksek çiğneme kuvveti altındaki posterior kronlar, uzun gövdeli köprü iskeletleri ve hibrit bar altyapıları.") + " 98.5 mm basamaklı açık sistem disk geometrisi tüm CAD/CAM kazıyıcılarla tam uyumludur."
    };
  }

  // 2. Fix Homepage (index.html) Duplications!
  function cleanHomepageDuplications() {
    var path = (window.location.pathname || "").toLowerCase();
    var isHome = (path === "/" || path.endsWith("/index.html") || path === "");
    if (!isHome) return;

    // (a) Keep #endodontiVitrinSection on index.html to ONLY the 3 original showcase cards!
    var endoGrid = document.querySelector("#endodontiVitrinSection .uzm-endo-grid");
    if (endoGrid) {
      var cards = endoGrid.querySelectorAll(".uzm-endo-card");
      cards.forEach(function(c, idx) {
        if (idx >= 3) c.remove();
      });
    }

    // (b) Remove duplicate back-to-back LOT verification form inside #hakkimizdaIletisimSection when #uzm-lot-dogrulama already exists above it!
    var topLot = document.getElementById("uzm-lot-dogrulama");
    var bottomSection = document.getElementById("hakkimizdaIletisimSection");
    if (topLot && bottomSection) {
      // Hide the first child container inside #hakkimizdaIletisimSection if it repeats "Parti İzlenebilirlik Kayıtları"
      var containers = bottomSection.querySelectorAll(".container");
      containers.forEach(function(cont) {
        if (cont.textContent && cont.textContent.indexOf("Parti İzlenebilirlik Kayıtları") !== -1 && cont.querySelector("#lotInput")) {
          cont.style.display = "none";
        }
      });
    }
  }

  // 3. Upgrade #uzmUniversalModal to Ultra-Aesthetic "Açıldıkça Açılan" (Progressive Disclosure) Window
  var origOpenModal = window.openUzmUniversalModal;
  window.openUzmUniversalModal = function(productId, tabName, triggerEl) {
    if (typeof origOpenModal === "function") {
      origOpenModal(productId, tabName, triggerEl);
    }
    if (typeof window.__uzmEnhanceProg === "function") {
      window.__uzmEnhanceProg(window.__uzmActiveProductKey || productId, window.__uzmActiveTab || tabName);
    }
  };
  window.openModalForProduct = window.openUzmUniversalModal;

  var enhanceModalWithProgressivePanels = window.__uzmEnhanceProg = function(productId, tabName) {
    var modal = document.getElementById("uzmUniversalModal");
    if (!modal) return;
    var p = db[productId] || db["5d-ml"];
    var pdfInfo = getPdfDataForProduct(p);
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;

    // Build Progressive Disclosure Accordion Stack ("Açıldıkça Açılan Bilgiler")
    var specCellsHtml = pdfInfo.specs.map(function(s) {
      return '<div class="uzm-pdf-spec-cell"><small>' + s.k + '</small><strong>' + s.v + '</strong></div>';
    }).join("");

    var sinterRowsHtml = pdfInfo.sinterSteps.map(function(st) {
      var isPeak = st.step.indexOf('Tepe') !== -1;
      return '<tr class="' + (isPeak ? 'uzm-sinter-row-peak' : '') + '" style="border-bottom:1px solid #e2e8f0;">' +
        '<td style="padding:0.5rem 0.65rem;font-weight:700;color:#0f172a;">' + st.step + '</td>' +
        '<td style="padding:0.5rem 0.65rem;color:#0284c7;font-weight:700;">' + st.rate + '</td>' +
        '<td style="padding:0.5rem 0.65rem;font-weight:600;color:#334155;">' + st.hold + '</td>' +
        '<td style="padding:0.5rem 0.65rem;color:#64748b;font-size:0.78rem;">' + st.note + '</td>' +
      '</tr>';
    }).join("");

    var layersHtml = (p.layers || []).map(function(l) {
      return '<div style="display:grid;grid-template-columns:135px 1fr 125px 125px;gap:0.65rem;align-items:center;padding:0.45rem 0.7rem;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:0.8rem;">' +
        '<strong style="color:#0f172a;">' + l.name + '</strong>' +
        '<div style="height:10px;background:#e2e8f0;border-radius:999px;overflow:hidden;"><div style="height:100%;width:100%;background:' + (l.color || '#0095c8') + ';"></div></div>' +
        '<span style="color:#0369a1;font-weight:700;text-align:right;">' + l.trans + '</span>' +
        '<span style="color:#0f172a;font-weight:700;text-align:right;">' + l.mpa + '</span>' +
      '</div>';
    }).join("");

    var isSinterOpen = (tabName && tabName.toLowerCase().indexOf("sinter") !== -1) ? " open" : "";
    var isLayerOpen = (tabName && tabName.toLowerCase().indexOf("katman") !== -1) ? " open" : "";

    var progressiveHtml =
      '<div class="uzm-pdf-bar">' +
        '<div style="display:flex;align-items:center;gap:0.6rem;">' +
          '<span style="background:#0095c8;color:#fff;font-weight:800;font-size:0.7rem;padding:0.2rem 0.55rem;border-radius:6px;">PDF EŞLEŞMELİ</span>' +
          '<span style="font-size:0.8rem;font-weight:600;color:#e2e8f0;">Aşağıdaki başlıkları tıkladıkça PDF katalog ve klinik föy detayları kademeli açılır:</span>' +
        '</div>' +
        '<div style="display:flex;gap:0.45rem;flex-wrap:wrap;">' +
          '<a class="uzm-pdf-btn" href="' + pdfInfo.pdfBrochure + '" target="_blank" rel="noopener">📄 Ürün PDF Broşürü</a>' +
          (pdfInfo.pdfFastSinter ? '<a class="uzm-pdf-btn secondary" href="' + pdfInfo.pdfSinter + '" target="_blank" rel="noopener">PDF Sinter Eğrisi</a>' : '') +
        '</div>' +
      '</div>' +

      '<div class="uzm-prog-stack">' +
        /* PANEL 1: PDF Teknik Spesifikasyon Föyü */
        '<details class="uzm-prog-panel" open>' +
          '<summary>' +
            '<span class="uzm-prog-sum-left"><span class="uzm-prog-icon">01</span><span>PDF Teknik Spesifikasyon Föyü &amp; Mühendislik Değerleri</span></span>' +
            '<span class="uzm-prog-sum-right"><span class="uzm-prog-tag">8 Parametre · ISO / CE</span><span class="uzm-prog-chevron">+</span></span>' +
          '</summary>' +
          '<div class="uzm-prog-body">' +
            '<div class="uzm-pdf-spec-grid">' + specCellsHtml + '</div>' +
          '</div>' +
        '</details>' +

        /* PANEL 2: Katman Mimarisi & Optik/MPa Gradyan Analizi */
        '<details class="uzm-prog-panel"' + isLayerOpen + '>' +
          '<summary>' +
            '<span class="uzm-prog-sum-left"><span class="uzm-prog-icon">02</span><span>Katman Mimarisi, Işık Geçirgenliği &amp; MPa Gradyan Profili</span></span>' +
            '<span class="uzm-prog-sum-right"><span class="uzm-prog-tag">İnsizal → Servikal</span><span class="uzm-prog-chevron">+</span></span>' +
          '</summary>' +
          '<div class="uzm-prog-body">' +
            '<div style="display:flex;flex-direction:column;gap:0.45rem;">' + layersHtml + '</div>' +
          '</div>' +
        '</details>' +

        /* PANEL 3: Sinterleme Eğrisi / Üretim Protokolü */
        '<details class="uzm-prog-panel"' + isSinterOpen + '>' +
          '<summary>' +
            '<span class="uzm-prog-sum-left"><span class="uzm-prog-icon">03</span><span>' + (isPmma ? 'CAD/CAM Kazıma, Frez &amp; Polisaj Protokolü' : (isEndo ? 'Klinik Kanal Preparasyonu &amp; Obtürasyon Protokolü' : 'Fırın Sinterleme Eğrisi &amp; CAD/CAM Üretim Protokolü (PDF Tablosu)')) + '</span></span>' +
            '<span class="uzm-prog-sum-right"><span class="uzm-prog-tag">' + (p.sinterPeak || 'Protokol') + '</span><span class="uzm-prog-chevron">+</span></span>' +
          '</summary>' +
          '<div class="uzm-prog-body">' +
            '<div style="overflow-x:auto;">' +
              '<table style="width:100%;border-collapse:collapse;font-size:0.82rem;text-align:left;">' +
                '<thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">' +
                  '<th style="padding:0.55rem 0.65rem;">Program Adımı</th>' +
                  '<th style="padding:0.55rem 0.65rem;">Artış / Hız</th>' +
                  '<th style="padding:0.55rem 0.65rem;">Bekleme / Tutma</th>' +
                  '<th style="padding:0.55rem 0.65rem;">Teknik Açıklama</th>' +
                '</tr></thead>' +
                '<tbody>' + sinterRowsHtml + '</tbody>' +
              '</table>' +
            '</div>' +
          '</div>' +
        '</details>' +

        /* PANEL 4: Klinik Endikasyon, Uygulama & Saklama Rehberi */
        '<details class="uzm-prog-panel">' +
          '<summary>' +
            '<span class="uzm-prog-sum-left"><span class="uzm-prog-icon">04</span><span>Klinik Endikasyon, Endodontik / Protetik Uygulama &amp; Saklama Koşulları</span></span>' +
            '<span class="uzm-prog-sum-right"><span class="uzm-prog-tag">Klinik Rehber</span><span class="uzm-prog-chevron">+</span></span>' +
          '</summary>' +
          '<div class="uzm-prog-body">' +
            '<p style="margin:0 0 0.65rem;color:#1e293b;font-weight:500;">' + pdfInfo.clinicalGuide + '</p>' +
            '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;border-top:1px dashed #cbd5e1;font-size:0.78rem;color:#475569;">' +
              '<span><strong>Bakanlık / Kalite:</strong> ' + (p.lotTrace || 'ÜTS Kayıtlı · CE · ISO 13485') + '</span>' +
            '</div>' +
          '</div>' +
        '</details>' +

        /* PANEL 5: Pencere İçi Canlı PDF Önizleme */
        '<details class="uzm-prog-panel">' +
          '<summary>' +
            '<span class="uzm-prog-sum-left"><span class="uzm-prog-icon">05</span><span>Orijinal PDF Katalog &amp; Sinter Föyünü Pencere İçinde Görüntüle</span></span>' +
            '<span class="uzm-prog-sum-right"><span class="uzm-prog-tag">Canlı PDF Önizleme</span><span class="uzm-prog-chevron">+</span></span>' +
          '</summary>' +
          '<div class="uzm-prog-body">' +
            '<div style="display:flex;gap:0.5rem;margin-bottom:0.65rem;flex-wrap:wrap;">' +
              '<a class="uzm-pdf-btn" href="' + pdfInfo.pdfBrochure + '" target="_blank" rel="noopener">📥 Orijinal PDF Katalog İndir</a>' +
              '<a class="uzm-pdf-btn" style="background:#0f172a;" href="' + pdfInfo.pdfSpec + '" target="_blank" rel="noopener">📐 Teknik Spesifikasyon PDF</a>' +
              (pdfInfo.pdfFastSinter ? '<a class="uzm-pdf-btn" style="background:#0369a1;" href="' + pdfInfo.pdfFastSinter + '" target="_blank" rel="noopener">Hızlı Sinter Eğrisi PDF</a>' : '') +
            '</div>' +
            '<div class="uzm-pdf-img-preview-box"><img src="/uploads/pdf_sheets/zircrown_brosur_page_1.png" alt="UZM Dental Orijinal PDF Katalog Sayfası" class="uzm-pdf-sheet-img"></div>' +
          '</div>' +
        '</details>' +
      '</div>';

    var existingProg = body.querySelector(".uzm-prog-wrapper");
    if (existingProg) existingProg.remove();
    var wrapper = document.createElement("div");
    wrapper.className = "uzm-prog-wrapper";
    wrapper.innerHTML = progressiveHtml;
    body.appendChild(wrapper);
  }

  // FAZ-3 legacy progressive wrapper disabled in favor of FAZ-24 Sequential 4-Tab Accordion

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cleanHomepageDuplications);
  } else {
    cleanHomepageDuplications();
  }
})();

/* === FAZ-5: AERO ETKILESIM, BOSTA DONEN FILTRELERI VE BUTONLARI BAGLAMA, TEK AKORDEON KILIDI === */
(function() {
  function wireAllInteractiveButtons() {
    // 1. Kartlardaki tek ana butonun metnini doğal ve net yap: "Ürünü & Teknik Föyü İncele →"
    document.querySelectorAll(".uzm-block-card .uzm-card-actions button:first-child, .uzm-endo-card .uzm-card-actions button:first-child").forEach(function(btn) {
      btn.innerHTML = "Ürünü &amp; Teknik Föyü İncele &rarr;";
    });

    // 2. Boşa dönen kategori filtre butonlarını (.uzm-filter-btn) gerçekten filtreleyecek şekilde bağla!
    document.querySelectorAll(".uzm-filter-btn").forEach(function(fbtn) {
      if (fbtn.getAttribute("data-filter-bound") === "1") return;
      fbtn.setAttribute("data-filter-bound", "1");
      fbtn.addEventListener("click", function(ev) {
        ev.preventDefault();
        var bar = fbtn.parentElement;
        if (bar) {
          bar.querySelectorAll(".uzm-filter-btn").forEach(function(b) { b.classList.remove("is-active"); });
        }
        fbtn.classList.add("is-active");
        var txt = (fbtn.textContent || "").toLowerCase();
        var section = fbtn.closest("section") || document;
        var cards = section.querySelectorAll(".uzm-block-card, .uzm-endo-card");
        cards.forEach(function(card, idx) {
          var ctext = (card.textContent || "").toLowerCase();
          var show = true;
          if (txt.indexOf("tüm") !== -1) {
            show = true;
          } else if (txt.indexOf("anterior") !== -1) {
            show = ctext.indexOf("5d") !== -1 || ctext.indexOf("4d") !== -1 || ctext.indexOf("3d") !== -1 || ctext.indexOf("anterior") !== -1;
          } else if (txt.indexOf("tam ark") !== -1) {
            show = ctext.indexOf("5d") !== -1 || ctext.indexOf("4d") !== -1 || ctext.indexOf("st") !== -1 || ctext.indexOf("köprü") !== -1;
          } else if (txt.indexOf("posterior") !== -1) {
            show = ctext.indexOf("ht") !== -1 || ctext.indexOf("st") !== -1 || ctext.indexOf("1200") !== -1 || ctext.indexOf("1350") !== -1;
          } else if (txt.indexOf("geçici") !== -1) {
            show = ctext.indexOf("mono") !== -1 || ctext.indexOf("multi") !== -1;
          } else if (txt.indexOf("splint") !== -1) {
            show = ctext.indexOf("flex") !== -1 || ctext.indexOf("clear") !== -1 || ctext.indexOf("mono") !== -1;
          } else if (txt.indexOf("cerrahi") !== -1 || txt.indexOf("x-ray") !== -1) {
            show = ctext.indexOf("x-ray") !== -1 || ctext.indexOf("radyoopak") !== -1;
          }
          card.style.display = show ? "" : "none";
        });
      });
    });

    // 3. Üstteki "Numune & Teklif" butonunu ve boşa giden /gutta-makasi.html, /urun/... linklerini doğrudan Aero Pencereye bağla!
    document.querySelectorAll("button, a").forEach(function(el) {
      var t = (el.textContent || "").trim();
      var href = el.getAttribute("href") || "";
      if (t.indexOf("Numune & Teklif") !== -1 && !el.getAttribute("data-uzm-modal")) {
        el.setAttribute("data-uzm-modal", "Numune & Teklif");
        el.setAttribute("data-product-id", "5d-ml");
      }
      if (href === "/gutta-makasi.html" || href === "/gutta-corrector.html") {
        el.setAttribute("href", "#endodontiVitrinSection");
        el.setAttribute("data-uzm-modal", "Numune & Teklif");
        el.setAttribute("data-product-id", "endo-files");
      } else if (href === "/gutta-perka.html") {
        el.setAttribute("href", "#endodontiVitrinSection");
        el.setAttribute("data-uzm-modal", "Teknik Föy");
        el.setAttribute("data-product-id", "endo-gutta");
      } else if (href.indexOf("/urun/") === 0) {
        el.setAttribute("data-original-href", href); var slug = href.replace("/urun/", "").replace(".html", "");
        var mapSlug = {
          "st": "st-color", "st-ml": "st-color", "3d-ml": "3d-ml", "3d-pro": "3d-pro",
          "4d-ml": "4d-pro", "5d-ml": "5d-ml", "ut": "ht-white", "ut-c": "ht-fast",
          "ut-ml": "ht-fast", "zircrown-ht-zirkonya-disk": "ht-white", "hizli-sinterleme": "ht-color",
          "monolayer": "pmma-mono", "multilayer-pmma-disc": "pmma-multi",
          "pmma-disk-95mm": "pmma-mono", "x-ray-pmma-disc": "pmma-xray",
          "02-taper": "gutta-02", "03-taper": "gutta-03", "04-taper": "gutta-04",
          "04-taper-79": "paper-04", "06-taper": "paper-06",
          "f-serisi": "gutta-f", "f-serisi-81": "paper-fpx", "x-serisi": "gutta-x",
          "x-serisi-82": "paper-fpx", "p-serisi": "gutta-p",
          "02-paper": "paper-02", "04-paper": "paper-04", "06-paper": "paper-06",
          "f-serisi-2": "paper-fpx", "x-serisi-2": "paper-fpx", "p-paper": "paper-fpx",
          "gutta-percha-corrector": "endo-corrector", "gold-ve-blue-rotary-sistem-kanal-egesi": "endo-files"
        };
        el.setAttribute("href", "#");
        el.setAttribute("data-uzm-modal", "Teknik Föy");
        var mappedPid = mapSlug[slug] || "5d-ml"; el.setAttribute("data-product-id", mappedPid); var pCard = el.closest(".uzm-sql-card, .uzm-block-card, .uzm-product-card, .uzm-endo-card"); if (pCard) { pCard.setAttribute("data-product-id", mappedPid); pCard.setAttribute("data-product", mappedPid); }
      }
    });
  }

  // 4. Tek Akordeon Odak Kilidi (Bir kademe açılınca diğerini kapatır, pencere boyu sabit kalır)
  document.addEventListener("toggle", function(ev) {
    var panel = ev.target;
    if (!panel || !panel.classList || !panel.classList.contains("uzm-prog-panel")) return;
    if (!panel.open) return;
    var container = panel.closest("#uzmUniversalModal") || document;
    var siblings = container.querySelectorAll("details.uzm-prog-panel[open]");
    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i] !== panel) {
        siblings[i].removeAttribute("open");
      }
    }
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireAllInteractiveButtons);
  } else {
    wireAllInteractiveButtons();
  }
})();

/* === FAZ-6: PENCERE ICI INLINE GRI KUTULARI CANLI AERO CAM SINIFLARINA DONUSTURUCU === */
(function() {
  function upgradeModalInteriorToAero() {
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;

    // 1. Ürün görseli kutusuna Aero stüdyo spot sınıfı ekle
    var imgEl = body.querySelector("img");
    if (imgEl && imgEl.parentElement) {
      imgEl.parentElement.classList.add("uzm-modal-hero-visual");
    }

    // 2. Üstteki 3 metrik kutusunu (Işık Geçirgenliği, Bükülme Dayanımı, Sinter / Paket) canlı safir/turkuaz/kehribar sınıflarına geçir
    var grids = body.querySelectorAll("div");
    grids.forEach(function(d) {
      var st = d.getAttribute("style") || "";
      if (st.indexOf("grid-template-columns:repeat(3") !== -1 || st.indexOf("grid-template-columns: repeat(3") !== -1) {
        var children = d.children;
        if (children.length >= 3) {
          children[0].classList.add("uzm-modal-metric-card-1");
          children[1].classList.add("uzm-modal-metric-card-2");
          children[2].classList.add("uzm-modal-metric-card-3");
        }
      }
      // Soluk gri (#f8fafc) arka planlı iç kutuları Aero buzlu cam (#F0F9FF -> #FFFFFF) yap
      if (st.indexOf("background:#f8fafc") !== -1 && !d.classList.contains("uzm-modal-hero-visual")) {
        d.style.background = "linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)";
        d.style.borderColor = "#BAE6FD";
        d.style.boxShadow = "0 8px 20px -8px rgba(2, 132, 199, 0.12), inset 0 1px 0 #FFFFFF";
      }
    });
  }

  var origOpen = window.openUzmUniversalModal;
  if (typeof origOpen === "function") {
    window.openUzmUniversalModal = function(pid, tab) {
      origOpen(pid, tab);
      upgradeModalInteriorToAero();
    };
  }

  document.addEventListener("click", function(ev) {
    if (ev.target.closest("#uzmUniversalModal .uzm-modal-tab")) {
      setTimeout(upgradeModalInteriorToAero, 25);
    }
  });
})();

/* === FAZ-7: MOBIL PENCERE ICI INLINE GRID NORMALIZASYONU === */
(function() {
  function normalizeModalMobileGrids() {
    var modal = document.getElementById("uzmUniversalModal");
    if (!modal) return;
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;

    // Inline grid-template-columns kullanan tüm iç div'lere duyarlı sınıflar ata
    body.querySelectorAll("div").forEach(function(d) {
      var st = d.getAttribute("style") || "";
      if (st.indexOf("240px 1fr") !== -1 || st.indexOf("220px 1fr") !== -1 || st.indexOf("1fr 1fr") !== -1) {
        d.classList.add("uzm-modal-top-grid");
      }
      if (st.indexOf("repeat(3,1fr)") !== -1 || st.indexOf("repeat(3, 1fr)") !== -1) {
        d.classList.add("uzm-modal-metrics-row");
      }
      if (st.indexOf("135px 1fr 125px 125px") !== -1 || st.indexOf("140px 1fr 110px 110px") !== -1) {
        d.classList.add("uzm-layer-row-mobile");
      }
    });
  }

  var prevOpen = window.openUzmUniversalModal;
  if (typeof prevOpen === "function") {
    window.openUzmUniversalModal = function(pid, tab) {
      prevOpen(pid, tab);
      normalizeModalMobileGrids();
    };
  }

  document.addEventListener("click", function(ev) {
    if (ev.target.closest("#uzmUniversalModal .uzm-modal-tab")) {
      setTimeout(normalizeModalMobileGrids, 30);
    }
  });
})();

/* === FAZ-11: ATLAS-WEB GENIS 2 SUTUNLU SADE MODAL RENDER MOTORU (KUTU ICINDE KUTU / KAPALI AKORDEON YOK) === */
(function() {
  window.__uzmEnhanceProg = function(productId, tabName) {
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body || !window.UZM_PRODUCT_DATABASE) return;
    var p = window.UZM_PRODUCT_DATABASE[productId] || window.UZM_PRODUCT_DATABASE["5d-ml"];
    var tab = window.__uzmActiveTab || tabName || "specs";

    // Remove any old progressive accordion wrapper
    var oldWrap = body.querySelector(".uzm-prog-wrapper");
    if (oldWrap) oldWrap.remove();

    // Only replace "specs" and "sinter" and "compare" with the ultra-clean 2-column layout (leave "quote" form intact or wrap it cleanly)
    var id = p.id || "5d-ml";
    var isPmma = id.indexOf("pmma") === 0;
    var isEndo = id.indexOf("endo") === 0 || id.indexOf("gutta") === 0 || id.indexOf("paper") === 0;
    var pdfBrochure = isPmma ? "/assets/uzm-pmma-brosur-2026.pdf" : (isEndo ? "/assets/uzm-gutta-percha-brosur-2026.pdf" : "/assets/uzm-zircrown-brosur-2026.pdf");
    var pdfSinter = (!isPmma && !isEndo) ? "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve.pdf" : "";

    var thickPills = (p.thicknessList || ["14 mm"]).map(function(t, i) {
      return '<button type="button" class="uzm-pill-option' + (i === 0 ? ' is-selected' : '') + '" style="padding:0.35rem 0.65rem;font-size:0.78rem;cursor:pointer;">' + t + '</button>';
    }).join("");

    var shadePills = (p.shadeList || ["A2"]).map(function(s, i) {
      return '<button type="button" class="uzm-pill-option' + (i === 0 ? ' is-selected' : '') + '" style="padding:0.35rem 0.65rem;font-size:0.78rem;cursor:pointer;">' + s + '</button>';
    }).join("");

    var leftSidebarHtml =
      '<aside class="uzm-2col-left-sidebar">' +
        '<div class="uzm-2col-img-stage"><img src="' + p.img + '" alt="' + p.title + '"></div>' +
        '<div class="uzm-2col-chip-group">' +
          '<label>1. Ölçü / Kalınlık / Sistem Seçimi</label>' +
          '<div class="uzm-2col-chips">' + thickPills + '</div>' +
        '</div>' +
        '<div class="uzm-2col-chip-group">' +
          '<label>2. Renk / Numara / Varyant</label>' +
          '<div class="uzm-2col-chips">' + shadePills + '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:0.45rem;margin-top:0.25rem;padding-top:0.75rem;border-top:1px solid #BAE6FD;">' +
          '<a href="' + pdfBrochure + '" target="_blank" rel="noopener" class="uzm-pdf-btn" style="justify-content:center;padding:0.6rem;font-size:0.82rem;border-radius:10px;">⬇ Orijinal PDF Broşürü İndir</a>' +
          (pdfSinter ? '<a href="' + pdfSinter + '" target="_blank" rel="noopener" class="uzm-pdf-btn" style="justify-content:center;padding:0.55rem;font-size:0.8rem;border-radius:10px;background:#0F172A;">PDF Sinter Eğrisini Aç</a>' : '') +
        '</div>' +
      '</aside>';

    var kpiRowHtml =
      '<div class="uzm-2col-kpi-grid">' +
        '<div class="uzm-2col-kpi-card kpi-1"><small>OPTİK / ÖZELLİK</small><strong>' + p.translucency + '</strong><span style="font-size:0.76rem;color:#334155;display:block;margin-top:0.2rem;">' + (p.translucencyDetail || '') + '</span></div>' +
        '<div class="uzm-2col-kpi-card kpi-2"><small>DAYANIM / TOLERANS</small><strong>' + p.strength + '</strong><span style="font-size:0.76rem;color:#334155;display:block;margin-top:0.2rem;">' + (p.strengthDetail || '') + '</span></div>' +
        '<div class="uzm-2col-kpi-card kpi-3"><small>SİNTER / AMBALAJ</small><strong>' + p.sinterPeak + '</strong><span style="font-size:0.76rem;color:#334155;display:block;margin-top:0.2rem;">' + (p.lotTrace || '') + '</span></div>' +
      '</div>';

    var rightContentHtml = "";
    if (tab === "specs") {
      var layersRows = (p.layers || []).map(function(l) {
        return '<div class="uzm-layer-bar-row">' +
          '<strong style="color:#06162E;font-size:0.86rem;min-width:160px;">' + l.name + ' <span style="color:#0284C7;">(' + l.pct + ')</span></strong>' +
          '<div style="flex:1;height:10px;background:#E0F2FE;border-radius:999px;overflow:hidden;"><div style="width:100%;height:100%;background:linear-gradient(90deg,#38BDF8,#0284C7);"></div></div>' +
          '<span style="font-family:JetBrains Mono,monospace;font-size:0.82rem;font-weight:700;color:#0369A1;min-width:95px;text-align:right;">' + l.trans + '</span>' +
          '<span style="font-family:JetBrains Mono,monospace;font-size:0.82rem;font-weight:800;color:#06162E;min-width:95px;text-align:right;">' + l.mpa + '</span>' +
        '</div>';
      }).join("");

      var specRows = isPmma ? [
        ["Materyal Yapısı", "Yüksek Çapraz Bağlı Endüstriyel CAD/CAM PMMA"],
        ["Bükülme Dayanımı", p.strength + " (ISO 20795-1)"],
        ["Artık Monomer / Kül Oranı", "< %0.5 Artık Monomer · %0.00 Kül (Tam Yanma)"],
        ["Uyumlu Sistemler", (p.thicknessList || []).join(" · ")],
        ["Klinik Endikasyon", p.indication]
      ] : (isEndo ? [
        ["Standart & Geometri", "ISO 6877 · Lazer Kalibrasyonlu Hassas Koniklik"],
        ["Taper (Koniklik) Yapısı", (p.thicknessList || []).join(" · ")],
        ["Mevcut Numaralar / Paket", (p.shadeList || []).join(", ") + " (" + p.sinterPeak + ")"],
        ["Radyoopasite & Yapı", p.translucencyDetail],
        ["Klinik Kullanım Alanı", p.indication]
      ] : [
        ["Kimyasal Bileşim & Yoğunluk", "ZrO₂ + HfO₂ + Y₂O₃ ≥ %99.0 · 6.07 ± 0.02 g/cm³ (İzostatik Pres)"],
        ["Termal Genleşme (CTE) & Tokluk", "10.5 ± 0.5 × 10⁻⁶ K⁻¹ (25–500°C) · 6.5–8.0 MPa·m¹/²"],
        ["Minimum Duvar Kalınlığı", "Anterior: 0.4 mm · Posterior: 0.6 mm · Konnektör: ≥ 9 mm²"],
        ["Standart & Hızlı Sinterleme", p.sinterStandard],
        ["Klinik Endikasyon", p.indication]
      ]);

      var specTableHtml = specRows.map(function(r) {
        return '<tr style="border-bottom:1px solid #E0F2FE;">' +
          '<th style="padding:0.6rem 0.75rem;text-align:left;color:#0369A1;font-size:0.84rem;width:34%;background:#F8FCFF;">' + r[0] + '</th>' +
          '<td style="padding:0.6rem 0.75rem;color:#06162E;font-weight:600;font-size:0.86rem;">' + r[1] + '</td>' +
        '</tr>';
      }).join("");

      rightContentHtml =
        kpiRowHtml +
        '<div class="uzm-2col-clean-card">' +
          '<h4><span>Teknik Özellikler &amp; Klinik Endikasyon Özeti</span><span style="font-size:0.75rem;color:#0284C7;font-weight:700;">PDF Teknik Föy</span></h4>' +
          '<table style="width:100%;border-collapse:collapse;border:1px solid #E0F2FE;border-radius:10px;overflow:hidden;"><tbody>' + specTableHtml + '</tbody></table>' +
        '</div>' +
        '<div class="uzm-2col-clean-card">' +
          '<h4><span>Katman &amp; Mukavemet Gradyan Analizi</span><span style="font-size:0.75rem;color:#0284C7;font-weight:700;">İnsizal → Servikal</span></h4>' +
          layersRows +
        '</div>';

      body.innerHTML = '<div class="uzm-2col-modal-layout">' + leftSidebarHtml + '<div class="uzm-2col-right-main">' + rightContentHtml + '</div></div>';
    } else if (tab === "sinter" || tab === "compare") {
      // Wrap existing sinter or compare tab content cleanly on the right of the 2-column layout!
      var currentInner = body.innerHTML;
      body.innerHTML =
        '<div class="uzm-2col-modal-layout">' +
          leftSidebarHtml +
          '<div class="uzm-2col-right-main">' +
            kpiRowHtml +
            '<div class="uzm-2col-clean-card">' + currentInner + '</div>' +
            '<div class="uzm-2col-clean-card">' +
              '<h4><span>Pencere İçi Orijinal PDF Katalog &amp; Sinter Eğrisi</span><a href="' + pdfBrochure + '" target="_blank" style="font-size:0.78rem;color:#0284C7;">↗ Tam Ekran Aç</a></h4>' +
              '<div class="uzm-pdf-img-preview-box"><img src="/uploads/pdf_sheets/zircrown_brosur_page_1.png" alt="UZM Dental Orijinal PDF Katalog Sayfası" class="uzm-pdf-sheet-img"></div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    // Bind chip selection inside the left sidebar
    body.querySelectorAll(".uzm-2col-chips .uzm-pill-option").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var group = btn.parentElement;
        if (group) group.querySelectorAll(".uzm-pill-option").forEach(function(b) { b.classList.remove("is-selected"); });
        btn.classList.add("is-selected");
      });
    });
  };
})();

/* === FAZ-12: PDF ICINDEN CIKARILAN GERCEK URUN DISKI / KUTUSU GORSELLERI VE TEKNIK FOY / SINTER TABLOSU ESLESTIRMESI === */
(function() {
  if (!window.UZM_PRODUCT_DATABASE) return;
  var db = window.UZM_PRODUCT_DATABASE;

  var exactProductAssets = {
    "5d-ml": {
      img: "/uploads/uzm_zircrown_5d_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-sinter-curve-web.png"
    },
    "4d-ml": {
      img: "/uploads/uzm_zircrown_4d_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-sinter-curve-web.png"
    },
    "4d-pro": {
      img: "/uploads/uzm_zircrown_4d_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-sinter-curve-web.png"
    },
    "3d-pro": {
      img: "/uploads/uzm_zircrown_3d_pro_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve-web.png"
    },
    "3d-ml": {
      img: "/uploads/uzm_zircrown_3d_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-sinter-curve-web.png"
    },
    "st-color": {
      img: "/uploads/uzm_zircrown_st_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-sinter-curve-web.png"
    },
    "st-ml": {
      img: "/uploads/uzm_zircrown_st_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-sinter-curve-web.png"
    },
    "ht-color": {
      img: "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve-web.png"
    },
    "st-white": {
      img: "/uploads/uzm_zircrown_ut_ml_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-sinter-curve-web.png"
    },
    "ht-white": {
      img: "/uploads/uzm_zircrown_ut_disc.png",
      specSheetImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-spec-web.png",
      sinterCurveImg: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-sinter-curve-web.png"
    },
    "pmma-mono": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_monolayer_disc.png",
      specSheetImg: "/uploads/pdf_sheets/pmma_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/pmma_brosur_page_1.png"
    },
    "pmma-multi": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_multilayer.png",
      specSheetImg: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/pmma_brosur_page_2.png"
    },
    "pmma-flex": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
      specSheetImg: "/uploads/pdf_sheets/pmma_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/pmma_brosur_page_1.png"
    },
    "pmma-xray": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png",
      specSheetImg: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/pmma_brosur_page_2.png"
    },
    "endo-gutta": {
      img: "/uploads/uzm_gp_02_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "endo-paper": {
      img: "/uploads/uzm_pp_04_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png"
    },
    "endo-files": {
      img: "/uploads/uzm_gutta_corrector.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-02": {
      img: "/uploads/uzm_gp_02_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-03": {
      img: "/uploads/uzm_gp_03_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-04": {
      img: "/uploads/uzm_gp_04_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-f": {
      img: "/uploads/uzm_gp_f_series_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-p": {
      img: "/uploads/uzm_gp_p_series_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "gutta-x": {
      img: "/uploads/uzm_gp_x_series_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png"
    },
    "paper-02": {
      img: "/uploads/uzm_pp_02_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png"
    },
    "paper-04": {
      img: "/uploads/uzm_pp_04_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png"
    },
    "paper-06": {
      img: "/uploads/uzm_pp_06_taper_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png"
    },
    "paper-fpx": {
      img: "/uploads/uzm_pp_f_series_box.png",
      specSheetImg: "/uploads/pdf_sheets/gutta_brosur_page_2.png",
      sinterCurveImg: "/uploads/pdf_sheets/gutta_brosur_page_1.png"
    }
  };

  for (var k in exactProductAssets) {
    if (db[k]) {
      db[k].img = exactProductAssets[k].img;
      db[k].specSheetImg = exactProductAssets[k].specSheetImg;
      db[k].sinterCurveImg = exactProductAssets[k].sinterCurveImg;
    }
  }

  // Update card images on the page so every card displays its genuine extracted product box/disc image!
  function syncCardImagesWithPdfExtracted() {
    document.querySelectorAll(".uzm-block-card, .uzm-endo-card").forEach(function(card) {
      var pid = card.getAttribute("data-product-id") || "";
      if (!pid) {
        var btn = card.querySelector("[data-product-id]");
        if (btn) pid = btn.getAttribute("data-product-id");
      }
      if (pid && exactProductAssets[pid]) {
        var img = card.querySelector("img");
        if (img) img.setAttribute("src", exactProductAssets[pid].img);
      }
    });
  }

  // Enhance the 2-column modal so the right column ALSO displays the crisp extracted PDF Spec Sheet PNG & Sinter Curve PNG directly!
  var prevEnhance = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    if (typeof prevEnhance === "function") {
      prevEnhance(productId, tabName);
    }
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;
    var p = db[productId] || db["5d-ml"];
    var assets = exactProductAssets[productId] || exactProductAssets["5d-ml"];
    var rightCol = body.querySelector(".uzm-2col-right-main");
    if (!rightCol || !assets) return;

    var tab = window.__uzmActiveTab || tabName || "specs";
    var sheetCard = document.createElement("div");
    sheetCard.className = "uzm-2col-clean-card";
    if (tab === "sinter" && assets.sinterCurveImg) {
      sheetCard.innerHTML =
        '<h4><span>Orijinal PDF Sinterleme Eğrisi &amp; Program Grafiği</span><a href="' + assets.sinterCurveImg + '" target="_blank" style="font-size:0.76rem;color:#0284C7;">🔍 Tam Boyut Gör</a></h4>' +
        '<div style="background:#FFFFFF;border:1px solid #E0F2FE;border-radius:12px;padding:0.5rem;text-align:center;">' +
          '<img src="' + assets.sinterCurveImg + '" alt="' + p.title + ' Sinter Eğrisi" style="max-width:100%;height:auto;border-radius:8px;box-shadow:0 6px 18px rgba(6,22,46,0.08);">' +
        '</div>';
      rightCol.insertBefore(sheetCard, rightCol.children[1] || null);
    } else if (assets.specSheetImg) {
      sheetCard.innerHTML =
        '<h4><span>PDF Orijinal Ürün Teknik Föyü &amp; Katman Görseli</span><div style="display:flex;gap:0.6rem;"><a href="' + assets.specSheetImg + '" target="_blank" style="font-size:0.76rem;color:#0284C7;">📐 Teknik Föy (HD)</a>' + (assets.sinterCurveImg ? '<a href="' + assets.sinterCurveImg + '" target="_blank" style="font-size:0.76rem;color:#D97706;">Sinter Eğrisi (HD)</a>' : '') + '</div></h4>' +
        '<div style="display:grid;grid-template-columns:' + (assets.sinterCurveImg ? '1fr 1fr' : '1fr') + ';gap:0.75rem;background:#F8FCFF;border:1px solid #E0F2FE;border-radius:12px;padding:0.65rem;">' +
          '<a href="' + assets.specSheetImg + '" target="_blank" title="Büyütmek için tıklayın"><img src="' + assets.specSheetImg + '" alt="' + p.title + ' Teknik Föy" style="width:100%;height:auto;border-radius:8px;border:1px solid #BAE6FD;box-shadow:0 4px 12px rgba(6,22,46,0.08);"></a>' +
          (assets.sinterCurveImg ? '<a href="' + assets.sinterCurveImg + '" target="_blank" title="Büyütmek için tıklayın"><img src="' + assets.sinterCurveImg + '" alt="' + p.title + ' Sinter Eğrisi" style="width:100%;height:auto;border-radius:8px;border:1px solid #BAE6FD;box-shadow:0 4px 12px rgba(6,22,46,0.08);"></a>' : '') +
        '</div>';
      rightCol.appendChild(sheetCard);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncCardImagesWithPdfExtracted);
  } else {
    syncCardImagesWithPdfExtracted();
  }
})();

/* === FAZ-13: "WHATSAPP BILGI AL" + GOKHAN BEY DOGRULANMIS ADRES, TELEFON (+90 542 646 02 20) VE E-POSTA KILIDI === */
(function() {
  var WA_BASE = "https://wa.me/905426460220";
  var VERIFIED_ADDR = "Dumlupınar Mah. 2. Sedef Sk. Üstyıldız Sitesi H No:13 A, 43020 Merkez / Kütahya";
  var VERIFIED_PHONE = "+90 542 646 02 20";
  var VERIFIED_MAIL = "uzmandisdental@gmail.com";

  function buildWhatsAppLink(productTitle, thickness, shade) {
    var msg = "Merhaba, UZM Dental " + (productTitle || "ürünleriniz");
    if (thickness || shade) {
      msg += " (" + [thickness, shade].filter(Boolean).join(" / ") + ")";
    }
    msg += " hakkında bilgi almak istiyorum.";
    return WA_BASE + "?text=" + encodeURIComponent(msg);
  }

  function applyVerifiedWhatsAppAndContact() {
    // 1. Üst menüdeki veya sayfadaki "Numune & Teklif" / "Teklif Al" butonlarını "WhatsApp Bilgi Al" yap ve doğrudan wa.me/905426460220 bağla
    document.querySelectorAll("button, a").forEach(function(el) {
      var t = (el.textContent || "").trim();
      if (t.indexOf("Numune & Teklif") !== -1 || t === "Teklif Al" || t === "Teklif Listesine Ekle" || t.indexOf("Numune / Teklif") !== -1) {
        if (!el.closest("#uzmUniversalModal")) {
          el.innerHTML = "💬 WhatsApp Bilgi Al";
          if (el.tagName === "A") {
            el.setAttribute("href", WA_BASE + "?text=" + encodeURIComponent("Merhaba, UZM Dental ürünleri hakkında bilgi almak istiyorum."));
            el.setAttribute("target", "_blank");
            el.setAttribute("rel", "noopener");
            el.removeAttribute("data-uzm-modal");
          } else {
            el.removeAttribute("data-uzm-modal");
            el.onclick = function(ev) {
              ev.preventDefault();
              ev.stopPropagation();
              window.open(WA_BASE + "?text=" + encodeURIComponent("Merhaba, UZM Dental ürünleri hakkında bilgi almak istiyorum."), "_blank", "noopener");
            };
          }
        }
      }
    });

    // 2. Modal içindeki 4. sekmeyi ve alt bardaki butonu "💬 WhatsApp ile Bilgi Al" yap
    var tab4 = document.querySelector('#uzmUniversalModal .uzm-modal-tabbar [data-uzm-tab="quote"]');
    if (tab4) {
      tab4.innerHTML = "4. WhatsApp Bilgi Al &amp; İletişim";
    }
    var footerQuoteBtn = document.querySelector('#uzmUniversalModal .uzm-modal-footer [data-uzm-tab="quote"]');
    if (footerQuoteBtn) {
      var pid = window.__uzmActiveProductKey || "5d-ml";
      var p = (window.UZM_PRODUCT_DATABASE && window.UZM_PRODUCT_DATABASE[pid]) || { title: "ZirCrown Zirkonyum Disk" };
      footerQuoteBtn.innerHTML = "💬 WhatsApp ile Bilgi Al (" + VERIFIED_PHONE + ") →";
      footerQuoteBtn.style.background = "linear-gradient(180deg, #22C55E 0%, #16A34A 48%, #15803D 100%)";
      footerQuoteBtn.style.borderColor = "#15803D";
      footerQuoteBtn.onclick = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        window.open(buildWhatsAppLink(p.title, "", ""), "_blank", "noopener");
      };
    }
  }

  // 3. Modal açıkken sol sütuna ve 4. sekmeye Gökhan Bey'in doğrulanmış adres, telefon ve WhatsApp Bilgi Al kartını yerleştir
  var prevEnhance2 = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    if (typeof prevEnhance2 === "function") {
      prevEnhance2(productId, tabName);
    }
    applyVerifiedWhatsAppAndContact();

    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body || !window.UZM_PRODUCT_DATABASE) return;
    var p = window.UZM_PRODUCT_DATABASE[productId] || window.UZM_PRODUCT_DATABASE["5d-ml"];
    var tab = window.__uzmActiveTab || tabName || "specs";

    // Sol sütuna doğrudan yeşil "💬 WhatsApp ile Bilgi Al" butonu ekle
    var leftCol = body.querySelector(".uzm-2col-left-sidebar");
    if (leftCol && !leftCol.querySelector(".uzm-wa-direct-btn")) {
      var waBtn = document.createElement("a");
      waBtn.className = "uzm-pdf-btn uzm-wa-direct-btn";
      waBtn.href = buildWhatsAppLink(p.title, "", "");
      waBtn.target = "_blank";
      waBtn.rel = "noopener";
      waBtn.style.cssText = "justify-content:center;padding:0.65rem;font-size:0.84rem;border-radius:10px;background:linear-gradient(180deg,#22C55E 0%,#16A34A 100%);border:1px solid #15803D;box-shadow:0 6px 16px rgba(22,163,74,0.32),inset 0 1px 1px rgba(255,255,255,0.6);color:#FFFFFF !important;font-weight:800;text-decoration:none;";
      waBtn.innerHTML = "💬 WhatsApp ile Bilgi Al";
      leftCol.appendChild(waBtn);
    }

    // Eğer 4. sekme (quote / WhatsApp Bilgi Al & İletişim) seçiliyse Gökhan Bey'in doğrulanmış iletişim & adres kartını göster!
    if (tab === "quote") {
      var waHref = buildWhatsAppLink(p.title, "", "");
      body.innerHTML =
        '<div class="uzm-2col-clean-card" style="max-width:780px;margin:0 auto;padding:1.5rem;">' +
          '<h4 style="font-size:1.1rem;margin-bottom:1rem;"><span>💬 ' + p.title + ' — WhatsApp Bilgi Hattı &amp; Kurumsal İletişim</span><span style="color:#16A34A;font-size:0.8rem;font-weight:800;">DOĞRULANMIŞ KURUMSAL HAT</span></h4>' +
          '<p style="color:#334155;font-size:0.92rem;line-height:1.6;margin-bottom:1.2rem;">Seçtiğiniz ürünün mevcut stok durumu, ölçü/renk varyantları, teknik spesifikasyonları ve parti (LOT) bilgileri için doğrudan WhatsApp hattımızdan veya kurumsal iletişim kanallarımızdan anında bilgi alabilirsiniz:</p>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:0.85rem;margin-bottom:1.25rem;">' +
            '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:14px;padding:1rem;">' +
              '<small style="display:block;font-size:0.7rem;font-weight:800;color:#15803D;text-transform:uppercase;margin-bottom:0.25rem;">WHATSAPP &amp; TELEFON HATTI</small>' +
              '<strong style="font-family:JetBrains Mono,monospace;font-size:1.1rem;color:#06162E;display:block;margin-bottom:0.4rem;">' + VERIFIED_PHONE + '</strong>' +
              '<a href="' + waHref + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.4rem;background:#16A34A;color:#fff;padding:0.5rem 0.9rem;border-radius:8px;font-weight:700;font-size:0.8rem;text-decoration:none;">💬 WhatsApp ile Bilgi Al →</a>' +
            '</div>' +
            '<div style="background:#F0F9FF;border:1.5px solid #7DD3FC;border-radius:14px;padding:1rem;">' +
              '<small style="display:block;font-size:0.7rem;font-weight:800;color:#0369A1;text-transform:uppercase;margin-bottom:0.25rem;">KURUMSAL E-POSTA</small>' +
              '<strong style="font-family:JetBrains Mono,monospace;font-size:0.95rem;color:#06162E;display:block;margin-bottom:0.4rem;">' + VERIFIED_MAIL + '</strong>' +
              '<a href="mailto:' + VERIFIED_MAIL + '?subject=' + encodeURIComponent(p.title + ' Bilgi Talebi') + '" style="display:inline-flex;align-items:center;gap:0.4rem;background:#0284C7;color:#fff;padding:0.5rem 0.9rem;border-radius:8px;font-weight:700;font-size:0.8rem;text-decoration:none;">✉️ E-posta Gönder →</a>' +
            '</div>' +
          '</div>' +
          '<div style="background:#F8FAFC;border:1px solid #CBD5E1;border-radius:12px;padding:0.9rem 1.1rem;font-size:0.88rem;color:#1E293B;">' +
            '<strong style="color:#06162E;display:block;margin-bottom:0.2rem;">📍 Merkez Adres (UZM Dental):</strong>' +
            '<span>' + VERIFIED_ADDR + '</span>' +
          '</div>' +
        '</div>';
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyVerifiedWhatsAppAndContact);
  } else {
    applyVerifiedWhatsAppAndContact();
  }
})();

/* === ATLAS WEB FAZ-15: 8 ALT SAYFA & 45 HTML DERİN SENKRON MOTORU (?v=20261106-1605) === */
(function() {
  "use strict";

  var LEGACY_IMG_FIX = {
    "/images/products/5d_ml_disk.png": "/uploads/uzm_zircrown_5d_ml_disc.png",
    "/images/products/4d_pro_ml_disk.jpg": "/uploads/uzm_zircrown_4d_ml_disc.png",
    "/images/products/3d_pro_ml_disk.png": "/uploads/uzm_zircrown_3d_pro_disc.png",
    "/images/products/3d_pro_kutu_set.jpg": "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
    "/images/products/3d_ml_disk.jpg": "/uploads/uzm_zircrown_3d_ml_disc.png",
    "/images/products/st_ml_disk.jpg": "/uploads/uzm_zircrown_st_ml_disc.png",
    "/images/products/ht_beyaz_disk.png": "/uploads/uzm_zircrown_ht_disc.png",
    "/images/products/ht_hizli_sinter_disk.png": "/uploads/uzm_zircrown_ut_disc.png",
    "/images/products/pmma_monolayer_disk.jpg": "/uploads/pmma_brosur_2026/uzm_pmma_p2_monolayer_disc.png",
    "/images/products/pmma_multilayer_disk.jpg": "/uploads/pmma_brosur_2026/uzm_pmma_p3_multilayer_disc.png",
    "/images/products/pmma_clear_splint_disk.jpg": "/uploads/pmma_brosur_2026/uzm_pmma_p1_hero_3discs.png",
    "/images/products/pmma_xray_disk.jpg": "/uploads/pmma_brosur_2026/uzm_pmma_p4_xray_disc.png",
    "/images/products/endo_gutta_percha_points.jpg": "/uploads/uzm_gp_04_box.png",
    "/images/products/endo_paper_points.jpg": "/uploads/uzm_pp_04_box.png",
    "/images/products/endo_gutta_corrector.jpg": "/uploads/uzm_gutta_corrector.png",
    "/images/products/endo_niti_rotary_files.jpg": "/uploads/uzm_gp_f_series_box.png"
  };

  function resolveSubpageCardProductKey(el) {
    if (!el) return "5d-ml";
    var pid = el.getAttribute("data-product-id") || el.getAttribute("data-id") || el.getAttribute("data-series") || "";
    if (pid && window.UZM_PRODUCT_DATABASE && window.UZM_PRODUCT_DATABASE[pid]) return pid;
    var txt = (el.textContent || "").toLowerCase();
    if (txt.indexOf("hızlı") !== -1 || txt.indexOf("fast") !== -1) return "3d-pro-fast";
    if (txt.indexOf("5d") !== -1) return "5d-ml";
    if (txt.indexOf("4d") !== -1) return "4d-ml";
    if (txt.indexOf("3d-pro") !== -1 || txt.indexOf("3d pro") !== -1) return "3d-pro-ml";
    if (txt.indexOf("3d-ml") !== -1 || txt.indexOf("3d ml") !== -1) return "3d-ml";
    if (txt.indexOf("st-ml") !== -1 || txt.indexOf("st ml") !== -1) return "st-ml";
    if (txt.indexOf("ut-ml") !== -1 || txt.indexOf("ut ml") !== -1 || txt.indexOf("ut-c") !== -1 || txt.indexOf("ultra") !== -1) return "ht-fast";
    if (txt.indexOf("ht") !== -1) return "ht-white";
    if (txt.indexOf("x-ray") !== -1 || txt.indexOf("radyoopak") !== -1) return "pmma-xray";
    if (txt.indexOf("clear") !== -1 || txt.indexOf("splint") !== -1 || txt.indexOf("şeffaf") !== -1) return "pmma-clear";
    if (txt.indexOf("multilayer") !== -1 && txt.indexOf("pmma") !== -1) return "pmma-multi";
    if (txt.indexOf("pmma") !== -1 || txt.indexOf("monolayer") !== -1) return "pmma-mono";
    if (txt.indexOf("corrector") !== -1 || txt.indexOf("cetvel") !== -1 || txt.indexOf("kesici") !== -1) return "endo-corrector";
    if (txt.indexOf(".03") !== -1 && txt.indexOf("gutta") !== -1) return "gutta-03";
    if (txt.indexOf(".02") !== -1 && txt.indexOf("gutta") !== -1) return "gutta-02";
    if (txt.indexOf("f serisi") !== -1 && txt.indexOf("gutta") !== -1) return "gutta-f";
    if (txt.indexOf("p serisi") !== -1 && txt.indexOf("gutta") !== -1) return "gutta-p";
    if (txt.indexOf("x serisi") !== -1 && txt.indexOf("gutta") !== -1) return "gutta-x";
    if (txt.indexOf("f, p") !== -1 || txt.indexOf("f/p/x") !== -1) return "paper-fpx";
    if (txt.indexOf(".06") !== -1 && txt.indexOf("paper") !== -1) return "paper-06";
    if (txt.indexOf(".04") !== -1 && txt.indexOf("paper") !== -1) return "paper-04";
    if (txt.indexOf(".02") !== -1 && txt.indexOf("paper") !== -1) return "paper-02";
    if (txt.indexOf("paper") !== -1 || txt.indexOf("kağıt") !== -1 || txt.indexOf("emici") !== -1) return "endo-paper";
    if (txt.indexOf("niti") !== -1 || txt.indexOf("eğe") !== -1 || txt.indexOf("rotary") !== -1) return "endo-files";
    if (txt.indexOf("gutta") !== -1 || txt.indexOf("endo") !== -1) return "endo-gutta";
    return "5d-ml";
  }

  function syncAllSubpagesAndCards() {
    var db = window.UZM_PRODUCT_DATABASE || {};

    // 1. Heal any broken or legacy image src across all pages
    document.querySelectorAll("img").forEach(function(img) {
      var src = (img.getAttribute("src") || "").split("?")[0];
      if (LEGACY_IMG_FIX[src]) {
        img.setAttribute("src", LEGACY_IMG_FIX[src]);
      }
      img.addEventListener("error", function() {
        if (!img.getAttribute("data-fallback-applied")) {
          img.setAttribute("data-fallback-applied", "1");
          img.setAttribute("src", "/uploads/uzm_zircrown_5d_ml_disc.png");
        }
      });
    });

    // 2. Ensure every product card on every subpage (urunler.html, zirkonya.html, pmma.html, endodonti.html, etc.) has:
    //    - Genuine extracted PDF product image
    //    - No duplicate topline header
    //    - Clean single CTA button ("Ürünü & Teknik Föyü İncele →") that opens the 1120px x 85vh 2-column modal
    var cards = document.querySelectorAll(".uzm-product-card, .uzm-endo-card, .uzm-pmma-card, .uzm-zirconia-card");
    cards.forEach(function(card) {
      var key = resolveSubpageCardProductKey(card);
      card.setAttribute("data-product-id", key);
      var p = db[key];
      if (p && p.img) {
        var cImg = card.querySelector("img");
        if (cImg) {
          var currentSrc = (cImg.getAttribute("src") || "").split("?")[0];
          if (!currentSrc || currentSrc.indexOf("/images/products/") === 0 || LEGACY_IMG_FIX[currentSrc]) {
            cImg.setAttribute("src", p.img);
          }
        }
      }

      // Deduplicate card meta if both .uzm-card-topline and .uzm-sagemax-card-meta exist
      var topline = card.querySelector(".uzm-card-topline");
      var sagemaxMeta = card.querySelector(".uzm-sagemax-card-meta");
      if (topline && sagemaxMeta) {
        topline.style.display = "none";
      }

      // Ensure clicking card visual opens modal
      var vis = card.querySelector(".uzm-card-visual, .uzm-endo-visual");
      if (vis) {
        vis.setAttribute("data-uzm-modal", "Teknik Föy");
        vis.setAttribute("data-product-id", key);
        vis.style.cursor = "pointer";
      }

      // Unify card action buttons into 1 sleek Aero CTA button
      var actions = card.querySelector(".uzm-card-actions");
      if (actions) {
        var btns = actions.querySelectorAll("button, a");
        if (btns.length >= 1) {
          btns[0].setAttribute("data-uzm-modal", "Teknik Föy");
          btns[0].setAttribute("data-product-id", key);
          btns[0].classList.add("uzm-modal-trigger", "uzm-btn-primary");
          btns[0].innerHTML = "Ürünü &amp; Teknik Föyü İncele &rarr;";
          for (var b = 1; b < btns.length; b++) {
            btns[b].style.display = "none";
          }
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncAllSubpagesAndCards);
  } else {
    syncAllSubpagesAndCards();
  }
  setTimeout(syncAllSubpagesAndCards, 180);
})();

/* === ATLAS WEB FAZ-16: KESİN 2-SÜTUN 1120px MODAL & SIFIR IFRAME MOTORU (?v=20261106-1630) === */
(function() {
  "use strict";

  var PDF_SHEET_MAP = {
    "5d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "4d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "3d-pro-ml":    { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf" },
    "3d-pro-fast":  { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf" },
    "3d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "st-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "ht-white":     { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "ht-fast":      { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "pmma-mono":    { spec: "/uploads/pdf_sheets/pmma_brosur_page_2.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_5.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-multi":   { spec: "/uploads/pdf_sheets/pmma_brosur_page_3.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_5.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-clear":   { spec: "/uploads/pdf_sheets/pmma_brosur_page_1.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_5.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-xray":    { spec: "/uploads/pdf_sheets/pmma_brosur_page_4.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_5.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" }
  };

  function getSheets(pid) {
    if (PDF_SHEET_MAP[pid]) return PDF_SHEET_MAP[pid];
    if (pid && pid.indexOf("paper") !== -1) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_4.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_6.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    if (pid && pid.indexOf("corrector") !== -1) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_5.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_6.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    if (pid && (pid.indexOf("gutta") !== -1 || pid.indexOf("endo") !== -1)) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_2.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_3.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    return PDF_SHEET_MAP["5d-ml"];
  }

  window.__uzmEnhanceProg = function(productId, tabName) {
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    var db = window.UZM_PRODUCT_DATABASE || {};
    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    var tab = tabName || window.__uzmActiveTab || "specs";
    var p = db[pid] || db["5d-ml"];
    if (!body || !p) return;

    var sheets = getSheets(pid);
    var isPmma = pid.indexOf("pmma") === 0;
    var isEndo = pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0;

    // Update header thumbnail & texts
    var thumbImg = document.getElementById("uzmModalThumbImg");
    if (thumbImg && p.img) thumbImg.src = p.img;
    var tab4Btn = document.querySelector('#uzmUniversalModal .uzm-modal-tabbar [data-uzm-tab="quote"]');
    if (tab4Btn) tab4Btn.innerHTML = "4. 💬 WhatsApp Bilgi Al";

    var waMsg = "Merhaba UZM Dental, *" + p.title + "* (" + p.sku + ") hakkında bilgi almak istiyorum.";
    var waUrl = "https://wa.me/905426460220?text=" + encodeURIComponent(waMsg);

    // Update footer button to direct WhatsApp link
    var footerBtn = document.querySelector('#uzmUniversalModal .uzm-modal-footer [data-uzm-tab="quote"]');
    if (footerBtn) {
      footerBtn.innerHTML = "💬 WhatsApp ile Bilgi Al (+90 542 646 02 20) &rarr;";
      footerBtn.onclick = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        window.open(waUrl, "_blank", "noopener");
      };
    }

    var thChips = (p.thicknessList || ["98.5 mm"]).map(function(t, idx) {
      return '<button type="button" class="uzm-pill-option' + (idx === 0 ? ' is-selected' : '') + '" data-group="th">' + t + '</button>';
    }).join("");

    var shChips = (p.shadeList || ["A1", "A2", "A3"]).map(function(s, idx) {
      return '<button type="button" class="uzm-pill-option' + (idx === 0 ? ' is-selected' : '') + '" data-group="sh">' + s + '</button>';
    }).join("");

    var leftSidebarHtml =
      '<aside class="uzm-2col-sidebar">' +
        '<div class="uzm-2col-product-imgbox">' +
          '<img src="' + p.img + '" alt="' + p.title + '">' +
        '</div>' +
        '<div>' +
          '<span class="uzm-2col-section-label">1. ÖLÇÜ / SİSTEM SEÇENEKLERİ</span>' +
          '<div class="uzm-2col-chips">' + thChips + '</div>' +
        '</div>' +
        '<div>' +
          '<span class="uzm-2col-section-label">2. RENK / VARYANT SEÇENEKLERİ</span>' +
          '<div class="uzm-2col-chips">' + shChips + '</div>' +
        '</div>' +
        '<div class="uzm-2col-sidebar-actions">' +
          '<a href="' + sheets.pdf + '" target="_blank" rel="noopener" class="uzm-sidebar-pdf-btn">📄 Orijinal PDF Katalog İndir</a>' +
          '<a href="' + waUrl + '" target="_blank" rel="noopener" class="uzm-sidebar-wa-btn">💬 WhatsApp Bilgi Al</a>' +
        '</div>' +
      '</aside>';

    var kpiHtml =
      '<div class="uzm-2col-kpi-grid">' +
        '<div class="uzm-2col-kpi-card kpi-1"><small>OPTİK / ÖZELLİK</small><strong>' + p.translucency + '</strong><span>' + (p.translucencyDetail || '') + '</span></div>' +
        '<div class="uzm-2col-kpi-card kpi-2"><small>DAYANIM / TOLERANS</small><strong>' + p.strength + '</strong><span>' + (p.strengthDetail || '') + '</span></div>' +
        '<div class="uzm-2col-kpi-card kpi-3"><small>SİNTER / AMBALAJ</small><strong>' + p.sinterPeak + '</strong><span>' + (p.lotTrace || '') + '</span></div>' +
      '</div>';

    var rightMainHtml = "";
    if (tab === "specs") {
      var layersHtml = (p.layers || []).map(function(l) {
        return '<div class="uzm-layer-bar-row">' +
          '<strong>' + l.name + ' <em>(' + l.pct + ')</em></strong>' +
          '<div class="uzm-layer-track"><div class="uzm-layer-fill"></div></div>' +
          '<span class="uzm-layer-val">' + l.trans + '</span>' +
          '<span class="uzm-layer-val">' + l.mpa + '</span>' +
        '</div>';
      }).join("");

      var sqlSpecRows = [
        ["Ürün Kodu (SKU) & Kategori", (p.sku || "") + " · " + (p.badge || "")],
        ["Boyut / Kalınlık / Koniklik", (p.thicknessList || []).join(" · ")],
        ["Optik / Yapısal Özellik", (p.translucency || "") + " — " + (p.translucencyDetail || "")],
        ["Mekanik Dayanım / Tolerans", (p.strength || "") + " — " + (p.strengthDetail || "")],
        ["Sinterleme / Klinik Protokol", (p.sinterStandard || p.sinterPeak || "")],
        ["Klinik Endikasyon & Kalite", (p.indication || "") + " (" + (p.lotTrace || "ISO 13485 / CE") + ")"]
      ].map(function(r) {
        return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>";
      }).join("");
      rightMainHtml =
        kpiHtml +
        '<div class="uzm-2col-card-block">' +
          '<span class="uzm-2col-section-label">📊 SQL VERİTABANI TEKNİK SPESİFİKASYON &amp; KLİNİK TABLOSU</span>' +
          '<table class="uzm-2col-spec-table"><tbody>' + sqlSpecRows + '</tbody></table>' +
        '</div>' +
        '<div class="uzm-2col-card-block">' +
          '<span class="uzm-2col-section-label">KATMAN &amp; MUKAVEMET GRADYAN ANALİZİ</span>' +
          layersHtml +
        '</div>' +
        '<div class="uzm-2col-sheets-duo">' +
          '<div class="uzm-2col-sheet-card">' +
            '<div class="uzm-2col-sheet-head"><span>PDF TEKNİK SPESİFİKASYON FÖYÜ</span><a href="' + sheets.spec + '" target="_blank">↗ Büyüt</a></div>' +
            '<img src="' + sheets.spec + '" alt="Teknik Föy">' +
          '</div>' +
          '<div class="uzm-2col-sheet-card">' +
            '<div class="uzm-2col-sheet-head"><span>PDF SİNTERLEME / DETAY TABLOSU</span><a href="' + sheets.sinter + '" target="_blank">↗ Büyüt</a></div>' +
            '<img src="' + sheets.sinter + '" alt="Sinter Eğrisi">' +
          '</div>' +
        '</div>';
    } else if (tab === "sinter") {
      rightMainHtml =
        kpiHtml +
        '<div class="uzm-2col-sheet-card uzm-sheet-large">' +
          '<div class="uzm-2col-sheet-head"><span>RESMİ PDF SİNTERLEME EĞRİSİ &amp; FIRIN PROTOKOLÜ (' + p.sinterPeak + ')</span><a href="' + sheets.sinter + '" target="_blank">↗ Tam Boy Görüntüle</a></div>' +
          '<img src="' + sheets.sinter + '" alt="Sinterleme Eğrisi">' +
        '</div>' +
        '<div class="uzm-2col-kpi-grid">' +
          '<div class="uzm-2col-kpi-card"><small>STANDART PROTOKOL</small><strong>' + (p.sinterStandard || '') + '</strong></div>' +
          '<div class="uzm-2col-kpi-card"><small>HIZLI / KLİNİK PROTOKOL</small><strong>' + (p.sinterFast || '') + '</strong></div>' +
          '<div class="uzm-2col-kpi-card"><small>ENDİKASYON</small><strong>' + (p.indication || '') + '</strong></div>' +
        '</div>';
    } else if (tab === "compare") {
      var cmpKeys = isPmma ? ["pmma-mono", "pmma-multi", "pmma-clear", "pmma-xray"] :
                    (isEndo ? ["gutta-02", "gutta-03", "gutta-04", "gutta-f", "gutta-p", "gutta-x", "paper-04", "endo-corrector"] :
                    ["5d-ml", "4d-ml", "3d-pro-ml", "3d-pro-fast", "3d-ml", "st-ml", "ht-white", "ht-fast"]);
      var rows = cmpKeys.map(function(k) {
        var item = db[k];
        if (!item) return "";
        var activeCls = (k === pid) ? ' class="is-current-row"' : '';
        return '<tr' + activeCls + ' data-switch-pid="' + k + '">' +
          '<td><strong>' + item.title.replace("ZirCrown ", "").replace("UZM Dental ", "") + '</strong></td>' +
          '<td>' + item.translucency + '</td>' +
          '<td>' + item.strength + '</td>' +
          '<td>' + item.sinterPeak + '</td>' +
        '</tr>';
      }).join("");
      rightMainHtml =
        kpiHtml +
        '<div class="uzm-2col-card-block">' +
          '<span class="uzm-2col-section-label">SERİ KARŞILAŞTIRMA MATRİSİ (SATIRA TIKLAYARAK ÜRÜN DEĞİŞTİREBİLİRSİNİZ)</span>' +
          '<table class="uzm-2col-spec-table">' +
            '<thead><tr><th>Ürün / Seri</th><th>Optik / Özellik</th><th>Dayanım / Tolerans</th><th>Sinter / Paket</th></tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
          '</table>' +
        '</div>';
    } else {
      // Tab 4: 💬 WhatsApp Bilgi Al & Doğrulanmış Kütahya İletişim (SIFIR IFRAME!)
      rightMainHtml =
        kpiHtml +
        '<div class="uzm-2col-wa-panel">' +
          '<span class="uzm-wa-badge">DOĞRULANMIŞ KURUMSAL İLETİŞİM &amp; WHATSAPP HATTI</span>' +
          '<h4>' + p.title + ' İçin Hızlı Bilgi Alın</h4>' +
          '<p>Seçtiğiniz ürünün stok durumu, ölçü/renk varyantları ve teknik detayları için doğrudan WhatsApp hattımızdan bilgi alabilirsiniz.</p>' +
          '<div class="uzm-2col-kpi-grid">' +
            '<div class="uzm-2col-kpi-card"><small>WHATSAPP &amp; TELEFON</small><strong><a href="tel:+905426460220">+90 542 646 02 20</a></strong></div>' +
            '<div class="uzm-2col-kpi-card"><small>KURUMSAL E-POSTA</small><strong><a href="mailto:uzmandisdental@gmail.com">uzmandisdental@gmail.com</a></strong></div>' +
            '<div class="uzm-2col-kpi-card"><small>MERKEZ ADRES (KÜTAHYA)</small><strong>Dumlupınar Mah. 2. Sedef Sk. Üstyıldız Sitesi H No:13 A, 43020 Merkez / Kütahya</strong></div>' +
          '</div>' +
          '<div class="uzm-wa-cta-row">' +
            '<a href="' + waUrl + '" target="_blank" rel="noopener" class="uzm-wa-big-btn">💬 WhatsApp ile Bilgi Al (+90 542 646 02 20) &rarr;</a>' +
            '<a href="' + sheets.pdf + '" target="_blank" rel="noopener" class="uzm-pdf-big-btn">📄 Orijinal PDF Katalog İndir</a>' +
          '</div>' +
        '</div>' +
        '<div class="uzm-2col-sheet-card">' +
          '<div class="uzm-2col-sheet-head"><span>ÜRÜN TEKNİK FÖY ÖNİZLEMESİ (' + p.sku + ')</span><a href="' + sheets.spec + '" target="_blank">↗ Tam Ekran Aç</a></div>' +
          '<img src="' + sheets.spec + '" alt="Teknik Föy">' +
        '</div>';
    }

    body.innerHTML =
      '<div class="uzm-2col-grid">' +
        leftSidebarHtml +
        '<div class="uzm-2col-main">' + rightMainHtml + '</div>' +
      '</div>';

    body.querySelectorAll(".uzm-2col-chips .uzm-pill-option").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var grp = btn.getAttribute("data-group");
        body.querySelectorAll('.uzm-2col-chips .uzm-pill-option[data-group="' + grp + '"]').forEach(function(b) {
          b.classList.remove("is-selected");
        });
        btn.classList.add("is-selected");
      });
    });

    body.querySelectorAll("tr[data-switch-pid]").forEach(function(tr) {
      tr.addEventListener("click", function() {
        var newPid = tr.getAttribute("data-switch-pid");
        if (newPid && window.openModalForProduct) {
          window.openModalForProduct(newPid, "specs");
        }
      });
    });
  };
})();

/* === EXACT PDF DISC & BOX IMAGE ENFORCER + URUNLER/INDEX/PMMA CARD FIXER (?v=20261106-1650) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE;
  if (!db) return;

  var exactImgMap = {
    "5d-ml": "/uploads/uzm_zircrown_5d_ml_disc.png",
    "4d-ml": "/uploads/uzm_zircrown_4d_ml_disc.png",
    "3d-pro-ml": "/uploads/uzm_zircrown_3d_pro_disc.png",
    "3d-pro-fast": "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
    "3d-ml": "/uploads/uzm_zircrown_3d_ml_disc.png",
    "st-ml": "/uploads/uzm_zircrown_st_ml_disc.png",
    "ht-white": "/uploads/uzm_zircrown_ut_disc.png",
    "ht-fast": "/uploads/uzm_zircrown_ut_ml_disc.png",
    "pmma-mono": "/uploads/pmma_brosur_2026/uzm_pmma_monolayer_disc.png",
    "pmma-multi": "/uploads/pmma_brosur_2026/uzm_pmma_multilayer.png",
    "pmma-clear": "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
    "pmma-xray": "/uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png",
    "endo-gutta": "/uploads/uzm_gp_04_taper_box.png",
    "gutta-02": "/uploads/uzm_gp_02_taper_box.png",
    "gutta-03": "/uploads/uzm_gp_03_taper_box.png",
    "gutta-04": "/uploads/uzm_gp_04_taper_box.png",
    "gutta-f": "/uploads/uzm_gp_f_series_box.png",
    "gutta-p": "/uploads/uzm_gp_p_series_box.png",
    "gutta-x": "/uploads/uzm_gp_x_series_box.png",
    "endo-paper": "/uploads/uzm_pp_04_taper_box.png",
    "paper-02": "/uploads/uzm_pp_02_taper_box.png",
    "paper-04": "/uploads/uzm_pp_04_taper_box.png",
    "paper-06": "/uploads/uzm_pp_06_taper_box.png",
    "paper-fpx": "/uploads/uzm_pp_f_series_box.png",
    "endo-corrector": "/uploads/uzm_gutta_corrector.png",
    "endo-files": "/uploads/uzm_gp_f_series_box.png"
  };

  for (var k in exactImgMap) {
    if (db[k]) db[k].img = exactImgMap[k];
  }

  // Enrich PMMA products with complete Gökhan Bey brochure specs
  if (db["pmma-mono"]) {
    db["pmma-mono"].title = "UZM Dental Monolayer CAD/CAM PMMA Disk (98mm / 95mm / AG)";
    db["pmma-mono"].sku = "REF: UZM-PMMA-MONO";
    db["pmma-mono"].badge = "CAD/CAM · Monolayer PMMA";
    db["pmma-mono"].translucency = "Homojen Doku · < %0.5 Artık Monomer";
    db["pmma-mono"].strength = "≥ 114 MPa Bükülme Dayanımı";
    db["pmma-mono"].sinterPeak = "98×16/18/20/30 · 95×18 · AG×18";
    db["pmma-mono"].thicknessList = ["98 × 16 mm", "98 × 18 mm", "98 × 20 mm", "98 × 30 mm", "95 × 18 mm", "AG × 18 mm"];
    db["pmma-mono"].shadeList = ["A1", "A2", "A3", "B1", "BL3 (Bleach)", "Clear (Şeffaf)", "Pink (Pembe)"];
  }
  if (db["pmma-multi"]) {
    db["pmma-multi"].title = "UZM Dental Multilayer (5 Katman) Estetik CAD/CAM PMMA Disk";
    db["pmma-multi"].sku = "REF: UZM-PMMA-MULTI";
    db["pmma-multi"].badge = "CAD/CAM · 5 Katman Multilayer PMMA";
    db["pmma-multi"].translucency = "5 Katman Doğal Mine-Dentin Geçişi";
    db["pmma-multi"].strength = "≥ 114 MPa Bükülme Dayanımı";
    db["pmma-multi"].sinterPeak = "98×16/18/20/25 · 95×18 · AG×18";
    db["pmma-multi"].thicknessList = ["98 × 16 mm", "98 × 18 mm", "98 × 20 mm", "98 × 25 mm", "95 × 18 mm", "AG × 18 mm"];
    db["pmma-multi"].shadeList = ["A1", "A2", "A3", "A3.5", "B1", "BL2", "BL3 (Bleach)"];
  }
  if (db["pmma-clear"]) {
    db["pmma-clear"].title = "UZM Dental Clear & Flexible Splint (Şeffaf Gece Plağı) PMMA Disk";
    db["pmma-clear"].sku = "REF: UZM-PMMA-CLEAR";
    db["pmma-clear"].badge = "CAD/CAM · Şeffaf Oklüzal Splint";
    db["pmma-clear"].translucency = "> %91 Optik Şeffaflık · Sararma Yapmaz";
    db["pmma-clear"].strength = "≥ 110 MPa · Kırılma Dirençli";
    db["pmma-clear"].sinterPeak = "98×16/18/20/25 · 95×20";
    db["pmma-clear"].thicknessList = ["98 × 16 mm", "98 × 18 mm", "98 × 20 mm", "98 × 25 mm", "95 × 20 mm"];
    db["pmma-clear"].shadeList = ["Clear (Kristal Şeffaf)"];
  }
  if (db["pmma-xray"]) {
    db["pmma-xray"].title = "UZM Dental X-Ray Radyoopak CAD/CAM PMMA Disk (CBCT & İmplant Rehberi)";
    db["pmma-xray"].sku = "REF: UZM-PMMA-XRAY";
    db["pmma-xray"].badge = "CAD/CAM · >%200 Al Radyoopak PMMA";
    db["pmma-xray"].translucency = "> %200 Al Radyoopasite (CBCT/Panoramik)";
    db["pmma-xray"].strength = "≥ 110 MPa · Yüksek Boyutsal Kararlılık";
    db["pmma-xray"].sinterPeak = "98 × 18 mm · 98 × 20 mm";
    db["pmma-xray"].thicknessList = ["98 × 18 mm", "98 × 20 mm", "95 × 18 mm"];
    db["pmma-xray"].shadeList = ["A1 (Radyoopak)", "A2 (Radyoopak)"];
  }

  function bindAllCardsAndInject4Pmma() {
    // 1. On index.html, ensure #pmmaVitrinSection displays all 4 PMMA cards cleanly!
    var pmmaSec = document.getElementById("pmmaVitrinSection");
    if (pmmaSec && !pmmaSec.getAttribute("data-pmma4-rendered")) {
      pmmaSec.setAttribute("data-pmma4-rendered", "1");
      var gridContainer = pmmaSec.querySelector(".uzm-product-grid, .uzm-pmma-grid, .uzm-grid-2, .uzm-prism-grid") || pmmaSec.querySelector(".uzm-container > div:last-child");
      if (gridContainer) {
        var pmmaKeys = ["pmma-mono", "pmma-multi", "pmma-clear", "pmma-xray"];
        gridContainer.className = "uzm-product-grid";
        gridContainer.innerHTML = pmmaKeys.map(function(k) {
          var p = db[k];
          return '<article class="uzm-product-card" data-product-id="' + k + '">' +
            '<div class="uzm-sagemax-card-meta"><span class="uzm-sagemax-pill">' + p.badge + '</span><span class="uzm-sagemax-sku">' + p.sku + '</span></div>' +
            '<div class="uzm-card-visual" data-uzm-modal="Teknik Föy" data-product-id="' + k + '" style="cursor:pointer;">' +
              '<img class="uzm-card-img" src="' + p.img + '" alt="' + p.title + '" loading="lazy">' +
            '</div>' +
            '<div class="uzm-card-body">' +
              '<h3>' + p.title + '</h3>' +
              '<p class="uzm-card-desc">' + p.indication + '</p>' +
              '<div class="uzm-card-QuickMetrics">' +
                '<div><small>DAYANIM</small><strong class="uzm-metric-val">' + p.strength + '</strong></div>' +
                '<div><small>ÖLÇÜ SİSTEMİ</small><strong class="uzm-metric-val">' + p.sinterPeak + '</strong></div>' +
              '</div>' +
              '<div class="uzm-card-actions">' +
                '<button type="button" class="uzm-btn-primary uzm-modal-trigger" data-uzm-modal="Teknik Föy" data-product-id="' + k + '">Ürünü &amp; Teknik Föyü İncele &rarr;</button>' +
              '</div>' +
            '</div>' +
          '</article>';
        }).join("");
      }
    }

    // 2. On urunler.html / tum-urunlerimiz.html / katalog.html, ensure #pmma-diskler section has all 4 PMMA cards (adding Clear/Splint if only 3 exist) and every .uzm-sql-card & .uzm-block-card opens the modal with the exact product key and PDF disc image!
    var sqlPmmaSec = document.getElementById("pmma-diskler");
    if (sqlPmmaSec) {
      var sqlGrid = sqlPmmaSec.querySelector(".uzm-sql-grid");
      if (sqlGrid && !sqlGrid.querySelector('[data-product-id="pmma-clear"]')) {
        var pc = db["pmma-clear"];
        var art = document.createElement("article");
        art.className = "uzm-sql-card";
        art.setAttribute("data-product-id", "pmma-clear");
        art.innerHTML =
          '<a class="uzm-sql-card-media" href="#pmma-clear" data-uzm-modal="Teknik Föy" data-product-id="pmma-clear"><img src="' + pc.img + '" alt="' + pc.title + '" width="320" height="240"></a>' +
          '<div class="uzm-sql-card-body">' +
            '<span class="uzm-sql-eyebrow">PMMA Diskler</span>' +
            '<h3 id="kart-clear-pmma"><a href="#pmma-clear" data-uzm-modal="Teknik Föy" data-product-id="pmma-clear">Clear &amp; Flexible Splint Şeffaf PMMA</a></h3>' +
            '<dl class="uzm-sql-chips"><div><dt><span>Optik</span></dt><dd><bdi>&gt;%91 Şeffaf</bdi></dd></div><div><dt><span>Dayanım</span></dt><dd><bdi>≥110 MPa</bdi></dd></div><div><dt><span>Ölçüler</span></dt><dd><bdi>98×16/18/20/25 · 95×20</bdi></dd></div></dl>' +
            '<a class="uzm-btn-outline uzm-link-nodecor uzm-sql-card-btn uzm-modal-trigger" href="#pmma-clear" data-uzm-modal="Teknik Föy" data-product-id="pmma-clear">Ürünü &amp; Teknik Föyü İncele &rarr;</a>' +
          '</div>';
        sqlGrid.appendChild(art);
      }
    }

    // 3. Bind ALL .uzm-sql-card and .uzm-block-card elements on every page to their exact product key and clean PDF-extracted image!
    document.querySelectorAll(".uzm-sql-card, .uzm-block-card, .uzm-product-card, .uzm-endo-card").forEach(function(card) {
      // Remove duplicate injected .uzm-sagemax-card-meta inside .uzm-sql-card or .uzm-block-card if the card already has its own eyebrow/top!
      if (card.classList.contains("uzm-sql-card") || card.classList.contains("uzm-block-card")) {
        var dupMeta = card.querySelector(".uzm-sagemax-card-meta");
        if (dupMeta) dupMeta.remove();
      }
      var key = inferProductKeyFromTrigger(card);
      card.setAttribute("data-product-id", key);
      var p = db[key];
      if (p && p.img) {
        var img = card.querySelector("img");
        if (img) img.setAttribute("src", p.img);
      }
      card.querySelectorAll("a, button").forEach(function(btn) {
        var href = btn.getAttribute("href") || "";
        if (href.indexOf("wa.me") !== -1) return;
        btn.setAttribute("data-product-id", key);
        btn.setAttribute("data-uzm-modal", "Teknik Föy");
        btn.classList.add("uzm-modal-trigger");
        if (btn.classList.contains("uzm-sql-card-btn")) {
          btn.innerHTML = "Ürünü &amp; Teknik Föyü İncele &rarr;";
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindAllCardsAndInject4Pmma);
  } else {
    bindAllCardsAndInject4Pmma();
  }
  setTimeout(bindAllCardsAndInject4Pmma, 150);
})();

/* === NOTEBOOKLM ATLAS-WEB-1106-MODULAR-MODAL-BUILD KÖPRÜSÜ (#modalOptik, #modalSinter, #modalB2bPdf, #modalEndo) === */
(function() {
  "use strict";
  // Support direct triggers or hash links for #modalOptik, #modalSinter, #modalB2bPdf, #modalEndo
  var MODULAR_MAP = {
    "modalOptik":  { tab: "specs",   defaultPid: "5d-ml" },
    "modalSinter": { tab: "sinter",  defaultPid: "3d-pro-ml" },
    "modalB2bPdf": { tab: "quote",   defaultPid: "5d-ml" },
    "modalEndo":   { tab: "specs",   defaultPid: "gutta-04" }
  };

  document.addEventListener("click", function(ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest("[data-target-modal], a[href^='#modal']") : null;
    if (!t) return;
    var raw = (t.getAttribute("data-target-modal") || t.getAttribute("href") || "").replace(/^#/, "");
    if (MODULAR_MAP[raw]) {
      ev.preventDefault();
      var cfg = MODULAR_MAP[raw];
      var pid = t.getAttribute("data-product-id") || cfg.defaultPid;
      if (window.openModalForProduct) {
        window.openModalForProduct(pid, cfg.tab);
      }
    }
  });

  window.openModularModal = function(modalId, productId) {
    var cleanId = (modalId || "").replace(/^#/, "");
    var cfg = MODULAR_MAP[cleanId] || { tab: "specs", defaultPid: "5d-ml" };
    if (window.openModalForProduct) {
      window.openModalForProduct(productId || cfg.defaultPid, cfg.tab);
    }
  };
})();



/* === FAZ-17: KESIN URUN ANAHTAR ALIAS KILIDI VE HEADER SENKRONIZASYONU (?v=20261106-1820) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE;
  if (!db) return;
  var aliases = {
    "4d-ml": "4d-pro",
    "4d-pro": "4d-ml",
    "3d-pro-ml": "3d-pro",
    "3d-pro": "3d-pro-ml",
    "3d-pro-fast": "ht-color",
    "fast-3d-pro": "ht-color",
    "ht-color": "3d-pro-fast",
    "st-ml": "st-color",
    "st-color": "st-ml",
    "ht-fast": "st-white",
    "ut-ml": "st-white",
    "st-white": "ht-fast",
    "zircrown-ht": "ht-white",
    "pmma-clear": "pmma-flex",
    "pmma-flex": "pmma-clear",
    "endo-corrector": "endo-files",
    "gutta-corrector": "endo-files",
    "endo-niti": "endo-files",
    "gp-02": "gutta-02",
    "gp-03": "gutta-03",
    "gp-04": "gutta-04",
    "gp-f": "gutta-f",
    "gp-p": "gutta-p",
    "gp-x": "gutta-x",
    "pp-02": "paper-02",
    "pp-04": "paper-04",
    "pp-06": "paper-06",
    "pp-f": "paper-fpx",
    "pp-p": "paper-fpx",
    "pp-x": "paper-fpx"
  };
  for (var k in aliases) {
    var target = aliases[k];
    if (!db[k] && db[target]) {
      db[k] = db[target];
    }
  }

  var prevEnh = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    if (!db[pid] && aliases[pid] && db[aliases[pid]]) {
      pid = aliases[pid];
    }
    window.__uzmActiveProductKey = pid;
    var p = db[pid] || db["5d-ml"];
    if (p) {
      var titleEl = document.getElementById("uzmModalTitle") || document.querySelector("#uzmUniversalModal h2, #uzmUniversalModal h3");
      if (titleEl) titleEl.textContent = p.title;
      var badgeEl = document.getElementById("uzmModalBadge") || document.querySelector("#uzmUniversalModal .uzm-modal-badge");
      if (badgeEl && p.badge) badgeEl.textContent = p.badge;
      var skuEl = document.getElementById("uzmModalSku") || document.querySelector("#uzmUniversalModal .uzm-modal-sku");
      if (skuEl && p.sku) skuEl.textContent = p.sku;
      var thumbEl = document.getElementById("uzmModalThumbImg") || document.querySelector("#uzmUniversalModal .uzm-modal-header img");
      if (thumbEl && p.img) thumbEl.src = p.img;
    }
    if (typeof prevEnh === "function") {
      prevEnh(pid, tabName);
    }
  };
})();


/* === FAZ-18: KATEGORIYE OZEL SEKME & PROTOKOL MOTORU (PMMA & ENDO ICIN SINTERLEME EGRISI KALDIRILDI · SAGEMAX B2B REFERANSI · ?v=20261106-1825) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE || {};

  // Ensure PMMA products have zero "sinterleme" terminology and exact brochure page images
  var pmmaOverrides = {
    "pmma-mono": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_monolayer_disc.png",
      specSheet: "/uploads/pdf_sheets/pmma_brosur_page_2.png",
      protocolSheet: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      kpi3Label: "İŞLEME & SİSTEM UYUMU",
      kpi3Val: "Kuru/Islak Kazıma · Direkt Polisaj",
      protocolTitle: "CAD/CAM Frezeleme (Milling) & Yüksek Parlaklık Polisaj Protokolü",
      protocolCol1Title: "KAZIMA (MILLING) PARAMETRELERİ",
      protocolCol1Val: "5 Eksen Kuru/Islak Frezeleme · Mil Hızı: 18.000–25.000 RPM · Besleme: 1.500–2.200 mm/dk · Basınçlı Hava / Su Soğutma",
      protocolCol2Title: "YÜZEY BİTİM & POLİSAJ",
      protocolCol2Val: "Tungsten Karbit Sprue Kesimi → Orta Grenli Silikon Mölet Ön-Polisaj → Pamuk Çark & Keçe High-Gloss Ayna Parlaklığı (ISO 20795-1 · Artık Monomer <%0.5)"
    },
    "pmma-multi": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_multilayer.png",
      specSheet: "/uploads/pdf_sheets/pmma_brosur_page_3.png",
      protocolSheet: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      kpi3Label: "İŞLEME & KATMAN YAPISI",
      kpi3Val: "Direkt Polisaj · 5 Katman Geçiş",
      protocolTitle: "5 Katman Multilayer CAD/CAM Pozisyonlama & Frezeleme Protokolü",
      protocolCol1Title: "CAM NESTING (DİSK YERLEŞİMİ)",
      protocolCol1Val: "İnsizal uç üst 1/3 şeffaf katmana, kole (servikal) alt 1/3 kroma katmanına gelecek şekilde CAM dizilimi",
      protocolCol2Title: "FREZELEME & POLİSAJ",
      protocolCol2Val: "Isınma ve erimeyi önleyen keskin PMMA freze ucu · Düşük basınçlı keçe polisajı ile doğal mine parlaklığı"
    },
    "pmma-clear": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
      specSheet: "/uploads/pdf_sheets/pmma_brosur_page_4.png",
      protocolSheet: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      kpi3Label: "OPTİK & BİYOLOJİK UYUM",
      kpi3Val: "Direkt Polisaj · Kristal Şeffaf",
      protocolTitle: "Oklüzal Splint / Gece Plağı Frezeleme & Şeffaf Polisaj Protokolü",
      protocolCol1Title: "SPLINT KAZIMA PROTOKOLÜ",
      protocolCol1Val: "Minimum oklüzal kalınlık ≥ 1.2 mm · İç yüzeyde 0.03–0.05 mm siman/oturma boşluğu (offset)",
      protocolCol2Title: "OPTİK KRİSTAL PARLATMA",
      protocolCol2Val: "Akrilik/PMMA ön parlatma lastiği sonrası yüksek parlaklık pastası ile optik cam berraklığı"
    },
    "pmma-flex": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_clear.png",
      specSheet: "/uploads/pdf_sheets/pmma_brosur_page_4.png",
      protocolSheet: "/uploads/pdf_sheets/pmma_brosur_page_1.png",
      kpi3Label: "OPTİK & BİYOLOJİK UYUM",
      kpi3Val: "Direkt Polisaj · Kristal Şeffaf",
      protocolTitle: "Oklüzal Splint / Gece Plağı Frezeleme & Şeffaf Polisaj Protokolü",
      protocolCol1Title: "SPLINT KAZIMA PROTOKOLÜ",
      protocolCol1Val: "Minimum oklüzal kalınlık ≥ 1.2 mm · İç yüzeyde 0.03–0.05 mm siman/oturma boşluğu (offset)",
      protocolCol2Title: "OPTİK KRİSTAL PARLATMA",
      protocolCol2Val: "Akrilik/PMMA ön parlatma lastiği sonrası yüksek parlaklık pastası ile optik cam berraklığı"
    },
    "pmma-xray": {
      img: "/uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png",
      specSheet: "/uploads/pdf_sheets/pmma_brosur_page_5.png",
      protocolSheet: "/uploads/pdf_sheets/pmma_brosur_page_4.png",
      kpi3Label: "RADYOGRAFİK PROTOKOL",
      kpi3Val: "Direkt Polisaj · >%200 Al Radyoopak",
      protocolTitle: "CBCT / Tomografi Radyografik Stent & İmplant Rehberi Protokolü",
      protocolCol1Title: "CBCT ÇEKİM & FREZELEME",
      protocolCol1Val: "Baryum sülfat katkılı homojen yapı sayesinde CBCT taramasında metal saçılması (scatter artefaktı) oluşturmaz",
      protocolCol2Title: "KLİNİK UYGULAMA",
      protocolCol2Val: "İmplant planlama öncesi ağız içi radyografik doğrulama stenti ve marjin sınır takibi"
    }
  };

  var prevEnh18 = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    var tab = tabName || window.__uzmActiveTab || "specs";
    if (typeof prevEnh18 === "function") {
      prevEnh18(pid, tab);
    }

    var isPmma = pid.indexOf("pmma") === 0;
    var isEndo = pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0 || pid.indexOf("gp-") === 0 || pid.indexOf("pp-") === 0;

    // 1. Dynamically update the 2nd tab button label so PMMA and Endodonti NEVER say "Sinterleme Eğrisi"!
    var tab2Btn = document.querySelector('#uzmUniversalModal .uzm-modal-tabbar [data-uzm-tab="sinter"]');
    if (tab2Btn) {
      if (isPmma) {
        tab2Btn.innerHTML = "2. CAD/CAM İşleme &amp; Polisaj Protokolü";
      } else if (isEndo) {
        tab2Btn.innerHTML = "2. Klinik Uygulama &amp; ISO Kalibrasyon";
      } else {
        tab2Btn.innerHTML = "2. Sinterleme Eğrisi &amp; Protokol";
      }
    }

    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;

    // 2. If PMMA, clean up any "Sinter" labels in KPI cards, tables, and sheet previews!
    if (isPmma) {
      var pm = pmmaOverrides[pid] || pmmaOverrides["pmma-mono"];
      var p = db[pid] || {};

      // Fix KPI card 3 label & value
      var kpi3 = body.querySelector(".uzm-2col-kpi-card.kpi-3");
      if (kpi3) {
        var sm = kpi3.querySelector("small");
        var st = kpi3.querySelector("strong");
        if (sm) sm.textContent = pm.kpi3Label;
        if (st) st.textContent = pm.kpi3Val;
      }

      // Fix SQL table row 5 header so it says "CAD/CAM İşleme & Polisaj" instead of "Sinterleme"
      body.querySelectorAll(".uzm-2col-spec-table tr").forEach(function(tr) {
        var th = tr.querySelector("th");
        var td = tr.querySelector("td");
        if (th && th.textContent.indexOf("Sinterleme") !== -1) {
          th.textContent = "CAD/CAM İşleme & Polisaj";
          if (td) td.textContent = pm.protocolCol1Val + " · " + pm.kpi3Val;
        }
      });

      // Fix the 2 sheet cards in Tab 1 (specs) so the 2nd card is NOT "PDF SİNTERLEME TABLOSU" or X-Ray on Monolayer!
      var sheetCards = body.querySelectorAll(".uzm-2col-sheets-duo .uzm-2col-sheet-card");
      if (sheetCards.length >= 2) {
        sheetCards[0].innerHTML =
          '<div class="uzm-2col-sheet-head"><span>PDF ÜRÜN TEKNİK FÖYÜ (' + (p.sku || "PMMA") + ')</span><a href="' + pm.specSheet + '" target="_blank">↗ Büyüt</a></div>' +
          '<img src="' + pm.specSheet + '" alt="PMMA Teknik Föy">';
        sheetCards[1].innerHTML =
          '<div class="uzm-2col-sheet-head"><span>PMMA SERİ &amp; ÖLÇÜ KATALOĞU</span><a href="' + pm.protocolSheet + '" target="_blank">↗ Büyüt</a></div>' +
          '<img src="' + pm.protocolSheet + '" alt="PMMA Katalog Sayfası">';
      }

      // Fix Tab 2 ("sinter" tab slot -> CAD/CAM Milling & Polishing Protocol for PMMA)
      if (tab === "sinter") {
        var mainCol = body.querySelector(".uzm-2col-main");
        if (mainCol) {
          var kpiGrid = mainCol.querySelector(".uzm-2col-kpi-grid");
          var kpiOuter = kpiGrid ? kpiGrid.outerHTML : "";
          mainCol.innerHTML =
            kpiOuter +
            '<div class="uzm-2col-card-block">' +
              '<span class="uzm-2col-section-label">' + pm.protocolTitle + ' (SİNTERLEME GEREKTİRMEZ)</span>' +
              '<table class="uzm-2col-spec-table"><tbody>' +
                '<tr><th>1. Frezeleme (Milling) Devir &amp; Uç</th><td>' + pm.protocolCol1Val + '</td></tr>' +
                '<tr><th>2. Yüzey Bitim &amp; Polisaj</th><td>' + pm.protocolCol2Val + '</td></tr>' +
                '<tr><th>3. Polimerizasyon Yapısı</th><td><strong>Endüstriyel Çapraz Bağlı Polimer</strong> — Yüksek basınç altında homojen ön-polimerize edilmiştir; doğrudan mekanik polisaj ile ayna parlaklığına ulaşır.</td></tr>' +
                '<tr><th>4. Uyumlu CAD/CAM Sistemleri</th><td>Ø 98.5 mm Stepli (Açık Sistem) · Ø 95 mm (Zirkonzahn) · AG (Amann Girrbach)</td></tr>' +
              '</tbody></table>' +
            '</div>' +
            '<div class="uzm-2col-sheet-card uzm-sheet-large">' +
              '<div class="uzm-2col-sheet-head"><span>RESMİ PDF ÜRÜN BROŞÜRÜ &amp; TEKNİK SPESİFİKASYON SAYFASI</span><a href="' + pm.specSheet + '" target="_blank">↗ Tam Boy Görüntüle</a></div>' +
              '<img src="' + pm.specSheet + '" alt="PMMA Broşür Sayfası">' +
            '</div>';
        }
      }
    } else if (isEndo) {
      // Fix Endo KPI card 3 label & Tab 2
      var kpi3E = body.querySelector(".uzm-2col-kpi-card.kpi-3");
      if (kpi3E) {
        var smE = kpi3E.querySelector("small");
        if (smE) smE.textContent = "STERİLİZASYON & PAKET";
      }
      var sheetCardsE = body.querySelectorAll(".uzm-2col-sheets-duo .uzm-2col-sheet-card");
      if (sheetCardsE.length >= 2) {
        var head2 = sheetCardsE[1].querySelector(".uzm-2col-sheet-head span");
        if (head2) head2.textContent = "📐 ISO KONİKLİK & KALİBRASYON TABLOSU";
      }
      if (tab === "sinter") {
        var lgHead = body.querySelector(".uzm-sheet-large .uzm-2col-sheet-head span");
        if (lgHead) lgHead.textContent = "📐 KLİNİK OBTÜRASYON & ISO KALİBRASYON PROTOKOLÜ";
      }
    }
  };
})();


/* === FAZ-19: SAGEMAX ILHAMLI OZGUN UZM DENTAL AERO-SAFIR KIMLIGI, ENDIKASYON ROZETLERI VE CANLI SVG AKIS GRAFIKLERI (?v=20261106-1840) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE || {};

  function buildOriginalWorkflowSvg(pid, p) {
    var isPmma = pid.indexOf("pmma") === 0;
    var isEndo = pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0 || pid.indexOf("gp-") === 0 || pid.indexOf("pp-") === 0;

    if (isPmma) {
      return (
        '<div class="uzm-2col-card-block" style="background:linear-gradient(180deg,#FFFFFF 0%,#F0FDF9 100%) !important;border-color:#6EE7B7 !important;">' +
          '<span class="uzm-2col-section-label" style="color:#047857 !important;">UZM DENTAL CAD/CAM KAZIMA &amp; POLİSAJ AKIŞI (SİNTERLEME YOK)</span>' +
          '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.55rem;margin-top:0.35rem;">' +
            '<div style="background:#FFFFFF;border:1px solid #A7F3D0;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#047857;">01 · CAM DİZİLİM</strong><span style="font-size:0.73rem;color:#1E293B;">Ø98.5 / 95 / AG Blok Yerleşimi</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #A7F3D0;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#047857;">02 · FREZELEME</strong><span style="font-size:0.73rem;color:#1E293B;">18–25k RPM · 1500–2200 mm/dk</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #A7F3D0;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#047857;">03 · ÖN BİTİM</strong><span style="font-size:0.73rem;color:#1E293B;">Tungsten Karbit & Silikon Mölet</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #A7F3D0;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#047857;">04 · AYNA POLİSAJ</strong><span style="font-size:0.73rem;color:#1E293B;">Pamuk Keçe &amp; Yüksek Parlaklık</span></div>' +
          '</div>' +
        '</div>'
      );
    }

    if (isEndo) {
      return (
        '<div class="uzm-2col-card-block" style="background:linear-gradient(180deg,#FFFFFF 0%,#F0F9FF 100%) !important;border-color:#7DD3FC !important;">' +
          '<span class="uzm-2col-section-label">🔬 UZM DENTAL KLİNİK APİKAL KALİBRASYON &amp; OBTÜRASYON ZİNCİRİ</span>' +
          '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.55rem;margin-top:0.35rem;">' +
            '<div style="background:#FFFFFF;border:1px solid #BAE6FD;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#0095C8;">01 · EĞE UYUMU</strong><span style="font-size:0.73rem;color:#1E293B;">.02 / .04 / .06 / F / P / X Seçimi</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #BAE6FD;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#0095C8;">02 · KURULAMA</strong><span style="font-size:0.73rem;color:#1E293B;">%100 Saf Selüloz Paper Point</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #BAE6FD;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#0095C8;">03 · KALİBRASYON</strong><span style="font-size:0.73rem;color:#1E293B;">Corrector ile ±0.02mm Tug-Back</span></div>' +
            '<div style="background:#FFFFFF;border:1px solid #BAE6FD;border-radius:10px;padding:0.55rem;text-align:center;"><strong style="display:block;font-size:0.74rem;color:#0095C8;">04 · HERMETİK DOLUM</strong><span style="font-size:0.73rem;color:#1E293B;">Yüksek Radyoopak Gutta Percha</span></div>' +
          '</div>' +
        '</div>'
      );
    }

    var peak = (p && p.sinterPeak) ? p.sinterPeak : "1480°C – 1500°C";
    return (
      '<div class="uzm-2col-card-block" style="background:linear-gradient(180deg,#FFFFFF 0%,#F0F9FF 100%) !important;border-color:#7DD3FC !important;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">' +
          '<span class="uzm-2col-section-label" style="margin:0 !important;">UZM DENTAL ÖZGÜN SİNTERLEME TERMAL PROFİLİ (' + peak + ')</span>' +
          '<span style="font-size:0.72rem;font-weight:800;color:#45A287;background:#ECFDF5;padding:0.2rem 0.55rem;border-radius:999px;border:1px solid #A7F3D0;">CIP İZOSTATİK PRES · ISO 6872</span>' +
        '</div>' +
        '<svg viewBox="0 0 640 120" style="width:100%;height:auto;max-height:115px;background:#FFFFFF;border:1px solid #E0F2FE;border-radius:10px;padding:6px;">' +
          '<defs><linearGradient id="uzmSinterGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0095C8"/><stop offset="55%" stop-color="#0284C7"/><stop offset="75%" stop-color="#45A287"/><stop offset="100%" stop-color="#0095C8"/></linearGradient></defs>' +
          '<line x1="40" y1="95" x2="610" y2="95" stroke="#CBD5E1" stroke-width="1"/>' +
          '<polyline fill="none" stroke="url(#uzmSinterGrad)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="45,92 170,58 290,22 440,22 585,90"/>' +
          '<circle cx="170" cy="58" r="4.5" fill="#0095C8"/><text x="145" y="48" font-size="10" font-weight="700" fill="#0369A1">900°C Ön-Isıtma</text>' +
          '<circle cx="290" cy="22" r="5" fill="#45A287"/><circle cx="440" cy="22" r="5" fill="#45A287"/><text x="310" y="15" font-size="10.5" font-weight="800" fill="#06162E">Tepe: ' + peak + ' (120 dk Tutma)</text>' +
          '<text x="55" y="110" font-size="9.5" fill="#475569">1. Isıtma (8°C/dk)</text><text x="295" y="110" font-size="9.5" fill="#047857" font-weight="700">2. Kristal Yoğunlaşma Fazı</text><text x="485" y="110" font-size="9.5" fill="#475569">3. Kontrollü Soğutma</text>' +
        '</svg>' +
      '</div>'
    );
  }

  var prevEnh19 = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    var tab = tabName || window.__uzmActiveTab || "specs";
    if (typeof prevEnh19 === "function") {
      prevEnh19(pid, tab);
    }
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;
    var mainCol = body.querySelector(".uzm-2col-main");
    if (!mainCol) return;
    var p = db[pid] || db["5d-ml"];

    // Insert the original UZM Dental SVG workflow / thermal profile right after KPI cards on specs & sinter tabs!
    if ((tab === "specs" || tab === "sinter") && !mainCol.querySelector(".uzm-ozgun-workflow-block")) {
      var wrap = document.createElement("div");
      wrap.className = "uzm-ozgun-workflow-block";
      wrap.innerHTML = buildOriginalWorkflowSvg(pid, p);
      var kpi = mainCol.querySelector(".uzm-2col-kpi-grid");
      if (kpi && kpi.nextSibling) {
        mainCol.insertBefore(wrap, kpi.nextSibling);
      } else {
        mainCol.appendChild(wrap);
      }
    }
  };
})();


/* === FAZ-20: 76 KAYNAK DERIN ARASTIRMA SENTEZI — FDA/ISO SERTIFIKA KALKANI VE DINAMIK WHATSAPP VARYANT PAKETLEYICI (?v=20261106-1855) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE || {};

  function getInternationalCertBadge(pid) {
    if (pid.indexOf("pmma") === 0) {
      return "ISO 20795-1 Type 3/5 · FDA 21 CFR 872.3760 · Artık Monomer <%0.5 · Su Emilimi ≤20 µg/mm³";
    }
    if (pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0 || pid.indexOf("gp-") === 0 || pid.indexOf("pp-") === 0) {
      return "ISO 6877 / ISO 3630-1 · ±0.02 mm Lazer Kalibrasyon · Kadmiyumsuz Biyouyumlu Formül";
    }
    return "ISO 6872 Seramik Standardı · CIP Soğuk İzostatik Pres · Yoğunluk ≥6.05 g/cm³ · Sertlik Hv10 1250";
  }

  function updateWhatsAppLinksWithSelectedVariants(pid) {
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;
    var p = db[pid] || db["5d-ml"] || { title: "UZM Dental Ürün", sku: "REF-UZM" };
    var selTh = body.querySelector('.uzm-2col-chips .uzm-pill-option.is-selected[data-group="th"]');
    var selSh = body.querySelector('.uzm-2col-chips .uzm-pill-option.is-selected[data-group="sh"]');
    var thTxt = selTh ? selTh.textContent.trim() : "";
    var shTxt = selSh ? selSh.textContent.trim() : "";
    var msg = "Merhaba UZM Dental, *" + p.title + "* (" + (p.sku || "") + ")" +
              (thTxt ? " | Ölçü: *" + thTxt + "*" : "") +
              (shTxt ? " | Renk/Varyant: *" + shTxt + "*" : "") +
              " hakkında bilgi almak istiyorum.";
    var waUrl = "https://wa.me/905426460220?text=" + encodeURIComponent(msg);

    document.querySelectorAll("#uzmUniversalModal .uzm-sidebar-wa-btn, #uzmUniversalModal .uzm-wa-big-btn").forEach(function(a) {
      a.setAttribute("href", waUrl);
    });
    var footerBtn = document.querySelector('#uzmUniversalModal .uzm-modal-footer [data-uzm-tab="quote"]');
    if (footerBtn) {
      footerBtn.onclick = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        window.open(waUrl, "_blank", "noopener");
      };
    }
  }

  var prevEnh20 = window.__uzmEnhanceProg;
  window.__uzmEnhanceProg = function(productId, tabName) {
    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    var tab = tabName || window.__uzmActiveTab || "specs";
    if (typeof prevEnh20 === "function") {
      prevEnh20(pid, tab);
    }
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    if (!body) return;

    // Update footer left certification text dynamically per category (ISO 6872 / ISO 20795-1 / ISO 6877)
    var footerNote = document.querySelector("#uzmUniversalModal .uzm-modal-footer-note, #uzmUniversalModal .uzm-modal-footer span");
    if (footerNote) {
      footerNote.textContent = getInternationalCertBadge(pid);
    }

    // Bind variant chip clicks so selecting any thickness or shade updates the WhatsApp link live!
    body.querySelectorAll(".uzm-2col-chips .uzm-pill-option").forEach(function(chip) {
      chip.addEventListener("click", function() {
        setTimeout(function() { updateWhatsAppLinksWithSelectedVariants(pid); }, 10);
      });
    });
    updateWhatsAppLinksWithSelectedVariants(pid);
  };
})();


/* === FAZ-21: NOTEBOOKLM TAB-16 TAM MIMARI KILIDI (310px Sol Vitrin + 810px Sag Kokpit + Brasseler USA PMMA + CIP 6.05 + ISO 6877) (?v=20261106-1915) === */
(function() {
  var db = window.UZM_PRODUCT_DATABASE || {};

  // Enrich PMMA products with exact NotebookLM Tab 16 constants (ISO 20795-1 Type 3, >=100/110 MPa, >=22 HV Vickers, <=20 ug/mm3, <%0.5 monomer, >%91 optic, >%200 Al, 98x16/18/20/30 & 95x18 mm)
  var pmmaSpecs = {
    "pmma-mono": {
      translucency: "VITA 16 Monokromatik (A1–D4)",
      flexural: "≥ 100 MPa (ISO 20795-1 Type 3) · ≥ 22 HV Vickers",
      process: "18.000–25.000 RPM Frezeleme + Brasseler USA Polisaj (Direkt Polisajlı)",
      indication: "Uzun Süreli Geçici Kron/Köprü · Su Emilimi ≤20 µg/mm³ · Artık Monomer <%0.5",
      thicknesses: ["98×16 mm", "98×18 mm", "98×20 mm", "98×30 mm", "95×18 mm"]
    },
    "pmma-multi": {
      translucency: "5 Katman Doğal Kroma & İnsizal Geçiş",
      flexural: "≥ 110 MPa (ISO 20795-1) · ≥ 22 HV Vickers",
      process: "18.000–25.000 RPM Frezeleme + Silikon Mölet & Keçe Çark Polisaj (Direkt Polisajlı)",
      indication: "Anterior/Posterior Estetik Geçici · Su Emilimi ≤20 µg/mm³ · Artık Monomer <%0.5",
      thicknesses: ["98×16 mm", "98×18 mm", "98×20 mm", "98×25 mm", "95×18 mm"]
    },
    "pmma-clear": {
      translucency: "> %91 Optik Şeffaflık (Kristal Clear)",
      flexural: "≥ 100 MPa Darbe Dirençli Çapraz Bağlı Polimer",
      process: "18.000–22.000 RPM Frezeleme + Keçe Çark >%91 Optik Parlatma (Direkt Polisajlı)",
      indication: "Bruksizm Oklüzal Splint, Gece Plağı & Cerrahi Guide · FDA 21 CFR 872.3760",
      thicknesses: ["98×16 mm", "98×20 mm", "98×25 mm", "98×30 mm", "95×20 mm"]
    },
    "pmma-xray": {
      translucency: "> %200 Al Alüminyum Eşdeğeri Radyoopasite",
      flexural: "≥ 100 MPa Baryum Sülfat Katkılı Rijit Polimer",
      process: "18.000–24.000 RPM CAD/CAM Frezeleme · Boyutsal Stabil (Direkt Polisajlı)",
      indication: "CBCT / Dental Tomografi Radyografik Stent & İmplant Planlama Rehberi",
      thicknesses: ["98×16 mm", "98×20 mm", "98×25 mm", "95×18 mm"]
    }
  };
  pmmaSpecs["pmma-flex"] = pmmaSpecs["pmma-clear"];

  Object.keys(pmmaSpecs).forEach(function(k) {
    if (db[k]) {
      Object.assign(db[k], pmmaSpecs[k]);
    }
  });

  // Enrich Zirconia products with CIP Physical Constants (Yoğunluk >=6.05 g/cm3, Kırılma Tokluğu 5 MPa.m1/2, Sertlik Hv10 1250)
  ["5d-ml", "4d-pro", "4d-ml", "3d-pro", "3d-pro-ml", "ht-color", "fast-3d-pro", "3d-ml", "st-color", "st-ml", "ht-white", "zircrown-ht", "st-white", "ut-ml"].forEach(function(zk) {
    if (db[zk]) {
      if (db[zk].indication && db[zk].indication.indexOf("6.05 g/cm³") === -1) {
        db[zk].indication += " · Yoğunluk ≥6.05 g/cm³ · Tokluk 5 MPa·m¹/² · Sertlik Hv10 1250";
      }
      db[zk].thicknesses = ["98×10 mm", "98×12 mm", "98×14 mm", "98×16 mm", "98×18 mm", "98×20 mm", "98×25 mm"];
    }
  });

  // Enrich Endodonti products with exact composition (%20 Gutta Perka, %66 ZnO, %11 Ağır Metal Sülfat, 134C Otoklav, CM-Wire %300+)
  Object.keys(db).forEach(function(ek) {
    if (ek.indexOf("gutta-") === 0 || ek.indexOf("gp-") === 0) {
      if (ek === "gutta-corrector") {
        db[ek].translucency = "ISO #20 – #140 (18 Kalibre Apikal Delik)";
        db[ek].flexural = "134°C Otoklavlanabilir · Kobalt / Antrasit Alüminyum";
        db[ek].process = "0–30 mm Lazer Kazıma Cetvel · Apikal 1 mm Hassas Kesim";
      } else if (db[ek].indication && db[ek].indication.indexOf("%66 ZnO") === -1) {
        db[ek].indication += " · %20 Gutta Perka + %66 ZnO + %11 Radyoopak Sülfat (Kadmiyumsuz)";
      }
    } else if (ek.indexOf("paper-") === 0 || ek.indexOf("pp-") === 0) {
      if (db[ek].indication && db[ek].indication.indexOf("18, 19, 20, 22, 24 mm") === -1) {
        db[ek].indication += " · Milimetrik Derinlik Çizgili (18, 19, 20, 22, 24 mm) · Gama Steril";
      }
    } else if (ek === "endo-niti" || ek === "endo-files") {
      db[ek].translucency = "CM-Wire Kontrollü Hafıza Alaşımı (Gold & Blue)";
      db[ek].flexural = "%300+ Döngüsel Yorgunluk Direnci · ISO 3630-1";
      db[ek].process = "300–350 RPM · 1.5–2.5 Ncm Tork · 134°C Otoklav Sterilizasyonu";
    }
  });
})();


/* === FAZ-22: 8 ALT SAYFA MUHENDISLIK MATRISI, STUDIO GALERI 6 FILTRE VE 4 DIL (TR/EN/AR/ZH) RTL KILIDI (?v=20261106-1930) === */
(function() {
  function injectSubpageEngineeringMatrix() {
    var path = (location.pathname || "").toLowerCase();
    if (document.getElementById("uzmSubpageEngMatrix")) return;
    var mainEl = document.querySelector("main") || document.querySelector(".uzm-container")?.parentElement;
    if (!mainEl) return;

    var html = "";
    if (path.indexOf("pmma") !== -1) {
      html = '<section id="uzmSubpageEngMatrix" class="uzm-subpage-matrix-wrap">' +
        '<h3><span></span> UZM CAD/CAM PMMA Serisi — Mühendislik & Biyouyumluluk Matrisi (ISO 20795-1 & FDA 21 CFR 872.3760)</h3>' +
        '<p class="uzm-matrix-sub">Doğrudan mekanik polisajla tamamlanır · 5 Eksenli CAD/CAM Frezeleme (18.000–25.000 RPM) + Brasseler USA Silikon Mölet & Keçe Çark Polisaj Protokolü</p>' +
        '<div style="overflow-x:auto"><table class="uzm-eng-table"><thead><tr>' +
        '<th>Seri</th><th>Optik / Yapı</th><th>Bükülme Direnci</th><th>Biyouyumluluk & Fiziksel Sabitler</th><th>Mevcut Blok Ölçüleri</th><th>Klinik Endikasyon</th>' +
        '</tr></thead><tbody>' +
        '<tr><td><strong>Monolayer PMMA</strong></td><td>VITA 16 Monokromatik</td><td>≥ 100 MPa (ISO 20795-1 Type 3)</td><td>≥22 HV Vickers · Su Emilimi ≤20 µg/mm³ · Monomer &lt;%0.5</td><td>98×16, 18, 20, 30 mm / 95×18 mm</td><td>Uzun Süreli Geçici Kron & Köprü</td></tr>' +
        '<tr><td><strong>Multilayer PMMA</strong></td><td>5 Katman Doğal Kroma Geçişi</td><td>≥ 110 MPa (ISO 20795-1)</td><td>≥22 HV Vickers · Su Emilimi ≤20 µg/mm³ · Monomer &lt;%0.5</td><td>98×16, 18, 20, 25 mm / 95×18 mm</td><td>Anterior Estetik Geçici & Ark</td></tr>' +
        '<tr><td><strong>Clear & Flexible Splint</strong></td><td>&gt; %91 Optik Şeffaflık</td><td>≥ 100 MPa Darbe Dirençli</td><td>FDA 21 CFR 872.3760 · Tatsız/Kokusuz Kristal Polimer</td><td>98×16, 20, 25, 30 mm / 95×20 mm</td><td>Bruksizm Oklüzal Splint & Cerrahi Guide</td></tr>' +
        '<tr><td><strong>X-Ray Radyoopak PMMA</strong></td><td>&gt; %200 Al Radyoopasite</td><td>≥ 100 MPa Baryum Sülfatlı</td><td>CBCT Kesitlerinde Sıfır Artefakt · Boyutsal Stabil</td><td>98×16, 20, 25 mm / 95×18 mm</td><td>Dental Tomografi (CBCT) & İmplant Stenti</td></tr>' +
        '</tbody></table></div></section>';
    } else if (path.indexOf("endodonti") !== -1) {
      html = '<section id="uzmSubpageEngMatrix" class="uzm-subpage-matrix-wrap">' +
        '<h3><span>🔬</span> UZM Klinik Endodonti — ISO 6877 & ISO 3630-1 Kalibrasyon Matrisi</h3>' +
        '<p class="uzm-matrix-sub">±0.02 mm Lazer Çap Toleransı · Kadmiyumsuz Biyouyumlu Formül (%20 Gutta Perka + %66 ZnO + %11 Radyoopak Sülfat) · 134°C Otoklav</p>' +
        '<div style="overflow-x:auto"><table class="uzm-eng-table"><thead><tr>' +
        '<th>Ürün Grubu</th><th>Taper / Koniklik Serileri</th><th>Kalibrasyon & Tolerans</th><th>Materyal / Sterilizasyon</th><th>Klinik Protokol</th>' +
        '</tr></thead><tbody>' +
        '<tr><td><strong>Gutta Percha Points (6 Seri)</strong></td><td>.02 · .03 · .04 · F (F1–F5) · P · X (X1–X3)</td><td>ISO 6877 · ±0.02 mm Lazer Kontrol</td><td>%20 Alfa/Beta GP + %66 ZnO (Kadmiyumsuz)</td><td>Lateral Kondensasyon & Tek Kon Obtürasyon</td></tr>' +
        '<tr><td><strong>Absorbent Paper Points (6 Seri)</strong></td><td>.02 · .04 · .06 · F · P Paper · X</td><td>ISO 6877 · 18, 19, 20, 22, 24 mm Çizgili</td><td>%100 Saf Medikal Selüloz · Gama Steril</td><td>Dağılmayan Yüksek Kapiller Kanal Kurulama</td></tr>' +
        '<tr><td><strong>Gutta Percha Corrector</strong></td><td>ISO #20 – #140 (18 Kalibre Delik)</td><td>0–30 mm Lazer Kazıma Milimetrik Cetvel</td><td>134°C Otoklavlanabilir Kobalt/Antrasit Alüminyum</td><td>Master Kon Apikal Çap & Boy Kalibrasyonu</td></tr>' +
        '<tr><td><strong>Gold & Blue CM-Wire NiTi Eğeler</strong></td><td>SX, S1, S2, F1, F2, F3 (21/25/31 mm)</td><td>ISO 3630-1 · %300+ Döngüsel Yorgunluk Direnci</td><td>CM-Wire Kontrollü Hafıza Alaşımı · 134°C Otoklav</td><td>300–350 RPM · 1.5–2.5 Ncm Tork</td></tr>' +
        '</tbody></table></div></section>';
    }
    if (html) {
      var footer = document.querySelector("footer");
      if (footer && footer.parentNode) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        footer.parentNode.insertBefore(wrapper.firstElementChild, footer);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectSubpageEngineeringMatrix);
  } else {
    injectSubpageEngineeringMatrix();
  }
})();


/* === FAZ-23: ZIRKONYA 8 SERI MATRISI + 4 DIL (TR/EN/AR/ZH) TEKNIK SSS AKORDEONU VE CANLI DIL ANAHTARI (?v=20261106-1945) === */
(function() {
  var UZM_FAQ_I18N = {
    tr: {
      heading: "Sıkça Sorulan Teknik & B2B Sorular (ISO 6872 · ISO 20795-1 · ISO 6877)",
      sub: "76 kaynaklı küresel CAD/CAM, polimer ve endodonti standartlarına dayalı doğrulanmış yanıtlar",
      items: [
        {
          q: "ZirCrown 5D-ML ile 3D-PRO Zirkonyum bloklar arasındaki temel klinik fark nedir?",
          a: "5D-ML 10 katmanlı (%47→%60 translüsensi, 650–950 MPa) yapısıyla anterior estetik ve 3 üyeye kadar köprülerde; 3D-PRO ise 6 katmanlı (%43→%57 translüsensi, 800–1200 MPa) yapısıyla uzun ark ve tam ark implant üstü restorasyonlarda tercih edilir. Her ikisi de CIP (Soğuk İzostatik Pres) ile ≥6.05 g/cm³ yoğunluğa ve Hv10 1250 sertliğe sahiptir."
        },
        {
          q: "PMMA CAD/CAM disklerde ek ısıl işleme ihtiyaç var mıdır?",
          a: "Hayır, PMMA disklerde sinterleme kesinlikle YOKTUR. 5 eksenli CAD/CAM kazıma (18.000–25.000 RPM, 1.500–2.200 mm/dk) sonrasında tungsten karbit freze ile sprue ayrılır ve Brasseler USA protokolüyle (silikon mölet + keçe çark polisajı) >%91 optik şeffaflık elde edilir (ISO 20795-1 Type 3/5, artık monomer <%0.5, su emilimi ≤20 µg/mm³)."
        },
        {
          q: "Gutta Percha ve Paper Point konlarında lazer kalibrasyon toleransı nedir?",
          a: "Tüm Gutta Percha (.02, .03, .04, F, P, X) ve Paper Point (.02, .04, .06, F, P, X) serilerimiz ISO 6877 standardına göre ±0.02 mm optik lazer çap toleransıyla üretilir. Kadmiyumsuz biyouyumlu formüle (%20 Gutta Perka + %66 ZnO + %11 Radyoopak Sülfat) sahiptir."
        },
        {
          q: "UZM Dental B2B numune, MOQ (Minimum Sipariş) ve Kütahya sevkiyat koşulları nasıldır?",
          a: "Zirkonyum ve PMMA CAD/CAM blok numune taleplerinde minimum sipariş (MOQ) sınırı yoktur. Kütahya merkez depomuzdan (Dumlupınar Mah. 2. Sedef Sk. Üstyıldız Sitesi H No:13 A) saat 16:00'ya kadar onaylanan B2B siparişler aynı gün kargoya verilir (+90 542 646 02 20)."
        }
      ]
    },
    en: {
      heading: "Technical & B2B Frequently Asked Questions (ISO 6872 · ISO 20795-1 · ISO 6877)",
      sub: "Verified engineering answers grounded in 76 global CAD/CAM, polymer, and endodontic standards",
      items: [
        {
          q: "What is the clinical difference between ZirCrown 5D-ML and 3D-PRO Zirconia discs?",
          a: "5D-ML features a 10-layer transition (47%→60% translucency, 650–950 MPa) ideal for anterior aesthetics, while 3D-PRO offers a 6-layer gradient (43%→57% translucency, 800–1200 MPa) engineered for long-span and full-arch bridges (CIP density ≥6.05 g/cm³, hardness Hv10 1250)."
        },
        {
          q: "How is surface polishing performed on PMMA CAD/CAM discs after milling?",
          a: "After 5-axis dry/wet milling (18,000–25,000 RPM), >91% optical clarity is achieved directly using single-flute tungsten carbide burs followed by a soft muslin buffing wheel and acrylic polishing paste at 5,000–8,000 RPM."
        },
        {
          q: "What is the laser calibration tolerance for Gutta Percha and Paper Points?",
          a: "Apical tip diameters are calibrated by optical lasers within ±0.02 mm tolerance per ISO 6877, utilizing a cadmium-free biocompatible formula (20% Gutta Percha, 66% ZnO, 11% radiopaque sulfate)."
        },
        {
          q: "What is UZM Dental's B2B sample and MOQ policy?",
          a: "There is no MOQ for Zirconia and PMMA evaluation discs. Orders confirmed before 16:00 ship same-day from our Kütahya central logistics hub (+90 542 646 02 20)."
        }
      ]
    },
    ar: {
      heading: "الأسئلة الفنية والتجارية الشائعة (ISO 6872 · ISO 20795-1 · ISO 6877)",
      sub: "إجابات هندسية موثقة وفق معايير CAD/CAM العالمية للزيركونيوم والبوليمر وعلاج الجذور",
      items: [
        {
          q: "ما هو الفرق السريري بين أقراص الزيركونيوم ZirCrown 5D-ML و 3D-PRO؟",
          a: "يتميز 5D-ML بـ 10 طبقات (شفافية 47%–60%، قوة 650–950 MPa) للتجميل الأمامي، بينما يوفر 3D-PRO تدرجاً من 6 طبقات (شفافية 43%–57%، قوة 800–1200 MPa) للجسور الطويلة (كثافة ≥6.05 جم/سم³، صلابة Hv10 1250)."
        },
        {
          q: "كيف يتم تلميع أقراص PMMA CAD/CAM بعد التفريز الرقمي؟",
          a: "لا، أقراص PMMA لا تخضع للتلبيد إطلاقاً. بعد التفريز (18,000–25,000 دورة/دقيقة)، يتم التلميع ببروتوكول Brasseler USA لتحقيق شفافية بصرية >91% (ISO 20795-1، مونومر متبقٍ <0.5%)."
        },
        {
          q: "ما هي دقة معايرة الليزر لأقماع الكوتابيركا والورق الماص؟",
          a: "تتم معايرة الأقطار القمية بالليزر الضوئي بدقة ±0.02 مم وفق معيار ISO 6877 بتركيبة حيوية خالية من الكادميوم."
        },
        {
          q: "ما هي سياسة الحد الأدنى للطلب (MOQ) والشحن من مستودع كوتاهيا؟",
          a: "لا يوجد حد أدنى لطلب عينات أقراص الزيركونيوم و PMMA. يتم شحن الطلبات في نفس اليوم من مستودعنا المركزي في كوتاهيا (+90 542 646 02 20)."
        }
      ]
    },
    zh: {
      heading: "技术与 B2B 常见问题解答 (ISO 6872 · ISO 20795-1 · ISO 6877)",
      sub: "基于 76 项全球 CAD/CAM 氧化锆、PMMA 高分子及牙体牙髓标准的权威工程解答",
      items: [
        {
          q: "ZirCrown 5D-ML 与 3D-PRO 氧化锆瓷块的核心临床区别是什么？",
          a: "5D-ML 采用 10 层自然过渡（透光率 47%→60%，强度 650–950 MPa），专为前牙美学设计；3D-PRO 采用 6 层渐变（透光率 43%→57%，强度 800–1200 MPa），适用于长桥及全口种植修复（CIP 冷等静压密度 ≥6.05 g/cm³，维氏硬度 Hv10 1250）。"
        },
        {
          q: "PMMA CAD/CAM 树脂盘需要结晶烧结炉吗？",
          a: "不需要，PMMA 盘严禁烧结。经五轴切削（18,000–25,000 RPM）后，采用 Brasseler USA 硅胶磨头与棉轮抛光协议即可达到 >91% 光学透明度（符合 ISO 20795-1，残留单体 <0.5%，吸水率 ≤20 µg/mm³）。"
        },
        {
          q: "牙胶尖与吸潮纸尖的激光校准公差是多少？",
          a: "所有锥度系列均按 ISO 6877 标准经光学激光逐支检测，尖端直径公差严格控制在 ±0.02 mm 以内，采用无镉生物相容配方。"
        },
        {
          q: "UZM Dental 的 B2B 样品及最低起订量 (MOQ) 政策是什么？",
          a: "氧化锆与 PMMA 测试瓷块无最低起订量限制。库塔希亚中央仓库当日发货（WhatsApp: +90 542 646 02 20）。"
        }
      ]
    }
  };

  function injectZirkonyaMatrixAndGlobalFAQ(lang) {
    var activeLang = (lang || document.documentElement.lang || "tr").toLowerCase().slice(0, 2);
    if (!UZM_FAQ_I18N[activeLang]) activeLang = "tr";
    if (activeLang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }

    var path = (location.pathname || "").toLowerCase();
    var footer = document.querySelector("footer");
    if (!footer || !footer.parentNode) return;

    // 1. Ensure Zirkonya 8-Series Matrix on zirkonya.html
    if (path.indexOf("zirkonya") !== -1 && !document.getElementById("uzmSubpageEngMatrix")) {
      var zSec = document.createElement("section");
      zSec.id = "uzmSubpageEngMatrix";
      zSec.className = "uzm-subpage-matrix-wrap";
      zSec.innerHTML =
        '<h3><span></span> UZM ZirCrown 8 Seri — ISO 6872 Optik & Mekanik Karşılaştırma Matrisi</h3>' +
        '<p class="uzm-matrix-sub">CIP Soğuk İzostatik Pres · Yoğunluk ≥6.05 g/cm³ · Kırılma Tokluğu 5 MPa·m¹/² · Vickers Sertliği Hv10 1250 · Açık Sistem 98.5 mm (10–25 mm)</p>' +
        '<div style="overflow-x:auto"><table class="uzm-eng-table"><thead><tr>' +
        '<th>Seri</th><th>Katman / Yapı</th><th>Translüsensi</th><th>Bükülme Direnci</th><th>Tepe Sinterleme</th><th>Klinik Endikasyon</th>' +
        '</tr></thead><tbody>' +
        '<tr><td><strong>5D-ML Multilayer</strong></td><td>10 Katman (5Y+3Y)</td><td>%47 → %60</td><td>650 – 950 MPa</td><td>1480°C (8°C/dk, 120 dk)</td><td>Anterior Estetik & ≤3 Üye Köprü</td></tr>' +
        '<tr><td><strong>4D-PRO / 4D-ML</strong></td><td>8 Katman Doğal Geçiş</td><td>%45 → %59</td><td>700 – 1000 MPa</td><td>1480°C – 1500°C</td><td>Hibrit Ark & İmplant Üstü</td></tr>' +
        '<tr><td><strong>3D-PRO Multilayer</strong></td><td>6 Katman Multilayer</td><td>%43 → %57</td><td>800 – 1200 MPa</td><td>1500°C (Standart/Hızlı)</td><td>Tam Ark & Uzun Köprü Gövdesi</td></tr>' +
        '<tr><td><strong>Fast 3D-PRO (HT-Color)</strong></td><td>Hızlı Sinter Multilayer</td><td>%43 → %55</td><td>800 – 1200 MPa</td><td>1510°C Hızlı Sinter</td><td>Aynı Gün Chairside & Laboratuvar</td></tr>' +
        '<tr><td><strong>3D-ML</strong></td><td>Laboratuvar Standardı</td><td>%43 → %46</td><td>900 – 1200 MPa</td><td>1500°C</td><td>Posterior Kron & Çok Üyeli Köprü</td></tr>' +
        '<tr><td><strong>ST-ML / ST-Color</strong></td><td>Süper Translüsent</td><td>%43 Homojen</td><td>1200 MPa</td><td>1500°C – 1530°C</td><td>Monolitik Tam Anatomik Posterior</td></tr>' +
        '<tr><td><strong>ZirCrown HT (HT-White)</strong></td><td>Yüksek Direnç Altyapı</td><td>%41 – %43 Opak</td><td>1200 – 1300 MPa</td><td>1500°C – 1530°C</td><td>Uzun Köprü Altyapı & Maskeleme</td></tr>' +
        '<tr><td><strong>UT-ML (ST-White)</strong></td><td>Ultra Translüsent</td><td>%49 → %60</td><td>650 – 900 MPa</td><td>1480°C</td><td>Lamina Veneer & İnley/Onley</td></tr>' +
        '</tbody></table></div>';
      footer.parentNode.insertBefore(zSec, footer);
    }

    // 2. Render or update 4-Language Technical FAQ Accordion before footer
    var faqData = UZM_FAQ_I18N[activeLang];
    var faqEl = document.getElementById("uzmGlobal4LangFaq");
    if (!faqEl) {
      faqEl = document.createElement("section");
      faqEl.id = "uzmGlobal4LangFaq";
      faqEl.className = "uzm-subpage-matrix-wrap";
      footer.parentNode.insertBefore(faqEl, footer);
    }
    var itemsHtml = faqData.items.map(function(item, idx) {
      return '<details class="uzm-prog-panel"' + (idx === 0 ? " open" : "") + ' style="margin-bottom:10px;border:1px solid #CBD5E1;border-radius:12px;padding:12px 16px;background:#F8FAFC;">' +
        '<summary style="font-weight:800;color:#0F172A;cursor:pointer;font-size:0.94rem;">' + item.q + '</summary>' +
        '<p style="margin:8px 0 0 0;color:#334155;font-size:0.88rem;line-height:1.58;">' + item.a + '</p>' +
        '</details>';
    }).join("");
    faqEl.innerHTML = '<h3>' + faqData.heading + '</h3><p class="uzm-matrix-sub">' + faqData.sub + '</p><div>' + itemsHtml + '</div>';
  }

  // Hook into language buttons ([data-lang], .lang-btn, etc.)
  document.addEventListener("click", function(ev) {
    var lb = ev.target.closest("[data-lang], .uzm-lang-btn");
    if (lb) {
      var l = (lb.getAttribute("data-lang") || lb.textContent || "").trim().toLowerCase().slice(0, 2);
      if (UZM_FAQ_I18N[l]) {
        document.documentElement.lang = l;
        injectZirkonyaMatrixAndGlobalFAQ(l);
      }
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { injectZirkonyaMatrixAndGlobalFAQ(); });
  } else {
    injectZirkonyaMatrixAndGlobalFAQ();
  }
  window.uzmSwitchFaqLang = injectZirkonyaMatrixAndGlobalFAQ;
})();



/* === FAZ-24: SITE-PENCERE-ACILIR-SEKME-1106-1849 — SIRALI 4 AÇILIR SEKME & FERAH PENCERE MİMARİSİ (TR/EN/AR/ZH + RTL) === */
(function() {
  "use strict";

  var SEQ_I18N = {
    tr: {
      tab1: "1- Özet & Endikasyon",
      tab2: "2- ISO Teknik Parametreler",
      tab3: "3- Klinik & Laboratuvar Protokolü",
      tab4: "4- Uyumluluk & Formlar",
      hintOpen: "Açık",
      hintClick: "Tıklayınca Açılır",
      sec1Sub: "Klinik Özet, Endikasyon & Temel Avantajlar",
      sec2Sub: "ISO Standart Tablosu, Katman & Seri Karşılaştırması",
      sec3Sub: "İş Akışı Şeması & Uygulama Parametreleri",
      sec4Sub: "CAD/CAM Sistem Uyumu, PDF Föyler & B2B İletişim",
      guideNote: "Detaylı teknik tablolar, protokol adımları ve resmi PDF formlar için aşağıdaki 2, 3 ve 4 numaralı başlıklara veya üstteki sekmelere tıklayın.",
      lblSize: "1. Ölçü / Sistem Seçimi",
      lblShade: "2. Renk / Varyant Seçimi",
      btnPdf: "📄 PDF Katalog İndir",
      btnWa: "💬 WhatsApp Bilgi Al",
      kpi1Zir: "OPTİK GEÇİRGENLİK",
      kpi2Zir: "BÜKÜLME DAYANIMI",
      kpi3Zir: "SİNTERLEME / İŞLEM",
      kpi1Pmma: "OPTİK / YAPI",
      kpi2Pmma: "BÜKÜLME DİRENCİ",
      kpi3Pmma: "İŞLEME PROTOKOLÜ",
      kpi1Endo: "KONİKLİK / YAPI",
      kpi2Endo: "LAZER KALİBRASYON",
      kpi3Endo: "STERİLİZASYON & PAKET",
      thParam: "Teknik Parametre",
      thVal: "Standart & Değer",
      rSku: "Ürün Kodu (SKU) & Seri",
      rDim: "Mevcut Ölçüler / Koniklik",
      rOpt: "Optik / Yapısal Karakter",
      rStr: "Mekanik Dayanım / Tolerans",
      rPro: "Üretim / Klinik Protokol",
      rInd: "Klinik Endikasyon & Kalite",
      layerTitle: "Katman & Mukavemet Gradyan Analizi (İnsizal → Servikal)",
      cmpTitle: "Aynı Kategorideki Serilerle Hızlı Karşılaştırma (Satıra Tıklayıp Geçiş Yapın)",
      protStep: "Protokol Adımı",
      protDetail: "Uygulama Parametresi & Klinik Not",
      compatTitle: "Uyumlu Sistemler & Kalite Sertifikasyonu",
      docsTitle: "Resmi Teknik Dokümanlar, IFU & PDF Formlar",
      docBrochure: "📥 Resmi Ürün Broşürü (PDF)",
      docSpec: "📐 Teknik Spesifikasyon Föyü (Görsel Aç)",
      docProto: "Protokol & Kalibrasyon Tablosu (Görsel Aç)",
      b2bTitle: "B2B Numune, Fiyat Teklifi & Parti (LOT) Doğrulama",
      b2bDesc: "Seçili ölçü ve renk yapılandırmasıyla doğrudan WhatsApp veya kurumsal e-posta üzerinden anında bilgi alabilirsiniz.",
      subMatrixTitle: "📊 Kategori Mühendislik & Karşılaştırma Matrisi (Tıklayınca Açılır)"
    },
    en: {
      tab1: "1- Summary & Indication",
      tab2: "2- ISO Technical Parameters",
      tab3: "3- Clinical & Lab Protocol",
      tab4: "4- Compatibility & Forms",
      hintOpen: "Open",
      hintClick: "Click to Expand",
      sec1Sub: "Clinical Overview, Indications & Key Benefits",
      sec2Sub: "ISO Standard Table, Layer Gradient & Series Matrix",
      sec3Sub: "Workflow Diagram & Processing Parameters",
      sec4Sub: "CAD/CAM Compatibility, PDF Sheets & B2B Contact",
      guideNote: "Click sections 2, 3, and 4 below or use the top tabs to view ISO technical tables, clinical/lab protocols, and official PDF forms.",
      lblSize: "1. Size / System Selection",
      lblShade: "2. Shade / Variant Selection",
      btnPdf: "📄 Download PDF Catalog",
      btnWa: "💬 WhatsApp Inquiry",
      kpi1Zir: "TRANSLUCENCY",
      kpi2Zir: "FLEXURAL STRENGTH",
      kpi3Zir: "SINTERING / PROCESS",
      kpi1Pmma: "OPTICS / STRUCTURE",
      kpi2Pmma: "FLEXURAL STRENGTH",
      kpi3Pmma: "MILLING PROTOCOL",
      kpi1Endo: "TAPER / GEOMETRY",
      kpi2Endo: "LASER CALIBRATION",
      kpi3Endo: "STERILIZATION & PACK",
      thParam: "Technical Parameter",
      thVal: "Standard & Value",
      rSku: "Product Code (SKU) & Series",
      rDim: "Available Sizes / Tapers",
      rOpt: "Optical / Structural Property",
      rStr: "Mechanical Strength / Tolerance",
      rPro: "Processing / Clinical Protocol",
      rInd: "Clinical Indication & Quality",
      layerTitle: "Layer & Strength Gradient Analysis (Incisal → Cervical)",
      cmpTitle: "Quick Series Comparison Matrix (Click Any Row to Switch)",
      protStep: "Protocol Stage",
      protDetail: "Processing Parameter & Clinical Note",
      compatTitle: "System Compatibility & Quality Certifications",
      docsTitle: "Official Technical Documents, IFU & PDF Forms",
      docBrochure: "📥 Official Product Brochure (PDF)",
      docSpec: "📐 Technical Specification Sheet (Open HD)",
      docProto: "Protocol & Calibration Chart (Open HD)",
      b2bTitle: "B2B Sample, Quote & Batch (LOT) Verification",
      b2bDesc: "Request instant pricing, sample discs, or LOT verification for your selected variant via WhatsApp or corporate email.",
      subMatrixTitle: "📊 Category Engineering & Comparison Matrix (Click to Expand)"
    },
    ar: {
      tab1: "1- الملخص والاستطباب",
      tab2: "2- المعايير الفنية ISO",
      tab3: "3- البروتوكول السريري والمخبري",
      tab4: "4- التوافق والنماذج",
      hintOpen: "مفتوح",
      hintClick: "انقر للفتح",
      sec1Sub: "ملخص سريري، الاستطبابات والمزايا الأساسية",
      sec2Sub: "جدول معايير ISO، تدرج الطبقات ومقارنة الفئات",
      sec3Sub: "مخطط سير العمل ومعايير التطبيق",
      sec4Sub: "توافق CAD/CAM، النماذج الفنية والتواصل التجاري",
      guideNote: "انقر على الأقسام 2 و 3 و 4 أدناه أو علامات التبويب العلوية لعرض جداول ISO الفنية، بروتوكول العمل، وملفات PDF الرسمية.",
      lblSize: "1. اختيار المقاس / النظام",
      lblShade: "2. اختيار اللون / الفئة",
      btnPdf: "📄 تحميل كتالوج PDF",
      btnWa: "💬 استفسار عبر واتساب",
      kpi1Zir: "الشفافية البصرية",
      kpi2Zir: "مقاومة الانحناء",
      kpi3Zir: "التلبيد / المعالجة",
      kpi1Pmma: "البصريات / البنية",
      kpi2Pmma: "مقاومة الانحناء",
      kpi3Pmma: "بروتوكول التفريز",
      kpi1Endo: "التدرج / الشكل",
      kpi2Endo: "معايرة الليزر",
      kpi3Endo: "التعقيم والعبوة",
      thParam: "المعيار الفني",
      thVal: "القيمة والمواصفة",
      rSku: "رمز المنتج (SKU) والفئة",
      rDim: "المقاسات المتاحة",
      rOpt: "الخصائص البصرية والبنيوية",
      rStr: "المتانة الميكانيكية / الدقة",
      rPro: "بروتوكول المعالجة والتطبيق",
      rInd: "الاستطباب السريري والجودة",
      layerTitle: "تحليل تدرج الطبقات والمتانة (القاطع ← العنقي)",
      cmpTitle: "مصفوفة مقارنة السلاسل (انقر للتبديل)",
      protStep: "مرحلة البروتوكول",
      protDetail: "معايير التطبيق والملاحظات",
      compatTitle: "توافق الأنظمة وشهادات الجودة",
      docsTitle: "الوثائق الفنية الرسمية ونماذج PDF",
      docBrochure: "📥 الكتالوج الرسمي للمنتج (PDF)",
      docSpec: "📐 بطاقة المواصفات الفنية (عرض عالي الدقة)",
      docProto: "جدول البروتوكول والمعايرة (عرض عالي الدقة)",
      b2bTitle: "طلب عينات B2B والتحقق من رقم التشغيلة (LOT)",
      b2bDesc: "تواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني الرسمي للحصول على عرض أسعار أو التحقق من LOT.",
      subMatrixTitle: "📊 مصفوفة الهندسة والمقارنة الفنية (انقر للفتح)"
    },
    zh: {
      tab1: "1- 概述与适应症",
      tab2: "2- ISO 技术参数",
      tab3: "3- 临床与技工室协议",
      tab4: "4- 兼容性与表单",
      hintOpen: "已展开",
      hintClick: "点击展开",
      sec1Sub: "临床概述、适应症与核心优势",
      sec2Sub: "ISO 标准参数表、图层渐变与系列对比",
      sec3Sub: "工艺流程图与操作参数",
      sec4Sub: "CAD/CAM 系统兼容、PDF 资料与 B2B 联系",
      guideNote: "请点击下方第 2、3、4 节标题或顶部标签，按序查看 ISO 技术参数表、烧结/切削协议及官方 PDF 表单。",
      lblSize: "1. 尺寸 / 系统选择",
      lblShade: "2. 颜色 / 型号选择",
      btnPdf: "📄 下载 PDF 目录",
      btnWa: "💬 WhatsApp 咨询",
      kpi1Zir: "透光率",
      kpi2Zir: "弯曲强度",
      kpi3Zir: "烧结 / 加工工艺",
      kpi1Pmma: "光学 / 结构",
      kpi2Pmma: "弯曲强度",
      kpi3Pmma: "切削抛光协议",
      kpi1Endo: "锥度 / 几何",
      kpi2Endo: "激光校准公差",
      kpi3Endo: "灭菌与包装",
      thParam: "技术参数",
      thVal: "标准与数值",
      rSku: "产品编码 (SKU) 与系列",
      rDim: "可选尺寸 / 锥度",
      rOpt: "光学 / 结构特性",
      rStr: "机械强度 / 公差",
      rPro: "加工 / 临床协议",
      rInd: "临床适应症与质量标准",
      layerTitle: "多层渐变与强度分析（切端 → 颈部）",
      cmpTitle: "同系列参数对比矩阵（点击行可切换产品）",
      protStep: "协议阶段",
      protDetail: "工艺参数与临床说明",
      compatTitle: "系统兼容性与国际质量认证",
      docsTitle: "官方技术文档、IFU 与 PDF 表单",
      docBrochure: "📥 官方产品手册 (PDF)",
      docSpec: "📐 技术规格表（高清查看）",
      docProto: "烧结/加工协议表（高清查看）",
      b2bTitle: "B2B 样品申请、报价与批次 (LOT) 验证",
      b2bDesc: "您可通过 WhatsApp 或企业邮箱发送所选规格，立即获取 B2B 报价或 LOT 追溯信息。",
      subMatrixTitle: "📊 系列工程参数与对比矩阵（点击展开）"
    }
  };

  function getActiveLang() {
    var l = (document.documentElement.lang || "tr").toLowerCase().slice(0, 2);
    if (!SEQ_I18N[l]) l = "tr";
    return l;
  }

  function normalizeSeqTab(tabName) {
    var t = (tabName || "specs").toLowerCase().trim();
    if (t === "tab1" || t === "specs" || t === "summary") return "specs";
    if (t === "tab2" || t === "compare" || t === "params" || t === "iso") return "compare";
    if (t === "tab3" || t === "sinter" || t === "protocol") return "sinter";
    if (t === "tab4" || t === "quote" || t === "forms") return "quote";
    return "specs";
  }

  var SHEET_LOOKUP = {
    "5d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/5d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "4d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "4d-pro":       { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/4d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "3d-pro-ml":    { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf" },
    "3d-pro":       { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-pro-spec.pdf" },
    "3d-pro-fast":  { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf" },
    "ht-color":     { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve-web.png", pdf: "/assets/gokhan_1106/zirkon_cesitleri/clean/hizli-sinter-curve.pdf" },
    "3d-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/3d-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "st-ml":        { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "st-color":     { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/st-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "ht-white":     { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "ht-fast":      { spec: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-spec-web.png", sinter: "/assets/gokhan_1106/zirkon_cesitleri/clean/ut-ml-sinter-curve-web.png", pdf: "/assets/uzm-zircrown-brosur-2026.pdf" },
    "pmma-mono":    { spec: "/uploads/pdf_sheets/pmma_brosur_page_2.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_1.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-multi":   { spec: "/uploads/pdf_sheets/pmma_brosur_page_3.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_1.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-clear":   { spec: "/uploads/pdf_sheets/pmma_brosur_page_4.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_1.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-flex":    { spec: "/uploads/pdf_sheets/pmma_brosur_page_4.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_1.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" },
    "pmma-xray":    { spec: "/uploads/pdf_sheets/pmma_brosur_page_5.png", sinter: "/uploads/pdf_sheets/pmma_brosur_page_4.png", pdf: "/assets/uzm-pmma-brosur-2026.pdf" }
  };

  function getDocLinks(pid) {
    if (SHEET_LOOKUP[pid]) return SHEET_LOOKUP[pid];
    if (pid && pid.indexOf("paper") !== -1) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_4.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_6.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    if (pid && pid.indexOf("corrector") !== -1) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_5.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_6.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    if (pid && (pid.indexOf("gutta") !== -1 || pid.indexOf("endo") !== -1)) return { spec: "/uploads/pdf_sheets/gutta_brosur_page_2.png", sinter: "/uploads/pdf_sheets/gutta_brosur_page_3.png", pdf: "/assets/uzm-gutta-percha-brosur-2026.pdf" };
    return SHEET_LOOKUP["5d-ml"];
  }

  function buildProtocolVisualHtml(pid, p) {
    var isPmma = pid.indexOf("pmma") === 0;
    var isEndo = pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0 || pid.indexOf("gp-") === 0 || pid.indexOf("pp-") === 0;

    if (isPmma) {
      return (
        '<div class="uzm-seq-proto-steps">' +
          '<div class="uzm-seq-proto-step"><strong>01 · CAM DİZİLİM</strong><span>Ø98.5 / Ø95 / AG Blok Yerleşimi</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>02 · 5 EKSEN KAZIMA</strong><span>18.000–25.000 RPM · 1500–2200 mm/dk</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>03 · ÖN TESVİYE</strong><span>Tungsten Karbit &amp; Silikon Mölet</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>04 · AYNA POLİSAJ</strong><span>Keçe Çark &amp; Akrilik Polisaj Patı (&gt;%91 Işık)</span></div>' +
        '</div>'
      );
    }
    if (isEndo) {
      return (
        '<div class="uzm-seq-proto-steps">' +
          '<div class="uzm-seq-proto-step"><strong>01 · KANAL PREPARASYONU</strong><span>.02 / .04 / .06 / F / P / X Seçimi</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>02 · KANAL KURULAMA</strong><span>%100 Saf Selüloz Steril Paper Point</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>03 · APİKAL KALİBRASYON</strong><span>±0.02 mm Lazer / Corrector Kontrolü</span></div>' +
          '<div class="uzm-seq-proto-step"><strong>04 · HERMETİK OBTÜRASYON</strong><span>Kadmiyumsuz Radyoopak Gutta Percha</span></div>' +
        '</div>'
      );
    }
    var peak = (p && p.sinterPeak) ? p.sinterPeak : "1480°C – 1500°C";
    return (
      '<div class="uzm-seq-svg-box">' +
        '<svg viewBox="0 0 640 110" style="width:100%;height:auto;max-height:105px;display:block;">' +
          '<line x1="40" y1="88" x2="610" y2="88" stroke="#CBD5E1" stroke-width="1"/>' +
          '<polyline fill="none" stroke="#0284C7" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" points="45,85 170,52 290,20 440,20 585,84"/>' +
          '<circle cx="170" cy="52" r="4.5" fill="#0284C7"/><text x="135" y="42" font-size="10" font-weight="700" fill="#0369A1">900°C Ön-Isıtma</text>' +
          '<circle cx="290" cy="20" r="5" fill="#0D9488"/><circle cx="440" cy="20" r="5" fill="#0D9488"/><text x="305" y="14" font-size="10.5" font-weight="800" fill="#06162E">Tepe: ' + peak + ' (120 dk)</text>' +
          '<text x="55" y="103" font-size="9.5" fill="#475569">1. Isıtma (8°C/dk)</text><text x="290" y="103" font-size="9.5" fill="#0F766E" font-weight="700">2. Kristal Yoğunlaşma</text><text x="485" y="103" font-size="9.5" fill="#475569">3. Kontrollü Soğutma</text>' +
        '</svg>' +
      '</div>'
    );
  }

  // Authoritative Modal Renderer: Sequential 4-Tab + Collapsible Accordion (Zero Open Detail Dump)
  window.__uzmEnhanceProg = function(productId, tabName) {
    var modal = document.getElementById("uzmUniversalModal");
    var body = document.getElementById("uzmModalBodyContent") || document.getElementById("uzmModalBody");
    var db = window.UZM_PRODUCT_DATABASE || {};
    if (!modal || !body) return;

    var lang = getActiveLang();
    var L = SEQ_I18N[lang] || SEQ_I18N.tr;
    modal.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    var pid = productId || window.__uzmActiveProductKey || "5d-ml";
    if (!db[pid]) pid = "5d-ml";
    window.__uzmActiveProductKey = pid;

    var activeTab = normalizeSeqTab(tabName || window.__uzmActiveTab || "specs");
    window.__uzmActiveTab = activeTab;

    var p = db[pid];
    var docs = getDocLinks(pid);
    var isPmma = pid.indexOf("pmma") === 0;
    var isEndo = pid.indexOf("endo") === 0 || pid.indexOf("gutta") === 0 || pid.indexOf("paper") === 0 || pid.indexOf("gp-") === 0 || pid.indexOf("pp-") === 0;

    // Remove any legacy progressive wrapper
    var oldProg = modal.querySelector(".uzm-prog-wrapper");
    if (oldProg) oldProg.remove();

    // Update modal header elements
    var titleEl = document.getElementById("uzmModalTitleText") || document.getElementById("uzmModalTitle");
    if (titleEl && p.title) titleEl.textContent = p.title;
    var badgeEl = document.getElementById("uzmModalBadgePill") || document.getElementById("uzmModalBadge");
    if (badgeEl && p.badge) badgeEl.textContent = p.badge;
    var skuEl = document.getElementById("uzmModalSkuText") || document.getElementById("uzmModalSku");
    if (skuEl && p.sku) skuEl.textContent = p.sku;
    var thumbEl = document.getElementById("uzmModalThumbImg");
    if (thumbEl && p.img) {
      thumbEl.src = p.img;
      thumbEl.alt = p.title || "UZM Dental Ürün Görseli";
    }

    // Update top 4 tab buttons with sequential labels & active state
    var tabMap = {
      "specs": L.tab1,
      "compare": L.tab2,
      "sinter": L.tab3,
      "quote": L.tab4
    };
    var tabOrder = ["specs", "compare", "sinter", "quote"];
    var tabBar = modal.querySelector(".uzm-modal-tabbar");
    if (tabBar) {
      var btns = tabBar.querySelectorAll(".uzm-modal-tab-btn");
      tabOrder.forEach(function(tKey, idx) {
        if (btns[idx]) {
          btns[idx].setAttribute("data-uzm-tab", tKey);
          btns[idx].textContent = tabMap[tKey];
          btns[idx].classList.toggle("is-active", tKey === activeTab);
          btns[idx].setAttribute("aria-selected", tKey === activeTab ? "true" : "false");
        }
      });
    }

    // Build Left Sidebar (Clean Image + Variant Selectors + Single WhatsApp/PDF Actions)
    var thList = p.thicknessList || p.thicknesses || ["Ø 98.5 mm"];
    var shList = p.shadeList || ["A1", "A2", "A3"];

    var thChips = thList.map(function(t, idx) {
      return '<button type="button" class="uzm-pill-option' + (idx === 0 ? ' is-selected' : '') + '" data-group="th">' + t + '</button>';
    }).join("");

    var shChips = shList.map(function(s, idx) {
      return '<button type="button" class="uzm-pill-option' + (idx === 0 ? ' is-selected' : '') + '" data-group="sh">' + s + '</button>';
    }).join("");

    var baseWaMsg = "Merhaba UZM Dental, *" + p.title + "* (" + (p.sku || "") + ") hakkında bilgi almak istiyorum.";
    var baseWaUrl = "https://wa.me/905426460220?text=" + encodeURIComponent(baseWaMsg);

    var leftSidebarHtml =
      '<aside class="uzm-2col-sidebar">' +
        '<div class="uzm-2col-product-imgbox">' +
          '<img src="' + p.img + '" alt="' + p.title + '">' +
        '</div>' +
        '<div class="uzm-2col-variant-block">' +
          '<span class="uzm-2col-section-label">' + L.lblSize + '</span>' +
          '<div class="uzm-2col-chips">' + thChips + '</div>' +
        '</div>' +
        '<div class="uzm-2col-variant-block">' +
          '<span class="uzm-2col-section-label">' + L.lblShade + '</span>' +
          '<div class="uzm-2col-chips">' + shChips + '</div>' +
        '</div>' +
        '<div class="uzm-2col-sidebar-actions">' +
          '<a href="' + docs.pdf + '" target="_blank" rel="noopener" class="uzm-sidebar-pdf-btn">' + L.btnPdf + '</a>' +
          '<a href="' + baseWaUrl + '" target="_blank" rel="noopener" class="uzm-sidebar-wa-btn">' + L.btnWa + '</a>' +
        '</div>' +
      '</aside>';

    // Build Top 3-KPI Summary Strip
    var k1Lbl = isPmma ? L.kpi1Pmma : (isEndo ? L.kpi1Endo : L.kpi1Zir);
    var k2Lbl = isPmma ? L.kpi2Pmma : (isEndo ? L.kpi2Endo : L.kpi2Zir);
    var k3Lbl = isPmma ? L.kpi3Pmma : (isEndo ? L.kpi3Endo : L.kpi3Zir);
    var k3Val = isPmma ? "Kuru/Islak Kazıma · Direkt Polisaj" : (p.sinterPeak || "ISO Standart");

    var kpiHtml =
      '<div class="uzm-2col-kpi-grid">' +
        '<div class="uzm-2col-kpi-card kpi-1"><small>' + k1Lbl + '</small><strong>' + (p.translucency || "-") + '</strong></div>' +
        '<div class="uzm-2col-kpi-card kpi-2"><small>' + k2Lbl + '</small><strong>' + (p.strength || "-") + '</strong></div>' +
        '<div class="uzm-2col-kpi-card kpi-3"><small>' + k3Lbl + '</small><strong>' + k3Val + '</strong></div>' +
      '</div>';

    // SECTION 1: 1- Özet & Endikasyon
    var indPills = (p.indication || "Klinik & Laboratuvar Uygulamaları").split(/[·,]/).map(function(part) {
      var clean = part.trim();
      return clean ? '<span class="uzm-seq-ind-pill">✓ ' + clean + '</span>' : '';
    }).join("");

    var sec1BodyHtml =
      '<div class="uzm-seq-card">' +
        '<p class="uzm-seq-lead"><strong>' + p.title + '</strong> — ' + (p.translucencyDetail || p.indication || "") + ' ' + (p.strengthDetail || "") + '</p>' +
        '<div class="uzm-seq-ind-List">' + indPills + '</div>' +
        '<div class="uzm-seq-guide-banner">' +
          '<span>💡 ' + L.guideNote + '</span>' +
        '</div>' +
      '</div>';

    // SECTION 2: 2- ISO Teknik Parametreler
    var specRows = [
      [L.rSku, (p.sku || "REF-UZM") + " · " + (p.badge || "")],
      [L.rDim, thList.join(" · ")],
      [L.rOpt, (p.translucency || "") + (p.translucencyDetail ? " — " + p.translucencyDetail : "")],
      [L.rStr, (p.strength || "") + (p.strengthDetail ? " — " + p.strengthDetail : "")],
      [L.rPro, isPmma ? "5 Eksen CAD/CAM Frezeleme (18–25k RPM) + Yüksek Parlaklık Polisaj (Direkt Polisaj)" : (p.sinterStandard || p.sinterPeak || "")],
      [L.rInd, (p.indication || "") + " (" + (p.lotTrace || "ISO 13485 · CE · ÜTS") + ")"]
    ].map(function(r) {
      return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>";
    }).join("");

    var layersHtml = "";
    if (p.layers && p.layers.length > 1) {
      var lRows = p.layers.map(function(l) {
        return '<div class="uzm-layer-bar-row">' +
          '<strong>' + l.name + ' <em>(' + l.pct + ')</em></strong>' +
          '<div class="uzm-layer-track"><div class="uzm-layer-fill"></div></div>' +
          '<span class="uzm-layer-val">' + l.trans + '</span>' +
          '<span class="uzm-layer-val">' + l.mpa + '</span>' +
        '</div>';
      }).join("");
      layersHtml =
        '<div class="uzm-seq-subblock">' +
          '<span class="uzm-2col-section-label">' + L.layerTitle + '</span>' +
          lRows +
        '</div>';
    }

    var cmpKeys = isPmma ? ["pmma-mono", "pmma-multi", "pmma-clear", "pmma-xray"] :
                  (isEndo ? ["gutta-02", "gutta-03", "gutta-04", "gutta-f", "gutta-p", "gutta-x", "paper-04", "endo-corrector"] :
                  ["5d-ml", "4d-ml", "3d-pro-ml", "3d-pro-fast", "3d-ml", "st-ml", "ht-white", "ht-fast"]);
    var cmpRows = cmpKeys.map(function(k) {
      var item = db[k];
      if (!item) return "";
      var activeCls = (k === pid) ? ' class="is-current-row"' : '';
      return '<tr' + activeCls + ' data-switch-pid="' + k + '">' +
        '<td><strong>' + item.title.replace("ZirCrown ", "").replace("UZM Dental ", "") + '</strong></td>' +
        '<td>' + (item.translucency || "-") + '</td>' +
        '<td>' + (item.strength || "-") + '</td>' +
        '<td>' + (isPmma ? "Direkt Polisajlı" : (item.sinterPeak || "-")) + '</td>' +
      '</tr>';
    }).join("");

    var sec2BodyHtml =
      '<div class="uzm-seq-card">' +
        '<table class="uzm-2col-spec-table">' +
          '<thead><tr><th>' + L.thParam + '</th><th>' + L.thVal + '</th></tr></thead>' +
          '<tbody>' + specRows + '</tbody>' +
        '</table>' +
        layersHtml +
        '<div class="uzm-seq-subblock">' +
          '<span class="uzm-2col-section-label">' + L.cmpTitle + '</span>' +
          '<div style="overflow-x:auto;">' +
            '<table class="uzm-2col-spec-table">' +
              '<thead><tr><th>Seri</th><th>Optik / Yapı</th><th>Dayanım / Tolerans</th><th>İşlem / Paket</th></tr></thead>' +
              '<tbody>' + cmpRows + '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>' +
      '</div>';

    // SECTION 3: 3- Klinik & Laboratuvar Protokolü
    var protoRows = isPmma ? [
      ["01 · CAM Nesting & Disk Seçimi", "Ø 98.5 mm Stepli (Açık Sistem) · Ø 95 mm (Zirkonzahn) · AG (Amann Girrbach)"],
      ["02 · 5 Eksen Frezeleme (Milling)", "18.000–25.000 RPM · İlerleme: 1.500–2.200 mm/dk · Keskin PMMA Freze Ucu"],
      ["03 · Yüzey Bitim & Polisaj", "Tungsten karbit sprue kesimi → Silikon mölet ön-polisaj → Keçe çark ayna parlaklığı (ISO 20795-1)"],
      ["04 · Polimerizasyon & Biyouyumluluk", "Endüstriyel yüksek basınç/ısı çapraz bağlı ön-polimerize blok (Artık Monomer <%0.5 · ISO 20795-1)"]
    ] : (isEndo ? [
      ["01 · Kanal Preparasyonu & Seçim", (p.sinterStandard || "Rotary veya manuel eğe конikliğine (.02/.03/.04/.06/F/P/X) birebir uyumlu kon seçimi")],
      ["02 · Kurulama & Kalibrasyon", "%100 Saf Medikal Selüloz Paper Point ile kurulama · Gutta Corrector ile ±0.02 mm apikal kontrol"],
      ["03 · Obtürasyon Tekniği", (p.sinterFast || "Tek kon (Single Cone), soğuk lateral kondensasyon veya termoplastik sıcak obtürasyon")],
      ["04 · Biyouyumluluk & Sterilizasyon", "ISO 6877 / ISO 3630-1 · Kadmiyumsuz yüksek radyoopak formül · ÜTS kayıtlı hijyenik ambalaj"]
    ] : [
      ["01 · Ön-Isıtma & Kurutma Fazı", "25°C → 900°C (8°C/dk artış hızı) · MoSi₂ veya SiC ısıtma elemanlı temiz fırın kamerası"],
      ["02 · Tepe Sinterleme Fazı", "Tepe Sıcaklık: " + (p.sinterPeak || "1480°C – 1500°C") + " · 120 dakika sabit tutma (Kristal yoğunlaşma ≥6.05 g/cm³)"],
      ["03 · Standart & Hızlı Program", (p.sinterStandard || "Standart 7 saat program") + " · " + (p.sinterFast || "Kısa üyeli köprülerde hızlı sinter uyumlu")],
      ["04 · Kontrollü Soğutma & Tesviye", "200°C altına kadar fırın içi kontrollü soğutma · Su soğutmalı elmas freze ve düşük basınçlı glazür/polisaj"]
    ]);

    var protoTableHtml = protoRows.map(function(pr) {
      return "<tr><th>" + pr[0] + "</th><td>" + pr[1] + "</td></tr>";
    }).join("");

    var sec3BodyHtml =
      '<div class="uzm-seq-card">' +
        buildProtocolVisualHtml(pid, p) +
        '<table class="uzm-2col-spec-table" style="margin-top:0.65rem;">' +
          '<thead><tr><th>' + L.protStep + '</th><th>' + L.protDetail + '</th></tr></thead>' +
          '<tbody>' + protoTableHtml + '</tbody>' +
        '</table>' +
      '</div>';

    // SECTION 4: 4- Uyumluluk & Formlar
    var compatBadges = isPmma
      ? ["Ø 98.5 mm Açık CAD/CAM", "Ø 95 mm Zirkonzahn", "AG Amann Girrbach", "ISO 20795-1 Type 3/5", "FDA 21 CFR 872.3760", "ÜTS & LOT Kayıtlı"]
      : (isEndo
        ? ["ISO 6877 Kalibrasyon", "ISO 3630-1 Endodonti", "±0.02 mm Lazer Kontrol", "Kadmiyumsuz Formül", "CE 0197 & ISO 13485", "T.C. Sağlık Bakanlığı ÜTS"]
        : ["Ø 98.5 mm Açık CAD/CAM", "CIP İzostatik Pres (≥6.05 g/cm³)", "VITA 16 + BL1–BL4", "ISO 6872 Seramik Standardı", "CE 0197 & ISO 13485", "T.C. Sağlık Bakanlığı ÜTS"]);

    var compatHtml = compatBadges.map(function(b) {
      return '<span class="uzm-seq-compat-badge">🛡️ ' + b + '</span>';
    }).join("");

    var sec4BodyHtml =
      '<div class="uzm-seq-card">' +
        '<div class="uzm-seq-subblock" style="margin-top:0;">' +
          '<span class="uzm-2col-section-label">' + L.compatTitle + '</span>' +
          '<div class="uzm-seq-compat-grid">' + compatHtml + '</div>' +
        '</div>' +
        '<div class="uzm-seq-subblock">' +
          '<span class="uzm-2col-section-label">' + L.docsTitle + '</span>' +
          '<div class="uzm-seq-doc-links">' +
            '<a href="' + docs.pdf + '" target="_blank" rel="noopener" class="uzm-seq-doc-btn primary">' + L.docBrochure + '</a>' +
            '<a href="' + docs.spec + '" target="_blank" rel="noopener" class="uzm-seq-doc-btn">' + L.docSpec + '</a>' +
            '<a href="' + docs.sinter + '" target="_blank" rel="noopener" class="uzm-seq-doc-btn">' + L.docProto + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="uzm-2col-wa-panel" style="margin-top:0.75rem;">' +
          '<span class="uzm-wa-badge">DOĞRULANMIŞ KURUMSAL HAT · MERKEZ / KÜTAHYA</span>' +
          '<h4>' + L.b2bTitle + '</h4>' +
          '<p>' + L.b2bDesc + '</p>' +
          '<div class="uzm-wa-cta-row">' +
            '<a href="' + baseWaUrl + '" target="_blank" rel="noopener" class="uzm-wa-big-btn">💬 WhatsApp (+90 542 646 02 20) &rarr;</a>' +
            '<a href="mailto:uzmandisdental@gmail.com?subject=' + encodeURIComponent(p.title + " B2B Bilgi Talebi") + '" class="uzm-pdf-big-btn">✉️ uzmandisdental@gmail.com</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Assemble the 4 Sequential Collapsible <details class="uzm-seq-acc"> blocks
    var sectionsConfig = [
      { key: "specs",   num: "1", title: L.tab1, sub: L.sec1Sub, body: sec1BodyHtml },
      { key: "compare", num: "2", title: L.tab2, sub: L.sec2Sub, body: sec2BodyHtml },
      { key: "sinter",  num: "3", title: L.tab3, sub: L.sec3Sub, body: sec3BodyHtml },
      { key: "quote",   num: "4", title: L.tab4, sub: L.sec4Sub, body: sec4BodyHtml }
    ];

    var accordionsHtml = sectionsConfig.map(function(sec) {
      var isOpen = (sec.key === activeTab);
      var hintTxt = isOpen ? L.hintOpen : L.hintClick;
      return (
        '<details class="uzm-seq-acc' + (isOpen ? ' is-open' : '') + '" data-seq-tab="' + sec.key + '"' + (isOpen ? ' open' : '') + '>' +
          '<summary class="uzm-seq-summary">' +
            '<div class="uzm-seq-sum-left">' +
              '<span class="uzm-seq-num">' + sec.num + '</span>' +
              '<div class="uzm-seq-sum-titles">' +
                '<strong class="uzm-seq-title">' + sec.title + '</strong>' +
                '<small class="uzm-seq-sub">' + sec.sub + '</small>' +
              '</div>' +
            '</div>' +
            '<div class="uzm-seq-sum-right">' +
              '<span class="uzm-seq-hint">' + hintTxt + '</span>' +
              '<span class="uzm-seq-chevron" aria-hidden="true">▾</span>' +
            '</div>' +
          '</summary>' +
          '<div class="uzm-seq-body">' + sec.body + '</div>' +
        '</details>'
      );
    }).join("");

    body.innerHTML =
      '<div class="uzm-2col-grid">' +
        leftSidebarHtml +
        '<div class="uzm-2col-main">' +
          kpiHtml +
          '<div class="uzm-seq-stack" id="uzmModalSeqStack">' + accordionsHtml + '</div>' +
        '</div>' +
      '</div>';

    // Sync helper: when a sequential accordion is opened, close siblings & update top tabs
    var allDetails = body.querySelectorAll("details.uzm-seq-acc");
    allDetails.forEach(function(det) {
      det.addEventListener("toggle", function() {
        var hintEl = det.querySelector(".uzm-seq-hint");
        if (det.open) {
          det.classList.add("is-open");
          if (hintEl) hintEl.textContent = L.hintOpen;
          var sKey = det.getAttribute("data-seq-tab") || "specs";
          window.__uzmActiveTab = sKey;
          allDetails.forEach(function(other) {
            if (other !== det && other.open) {
              other.open = false;
              other.classList.remove("is-open");
              var oHint = other.querySelector(".uzm-seq-hint");
              if (oHint) oHint.textContent = L.hintClick;
            }
          });
          if (tabBar) {
            tabBar.querySelectorAll(".uzm-modal-tab-btn").forEach(function(b) {
              var match = b.getAttribute("data-uzm-tab") === sKey;
              b.classList.toggle("is-active", match);
              b.setAttribute("aria-selected", match ? "true" : "false");
            });
          }
        } else {
          det.classList.remove("is-open");
          if (hintEl) hintEl.textContent = L.hintClick;
        }
      });
    });

    // Dynamic WhatsApp link updater when thickness or shade chip is clicked
    function syncWaLinks() {
      var selTh = body.querySelector('.uzm-2col-chips .uzm-pill-option.is-selected[data-group="th"]');
      var selSh = body.querySelector('.uzm-2col-chips .uzm-pill-option.is-selected[data-group="sh"]');
      var thTxt = selTh ? selTh.textContent.trim() : "";
      var shTxt = selSh ? selSh.textContent.trim() : "";
      var msg = "Merhaba UZM Dental, *" + p.title + "* (" + (p.sku || "") + ")" +
                (thTxt ? " | Ölçü: *" + thTxt + "*" : "") +
                (shTxt ? " | Renk/Varyant: *" + shTxt + "*" : "") +
                " hakkında bilgi almak istiyorum.";
      var waUrl = "https://wa.me/905426460220?text=" + encodeURIComponent(msg);
      modal.querySelectorAll(".uzm-sidebar-wa-btn, .uzm-wa-big-btn").forEach(function(a) {
        a.setAttribute("href", waUrl);
      });
      var footerBtn = modal.querySelector('.uzm-modal-footer [data-uzm-tab="quote"]');
      if (footerBtn) {
        footerBtn.onclick = function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          window.open(waUrl, "_blank", "noopener");
        };
      }
    }

    body.querySelectorAll(".uzm-2col-chips .uzm-pill-option").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var grp = btn.getAttribute("data-group");
        body.querySelectorAll('.uzm-2col-chips .uzm-pill-option[data-group="' + grp + '"]').forEach(function(b) {
          b.classList.remove("is-selected");
        });
        btn.classList.add("is-selected");
        syncWaLinks();
      });
    });
    syncWaLinks();

    // Row click in comparison matrix switches product cleanly
    body.querySelectorAll("tr[data-switch-pid]").forEach(function(tr) {
      tr.addEventListener("click", function() {
        var newPid = tr.getAttribute("data-switch-pid");
        if (newPid) {
          window.__uzmActiveProductKey = newPid;
          window.__uzmEnhanceProg(newPid, "compare");
        }
      });
    });
  };

  // Convert subpage open detail stacks (.uzm-sql-panels and #uzmSubpageEngMatrix) into Sequential Collapsible Accordions
  function upgradeSubpageDetailBlocksToSequentialAccordions() {
    var lang = getActiveLang();
    var L = SEQ_I18N[lang] || SEQ_I18N.tr;

    // 1. Wrap #uzmSubpageEngMatrix table inside a clean collapsible <details class="uzm-seq-acc"> (closed by default so it doesn't clutter the page)
    var engMatrix = document.getElementById("uzmSubpageEngMatrix");
    if (engMatrix && !engMatrix.getAttribute("data-seq-wrapped")) {
      engMatrix.setAttribute("data-seq-wrapped", "1");
      var h3 = engMatrix.querySelector("h3");
      var headingText = h3 ? h3.textContent.trim() : L.subMatrixTitle;
      if (h3) h3.remove();
      var innerContent = engMatrix.innerHTML;
      engMatrix.innerHTML =
        '<details class="uzm-seq-acc" data-seq-matrix="1">' +
          '<summary class="uzm-seq-summary">' +
            '<div class="uzm-seq-sum-left">' +
              '<span class="uzm-seq-num">📊</span>' +
              '<div class="uzm-seq-sum-titles">' +
                '<strong class="uzm-seq-title">' + headingText + '</strong>' +
                '<small class="uzm-seq-sub">' + L.sec2Sub + '</small>' +
              '</div>' +
            '</div>' +
            '<div class="uzm-seq-sum-right">' +
              '<span class="uzm-seq-hint">' + L.hintClick + '</span>' +
              '<span class="uzm-seq-chevron" aria-hidden="true">▾</span>' +
            '</div>' +
          '</summary>' +
          '<div class="uzm-seq-body"><div class="uzm-seq-card">' + innerContent + '</div></div>' +
        '</details>';
      var detM = engMatrix.querySelector("details.uzm-seq-acc");
      if (detM) {
        detM.addEventListener("toggle", function() {
          detM.classList.toggle("is-open", detM.open);
          var hEl = detM.querySelector(".uzm-seq-hint");
          if (hEl) hEl.textContent = detM.open ? L.hintOpen : L.hintClick;
        });
      }
    }

    // 2. Convert .uzm-sql-panels on individual product pages (5d-ml.html, etc.) into Sequential 4-Section Collapsible Accordions
    var sqlPanelsWrap = document.querySelector(".uzm-sql-panels");
    if (sqlPanelsWrap && !sqlPanelsWrap.getAttribute("data-seq-upgraded")) {
      sqlPanelsWrap.setAttribute("data-seq-upgraded", "1");

      // Replace any huge open <figure class="uzm-sql-fig"><img ...></figure> with a clean collapsible/link preview button
      sqlPanelsWrap.querySelectorAll("figure.uzm-sql-fig").forEach(function(fig) {
        var img = fig.querySelector("img");
        if (img && img.getAttribute("src")) {
          var src = img.getAttribute("src");
          var alt = img.getAttribute("alt") || "Teknik Şema & Tablo";
          fig.innerHTML =
            '<a href="' + src + '" target="_blank" rel="noopener" class="uzm-seq-doc-btn" style="display:inline-flex;margin-top:0.5rem;">' +
              '📐 ' + alt + ' (Tam Boyut Görüntüle ↗)' +
            '</a>';
        }
      });

      var panels = Array.prototype.slice.call(sqlPanelsWrap.querySelectorAll("section.uzm-sql-panel"));
      var titles = [L.tab1, L.tab2, L.tab3, L.tab4];
      var subs = [L.sec1Sub, L.sec2Sub, L.sec3Sub, L.sec4Sub];

      panels.forEach(function(sec, idx) {
        var secId = sec.id || ("seq-panel-" + (idx + 1));
        var h2 = sec.querySelector("h2");
        var origHeading = h2 ? h2.textContent.trim() : "";
        if (h2) h2.remove();
        var dispTitle = titles[idx] || ((idx + 1) + "- " + origHeading);
        var dispSub = origHeading ? (origHeading + " · " + (subs[idx] || "")) : (subs[idx] || "");
        var isFirst = (idx === 0);

        var det = document.createElement("details");
        det.className = "uzm-seq-acc" + (isFirst ? " is-open" : "");
        det.id = secId;
        det.setAttribute("data-seq-idx", String(idx));
        if (isFirst) det.setAttribute("open", "");

        det.innerHTML =
          '<summary class="uzm-seq-summary">' +
            '<div class="uzm-seq-sum-left">' +
              '<span class="uzm-seq-num">' + (idx + 1) + '</span>' +
              '<div class="uzm-seq-sum-titles">' +
                '<strong class="uzm-seq-title">' + dispTitle + '</strong>' +
                '<small class="uzm-seq-sub">' + dispSub + '</small>' +
              '</div>' +
            '</div>' +
            '<div class="uzm-seq-sum-right">' +
              '<span class="uzm-seq-hint">' + (isFirst ? L.hintOpen : L.hintClick) + '</span>' +
              '<span class="uzm-seq-chevron" aria-hidden="true">▾</span>' +
            '</div>' +
          '</summary>' +
          '<div class="uzm-seq-body"><div class="uzm-seq-card">' + sec.innerHTML + '</div></div>';

        sec.parentNode.replaceChild(det, sec);
      });

      // Sync top .uzm-sql-tabs pill bar with the sequential accordions
      var pillNav = document.querySelector(".uzm-sql-tabs");
      var allSubDetails = sqlPanelsWrap.querySelectorAll("details.uzm-seq-acc");

      if (pillNav) {
        var pills = pillNav.querySelectorAll(".uzm-sql-pill");
        pills.forEach(function(pill, idx) {
          if (titles[idx]) pill.textContent = titles[idx];
          pill.classList.toggle("is-active", idx === 0);
          pill.addEventListener("click", function(ev) {
            ev.preventDefault();
            var targetId = (pill.getAttribute("href") || "").replace(/^#/, "");
            var targetDet = document.getElementById(targetId) || allSubDetails[idx];
            if (targetDet) {
              targetDet.open = true;
              targetDet.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          });
        });
      }

      allSubDetails.forEach(function(det, idx) {
        det.addEventListener("toggle", function() {
          var hEl = det.querySelector(".uzm-seq-hint");
          if (det.open) {
            det.classList.add("is-open");
            if (hEl) hEl.textContent = L.hintOpen;
            allSubDetails.forEach(function(other) {
              if (other !== det && other.open) {
                other.open = false;
                other.classList.remove("is-open");
                var oh = other.querySelector(".uzm-seq-hint");
                if (oh) oh.textContent = L.hintClick;
              }
            });
            if (pillNav) {
              var pills = pillNav.querySelectorAll(".uzm-sql-pill");
              pills.forEach(function(pEl, pIdx) {
                pEl.classList.toggle("is-active", pIdx === idx);
              });
            }
          } else {
            det.classList.remove("is-open");
            if (hEl) hEl.textContent = L.hintClick;
          }
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", upgradeSubpageDetailBlocksToSequentialAccordions);
  } else {
    upgradeSubpageDetailBlocksToSequentialAccordions();
  }
  setTimeout(upgradeSubpageDetailBlocksToSequentialAccordions, 120);
})();


/* === UZM_5TAB_SAGEMAX_ENHANCER_1106 === */
(function(){
  var SEKME_BASLIKLARI_4DIL = {
    tr: [
      "Sekme 01 · Teknik Spesifikasyon Tablosu (ISO 6872 / ISO 20795-1 / ISO 6877 / ISO 3630-1)",
      "Sekme 02 · Katman, Optik Geçiş (MPa / Translüsensi) & Kesit Geometrisi",
      "Sekme 03 · İşleme Protokolü (Zirkonya Sinterleme / PMMA 5-Eksen Frezeleme & Polisaj / Klinik Sekans)",
      "Sekme 04 · Endikasyon Matrisi, Kalınlık/Boyut Seçenekleri & CE / ISO 13485 / ÜTS / LOT İzlenebilirlik",
      "Sekme 05 · Orijinal PDF Broşür Föyü (/uploads/*.pdf) & QR Doğrulama"
    ],
    en: [
      "Tab 01 · Technical Specification Matrix (ISO 6872 / ISO 20795-1 / ISO 6877 / ISO 3630-1)",
      "Tab 02 · Multilayer Optical Gradient (MPa / Translucency) & Cross-Section Geometry",
      "Tab 03 · Processing Protocol (Zirconia Firing Curve / PMMA Zero-Sintering 5-Axis Milling / Endo Sequence)",
      "Tab 04 · Indication Matrix, Dimensions (98.5mm / Taper) & CE / ISO 13485 / LOT Traceability",
      "Tab 05 · Official PDF Technical Data Sheet (IFU / TDS Download) & QR Verification"
    ],
    zh: [
      "选项卡 01 · 技术参数规格表 (ISO 6872 / ISO 20795-1 / ISO 6877 / ISO 3630-1)",
      "选项卡 02 · 多层光学透光率渐变与抗弯强度 (MPa) 结构分析",
      "选项卡 03 · 加工与临床操作规范 (氧化锆结晶曲线 / PMMA免烧结五轴高速切削 / 根管充填序列)",
      "选项卡 04 · 适应症矩阵、盘片厚度规格 (98.5mm) 与 CE / ISO 13485 / 批号追溯",
      "选项卡 05 · 官方 PDF 技术说明书 (/uploads/*.pdf) 与二维码防伪验证"
    ],
    ar: [
      "التبويب 01 · جدول المواصفات الفنية المعتمدة (ISO 6872 / ISO 20795-1 / ISO 6877 / ISO 3630-1)",
      "التبويب 02 · التدرج اللوني والشفافية الضوئية ومقاومة الانحناء (MPa)",
      "التبويب 03 · بروتوكول المعالجة (منحنى الزركونيا / حفر PMMA خماسي المحاور بدون تلبيد / التسلسل اللبي)",
      "التبويب 04 · مصفوفة الاستطبابات والمقاسات (98.5 مم) وشهادات CE / ISO 13485 / تتبع التشغيلات",
      "التبويب 05 · الكتيب الفني الأصلي بصيغة PDF (/uploads/*.pdf) ورمز الاستجابة السريعة QR"
    ]
  };
  window.UZM_SEKME_BASLIKLARI_4DIL = SEKME_BASLIKLARI_4DIL;
})();
