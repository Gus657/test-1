import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';

//
//
//
//
//
//
const MdCardArea = {
  name: 'md-card-area',
  props: {
    mdInset: Boolean
  },
  computed: {
    classes() {
      return {
        'md-inset': this.mdInset
      };
    }

  }
};

/* script */
const __vue_script__ = MdCardArea;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-card-area",
    class: _vm.classes
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

export default __vue_component__;
