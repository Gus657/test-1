<template>
  <div class="tdl-overlay">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./tdlOverlay.scss"></style>

<i18n src="./tdlOverlay.json"></i18n> 

<script>
  const TdlOverlay = {
    name: 'tdl-overlay'
  }

  export default TdlOverlay;
</script>
