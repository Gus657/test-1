import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

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

const MdBackdrop = {
  name: 'md-backdrop',

  mounted() {
    if (this.$refs.backdrop) {
      this.$refs.backdrop.addEventListener('touchmove', this.handleTouchMove, supportsPassive ? {
        passive: false
      } : false);
    }
  },

  beforeDestroy() {
    if (this.$refs.backdrop) {
      this.$refs.backdrop.removeEventListener('touchmove', this.handleTouchMove, supportsPassive ? {
        passive: false
      } : false);
    }
  },

  methods: {
    close() {
      this.$emit('close');
    },

    handleTouchMove: function (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
};

/* script */
const __vue_script__ = MdBackdrop;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "backdrop",
    staticClass: "md-backdrop",
    on: {
      "click": _vm.close,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        return _vm.close($event);
      }
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-346cc70f_0", {
    source: ".md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translate3d(0,0,0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:rgba(0,0,0,.05)}",
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
