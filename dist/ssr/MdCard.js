'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');

var mdCardTheme = ".THEME_NAME.md-card {\n  background-color: BACKGROUND-ELEVATION_1;\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-card.md-primary {\n  background-color: ACCENT-PRIMARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused input,\n.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused label,\n.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-input-container:after {\n  background-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-input-container input,\n.THEME_NAME.md-card.md-primary .md-input-container textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-input-container input::-webkit-input-placeholder,\n.THEME_NAME.md-card.md-primary .md-input-container textarea::-webkit-input-placeholder {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-card.md-primary .md-input-container label,\n.THEME_NAME.md-card.md-primary .md-input-container .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-primary .md-card-expand .md-card-actions {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-card.md-accent {\n  background-color: ACCENT-SECONDARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused input,\n.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused label,\n.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-input-container:after {\n  background-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-input-container input,\n.THEME_NAME.md-card.md-accent .md-input-container textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-input-container input::-webkit-input-placeholder,\n.THEME_NAME.md-card.md-accent .md-input-container textarea::-webkit-input-placeholder {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-card.md-accent .md-input-container label,\n.THEME_NAME.md-card.md-accent .md-input-container .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-accent .md-card-expand .md-card-actions {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-card.md-warn {\n  background-color: ACCENT-WARN;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused input,\n.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused label,\n.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-input-container:after {\n  background-color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-input-container input,\n.THEME_NAME.md-card.md-warn .md-input-container textarea {\n  color: TEXT-ACCENT_TITLE;\n  text-shadow: 0 0 0 TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-input-container input::-webkit-input-placeholder,\n.THEME_NAME.md-card.md-warn .md-input-container textarea::-webkit-input-placeholder {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-card.md-warn .md-input-container label,\n.THEME_NAME.md-card.md-warn .md-input-container .md-icon:not(.md-icon-delete) {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-card.md-warn .md-card-expand .md-card-actions {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-card .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n.THEME_NAME.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-card > .md-card-area.md-transparent {\n  background-color: BACKGROUND-ELEVATION_0;\n}\n.THEME_NAME.md-card > .md-card-area:after {\n  background-color: TEXT-DISABLED;\n}\n.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop {\n  background: linear-gradient(to bottom, TEXT-DISABLED 20%, TEXT-DEFAULT 100%);\n}\n.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area {\n  background-color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-card .md-card-media-cover .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n.THEME_NAME.md-card .md-card-media-cover .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-card .md-card-expand .md-card-actions {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-with-hover:hover {\n  background-color: BACKGROUND-ELEVATION_2;\n}";

//
const MdCard = {
  name: 'md-card',
  props: {
    mdWithHover: Boolean
  },
  mixins: [mixin.theme],
  computed: {
    classes() {
      return {
        'md-with-hover': this.mdWithHover
      };
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "mdCard",
      theme: mdCardTheme
    });
  }
};

/* script */
const __vue_script__ = MdCard;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-card",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-28e9e6ea_0", {
    source: ".md-card{overflow:auto;display:flex;flex-direction:column;position:relative;z-index:1;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow,background-color}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:flex;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{flex:1}.md-card .md-card-header .md-card-media{width:80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading-1,.md-card .md-subheading-2,.md-card .md-title{margin:0}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-card-media-actions{padding:16px;display:flex;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;flex-direction:column;justify-content:flex-start;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:flex;justify-content:flex-end;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area{position:relative}.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotateZ(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1;padding:4px 16px 24px;height:auto}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{height:0;padding:0 16px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin,height}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-28e9e6ea";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
