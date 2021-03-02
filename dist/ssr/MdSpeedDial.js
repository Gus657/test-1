'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');

//
const MdSpeedDial = {
  name: 'md-speed-dial',
  props: {
    mdOpen: {
      type: String,
      default: 'click'
    },
    mdMode: {
      type: String,
      default: 'fling'
    },
    mdDirection: {
      type: String,
      default: 'top'
    }
  },
  mixins: [mixin.theme],
  data: () => ({
    fabTrigger: null,
    active: false
  }),
  computed: {
    classes() {
      let classes = {
        'md-active': this.active,
        'md-animation-enabled': this.mdOpen !== 'mounted'
      };
      classes['md-mode-' + this.mdMode] = true;
      classes['md-direction-' + this.mdDirection] = true;
      return classes;
    }

  },
  methods: {
    closeSpeedDial(event) {
      if (!event.target === this.fabTrigger || !this.fabTrigger.contains(event.target)) {
        this.active = false;
        document.body.removeEventListener('click', this.closeSpeedDial);
      }
    },

    toggleSpeedDial() {
      this.active = !this.active;

      if (this.mdOpen !== 'mounted') {
        document.body.addEventListener('click', this.closeSpeedDial);
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.fabTrigger = this.$el.querySelector('[md-fab-trigger]');

      if (this.mdOpen === 'mounted') {
        setTimeout(() => this.toggleSpeedDial(), 500);
      } else if (this.mdOpen === 'click') {
        this.fabTrigger.addEventListener('click', this.toggleSpeedDial);
      } else {
        this.$el.addEventListener('mouseenter', this.toggleSpeedDial);
        this.$el.addEventListener('mouseleave', this.closeSpeedDial);
      }
    });
  },

  beforeDestroy() {
    this.fabTrigger.removeEventListener('click', this.toggleSpeedDial);
    document.body.removeEventListener('click', this.closeSpeedDial);
  }

};

/* script */
const __vue_script__ = MdSpeedDial;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-speed-dial",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-698b30f2_0", {
    source: ".md-speed-dial{display:flex;flex-direction:column-reverse;align-items:center}.md-speed-dial.md-animation-enabled.md-direction-top.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(0,80%,0)}.md-speed-dial.md-animation-enabled.md-direction-right.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(-80%,0,0)}.md-speed-dial.md-animation-enabled.md-direction-bottom.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(0,-80%,0)}.md-speed-dial.md-animation-enabled.md-direction-left.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(80%,0,0)}.md-speed-dial.md-direction-top [md-fab-trigger]~.md-button{margin-bottom:16px}.md-speed-dial.md-direction-right{flex-direction:row;justify-content:center}.md-speed-dial.md-direction-right [md-fab-trigger]~.md-button{margin-left:16px}.md-speed-dial.md-direction-bottom{flex-direction:column}.md-speed-dial.md-direction-bottom [md-fab-trigger]~.md-button{margin-top:16px}.md-speed-dial.md-direction-left{flex-direction:row-reverse;justify-content:center}.md-speed-dial.md-direction-left [md-fab-trigger]~.md-button{margin-right:16px}.md-speed-dial.md-mode-scale [md-fab-trigger]~.md-button{transform:scale(.6)}.md-speed-dial.md-active [md-fab-trigger]~.md-button{opacity:1;pointer-events:auto;transform:translate3D(0,0,0)!important}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(2){transition-delay:50ms}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(3){transition-delay:.1s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(4){transition-delay:.15s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(5){transition-delay:.2s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(6){transition-delay:.25s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(7){transition-delay:.3s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(8){transition-delay:.35s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(9){transition-delay:.4s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(10){transition-delay:.45s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(11){transition-delay:.5s}.md-speed-dial.md-active [md-fab-trigger] [md-icon-morph]{transform:rotateZ(0);opacity:1}.md-speed-dial.md-active [md-fab-trigger] [md-icon-morph]+.md-icon{transform:rotateZ(90deg) scale(.8);opacity:0}.md-speed-dial .md-button{margin:0}.md-speed-dial [md-fab-trigger]{position:relative;z-index:2}.md-speed-dial [md-fab-trigger]~.md-button{position:relative;z-index:1;opacity:0;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(2){transition-delay:50ms}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(3){transition-delay:.1s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(4){transition-delay:.15s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(5){transition-delay:.2s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(6){transition-delay:.25s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(7){transition-delay:.3s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(8){transition-delay:.35s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(9){transition-delay:.4s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(10){transition-delay:.45s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(11){transition-delay:.5s}.md-speed-dial [md-icon-morph],.md-speed-dial [md-icon-morph]+.md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-speed-dial [md-icon-morph]{opacity:0;transform:rotateZ(-90deg) scale(.8)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-698b30f2";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
