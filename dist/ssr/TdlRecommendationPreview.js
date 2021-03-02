'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
require('./MdIcon.js');
require('@mdi/js');
require('./MdChip.js');
require('./uniqueId-a0313ec5.js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
require('./MdInput.js');
var MdChips = require('./MdChips.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdDialog.js');
require('./MdDialogActions.js');
require('./MdDialogContent.js');
require('./MdDialogTitle.js');
var MdRadio = require('./MdRadio.js');
require('./MdSpinner.js');
require('./MdWhiteframe.js');
require('./MdToolbar.js');
var TdlEntityPicture = require('./TdlEntityPicture.js');
require('./TdlOverlay.js');
var TdlFullscreendialog = require('./TdlFullscreendialog.js');

const TdlRecommendationPreview = {
  name: 'tdl-recommendation-preview',
  components: {
    TdlFullscreendialog,
    TdlEntityPicture,
    MdChips,
    MdInputContainer,
    MdRadio,
    MdButton
  },
  props: {
    dialogContentBackground: {
      type: String,
      required: false
    },
    dialogBorderColor: {
      type: String,
      required: false
    },
    person: {
      type: Object,
      required: true
    },
    dialogRouteQuery: {
      type: String,
      required: false
    },
    strengths: {
      type: Array,
      required: true
    },
    entityPictureBorderColor: {
      type: String,
      required: false
    }
  },
  data: function () {
    return {
      radioModel: ''
    };
  },
  computed: {
    radioOptions: function () {
      return [{
        value: 'minutes',
        label: this.$t('Minutes')
      }, {
        value: 'hours',
        label: this.$t('Hours')
      }, {
        value: 'days',
        label: this.$t('Days')
      }, {
        value: 'weeks',
        label: this.$t('Weeks')
      }, {
        value: 'months',
        label: this.$t('Months')
      }, {
        value: 'years',
        label: this.$t('Years')
      }];
    }
  },
  methods: {
    closePreview() {
      this.$emit('closePreviewDialog');
    },

    firstWord(phrase) {
      return phrase.replace(/ .*/, '');
    }

  }
};

/* script */
const __vue_script__ = TdlRecommendationPreview;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-theme', {
    attrs: {
      "md-name": "light"
    }
  }, [_c('tdl-fullscreendialog', {
    ref: "recommendationsPreviewDialog",
    staticClass: "tdl-recommendation-preview",
    attrs: {
      "dialog-alias": _vm.dialogRouteQuery,
      "dialog-cancel-text": "close",
      "dialog-ok-text": "",
      "dialog-title": _vm.$t('Preview'),
      "dialog-submit-button": "hidden",
      "dialog-progress-bar": !_vm.strengths && !_vm.person
    },
    on: {
      "on-close": _vm.closePreview,
      "cancel": _vm.closePreview
    }
  }, [_vm.strengths && _vm.strengths.length && _vm.person ? _c('div', [_c('div', {
    staticClass: "preview"
  }, [_c('tdl-entity-picture', {
    attrs: {
      "entity": _vm.person,
      "borderWidth": 5,
      "borderColor": _vm.entityPictureBorderColor,
      "size": 64
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.person.name) + " " + _vm._s(_vm.$t("is building his/her professional reputation.")))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("For which strengths and skills can you recommend")) + " " + _vm._s(_vm.firstWord(_vm.person.name)) + "?")]), _vm._v(" "), _c('md-chips', {
    model: {
      value: _vm.strengths,
      callback: function ($$v) {
        _vm.strengths = $$v;
      },
      expression: "strengths"
    }
  }), _vm._v(" "), _c('md-input-container', [_c('div', {
    staticClass: "preview-input preview-input--select"
  }, [_vm._v(_vm._s(_vm.$t("Relationship*")))])]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1 duration-label duration-label--topspace"
  }, [_vm._v(_vm._s(_vm.$t("Duration of your interaction for this recommendation:")))]), _vm._v(" "), _c('div', {
    staticClass: "radio-group radio-group--grid"
  }, _vm._l(_vm.radioOptions, function (item, index) {
    return _c('md-radio', {
      key: index,
      staticClass: "radio-group__option",
      attrs: {
        "md-value": item['value'],
        "name": "radioModel"
      },
      model: {
        value: _vm.radioModel,
        callback: function ($$v) {
          _vm.radioModel = $$v;
        },
        expression: "radioModel"
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(item['label'])
      }
    })]);
  }), 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary preview-button",
    attrs: {
      "md-theme": "default"
    }
  }, [_vm._v(_vm._s(_vm.$t("RECOMMEND")))]), _vm._v(" "), _c('br')], 1)]) : _vm._e()])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-35b848c8_0", {
    source: "@charset \"UTF-8\";.preview{border:1px solid;width:80%;min-height:90px;padding:16px;margin:64px auto;-webkit-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-moz-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-ms-transform:skew(0deg,4deg);-o-transform:skew(0deg,4deg);-moz-transform:skew(0deg,4deg);transform:skew(0deg,4deg);-webkit-transform:skew(0deg,4deg);display:flex;flex-direction:column;user-select:none;cursor:default}.preview .duration-label--topspace{margin-top:16px}.preview-input{padding:12px 16px 0;width:100%}.preview-input--select{width:calc(100% - 24px)}.preview-input--select:after{float:right;width:24px;height:24px;font-size:24px;font-family:\"Material Icons\";content:\"\"}.preview-label+.preview-input{margin-top:-4px}.preview .md-chips{padding-top:8px;min-height:38px;pointer-events:none;margin-bottom:16px!important}.preview .md-chips .md-input{display:none}.preview .md-chips .md-chip{max-width:99%}.preview .radio-group{pointer-events:none}.preview-button{align-self:flex-end;pointer-events:none}.preview .radio-group{margin-bottom:16px;width:100%;display:grid}.preview .radio-group--grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-auto-flow:column}@media (max-width:720px/2){.preview .radio-group--grid{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr}}.preview .radio-group .radio-group__option{margin:8px 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-35b848c8";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
