import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdCheckbox from './MdCheckbox.js';
import MdSwitch from './MdSwitch.js';

var tdlPreferenceSelectorLocale = {
  "en": {
    "Private": "Private",
    "(hidden from others)": "(hidden from others)"
  },
  "es": {
    "Private": "Privado",
    "(hidden from others)": "(oculto de los demás)"
  }
};

var TdlPreferenceSelectorTheme = ".THEME_NAME .tdl-preference-selector__caption {\n  color: TEXT-DEFAULT !important;\n}";

const TdlPreferenceSelector = {
  name: 'tdl-preference-selector',
  components: {
    MdCheckbox,
    MdSwitch
  },
  props: {
    preference: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      active: false,
      private: false
    };
  },
  watch: {
    preference: {
      handler: function (newValue) {
        if (newValue) {
          this.active = newValue.active;
          this.private = !!newValue.private;
        }
      },
      immediate: true
    },
    active: function (newValue) {
      if (!newValue && this.private !== undefined) {
        this.private = false;
      }

      this.emitData();
    },
    private: function () {
      this.emitData();
    }
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlPreferenceSelector",
      theme: TdlPreferenceSelectorTheme
    });
    this.$root.$emit("update-locale-string", tdlPreferenceSelectorLocale);
  },

  methods: {
    emitData: function () {
      this.$emit('preference-updated', {
        active: this.active,
        private: this.private
      });
    }
  }
};

/* script */
const __vue_script__ = TdlPreferenceSelector;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-preference-selector",
    class: [_vm.themeClass]
  }, [_c('md-checkbox', {
    staticClass: "md-primary md-subheading-1",
    attrs: {
      "name": "active"
    },
    model: {
      value: _vm.active,
      callback: function ($$v) {
        _vm.active = $$v;
      },
      expression: "active"
    }
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('md-switch', {
    staticClass: "tdl-preference-selector__switch md-primary md-subheading-1",
    attrs: {
      "name": "private",
      "disabled": !_vm.active
    },
    model: {
      value: _vm.private,
      callback: function ($$v) {
        _vm.private = $$v;
      },
      expression: "private"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Private")) + " "), _c('span', {
    staticClass: "tdl-preference-selector__caption"
  }, [_vm._v(_vm._s(_vm.$t("(hidden from others)")))])])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-63828802_0", {
    source: ".tdl-preference-selector{display:flex;flex-direction:column;height:fit-content}.tdl-preference-selector>*{margin-top:8px!important;margin-bottom:8px!important}.tdl-preference-selector__switch{margin-left:30px!important}.tdl-preference-selector .md-checkbox-label:first-letter{text-transform:uppercase}",
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
