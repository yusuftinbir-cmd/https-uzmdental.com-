(function () {
  'use strict';

  var ZIRCROWN_BLOCKS = [
    {
      id: '5d-ml',
      sku: '5D-ML',
      cat: 'zirconia',
      tag: '10 KATMANLI MULTILAYER · USTALARIN TERCİHİ',
      title: 'ZirCrown 5D-ML (Ustaların Tercihi)',
      indGroup: 'anterior',
      img: 'uploads/uzm_zircrown_5d_ml_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm) · 10 Katman',
      sub: 'Daha fazla katman, daha doğal geçiş. %47–60 translüsensi, 650–950 MPa bükülme dayanımı ve 10 katmanlı multilayer yapısıyla servikalden insizale doğal renk derinliği ve ışık geçişi sunar.',
      trans: '%47 – %60',
      mpa: '650 – 950 MPa',
      temp: '1500°C – 1530°C · 2 Saat',
      indication: 'Anterior Kron, Lamina/Veneer, İnlay/Onlay & 3 Üye Estetik Köprü',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C1', 'D2'],
      layers: [
        { name: 'İnsizal Katmanlar (3 Katman · %35)', trans: 60, mpa: '650–950' },
        { name: 'Geçiş Katmanları (4 Katman · %30)', trans: 53, mpa: '650–950' },
        { name: 'Servikal Dentin (3 Katman · %35)', trans: 47, mpa: '650–950' }
      ]
    },
    {
      id: '4d-ml',
      sku: '4D-ML',
      cat: 'zirconia',
      tag: '9 KATMAN KADEMELİ (5 KATMAN SIRALI) MULTILAYER',
      title: 'ZirCrown 4D-ML Multilayer',
      indGroup: 'allround',
      img: 'uploads/uzm_zircrown_4d_ml_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm) · 9 Katman Kademeli',
      sub: 'Estetikten vazgeçmeden, ihtiyaç duyduğunuz ekstra güç. %45–59 translüsensi ve 700–1000 MPa dayanım aralığıyla beş katman sıralı, dokuz katman kademeli doğal geçiş sunar.',
      trans: '%45 – %59',
      mpa: '700 – 1000 MPa',
      temp: '1500°C – 1530°C · 2 Saat',
      indication: 'Ön Bölge Kron, Gövdeli Restorasyonlar, 3 Üyeli Köprü & İnlay/Onlay',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C2'],
      layers: [
        { name: 'İnsizal Katman (1 Katman)', trans: 59, mpa: '700–1000' },
        { name: 'Kademeli Geçiş (6 Katman)', trans: 52, mpa: '700–1000' },
        { name: 'Servikal Dentin (2 Katman)', trans: 45, mpa: '700–1000' }
      ]
    },
    {
      id: '3d-pro',
      sku: '3D-PRO',
      cat: 'zirconia',
      tag: '6 KATMANLI MULTILAYER DİSK',
      title: 'ZirCrown 3D-PRO Multilayer',
      indGroup: 'anterior',
      img: 'uploads/uzm_zircrown_3d_pro_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm) · 6 Katman Multilayer',
      sub: 'Gücün başladığı, estetiğin yükseldiği katmanlı teknoloji. 800–1200 MPa dayanım ve %43–57 translüsensi değerlerini aynı diskte buluşturur; servikalde mekanik destek, insizalde doğal ışık geçirgenliği sağlar.',
      trans: '%43 – %57',
      mpa: '800 – 1200 MPa',
      temp: '1500°C · 2 Saat',
      indication: 'Tek Kron, Posterior Restorasyon, Çok Üyeli Köprü & Full-Arch',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['Beyaz', 'BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'B1', 'B2'],
      layers: [
        { name: 'İnsizal Katman (1 Katman)', trans: 57, mpa: '800–1200' },
        { name: 'Geçiş Katmanları (3 Katman)', trans: 50, mpa: '800–1200' },
        { name: 'Servikal Dentin (2 Katman)', trans: 43, mpa: '800–1200' }
      ]
    },
    {
      id: '3d-ml',
      sku: '3D-ML',
      cat: 'zirconia',
      tag: '9 KATMANLI GRADYAN (5 KATMAN KAPLAMA)',
      title: 'ZirCrown 3D-ML Multilayer',
      indGroup: 'allround',
      img: 'uploads/uzm_zircrown_3d_ml_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm) · 9 Katman Gradyan',
      sub: 'Estetik geçişler, güçlü altyapı, daha fazla tasarım özgürlüğü. %43–46 kontrollü translüsensi ve 900–1200 MPa bükülme dayanımıyla posterior restorasyonlar ve uzun açıklıklı köprüler için yüksek stabilite sunar.',
      trans: '%43 – %46',
      mpa: '900 – 1200 MPa',
      temp: '1500°C – 1530°C · 2 Saat',
      indication: 'Posterior Restorasyonlar, Uzun Açıklıklı Köprüler & Düşük Dikey Mesafe',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C1', 'D2'],
      layers: [
        { name: 'İnsizal Katman (1 Katman)', trans: 46, mpa: '900–1200' },
        { name: 'Gradyan Geçiş (6 Katman)', trans: 45, mpa: '900–1200' },
        { name: 'Servikal Dentin (2 Katman)', trans: 43, mpa: '900–1200' }
      ]
    },
    {
      id: 'st-ml',
      sku: 'ST-ML',
      cat: 'zirconia',
      tag: '4 KATMAN SÜPER TRANSLÜSENT · MALİYET ETKİNLİĞİNİN KRALI',
      title: 'ZirCrown ST-ML Multilayer',
      indGroup: 'posterior',
      img: 'uploads/uzm_zircrown_st_ml_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm) · 4 Katman Multilayer',
      sub: 'Katmanlarda doğal geçiş, her seviyede aynı güç. %43 kontrollü translüsensi ve katmanlar boyunca korunan 1200 MPa homojen bükülme dayanımıyla günlük monolitik kron ve köprülerde yüksek güven verir.',
      trans: '%43 Homojen',
      mpa: '1200 MPa',
      temp: '1530°C · 2 Saat',
      indication: 'Günlük Monolitik Kron, Köprü, İmplant Tam Kron & Altyapı',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2'],
      layers: [
        { name: 'İnsizal Ton (1 Katman)', trans: 43, mpa: '1200' },
        { name: 'Geçiş Tonu (2 Katman)', trans: 43, mpa: '1200' },
        { name: 'Servikal Kroma (1 Katman)', trans: 43, mpa: '1200' }
      ]
    },
    {
      id: 'zircrown-ht',
      sku: 'FAST-3D-PRO',
      cat: 'zirconia',
      tag: '6 KATMAN FÜZYON · HIZLI SİNTERLEME 3D-PRO',
      title: 'ZirCrown Hızlı Sinterleme 3D-PRO',
      indGroup: 'posterior',
      img: 'uploads/uzm_zircrown_fast_3d_pro_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · AG (10–25 mm)',
      sub: 'Önceden gölgelendirilmiş teknik ve 6 katmanlı füzyon ile hızlı sinterleme protokolüne uygun 800–1200 MPa (%43–55 geçirgenlik) yüksek mukavemetli seri.',
      trans: '%43 – %55',
      mpa: '800 – 1200 MPa',
      temp: '1500°C – 1530°C',
      indication: 'Tek Kron, Çok Üyeli Köprü, Porselen Altyapı & İmplant Bar',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['Beyaz', 'A1', 'A2', 'A3', 'BL1', 'BL2', 'BL3', 'BL4'],
      layers: [
        { name: 'Hızlı-Sinter / Altyapı Gövde', trans: 43, mpa: 1200 }
      ]
    },
    {
      id: 'ut',
      sku: 'UT',
      cat: 'zirconia',
      tag: 'ULTRA TRANSLÜSENT BEYAZ ZİRKONYA DİSK',
      title: 'ZirCrown UT Ultra Translucent (Beyaz)',
      indGroup: 'anterior',
      img: 'uploads/uzm_zircrown_ut_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · 92×75 mm · Sirona',
      sub: 'Kristal berraklığında yeşim benzeri parlaklık. %60 ultra yüksek translüsensi ve 650 MPa bükülme dayanımıyla anterior bölgede yüksek estetik restorasyonlar için ideal beyaz zirkonya.',
      trans: '%60 Ultra Translucent',
      mpa: '650 MPa',
      temp: '1530°C · 2 Saat',
      indication: 'Ön Bölge Kron, Lamina/Veneer, İnlay/Onlay',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['Beyaz (White)'],
      layers: [
        { name: 'Ultra Translucent Homojen Yapı', trans: 60, mpa: '650' }
      ]
    },
    {
      id: 'ut-c',
      sku: 'UT-C',
      cat: 'zirconia',
      tag: 'PRE-SHADED ULTRA TRANSLÜSENT RENKLİ DİSK',
      title: 'ZirCrown UT-C Ultra Translucent (Renkli)',
      indGroup: 'anterior',
      img: 'uploads/uzm_zircrown_ut_c_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · 92×75 mm · Sirona',
      sub: 'Önceden renklendirilmiş ultra translüsent zirkonya. %60 translüsensi, 650 MPa dayanım ve Vita 16 + BL renkleriyle estetik anterior restorasyonlar.',
      trans: '%60 Ultra Translucent',
      mpa: '650 MPa',
      temp: '1530°C · 2 Saat',
      indication: 'Ön Bölge Estetik Kron, İnlay, Onlay, Veneer',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C1', 'D2'],
      layers: [
        { name: 'Pre-shaded Ultra Translucent', trans: 60, mpa: '650' }
      ]
    },
    {
      id: 'ut-ml',
      sku: 'UT-ML',
      cat: 'zirconia',
      tag: 'DOĞAL GEÇİŞLİ ULTRA TRANSLÜSENT MULTILAYER',
      title: 'ZirCrown UT-ML Ultra Translucent Multilayer',
      indGroup: 'anterior',
      img: 'uploads/uzm_zircrown_ut_ml_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: '≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250',
      box: 'Ø 98.5 mm · Ø 95 mm · 92×75 mm · Sirona',
      sub: 'Doğal renk gradyanı ve ultra yüksek translüsensi. %60 ışık geçirgenliği, 650 MPa dayanım ve servikalden insizale kesintisiz doğal renk geçişiyle kusursuz anterior estetik.',
      trans: '%60 Ultra Translucent',
      mpa: '650 MPa',
      temp: '1530°C · 2 Saat',
      indication: 'Anterior Yüksek Estetik Kron, 3 Üye Estetik Köprü, Lamina',
      thicknesses: ['10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
      shades: ['BL1', 'BL2', 'BL3', 'BL4', 'A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C1', 'D2'],
      layers: [
        { name: 'İnsizal Gradyan', trans: 60, mpa: '650' },
        { name: 'Gövde Katmanı', trans: 60, mpa: '650' },
        { name: 'Servikal Ton', trans: 60, mpa: '650' }
      ]
    }
  ];

  var PMMA_BLOCKS = [
    {
      id: 'pmma-mono',
      sku: 'PMMA-MONO',
      cat: 'pmma',
      tag: 'MONOLAYER PMMA DİSK (16 / 18 / 20 / 30 MM)',
      title: 'UZM Dental Monolayer PMMA',
      indGroup: 'temporary',
      img: 'uploads/pmma_brosur_2026/uzm_pmma_monolayer.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: 'Eğilme Dayanımı ≥100 MPa · Yoğunluk 1.35–1.45 g/cm³ · 85–90 Shore',
      box: '98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm',
      sub: 'Günlük CAD/CAM restorasyonları için güvenilir performans. 16 / 18 / 20 / 30 mm kalınlık seçenekleriyle geçici kron ve köprü üretimi için yüksek hassasiyetli monokromatik PMMA diski.',
      trans: 'Doğal Yüzey Kalitesi',
      mpa: '≥ 100 MPa (16/18/20/30 mm)',
      temp: 'Soğuk Frezeleme & Polisaj',
      indication: 'Geçici Kron ve Köprü Restorasyonları',
      thicknesses: ['16mm', '18mm', '20mm', '30mm'],
      shades: ['A1', 'A2', 'BL3'],
      layers: [
        { name: 'Homojen Monolayer Yapı', trans: 100, mpa: 100 }
      ]
    },
    {
      id: 'pmma-ml',
      sku: 'PMMA-ML',
      cat: 'pmma',
      tag: 'MULTILAYER PMMA DİSK (16 / 18 / 20 / 30 MM)',
      title: 'UZM Dental Multilayer PMMA',
      indGroup: 'temporary',
      img: 'uploads/pmma_brosur_2026/uzm_pmma_multilayer.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: 'Eğilme Dayanımı ≥100 MPa · Doğal Dentin ve Mine Katman Geçişi',
      box: '98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm',
      sub: 'Doğal dentin ve mine geçişlerini taklit eden katmanlı yapısı sayesinde uzun dönem geçici restorasyonlarda premium estetik ve doğal görünüm sunar (16 / 18 / 20 / 30 mm).',
      trans: 'Doğal Katman Geçişi',
      mpa: '≥ 100 MPa (16/18/20/30 mm)',
      temp: 'Soğuk Frezeleme & Polisaj',
      indication: 'Uzun Dönem Geçici Restorasyonlar & Estetik Vakalar',
      thicknesses: ['16mm', '18mm', '20mm', '30mm'],
      shades: ['A2', 'BL3'],
      layers: [
        { name: 'Doğal Katmanlı Mine ve Dentin Geçişi', trans: 100, mpa: 100 }
      ]
    },
    {
      id: 'pmma-clear',
      sku: 'PMMA-CLEAR',
      cat: 'pmma',
      tag: 'CLEAR ŞEFFAF PMMA DİSK',
      title: 'UZM Dental Clear PMMA',
      indGroup: 'splint',
      img: 'uploads/pmma_brosur_2026/uzm_pmma_clear.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: 'Yüksek Optik Berraklık & İşlenebilirlik',
      box: '98 × 18 mm · 95 × 18 mm · AG × 18 mm',
      sub: 'Oklüzal splint, gece plağı, horlama apareyi ve koruyucu plak uygulamaları için yüksek optik berraklıkta şeffaf disk.',
      trans: 'Yüksek Optik Berraklık',
      mpa: 'İşlenebilir Güvenilir Performans',
      temp: 'Soğuk Frezeleme & Polisaj',
      indication: 'Oklüzal Splint, Gece Plağı, Horlama Apareyi, Koruyucu Plak',
      thicknesses: ['18mm'],
      shades: ['Clear'],
      layers: [
        { name: 'Optik Berrak Şeffaf Yapı', trans: 100, mpa: 100 }
      ]
    },
    {
      id: 'pmma-xray',
      sku: 'PMMA-XRAY',
      cat: 'pmma',
      tag: 'OPAQUE X-RAY PMMA DİSK',
      title: 'UZM Dental X-Ray PMMA Disc',
      indGroup: 'guide',
      img: 'uploads/pmma_brosur_2026/uzm_pmma_xray_disc.png',
      lot: 'Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)',
      density: 'Radyoopak Yapı · Boyutsal Stabilite',
      box: '98 × 18 mm (98 mm CAD/CAM Sistemleri)',
      sub: 'Radyoopak yapısı sayesinde geçici restorasyonların radyografik değerlendirilmesine olanak sağlayarak tanı, kontrol ve takip avantajı sunar.',
      trans: 'Radyografik Görünürlük',
      mpa: 'Hassas Frezleme & Boyutsal Stabilite',
      temp: 'Soğuk Frezeleme & Polisaj',
      indication: 'Radyografik Olarak Görüntülenebilir Geçici Restorasyonlar (Tanı, Kontrol ve Takip)',
      thicknesses: ['18mm'],
      shades: ['A1'],
      layers: [
        { name: 'Homojen Radyoopak Yapı', trans: 50, mpa: 100 }
      ]
    }
  ];

  var EXTRA_PRODUCTS = [
    {
      id: 'gutta-makasi',
      tag: 'PASLANMAZ ÇELİK KLİNİK MAKAS',
      title: 'UZM Dental Gutta Makası (Gutta-Cutter)',
      indGroup: 'endo',
      sub: 'Gutta-perka konilerinin apikal uç çapını ISO standartlarında ölçen ve deformasyonsuz kesen paslanmaz çelik kalibrasyon makası.',
      trans: 'ISO #20–#60',
      mpa: 'Çelik · 135°C Otoklav',
      temp: '135°C Otoklav',
      indication: 'Master Cone Kalibrasyonu, Apikal Çap Kontrolü, Endodontik Obtürasyon',
      thicknesses: ['Standart Boy (11.5 cm)'],
      shades: ['Medikal Paslanmaz Çelik'],
      layers: [
        { name: 'ISO Referans Yuvaları (#20-#60)', trans: 100, mpa: 20 },
        { name: 'Medikal Paslanmaz Çelik Gövde', trans: 100, mpa: 135 },
        { name: 'Bıçak Sertliği (HRC 54)', trans: 95, mpa: 54 }
      ]
    },
    {
      id: 'gutta-corrector',
      tag: 'APİKAL KALİBRASYON CETVELİ',
      title: 'UZM Dental Gutta Corrector',
      indGroup: 'endo',
      sub: 'Uygun ölçüde koni bulunmadığında koni ucunu ISO referans delikleriyle kontrollü keserek doğru master cone hazırlamayı sağlayan paslanmaz çelik cetvel.',
      trans: 'ISO Delikleri',
      mpa: 'Çelik · 135°C Otoklav',
      temp: '135°C Otoklav',
      indication: 'Master Cone Hazırlama, Çap Kontrolü, Klinik & Akademik Endodonti',
      thicknesses: ['Kompakt Cetvel Plakası'],
      shades: ['Medikal Paslanmaz Çelik'],
      layers: [
        { name: 'ISO Delik Doğruluğu', trans: 100, mpa: 20 },
        { name: '135°C Otoklav Uyumu', trans: 100, mpa: 135 },
        { name: 'Korozyon Direnci', trans: 100, mpa: 316 }
      ]
    },
    {
      id: 'gutta-percha',
      tag: 'RADYOPAK OBTÜRASYON KONİLERİ',
      title: 'UZM Dental Gutta Percha & Paper Point',
      indGroup: 'endo',
      sub: 'ISO renk kodlu milimetrik lazer işaretli güta-perka konileri ve yüksek emicilikli steril emici kağıt koniler.',
      trans: 'Radyopak',
      mpa: 'Esnek Biouyumlu',
      temp: 'Steril Paket',
      indication: 'Kanal Dolgusu ve Kurutma',
      thicknesses: ['.02 Taper', '.04 Taper', '.06 Taper', 'F Serisi', 'P Serisi'],
      shades: ['ISO #15–#40', 'ISO #45–#80'],
      layers: [
        { name: 'Apikal Ölçüm Hassasiyeti', trans: 100, mpa: 20 },
        { name: 'Radyopasite', trans: 95, mpa: 80 },
        { name: 'Boyutsal Stabilite', trans: 90, mpa: 90 }
      ]
    }
  ];

  var ALL_CATALOG = ZIRCROWN_BLOCKS.concat(PMMA_BLOCKS).concat(EXTRA_PRODUCTS);

  var state = {
    currentBlockId: '5d-ml',
    selectedThickness: '14mm',
    selectedShade: 'A2',
    sinterMode: 'fast',
    quoteItems: [],
    zirconiaFilter: 'all',
    pmmaFilter: 'all'
  };

  function findBlock(id) {
    for (var i = 0; i < ALL_CATALOG.length; i++) {
      if (ALL_CATALOG[i].id === id) return ALL_CATALOG[i];
    }
    return ALL_CATALOG[0];
  }

  function buildDiscSvg(blockId) {
    var b = findBlock(blockId);
    var imgSrc = b.img || 'uploads/uzm_zircrown_5d_ml_disc.png';
    var boxText = (b.box || 'Ø 98.5 mm (10–25 mm)').replace(/\s*·\s*\d+\s*(?:Katman|Layers|Schichten|طبقات|слоев|层)[^·]*/i, '').trim();
    var tagText = b.tag || 'ZirCrown® Multilayer';
    return (
      '<div class="uzm-hero-disc-display">' +
      '<div class="uzm-hero-disc-glow" aria-hidden="true"></div>' +
      '<img src="' + imgSrc + '" alt="' + (b.title || 'ZirCrown Blok') + ' Gerçek ZirCrown Zirkonya Blok" class="uzm-hero-real-disc-img" width="280" height="210" loading="eager">'+
      '</div>'
    );
  }

  function renderPrism(blockId) {
    var b = findBlock(blockId);
    state.currentBlockId = b.id;
    state.heroMode = 'disc';
    var pillsWrap = document.querySelector('.uzm-prism-pills');
    if (pillsWrap) pillsWrap.classList.remove('is-dimmed');

    document.querySelectorAll('[data-hero-mode]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-hero-mode') === 'disc');
    });

    var titleEl = document.getElementById('heroPrismTitle');
    var transEl = document.getElementById('heroPrismTrans');
    var mpaEl = document.getElementById('heroPrismMpa');
    var tempEl = document.getElementById('heroPrismTemp');
    var indEl = document.getElementById('heroPrismInd');
    var svgEl = document.getElementById('heroPrismSvgHolder');

    if (titleEl) titleEl.textContent = b.title;
    if (transEl) transEl.textContent = b.trans;
    if (mpaEl) mpaEl.textContent = b.mpa;
    if (tempEl) tempEl.textContent = b.temp;
    if (indEl) indEl.textContent = b.indication;
    if (svgEl) svgEl.innerHTML = buildDiscSvg(b.id);

    document.querySelectorAll('[data-prism-select]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-prism-select') === b.id);
    });
  }

  function renderHeroMode(mode) {
    state.heroMode = mode || 'disc';
    var svgEl = document.getElementById('heroPrismSvgHolder');
    var titleEl = document.getElementById('heroPrismTitle');
    var transEl = document.getElementById('heroPrismTrans');
    var mpaEl = document.getElementById('heroPrismMpa');
    var tempEl = document.getElementById('heroPrismTemp');
    var indEl = document.getElementById('heroPrismInd');
    var pillsWrap = document.querySelector('.uzm-prism-pills');

    document.querySelectorAll('[data-hero-mode]').forEach(function (btn) {
      var m = btn.getAttribute('data-hero-mode');
      var isActive = (m === state.heroMode) || (state.heroMode === 'gradient' && m === 'set');
      btn.classList.toggle('is-active', isActive);
    });

    if (state.heroMode === 'box') {
      if (pillsWrap) pillsWrap.classList.add('is-dimmed');
      if (titleEl) titleEl.textContent = 'ZirCrown® Orijinal Ambalaj & CAD/CAM Disk Grubu';
      if (transEl) transEl.textContent = 'Çok Katmanlı Gradyan';
      if (mpaEl) mpaEl.textContent = '800 – 1200 MPa';
      if (tempEl) tempEl.textContent = '1480°C – 1530°C';
      if (indEl) indEl.textContent = 'Resmi ZirCrown Ambalajı, Orijinal Kutu ve Monolitik Restorasyon';
      if (svgEl) {
        svgEl.innerHTML = (
          '<div class="uzm-hero-disc-display uzm-hero-box-display">' +
          '<div class="uzm-hero-disc-glow" aria-hidden="true"></div>' +
          '<img src="/uploads/uzm_zircrown_5d_ml_disc.png" alt="ZirCrown Orijinal Kutu ve Monolitik Köprü Seti" class="uzm-hero-real-disc-img uzm-hero-wide-img" width="340" height="240" loading="eager">'+
          '</div>'
        );
      }
    } else if (state.heroMode === 'set' || state.heroMode === 'gradient') {
      if (pillsWrap) pillsWrap.classList.add('is-dimmed');
      if (titleEl) titleEl.textContent = "ZirCrown® 3'lü Orijinal CAD/CAM Disk Grubu";
      if (transEl) transEl.textContent = '%43 – %60 Translüsensi';
      if (mpaEl) mpaEl.textContent = '650 – 1200 MPa';
      if (tempEl) tempEl.textContent = '1480°C – 1530°C';
      if (indEl) indEl.textContent = 'Doğal Işık Geçirgenliği, Homojen Yoğunluk ve Tam Ark Köprü Uyumu';
      if (svgEl) {
        svgEl.innerHTML = (
          '<div class="uzm-hero-disc-display uzm-hero-set-display">' +
          '<div class="uzm-hero-disc-glow" aria-hidden="true"></div>' +
          '<img src="/uploads/uzm_zircrown_3d_pro_disc.png" alt="ZirCrown 3&apos;l&uuml; Orijinal CAD/CAM Disk Seti (ham_ayna)" class="uzm-hero-real-disc-img uzm-hero-wide-img" width="340" height="200" loading="eager">'+
          '</div>'
        );
      }
    } else if (state.heroMode === 'macro') {
      if (pillsWrap) pillsWrap.classList.add('is-dimmed');
      if (titleEl) titleEl.textContent = 'ZirCrown® Frezelenmiş Monolitik Restorasyon Detayı';
      if (transEl) transEl.textContent = 'Mikro Frezeleme';
      if (mpaEl) mpaEl.textContent = '1200 MPa';
      if (tempEl) tempEl.textContent = 'Sinterleme Sonrası';
      if (indEl) indEl.textContent = 'Yüksek Marjinal Uyum, Anatomik Oklüzal Detay ve Pürüzsüz Yüzey';
      if (svgEl) {
        svgEl.innerHTML = (
          '<div class="uzm-hero-disc-display uzm-hero-macro-display">' +
          '<div class="uzm-hero-disc-glow" aria-hidden="true"></div>' +
          '<img src="/uploads/uzm_zircrown_4d_ml_disc.png" alt="ZirCrown Frezelenmiş Monolitik Restorasyon Makro Görünüm" class="uzm-hero-real-disc-img uzm-hero-wide-img" width="300" height="240" loading="eager">'+
          '</div>'
        );
      }
    } else {
      if (pillsWrap) pillsWrap.classList.remove('is-dimmed');
      renderPrism(state.currentBlockId || '5d-ml');
    }
  }
var CARD_I18N = {
  "tr": {
    "ui": {
      "lot_desc": "Kutu Üzerindeki QR Kod ile Doğrulanır (Parti/Lot İzlenebilirliği)",
      "lbl_trans": "GEÇİRGENLİK",
      "lbl_mpa": "DAYANIM",
      "oem_pmma": "HAM PMMA DİSK",
      "oem_zirconia": "HAM OEM DİSK",
      "foy_title": "Teknik Föy, Spesifikasyon &amp; LOT",
      "th_sku": "Ürün Kodu",
      "th_series": "Yapı / Seri",
      "th_lot": "LOT / Parti Sicili",
      "th_trans": "Işık Geçirgenliği",
      "th_mpa": "Eğilme Direnci",
      "th_density": "Yoğunluk / Tokluk",
      "th_material": "Materyal Özelliği",
      "th_temp": "İşleme / Sıcaklık",
      "th_box": "Kutu &amp; Çap",
      "th_indication": "Endikasyon",
      "th_shades": "Mevcut Renkler",
      "btn_tech_panel": "Teknik Panel",
      "btn_sinter": "Sinter Eğrisi",
      "btn_milling": "Frezeleme Detayı"
    },
    "blocks": {
      "5d-ml": {
        "tag": "10 KATMANLI MULTILAYER · USTALARIN TERCİHİ",
        "sub": "Daha fazla katman, daha doğal geçiş. %47–60 translüsensi, 650–950 MPa bükülme dayanımı ve 10 katmanlı multilayer yapısıyla servikalden insizale doğal renk derinliği ve ışık geçişi sunar.",
        "trans": "%47 – %60",
        "mpa": "650 – 950 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Saat",
        "box": "Ø 98.5 mm (10–25 mm)",
        "indication": "Anterior Estetik, Monolitik Kron &amp; 3–14 Üye Ark"
      },
      "4d-ml": {
        "tag": "9 KATMAN KADEMELİ (5 KATMAN SIRALI) MULTILAYER",
        "sub": "Estetikten vazgeçmeden, ihtiyaç duyduğunuz ekstra güç. %45–59 translüsensi ve 700–1000 MPa dayanım aralığıyla beş katman sıralı, dokuz katman kademeli doğal geçiş sunar.",
        "trans": "%45 – %59",
        "mpa": "700 – 1000 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1490°C · 2 Saat",
        "box": "Ø 98.5 mm (10–25 mm)",
        "indication": "Tam Ark İmplant Üstü, Uzun Köprü &amp; Monolitik Kron"
      },
      "3d-pro": {
        "tag": "6 KATMANLI MULTILAYER DİSK",
        "sub": "Gücün başladığı, estetiğin yükseldiği katmanlı teknoloji. 800–1200 MPa dayanım ve %43–57 translüsensi değerlerini aynı diskte buluşturur; servikalde mekanik destek, insizalde doğal ışık geçirgenliği sağlar.",
        "trans": "%43 – %57",
        "mpa": "800 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Saat",
        "box": "Ø 98.5 mm (10–25 mm)",
        "indication": "Lamina Veneer, Anterior Kron &amp; 3–4 Üye Köprü"
      },
      "3d-ml": {
        "tag": "9 KATMANLI GRADYAN (5 KATMAN KAPLAMA)",
        "sub": "Estetik geçişler, güçlü altyapı, daha fazla tasarım özgürlüğü. %43–46 kontrollü translüsensi ve 900–1200 MPa bükülme dayanımıyla posterior restorasyonlar ve uzun açıklıklı köprüler için yüksek stabilite sunar.",
        "trans": "%43 – %46",
        "mpa": "900 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Saat",
        "box": "Ø 98.5 mm (10–25 mm) · 6 Katman Dengeli",
        "indication": "Monolitik Kron, İnley/Onley &amp; Çok Üyeli Köprü"
      },
      "st-ml": {
        "tag": "4 KATMAN SÜPER TRANSLÜSENT · MALİYET ETKİNLİĞİNİN KRALI",
        "sub": "Katmanlarda doğal geçiş, her seviyede aynı güç. %43 kontrollü translüsensi ve katmanlar boyunca korunan 1200 MPa homojen bükülme dayanımıyla günlük monolitik kron ve köprülerde yüksek güven verir.",
        "trans": "%43 Homojen",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1510°C · 2 Saat",
        "box": "Ø 98.5 mm (10–25 mm) · 4 Katman Monolitik",
        "indication": "Tam Anatomik Posterior Kron &amp; Uzun Gövdeli Köprü"
      },
      "zircrown-ht": {
        "title": "ZirCrown HT Hızlı-Sinter",
        "tag": "YÜKSEK DAYANIM ALTYAPI",
        "sub": "Porselen üstyapı (coping), teleskop kron ve implant üstü barlar için 1200 MPa maksimum direnç.",
        "trans": "%43 – %55",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1520°C – 1530°C",
        "box": "Ø 98.5 mm &amp; 95 mm (10–25 mm) · Altyapı",
        "indication": "Porselen Altyapı, İmplant Bar &amp; Uzun İskelet"
      },
      "pmma-mono": {
        "tag": "MONOLAYER PMMA DİSK",
        "sub": "CAD/CAM sistemleriyle uyumlu, geçici kron ve köprü üretimi için yüksek hassasiyetli monokromatik PMMA diski.",
        "trans": "Doğal Yüzey Kalitesi",
        "mpa": "Yüksek Boyutsal Stabilite",
        "density": "Homojen Materyal Yapısı · Düşük Büzülme Oranı",
        "temp": "Soğuk Frezeleme &amp; Polisaj",
        "box": "98 mm (16, 18, 20, 30 mm) · 95 mm (18 mm) · AG (18 mm)",
        "indication": "Geçici Kron ve Köprü Restorasyonları"
      },
      "pmma-ml": {
        "tag": "MULTILAYER PMMA DİSK",
        "sub": "Doğal dentin ve mine geçişlerini taklit eden katmanlı yapısı sayesinde premium estetik ve doğal görünüm sunar.",
        "trans": "Doğal Katman Geçişi",
        "mpa": "Yüksek Fleksural Dayanım",
        "density": "Doğal Dentin ve Mine Katman Geçişi",
        "temp": "Soğuk Frezeleme &amp; Polisaj",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "Uzun Dönem Geçici Restorasyonlar &amp; Estetik Vakalar"
      },
      "pmma-clear": {
        "tag": "CLEAR ŞEFFAF PMMA DİSK",
        "sub": "Oklüzal splint, gece plağı, horlama apareyi ve koruyucu plak uygulamaları için yüksek optik berraklıkta şeffaf disk.",
        "trans": "Yüksek Optik Berraklık",
        "mpa": "İşlenebilir Güvenilir Performans",
        "density": "Yüksek Optik Berraklık &amp; İşlenebilirlik",
        "temp": "Soğuk Frezeleme &amp; Polisaj",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "Oklüzal Splint, Gece Plağı, Horlama Apareyi, Koruyucu Plak"
      },
      "pmma-xray": {
        "tag": "OPAQUE X-RAY PMMA DİSK",
        "sub": "Radyoopak yapısı sayesinde geçici restorasyonların radyografik değerlendirilmesine olanak sağlayarak tanı, kontrol ve takip avantajı sunar.",
        "trans": "Radyografik Görünürlük",
        "mpa": "Hassas Frezleme &amp; Boyutsal Stabilite",
        "density": "Radyoopak Yapı · Boyutsal Stabilite",
        "temp": "Soğuk Frezeleme &amp; Polisaj",
        "box": "98 × 18 mm (98 mm CAD/CAM Sistemleri)",
        "indication": "Radyografik Olarak Görüntülenebilir Geçici Restorasyonlar"
      }
    }
  },
  "en": {
    "ui": {
      "lot_desc": "Verified via QR Code on Box (Batch/LOT Traceability)",
      "lbl_trans": "TRANSLUCENCY",
      "lbl_mpa": "STRENGTH",
      "oem_pmma": "OEM PMMA DISC",
      "oem_zirconia": "OEM ZIRCONIA DISC",
      "foy_title": "Technical Data, Specs &amp; LOT",
      "th_sku": "Product Code",
      "th_series": "Structure / Series",
      "th_lot": "LOT / Batch Registry",
      "th_trans": "Translucency",
      "th_mpa": "Flexural Strength",
      "th_density": "Density / Toughness",
      "th_material": "Material Characteristic",
      "th_temp": "Processing / Temp",
      "th_box": "Packaging &amp; Diameter",
      "th_indication": "Indication",
      "th_shades": "Available Shades",
      "btn_tech_panel": "Technical Panel",
      "btn_sinter": "Sintering Curve",
      "btn_milling": "Milling Details"
    },
    "blocks": {
      "5d-ml": {
        "title": "ZirCrown 5D-ML (Master's Choice)",
        "tag": "10-LAYER MULTILAYER · MASTER'S CHOICE",
        "sub": "Premium aesthetic block featuring seamless mamelon and translucency gradient from incisal to cervical.",
        "trans": "43% – 60%",
        "mpa": "650 – 950 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Hours",
        "box": "Ø 98.5 mm (10–25 mm)",
        "indication": "Anterior Aesthetics, Monolithic Crowns &amp; 3–14 Unit Arches"
      },
      "4d-ml": {
        "tag": "8-LAYER HYBRID MULTILAYER",
        "sub": "Hybrid series providing reinforced cervical strength for long-span bridges without compromising aesthetics.",
        "trans": "45% – 59%",
        "mpa": "700 – 1000 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1490°C · 2 Hours",
        "box": "Ø 98.5 mm (10–25 mm) · 8 Layer Hybrid",
        "indication": "Full-Arch Implant Supported, Long-Span Bridges &amp; Monolithic Crowns"
      },
      "3d-pro": {
        "tag": "6-LAYER AESTHETIC DISC",
        "sub": "6-layer disc delivering superior chroma accuracy for laminate veneers and anterior restorations.",
        "trans": "43% – 57%",
        "mpa": "800 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Hours",
        "box": "Ø 98.5 mm (12–22 mm) · 6 Aesthetic Layers",
        "indication": "Laminate Veneers, Anterior Crowns &amp; 3–4 Unit Bridges"
      },
      "3d-ml": {
        "tag": "6-LAYER BALANCED SERIES",
        "sub": "Speed, shade consistency, and high marginal stability for everyday dental laboratory practice.",
        "trans": "43% – 46%",
        "mpa": "900 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 2 Hours",
        "box": "Ø 98.5 mm (10–25 mm) · 6 Balanced Layers",
        "indication": "Monolithic Crowns, Inlay/Onlay &amp; Multi-Unit Bridges"
      },
      "st-ml": {
        "tag": "SUPER TRANSLUCENT MONOLITHIC",
        "sub": "Homogeneous 1200 MPa strength across all layers engineered against masticatory forces in the posterior region.",
        "trans": "43% Homogeneous",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1510°C · 2 Hours",
        "box": "Ø 98.5 mm (10–25 mm) · 4 Monolithic Layers",
        "indication": "Full-Anatomic Posterior Crowns &amp; Long-Span Bridges"
      },
      "zircrown-ht": {
        "title": "ZirCrown HT Speed-Sinter",
        "tag": "HIGH-STRENGTH SUBSTRUCTURE",
        "sub": "Maximum 1200 MPa strength for ceramic coping copings, telescopic crowns, and implant-supported bars.",
        "trans": "43% – 55%",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1520°C – 1530°C",
        "box": "Ø 98.5 mm &amp; 95 mm (10–25 mm) · Substructure",
        "indication": "Porcelain Substructures, Implant Bars &amp; Long Frameworks"
      },
      "pmma-mono": {
        "tag": "MONOLAYER PMMA DISC",
        "sub": "High-precision monochromatic PMMA disc compatible with open CAD/CAM systems for provisional crowns and bridges.",
        "trans": "Natural Surface Finish",
        "mpa": "High Dimensional Stability",
        "density": "Homogeneous Polymer Structure · Low Shrinkage",
        "temp": "Cold Milling &amp; Polishing",
        "box": "98 mm (16, 18, 20, 30 mm) · 95 mm (18 mm) · AG (18 mm)",
        "indication": "Provisional Crown and Bridge Restorations"
      },
      "pmma-ml": {
        "tag": "MULTILAYER PMMA DISC",
        "sub": "Replicates natural dentin and enamel transitions with layered structure for premium aesthetics.",
        "trans": "Natural Layer Gradient",
        "mpa": "High Flexural Strength",
        "density": "Natural Dentin and Enamel Transitions",
        "temp": "Cold Milling &amp; Polishing",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "Long-Term Provisionals &amp; Aesthetic Cases"
      },
      "pmma-clear": {
        "tag": "CLEAR TRANSPARENT PMMA DISC",
        "sub": "Highly transparent disc with superior optical clarity for occlusal splints, nightguards, and protective appliances.",
        "trans": "High Optical Clarity",
        "mpa": "Reliable Machining Performance",
        "density": "High Optical Clarity &amp; Precision Machinability",
        "temp": "Cold Milling &amp; Polishing",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "Occlusal Splints, Nightguards, Snoring Devices, Mouthguards"
      },
      "pmma-xray": {
        "tag": "OPAQUE X-RAY RADIOPAQUE PMMA DISC",
        "sub": "Radiopaque composition enables clear radiographic evaluation of provisional restorations for diagnosis and follow-up.",
        "trans": "Radiographic Visibility",
        "mpa": "Precision Milling &amp; Dimensional Stability",
        "density": "Radiopaque Matrix · Dimensional Stability",
        "temp": "Cold Milling &amp; Polishing",
        "box": "98 × 18 mm (98 mm CAD/CAM Systems)",
        "indication": "Radiographically Verifiable Provisionals (Diagnosis, Control &amp; Follow-Up)"
      }
    }
  },
  "ar": {
    "ui": {
      "lot_desc": "التحقق عبر رمز QR على العبوة (تتبع الدفعة / LOT)",
      "lbl_trans": "نفاذية الضوء",
      "lbl_mpa": "المتانة",
      "oem_pmma": "قرص PMMA أصلي",
      "oem_zirconia": "قرص زيركونيا أصلي",
      "foy_title": "المواصفات الفنية ورقم التشغيلة",
      "th_sku": "رمز المنتج",
      "th_series": "الهيكل / السلسلة",
      "th_lot": "سجل الدفعة / LOT",
      "th_trans": "نفاذية الضوء",
      "th_mpa": "مقاومة الانثناء",
      "th_density": "الكثافة والمتانة",
      "th_material": "خصائص المادة",
      "th_temp": "المعالجة والحرارة",
      "th_box": "العبوة والقطر",
      "th_indication": "دواعي الاستعمال",
      "th_shades": "الألوان المتوفرة",
      "btn_tech_panel": "اللوحة الفنية",
      "btn_sinter": "منحنى التلبيد",
      "btn_milling": "تفاصيل التفريز"
    },
    "blocks": {
      "5d-ml": {
        "title": "ZirCrown 5D-ML (خيار الخبراء)",
        "tag": "متعدد الطبقات 10 طبقات · خيار الخبراء",
        "sub": "قرص جمالي فائق يقدم تدرجاً طبيعياً لحلمات المينا ونفاذية الضوء من الحافة القاطعة حتى عنق السن.",
        "trans": "43% – 60%",
        "mpa": "650 – 950 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1500°م · ساعتان",
        "box": "Ø 98.5 مم (10–25 مم) · 10 طبقات",
        "indication": "الجماليات الأمامية، التيجان المتجانسة وجسور 3-14 وحدة"
      },
      "4d-ml": {
        "tag": "هجين متعدد الطبقات 8 طبقات",
        "sub": "سلسلة هجينة توفر مقاومة عنقية معززة للجسور طويلة المدى دون المساومة على الجمالية.",
        "trans": "45% – 59%",
        "mpa": "700 – 1000 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1490°م · ساعتان",
        "box": "Ø 98.5 مم (10–25 مم) · 8 طبقات هجينة",
        "indication": "الجسور الكاملة على الغرسات، الجسور الممتدة والتيجان المتجانسة"
      },
      "3d-pro": {
        "tag": "قرص جمالي ذو 6 طبقات",
        "sub": "قرص ذو 6 طبقات يوفر دقة لونية فائقة لعدسات الفينير والترميمات الأمامية.",
        "trans": "43% – 57%",
        "mpa": "800 – 1200 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1500°م · ساعتان",
        "box": "Ø 98.5 مم (12–22 مم) · 6 طبقات جمالية",
        "indication": "عدسات الفينير، التيجان الأمامية وجسور 3-4 وحدات"
      },
      "3d-ml": {
        "tag": "سلسلة متوازنة ذات 6 طبقات",
        "sub": "سرعة وثبات لوني واستقرار حوافي عالٍ لبيئة عمل مختبرات الأسنان اليومية.",
        "trans": "43% – 46%",
        "mpa": "900 – 1200 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1500°م · ساعتان",
        "box": "Ø 98.5 مم (10–25 مم) · 6 طبقات متوازنة",
        "indication": "التيجان المتجانسة، الحشوات المصبوبة والجسور المتعددة"
      },
      "st-ml": {
        "tag": "متجانس فائق الشفافية",
        "sub": "مقاومة متجانسة بقدرة 1200 ميجا باسكال في كافة الطبقات لمقاومة قوى المضغ الخلفية.",
        "trans": "43% متجانس",
        "mpa": "1200 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1510°م · ساعتان",
        "box": "Ø 98.5 مم (10–25 مم) · 4 طبقات متجانسة",
        "indication": "التيجان الخلفية التشريحية الكاملة والجسور طويلة المدى"
      },
      "zircrown-ht": {
        "title": "ZirCrown HT التلبيد السريع",
        "tag": "هياكل فائقة المتانة",
        "sub": "أقصى مقاومة بقوة 800–1200 ميجا باسكال لهياكل الخزف وتيجان التلسكوب وقضبان الغرسات.",
        "trans": "43% – 55%",
        "mpa": "800–1200 ميجا باسكال",
        "density": "≥6.0 جم/سم³ · 5 ميجا باسكال·م½ · Hv10 1250",
        "temp": "1520°م – 1530°م",
        "box": "Ø 98.5 مم و 95 مم (10–25 مم) · هياكل",
        "indication": "هياكل الخزف، قضبان الغرسات والهياكل الممتدة"
      },
      "pmma-mono": {
        "tag": "قرص PMMA أحادي الطبقة",
        "sub": "قرص PMMA أحادي اللون عالي الدقة متوافق مع أنظمة CAD/CAM لتصنيع التيجان والجسور المؤقتة.",
        "trans": "جودة سطح طبيعية",
        "mpa": "ثبات أبعادي فائق",
        "density": "بنية بوليمر متجانسة · معدل انكماش منخفض",
        "temp": "تفريز بارد وتلميع",
        "box": "98 مم (16، 18، 20، 30 مم) · 95 مم · AG",
        "indication": "ترميمات التيجان والجسور المؤقتة"
      },
      "pmma-ml": {
        "tag": "قرص PMMA متعدد الطبقات",
        "sub": "يحاكي التدرج الطبيعي للعاج والمينا ببنية متعددة الطبقات لتوفير مظهر جمالي فائق.",
        "trans": "تدرج طبقات طبيعي",
        "mpa": "مقاومة انثناء عالية",
        "density": "تدرج طبيعي لطبقات العاج والمينا",
        "temp": "تفريز بارد وتلميع",
        "box": "98 × 18 مم · 95 × 18 مم · AG × 18 مم",
        "indication": "الترميمات المؤقتة طويلة الأمد والحالات الجمالية"
      },
      "pmma-clear": {
        "tag": "قرص PMMA شفاف فائق النقاء",
        "sub": "قرص فائق الشفافية بنقاء بصري متميز لجبائر الإطباق وحراس الليل وأجهزة علاج الشخير.",
        "trans": "شفافية بصرية فائقة",
        "mpa": "أداء تشغيلي موثوق",
        "density": "نقاء بصري استثنائي وسهولة تشغيل",
        "temp": "تفريز بارد وتلميع",
        "box": "98 × 18 مم · 95 × 18 مم · AG × 18 مم",
        "indication": "جبائر الإطباق، الواقيات الليلية، أجهزة مكافحة الشخير والصفائح الواقية"
      },
      "pmma-xray": {
        "tag": "قرص PMMA معتم للأشعة السينية",
        "sub": "تركيبة معتمة للأشعة تتيح التقييم الشعاعي للترميمات المؤقتة لتسهيل التشخيص والمتابعة.",
        "trans": "وضوح شعاعي عالي",
        "mpa": "تفريز دقيق وثبات أبعادي",
        "density": "بنية معتمة للأشعة · ثبات أبعادي",
        "temp": "تفريز بارد وتلميع",
        "box": "98 × 18 مم (أنظمة CAD/CAM 98 مم)",
        "indication": "الترميمات المؤقتة القابلة للفحص الشعاعي (تشخيص، مراقبة ومتابعة)"
      }
    }
  },
  "zh": {
    "ui": {
      "lot_desc": "通过包装盒二维码验证（批号/LOT可追溯性）",
      "lbl_trans": "透光率",
      "lbl_mpa": "抗弯强度",
      "oem_pmma": "原厂 PMMA 树脂盘",
      "oem_zirconia": "原厂氧化锆瓷块",
      "foy_title": "技术数据表与批号",
      "th_sku": "产品型号",
      "th_series": "结构与系列",
      "th_lot": "生产批号 / 追溯码",
      "th_trans": "透光率",
      "th_mpa": "抗弯强度",
      "th_density": "密度与韧性",
      "th_material": "材料特性",
      "th_temp": "加工工艺与温度",
      "th_box": "规格与直径",
      "th_indication": "临床适应症",
      "th_shades": "可选色号",
      "btn_tech_panel": "技术面板",
      "btn_sinter": "烧结曲线",
      "btn_milling": "切削详情"
    },
    "blocks": {
      "5d-ml": {
        "title": "ZirCrown 5D-ML (大师之选)",
        "tag": "10层渐变多层 · 大师之选",
        "sub": "顶级美学氧化锆瓷块，呈现切端至颈缘天然发育沟与透光阶梯过渡。",
        "trans": "43% – 60%",
        "mpa": "650 – 950 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 保温2小时",
        "box": "Ø 98.5 mm (10–25 mm) · 10层结构",
        "indication": "前牙美学修复、一体化全冠与3–14单位长桥"
      },
      "4d-ml": {
        "tag": "8层混合多层",
        "sub": "混合多层系列，在长桥修复体颈部提供超强抗折强度，兼具卓越美学表现。",
        "trans": "45% – 59%",
        "mpa": "700 – 1000 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1490°C · 保温2小时",
        "box": "Ø 98.5 mm (10–25 mm) · 8层混合结构",
        "indication": "全口种植固定桥、长跨度桥体及一体全冠"
      },
      "3d-pro": {
        "tag": "6层高透美学瓷块",
        "sub": "6层美学瓷块，为贴面及前牙美学修复提供精准的色度还原与光泽。",
        "trans": "43% – 57%",
        "mpa": "800 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 保温2小时",
        "box": "Ø 98.5 mm (12–22 mm) · 6层美学结构",
        "indication": "贴面、前牙单冠与3–4单位短桥"
      },
      "3d-ml": {
        "tag": "6层平衡通用系列",
        "sub": "为义齿加工所日常切削提供快速加工、稳定成色与卓越的边缘密合度。",
        "trans": "43% – 46%",
        "mpa": "900 – 1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1500°C · 保温2小时",
        "box": "Ø 98.5 mm (10–25 mm) · 6层平衡结构",
        "indication": "全锆冠、嵌体/高嵌体及多单位修复桥"
      },
      "st-ml": {
        "tag": "超透一体多层",
        "sub": "全层均质 1200 MPa 高强度，专为承受后牙咀嚼负荷设计。",
        "trans": "43% 均质透光",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1510°C · 保温2小时",
        "box": "Ø 98.5 mm (10–25 mm) · 4层单体结构",
        "indication": "全解剖后牙冠与长跨度多单位固定桥"
      },
      "zircrown-ht": {
        "title": "ZirCrown HT 快速烧结",
        "tag": "超强内冠基底材料",
        "sub": "1200 MPa 超高抗折极限，适用于烤瓷基底冠、套筒冠及种植连桥支架。",
        "trans": "43% – 55%",
        "mpa": "1200 MPa",
        "density": "≥6.0 g/cm³ · 5 MPa·m½ · Hv10 1250",
        "temp": "1520°C – 1530°C",
        "box": "Ø 98.5 mm &amp; 95 mm (10–25 mm) · 支架",
        "indication": "烤瓷基底支架、种植连桥支架及长跨度内冠"
      },
      "pmma-mono": {
        "tag": "单色 PMMA 树脂盘",
        "sub": "高精度单色 PMMA 树脂盘，适配开放式 CAD/CAM 系统，用于精密切削临时冠桥。",
        "trans": "自然抛光光洁度",
        "mpa": "优异尺寸稳定性",
        "density": "均质高分子结构 · 低收缩率",
        "temp": "冷加工切削与抛光",
        "box": "98 mm (16, 18, 20, 30 mm) · 95 mm · AG",
        "indication": "临时单冠与桥体修复"
      },
      "pmma-ml": {
        "tag": "多层渐变 PMMA 树脂盘",
        "sub": "多层渐变结构仿真天然牙本质与牙釉质过渡，提供高端自然的临时修复美学。",
        "trans": "自然分层渐变",
        "mpa": "高抗弯曲强度",
        "density": "牙本质与牙釉质自然分层过渡",
        "temp": "冷加工切削与抛光",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "长期临时修复体与前牙美学病例"
      },
      "pmma-clear": {
        "tag": "高透透明 PMMA 树脂盘",
        "sub": "高透明度树脂盘，具有卓越光学清晰度，适用于咬合垫、夜磨牙垫和防鼾矫治器。",
        "trans": "高光学透明度",
        "mpa": "稳定可靠的机加工性能",
        "density": "高光学透光率与优良切削加工性",
        "temp": "冷加工切削与抛光",
        "box": "98 × (16, 18, 20, 30 mm) · 95 × 18 mm · AG × 18 mm",
        "indication": "咬合垫、夜磨牙护齿器、止鼾器、保护性夹板"
      },
      "pmma-xray": {
        "tag": "显影 X-RAY PMMA 放射阻射树脂盘",
        "sub": "显影放射阻射配方，便于临时修复体在 X 射线下的影像学评估与随访检查。",
        "trans": "X 射线影像清晰可见",
        "mpa": "精密切削与尺寸稳定性",
        "density": "均质放射阻射基质 · 优良尺寸稳定性",
        "temp": "冷加工切削与抛光",
        "box": "98 × 18 mm (98 mm CAD/CAM 切削系统)",
        "indication": "X 射线可显影临时修复体（诊断、质控与疗效随访）"
      }
    }
  }
};

  function buildCardHtml(b, lang) {
    lang = lang || window.uzmCurrentLang || (document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang) || 'tr';
    var cDict = (CARD_I18N && CARD_I18N[lang]) || (CARD_I18N && CARD_I18N.tr) || {};
    var bTrans = (cDict.blocks && cDict.blocks[b.id]) || {};
    var ui = cDict.ui || (CARD_I18N.tr && CARD_I18N.tr.ui) || {};

    var isPmma = b.cat === 'pmma';
    var oemLabel = isPmma ? (ui.oem_pmma || 'HAM PMMA DİSK') : (ui.oem_zirconia || 'HAM OEM DİSK');

    var tag = bTrans.tag || b.tag;
    var sub = bTrans.sub || b.sub;
    var density = bTrans.density || b.density;
    var temp = bTrans.temp || b.temp;
    var box = bTrans.box || b.box;
    var indication = bTrans.indication || b.indication;
    var trans = bTrans.trans || b.trans;
    var mpa = bTrans.mpa || b.mpa;

    return (
      '<article class="uzm-block-card" data-cat="' + (b.cat || 'zirconia') + '" data-id="' + b.id + '">' +
      '<div class="uzm-card-top">' +
      '<span class="uzm-mono-tag">' + tag + '</span>' +
      '<span class="uzm-mono-badge">' + b.sku + '</span>' +
      '</div>' +
      '<h3 class="uzm-card-title">' + (bTrans.title || b.title) + '</h3>' +
      '<p class="uzm-card-sub">' + sub + '</p>' +

      '<!-- RESMİ OEM DİSK / ÜRÜN GÖRSELİ (100% BİREBİR EŞLEŞEN TEK SAHNE) -->' +
      '<div class="uzm-card-oem-stage">' +
      '<img src="/' + b.img + '" alt="' + b.title + ' ' + oemLabel + '" class="uzm-card-disc-img" width="220" height="150" loading="eager" decoding="sync">' +
      '</div>' +

      '<div class="uzm-card-metrics">' +
      '<div><span class="uzm-metric-lbl">' + (ui.lbl_trans || 'GEÇİRGENLİK') + '</span><strong>' + trans + '</strong></div>' +
      '<div><span class="uzm-metric-lbl">' + (ui.lbl_mpa || 'DAYANIM') + '</span><strong>' + mpa + '</strong></div>' +
      '</div>' +

      '<!-- VARSAYILAN KAPALI LOT & TEKNİK FÖY PANELİ -->' +
      '<details class="uzm-acilir-panel uzm-card-foy">' +
      '<summary class="uzm-foy-summary">' +
      '<span class="uzm-foy-title">' + (ui.foy_title || 'Teknik Föy, Spesifikasyon &amp; LOT') + '</span>' +
      '<span class="uzm-foy-chevron" aria-hidden="true">+</span>' +
      '</summary>' +
      '<div class="uzm-foy-content">' +
      '<div class="uzm-foy-table-wrap">' +
      '<table class="uzm-foy-table">' +
      '<tbody>' +
      '<tr><th>' + (ui.th_sku || 'Ürün Kodu') + '</th><td><strong>' + b.sku + '</strong></td></tr>' +
      '<tr><th>' + (ui.th_series || 'Yapı / Seri') + '</th><td>' + tag + '</td></tr>' +
      '<tr><th>' + (ui.th_lot || 'LOT / Parti Sicili') + '</th><td><code class="uzm-lot-code">' + (ui.lot_desc || b.lot) + '</code></td></tr>' +
      '<tr><th>' + (ui.th_trans || 'Işık Geçirgenliği') + '</th><td>' + trans + '</td></tr>' +
      '<tr><th>' + (ui.th_mpa || 'Eğilme Direnci') + '</th><td>' + mpa + '</td></tr>' +
      '<tr><th>' + (isPmma ? (ui.th_material || 'Materyal Özelliği') : (ui.th_density || 'Yoğunluk / Tokluk')) + '</th><td>' + density + '</td></tr>' +
      '<tr><th>' + (ui.th_temp || 'İşleme / Sıcaklık') + '</th><td>' + temp + '</td></tr>' +
      '<tr><th>' + (ui.th_box || 'Kutu &amp; Çap') + '</th><td>' + box + '</td></tr>' +
      '<tr><th>' + (ui.th_indication || 'Endikasyon') + '</th><td>' + indication + '</td></tr>' +
      '<tr><th>' + (ui.th_shades || 'Mevcut Renkler') + '</th><td>' + b.shades.join(', ') + '</td></tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</details>' +

      '<div class="uzm-card-actions">' +
      '<button type="button" class="uzm-btn-primary" data-open-drawer="' + b.id + '" data-tab="layers">' + (ui.btn_tech_panel || 'Teknik Panel') + '</button>' +
      (isPmma
        ? '<button type="button" class="uzm-btn-outline" data-open-drawer="' + b.id + '" data-tab="sinter">' + (ui.btn_milling || 'Frezeleme Detayı') + '</button>'
        : '<button type="button" class="uzm-btn-outline" data-open-drawer="' + b.id + '" data-tab="sinter">' + (ui.btn_sinter || 'Sinter Eğrisi') + '</button>') +
      '</div>' +
      '</article>'
    );
  }

  function renderCards(filterGroup, langCode) {
    if (filterGroup) state.zirconiaFilter = filterGroup;
    var lang = langCode || window.uzmCurrentLang || (document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang) || 'tr';
    if (!CARD_I18N[lang]) lang = 'tr';
    var grid = document.getElementById('uzmBlockCardsGrid');
    if (grid) {
      var html = '';
      ZIRCROWN_BLOCKS.forEach(function (b) {
        if (state.zirconiaFilter && state.zirconiaFilter !== 'all' && b.indGroup !== state.zirconiaFilter) return;
        html += buildCardHtml(b, lang);
      });
      grid.innerHTML = html;
    }

    renderPmmaCards(state.pmmaFilter, lang);
    var curB = findBlock(state.currentBlockId || '5d-ml');
    var bTr = (CARD_I18N[lang] && CARD_I18N[lang].blocks && CARD_I18N[lang].blocks[curB.id]) || {};
    var dTag = document.getElementById('drawerBlockTag');
    var dTit = document.getElementById('drawerBlockTitle');
    var dDesc = document.getElementById('drawerBlockDesc');
    if (dTag) dTag.textContent = (bTr.tag || curB.tag);
    if (dTit) dTit.textContent = (bTr.title || curB.title);
    if (dDesc) dDesc.textContent = (bTr.sub || curB.sub);
  }

  function renderPmmaCards(pmmaFilter, langCode) {
    if (pmmaFilter) state.pmmaFilter = pmmaFilter;
    var lang = langCode || window.uzmCurrentLang || (document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang) || 'tr';
    if (!CARD_I18N[lang]) lang = 'tr';
    var pmmaGrid = document.getElementById('uzmPmmaCardsGrid');
    if (!pmmaGrid) return;
    var html = '';
    PMMA_BLOCKS.forEach(function (b) {
      if (state.pmmaFilter && state.pmmaFilter !== 'all' && b.indGroup !== state.pmmaFilter) return;
      html += buildCardHtml(b, lang);
    });
    pmmaGrid.innerHTML = html;
  }


  function updateDrawerSummary() {
    var b = findBlock(state.currentBlockId);
    var sumEl = document.getElementById('drawerSelectedSummary');
    if (sumEl) {
      sumEl.textContent = b.title + ' · ' + state.selectedThickness + ' · ' + state.selectedShade;
    }
  }

  function renderSinterCurve(mode) {
    state.sinterMode = mode || 'fast';
    var wrap = document.getElementById('drawerSinterSvgWrap');
    var steps = document.getElementById('drawerSinterSteps');
    if (!wrap || !steps) return;

    var b = findBlock(state.currentBlockId);
    if (b && b.cat === 'pmma') {
      wrap.innerHTML =
        '<svg viewBox="0 0 420 150" width="100%" height="150">' +
        '<polyline fill="none" stroke="#0066CC" stroke-width="3" points="20,120 140,75 260,65 400,65"/>' +
        '<circle cx="260" cy="65" r="5" fill="#0284C7"/>' +
        '<text x="260" y="52" text-anchor="middle" fill="#0F172A" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">18.000–25.000 RPM · &lt;60°C</text>' +
        '<text x="25" y="144" fill="#64748B" font-family="JetBrains Mono, monospace" font-size="10">Soğuk Frezeleme &amp; Yüksek Parlaklıkta Polisaj</text>' +
        '</svg>';
      steps.innerHTML = '<p class="uzm-mono-tag">Tek Ağızlı Karbür Frez · Düşük Devir Silikon &amp; Keçe Polisaj</p>';
      return;
    }

    var cfg = {
      fast: { peak: '1500°C', total: '7 Saat (1–3 Üye)', rate: '10°C/dk Isıtma · 2 Saat Bekleme' },
      std: { peak: '1500°C', total: '9.5 Saat (4–6 Üye)', rate: '10°C/dk ve 3°C/dk Isıtma · 2 Saat Bekleme' },
      long: { peak: '1530°C', total: '15 Saat (7+ Üye Ark)', rate: '5°C/dk ve 2°C/dk Kontrollü Isıtma · 2 Saat Bekleme' }
    }[state.sinterMode] || { peak: '1500°C', total: '7 Saat', rate: '10°C/dk Isıtma · 2 Saat Bekleme' };

    wrap.innerHTML =
      '<svg viewBox="0 0 420 150" width="100%" height="150">' +
      '<polyline fill="none" stroke="#0066CC" stroke-width="3" points="20,130 130,65 240,25 320,25 400,125"/>' +
      '<circle cx="240" cy="25" r="5" fill="#D97706"/>' +
      '<text x="240" y="16" text-anchor="middle" fill="#0F172A" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">' + cfg.peak + '</text>' +
      '<text x="25" y="144" fill="#64748B" font-family="JetBrains Mono, monospace" font-size="10">' + cfg.total + '</text>' +
      '</svg>';

    steps.innerHTML = '<p class="uzm-mono-tag">' + cfg.rate + '</p>';
  }


  function ensureDrawerModalInDom() {
    var existing = document.getElementById('uzmSlideOverDrawer');
    if (existing) {
      var closeBtn = document.getElementById('uzmDrawerCloseBtn');
      if (closeBtn) closeBtn.style.display = 'inline-flex';
      return existing;
    }
    var sec = document.createElement('section');
    sec.id = 'uzmDrawerInlineSection';
    sec.className = 'uzm-section uzm-drawer-inline-section';
    sec.innerHTML = '<div class="uzm-container">' +
      '<aside class="uzm-slide-drawer uzm-inline-drawer" id="uzmSlideOverDrawer" aria-hidden="true">' +
      '<div class="uzm-drawer-header" style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.85rem;margin-bottom:1rem;">' +
      '<div><span class="uzm-drawer-badge" id="uzmDrawerTag">10 Katmanlı Multilayer</span>' +
      '<h3 class="uzm-drawer-title" id="uzmDrawerTitle" style="margin:0.25rem 0;">ZirCrown 5D-ML</h3>' +
      '<p class="uzm-drawer-sub" id="uzmDrawerSub" style="margin:0;font-size:0.85rem;color:#64748b;">650–950 MPa · %47–%60 Translokasyon</p></div>' +
      '<button type="button" class="uzm-drawer-close" id="uzmDrawerCloseBtn" aria-label="Paneli Kapat">✕</button></div>' +
      '<div class="uzm-drawer-tabs" role="tablist" style="display:flex;gap:0.5rem;margin-bottom:1rem;">' +
      '<button type="button" class="uzm-drawer-tab is-active" data-drawer-tab="layers">1. Katman & Varyant</button>' +
      '<button type="button" class="uzm-drawer-tab" data-drawer-tab="sinter">2. Sinterleme Eğrisi</button>' +
      '<button type="button" class="uzm-drawer-tab" data-drawer-tab="studio">3. Ham Disk ⇄ Kron</button></div>' +
      '<div class="uzm-drawer-body">' +
      '<div class="uzm-tab-pane is-active" id="drawerTabLayers"><div id="uzmDrawerQuickSpecs" class="uzm-drawer-quick-specs"></div><div id="uzmLayerVisualizer" class="uzm-layer-visualizer"></div><div id="uzmIndicationChips" class="uzm-ind-chips"></div><div id="uzmVariantMatrix" class="uzm-variant-matrix"></div></div>' +
      '<div class="uzm-tab-pane" id="drawerTabSinter" hidden><div style="display:flex;gap:0.5rem;margin-bottom:0.75rem;"><button type="button" class="uzm-sinter-btn is-active" data-sinter-mode="standard">Standart (150dk)</button><button type="button" class="uzm-sinter-btn" data-sinter-mode="fast">Hızlı (45dk)</button></div><div id="uzmSinterSvgWrap" class="uzm-sinter-svg-wrap"></div><div id="uzmSinterSteps" class="uzm-sinter-steps"></div></div>' +
      '<div class="uzm-tab-pane" id="drawerTabStudio" hidden><div id="uzmBeforeAfterMount"></div></div>' +
      '</div></aside></div>';
    document.body.appendChild(sec);
    return document.getElementById('uzmSlideOverDrawer');
  }

  function openDrawer(blockId, startTab, userTriggered) {
    var item = findById(blockId) || BLOCKS[0];
    if (!item) return;
    activeDrawerItem = item;
    var drawer = ensureDrawerModalInDom();
    var inlineSec = document.getElementById('uzmDrawerInlineSection');
    var closeBtn = document.getElementById('uzmDrawerCloseBtn');
    if (closeBtn) closeBtn.style.display = 'inline-flex';
    if (!drawer) return;

    var tagEl = document.getElementById('uzmDrawerTag');
    var titleEl = document.getElementById('uzmDrawerTitle');
    var subEl = document.getElementById('uzmDrawerSub');
    if (tagEl) tagEl.textContent = item.layerTag;
    if (titleEl) titleEl.textContent = item.title;
    if (subEl) subEl.textContent = item.strength + ' · ' + item.translucency + ' Translokasyon · ' + item.system;

    switchDrawerTab(startTab || 'layers');
    renderDrawerContent(item);

    if (userTriggered) {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      if (inlineSec) inlineSec.classList.add('is-modal-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    var drawer = document.getElementById('uzmSlideOverDrawer');
    var inlineSec = document.getElementById('uzmDrawerInlineSection');
    if (drawer) {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    if (inlineSec) {
      inlineSec.classList.remove('is-modal-open');
    }
    document.body.style.overflow = '';
  }

  function switchDrawerTab(tabName) {
    document.querySelectorAll('[data-drawer-tab]').forEach(function (btn) {
      var active = btn.getAttribute('data-drawer-tab') === tabName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.getElementById('drawerTabLayers').hidden = tabName !== 'layers';
    document.getElementById('drawerTabSinter').hidden = tabName !== 'sinter';
    document.getElementById('drawerTabStudio').hidden = tabName !== 'studio';
  }

  function updateCompareStage(val) {
    var stage = document.getElementById('drawerCompareStage');
    if (!stage) return;
    var b = findBlock(state.currentBlockId);
    if (!b) return;
    var rawText = b.cat === 'pmma'
      ? 'Ham PMMA CAD/CAM Disk (Soğuk Frezeleme Öncesi Homojen Blok)'
      : 'Ham CIP Zirkonya Disk (Mat Tebeşir Dokusu)';
    var finishedText = b.cat === 'pmma'
      ? 'Yüksek Parlaklıkta Polisajlı Geçici Restorasyon (Doğal Diş Eti & Mine Uyumu)'
      : '1500°C–1530°C Sinterlenmiş Monolitik Restorasyon (Doğal Opalesans & Mamelon)';

    stage.innerHTML =
      '<div class="uzm-compare-stage-meta">' +
      b.title + ' · Dönüşüm Oranı: %' + val +
      '</div>' +
      '<div class="uzm-compare-stage-title uzm-text-lg">' +
      (val < 50 ? rawText : finishedText) +
      '</div>';
  }

  function renderQuoteList() {
    var badge = document.getElementById('uzmTrayBadge');
    if (badge) badge.textContent = String(state.quoteItems.length);
    var list = document.getElementById('uzmQuoteItemsList');
    if (!list) return;
    list.innerHTML = state.quoteItems.map(function (item, idx) {
      return (
        '<div class="uzm-quote-item">' +
        '<span>' + item + '</span>' +
        '<button type="button" class="uzm-table-btn" data-remove-quote="' + idx + '">Sil</button>' +
        '</div>'
      );
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderPrism('5d-ml');
    renderCards('all');
    renderQuoteList();
    try { openDrawer('5d-ml', 'studio'); closeDrawer(); } catch (e) {}

    document.body.addEventListener('click', function (e) {
      var heroModeBtn = e.target.closest('[data-hero-mode]');
      if (heroModeBtn) {
        renderHeroMode(heroModeBtn.getAttribute('data-hero-mode'));
        return;
      }

      var prismBtn = e.target.closest('[data-prism-select]');
      if (prismBtn) {
        renderPrism(prismBtn.getAttribute('data-prism-select'));
        document.querySelectorAll('[data-prism-select]').forEach(function (b) {
          b.classList.toggle('is-active', b === prismBtn);
        });
        return;
      }

      var openCurrent = e.target.closest('[data-open-drawer-current]');
      if (openCurrent) {
        openDrawer(state.currentBlockId, 'layers');
        return;
      }

      var openBtn = e.target.closest('[data-open-drawer], [data-inspect-block]');
      if (openBtn) {
        var curSel = openBtn.getAttribute('aria-selected') === 'true';
        openBtn.setAttribute('aria-selected', curSel ? 'false' : 'true');
        openBtn.classList.toggle('is-active');
        var targetBlock = openBtn.getAttribute('data-open-drawer') || openBtn.getAttribute('data-inspect-block');
        openDrawer(targetBlock, openBtn.getAttribute('data-tab') || 'layers');
        return;
      }

      var filterBtn = e.target.closest('[data-ind-filter]');
      if (filterBtn) {
        document.querySelectorAll('[data-ind-filter]').forEach(function (b) {
          b.classList.toggle('is-active', b === filterBtn);
        });
        renderCards(filterBtn.getAttribute('data-ind-filter'));
        return;
      }

      var pmmaFilterBtn = e.target.closest('[data-pmma-filter]');
      if (pmmaFilterBtn) {
        document.querySelectorAll('[data-pmma-filter]').forEach(function (b) {
          b.classList.toggle('is-active', b === pmmaFilterBtn);
        });
        renderPmmaCards(pmmaFilterBtn.getAttribute('data-pmma-filter'));
        return;
      }

      var tabBtn = e.target.closest('[data-drawer-tab]');
      if (tabBtn) {
        switchDrawerTab(tabBtn.getAttribute('data-drawer-tab'));
        return;
      }

      var thBtn = e.target.closest('[data-pick-th]');
      if (thBtn) {
        state.selectedThickness = thBtn.getAttribute('data-pick-th');
        document.querySelectorAll('[data-pick-th]').forEach(function (b) {
          b.classList.toggle('is-active', b === thBtn);
        });
        updateDrawerSummary();
        return;
      }

      var shBtn = e.target.closest('[data-pick-sh]');
      if (shBtn) {
        state.selectedShade = shBtn.getAttribute('data-pick-sh');
        document.querySelectorAll('[data-pick-sh]').forEach(function (b) {
          b.classList.toggle('is-active', b === shBtn);
        });
        updateDrawerSummary();
        return;
      }

      var sinterBtn = e.target.closest('[data-sinter-mode]');
      if (sinterBtn) {
        document.querySelectorAll('[data-sinter-mode]').forEach(function (b) {
          b.classList.toggle('is-active', b === sinterBtn);
        });
        renderSinterCurve(sinterBtn.getAttribute('data-sinter-mode'));
        return;
      }

      var accTrigger = e.target.closest('[data-open-accordion]');
      if (accTrigger) {
        var targetId = accTrigger.getAttribute('data-open-accordion');
        var det = document.getElementById(targetId);
        if (det) det.open = true;
        return;
      }

      var addQuoteBtn = e.target.closest('[data-add-quote]');
      if (addQuoteBtn) {
        state.quoteItems.push(addQuoteBtn.getAttribute('data-add-quote'));
        renderQuoteList();
        openQuoteModal();
        return;
      }

      var remQuoteBtn = e.target.closest('[data-remove-quote]');
      if (remQuoteBtn) {
        var idx = parseInt(remQuoteBtn.getAttribute('data-remove-quote'), 10);
        state.quoteItems.splice(idx, 1);
        renderQuoteList();
        return;
      }
    });

    var closeBtn = document.getElementById('uzmCloseDrawerBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    var backdrop = document.getElementById('uzmDrawerBackdrop');
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    var rangeInput = document.getElementById('drawerCompareRange');
    if (rangeInput) {
      rangeInput.addEventListener('input', function () {
        updateCompareStage(parseInt(rangeInput.value, 10));
      });
    }

    function openQuoteModal() {
      var modal = document.getElementById('uzmQuoteModal');
      if (modal) {
        modal.hidden = false;
        modal.classList.add('is-open');
      }
    }

    function closeQuoteModal() {
      var modal = document.getElementById('uzmQuoteModal');
      if (modal) {
        modal.hidden = true;
        modal.classList.remove('is-open');
      }
    }

    var addDrawerBtn = document.getElementById('drawerAddToQuoteBtn');
    if (addDrawerBtn) {
      addDrawerBtn.addEventListener('click', function () {
        var sum = document.getElementById('drawerSelectedSummary').textContent;
        state.quoteItems.push(sum);
        renderQuoteList();
        closeDrawer();
        openQuoteModal();
      });
    }

    var trayBtn = document.getElementById('uzmQuoteTrayBtn');
    if (trayBtn) {
      trayBtn.addEventListener('click', function () {
        openQuoteModal();
      });
    }

    var mobileQuoteBtn = document.getElementById('uzmMobileQuoteBtn');
    if (mobileQuoteBtn) {
      mobileQuoteBtn.addEventListener('click', function () {
        openQuoteModal();
      });
    }

    var hamburgerBtn = document.getElementById('uzmHamburgerBtn');
    var mainNav = document.getElementById('uzmMainNav');
    if (hamburgerBtn && mainNav) {
      hamburgerBtn.addEventListener('click', function () {
        var isOpen = mainNav.classList.toggle('is-open');
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        var icon = hamburgerBtn.querySelector('.uzm-hamburger-icon');
        if (icon) icon.textContent = isOpen ? '✕' : '☰';
      });

      var navLinks = mainNav.querySelectorAll('.uzm-nav-link');
      for (var ni = 0; ni < navLinks.length; ni++) {
        navLinks[ni].addEventListener('click', function () {
          mainNav.classList.remove('is-open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          var icon = hamburgerBtn.querySelector('.uzm-hamburger-icon');
          if (icon) icon.textContent = '☰';
        });
      }
    }

    var closeQuoteBtn = document.getElementById('uzmCloseQuoteBtn');
    if (closeQuoteBtn) {
      closeQuoteBtn.addEventListener('click', function () {
        closeQuoteModal();
      });
    }

    var quoteModalEl = document.getElementById('uzmQuoteModal');
    if (quoteModalEl) {
      quoteModalEl.addEventListener('click', function (e) {
        if (e.target === quoteModalEl) closeQuoteModal();
      });
    }

    var themeBtn = document.getElementById('uzmThemeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var html = document.documentElement;
        var isDark = html.getAttribute('data-theme') === 'obsidian';
        var next = isDark ? 'luminous' : 'obsidian';
        html.setAttribute('data-theme', next);
        var lbl = document.getElementById('uzmThemeLabel');
        if (lbl) lbl.textContent = next === 'obsidian' ? 'Açık Mod' : 'Obsidyen Mod';
      });
    }

    var waBtn = document.getElementById('uzmSendWhatsAppBtn');
    if (waBtn) {
      waBtn.addEventListener('click', function () {
        var lab = document.getElementById('uzmLabNameInput').value || 'Laboratuvar/Klinik';
        var msg = 'Merhaba UZM Dental, ' + lab + ' için numune/fiyat talebim:\n- ' + state.quoteItems.join('\n- ');
        window.open('https://wa.me/905426460220?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      });
    }
  });

  window.renderUzmCards = renderCards;
  window.CARD_I18N = CARD_I18N;

  /* ========================================================================== */
  /* UZM DENTAL - STÜDYO RESTORASYON LIGHTBOX & ZOOM MODALİ                    */
  /* ========================================================================== */
  var STUDIO_40_DICT = {
    "IMG_7207": { title: "ZirCrown® 3D-ML · VITA A2 (3 Üye Köprü)", badge: "3D-ML · A2" },
    "IMG_7208": { title: "ZirCrown® 3D-ML · VITA A2 (Oklüzal Açı)", badge: "3D-ML · A2" },
    "IMG_7220": { title: "ZirCrown® 3D-ML · VITA D2 (3 Üye Köprü)", badge: "3D-ML · D2" },
    "IMG_7221": { title: "ZirCrown® 3D-ML · VITA D2 (Yakın Plan)", badge: "3D-ML · D2" },
    "IMG_7222": { title: "ZirCrown® ST-ML · VITA A2 (Monolitik Köprü)", badge: "ST-ML · A2" },
    "IMG_7223": { title: "ZirCrown® ST-ML · VITA A2 (Bukkal Profil)", badge: "ST-ML · A2" },
    "IMG_7224": { title: "ZirCrown® ST-ML · VITA A2 (Yüksek Translüsensi)", badge: "ST-ML · A2" },
    "IMG_7225": { title: "ZirCrown® ST-ML · VITA A2 (Oklüzal Morfoloji)", badge: "ST-ML · A2" },
    "IMG_7227": { title: "ZirCrown® ST-ML · VITA D2 (Monolitik Köprü)", badge: "ST-ML · D2" },
    "IMG_7228": { title: "ZirCrown® ST-ML · VITA D2 (Ayna Yansıma)", badge: "ST-ML · D2" },
    "IMG_7230": { title: "ST-ML D2 vs ST-ML A2 Renk Karşılaştırması", badge: "ST-ML · D2 | ST-ML · A2" },
    "IMG_7231": { title: "ST-ML D2 vs ST-ML A2 Çift Açı", badge: "ST-ML · D2 | ST-ML · A2" },
    "IMG_7233": { title: "ST-ML D2 vs 3D-ML D2 Seri Karşılaştırması", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7234": { title: "ST-ML D2 vs 3D-ML D2 Gradyan Geçiş", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7235": { title: "3D-ML A2 vs ST-ML A2 Translüsensi Kıyas", badge: "3D-ML · A2 | ST-ML · A2" },
    "IMG_7236": { title: "3D-ML A2 vs 3D-ML D2 Ton Karşılaştırması", badge: "3D-ML · A2 | 3D-ML · D2" },
    "IMG_7237": { title: "3D-ML A2 vs 3D-ML D2 İnsizal Işık Geçirgenliği", badge: "3D-ML · A2 | 3D-ML · D2" },
    "IMG_7240": { title: "3D-ML A2 vs ST-ML A2 İkili Köprü", badge: "3D-ML · A2 | ST-ML · A2" },
    "IMG_7241": { title: "3D-ML A2 vs ST-ML A2 Oklüzal Kıyas", badge: "3D-ML · A2 | ST-ML · A2" },
    "IMG_7246": { title: "VITA A2 Skalası İle 3D-ML A2 vs ST-ML A2 Doğrulaması", badge: "3D-ML · A2 | ST-ML · A2" },
    "IMG_7247": { title: "VITA A2 Tab İle Birebir Kroma Eşleşmesi", badge: "3D-ML · A2 | ST-ML · A2" },
    "IMG_7248": { title: "VITA D2 Skalası İle ST-ML D2 vs 3D-ML D2 Doğrulaması", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7249": { title: "VITA D2 Tab İle Servikal-İnsizal Geçiş", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7250": { title: "VITA D2 Referanslı Çift Seri Karşılaştırması", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7251": { title: "VITA D2 Skalası Altında Doğal Floresans", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7252": { title: "VITA D2 Skalası Ön-Arka Yansıma Analizi", badge: "ST-ML · D2 | 3D-ML · D2" },
    "IMG_7253": { title: "Alçı Model Üzerinde ZirCrown® ST-ML · VITA A2 Restorasyon", badge: "ST-ML · A2" },
    "IMG_7255": { title: "ZirCrown® Multilayer Uzun Ark Köprü (Bukkal Görünüm)", badge: "5D-ML · A2" },
    "IMG_7256": { title: "ZirCrown® Multilayer Uzun Ark Köprü (İnsizal Translüsensi)", badge: "5D-ML · A2" },
    "IMG_7257": { title: "ZirCrown® Multilayer Uzun Ark Köprü (Oklüzal Ark)", badge: "5D-ML · A2" },
    "IMG_7258": { title: "ZirCrown® ST-ML · VITA A2 Uzun Ark Anterior-Posterior Köprü", badge: "ST-ML · A2" },
    "IMG_7259": { title: "ZirCrown® ST-ML · VITA A2 Tam Ark Estetik Geçiş", badge: "ST-ML · A2" },
    "IMG_7260": { title: "ZirCrown® ST-ML · VITA A2 Gingival-İnsizal Gradyan", badge: "ST-ML · A2" },
    "IMG_7261": { title: "ZirCrown® ST-ML · VITA A2 Çok Üyeli Ark", badge: "ST-ML · A2" },
    "IMG_7262": { title: "ZirCrown® ST-ML · VITA A2 Lingual-Oklüzal Detay", badge: "ST-ML · A2" },
    "IMG_7263": { title: "ZirCrown® CAD/CAM Frezelenmiş Disk İçi Köprü Yuvaları", badge: "3D-PRO · A2" },
    "IMG_7264": { title: "ZirCrown® 3D-PRO A2 (Ø98×18mm) Kutu ve Frezelenmiş Disk", badge: "3D-PRO · A2" },
    "IMG_7265": { title: "ZirCrown® 3D-PRO A2 Resmi Kutu & CAD/CAM Disk Seti", badge: "3D-PRO · A2" },
    "IMG_7266": { title: "ZirCrown® 3D-PRO A2 18mm Disk ve Sinter Öncesi Freze", badge: "3D-PRO · A2" },
    "IMG_7267": { title: "ZirCrown® 3D-PRO Multilayer Zirconia Disc Stüdyo Kompozisyonu", badge: "3D-PRO · A2" }
  };

  window.openUzmStudio40Modal = function (code) {
    if (!code) return;
    var cleanCode = String(code).toUpperCase().trim();
    var meta = STUDIO_40_DICT[cleanCode] || {};
    var title = meta.title || ('ZirCrown® Sinterlenmiş Restorasyon (' + cleanCode + ')');
    var badge = meta.badge || cleanCode;
    var src = '/images/products/studio_40/' + cleanCode + '.jpg';

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
      modal.addEventListener('click', function (ev) {
        if (ev.target.closest('[data-close-studio40]')) {
          modal.classList.remove('open');
        }
      });
      document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape' && modal.classList.contains('open')) {
          modal.classList.remove('open');
        }
      });
    }

    var imgEl = document.getElementById('uzmStudio40LightboxImg');
    if (imgEl) {
      imgEl.src = src;
      imgEl.alt = title;
    }
    var badgeEl = document.getElementById('uzmStudio40LightboxBadge');
    if (badgeEl) {
      badgeEl.textContent = badge;
      badgeEl.style.display = badge ? 'inline-block' : 'none';
    }
    var titleEl = document.getElementById('uzmStudio40LightboxTitle');
    if (titleEl) {
      titleEl.textContent = title;
    }
    modal.classList.add('open');
  };

  // Global click delegator for studio restoration photos (lightbox zoom)
  document.addEventListener('click', function (ev) {
    var trigger = ev.target.closest('.uzm-studio-visual, .uzm-studio-img, .uzm-studio-card');
    if (!trigger) return;
    if (ev.target.closest('a') && !ev.target.closest('.uzm-studio-visual')) return;
    var img = trigger.querySelector('img') || (trigger.tagName === 'IMG' ? trigger : null);
    if (!img) return;
    var src = img.getAttribute('src') || '';
    var match = src.match(/(IMG_\d+)/i);
    if (match && match[1] && window.openUzmStudio40Modal) {
      ev.preventDefault();
      window.openUzmStudio40Modal(match[1]);
    }
  });

})();

/* UZM Optical Simulator & Universal Tabs Handler */
(function(){
  var SERIES_OPTIC_DATA = {
    "5D-ML": {
      trans: "%47 – %60",
      mpa: "650 – 950 MPa",
      temp: "1500 °C",
      layers: "10 Katman (3+4+3)",
      img: "/uploads/uzm_zircrown_5d_ml_disc.png",
      photoStatus: "ZirCrown® 5D-ML Orijinal CAD/CAM Disk",
      isOriginalLabeled: true,
      specs: ["%47 – %60 Translüsensi · 650 – 950 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    },
    "4D-ML": {
      trans: "%45 – %59",
      mpa: "700 – 1000 MPa",
      temp: "1500 °C",
      layers: "9 Katman Kademeli",
      img: "/uploads/uzm_zircrown_4d_ml_disc.png",
      photoStatus: "ZirCrown® 4D-ML Orijinal CAD/CAM Disk",
      isOriginalLabeled: true,
      specs: ["%45 – %59 Translüsensi · 700 – 1000 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    },
    "3D-PRO": {
      trans: "%43 – %57",
      mpa: "800 – 1200 MPa",
      temp: "1500 °C",
      layers: "6 Katman Multilayer",
      img: "/uploads/uzm_zircrown_3d_pro_disc.png",
      photoStatus: "ZirCrown® 3D-PRO Orijinal CAD/CAM Disk",
      isOriginalLabeled: true,
      specs: ["%43 – %57 Translüsensi · 800 – 1200 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    },
    "3D-ML": {
      trans: "%43 – %46",
      mpa: "900 – 1200 MPa",
      temp: "1500 °C",
      layers: "9 Katman Gradyan",
      img: "/uploads/uzm_zircrown_3d_ml_disc.png",
      photoStatus: "ZirCrown® 3D-ML Orijinal CAD/CAM Disk",
      isOriginalLabeled: true,
      specs: ["%43 – %46 Translüsensi · 900 – 1200 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    },
    "ST-ML": {
      trans: "%43 Homojen",
      mpa: "1200 MPa",
      temp: "1530 °C",
      layers: "4 Katman Multilayer",
      img: "/uploads/uzm_zircrown_st_ml_disc.png",
      photoStatus: "ZirCrown® ST-ML Orijinal CAD/CAM Disk",
      isOriginalLabeled: true,
      specs: ["%43 Translüsensi · 1200 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    },
    "FAST-3D-PRO": {
      trans: "%43 – %55",
      mpa: "800 – 1200 MPa",
      temp: "1500 °C",
      layers: "6 Katman Hızlı Sinterleme",
      img: "/uploads/uzm_zircrown_fast_3d_pro_disc.png",
      photoStatus: "ZirCrown® Hızlı Sinterleme 3D-PRO Disk",
      isOriginalLabeled: true,
      specs: ["%43 – %55 Translüsensi · 800 – 1200 MPa (Yoğunluk ≥ 6.0 g/cm³ · 5 MPa·m½ · Hv10 1250)"]
    }
  };

  function applySeriesSelection(seriesKey, clickedBtn) {
    var d = SERIES_OPTIC_DATA[seriesKey] || SERIES_OPTIC_DATA["5D-ML"];
    document.querySelectorAll('.uzm-series-btn[data-series]').forEach(function(b){
      var match = (b.getAttribute('data-series') === seriesKey);
      b.classList.toggle('active', match);
      b.classList.toggle('is-active', match);
      b.setAttribute('aria-pressed', match ? 'true' : 'false');
    });
    var elTrans = document.getElementById('metricTrans');
    var elMpa = document.getElementById('metricMpa');
    var elTemp = document.getElementById('metricTemp');
    var elLayers = document.getElementById('metricLayers');
    if (elTrans) elTrans.textContent = d.trans;
    if (elMpa) elMpa.textContent = d.mpa;
    if (elTemp) elTemp.textContent = d.temp;
    if (elLayers) elLayers.textContent = d.layers;
    var elImg = document.getElementById('uzmLensImage');
    if (elImg && d.img) {
      elImg.src = d.img;
      elImg.alt = d.photoStatus + ' (' + d.trans + ' · ' + d.mpa + ')';
    }
    var elNotice = document.getElementById('uzmLensImageNotice');
    if (elNotice && d.photoStatus) {
      elNotice.textContent = d.photoStatus;
    }

    var bars = document.querySelectorAll('#uzmLayersContainer .uzm-layer-bar .uzm-layer-spec');
    bars.forEach(function(sp, idx){
      if (d.specs[idx]) sp.textContent = d.specs[idx];
    });
    document.querySelectorAll('.uzm-sku-table tbody tr').forEach(function(tr){
      var txt = (tr.textContent || '').toUpperCase();
      var hit = txt.indexOf(seriesKey.toUpperCase()) !== -1;
      tr.classList.toggle('is-highlighted', hit);
      tr.style.backgroundColor = hit ? 'rgba(14, 165, 233, 0.08)' : '';
    });
  }

  function initUzmInteractive(){
    document.querySelectorAll('.uzm-series-btn[data-series]').forEach(function(btn){
      if (btn.dataset.uzmSeriesBound) return;
      btn.dataset.uzmSeriesBound = "1";
      btn.addEventListener('click', function(e){
        e.preventDefault();
        var s = btn.getAttribute('data-series');
        if (s) applySeriesSelection(s, btn);
      });
    });

    var allFilterBtns = document.querySelectorAll('[data-ind-filter], [data-studio40-filter], [data-filter], [data-cat], .uzm-filter-btn, .filter-btn');
    allFilterBtns.forEach(function(btn){
      if (btn.dataset.uzmFilterBound) return;
      btn.dataset.uzmFilterBound = "1";
      btn.addEventListener('click', function(e){
        var f = btn.getAttribute('data-ind-filter') || btn.getAttribute('data-studio40-filter') || btn.getAttribute('data-filter') || btn.getAttribute('data-cat');
        if (!f) {
          var i18nKey = btn.getAttribute('data-i18n') || '';
          if (i18nKey.indexOf('pmma_pill_') === 0) {
            f = i18nKey.replace('pmma_pill_', '');
          } else if (i18nKey.indexOf('sinter_btn_') === 0) {
            f = i18nKey.replace('sinter_btn_', '');
          }
        }
        if (!f) return;
        e.preventDefault();
        var parent = btn.parentElement;
        if (parent) {
          parent.querySelectorAll('button, .uzm-filter-btn, .filter-btn').forEach(function(b){
            b.classList.remove('active', 'is-active');
            b.setAttribute('aria-selected', 'false');
          });
        }
        btn.classList.add('active', 'is-active');
        btn.setAttribute('aria-selected', 'true');

        var section = btn.closest('section') || document;
        var items = section.querySelectorAll('[data-ind], [data-category], [data-cat-item], [data-studio-cat], .uzm-product-card, .product-card, .uzm-studio40-item');
        items.forEach(function(it){
          var hay = (
            (it.getAttribute('data-ind') || '') + ' ' +
            (it.getAttribute('data-category') || '') + ' ' +
            (it.getAttribute('data-cat-item') || '') + ' ' +
            (it.getAttribute('data-studio-cat') || '') + ' ' +
            (it.className || '') + ' ' +
            (it.textContent || '')
          ).toLowerCase();
          if (f === 'all' || f === 'tumu' || f === '*' || hay.indexOf(f.toLowerCase()) !== -1) {
            it.style.display = '';
            it.removeAttribute('hidden');
          } else {
            it.style.display = 'none';
          }
        });
      });
    });

    document.querySelectorAll('[data-ab-tab], [data-drawer-tab], [data-tab], [data-tab-target], [role="tab"]').forEach(function(btn){
      if (btn.dataset.uzmTabBound) return;
      btn.dataset.uzmTabBound = "1";
      btn.addEventListener('click', function(e){
        var targetId = btn.getAttribute('data-ab-tab') || btn.getAttribute('data-drawer-tab') || btn.getAttribute('data-tab') || btn.getAttribute('data-tab-target') || btn.getAttribute('aria-controls');
        if (!targetId) return;
        var panel = document.getElementById(targetId) || document.querySelector('[data-tab-content="' + targetId + '"], [data-panel="' + targetId + '"], [data-ab-panel="' + targetId + '"], [data-drawer-panel="' + targetId + '"]');
        var container = btn.closest('[role="tablist"], .uzm-ab-tabs, .uzm-drawer-tabs, .tabs, .uzm-tabs, .tab-nav') || btn.parentElement;
        if (container) {
          container.querySelectorAll('button, [role="tab"]').forEach(function(b){
            b.classList.remove('active', 'is-active');
            b.setAttribute('aria-selected', 'false');
          });
        }
        btn.classList.add('active', 'is-active');
        btn.setAttribute('aria-selected', 'true');
        if (panel && panel.parentElement) {
          e.preventDefault();
          Array.from(panel.parentElement.children).forEach(function(ch){
            if (ch.id || ch.hasAttribute('data-tab-content') || ch.hasAttribute('data-panel') || ch.hasAttribute('data-ab-panel') || ch.hasAttribute('data-drawer-panel') || ch.getAttribute('role') === 'tabpanel') {
              ch.classList.remove('active', 'is-active');
              ch.style.display = 'none';
              ch.setAttribute('hidden', 'hidden');
            }
          });
          panel.classList.add('active', 'is-active');
          panel.style.display = '';
          panel.removeAttribute('hidden');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUzmInteractive);
  } else {
    initUzmInteractive();
  }
})();
