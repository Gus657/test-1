import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import { g as getClosestVueParent } from './getClosestVueParent-5770502b.js';
import { a as applyPassive } from './events-e6d8e390.js';

var tdlScrollTabBarTheme = ".THEME_NAME .tdl-scroll-tab-bar-container .tdl-scroll-tab-bar .tdl-scroll-tab-bar-indicator {\n  background-color: ACCENT-SECONDARY !important;\n}";

const TdlScrollTabBar = {
  name: 'tdl-scroll-tab-bar',
  props: {
    scrollOffset: {
      required: false,
      type: Number,
      default: 0
    },
    externalCurrentTab: {
      required: false,
      type: String
    },
    routeValidation: {
      type: Boolean,
      default: false
    },
    scrollingRoutes: {
      type: Array,
      required: false
    },
    externalScrollRunning: {
      type: Boolean,
      default: false
    }
  },
  mixins: [theme],

  data() {
    return {
      indicatorStyles: {},
      indicatorClass: '',
      currentTab: undefined,
      scrollEnabled: false,
      lastScrollTop: 0,
      appBarOffset: 0,
      downScrollOffset: 0
    };
  },

  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlScrollTabBar",
      theme: tdlScrollTabBarTheme
    });
  },
  watch: {
    externalCurrentTab: {
      handler(newVal) {
        if (newVal !== this.currentTab) {
          this.currentTab = newVal;
          this.markActiveTab();
          this.setIndicatorStyles();
        }
      }

    }
  },

  mounted() {
    this.$nextTick(() => {
      this.parentBar = getClosestVueParent(this.$parent, 'tdl-app-bar');
      let defaultTab = this.$children[0] && this.$children[0].getTabId ? this.$children[0].getTabId() : 'top';
      let lastRouteItem = this.$route.path.split("/").pop();

      if (this.$route.query && this.$route.query.section) {
        defaultTab = this.$route.query.section;
      }

      if (this.routeValidation && this.scrollingRoutes.includes(lastRouteItem) && lastRouteItem !== defaultTab) {
        defaultTab = lastRouteItem;
      }

      if (this.externalCurrentTab) {
        defaultTab = this.externalCurrentTab;
      }

      this.$nextTick(() => {
        if (this.parentBar) {
          this.appBarOffset = this.parentBar.getHeightData().fullHeight + this.scrollOffset;
          this.downScrollOffset = this.parentBar.getHeightData().fullHeight + this.scrollOffset;

          if (this.parentBar.getHeightData().hasBars) {
            this.downScrollOffset = this.parentBar.getHeightData().barRowHeight * 2 + this.scrollOffset;
          }
        }

        if (defaultTab) {
          this.handleActivation(defaultTab, true);
        }
      });
    });
    this.$on('activated', this.handleActivation);
    window.addEventListener('scroll', this.handleScroll, applyPassive());
    window.addEventListener('resize', this.handleResize, applyPassive());
    this.enableScrollListener();
  },

  beforeDestroy() {
    this.$off('activated', this.handleActivation);
    window.removeEventListener('scroll', this.handleScroll, applyPassive());
    window.removeEventListener('resize', this.handleResize, applyPassive());
    this.disableScrollListener();
  },

  methods: {
    handleResize() {
      this.setIndicatorStyles();
    },

    handleActivation(targetId, isDefaultTab) {
      let offset = 0;
      let container = targetId;
      const element = document.querySelector(`#${targetId}`);

      if (!element || this.$children[0].getTabId() === targetId) {
        container = 'top';
      } else {
        const st = element.getBoundingClientRect().top + window.scrollY;
        const scrollingUp = st < this.lastScrollTop;

        if (scrollingUp) {
          offset = this.appBarOffset;
        } else {
          offset = this.downScrollOffset;
        }

        this.lastScrollTop = st <= 0 ? 0 : st;
      }

      this.currentTab = targetId;
      this.setIndicatorStyles();
      this.doScroll(container, offset);
      this.markActiveTab();
      this.$emit('tab-activated', this.currentTab, isDefaultTab);
    },

    markActiveTab() {
      this.$children.forEach(tab => {
        if (tab.targetId === this.currentTab) {
          tab.$el.querySelector('.md-button').classList.add('md-active');
        } else {
          tab.$el.querySelector('.md-button').classList.remove('md-active');
        }
      });
    },

    setIndicatorStyles() {
      const activeButton = this.$el.querySelector(`#tab-${this.currentTab}`);

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
    },

    doScroll(targetId, offset) {
      if (targetId) {
        this.disableScrollListener();
        this.$nextTick(() => {
          this.$scrollTo(`#${targetId}`, 500, {
            easing: 'ease-in-out',
            offset: -offset,
            onDone: () => {
              setTimeout(() => {
                this.enableScrollListener();
              }, 500);
            },
            onCancel: () => {
              setTimeout(() => {
                this.enableScrollListener();
              }, 500);
            }
          });
        });
      }
    },

    enableScrollListener() {
      this.scrollEnabled = true;
    },

    disableScrollListener() {
      this.scrollEnabled = false;
    },

    getIndicatorClass(indicatorLeft, buttonLeft) {
      if (indicatorLeft < buttonLeft) {
        return 'tds-tabs-indicator-right';
      }

      return 'tds-tabs-indicator-left';
    },

    handleScroll() {
      if (this.scrollEnabled && !this.externalScrollRunning) {
        cancelAnimationFrame(this.scrollFrame_);
        this.scrollFrame_ = requestAnimationFrame(() => {
          // calculates client rect before updating styles (should avoid too much recalculation by the browser)
          this.$children.filter(el => !!el.getTabId).map(el => {
            const tabContent = document.querySelector(`#${el.getTabId()}`);

            if (tabContent) {
              return {
                tabId: el.getTabId(),
                boundingClientRect: tabContent.getBoundingClientRect()
              };
            }

            return undefined;
          }).filter(rect => !!rect).forEach(({
            tabId,
            boundingClientRect
          }, index) => {
            if (boundingClientRect.top <= this.downScrollOffset && boundingClientRect.bottom >= this.downScrollOffset) {
              if (this.currentTab !== tabId) {
                this.currentTab = tabId;
                this.setIndicatorStyles();
                this.markActiveTab();
                const tabsContainer = document.querySelector('#tdlScrollTabContainer');
                const tabsWidth = tabsContainer.scrollWidth / this.$children.length;
                tabsContainer.scrollLeft = tabsWidth * index;
              }
            }
          });
        });
      }
    }

  }
};

/* script */
const __vue_script__ = TdlScrollTabBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-scroll-tab-bar-container",
    class: [_vm.themeClass],
    attrs: {
      "id": "tdlScrollTabContainer"
    }
  }, [_c('div', {
    staticClass: "tdl-scroll-tab-bar"
  }, [_vm._t("default"), _vm._v(" "), _c('span', {
    ref: "indicator",
    staticClass: "tdl-scroll-tab-bar-indicator",
    style: _vm.indicatorStyles
  })], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-5859366e_0", {
    source: ".tdl-scroll-tab-bar-container{position:relative;width:100%;height:100%;overflow:hidden;overflow-x:scroll}@media (min-width:960px){.tdl-scroll-tab-bar-container{margin-left:-8px}}.tdl-scroll-tab-bar-container .tdl-scroll-tab-bar{position:relative;display:flex;width:100%;margin:0 auto;height:100%}@media (max-width:960px){.tdl-scroll-tab-bar-container .tdl-scroll-tab-bar{left:-8px}}.tdl-scroll-tab-bar-container .tdl-scroll-tab-bar .tdl-scroll-tab-bar-indicator{position:absolute;left:0;bottom:0;height:2px;transform:translateZ(0);will-change:left,right}.tdl-scroll-tab-bar-container .tdl-scroll-tab-bar .tdl-scroll-tab-bar-indicator.tdl-tabs-indicator-left{transition:left .3s cubic-bezier(.4,0,.2,1),right .35s cubic-bezier(.4,0,.2,1)}.tdl-scroll-tab-bar-container .tdl-scroll-tab-bar .tdl-scroll-tab-bar-indicator.tdl-tabs-indicator-right{transition:right .3s cubic-bezier(.4,0,.2,1),left .35s cubic-bezier(.4,0,.2,1)}",
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
