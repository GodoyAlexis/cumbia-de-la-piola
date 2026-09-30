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

const releaseCard = document.querySelector('.release-card');
const playToggle = document.querySelector('[data-play-toggle]');
const playLabel = document.querySelector('[data-play-label]');
const playStatus = document.querySelector('[data-play-status]');

if (releaseCard && playToggle && playLabel && playStatus) {
  playToggle.addEventListener('click', () => {
    const isPlaying = playToggle.getAttribute('aria-pressed') === 'true';
    playToggle.setAttribute('aria-pressed', String(!isPlaying));
    releaseCard.classList.toggle('is-playing', !isPlaying);
    playLabel.textContent = isPlaying ? 'Escuchar' : 'Pausar muestra';
    playStatus.textContent = isPlaying ? 'Muestra visual' : 'Animación activa · sin audio';
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
