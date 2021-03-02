'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdInkRipple = require('./MdInkRipple.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./transitionEndEventName-137bd43f.js');
require('./deviceHelper-d251a554.js');
var MdTooltip = require('./MdTooltip.js');
var throttle = require('./throttle-050ff218.js');
var MdWhiteframe = require('./MdWhiteframe.js');

var MdTabsTheme = ".THEME_NAME.md-tabs > .md-tabs-navigation {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-indicator {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header-navigation-button {\n  color: TEXT-ACCENT_DEFAULT;\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation {\n  background-color: transparent;\n  border-bottom: 1px solid BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header:focus {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header.md-disabled {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-indicator {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-indicator {\n  background-color: BACKGROUND-ELEVATION_0;\n}\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-indicator {\n  background-color: BACKGROUND-ELEVATION_0;\n}";

//
const MdTabs = {
  name: 'md-tabs',
  components: {
    MdIcon,
    MdInkRipple,
    MdTooltip,
    MdWhiteframe
  },
  props: {
    mdFixed: Boolean,
    mdCentered: Boolean,
    mdRight: Boolean,
    mdNavigation: {
      type: Boolean,
      default: true
    },
    mdDynamicHeight: {
      type: Boolean,
      default: true
    },
    mdElevation: {
      type: [String, Number],
      default: 0
    }
  },
  mixins: [mixin.theme],
  data: () => ({
    tabList: {},
    activeTab: null,
    activeTabNumber: 0,
    hasIcons: false,
    hasLabel: false,
    hasNavigationScroll: false,
    isNavigationOnStart: true,
    isNavigationOnEnd: false,
    transitionControl: null,
    transitionOff: false,
    contentHeight: '0px',
    contentWidth: '0px',
    mdiChevronLeftIcon: js.mdiChevronLeft,
    mdiChevronRightIcon: js.mdiChevronRight
  }),
  computed: {
    tabClasses() {
      return {
        'md-dynamic-height': this.mdDynamicHeight,
        'md-transition-off': this.transitionOff
      };
    },

    navigationClasses() {
      return {
        'md-has-icon': this.hasIcons,
        'md-has-label': this.hasLabel,
        'md-fixed': this.mdFixed,
        'md-right': !this.mdCentered && this.mdRight,
        'md-centered': this.mdCentered || this.mdFixed,
        'md-has-navigation-scroll': this.hasNavigationScroll
      };
    },

    indicatorClasses() {
      let toLeft = this.lastIndicatorNumber > this.activeTabNumber;
      this.lastIndicatorNumber = this.activeTabNumber;
      return {
        'md-transition-off': this.transitionOff,
        'md-to-right': !toLeft,
        'md-to-left': toLeft
      };
    },

    navigationLeftButtonClasses() {
      return {
        'md-disabled': this.isNavigationOnStart
      };
    },

    navigationRightButtonClasses() {
      return {
        'md-disabled': this.isNavigationOnEnd
      };
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "mdTabs",
      theme: MdTabsTheme
    });
  },
  methods: {
    getHeaderClass(header) {
      return {
        'md-active': this.activeTab === header.id,
        'md-disabled': header.disabled
      };
    },

    registerTab(tabData) {
      let hasActive = false;

      for (let tab of Object.keys(this.tabList)) {
        if (this.tabList[tab].active) {
          hasActive = true;
          break;
        }
      }

      this.$set(this.tabList, tabData.id, tabData);

      if (!hasActive && !tabData.disabled) {
        this.tabList[tabData.id].active = true;
      }
    },

    unregisterTab(tabData) {
      this.$delete(this.tabList, tabData.id);
    },

    updateTab(tabData) {
      this.registerTab(tabData);

      if (tabData.active) {
        if (!tabData.disabled) {
          this.setActiveTab(tabData);
        } else if (Object.keys(this.tabList).length) {
          let tabsIds = Object.keys(this.tabList);
          let targetIndex = tabsIds.indexOf(tabData.id) + 1;
          let target = tabsIds[targetIndex];

          if (target) {
            this.setActiveTab(this.tabList[target]);
          } else {
            this.setActiveTab(this.tabList[0]);
          }
        }
      }
    },

    observeElementChanges() {
      this.parentObserver = new MutationObserver(throttle.throttle(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.tabContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },

    getTabIndex(id) {
      const idList = Object.keys(this.tabList);
      return idList.indexOf(id);
    },

    calculateIndicatorPos() {
      if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
        const tabsWidth = this.$el.offsetWidth;
        const activeTab = this.$refs.tabHeader[this.activeTabNumber];
        const left = activeTab.offsetLeft - this.$refs.tabsContainer.scrollLeft;
        const right = tabsWidth - left - activeTab.offsetWidth;
        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      }
    },

    calculateTabsWidthAndPosition() {
      const width = this.$el.offsetWidth;
      let index = 0;
      this.contentWidth = width * this.activeTabNumber + 'px';

      for (const tabId in this.tabList) {
        const tab = this.tabList[tabId];
        tab.ref.width = width + 'px';
        tab.ref.left = width * index + 'px';
        index++;
      }
    },

    calculateContentHeight() {
      this.$nextTick(() => {
        if (Object.keys(this.tabList).length) {
          let height = this.tabList[this.activeTab].ref.$el.offsetHeight;
          this.contentHeight = height + 'px';
        }
      });
    },

    calculatePosition() {
      window.requestAnimationFrame(() => {
        if (this._destroyed) {
          return;
        }

        this.calculateIndicatorPos();
        this.calculateTabsWidthAndPosition();
        this.calculateContentHeight();
        this.checkNavigationScroll();
      });
    },

    debounceTransition() {
      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout(() => {
        this.calculatePosition();
        this.transitionOff = false;
      }, 200);
    },

    calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },

    calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    },

    calculateScrollPos() {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = this.$refs.tabsContainer;
      this.isNavigationOnStart = scrollLeft < 32;
      this.isNavigationOnEnd = scrollWidth - scrollLeft - 32 < clientWidth;
    },

    handleNavigationScroll() {
      window.requestAnimationFrame(() => {
        if (this._destroyed) {
          return;
        }

        this.calculateIndicatorPos();
        this.calculateScrollPos();
      });
    },

    checkNavigationScroll() {
      const {
        scrollWidth,
        clientWidth
      } = this.$refs.tabsContainer;
      this.hasNavigationScroll = scrollWidth > clientWidth;
    },

    setActiveTab(tabData) {
      this.hasIcons = !!tabData.icon || !!tabData.iconset || !!tabData.iconSrc;
      this.hasLabel = !!tabData.label;
      this.activeTab = tabData.id;
      this.activeTabNumber = this.getTabIndex(this.activeTab);
      this.calculatePosition();
      this.$emit('change', this.activeTabNumber);
    },

    navigationScrollLeft() {
      const {
        scrollLeft,
        clientWidth
      } = this.$refs.tabsContainer;
      this.$refs.tabsContainer.scrollLeft = Math.max(0, scrollLeft - clientWidth);
    },

    navigationScrollRight() {
      const {
        scrollLeft,
        clientWidth,
        scrollWidth
      } = this.$refs.tabsContainer;
      this.$refs.tabsContainer.scrollLeft = Math.min(scrollWidth, scrollLeft + clientWidth);
    }

  },

  activated() {
    this.calculateOnResize();
  },

  mounted() {
    this.$nextTick(() => {
      this.observeElementChanges();
      window.addEventListener('resize', this.calculateOnResize);

      if (Object.keys(this.tabList).length && !this.activeTab) {
        let firstTab = Object.keys(this.tabList)[0];
        this.setActiveTab(this.tabList[firstTab]);
      }
    });
  },

  beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);
    this._destroyed = true;
  }

};

/* script */
const __vue_script__ = MdTabs;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-tabs",
    class: [_vm.themeClass, _vm.tabClasses]
  }, [_c('md-whiteframe', {
    ref: "tabNavigation",
    staticClass: "md-tabs-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('div', {
    ref: "tabsContainer",
    staticClass: "md-tabs-navigation-container",
    on: {
      "scroll": _vm.handleNavigationScroll
    }
  }, [_c('div', {
    staticClass: "md-tabs-navigation-scroll-container"
  }, [_vm._l(_vm.tabList, function (header) {
    return _c('button', {
      key: header.id,
      ref: "tabHeader",
      refInFor: true,
      staticClass: "md-tab-header",
      class: _vm.getHeaderClass(header),
      attrs: {
        "type": "button",
        "disabled": header.disabled
      },
      on: {
        "click": function ($event) {
          return _vm.setActiveTab(header);
        }
      }
    }, [_c('md-ink-ripple', {
      attrs: {
        "md-disabled": header.disabled
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "md-tab-header-container"
    }, [_vm._t("header-item", [header.icon ? _c('md-icon', {
      attrs: {
        "icon-svg": header.icon
      }
    }) : header.iconset ? _c('md-icon', {
      attrs: {
        "icon-svg": header.iconset
      }
    }) : header.iconSrc ? _c('md-icon', {
      attrs: {
        "md-src": header.iconSrc
      }
    }) : _vm._e(), _vm._v(" "), header.label ? _c('span', [_vm._v(_vm._s(header.label))]) : _vm._e()], {
      "header": header
    })], 2), _vm._v(" "), header.tooltip ? _c('md-tooltip', {
      attrs: {
        "md-direction": header.tooltipDirection,
        "md-delay": header.tooltipDelay
      }
    }, [_vm._v(_vm._s(header.tooltip))]) : _vm._e()], 1);
  }), _vm._v(" "), _c('span', {
    ref: "indicator",
    staticClass: "md-tab-indicator",
    class: _vm.indicatorClasses
  })], 2)]), _vm._v(" "), _vm.mdNavigation && _vm.hasNavigationScroll ? _c('button', {
    staticClass: "md-tab-header-navigation-button md-left",
    class: _vm.navigationLeftButtonClasses,
    on: {
      "click": _vm.navigationScrollLeft
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiChevronLeftIcon
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.mdNavigation && _vm.hasNavigationScroll ? _c('button', {
    staticClass: "md-tab-header-navigation-button md-right",
    class: _vm.navigationRightButtonClasses,
    on: {
      "click": _vm.navigationScrollRight
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiChevronRightIcon
    }
  })], 1) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md-tabs-content\"" + _vm._ssrStyle(null, {
    height: _vm.contentHeight
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"md-tabs-wrapper\"" + _vm._ssrStyle(null, {
    transform: "translate3D(-" + _vm.contentWidth + ", 0, 0)"
  }, null) + ">", "</div>", [_vm._t("default")], 2)])], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-ef94750a_0", {
    source: ".md-tabs{width:100%;display:flex;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1);overflow:hidden}.md-tabs .md-tabs-navigation.md-has-navigation-scroll .md-tab-header-navigation-button.md-left{order:1}.md-tabs .md-tabs-navigation.md-has-navigation-scroll .md-tabs-navigation-container{order:2}.md-tabs .md-tabs-navigation.md-has-navigation-scroll .md-tab-header-navigation-button.md-right{order:3}@media (min-width:601px){.md-tabs .md-tabs-navigation.md-has-navigation-scroll .md-tabs-navigation-container{margin-bottom:-15px}}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tabs-navigation-container,.md-tabs .md-tabs-navigation.md-fixed .md-tabs-navigation-scroll-container{flex:1}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{flex:1;max-width:none}.md-tabs .md-tabs-navigation.md-right{justify-content:flex-end}.md-tabs .md-tabs-navigation-container{display:flex;overflow-x:auto}.md-tabs .md-tabs-navigation-scroll-container{display:flex}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;position:relative;cursor:pointer;border:0;background:0 0;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase;flex-shrink:0}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:flex;flex-flow:column;justify-content:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-header-navigation-button{border:none;height:100%;cursor:pointer;position:relative}.md-tabs .md-tab-header-navigation-button.md-left{left:0}.md-tabs .md-tab-header-navigation-button.md-right{right:0}.md-tabs .md-tab-header-navigation-button.md-disabled{pointer-events:none;opacity:.4}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{position:absolute;top:0;right:0;bottom:0;left:0;transform:translate3d(0,0,0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-ef94750a";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
