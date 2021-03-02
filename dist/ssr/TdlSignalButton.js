'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdInkRipple = require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./MdChip.js');
require('./uniqueId-a0313ec5.js');
require('./isArray-6fbc293c.js');
require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
require('./MdInput.js');
var MdChips = require('./MdChips.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdDialog.js');
require('./MdDialogActions.js');
require('./MdDialogContent.js');
require('./MdDialogTitle.js');
require('./MdList.js');
require('./MdListItem.js');
var MdMenu = require('./MdMenu.js');
var MdMenuContent = require('./MdMenuContent.js');
var MdMenuItem = require('./MdMenuItem.js');
require('./MdSpinner.js');
require('./deviceHelper-d251a554.js');
var MdTooltip = require('./MdTooltip.js');
require('./MdWhiteframe.js');
require('./MdToolbar.js');
require('./TdlOverlay.js');
var TdlFullscreendialog = require('./TdlFullscreendialog.js');

var TdlSignalButtonLocale = {
  "en": {
    "Learn more about signals": "Learn more about signals",
    "No signal": "No signal",
    "You haven’t signaled the person or organization yet": "You haven’t signaled the person or organization yet",
    "Let": "Let",
    "know you may consider working with them in the future.": "know you may consider working with them in the future.",
    "know you may consider working together in the future.": "know you may consider working together in the future.",
    "You may consider working with them in the future": "You may consider working with them in the future",
    "All notifications": "All notifications",
    "Relevant to you": "Relevant to you",
    "None": "None"
  },
  "es": {
    "Learn more about signals": "Conoce más sobre los signals",
    "No signal": "No hay signal",
    "You haven’t signaled the person or organization yet": "Aún no has enviado signals a la persona u organización",
    "Let": "Haz que",
    "know you may consider working with them in the future.": "sepan que considerarías trabajar con ellos en el futuro.",
    "know you may consider working together in the future.": "sepa que considerarías trabajar juntos en el futuro.",
    "You may consider working with them in the future": "Tú considerarías trabajar con ellos en el futuro",
    "All notifications": "Todas las notificaciones",
    "Relevant to you": "Relevantes para ti",
    "None": "Ninguna"
  }
};

var tdlSignalButtonTheme = ".THEME_NAME.tdl-signal-button .tdl-signal-button__signal-button:not(.tdl-signal-button__signal-button--simple) {\n  color: ACCENT-PRIMARY !important;\n  -webkit-text-fill-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal-button--inverted {\n  background-color: COMPONENT-BUTTON;\n  color: ACCENT-PRIMARY;\n  -webkit-text-fill-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal-button--inverted:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--elevated {\n  background-color: BACKGROUND-ELEVATION_3 !important;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__link {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__menu {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__menu:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__menu-container {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__menu-container:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.tdl-signal-button .tdl-signal-button__menu-container.tdl-signal-button__menu-container--elevated {\n  background-color: BACKGROUND-ELEVATION_3 !important;\n}\n.THEME_NAME .tdl-menu-content--center {\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n.THEME_NAME .tdl-signal-button__menu-item.tdl-signal-button__menu-item--selected .md-list-item-container {\n  background-color: ACCENT-PRIMARY-0.12;\n}\n.THEME_NAME .tdl-signal-button__menu-title {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME .tdl-signal-button__menu-icon {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME .tdl-signal-button__menu-icon.tdl-signal-button__menu-icon--highlighted {\n  color: ACCENT-PRIMARY !important;\n}";

function signalStates(i18n) {
  return [{
    type: 'no-signal',
    buildButtonText: entityName => {
      return `signal ${entityName}`.trim();
    },
    buildTooltipText: entity => {
      if (entity.type === 'organization') {
        return `${i18n.t('Let')} ${entity.name} ${i18n.t('know you may consider working with them in the future.')}`;
      }

      return `${i18n.t('Let')} ${entity.name} ${i18n.t('know you may consider working together in the future.')}`;
    }
  }, {
    type: 'signal',
    buildButtonText: entityName => {
      return `signaled ${entityName}`.trim();
    }
  }];
}

function notificationStates(i18n) {
  return [{
    type: 'all',
    menuTitle: i18n.t('All notifications'),
    menuIcon: js.mdiBellRing,
    iconHighlighted: true
  }, {
    type: 'relevant',
    menuTitle: i18n.t('Relevant to you'),
    menuIcon: js.mdiBellOutline,
    iconHighlighted: true
  }, {
    type: 'none',
    menuTitle: i18n.t('None'),
    menuIcon: js.mdiBellOff,
    iconHighlighted: false
  }];
}

const loadingState = {
  type: 'loading',
  buttonText: 'signal'
};
const TdlSignalButton = {
  name: 'tdl-signal-button',
  components: {
    MdButton,
    MdChips,
    MdIcon,
    MdInkRipple,
    MdMenu,
    MdMenuContent,
    MdMenuItem,
    MdTooltip,
    TdlFullscreendialog
  },
  mixins: [mixin.theme],
  props: {
    stateType: {
      type: 'no-signal' | 'signal' | 'loading',
      required: true
    },
    notificationsType: {
      type: 'all' | 'relevant' | 'none',
      required: true
    },
    entityName: {
      type: String,
      required: true
    },
    entityType: {
      type: String,
      default: 'person'
    },
    showEntityNameOnButton: {
      type: Boolean,
      required: false
    },
    username: {
      type: String,
      required: true
    },
    openNotificationSettings: {
      type: Boolean,
      required: false
    },
    openNotificationSettingsInPosition: {
      type: Boolean,
      required: false
    },
    menuTitle: {
      type: String,
      required: false
    },
    styleProps: {
      type: Object,
      default: () => ({})
    },
    theme: {
      type: String,
      required: false,
      default: 'lime500'
    },
    menuStyles: {
      type: Object,
      default: () => ({
        "--theme-color": "#CDDC39"
      })
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    hasBackdrop: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      currentState: 0,
      currentNotificationState: 1,
      menuPosition: {
        x: 0,
        y: 0
      },
      mdiTagIcon: js.mdiTag,
      mdiMenuDownIcon: js.mdiMenuDown,
      mdiHumanGreetingIcon: js.mdiHumanGreeting,
      urls: {
        BIO_BASE_URL: process.env.VUE_APP_BIO_SELF_URL,
        DISCOVERY_BASE_URL: process.env.VUE_APP_BIO_DISCOVERY_URL,
        HOMEPAGES_BASE_URL: process.env.VUE_APP_BIO_HOMEPAGES_URL,
        REMOTER_BASE_URL: process.env.VUE_APP_BIO_REMOTER_URL,
        STARRGATE_BASE_URL: process.env.VUE_APP_BIO_STARRGATE_URL,
        TORRE_ABOUT_BASE_URL: process.env.VUE_APP_BIO_TORRE_ABOUT_BASE_URL,
        TORRE_PROTOCOL_BASE_URL: process.env.VUE_APP_BIO_TORRE_PROTOCOL_BASE_URL
      },
      TORRE_DEFAULT_LOCALE: process.env.VUE_APP_BIO_DEFAULT_LOCALE
    };
  },
  computed: {
    buttonText: function () {
      if (this.signalStates[this.currentState].buildButtonText) {
        return this.signalStates[this.currentState].buildButtonText(this.showEntityNameOnButton ? this.entityName : '');
      }

      return '';
    },
    loadingState: function () {
      return loadingState;
    },
    signalStates: function () {
      return signalStates(this.$i18n);
    },
    notificationStates: function () {
      return notificationStates(this.$i18n);
    },
    isLoading: function () {
      return this.stateType === 'loading';
    },
    tooltipText: function () {
      if (this.signalStates[this.currentState].buildTooltipText) {
        const entityName = this.entityType === 'organization' ? this.entityName : this.entityName.replace(/ .*/, '');
        return this.signalStates[this.currentState].buildTooltipText({
          name: entityName,
          type: this.entityType
        });
      }

      return '';
    },
    hasSignal: function () {
      return this.currentState !== 0 && !this.isLoading;
    },
    aboutSignalsUrl: function () {
      return `${this.urls.DISCOVERY_BASE_URL}/${this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale + '/' : ''}signals/home#about`;
    },

    cssVariables() {
      return {
        '--theme': this.theme
      };
    }

  },
  watch: {
    stateType: {
      handler(newType) {
        if (newType !== 'loading') {
          this.changeToStateByType(newType);
        }
      },

      immediate: true
    },
    notificationsType: {
      handler(newType) {
        this.changeToNotificationStateByType(newType);
      },

      immediate: true
    }
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlSignalButton",
      theme: tdlSignalButtonTheme
    });
    this.$root.$emit("update-locale-string", TdlSignalButtonLocale);
  },

  mounted() {
    if (this.openNotificationSettings) {
      this.$nextTick(() => {
        this.$refs.menuTrigger.click();
      });
    }
  },

  methods: {
    openMenu: function () {
      if (this.openNotificationSettingsInPosition) {
        this.$refs.menu.open();
      }
    },
    changeToNextState: function () {
      this.updateState(this.currentState === this.signalStates.length - 1 ? 0 : this.currentState + 1);
    },
    changeToStateByType: function (newType) {
      this.updateState(this.signalStates.findIndex(c => c.type === newType), false);
    },
    changeToNotificationStateByType: function (newType) {
      this.updateNotificationState(this.notificationStates.findIndex(c => c.type === newType), false);
    },
    updateState: function (newState, allowEmit = true) {
      if (newState !== -1 && newState !== this.currentState) {
        this.currentState = newState;

        if (this.signalStates[newState].type === 'no-signal') {
          this.currentNotificationState = 1;
          this.$emit('close');
        }

        this.$nextTick(this.updateMenuPosition);

        if (allowEmit) {
          this.$emit('state-update', this.signalStates[newState].type);
        }
      }
    },
    updateNotificationState: function (newState, allowEmit = true) {
      if (newState !== -1 && newState !== this.currentNotificationState) {
        this.currentNotificationState = newState;
        this.$nextTick(this.updateMenuPosition);

        if (allowEmit) {
          this.$emit('notifications-type-update', this.notificationStates[newState].type);
        }
      }
    },
    updateMenuPosition: function () {
      const verticalMenuOffset = 12;
      const defaultMenuOffset = 8;
      const menuWidth = 240;
      const menuHeight = 36;
      const buttonWidth = this.$refs.signalButton ? this.$refs.signalButton.getBoundingClientRect().width : 0;
      const menuTriggerWidth = this.$refs.menuTrigger ? this.$refs.menuTrigger.getBoundingClientRect().width : 0;
      this.menuPosition = {
        x: defaultMenuOffset - (buttonWidth - menuTriggerWidth) - (menuWidth - buttonWidth) / 2,
        y: menuHeight + verticalMenuOffset + defaultMenuOffset
      };
    },
    handleMenuClosed: function () {
      this.$emit('close');
      this.updateMenuPosition();
    },
    handleMenuOpened: function () {
      this.$emit('open');
    },
    aboutSignals: function () {
      this.$refs.menuTrigger.click();
      this.$emit('about-signals');
    }
  }
};

/* script */
const __vue_script__ = TdlSignalButton;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div" + _vm._ssrClass(null, ['tdl-signal-button', _vm.themeClass, {
    'tdl-signal-button--simple': _vm.currentState === 0,
    'tdl-signal-button--fixed-width': _vm.styleProps.fixedWidth
  }]) + _vm._ssrStyle(null, _vm.cssVariables, null) + ">", "</div>", [_c('md-ink-ripple'), _vm._ssrNode(" "), _c('md-button', {
    class: ['md-raised tdl-signal-button__signal-button', {
      'md-primary tdl-signal-button__signal-button--simple': _vm.currentState === 0,
      'tdl-signal-button--inverted': _vm.styleProps.inverted,
      'tdl-signal-button__signal-button--elevated': _vm.styleProps.elevated && _vm.currentState !== 0
    }],
    attrs: {
      "disabled": _vm.isLoading,
      "theme": _vm.theme
    },
    on: {
      "click": _vm.changeToNextState
    }
  }, [_c('md-tooltip', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tooltipText && !_vm.isLoading,
      expression: "tooltipText && !isLoading"
    }],
    staticClass: "tdl-signal-button__tooltip"
  }, [_vm._v("\n        " + _vm._s(_vm.tooltipText) + "\n      ")]), _vm._v(" "), !_vm.hasSignal ? _c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiHumanGreetingIcon
    }
  }) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.isLoading ? _vm.loadingState.buttonText : _vm.buttonText) + "\n    ")], 1), _vm._ssrNode(" "), _vm.hasSignal || _vm.openNotificationSettings ? _c('md-menu', {
    ref: "menu",
    staticClass: "tdl-signal-button__menu",
    attrs: {
      "md-size": "5",
      "md-offset-x": _vm.menuPosition.x,
      "md-offset-y": _vm.menuPosition.y,
      "md-transparent-backdrop": !_vm.openNotificationSettings,
      "md-close-on-select": _vm.closeOnSelect,
      "md-has-backdrop": _vm.hasBackdrop
    },
    on: {
      "open": _vm.handleMenuOpened,
      "close": _vm.handleMenuClosed,
      "menu-configured": _vm.openMenu
    }
  }, [_c('button', {
    ref: "menuTrigger",
    staticClass: "md-button tdl-signal-button__menu-container",
    class: [_vm.theme, {
      'tdl-signal-button__menu-container--elevated': _vm.styleProps.elevated && _vm.currentState !== 0
    }],
    attrs: {
      "md-menu-trigger": ""
    },
    on: {
      "click": function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('md-icon', {
    class: ['tdl-signal-button__menu-icon', {
      'tdl-signal-button__menu-icon--highlighted': _vm.notificationStates[_vm.currentNotificationState].iconHighlighted
    }],
    attrs: {
      "icon-svg": _vm.notificationStates[_vm.currentNotificationState].menuIcon
    }
  }), _vm._v(" "), _c('md-menu-content', {
    ref: "menuContent",
    staticClass: "tdl-menu-signal-content__menu",
    style: _vm.menuStyles
  }, [_vm.menuTitle && _vm.openNotificationSettings ? _c('span', {
    staticClass: "tdl-signal-button__menu-title"
  }, [_vm._v(_vm._s(_vm.menuTitle))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.notificationStates, function (notificationState, index) {
    return _c('md-menu-item', {
      key: index,
      class: ['tdl-signal-button__menu-item', {
        'tdl-signal-button__menu-item--selected': index === _vm.currentNotificationState
      }],
      on: {
        "click": function ($event) {
          return _vm.updateNotificationState(index);
        }
      }
    }, [_c('span', {
      staticClass: "md-body"
    }, [_c('md-icon', {
      class: ['tdl-signal-button__menu-icon', {
        'tdl-signal-button__menu-icon--highlighted': notificationState.iconHighlighted
      }],
      attrs: {
        "icon-svg": notificationState.menuIcon
      }
    }), _vm._v("\n              " + _vm._s(notificationState.menuTitle) + "\n            ")], 1)]);
  }), _vm._v(" "), _c('md-menu-item', {
    staticClass: "tdl-signal-button__menu-item--about-signals",
    on: {
      "click": function ($event) {
        return _vm.aboutSignals();
      }
    }
  }, [_c('a', {
    staticClass: "tdl-signal-button__link"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Learn more about signals")) + "\n            ")])])], 2)], 1)]) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-40b3606c_0", {
    source: ".tdl-menu-signal-content__menu{margin-left:-27px!important}.tdl-signal-button{position:relative;display:flex;width:-moz-fit-content;width:fit-content;min-width:120px!important;height:fit-content;margin:6px 8px}.tdl-signal-button:not(.tdl-signal-button--simple){min-width:-moz-fit-content;min-width:fit-content}.tdl-signal-button .md-button{position:unset!important;padding:0;margin:0;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)!important}.tdl-signal-button .md-button:hover:not([disabled]).md-raised{background-color:unset}.tdl-signal-button .md-ink-ripple{z-index:2}.tdl-signal-button__menu-container{position:relative;width:40px;padding:0;margin-left:0;min-width:0!important}.tdl-signal-button__menu{margin-left:5px;border-radius:2px}.tdl-signal-button__menu-icon{padding-bottom:2px}.tdl-signal-button__signal-button{transition:unset}.tdl-signal-button__signal-button:not(.tdl-signal-button__signal-button--simple){width:calc(100% - 40px);padding-left:16px;padding-right:16px}.tdl-signal-button__signal-button--simple{min-width:100%;padding-left:16px;padding-right:16px}.tdl-signal-button__trigger-icon{text-align:center;display:inline-block;margin-bottom:15px}.tdl-signal-button__trigger-icon:before{font-size:22px}.tdl-signal-button__menu-item .md-list-item-container{flex-direction:column!important;align-items:flex-start!important;justify-content:center!important;min-width:180px}.tdl-signal-button__menu-item--about-signals .tdl-signal-button__link{width:100%;height:100%;z-index:2;padding:0 16px;font-size:14px;text-transform:uppercase;text-decoration:none!important;pointer-events:none}.tdl-signal-button__menu-item--about-signals .md-button{padding:0!important}.tdl-signal-button__menu-title{margin-bottom:12px;margin-left:16px;margin-top:8px}.md-list-item .tdl-signal-button__menu-icon{margin-right:10px}.tdl-signal-button__tooltip{width:220px;height:auto!important;white-space:normal!important;text-align:center;padding:8px;font-size:12px}.tdl-signal-button__tooltip--items{margin:16px 0}.tdl-signal-button.tdl-signal-button--fixed-width{width:auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-40b3606c";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
