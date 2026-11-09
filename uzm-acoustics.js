(function () {
  'use strict';

  var enabled = false;
  var audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new Ctx();
    }
  }

  function tick(freq) {
    if (!enabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq || 520, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.018, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      /* Sessiz geri dönüş */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('acousticToggleBtn');
    if (btn) {
      btn.addEventListener('click', function () {
        enabled = !enabled;
        btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
        if (enabled) tick(660);
      });
    }
  });

  window.UZMAcoustics = { tick: tick };
})();