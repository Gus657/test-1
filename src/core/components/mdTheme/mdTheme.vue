<script>
  export default {
    name: 'md-theme',
    props: {
      mdTag: String,
      mdName: {
        type: String,
        default: 'default'
      }
    },
    render(createElement) {
      if (this.mdTag || this.$slots.default.length > 1) {
        return createElement(this.mdTag || 'div', {
          staticClass: this.$root.$material.prefix + this.mdName
        }, this.$slots.default);
      }

      return this.$slots.default[0];
    }
  };
</script>
