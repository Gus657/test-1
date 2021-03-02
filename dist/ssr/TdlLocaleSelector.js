'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
require('./transitionEndEventName-137bd43f.js');
var MdDialog = require('./MdDialog.js');
var MdDialogActions = require('./MdDialogActions.js');
var MdDialogContent = require('./MdDialogContent.js');
var MdDialogTitle = require('./MdDialogTitle.js');
var MdRadio = require('./MdRadio.js');

var tdlLocaleSelectorLocale = {
  "en": {
    "What language do you want to use Torre in?": "What language do you want to use Torre in?",
    "English (en)": "English (en)",
    "Spanish (es)": "Spanish (es)",
    "Save": "Save",
    "Language": "Language",
    "Cancel": "Cancel"
  },
  "es": {
    "What language do you want to use Torre in?": "¿En qué idioma quieres usar Torre?",
    "English (en)": "Inglés (en)",
    "Spanish (es)": "Español (es)",
    "Save": "Guardar",
    "Language": "Idioma",
    "Cancel": "Cancelar"
  }
};

const TdlLocaleSelector = {
  name: 'tdl-locale-selector',
  components: {
    MdDialog,
    MdDialogTitle,
    MdDialogContent,
    MdRadio,
    MdDialogActions,
    MdButton
  },
  props: {
    defaultLocale: {
      type: String,
      required: true
    },
    styleProps: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      localeSelected: ''
    };
  },

  created: function () {
    this.$root.$emit("update-locale-string", tdlLocaleSelectorLocale);
  },
  methods: {
    open() {
      this.localeSelected = this.$i18n && this.$i18n.locale ? this.$i18n.locale : this.defaultLocale;
      this.$refs.selectLocale.open();
    },

    close() {
      this.$refs.selectLocale.close();
    },

    handleLocaleSelection() {
      this.$emit('locale-selected', this.localeSelected);
      this.close();
    }

  }
};

/* script */
const __vue_script__ = TdlLocaleSelector;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-locale-selector"
  }, [_c('md-dialog', {
    ref: "selectLocale",
    style: _vm.styleProps
  }, [_c('md-dialog-title', [_vm._v(_vm._s(_vm.$t('Language')))]), _vm._v(" "), _c('md-dialog-content', [_c('div', {
    staticClass: "dialog-content"
  }, [_c('p', {
    staticClass: "md-subheading"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('What language do you want to use Torre in?')) + "\n        ")]), _vm._v(" "), _c('div', [_c('md-radio', {
    staticClass: "md-primary",
    attrs: {
      "id": "en",
      "name": "locales",
      "md-value": "en"
    },
    model: {
      value: _vm.localeSelected,
      callback: function ($$v) {
        _vm.localeSelected = $$v;
      },
      expression: "localeSelected"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('English (en)')) + "\n          ")]), _vm._v(" "), _c('md-radio', {
    staticClass: "md-primary",
    attrs: {
      "id": "es",
      "name": "locales",
      "md-value": "es"
    },
    model: {
      value: _vm.localeSelected,
      callback: function ($$v) {
        _vm.localeSelected = $$v;
      },
      expression: "localeSelected"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Spanish (es)')) + "\n          ")])], 1)])]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": _vm.close
    }
  }, [_vm._v(_vm._s(_vm.$t('Cancel')))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": _vm.handleLocaleSelection
    }
  }, [_vm._v(_vm._s(_vm.$t("Save")))])], 1)], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4054cfd7_0", {
    source: ".dialog-content[data-v-4054cfd7]{padding:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-4054cfd7";
/* module identifier */

const __vue_module_identifier__ = "data-v-4054cfd7";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
