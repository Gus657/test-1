import { applyPassive } from '../../core/utils/events';
import getClosestVueParent from '../../core/utils/getClosestVueParent';
import tdlScrollTabBarTheme from './tdlScrollTabBar-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

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
      downScrollOffset: 0,
    };
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlScrollTabBar", theme: tdlScrollTabBarTheme });
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
      
      if (this.routeValidation &&
        this.scrollingRoutes.includes(lastRouteItem) &&
        lastRouteItem !== defaultTab) {
          defaultTab = lastRouteItem;
      }

      if (this.externalCurrentTab)  {
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
      this.$children.forEach((tab) => {
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
          this.$children
            .filter((el) => !!el.getTabId)
            .map((el) => {
              const tabContent = document.querySelector(`#${el.getTabId()}`);

              if (tabContent) {
                return {
                  tabId: el.getTabId(),
                  boundingClientRect: tabContent.getBoundingClientRect()
                };
              }

              return undefined;

            })
            .filter((rect) => !!rect)
            .forEach(({tabId, boundingClientRect}, index) => {
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

export default TdlScrollTabBar;
