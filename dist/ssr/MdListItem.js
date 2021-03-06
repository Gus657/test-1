'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
var MdInkRipple = require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');

//
var script = {
  name: 'md-list-item',
  components: {
    MdButton
  },
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_vm._ssrNode("<div class=\"md-list-item-container md-button\">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  })], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-11e77c5b";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
var script$1 = {
  name: 'md-list-item',
  components: {
    MdInkRipple
  },
  props: {
    href: String,
    target: String,
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.href) + _vm._ssrAttr("target", _vm.target) + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"md-list-item-container md-button\">", "</a>", [_vm._t("default")], 2), _vm._ssrNode(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = "data-v-52bf6d3f";
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script$2 = {
  name: 'md-list-item',
  components: {
    MdInkRipple
  },
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_vm._t("default"), _vm._ssrNode(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = "data-v-4d988036";
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$3 = {
  name: 'md-list-item',
  components: {
    MdButton
  },
  props: {
    disabled: Boolean,
    mdExpandMultiple: Boolean
  },

  data() {
    return {
      parentList: false,
      active: false,
      height: 0,
      contentObserver: null,
      transitionOff: true
    };
  },

  computed: {
    classes() {
      return {
        'md-disabled': this.disabled,
        'md-active': this.active
      };
    },

    expandClasses() {
      return {
        'md-transition-off': this.transitionOff
      };
    },

    expandStyles() {
      return {
        'margin-bottom': this.height
      };
    }

  },
  methods: {
    resetSiblings() {
      this.parentList.$children.forEach(child => {
        if (child.$el !== this.$el && child.$el.classList.contains('md-list-item-expand')) {
          child.active = false;
        }
      });
    },

    calculatePadding() {
      window.requestAnimationFrame(() => {
        if (this._destroyed) {
          return;
        }

        this.height = -this.$refs.expand.scrollHeight + 'px';
        window.setTimeout(() => {
          this.transitionOff = false;
        });
      });
    },

    toggleExpandList($event) {
      if (!this.mdExpandMultiple) {
        this.resetSiblings();
      }

      this.calculatePadding();
      this.active = !this.active;
      this.$emit('click', $event);
    },

    recalculateAfterChange() {
      this.transitionOff = true;
      this.calculatePadding();
    },

    observeChildChanges() {
      this.contentObserver = new MutationObserver(this.recalculateAfterChange);
      this.contentObserver.observe(this.$refs.expand, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentList = getClosestVueParent.getClosestVueParent(this.$parent, 'md-list');
      this.calculatePadding();
      this.observeChildChanges();
      window.addEventListener('resize', this.recalculateAfterChange);
    });
  },

  beforeDestroy() {
    if (this.contentObserver) {
      this.contentObserver.disconnect();
    }

    window.removeEventListener('resize', this.recalculateAfterChange);
    this._destroyed = true;
  }

};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "md-list-item md-list-item-expand",
    class: _vm.classes
  }, [_vm._ssrNode("<div class=\"md-list-item-container md-button\">", "</div>", [_vm._t("default"), _vm._ssrNode(" "), _c('md-icon', {
    staticClass: "md-list-expand-indicator"
  }, [_vm._v("keyboard_arrow_down")])], 2), _vm._ssrNode(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.toggleExpandList
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("md-list-expand", _vm.expandClasses) + _vm._ssrStyle(null, _vm.expandStyles, null) + ">", "</div>", [_vm._t("expand")], 2)], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = "data-v-5354301b";
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
var script$4 = {
  name: 'md-list-item'
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "md-list-item"
  }, [_vm._ssrNode("<div class=\"md-list-item-container\">", "</div>", [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = "data-v-0a450407";
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

const MdListItem = {
  functional: true,
  props: {
    href: String,
    disabled: Boolean
  },

  render(createElement, {
    children,
    data,
    props
  }) {
    const getItemComponent = () => {
      const on = data.on;
      const interactionEvents = ['contextmenu', 'dblclick', 'dragend', 'mousedown', 'touchstart', 'click'];
      let childrenCount = children.length;

      if (props.href) {
        return __vue_component__$1;
      }

      while (childrenCount--) {
        const options = children[childrenCount].componentOptions;

        if (options) {
          if (options.tag === 'md-list-expand') {
            const expandComponent = children[childrenCount];
            data.scopedSlots = {
              expand: () => expandComponent
            };
            children.splice(childrenCount, 1);
            return __vue_component__$3;
          } else if (options.tag === 'router-link') {
            children[childrenCount].data.staticClass = 'md-list-item-container md-button';
            return __vue_component__$2;
          }
        }
      }

      if (on) {
        let counter = interactionEvents.length;

        while (counter--) {
          if (on[interactionEvents[counter]]) {
            return __vue_component__;
          }
        }
      }

      return __vue_component__$4;
    };

    return createElement(getItemComponent(), {
      props,
      ...data
    }, children);
  }

};

module.exports = MdListItem;
