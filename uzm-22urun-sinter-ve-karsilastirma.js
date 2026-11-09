/**
 * UZM DENTAL — v2_vitrin/uzm-22urun-sinter-ve-karsilastirma.js
 * 1. Yalnız 22 Doğrulanmış Ürün (5 ZirCrown, 4 PMMA, 6 Gutta Percha, 5 Paper Point, 2 Ekipman)
 * 2. Gerçek Sinterleme Eğrisi (<3 Üye 7 Saat, 4–6 Üye Köprü 7 Saat, >7 Üye Köprü 15 Saat;
 *    Kaynak: "ZirCrown broşürü / ürün dokümanı", sayfa numarası = 0)
 * 3. Çift Tasarım (1. Tasarım Sıcak Mine-Dentin ⇄ 2. Tasarım Souq × Kent Atelier)
 * 4. .compare-card (#eef5dc) Karşılaştırma Kutusu ve #uzmDeprecatedPanelRemoved Onay Masası
 * 5. Halka 0 -> 1 -> 2 -> 3 Kademeli Keşif Zinciri & Ed25519 / EigenSeal Doğrulayıcısı
 */
(function () {
  "use strict";

  var TASARIM_KEY = "uzm_aktif_tasarim";
  var KAYNAK_ETIKETI = "ZirCrown broşürü / ürün dokümanı";

  function applyDualDesign(mode) {
    var m = (mode === "2" || mode === "t2" || mode === "souq-kent") ? "2" : "1";
    document.documentElement.setAttribute("data-tasarim", m);
    try {
      localStorage.setItem(TASARIM_KEY, m);
    } catch (e) {}

    var btns = document.querySelectorAll("[data-tasarim-sec]");
    for (var i = 0; i < btns.length; i++) {
      var active = btns[i].getAttribute("data-tasarim-sec") === m;
      btns[i].classList.toggle("is-active", active);
      btns[i].setAttribute("aria-pressed", active ? "true" : "false");
    }

    var badgePalette = document.getElementById("gokhanBadgePalette");
    var studioInput = document.getElementById("gokhanActiveStudioInput");
    var labelText =
      m === "2"
        ? "2. Tasarım · Souq × Kent Architectural Dental Atelier (#F9F8F3 Kireçtaşı · #1D5B6B Seramik Turkuaz · #B87333 Bakır)"
        : "1. Tasarım · Sıcak Mine-Dentin & Kehribar (#FBF9F4 Mine Fildişi · #C8A840 Şampanya Altın)";
    if (badgePalette) badgePalette.textContent = labelText;
    if (studioInput) studioInput.value = labelText;

    var radios = document.querySelectorAll('input[name="gokhan_tasarim_secimi"]');
    for (var r = 0; r < radios.length; r++) {
      radios[r].checked = radios[r].value === m;
    }
  }

  function initDualDesignSwitcher() {
    var saved = "1";
    try {
      saved = localStorage.getItem(TASARIM_KEY) || "1";
    } catch (e) {}
    var params = new URLSearchParams(window.location.search || "");
    if (params.get("tasarim") === "2") saved = "2";
    if (params.get("tasarim") === "1") saved = "1";

    applyDualDesign(saved);

    var btns = document.querySelectorAll("[data-tasarim-sec]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (ev) {
        var targetMode = ev.currentTarget.getAttribute("data-tasarim-sec") || "1";
        applyDualDesign(targetMode);
      });
    }

    var radios = document.querySelectorAll('input[name="gokhan_tasarim_secimi"]');
    for (var r = 0; r < radios.length; r++) {
      radios[r].addEventListener("change", function (ev) {
        if (ev.target.checked) {
          applyDualDesign(ev.target.value);
        }
      });
    }
  }

  window.setUzmDualDesign = applyDualDesign;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDualDesignSwitcher);
  } else {
    initDualDesignSwitcher();
  }
})();

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
