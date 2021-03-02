import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { a as isDesktop } from './platform-ba323300.js';
import reduce from 'lodash-es/reduce';

const TdlItemPicker = {
  name: 'tdl-item-picker',
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true
    },
    filterList: {
      type: Function,
      default: () => true
    },
    itemDefaultSelector: {
      type: Function,
      default: () => undefined
    },
    itemDisabled: {
      type: Function,
      default: () => false
    },
    itemFormatter: {
      type: Function,
      default: item => item.text
    },
    items: {
      type: Object,
      default: () => ({
        $default: []
      })
    },
    offset: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0
      })
    },
    parentWidth: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      defaultSelectableItem: undefined,
      menuContentMaxWidth: 'auto',
      menuContentWidth: 'auto',
      opened: false
    };
  },

  computed: {
    isDesktop() {
      return isDesktop();
    },

    itemsFiltered() {
      return reduce(this.items, (acc, curr, key) => {
        acc[key] = curr.filter(this.filterList);
        return acc;
      }, {});
    },

    itemsFlattened() {
      return reduce(this.items, (acc, curr) => acc.concat(curr), []);
    },

    thereAreNoItems() {
      return this.itemsFlattened.length === 0;
    }

  },
  watch: {
    itemsFiltered: {
      immediate: true,

      handler() {
        Object.keys(this.itemsFiltered).forEach(key => {
          this.defaultSelectableItem = this.itemDefaultSelector(this.itemsFiltered[key]);
        });
      }

    }
  },

  created() {
    if (!this.hasSlot('default')) {
      throw new Error('The default slot is required');
    }
  },

  mounted() {
    document.addEventListener('click', this.closeIfClickOutsideMenu);
    document.addEventListener('DOMMouseScroll', this.preventScrollWhenMenuIsOpen, {
      passive: false
    });
    document.addEventListener('touchmove', this.preventScrollWhenMenuIsOpen, {
      passive: false
    });
    document.addEventListener('wheel', this.preventScrollWhenMenuIsOpen, {
      passive: false
    });
  },

  destroyed() {
    document.removeEventListener('click', this.closeIfClickOutsideMenu);
    document.removeEventListener('DOMMouseScroll', this.preventScrollWhenMenuIsOpen);
    document.removeEventListener('touchmove', this.preventScrollWhenMenuIsOpen);
    document.removeEventListener('wheel', this.preventScrollWhenMenuIsOpen);
  },

  methods: {
    closeIfClickOutsideMenu(e) {
      if (this.closeOnBlur && this.opened && this.menuContentIsNotOnDOMTree(e.target)) {
        this.close();
      }
    },

    handleAddNewSlotClick() {
      this.$emit('add-new-clicked');
    },

    handleClose() {
      this.opened = false;
      this.$emit('closed');
    },

    handleOpen() {
      this.opened = true;

      if (this.isDesktop) {
        if (this.parentWidth && this.$refs.anchor) {
          this.menuContentWidth = `${this.$refs.anchor.clientWidth}px !important`;
          this.menuContentMaxWidth = '100%';
        } else if (!this.parentWidth && this.$refs.menu) {
          this.menuContentWidth = 'auto';
          this.menuContentMaxWidth = `${this.$refs.menu.$el.clientWidth}px`;
        }
      }

      this.$emit('opened');
    },

    hasSlot(name) {
      if (name === 'default') {
        return !!this.$slots.default;
      }

      return !!this.$slots[name] || !!this.$scopedSlots[name];
    },

    itemClass(item) {
      if (item === this.defaultSelectableItem) {
        return {
          highlighted: true
        };
      }

      return {};
    },

    itemTabIndex(item, index) {
      if (this.opened && !this.itemDisabled(item)) {
        return 1 + index;
      }

      return -1;
    },

    menuContentIsNotOnDOMTree(target) {
      if (target) {
        return !target.classList.contains('tdl-item-picker') && !target.classList.contains('tdl-item-picker__menu-content') && this.menuContentIsNotOnDOMTree(target.parentElement);
      }

      return true;
    },

    menuContentIsScrollable() {
      const menuContent = document.querySelector('.tdl-item-picker__menu-content');
      return menuContent && menuContent.scrollHeight > menuContent.clientHeight;
    },

    preventScrollWhenMenuIsOpen(e) {
      if (this.opened && this.menuContentIsNotOnDOMTree(e.target)) {
        e.preventDefault();
      } else if (this.opened && !this.menuContentIsNotOnDOMTree(e.target) && !this.menuContentIsScrollable()) {
        e.preventDefault();
      }
    },

    selectItem(item) {
      this.$emit('item-selected', item);
    },

    // Public API
    close() {
      if (this.isDesktop) {
        this.$refs.menu.close();
      } else {
        this.$refs.dialog.close();
      }
    },

    focus() {
      const menuContent = this.$refs['menu-content'];

      if (menuContent && menuContent.$el) {
        menuContent.$el.focus(); // After setting the focus in the `menu-content` element it's necessary to simulate a
        // keydown event in order to move the focus to the first tabindexable `li` element. To do
        // that we dispatch a keydown `KeyboardEvent` on it.

        menuContent.$el.dispatchEvent(new KeyboardEvent('keydown', {
          keyCode: 40
        }));
      }
    },

    selectDefault() {
      if (this.defaultSelectableItem) {
        this.selectItem(this.defaultSelectableItem);
        return true;
      }

      return false;
    },

    open() {
      if (this.isDesktop) {
        this.$refs.menu.open();
      } else {
        this.$refs.dialog.open();
      }
    },

    reposition() {
      // this will force the `md-menu` to recompute its position
      window.dispatchEvent(new Event('resize'));
    }

  }
};

/* script */
const __vue_script__ = TdlItemPicker;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-item-picker",
    class: [_vm.themeClass]
  }, [_vm.isDesktop ? [_c('md-menu', {
    ref: "menu",
    staticClass: "tdl-item-picker__menu",
    attrs: {
      "md-align-trigger": "",
      "md-fixed": "",
      "md-manual-toggle": "",
      "md-no-focus": "",
      "md-size": "auto",
      "md-offset-x": _vm.offset.left,
      "md-offset-y": _vm.offset.top
    },
    on: {
      "close": _vm.handleClose,
      "open": _vm.handleOpen
    }
  }, [_vm._t("default"), _vm._v(" "), _vm.isDesktop ? _c('div', {
    ref: "anchor",
    staticClass: "tdl-item-picker__anchor",
    attrs: {
      "md-menu-trigger": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('md-menu-content', {
    ref: "menu-content",
    staticClass: "tdl-item-picker__menu-content",
    style: {
      maxWidth: _vm.menuContentMaxWidth,
      width: _vm.menuContentWidth
    }
  }, [_vm.hasSlot('add-new-item') ? _c('md-menu-item', {
    staticClass: "md-option tdl-item-picker_menu-item",
    nativeOn: {
      "click": function ($event) {
        return _vm.handleAddNewSlotClick($event);
      }
    }
  }, [_vm._t("add-new-item")], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot('no-results') && _vm.thereAreNoItems ? _c('md-menu-item', {
    staticClass: "md-option tdl-item-picker_menu-item",
    attrs: {
      "disabled": ""
    }
  }, [_vm._t("no-results")], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemsFiltered, function (items, title) {
    return [title !== '$default' ? _c('h4', {
      key: title,
      staticClass: "md-caption tdl-item-picker__menu-subtitle"
    }, [_vm._v("\n            " + _vm._s(title) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemsFiltered[title], function (item, index) {
      return _c('md-menu-item', {
        key: item.id,
        staticClass: "md-option tdl-item-picker__menu-item",
        class: _vm.itemClass(item),
        attrs: {
          "disabled": _vm.itemDisabled(item),
          "tabindex": _vm.itemTabIndex(item, index)
        },
        nativeOn: {
          "click": function ($event) {
            return function () {
              return _vm.selectItem(item);
            }();
          }
        }
      }, [_vm.hasSlot('item') ? _vm._t("item", null, {
        "item": item
      }) : _c('span', {
        domProps: {
          "innerHTML": _vm._s(_vm.itemFormatter(item))
        }
      })], 2);
    })];
  })], 2)], 2)] : [_vm._t("default"), _vm._v(" "), _c('md-dialog', {
    ref: "dialog",
    staticClass: "tdl-item-picker__dialog",
    class: [_vm.themeClass],
    attrs: {
      "md-fullscreen": ""
    },
    on: {
      "cancel": _vm.close,
      "close": _vm.handleClose,
      "open": _vm.handleOpen
    }
  }, [_c('md-dialog-content', [_vm.hasSlot('mobile-pre-list') ? [_vm._t("mobile-pre-list")] : _vm._e(), _vm._v(" "), _c('md-list', {
    ref: "menu-content"
  }, [_vm.hasSlot('add-new-item') ? _c('md-list-item', {
    staticClass: "tdl-item-picker__menu-item",
    on: {
      "click": _vm.handleAddNewSlotClick
    }
  }, [_vm._t("add-new-item")], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot('no-results') && _vm.thereAreNoItems ? _c('md-list-item', {
    staticClass: "tdl-item-picker_menu-item",
    attrs: {
      "md-disabled": ""
    }
  }, [_vm._t("no-results")], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemsFiltered, function (items, title) {
    return [title !== '$default' ? _c('h4', {
      key: title,
      staticClass: "md-caption tdl-item-picker__menu-subtitle"
    }, [_vm._v("\n              " + _vm._s(title) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemsFiltered[title], function (item) {
      return _c('md-list-item', {
        key: item.id,
        staticClass: "tdl-item-picker__menu-item",
        class: _vm.itemClass(item),
        attrs: {
          "disabled": _vm.itemDisabled(item)
        },
        on: {
          "click": function () {
            return _vm.selectItem(item);
          }
        }
      }, [_vm.hasSlot('item') ? _vm._t("item", null, {
        "item": item
      }) : _c('span', {
        domProps: {
          "innerHTML": _vm._s(_vm.itemFormatter(item))
        }
      })], 2);
    })];
  })], 2)], 2)], 1)]], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-58371650_0", {
    source: ".tdl-item-picker{width:100%}.tdl-item-picker__anchor{margin-top:8px}.tdl-item-picker__menu{width:100%}.tdl-item-picker__menu-content{min-height:0;width:auto!important}.tdl-item-picker__menu-content .md-list{display:inline-flex;max-width:100%;overflow-x:hidden;padding:0}.tdl-item-picker__menu-content .md-list-item,.tdl-item-picker__menu-content .md-list-item-container{display:inline-flex;overflow-x:hidden}.tdl-item-picker__menu-content .md-list-item span,.tdl-item-picker__menu-content .md-list-item-container span{overflow-x:hidden;text-overflow:ellipsis}.tdl-item-picker__menu-subtitle{margin:0;padding:24px 16px}",
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
