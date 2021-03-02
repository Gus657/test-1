import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import MdInkRipple from './MdInkRipple.js';

var mdRadioTheme = ".THEME_NAME.md-radio .md-radio-container {\n  border: 2px solid TEXT-DEFAULT;\n}\n.THEME_NAME.md-radio .md-radio-container .md-ink-ripple {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-radio .md-radio-container:after {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-radio.md-checked .md-radio-container {\n  border-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-radio.md-checked .md-ink-ripple {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-radio.md-checked .md-ripple {\n  opacity: 0.38;\n}\n.THEME_NAME.md-radio.md-primary .md-radio-container:after {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-radio.md-primary.md-checked .md-radio-container {\n  border-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-radio.md-primary.md-checked .md-ink-ripple {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-radio.md-warn .md-radio-container:after {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-radio.md-warn.md-checked .md-radio-container {\n  border-color: ACCENT-WARN;\n}\n.THEME_NAME.md-radio.md-warn.md-checked .md-ink-ripple {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-radio.md-disabled .md-radio-container {\n  border-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-radio.md-disabled .md-radio-container:after {\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-radio.md-disabled.md-checked .md-radio-container {\n  border-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-radio.md-disabled .md-radio-label {\n  color: TEXT-DISABLED;\n}";

//
const MdRadio = {
  name: 'md-radio',
  components: {
    MdInkRipple
  },
  mixins: [theme],
  props: {
    name: String,
    id: String,
    value: [String, Boolean, Number],
    mdValue: {
      type: [String, Boolean, Number],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-checked': typeof this.value !== 'undefined' && this.value !== null && this.mdValue.toString() === this.value.toString(),
        'md-disabled': this.disabled
      };
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdRadio",
      theme: mdRadioTheme
    });
  },

  methods: {
    toggleCheck($event) {
      if (!this.disabled) {
        this.$emit('change', this.mdValue, $event);
        this.$emit('input', this.mdValue, $event);
      }
    }

  }
};

/* script */
const __vue_script__ = MdRadio;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-radio",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-radio-container",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.toggleCheck($event);
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), _vm.$slots.default ? _c('label', {
    staticClass: "md-radio-label",
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
  inject("data-v-4765b3ce_0", {
    source: ".md-radio{width:auto;margin:16px 8px 16px 0;display:inline-flex;position:relative}.md-radio:not(.md-disabled){cursor:pointer}.md-radio:not(.md-disabled) .md-radio-label{cursor:pointer}.md-radio .md-radio-container{width:20px;height:20px;min-width:20px;min-height:20px;position:relative;border-radius:50%;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}",
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
