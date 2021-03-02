import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiMagnify, mdiBriefcaseSearch, mdiBullhorn, mdiBriefcase, mdiBriefcaseClock, mdiAccount, mdiHumanGreeting, mdiForum, mdiRoadVariant, mdiLightbulb, mdiCodeTags, mdiHelpCircle, mdiWeb } from '@mdi/js';
import './getClosestVueParent-5770502b.js';
import './transitionEndEventName-e3bb98be.js';
import './MdDialog.js';
import './MdDialogActions.js';
import './MdDialogContent.js';
import './MdDialogTitle.js';
import MdDivider from './MdDivider.js';
import MdList from './MdList.js';
import MdListItem from './MdListItem.js';
import './MdRadio.js';
import MdSidenav from './MdSidenav.js';
import MdWhiteframe from './MdWhiteframe.js';
import MdToolbar from './MdToolbar.js';
import TdlBrandLogo from './TdlBrandLogo.js';
import TdlLocaleSelector from './TdlLocaleSelector.js';

function defaultDrawerOptions({
  DISCOVERY_BASE_URL,
  BIO_BASE_URL,
  HOMEPAGES_BASE_URL,
  REMOTER_BASE_URL,
  STARRGATE_BASE_URL,
  TORRE_ABOUT_BASE_URL,
  TORRE_PROTOCOL_BASE_URL
}, i18n) {
  return [{
    text: i18n.t('Search'),
    url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/search`,
    target: '_self',
    iconSvg: mdiMagnify
  }, {
    text: i18n.t('Jobs/gigs'),
    url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings`,
    target: '_self',
    iconSvg: mdiBriefcaseSearch
  }, {
    text: i18n.t('Post a job'),
    url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings/post`,
    target: '_self',
    iconSvg: mdiBullhorn
  }, {
    text: i18n.t('Your jobs (posted or applied)'),
    url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings/list`,
    target: '_self',
    iconSvg: mdiBriefcase
  }, {
    text: i18n.t('Alerts (preferences)'),
    url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/jobalerts/onboarding`,
    target: '_self',
    iconSvg: mdiBriefcaseClock
  }, {
    text: i18n.t('Your genome'),
    url: `${BIO_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/_a/your-bio`,
    target: '_self',
    iconSvg: mdiAccount
  }, {
    text: i18n.t('Signals'),
    url: `${BIO_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/_a/your-signals`,
    target: '_self',
    iconSvg: mdiHumanGreeting
  }, {
    text: i18n.t('Messages'),
    url: `${DISCOVERY_BASE_URL}/login?intent=messenger&next=${i18n.locale ? '/' + i18n.locale : ''}/messenger`,
    target: '_self',
    iconSvg: mdiForum,
    divider: true
  }, {
    text: i18n.t('Torre\'s product roadmap'),
    url: 'https://trello.com/b/FFNkJBBo/torre-transparent-product-roadmap',
    target: '_blank',
    iconSvg: mdiRoadVariant
  }, {
    text: i18n.t('Request features'),
    url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/request-feature`,
    target: '_blank',
    iconSvg: mdiLightbulb
  }, {
    text: i18n.t('API for developers'),
    url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/request-api`,
    target: '_blank',
    iconSvg: mdiCodeTags
  }, {
    text: i18n.t('Help'),
    url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/help`,
    iconSvg: mdiHelpCircle,
    target: '_blank',
    divider: true
  }, {
    text: i18n.t('$locale'),
    iconSvg: mdiWeb,
    dialogRef: 'localeSelector',
    divider: true
  }];
}

var TdlNavDrawerLocale = {
  "en": {
    "About us": "About us",
    "Post a job": "Post a job",
    "Terms of use": "Terms of use",
    "Privacy policy": "Privacy policy",
    "Search": "Search",
    "Jobs/gigs": "Jobs/gigs",
    "Your jobs (posted or applied)": "Your jobs (posted or applied)",
    "Alerts (preferences)": "Alerts (preferences)",
    "Signals": "Signals",
    "Messages": "Messages",
    "Torre's product roadmap": "Torre's product roadmap",
    "Request features": "Request features",
    "API for developers": "API for developers",
    "Help": "Help",
    "Your genome": "Your genome",
    "$locale": "English (en)"
  },
  "es": {
    "About us": "Nosotros",
    "Post a job": "Publicar un trabajo",
    "Terms of use": "Términos de uso",
    "Privacy policy": "Política de privacidad",
    "Search": "Buscar",
    "Jobs/gigs": "Trabajos",
    "Your jobs (posted or applied)": "Tus trabajos",
    "Alerts (preferences)": "Alertas (preferencias)",
    "Signals": "Signals",
    "Messages": "Mensajes",
    "Torre's product roadmap": "El mapa de producto de Torre",
    "Request features": "Solicita nuevas características",
    "API for developers": "API para desarrolladores",
    "Help": "Ayuda",
    "Your genome": "Tu genoma",
    "$locale": "Español (es)"
  }
};

var tdlNavDrawerTheme = ".THEME_NAME.tdl-drawer header .md-toolbar {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.tdl-drawer header .tdl-avatar {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-drawer .tdl-drawer-options .md-list {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.tdl-drawer .tdl-drawer-options ul li {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-drawer .tdl-drawer-options ul li:hover {\n  color: ACCENT-PRIMARY;\n  background-color: BACKGROUND-INVERTED-0.04;\n}\n.THEME_NAME.tdl-drawer .tdl-drawer-options ul li:hover .md-icon {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME.tdl-drawer a:not(.md-button):hover {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-drawer footer {\n  background-color: BACKGROUND-ELEVATION_2;\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-drawer footer .tdl-footer-links a:not(.md-button) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.tdl-drawer footer .tdl-footer-links a:not(.md-button):hover {\n  color: RAISED-PRIMARY;\n}\n.THEME_NAME.tdl-drawer .tdl-spacer {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.tdl-drawer .tdl-divider {\n  border-top: 1px solid TEXT-DISABLED;\n}";

const TdlNavDrawer = {
  name: 'tdl-nav-drawer',
  components: {
    MdSidenav,
    MdWhiteframe,
    MdToolbar,
    MdList,
    MdListItem,
    MdIcon,
    MdDivider,
    TdlLocaleSelector,
    TdlBrandLogo
  },
  mixins: [theme],
  props: {
    tdlUser: {
      type: Object,
      required: false
    },
    tdlDrawerOptions: {
      type: Array,
      required: false,
      default: function () {
        return [];
      }
    },
    tdlLogo: {
      type: Object,
      required: false
    },
    theme: {
      type: String,
      required: false,
      default: 'lime500'
    },
    urls: {
      type: Object,
      required: true
    },
    styleProps: {
      type: Object,
      default: () => ({
        "--theme-color": "#CDDC39"
      })
    },
    defaultLocale: {
      type: String,
      required: true
    }
  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlNavDrawer",
      theme: tdlNavDrawerTheme
    });
    this.$root.$emit("update-locale-string", TdlNavDrawerLocale);
  },
  methods: {
    toggle: function () {
      this.$refs.drawer.toggle();
    },
    handleClickItem: function (option) {
      if (option.eventName) {
        this.$emit('item-selected', option.eventName);
      }

      if (option.url) {
        window.open(option.url, option.target ? option.target : '_blank');
      }

      if (option.dialogRef) {
        this.$refs[option.dialogRef].open();
      }

      this.$refs.drawer.close();
    },
    handleLocaleSelected: function (locale) {
      this.$emit('locale-selected', locale);
    },
    handleOpen: function () {
      this.$emit('open');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('drawer-open');
    },
    handleClose: function () {
      this.$emit('close');
      document.body.style.overflow = 'scroll';
      document.body.classList.remove('drawer-open');
    }
  },
  computed: {
    allDrawerOptions: function () {
      return [...this.tdlDrawerOptions, ...defaultDrawerOptions(this.urls, this.$i18n)];
    },

    cssVariables() {
      return {
        '--theme': this.theme
      };
    }

  }
};

/* script */
const __vue_script__ = TdlNavDrawer;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    style: _vm.cssVariables
  }, [_c('md-sidenav', {
    ref: "drawer",
    staticClass: "md-left tdl-drawer drawer-light",
    class: [_vm.themeClass],
    attrs: {
      "md-fixed": true
    },
    on: {
      "open": _vm.handleOpen,
      "close": _vm.handleClose
    }
  }, [_c('header', [_c('md-whiteframe', {
    attrs: {
      "md-elevation": "2"
    }
  }, [_c('md-toolbar', {
    attrs: {
      "md-theme": "white"
    }
  }, [_c('a', {
    staticClass: "md-primary",
    attrs: {
      "href": "/"
    }
  }, [_c('tdl-brand-logo')], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tdl-drawer-options"
  }, [_c('md-list', [_vm._t("default"), _vm._v(" "), _vm._l(_vm.allDrawerOptions, function (option, index) {
    return _c('div', {
      key: index
    }, [!option.userState || option.userState === 'loggedOut' && !_vm.tdlUser || !!_vm.tdlUser && !_vm.tdlUser.name || option.userState === 'loggedIn' && !!_vm.tdlUser && !!_vm.tdlUser.name ? _c('md-list-item', {
      staticClass: "tdl-drawer-options__option option",
      nativeOn: {
        "click": function ($event) {
          return _vm.handleClickItem(option);
        }
      }
    }, [_c('md-icon', {
      attrs: {
        "icon-svg": option.iconSvg
      }
    }), _vm._v(" "), option.text ? _c('span', {
      staticClass: "md-body-1 option__text"
    }, [_vm._v(_vm._s(option.text))]) : _vm._e(), _vm._v(" "), option.divider ? _c('md-divider') : _vm._e()], 1) : _vm._e()], 1);
  }), _vm._v(" "), _vm._t("cross-drawer")], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "tdl-spacer"
  }), _vm._v(" "), _c('footer', [_c('div', {
    staticClass: "tdl-footer-links"
  }, [_c('a', {
    staticClass: "md-primary",
    attrs: {
      "href": _vm.urls.TORRE_ABOUT_BASE_URL
    }
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("About us")))])]), _vm._v("   \n        "), _c('a', {
    staticClass: "md-primary",
    attrs: {
      "href": _vm.urls.STARRGATE_BASE_URL + "/terms/"
    }
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Terms of use")))])]), _vm._v("   \n        "), _c('a', {
    staticClass: "md-primary",
    attrs: {
      "href": _vm.urls.STARRGATE_BASE_URL + "/privacy/"
    }
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Privacy policy")))])])]), _vm._v(" "), _c('div', {
    staticClass: "tdl-footer-copy"
  }, [_c('small', [_vm._v("© Torre Labs, Inc.")])])])]), _vm._v(" "), _c('tdl-locale-selector', {
    ref: "localeSelector",
    attrs: {
      "defaultLocale": _vm.defaultLocale,
      "styleProps": _vm.styleProps
    },
    on: {
      "locale-selected": _vm.handleLocaleSelected
    }
  })], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-c233f462_0", {
    source: ".tdl-drawer .tdl-brand-logo .logo-svg{width:78px}.tdl-drawer header .md-layout{width:100%}.tdl-drawer header .md-toolbar{margin-left:0;padding-left:16px;opacity:.9;background-color:#383b40}.tdl-drawer header .tdl-avatar{margin-left:16px;padding-top:26px;padding-bottom:12px;margin-bottom:6px;color:rgba(255,255,255,.9)}.tdl-drawer header .tdl-avatar .tdl-user-name{font-size:16px;margin-bottom:6px;font-weight:600}.tdl-drawer header .tdl-avatar .tdl-placeholder{border-radius:50%;height:64px;margin-bottom:16px}.tdl-drawer header .tdl-avatar .tdl-signin{display:block;margin-top:58px}.tdl-drawer header .tdl-primary-actions-container{margin-top:8px}.tdl-drawer header .tdl-primary-actions-container .md-primary{font-weight:400}.tdl-drawer header .tdl-primary-actions-container .md-primary:first-child{margin-right:0}.tdl-drawer a:not(.md-button):hover{color:rgba(255,255,255,.9)}.tdl-drawer .md-sidenav-content{display:flex;flex-direction:column;max-height:100vh}.tdl-drawer .tdl-drawer-options{box-shadow:0 -2px 2px rgba(0,0,0,.12);flex-wrap:nowrap}.tdl-drawer .tdl-drawer-options .md-list{background-color:#383b40}.tdl-drawer .tdl-drawer-options ul{padding-top:0}.tdl-drawer .tdl-drawer-options ul li{cursor:pointer;color:rgba(255,255,255,.9)}.tdl-drawer .tdl-drawer-options ul li:hover{color:#cddc39;background-color:rgba(255,255,255,.4)}.tdl-drawer .tdl-drawer-options ul li .md-list-item-container{min-height:48px;justify-content:flex-start}.tdl-drawer .tdl-drawer-options ul li .md-button{transition:none}.tdl-drawer .tdl-drawer-options ul li .md-button:hover{background-color:transparent}.tdl-drawer .tdl-drawer-options ul li .option__logo{height:24px}.tdl-drawer .tdl-drawer-options ul li .option__logotype{margin-left:34px}.tdl-drawer .tdl-drawer-options ul li .option__text{position:absolute;right:0;width:calc(100% - 72px)}.tdl-drawer .md-toolbar img.tdl-brand-logo{height:22px}.tdl-drawer footer{background-color:#383b40;color:rgba(255,255,255,.9);padding-left:16px;padding-bottom:26px}.tdl-drawer footer .tdl-footer-links a:not(.md-button){color:#cddc39}.tdl-drawer .tdl-spacer{flex-grow:1;background-color:#383b40}.tdl-drawer .tdl-divider{width:calc(100% + 16px);margin:-8px -8px;border-left:0;border-right:0;border-bottom:0;border-top:1px solid rgba(255,255,255,.38)}.tdl-drawer .md-menu-backdrop{position:fixed}",
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
