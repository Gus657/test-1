import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import MdBackdrop from './MdBackdrop.js';

//
const MdSidenav = {
  name: 'md-sidenav',
  components: {
    MdBackdrop
  },

  data() {
    return {
      mdVisible: false
    };
  },

  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 15
    },
    mdSwipeDistance: {
      type: Number,
      default: 100
    },
    mdFixed: Boolean
  },
  computed: {
    classes() {
      return {
        'md-active': this.mdVisible,
        'md-fixed': this.mdFixed
      };
    }

  },
  methods: {
    show() {
      this.open();
    },

    open() {
      this.mdVisible = true;

      if (!this.mdFixed) {
        this.$el.focus();
      }

      this.$emit('open');
    },

    close() {
      this.mdVisible = false;

      if (!this.mdFixed) {
        this.$el.blur();
      }

      this.$emit('close');
    },

    toggle() {
      if (this.mdVisible) {
        this.close();
      } else {
        this.open();
      }
    },

    isHorizontallyInside(positionX) {
      return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
    },

    isVerticallyInside(positionY) {
      return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
    },

    isFromStartWhenClosed(positionX) {
      if (this.mdVisible) {
        return true;
      }

      return positionX < this.mdSwipeThreshold;
    },

    handleTouchStart(event) {
      const positionX = event.touches[0].clientX - this.mountedRect.left;
      const positionY = event.touches[0].clientY - this.mountedRect.top;

      if (!this.isHorizontallyInside(positionX) || !this.isVerticallyInside(positionY) || !this.isFromStartWhenClosed(positionX)) {
        return;
      }

      this.initialTouchPosition = positionX;
      this.canMove = true;
    },

    handleTouchEnd() {
      this.canMove = false;
      this.initialTouchPosition = null;
    },

    handleTouchMove(event) {
      if (!this.canMove) {
        return;
      }

      const positionX = event.touches[0].clientX;
      const difference = this.mdVisible ? this.initialTouchPosition - positionX : positionX - this.initialTouchPosition;
      const action = this.mdVisible ? 'close' : 'open';

      if (difference > this.mdSwipeDistance) {
        this[action]();
      }
    }

  },

  mounted() {
    if (!this.mdSwipeable) {
      return;
    }

    this.mountedRect = this.$refs.backdrop.$el.getBoundingClientRect();
    this.initialTouchPosition = null;
    this.canMove = false;
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  },

  beforeDestroy() {
    if (!this.mdSwipeable) {
      return;
    }

    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('touchmove', this.handleTouchMove);
  }

};

/* script */
const __vue_script__ = MdSidenav;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-sidenav",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        return _vm.close($event);
      }
    }
  }, [_c('div', {
    staticClass: "md-sidenav-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-sidenav-backdrop",
    on: {
      "close": _vm.close
    }
  })], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-c4173bc8_0", {
    source: ".md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:100;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform;background-color:#27292d;color:rgba(255,255,255,.9)}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}",
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
