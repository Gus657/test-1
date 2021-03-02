import reduce from 'lodash-es/reduce';

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

export default {
  computed: {
    flattenItemList() {
      return reduce(this.itemList, (all, list) => all.concat(list), []);
    },
    queryInItemList() {
      return this.flattenItemList.length > 0 && this.query && !!this.flattenItemList.find((item) => this.isEqualToText(item, this.query));
    },
    showSearchHint() {
      if (this.disabled) {
        return false;
      }

      switch (this.searchHintMode) {
        case 'focus':
          return this.focused || this.searchInputFocused;
        case 'fixed':
          return true;
        default:
          return false;
      }
    },
    defaultSelectableItem() {
      if (this.defaultItemSelector && !this.addNewItem) {
        return this.defaultItemSelector(this.flattenItemList, this.query);
      }
      return undefined;
    }
  },
  data() {
    return {
      query: '',
      scrollEnabled: true,
      scrollableParent: null
    };
  },
  watch: {
    query(newVal) {
      this.$emit('query-changed', newVal);
    }
  },
  beforeDestroy() {
    document.body.classList.remove('scroll-blocked');
    document.removeEventListener('wheel', this.preventScroll, supportsPassive ? { passive: false } : false);
    document.removeEventListener('touchmove', this.preventScroll, supportsPassive ? { passive: false } : false);
  },
  methods: {
    clear() {
      this.query = '';
    },
    selectItem(item) {
      if (!this.loading) {
        if (item.id === undefined && item.text !== undefined) {
          this.itemFactory(item.text, this.$root).then(this.selectItem);
        } else if (this.itemSelectedValidator(item)) {
          this.clear();
          this.$emit('item-selected', item);
        }
      }
    },
    createItem() {
      const query = this.query.trim();

      if (!this.loading && query.length > 0 && this.addNewItem) {

        const equalTextSelectedAlready = !!this.selectedItems.find((item) => this.isEqualToText(item, query));
        const itemEqualText = this.flattenItemList.find((item) => this.isEqualToText(item, query));

        if (!equalTextSelectedAlready && !itemEqualText) {
          this.itemFactory(query, this.$root).then(this.selectItem);
        } else if (itemEqualText) {
          this.selectItem(itemEqualText);
        }
      }
    },
    handleEnter(evt) {
      if (this.loading) {
        evt.preventDefault();
      } else if (this.addNewItem) {
        this.createItem();
      } else if (this.defaultItemSelector) {
        this.selectDefaultItem();
      }
    },
    charHandler(event) {
      this.$emit('input-keypress', event.key);

      if (this.addItemOnKeypress && this.addItemOnKeypress === event.key && this.addNewItem) {
        event.preventDefault();
        this.createItem();
      }
    },
    getScrollableParent(node) {
      const isElement = node instanceof HTMLElement;
      const overflowY = isElement && window.getComputedStyle(node).overflowY;
      const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

      if (!node) {
        return null;
      } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
        return node;
      }

      return this.getScrollableParent(node.parentNode) || document.body;
    },
    disableScroll(node) {
      if (this.scrollEnabled) {
        if (node) {
          this.scrollableParent = this.getScrollableParent(node);
          this.scrollableParent.style.overflowY = 'hidden';
        }

        document.body.classList.add('scroll-blocked');
        document.addEventListener('wheel', this.preventScroll, supportsPassive ? { passive: false } : false);
        document.addEventListener('touchmove', this.preventScroll, supportsPassive ? { passive: false } : false);
        this.scrollEnabled = false;
      }
    },
    enableScroll(node) {
      if (!this.scrollEnabled) {
        if (node && this.scrollableParent) {
          this.scrollableParent.style.overflowY = 'auto';
          this.scrollableParent = null;
        }

        document.body.classList.remove('scroll-blocked');
        document.removeEventListener('wheel', this.preventScroll, supportsPassive ? { passive: false } : false);
        document.removeEventListener('touchmove', this.preventScroll, supportsPassive ? { passive: false } : false);
        this.scrollEnabled = true;
      }
    },
    preventScroll(event) {
      event.preventDefault();
    },
    formatText(item) {
      if (this.query) {
        return item.text.replace(new RegExp('(' + this.query.trim() + ')', 'i'), '<b>$1</b>');
      }
      return item.text;

    },
    isEqualToText(item, text) {
      return item.text.toLowerCase().trim() === text.toLowerCase().trim();
    },
    setInput(input) {
      this.query = input;
    }
  }
};
