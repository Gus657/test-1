<template>
  <div class="md-card" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdCard.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import mdCardTheme from './mdCard-theme.scss';

  const MdCard = {
    name: 'md-card',
    props: {
      mdWithHover: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-with-hover': this.mdWithHover
        };
      }
    },
    created: function() {
      this.$root.$emit("component-created", { name: "mdCard", theme: mdCardTheme });
    }
  };
  
  export default MdCard;
</script>
<i18n src="./mdCard.json"></i18n> 
