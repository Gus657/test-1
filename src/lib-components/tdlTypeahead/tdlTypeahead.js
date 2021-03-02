import { mdiClose, mdiInformation } from "@mdi/js";
import debounce from 'lodash-es/debounce';
import reduce from 'lodash-es/reduce';
import isArray from 'lodash-es/isArray';
import isEqual from 'lodash-es/isEqual';
import { isTablet as deviceIsTablet, isMobile as deviceIsMobile } from '../../core/utils/deviceHelper';
import theme from '../../core/components/mdTheme/mixin';

import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdInputContainer from '@/lib-components/mdInputContainer/mdInputContainer.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import MdChip from '@/lib-components/mdChips/mdChip.vue';
import TdlTypeaheadDialog from '@/lib-components/tdlTypeahead/tdlTypeaheadDialog.vue';
import TdlTypeaheadAddNewItem from '@/lib-components/tdlTypeahead/tdlTypeaheadAddNewItem.vue';
import TdlTypeaheadList from '@/lib-components/tdlTypeahead/tdlTypeaheadList.vue';
import { default as TdlTypeaheadLocale } from "./tdlTypeahead_i18n";

import tdlTypeaheadTheme from './tdlTypeahead-theme.scss';

const FETCH_LIST_TIMEOUT_MS = 5000;

const TdlTypeahead = {
  name: 'tdl-typeahead',
  components: {
    MdInputContainer,
    MdIcon,
    MdTooltip,
    MdChip,
    MdButton,
    TdlTypeaheadDialog,
    TdlTypeaheadAddNewItem,
    TdlTypeaheadList
  },
  mixins: [theme],
  props: {
    addItemOnKeypress: String,
    addNewItem: Boolean,
    addNewItemElement: {
      type: Object,
      default: () => ({
        type: 'Person',
        icon: 'person_add',
        iconset: ''
      })
    },
    addNewItemSlotPosition: {
      type: String,
      default: deviceIsMobile() || deviceIsTablet() ? 'top' : 'bottom'
    },
    addNewItemWhenQueryMatches: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 100
    },
    defaultItemSelector: Function,
    desktopCloseListOnItemSelected: Boolean,
    desktopItemListFixed: Boolean,
    desktopItemListOffset: {
      type: Object,
      required: false,
      default: () => ({ top: 0, left: 0 })
    },
    desktopQueryValidator: Function,
    desktopSelectItemOnInputBlur: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    fetchList: Function,
    filterList: {
      type: Function,
      default: () => true
    },
    inputLabel: String,
    inputPlaceholder: String,
    inputTooltipText: String,
    itemDisabled: {
      type: Function,
      default: () => false
    },
    itemFactory: {
      type: Function,
      default: (text) => Promise.resolve({id: text, text: text})
    },
    itemSelectedValidator: {
      type: Function,
      default(item) {
        return !this.selectedItems.find((selected) => selected.id === item.id);
      }
    },
    minChars: {
      type: Number,
      default: 0
    },
    maxItems: {
      type: Number,
      default: Infinity
    },
    maxQueryLength: {
      type: [Number, String],
      default: Infinity
    },
    mobileAcceptFocusRequests: {
      type: Boolean,
      required: false,
      default: false
    },
    newItemStyles: {
      type: Object,
      default: () => ({ "--theme-color": "#CDDC39" })
    },
    searchHintMode: {
      type: String,
      required: false,
      default: 'focus'
    },
    value: {
      type: Array,
      default: () => []
    },
    mdSimple: Boolean,
    mdClear: Boolean
  },
  data() {
    return {
      focused: false,
      selectedItems: [],
      baseList: {},
      fetchListError: '',
      fetchListDebounced: Function,
      fetching: [],
      queryInvalid: false,
      mdiCloseIcon: mdiClose,
      mdiInformationIcon: mdiInformation
    };
  },
  watch: {
    value(values) {
      this.selectedItems = values;
    },
    selectedItems(newVal, oldVal) {
      if (!isEqual(newVal, oldVal)) {
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    isMobile() {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      return width < 720 || deviceIsTablet();
    },
    loading: function() {
      return this.fetching.length > 0;
    },
    disabledInput: function() {
      return this.selectedItems.length >= this.maxItems;
    },
    classes: function() {
      return {
        'md-disabled': this.disabled,
        'md-has-value': this.selectedItems.length,
        'md-input-invalid': this.fetchListError || this.queryInvalid,
        'has-only-item': this.selectedItems.length === 1 && this.maxItems === 1,
        'tdl-typeahead--clear': this.mdClear,
        'tdl-typeahead--simple': this.mdSimple
      };
    },
    itemList: function() {
      return reduce(this.baseList, (result, value, key) => {
        result[key] = value.filter(this.filterList);
        return result;
      }, {});
    },
    hasDefaultSlot: function() {
      return !!this.$slots.default;
    },
    hasItemSlot: function() {
      return !!this.$slots['item'] || !!this.$scopedSlots['item'];
    },
    hasAfterInputSlot: function() {
      return !!this.$slots['after-input'] || !!this.$scopedSlots['after-input'];
    },
    hasBeforeInputSlot: function() {
      return !!this.$slots['before-input'] || !!this.$scopedSlots['before-input'];
    },
    hasBeforeListSlot: function() {
      return !!this.$slots['before-list'] || !!this.$scopedSlots['before-list'];
    },
    hasCreateSlot: function() {
      return !!this.$slots['create'] || !!this.$scopedSlots['create'];
    },
    hasChipSlot: function() {
      return !!this.$slots['chip'] || !!this.$scopedSlots['chip'];
    },
    hasChipsSlot: function() {
      return !!this.$slots['chips'] || !!this.$scopedSlots['chips'];
    },
    hasNoResultsSlot: function() {
      return !!this.$slots['no-results'] || !!this.$scopedSlots['no-results'];
    },
    onlyOneSelectedItem: function() {
      return this.selectedItems.length === 1 && this.maxItems === 1;
    }
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlTypeahed", theme: tdlTypeaheadTheme });
    this.$root.$emit("update-locale-string", TdlTypeaheadLocale);
  },
  mounted() {
    if (this.value) {
      this.selectedItems = this.value;
    }

    this.fetchListDebounced = debounce(this.doFetchList, this.debounce, {
      leading: true,
      trailing: true
    });
  },
  beforeDestroy() {
    this.$emit('selector-closed');
  },
  methods: {
    handleQueryChanged(newVal) {
      if (this.focused) {
        if (this.selectedItems.length < this.maxItems && newVal.length >= this.minChars) {
          this.fetchListDebounced(newVal);
        } else {
          this.baseList = {};
        }
      }

      this.$emit('query-changed', newVal);
    },
    handleQueryInvalid(newVal) {
      this.queryInvalid = newVal;
    },
    handleFocus({focused, query}) {
      if (focused && this.selectedItems.length < this.maxItems) {
        this.baseList = {};
        if (query.length >= this.minChars) {
          this.fetchListDebounced(query);
        }
      }

      this.focused = focused;
    },
    doFetchList(query) {
      const suffix = Math.random();
      const key = `${query}.${suffix}`;

      this.fetchListError = false;
      this.fetching.push(key);

      const timeoutPromise = new Promise((_, rej) => {
        setTimeout(() => rej({ message: 'fetch-list.timeout' }), FETCH_LIST_TIMEOUT_MS);
      });

      Promise
        .race([this.fetchList(query), timeoutPromise])
        .then((response) => {
          this.baseList = isArray(response) ? {$default: response} : response;
          this.fetching = this.fetching.filter((k) => k !== key);
          this.$nextTick(() => {
            const itemListLength = reduce(this.itemList, (result, value) => result + value.length, 0);

            this.$emit('item-list-changed', {itemListLength: itemListLength});
          });
        })
        .catch((err) => {
          this.fetchListError = err.message;
          this.fetching = this.fetching.filter((k) => k !== key);
        });
    },
    deleteChip(item) {
      this.selectedItems = this.selectedItems.filter((selected) => selected.id !== item.id);
      this.refreshInput();
    },
    handleItemSelected(item) {
      this.selectedItems = this.selectedItems.concat([item]);
      this.$emit('changed', item);
      this.refreshInput();
    },
    handleItemRemoved(item) {
      this.deleteChip(item);
      this.$emit('changed');
    },
    // Public API
    clear() {
      if (this.$refs['delegatedTypeahead']) {
        this.$refs['delegatedTypeahead'].clear();
      }
    },
    requestFocus() {
      this.$nextTick(() => {
        if (this.$refs['delegatedTypeahead']) {
          this.$refs['delegatedTypeahead'].requestFocus();
        }
      });
    },
    setInput(input) {
      if (this.$refs['delegatedTypeahead']) {
        this.$refs['delegatedTypeahead'].setInput(input);
      }
    },
    refreshInput() {
      const input = this.$refs.delegatedTypeahead;
      input.onInputBlur();
      input.onInputFocus();
    }
  }
};

export default TdlTypeahead;
