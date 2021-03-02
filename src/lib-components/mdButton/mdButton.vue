<template>
  <a 
    class="md-button"
    :class="[themeClass]"
    :href="href"
    :disabled="disabled"
    :target="target"
    :style="cssVariables"
    :rel="newRel"
    @click="$emit('click', $event)" 
    v-if="href"
  >
    <div v-if="badge" class="md-button__badge">{{badgeText}}</div>
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </a>

  <button
    class="md-button" 
    :class="[themeClass]" 
    :type="type" 
    :disabled="disabled"
    :style="cssVariables"
    @click="$emit('click', $event)"
    v-else
  >
    <div v-if="badge" class="md-button__badge">{{badgeText}}</div>
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </button>
</template>

<style lang="scss" src="./mdButton.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import MdInkRipple from '@/core/components/mdInkRipple/mdInkRipple.vue';
  import mdButtonTheme from './mdButton-theme.scss';

  const MdButton = {
    name: 'md-button',
    components: {
      MdInkRipple
    },
    props: {
      href: String,
      target: String,
      rel: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      badge: Number
    },
    mixins: [theme],
    computed: {
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener';
        }

        return this.rel;
      },
      badgeText() {
        return Math.min(this.badge, 99);
      },
      currentTheme() {
        return this.theme;
      }
    },
    created() {
      this.$root.$emit("component-created", { name:"mdButton", theme: mdButtonTheme });
    }
  };
  export default MdButton;
</script>
<i18n src="./mdButton.json"></i18n> 
