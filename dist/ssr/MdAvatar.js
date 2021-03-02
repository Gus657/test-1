'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

var mdAvatarTheme = ".THEME_NAME.md-avatar.md-avatar-icon {\n  background-color: BACKGROUND-INVERTED-0.38;\n}\n.THEME_NAME.md-avatar.md-avatar-icon .md-icon {\n  color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-avatar.md-primary.md-avatar-icon {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-avatar.md-accent.md-avatar-icon {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-avatar.md-warn.md-avatar-icon {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}";

//
const MdAvatar = {
  name: 'md-avatar',

  created() {
    this.$root.$emit("component-created", {
      name: "mdAvatar",
      theme: mdAvatarTheme
    });
  }

};

/* script */
const __vue_script__ = MdAvatar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-avatar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-45ac0893_0", {
    source: ".md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-45ac0893";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
