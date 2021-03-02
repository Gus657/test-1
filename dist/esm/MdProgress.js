import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';

var mdProgressTheme = ".THEME_NAME.md-progress {\n  background-color: ACCENT-PRIMARY-0.38;\n}\n.THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-progress .md-progress-track:after, .THEME_NAME.md-progress .md-progress-track:before {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-progress.md-accent {\n  background-color: ACCENT-SECONDARY-0.38;\n}\n.THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-progress.md-accent .md-progress-track:after, .THEME_NAME.md-progress.md-accent .md-progress-track:before {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-progress.md-warn {\n  background-color: ACCENT-WARN-0.38;\n}\n.THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-progress.md-warn .md-progress-track:after, .THEME_NAME.md-progress.md-warn .md-progress-track:before {\n  background-color: ACCENT-WARN;\n}";

//
const MdProgress = {
  name: 'md-progress',
  mixins: [theme],
  props: {
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },

    styles() {
      if (!this.mdIndeterminate) {
        return {
          width: this.mdProgress + '%'
        };
      }
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdProgress",
      theme: mdProgressTheme
    });
  }

};

/* script */
const __vue_script__ = MdProgress;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "md-progress",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-progress",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-progress-track",
    style: _vm.styles
  })])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-9e401b54_0", {
    source: ".md-progress{width:100%;height:4px;position:relative;overflow:hidden;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-progress.md-indeterminate .md-progress-track{right:0}.md-progress.md-indeterminate .md-progress-track:after,.md-progress.md-indeterminate .md-progress-track:before{position:absolute;top:0;bottom:0;left:0;will-change:left,right;content:\"\"}.md-progress.md-indeterminate .md-progress-track:before{animation:progress-indeterminate 2.3s cubic-bezier(.65,.815,.735,.395) infinite}.md-progress.md-indeterminate .md-progress-track:after{animation:progress-indeterminate-short 2.3s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}.md-progress.md-progress-enter,.md-progress.md-progress-leave-active{opacity:0;transform:scaleY(0) translateZ(0)}.md-progress.md-progress-enter-active{transform:scaleY(1) translateZ(0)}.md-progress-track{position:absolute;top:0;bottom:0;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes progress-indeterminate{0%{right:100%;left:-35%}60%{right:-100%;left:100%}100%{right:-100%;left:100%}}@keyframes progress-indeterminate-short{0%{right:100%;left:-200%}60%{right:-8%;left:107%}100%{right:-8%;left:107%}}",
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
