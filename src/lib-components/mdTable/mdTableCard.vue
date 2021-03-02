<template>
  <md-card class="md-table-card" :class="[themeClass]">
    <slot></slot>
  </md-card>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-table-card',
    mixins: [theme]
  };

  // export { TdlComp as MdTableCard };
  // export default TdlComp;
</script>
<i18n src="./mdTableCard.json"></i18n> 
