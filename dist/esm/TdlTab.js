import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import isEqual from 'lodash-es/isEqual';

var tdlTabTheme = ".THEME_NAME .tdl-tab .md-button.md-primary {\n  color: TEXT-DEFAULT !important;\n}\n.THEME_NAME .tdl-tab .md-button.md-primary.md-active {\n  color: ACCENT-SECONDARY !important;\n}";

const TdlTab = {
  name: 'tdl-tab',
  components: {
    MdButton
  },
  props: {
    routeName: {
      required: true,
      type: String
    },
    routeParams: {
      required: false,
      type: Object,
      default: () => ({})
    },
    routeQuery: {
      required: false,
      type: Object,
      default: () => ({})
    },
    routeHash: {
      required: false,
      type: String
    },
    forceActive: {
      type: Boolean,
      default: false
    }
  },
  mixins: [theme],
  computed: {
    href() {
      const route = this.$router.resolve({
        name: this.routeName,
        params: this.routeParams
      });
      return route.href;
    },

    isActive() {
      return this.forceActive || isEqual(this.$route.name, this.routeName) && isEqual(this.$route.params, this.routeParams) && isEqual(this.$route.query, this.routeQuery);
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlTab",
      theme: tdlTabTheme
    });
  },

  mounted() {
    if (this.isActive) {
      // nextTick to allow parent to completely render before setting the indicator
      this.$nextTick(() => {
        this.$parent.$emit('tds-tab--activated');
      });
    }
  },

  methods: {
    tabClicked(evt) {
      if (!evt.ctrlKey && !evt.metaKey) {
        evt.preventDefault();
        this.$router.push({
          name: this.routeName,
          params: this.routeParams,
          query: this.routeQuery !== undefined ? this.routeQuery : this.$route.query,
          hash: this.routeHash !== undefined ? this.routeHash : this.$route.hash
        });
      }
    }

  },
  watch: {
    isActive(newValue) {
      if (newValue) {
        this.$parent.$emit('tds-tab--activated');
        this.$emit('tab-active');
      }
    }

  }
};

/* script */
const __vue_script__ = TdlTab;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-tab",
    class: [_vm.themeClass]
  }, [_c('md-button', {
    staticClass: "md-primary tdl-tab-button",
    class: {
      'md-active': _vm.isActive
    },
    attrs: {
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
  inject("data-v-78dad1e6_0", {
    source: ".tdl-tab{display:inline;flex-wrap:nowrap;flex:1;display:flex;justify-content:center;padding-left:8px;padding-right:8px}.tdl-tab .md-button{display:flex;flex-direction:column;justify-content:center;width:100%;min-width:110px;margin:0;padding:0;margin-right:0;white-space:normal;line-height:20px}.tdl-tab .md-button.md-primary.tdl-tab-button{margin-right:0!important}",
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
