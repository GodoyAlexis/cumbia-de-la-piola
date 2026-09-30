const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    primaryNav.classList.toggle('is-open', !isOpen);
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      primaryNav.classList.remove('is-open');
    }
  });
}

const trackOptions = document.querySelectorAll('[data-track-option]');
const trackLabel = document.querySelector('[data-track-label]');
const trackTitle = document.querySelector('[data-track-title]');
const trackLink = document.querySelector('[data-track-link]');
const trackLinkLabel = document.querySelector('[data-track-link-label]');
const trackStatus = document.querySelector('[data-track-status]');

if (trackOptions.length && trackLabel && trackTitle && trackLink && trackLinkLabel && trackStatus) {
  trackOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const { trackTitle: title, trackLabel: label, trackUrl: url } = option.dataset;

      trackOptions.forEach((trackOption) => {
        trackOption.setAttribute('aria-pressed', String(trackOption === option));
      });

      trackTitle.textContent = title;
      trackLabel.textContent = label;
      trackLink.href = url;
      trackLink.setAttribute('aria-label', `Escuchar ${title} en YouTube (se abre en una pestaña nueva)`);
      trackLinkLabel.textContent = `Escuchar ${title}`;
      trackStatus.textContent = `${title} seleccionada. La forma de onda es visual; no reproduce audio en esta página.`;
    });
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
