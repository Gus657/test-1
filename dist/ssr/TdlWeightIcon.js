'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

const TdlWeightIcon = {
  name: 'tdl-weight-icon',
  props: {
    iconSize: {
      type: Number
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};

/* script */
const __vue_script__ = TdlWeightIcon;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-weight-icon",
    class: [_vm.themeClass]
  }, [_vm._ssrNode("<svg" + _vm._ssrAttr("width", _vm.iconSize) + _vm._ssrAttr("height", _vm.iconSize) + " viewBox=\"0 0 21 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-1cc6b09a><g id=\"Add-weight-\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-1cc6b09a><g id=\"Add-weight-Copy\" data-v-1cc6b09a><g id=\"baseline-add_circle-24px-(1)\" transform=\"translate(11.000000, 6.000000)\" data-v-1cc6b09a><polygon id=\"Path\" points=\"0 0 10 0 10 10 0 10\" data-v-1cc6b09a></polygon> <path d=\"M5.5,1 C3.016,1 1,3.016 1,5.5 C1,7.984 3.016,10 5.5,10 C7.984,10 10,7.984 10,5.5 C10,3.016 7.984,1 5.5,1 Z M7.75,5.95 L5.95,5.95 L5.95,7.75 L5.05,7.75 L5.05,5.95 L3.25,5.95 L3.25,5.05 L5.05,5.05 L5.05,3.25 L5.95,3.25 L5.95,5.05 L7.75,5.05 L7.75,5.95 Z\" id=\"Shape\" fill-opacity=\"1\" fill-rule=\"nonzero\"" + _vm._ssrAttr("fill", _vm.iconColor) + " data-v-1cc6b09a></path></g> <g id=\"ic_weight-copy\" opacity=\"1\" data-v-1cc6b09a><polygon id=\"Shape\" points=\"0 0 19 0 19 18 0 18\" data-v-1cc6b09a></polygon> <path d=\"M13.2,5.11111111 C13.2,5.67888889 13.048,6.20777778 12.768,6.66666667 L14.8,6.66666667 C15.56,6.66666667 14.1046734,6.92082581 13.1502363,7.80604074 C11.6330813,9 11.4370549,10.5760366 11.4707171,11.9946185 C11.4991871,13.1943915 12,14.2982242 12.8449387,15.0449802 C13.0974818,15.2681775 13.8217798,16 15.038106,16 L3.6,16 C2.7163444,16 2,15.3035541 2,14.4444444 C2,14.2733333 2.032,14.11 3.64,7.88 C3.8,7.18777778 4.44,6.66666667 5.2,6.66666667 L7.232,6.66666667 C6.952,6.20777778 6.8,5.67888889 6.8,5.11111111 C6.8,3.39289189 8.2326888,2 10,2 C11.7673112,2 13.2,3.39289189 13.2,5.11111111 Z M10,3.55555556 C9.1163444,3.55555556 8.4,4.2520015 8.4,5.11111111 C8.4,5.97022072 9.1163444,6.66666667 10,6.66666667 C10.8836556,6.66666667 11.6,5.97022072 11.6,5.11111111 C11.6,4.2520015 10.8836556,3.55555556 10,3.55555556 Z\" id=\"Shape\" fill-rule=\"nonzero\"" + _vm._ssrAttr("fill", _vm.iconColor) + " data-v-1cc6b09a></path></g></g></g></svg>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-1cc6b09a_0", {
    source: ".tdl-weight-icon[data-v-1cc6b09a]{display:inline-flex}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-1cc6b09a";
/* module identifier */

const __vue_module_identifier__ = "data-v-1cc6b09a";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
