import toggleBodyScroll from '../../core/utils/toggleBodyScroll';
import { isSafari, isiOS } from '../../core/utils/deviceHelper';
import tdlFeatureDiscoveryTheme from "./tdlFeatureDiscovery-theme.scss";

const storage = {
  markDisplayed: function(key) {
    const data = JSON.parse(localStorage.getItem('tdl.featureDiscovery')) || {};

    data[key] = true;
    localStorage.setItem('tdl.featureDiscovery', JSON.stringify(data));
  },
  displayed: function(key) {
    const data = JSON.parse(localStorage.getItem('tdl.featureDiscovery')) || {};

    return data[key] || false;
  }
};

const TdlFeatureDiscovery = {
  name: 'tdl-feature-discovery',
  props: {
    target: {
      type: String,
      required: true
    },
    queryToTarget: {
      type: String,
      required: false
    },
    delay: {
      type: Number,
      required: false
    },
    scrollDistance: {
      type: Number,
      required: false
    },
    helperPosition: {
      type: String,
      required: true,
      validator: function(value) {
        return ['top-right', 'bottom-right', 'bottom-left', 'top-left', 'top-center', 'bottom-center'].indexOf(value) >= 0;
      }
    },
    displayOnce: {
      type: Boolean,
      required: false,
      default: function() {
        return true;
      }
    },
    targetClickable: {
      type: Boolean,
      required: false,
      default: function() {
        return true;
      }
    },
    customTarget: {
      type: Boolean,
      default: false
    },
    targetFontSize: {
      type: String,
      default: '12px',
      required: false
    },
    theme: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {
      currentTimeOut: null,
      open: false
    };
  },
  computed: {
    cssProps() {
      return {
        '--size': this.targetFontSize,
        '--theme': this.theme
      };
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlFeatureDiscovery", theme: tdlFeatureDiscoveryTheme});
  },
  methods: {
    displayed() {
      return storage.displayed(this.target);
    },
    isTargetInViewport() {
      if (this.elems_.target) {
        const { top, right, bottom, left } = this.elems_.target.getBoundingClientRect();

        return (
          top >= 0
          && left >= 0
          && right <= window.innerWidth
          && bottom <= window.innerHeight
        );
      }
      return false;

    },
    scrollToTarget() {
      if (this.elems_.target) {
        if (isSafari() && isiOS()) {
          window.scroll(0, this.elems_.target.getBoundingClientRect().top - 200);
        } else {
          window.scroll({
            top: (this.elems_.target.getBoundingClientRect().top + window.scrollY) / 2,
            behavior: 'smooth'
          });
        }
      }
    },
    setupTarget() {
      this.elems_.target = this.queryToTarget ? document.querySelector(this.queryToTarget) : document.getElementById(this.target);

      if (this.elems_.target) {
        this.openDiscovery();
      } else {
        console.warn((this.queryToTarget ? this.queryToTarget : this.target) + ' not found in DOM');
      }
    },
    openDiscovery: function() {
      toggleBodyScroll(true);
      if (!this.elems_.target) {
        this.setupTarget();
      }

      if (!this.isTargetInViewport()) {
        this.scrollToTarget();
      }

      this.elems_.targetWrapper.classList.add('open');
      this.elems_.backdrop.classList.add('open');
      document.body.classList.add('feature-discovery-open');

      if (!this.open) {
        this.open = true;
        this.cloneTarget();
        this.attachListeners();
      }
      this.updatePosition();

      this.$emit('open', this.target);

      if (this.displayOnce) {
        storage.markDisplayed(this.target);
      }
    },
    closeDiscovery: function() {
      toggleBodyScroll(false);
      this.removeCloneTarget();
      this.removeListeners();

      this.elems_.targetWrapper.classList.remove('open');
      this.elems_.backdrop.classList.remove('open');
      document.body.classList.remove('feature-discovery-open');

      this.open = false;
      this.$emit('close', this.target);
    },
    updatePosition: function() {
      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(() => {
        const targetDim = this.calcDimensions(this.elems_.target);
        const wrapperDim = this.calcDimensions(this.elems_.targetWrapper);

        // center the wrapper in reference to the target element
        const top = targetDim.top - wrapperDim.height / 2 + targetDim.height / 2;
        const left = targetDim.left - wrapperDim.width / 2 + targetDim.width / 2;

        this.elems_.targetWrapper.style.setProperty('top', `${top}px`);
        this.elems_.targetWrapper.style.setProperty('left', `${left}px`);

        this.elems_.clone.style.setProperty('position', 'absolute');
        this.elems_.clone.style.setProperty('top', `${wrapperDim.height / 2 - targetDim.height / 2}px`);
        this.elems_.clone.style.setProperty('left', `${wrapperDim.width / 2 - targetDim.width / 2}px`);
        this.elems_.clone.style.setProperty('margin', 0);
        this.elems_.clone.style.setProperty('z-index', '12');
      });
    },
    calcDimensions: function(el) {
      const rect = el.getBoundingClientRect();

      return {
        left: rect.left,
        top: rect.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    },
    cloneTarget: function() {
      const clone = this.elems_.target.cloneNode(true);

      clone.id = `tdl-feature-discovery--${this.target}`;

      // copy computed styles from target
      const targetStyle = window.getComputedStyle(this.elems_.target);

      for (let i = 0; i < targetStyle.length; i++) {
        const prop = targetStyle[i];
        const style = targetStyle.getPropertyValue(prop);

        clone.style.setProperty(prop, style);
      }

      if (this.customTarget) {
        clone.classList.add('feature-discovery-cloned-target');
      }

      clone.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if (this.targetClickable) {
          const clickEvent = new Event('click', {
            bubbles: true,
            cancelable: true
          });

          this.elems_.target.dispatchEvent(clickEvent);
        }

        this.closeDiscovery();
      });

      this.elems_.clone = clone;
      this.elems_.targetWrapper.appendChild(clone);
    },
    removeCloneTarget: function() {
      const clone = document.getElementById(`tdl-feature-discovery--${this.target}`);

      clone.remove();
    },
    attachListeners: function() {
      window.addEventListener('scroll', this.updatePosition, {
        passive: true
      });
      window.addEventListener('resize', this.updatePosition);
    },
    removeListeners: function() {
      window.removeEventListener('scroll', this.updatePosition, {
        passive: true
      });
      window.removeEventListener('resize', this.updatePosition);
    },
    checkScrollDistance: function() {
      const shouldDisplay = !this.displayOnce || this.displayOnce && !storage.displayed(this.target);

      if (shouldDisplay && window.pageYOffset > this.scrollDistance) {
        this.currentTimeOut = setTimeout(this.setupTarget);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScrollDistance);

    if (this.currentTimeOut) {
      clearTimeout(this.currentTimeOut);
    }
  },
  mounted: function() {
    this.elems_ = {};
    this.elems_.targetWrapper = this.$refs.targetWrapper;
    this.elems_.backdrop = this.$refs.featureBackdrop;

    const shouldDisplay = !this.displayOnce || this.displayOnce && !storage.displayed(this.target);

    if (shouldDisplay && this.delay) {
      this.currentTimeOut = setTimeout(this.setupTarget, this.delay);
    } else if (this.scrollDistance) {
      window.addEventListener('scroll', this.checkScrollDistance);
    }
  }
};

export default TdlFeatureDiscovery;
