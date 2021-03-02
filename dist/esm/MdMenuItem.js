import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import './MdButton.js';
import { g as getClosestVueParent } from './getClosestVueParent-5770502b.js';
import MdListItem from './MdListItem.js';

//
const MdMenuItem = {
  name: 'md-menu-item',
  components: {
    MdListItem
  },
  props: {
    href: String,
    target: String,
    disabled: Boolean,
    listIndex: {
      type: Number,
      default: -1
    },
    manualHighlight: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    parentContent: {},
    index: 0,
    highlighted: false
  }),
  computed: {
    classes() {
      return {
        'md-highlighted': this.highlighted
      };
    },

    getHighlight() {
      if (!this.manualHighlight) {
        if (this.index === this.parentContent.highlighted) {
          if (this.disabled) {
            if (this.parentContent.oldHighlight > this.parentContent.highlighted) {
              this.parentContent.highlighted--;
            } else {
              this.parentContent.highlighted++;
            }
          }

          if (this.index === 1) {
            this.parentContent.$el.scrollTop = 0;
          } else if (this.index === this.parentContent.itemsAmount) {
            this.parentContent.$el.scrollTop = this.parentContent.$el.scrollHeight;
          } else {
            this.$el.scrollIntoViewIfNeeded(false);
          }

          this.highlighted = true;
          return true;
        }

        this.highlighted = false;
        return false;
      }
    }

  },
  methods: {
    close($event) {
      if (!this.parentMenu.mdManualToggle) {
        if (!this.disabled) {
          if (this.parentMenu.mdCloseOnSelect) {
            this.parentContent.close();
          }

          this.$emit('click', $event);
          this.$emit('selected', $event);
        }
      } else if (!this.disabled) {
        this.$emit('click', $event);
        this.$emit('selected', $event);
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.parentContent = getClosestVueParent(this.$parent, 'md-menu-content');
      this.parentMenu = getClosestVueParent(this.$parent, 'md-menu');
      this.$nextTick(() => {
        if (!this.parentContent) {
          this.$destroy();
          throw new Error('You must wrap the md-menu-item in a md-menu-content');
        }

        if (this.listIndex === -1) {
          this.parentContent.itemListCount++;
          this.index = this.parentContent.itemListCount;
        } else {
          this.index = this.listIndex + 1;
        }
      });
    });
  }

};

/* script */
const __vue_script__ = MdMenuItem;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-list-item', {
    staticClass: "md-menu-item",
    class: _vm.classes,
    attrs: {
      "href": _vm.href,
      "target": _vm.target,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._t("default")], 2);
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
