import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { b as isSafari, a as isiOS } from './deviceHelper-575f722e.js';

function toggleBodyScroll(blockScroll) {
  const isSafariMobile = /(iPhone)/i.test(navigator.userAgent) && !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  const bodyEl = document.body;

  if (blockScroll) {
    bodyEl.style.overflow = 'hidden';

    if (isSafariMobile) {
      const scrolledDistance = document.body.scrollTop || document.documentElement.scrollTop; // bodyEl.style.top = `-${scrolledDistance}px`;
    }
  } else {
    bodyEl.style.overflow = 'scroll';

    if (isSafariMobile) {
      bodyEl.style.top = '';
    }
  }
}

var tdlFeatureDiscoveryTheme = ".THEME_NAME.tdl-feature-discovery .tap-target {\n  background-color: BACKGROUND-ELEVATION_3-0.96 !important;\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-feature-discovery .tap-target h1, .THEME_NAME.tdl-feature-discovery .tap-target h2, .THEME_NAME.tdl-feature-discovery .tap-target h3, .THEME_NAME.tdl-feature-discovery .tap-target h4, .THEME_NAME.tdl-feature-discovery .tap-target h5 {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.tdl-feature-discovery .tap-target-wave::before, .THEME_NAME.tdl-feature-discovery .tap-target-wave::after {\n  background-color: BACKGROUND-ELEVATION_1;\n}";

const storage = {
  markDisplayed: function (key) {
    const data = JSON.parse(localStorage.getItem('tdl.featureDiscovery')) || {};
    data[key] = true;
    localStorage.setItem('tdl.featureDiscovery', JSON.stringify(data));
  },
  displayed: function (key) {
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
      validator: function (value) {
        return ['top-right', 'bottom-right', 'bottom-left', 'top-left', 'top-center', 'bottom-center'].indexOf(value) >= 0;
      }
    },
    displayOnce: {
      type: Boolean,
      required: false,
      default: function () {
        return true;
      }
    },
    targetClickable: {
      type: Boolean,
      required: false,
      default: function () {
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
  data: function () {
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
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlFeatureDiscovery",
      theme: tdlFeatureDiscoveryTheme
    });
  },
  methods: {
    displayed() {
      return storage.displayed(this.target);
    },

    isTargetInViewport() {
      if (this.elems_.target) {
        const {
          top,
          right,
          bottom,
          left
        } = this.elems_.target.getBoundingClientRect();
        return top >= 0 && left >= 0 && right <= window.innerWidth && bottom <= window.innerHeight;
      }

      return false;
    },

    scrollToTarget() {
      if (this.elems_.target) {
        if (isSafari() && isiOS()) {
          window.scroll(0, this.elems_.target.getBoundingClientRect().top - 200);
        } else {
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

    openDiscovery: function () {
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
    closeDiscovery: function () {
      toggleBodyScroll(false);
      this.removeCloneTarget();
      this.removeListeners();
      this.elems_.targetWrapper.classList.remove('open');
      this.elems_.backdrop.classList.remove('open');
      document.body.classList.remove('feature-discovery-open');
      this.open = false;
      this.$emit('close', this.target);
    },
    updatePosition: function () {
      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(() => {
        const targetDim = this.calcDimensions(this.elems_.target);
        const wrapperDim = this.calcDimensions(this.elems_.targetWrapper); // center the wrapper in reference to the target element

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
    calcDimensions: function (el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    },
    cloneTarget: function () {
      const clone = this.elems_.target.cloneNode(true);
      clone.id = `tdl-feature-discovery--${this.target}`; // copy computed styles from target

      const targetStyle = window.getComputedStyle(this.elems_.target);

      for (let i = 0; i < targetStyle.length; i++) {
        const prop = targetStyle[i];
        const style = targetStyle.getPropertyValue(prop);
        clone.style.setProperty(prop, style);
      }

      if (this.customTarget) {
        clone.classList.add('feature-discovery-cloned-target');
      }

      clone.addEventListener('click', evt => {
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
    removeCloneTarget: function () {
      const clone = document.getElementById(`tdl-feature-discovery--${this.target}`);
      clone.remove();
    },
    attachListeners: function () {
      window.addEventListener('scroll', this.updatePosition, {
        passive: true
      });
      window.addEventListener('resize', this.updatePosition);
    },
    removeListeners: function () {
      window.removeEventListener('scroll', this.updatePosition, {
        passive: true
      });
      window.removeEventListener('resize', this.updatePosition);
    },
    checkScrollDistance: function () {
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

  mounted: function () {
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

/* script */
const __vue_script__ = TdlFeatureDiscovery;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-feature-discovery",
    class: [_vm.themeClass],
    style: _vm.cssProps
  }, [_c('div', {
    ref: "targetWrapper",
    staticClass: "tap-target-wrapper",
    on: {
      "click": function ($event) {
        return _vm.closeDiscovery();
      }
    }
  }, [_c('div', {
    staticClass: "tap-target",
    class: [_vm.themeClass]
  }, [_c('div', {
    staticClass: "tap-target-content",
    class: _vm.helperPosition
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "tap-target-wave"
  })]), _vm._v(" "), _c('div', {
    ref: "featureBackdrop",
    staticClass: "tdl-feature-backdrop",
    on: {
      "click": function ($event) {
        return _vm.closeDiscovery();
      }
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4d219536_0", {
    source: ".tdl-feature-discovery .tap-target-wrapper{position:fixed;width:800px;height:800px;z-index:11;visibility:hidden;transition:visibility 0s .3s}.tdl-feature-discovery .tap-target-wrapper.open{visibility:visible;transition:visibility 0s}.tdl-feature-discovery .tap-target-wrapper.open .tap-target{transform:scale(1);opacity:.95;transition:transform .3s cubic-bezier(.42,0,.58,1),opacity .3s cubic-bezier(.42,0,.58,1)}.tdl-feature-discovery .tap-target-wrapper.open .tap-target-wave{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:88px;height:88px}.tdl-feature-discovery .tap-target-wrapper.open .tap-target-wave::after,.tdl-feature-discovery .tap-target-wrapper.open .tap-target-wave::before{background-color:#27292d}.tdl-feature-discovery .tap-target-wrapper.open .tap-target-wave::before{transform:scale(1)}.tdl-feature-discovery .tap-target-wrapper.open .tap-target-wave::after{visibility:visible;animation:pulse-animation 1s cubic-bezier(.24,0,.38,1) infinite;transition:opacity .3s,transform .3s,visibility 0s 1s}.tdl-feature-discovery .tap-target{position:absolute;font-size:1rem;border-radius:50%;width:100%;height:100%;opacity:0;transform:scale(0);transition:transform .3s cubic-bezier(.42,0,.58,1),opacity .3s cubic-bezier(.42,0,.58,1);background-color:rgba(94,98,107,.96);color:rgba(255,255,255,.9)}.tdl-feature-discovery .tap-target h1.pink100,.tdl-feature-discovery .tap-target h2.pink100,.tdl-feature-discovery .tap-target h3.pink100,.tdl-feature-discovery .tap-target h4.pink100,.tdl-feature-discovery .tap-target h5.pink100{color:#f8bbd0}.tdl-feature-discovery .tap-target h1.pink200,.tdl-feature-discovery .tap-target h2.pink200,.tdl-feature-discovery .tap-target h3.pink200,.tdl-feature-discovery .tap-target h4.pink200,.tdl-feature-discovery .tap-target h5.pink200{color:#f48fb1}.tdl-feature-discovery .tap-target h1.pink300,.tdl-feature-discovery .tap-target h2.pink300,.tdl-feature-discovery .tap-target h3.pink300,.tdl-feature-discovery .tap-target h4.pink300,.tdl-feature-discovery .tap-target h5.pink300{color:#f06292}.tdl-feature-discovery .tap-target h1.purple100,.tdl-feature-discovery .tap-target h2.purple100,.tdl-feature-discovery .tap-target h3.purple100,.tdl-feature-discovery .tap-target h4.purple100,.tdl-feature-discovery .tap-target h5.purple100{color:#e1bee7}.tdl-feature-discovery .tap-target h1.purple200,.tdl-feature-discovery .tap-target h2.purple200,.tdl-feature-discovery .tap-target h3.purple200,.tdl-feature-discovery .tap-target h4.purple200,.tdl-feature-discovery .tap-target h5.purple200{color:#ce93d8}.tdl-feature-discovery .tap-target h1.purple300,.tdl-feature-discovery .tap-target h2.purple300,.tdl-feature-discovery .tap-target h3.purple300,.tdl-feature-discovery .tap-target h4.purple300,.tdl-feature-discovery .tap-target h5.purple300{color:#ba68c8}.tdl-feature-discovery .tap-target h1.deepPurple200,.tdl-feature-discovery .tap-target h2.deepPurple200,.tdl-feature-discovery .tap-target h3.deepPurple200,.tdl-feature-discovery .tap-target h4.deepPurple200,.tdl-feature-discovery .tap-target h5.deepPurple200{color:#b39ddb}.tdl-feature-discovery .tap-target h1.deepPurple300,.tdl-feature-discovery .tap-target h2.deepPurple300,.tdl-feature-discovery .tap-target h3.deepPurple300,.tdl-feature-discovery .tap-target h4.deepPurple300,.tdl-feature-discovery .tap-target h5.deepPurple300{color:#9575cd}.tdl-feature-discovery .tap-target h1.blue200,.tdl-feature-discovery .tap-target h2.blue200,.tdl-feature-discovery .tap-target h3.blue200,.tdl-feature-discovery .tap-target h4.blue200,.tdl-feature-discovery .tap-target h5.blue200{color:#90caf9}.tdl-feature-discovery .tap-target h1.blue500,.tdl-feature-discovery .tap-target h2.blue500,.tdl-feature-discovery .tap-target h3.blue500,.tdl-feature-discovery .tap-target h4.blue500,.tdl-feature-discovery .tap-target h5.blue500{color:#2196f3}.tdl-feature-discovery .tap-target h1.cyan200,.tdl-feature-discovery .tap-target h2.cyan200,.tdl-feature-discovery .tap-target h3.cyan200,.tdl-feature-discovery .tap-target h4.cyan200,.tdl-feature-discovery .tap-target h5.cyan200{color:#80deea}.tdl-feature-discovery .tap-target h1.cyan500,.tdl-feature-discovery .tap-target h2.cyan500,.tdl-feature-discovery .tap-target h3.cyan500,.tdl-feature-discovery .tap-target h4.cyan500,.tdl-feature-discovery .tap-target h5.cyan500{color:#00bcd4}.tdl-feature-discovery .tap-target h1.teal200,.tdl-feature-discovery .tap-target h2.teal200,.tdl-feature-discovery .tap-target h3.teal200,.tdl-feature-discovery .tap-target h4.teal200,.tdl-feature-discovery .tap-target h5.teal200{color:#80cbc4}.tdl-feature-discovery .tap-target h1.teal400,.tdl-feature-discovery .tap-target h2.teal400,.tdl-feature-discovery .tap-target h3.teal400,.tdl-feature-discovery .tap-target h4.teal400,.tdl-feature-discovery .tap-target h5.teal400{color:#26a69a}.tdl-feature-discovery .tap-target h1.lightGreen500,.tdl-feature-discovery .tap-target h2.lightGreen500,.tdl-feature-discovery .tap-target h3.lightGreen500,.tdl-feature-discovery .tap-target h4.lightGreen500,.tdl-feature-discovery .tap-target h5.lightGreen500{color:#8bc34a}.tdl-feature-discovery .tap-target h1.lime500,.tdl-feature-discovery .tap-target h2.lime500,.tdl-feature-discovery .tap-target h3.lime500,.tdl-feature-discovery .tap-target h4.lime500,.tdl-feature-discovery .tap-target h5.lime500{color:#cddc39}.tdl-feature-discovery .tap-target h1.amber300,.tdl-feature-discovery .tap-target h2.amber300,.tdl-feature-discovery .tap-target h3.amber300,.tdl-feature-discovery .tap-target h4.amber300,.tdl-feature-discovery .tap-target h5.amber300{color:#ffd54f}.tdl-feature-discovery .tap-target h1.amber600,.tdl-feature-discovery .tap-target h2.amber600,.tdl-feature-discovery .tap-target h3.amber600,.tdl-feature-discovery .tap-target h4.amber600,.tdl-feature-discovery .tap-target h5.amber600{color:#d69600}.tdl-feature-discovery .tap-target h1.orange400,.tdl-feature-discovery .tap-target h2.orange400,.tdl-feature-discovery .tap-target h3.orange400,.tdl-feature-discovery .tap-target h4.orange400,.tdl-feature-discovery .tap-target h5.orange400{color:#ffa726}.tdl-feature-discovery .tap-target h1.deepOrange500,.tdl-feature-discovery .tap-target h2.deepOrange500,.tdl-feature-discovery .tap-target h3.deepOrange500,.tdl-feature-discovery .tap-target h4.deepOrange500,.tdl-feature-discovery .tap-target h5.deepOrange500{color:#ff5722}.tdl-feature-discovery .tap-target h1.brown100,.tdl-feature-discovery .tap-target h2.brown100,.tdl-feature-discovery .tap-target h3.brown100,.tdl-feature-discovery .tap-target h4.brown100,.tdl-feature-discovery .tap-target h5.brown100{color:#d7ccc8}.tdl-feature-discovery .tap-target h1.brown200,.tdl-feature-discovery .tap-target h2.brown200,.tdl-feature-discovery .tap-target h3.brown200,.tdl-feature-discovery .tap-target h4.brown200,.tdl-feature-discovery .tap-target h5.brown200{color:#bcaaa4}.tdl-feature-discovery .tap-target h1.bio,.tdl-feature-discovery .tap-target h2.bio,.tdl-feature-discovery .tap-target h3.bio,.tdl-feature-discovery .tap-target h4.bio,.tdl-feature-discovery .tap-target h5.bio{color:#cddc39}.tdl-feature-discovery .tap-target-content{position:absolute;overflow:visible;width:327px;height:124px}.tdl-feature-discovery .tap-target-content.top-left{top:212px;left:92px}.tdl-feature-discovery .tap-target-content.top-center{top:50%;left:50%;width:auto;max-width:90vw;height:auto;padding-bottom:48px;transform:translate(-50%,-100%)}.tdl-feature-discovery .tap-target-content.top-right{top:212px;left:396px}.tdl-feature-discovery .tap-target-content.bottom-left{top:464px;left:92px}.tdl-feature-discovery .tap-target-content.bottom-center{top:50%;left:50%;width:auto;max-width:70%;height:auto;padding-top:48px;transform:translateX(-50%)}.tdl-feature-discovery .tap-target-content.bottom-right{top:464px;left:396px}.tdl-feature-discovery .tap-target-wave{position:absolute;border-radius:50%;z-index:11}.tdl-feature-discovery .tap-target-wave::after,.tdl-feature-discovery .tap-target-wave::before{content:\"\";display:block;position:absolute;width:100%;height:100%;border-radius:50%}.tdl-feature-discovery .tap-target-wave::before{transform:scale(0);transition:transform .3s}.tdl-feature-discovery .tap-target-wave::after{visibility:hidden;transition:opacity .3s,transform .3s,visibility 0s;z-index:-1}@media only screen and (max-width:960px){.tdl-feature-discovery .tap-target-wrapper{width:600px;height:600px}.tdl-feature-discovery .tap-target-content{width:184px;height:124px}.tdl-feature-discovery .tap-target-content.top-left{top:112px;left:120px}.tdl-feature-discovery .tap-target-content.top-center{width:auto;max-width:90vw;height:auto;top:50%;left:50%;transform:translate(-50%,-100%);padding-bottom:48px}.tdl-feature-discovery .tap-target-content.top-right{top:112px;left:296px}.tdl-feature-discovery .tap-target-content.bottom-left{top:364px;left:120px}.tdl-feature-discovery .tap-target-content.bottom-center{top:50%;left:50%;width:auto;max-width:70%;height:auto;padding-top:48px;transform:translateX(-50%)}.tdl-feature-discovery .tap-target-content.bottom-right{top:364px;left:296px}}.tdl-feature-discovery .tdl-feature-backdrop{display:none;position:fixed;z-index:9;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.54);pointer-events:auto}.tdl-feature-discovery .tdl-feature-backdrop.open{display:block}.tdl-feature-discovery .feature-discovery-cloned-target{box-shadow:none!important;max-width:88px!important;left:50%!important;transform:translateX(-50%)!important;font:inherit!important;font-size:var(--size)!important;padding:0!important;text-align:center!important}@keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

export default __vue_component__;
