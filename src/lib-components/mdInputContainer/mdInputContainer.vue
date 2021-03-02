<template>
  <div class="md-theme-dark md-input-container" :class="[themeClass, classes]">
    <slot/>
    <label v-if="mdInline && $slots.label">
      <slot name="label"/>
    </label>
    <div class="outlined-notched">
      <div class="outlined-notched__leading"></div>
      <div class="outlined-notched__notch">
        <label v-if="!mdInline && $slots.label">
          <slot name="label"/>
        </label>
      </div>
      <div class="outlined-notched__trailing"></div>
    </div>

    <span class="md-count" v-if="enableCounter">{{ inputLength }} / {{ counterLength }}</span>

    <md-button tabindex="-1" class="md-icon-button md-toggle-password" @click.prevent="togglePasswordType" v-if="mdHasPassword">
      <md-icon :icon-svg="showPassword ? mdiEyeOffIcon : mdiEyeIcon"></md-icon>
    </md-button>

    <md-button tabindex="-1" class="md-icon-button md-clear-input" @click="clearInput" v-if="mdClearable && hasValue">
      <md-icon :icon-svg="mdiCloseIcon"></md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  import isArray from '../../core/utils/isArray';
  import MdButton  from '@/lib-components/mdButton/mdButton.vue';
  import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
  import mdInputContainerTheme from './mdInputContainer-theme.scss';
  import { mdiClose, mdiEye, mdiEyeOff } from "@mdi/js"
  
  const MdInputContainer = {
    name: 'md-input-container',
    components: {
      MdButton,
      MdIcon
    },
    props: {
      mdInline: Boolean,
      mdHasPassword: Boolean,
      mdClearable: Boolean,
      mdSimple: Boolean,
      mdClear: Boolean
    },
    data() {
      return {
        value: '',
        input: false,
        inputInstance: null,
        showPassword: false,
        enableCounter: false,
        hasSelect: false,
        hasPlaceholder: false,
        hasFile: false,
        isDisabled: false,
        isRequired: false,
        isFocused: false,
        counterLength: 0,
        inputLength: 0,
        mdiCloseIcon: mdiClose,
        mdiEyeIcon: mdiEye,
        mdiEyeOffIcon: mdiEyeOff
      };
    },
    watch: {
      inputInstance: {
        handler(newInstanceVal) {
          if (newInstanceVal) {
            this.evaluateChild();
          }
        }
      }
    },
    computed: {
      hasValue() {
        if (isArray(this.value)) {
          return this.value.length > 0;
        }

        return Boolean(this.value);
      },
      classes() {
        return {
          'md-input-inline': this.mdInline,
          'md-has-password': this.mdHasPassword,
          'md-clearable': this.mdClearable,
          'md-has-select': this.hasSelect,
          'md-has-counter': this.enableCounter,
          'md-has-file': this.hasFile,
          'md-has-value': this.hasValue,
          'md-has-label': !!this.$slots.label,
          'md-input-placeholder': this.hasPlaceholder,
          'md-input-disabled': this.isDisabled,
          'md-input-required': this.isRequired,
          'md-input-focused': this.isFocused,
          'md-input-container--simple': this.mdSimple,
          'md-input-container--clear': this.mdClear
        };
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdInputContainer", theme: mdInputContainerTheme });
    },
    methods: {
      isInput() {
        return this.input && this.input.tagName.toLowerCase() === 'input';
      },
      togglePasswordType() {
        if (this.isInput()) {
          if (this.input.type === 'password') {
            this.input.type = 'text';
            this.showPassword = true;
          } else {
            this.input.type = 'password';
            this.showPassword = false;
          }

          this.input.focus();
        }
      },
      clearInput() {
        this.inputInstance.$el.value = '';
        this.inputInstance.$emit('input', '');
        this.setValue('');
      },
      setValue(value) {
        this.value = value;
      },
      evaluateChild() {
        this.$nextTick(() => {
          this.input = this.$el.querySelectorAll('input, textarea, select, .md-file')[0];
          this.$nextTick(() => {
            if (!this.input) {
              this.$destroy();

              throw new Error('Missing input/select/textarea inside md-input-container');
            }
          });
        });
      }
    }
  };

  export default MdInputContainer;
</script>
<i18n src="./mdInputContainer.json"></i18n>
