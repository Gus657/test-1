import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiClose } from '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import MdDialog from './MdDialog.js';
import MdDialogActions from './MdDialogActions.js';
import MdDialogContent from './MdDialogContent.js';
import MdDialogTitle from './MdDialogTitle.js';
import MdSpinner from './MdSpinner.js';
import MdWhiteframe from './MdWhiteframe.js';
import MdToolbar from './MdToolbar.js';
import TdlOverlay from './TdlOverlay.js';

const TdlFullscreendialog = {
  name: 'tdl-fullscreendialog',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdDialogTitle,
    MdIcon,
    MdToolbar,
    MdSpinner,
    MdWhiteframe,
    TdlOverlay
  },
  mixins: [theme],
  props: {
    dialogAlias: {
      type: String,
      required: false
    },
    dialogOkText: {
      type: String,
      required: false
    },
    dialogCancelText: {
      type: String,
      required: false
    },
    dialogTitle: {
      type: String,
      required: false
    },
    dialogSubtitle: {
      type: String,
      required: false
    },
    dialogSubmitButton: {
      type: String,
      required: false,
      default: 'visible',
      validator: val => ['disabled', 'hidden', 'visible'].includes(val)
    },
    dialogContentBackground: {
      type: String,
      required: false
    },
    dialogShutdownTransition: {
      type: Boolean,
      required: false,
      default: true
    },
    dialogProgressBar: {
      type: Boolean,
      default: false
    },
    dialogProcessing: {
      type: Boolean,
      default: false
    },
    plainView: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    allowDialogActionsInMobile: {
      type: Boolean,
      default: false
    },
    alwaysClose: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      opened: false,
      contentHeight: 0,
      currentDialogContent: null,
      mdiCloseIcon: mdiClose
    };
  },
  computed: {
    cancellable: function () {
      return !!this.dialogCancelText;
    },
    showProgressBar: function () {
      return this.dialogProcessing || this.dialogProgressBar;
    }
  },
  methods: {
    openDialog: function () {
      this.$refs.dialog.open();
    },
    closeDialog: function () {
      this.$refs.dialog.close();
    },
    cancelDialog: function () {
      this.$emit('cancel');

      if (this.alwaysClose) {
        this.closeDialog();
      }
    },
    actionDialog: function () {
      this.$emit('ok');
    },
    open: function () {
      this.opened = true;
      this.$emit('on-open');
      this.logScroll();
    },
    logScroll: function () {
      this.currentDialogContent = this.$refs.dialogContent.$el;
      this.contentHeight = this.currentDialogContent.scrollHeight - this.currentDialogContent.offsetHeight;
      this.currentDialogContent.addEventListener('scroll', this.onScrollContent);
    },
    onScrollContent: function () {
      if (this.contentHeight <= this.currentDialogContent.scrollTop) {
        this.$emit('end-reached');
        this.stopLogScroll();
      }
    },
    close: function () {
      this.opened = false;
      this.$emit('on-close');
      this.stopLogScroll();
    },
    stopLogScroll: function () {
      this.currentDialogContent.removeEventListener('scroll', this.onScrollContent);
    }
  }
};

/* script */
const __vue_script__ = TdlFullscreendialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-dialog', {
    ref: "dialog",
    class: ['tdl-full-screen-dialog', {
      'plain-view': _vm.plainView
    }, _vm.themeClass],
    attrs: {
      "md-shutdown-transition": _vm.dialogShutdownTransition,
      "md-click-outside-to-close": !_vm.dialogProcessing && _vm.closable,
      "md-esc-to-close": !_vm.dialogProcessing && _vm.closable
    },
    on: {
      "open": _vm.open,
      "close": _vm.close
    }
  }, [_vm.dialogProcessing ? _c('div', {
    staticClass: "dialog-overlay"
  }) : _vm._e(), _vm._v(" "), _c('md-whiteframe', {
    staticClass: "md-large",
    attrs: {
      "md-elevation": "1"
    }
  }, [_c('md-toolbar', {
    staticClass: "top-actions-toolbar"
  }, [_vm.closable ? _c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function ($event) {
        return _vm.cancelDialog();
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dialog-titles"
  }, [_vm.dialogSubtitle ? _c('p', {
    staticClass: "md-caption modal-title-text"
  }, [_vm._v(_vm._s(_vm.dialogSubtitle))]) : _vm._e(), _vm._v(" "), _vm.dialogTitle ? _c('p', {
    staticClass: "md-title modal-title-text"
  }, [_vm._v(_vm._s(_vm.dialogTitle))]) : _vm._e()]), _vm._v(" "), _vm._t("extra-actions"), _vm._v(" "), _vm._t("toolbar-actions", [_c('md-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.dialogSubmitButton !== 'hidden',
      expression: "dialogSubmitButton !== 'hidden'"
    }],
    staticClass: "md-primary md-raised top-action",
    attrs: {
      "disabled": _vm.dialogSubmitButton === 'disabled'
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.actionDialog();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.dialogOkText) + "\n        ")])])], 2)], 1), _vm._v(" "), _c('md-dialog-title', {
    staticClass: "md-caption modal-title"
  }, [_c('div', {
    staticClass: "modal-title-group",
    class: {
      'plain-view': _vm.plainView
    }
  }, [_c('div', {
    staticClass: "dialog-titles"
  }, [_vm.dialogSubtitle ? _c('p', {
    staticClass: "md-caption dialog-subtitle"
  }, [_vm._v(_vm._s(_vm.dialogSubtitle))]) : _vm._e(), _vm._v(" "), _vm.dialogTitle ? _c('p', [_vm._v(_vm._s(_vm.dialogTitle))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal-title__extra-actions"
  }, [_vm._t("extra-actions")], 2), _vm._v(" "), _vm.closable ? _c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function ($event) {
        return _vm.cancelDialog();
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _vm._t("title-extra")], 2), _vm._v(" "), _c('md-dialog-content', {
    ref: "dialogContent",
    style: {
      'background': _vm.dialogContentBackground
    }
  }, [_vm._t("default"), _vm._v(" "), _vm.showProgressBar ? _c('tdl-overlay', [_c('md-spinner', {
    attrs: {
      "md-indeterminate": ""
    }
  })], 1) : _vm._e()], 2), _vm._v(" "), _vm.dialogCancelText || _vm.$slots['dialog-actions'] || _vm.dialogOkText ? _c('md-dialog-actions', {
    class: {
      'always-visible': _vm.allowDialogActionsInMobile
    }
  }, [_vm.cancellable ? _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function ($event) {
        return _vm.cancelDialog();
      }
    }
  }, [_vm._v(_vm._s(_vm.dialogCancelText))]) : _vm._e(), _vm._v(" "), _vm._t("dialog-actions", [_c('md-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.dialogSubmitButton !== 'hidden',
      expression: "dialogSubmitButton !== 'hidden'"
    }],
    staticClass: "md-primary md-raised",
    attrs: {
      "disabled": _vm.dialogSubmitButton === 'disabled'
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.actionDialog();
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.dialogOkText) + "\n      ")])])], 2) : _vm._e()], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-a88e3c5a_0", {
    source: ".tdl-full-screen-dialog .md-dialog{max-width:650px;width:100%;overflow-y:visible;overflow-x:hidden;max-height:85%}.tdl-full-screen-dialog .md-dialog ::-webkit-scrollbar{-webkit-appearance:none;width:6px}.tdl-full-screen-dialog .md-dialog ::-webkit-scrollbar-thumb{border-radius:6px}.tdl-full-screen-dialog .top-actions-toolbar{display:none}.tdl-full-screen-dialog .top-actions-toolbar+.md-progress{display:none}.tdl-full-screen-dialog.plain-view .md-dialog-title{border-bottom:0}.tdl-full-screen-dialog .dialog-titles{display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;overflow:hidden}.tdl-full-screen-dialog .dialog-titles .dialog-subtitle{margin-bottom:4px}.tdl-full-screen-dialog .modal-title-group{display:flex;justify-content:space-between;align-items:center}.tdl-full-screen-dialog .modal-title-group .md-icon-button{display:none}@media (min-width:660px){.tdl-full-screen-dialog .modal-title-group.plain-view .md-icon-button{display:block;margin:-20px 0 0;padding:0}}.tdl-full-screen-dialog .md-dialog-content{padding:8px}.tdl-full-screen-dialog .md-dialog-content .md-input{font-size:16px}.tdl-full-screen-dialog .dialog-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100}.tdl-full-screen-dialog .modal-title{display:block;font-weight:700;border-bottom:1px solid;margin-bottom:0;padding-bottom:20px;padding-left:16px;padding-right:4px;border-bottom:1px solid;position:relative}.tdl-full-screen-dialog .modal-title .md-progress{position:absolute;bottom:0;left:0;z-index:101}.tdl-full-screen-dialog .modal-title__extra-actions{margin-top:-16px}.tdl-full-screen-dialog .md-dialog-actions{z-index:9}@media (max-width:720px){.tdl-full-screen-dialog .dialog-overlay+.md-whiteframe{z-index:unset}.tdl-full-screen-dialog .md-dialog{position:absolute;max-width:100%;max-height:100%;top:0;left:0;width:100%;height:100%}.tdl-full-screen-dialog .md-dialog .modal-title{display:none}.tdl-full-screen-dialog .md-dialog .md-dialog-actions:not(.always-visible){display:none}.tdl-full-screen-dialog .md-toolbar .md-title{font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tdl-full-screen-dialog .top-actions-toolbar{display:flex;flex-wrap:nowrap}.tdl-full-screen-dialog .top-actions-toolbar+.md-progress{display:block;z-index:101}}",
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
