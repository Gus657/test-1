'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var uniqueId = _interopDefault(require('lodash-es/uniqueId'));
require('lodash-es/cloneDeep');
var UtilsForms = require('./UtilsForms.js');

const TdlForm = {
  name: 'tdl-form',
  props: {
    model: {
      type: Object,
      required: false
    },
    forceSnapshotUpdate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formKey: function () {
      return uniqueId('tdl-form-model');
    }
  },
  watch: {
    forceSnapshotUpdate: function (newValue) {
      if (newValue) {
        UtilsForms.updateSnapshotModel({
          key: this.formKey,
          data: this.model
        });
      }
    }
  },
  methods: {
    submit: function () {
      const event = new Event('submit', {
        bubbles: true,
        cancelable: true
      });
      const submit = this.$refs.form.dispatchEvent(event);

      if (submit) {
        this.$refs.form.submit();
      }
    },
    handleSubmit: function () {
      UtilsForms.updateSnapshotModel({
        key: this.formKey,
        data: this.model
      });
    },
    discardChanges: function () {
      // waits for possible model updates before discarding current snapshot
      // and taking a new one
      this.$nextTick(() => {
        UtilsForms.updateSnapshotModel({
          key: this.formKey,
          data: this.model
        });
      });
    }
  },
  created: function () {
    // gives time to set everything up if there's logic which setups the model
    // upon element creation
    this.$nextTick(() => {
      UtilsForms.updateSnapshotModel({
        key: this.formKey,
        data: this.model
      });
      UtilsForms.setCurrentModel({
        key: this.formKey,
        data: this.model
      });
      this.$watch('model', newValue => {
        UtilsForms.setCurrentModel({
          key: this.formKey,
          data: newValue
        });
      }, {
        deep: true
      });
    });
  },
  destroyed: function () {
    UtilsForms.removeModel(this.formKey);
  }
};

/* script */
const __vue_script__ = TdlForm;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    ref: "form",
    on: {
      "submit": _vm.handleSubmit
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-0a87100c";
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
