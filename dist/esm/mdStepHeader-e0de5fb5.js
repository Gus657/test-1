import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import MdIcon from './MdIcon.js';
import { mdiPencil, mdiCheck, mdiAlert } from '@mdi/js';
import { g as getClosestVueParent } from './getClosestVueParent-5770502b.js';
import MdDivider from './MdDivider.js';
import MdTooltip from './MdTooltip.js';

//
var script = {
  components: {
    MdDivider,
    MdIcon,
    MdTooltip
  },
  props: {
    step: Object,
    mdAlternateLabels: Boolean
  },

  data() {
    return {
      index: Number,
      parentStepper: {}
    };
  },

  computed: {
    isCompleted() {
      return this.index < this.parentStepper.activeStepNumber;
    },

    getHeaderClasses() {
      return {
        'md-active': this.parentStepper.activeStep === this.step.id,
        'md-alternate-labels': this.mdAlternateLabels,
        'md-disabled': this.step.disabled,
        'md-has-sub-message': this.step.message,
        'md-primary': this.isCompleted,
        'md-warn': this.step.error
      };
    },

    icon() {
      if (!this.step.disabled && this.step.editable && this.isCompleted && !this.step.error) {
        return mdiPencil;
      }

      if (!this.step.disabled && this.isCompleted && !this.step.error) {
        return mdiCheck;
      }

      if (!this.step.disabled && this.step.error) {
        return mdiAlert;
      }

      return this.step.icon;
    },

    stepNumber() {
      return this.index + 1;
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentStepper = getClosestVueParent(this.$parent, 'md-stepper');

      if (!this.parentStepper) {
        this.$destroy();
        throw new Error('You should wrap the md-step-header in a md-stepper');
      }

      this.index = this.parentStepper.getStepIndex(this.step.id);
    });
  }

}; // export { TdlComp as MdStepHeader };
// export default TdlComp;

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-step-header",
    class: _vm.getHeaderClasses
  }, [_c('div', {
    staticClass: "md-step-icons"
  }, [_vm.icon && !_vm.step.error ? _c('md-icon', {
    staticClass: "md-step-icon",
    attrs: {
      "icon-svg": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon && _vm.step.error ? _c('md-icon', {
    staticClass: "md-step-error",
    attrs: {
      "icon-svg": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), !_vm.icon ? _c('div', {
    staticClass: "md-step-number"
  }, [_c('span', [_vm._v(_vm._s(_vm.stepNumber))])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "md-step-titles"
  }, [_c('div', {
    staticClass: "md-step-title"
  }, [_vm._v(_vm._s(_vm.step.label))]), _vm._v(" "), _vm.step.message ? _c('small', [_vm._v(_vm._s(_vm.step.message))]) : _vm._e()]), _vm._v(" "), _vm.step.toolTip ? _c('md-tooltip', {
    attrs: {
      "md-direction": _vm.step.tooltipDirection,
      "md-delay": _vm.step.tooltipDelay
    }
  }, [_vm._v(_vm._s(_vm.step.toolTip))]) : _vm._e()], 1);
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

export { __vue_component__ as M };
