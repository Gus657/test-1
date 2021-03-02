<template>
  <transition name="md-progress" appear>
    <div class="md-progress" :class="[themeClass, classes]">
      <div class="md-progress-track" :style="styles"></div>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdProgress.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import mdProgressTheme from './mdProgress-theme.scss';

  const MdProgress = {
    name: 'md-progress',
    mixins: [theme],
    props: {
      mdIndeterminate: Boolean,
      mdProgress: {
        type: Number,
        default: 0
      }
    },
    computed: {
      classes() {
        return {
          'md-indeterminate': this.mdIndeterminate
        };
      },
      styles() {
        if (!this.mdIndeterminate) {
          return {
            width: this.mdProgress + '%'
          };
        }
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdProgress", theme: mdProgressTheme });
    }
  };

  export default MdProgress;
</script>
<i18n src="./mdProgress.json"></i18n> 
