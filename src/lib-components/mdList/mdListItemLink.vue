<template>
  <li class="md-list-item" :class="classes">
    <a class="md-list-item-container md-button" :href="href" :target="target" @click="$emit('click', $event)" :disabled="disabled">
      <slot />
    </a>

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
      href: String,
      target: String,
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
<i18n src="./mdListItemLink.json"></i18n> 
