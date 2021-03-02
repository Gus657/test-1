<template>
  <li class="md-list-item" :class="classes" :disabled="disabled">
    <slot />
    <md-ink-ripple :disabled="disabled" />
  </li>
</template>

<script>
  import MdInkRipple from '@/core/components/mdInkRipple/mdInkRipple.vue';

  export default {
    name: 'md-list-item',
    components: {
      MdInkRipple
    },
    props: {
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    }
  };
</script>
<i18n src="./mdListItemRouter.json"></i18n> 
