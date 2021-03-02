'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');
var MdDivider = require('./MdDivider.js');
var MdTooltip = require('./MdTooltip.js');

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
        return js.mdiPencil;
      }

      if (!this.step.disabled && this.isCompleted && !this.step.error) {
        return js.mdiCheck;
      }

      if (!this.step.disabled && this.step.error) {
        return js.mdiAlert;
      }

      return this.step.icon;
    },

    stepNumber() {
      return this.index + 1;
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentStepper = getClosestVueParent.getClosestVueParent(this.$parent, 'md-stepper');

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
  }, [_vm._ssrNode("<div class=\"md-step-icons\">", "</div>", [_vm.icon && !_vm.step.error ? _c('md-icon', {
    staticClass: "md-step-icon",
    attrs: {
      "icon-svg": _vm.icon
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.icon && _vm.step.error ? _c('md-icon', {
    staticClass: "md-step-error",
    attrs: {
      "icon-svg": _vm.icon
    }
  }) : _vm._e(), _vm._ssrNode(" " + (!_vm.icon ? "<div class=\"md-step-number\"><span>" + _vm._ssrEscape(_vm._s(_vm.stepNumber)) + "</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"md-step-titles\"><div class=\"md-step-title\">" + _vm._ssrEscape(_vm._s(_vm.step.label)) + "</div> " + (_vm.step.message ? "<small>" + _vm._ssrEscape(_vm._s(_vm.step.message)) + "</small>" : "<!---->") + "</div> "), _vm.step.toolTip ? _c('md-tooltip', {
    attrs: {
      "md-direction": _vm.step.tooltipDirection,
      "md-delay": _vm.step.tooltipDelay
    }
  }, [_vm._v(_vm._s(_vm.step.toolTip))]) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-ddafd0c2";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

exports.MdStepHeader = __vue_component__;
