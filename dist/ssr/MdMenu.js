'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdBackdrop = require('./MdBackdrop.js');
var transitionEndEventName = require('./transitionEndEventName-137bd43f.js');

const margin = 0;

const isAboveOfViewport = (element, position) => {
  return position.top <= margin - parseInt(getComputedStyle(element).marginTop, 10);
};

const isBelowOfViewport = (element, position) => {
  return position.top + element.offsetHeight + margin >= window.innerHeight - parseInt(getComputedStyle(element).marginTop, 10);
};

const isOnTheLeftOfViewport = (element, position) => {
  return position.left <= margin - parseInt(getComputedStyle(element).marginLeft, 10);
};

const isOnTheRightOfViewport = (element, position) => {
  return position.left + element.offsetWidth + margin >= window.innerWidth - parseInt(getComputedStyle(element).marginLeft, 10);
};

const getInViewPosition = (element, position) => {
  let computedStyle = getComputedStyle(element);

  if (isAboveOfViewport(element, position)) {
    position.top = margin - parseInt(computedStyle.marginTop, 10);
  }

  if (isOnTheLeftOfViewport(element, position)) {
    position.left = margin - parseInt(computedStyle.marginLeft, 10);
  }

  if (isOnTheRightOfViewport(element, position)) {
    position.left = window.innerWidth - margin - element.offsetWidth - parseInt(computedStyle.marginLeft, 10);
  }

  if (isBelowOfViewport(element, position)) {
    position.top = window.innerHeight - margin - element.offsetHeight - parseInt(computedStyle.marginTop, 10);
  }

  return position;
};

var mdMenuTheme = ".md-menu-content .THEME_NAME.md-list {\n  background-color: BACKGROUND-ELEVATION_2;\n  color: TEXT-TITLE;\n}\n.md-menu-content .THEME_NAME.md-list .md-menu-item:hover, .md-menu-content .THEME_NAME.md-list .md-menu-item:focus, .md-menu-content .THEME_NAME.md-list .md-menu-item.md-highlighted {\n  background-color: BACKGROUND-INVERTED-0.12;\n}\n.md-menu-content .THEME_NAME.md-list .md-menu-item:hover .md-button, .md-menu-content .THEME_NAME.md-list .md-menu-item:focus .md-button, .md-menu-content .THEME_NAME.md-list .md-menu-item.md-highlighted .md-button {\n  background-color: transparent;\n}\n.md-menu-content .THEME_NAME.md-list .md-menu-item.md-disabled {\n  color: TEXT-DISABLED;\n}";

//
const MdMenu = {
  name: 'md-menu',
  components: {
    MdBackdrop
  },
  mixins: [mixin.theme],
  props: {
    mdSize: {
      type: [Number, String],
      default: 0
    },
    mdDirection: {
      type: String,
      default: 'bottom right'
    },
    mdAlignTrigger: {
      type: Boolean,
      default: false
    },
    mdOffsetX: {
      type: [Number, String],
      default: 0
    },
    mdOffsetY: {
      type: [Number, String],
      default: 0
    },
    mdCloseOnSelect: {
      type: Boolean,
      default: true
    },
    mdAutoWidth: {
      type: Boolean,
      default: false
    },
    mdFixed: {
      type: Boolean,
      default: false
    },
    mdNoFocus: {
      type: Boolean,
      default: false
    },
    mdManualToggle: {
      type: Boolean,
      default: false
    },
    mdMaxHeight: {
      type: Number,
      default: 0
    },
    mdTransparentBackdrop: {
      type: Boolean,
      default: true
    },
    mdHasBackdrop: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    active: false
  }),
  watch: {
    mdSize(current, previous) {
      if (current >= 1 && current <= 7) {
        this.removeLastSizeMenuContentClass(previous);
        this.addNewSizeMenuContentClass(current);
      }
    },

    mdDirection(current, previous) {
      this.removeLastDirectionMenuContentClass(previous);
      this.addNewDirectionMenuContentClass(current);
    },

    mdAlignTrigger(trigger) {
      this.handleAlignTriggerClass(trigger);
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "mdMenu",
      theme: mdMenuTheme
    });
  },
  methods: {
    validateMenu() {
      if (!this.menuContent) {
        this.$destroy();
        throw new Error('You must have a md-menu-content inside your menu.');
      }

      if (!this.menuTrigger) {
        this.$destroy();
        throw new Error('You must have an element with a md-menu-trigger attribute inside your menu.');
      }

      this.configureMenu();
    },

    removeLastSizeMenuContentClass(size) {
      this.menuContent.classList.remove('md-size-' + size);
    },

    removeLastDirectionMenuContentClass(direction) {
      this.menuContent.classList.remove('md-direction-' + direction.replace(/ /g, '-'));
    },

    addNewSizeMenuContentClass(size) {
      this.menuContent.classList.add('md-size-' + size);
    },

    addNewDirectionMenuContentClass(direction) {
      this.menuContent.classList.add('md-direction-' + direction.replace(/ /g, '-'));
    },

    handleAlignTriggerClass(trigger) {
      if (trigger) {
        this.menuContent.classList.add('md-align-trigger');
      }
    },

    getPosition(vertical, horizontal) {
      let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
      let top = vertical === 'top' ? menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight : menuTriggerRect.top;
      let left = horizontal === 'left' ? menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width : menuTriggerRect.left;
      top += parseInt(this.mdOffsetY, 10);
      left += parseInt(this.mdOffsetX, 10);

      if (this.mdAlignTrigger) {
        if (vertical === 'top') {
          top -= menuTriggerRect.height + 11;
        } else {
          top += menuTriggerRect.height + 11;
        }
      }

      return {
        top,
        left
      };
    },

    calculateMenuContentPos() {
      let position;
      let width;
      let margin = 8;

      if (this._destroyed) {
        return;
      }

      if (!this.mdDirection) {
        position = this.getPosition('bottom', 'right');
      } else {
        position = this.getPosition.apply(this, this.mdDirection.trim().split(' '));
      }

      if (this.mdAutoWidth) {
        width = this.menuTrigger.getBoundingClientRect().width;
        this.menuContent.style.width = parseInt(width, 10) + 'px';
      }

      if (!this.mdFixed) {
        position = getInViewPosition(this.menuContent, position);
      } else if (this.mdMaxHeight === 0) {
        this.menuContent.style.maxHeight = window.innerHeight - this.menuTrigger.getBoundingClientRect().bottom - margin + 'px';
      } else if (this.menuContent.children[0].children.length > 0) {
        let listElemHeight = this.menuContent.children[0].children[0].clientHeight;
        this.menuContent.style.maxHeight = margin * 2 + listElemHeight * this.mdMaxHeight + 'px';
      }

      this.menuContent.style.top = position.top + window.pageYOffset + 'px';
      this.menuContent.style.left = position.left + window.pageXOffset + 'px';
    },

    recalculateOnResize() {
      window.requestAnimationFrame(this.calculateMenuContentPos);
    },

    open() {
      if (document.body.contains(this.menuContent)) {
        document.body.removeChild(this.menuContent);
      }

      document.body.appendChild(this.menuContent);

      if (this.mdHasBackdrop && this.backdropElement) {
        document.body.appendChild(this.backdropElement);
      }

      window.addEventListener('resize', this.recalculateOnResize);
      this.calculateMenuContentPos();
      getComputedStyle(this.menuContent).top;
      this.menuContent.classList.add('md-active');

      if (!this.mdNoFocus) {
        this.menuContent.focus();
      }

      this.active = true;
      this.$emit('open');
    },

    close() {
      let close = event => {
        if (this.menuContent && event.target === this.menuContent) {
          let activeRipple = this.menuContent.querySelector('.md-ripple.md-active');
          this.menuContent.removeEventListener(transitionEndEventName.transitionEndEventName, close);

          if (!this.mdNoFocus) {
            this.menuTrigger.focus();
          }

          this.active = false;

          if (activeRipple) {
            activeRipple.classList.remove('md-active');
          }

          if (document.body.contains(this.menuContent)) {
            document.body.removeChild(this.menuContent);
          }

          if (this.backdropElement && document.body.contains(this.backdropElement)) {
            document.body.removeChild(this.backdropElement);
          }

          window.removeEventListener('resize', this.recalculateOnResize);
        }
      };

      if (this.menuContent) {
        this.menuContent.addEventListener(transitionEndEventName.transitionEndEventName, close);
        this.menuContent.classList.remove('md-active');
      }

      this.$emit('close');
    },

    toggle() {
      if (this.active) {
        this.close();
      } else {
        this.open();
      }
    },

    configureMenu() {
      this.$nextTick(() => {
        this.handleAlignTriggerClass(this.mdAlignTrigger);
        this.addNewSizeMenuContentClass(this.mdSize);
        this.addNewDirectionMenuContentClass(this.mdDirection);

        if (this.$refs.backdrop) {
          this.$el.removeChild(this.$refs.backdrop.$el);
        }

        this.menuContent.parentNode.removeChild(this.menuContent);

        if (!this.mdManualToggle) {
          this.menuTrigger.addEventListener('click', this.toggle);
        }

        this.$emit("menu-configured");
      });
    }

  },

  mounted() {
    setTimeout(() => {
      this.menuTrigger = this.$el.querySelector('[md-menu-trigger]');
      this.menuContent = this.$el.querySelector('.md-menu-content');
      this.backdropElement = this.$refs.backdrop ? this.$refs.backdrop.$el : undefined;
      this.$nextTick(() => {
        this.validateMenu();
      });
    }, 600);
  },

  beforeDestroy() {
    if (document.body.contains(this.menuContent)) {
      document.body.removeChild(this.menuContent);

      if (this.backdropElement) {
        document.body.removeChild(this.backdropElement);
      }
    }

    if (!this.mdManualToggle && this.menuTrigger) {
      this.menuTrigger.removeEventListener('click', this.toggle);
    }

    window.removeEventListener('resize', this.recalculateOnResize);
    this._destroyed = true;
  }

};

/* script */
const __vue_script__ = MdMenu;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-menu"
  }, [_vm._t("default"), _vm._ssrNode(" "), _c('md-backdrop', {
    ref: "backdrop",
    class: ['md-menu-backdrop md-active', {
      'md-transparent': _vm.mdTransparentBackdrop
    }],
    on: {
      "close": _vm.close
    }
  })], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-642fb358_0", {
    source: ".md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:131;transform:scale(.9,.85) translateZ(0);border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .3s cubic-bezier(.55,0,.55,.2),margin .3s cubic-bezier(.55,0,.55,.2),transform 0s .4s cubic-bezier(.55,0,.55,.2);will-change:transform,opacity,width}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1),transform .3s cubic-bezier(.25,.8,.25,1)}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .3s cubic-bezier(.25,.8,.25,1)}.md-menu-content .md-list{opacity:0;transition:opacity .3s cubic-bezier(.25,.8,.25,1);background-color:#383b40;color:rgba(255,255,255,.9)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item[disabled]{cursor:default}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-menu-item.md-highlighted,.md-menu-item:focus,.md-menu-item:hover{background-color:rgba(255,255,255,.12)}.md-menu-item.md-highlighted .md-button,.md-menu-item:focus .md-button,.md-menu-item:hover .md-button{background-color:transparent}.md-menu-item.md-disabled{color:rgba(255,255,255,.38)}.md-menu-backdrop{position:fixed;z-index:130!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-642fb358";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
