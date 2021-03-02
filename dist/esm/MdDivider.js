import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';

var mdDividerTheme = ".THEME_NAME.md-divider {\n  background-color: TEXT-DISABLED;\n}";

//
const MdDivider = {
  name: 'md-divider',
  mixins: [theme],
  created: function () {
    this.$root.$emit("component-created", {
      name: "mdDivider",
      theme: mdDividerTheme
    });
  }
};

/* script */
const __vue_script__ = MdDivider;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('hr', {
    staticClass: "md-divider",
    class: [_vm.themeClass]
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-d50328b4_0", {
    source: ".md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(255,255,255,.38)}.md-divider.md-inset{margin-left:72px}",
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
