'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var MdBackdrop = require('./MdBackdrop.js');
var transitionEndEventName = require('./transitionEndEventName-137bd43f.js');

var mdDialogTheme = ".THEME_NAME.md-dialog-container .md-dialog {\n  background-color: BACKGROUND-ELEVATION_1;\n  color: TEXT-TITLE;\n}";

//
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
    this.$root.$emit("component-created", {
      name: "mdDialog",
      theme: mdDialogTheme
    });
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

              this.dialogInnerElement.removeEventListener(transitionEndEventName.transitionEndEventName, cleanElement);
              document.body.removeChild(this.dialogElement);
              this.dialogTransform = '';
            };

            this.transitionOff = true;
            this.dialogTransform = '';
            this.calculateDialogPos(this.mdCloseTo);
            window.setTimeout(() => {
              this.transitionOff = false;
              this.active = false;
              this.dialogInnerElement.addEventListener(transitionEndEventName.transitionEndEventName, cleanElement);
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

/* script */
const __vue_script__ = MdDialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-dialog-container",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        $event.stopPropagation();
        return _vm.closeOnEsc($event);
      }
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("md-dialog", _vm.dialogClasses) + _vm._ssrStyle(null, _vm.styles, null) + ">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm.mdBackdrop ? _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-dialog-backdrop",
    class: _vm.classes,
    on: {
      "close": function ($event) {
        _vm.mdClickOutsideToClose && _vm.close();
      }
    }
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-0100d732_0", {
    source: "body.scroll-blocked{overflow:hidden}.md-dialog-container{display:flex;flex-flow:column;justify-content:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:108;-webkit-overflow-scrolling:auto}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-container.md-transition-off .md-dialog{transition:none!important}.md-dialog-backdrop{position:fixed;z-index:109}.md-dialog-backdrop.md-transition-off{transition:none!important}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:flex;flex-flow:column;overflow:hidden;position:relative;z-index:110;outline:0;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s 50ms cubic-bezier(.25,.8,.25,1);will-change:opacity,transform;background-color:#27292d;color:rgba(255,255,255,.9)}@media (min-width:600px){.md-dialog{max-width:600px}}.md-dialog.md-fullscreen{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}.md-dialog.md-fullscreen .md-dialog-content{padding:0}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0;word-wrap:break-word}.md-dialog-content{padding:0 24px 24px;flex:1;flex-basis:auto;overflow:auto;position:relative;word-wrap:break-word}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:flex;align-items:center;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-0100d732";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
