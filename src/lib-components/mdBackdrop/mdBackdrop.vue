<template>
  <div class="md-backdrop" @click="close" @keyup.esc="close" ref="backdrop"></div>
</template>

<style lang="scss" src="./mdBackdrop.scss"></style>

<script>
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  const MdBackdrop = {
    name: 'md-backdrop',
    mounted() {
      if (this.$refs.backdrop) {
        this.$refs.backdrop.addEventListener('touchmove', this.handleTouchMove, supportsPassive ? { passive: false } : false);
      }
    },
    beforeDestroy() {
      if (this.$refs.backdrop) {
        this.$refs.backdrop.removeEventListener('touchmove', this.handleTouchMove, supportsPassive ? { passive: false } : false);
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      handleTouchMove: function(event) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };
  export default MdBackdrop;
</script>
<i18n src="./mdBackdrop.json"></i18n>
