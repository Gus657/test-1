<template>
  <hr class="md-divider" :class="[themeClass]">
</template>

<style lang="scss" src="./mdDivider.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import mdDividerTheme from './mdDivider-theme.scss';

  const MdDivider  = {
    name: 'md-divider',
    mixins: [theme],
    created: function() {
      this.$root.$emit("component-created", { name: "mdDivider", theme: mdDividerTheme });
    }
  };
  
  export default MdDivider;
</script>
<i18n src="./mdDivider.json"></i18n>
