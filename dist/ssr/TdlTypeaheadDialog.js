'use strict';

require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
var MdChip = require('./MdChip.js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
var MdInput = require('./MdInput.js');
var MdList = require('./MdList.js');
var MdListItem = require('./MdListItem.js');
var MdProgress = require('./MdProgress.js');
var MdWhiteframe = require('./MdWhiteframe.js');
require('lodash-es/reduce');
var tdlTypeaheadCommon = require('./tdlTypeaheadCommon-06052a16.js');

var tdlTypeaheadDialogTheme = ".THEME_NAME .results__result--selectable {\n  background-color: ACCENT-PRIMARY-0.12;\n}\n.THEME_NAME.typeahead-dialog__input-container {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.typeahead-dialog__input-container .typeahead-dialog__search-actions {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.typeahead-dialog__search-actions-close {\n  color: TEXT-DEFAULT;\n}";

const TdlTypeaheadDialog = {
  name: 'tdl-typeahead-dialog',
  components: {
    MdButton,
    MdChip,
    MdIcon,
    MdInput,
    MdInputContainer,
    MdList,
    MdListItem,
    MdProgress,
    MdWhiteframe
  },
  mixins: [mixin.theme, tdlTypeaheadCommon.TdlTypeaheadCommon],
  props: {
    selectedItems: {
      type: Array,
      required: true
    },
    defaultItemSelector: Function,
    disabled: Boolean,
    addNewItem: Boolean,
    addNewItemWhenQueryMatches: Boolean,
    itemDisabled: Function,
    itemFactory: Function,
    loading: Boolean,
    itemList: {
      type: Object,
      required: true
    },
    addItemOnKeypress: {
      type: String,
      required: false
    },
    acceptFocusRequests: Boolean,
    inputLabel: String,
    inputPlaceholder: String,
    itemSelectedValidator: {
      type: Function,
      required: true
    },
    maxQueryLength: {
      type: [Number, String],
      default: Infinity
    },
    addNewItemSlotPosition: {
      type: String
    },
    searchHintMode: String,
    minChars: Number
  },
  computed: {
    cssProps() {
      return {
        '--vh': this.realViewportHeightScale
      };
    },

    inputContainerClasses() {
      return {
        'typeahead-dialog__input-container--open': this.openInputContainer
      };
    },

    hasAfterInputSlot: function () {
      return !!this.$slots['mobileAfterInput'] || !!this.$scopedSlots['mobileAfterInput'];
    },

    hasBeforeInputSlot() {
      return !!this.$slots['mobileBeforeInput'] || !!this.$scopedSlots['mobileBeforeInput'];
    },

    hasBeforeListSlot() {
      return !!this.$slots['mobileBeforeList'] || !!this.$scopedSlots['mobileBeforeList'];
    },

    hasChipsSlot: function () {
      return !!this.$slots['mobileChips'] || !!this.$scopedSlots['mobileChips'];
    },
    hasCreateSlot: function () {
      return !!this.$slots['mobileCreate'] || !!this.$scopedSlots['mobileCreate'];
    },

    hasNoResultsSlot() {
      return !!this.$slots['mobileNoResults'] || !!this.$scopedSlots['mobileNoResults'];
    },

    noResultsVisible() {
      return this.hasNoResultsSlot && this.flattenItemList.length === 0 && this.query.length >= this.minChars;
    },

    showAddNewItem() {
      return this.addNewItem && this.query.length > 0 && (!this.queryInItemList || this.addNewItemWhenQueryMatches);
    }

  },

  data() {
    return {
      openInputContainer: false,
      searchInputFocused: false,
      realViewportHeightScale: this.calcRealVPScale(),
      mdiArrowLeftIcon: js.mdiArrowLeft,
      mdiCloseIcon: js.mdiClose,
      mdiMagnifyIcon: js.mdiMagnify
    };
  },

  watch: {
    disabled(newVal) {
      if (newVal) {
        this.openInputContainer = false;
        this.$emit('dialog-closed');
      }
    },

    searchInputFocused(newVal) {
      this.$emit('focused', {
        focused: newVal,
        query: this.query
      });
    },

    openInputContainer(newVal) {
      if (newVal) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlTypeaheadDialog",
      theme: tdlTypeaheadDialogTheme
    });
  },

  mounted() {
    this.$nextTick(() => {
      // Element might have already been destroyed. Do nothing if ref can't be found.
      if (this.$refs && this.$refs.inputDialog) {
        document.body.appendChild(this.$refs.inputDialog);
        this.$emit('query-changed', this.query);
      }
    });
    this.$on('item-selected', this.handleItemSelected);
    window.addEventListener('resize', this.handleWindowResize);
  },

  beforeDestroy() {
    if (this.$refs.inputDialog && this.$refs.inputDialog.parentNode && this.$refs.inputDialog.parentNode === document.body) {
      document.body.removeChild(this.$refs.inputDialog);
    }

    this.$off('item-selected', this.handleItemSelected);
    window.removeEventListener('resize', this.handleWindowResize);
  },

  methods: {
    onSearchInputFocus() {
      this.searchInputFocused = true;
    },

    onSearchInputBlur() {
      this.searchInputFocused = false;
      this.$emit('changed');
    },

    openDialog() {
      this.openInputContainer = true;
      this.reset();
      this.$emit('dialog-opened');
    },

    closeInputContainer() {
      this.clear();
      this.openInputContainer = false;
      this.$emit('dialog-closed');
    },

    deleteSelected(item) {
      this.$emit('item-removed', item);
    },

    handleClearSearch() {
      this.clear();
      this.reset();
    },

    handleItemSelected() {
      this.reset();
      this.closeInputContainer();
    },

    handleWindowResize() {
      this.realViewportHeightScale = this.calcRealVPScale();
    },

    calcRealVPScale() {
      return `${window.innerHeight * 0.01}px`;
    },

    reset() {
      this.$nextTick(() => {
        if (this.$refs.searchInput) {
          setTimeout(() => {
            this.$refs.searchInput.$el.focus();
          }, 0);
        }
      });
    },

    textInputHandler(event) {
      // Chrome Android doesn't add the key property to keydown events. Use textInput instead.
      if (this.addItemOnKeypress && this.addItemOnKeypress === event.data && this.addNewItem) {
        event.preventDefault();
        this.createItem();
      }
    },

    itemClass(item) {
      if (this.defaultSelectableItem) {
        return {
          'results__result--selectable': this.defaultSelectableItem.id === item.id
        };
      }

      return {};
    },

    selectDefaultItem() {
      if (this.defaultSelectableItem) {
        this.selectItem(this.defaultSelectableItem);
      }
    },

    preventScroll(event) {
      // overrides mixin
      if (this.$refs.$results && !this.$refs.$results.contains(event.target)) {
        event.preventDefault();
      }
    },

    requestFocus() {
      if (this.acceptFocusRequests) {
        this.openDialog();
      }
    }

  }
};

module.exports = TdlTypeaheadDialog;
