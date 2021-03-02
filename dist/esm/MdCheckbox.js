import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import MdInkRipple from './MdInkRipple.js';

var mdCheckboxTheme = ".THEME_NAME.md-checkbox.md-checked .md-checkbox-container {\n  background-color: ACCENT-SECONDARY;\n  border-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after {\n  border-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-checkbox .md-checkbox-container {\n  border: 2px solid TEXT-DEFAULT;\n}\n.THEME_NAME.md-checkbox .md-ink-ripple {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-checkbox .md-ripple {\n  opacity: 0.26;\n}\n.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container {\n  background-color: ACCENT-PRIMARY;\n  border-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after {\n  border-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-checkbox.md-primary .md-ink-ripple {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container {\n  background-color: ACCENT-WARN;\n  border-color: ACCENT-WARN;\n}\n.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after {\n  border-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-checkbox.md-warn .md-ink-ripple {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container {\n  background-color: TEXT-DISABLED;\n  border-color: transparent;\n}\n.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container {\n  border-color: TEXT-DISABLED;\n}";

//
const MdCheckbox = {
  name: 'md-checkbox',
  components: {
    MdInkRipple
  },
  props: {
    name: String,
    value: [String, Boolean, Array],
    id: String,
    disabled: Boolean,
    mdValue: [String]
  },
  mixins: [theme],

  data() {
    return {
      checked: this.value || false
    };
  },

  computed: {
    classes() {
      return {
        'md-checked': this.isArray() ? this.value.indexOf(this.mdValue) >= 0 : this.checked,
        'md-disabled': this.disabled
      };
    }

  },
  watch: {
    value() {
      if (!this.isArray()) {
        this.checked = !!this.value;
      }
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdCheckbox",
      theme: mdCheckboxTheme
    });
  },

  methods: {
    toggleCheck($event) {
      if (!this.disabled) {
        if (this.isArray()) {
          let index = this.value.indexOf(this.mdValue);

          if (index >= 0) {
            this.value.splice(index, 1);
          } else {
            this.value.push(this.mdValue);
          }

          this.$emit('change', this.value, $event);
          this.$emit('input', this.value, $event);
        } else {
          this.checked = !this.checked;
          this.$emit('change', this.checked, $event);
          this.$emit('input', this.checked, $event);
        }
      }
    },

    isArray() {
      return Array.isArray(this.value);
    }

  }
};

/* script */
const __vue_script__ = MdCheckbox;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-checkbox",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-checkbox-container",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.toggleCheck($event);
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    },
    domProps: {
      "value": _vm.mdValue,
      "checked": _vm.checked
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), _vm.$slots.default ? _c('label', {
    staticClass: "md-checkbox-label",
    attrs: {
      "for": _vm.id || _vm.name
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.toggleCheck($event);
      }
    }
  }, [_vm._t("default")], 2) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-b7a05256_0", {
    source: ".md-checkbox{width:auto;margin:16px 8px 16px 0;display:inline-flex;position:relative}.md-checkbox:not(.md-disabled){cursor:pointer}.md-checkbox:not(.md-disabled) .md-checkbox-label{cursor:pointer}.md-checkbox .md-checkbox-container{width:20px;min-width:20px;height:20px;position:relative;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:0}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}",
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
