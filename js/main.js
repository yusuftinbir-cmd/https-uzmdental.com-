var SliderSwiper = new Swiper(".ref-slider", {
    slidesPerView:4,
    spaceBetween: 30,
    speed: 750,
    loop: true,
    autoplay: {
      delay: 7000
    },
    navigation: {
      nextEl: ".ref-button-next",
      prevEl: ".ref-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });

  document.querySelectorAll('.faq-question').forEach(question => {

    question.addEventListener('click', () => {

        const currentItem = question.closest('.faq-item');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');

    });

});

document.querySelectorAll('.filter-btn.has-dropdown').forEach(function (filterBtn) {

    var label = filterBtn.querySelector('.filter-btn-label');
    var dropdown = filterBtn.querySelector('.filter-dropdown');

    label.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = filterBtn.classList.contains('open');

        document.querySelectorAll('.filter-btn.has-dropdown.open').forEach(function (openBtn) {
            openBtn.classList.remove('open');
        });

        if (!isOpen) {
            filterBtn.classList.add('open');
        }
    });

    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
    });

});

document.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn.has-dropdown.open').forEach(function (openBtn) {
        openBtn.classList.remove('open');
    });
});

var brandCheckboxes = document.querySelectorAll('.brand-filter-checkbox');
var productCards = document.querySelectorAll('.product-grid .product-box');
var brandFilterLabel = document.querySelector('[data-filter-toggle="brand"] .filter-btn-label span');

function applyBrandFilter() {

    var checked = Array.prototype.slice.call(brandCheckboxes)
        .filter(function (checkbox) { return checkbox.checked; })
        .map(function (checkbox) { return checkbox.value; });

    productCards.forEach(function (card) {
        var matches = checked.length === 0 || checked.indexOf(card.dataset.brand) !== -1;
        card.style.display = matches ? '' : 'none';
    });

    if (brandFilterLabel) {
        brandFilterLabel.textContent = checked.length > 0 ? 'Markalar (' + checked.length + ')' : 'Tüm Markalar';
    }

}

brandCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', applyBrandFilter);
});

var brandClearBtn = document.querySelector('.filter-clear');
if (brandClearBtn) {
    brandClearBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        brandCheckboxes.forEach(function (checkbox) { checkbox.checked = false; });
        applyBrandFilter();
    });
}

var productGrid = document.getElementById('productGrid');
document.querySelectorAll('.view-btn').forEach(function (viewBtn) {
    viewBtn.addEventListener('click', function () {
        document.querySelectorAll('.view-btn').forEach(function (btn) {
            btn.classList.remove('active');
        });
        viewBtn.classList.add('active');

        if (productGrid) {
            productGrid.classList.remove('cols-3', 'cols-4', 'cols-5');
            productGrid.classList.add('cols-' + viewBtn.dataset.cols);
        }
    });
});

document.querySelectorAll('.tab-btn').forEach(function (tabBtn) {
    tabBtn.addEventListener('click', function () {
        var target = tabBtn.dataset.tab;

        document.querySelectorAll('.tab-btn').forEach(function (btn) {
            btn.classList.remove('active');
        });
        tabBtn.classList.add('active');

        document.querySelectorAll('.tab-panel').forEach(function (panel) {
            panel.classList.toggle('active', panel.id === 'tab-' + target);
        });
    });
});

if (window.location.hash) {
    var hashTabBtn = document.querySelector('.tab-btn[data-tab="' + window.location.hash.replace('#', '') + '"]');
    if (hashTabBtn) hashTabBtn.click();
}

var mainPictureImg = document.getElementById('mainPictureImg');
document.querySelectorAll('.thumb-item').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
        document.querySelectorAll('.thumb-item').forEach(function (t) {
            t.classList.remove('active');
        });
        thumb.classList.add('active');

        if (mainPictureImg) {
            mainPictureImg.src = thumb.dataset.image;
        }
    });
});

document.querySelectorAll('.option-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
        var group = pill.closest('.option-pills');
        group.querySelectorAll('.option-pill').forEach(function (p) {
            p.classList.remove('active');
        });
        pill.classList.add('active');
    });
});

var orderTriggerBtn = document.getElementById('orderTriggerBtn');
var orderModalOverlay = document.getElementById('orderModalOverlay');
var orderModalClose = document.getElementById('orderModalClose');
var orderModalDone = document.getElementById('orderModalDone');
var orderForm = document.getElementById('orderForm');
var orderModalFormWrapper = document.getElementById('orderModalFormWrapper');
var orderModalSuccess = document.getElementById('orderModalSuccess');

function openOrderModal() {
    if (!orderModalOverlay) return;
    orderModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    if (!orderModalOverlay) return;
    orderModalOverlay.classList.remove('open');
    document.body.style.overflow = '';

    setTimeout(function () {
        if (orderForm) orderForm.reset();
        if (orderModalFormWrapper) orderModalFormWrapper.classList.remove('hidden');
        if (orderModalSuccess) orderModalSuccess.classList.remove('active');
    }, 300);
}

if (orderTriggerBtn) {
    orderTriggerBtn.addEventListener('click', openOrderModal);
}

if (orderModalClose) {
    orderModalClose.addEventListener('click', closeOrderModal);
}

if (orderModalDone) {
    orderModalDone.addEventListener('click', closeOrderModal);
}

if (orderModalOverlay) {
    orderModalOverlay.addEventListener('click', function (e) {
        if (e.target === orderModalOverlay) {
            closeOrderModal();
        }
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && orderModalOverlay && orderModalOverlay.classList.contains('open')) {
        closeOrderModal();
    }
});

if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!orderForm.reportValidity()) {
            return;
        }

        var submitBtn = orderForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        fetch(window.location.href, {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            body: new FormData(orderForm)
        })
            .then(function (r) { return r.json(); })
            .then(function (data) {
                if (submitBtn) submitBtn.disabled = false;
                if (data && data.success) {
                    if (orderModalFormWrapper) orderModalFormWrapper.classList.add('hidden');
                    if (orderModalSuccess) orderModalSuccess.classList.add('active');
                }
            })
            .catch(function () {
                if (submitBtn) submitBtn.disabled = false;
            });
    });
}

var megaMenuTrigger = document.getElementById('megaMenuTrigger');
var megaMenu = document.getElementById('megaMenu');

function closeMegaMenu() {
    if (!megaMenu) return;
    megaMenu.classList.remove('open');
    document.body.classList.remove('mega-menu-open');
}

if (megaMenuTrigger && megaMenu) {
    megaMenuTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = megaMenu.classList.contains('open');

        if (isOpen) {
            closeMegaMenu();
        } else {
            megaMenu.classList.add('open');
            document.body.classList.add('mega-menu-open');
        }
    });

    megaMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function () {
        closeMegaMenu();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMegaMenu();
        }
    });
}

document.querySelectorAll('.mega-expandable .mega-toggle').forEach(function (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var current = toggleBtn.closest('.mega-expandable');
        var list = current.closest('.mega-menu-list');
        var wasActive = current.classList.contains('active');

        list.querySelectorAll('.mega-expandable.active').forEach(function (openItem) {
            openItem.classList.remove('active');
        });

        if (!wasActive) {
            current.classList.add('active');
        }
    });
});

var mobileMenuToggle = document.getElementById('mobileMenuToggle');
var mobileNavOverlay = document.getElementById('mobileNavOverlay');
var mobileNavClose = document.getElementById('mobileNavClose');

function closeMobileNav() {
    if (!mobileNavOverlay) return;
    mobileNavOverlay.classList.remove('open');
    document.body.classList.remove('mobile-nav-open');
}

if (mobileMenuToggle && mobileNavOverlay) {
    mobileMenuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileNavOverlay.classList.add('open');
        document.body.classList.add('mobile-nav-open');
    });

    mobileNavOverlay.addEventListener('click', function (e) {
        if (e.target === mobileNavOverlay) {
            closeMobileNav();
        }
    });

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
}

document.querySelectorAll('.mobile-cat-expandable .mobile-cat-toggle').forEach(function (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var current = toggleBtn.closest('.mobile-cat-expandable');
        var list = current.closest('.mobile-cat-list');
        var wasActive = current.classList.contains('active');

        list.querySelectorAll('.mobile-cat-expandable.active').forEach(function (openItem) {
            openItem.classList.remove('active');
        });

        if (!wasActive) {
            current.classList.add('active');
        }
    });
});

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
