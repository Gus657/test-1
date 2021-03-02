import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiMinusCircle, mdiCheckDecagram } from '@mdi/js';
import './MdChip.js';
import './uniqueId-5b272221.js';
import './isArray-e89cc533.js';
import './MdInputContainer.js';
import './common-b6651023.js';
import './getClosestVueParent-5770502b.js';
import './MdInput.js';
import './MdChips.js';
import './transitionEndEventName-e3bb98be.js';
import './MdDialog.js';
import './MdDialogActions.js';
import './MdDialogContent.js';
import './MdDialogTitle.js';
import './MdList.js';
import './MdListItem.js';
import './MdMenu.js';
import './MdMenuContent.js';
import './MdMenuItem.js';
import './MdSpinner.js';
import './deviceHelper-575f722e.js';
import MdTooltip from './MdTooltip.js';
import './MdWhiteframe.js';
import './MdToolbar.js';
import TdlEntityPicture from './TdlEntityPicture.js';
import 'human-format';
import './TdlWeightIcon.js';
import TdlWeightRender from './TdlWeightRender.js';
import './TdlOverlay.js';
import './TdlFullscreendialog.js';
import TdlSignalButton from './TdlSignalButton.js';

var tdlEntityRenderTheme = ".THEME_NAME.tdl-entity-render .text-contrast-54 {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-entity-render .mdi-weight {\n  color: TEXT-TITLE;\n}";

const TdlEntityRender = {
  name: 'tdl-entity-render',
  components: {
    TdlEntityPicture,
    MdIcon,
    MdTooltip,
    TdlWeightRender,
    TdlSignalButton
  },
  props: {
    entity: {
      type: Object,
      required: true
    },
    entityType: {
      type: String,
      default: 'person'
    },
    signalButtonInfo: {
      type: Object,
      required: false
    },
    imageBorderWidth: {
      type: Number,
      required: false
    },
    imageSize: {
      type: Number,
      default: 20
    },
    imageDefaultMargin: {
      type: Boolean,
      default: true
    },
    trackWeight: {
      type: Function,
      required: false
    },
    iconSize: {
      type: Number,
      required: false
    },
    href: {
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    },
    hide: {
      type: Array,
      required: false,
      default: () => []
    },
    shape: {
      type: String,
      default: 'circle'
    }
  },

  data() {
    return {
      mdiMinusCircleIcon: mdiMinusCircle,
      mdiCheckDecagramIcon: mdiCheckDecagram
    };
  },

  computed: {
    cssProps() {
      return {
        '--size': this.iconSize + 'px',
        '--image-border-width': (this.imageBorderWidth ? this.imageBorderWidth : 4) + 'px'
      };
    },

    displayPicture() {
      return !this.shouldHide('picture');
    },

    displayVerified() {
      return this.entity.verified && !this.shouldHide('verified');
    },

    displayWeight() {
      return this.entity.weight && !this.shouldHide('weight');
    },

    displayProfessionalHeadline() {
      return !!this.entity.professionalHeadline && !this.shouldHide('professionalHeadline');
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlEntityRender",
      theme: tdlEntityRenderTheme
    });
  },

  mounted() {
    if (this.trackWeight && this.entity.id) {
      this.trackWeight(this.entity.id);
    }
  },

  methods: {
    handleStateUpdate(state) {
      const signaled = this.signalButtonInfo.signaled;
      this.$emit('signal-update', {
        state,
        signaled
      });
    },

    handleNotificationsTypeUpdate(newType) {
      this.$emit('notifications-type-update', newType);
    },

    shouldHide(type) {
      return this.hide.indexOf(type) !== -1;
    },

    goToAbout() {
      this.$emit('about-signals');
    },

    aboutSignals() {
      this.$emit('about-signals');
    }

  }
};

/* script */
const __vue_script__ = TdlEntityRender;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-entity-render",
    class: [_vm.themeClass, {
      'tdl-entity-render--vertical': _vm.vertical
    }],
    style: _vm.cssProps
  }, [_vm.displayPicture ? _c('div', {
    staticClass: "tdl-entity-render__picture"
  }, [_c('tdl-entity-picture', {
    attrs: {
      "entity": _vm.entity,
      "borderWidth": _vm.imageBorderWidth,
      "size": _vm.imageSize,
      "default-margin": false,
      "shape": _vm.shape
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tdl-entity-render__entity-data"
  }, [_c('h5', {
    class: ['tdl-entity-render__entity-name', {
      'md-subheading-1': !_vm.vertical
    }, {
      'md-body-1': _vm.vertical
    }]
  }, [_vm.href ? _c('a', {
    staticClass: "tdl-entity-render__link",
    attrs: {
      "href": _vm.href,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.entity.name))]) : _c('span', [_vm._v("\n        " + _vm._s(_vm.entity.name) + "\n        "), _c('span', [_vm.vertical && _vm.entityType === 'person' ? _c('md-icon', {
    staticClass: "tdl-entity-render__icon-rotated",
    attrs: {
      "icon-svg": _vm.mdiMinusCircleIcon
    }
  }) : _vm._e(), _vm._v(" "), _c('md-tooltip', [_vm._v(_vm._s(_vm.entity.name.replace(/ .*/, "")) + " " + _vm._s(_vm.$t("doesn’t have a Torre genome, yet.")))])], 1)]), _vm._v(" "), _vm.entity.nameSuffix ? _c('span', {
    staticClass: "text-contrast-54"
  }, [_vm._v("\n        " + _vm._s(_vm.entity.nameSuffix) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm.displayVerified ? _c('span', {
    class: [{
      'tdl-entity-render__verified': !_vm.displayWeight
    }, {
      'tdl-entity-render__verified-weight': _vm.displayWeight
    }]
  }, [_c('md-icon', {
    staticClass: "text-contrast-54",
    attrs: {
      "icon-svg": _vm.mdiCheckDecagramIcon,
      "size": _vm.iconSize + "px"
    }
  }), _vm._v(" "), _c('md-tooltip', {
    attrs: {
      "md-direction": "bottom"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Verified")) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.displayWeight ? _c('span', [_c('tdl-weight-render', {
    attrs: {
      "value": _vm.entity.weight,
      "icon-color": "rgba(0,0,0,0.87)",
      "icon-size": _vm.iconSize,
      "person-id": _vm.entity.id,
      "icon-position": "left",
      "infoIcon-display": false,
      "trackable": true,
      "dot-divider": true,
      "dot-divider-size": 8,
      "trackRender": _vm.trackWeight
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.displayProfessionalHeadline ? _c('span', {
    class: ['tdl-entity-render__professional-headline', {
      'md-caption': !_vm.vertical
    }, {
      'md-label': _vm.vertical
    }],
    attrs: {
      "title": _vm.entity.professionalHeadline
    }
  }, [_vm._v("\n      " + _vm._s(_vm.entity.professionalHeadline) + "\n    ")]) : _vm.vertical ? _c('span', {
    staticClass: "tdl-entity-render__professional-headline"
  }) : _vm._e(), _vm._v(" "), _vm.entity.jobsPosted ? _c('span', {
    class: ['tdl-entity-render__jobs-posted md-caption']
  }, [_vm._v("\n      " + _vm._s(_vm.entity.jobsPosted) + "\n    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "tdl-entity-render__actions"
  }, [_vm.signalButtonInfo ? _c('tdl-signal-button', {
    attrs: {
      "entityName": _vm.entity.name,
      "entityType": _vm.entityType,
      "username": _vm.signalButtonInfo.username,
      "stateType": _vm.signalButtonInfo.signalState,
      "notificationsType": _vm.signalButtonInfo.notificationsType
    },
    on: {
      "about-signals": _vm.aboutSignals,
      "state-update": _vm.handleStateUpdate,
      "notifications-type-update": function (newType) {
        return _vm.handleNotificationsTypeUpdate(newType);
      }
    }
  }) : _vm._e()], 1)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-92bbc358_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-92bbc358]{background-image:none!important;top:0!important}.tdl-entity-render[data-v-92bbc358]{display:flex;padding:8px 16px;width:100%}.tdl-entity-render__picture[data-v-92bbc358]{margin:8px 16px 8px 0}.tdl-entity-render__entity-data[data-v-92bbc358]{display:flex;flex-direction:column;justify-content:center;width:auto;margin-right:8px;overflow:hidden}.tdl-entity-render__entity-data>*[data-v-92bbc358]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;top:calc(var(--image-border-width)/ 2)}.tdl-entity-render__entity-data .md-icon[data-v-92bbc358]{min-width:var(--size);width:var(--size);min-height:var(--size);height:var(--size);font-size:var(--size);vertical-align:baseline}.tdl-entity-render__entity-name[data-v-92bbc358]{margin:0}.tdl-entity-render__entity-name .recommendation-weight[data-v-92bbc358]{position:relative;top:-2px}.tdl-entity-render__icon-rotated[data-v-92bbc358]{min-width:14px!important;width:14px!important;min-height:14px!important;height:14px!important;font-size:14px!important;transform:rotate(-45deg);vertical-align:baseline!important;color:rgba(255,255,255,.5)}.tdl-entity-render__actions[data-v-92bbc358]{display:flex;flex-direction:column;justify-content:center;margin-left:auto}.tdl-entity-render__verified *[data-v-92bbc358]{margin-right:-1px;top:1px}.tdl-entity-render__verified-weight *[data-v-92bbc358]{margin-right:-4px;top:1px}.tdl-entity-render--vertical[data-v-92bbc358]{flex-direction:column}.tdl-entity-render--vertical .tdl-entity-render__entity-data[data-v-92bbc358]{margin:0;text-align:center}.tdl-entity-render--vertical .tdl-entity-render__picture[data-v-92bbc358]{margin-right:0}.tdl-entity-render--vertical .tdl-entity-render__actions[data-v-92bbc358]{align-items:center;margin-left:inherit}.tdl-entity-render--vertical .tdl-entity-render__entity-name[data-v-92bbc358]{display:flex;justify-content:center;align-items:flex-end;margin:8px 0 6px;line-height:1}.tdl-entity-render--vertical .tdl-entity-render__entity-name a[data-v-92bbc358]{margin-right:2px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tdl-entity-render--vertical .tdl-entity-render__entity-name .recommendation-weight[data-v-92bbc358]{top:0}.tdl-entity-render--vertical .tdl-entity-render__professional-headline[data-v-92bbc358]{min-height:14px;margin-bottom:14px}.tdl-entity-render--vertical .tdl-entity-render__jobs-posted[data-v-92bbc358]{min-height:14px;margin-bottom:14px}.tdl-entity-render--vertical .tdl-entity-render__verified *[data-v-92bbc358]{margin-right:0;top:1px}.tdl-entity-render__link[data-v-92bbc358]{text-decoration:none!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-92bbc358";
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
