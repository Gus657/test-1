import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdIcon.js';
import '@mdi/js';
import { u as uniqueId } from './uniqueId-5b272221.js';
import './getClosestVueParent-5770502b.js';
import './transitionEndEventName-e3bb98be.js';
import MdDivider from './MdDivider.js';
import './deviceHelper-575f722e.js';
import './MdTooltip.js';
import { M as MdStepHeader } from './mdStepHeader-e0de5fb5.js';
import { t as throttle } from './throttle-58fe4a88.js';
import MdWhiteframe from './MdWhiteframe.js';

var MdStepHeaderContainer = {
  functional: true,
  components: {
    MdDivider
  },
  props: {
    mdVertical: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    children,
    props
  }) {
    const insertDividerIntoArray = arr => {
      return arr.reduce((result, element, index, array) => {
        result.push(element);

        if (index < array.length - 1) {
          var mdDivider = createElement('md-divider', {
            key: 'divider-' + uniqueId()
          });
          result.push(mdDivider);
        }

        return result;
      }, []);
    };

    if (!props.mdVertical) {
      children = insertDividerIntoArray(children);
    }

    return createElement('div', {
      class: 'md-steps-navigation-container'
    }, children);
  }

};

var mdStepperTheme = ".THEME_NAME.md-stepper .md-step-header .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header .md-step-number {\n  color: TEXT-TITLE;\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-number, .THEME_NAME.md-stepper .md-step-header.md-active .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-active .md-step-number {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-number {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-number {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-error,\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-titles {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-stepper .md-step-header.md-disabled {\n  color: #bdbdbd;\n}\n.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-number {\n  color: TEXT-TITLE;\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-stepper .md-steps-vertical-container .md-step:not(:last-of-type) .md-step-content {\n  border-left: 1px solid TEXT-DISABLED;\n}";

//
const MdStepper = {
  name: 'md-stepper',
  components: {
    MdDivider,
    MdWhiteframe,
    MdStepHeader,
    MdStepHeaderContainer
  },
  props: {
    mdAlternateLabels: {
      type: Boolean,
      default: false
    },
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdVertical: {
      type: Boolean,
      default: false
    },
    mdDisableClick: {
      type: Boolean,
      default: false
    }
  },
  mixins: [theme],
  data: () => ({
    stepList: {},
    activeStep: null,
    activeStepNumber: 0,
    contentHeight: '0px',
    contentWidth: '0px'
  }),
  computed: {
    navigationClasses() {
      return {
        'md-alternate-labels': this.mdAlternateLabels
      };
    },

    stepsClasses() {
      return {
        'md-steps-vertical': this.mdVertical
      };
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdStepper",
      theme: mdStepperTheme
    });
  },

  methods: {
    getNextStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === this.stepList.length) {
        return undefined;
      }

      var nextStepId = Object.keys(this.stepList)[currentIndex + 1];
      var nextStep = this.stepList[nextStepId];
      return nextStep;
    },

    getPreviousStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === 0) {
        return undefined;
      }

      var previousStepId = Object.keys(this.stepList)[currentIndex - 1];
      var previousStep = this.stepList[previousStepId];
      return previousStep;
    },

    getStepsCount() {
      const idList = Object.keys(this.stepList);
      return idList.length;
    },

    getStepIndex(id) {
      const idList = Object.keys(this.stepList);
      return idList.indexOf(id);
    },

    registerStep(stepData) {
      this.$set(this.stepList, stepData.id, stepData);
    },

    moveNextStep() {
      if (this.activeStepNumber < this.getStepsCount() - 1) {
        var nextStep = this.getNextStep(this.activeStep);
        this.setActiveStep(nextStep);
      } else {
        this.$emit('completed');
      }
    },

    movePreviousStep() {
      if (this.activeStepNumber > 0 && this.activeStepNumber < this.getStepsCount()) {
        var prevStep = this.getPreviousStep(this.activeStep);
        this.setActiveStep(prevStep);
      }
    },

    setActiveStep(stepData) {
      if (this.activeStepNumber > this.getStepIndex(stepData.id) && !stepData.editable) {
        return;
      }

      this.activeStep = stepData.id;
      this.activeStepNumber = this.getStepIndex(this.activeStep);
      this.calculatePosition();
      this.$emit('change', this.activeStepNumber);
    },

    unregisterStep(stepData) {
      this.$delete(this.stepList, stepData.id);
    },

    updateStep(stepData) {
      this.registerStep(stepData);

      if (stepData.active) {
        if (!stepData.disabled) {
          this.setActiveStep(stepData);
        } else if (Object.keys(this.stepList).length) {
          let stepIds = Object.keys(this.stepList);
          let targetIndex = stepIds.indexOf(stepData.id) + 1;
          let target = stepIds[targetIndex];

          if (target) {
            this.setActiveStep(this.stepList[target]);
          } else {
            this.setActiveStep(this.stepList[0]);
          }
        }
      }
    },

    observeElementChanges() {
      this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.stepContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },

    calculateStepsWidthAndPosition() {
      if (!this.mdVertical) {
        const width = this.$el.offsetWidth;
        let index = 0;
        this.contentWidth = width * this.activeStepNumber + 'px';

        for (const stepId in this.stepList) {
          const step = this.stepList[stepId];
          step.ref.width = width + 'px';
          step.ref.left = width * index + 'px';
          index++;
        }
      } else {
        this.contentWidth = 'initial';
      }
    },

    calculateContentHeight() {
      this.$nextTick(() => {
        if (!this.mdVertical && Object.keys(this.stepList).length) {
          let height = this.stepList[this.activeStep].ref.$el.offsetHeight;
          this.contentHeight = height + 'px';
        } else {
          this.contentHeight = 'initial';
        }
      });
    },

    calculatePosition() {
      window.requestAnimationFrame(() => {
        if (this._destroyed) {
          return;
        }

        this.calculateStepsWidthAndPosition();
        this.calculateContentHeight();
      });
    },

    debounceTransition() {
      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout(() => {
        this.calculatePosition();
        this.transitionOff = false;
      }, 200);
    },

    calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },

    calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.observeElementChanges();
      window.addEventListener('resize', this.calculateOnResize);

      if (Object.keys(this.stepList).length && !this.activeStep) {
        let firstStep = Object.keys(this.stepList)[0];
        this.setActiveStep(this.stepList[firstStep]);
      }
    });
  },

  beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);
    this._destroyed = true;
  }

};

/* script */
const __vue_script__ = MdStepper;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-stepper",
    class: [_vm.themeClass, _vm.stepsClasses]
  }, [!_vm.mdVertical ? _c('md-whiteframe', {
    ref: "stepNavigation",
    staticClass: "md-steps-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('md-step-header-container', {
    ref: "stepHeader",
    attrs: {
      "md-vertical": _vm.mdVertical
    }
  }, _vm._l(_vm.stepList, function (step, index) {
    return _c('md-step-header', {
      key: step.id,
      class: {
        'no-hand-cursor': _vm.mdDisableClick
      },
      attrs: {
        "step": step,
        "md-alternate-labels": _vm.mdAlternateLabels
      },
      nativeOn: {
        "click": function ($event) {
          !_vm.mdDisableClick ? _vm.setActiveStep(step) : '';
        }
      }
    });
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('md-whiteframe', {
    attrs: {
      "md-elevation": _vm.mdElevation
    }
  }, [!_vm.mdVertical ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-container",
    style: {
      height: _vm.contentHeight
    }
  }, [_c('div', {
    staticClass: "md-steps-wrapper",
    style: {
      transform: "translate3D(-" + _vm.contentWidth + ", 0, 0)"
    }
  }, [_vm._t("default")], 2)]) : _vm._e(), _vm._v(" "), _vm.mdVertical ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-vertical-container"
  }, [_vm._t("default")], 2) : _vm._e()])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-25146eb8_0", {
    source: ".md-stepper{display:flex;flex-flow:column;position:relative;width:100%}.md-stepper .md-step-header{background:0 0;border:0;cursor:pointer;flex-shrink:0;font-family:inherit;font-size:12px;font-weight:500;margin:0;max-height:72px;padding:24px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-stepper .md-step-header.no-hand-cursor{cursor:default}.md-stepper .md-step-header .md-step-icons,.md-stepper .md-step-header .md-step-titles{display:inline-block;vertical-align:middle}.md-stepper .md-step-header.md-has-sub-message{padding:15px 24px}.md-stepper .md-step-header.md-has-sub-message .md-step-title{margin-bottom:-4px}.md-stepper .md-step-header .md-step-icon{border-radius:50%;font-size:12px;height:24px;line-height:24px;margin-right:8px;min-width:24px;padding:0 6px;pointer-events:none;user-select:none;width:24px}.md-stepper .md-step-header .md-step-error{margin-right:8px;min-width:24px;height:24px;width:24px;line-height:24px;pointer-events:none;user-select:none}.md-stepper .md-step-header .md-step-number{border-radius:50%;display:inline-block;font-size:12px;margin-right:8px;width:24px}.md-stepper .md-step-header .md-step-number span{display:block;line-height:24px;text-align:center}.md-stepper .md-step-header .md-step-title{font-size:inherit}.md-stepper .md-step-header.md-disabled{cursor:default;pointer-events:none;user-select:none;-webkit-user-drag:none}.md-stepper .md-steps-navigation{display:flex;height:72px;min-height:72px;overflow:hidden;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);z-index:1}.md-stepper .md-steps-navigation.md-alternate-labels{height:104px;min-height:104px}.md-stepper .md-steps-navigation .md-steps-navigation-container{display:flex;justify-content:space-between;width:100%}@media (min-width:601px){.md-stepper .md-steps-navigation .md-steps-navigation-container{margin-bottom:-15px}}.md-stepper .md-steps-navigation .md-steps-navigation-container .md-divider{margin:36px 0;position:relative;width:100%}.md-stepper .md-steps-navigation .md-steps-navigation-container .md-step-header.md-alternate-labels{max-height:104px;text-align:center}.md-stepper .md-steps-navigation .md-steps-navigation-container .md-step-header.md-alternate-labels.md-has-sub-message{padding:24px}.md-stepper .md-steps-navigation .md-steps-navigation-container .md-step-header.md-alternate-labels .md-step-icons,.md-stepper .md-steps-navigation .md-steps-navigation-container .md-step-header.md-alternate-labels .md-step-titles{display:block}.md-stepper .md-steps-navigation .md-steps-navigation-container .md-step-header.md-alternate-labels .md-step-titles{margin-top:10px}.md-stepper .md-steps-container{height:0;overflow:hidden;position:relative;width:100%}.md-stepper .md-steps-container .md-steps-wrapper{bottom:0;left:0;position:absolute;right:0;top:0;transform:translate3d(0,0,0);transition:transform .4s cubic-bezier(.25,.8,.25,1);width:9999em}.md-stepper .md-steps-container .md-steps-wrapper .md-step{left:0;padding:16px;position:absolute;right:0;top:0}.md-stepper .md-steps-container .md-steps-wrapper .md-step .md-step-content{padding:16px;font-size:14px;line-height:22px}.md-stepper .md-steps-container .md-steps-wrapper .md-step .md-step-content:last-child{padding-bottom:24px}.md-stepper .md-steps-vertical-container .md-step .md-step-header{padding-bottom:8px}.md-stepper .md-steps-vertical-container .md-step:not(:first-of-type) .md-step-header{padding-top:8px}.md-stepper .md-steps-vertical-container .md-step .md-step-content{margin:0 24px 0 34px;padding-bottom:32px;padding-left:24px;padding-top:8px}",
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
