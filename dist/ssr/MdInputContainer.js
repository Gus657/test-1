'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
var isArray = require('./isArray-6fbc293c.js');

var mdInputContainerTheme = ".THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused) {\n  border-color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused) .outlined-notched__leading, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused) .outlined-notched__notch, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused) .outlined-notched__trailing {\n  border-color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover {\n  border-color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover label, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover > .md-icon {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover .outlined-notched__leading, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover .outlined-notched__notch, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused):hover .outlined-notched__trailing {\n  border-color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid {\n  border-color: ACCENT-WARN;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .outlined-notched__leading, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .outlined-notched__notch, .THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .outlined-notched__trailing {\n  border-color: ACCENT-WARN;\n}\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid label,\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid input,\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid textarea,\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .md-error,\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .md-count,\n.THEME_NAME.md-input-container:not(.md-input-disabled):not(.md-input-focused).md-input-invalid .md-icon:not(.md-icon-delete) {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-input-container.md-input-focused {\n  border-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-input-container.md-input-focused .outlined-notched__leading, .THEME_NAME.md-input-container.md-input-focused .outlined-notched__notch, .THEME_NAME.md-input-container.md-input-focused .outlined-notched__trailing {\n  border-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-input-container.md-input-disabled {\n  border-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-input-container.md-input-disabled .outlined-notched__leading, .THEME_NAME.md-input-container.md-input-disabled .outlined-notched__notch, .THEME_NAME.md-input-container.md-input-disabled .outlined-notched__trailing {\n  border-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-input-container.md-input-disabled label,\n.THEME_NAME.md-input-container.md-input-disabled input,\n.THEME_NAME.md-input-container.md-input-disabled textarea,\n.THEME_NAME.md-input-container.md-input-disabled .md-error,\n.THEME_NAME.md-input-container.md-input-disabled .md-count,\n.THEME_NAME.md-input-container.md-input-disabled .md-icon:not(.md-icon-delete) {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-input-container label {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container input, .THEME_NAME.md-input-container textarea {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container ::-webkit-input-placeholder,\n.THEME_NAME.md-input-container :-moz-placeholder,\n.THEME_NAME.md-input-container ::-moz-placeholder,\n.THEME_NAME.md-input-container :-ms-input-placeholder {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container.md-input-focused.md-input-inline label {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-input-container.md-input-focused input,\n.THEME_NAME.md-input-container.md-input-focused textarea {\n  color: ACCENT-PRIMARY;\n  text-shadow: 0 0 0 TEXT-TITLE;\n  -webkit-text-fill-color: transparent;\n}\n.THEME_NAME.md-input-container.md-input-focused label,\n.THEME_NAME.md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-input-container .md-icon:not(.md-icon-delete) {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container.md-has-value input, .THEME_NAME.md-input-container.md-has-value textarea {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container.md-has-password .md-toggle-password {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container.md-clearable.md-input-focused .md-clear-input {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-input-container.md-clearable .md-clear-input {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-input-container.md-clearable .md-clear-input .md-ink-ripple {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after {\n  color: TEXT-TITLE;\n}";

//
const MdInputContainer = {
  name: 'md-input-container',
  components: {
    MdButton,
    MdIcon
  },
  props: {
    mdInline: Boolean,
    mdHasPassword: Boolean,
    mdClearable: Boolean,
    mdSimple: Boolean,
    mdClear: Boolean
  },

  data() {
    return {
      value: '',
      input: false,
      inputInstance: null,
      showPassword: false,
      enableCounter: false,
      hasSelect: false,
      hasPlaceholder: false,
      hasFile: false,
      isDisabled: false,
      isRequired: false,
      isFocused: false,
      counterLength: 0,
      inputLength: 0,
      mdiCloseIcon: js.mdiClose,
      mdiEyeIcon: js.mdiEye,
      mdiEyeOffIcon: js.mdiEyeOff
    };
  },

  watch: {
    inputInstance: {
      handler(newInstanceVal) {
        if (newInstanceVal) {
          this.evaluateChild();
        }
      }

    }
  },
  computed: {
    hasValue() {
      if (isArray.isArray(this.value)) {
        return this.value.length > 0;
      }

      return Boolean(this.value);
    },

    classes() {
      return {
        'md-input-inline': this.mdInline,
        'md-has-password': this.mdHasPassword,
        'md-clearable': this.mdClearable,
        'md-has-select': this.hasSelect,
        'md-has-counter': this.enableCounter,
        'md-has-file': this.hasFile,
        'md-has-value': this.hasValue,
        'md-has-label': !!this.$slots.label,
        'md-input-placeholder': this.hasPlaceholder,
        'md-input-disabled': this.isDisabled,
        'md-input-required': this.isRequired,
        'md-input-focused': this.isFocused,
        'md-input-container--simple': this.mdSimple,
        'md-input-container--clear': this.mdClear
      };
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdInputContainer",
      theme: mdInputContainerTheme
    });
  },

  methods: {
    isInput() {
      return this.input && this.input.tagName.toLowerCase() === 'input';
    },

    togglePasswordType() {
      if (this.isInput()) {
        if (this.input.type === 'password') {
          this.input.type = 'text';
          this.showPassword = true;
        } else {
          this.input.type = 'password';
          this.showPassword = false;
        }

        this.input.focus();
      }
    },

    clearInput() {
      this.inputInstance.$el.value = '';
      this.inputInstance.$emit('input', '');
      this.setValue('');
    },

    setValue(value) {
      this.value = value;
    },

    evaluateChild() {
      this.$nextTick(() => {
        this.input = this.$el.querySelectorAll('input, textarea, select, .md-file')[0];
        this.$nextTick(() => {
          if (!this.input) {
            this.$destroy();
            throw new Error('Missing input/select/textarea inside md-input-container');
          }
        });
      });
    }

  }
};

/* script */
const __vue_script__ = MdInputContainer;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-theme-dark md-input-container",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default"), _vm._ssrNode(" "), _vm.mdInline && _vm.$slots.label ? _vm._ssrNode("<label>", "</label>", [_vm._t("label")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"outlined-notched\">", "</div>", [_vm._ssrNode("<div class=\"outlined-notched__leading\"></div> "), _vm._ssrNode("<div class=\"outlined-notched__notch\">", "</div>", [!_vm.mdInline && _vm.$slots.label ? _vm._ssrNode("<label>", "</label>", [_vm._t("label")], 2) : _vm._e()]), _vm._ssrNode(" <div class=\"outlined-notched__trailing\"></div>")], 2), _vm._ssrNode(" " + (_vm.enableCounter ? "<span class=\"md-count\">" + _vm._ssrEscape(_vm._s(_vm.inputLength) + " / " + _vm._s(_vm.counterLength)) + "</span>" : "<!---->") + " "), _vm.mdHasPassword ? _c('md-button', {
    staticClass: "md-icon-button md-toggle-password",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.togglePasswordType($event);
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.showPassword ? _vm.mdiEyeOffIcon : _vm.mdiEyeIcon
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.mdClearable && _vm.hasValue ? _c('md-button', {
    staticClass: "md-icon-button md-clear-input",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-7dffda91_0", {
    source: ".md-input-container{width:100%;min-height:46px;margin:16px 0 30px;display:flex;position:relative}.md-input-container .outlined-notched{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.md-input-container .outlined-notched__leading,.md-input-container .outlined-notched__notch,.md-input-container .outlined-notched__trailing{border:1px solid;pointer-events:none;text-align:left;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container .outlined-notched__leading{border-radius:4px 0 0 4px;border-right:none;width:12px}.md-input-container .outlined-notched__notch{border-right:none;border-left:none;max-width:100%;max-width:calc(100% - 24px)}.md-input-container .outlined-notched__trailing{border-radius:0 4px 4px 0;border-left:none;flex-grow:1}.md-input-container.md-input-container--clear,.md-input-container.md-input-container--simple{border-bottom:1px solid}.md-input-container.md-input-container--clear.md-has-value label,.md-input-container.md-input-container--clear.md-input-focused label,.md-input-container.md-input-container--simple.md-has-value label,.md-input-container.md-input-container--simple.md-input-focused label{top:-8px}.md-input-container.md-input-container--clear .outlined-notched__leading,.md-input-container.md-input-container--clear .outlined-notched__notch,.md-input-container.md-input-container--clear .outlined-notched__trailing,.md-input-container.md-input-container--simple .outlined-notched__leading,.md-input-container.md-input-container--simple .outlined-notched__notch,.md-input-container.md-input-container--simple .outlined-notched__trailing{border:none!important}.md-input-container.md-input-container--clear{border-color:transparent!important;margin:0}.md-input-container.md-input-container--simple input{padding-bottom:0;padding-left:0}.md-input-container.md-input-container--simple label{left:-12px}.md-input-container.md-input-focused .outlined-notched__leading,.md-input-container.md-input-focused .outlined-notched__notch,.md-input-container.md-input-focused .outlined-notched__trailing{border:2px solid}.md-input-container.md-input-focused .outlined-notched__leading{border-right:none}.md-input-container.md-input-focused .outlined-notched__notch{border-right:none;border-left:none}.md-input-container.md-input-focused .outlined-notched__trailing{border-left:none}.md-input-container.md-has-label:not(.md-input-focused) ::-webkit-input-placeholder{color:transparent}.md-input-container.md-has-label:not(.md-input-focused) :-moz-placeholder{color:transparent}.md-input-container.md-has-label:not(.md-input-focused) ::-moz-placeholder{color:transparent}.md-input-container.md-has-label:not(.md-input-focused) :-ms-input-placeholder{color:transparent}.md-input-container.md-has-counter .md-error{width:calc(100% - 60px)}.md-input-container label:not(.md-radio-label){display:inline-block;position:relative;max-width:100%;font-size:16px;left:4px;right:initial;top:45%;transform:translateY(-50%);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:150ms}.md-input-container input{width:100%}.md-input-container .md-menu,.md-input-container input,.md-input-container textarea{display:flex;padding:6px 16px 8px;border:none!important;background-color:transparent;z-index:1;flex:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;font-family:inherit;font-size:16px;line-height:32px;resize:none}.md-input-container .md-menu:focus,.md-input-container input:focus,.md-input-container textarea:focus{outline:0}.md-input-container ::-webkit-input-placeholder{font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container :-moz-placeholder{font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container ::-moz-placeholder{font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container :-ms-input-placeholder{font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container>.md-icon{margin-right:16px;margin-left:16px}.md-input-container>.md-icon+input,.md-input-container>.md-icon+textarea{padding-left:0}.md-input-container:not(.md-input-focused):not(.md-has-value)>.md-icon~.outlined-notched label{left:36px}.md-input-container .md-count,.md-input-container .md-error{height:20px;position:absolute;left:16px;bottom:-20px;font-size:12px}.md-input-container .md-error{display:block!important;width:calc(100% - 22px);opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.md-input-container .md-count{left:initial;right:0;opacity:.54}.md-input-container .md-autocomplete,.md-input-container .md-autocomplete .md-menu,.md-input-container .md-autocomplete .md-menu .md-input{width:100%}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:-1px;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value.md-has-label .outlined-notched__notch,.md-input-container.md-input-focused.md-has-label .outlined-notched__notch{border-right:none;border-left:none;border-top:none;padding:1px 8px 0 0}.md-input-container.md-input-inline label{position:absolute;left:16px;pointer-events:none}.md-input-container.md-input-inline.md-has-value label,.md-input-container.md-input-inline.md-input-focused label{font-size:16px;top:50%}.md-input-container.md-input-inline.md-has-value .outlined-notched__notch,.md-input-container.md-input-inline.md-input-focused .outlined-notched__notch{border-right:none;border-left:none;padding:0}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-clearable input,.md-input-container.md-clearable textarea,.md-input-container.md-has-password input,.md-input-container.md-has-password textarea{padding-right:48px}.md-input-container.md-clearable .md-button,.md-input-container.md-has-password .md-button{z-index:2;position:absolute!important;left:initial;right:0;top:50%;transform:translateY(-50%)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translate3d(0,0,0)}.md-input-container.md-input-required label:after{top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-7dffda91";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
