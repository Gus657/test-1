'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdInkRipple = require('./MdInkRipple.js');

var mdSwitchTheme = ".THEME_NAME.md-switch.md-checked .md-switch-container {\n  background-color: ACCENT-SECONDARY-0.5;\n}\n.THEME_NAME.md-switch.md-checked .md-switch-thumb {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-switch.md-checked .md-ink-ripple {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-switch.md-checked .md-ripple {\n  opacity: 0.38;\n}\n.THEME_NAME.md-switch:not(.md-checked) .md-switch-container {\n  background-color: BACKGROUND-INVERTED-0.38;\n}\n.THEME_NAME.md-switch .md-switch-thumb {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container {\n  background-color: ACCENT-PRIMARY-0.5;\n}\n.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container {\n  background-color: ACCENT-WARN-0.5;\n}\n.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-switch.md-disabled .md-switch-container, .THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container {\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-switch.md-disabled label, .THEME_NAME.md-switch.md-disabled.md-checked label {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-switch.md-disabled .md-switch-thumb, .THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb {\n  background-color: COMPONENT-SWITCH_THUMB;\n}\n.THEME_NAME.md-switch .md-switch-container .md-ink-ripple {\n  color: TEXT-DEFAULT;\n}";

//
const checkedPosition = 75;
const initialPosition = '-1px';
const MdSwitch = {
  name: 'md-switch',
  components: {
    MdInkRipple
  },
  props: {
    name: String,
    value: Boolean,
    id: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
  mixins: [mixin.theme],

  data() {
    return {
      leftPos: initialPosition,
      checked: Boolean(this.value)
    };
  },

  computed: {
    classes() {
      return {
        'md-checked': this.checked,
        'md-disabled': this.disabled
      };
    },

    styles() {
      return {
        transform: `translate3D(${this.leftPos}, -50%, 0)`
      };
    }

  },
  watch: {
    checked() {
      this.setPosition();
    },

    value(value) {
      this.changeState(value);
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdSwitch",
      theme: mdSwitchTheme
    });
  },

  methods: {
    setPosition() {
      this.leftPos = this.checked ? checkedPosition + '%' : initialPosition;
    },

    changeState(checked, $event) {
      if (typeof $event !== 'undefined') {
        this.$emit('change', checked, $event);

        if (!$event.defaultPrevented) {
          this.checked = checked;
        }

        this.$emit('input', this.checked, $event);
      } else {
        this.checked = checked;
      }
    },

    toggle($event) {
      if (!this.disabled) {
        this.changeState(!this.checked, $event);
      }
    }

  },

  mounted() {
    this.$nextTick(this.setPosition);
  }

};

/* script */
const __vue_script__ = MdSwitch;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-switch",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._ssrNode("<div class=\"md-switch-container\">", "</div>", [_vm._ssrNode("<div class=\"md-switch-thumb\"" + _vm._ssrStyle(null, _vm.styles, null) + ">", "</div>", [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + " tabindex=\"-1\"" + _vm._ssrAttr("value", _vm.value) + "> <button" + _vm._ssrAttr("type", _vm.type) + " class=\"md-switch-holder\"></button> "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 2)]), _vm._ssrNode(" "), _vm.$slots.default ? _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.id || _vm.name) + " class=\"md-switch-label\">", "</label>", [_vm._t("default")], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-ad042cd2_0", {
    source: ".md-switch{width:auto;margin:16px 8px 16px 0;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .15s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:0 0;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:0}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-ad042cd2";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
