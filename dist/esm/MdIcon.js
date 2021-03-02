import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

var mdIconTheme = ".THEME_NAME.md-icon.md-primary {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-icon.md-accent {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-icon.md-warn {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-icon .md-icon__badge {\n  background-color: COMPONENT-BADGE;\n  color: COMPONENT-TEXT;\n}";

//
const MdIcon = {
  name: 'md-icon',
  props: {
    mdSrc: String,
    iconSvg: String,
    badge: Number,
    iconColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "24px"
    }
  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdIcon",
      theme: mdIconTheme
    });
  },

  data: () => ({
    svgContent: null,
    imageSrc: null
  }),
  computed: {
    badgeText() {
      return Math.min(this.badge, 99);
    },

    currentTheme() {
      return this.theme;
    },

    cssVariables() {
      return {
        '--size': this.size,
        '--icon-color': this.iconColor
      };
    }

  }
};

/* script */
const __vue_script__ = MdIcon;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "md-icon",
    style: _vm.cssVariables
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 24 25"
    }
  }, [_c('path', {
    class: _vm.currentTheme,
    attrs: {
      "d": _vm.iconSvg
    }
  })]), _vm._v(" "), _vm.badge ? _c('div', {
    staticClass: "md-icon__badge"
  }, [_vm._v(_vm._s(_vm.badgeText))]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-5a3501f7_0", {
    source: ".md-icon{width:var(--size);min-width:var(--size);height:var(--size);min-height:var(--size);position:relative;margin:auto;display:inline-flex!important;align-items:center;text-rendering:optimizeLegibility;vertical-align:middle;fill:var(--icon-color)}.md-icon svg{width:var(--size);height:auto}.md-icon__badge{position:absolute;top:-6px;right:-6px;width:12px;height:12px;border-radius:50%;text-align:center;font-size:7px;font-style:normal;line-height:12px;font-family:Muli,Helvetica,Arial,sans-serif}img.md-icon{user-select:none;-webkit-user-drag:none}",
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
