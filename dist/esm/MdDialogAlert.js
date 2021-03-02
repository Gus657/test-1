import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import './transitionEndEventName-e3bb98be.js';
import MdDialog from './MdDialog.js';
import MdDialogActions from './MdDialogActions.js';
import MdDialogContent from './MdDialogContent.js';
import MdDialogTitle from './MdDialogTitle.js';

//
const MdDialogAlert = {
  name: 'md-dialog-alert',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdDialogTitle
  },
  props: {
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    }
  },
  data: () => ({
    debounce: false
  }),
  methods: {
    fireCloseEvent() {
      if (!this.debounce) {
        this.$emit('close');
      }
    },

    open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
    },

    close() {
      this.fireCloseEvent();
      this.debounce = true;
      this.$refs.dialog.close();
    }

  },

  mounted() {
    if (!this.mdContent && !this.mdContentHtml) {
      throw new Error('Missing md-content or md-content-html attributes');
    }
  }

};

/* script */
const __vue_script__ = MdDialogAlert;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-alert",
    on: {
      "close": function ($event) {
        return _vm.fireCloseEvent();
      }
    }
  }, [_vm.mdTitle ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), _vm.mdContentHtml ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function ($event) {
        return _vm.close();
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1);
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
