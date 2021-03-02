'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');

//
//
//
//
//
//
//
const MdCardExpand = {
  name: 'md-card-expand',

  data() {
    return {
      trigger: null,
      content: null
    };
  },

  methods: {
    toggle() {
      this.$refs.expand.classList.toggle('md-active');
    }

  },

  mounted() {
    window.setTimeout(() => {
      this.trigger = this.$el.querySelector('[md-expand-trigger]');
      this.content = this.$el.querySelector('.md-card-content');

      if (this.content) {
        this.trigger.addEventListener('click', this.toggle);
      }
    }, 200);
  },

  destroyed() {
    if (this.content) {
      this.trigger.removeEventListener('click', this.toggle);
    }
  }

};

/* script */
const __vue_script__ = MdCardExpand;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "expand",
    staticClass: "md-card-expand"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-6a8faefb";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

module.exports = __vue_component__;
