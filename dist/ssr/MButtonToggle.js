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
let onClickButton;
const MButtonToggle = {
  name: 'md-button-toggle',
  props: {
    mdSingle: Boolean,
    mdManualToggle: Boolean
  },

  mounted() {
    if (!this.mdManualToggle) {
      this.$children.forEach(child => {
        let element = child.$el;
        let toggleClass = 'md-toggle';

        onClickButton = () => {
          if (this.mdSingle) {
            this.$children.forEach(child => {
              child.$el.classList.remove(toggleClass);
            });
            element.classList.add(toggleClass);
          } else {
            element.classList.toggle(toggleClass);
          }
        };

        if (element && element.classList.contains('md-button')) {
          element.addEventListener('click', onClickButton);
        }
      });
    }
  },

  beforeDestroy() {
    if (!this.mdManualToggle) {
      this.$children.forEach(child => {
        let element = child.$el;

        if (element && element.classList.contains('md-button')) {
          element.removeEventListener('click', onClickButton);
        }
      });
    }
  }

};

/* script */
const __vue_script__ = MButtonToggle;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-button-toggle",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-3be8693a_0", {
    source: ".md-button-toggle{width:auto;display:flex}.md-button-toggle .md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:\" \"}.md-button-toggle .md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle .md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle .md-button .md-ink-ripple{border-radius:2px}.md-button-toggle .md-button:not(.md-raised):not(.md-toggle):not([disabled]):hover{text-decoration:none}.md-button-toggle.md-raised button:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-3be8693a";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
