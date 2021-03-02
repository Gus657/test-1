<template>
  <li class="md-subheader" :class="[themeClass]" v-if="$parent.$options._componentTag === 'md-list'">
    <slot></slot>
  </li>

  <div class="md-subheader" :class="[themeClass]" v-else>
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdSubheader.scss"></style>

<script>
  const MdSubheader = {
    name: 'md-subheader'
  };

  export default MdSubheader;
</script>
