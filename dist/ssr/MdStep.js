'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdIcon.js');
require('@mdi/js');
var uniqueId = require('./uniqueId-a0313ec5.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdDivider.js');
require('./deviceHelper-d251a554.js');
require('./MdTooltip.js');
var mdStepHeader = require('./mdStepHeader-5d9ea45b.js');

//
const MdStep = {
  name: 'md-step',
  components: {
    MdButton,
    MdStepHeader: mdStepHeader.MdStepHeader
  },
  props: {
    id: [String, Number],
    mdActive: Boolean,
    mdButtonBack: {
      type: String,
      default: 'BACK'
    },
    mdButtonContinue: {
      type: String,
      default: 'CONTINUE'
    },
    mdContinue: {
      type: Boolean,
      default: true
    },
    mdDisabled: Boolean,
    mdError: Boolean,
    mdEditable: {
      type: Boolean,
      default: true
    },
    mdIcon: String,
    mdLabel: [String, Number],
    mdMessage: [String],
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    },
    mdHideContents: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      index: 0,
      left: '0px',
      mounted: false,
      parentStepper: undefined,
      stepId: this.id || 'step-' + uniqueId.uniqueId(),
      vertical: false,
      width: '0px'
    };
  },

  watch: {
    mdActive() {
      this.updateStepData();
    },

    mdContinue() {
      this.updateStepData();
    },

    mdEditable() {
      this.updateStepData();
    },

    mdDisabled() {
      this.updateStepData();
    },

    mdError() {
      this.updateStepData();
    },

    mdIcon() {
      this.updateStepData();
    },

    mdLabel() {
      this.updateStepData();
    },

    mdMessage() {
      this.updateStepData();
    },

    mdTooltip() {
      this.updateStepData();
    },

    mdTooltipDelay() {
      this.updateStepData();
    },

    mdTooltipDirection() {
      this.updateStepData();
    }

  },
  computed: {
    canGoBack() {
      if (this.index === 0) {
        return false;
      }

      if (!this.parentStepper) {
        return false;
      }

      var previousStep = this.parentStepper.getPreviousStep(this.stepId);

      if (previousStep !== undefined && !previousStep.editable) {
        return false;
      }

      return true;
    },

    continueText() {
      if (!this.parentStepper) {
        return this.mdButtonContinue;
      }

      if (this.index + 1 === this.parentStepper.getStepsCount() && this.mdButtonContinue === 'CONTINUE') {
        return 'FINISH';
      }

      return this.mdButtonContinue;
    },

    isCurrentStep() {
      return this.index === this.parentStepper.activeStepNumber;
    },

    styles() {
      if (this.vertical) {
        return {};
      }

      return {
        width: this.width,
        left: this.left
      };
    }

  },
  methods: {
    getStepData() {
      return {
        id: this.stepId,
        label: this.mdLabel,
        message: this.mdMessage,
        icon: this.mdIcon,
        active: this.mdActive,
        continue: this.mdContinue,
        editable: this.mdEditable,
        disabled: this.mdDisabled,
        error: this.mdError,
        toolTip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },

    moveNextStep() {
      this.parentStepper.moveNextStep();
    },

    movePreviousStep() {
      this.parentStepper.movePreviousStep();
    },

    setActiveStep() {
      this.parentStepper.setActiveStep(this.getStepData());
    },

    updateStepData() {
      this.parentStepper.updateStep(this.getStepData());
    }

  },

  mounted() {
    let stepData = this.getStepData();
    this.parentStepper = getClosestVueParent.getClosestVueParent(this.$parent, 'md-stepper');

    if (!this.parentStepper) {
      throw new Error('You must wrap the md-step in a md-stepper');
    }

    this.mounted = true;
    this.parentStepper.updateStep(stepData);

    if (this.mdActive) {
      this.parentStepper.setActiveStep(stepData);
    }

    this.vertical = this.parentStepper.mdVertical;
    this.index = this.parentStepper.getStepIndex(this.stepId);
  },

  beforeDestroy() {
    this.parentStepper.unregisterStep(this.getStepData());
  }

};

/* script */
const __vue_script__ = MdStep;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-step",
    style: _vm.styles,
    attrs: {
      "id": _vm.stepId
    }
  }, [_vm.vertical ? _c('md-step-header', {
    attrs: {
      "step": _vm.getStepData()
    }
  }) : _vm._e(), _vm._ssrNode(" "), (!_vm.vertical || _vm.vertical && _vm.isCurrentStep) && !_vm.mdHideContents ? _vm._ssrNode("<div class=\"md-step-content\">", "</div>", [_vm._t("default"), _vm._ssrNode(" "), !_vm.vertical || _vm.vertical && _vm.isCurrentStep ? _vm._ssrNode("<div class=\"md-step-actions\">", "</div>", [_c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "disabled": !_vm.mdContinue
    },
    on: {
      "click": _vm.moveNextStep
    }
  }, [_vm._v(_vm._s(_vm.continueText))]), _vm._ssrNode(" "), _c('md-button', {
    attrs: {
      "disabled": !_vm.canGoBack
    },
    on: {
      "click": _vm.movePreviousStep
    }
  }, [_vm._v(_vm._s(_vm.mdButtonBack))])], 2) : _vm._e()], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-73aee790";
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
