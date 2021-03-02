'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
require('./MdIcon.js');
require('@mdi/js');
require('./transitionEndEventName-137bd43f.js');
require('./MdDialog.js');
require('./MdDialogActions.js');
require('./MdDialogContent.js');
require('./MdDialogTitle.js');
require('./MdSpinner.js');
require('./MdWhiteframe.js');
require('./MdToolbar.js');
require('./TdlOverlay.js');
var TdlFullscreendialog = require('./TdlFullscreendialog.js');

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

const __vue_module_identifier__ = "data-v-831b0f5c";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
