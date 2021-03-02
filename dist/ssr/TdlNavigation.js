'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

const TdlNavigation = {
  name: 'tdl-navigation',
  props: {
    activeIndex: {
      type: Number,
      required: false,
      default: function () {
        return -1;
      }
    },
    navigationItems: {
      type: Array,
      required: false,
      default: function () {
        return [];
      }
    },
    allowSideNavigation: {
      type: Boolean,
      required: false,
      default: function () {
        return false;
      }
    }
  },
  created: function () {
    if (this.allowSideNavigation) {
      this.$root.$emit('tdl-bottom-navigation--added');
    }
  },
  methods: {
    handleClickItem: function (option, index) {
      if (typeof option.click === 'function') {
        option.click(option);
      }

      this.$emit('item-selected', index);
    }
  }
};

/* script */
const __vue_script__ = TdlNavigation;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "navigation-bar-container",
    class: {
      'allow-side': _vm.allowSideNavigation
    }
  }, [_c('md-layout', {
    staticClass: "bottom-nav-bar",
    attrs: {
      "md-flex": "",
      "md-row": ""
    }
  }, [_c('md-bottom-bar', [_vm._t("default", _vm._l(_vm.navigationItems, function (item, index) {
    return _c('md-bottom-bar-item', {
      key: index,
      attrs: {
        "md-icon": item.icon ? item.icon : undefined,
        "md-iconset": item.iconset ? item.iconset : undefined,
        "md-active": index === _vm.activeIndex
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.handleClickItem(item, index);
        }
      }
    }, [_vm._v(_vm._s(item.title))]);
  }))], 2)], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-1e572188_0", {
    source: ".navigation-bar-container.allow-side .bottom-nav-bar{flex:0 0 auto;position:relative}@media (min-width:960px){.navigation-bar-container.allow-side .bottom-nav-bar .md-bottom-bar.md-fixed{position:fixed;top:0;box-shadow:none;flex-direction:column;width:90px;padding-top:64px;min-width:auto;height:100%;justify-content:center}.navigation-bar-container.allow-side .bottom-nav-bar .md-bottom-bar.md-fixed .md-bottom-bar-item{padding:8px;max-height:64px;margin-top:10px}.navigation-bar-container.allow-side .bottom-nav-bar .md-bottom-bar.md-fixed .md-bottom-bar-item .md-text{transform:scale(.9) translateY(2px)}.navigation-bar-container.allow-side .bottom-nav-bar .md-bottom-bar.md-fixed .md-bottom-bar-item.md-active{transform:scale(1)}.navigation-bar-container.allow-side .bottom-nav-bar .md-bottom-bar.md-fixed .md-bottom-bar-item.md-active .md-text{transform:scale(.9) translateY(2px)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-1e572188";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
