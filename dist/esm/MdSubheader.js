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
//
//
//
//
const MdSubheader = {
  name: 'md-subheader'
};

/* script */
const __vue_script__ = MdSubheader;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.$parent.$options._componentTag === 'md-list' ? _c('li', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-1118b1b3_0", {
    source: ".md-subheader{min-height:48px;padding:0 16px;display:flex;align-items:center;flex-flow:row wrap;font-size:14px;font-weight:500}",
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
