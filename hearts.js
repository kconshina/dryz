(function () {
  'use strict';

  var layer = document.getElementById('hearts');
  if (!layer) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function spawnHearts(trigger) {
    trigger.classList.add('pop');
    setTimeout(function () { trigger.classList.remove('pop'); }, 220);

    for (var i = 0; i < 18; i++) {
      var heart = document.createElement('span');
      heart.className = reduceMotion ? 'heart still' : 'heart';
      heart.textContent = Math.random() < 0.25 ? '♡' : '♥';
      heart.style.fontSize = (13 + Math.random() * 25).toFixed(0) + 'px';
      heart.style.left = (4 + Math.random() * 92).toFixed(1) + '%';
      heart.style.top = (12 + Math.random() * 83).toFixed(1) + '%';
      heart.style.setProperty('--dx', ((Math.random() - 0.5) * 100).toFixed(0) + 'px');
      heart.style.setProperty('--dy', '-' + (60 + Math.random() * 130).toFixed(0) + 'px');
      heart.style.setProperty('--rot', ((Math.random() - 0.5) * 60).toFixed(0) + 'deg');
      heart.style.setProperty('--dur', (5 + Math.random() * 3).toFixed(2) + 's');
      heart.style.setProperty('--alpha', (0.35 + Math.random() * 0.45).toFixed(2));
      layer.appendChild(heart);
      heart.addEventListener('animationend', function () { this.remove(); });
    }
  }

  var triggers = document.querySelectorAll('.thanks');
  for (var i = 0; i < triggers.length; i++) {
    (function (el) {
      el.addEventListener('click', function () { spawnHearts(el); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          spawnHearts(el);
        }
      });
    })(triggers[i]);
  }
})();
