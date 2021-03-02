'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

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
const TdlBrandLogo = {
  name: 'tdl-brand-logo',
  props: {
    theme: {
      type: String,
      required: false,
      default: 'dark'
    }
  },
  computed: {
    cssVariables() {
      return {
        '--theme': this.theme
      };
    }

  }
};

/* script */
const __vue_script__ = TdlBrandLogo;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-brand-logo",
    style: _vm.cssVariables
  }, [_vm._ssrNode("<svg viewBox=\"0 0 113 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"logo-svg\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\"><path d=\"M10.9635,32.423 C13.1255,32.423 14.6765,31.953 16.0865,31.154 L16.0865,26.501 C14.9585,27.065 13.8305,27.347 12.5615,27.347 C10.6345,27.347 9.5065,26.454 9.5065,24.245 L9.5065,12.072 L16.1805,12.072 L16.1805,7.184 L9.5065,7.184 L9.5065,0.369 L3.8195,0.369 L3.8195,7.184 L0.6705,7.184 L0.6705,12.072 L3.8195,12.072 L3.8195,25.138 C3.8195,30.59 6.7805,32.423 10.9635,32.423 Z M33.0535,32.564 C40.6050571,32.564 46.1929447,26.8556582 46.3510575,19.9404098 L46.3545,19.545 C46.3545,12.448 40.7615,6.667 33.1475,6.667 C25.6422714,6.667 20.0550457,12.3753418 19.8969424,19.3356046 L19.8935,19.733 C19.8935,26.783 25.4865,32.564 33.0535,32.564 Z M33.1475,27.582 C28.8144615,27.582 25.7020847,24.1008539 25.5839803,19.8876586 L25.5805,19.545 C25.5805,15.221 28.4945,11.649 33.0535,11.649 C37.4326346,11.649 40.5458979,15.1301461 40.6640193,19.3876816 L40.6675,19.733 C40.6675,24.01 37.7535,27.582 33.1475,27.582 Z M52.0885,32 L57.8225,32 L57.8225,22.553 C57.8225,15.973 61.3005,12.73 66.2825,12.73 L66.6115,12.73 L66.6115,6.714 C62.2405,6.526 59.3735,9.064 57.8225,12.777 L57.8225,7.184 L52.0885,7.184 L52.0885,32 Z M71.4995,32 L77.2335,32 L77.2335,22.553 C77.2335,15.973 80.7115,12.73 85.6935,12.73 L86.0225,12.73 L86.0225,6.714 C81.6515,6.526 78.7845,9.064 77.2335,12.777 L77.2335,7.184 L71.4995,7.184 L71.4995,32 Z M101.4855,32.564 C106.0445,32.564 109.2875,30.731 111.6375,27.911 L108.3005,24.95 C106.3265,26.877 104.3525,27.911 101.5795,27.911 C97.9135,27.911 95.0465,25.655 94.4355,21.613 L112.6715,21.613 C112.7185,21.049 112.7655,20.532 112.7655,20.015 C112.7655,12.871 108.7705,6.667 100.8745,6.667 C93.8818676,6.667 88.896859,12.3248486 88.7517533,19.2797349 L88.7485,19.686 C88.7485,27.347 94.2945,32.564 101.4855,32.564 Z M94.3885,17.853 C94.9055,13.999 97.3495,11.32 100.8275,11.32 C104.5875,11.32 106.7495,14.187 107.1255,17.853 L94.3885,17.853 Z\"></path></g></svg>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4abcf0e0_0", {
    source: ".tdl-brand-logo .logo-svg{width:60px;fill:#f3f3f3}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-4abcf0e0";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
