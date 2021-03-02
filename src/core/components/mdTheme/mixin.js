// Theme mixin

export default {
  computed: {
    themeClass() {
      if (this.$root.$material) {
        return this.$root.$material.prefix + this.$root.$material.currentTheme;
      } else {
        return "default"
      }
    }
  }
};
