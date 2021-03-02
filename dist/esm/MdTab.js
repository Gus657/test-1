import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { u as uniqueId } from './uniqueId-5b272221.js';
import { g as getClosestVueParent } from './getClosestVueParent-5770502b.js';

//
const MdTab = {
  name: 'md-tab',
  props: {
    id: [String, Number],
    mdLabel: [String, Number],
    mdIcon: String,
    mdIconset: String,
    mdIconSrc: String,
    mdActive: Boolean,
    mdDisabled: Boolean,
    mdOptions: {
      default: undefined
    },
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },

  data() {
    return {
      mounted: false,
      tabId: this.id || 'tab-' + uniqueId(),
      width: '0px',
      left: '0px'
    };
  },

  watch: {
    mdActive() {
      this.updateTabData();
    },

    mdDisabled() {
      this.updateTabData();
    },

    mdIcon() {
      this.updateTabData();
    },

    mdIconset() {
      this.updateTabData();
    },

    mdIconSrc() {
      this.updateTabData();
    },

    mdOptions: {
      deep: true,

      handler() {
        this.updateTabData();
      }

    },

    mdLabel() {
      this.updateTabData();
    },

    mdTooltip() {
      this.updateTabData();
    },

    mdTooltipDelay() {
      this.updateTabData();
    },

    mdTooltipDirection() {
      this.updateTabData();
    }

  },
  computed: {
    styles() {
      return {
        width: this.width,
        left: this.left
      };
    }

  },
  methods: {
    getTabData() {
      return {
        id: this.tabId,
        label: this.mdLabel,
        icon: this.mdIcon,
        iconset: this.mdIconset,
        iconSrc: this.mdIconSrc,
        options: this.mdOptions,
        active: this.mdActive,
        disabled: this.mdDisabled,
        tooltip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },

    updateTabData() {
      this.parentTabs.updateTab(this.getTabData());
    }

  },

  mounted() {
    let tabData = this.getTabData();
    this.parentTabs = getClosestVueParent(this.$parent, 'md-tabs');
    this.$nextTick(() => {
      if (!this.parentTabs) {
        throw new Error('You must wrap the md-tab in a md-tabs');
      }

      this.mounted = true;
      this.parentTabs.updateTab(tabData);

      if (this.mdActive) {
        this.parentTabs.setActiveTab(tabData);
      }
    });
  },

  beforeDestroy() {
    this.parentTabs.unregisterTab(this.getTabData());
  }

};

/* script */
const __vue_script__ = MdTab;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-tab",
    style: _vm.styles,
    attrs: {
      "id": _vm.tabId
    }
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
