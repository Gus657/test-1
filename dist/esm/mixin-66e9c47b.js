// Theme mixin
var theme = {
  computed: {
    themeClass() {
      if (this.$root.$material) {
        return this.$root.$material.prefix + this.$root.$material.currentTheme;
      } else {
        return "default";
      }
    }

  }
};

export { theme as t };
