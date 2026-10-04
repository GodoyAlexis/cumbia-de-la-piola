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

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

const featuredVideo = document.querySelector('[data-video-play]');

if (featuredVideo) {
  const container = document.createElement('div');
  container.className = 'video-banner__player';
  const mount = document.createElement('div');
  featuredVideo.before(container);
  container.append(mount, featuredVideo);
  featuredVideo.classList.add('video-banner__cover');

  let player;
  let ready = false;
  let playRequested = false;

  const startPlayback = () => {
    if (!ready) return;
    player.playVideo();
  };

  featuredVideo.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    playRequested = true;
    featuredVideo.setAttribute('aria-busy', 'true');
    startPlayback();
  });

  const initializePlayer = () => {
    player = new YT.Player(mount, {
      host: 'https://www.youtube-nocookie.com',
      videoId: '35O9geyC5rw',
      playerVars: { autoplay: 0, playsinline: 1, rel: 0, origin: window.location.origin },
      events: {
        onReady: (event) => {
          ready = true;
          const iframe = event.target.getIframe();
          iframe.title = 'Video destacado de Cumbia de la Piola';
          iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
          if (playRequested) startPlayback();
        },
        onStateChange: (event) => {
          if (event.data !== YT.PlayerState.PLAYING) return;
          featuredVideo.remove();
          event.target.getIframe().focus();
        },
        onAutoplayBlocked: () => {
          // Give the next gesture directly to YouTube's native play control.
          featuredVideo.remove();
          player.getIframe().focus();
        },
        onError: () => {
          featuredVideo.removeAttribute('aria-busy');
          featuredVideo.setAttribute('aria-label', 'Abrir el video en YouTube');
          featuredVideo.addEventListener('click', () => {
            window.open(featuredVideo.href, '_blank', 'noopener,noreferrer');
          }, { once: true });
        }
      }
    });
  };

  if (window.YT && window.YT.Player) {
    initializePlayer();
  } else {
    window.onYouTubeIframeAPIReady = initializePlayer;
    const api = document.createElement('script');
    api.src = 'https://www.youtube.com/iframe_api';
    api.onerror = () => {
      // Restore the ordinary video link if the player API cannot load.
      container.replaceWith(featuredVideo);
      featuredVideo.classList.remove('video-banner__cover');
      featuredVideo.removeAttribute('aria-busy');
      featuredVideo.addEventListener('click', () => {
        window.open(featuredVideo.href, '_blank', 'noopener,noreferrer');
      });
    };
    document.head.append(api);
  }
}
