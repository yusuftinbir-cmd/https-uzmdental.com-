/* UZM Dental Luxury Interactive Shade, Thickness & WhatsApp Engine (Zero inline style) */
(function () {
  'use strict';
  function initUzmLuxuryEngine() {
    var selectedShade = 'A2';
    var selectedThickness = '14 mm';
    var waBtn = document.querySelector('[data-uzm-wa-btn]');
    var productTitleEl = document.querySelector('.uzm-detail-hero-title');
    var productTitle = productTitleEl ? productTitleEl.textContent.trim() : 'UZM Dental Ürün';

    function updateWhatsAppHref() {
      if (!waBtn) return;
      var msg = 'Merhaba UZM Dental, ' + productTitle + ' (' + selectedShade + ' / ' + selectedThickness + ') için teknik bilgi ve fiyat almak istiyorum.';
      waBtn.setAttribute('href', 'https://wa.me/905426460220?text=' + encodeURIComponent(msg));
    }

    var swatches = document.querySelectorAll('.uzm-tooth-swatch');
    swatches.forEach(function (sw) {
      sw.addEventListener('click', function () {
        swatches.forEach(function (s) { s.classList.remove('is-selected'); });
        sw.classList.add('is-selected');
        var codeEl = sw.querySelector('.uzm-tooth-code');
        if (codeEl) selectedShade = codeEl.textContent.trim();
        updateWhatsAppHref();
      });
    });

    var pills = document.querySelectorAll('.uzm-thick-pill');
    pills.forEach(function (pl) {
      pl.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('is-selected'); });
        pl.classList.add('is-selected');
        selectedThickness = pl.textContent.trim();
        updateWhatsAppHref();
      });
    });

    updateWhatsAppHref();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUzmLuxuryEngine);
  } else {
    initUzmLuxuryEngine();
  }
})();
