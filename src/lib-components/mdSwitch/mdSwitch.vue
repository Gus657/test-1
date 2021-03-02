<template>
  <div class="md-switch" :class="[themeClass, classes]">
    <div class="md-switch-container" @click="toggle($event)">
      <div class="md-switch-thumb" :style="styles">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value" tabindex="-1">
        <button :type="type" class="md-switch-holder"></button>
        <md-ink-ripple :md-disabled="disabled" />
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdSwitch.scss"></style>

<script>
  import mdSwitchTheme from './mdSwitch-theme.scss';
  import theme from '../../core/components/mdTheme/mixin';
  import MdInkRipple from '@/core/components/mdInkRipple/mdInkRipple.vue';

  const checkedPosition = 75;
  const initialPosition = '-1px';

  const MdSwitch = {
    name: 'md-switch',
    components: {
      MdInkRipple
    },
    props: {
      name: String,
      value: Boolean,
      id: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'button'
      }
    },
    mixins: [theme],
    data() {
      return {
        leftPos: initialPosition,
        checked: Boolean(this.value)
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': this.checked,
          'md-disabled': this.disabled
        };
      },
      styles() {
        return {
          transform: `translate3D(${this.leftPos}, -50%, 0)`
        };
      }
    },
    watch: {
      checked() {
        this.setPosition();
      },
      value(value) {
        this.changeState(value);
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdSwitch", theme: mdSwitchTheme });
    },
    methods: {
      setPosition() {
        this.leftPos = this.checked ? checkedPosition + '%' : initialPosition;
      },
      changeState(checked, $event) {
        if (typeof $event !== 'undefined') {
          this.$emit('change', checked, $event);

          if (!$event.defaultPrevented) {
            this.checked = checked;
          }
          this.$emit('input', this.checked, $event);
        } else {
          this.checked = checked;
        }
      },
      toggle($event) {
        if (!this.disabled) {
          this.changeState(!this.checked, $event);
        }
      }
    },
    mounted() {
      this.$nextTick(this.setPosition);
    }
  };

  export default MdSwitch;
</script>
