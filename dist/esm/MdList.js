import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';

var mdListTheme = ".THEME_NAME.md-list {\n  background-color: BACKGROUND-ELEVATION_1;\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-list.md-transparent {\n  background-color: transparent;\n  color: inherit;\n}\n.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container > .md-icon {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container > .md-icon {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container > .md-icon {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container > .md-icon {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-list .md-list-item :not(.md-delete) > .md-icon:not(.md-primary):not(.md-accent):not(.md-warn) {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-list .md-list-item[disabled] {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-list .md-list-item-expand .md-list-item-container {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover, .THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus {\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-list .md-list-item-expand.md-active:before, .THEME_NAME.md-list .md-list-item-expand.md-active:after {\n  background-color: BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME .md-list-text-container > :nth-child(2),\n.THEME_NAME .md-list-text-container > :nth-child(3) {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME .md-list-text-container > :nth-child(2):not(:last-child) {\n  color: TEXT-TITLE;\n}";

//
const MdList = {
  name: 'md-list',
  mixins: [theme],

  created() {
    this.$root.$emit("component-created", {
      name: "mdList",
      theme: mdListTheme
    });
  }

};

/* script */
const __vue_script__ = MdList;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "md-list",
    class: _vm.themeClass
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-a2ce402e_0", {
    source: ".md-list{margin:0;padding:8px 0;display:flex;flex-flow:column nowrap;position:relative;list-style:none;color:rgba(255,255,255,.9)}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child,.md-list.md-dense .md-list-item .md-list-item-container .md-list-action:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar .md-avatar:first-child,.md-list.md-double-line.md-dense .md-list-item .md-avatar .md-list-action:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(1){font-size:13px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar .md-avatar:first-child,.md-list.md-triple-line.md-dense .md-list-item .md-avatar .md-list-action:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(1){font-size:13px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list.md-transparent{background-color:transparent;color:inherit}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative;z-index:2}.md-list-item span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.md-list-item.md-disabled{cursor:default;pointer-events:none}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-button-ghost{width:100%;margin:0;position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:0}.md-list-item .md-button:not(.md-button-ghost):not(.md-list-item-container){position:relative;z-index:2}.md-list-item .md-button:not(.md-button-ghost):not(.md-list-item-container) .md-icon{position:relative}.md-list-item .md-list-item-container{min-height:48px;margin:0;padding:0 16px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;flex:1;position:relative;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-list-item-container:hover{text-decoration:none}.md-list-item .md-list-item-container>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-container .md-avatar:first-child,.md-list-item .md-list-item-container .md-list-action:first-child{margin-right:16px}.md-list-item .md-list-item-container .md-list-action{margin:0 -10px 0 0}.md-list-item .md-list-item-container .md-list-action:nth-child(3){margin:0 -10px 0 16px}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon,.md-list-item .md-list-action:first-child{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*,.md-list-item .md-list-action:first-child:first-of-type+*{flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-ink-ripple{border-radius:0}.md-list-item-expand{min-height:48px;flex-flow:column wrap;overflow:hidden;transform:translate3D(0,0,0)}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:first-of-type:before{background:0 0}.md-list-item-expand.md-active:last-of-type:after{background:0 0}.md-list-item-expand.md-active.md-active+.md-active:before{background:0 0}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotateZ(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none!important}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:flex;flex-flow:column nowrap;flex:1;overflow:hidden;line-height:1.25em;white-space:normal}.md-list-text-container>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md-list-text-container>:nth-child(1){font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;font-size:14px}",
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
