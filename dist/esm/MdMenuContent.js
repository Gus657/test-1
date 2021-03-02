import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import MdList from './MdList.js';

//
const MdMenuContent = {
  name: 'md-menu-content',
  components: {
    MdList
  },

  data() {
    return {
      oldHighlight: false,
      highlighted: false,
      itemsAmount: 0,
      itemListCount: 0
    };
  },

  methods: {
    close() {
      this.highlighted = false;
      this.$parent.close();
    },

    highlightItem(direction) {
      this.itemsAmount = this.$children[0].$children.length;

      if (this.itemsAmount < this.highlighted - 1) {
        this.highlighted = 1;
      }

      this.oldHighlight = this.highlighted;

      if (direction === 'up') {
        if (this.highlighted === 1) {
          this.highlighted = this.itemsAmount;
        } else {
          this.highlighted--;
        }
      }

      if (direction === 'down') {
        if (this.highlighted === this.itemsAmount) {
          this.highlighted = 1;
        } else {
          this.highlighted++;
        }
      }

      this.$children[0].$children[this.highlighted - 1].$el.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });

      for (var i = 0; i < this.itemsAmount; i++) {
        this.$children[0].$children[i].highlighted = false;
      }

      this.$children[0].$children[this.highlighted - 1].highlighted = true;
    },

    fireClick() {
      if (this.highlighted > 0) {
        this.getOptions()[this.highlighted - 1].$el.click();
      }
    },

    getOptions() {
      return this.$children[0].$children.filter(child => {
        return child.$el.classList.contains('md-option');
      });
    }

  },

  mounted() {
    this.$nextTick(() => {
      if (!this.$parent.$el.classList.contains('md-menu')) {
        this.$destroy();
        throw new Error('You must wrap the md-menu-content in a md-menu');
      }
    });
  }

};

/* script */
const __vue_script__ = MdMenuContent;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-menu-content",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.close($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }

        $event.preventDefault();
        return _vm.close($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('up');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('down');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.fireClick($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }

        return _vm.fireClick($event);
      }]
    }
  }, [_c('md-list', [_vm._t("default")], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

export default __vue_component__;
