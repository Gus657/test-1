'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
require('./transitionEndEventName-137bd43f.js');
var MdDialog = require('./MdDialog.js');
var MdDialogActions = require('./MdDialogActions.js');
var MdDialogContent = require('./MdDialogContent.js');
var MdDialogTitle = require('./MdDialogTitle.js');

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

const __vue_module_identifier__ = "data-v-c41aa496";
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
