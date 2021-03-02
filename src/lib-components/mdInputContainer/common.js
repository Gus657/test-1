export default {
  props: {
    value: [String, Number],
    debounce: {
      type: Number,
      default: 1E2
    },
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    disableCounter: {
      type: Boolean,
      default: false
    },
    name: String,
    placeholder: String,
    readonly: Boolean,
    scrollParams: {
      type: Object,
      default: () => {
        return {
          enable: false,
          config: {}
        };
      }
    }
  },
  data() {
    return {
      timeout: 0
    };
  },
  watch: {
    value() {
      this.updateValues();
    },
    disabled() {
      this.setParentDisabled();
    },
    required() {
      this.setParentRequired();
    },
    placeholder() {
      this.setParentPlaceholder();
    },
    maxlength() {
      this.handleMaxLength();
    }
  },
  methods: {
    handleMaxLength() {
      this.parentContainer.enableCounter = !this.disableCounter && this.maxlength > 0;
      this.parentContainer.counterLength = this.maxlength;
    },
    lazyEventEmitter() {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        this.$emit('change', this.$el.value);
        this.$emit('input', this.$el.value);
      }, this.debounce);
    },
    setParentValue(value) {
      this.parentContainer.setValue(value || this.$el.value);
    },
    setParentDisabled() {
      if (this.parentContainer) {
        this.parentContainer.isDisabled = this.disabled;
      }
    },
    setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder() {
      if (this.parentContainer) {
        this.parentContainer.hasPlaceholder = !!this.placeholder;
      }
    },
    updateValues() {
      this.$nextTick(() => {
        const newValue = this.$el.value || this.value;

        this.setParentValue(newValue);
        this.parentContainer.inputLength = newValue ? newValue.length : 0;
      });
    },
    onFocus(event) {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }

      this.$emit('focus', this.$el.value, event);
    },
    scrollIfNeeded($event) {
      const { target } = $event;

      if (!Element.prototype.scrollIntoView) {
        setTimeout(function() {
          target.focus();
          this.$emit('focus', this.$el.value, $event);
        }, 200);
      } else {
        target.scrollIntoView(this.scrollParams.config);
      }

    },
    onBlur(event) {
      this.parentContainer.isFocused = false;
      this.setParentValue();

      this.$emit('blur', this.$el.value, event);
    },
    onInput($event) {
      this.updateValues();
      this.lazyEventEmitter();
      if (this.scrollParams.enable) {
        this.scrollIfNeeded($event);
      }
    },
    onEnterKey(event) {
      this.$emit('onEnterKey', event);
    }
  }
};
