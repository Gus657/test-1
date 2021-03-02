<template>
  <span 
    class="md-icon"
    :style="cssVariables"
  >
    <svg viewBox="0 0 24 25">
      <path :class="currentTheme" :d="iconSvg" />
    </svg>
    <div v-if="badge" class="md-icon__badge">{{badgeText}}</div>
  </span>
</template>

<style lang="scss" src="./mdIcon.scss"></style>

<script>
  import mdIconTheme from './mdIcon-theme.scss';

  const MdIcon = {
    name: 'md-icon',
    props: {
      mdSrc: String,
      iconSvg: String,
      badge: Number,
      iconColor: {
        type: String,
        default: "currentColor"
      },
      size: {
        type: String,
        default: "24px"
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdIcon", theme: mdIconTheme });
    },
    data: () => ({
      svgContent: null,
      imageSrc: null
    }),
    computed: {
      badgeText() {
        return Math.min(this.badge, 99);
      },
      currentTheme() {
        return this.theme;
      },
      cssVariables() {
        return {
          '--size': this.size,
          '--icon-color': this.iconColor
        };
      },
    }
  };

  export default MdIcon;
</script>
<i18n src="./mdIcon.json"></i18n> 
