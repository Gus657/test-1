<template>
  <ul class="md-list" :class="themeClass">
    <slot></slot>
  </ul>
</template>

<style lang="scss" src="./mdList.scss"></style>

<script>
  import mdListTheme from './mdList-theme.scss';
  import theme from '../../core/components/mdTheme/mixin';

  const MdList = {
    name: 'md-list',
    mixins: [theme],
    created() {
      this.$root.$emit("component-created", { name: "mdList", theme: mdListTheme });
    }
  };

  export default MdList;
</script>
<i18n src="./mdList.json"></i18n> 
