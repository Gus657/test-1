'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');

var mdSpinnerTheme = ".THEME_NAME.md-spinner .md-spinner-path {\n  stroke: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-spinner.md-accent .md-spinner-path {\n  stroke: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-spinner.md-warn .md-spinner-path {\n  stroke: ACCENT-WARN;\n}";

//
const MdSpinner = {
  name: 'md-spinner',
  props: {
    mdSize: {
      type: Number,
      default: 50
    },
    mdStroke: {
      type: Number,
      default: 3.5
    },
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  mixins: [mixin.theme],
  computed: {
    classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },

    styles() {
      const newSize = this.mdSize + 'px';
      return {
        width: newSize,
        height: newSize
      };
    },

    dashProgress() {
      let progress = this.mdProgress * 125 / 100;

      if (this.mdIndeterminate) {
        return false;
      }

      if (progress >= 125) {
        progress = 130;
      }

      return `${progress}, 200`;
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdSpinner",
      theme: mdSpinnerTheme
    });
  }

};

/* script */
const __vue_script__ = MdSpinner;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "md-spinner",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-spinner",
    class: [_vm.themeClass, _vm.classes],
    style: _vm.styles
  }, [_c('svg', {
    staticClass: "md-spinner-draw",
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "md-spinner-path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "stroke-width": _vm.mdStroke,
      "stroke-dasharray": _vm.dashProgress
    }
  })])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-2e725391_0", {
    source: ".md-spinner{display:inline-block;position:relative;pointer-events:none;will-change:transform,opacity}.md-spinner.md-indeterminate .md-spinner-draw{animation:spinner-rotate 1.9s linear infinite;transform:rotate(0) translateZ(0)}.md-spinner.md-indeterminate .md-spinner-path{stroke-dasharray:2,200;animation:spinner-dash 1.425s ease-in-out infinite}.md-spinner.md-spinner-leave-active{opacity:0;transform:scale(.8) translateZ(0);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-spinner:not(.md-indeterminate).md-spinner-enter-active{transition-duration:2s}.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw{animation:spinner-initial-rotate 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-spinner-draw{width:100%;height:100%;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transform:rotate(270deg) translateZ(0);transform-origin:center center;will-change:transform,opacity}.md-spinner-path{fill:none;stroke-dashoffset:0;stroke-miterlimit:10;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes spinner-rotate{to{transform:rotate(360deg) translateZ(0)}}@keyframes spinner-initial-rotate{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}100%{transform:rotate(270deg) translateZ(0)}}@keyframes spinner-dash{0%{stroke-dasharray:2,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-2e725391";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
