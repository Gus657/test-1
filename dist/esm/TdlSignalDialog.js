import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import './MdIcon.js';
import '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import './MdDialog.js';
import './MdDialogActions.js';
import './MdDialogContent.js';
import './MdDialogTitle.js';
import './MdSpinner.js';
import './MdWhiteframe.js';
import './MdToolbar.js';
import './TdlOverlay.js';
import TdlFullscreendialog from './TdlFullscreendialog.js';

var TdlSignalDialogLocale = {
  "en": {
    "When someone signals you, they're telling you they'd consider working with you.": "When someone signals you, they're telling you they'd consider working with you.",
    "Learn how signals work": "Learn how signals work",
    "Go to your signals dashboard": "Go to your signals dashboard"
  },
  "es": {
    "When someone signals you, they're telling you they'd consider working with you.": "Cuando alguien te envía un signal, te está diciendo que consideraría trabajar contigo.",
    "Learn how signals work": "Aprende como funcionan los signals",
    "Go to your signals dashboard": "Ve a tu tablero de signals"
  }
};

const TdlSignalDialog = {
  name: 'tdl-signal-dialog',
  components: {
    MdButton,
    TdlFullscreendialog
  },
  props: {
    firstSignalSent: {
      type: Boolean,
      required: true
    },
    urls: {
      type: Object,
      required: true
    }
  },

  created() {
    this.$root.$emit("update-locale-string", TdlSignalDialogLocale);
  },

  computed: {
    mainAction() {
      return {
        text: this.firstSignalSent ? this.$t("Go to your signals dashboard") : this.$t("Learn how signals work"),
        action: this.firstSignalSent ? this.goToSignals : this.goToSignalsOnboarding
      };
    }

  },
  methods: {
    open() {
      this.$refs.dialog.openDialog();
    },

    close() {
      this.$emit('close');
    },

    goToSignalsOnboarding() {
      window.location.href = `${this.urls.VUE_APP_HEDA_URL}/signals/onboarding`;
    },

    goToSignals() {
      window.location.href = `${this.urls.VUE_APP_HEDA_URL}/signals`;
    }

  }
};

/* script */
const __vue_script__ = TdlSignalDialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('tdl-fullscreendialog', {
    ref: "dialog",
    attrs: {
      "dialog-title": _vm.$t('Signals'),
      "plain-view": "",
      "dialog-submit-button": "hidden"
    },
    on: {
      "on-close": _vm.close,
      "cancel": _vm.close
    }
  }, [_c('div', {
    staticClass: "signal-dialog"
  }, [_c('p', {
    staticClass: "md-subtitle signal-dialog__description"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("When someone signals you, they're telling you they'd consider working with you.")) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "signal-dialog__actions"
  }, [_c('md-button', {
    staticClass: "md-primary md-raised",
    on: {
      "click": _vm.mainAction.action
    }
  }, [_vm._v("\n        " + _vm._s(_vm.mainAction.text) + "\n      ")])], 1)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-831b0f5c_0", {
    source: ".signal-dialog[data-v-831b0f5c]{margin:8px 8px 30px}.signal-dialog__description[data-v-831b0f5c]{margin-bottom:20px}.signal-dialog__actions[data-v-831b0f5c]{text-align:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-831b0f5c";
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
