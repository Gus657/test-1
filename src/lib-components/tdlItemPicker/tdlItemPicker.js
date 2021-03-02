import reduce from 'lodash-es/reduce';
import { isDesktop } from '../../core/utils/platform';

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
      default: (item) => item.text
    },
    items: {
      type: Object,
      default: () => ({ $default: [] })
    },
    offset: {
      type: Object,
      default: () => ({ top: 0, left: 0 })
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
        Object.keys(this.itemsFiltered).forEach((key) => {
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
    document.addEventListener('DOMMouseScroll', this.preventScrollWhenMenuIsOpen, { passive: false });
    document.addEventListener('touchmove', this.preventScrollWhenMenuIsOpen, { passive: false });
    document.addEventListener('wheel', this.preventScrollWhenMenuIsOpen, { passive: false });
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
        return { highlighted: true };
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
        return !target.classList.contains('tdl-item-picker')
          && !target.classList.contains('tdl-item-picker__menu-content')
          && this.menuContentIsNotOnDOMTree(target.parentElement);
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
        menuContent.$el.focus();
        // After setting the focus in the `menu-content` element it's necessary to simulate a
        // keydown event in order to move the focus to the first tabindexable `li` element. To do
        // that we dispatch a keydown `KeyboardEvent` on it.
        menuContent.$el.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 40 }));
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

export default TdlItemPicker;
