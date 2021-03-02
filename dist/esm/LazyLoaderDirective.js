const loadMedia = el => {
  const contentType = el.nodeName === 'IMG' || el.nodeName === 'VIDEO' ? 'src' : 'background';

  if (el && contentType === 'src') {
    el.addEventListener('error', () => console.error('There was an error loading the content.'));
    el.src = el.dataset.url;
  }

  el.classList.remove('tdl-lazy-loader-hide-background-image');
};

const createObserver = el => {
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMedia(el);
        observer.unobserve(el);
      }
    });
  };

  const options = {
    rootMargin: '300px 0px'
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(el);
};

const loadOrObserve = el => {
  if (window.IntersectionObserver) {
    createObserver(el);
  } else {
    loadMedia(el);
  }
};

const LazyLoaderDirective = {
  bind: el => {
    if (el) {
      el.classList.add('tdl-lazy-loader-hide-background-image');
    }
  },
  inserted: loadOrObserve,
  update: el => {
    const {
      src,
      dataset: {
        url
      }
    } = el;

    if (src !== '' && src !== url) {
      loadMedia(el);
    }
  }
};

export default LazyLoaderDirective;
