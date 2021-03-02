import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import { u as uniqueId } from './uniqueId-5b272221.js';
import { t as transitionEndEventName } from './transitionEndEventName-e3bb98be.js';
import Vue from 'vue';

const manager = new Vue({
  data() {
    return {
      current: null
    };
  }

});

var mdSnackbarTheme = ".THEME_NAME .md-snackbar .md-ink-ripple, .THEME_NAME.md-snackbar .md-ink-ripple {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME .md-snackbar .md-snackbar-container, .THEME_NAME.md-snackbar .md-snackbar-container {\n  background-color: COMPONENT-SNACKBAR;\n  color: TEXT-ACCENT_TITLE;\n}";

//
const MdSnackbar = {
  name: 'md-snackbar',
  props: {
    id: [String, Number],
    mdPosition: {
      type: String,
      default: 'bottom center'
    },
    mdDuration: {
      type: [String, Number],
      default: 4000
    }
  },
  mixins: [theme],

  data() {
    return {
      snackbarId: this.id || 'snackbar-' + uniqueId(),
      removedSnackBarElementEventName: 'removedSnackBarElement',
      active: false,
      rootElement: {},
      snackbarElement: {},
      directionClass: null,
      closeTimeout: null,
      removedSnackBarElementEvent: null
    };
  },

  computed: {
    classes() {
      let cssClasses = {
        'md-active': this.active
      };
      this.directionClass = this.mdPosition.replace(/ /g, '-');
      cssClasses['md-position-' + this.directionClass] = true;
      return cssClasses;
    }

  },
  watch: {
    active(active) {
      const directionClass = 'md-has-toast-' + this.directionClass;
      const toastClass = 'md-has-toast';

      if (active) {
        document.body.classList.add(directionClass);
        document.body.classList.add(toastClass);
      } else {
        document.body.classList.remove(directionClass);
        document.body.classList.remove(toastClass);
      }
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdSnackbar",
      theme: mdSnackbarTheme
    });
  },

  methods: {
    removeElement() {
      // if we have the element and we don't want it active anymore, remove it
      if (document.body.contains(this.snackbarElement) && !this.active) {
        const activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

        if (activeRipple) {
          activeRipple.classList.remove('md-active');
        }

        document.body.removeChild(this.snackbarElement);
      }

      document.dispatchEvent(this.removedSnackBarElementEvent);
    },

    open() {
      if (manager.current) {
        // we need to wait for the old element to finishing closing before we can open a new one
        document.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
        document.addEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
        manager.current.close();
        return;
      }

      this.showElementAndStartTimer();
    },

    showElementAndStartTimer() {
      if (document.body.contains(this.snackbarElement)) {
        return;
      }

      document.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
      manager.current = this;
      document.body.appendChild(this.snackbarElement);

      if (this.$refs.container !== null && this.$refs.container !== undefined) {
        window.getComputedStyle(this.$refs.container).backgroundColor;
      }

      this.active = true;
      this.$emit('open');

      if (this.mdDuration !== Infinity) {
        this.setCloseTimeout(this.mdDuration);
      }

      this.timeoutStartedAt = Date.now();
    },

    close() {
      if (this.$refs.container) {
        //we set the flag to false here, because we need to inform the removeElement method that we really
        // want to remove the element - we're in closing action
        this.active = false;

        const removeElement = () => {
          document.removeEventListener(transitionEndEventName, removeElement);
          this.removeElement();
        };

        manager.current = null;
        this.$emit('close');
        document.removeEventListener(transitionEndEventName, removeElement);
        document.addEventListener(transitionEndEventName, removeElement);
        this.clearCloseTimeout();
        this.pendingDuration = this.mdDuration;
      }
    },

    pauseTimeout() {
      this.pendingDuration = this.pendingDuration - (Date.now() - this.timeoutStartedAt);
      this.timeoutStartedAt = 0;
      this.clearCloseTimeout();
    },

    resumeTimeout() {
      this.timeoutStartedAt = Date.now();

      if (this.pendingDuration === Infinity) {
        return;
      }

      this.setCloseTimeout(this.pendingDuration);
    },

    setCloseTimeout(delay) {
      this.clearCloseTimeout();
      this.closeTimeout = window.setTimeout(this.close, delay);
    },

    clearCloseTimeout() {
      if (!this.closeTimeout) {
        return;
      }

      window.clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.snackbarElement = this.$el;
      this.snackbarElement.parentNode.removeChild(this.snackbarElement);
      this.timeoutStartedAt = 0;
      this.pendingDuration = this.mdDuration;
    });
    this.removedSnackBarElementEvent = new Event(this.removedSnackBarElementEventName);
  },

  beforeDestroy() {
    this.clearCloseTimeout();
    this.active = false;
    this.removeElement();
  }

};

/* script */
const __vue_script__ = MdSnackbar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-snackbar",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "id": _vm.snackbarId
    },
    on: {
      "mouseenter": _vm.pauseTimeout,
      "mouseleave": _vm.resumeTimeout
    }
  }, [_c('div', {
    ref: "container",
    staticClass: "md-snackbar-container"
  }, [_c('div', {
    staticClass: "md-snackbar-content"
  }, [_vm._t("default")], 2)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-d4755d78_0", {
    source: ".md-snackbar{display:flex;position:fixed;right:0;left:0;z-index:120;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:margin-top,margin-bottom}.md-snackbar.md-position-bottom-center,.md-snackbar.md-position-top-center{justify-content:center}.md-snackbar.md-position-bottom-right,.md-snackbar.md-position-top-right{margin-right:24px;justify-content:flex-end}.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-top-left{margin-left:24px;justify-content:flex-start}.md-snackbar.md-position-top-center,.md-snackbar.md-position-top-left,.md-snackbar.md-position-top-right{margin-top:24px}.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-bottom-right{margin-bottom:24px}.md-snackbar.md-position-top-center,.md-snackbar.md-position-top-left,.md-snackbar.md-position-top-right{top:0}.md-snackbar.md-position-top-center .md-snackbar-container,.md-snackbar.md-position-top-left .md-snackbar-container,.md-snackbar.md-position-top-right .md-snackbar-container{transform:translate3D(0,calc(-100% - 24px),0)}.md-snackbar.md-position-bottom-center,.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-bottom-right{bottom:0}.md-snackbar.md-position-bottom-center .md-snackbar-container,.md-snackbar.md-position-bottom-left .md-snackbar-container,.md-snackbar.md-position-bottom-right .md-snackbar-container{transform:translate3D(0,calc(100% + 24px),0)}.md-snackbar.md-active .md-snackbar-container{transform:translate3D(0,0,0)}.md-snackbar.md-active .md-snackbar-content{opacity:1;transition:opacity .4s .1s cubic-bezier(.25,.8,.25,1)}@media (max-width:600px){.md-snackbar{margin:0!important}}.md-snackbar .md-snackbar-content{display:flex;align-items:center;justify-content:space-between;opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1);will-change:opacity}.md-snackbar .md-button{min-width:64px;margin:-8px -16px}.md-snackbar .md-button:last-child{margin-left:48px}.md-snackbar-container{width:auto;min-width:288px;max-width:568px;min-height:48px;padding:14px 24px;overflow:hidden;pointer-events:auto;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);font-size:14px}@media (max-width:600px){.md-snackbar-container{width:100%;max-width:100%;border-radius:0}}.md-has-toast-top-right .md-fab.md-fab-top-right{transform:translate3D(0,68px,0)}@media (max-width:600px){.md-has-toast-top-right .md-fab.md-fab-top-right{transform:translate3D(0,48px,0)}}.md-has-toast-top-center .md-fab.md-fab-top-center{transform:translate3D(-50%,68px,0)}@media (max-width:600px){.md-has-toast-top-center .md-fab.md-fab-top-center{transform:translate3D(-50%,48px,0)}}.md-has-toast-top-left .md-fab.md-fab-top-left{transform:translate3D(0,68px,0)}@media (max-width:600px){.md-has-toast-top-left .md-fab.md-fab-top-left{transform:translate3D(0,48px,0)}}.md-has-toast-bottom-right .md-fab.md-fab-bottom-right{transform:translate3D(0,-68px,0)}@media (max-width:600px){.md-has-toast-bottom-right .md-fab.md-fab-bottom-right{transform:translate3D(0,-48px,0)}}.md-has-toast-bottom-center .md-fab.md-fab-bottom-center{transform:translate3D(-50%,-68px,0)}@media (max-width:600px){.md-has-toast-bottom-center .md-fab.md-fab-bottom-center{transform:translate3D(-50%,-48px,0)}}.md-has-toast-bottom-left .md-fab.md-fab-bottom-left{transform:translate3D(0,-68px,0)}@media (max-width:600px){.md-has-toast-bottom-left .md-fab.md-fab-bottom-left{transform:translate3D(0,-48px,0)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

export default __vue_component__;
