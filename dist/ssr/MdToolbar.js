'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

//
//
//
//
//
//
//
//
const MdToolbar = {
  name: 'md-toolbar'
};

/* script */
const __vue_script__ = MdToolbar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-toolbar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-ea5b5a5a_0", {
    source: ".md-toolbar{min-height:56px;padding:0 8px;display:flex;align-items:center;align-content:center;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0);background-color:#27292d;color:rgba(255,255,255,.9)}.md-toolbar .md-input-container.md-input-focused input,.md-toolbar .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar .md-input-container input,.md-toolbar .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar .md-input-container input::-webkit-input-placeholder,.md-toolbar .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-accent{color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container.md-input-focused input,.md-toolbar.md-accent .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar.md-accent .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container input,.md-toolbar.md-accent .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar.md-accent .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-warn{color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container.md-input-focused input,.md-toolbar.md-warn .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar.md-warn .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container input,.md-toolbar.md-warn .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar.md-warn .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#010101}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:rgba(1,1,1,.12)}.md-toolbar.md-account-header .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:rgba(1,1,1,.1)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:flex;align-items:center;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-title+.md-input-container{margin-left:24px}.md-toolbar .md-input-container{min-height:32px;margin-top:0;margin-bottom:0;padding-top:0}.md-toolbar .md-list{padding:0;margin:0 -8px;flex:1}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-ea5b5a5a";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
