'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var common = require('./common-5508bc58.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');
var autosize = _interopDefault(require('autosize'));

//
const MdTextarea = {
  name: 'md-textarea',
  mixins: [common.common],
  watch: {
    value() {
      this.$nextTick(() => autosize.update(this.$el));
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentContainer = getClosestVueParent.getClosestVueParent(this.$parent, 'md-input-container');

      if (!this.parentContainer) {
        this.$destroy();
        throw new Error('You should wrap the md-textarea in a md-input-container');
      }

      this.parentContainer.inputInstance = this;
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.handleMaxLength();
      this.updateValues();

      if (!this.$el.getAttribute('rows')) {
        this.$el.setAttribute('rows', '1');
      }

      autosize(this.$el);
      setTimeout(() => autosize.update(this.$el), 200);
    });
  },

  beforeDestroy() {
    autosize.destroy(this.$el);
  }

};

/* script */
const __vue_script__ = MdTextarea;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('textarea', {
    staticClass: "md-input",
    attrs: {
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly,
      "scrollParams": _vm.scrollParams
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": _vm.onInput,
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.onEnterKey($event);
      }
    }
  }, []);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-56e69211";
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
