<template>
  <div class="md-card-area" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  const MdCardArea = {
    name: 'md-card-area',
    props: {
      mdInset: Boolean
    },
    computed: {
      classes() {
        return {
          'md-inset': this.mdInset
        };
      }
    }
  };

  export default MdCardArea;
</script>
<i18n src="./mdCardArea.json"></i18n> 
