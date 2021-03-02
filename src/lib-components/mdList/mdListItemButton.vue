<template>
  <li class="md-list-item" :class="classes">
    <div class="md-list-item-container md-button">
      <slot></slot>
    </div>

    <md-button type="button" class="md-button-ghost" @click="$emit('click', $event)" :disabled="disabled"></md-button>
  </li>
</template>

<script>
  import MdButton  from '@/lib-components/mdButton/mdButton.vue';
  export default {
    name: 'md-list-item',
    components: {
      MdButton
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
<i18n src="./mdListItemButton.json"></i18n> 
