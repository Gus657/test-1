import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';

//
//
//
//
//
//
const MdCardHeaderText = {
  name: 'md-card-header-text',

  mounted() {
    this.parentClasses = this.$parent.$el.classList;

    if (this.parentClasses.contains('md-card-header')) {
      this.insideParent = true;
      this.parentClasses.add('md-card-header-flex');
    }
  },

  destroyed() {
    this.parentClasses.remove('md-card-header-flex');
  }

};

/* script */
const __vue_script__ = MdCardHeaderText;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-card-header-text"
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
