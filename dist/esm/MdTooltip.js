import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import { t as transitionEndEventName } from './transitionEndEventName-e3bb98be.js';
import { i as isMobile } from './deviceHelper-575f722e.js';

var mdTooltipTheme = ".THEME_NAME.md-tooltip {\n  background-color: COMPONENT-TOOLTIP;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-tooltip .md-label, .THEME_NAME.md-tooltip div, .THEME_NAME.md-tooltip p {\n  color: TEXT-ACCENT_TITLE;\n}";

//
const MdTooltip = {
  name: 'md-tooltip',
  props: {
    mdDirection: {
      type: String,
      default: 'bottom'
    },
    mdDelay: {
      type: String,
      default: '0'
    },
    displayOnMobile: {
      type: Boolean,
      default: false
    },
    openOnMounted: {
      type: [Boolean, String],
      default: false
    }
  },
  mixins: [theme],

  created() {
    this.$root.$emit("component-created", {
      name: "mdTooltip",
      theme: mdTooltipTheme
    });
  },

  data: () => ({
    active: false,
    parentClass: null,
    transitionOff: false,
    topPosition: false,
    leftPosition: false,
    adaptiveDirection: 'bottom',
    isFingerMoving: false
  }),
  computed: {
    classes() {
      const cssClasses = {
        'md-active': this.active,
        'md-transition-off': this.transitionOff,
        'md-tooltip-top': this.adaptiveDirection === 'top',
        'md-tooltip-right': this.adaptiveDirection === 'right',
        'md-tooltip-bottom': this.adaptiveDirection === 'bottom',
        'md-tooltip-left': this.adaptiveDirection === 'left'
      };

      if (this.parentClass) {
        cssClasses[this.parentClass] = true;
      }

      return cssClasses;
    },

    style() {
      return {
        'transition-delay': this.mdDelay + 'ms',
        top: this.topPosition + 'px',
        left: this.leftPosition + 'px'
      };
    }

  },
  watch: {
    mdDirection(value) {
      this.adaptiveDirection = value;
      this.calculateTooltipPosition();
    }

  },
  methods: {
    removeTooltips() {
      this.tooltipElement.removeEventListener(transitionEndEventName, this.removeTooltips);

      if (this.tooltipElement.parentNode) {
        this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      }
    },

    switchDirectionIfNeeded() {
      let position = this.parentElement.getBoundingClientRect();

      switch (this.adaptiveDirection) {
        case 'bottom':
          if (position.bottom + this.$el.offsetHeight >= window.innerHeight) {
            this.adaptiveDirection = 'top';
          }

          break;

        case 'top':
          if (position.top + position.height >= position.top) {
            this.adaptiveDirection = 'bottom';
          }

          break;

        case 'right':
          if (position.right + this.$el.offsetWidth >= window.innerWidth) {
            this.adaptiveDirection = 'left';
          }

          break;

        case 'left':
          if (position.left - this.$el.offsetWidth <= 8) {
            this.adaptiveDirection = 'right';
          }

          break;

        default:
          console.warn(`Invalid ${this.adaptiveDirection} option to md-direction option`);
      }
    },

    calculateTooltipPosition() {
      let position = this.parentElement.getBoundingClientRect();
      let cssPosition = {};
      this.switchDirectionIfNeeded();

      switch (this.adaptiveDirection) {
        case 'top':
          cssPosition.top = position.top - this.$el.offsetHeight;
          cssPosition.left = position.left + position.width / 2;
          break;

        case 'right':
          cssPosition.top = position.top;
          cssPosition.left = position.left + position.width;
          break;

        case 'bottom':
          cssPosition.top = position.bottom;
          cssPosition.left = position.left + position.width / 2;
          break;

        case 'left':
          cssPosition.top = position.top;
          cssPosition.left = position.left - this.$el.offsetWidth;
          break;

        default:
          console.warn(`Invalid ${this.adaptiveDirection} option to md-direction option`);
      }

      this.topPosition = cssPosition.top;

      if (this.$el.getBoundingClientRect().width / 2 >= cssPosition.left) {
        this.leftPosition = this.$el.getBoundingClientRect().width / 2 + 8;
      } else if (cssPosition.left + this.$el.getBoundingClientRect().width >= window.innerWidth) {
        this.leftPosition = window.innerWidth - this.$el.getBoundingClientRect().width / 2 - 8;
      } else {
        this.leftPosition = cssPosition.left;
      }
    },

    generateTooltipClasses() {
      let classes = [];
      [...this.parentElement.classList].forEach(cssClass => {
        if (cssClass.indexOf('md-') >= 0 && cssClass !== 'md-active') {
          classes.push(cssClass + '-tooltip');
        }
      });
      this.parentClass = classes.join(' ');
    },

    open() {
      this.removeTooltips();
      this.$nextTick(() => {
        document.body.appendChild(this.tooltipElement);
        getComputedStyle(this.tooltipElement).top;
        this.transitionOff = true;
        this.generateTooltipClasses();
        this.calculateTooltipPosition();
        window.setTimeout(() => {
          this.transitionOff = false;
          this.active = true;
        }, 10);
      });
    },

    close() {
      this.active = false;

      if (this.tooltipElement) {
        this.tooltipElement.removeEventListener(transitionEndEventName, this.removeTooltips);
        this.tooltipElement.addEventListener(transitionEndEventName, this.removeTooltips);
      }

      this.adaptiveDirection = this.mdDirection;
    },

    handleTouchMove() {
      this.close();
      this.isFingerMoving = true;
    },

    handleTouchCancelOrEnd() {
      this.isFingerMoving = false;
    },

    handleMobileInteraction(event) {
      window.setTimeout(() => {
        if (!this.isFingerMoving) {
          const elements = [this.parentElement, ...this.parentElement.querySelectorAll('*')];

          if (!this.active && elements.includes(event.target)) {
            this.open();
          } else if (this.active && !elements.includes(event.target)) {
            this.close();
          }
        }
      }, 100);
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.adaptiveDirection = this.mdDirection;

      if (!isMobile() || this.displayOnMobile) {
        this.tooltipElement = this.$el;
        this.parentElement = this.tooltipElement.parentNode;
        this.$el.parentNode.removeChild(this.$el);
      }

      document.addEventListener('scroll', this.close, true);

      if (!isMobile()) {
        this.parentElement.addEventListener('mouseenter', this.open);
        this.parentElement.addEventListener('focus', this.open);
        this.parentElement.addEventListener('mouseleave', this.close);
        this.parentElement.addEventListener('blur', this.close);

        if (this.openOnMounted) {
          this.open();
          window.addEventListener('wheel', this.close);
          window.addEventListener('resize', this.calculateTooltipPosition);

          if (typeof this.openOnMounted === 'string') {
            setTimeout(() => {
              this.close();
            }, parseInt(this.openOnMounted, 10));
          }
        }
      } else if (this.displayOnMobile) {
        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchcancel', this.handleTouchCancelOrEnd);
        document.addEventListener('touchend', this.handleTouchCancelOrEnd);
        document.addEventListener('touchstart', this.handleMobileInteraction);
      }
    });
  },

  beforeDestroy() {
    this.active = false;

    if (this.tooltipElement) {
      this.removeTooltips();
    }

    document.removeEventListener('scroll', this.close, true);

    if (this.parentElement) {
      if (!isMobile()) {
        this.parentElement.removeEventListener('mouseenter', this.open);
        this.parentElement.removeEventListener('focus', this.open);
        this.parentElement.removeEventListener('mouseleave', this.close);
        this.parentElement.removeEventListener('blur', this.close);

        if (this.openOnMounted) {
          window.removeEventListener('wheel', this.close);
          window.removeEventListener('resize', this.calculateTooltipPosition);
        }
      } else if (this.displayOnMobile) {
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchcancel', this.handleTouchCancelOrEnd);
        document.removeEventListener('touchend', this.handleTouchCancelOrEnd);
        document.removeEventListener('touchstart', this.handleMobileInteraction);
      }
    }
  }

};

/* script */
const __vue_script__ = MdTooltip;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "md-tooltip",
    class: [_vm.classes, _vm.themeClass],
    style: _vm.style
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-15a404d2_0", {
    source: ".md-tooltip{height:fit-content;padding:2px 8px;position:fixed;z-index:200;pointer-events:none;border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;font-family:Muli,Helvetica,Arial,sans-serif;font-weight:600!important;font-size:10px;line-height:16px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%,0)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translate(0,50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%,0)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translate(0,50%)}",
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
