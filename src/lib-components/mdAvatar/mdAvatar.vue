<template>
  <div class="md-avatar" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdAvatar.scss"></style>

<script>
  import mdAvatarTheme from './mdAvatar-theme.scss';

  const MdAvatar = {
    name: 'md-avatar',
    created() {
      this.$root.$emit("component-created", { name: "mdAvatar", theme: mdAvatarTheme });
    }
  };
  export default MdAvatar;
</script>
<i18n src="./mdAvatar.json"></i18n> 
