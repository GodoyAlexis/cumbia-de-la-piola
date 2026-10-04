// Optional motion: content and playback work even if the CDN is unavailable.
(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
  try {
    await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js');
  } catch {
    return;
  }
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const intro = document.querySelector('.hero');
    if (intro.getBoundingClientRect().bottom > 0 && window.scrollY < 100) {
      gsap.from('.hero__copy > *', { y: 24, opacity: 0, duration: .7, stagger: .09, ease: 'power3.out', clearProps: 'transform,opacity' });
      gsap.from('.hero-art', { y: 28, opacity: 0, duration: .9, delay: .15, ease: 'power3.out', clearProps: 'transform,opacity' });
    }
    const reveals = [];
    const reveal = (elements, trigger) => {
      const tween = gsap.from(elements, {
        y: 24, opacity: 0, duration: .65, stagger: .1, ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger, start: 'top 90%', once: true }
      });
      reveals.push({ elements: gsap.utils.toArray(elements), tween });
    };
    reveal('.video-banner__title, .video-banner__meta, .video-banner__footer', '.featured');
    reveal('.music .section-heading', '.music');
    document.querySelectorAll('.media-card').forEach(card => reveal(card, card));
    reveal('.booking__copy, .booking .button', '.booking');
    const revealFocused = (event) => {
      reveals.forEach(({elements, tween}) => {
        if (elements.some(el => el === event.target || el.contains(event.target))) tween.progress(1);
      });
    };
    document.addEventListener('focusin', revealFocused);

    const track = document.querySelector('.hero__ticker-track');
    const tickerWindow = document.querySelector('.hero__ticker-window');
    let isHovering = false;
    const ticker = gsap.to(track, { xPercent: -50, duration: 22, repeat: -1, ease: 'none' });
    const tickerVisibility = ScrollTrigger.create({
      trigger: '.hero__ticker', start: 'top bottom', end: 'bottom top',
      onToggle: self => { if (self.isActive && !isHovering) ticker.resume(); else ticker.pause(); }
    });
    const pauseOnHover = () => { isHovering = true; ticker.pause(); };
    const resumeOnLeave = () => { isHovering = false; ticker.resume(); };
    tickerWindow.addEventListener('mouseenter', pauseOnHover);
    tickerWindow.addEventListener('mouseleave', resumeOnLeave);
    ScrollTrigger.refresh();
    return () => {
      document.removeEventListener('focusin', revealFocused);
      tickerWindow.removeEventListener('mouseenter', pauseOnHover);
      tickerWindow.removeEventListener('mouseleave', resumeOnLeave);
    };
  });
})();
