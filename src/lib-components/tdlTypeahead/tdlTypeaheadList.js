import reduce from 'lodash-es/reduce';
import throttle from 'lodash-es/throttle';
import { mdiMagnify } from "@mdi/js";

import TdlTypeaheadCommon from './tdlTypeaheadCommon';
import MdInput from '@/lib-components/mdInputContainer/mdInput.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdProgress from '@/lib-components/mdProgress/mdProgress.vue';
import MdList from '@/lib-components/mdList/mdList.vue';
import MdListItem from '@/lib-components/mdList/mdListItem.js';
import tdlTypeaheadListTheme from './tdlTypeaheadList-theme.scss';
import theme from '../../core/components/mdTheme/mixin';
import getClosestVueParent from '../../core/utils/getClosestVueParent';

const TdlTypeaheadList = {
  name: 'tdl-typeahead-list',
  components: {
    MdInput,
    MdIcon,
    MdProgress,
    MdList,
    MdListItem
  },
  mixins: [theme, TdlTypeaheadCommon],
  props: {
    selectedItems: {
      type: Array,
      required: true
    },
    defaultItemSelector: Function,
    disabled: Boolean,
    addNewItem: Boolean,
    addNewItemWhenQueryMatches: Boolean,
    itemFactory: Function,
    loading: Boolean,
    inputPlaceholder: String,
    itemDisabled: Function,
    itemList: {
      type: Object,
      required: true
    },
    itemListFixed: Boolean,
    itemListOffset: Object,
    itemSelectedValidator: {
      type: Function,
      required: true
    },
    addItemOnKeypress: {
      type: String,
      required: false
    },
    maxQueryLength: {
      type: [Number, String],
      default: Infinity
    },
    addNewItemSlotPosition: {
      type: String,
      default: 'bottom'
    },
    queryValidator: {
      type: Function,
      default(query) {
        return !(!this.activeItemList && query.length > 0 && !this.flattenItemList.some((item) => this.isEqualToText(item, query)));
      }
    },
    searchHintMode: String,
    selectItemOnInputBlur: {
      type: Boolean,
      required: true
    },
    minChars: Number
  },
  computed: {
    handleFocusChangeThrottled() {
      return throttle(this.handleFocusChange, 200, { trailing: false });
    },
    isInteractingWithList() {
      return this.listItemPressed || this.highlighted >= 0;
    },
    isQueryInvalid() {
      return !this.loading && !this.queryValidator(this.query);
    },
    itemListVisible() {
      if (this.query.length >= this.minChars) {
        const noResultsVisible = this.hasNoResultsSlot && this.flattenItemList.length === 0;

        return this.activeItemList && (this.itemListHasItems || this.addNewItem || noResultsVisible);
      }
      return false;

    },
    subtitleTotalItems() {
      return reduce(this.itemList, (total, value, key) => total + (key !== '$default' && value.length > 0 ? 1 : 0), 0);
    },
    itemListHasItems() {
      return this.flattenItemList.length > 0;
    },
    hasAfterInputSlot() {
      return !!this.$slots['desktopAfterInput'] || !!this.$scopedSlots['desktopAfterInput'];
    },
    hasBeforeInputSlot() {
      return !!this.$slots['desktopBeforeInput'] || !!this.$scopedSlots['desktopBeforeInput'];
    },
    hasBeforeListSlot() {
      return !!this.$slots['desktopBeforeList'] || !!this.$scopedSlots['desktopBeforeList'];
    },
    hasCreateSlot: function() {
      return !!this.$slots['desktopCreate'] || !!this.$scopedSlots['desktopCreate'];
    },
    hasNoResultsSlot() {
      return !!this.$slots['desktopNoResults'] || !!this.$scopedSlots['desktopNoResults'];
    },
    showAddNewItem() {
      return this.addNewItem && this.query.length > 0 && (!this.queryInItemList || this.addNewItemWhenQueryMatches);
    }
  },
  data() {
    return {
      focused: false,
      activeItemList: false,
      highlighted: -1,
      listItemPressed: false,
      listElementRef: undefined,
      dirtyChecker: undefined,
      mdiMagnifyIcon: mdiMagnify,
      outsideClickListener: undefined,
      positionHandlerTimeout: undefined,
      closeListOnItemSelected: false
    };
  },
  watch: {
    isQueryInvalid(newVal) {
      this.$emit('query-invalid', newVal);
    },
    itemList() {
      this.$nextTick(() => {
        this.setListTopLeftHeight();
      });
    },
    itemListVisible(newVal) {
      if (newVal) {
        this.disableScroll(this.$refs.input.$el);
        this.enableOutsideClickListener();
        this.schedulePositionHandler();
        this.$nextTick(() => {
          this.setListTopLeftHeight();
        });
      } else {
        this.disableOutsideClickListener();
        this.disablePositionHandlerTimeout();
        this.enableScroll(this.$refs.input.$el);
      }
    },
    selectedItems(newVal, oldVal) {
      const deleted = newVal.length < oldVal.length;

      if (deleted) {
        this.applyInputFocus();
      }
    },
    disabled(newVal) {
      if (newVal) {
        this.onInputBlur();
      }
    },
    focused(newVal) {
      this.$emit('focused', { focused: newVal, query: this.query });
    }
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlTypeaheadList", theme: tdlTypeaheadListTheme });
  },
  mounted() {
    this.$nextTick(() => {
      // Element might have already been destroyed. Do nothing if ref can't be found.
      if (this.$refs && this.$refs.list) {
        this.listElementRef = this.$refs.list.$el;
        document.body.appendChild(this.listElementRef);
      }
    });

    this.$on('blur-dirty', this.trySelectItemMatchingQuery);
    this.$on('item-selected', this.applyInputFocus);
  },
  beforeDestroy() {
    if (this.listElementRef && this.listElementRef.parentNode &&
        this.listElementRef.parentNode === document.body) {
      document.body.removeChild(this.listElementRef);
      this.listElementRef = undefined;
    }

    this.disableOutsideClickListener();
    this.disablePositionHandlerTimeout();

    this.$off('item-selected', this.applyInputFocus);
  },
  methods: {
    handleFocusChange(focus) {
      if (focus) {
        this.onInputFocus();
      } else {
        this.onInputBlur();
      }
    },
    handleKeydown(e) {
      this.charHandler(e);
      this.openList();
    },
    onInputFocus() {
      this.focused = true;
      this.closeListOnItemSelected = true;

      this.openList();
    },
    onInputBlur() {
      this.focused = false;

      if (!this.isInteractingWithList) {
        this.closeList();
        this.closeListOnItemSelected = false;

        // blur event might trigger other actions such as creating an item
        // schedule check if field is still dirty after giving time to other
        // handlers
        clearTimeout(this.dirtyChecker);
        this.dirtyChecker = setTimeout(() => {
          if (!this.focused && this.query && this.query.trim().length > 0) {
            this.$emit('blur-dirty');
            this.$emit('changed');
          }
        }, 1000);
      }
    },
    applyInputFocus() {
      // waits for event propagation and handling before attempting to set focus
      // always check refs.input exists (it might have been deleted by conditionals in client side)
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.$el.blur();
          this.$nextTick(() => {
            if (!this.disabled && this.$refs.input) {
              this.$refs.input.$el.focus();
            }
          });
        }
      });
    },
    openList() {
      if (this.focused) {
        if (!this.activeItemList) {
          this.highlighted = -1;
          this.activeItemList = true;
          this.$emit('list-opened');
          this.disableScroll(this.$refs.input.$el);
        }
      }
    },
    closeList() {
      if (this.activeItemList) {
        this.highlighted = -1;
        this.activeItemList = false;
        this.$emit('list-closed');
        this.$emit('changed');
        this.enableScroll(this.$refs.input.$el);
      }
    },
    highlightItem(direction) {
      const selectableItems = this.listElementRef.querySelectorAll('.typeahead-list__results-item:not(.md-disabled)');

      if (!!selectableItems && selectableItems.length > 0) {
        if (this.highlighted >= 0) {
          selectableItems[this.highlighted].classList.remove('md-highlighted', 'typeahead-list__results-item--selectable');
        }

        if (direction === 'up') {
          if (this.highlighted === 0 || this.highlighted === -1) {
            this.highlighted = selectableItems.length - 1;
          } else {
            this.highlighted--;
          }
        }

        if (direction === 'down') {
          if (this.highlighted === selectableItems.length - 1) {
            this.highlighted = 0;
          } else {
            this.highlighted++;
          }
        }

        selectableItems[this.highlighted].classList.add('md-highlighted');
        selectableItems[this.highlighted].children[1].focus();
      }
    },
    itemClass(item) {
      if (this.defaultSelectableItem !== undefined) {
        return {'typeahead-list__results-item--selectable': item.id === this.defaultSelectableItem.id};
      }
    },
    selectDefaultItem() {
      if (this.defaultSelectableItem) {
        this.selectItemAndCloseList(this.defaultSelectableItem);
      }
    },
    selectItemAndCloseList(item) {
      this.selectItem(item);
      this.closeList();
    },
    createItemAndCloseList() {
      this.createItem();
      this.closeList();
    },
    requestLastItemDeletion() {
      if (this.query.length === 0 && this.selectedItems.length > 0 && !this.itemListVisible) {
        this.$emit('item-removed', this.selectedItems[this.selectedItems.length - 1]);
      }
    },
    trySelectItemMatchingQuery() {
      if (this.selectItemOnInputBlur) {
        const selectionCandidate = this.flattenItemList.find((item) => this.isEqualToText(item, this.query));

        if (selectionCandidate) {
          this.selectItem(selectionCandidate);
        }
      }
    },
    handleItemClicked(item) {
      if (this.closeListOnItemSelected) {
        this.selectItemAndCloseList(item);
      } else {
        this.selectItem(item);
      }
    },
    handleItemMouseDown() {
      this.listItemPressed = true;
    },
    handleItemMouseUp() {
      this.listItemPressed = false;
      this.$nextTick(() => {
        this.onInputBlur();
      });
    },
    setListTopLeftHeight() {
      const list = this.listElementRef;
      const input = this.$refs.input.$el;

      const inputRect = input.getBoundingClientRect();

      const listPositionTop = inputRect.top + input.clientHeight + 8;
      const listPositionLeft = this.itemListFixed ? inputRect.left - input.offsetLeft : inputRect.left;

      list.style.left = `${listPositionLeft + this.itemListOffset.left}px`;
      list.style.top = `${listPositionTop + this.itemListOffset.top}px`;

      if (this.itemListOffset.maxWidth) {
        list.style.maxWidth = `${this.itemListOffset.maxWidth}px`;
      } else {
        const parent = getClosestVueParent(this.$parent, 'tdl-typeahead') || this.$parent;
        list.style.maxWidth = `${parent.$el.clientWidth - (this.itemListFixed ? 0 : input.offsetLeft)}px`;
      }

      const listItemElementSample = list.querySelector('.typeahead-list__results-item');
      const subtitleElementSample = list.querySelector('.typeahead-list__results-subtitle');
      const listItemHeight = listItemElementSample ? listItemElementSample.clientHeight : 48;
      const subtitleHeight = subtitleElementSample ? subtitleElementSample.clientHeight : 68;
      const listHeight = this.flattenItemList.length * listItemHeight + this.subtitleTotalItems * subtitleHeight;

      // doesn't fit in the screen below the input
      if (input.clientHeight + inputRect.top + listHeight > window.innerHeight - (listItemHeight + subtitleHeight)) {
        let availableSpaceBelow = window.innerHeight - (inputRect.top + input.clientHeight);

        const requiredItemsHeight = listItemHeight * 2;
        const requiredSubtitleHeight = subtitleHeight * Math.min(1, this.subtitleTotalItems);

        // can't fit at least 2 items + 1 subtitle
        if (availableSpaceBelow < requiredItemsHeight + requiredSubtitleHeight) {
          // try to position above and  use maximum space available above the input
          const listPositionTopAbove = inputRect.top > listHeight ? inputRect.top - listHeight : 20;

          list.style.top = listPositionTopAbove + 'px';
          list.style.height = `${inputRect.top - listPositionTopAbove - 16}px`;
        } else {
          // use maximum space available below
          const total = Math.min(listHeight, availableSpaceBelow - 16);

          list.style.height = `${total}px`;
        }
      } else {
        // it fits entirely below the input
        list.style.height = 'auto';
      }

      const listItemRect = list.getBoundingClientRect();

      if (listItemRect.width * listItemRect.height > 0) {
        this.listItemBoundingClientRect = listItemRect;
      }
    },
    preventScroll(event) {
      // overrides mixin
      if (!this.listElementRef.contains(event.target)) {
        event.preventDefault();
      }
    },
    requestFocus() {
      this.applyInputFocus();
    },
    disableOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    disablePositionHandlerTimeout() {
      if (this.positionHandlerTimeout) {
        clearInterval(this.positionHandlerTimeout);
        this.positionHandlerTimeout = undefined;
      }
    },
    enableOutsideClickListener() {
      this.outsideClickListener = document.addEventListener('click', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const listItemRect = this.listItemBoundingClientRect;
        const clickInsideListItem = !!listItemRect &&
                                    x >= listItemRect.x && x <= listItemRect.x + listItemRect.width &&
                                    y >= listItemRect.y && y <= listItemRect.y + listItemRect.height;

        const inputRect = this.$el.getBoundingClientRect();
        const clickInsideInput = x >= inputRect.x && x <= inputRect.x + inputRect.width &&
                                 y >= inputRect.y && y <= inputRect.y + inputRect.height;

        if (!clickInsideInput && !clickInsideListItem) {
          this.closeList();
        }

        event.stopImmediatePropagation();
        return false;
      });
    },
    schedulePositionHandler(previousRect) {
      if (previousRect || !this.positionHandlerTimeout) {
        this.positionHandlerTimeout = setTimeout(() => {
          const inputRect = previousRect || this.$refs.input.$el.getBoundingClientRect();
          this.setListTopLeftHeightIfInputMoved(inputRect);
        }, 300);
      }
    },
    setListTopLeftHeightIfInputMoved(inputRect) {
      const currentRect = this.$refs.input.$el.getBoundingClientRect();
      const rectChanged = currentRect.x !== inputRect.x
                       || currentRect.y !== inputRect.y
                       || currentRect.width !== inputRect.width
                       || currentRect.height !== inputRect.height
                       || currentRect.bottom !== inputRect.bottom
                       || currentRect.left !== inputRect.left
                       || currentRect.right !== inputRect.right
                       || currentRect.top !== inputRect.top;

      if (rectChanged) {
        this.setListTopLeftHeight();
        this.schedulePositionHandler(currentRect);
      } else {
        this.schedulePositionHandler(inputRect);
      }
    }
  }
};

export default TdlTypeaheadList;
