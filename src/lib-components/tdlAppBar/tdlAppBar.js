/**
 * This component takes ideas and portions of code from: https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar
 */
import { applyPassive } from '../../core/utils/events';
import { getTools } from './tools';
import { mdiMenu } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiApps } from "@mdi/js";

import MdWhiteframe from '@/lib-components/mdWhiteframe/mdWhiteframe.vue';
import MdToolbar from '@/lib-components/mdToolbar/mdToolbar.vue';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdMenu from '@/lib-components/mdMenu/mdMenu.vue';
import MdMenuContent from '@/lib-components/mdMenu/mdMenuContent.vue';
import MdMenuItem from '@/lib-components/mdMenu/mdMenuItem.vue';
import TdlNavDrawer from '@/lib-components/tdlDrawer/tdlNavDrawer.vue';
import TdlBrandLogo from '@/lib-components/tdlBrandLogo/tdlBrandLogo.vue';
import TdlEntityPicture from '@/lib-components/tdlEntityPicture/tdlEntityPicture.vue';
import { default as TdlAppBarLocale } from "./tdlAppBar_i18n";

import tdlAppBarTheme from './tdlAppBar-theme.scss';

const TdlAppBar = {
  name: 'tdl-app-bar',
  components: {
    MdWhiteframe,
    MdToolbar,
    MdButton,
    MdIcon,
    TdlBrandLogo,
    MdMenu,
    MdMenuContent,
    MdMenuItem,
    TdlEntityPicture,
    TdlNavDrawer
  },
  props: {
    user: {
      type: Object,
      required: false
    },
    theme: {
      type: String,
      required: false
    },
    pageTitle: {
      type: String,
      required: false
    },
    onMounted: {
      type: Function,
      required: false,
      default: () => {}
    },
    onDestroyed: {
      type: Function,
      required: false,
      default: () => {}
    },
    hideBottomBar: {
      type: Boolean,
      default: false
    },
    hideCandidateBar: {
      type: Boolean,
      default: false
    },
    tdlCandidateBarOptions: {
      type: Object,
      required: false
    },
    toolsBadges: {
      type: Array,
      required: false
    },
    urls: {
      type: Object,
      required: true
    },
    defaultLocale: {
      type: String,
      required: true
    },
    showExtraBar: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      navigationBar: false,
      mdiMenuIcon: mdiMenu,
      mdiSearchIcon: mdiMagnify,
      mdiAppsIcon: mdiApps
    };
  },
  computed: {
    defaultTheme: function() {
      return "bio";
    },
    classObject: function() {
      return [{
        'tdl-toolbar': true,
        'tdl-title-fixed': !this.hasTitleBar && !this.hasExtraBar,
        'tdl-has-navigation-bar': this.navigationBar
      }];
    },
    hasTitleBar: function() {
      return this.$slots.default !== undefined;
    },
    hasExtraBar: function() {
      return this.$slots.extra !== undefined || this.showExtraBar;
    },
    tools: function() {
      return getTools(this.urls, this.$i18n);
    },
    mobileTools: function() {
      return getTools(this.urls, this.$i18n, true);
    },
    moreTools: function() {
      return this.tools.filter((t1) => !this.mobileTools.some((t2) => t1.id === t2.id) && t1.id !== 'search');
    },
    searchTool: function() {
      return this.tools.find((tool) => tool.id === 'search');
    },
    bioUrl: function() {
      return this.user && `${this.urls.BIO_BASE_URL}/_a/your-bio`;
    },
    cssVariables() {
      return {
        '--theme': this.theme
      };
    }
  },
  watch: {
    pageTitle: 'updateTitle'
  },
  methods: {
    getHeightData: function() {
      return {
        fullHeight: this.cached_.rootOffset,
        hasBars: this.hasTitleBar && this.hasExtraBar,
        barRowHeight: this.$refs.brandBar.offsetHeight
      };
    },
    handleBrandLogoClick: function() {
      this.$root.$emit('tdl-app-bar--brand-logo-click');
    },
    handleMenuClick: function() {
      this.$root.$emit('tdl-app-bar--menu-click');
    },
    navigationBarHandler: function() {
      this.navigationBar = true;
    },
    handleScroll: function() {
      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(() => {
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // handles overscrolling effects (iOS Safari)
        currentScrollPosition = Math.max(
          Math.min(currentScrollPosition, document.documentElement.scrollHeight - window.innerHeight),
          0
        );

        // brand bar height minus the part of the brand bar already shown (if that's the case)
        const scrollThreshold = this.cached_.brandBarHeight - (this.cached_.brandBarHeight - this.toolbarOffset_);

        if (currentScrollPosition > scrollThreshold) {
          const totalScrolled = this.lastScrollPosition_ - currentScrollPosition;

          // moving upwards
          if (totalScrolled > 0) {
            // toolbar is not completely shown (reduce offset to show)
            if (this.toolbarOffset_ > 0) {
              this.toolbarOffset_ = Math.max(0, this.toolbarOffset_ - totalScrolled);
            }
          }

          // moving downwards
          if (totalScrolled < 0) {
            // toolbar is shown (increase offset to hide)
            if (this.toolbarOffset_ < this.cached_.brandBarHeight) {
              this.toolbarOffset_ = Math.min(this.cached_.brandBarHeight, this.toolbarOffset_ - totalScrolled);
            }
          }

          this.elems_.toolbar.style.setProperty('transform', `translateY(-${this.toolbarOffset_}px)`);
          this.elems_.root.style.setProperty('padding-top', `${this.cached_.rootOffset}px`);

          this.elems_.toolbar.classList.add('tdl-title-fixed');
          const height = this.elems_.toolbar.getBoundingClientRect().height + this.elems_.toolbar.getBoundingClientRect().top;

          this.$emit('changed', {fixed: true, height: height < this.cached_.titleBarheight ? this.cached_.titleBarheight : height});
        } else {
          this.toolbarOffset_ = this.cached_.brandBarHeight;

          this.elems_.toolbar.style.removeProperty('transform');
          this.elems_.root.style.removeProperty('padding-top');

          this.elems_.toolbar.classList.remove('tdl-title-fixed');
          const height = this.elems_.toolbar.getBoundingClientRect().height + this.elems_.toolbar.getBoundingClientRect().top;

          this.$emit('changed', {fixed: false, height: height < this.cached_.titleBarheight ? this.cached_.titleBarheight : height});
        }
        this.lastScrollPosition_ = currentScrollPosition;
      });
    },
    handleResize: function() {
      this.calculate();
      this.handleScroll();
    },
    calculate: function() {
      this.cached_ = {};
      this.cached_.brandBarHeight = this.$refs.brandBar.offsetHeight + this.$refs.brandBar.offsetTop;
      this.cached_.titleBarheight = this.hasTitleBar ? this.$refs.titleBar.offsetHeight : 0;
      this.cached_.extraBarHeight = this.hasExtraBar ? this.$refs.extraBar.offsetHeight : 0;
      this.cached_.rootOffset = this.cached_.brandBarHeight + this.cached_.titleBarheight + this.cached_.extraBarHeight;

      this.elems_ = {};
      this.elems_.root = this.$parent.$el;
      this.elems_.toolbar = this.$refs.toolbar.$el;
    },
    updateTitle: function(value) {
      document.title = value || document.title;
    },
    handleInit: function() {
      this.$emit('initialized', { fixed: false, height: this.cached_.rootOffset });
    },
    displayBadge: function(toolName) {
      let currentTool = {};
      if (this.toolsBadges) {
        currentTool = this.toolsBadges.find((tool) => {
          return tool.toolName === toolName;
        });
      }

      if (currentTool && currentTool.badge) {
        return currentTool.badge;
      }
    },
    requestLogin() {
      this.$root.$emit('login-requested');
    },
    requestLogout() {
      this.$root.$emit('logout-requested');
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlAppBar", theme: tdlAppBarTheme });
    this.$root.$emit("update-locale-string", TdlAppBarLocale);
    this.$root.$on('tdl-bottom-navigation--added', this.navigationBarHandler);
  },
  mounted: function() {
    this.onMounted();
    this.updateTitle(this.pageTitle);

    // waits for DOM to update before adding listener
    this.$nextTick(() => {
      this.calculate();
      this.handleInit();
      this.lastScrollPosition_ = 0;

      if (this.hasTitleBar || this.hasExtraBar) {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll, applyPassive());
        this.elems_.root.style.setProperty('padding-top', '0px');
      } else {
        this.elems_.root.style.setProperty('padding-top', `${this.cached_.brandBarHeight}px`);
      }
    });
  },
  destroyed: function() {
    if (this.hasTitleBar || this.hasExtraBar) {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll, applyPassive());
    }

    this.$root.$off('tdl-bottom-navigation--added', this.navigationBarHandler);
    this.onDestroyed();
  }
};

export default TdlAppBar;
