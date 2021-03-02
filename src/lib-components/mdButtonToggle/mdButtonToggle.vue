<template>
  <div class="md-button-toggle" :class="[themeClass]" >
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdButtonToggle.scss"></style>

<script>
  let onClickButton;

  const MButtonToggle = {
    name: 'md-button-toggle',
    props: {
      mdSingle: Boolean,
      mdManualToggle: Boolean
    },
    mounted() {
      if (!this.mdManualToggle) {
        this.$children.forEach((child) => {
          let element = child.$el;
          let toggleClass = 'md-toggle';

          onClickButton = () => {
            if (this.mdSingle) {
              this.$children.forEach((child) => {
                child.$el.classList.remove(toggleClass);
              });

              element.classList.add(toggleClass);
            } else {
              element.classList.toggle(toggleClass);
            }
          };

          if (element && element.classList.contains('md-button')) {
            element.addEventListener('click', onClickButton);
          }
        });
      }
    },
    beforeDestroy() {
      if (!this.mdManualToggle) {
        this.$children.forEach((child) => {
          let element = child.$el;

          if (element && element.classList.contains('md-button')) {
            element.removeEventListener('click', onClickButton);
          }
        });
      }
    }
  };
  
  export default MButtonToggle;
</script>
<i18n src="./mdButtonToggle.json"></i18n> 
