<template>
  <div class="md-radio" :class="[themeClass, classes]">
    <div class="md-radio-container" @click.stop="toggleCheck">
      <input type="radio" :name="name" :id="id" :disabled="disabled" :value="value">
      <md-ink-ripple :md-disabled="disabled" />
    </div>

    <label :for="id || name" class="md-radio-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdRadio.scss"></style>

<script>
  import MdInkRipple from "@/core/components/mdInkRipple/mdInkRipple.vue";
  import theme from '../../core/components/mdTheme/mixin';
  import mdRadioTheme from './mdRadio-theme.scss';

  const MdRadio = {
    name: 'md-radio',
    components: {
      MdInkRipple
    },
    mixins: [theme],
    props: {
      name: String,
      id: String,
      value: [String, Boolean, Number],
      mdValue: {
        type: [String, Boolean, Number],
        required: true
      },
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-checked': typeof this.value !== 'undefined' && this.value !== null && this.mdValue.toString() === this.value.toString(),
          'md-disabled': this.disabled
        };
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdRadio", theme: mdRadioTheme });
    },
    methods: {
      toggleCheck($event) {
        if (!this.disabled) {
          this.$emit('change', this.mdValue, $event);
          this.$emit('input', this.mdValue, $event);
        }
      }
    }
  };

  export default MdRadio;
</script>
<i18n src="./mdRadio.json"></i18n> 
