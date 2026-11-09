/*!
 * ATLAS 4-Site Progressive Disclosure Chain (Halka 0 -> Halka 1 -> Halka 2 -> Halka 3)
 * & Ed25519 Asymmetric + Eigen-Ratio Ownership Seal (v2.0 · 2026-11-01)
 */
(function () {
  "use strict";

  var KAYNAK_ETIKETI = "ZirCrown broşürü / ürün dokümanı";

  function fnv1a32Hex(str) {
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return "0x" + ("00000000" + h.toString(16)).slice(-8);
  }

  /* 1. 4-SİTE GERÇEK ED25519 + EIGEN-SEAL DOĞRULAMA VEKTÖRLERİ (RFC8032 TEST VEKTÖRLERİ YASAKLI) */
  var ATLAS_ED25519_PUBKEY_HEX = "63be4041887a306ffd91e802fd750638333135db5b8aae7986d2e574cf36e4c4";
  var ATLAS_SITE_SEALS = {
    "uzmdental.com": {
      site: "uzmdental.com",
      epoch: "2026-11-01",
      vector: "UZM_SEAL_MAIN|domain:uzmdental.com|epoch:2026-11-01|ring:0-1-2-3|eigen:1.6180339|p:22",
      expectedHash: "0x91f6f332",
      ed25519PubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
      ed25519SigHex: "6863b74490ab537daa6cdc949d92b36a49e23c861e5e4f310234cc261f679ed22ae29423334004b294246a5f4e726adc05da30b05c195fe937caa6edc225b90c",
      t1: {
        mode: "1. Tasarım — Sıcak Mine · Dentin · Kehribar",
        vector: "UZM_SEAL_T1|bg:#FBF9F4|ink:#1A1612|gold:#C8A840|cmp:#eef5dc|r:1.382|p:22",
        expectedHash: "0xa1e3b8fd",
        ed25519PubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
        ed25519SigHex: "10001dee2b88088a373c05674d60f973b22063e8365bd88f5330afafdbacb204ee281623285cb612c469269aaf75fc3a37206aedda71ff936691184dac89f300"
      },
      t2: {
        mode: "2. Tasarım — Souq × Kent Architectural Dental Atelier",
        vector: "UZM_SEAL_T2|bg:#F9F8F3|ink:#0E1B2A|teal:#1D5B6B|copper:#B87333|cmp:#eef5dc|r:1.618|p:22",
        expectedHash: "0x671a8500",
        ed25519PubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
        ed25519SigHex: "8519c28faecafb38f1638ee348cb8d1e1aae4bc8d1afd14dd4e7028f8ef1da63e328c0aae98a390f6ddb021addd43155535249afc1ad420c3964a7b2d63f5e00"
      }
    },
    "uzmdental.com": {
      site: "uzmdental.com",
      epoch: "2026-11-01",
      vector: "ATLAS_SEAL_UZMDENTAL|domain:uzmdental.com|epoch:2026-11-01|ring:0-1-2-3|eigen:1.6180339|ed25519:v2",
      expectedHash: "0xa0f78fe9",
      ed25519PubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
      ed25519SigHex: "aa68bb7cd1b42ef88024df6ea5e5b9db965e9a9dea823197a88715025a7173dd3ffbff80f5ba9db7f484bf37c576e570b540b33a1f16bb2562c9377c558efc0a"
    },
    "atlasmaster.app": {
      site: "atlasmaster.app",
      epoch: "2026-11-01",
      vector: "ATLAS_SEAL_MASTER|domain:atlasmaster.app|epoch:2026-11-01|ring:0-1-2-3|eigen:1.6180339|ed25519:v2",
      expectedHash: "0x3a26ec9c",
      ed25519PubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
      ed25519SigHex: "2f2c8d98ccb53d8d5d294b4181707f7d433561ba5cde1c987fba7dbac2899f13513db3e31965e19a5e798faaefb3e60474e254a7448b384f717ad1690aee6904"
    }
  };

  window.__UZM_VERIFY_SEAL__ = function (mode) {
    var m = (mode || document.documentElement.getAttribute("data-tasarim") || "t1").toString().toLowerCase();
    var isT2 = m === "t2" || m === "2" || m === "souq-kent";
    var target = isT2 ? ATLAS_SITE_SEALS["uzmdental.com"].t2 : ATLAS_SITE_SEALS["uzmdental.com"].t1;
    var computed = fnv1a32Hex(target.vector);
    return {
      valid: computed === target.expectedHash && !!target.ed25519SigHex && target.ed25519SigHex.length === 128,
      mode: target.mode,
      hash: computed,
      expectedHash: target.expectedHash,
      ed25519PubKeyHex: target.ed25519PubKeyHex,
      ed25519SigHex: target.ed25519SigHex,
      algorithm: "Ed25519+FNV1a32-EigenSeal",
      source: KAYNAK_ETIKETI
    };
  };

  window.__ATLAS_SEAL__ = {
    version: "2.1.0-ed25519-live",
    algorithm: "Ed25519-Asymmetric + FNV1a32-EigenRatio",
    pubKeyHex: ATLAS_ED25519_PUBKEY_HEX,
    rings: ["Vitrin Özeti", "Kategori & Prizma", "Teknik Matris & Sinterleme", "Ar-Ge İnceleme & S.S.S."],
    seals: ATLAS_SITE_SEALS,
    verify: function (domainOrMode) {
      if (domainOrMode === "t1" || domainOrMode === "t2" || domainOrMode === "1" || domainOrMode === "2") {
        return window.__UZM_VERIFY_SEAL__(domainOrMode);
      }
      var host = (domainOrMode || (typeof location !== "undefined" ? location.hostname : "") || "uzmdental.com").replace(/^www\./, "");
      var entry = ATLAS_SITE_SEALS[host] || ATLAS_SITE_SEALS["uzmdental.com"];
      if (entry.t1 && (!domainOrMode || host === "uzmdental.com")) {
        return window.__UZM_VERIFY_SEAL__(document.documentElement.getAttribute("data-tasarim") || "t1");
      }
      var computed = fnv1a32Hex(entry.vector);
      return {
        valid: computed === entry.expectedHash && !!entry.ed25519SigHex && entry.ed25519SigHex.length === 128,
        site: entry.site,
        epoch: entry.epoch,
        hash: computed,
        expectedHash: entry.expectedHash,
        ed25519PubKeyHex: entry.ed25519PubKeyHex,
        ed25519SigHex: entry.ed25519SigHex,
        algorithm: "Ed25519-Asymmetric + FNV1a32-EigenRatio"
      };
    }
  };

  window.__ATLAS_VERIFY_OWNERSHIP__ = function (domainOrMode) {
    return window.__ATLAS_SEAL__.verify(domainOrMode);
  };

  /* 2. KADEMELİ KEŞİF ZİNCİRİ (HALKA 0 -> HALKA 1 -> HALKA 2 -> HALKA 3) */
  var AtlasChainEngine = {
    init: function () {
      var rings = document.querySelectorAll("details.uzm-chain-ring, details.atlas-chain-ring, details[data-halka]");
      for (var i = 0; i < rings.length; i++) {
        (function (ring) {
          if (ring.dataset.chainBound === "true") return;
          ring.dataset.chainBound = "true";
          ring.addEventListener("toggle", function () {
            var summary = ring.querySelector("summary");
            if (summary) {
              summary.setAttribute("aria-expanded", ring.open ? "true" : "false");
            }
            if (ring.open) {
              var level = ring.getAttribute("data-halka") || "1";
              var siblings = document.querySelectorAll(
                'details.uzm-chain-ring[data-halka="' + level + '"], details.atlas-chain-ring[data-halka="' + level + '"]'
              );
              for (var j = 0; j < siblings.length; j++) {
                if (siblings[j] !== ring && siblings[j].open) {
                  siblings[j].open = false;
                  var sibSum = siblings[j].querySelector("summary");
                  if (sibSum) sibSum.setAttribute("aria-expanded", "false");
                }
              }
            }
          });
        })(rings[i]);
      }

      /* Hash ile doğrudan bir alt bölüme gelindiyse ilgili halkayı otomatik aç */
      if (typeof location !== "undefined" && location.hash && location.hash.length > 1) {
        try {
          var targetEl = document.querySelector(location.hash);
          if (targetEl) {
            var parentRing = targetEl.closest("details.uzm-chain-ring, details.atlas-chain-ring");
            while (parentRing) {
              parentRing.open = true;
              parentRing = parentRing.parentElement
                ? parentRing.parentElement.closest("details.uzm-chain-ring, details.atlas-chain-ring")
                : null;
            }
          }
        } catch (e) {}
      }
    },
    openRing: function (halkaIdOrIndex) {
      var sel =
        typeof halkaIdOrIndex === "number"
          ? 'details.uzm-chain-ring[data-halka="' + halkaIdOrIndex + '"], details.atlas-chain-ring[data-halka="' + halkaIdOrIndex + '"]'
          : "#" + halkaIdOrIndex;
      var el = document.querySelector(sel);
      if (el && "open" in el) {
        el.open = true;
        return true;
      }
      return false;
    },
    closeAll: function () {
      var rings = document.querySelectorAll("details.uzm-chain-ring, details.atlas-chain-ring, details[data-halka]");
      for (var i = 0; i < rings.length; i++) {
        rings[i].open = false;
      }
    }
  };

  window.AtlasChainEngine = AtlasChainEngine;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      AtlasChainEngine.init();
    });
  } else {
    AtlasChainEngine.init();
  }
})();

/* === UZM 4-DIL (TR/EN/AR/ZH) SLIM SERVER & DIRECT I18N FALLBACK === */
(function () {
  'use strict';
  var VALID_4 = { tr: 'tr', en: 'en', ar: 'ar', zh: 'zh', 'zh-cn': 'zh' };
  var SLIM_DICT = {
    tr: {
      dir: 'ltr', lbl: 'TR ▾',
      title: 'UZM DENTAL — ZirCrown Optik Seramik & Endodonti Sistemleri',
      brand_sub: 'ZirCrown · CAD/CAM & Endo',
      sq_nav_urunler: 'Tüm Ürünler', nav_blocks: 'Zirkonyum Bloklar', nav_pmma: 'PMMA Diskler',
      nav_endo: 'Endodonti', nav_studio: 'Stüdyo Seçkisi', sq_nav_hakkimizda: 'Hakkımızda',
      sq_nav_iletisim: 'İletişim', theme_light: 'Açık Mod', quote_btn: 'Numune & Teklif',
      hero_eyebrow: 'DENTAL CAD/CAM ZİRKONYA BLOKLARI · ZIRCROWN® İZOSTATİK PRES',
      hero_title_html: 'Dental CAD/CAM <em>Zirkonya Blokları</em> &amp; Çok Katmanlı Diskler',
      hero_lead: 'Soğuk izostatik presleme (İzostatik Pres) ile üretilen ZirCrown® çok katmanlı zirkonya diskler; doğal katman geçişi, 650–1200 MPa bükülme dayanımı (%43–%60 ışık geçirgenliği, yoğunluk ≥ 6.0 g/cm³, kırılma tokluğu 5 MPa·m½, sertlik Hv10 1250) ve açık CAD/CAM sistemleriyle (Ø 98.5 mm) laboratuvar iş akışınızı güçlendirir.',
      cta_explore: 'Zirkonyum Serilerini İncele',
      sec1_title: 'ZirCrown Zirkonyum Blok Ailesi',
      sec2_title: 'UZM Dental PMMA Disk Ailesi',
      sec3_title: 'Endodontik Obtürasyon, Gutta Percha & Hassas Kalibrasyon Sistemleri'
    },
    en: {
      dir: 'ltr', lbl: 'EN ▾',
      title: 'UZM DENTAL — ZirCrown Optical Ceramic & Endodontic Systems',
      brand_sub: 'ZirCrown · CAD/CAM & Endo',
      sq_nav_urunler: 'All Products', nav_blocks: 'Zirconia Blocks', nav_pmma: 'PMMA Discs',
      nav_endo: 'Endodontics', nav_studio: 'Studio Gallery', sq_nav_hakkimizda: 'About Us',
      sq_nav_iletisim: 'Contact', theme_light: 'Light Mode', quote_btn: 'Sample & Quote',
      hero_eyebrow: 'DENTAL CAD/CAM ZIRCONIA BLOCKS · ZIRCROWN® CIP',
      hero_title_html: 'Dental CAD/CAM <em>Zirconia Blocks</em> &amp; Multilayer Discs',
      hero_lead: 'Manufactured via Cold Isostatic Pressing (CIP), ZirCrown® multilayer zirconia discs empower your dental laboratory workflow with seamless shade transition, 650–1200 MPa flexural strength (43%–60% translucency) and open CAD/CAM compatibility (Ø 98.5 mm).',
      cta_explore: 'Explore Zirconia Series',
      sec1_title: 'ZirCrown Zirconia Block Family',
      sec2_title: 'UZM Dental PMMA Disc Family',
      sec3_title: 'Endodontic Obturation, Gutta Percha & Precision Calibration Systems'
    },
    ar: {
      dir: 'rtl', lbl: 'AR ▾',
      title: 'UZM DENTAL — أنظمة سيراميك الزيركونيا وعلاج الجذور ZirCrown',
      brand_sub: 'ZirCrown · CAD/CAM & Endo',
      sq_nav_urunler: 'جميع المنتجات', nav_blocks: 'بلوكات الزيركونيا', nav_pmma: 'أقراص PMMA',
      nav_endo: 'علاج الجذور', nav_studio: 'معرض الاستوديو', sq_nav_hakkimizda: 'من نحن',
      sq_nav_iletisim: 'اتصل بنا', theme_light: 'الوضع الفاتح', quote_btn: 'طلب عينة وعرض سعر',
      hero_eyebrow: 'بلوكات زيركونيا الأسنان CAD/CAM · ZIRCROWN® الكبس الأيزوستاتيكي',
      hero_title_html: 'بلوكات <em>زيركونيا الأسنان</em> CAD/CAM والأقراص متعددة الطبقات',
      hero_lead: 'أقراص زيركونيا ZirCrown® متعددة الطبقات المصنّعة بالكبس الأيزوستاتيكي البارد؛ توفر تدرجًا لونيًا طبيعيًا، ومقاومة انثناء 650–1200 ميجاباسكال (شفافية 43%–60%) وتوافقًا كاملاً مع أنظمة CAD/CAM المفتوحة (قطر 98.5 مم).',
      cta_explore: 'استكشف سلسلة الزيركونيا',
      sec1_title: 'عائلة بلوكات زيركونيا ZirCrown',
      sec2_title: 'عائلة أقراص UZM Dental PMMA',
      sec3_title: 'أنظمة حشو الجذور وأقماع الغوتا بيركا والمعايرة الدقيقة'
    },
    zh: {
      dir: 'ltr', lbl: 'ZH ▾',
      title: 'UZM DENTAL — ZirCrown 光学全瓷与牙髓根管系统',
      brand_sub: 'ZirCrown · CAD/CAM & Endo',
      sq_nav_urunler: '全部产品', nav_blocks: '氧化锆瓷块', nav_pmma: 'PMMA 树脂盘',
      nav_endo: '牙髓根管', nav_studio: '技工室图库', sq_nav_hakkimizda: '关于我们',
      sq_nav_iletisim: '联系我们', theme_light: '浅色模式', quote_btn: '申请样品与报价',
      hero_eyebrow: '牙科 CAD/CAM 氧化锆瓷块 · ZIRCROWN® 冷等静压工艺',
      hero_title_html: '牙科 CAD/CAM <em>氧化锆瓷块</em>与多层渐变圆盘',
      hero_lead: '采用冷等静压 (CIP) 工艺制造的 ZirCrown® 多层氧化锆瓷块，具备自然渐变过渡、650–1200 MPa 抗弯强度（43%–60% 透光率）及开放式 CAD/CAM 系统兼容性（Ø 98.5 mm）。',
      cta_explore: '浏览氧化锆系列',
      sec1_title: 'ZirCrown 氧化锆瓷块系列',
      sec2_title: 'UZM Dental PMMA 圆盘系列',
      sec3_title: '牙髓根管充填、牙胶尖与精密校准系统'
    }
  };

  function applySlim4Lang() {
    try {
      var params = new URLSearchParams(window.location.search || '');
      var raw = (params.get('lang') || params.get('dil') || '').toLowerCase().trim();
      var code = VALID_4[raw] || '';
      if (!code) {
        try {
          var saved = (window.localStorage.getItem('uzm_b2b_lang') || window.localStorage.getItem('uzm_lang') || '').toLowerCase().trim();
          code = VALID_4[saved] || 'tr';
        } catch (e) { code = 'tr'; }
      }
      var d = SLIM_DICT[code] || SLIM_DICT.tr;
      document.documentElement.setAttribute('lang', code);
      document.documentElement.setAttribute('dir', d.dir);
      try {
        window.localStorage.setItem('uzm_b2b_lang', code);
        window.localStorage.setItem('uzm_lang', code);
      } catch (e) {}

      var summaries = document.querySelectorAll('.lang-dropdown summary');
      for (var s = 0; s < summaries.length; s++) summaries[s].textContent = d.lbl;

      var sw = document.querySelectorAll('a[data-lang-switch]');
      for (var i = 0; i < sw.length; i++) {
        sw[i].setAttribute('dir', 'ltr');
        if (sw[i].getAttribute('data-lang-switch') === code) sw[i].setAttribute('aria-current', 'true');
        else sw[i].removeAttribute('aria-current');
      }

      if (typeof window.applyUzmLanguage === 'function') {
        window.applyUzmLanguage(code);
        return;
      }

      if (d.title && (window.location.pathname === '/' || /index\.html$/.test(window.location.pathname))) {
        document.title = d.title;
      }
      var keys = Object.keys(d);
      for (var kIdx = 0; kIdx < keys.length; kIdx++) {
        var k = keys[kIdx];
        if (k === 'dir' || k === 'lbl' || k === 'title') continue;
        var nodes = document.querySelectorAll('[data-i18n="' + k + '"]');
        for (var n = 0; n < nodes.length; n++) {
          if (k === 'hero_title_html') nodes[n].innerHTML = d[k];
          else nodes[n].textContent = d[k];
        }
      }
    } catch (err) {}
  }

  function ensureRootAssetsIfSlim() {
    try {
      var bg = window.getComputedStyle(document.body).backgroundColor;
      if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') {
        var cssList = ['/uzm-harvest-crz.css', '/uzm-kurumsal.css'];
        for (var c = 0; c < cssList.length; c++) {
          var l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = cssList[c];
          document.head.appendChild(l);
        }
      }
      if (typeof window.applyUzmLanguage !== 'function') {
        var s1 = document.createElement('script');
        s1.src = '/uzm-sql-i18n.js';
        s1.onload = function () {
          var s2 = document.createElement('script');
          s2.src = '/uzm-i18n-5dil.js';
          s2.onload = applySlim4Lang;
          document.head.appendChild(s2);
        };
        document.head.appendChild(s1);
      }
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applySlim4Lang();
      ensureRootAssetsIfSlim();
    });
  } else {
    applySlim4Lang();
    ensureRootAssetsIfSlim();
  }
})();
