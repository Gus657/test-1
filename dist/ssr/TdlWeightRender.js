'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./transitionEndEventName-137bd43f.js');
require('./deviceHelper-d251a554.js');
var MdTooltip = require('./MdTooltip.js');
var humanFormat = _interopDefault(require('human-format'));
var TdlWeightIcon = require('./TdlWeightIcon.js');

var tdlWeightRenderTheme = ".THEME_NAME .recommendation-weight__information-icon {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME .recommendation-weight__dot .md-icon {\n  color: TEXT-TITLE !important;\n}";

const TdlWeightRender = {
  name: 'tdl-weight-render',
  components: {
    MdIcon,
    MdTooltip,
    TdlWeightIcon
  },
  mixins: [mixin.theme],
  props: {
    value: {
      type: Number
    },
    personId: {
      type: String
    },
    trackRender: {
      type: Function
    },
    iconSize: {
      type: Number
    },
    iconPosition: {
      type: String,
      default: 'right'
    },
    iconDisplay: {
      type: Boolean,
      default: true
    },
    infoIconDisplay: {
      type: Boolean,
      default: false
    },
    plusIcon: {
      type: Boolean,
      default: false
    },
    dotDivider: {
      type: Boolean,
      default: false
    },
    dotDividerSize: {
      type: Number,
      default: 8
    },
    themeColor: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      mdiCircleIcon: js.mdiCircle,
      mdiWeightIcon: js.mdiWeight,
      mdiInformationIcon: js.mdiInformation
    };
  },

  computed: {
    readableWeight() {
      return this.getReadableWeight(this.value);
    },

    cssProps() {
      return {
        '--size': this.iconSize + 'px',
        '--dot-divider-size': this.dotDividerSize + 'px',
        '--theme-color': this.theme
      };
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlWeightRender",
      theme: tdlWeightRenderTheme
    });
  },

  mounted() {
    if (this.trackRender && this.personId) {
      this.trackRender(this.personId);
    }
  },

  methods: {
    getReadableWeight(weight) {
      let readableWeight;

      if (isNaN(weight)) {
        readableWeight = 0;
      } else if (weight < 1) {
        readableWeight = Number(Math.round(Number(weight * 100)) / 100);
      } else {
        let weightStr = weight.toString();
        const decimalPoint = weightStr.indexOf('.') === -1 ? weightStr.length : weightStr.indexOf('.');
        const integerPart = weightStr.slice(0, decimalPoint).length;
        const integerPartMod3 = integerPart % 3 === 1 ? 1 : 0;
        const charAdjust = integerPart <= 3 ? Math.abs(integerPart - 3) : integerPartMod3;
        readableWeight = humanFormat(weight, {
          decimals: charAdjust,
          separator: ''
        });
      }

      return `${readableWeight}`;
    },

    weightInfo() {
      this.$emit('weight-info-required');
    }

  }
};

/* script */
const __vue_script__ = TdlWeightRender;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "recommendation-weight",
    class: [_vm.themeClass],
    style: _vm.cssProps
  }, [_vm.dotDivider ? _vm._ssrNode("<span class=\"recommendation-weight__dot\" data-v-6a2c2abe>", "</span>", [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCircleIcon,
      "size": _vm.dotDividerSize + "px"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.iconPosition === 'left' && _vm.iconDisplay ? _vm._ssrNode("<span class=\"recommendation-weight__left-column\" data-v-6a2c2abe>", "</span>", [!_vm.plusIcon ? _c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiWeightIcon,
      "size": _vm.iconSize + "px"
    }
  }) : _c('tdl-weight-icon', {
    attrs: {
      "icon-size": _vm.iconSize
    }
  }), _vm._ssrNode(" "), _c('md-tooltip', {
    staticClass: "recommendation-weight__tooltip",
    attrs: {
      "md-direction": "bottom"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.')) + "\n    ")])], 2) : _vm._e(), _vm._ssrNode(" <span class=\"recommendation-weight__value\" data-v-6a2c2abe>" + _vm._ssrEscape(_vm._s(_vm.readableWeight)) + "</span> "), _vm._ssrNode("<span" + _vm._ssrClass("recommendation-weight__right-column", {
    'recommendation-weight__right-column--information-icon': _vm.infoIconDisplay
  }) + " data-v-6a2c2abe>", "</span>", [_vm.iconPosition === 'right' && _vm.iconDisplay ? _vm._ssrNode("<span class=\"recommendation-weight__icon-container\" data-v-6a2c2abe>", "</span>", [!_vm.plusIcon ? _c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiWeightIcon,
      "size": _vm.iconSize + "px"
    }
  }) : _c('tdl-weight-icon', {
    attrs: {
      "icon-size": _vm.iconSize
    }
  }), _vm._ssrNode(" "), !_vm.infoIconDisplay ? _c('md-tooltip', {
    staticClass: "recommendation-weight__tooltip",
    attrs: {
      "md-direction": "bottom"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.')) + "\n      ")]) : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" "), _vm.infoIconDisplay ? _vm._ssrNode("<a data-v-6a2c2abe>", "</a>", [_c('md-icon', {
    staticClass: "recommendation-weight__information-icon",
    attrs: {
      "icon-svg": _vm.mdiInformationIcon,
      "icon-color": _vm.themeColor
    }
  })], 1) : _vm._e()], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6a2c2abe_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-6a2c2abe]{background-image:none!important;top:0!important}.recommendation-weight[data-v-6a2c2abe]{display:inline-flex;align-items:center}.recommendation-weight__value[data-v-6a2c2abe]{display:flex;font-weight:600}.recommendation-weight .md-icon[data-v-6a2c2abe]{min-width:var(--size);width:var(--size);min-height:var(--size);height:var(--size);font-size:var(--size);vertical-align:baseline;margin-left:0;margin-right:0}.recommendation-weight__tooltip[data-v-6a2c2abe]{width:280px;height:auto!important;padding:8px;text-align:center;font-size:12px;white-space:normal}.recommendation-weight__left-column[data-v-6a2c2abe]{display:flex;align-items:flex-end;margin-right:3px}.recommendation-weight__right-column[data-v-6a2c2abe]{display:flex}.recommendation-weight__right-column--information-icon[data-v-6a2c2abe]{align-self:flex-start}.recommendation-weight__dot[data-v-6a2c2abe]{display:flex;align-items:center;margin:0 4px}.recommendation-weight__dot .md-icon[data-v-6a2c2abe]{min-width:var(--dot-divider-size);width:var(--dot-divider-size);min-height:var(--dot-divider-size);height:var(--dot-divider-size);font-size:var(--dot-divider-size)}.recommendation-weight__dot .md-icon svg[data-v-6a2c2abe]{fill:rgba(255,255,255,.65)}.recommendation-weight a[data-v-6a2c2abe]{position:relative;display:inline-flex;align-self:flex-start;margin-top:4px;cursor:pointer}.recommendation-weight a[data-v-6a2c2abe]:hover{text-decoration:none}.recommendation-weight a .md-icon.recommendation-weight__information-icon[data-v-6a2c2abe]{min-width:24px;width:24px;min-height:24px;height:24px;font-size:24px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6a2c2abe";
/* module identifier */

const __vue_module_identifier__ = "data-v-6a2c2abe";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
