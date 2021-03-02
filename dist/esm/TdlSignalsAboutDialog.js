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

var TdlSignalsAboutDialogLocale = {
  "en": {
    "What are signals?": "What are signals?",
    "Signals are a way of compiling a list of people you’ll consider working with.": "Signals are a way of compiling a list of people you’ll consider working with.",
    "Others can signal you as well.": "Others can signal you as well.",
    "By signaling a person or organization you notify them that you’ll consider working with them. Thus:": "By signaling a person or organization you notify them that you’ll consider working with them. Thus:",
    "You will be notified of all or relevant jobs they post or when they’re open to new opportunities (your choice).": "You will be notified of all or relevant jobs they post or when they’re open to new opportunities (your choice).",
    "When they search for talent, they’ll notice you signaled them.": "When they search for talent, they’ll notice you signaled them.",
    "Your signals are only visible to people you have signaled. You can, however, share them with others to collaborate.": "Your signals are only visible to people you have signaled. You can, however, share them with others to collaborate.",
    "share them with others to collaborate.": "share them with others to collaborate.",
    "55% of jobs are filled via referrals": "55% of jobs are filled via referrals",
    ". With Signals, Torre makes it easy for you.": ". With Signals, Torre makes it easy for you.",
    "SIGNALS TUTORIAL": "SIGNALS TUTORIAL"
  },
  "es": {
    "What are signals?": "¿Qué son los signals?",
    "Signals are a way of compiling a list of people you’ll consider working with.": "Los signals son una forma de reunir una lista de personas con las que considerarías trabajar.",
    "Others can signal you as well.": "Otros te pueden enviar signals también.",
    "By signaling a person or organization you notify them that you’ll consider working with them. Thus:": "Cuando envías un signal a una persona u organización, los notificas sobre tu interés de trabajar con ellos. Así: ",
    "You will be notified of all or relevant jobs they post or when they’re open to new opportunities (your choice).": "Serás notificado de todos los trabajos relevantes que ellos publiquen o cuando ellos estén abiertos a nuevas oportunidades (tú eliges).",
    "When they search for talent, they’ll notice you signaled them.": "Cuando ellos busquen talento, tendrán en cuenta que tú les has enviado un signal.",
    "Your signals are only visible to people you have signaled. You can, however, share them with others to collaborate.": "Tus signals solo los pueden ver a las personas a las que se los has enviado. Sin embargo, tú puedes compartirlos con otros para colaborar.",
    "55% of jobs are filled via referrals": "55% de las vacantes para empleos se llenan a partir de referidos",
    ". With Signals, Torre makes it easy for you.": ". Con los Signals, Torre hace todo más fácil para ti.",
    "SIGNALS TUTORIAL": "TUTORIAL DE SIGNALS"
  }
};

const TdlSignalsAboutDialog = {
  name: 'tdl-signals-about-dialog',
  components: {
    MdButton,
    TdlFullscreendialog
  },

  created() {
    this.$root.$emit("update-locale-string", TdlSignalsAboutDialogLocale);
  },

  props: {
    signalsOnboardingLink: {
      type: String
    },
    signalsOnboardingFinished: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    open() {
      this.$refs.dialog.openDialog();
    },

    close() {
      this.$refs.dialog.closeDialog();
    },

    handleClose() {
      this.$emit('close');
    },

    goToTutorial() {
      window.location.href = this.signalsOnboardingLink;
    }

  }
};

/* script */
const __vue_script__ = TdlSignalsAboutDialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('tdl-fullscreendialog', {
    ref: "dialog",
    staticClass: "liquid-dialog signals-dialog",
    attrs: {
      "dialog-alias": "signals-about",
      "dialog-ok-text": "",
      "dialog-title": _vm.$t('What are signals?'),
      "plain-view": "",
      "closable": "",
      "dialog-submit-button": "hidden"
    },
    on: {
      "cancel": _vm.close,
      "on-close": _vm.handleClose
    }
  }, [_c('div', {
    staticClass: "signals-dialog__container"
  }, [_c('img', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload"
    }],
    staticClass: "signals-dialog__image",
    attrs: {
      "data-url": "https://s3-us-west-2.amazonaws.com/bio-media/static/signals-about.png",
      "alt": "Signals"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "md-subheading signals-dialog__text"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Signals are a way of compiling a list of people you’ll consider working with.")) + "\n      " + _vm._s(_vm.$t("Others can signal you as well.")) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading signals-dialog__text"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("By signaling a person or organization you notify them that you’ll consider working with them. Thus:")) + "\n    ")]), _vm._v(" "), _c('ul', {
    staticClass: "md-subheading signals-dialog__text"
  }, [_c('li', [_vm._v("\n        " + _vm._s(_vm.$t("You will be notified of all or relevant jobs they post or when they’re open to new opportunities (your choice).")) + "\n      ")]), _vm._v(" "), _c('li', [_vm._v("\n        " + _vm._s(_vm.$t("When they search for talent, they’ll notice you signaled them.")) + "\n      ")]), _vm._v(" "), _c('li', [_vm._v("\n        " + _vm._s(_vm.$t("Your signals are only visible to people you have signaled. You can, however, share them with others to collaborate.")) + "\n      ")])]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading signals-dialog__text"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("55% of jobs are filled via referrals")) + "\n      "), _c('a', {
    attrs: {
      "href": "https://zerista.s3.amazonaws.com/item_files/ab2f/attachments/458970/original/source_of_hire_2018_pdf.pdf",
      "target": "_blank"
    }
  }, [_c('sup', [_vm._v(" 1 ")])]), _vm._v("\n      " + _vm._s(_vm.$t(". With Signals, Torre makes it easy for you.")) + "\n    ")]), _vm._v(" "), !_vm.signalsOnboardingFinished ? _c('div', {
    staticClass: "signals-dialog__cta-container"
  }, [_c('md-button', {
    staticClass: "signals-dialog__call-to-action md-primary md-raised",
    on: {
      "click": _vm.goToTutorial
    }
  }, [_vm._v(_vm._s(_vm.$t("SIGNALS TUTORIAL")))])], 1) : _vm._e()])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4f43c318_0", {
    source: ".signals-dialog__container{padding:0 16px 40px}.signals-dialog__image{display:block;max-width:80%;height:auto;margin:24px auto}.signals-dialog__text{margin-top:1em!important;margin-bottom:1em!important}.signals-dialog__cta-container{width:100%;align-content:center;text-align:center}.signals-dialog__call-to-action{display:block;align-self:center;margin:0 auto}.signals-dialog .top-actions-toolbar .md-button{min-width:0;padding-left:8px;padding-right:8px}.signals-dialog .top-actions-toolbar .md-button:last-child{margin:0}",
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
