<template>
  <div class="md-dialog-container" :class="[themeClass, classes]" @keyup.esc.stop="closeOnEsc" tabindex="0">
    <div class="md-dialog" ref="dialog" :style="styles" :class="dialogClasses">
      <slot></slot>
    </div>

    <md-backdrop class="md-dialog-backdrop" :class="classes" v-if="mdBackdrop" ref="backdrop" @close="mdClickOutsideToClose && close()"></md-backdrop>
  </div>
</template>

<style lang="scss" src="./mdDialog.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import MdBackdrop from '@/lib-components/mdBackdrop/mdBackdrop.vue';
  import mdDialogTheme from './mdDialog-theme.scss';

  const MdDialog = {
    name: 'md-dialog',
    components: {
      MdBackdrop
    },
    props: {
      mdClickOutsideToClose: {
        type: Boolean,
        default: true
      },
      mdEscToClose: {
        type: Boolean,
        default: true
      },
      mdBackdrop: {
        type: Boolean,
        default: true
      },
      mdOpenFrom: String,
      mdCloseTo: String,
      mdFullscreen: {
        type: Boolean,
        default: false
      },
      mdShutdownTransition: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      active: false,
      transitionOff: false,
      dialogTransform: ''
    }),
    computed: {
      classes() {
        return {
          'md-active': this.active,
          'md-transition-off': this.transitionOff
        };
      },
      dialogClasses() {
        return {
          'md-fullscreen': this.mdFullscreen,
          'md-transition-off': this.transitionOff,
          'md-reference': this.mdOpenFrom || this.mdCloseTo
        };
      },
      styles() {
        return {
          transform: this.dialogTransform
        };
      }
    },
    created() {
      this.$root.$emit("component-created", { name: "mdDialog", theme: mdDialogTheme });
    },
    methods: {
      disableScroll() {
        document.body.classList.add('scroll-blocked');
      },
      enableScroll() {
        document.body.classList.remove('scroll-blocked');
      },
      removeDialog() {
        if (document.body.contains(this.dialogElement)) {
          this.$el.parentNode.removeChild(this.$el);
        }
      },
      calculateDialogPos(ref) {
        const reference = document.querySelector(ref);

        if (reference) {
          const openFromRect = reference.getBoundingClientRect();
          const dialogRect = this.dialogInnerElement.getBoundingClientRect();
          const widthInScale = openFromRect.width / dialogRect.width;
          const heightInScale = openFromRect.height / dialogRect.height;
          let distance = {
            top: -(dialogRect.top - openFromRect.top),
            left: -(dialogRect.left - openFromRect.left + openFromRect.width)
          };

          if (openFromRect.top > dialogRect.top + dialogRect.height) {
            distance.top = openFromRect.top - dialogRect.top;
          }

          if (openFromRect.left > dialogRect.left + dialogRect.width) {
            distance.left = openFromRect.left - dialogRect.left - openFromRect.width;
          }

          this.dialogTransform = `translate3D(${distance.left}px, ${distance.top}px, 0) scale(${widthInScale}, ${heightInScale})`;
        }
      },
      open() {
        document.body.appendChild(this.dialogElement);
        this.transitionOff = true;
        this.calculateDialogPos(this.mdOpenFrom);

        window.setTimeout(() => {
          this.dialogElement.focus();
          this.transitionOff = this.mdShutdownTransition;
          this.active = true;
          this.disableScroll();
        });

        this.$emit('open');
      },
      closeOnEsc() {
        if (this.mdEscToClose) {
          this.close();
        }
      },
      close(checkUnmodifiedState = true) {
        const event = new Event('mdDialogClose', {
          cancelable: true
        });
        const closable = window.dispatchEvent(event);

        if (closable || !checkUnmodifiedState) {
          if (document.body.contains(this.dialogElement)) {
            this.$nextTick(() => {
              let cleanElement = () => {
                let activeRipple = this.dialogElement.querySelector('.md-ripple.md-active');

                if (activeRipple) {
                  activeRipple.classList.remove('md-active');
                }

                this.dialogInnerElement.removeEventListener(transitionEndEventName, cleanElement);
                document.body.removeChild(this.dialogElement);
                this.dialogTransform = '';
              };

              this.transitionOff = true;
              this.dialogTransform = '';
              this.calculateDialogPos(this.mdCloseTo);

              window.setTimeout(() => {
                this.transitionOff = false;
                this.active = false;
                this.dialogInnerElement.addEventListener(transitionEndEventName, cleanElement);
              });

              this.$emit('close');
            });
          }
        } else {
          this.$nextTick(() => {
            this.$emit('close');
          });
        }
        this.enableScroll();
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.dialogElement = this.$el;
        this.dialogInnerElement = this.$refs.dialog;
        this.removeDialog();
      });
    },
    beforeDestroy() {
      this.removeDialog();
      this.enableScroll();
    }
  };
  export default MdDialog;
</script>
<i18n src="./mdDialog.json"></i18n>
