'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdBackdrop.js');
var isArray = require('./isArray-6fbc293c.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdList.js');
var MdMenu = require('./MdMenu.js');
var MdMenuContent = require('./MdMenuContent.js');

var mdSelectTheme = ".THEME_NAME.md-select:after {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-select.md-disabled label,\n.THEME_NAME.md-select.md-disabled span,\n.THEME_NAME.md-select.md-disabled input,\n.THEME_NAME.md-select.md-disabled textarea {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-select-content .md-menu-item.md-selected, .THEME_NAME.md-select-content .md-menu-item.md-checked {\n  color: ACCENT-PRIMARY;\n}";

//
const MdSelect = {
  name: 'md-select',
  components: {
    MdMenu,
    MdMenuContent
  },
  props: {
    name: String,
    id: String,
    required: Boolean,
    multiple: Boolean,
    value: [String, Boolean, Number, Array],
    disabled: Boolean,
    placeholder: String,
    mdMenuClass: String,
    mdMenuOptions: Object,
    blockScroll: {
      type: Boolean,
      default: false
    }
  },
  mixins: [mixin.theme],

  data() {
    return {
      lastSelected: null,
      selectedValue: null,
      selectedText: null,
      multipleOptions: {},
      options: {},
      optionsAmount: 0
    };
  },

  computed: {
    classes() {
      return {
        'md-disabled': this.disabled,
        'md-select-icon': this.hasIcon
      };
    },

    contentClasses() {
      if (this.multiple) {
        return 'md-multiple ' + this.mdMenuClass;
      }

      return this.mdMenuClass;
    },

    hasIcon() {
      return this.$slots['icon'];
    },

    valueStyle() {
      return this.hasIcon ? {
        display: 'none'
      } : {};
    }

  },
  watch: {
    value(value) {
      this.setTextAndValue(value);

      if (this.multiple) {
        this.selectOptions(value);
      }
    },

    disabled() {
      this.setParentDisabled();
    },

    required() {
      this.setParentRequired();
    },

    placeholder() {
      this.setParentPlaceholder();
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdSelect",
      theme: mdSelectTheme
    });
  },

  methods: {
    changeValue(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.$emit('selected', value);
    },

    getSingleValue(value) {
      let output = {};
      Object.keys(this.options).forEach(index => {
        const options = this.options[index];

        if (options.value === value) {
          output.value = value;
          output.text = options.$refs.item.textContent, output.el = options.$refs.item;
        }
      });
      return output;
    },

    getMultipleValue(modelValue) {
      if (isArray.isArray(this.value)) {
        let outputText = [];
        modelValue.forEach(value => {
          Object.keys(this.options).forEach(index => {
            const options = this.options[index];

            if (options.value === value) {
              let text = options.$refs.item.textContent;
              this.multipleOptions[index] = {
                value,
                text
              };
              outputText.push(text);
            }
          });
        });
        return {
          value: modelValue,
          text: outputText.join(', ')
        };
      }

      return {};
    },

    onOpen() {
      if (this.lastSelected) {
        this.lastSelected.scrollIntoViewIfNeeded(true);
      }

      this.disableScrollIfNeeded();
      this.$emit('opened');
    },

    handleClose() {
      this.enableScrollIfNeeded();
      this.$emit('closed');
    },

    removeChild(index) {
      this.optionsAmount--;
      const selection = Object.assign({}, this.options[index]);
      delete this.options[index];
      delete this.multipleOptions[index];

      if (this.multiple) {
        const element = this.selectedValue.find(el => el.name === selection.$refs.item.textContent.trim());
        const selectionIndex = this.selectedValue.indexOf(element);

        if (selectionIndex !== -1) {
          this.selectedValue.splice(selectionIndex, 1);
        }
      }
    },

    setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },

    setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },

    setParentPlaceholder() {
      if (this.parentContainer) {
        this.parentContainer.hasPlaceholder = !!this.placeholder;
      }
    },

    selectOptions(modelValue) {
      const optionsArray = Object.keys(this.options).map(el => this.options[el]);

      if (optionsArray && optionsArray.length) {
        let selectedOptions = optionsArray.filter(el => modelValue.includes(el.value));
        let unselectedOptions = optionsArray.filter(el => !modelValue.includes(el.value));
        selectedOptions.forEach(el => {
          el.check = true;
        });
        unselectedOptions.forEach(el => {
          el.check = false;
        });
      }
    },

    setTextAndValue(modelValue) {
      const output = this.multiple ? this.getMultipleValue(modelValue) : this.getSingleValue(modelValue);
      this.selectedValue = output.value;
      this.selectedText = output.text;
      this.lastSelected = output.el;

      if (this.parentContainer) {
        this.parentContainer.setValue(this.selectedText);
      }
    },

    selectMultiple(index, value, text) {
      this.$nextTick(() => {
        let values = [];
        this.multipleOptions[index] = {
          value,
          text
        };

        for (let key in this.multipleOptions) {
          if (this.multipleOptions.hasOwnProperty(key) && this.multipleOptions[key].value) {
            values.push(this.multipleOptions[key].value);
          }
        }

        this.changeValue(values);
      });
    },

    selectOption(value, text, el) {
      this.lastSelected = el;
      this.selectedText = text;
      this.setTextAndValue(value);
      this.changeValue(value);
    },

    disableScrollIfNeeded() {
      if (this.blockScroll) {
        document.body.classList.add('scroll-blocked');
      }
    },

    enableScrollIfNeeded() {
      if (this.blockScroll) {
        document.body.classList.remove('scroll-blocked');
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentContainer = getClosestVueParent.getClosestVueParent(this.$parent, 'md-input-container');

      if (this.parentContainer) {
        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.parentContainer.hasSelect = true;
      }

      this.setTextAndValue(this.value);
    });
  },

  beforeDestroy() {
    this.enableScrollIfNeeded();

    if (this.parentContainer) {
      this.parentContainer.setValue('');
      this.parentContainer.hasSelect = false;
    }
  }

};

/* script */
const __vue_script__ = MdSelect;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-select",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-menu', _vm._b({
    attrs: {
      "md-close-on-select": !_vm.multiple
    },
    on: {
      "open": _vm.onOpen,
      "close": _vm.handleClose
    }
  }, 'md-menu', _vm.mdMenuOptions, false), [_vm._t("icon"), _vm._v(" "), _c('span', {
    ref: "value",
    staticClass: "md-select-value",
    style: _vm.valueStyle,
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_vm._v("\n      " + _vm._s(_vm.selectedText || _vm.placeholder) + "\n    ")]), _vm._v(" "), _c('md-menu-content', {
    staticClass: "md-select-content",
    class: [_vm.themeClass, _vm.contentClasses]
  }, [_vm._t("default")], 2)], 2), _vm._ssrNode(" <select" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("required", _vm.required) + _vm._ssrAttr("disabled", _vm.disabled) + " tabindex=\"-1\">" + (!_vm.multiple ? "<option selected=\"selected\"" + _vm._ssrAttr("value", _vm.selectedValue) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.selectedText) + "\n    ") + "</option>" : "<!---->") + " " + _vm._ssrList(_vm.multipleOptions, function (option, index) {
    return option.value ? "<option selected=\"selected\"" + _vm._ssrAttr("value", option.value) + ">" + _vm._ssrEscape("\n      " + _vm._s(option.text) + "\n    ") + "</option>" : "<!---->";
  }) + "</select>")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4861e8b4_0", {
    source: "@charset \"UTF-8\";.md-select{width:100%;min-width:128px;position:relative}.md-select:focus{outline:0}.md-select:not(.md-select-icon):after{margin-top:2px;margin-right:8px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .15s linear;content:\"▼\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;user-select:none;user-drag:none}.md-select select{position:absolute;left:-999em}.md-select .md-menu{width:100%;height:100%;display:block;position:relative}.md-select .md-select-value{width:100%;height:32px;padding-right:24px;display:block;cursor:pointer;overflow:hidden;position:relative;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-subheader{text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-option[disabled]{pointer-events:none;user-select:none;user-drag:none}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-4861e8b4";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
