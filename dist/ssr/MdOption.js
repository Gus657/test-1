'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
require('./MdButton.js');
var MdCheckbox = require('./MdCheckbox.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');
require('./MdListItem.js');
var MdMenuItem = require('./MdMenuItem.js');

//
const MdOption = {
  name: 'md-option',
  components: {
    MdMenuItem,
    MdCheckbox
  },
  props: {
    value: [String, Boolean, Number, Object]
  },
  data: () => ({
    parentSelect: {},
    check: false,
    index: 0
  }),
  computed: {
    isSelected() {
      if (this.value && this.parentSelect.value) {
        let thisValue = this.value.toString();

        if (this.parentSelect.multiple) {
          return this.parentSelect.value.indexOf(thisValue) >= 0;
        }

        return this.value && this.parentSelect.value && thisValue === this.parentSelect.value.toString();
      }

      return false;
    },

    classes() {
      return {
        'md-selected': this.isSelected,
        'md-checked': this.check
      };
    }

  },
  methods: {
    isMultiple() {
      return this.parentSelect.multiple;
    },

    setParentOption() {
      if (!this.isMultiple()) {
        this.parentSelect.selectOption(this.value, this.$refs.item.textContent, this.$el);
      } else {
        this.check = !this.check;
      }
    },

    selectOption($event) {
      if (this.disabled) {
        return;
      }

      this.setParentOption();
      this.$emit('selected', $event);
    }

  },
  watch: {
    isSelected(selected) {
      if (this.isMultiple()) {
        this.check = selected;
      }
    },

    check(check) {
      if (check) {
        this.parentSelect.selectMultiple(this.index, this.value, this.$refs.item.textContent);
      } else {
        this.parentSelect.selectMultiple(this.index);
      }
    }

  },

  mounted() {
    this.parentSelect = getClosestVueParent.getClosestVueParent(this.$parent, 'md-select');
    this.parentContent = getClosestVueParent.getClosestVueParent(this.$parent, 'md-menu-content');

    if (!this.parentSelect) {
      throw new Error('You must wrap the md-option in a md-select');
    }

    this.parentSelect.optionsAmount++;
    this.index = this.parentSelect.optionsAmount;
    this.parentSelect.multipleOptions[this.index] = {};
    this.parentSelect.options[this.index] = this;

    if (this.isMultiple() && this.parentSelect.value && this.parentSelect.value.indexOf(this.value) >= 0 || this.parentSelect.value === this.value) {
      this.setParentOption();
    }
  },

  beforeDestroy() {
    if (this.parentSelect) {
      this.parentSelect.removeChild(this.index); // delete this.parentSelect.options[this.index];
      // delete this.parentSelect.multipleOptions[this.index];
      // delete this.parentSelect.selectedValue[this.index];
    }
  }

};

/* script */
const __vue_script__ = MdOption;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-menu-item', {
    staticClass: "md-option",
    class: _vm.classes,
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": _vm.selectOption
    }
  }, [_vm.parentSelect.multiple ? _c('md-checkbox', {
    staticClass: "md-primary",
    model: {
      value: _vm.check,
      callback: function ($$v) {
        _vm.check = $$v;
      },
      expression: "check"
    }
  }, [_c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)]) : _c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-6d3f6669";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

module.exports = __vue_component__;
