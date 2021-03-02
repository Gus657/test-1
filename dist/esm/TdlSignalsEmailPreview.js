import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
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
import TdlEntityPicture from './TdlEntityPicture.js';
import './TdlOverlay.js';
import TdlFullscreendialog from './TdlFullscreendialog.js';
import { t as textHelper } from './textHelper-5f0a5b25.js';

var TdlSignalsEmailPreviewLocale = {
  "en": {
    "Preview": "Preview",
    "signaled you": "signaled you",
    "may consider working with you)": "may consider working with you)",
    "SIGNAL BACK": "SIGNAL BACK",
    "VIEW GENOME": "VIEW GENOME"
  },
  "es": {
    "Preview": "Vista previa",
    "signaled you": "en envió un signal",
    "may consider working with you)": "consideraría trabajar contigo)",
    "SIGNAL BACK": "DEVOLVER SIGNAL",
    "VIEW GENOME": "VER GENOMA"
  }
};

const TdlSignalsEmailPreview = {
  name: 'tdl-signals-email-preview',
  components: {
    TdlFullscreendialog,
    TdlEntityPicture,
    MdButton
  },
  mixins: [textHelper, theme],
  props: {
    dialogRouteQuery: {
      type: String,
      required: false
    },
    person: {
      type: Object,
      required: true
    }
  },

  created() {
    this.$root.$emit("update-locale-string", TdlSignalsEmailPreviewLocale);
  },

  mounted() {
    this.$nextTick(() => {
      this.$emit('preview-dialog-ready');
    });
  },

  methods: {
    openDialog: function () {
      this.$refs.signalsEmailPreviewDialog.openDialog();
    }
  }
};

/* script */
const __vue_script__ = TdlSignalsEmailPreview;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('tdl-fullscreendialog', {
    ref: "signalsEmailPreviewDialog",
    staticClass: "tdl-signals-email-preview",
    class: [_vm.themeClass],
    attrs: {
      "dialog-alias": _vm.dialogRouteQuery,
      "dialog-title": _vm.$t('Preview'),
      "dialog-ok-text": "",
      "dialog-submit-button": "hidden",
      "always-close": true,
      "plain-view": true
    },
    on: {
      "on-close": function ($event) {
        return _vm.$emit('preview-dialog-closed');
      },
      "cancel": function ($event) {
        return _vm.$emit('preview-dialog-closed');
      }
    }
  }, [_vm.person ? _c('div', [_c('div', {
    staticClass: "preview"
  }, [_c('tdl-entity-picture', {
    staticClass: "preview__avatar",
    attrs: {
      "shape": "hexagon",
      "default-margin": false,
      "entity": _vm.person,
      "borderWidth": 4,
      "size": 64
    }
  }), _vm._v(" "), _vm.person.name ? _c('p', {
    staticClass: "preview__signaler preview__paragraph"
  }, [_vm._v(_vm._s(_vm.person.name))]) : _vm._e(), _vm._v(" "), _vm.person.professionalHeadline ? _c('p', {
    staticClass: "preview__signaler-headline preview__paragraph md-caption"
  }, [_vm._v("\n        " + _vm._s(_vm.person.professionalHeadline))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "preview__signal-state preview__paragraph"
  }, [_vm._v(_vm._s(_vm.$t("signaled you")))]), _vm._v(" "), _c('p', {
    staticClass: "preview__signal-state-explanation preview__paragraph md-caption"
  }, [_vm._v("\n        (" + _vm._s(_vm.extractFirstWord(_vm.person.name)) + " " + _vm._s(_vm.$t("may consider working with you)")))]), _vm._v(" "), _c('md-button', {
    staticClass: "preview__call-to-action md-primary md-raised"
  }, [_vm._v(_vm._s(_vm.$t("SIGNAL BACK")))]), _vm._v(" "), _c('md-button', {
    staticClass: "preview__call-to-action md-raised"
  }, [_vm._v(_vm._s(_vm.$t("VIEW GENOME")))])], 1)]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-57d0d0c2_0", {
    source: ".tdl-signals-email-preview .preview[data-v-57d0d0c2]{display:block;width:80%;padding:8px 8px 32px;margin:64px auto;-webkit-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-moz-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-ms-transform:skew(0,6deg);-o-transform:skew(0,6deg);-moz-transform:skew(0,6deg);transform:skew(0,6deg);-webkit-transform:skew(0,6deg);user-select:none;cursor:default;pointer-events:none;overflow:hidden;text-align:center}.tdl-signals-email-preview .preview__avatar[data-v-57d0d0c2]{margin:0 auto 24px}.tdl-signals-email-preview .preview__paragraph[data-v-57d0d0c2]{display:block}.tdl-signals-email-preview .preview__signaler[data-v-57d0d0c2]{font-size:18px;font-weight:400;line-height:28px;display:block}.tdl-signals-email-preview .preview__signaler-headline[data-v-57d0d0c2]{margin:6px auto 8px}.tdl-signals-email-preview .preview__signal-state-explanation[data-v-57d0d0c2]{margin:0 auto 32px}.tdl-signals-email-preview .preview__call-to-action[data-v-57d0d0c2]{align-self:center;width:100%;min-width:94px;max-width:200px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-57d0d0c2";
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
