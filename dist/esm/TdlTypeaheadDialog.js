import './normalize-component-ea49d1b5.js';
import './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import MdIcon from './MdIcon.js';
import { mdiArrowLeft, mdiClose, mdiMagnify } from '@mdi/js';
import MdChip from './MdChip.js';
import './isArray-e89cc533.js';
import MdInputContainer from './MdInputContainer.js';
import './common-b6651023.js';
import './getClosestVueParent-5770502b.js';
import MdInput from './MdInput.js';
import MdList from './MdList.js';
import MdListItem from './MdListItem.js';
import MdProgress from './MdProgress.js';
import MdWhiteframe from './MdWhiteframe.js';
import 'lodash-es/reduce';
import { T as TdlTypeaheadCommon } from './tdlTypeaheadCommon-0425e36a.js';

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
      mdiArrowLeftIcon: mdiArrowLeft,
      mdiCloseIcon: mdiClose,
      mdiMagnifyIcon: mdiMagnify
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

export default TdlTypeaheadDialog;
