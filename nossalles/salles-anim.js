/* =====================================================================
   The Bureau — Nos Salles · animations & transitions (GSAP)
   Dégradé propre : si GSAP est absent ou si l'utilisateur préfère
   réduire les animations, on se rabat sur un affichage immédiat.
   ===================================================================== */
(function () {
  "use strict";

  var nav = document.querySelector('.nav');

  /* Nav : léger renforcement au défilement — indépendant de GSAP */
  if (nav) {
    var onScrollNav = function () { nav.classList.toggle('is-scrolled', window.scrollY > 60); };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();
  }

  function showAll() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pas de GSAP, ou mouvement réduit → tout est visible, sans animation.
  if (!window.gsap || reduce) { showAll(); return; }

  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  if (window.ScrollToPlugin) gsap.registerPlugin(window.ScrollToPlugin);
  var ST = window.ScrollTrigger;

  document.documentElement.classList.add('js-gsap');

  /* ---------- Hero : entrée orchestrée ------------------------------- */
  var heroEyelet = document.querySelector('.hero__eyelet');
  var heroH1 = document.querySelector('.hero h1');
  var heroLede = document.querySelector('.hero__lede');
  var heroStats = gsap.utils.toArray('.hero__meta .stat');
  var heroCta = document.querySelector('.hero__cta');

  // état initial (anti-FOUC) puis timeline
  gsap.set([heroEyelet, heroH1, heroLede, heroCta], { opacity: 0, y: 26 });
  gsap.set(heroStats, { opacity: 0, y: 18 });

  var tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 }, delay: 0.15 });
  tl.to(heroEyelet, { opacity: 1, y: 0, duration: 0.7 })
    .to(heroH1, { opacity: 1, y: 0, duration: 1.0 }, '-=0.45')
    .to(heroLede, { opacity: 1, y: 0 }, '-=0.6')
    .to(heroStats, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
    .to(heroCta, { opacity: 1, y: 0, duration: 0.7 }, '-=0.45');

  /* ---------- Hero : parallaxe douce de la photo --------------------- */
  if (ST) {
    gsap.to('.hero', {
      backgroundPosition: '50% 68%', ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- Révélations au scroll ---------------------------------- */
  if (ST) {
    gsap.set('.reveal', { opacity: 0, y: 24 });
    ST.batch('.reveal', {
      start: 'top 86%',
      onEnter: function (els) {
        gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12, overwrite: true });
      },
      once: true
    });

    /* Index : entrée échelonnée de la liste + du panneau */
    var idxBits = gsap.utils.toArray('#rooms-mount .idx-group, #rooms-mount .idx-item');
    var idxDetail = document.querySelector('.idx-detail');
    if (idxBits.length) {
      gsap.set(idxBits, { opacity: 0, y: 16 });
      if (idxDetail) gsap.set(idxDetail, { opacity: 0, y: 16 });
      ST.create({
        trigger: '#salles', start: 'top 76%', once: true,
        onEnter: function () {
          gsap.to(idxBits, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.05 });
          if (idxDetail) gsap.to(idxDetail, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
        }
      });
    }
  }

  /* ---------- Index : micro-transition au changement de salle -------- */
  var mount = document.getElementById('rooms-mount');
  if (mount) {
    mount.addEventListener('tb:select', function () {
      var targets = [mount.querySelector('#idxTag'), mount.querySelector('#idxWhere'),
        mount.querySelector('#idxName'), mount.querySelector('#idxDesc'),
        mount.querySelector('#idxEquip'), mount.querySelector('#idxMeta')].filter(Boolean);
      gsap.fromTo(targets, { opacity: 0.0, y: 8 },
        { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out', stagger: 0.045, overwrite: 'auto' });
      // ramène le défilement du panneau en haut sur la nouvelle salle
      var info = mount.querySelector('.idx-info');
      if (info) info.scrollTop = 0;
    });
  }

  /* ---------- Défilement fluide des ancres --------------------------- */
  if (window.ScrollToPlugin) {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        gsap.to(window, { duration: 0.9, ease: 'power2.inOut', scrollTo: { y: target, offsetY: 64 } });
      });
    });
  }

  /* Recalcule les positions une fois la page (images/police) chargée */
  window.addEventListener('load', function () { if (ST) ST.refresh(); });
})();
