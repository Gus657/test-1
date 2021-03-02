<template>
  <div class="md-toolbar" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdToolbar.scss"></style>

<script>
  const MdToolbar = {
    name: 'md-toolbar'
  };

  export default MdToolbar;
</script>
