import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import MdInkRipple from './MdInkRipple.js';

var mdButtonTheme = ".THEME_NAME.md-button:not([disabled]):hover {\n  background-color: BACKGROUND-INVERTED-0.15;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button) {\n  color: TEXT-TITLE;\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised) {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab:hover {\n  background-color: RAISED-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab.md-clean {\n  color: TEXT-TITLE;\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-raised, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab {\n  background-color: ACCENT-PRIMARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover {\n  background-color: RAISED-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary[md-theme=inverted] {\n  background-color: COMPONENT-BUTTON;\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary[md-theme=inverted]:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button) {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-raised {\n  background-color: ACCENT-SECONDARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover {\n  background-color: RAISED-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised) {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button) {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-raised, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab {\n  background-color: ACCENT-WARN;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover {\n  background-color: RAISED-WARN;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised) {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-button[disabled] {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-button[disabled].md-raised, .THEME_NAME.md-button[disabled].md-fab {\n  background-color: BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.md-button .md-button__badge {\n  background-color: COMPONENT-BADGE;\n  color: COMPONENT-TEXT;\n}";

//
const MdButton = {
  name: 'md-button',
  components: {
    MdInkRipple
  },
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    badge: Number
  },
  mixins: [theme],
  computed: {
    newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener';
      }

      return this.rel;
    },

    badgeText() {
      return Math.min(this.badge, 99);
    },

    currentTheme() {
      return this.theme;
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdButton",
      theme: mdButtonTheme
    });
  }

};

/* script */
const __vue_script__ = MdButton;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.href ? _c('a', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    style: _vm.cssVariables,
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled,
      "target": _vm.target,
      "rel": _vm.newRel
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, [_vm.badge ? _c('div', {
    staticClass: "md-button__badge"
  }, [_vm._v(_vm._s(_vm.badgeText))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2) : _c('button', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    style: _vm.cssVariables,
    attrs: {
      "type": _vm.type,
      "disabled": _vm.disabled
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, [_vm.badge ? _c('div', {
    staticClass: "md-button__badge"
  }, [_vm._v(_vm._s(_vm.badgeText))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-edd35b8c_0", {
    source: ".md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;user-select:none;cursor:pointer;outline:0;background:0 0;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:600;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button:focus{outline:0}.md-button::-moz-focus-inner{border:0}.md-button:active:not([disabled]):hover{text-decoration:none}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-icon-button .md-icon{position:absolute;top:1px;right:0;bottom:0;left:0}.md-button.md-fab .md-icon{position:absolute;top:1px;right:0;bottom:0;left:0}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;padding:0;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:20px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{cursor:default;pointer-events:none}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button__badge{position:absolute;top:1px;right:-1px;width:18px;height:18px;border-radius:50%;font-size:12px;line-height:18px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-fab.md-fab-bottom-center,.md-fab.md-fab-bottom-left,.md-fab.md-fab-bottom-right,.md-fab.md-fab-top-center,.md-fab.md-fab-top-left,.md-fab.md-fab-top-right,.md-speed-dial.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-right,.md-speed-dial.md-fab-top-center,.md-speed-dial.md-fab-top-left,.md-speed-dial.md-fab-top-right{margin:0;position:absolute;z-index:10}.md-fab.md-fab-top-left,.md-speed-dial.md-fab-top-left{top:24px;left:24px}.md-fab.md-fab-top-center,.md-speed-dial.md-fab-top-center{top:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-top-right,.md-speed-dial.md-fab-top-right{top:24px;right:24px}.md-fab.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-left{bottom:24px;left:24px}.md-fab.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-center{bottom:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-bottom-right,.md-speed-dial.md-fab-bottom-right{right:24px;bottom:24px}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}",
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
