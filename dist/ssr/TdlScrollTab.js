'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');

var tdlScrollTabTheme = ".THEME_NAME .tdl-scroll-tab .md-button.md-primary.md-active {\n  color: ACCENT-SECONDARY !important;\n}\n.THEME_NAME .tdl-scroll-tab .md-button.md-primary {\n  color: TEXT-DEFAULT !important;\n}";

const TdlScrollTab = {
  name: 'tdl-scroll-tab',
  components: {
    MdButton
  },
  props: {
    targetId: {
      required: true,
      type: String
    }
  },
  mixins: [mixin.theme],
  computed: {
    href() {
      const route = this.$router.resolve({
        name: this.$route.name,
        params: this.$route.params,
        query: {
          section: this.targetId
        }
      });
      return route.href;
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlNavDrawer",
      theme: tdlScrollTabTheme
    });
  },
  methods: {
    tabClicked(evt) {
      if (!evt.ctrlKey && !evt.metaKey) {
        evt.preventDefault();
        this.$parent.$emit('activated', this.targetId);
      }
    },

    getTabId() {
      return this.targetId;
    }

  }
};

/* script */
const __vue_script__ = TdlScrollTab;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-scroll-tab",
    class: [_vm.themeClass]
  }, [_c('md-button', {
    staticClass: "md-primary tdl-tab-button",
    attrs: {
      "id": "tab-" + _vm.targetId,
      "href": _vm.href
    },
    on: {
      "click": function ($event) {
        return _vm.tabClicked($event);
      }
    }
  }, [_vm._t("default")], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-cb5148b8_0", {
    source: ".tdl-scroll-tab{display:inline;flex-wrap:nowrap;flex:1;display:flex;justify-content:center;padding-left:8px;padding-right:8px}.tdl-scroll-tab .md-button{display:flex;flex-direction:column;justify-content:center;width:100%;min-width:110px;margin:0;padding:0;margin-right:0;white-space:normal}.tdl-scroll-tab .md-button.md-primary.tdl-tab-button{margin-right:0!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-cb5148b8";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
