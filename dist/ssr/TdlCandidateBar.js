'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
require('./MdButton.js');
require('./MdBackdrop.js');
require('./MdCheckbox.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./getClosestVueParent-cfb023f4.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdList.js');
require('./MdListItem.js');
require('./MdMenu.js');
require('./MdMenuContent.js');
require('./MdMenuItem.js');
var MdSelect = require('./MdSelect.js');
var MdOption = require('./MdOption.js');
var deviceHelper = require('./deviceHelper-d251a554.js');
var MdToolbar = require('./MdToolbar.js');
var platform = require('./platform-2fa3e794.js');

var tdlCandidateBarTheme = ".THEME_NAME.tdl-candidate-bar.md-toolbar {\n  background-color: ACCENT-PRIMARY !important;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__rank span, .THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__rank a {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__rank a {\n  text-decoration: underline !important;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__completion .completion__genome, .THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__completion .completion__ranking-criteria {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__completion .completion__step {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .tdl-candidate-bar__completion .completion__step--locked {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.tdl-candidate-bar.md-toolbar .md-select:after {\n  color: TEXT-ACCENT_TITLE;\n}";

var TdlCandidateBarLocale = {
  "en": {
    "You rank ": "You rank ",
    "out of $total": "out of {total}",
    "for ": "for",
    "Complete your professional genome": "Complete your professional genome",
    "Ranking criteria and tips": "Ranking criteria and tips",
    "Rank higher by completing your genome": "Rank higher by completing your genome",
    "Genome completion": "Genome completion",
    "Finish your application for": "Finish your application for",
    "Complete your basic genome": "Complete your basic genome"
  },
  "es": {
    "You rank ": "Tú clasificas ",
    "out of $total": "de {total}",
    "for ": "para",
    "Complete your professional genome": "Completa tu genoma profesional",
    "Ranking criteria and tips": "Criterios de clasificación",
    "Rank higher by completing your genome": "Clasifica más alto al completar tu genoma",
    "Genome completion": "Progreso de tu genoma",
    "Finish your application for": "Termina tu aplicación para",
    "Complete your basic genome": "Completa tu genoma profesional básico"
  }
};

const tdlCandidateBar = {
  name: 'tdl-candidate-bar',
  components: {
    MdInputContainer,
    MdOption,
    MdSelect,
    MdToolbar,
    MdIcon
  },
  mixins: [mixin.theme],
  props: {
    completion: {
      type: Object,
      required: true
    },
    opportunitiesAndRanks: {
      type: Array,
      default: []
    },
    user: {
      type: Object,
      required: false
    },
    hasBottomBar: {
      type: Boolean,
      default: false
    },
    urls: {
      type: Object,
      required: true
    },
    isInGenomeCompletionPage: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selectedOpportunityId: undefined,
      animatedStep: undefined,
      mdiCheck: js.mdiCheck,
      mdiCreation: js.mdiCreation,
      mdiLock: js.mdiLock,
      mdiRocket: js.mdiRocket
    };
  },

  watch: {
    opportunitiesAndRanks: {
      handler(newVal) {
        const hasSelectedOpportunity = this.selectedOpportunityId && newVal.some(o => o.opportunityId === this.selectedOpportunityId);

        if (this.opportunitiesAndRanks.length && !hasSelectedOpportunity) {
          this.selectedOpportunityId = this.opportunitiesAndRanks[0].opportunityId;
        }
      },

      immediate: true
    },
    selectedOpportunityId: {
      handler(newVal) {
        if (newVal) {
          this.$emit('opportunity-selected', newVal);
        }
      },

      immediate: true
    },

    completion(newVal, oldVal) {
      const newStep = newVal.step;
      const oldStep = oldVal.step;

      if (newStep > oldStep) {
        this.animateStep(oldStep);
      }
    }

  },
  computed: {
    completionSteps() {
      return 3;
    },

    genomeIsComplete() {
      return this.completion.step + this.completion.progress === this.completionSteps + 1;
    },

    selectedOpportunityIsPending() {
      return this.selectedOpportunityRank.pending && this.completion.step === 1;
    },

    style() {
      const percentage = (this.completion.step - 1 + this.completion.progress) / this.completionSteps * 100;
      const {
        total,
        position
      } = this.selectedOpportunityRank || {
        total: 1,
        position: 1
      };
      const rankProgress = position === 1 ? 100 : (total - position) / (total - 1) * 100;
      return {
        '--completion': Math.min(100, percentage) + '%',
        '--rank-progress': Math.min(100, rankProgress) + '%',
        '--animation-left': this.animatedStep ? this.animatedStep.getBoundingClientRect().x + 'px' : 0
      };
    },

    selectedOpportunityRank() {
      return this.opportunitiesAndRanks.find(o => o.opportunityId === this.selectedOpportunityId);
    },

    completeYourGenomeUrl() {
      const queryParams = this.selectedOpportunityRank ? `?backUrl=${this.selectedCandidateRankingURL}&opportunityId=${this.selectedOpportunityRank.opportunityId}` : '';
      return `${this.urls.BIO_BASE_URL}/${this.user.username}/genome-completion` + queryParams;
    },

    rankingCriteriaUrl() {
      const locale = this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale : '';
      const opportunityId = this.selectedOpportunityRank.opportunityId;
      return `${this.urls.DISCOVERY_BASE_URL}/${locale}/postings/${opportunityId}/match-and-rank`;
    },

    selectedCandidateRankingURL() {
      const locale = this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale : '';
      const opportunityId = this.selectedOpportunityRank.opportunityId;
      return `${this.urls.DISCOVERY_BASE_URL}/${locale}/postings/${opportunityId}/candidates-ranking`;
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlCandidateBar",
      theme: tdlCandidateBarTheme
    });
    this.$root.$emit("update-locale-string", TdlCandidateBarLocale);
    this.$root.$emit("candidate-bar-added");
  },

  destroyed() {
    this.$root.$emit("candidate-bar-removed");
  },

  methods: {
    numberToOrdinal(cardinalNumber) {
      if (this.$i18n.locale === 'en') {
        const mod10 = cardinalNumber % 10;
        const mod100 = cardinalNumber % 100;

        if (mod10 === 1 && mod100 !== 11) {
          return cardinalNumber + 'st';
        } else if (mod10 === 2 && mod100 !== 12) {
          return cardinalNumber + 'nd';
        } else if (mod10 === 3 && mod100 !== 13) {
          return cardinalNumber + 'rd';
        }

        return cardinalNumber + 'th';
      }

      return cardinalNumber + 'º';
    },

    animateStep(step) {
      this.animatedStep = this.$refs['step' + step][0];
      this.$nextTick(() => {
        const animationElement = this.$refs.animation;
        animationElement.classList.toggle('completion__animation--active');
        setTimeout(() => {
          animationElement.classList.toggle('completion__animation--active');
        }, 2000);
      });
    },

    isMobile() {
      return platform.isMobile();
    },

    isiOS() {
      return deviceHelper.isiOS();
    }

  }
};

/* script */
const __vue_script__ = tdlCandidateBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-toolbar', {
    class: [_vm.themeClass, 'tdl-candidate-bar', {
      'tdl-candidate-bar--has-bottom-bar': _vm.hasBottomBar,
      'tdl-candidate-bar--has-applications': _vm.opportunitiesAndRanks.length
    }],
    style: _vm.style
  }, [_vm.selectedOpportunityRank ? _c('div', {
    staticClass: "tdl-candidate-bar__list-container"
  }, [_c('md-input-container', {
    staticClass: "tdl-candidate-bar__list",
    attrs: {
      "md-clear": ""
    }
  }, [!_vm.selectedOpportunityIsPending ? _c('div', {
    staticClass: "tdl-candidate-bar__rank rank"
  }, [_c('span', {
    staticClass: "md-label"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("You rank ")) + " \n        ")]), _vm._v(" "), _c('a', {
    staticClass: "md-label rank__positions",
    attrs: {
      "href": _vm.selectedCandidateRankingURL,
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "md-subheading"
  }, [_vm._v("\n            " + _vm._s(_vm.selectedOpportunityRank.position ? _vm.numberToOrdinal(_vm.selectedOpportunityRank.position) : '?') + "\n          ")]), _vm._v(" "), _c('span', [_vm._v("\n            " + _vm._s(_vm.$t("out of $total", {
    total: _vm.selectedOpportunityRank.total || '?'
  })) + "\n          ")])]), _vm._v(" "), _c('span', {
    staticClass: "md-label"
  }, [_vm._v("\n           " + _vm._s(_vm.$t("for ")) + " \n        ")])]) : _c('div', {
    staticClass: "tdl-candidate-bar__rank rank"
  }, [_c('span', {
    staticClass: "md-label rank__finish"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Finish your application for")) + " \n        ")])]), _vm._v(" "), _vm.opportunitiesAndRanks.length > 0 ? _c('md-select', {
    attrs: {
      "name": "opportunity",
      "id": "opportunity",
      "md-menu-options": {
        mdSize: _vm.isMobile() ? 6 : 7,
        mdDirection: 'top left',
        mdAlignTrigger: true
      },
      "block-scroll": ""
    },
    model: {
      value: _vm.selectedOpportunityId,
      callback: function ($$v) {
        _vm.selectedOpportunityId = $$v;
      },
      expression: "selectedOpportunityId"
    }
  }, _vm._l(_vm.opportunitiesAndRanks, function (opportunityAndRank) {
    return _c('md-option', {
      key: opportunityAndRank.opportunityId,
      attrs: {
        "value": opportunityAndRank.opportunityId
      }
    }, [_vm._v("\n          " + _vm._s(opportunityAndRank.opportunityObjective) + "\n        ")]);
  }), 1) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tdl-candidate-bar__completion-container"
  }, [_c('div', {
    staticClass: "tdl-candidate-bar__completion completion"
  }, [_c('div', {
    ref: "animation",
    staticClass: "completion__animation"
  }), _vm._v(" "), !_vm.genomeIsComplete ? _c('div', {
    staticClass: "completion__steps"
  }, [_c('div', {
    class: ['completion__t-rex', {
      'completion__t-rex--hidden': Number.isInteger(_vm.completion.step + _vm.completion.progress)
    }]
  }), _vm._v(" "), _c('div', {
    class: ['completion__step md-label', {
      'completion__step--is-ios': _vm.isiOS()
    }]
  }, [_c('md-icon', {
    staticClass: "completion__icon",
    attrs: {
      "icon-svg": _vm.mdiCreation
    }
  })], 1), _vm._v(" "), _vm._l(_vm.completionSteps, function (step) {
    return _c('div', {
      key: step,
      ref: 'step' + step,
      refInFor: true,
      class: ['completion__step md-label', {
        'completion__step--locked': step > _vm.completion.step,
        'completion__step--is-ios': _vm.isiOS()
      }]
    }, [step > _vm.completion.step ? _c('md-icon', {
      staticClass: "completion__icon",
      attrs: {
        "icon-svg": _vm.mdiLock
      }
    }) : step < _vm.completion.step ? _c('md-icon', {
      staticClass: "completion__icon",
      attrs: {
        "icon-svg": _vm.mdiCheck
      }
    }) : [_vm._v("\n            " + _vm._s(step) + "\n          ")]], 2);
  })], 2) : _vm.selectedOpportunityRank ? _c('div', {
    staticClass: "tdl-candidate-bar__rank-progress rank-progress"
  }, [_c('span', [_vm._v("\n          " + _vm._s(_vm.selectedOpportunityRank.total ? _vm.numberToOrdinal(_vm.selectedOpportunityRank.total) : '?') + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "rank-progress__bar"
  }, [_c('md-icon', {
    staticClass: "rank-progress__icon",
    attrs: {
      "icon-svg": _vm.mdiRocket
    }
  })], 1), _vm._v(" "), _c('span', [_vm._v("\n          " + _vm._s(_vm.numberToOrdinal(1)) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.isInGenomeCompletionPage && !_vm.genomeIsComplete ? [_vm.selectedOpportunityRank ? [_vm.selectedOpportunityIsPending ? _c('p', {
    staticClass: "completion__ranking-criteria"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Complete your basic genome")) + "\n          ")]) : !_vm.genomeIsComplete ? _c('p', {
    staticClass: "completion__ranking-criteria"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Rank higher by completing your genome")) + "\n          ")]) : _vm._e()] : !_vm.genomeIsComplete ? _c('p', {
    staticClass: "completion__genome"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Complete your professional genome")) + "\n        ")]) : _vm._e()] : [_vm.selectedOpportunityRank ? [_vm.selectedOpportunityIsPending ? _c('a', {
    staticClass: "completion__genome completion__genome--link md-label",
    attrs: {
      "href": _vm.completeYourGenomeUrl,
      "target": "_blank"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Complete your basic genome")) + "\n          ")]) : _vm.genomeIsComplete ? _c('a', {
    staticClass: "completion__ranking-criteria completion__ranking-criteria--link md-label",
    attrs: {
      "href": _vm.rankingCriteriaUrl,
      "target": "_blank"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Ranking criteria and tips")) + "\n          ")]) : !_vm.genomeIsComplete ? _c('a', {
    staticClass: "completion__genome completion__genome--link md-label",
    attrs: {
      "href": _vm.completeYourGenomeUrl,
      "target": "_blank"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Complete your professional genome")) + "\n          ")]) : _vm._e()] : !_vm.genomeIsComplete ? _c('a', {
    staticClass: "completion__genome completion__genome--link md-label",
    attrs: {
      "href": _vm.completeYourGenomeUrl,
      "target": "_blank"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Complete your professional genome")) + "\n        ")]) : _vm._e()]], 2)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-73f054a8_0", {
    source: ".tdl-lazy-loader-hide-background-image{background-image:none!important;top:0!important}.tdl-candidate-bar{width:100%;height:88px;padding:0;position:fixed;bottom:0;left:0;z-index:4;box-shadow:0 -2px 2px 0 rgba(0,0,0,.2)}@media screen and (max-height:400px){.tdl-candidate-bar{display:none}}@media screen and (max-width:960px){.tdl-candidate-bar--has-bottom-bar{bottom:56px}}.tdl-candidate-bar__list{max-width:350px;padding-bottom:4px}.tdl-candidate-bar .rank{display:flex;min-width:fit-content;min-width:-moz-fit-content;align-items:center;padding-top:5px;padding-left:8px;cursor:pointer}.tdl-candidate-bar .rank__positions{margin-bottom:4px;text-decoration:underline}.tdl-candidate-bar .rank__finish{margin-top:2px}.tdl-candidate-bar .rank-progress{display:flex;justify-content:space-around;min-height:22px}.tdl-candidate-bar .rank-progress__bar{position:relative;top:9px;width:calc(100% - 84px);height:4px;background-color:rgba(0,0,0,.26)}.tdl-candidate-bar .rank-progress__bar:before{content:\"\";position:absolute;left:1px;width:calc(var(--rank-progress) - 2px);height:4px;background-color:rgba(0,0,0,.54);transition:width 1s}.tdl-candidate-bar .rank-progress__icon{position:absolute;top:-10px;left:calc(var(--rank-progress) - 8px);min-width:22px;width:22px;min-height:22px;height:22px;font-size:22px;transform:rotate(90deg) translateX(1px) translateY(4px);transition:left 1s}.tdl-candidate-bar--has-applications .tdl-candidate-bar__completion-container,.tdl-candidate-bar--has-applications .tdl-candidate-bar__list-container{transform:translateY(-8px)}.tdl-candidate-bar__completion-container,.tdl-candidate-bar__list-container{width:100%;display:flex;justify-content:center}.tdl-candidate-bar .completion{height:22px;width:100%;max-width:350px;margin-bottom:16px}.tdl-candidate-bar .completion__steps{position:relative;display:flex;justify-content:space-between}.tdl-candidate-bar .completion__steps:after{content:\"\";position:absolute;top:9px;left:1px;width:calc(100% - 2px);height:4px;background-color:rgba(0,0,0,.26)}.tdl-candidate-bar .completion__steps:before{content:\"\";position:absolute;top:9px;left:1px;width:calc(var(--completion) - 2px);height:4px;background-color:rgba(0,0,0,.54);transition:width 1s}.tdl-candidate-bar .completion__step{position:relative;width:22px;min-width:22px;height:22px;min-height:22px;padding-top:4px;z-index:1;text-align:center;color:rgba(255,255,255,.87);clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.tdl-candidate-bar .completion__step--locked{color:rgba(255,255,255,.87)}.tdl-candidate-bar .completion__step--is-ios{padding-top:3px;padding-left:1px}.tdl-candidate-bar .completion__icon{min-width:12px;width:12px;min-height:12px;height:12px;font-size:12px;transform:translateY(-1px)}.tdl-candidate-bar .completion__genome,.tdl-candidate-bar .completion__ranking-criteria{display:block;width:100%;margin-top:8px;text-align:center}.tdl-candidate-bar .completion__genome--link,.tdl-candidate-bar .completion__ranking-criteria--link{text-transform:uppercase;text-decoration:underline!important}.tdl-candidate-bar .completion__animation{position:absolute;left:calc(var(--animation-left) - 10px);top:-9px;width:40px;height:40px;background-image:url(https://s3-us-west-2.amazonaws.com/bio-media/static/fireworks.svg);opacity:0}@keyframes increase-opacity{75%{opacity:1}}.tdl-candidate-bar .completion__animation--active{animation:increase-opacity 2s}.tdl-candidate-bar .completion__t-rex{position:absolute;left:calc(var(--completion) - 10px);width:20px;height:22px;background-image:url(https://s3-us-west-2.amazonaws.com/bio-media/static/t-rex.svg);z-index:1;opacity:1;transition:left 1s,opacity 1s}.tdl-candidate-bar .completion__t-rex--hidden{opacity:0}.tdl-candidate-bar .md-menu{height:24px!important;padding:0!important}.tdl-candidate-bar .md-select-value{font-size:12px!important;height:24px!important}@media screen and (max-height:400px){.tdl-candidate-bar{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-73f054a8";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
