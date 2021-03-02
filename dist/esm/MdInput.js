import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { c as common } from './common-b6651023.js';
import { g as getClosestVueParent } from './getClosestVueParent-5770502b.js';

//
const MdInput = {
  name: 'md-input',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  mixins: [common],

  mounted() {
    this.$nextTick(() => {
      this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

      if (!this.parentContainer) {
        this.$destroy();
        throw new Error('You should wrap the md-input in a md-input-container');
      }

      this.parentContainer.inputInstance = this;
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.handleMaxLength();
      this.updateValues();
    });
  }

};

/* script */
const __vue_script__ = MdInput;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('input', {
    staticClass: "md-input",
    attrs: {
      "type": _vm.type,
      "name": _vm.name,
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
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }

        return _vm.onInput($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }

        return _vm.onInput($event);
      }]
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

export default __vue_component__;
