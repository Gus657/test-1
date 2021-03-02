'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
require('./MdBackdrop.js');
require('./MdIcon.js');
require('@mdi/js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
var MdInput = require('./MdInput.js');
require('./transitionEndEventName-137bd43f.js');
var MdDialog = require('./MdDialog.js');
var MdDialogActions = require('./MdDialogActions.js');
var MdDialogContent = require('./MdDialogContent.js');
var MdDialogTitle = require('./MdDialogTitle.js');

//
const MdDialogPrompt = {
  name: 'md-dialog-prompt',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdDialogTitle,
    MdInput,
    MdInputContainer
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    },
    mdInputId: String,
    mdInputName: String,
    mdInputMaxlength: [String, Number],
    mdInputPlaceholder: String
  },
  data: () => ({
    debounce: false
  }),
  methods: {
    fireCloseEvent(type) {
      if (!this.debounce) {
        this.$emit('close', type);
      }
    },

    open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
      window.setTimeout(() => {
        this.$refs.input.$el.focus();
      });
    },

    close(type) {
      this.fireCloseEvent(type);
      this.debounce = true;
      this.$refs.dialog.close();
    },

    confirmValue() {
      this.$emit('input', this.$refs.input.$el.value);
      this.close('ok');
    }

  }
};

/* script */
const __vue_script__ = MdDialogPrompt;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-prompt",
    on: {
      "close": function ($event) {
        return _vm.fireCloseEvent('cancel');
      }
    }
  }, [_vm.mdTitle ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), _vm.mdContentHtml ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _vm._e(), _vm._v(" "), _vm.mdContent ? _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]) : _vm._e(), _vm._v(" "), _c('md-dialog-content', [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdInputId,
      "name": _vm.mdInputName,
      "maxlength": _vm.mdInputMaxlength,
      "placeholder": _vm.mdInputPlaceholder,
      "value": _vm.value
    },
    nativeOn: {
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.confirmValue($event);
      }
    }
  })], 1)], 1), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function ($event) {
        return _vm.close('cancel');
      }
    }
  }, [_vm._v(_vm._s(_vm.mdCancelText))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": _vm.confirmValue
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-6b40468c";
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
