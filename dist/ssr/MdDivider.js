'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');

var mdDividerTheme = ".THEME_NAME.md-divider {\n  background-color: TEXT-DISABLED;\n}";

//
const MdDivider = {
  name: 'md-divider',
  mixins: [mixin.theme],
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
  }, []);
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

const __vue_module_identifier__ = "data-v-d50328b4";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
