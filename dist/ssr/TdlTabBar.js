'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');

var tdlTabBarTheme = ".THEME_NAME .tdl-tab-bar-container .tdl-tab-bar .tdl-tab-bar-indicator {\n  background-color: ACCENT-SECONDARY !important;\n}";

const TdlTabBar = {
  name: 'tdl-tab-bar',

  data() {
    return {
      indicatorStyles: {},
      indicatorStylesTimeout: undefined,
      indicatorClass: ''
    };
  },

  mixins: [mixin.theme],
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlTabBar",
      theme: tdlTabBarTheme
    });
  },

  mounted() {
    this.$on('tds-tab--activated', this.setIndicatorStyles);
    window.addEventListener('resize', this.setIndicatorStyles);
  },

  updated() {
    this.setIndicatorStyles();
  },

  beforeDestroy() {
    this.$off('tds-tab--activated', this.setIndicatorStyles);
    window.removeEventListener('resize', this.setIndicatorStyles);

    if (this.indicatorStylesTimeout) {
      clearTimeout(this.indicatorStylesTimeout);
    }
  },

  methods: {
    setIndicatorStyles() {
      if (this.indicatorStylesTimeout) {
        clearTimeout(this.indicatorStylesTimeout);
      }

      this.indicatorStylesTimeout = setTimeout(() => {
        const activeButton = this.$el.querySelector('.md-button.md-active');

        if (activeButton && this.$refs.indicator) {
          const buttonWidth = activeButton.offsetWidth;
          const buttonLeft = activeButton.offsetLeft;
          const indicatorElement = this.$refs.indicator;
          const indicatorLeft = indicatorElement.offsetLeft;
          this.indicatorClass = this.getIndicatorClass(indicatorLeft, buttonLeft);
          this.indicatorStyles = {
            left: `${buttonLeft}px`,
            right: `calc(100% - ${buttonWidth + buttonLeft}px)`
          };
        }
      }, 200);
    },

    getIndicatorClass(indicatorLeft, buttonLeft) {
      if (indicatorLeft < buttonLeft) {
        return 'tds-tabs-indicator-right';
      }

      return 'tds-tabs-indicator-left';
    }

  }
};

/* script */
const __vue_script__ = TdlTabBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-tab-bar-container",
    class: [_vm.themeClass]
  }, [_vm._ssrNode("<div class=\"tdl-tab-bar\">", "</div>", [_vm._t("default"), _vm._ssrNode(" <span class=\"tdl-tab-bar-indicator\"" + _vm._ssrStyle(null, _vm.indicatorStyles, null) + "></span>")], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-46b07310_0", {
    source: ".tdl-tab-bar-container{position:relative;width:100%;height:100%;overflow-x:auto}@media (min-width:960px){.tdl-tab-bar-container{margin-left:-8px}}.tdl-tab-bar-container .tdl-tab-bar{position:relative;display:flex;width:100%;max-width:700px;margin:0 auto;height:100%}@media (max-width:960px){.tdl-tab-bar-container .tdl-tab-bar{left:-8px}}.tdl-tab-bar-container .tdl-tab-bar .tdl-tab-bar-indicator{position:absolute;left:0;bottom:0;height:2px;transform:translateZ(0);will-change:left,right}.tdl-tab-bar-container .tdl-tab-bar .tdl-tab-bar-indicator.tdl-tabs-indicator-left{transition:left .3s cubic-bezier(.4,0,.2,1),right .35s cubic-bezier(.4,0,.2,1)}.tdl-tab-bar-container .tdl-tab-bar .tdl-tab-bar-indicator.tdl-tabs-indicator-right{transition:right .3s cubic-bezier(.4,0,.2,1),left .35s cubic-bezier(.4,0,.2,1)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-46b07310";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
