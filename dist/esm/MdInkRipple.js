import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

//
//
//
//
//
//
//
//
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function () {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

const addEvent = (target, type, handler) => {
  if (type === 'start') {
    target.addEventListener('mousedown', handler, supportsPassive ? {
      passive: true
    } : false);
    target.addEventListener('touchstart', handler, supportsPassive ? {
      passive: true
    } : false);
  } else {
    target.addEventListener('mouseup', handler, supportsPassive ? {
      passive: true
    } : false);
    target.addEventListener('touchend', handler, supportsPassive ? {
      passive: true
    } : false);
  }
};

const removeEvent = (target, type, handler) => {
  if (type === 'start') {
    target.removeEventListener('mousedown', handler);
    target.removeEventListener('touchstart', handler);
  } else {
    target.removeEventListener('mouseup', handler);
    target.removeEventListener('touchend', handler);
  }
};

const MdInkRipple = {
  name: 'md-ink-ripple',
  props: {
    mdDisabled: Boolean
  },
  data: () => ({
    mounted: false,
    rippleElement: null,
    parentElement: null,
    parentDimensions: {
      width: null,
      height: null,
      top: null,
      left: null
    },
    awaitingComplete: false,
    hasCompleted: false,
    fadeOut: false,
    active: false
  }),
  computed: {
    classes() {
      return {
        'md-fadeout': this.fadeOut,
        'md-active': this.active
      };
    },

    styles() {
      return {
        width: this.parentDimensions.width,
        height: this.parentDimensions.height,
        top: this.parentDimensions.top,
        left: this.parentDimensions.left
      };
    },

    disabled() {
      return this.mdDisabled;
    }

  },
  watch: {
    disabled(disabled) {
      if (!disabled) {
        this.init();
      } else {
        this.destroy();
      }
    }

  },
  methods: {
    checkAvailablePositions(element) {
      const availablePositions = ['relative', 'absolute', 'fixed'];
      return availablePositions.indexOf(getComputedStyle(element).position) > -1;
    },

    getClosestPositionedParent(element) {
      const parent = element && element.parentNode;

      if (!parent || parent.tagName.toLowerCase() === 'body') {
        return false;
      }

      if (this.checkAvailablePositions(element)) {
        return element;
      }

      return this.getClosestPositionedParent(parent);
    },

    getParentSize() {
      const parent = this.parentElement;
      return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px';
    },

    getClickPosition(event) {
      if (this.$refs.ripple) {
        const rect = this.parentElement.getBoundingClientRect();
        let top = event.pageY;
        let left = event.pageX;

        if (event.type === 'touchstart') {
          top = event.changedTouches[0].pageY;
          left = event.changedTouches[0].pageX;
        }

        return {
          top: top - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px',
          left: left - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px'
        };
      }

      return false;
    },

    setDimensions() {
      const size = this.getParentSize();
      this.parentDimensions.width = size;
      this.parentDimensions.height = size;
    },

    setPositions(event) {
      const positions = this.getClickPosition(event);

      if (positions) {
        this.parentDimensions.top = positions.top;
        this.parentDimensions.left = positions.left;
      }
    },

    clearState() {
      this.active = false;
      this.fadeOut = false;
      this.hasCompleted = false;
      this.setDimensions();
      window.clearTimeout(this.awaitingComplete);
      removeEvent(document.body, 'end', this.endRipple);
    },

    startRipple(event) {
      if (event.type === 'touchstart') {
        this.previous.push('touch');
      } else {
        this.previous.push('mouse');
      }

      this.previous = this.previous.splice(this.previous.length - 2, this.previous.length);

      if (this.previous.length >= 2 && this.previous[1] === 'touch' && this.previous[0] === 'mouse') {
        return;
      }

      this.clearState();
      this.awaitingComplete = window.setTimeout(() => {
        this.hasCompleted = true;
      }, 400);
      addEvent(document.body, 'end', this.endRipple);
      this.$nextTick(() => {
        this.setPositions(event);
        this.active = true;
      });
    },

    endRipple() {
      if (this.hasCompleted) {
        this.fadeOut = true;
      } else {
        this.awaitingComplete = window.setTimeout(() => {
          this.fadeOut = true;
        }, 200);
      }

      removeEvent(document.body, 'end', this.endRipple);
    },

    registerTriggerEvent() {
      addEvent(this.parentElement, 'start', this.startRipple);
    },

    unregisterTriggerEvent() {
      if (this.parentElement) {
        removeEvent(this.parentElement, 'start', this.startRipple);
      }
    },

    init() {
      this.rippleElement = this.$el;
      this.parentElement = this.getClosestPositionedParent(this.$el.parentNode);
      this.previous = ['mouse'];

      if (this.parentElement) {
        this.rippleElement.parentNode.removeChild(this.rippleElement);

        if (this.parentElement.querySelectorAll('.md-ink-ripple').length > 0) {
          this.$destroy();
        } else {
          this.parentElement.appendChild(this.rippleElement);
          this.registerTriggerEvent();
          this.setDimensions();
        }
      } else {
        this.$destroy();
      }
    },

    destroy() {
      if (this.rippleElement && this.rippleElement.parentNode) {
        this.unregisterTriggerEvent();
        this.rippleElement.parentNode.removeChild(this.rippleElement);
      }
    }

  },

  mounted() {
    window.setTimeout(() => {
      if (!this.disabled) {
        this.init();
      } else {
        this.destroy();
      }

      this.$nextTick(() => {
        this.mounted = true;
      });
    }, 100);
  },

  beforeDestroy() {
    this.destroy();
  }

};

/* script */
const __vue_script__ = MdInkRipple;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.mounted || !_vm.disabled ? _c('div', {
    staticClass: "md-ink-ripple"
  }, [_c('div', {
    ref: "ripple",
    staticClass: "md-ripple",
    class: _vm.classes,
    style: _vm.styles
  })]) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-7a0c91c6_0", {
    source: ".md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 100%);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;background-color:currentColor;border-radius:50%;opacity:.2;transform:scale(0) translateZ(0);transition:none;will-change:background-color,opacity,transform,width,height,top,left}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1) forwards}.md-ripple.md-active.md-fadeout{opacity:0!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.6s}@keyframes ripple{to{transform:scale(2.2) translateZ(0)}}",
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
