'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var MdWhiteframe = require('./MdWhiteframe.js');
var MdToolbar = require('./MdToolbar.js');

const TdlBottomSlot = {
  name: 'tdl-bottom-slot',
  components: {
    MdWhiteframe,
    MdToolbar
  },
  props: {
    theme: {
      type: String,
      required: false,
      default: 'white'
    }
  }
};

/* script */
const __vue_script__ = TdlBottomSlot;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-whiteframe', {
    ref: "bottomBar",
    staticClass: "tdl-bottom-slot",
    attrs: {
      "md-elevation": "4"
    }
  }, [_c('md-toolbar', {
    staticClass: "tdl-bottom-slot-toolbar",
    attrs: {
      "md-theme": _vm.theme
    }
  }, [_vm._t("default")], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-3d0bbe34_0", {
    source: ".tdl-bottom-slot{position:fixed!important;bottom:0;left:0;width:100%}.tdl-bottom-slot-toolbar{min-height:48px;background-color:transparent!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-3d0bbe34";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
