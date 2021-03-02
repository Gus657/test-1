'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./getClosestVueParent-cfb023f4.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdDialog.js');
require('./MdDialogActions.js');
require('./MdDialogContent.js');
require('./MdDialogTitle.js');
require('./MdDivider.js');
require('./MdList.js');
require('./MdListItem.js');
var MdMenu = require('./MdMenu.js');
var MdMenuContent = require('./MdMenuContent.js');
var MdMenuItem = require('./MdMenuItem.js');
require('./MdRadio.js');
require('./MdSidenav.js');
var MdWhiteframe = require('./MdWhiteframe.js');
var MdToolbar = require('./MdToolbar.js');
var events = require('./events-61466f5d.js');
var TdlNavDrawer = require('./TdlNavDrawer.js');
var TdlBrandLogo = require('./TdlBrandLogo.js');
require('./TdlLocaleSelector.js');
var TdlEntityPicture = require('./TdlEntityPicture.js');

function getTools({
  DISCOVERY_BASE_URL,
  BIO_BASE_URL
}, i18n, mobile = false) {
  const locale = !!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : '';
  const search = {
    id: 'search',
    name: i18n.t('Search'),
    url: `${DISCOVERY_BASE_URL}${locale}/search`,
    iconSvg: js.mdiMagnify
  };
  const postAJob = {
    id: 'talent',
    name: i18n.t('Post a job'),
    url: `${DISCOVERY_BASE_URL}${locale}/postings/post`,
    iconSvg: js.mdiBullhorn
  };
  const jobs = {
    id: 'opportunities',
    name: i18n.t('Jobs/gigs'),
    url: `${DISCOVERY_BASE_URL}${locale}/search/jobs`,
    iconSvg: js.mdiBriefcaseSearch
  };
  const bio = {
    id: 'bio',
    name: i18n.t('Your genome'),
    url: `${BIO_BASE_URL}${locale}/_a/your-bio`,
    iconSvg: js.mdiAccount
  };
  const yourJobs = {
    id: 'yourJobs',
    name: i18n.t('Your jobs'),
    url: `${DISCOVERY_BASE_URL}/login?intent=listings&next=${locale}/postings/list/posted`,
    target: '_self',
    iconSvg: js.mdiBriefcase
  };
  const alerts = {
    id: 'alerts',
    name: i18n.t('Alerts'),
    url: `${DISCOVERY_BASE_URL}${locale}/jobalerts/onboarding`,
    iconSvg: js.mdiBriefcaseClock
  };
  const signals = {
    id: 'signals',
    name: i18n.t('Signals'),
    url: `${BIO_BASE_URL}/_a/your-signals`,
    iconSvg: js.mdiHumanGreeting
  };
  const messages = {
    id: 'messenger',
    name: i18n.t('Messages'),
    url: `${DISCOVERY_BASE_URL}/login?intent=messenger&next=${locale}/messenger`,
    iconSvg: js.mdiForum
  };
  return mobile ? [jobs, postAJob, bio, messages] : [search, jobs, postAJob, yourJobs, alerts, bio, signals, messages];
}

var TdlAppBarLocale = {
  "en": {
    "About us": "About us",
    "Post a job": "Post a job",
    "Terms of use": "Terms of use",
    "Privacy policy": "Privacy policy",
    "Search": "Search",
    "Jobs/gigs": "Jobs/gigs",
    "Signals": "Signals",
    "Alerts": "Alerts",
    "Messages": "Messages",
    "Torre's product roadmap": "Torre's product roadmap",
    "Request features": "Request features",
    "API for developers": "API for developers",
    "Help": "Help",
    "Your genome": "Your genome",
    "Your jobs": "Your jobs",
    "Your account": "Your account",
    "Sign out": "Sign out",
    "Your torre account": "Your torre account",
    "More": "More",
    "Sign in": "Sign in"
  },
  "es": {
    "About us": "Nosotros",
    "Post a job": "Publicar un trabajo",
    "Terms of use": "Términos de uso",
    "Privacy policy": "Política de privacidad",
    "Search": "Buscar",
    "Jobs/gigs": "Trabajos",
    "Signals": "Signals",
    "Alerts": "Alertas",
    "Messages": "Mensajes",
    "Torre's product roadmap": "El mapa de producto de Torre",
    "Request features": "Solicita nuevas características",
    "API for developers": "API para desarrolladores",
    "Help": "Ayuda",
    "Your genome": "Tu genoma",
    "Your jobs": "Tus trabajos",
    "Your account": "Tu cuenta",
    "Sign out": "Cerrar sesión",
    "Your torre account": "Tu cuenta de Torre",
    "More": "Más",
    "Sign in": "Acceder"
  }
};

var tdlAppBarTheme = ".THEME_NAME.tdl-app-bar .md-toolbar {\n  background-color: COMPONENT-APPBAR !important;\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-app-bar .tdl-app-bar__tools .tools__tool .tools__name, .THEME_NAME.tdl-app-bar .tdl-app-bar__tools .tools__tool .tools__icon {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-app-bar .tdl-toolbar .tdl-divider {\n  border-top: 1px solid BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.user-menu__user .user__content .user__name {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME.user-menu__actions .user-menu__action--secondary {\n  color: ACCENT-PRIMARY !important;\n}";

/**
 * This component takes ideas and portions of code from: https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar
 */
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
  data: function () {
    return {
      navigationBar: false,
      mdiMenuIcon: js.mdiMenu,
      mdiSearchIcon: js.mdiMagnify,
      mdiAppsIcon: js.mdiApps
    };
  },
  computed: {
    defaultTheme: function () {
      return "bio";
    },
    classObject: function () {
      return [{
        'tdl-toolbar': true,
        'tdl-title-fixed': !this.hasTitleBar && !this.hasExtraBar,
        'tdl-has-navigation-bar': this.navigationBar
      }];
    },
    hasTitleBar: function () {
      return this.$slots.default !== undefined;
    },
    hasExtraBar: function () {
      return this.$slots.extra !== undefined || this.showExtraBar;
    },
    tools: function () {
      return getTools(this.urls, this.$i18n);
    },
    mobileTools: function () {
      return getTools(this.urls, this.$i18n, true);
    },
    moreTools: function () {
      return this.tools.filter(t1 => !this.mobileTools.some(t2 => t1.id === t2.id) && t1.id !== 'search');
    },
    searchTool: function () {
      return this.tools.find(tool => tool.id === 'search');
    },
    bioUrl: function () {
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
    getHeightData: function () {
      return {
        fullHeight: this.cached_.rootOffset,
        hasBars: this.hasTitleBar && this.hasExtraBar,
        barRowHeight: this.$refs.brandBar.offsetHeight
      };
    },
    handleBrandLogoClick: function () {
      this.$root.$emit('tdl-app-bar--brand-logo-click');
    },
    handleMenuClick: function () {
      this.$root.$emit('tdl-app-bar--menu-click');
    },
    navigationBarHandler: function () {
      this.navigationBar = true;
    },
    handleScroll: function () {
      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(() => {
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // handles overscrolling effects (iOS Safari)

        currentScrollPosition = Math.max(Math.min(currentScrollPosition, document.documentElement.scrollHeight - window.innerHeight), 0); // brand bar height minus the part of the brand bar already shown (if that's the case)

        const scrollThreshold = this.cached_.brandBarHeight - (this.cached_.brandBarHeight - this.toolbarOffset_);

        if (currentScrollPosition > scrollThreshold) {
          const totalScrolled = this.lastScrollPosition_ - currentScrollPosition; // moving upwards

          if (totalScrolled > 0) {
            // toolbar is not completely shown (reduce offset to show)
            if (this.toolbarOffset_ > 0) {
              this.toolbarOffset_ = Math.max(0, this.toolbarOffset_ - totalScrolled);
            }
          } // moving downwards


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
          this.$emit('changed', {
            fixed: true,
            height: height < this.cached_.titleBarheight ? this.cached_.titleBarheight : height
          });
        } else {
          this.toolbarOffset_ = this.cached_.brandBarHeight;
          this.elems_.toolbar.style.removeProperty('transform');
          this.elems_.root.style.removeProperty('padding-top');
          this.elems_.toolbar.classList.remove('tdl-title-fixed');
          const height = this.elems_.toolbar.getBoundingClientRect().height + this.elems_.toolbar.getBoundingClientRect().top;
          this.$emit('changed', {
            fixed: false,
            height: height < this.cached_.titleBarheight ? this.cached_.titleBarheight : height
          });
        }

        this.lastScrollPosition_ = currentScrollPosition;
      });
    },
    handleResize: function () {
      this.calculate();
      this.handleScroll();
    },
    calculate: function () {
      this.cached_ = {};
      this.cached_.brandBarHeight = this.$refs.brandBar.offsetHeight + this.$refs.brandBar.offsetTop;
      this.cached_.titleBarheight = this.hasTitleBar ? this.$refs.titleBar.offsetHeight : 0;
      this.cached_.extraBarHeight = this.hasExtraBar ? this.$refs.extraBar.offsetHeight : 0;
      this.cached_.rootOffset = this.cached_.brandBarHeight + this.cached_.titleBarheight + this.cached_.extraBarHeight;
      this.elems_ = {};
      this.elems_.root = this.$parent.$el;
      this.elems_.toolbar = this.$refs.toolbar.$el;
    },
    updateTitle: function (value) {
      document.title = value || document.title;
    },
    handleInit: function () {
      this.$emit('initialized', {
        fixed: false,
        height: this.cached_.rootOffset
      });
    },
    displayBadge: function (toolName) {
      let currentTool = {};

      if (this.toolsBadges) {
        currentTool = this.toolsBadges.find(tool => {
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
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlAppBar",
      theme: tdlAppBarTheme
    });
    this.$root.$emit("update-locale-string", TdlAppBarLocale);
    this.$root.$on('tdl-bottom-navigation--added', this.navigationBarHandler);
  },
  mounted: function () {
    this.onMounted();
    this.updateTitle(this.pageTitle); // waits for DOM to update before adding listener

    this.$nextTick(() => {
      this.calculate();
      this.handleInit();
      this.lastScrollPosition_ = 0;

      if (this.hasTitleBar || this.hasExtraBar) {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll, events.applyPassive());
        this.elems_.root.style.setProperty('padding-top', '0px');
      } else {
        this.elems_.root.style.setProperty('padding-top', `${this.cached_.brandBarHeight}px`);
      }
    });
  },
  destroyed: function () {
    if (this.hasTitleBar || this.hasExtraBar) {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll, events.applyPassive());
    }

    this.$root.$off('tdl-bottom-navigation--added', this.navigationBarHandler);
    this.onDestroyed();
  }
};

/* script */
const __vue_script__ = TdlAppBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-app-bar",
    class: [_vm.themeClass],
    style: _vm.cssVariables
  }, [_c('md-whiteframe', {
    ref: "toolbar",
    class: _vm.classObject,
    attrs: {
      "md-elevation": "1"
    }
  }, [_c('md-toolbar', [_c('div', {
    ref: "brandBar",
    staticClass: "md-toolbar-container md-toolbar-container--branded-bar"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function ($event) {
        return _vm.handleMenuClick($event);
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiMenuIcon
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tdl-brand-logo-wrapper"
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.handleBrandLogoClick($event);
      }
    }
  }, [_c('tdl-brand-logo')], 1)]), _vm._v(" "), _vm._t("custom-tools", [_c('div', {
    staticClass: "tdl-app-bar__search-icon"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    attrs: {
      "href": _vm.searchTool.url
    }
  }, [_c('md-icon', {
    staticClass: "tools_icon",
    attrs: {
      "icon-svg": _vm.mdiSearchIcon
    }
  })], 1)], 1)], {
    "tools": _vm.tools
  }), _vm._v(" "), _c('div', {
    staticClass: "tdl-app-bar__tools tools"
  }, _vm._l(_vm.tools, function (tool) {
    return _c('md-button', {
      key: tool.name,
      class: ['tools__tool', {
        'tools__tool--has-badge': !!_vm.displayBadge(tool.name)
      }],
      attrs: {
        "href": tool.url,
        "badge": _vm.displayBadge(tool.name)
      }
    }, [_c('md-icon', {
      staticClass: "tools__icon",
      attrs: {
        "icon-svg": tool.iconSvg
      }
    }), _vm._v(" "), tool.image ? _c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload"
      }],
      staticClass: "tools__image",
      attrs: {
        "data-url": tool.image,
        "alt": "Tool"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "tools__name"
    }, [_vm._v(_vm._s(tool.name))])], 1);
  }), 1), _vm._v(" "), _vm.user ? _c('md-menu', {
    staticClass: "tdl-app-bar__user-menu user-menu",
    attrs: {
      "md-size": 6,
      "md-offset-y": 62
    }
  }, [_c('tdl-entity-picture', {
    staticClass: "user-menu__picture",
    attrs: {
      "md-menu-trigger": "",
      "shape": "hexagon",
      "entity": _vm.user,
      "border-width": 2,
      "size": 38,
      "default-margin": false,
      "box-shadow": "0px 2px 4px rgba(0,0,0,0.5)"
    }
  }), _vm._v(" "), _c('md-menu-content', [_c('div', [_c('div', {
    staticClass: "user-menu__user user",
    class: [_vm.themeClass]
  }, [_c('tdl-entity-picture', {
    staticClass: "user__picture",
    attrs: {
      "md-menu-trigger": "",
      "shape": "hexagon",
      "entity": _vm.user,
      "border-width": 5,
      "size": 64,
      "default-margin": false,
      "box-shadow": "0px 2px 4px rgba(0,0,0,0.5)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user__content"
  }, [_c('a', {
    staticClass: "user__name md-subheading",
    class: _vm.defaultTheme,
    attrs: {
      "href": _vm.bioUrl
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.user.name) + "\n                  ")]), _vm._v(" "), _c('p', {
    staticClass: "user__email md-caption"
  }, [_vm._v("\n                    " + _vm._s(_vm.user.email) + "\n                  ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "user-menu__actions",
    class: [_vm.themeClass]
  }, [_c('md-button', {
    staticClass: "md-primary md-raised user-menu__action--wide global-themed-button__primary",
    attrs: {
      "theme": _vm.defaultTheme,
      "href": _vm.bioUrl
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Your genome")) + "\n                ")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised user-menu__action--wide user-menu__action--secondary global-themed-button__secondary",
    attrs: {
      "theme": _vm.defaultTheme,
      "href": _vm.urls.STARRGATE_BASE_URL
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Your torre account")) + "\n                ")]), _vm._v(" "), _c('md-button', {
    staticClass: "user-menu__action--secondary global-themed-button__flat",
    attrs: {
      "theme": _vm.defaultTheme
    },
    on: {
      "click": _vm.requestLogout
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Sign out")) + "\n                ")])], 1)])])], 1) : _c('md-button', {
    staticClass: "md-primary tdl-app-bar__sign-in",
    attrs: {
      "theme": _vm.theme
    },
    on: {
      "click": _vm.requestLogin
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Sign in")) + "\n        ")])], 2), _vm._v(" "), _vm.hasTitleBar ? _c('hr', {
    staticClass: "tdl-divider"
  }) : _vm._e(), _vm._v(" "), _vm.hasTitleBar ? _c('div', {
    ref: "titleBar",
    staticClass: "md-toolbar-container md-toolbar-container--title-bar"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), _vm.hasExtraBar ? _c('div', {
    ref: "extraBar",
    staticClass: "md-toolbar-container"
  }, [_vm._t("extra")], 2) : _vm._e()])], 1), _vm._ssrNode(" "), !_vm.hideBottomBar ? _c('md-toolbar', {
    staticClass: "tdl-app-bar__bottom-bar",
    attrs: {
      "md-theme": _vm.theme
    }
  }, [_c('div', {
    staticClass: "tdl-app-bar__tools tools"
  }, [_vm._l(_vm.mobileTools, function (tool) {
    return _c('md-button', {
      key: tool.name,
      staticClass: "tools__tool",
      class: {
        'tools__tool--has-badge': !!_vm.displayBadge(tool.name)
      },
      attrs: {
        "href": tool.url,
        "badge": _vm.displayBadge(tool.name)
      }
    }, [_c('md-icon', {
      staticClass: "tools__icon",
      attrs: {
        "icon-svg": tool.iconSvg
      }
    }), _vm._v(" "), tool.image ? _c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload"
      }],
      staticClass: "tools__image",
      attrs: {
        "data-url": tool.image,
        "alt": "Tool"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "tools__name"
    }, [_vm._v(_vm._s(tool.name))])], 1);
  }), _vm._v(" "), _c('md-menu', {
    staticClass: "tools__tool",
    attrs: {
      "md-size": "4",
      "md-offset-y": -67,
      "md-direction": "top right"
    }
  }, [_c('md-button', {
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_c('md-icon', {
    staticClass: "tools__icon",
    attrs: {
      "icon-svg": _vm.mdiAppsIcon
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tools__name"
  }, [_vm._v(_vm._s(_vm.$t('More')))])], 1), _vm._v(" "), _c('md-menu-content', {
    staticClass: "tdl-app-bar__all-tools"
  }, _vm._l(_vm.moreTools, function (tool) {
    return _c('md-menu-item', {
      key: tool.name,
      staticClass: "all-tools__tool tool",
      attrs: {
        "href": tool.url
      }
    }, [_c('md-icon', {
      staticClass: "tools__icon",
      attrs: {
        "icon-svg": tool.iconSvg
      }
    }), _vm._v(" "), tool.image ? _c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload"
      }],
      staticClass: "tools__image",
      attrs: {
        "data-url": tool.image,
        "alt": "Tool"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "tools__name md-body-1"
    }, [_vm._v(_vm._s(tool.name))])], 1);
  }), 1)], 1)], 2)]) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-891aee92_0", {
    source: ".tdl-app-bar[data-v-891aee92]{width:100%}.tdl-app-bar .tdl-toolbar.md-whiteframe[data-v-891aee92]{z-index:4}.tdl-app-bar .tdl-toolbar .md-toolbar[data-v-891aee92]{background-color:#27292d!important;color:rgba(255,255,255,.65);min-height:56px}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container[data-v-891aee92]{height:56px}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container--branded-bar>.md-button[data-v-891aee92]:first-child{margin-right:24px}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container .md-toolbar[data-v-891aee92]{padding:0}.tdl-app-bar .tdl-toolbar .md-toolbar img.tdl-brand-logo[data-v-891aee92]{height:17px}.tdl-app-bar .tdl-toolbar.tdl-title-fixed[data-v-891aee92]{position:fixed;top:0;left:0;right:0}.tdl-app-bar .tdl-toolbar .tdl-brand-logo-wrapper[data-v-891aee92]{flex:1}.tdl-app-bar .tdl-toolbar .tdl-brand-logo-wrapper a[data-v-891aee92]{padding:4px 0}.tdl-app-bar .tdl-toolbar .tdl-divider[data-v-891aee92]{margin-top:-1px;border-top:1px solid rgba(255,255,255,.12)}.tdl-app-bar .tdl-toolbar .tdl-divider[data-v-891aee92]{margin:-8px;border-left:0;border-right:0;border-bottom:0;width:calc(100% + 16px);z-index:1}.tdl-app-bar__tools[data-v-891aee92]{display:flex;justify-content:center;align-items:center;height:56px}.tdl-app-bar__tools .tools__tool[data-v-891aee92]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.tdl-app-bar__tools .tools__tool--has-badge .md-button__badge[data-v-891aee92]{top:3px;right:calc(50% - 32px)}.tdl-app-bar__tools .tools__tool .tools__image[data-v-891aee92]{height:22px}.tdl-app-bar__tools .tools__tool .tools__icon[data-v-891aee92]{margin:unset;color:rgba(255,255,255,.65)}.tdl-app-bar__tools .tools__tool .tools__name[data-v-891aee92]{margin-top:5px;font-size:10px;line-height:11px;text-transform:none;text-align:center;color:rgba(255,255,255,.65)}.tdl-app-bar__tools .md-button[data-v-891aee92]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-width:72px;height:100%;margin:0;padding:0 12px}.tdl-app-bar__tools .md-button[data-v-891aee92]:hover{background-color:rgba(1,1,1,.1)!important}@media screen and (max-width:959px){.tdl-app-bar__tools[data-v-891aee92]{display:none}}.tdl-app-bar__all-tools .tool .md-list-item-container.md-button[data-v-891aee92]{justify-content:flex-start}.tdl-app-bar__all-tools .tool__logo[data-v-891aee92]{height:24px}.tdl-app-bar__all-tools .tool__logotype[data-v-891aee92]{margin-left:32px}@media screen and (min-width:960px){.tdl-app-bar__search-icon[data-v-891aee92]{display:none}}.tdl-app-bar__bottom-bar[data-v-891aee92]{width:100vw;justify-content:center;padding:0;position:fixed;bottom:0;left:0;z-index:4;box-shadow:0 -2px 2px 0 rgba(0,0,0,.2)}.tdl-app-bar__bottom-bar .tools[data-v-891aee92]{width:100%;display:flex;justify-content:space-around}.tdl-app-bar__bottom-bar .tools .tools__tool[data-v-891aee92]{width:inherit}@media screen and (min-width:960px){.tdl-app-bar__bottom-bar[data-v-891aee92]{display:none}}@media screen and (max-height:400px){.tdl-app-bar__bottom-bar[data-v-891aee92]{display:none}}.tdl-app-bar__sign-in[data-v-891aee92]{width:fit-content;min-width:unset;padding:0}.tdl-app-bar__sign-in[data-v-891aee92]:hover{background-color:rgba(1,1,1,.1)!important}.user-menu[data-v-891aee92]{height:100%;min-width:64px}.user-menu__picture[data-v-891aee92]{margin-top:7px;cursor:pointer}.user-menu__user[data-v-891aee92]{display:flex;height:80px;padding-left:16px;padding-right:16px}.user-menu__user .user__picture[data-v-891aee92]{margin-right:12px}.user-menu__user .user__content[data-v-891aee92]{display:flex;height:100%;flex-direction:column;justify-content:center;padding-bottom:12px;color:#cddc39!important}.user-menu__user .user__email[data-v-891aee92],.user-menu__user .user__name[data-v-891aee92]{margin:0}.user-menu__user .user__name[data-v-891aee92]{text-decoration:none!important}.user-menu__user .user__name.pink100[data-v-891aee92]{color:#f8bbd0}.user-menu__user .user__name.pink200[data-v-891aee92]{color:#f48fb1}.user-menu__user .user__name.pink300[data-v-891aee92]{color:#f06292}.user-menu__user .user__name.purple100[data-v-891aee92]{color:#e1bee7}.user-menu__user .user__name.purple200[data-v-891aee92]{color:#ce93d8}.user-menu__user .user__name.purple300[data-v-891aee92]{color:#ba68c8}.user-menu__user .user__name.deepPurple200[data-v-891aee92]{color:#b39ddb}.user-menu__user .user__name.deepPurple300[data-v-891aee92]{color:#9575cd}.user-menu__user .user__name.blue200[data-v-891aee92]{color:#90caf9}.user-menu__user .user__name.blue500[data-v-891aee92]{color:#2196f3}.user-menu__user .user__name.cyan200[data-v-891aee92]{color:#80deea}.user-menu__user .user__name.cyan500[data-v-891aee92]{color:#00bcd4}.user-menu__user .user__name.teal200[data-v-891aee92]{color:#80cbc4}.user-menu__user .user__name.teal400[data-v-891aee92]{color:#26a69a}.user-menu__user .user__name.lightGreen500[data-v-891aee92]{color:#8bc34a}.user-menu__user .user__name.lime500[data-v-891aee92]{color:#cddc39}.user-menu__user .user__name.amber300[data-v-891aee92]{color:#ffd54f}.user-menu__user .user__name.amber600[data-v-891aee92]{color:#d69600}.user-menu__user .user__name.orange400[data-v-891aee92]{color:#ffa726}.user-menu__user .user__name.deepOrange500[data-v-891aee92]{color:#ff5722}.user-menu__user .user__name.brown100[data-v-891aee92]{color:#d7ccc8}.user-menu__user .user__name.brown200[data-v-891aee92]{color:#bcaaa4}.user-menu__user .user__name.bio[data-v-891aee92]{color:#cddc39}.user-menu__actions[data-v-891aee92]{display:flex;flex-direction:column;align-items:flex-end;width:-moz-fit-content;width:fit-content;margin-left:auto;margin-right:8px}.user-menu__actions .global-themed-button__primary[data-v-891aee92]{background-color:#cddc39!important}.user-menu__actions .global-themed-button__secondary[data-v-891aee92]{color:#cddc39!important;background-color:#5e626b!important}.user-menu__actions .global-themed-button__flat[data-v-891aee92]{color:#cddc39}.user-menu__action--wide[data-v-891aee92]{width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-891aee92";
/* module identifier */

const __vue_module_identifier__ = "data-v-891aee92";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
