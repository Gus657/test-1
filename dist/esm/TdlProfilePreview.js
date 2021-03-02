import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import './MdDialog.js';
import './MdDialogActions.js';
import './MdDialogContent.js';
import './MdDialogTitle.js';
import './MdSpinner.js';
import './deviceHelper-575f722e.js';
import './MdTooltip.js';
import './MdWhiteframe.js';
import './MdToolbar.js';
import 'human-format';
import './TdlWeightIcon.js';
import TdlWeightRender from './TdlWeightRender.js';
import './TdlOverlay.js';
import TdlFullscreendialog from './TdlFullscreendialog.js';
import { t as textHelper } from './textHelper-5f0a5b25.js';

const TdlProfilePreview = {
  name: 'tdl-profile-preview',
  components: {
    TdlFullscreendialog,
    MdIcon,
    MdButton,
    TdlWeightRender
  },
  mixins: [textHelper],
  props: {
    dialogRouteQuery: {
      type: String,
      required: false
    },
    displayFeatureDiscovery: {
      type: Boolean,
      required: false,
      default: function () {
        return false;
      }
    },
    person: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      target: null,
      isFeatureDiscoveryOpen: false
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$emit('preview-dialog-ready');
    });
  },

  methods: {
    openDialog: function () {
      this.$refs.profilePreviewDialog.openDialog();
    },
    closeDialog: function () {
      this.$refs.profilePreviewDialog.closeDialog();
      this.$emit('preview-dialog-closed');
    },

    mountSignalsFeatureDiscovery() {
      if (this.displayFeatureDiscovery) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.target = this.$refs.signalButtonPreview.$el;
            this.target.classList.add('call-to-action__button--target');
            this.positionFeatureDiscovery();
            this.isFeatureDiscoveryOpen = true;
            window.addEventListener('resize', this.positionFeatureDiscovery);
          }, 0);
        });
      }
    },

    positionFeatureDiscovery() {
      const featureDiscoveryRadius = 400;
      const featureDiscovery = this.$refs.signalsFeatureDiscovery;
      const featureDiscoveryParent = featureDiscovery.parentElement;
      const featureDiscoveryParentX = featureDiscoveryParent.getBoundingClientRect().x;
      const featureDiscoveryParentY = featureDiscoveryParent.getBoundingClientRect().y;
      const {
        x,
        y,
        height,
        width
      } = this.target.getBoundingClientRect();
      featureDiscovery.style.top = y + height / 2 - featureDiscoveryRadius - featureDiscoveryParentY + 'px';
      featureDiscovery.style.left = x + width / 2 - featureDiscoveryRadius - featureDiscoveryParentX + 'px';
    }

  }
};

/* script */
const __vue_script__ = TdlProfilePreview;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-theme', {
    attrs: {
      "md-name": "default"
    }
  }, [_c('tdl-fullscreendialog', {
    ref: "profilePreviewDialog",
    staticClass: "tdl-profile-preview",
    attrs: {
      "dialog-alias": _vm.dialogRouteQuery,
      "dialog-title": _vm.$t('Preview'),
      "dialog-ok-text": '',
      "dialog-submit-button": "hidden",
      "plain-view": true
    },
    on: {
      "on-open": function ($event) {
        return _vm.mountSignalsFeatureDiscovery();
      },
      "on-close": function ($event) {
        return _vm.$emit('preview-dialog-closed');
      },
      "cancel": _vm.closeDialog
    }
  }, [_vm.person ? _c('div', [_c('div', {
    staticClass: "preview"
  }, [!!_vm.person.picture ? _c('div', {
    staticClass: "preview__image",
    style: {
      backgroundImage: "url(" + _vm.person.picture + ")"
    }
  }) : _vm._e(), _vm._v(" "), !!_vm.person.picture ? _c('div', {
    staticClass: "preview__scrim"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "preview__share"
  }, [_c('div', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("share")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "preview__content"
  }, [_c('tdl-entity-picture', {
    staticClass: "preview__avatar",
    attrs: {
      "entity": _vm.person,
      "borderWidth": 5,
      "size": 120
    }
  }), _vm._v(" "), _vm.person.name ? _c('h1', {
    staticClass: "preview__headline md-headline"
  }, [_vm._v(" " + _vm._s(_vm.$t("Hello, my name is")) + " " + _vm._s(_vm.person.name) + " "), _vm.person.verified ? _c('md-icon', {
    staticClass: "md-icon mdi mdi-check-decagram preview__headline--icon"
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.person.professionalHeadline ? _c('h2', {
    staticClass: "preview__title md-title"
  }, [_vm._v(" " + _vm._s(_vm.person.professionalHeadline) + " ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "preview__call-to-actions"
  }, [_c('div', {
    staticClass: "preview__call-to-action call-to-action"
  }, [_c('md-button', {
    staticClass: "call-to-action__stat-button preview-button"
  }, [_c('span', {
    staticClass: "md-headline call-to-action__stat"
  }, [_c('span', [_vm._v(_vm._s(_vm.person.stats.signalers))]), _c('md-icon', {
    attrs: {
      "md-iconset": "mdi mdi-human-handsup"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-body-1 call-to-action__text"
  }, [_vm._v(_vm._s(_vm.$t("signalers")))])]), _vm._v(" "), _c('md-button', {
    ref: "signalButtonPreview",
    staticClass: "call-to-action__button md-primary md-raised preview-button"
  }, [_vm._v("SIGNAL")])], 1), _vm._v(" "), _c('div', {
    staticClass: "preview__call-to-action call-to-action"
  }, [_c('md-button', {
    staticClass: "call-to-action__stat-button preview-button"
  }, [_c('span', {
    staticClass: "md-headline call-to-action__stat"
  }, [_c('tdl-weight-render', {
    attrs: {
      "value": _vm.person.weight,
      "size": "x-small"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-body-1 call-to-action__text"
  }, [_vm._v(_vm._s(_vm.$t("recommendation weight")))])]), _vm._v(" "), _c('md-button', {
    staticClass: "call-to-action__button md-primary md-raised preview-button"
  }, [_vm._v(_vm._s(_vm.$t("RECOMMEND")))])], 1), _vm._v(" "), _c('div', {
    staticClass: "preview__call-to-action call-to-action call-to-action--only-button"
  }, [_c('md-button', {
    staticClass: "call-to-action__button md-primary md-raised preview-button"
  }, [_vm._v(_vm._s(_vm.$t("MESSAGE")))])], 1)])], 1), _vm._v(" "), _vm.displayFeatureDiscovery ? _c('div', {
    ref: "signalsFeatureDiscovery",
    class: ['preview__feature-discovery feature-discovery', {
      'feature-discovery--open': _vm.isFeatureDiscoveryOpen
    }]
  }, [_c('div', {
    staticClass: "feature-discovery__tap-target"
  }), _vm._v(" "), _c('div', {
    staticClass: "feature-discovery__wave"
  }), _vm._v(" "), _c('div', {
    staticClass: "feature-discovery__content"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t("Signals")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Are a new way of networking. Let")) + " " + _vm._s(_vm.extractFirstWord(_vm.person.name)) + " " + _vm._s(_vm.$t("know that you may consider working together in future opportunities.")))])])]) : _vm._e()])]) : _vm._e()])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-8afe1568_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-8afe1568]{background-image:none!important;top:0!important}.preview[data-v-8afe1568]{display:flex;flex-direction:column;width:80%;margin:64px auto;border:1px solid;-webkit-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-moz-box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);box-shadow:8px 8px 8px 0 rgba(0,0,0,.24);-ms-transform:skew(0deg,4deg);-o-transform:skew(0deg,4deg);-moz-transform:skew(0deg,4deg);transform:skew(0deg,4deg);-webkit-transform:skew(0deg,4deg);user-select:none;cursor:default;pointer-events:none;overflow:hidden}.preview__content[data-v-8afe1568]{position:relative;margin-top:100px;margin-bottom:100px}.preview__image[data-v-8afe1568]{position:fixed;top:0;left:0;width:100%;height:100%;background-position:center;background-size:cover;filter:blur(10px)}.preview__scrim[data-v-8afe1568]{position:absolute;width:100%;height:100%;top:0;left:0}.preview__share[data-v-8afe1568]{position:absolute;top:21px;right:16px;z-index:1}.preview__avatar[data-v-8afe1568]{margin:0 auto 24px}.preview__headline[data-v-8afe1568]{margin-bottom:0;text-align:center}.preview__headline .md-icon[data-v-8afe1568]{margin-top:auto}.preview__title[data-v-8afe1568]{margin-top:24px;text-align:center}.preview__call-to-actions[data-v-8afe1568]{display:flex;justify-content:center;flex-wrap:wrap;width:100%;margin-top:24px}.preview__call-to-actions .call-to-action[data-v-8afe1568]{display:flex;flex-direction:column;align-items:center;margin-bottom:24px}.preview__call-to-actions .call-to-action__button[data-v-8afe1568]{min-width:172px;pointer-events:none}.preview__call-to-actions .call-to-action__button--target[data-v-8afe1568]{box-shadow:none!important;z-index:1}.preview__call-to-actions .call-to-action__stat-button[data-v-8afe1568]{display:block;margin:auto auto 6px;line-height:unset}.preview__call-to-actions .call-to-action__stat[data-v-8afe1568]{line-height:24px}.preview__call-to-actions .call-to-action__text[data-v-8afe1568]{text-transform:lowercase;line-height:18px}.preview__call-to-actions .call-to-action--only-button[data-v-8afe1568]{justify-content:flex-end}.preview .feature-discovery[data-v-8afe1568]{position:fixed}.preview .feature-discovery--open .feature-discovery__tap-target[data-v-8afe1568]{transform:scale(1);opacity:.95;transition:transform .3s cubic-bezier(.42,0,.58,1),opacity .3s cubic-bezier(.42,0,.58,1)}.preview .feature-discovery--open .feature-discovery__wave[data-v-8afe1568]{position:absolute;left:50%;top:50%;width:88px;height:88px;transform:translate(-50%,-67%);background:rgba(255,255,255,.2)}.preview .feature-discovery--open .feature-discovery__wave[data-v-8afe1568]::before{transform:scale(1)}.preview .feature-discovery--open .feature-discovery__wave[data-v-8afe1568]::after{visibility:visible;animation:pulse-animation-data-v-8afe1568 1s cubic-bezier(.24,0,.38,1) infinite;transition:opacity .3s,transform .3s,visibility 0s 1s}.preview .feature-discovery--open .feature-discovery__content[data-v-8afe1568]{opacity:1;visibility:visible;transition:opacity .3s,transform .3s,visibility 0s}.preview .feature-discovery__tap-target[data-v-8afe1568]{border-radius:50%;width:800px;height:800px;transform:scale(0);opacity:0}.preview .feature-discovery__wave[data-v-8afe1568]{position:absolute;border-radius:50%}.preview .feature-discovery__wave[data-v-8afe1568]::after,.preview .feature-discovery__wave[data-v-8afe1568]::before{content:\"\";position:absolute;display:block;width:100%;height:100%;border-radius:50%}.preview .feature-discovery__wave[data-v-8afe1568]::before{transform:scale(0);transition:transform .3s}.preview .feature-discovery__wave[data-v-8afe1568]::after{z-index:-1;visibility:hidden;transition:opacity .3s,transform .3s,visibility 0s}.preview .feature-discovery__content[data-v-8afe1568]{position:absolute;top:100px;left:310px;max-width:250px;visibility:hidden;opacity:0}@media (max-width:477px){.preview .feature-discovery__content[data-v-8afe1568]{left:285px}}@media (max-width:660px){.preview[data-v-8afe1568]{width:90%}}@keyframes pulse-animation-data-v-8afe1568{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-8afe1568";
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
