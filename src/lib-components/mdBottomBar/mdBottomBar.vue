<template>
  <div class="md-bottom-bar" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdBottomBar.scss"></style>

<script>
  const MdBottomBar = {
    name: 'md-bottom-bar',
    props: {
      mdShift: Boolean
    },
    computed: {
      classes() {
        return this.mdShift ? 'md-shift' : 'md-fixed';
      }
    },
    methods: {
      setActive(item) {
        this.$children.forEach((child) => {
          child.active = child === item;
        });

        this.$emit('change', this.$children.findIndex((i) => i === item));
      }
    }
  };
  export default MdBottomBar;
</script>
<i18n src="./mdBottomBar.json"></i18n> 
