<template>
  <div class="md-chip" :class="[themeClass, classes]" tabindex="0">
    <div class="md-chip-container" @click="!disabled && mdEditable && $emit('edit')">
      <slot></slot>
    </div>

    <md-button
      class="md-icon-button md-dense md-delete"
      v-if="mdDeletable"
      @click="!disabled && $emit('delete')"
      @keyup.native.delete="!disabled && $emit('delete')"
      tabindex="-1">
      <md-icon :icon-svg="mdiCloseIcon" class="md-icon-delete"></md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdChips.scss"></style>

<script>
  import MdButton  from '@/lib-components/mdButton/mdButton.vue';
  import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
  import { mdiCloseCircle } from "@mdi/js";
  import mdChipTheme from './mdChip-theme.scss'; 

  const MdChip = {
    name: 'md-chip',
    components: {
      MdButton,
      MdIcon
    },
    props: {
      disabled: Boolean,
      mdDeletable: Boolean,
      mdEditable: Boolean
    },
    data() {
      return {
        mdiCloseIcon: mdiCloseCircle
      };
    },
    computed: {
      classes() {
        return {
          'md-deletable': this.mdDeletable,
          'md-disabled': this.disabled,
          'md-editable': this.mdEditable
        };
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdChip", theme: mdChipTheme });
    }
  };

  export default MdChip;
</script>
<i18n src="./mdChip.json"></i18n> 
