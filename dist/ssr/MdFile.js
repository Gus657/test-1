'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');

//
const MdFile = {
  name: 'md-file',
  props: {
    value: String,
    id: String,
    name: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    accept: String,
    multiple: Boolean
  },

  data() {
    return {
      filename: this.value
    };
  },

  watch: {
    value() {
      this.filename = this.value;
    }

  },
  methods: {
    getMultipleName(files) {
      let names = [];
      [...files].forEach(file => {
        names.push(file.name);
      });
      return names.join(', ');
    },

    openPicker() {
      if (!this.disabled) {
        this.resetFile();
        this.$refs.fileInput.click();
        this.$refs.textInput.$el.focus();
      }
    },

    resetFile() {
      this.parentContainer.value = '';
      this.$refs.fileInput.value = '';
    },

    onFileSelected($event) {
      const files = $event.target.files || $event.dataTransfer.files;

      if (files) {
        if (files.length > 1) {
          this.filename = this.getMultipleName(files);
        } else if (files.length === 1) {
          this.filename = files[0].name;
        } else {
          this.filename = null;
        }
      } else {
        this.filename = $event.target.value.split('\\').pop();
      }

      this.$emit('selected', files || $event.target.value);
      this.$emit('input', this.filename);
    }

  },

  mounted() {
    this.parentContainer = getClosestVueParent.getClosestVueParent(this.$parent, 'md-input-container');

    if (!this.parentContainer) {
      this.$destroy();
      throw new Error('You should wrap the md-file in a md-input-container');
    }

    this.parentContainer.hasFile = true;
  },

  beforeDestroy() {
    this.parentContainer.hasFile = false;
  }

};

/* script */
const __vue_script__ = MdFile;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-file",
    on: {
      "click": _vm.openPicker
    }
  }, [_c('md-input', {
    ref: "textInput",
    attrs: {
      "readonly": "",
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    model: {
      value: _vm.filename,
      callback: function ($$v) {
        _vm.filename = $$v;
      },
      expression: "filename"
    }
  }), _vm._ssrNode(" "), _c('md-icon', [_vm._v("attach_file")]), _vm._ssrNode(" <input type=\"file\"" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("multiple", _vm.multiple) + _vm._ssrAttr("accept", _vm.accept) + ">")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-d2125e02_0", {
    source: ".md-file{display:flex;flex:1}.md-file input[type=file]{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;clip:rect(0 0 0 0);border:0}.md-file .md-icon{cursor:pointer;margin-right:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-d2125e02";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
