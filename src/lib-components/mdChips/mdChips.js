import uniqueId from '@/core/utils/uniqueId';

import MdChip from '@/lib-components/mdChips/mdChip.vue';
import MdInputContainer from '@/lib-components/mdInputContainer/mdInputContainer.vue';
import MdInput from '@/lib-components/mdInputContainer/mdInput.vue';

const MdChips = {
  name: 'md-chips',
  components: {
    MdChip,
    MdInput,
    MdInputContainer
  },
  props: {
    value: Array,
    disabled: Boolean,
    debounce: {
      type: Number,
      default: 1E2
    },
    mdInputId: String,
    mdInputName: String,
    mdInputPlaceholder: String,
    mdInputType: {
      type: String,
      default: 'text'
    },
    mdStatic: Boolean,
    mdMax: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      currentChip: null,
      selectedChips: this.value,
      inputId: this.mdInputId || 'chips-' + uniqueId()
    };
  },
  watch: {
    value(value) {
      this.selectedChips = value;
    },
    currentChip(value, previousValue) {
      if (!!value !== !!previousValue) {
        this.$emit('current-chip-change', value);
      }
    }
  },
  computed: {
    hasValue() {
      return !!(this.value && this.value.length);
    },
    classes() {
      return {
        'md-static': this.mdStatic,
        'md-disabled': this.disabled,
        'md-chips': true,
        'md-chips--with-value': this.hasValue
      };
    }
  },
  methods: {
    applyInputFocus() {
      this.$nextTick(() => {
        this.$refs.input.$el.focus();
      });
    },
    addChip() {
      if (this.currentChip && this.selectedChips.length < this.mdMax) {
        const value = this.currentChip.trim();

        if (this.selectedChips.indexOf(value) < 0) {
          this.selectedChips.push(value);
          this.currentChip = null;
          this.$emit('input', this.selectedChips);
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    },
    deleteChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    editChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.currentChip = chip;
      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    deleteLastChip() {
      if (!this.currentChip) {
        this.selectedChips.pop();
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      }
    }
  }
};

export default MdChips;