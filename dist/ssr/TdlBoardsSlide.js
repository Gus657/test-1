'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var MdCard = require('./MdCard.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
require('./uniqueId-a0313ec5.js');
require('./getClosestVueParent-cfb023f4.js');
var MdOnboarding = require('./MdOnboarding.js');
var throttle = require('./throttle-050ff218.js');

var mdBoardsTheme = ".THEME_NAME.md-boards > .md-boards-navigation {\n  background-color: transparent;\n}\n.THEME_NAME.md-boards > .md-boards-navigation .md-board-header {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-boards > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards > .md-boards-navigation .md-board-header:focus {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-boards > .md-boards-navigation .md-board-header.md-disabled {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-boards > .md-boards-navigation .md-button {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation {\n  background-color: transparent;\n}\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header:focus {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header.md-disabled {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-button {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-button {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation {\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-button {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation {\n  background-color: ACCENT-WARN;\n}\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header:focus {\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header.md-disabled {\n  color: TEXT-ACCENT_DISABLED;\n}\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-button {\n  color: TEXT-ACCENT_DEFAULT;\n}";

//
var script = {
  name: "md-boards",
  components: {
    MdButton,
    MdIcon
  },
  props: {
    mdFixed: Boolean,
    mdCentered: Boolean,
    mdRight: Boolean,
    mdDynamicHeight: {
      type: Boolean,
      default: true
    },
    mdElevation: {
      type: [String, Number],
      default: 0
    },
    mdAuto: {
      type: Boolean,
      default: false
    },
    mdDuration: {
      type: Number,
      default: 5000
    },
    mdControls: {
      type: Boolean,
      default: false
    },
    mdInfinite: {
      type: Boolean,
      default: false
    },
    mdSwipeable: Boolean,
    mdSwipeDistance: {
      type: Number,
      default: 100
    },
    hideDots: {
      type: Boolean,
      default: false
    }
  },
  mixins: [mixin.theme],
  data: () => ({
    boardList: {},
    activeBoard: null,
    activeBoardNumber: 0,
    hasIcons: false,
    hasLabel: false,
    transitionControl: null,
    transitionOff: false,
    contentHeight: '0px',
    contentWidth: '0px',
    autoTransition: null,
    mdiChevronLeftIcon: js.mdiChevronLeft,
    mdiChevronRightIcon: js.mdiChevronRight
  }),
  computed: {
    boardClasses() {
      return {
        'md-dynamic-height': this.mdDynamicHeight,
        'md-transition-off': this.transitionOff
      };
    },

    navigationClasses() {
      return {
        'md-has-icon': this.hasIcons,
        'md-has-label': this.hasLabel,
        'md-fixed': this.mdFixed,
        'md-right': !this.mdCentered && this.mdRight,
        'md-centered': this.mdCentered || this.mdFixed
      };
    },

    indicatorClasses() {
      let toLeft = this.lastIndicatorNumber > this.activeBoardNumber;
      this.lastIndicatorNumber = this.activeBoardNumber;
      return {
        'md-transition-off': this.transitionOff,
        'md-to-right': !toLeft,
        'md-to-left': toLeft
      };
    }

  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "mdBoards",
      theme: mdBoardsTheme
    });
  },
  methods: {
    getHeaderClass(header) {
      return {
        'md-active': this.activeBoard === header.id,
        'md-disabled': header.disabled
      };
    },

    registerBoard(boardData) {
      this.boardList[boardData.id] = boardData;
    },

    unregisterBoard(boardData) {
      delete this.boardList[boardData.id];
    },

    updateBoard(boardData) {
      this.registerBoard(boardData);

      if (boardData.active) {
        if (!boardData.disabled) {
          this.setActiveBoard(boardData);
        } else if (Object.keys(this.boardList).length) {
          let boardsIds = Object.keys(this.boardList);
          let targetIndex = boardsIds.indexOf(boardData.id) + 1;
          let target = boardsIds[targetIndex];

          if (target) {
            this.setActiveBoard(this.boardList[target]);
          } else {
            this.setActiveBoard(this.boardList[0]);
          }
        }
      }
    },

    observeElementChanges() {
      this.parentObserver = new MutationObserver(throttle.throttle(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.boardsContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },

    getBoardIndex(id) {
      const idList = Object.keys(this.boardList);
      return idList.indexOf(id);
    },

    calculateIndicatorPos() {
      if (this.$refs.boardHeader && this.$refs.boardHeader[this.activeBoardNumber]) {
        const boardsWidth = this.$el.offsetWidth;
        const activeBoard = this.$refs.boardHeader[this.activeBoardNumber];
        const left = activeBoard.offsetLeft;
        const right = boardsWidth - left - activeBoard.offsetWidth;
        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      }
    },

    calculateBoardsWidthAndPosition() {
      const width = this.$el.offsetWidth;
      let index = 0;
      this.contentWidth = width * this.activeBoardNumber + 'px';

      for (const boardId in this.boardList) {
        const board = this.boardList[boardId];
        board.ref.width = width + 'px';
        board.ref.left = width * index + 'px';
        index++;
      }
    },

    calculateContentHeight() {
      this.$nextTick(() => {
        if (Object.keys(this.boardList).length) {
          let height = this.boardList[this.activeBoard].ref.$el.offsetHeight;
          this.contentHeight = height + 'px';
        }
      });
    },

    calculatePosition() {
      window.requestAnimationFrame(() => {
        if (this._destroyed) {
          return;
        }

        this.calculateIndicatorPos();
        this.calculateBoardsWidthAndPosition();
        this.calculateContentHeight();
      });
    },

    debounceTransition() {
      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout(() => {
        this.calculatePosition();
        this.transitionOff = false;
      }, 200);
    },

    calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },

    calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    },

    start() {
      if (this.autoTransition) {
        window.clearInterval(this.autoTransition);
      }

      this.autoTransition = window.setInterval(() => {
        this.moveNextBoard();
      }, this.mdDuration);
    },

    setActiveBoard(boardData, reset) {
      if (this.mdAuto && reset) {
        this.start();
      }

      this.hasIcons = !!boardData.icon;
      this.hasLabel = !!boardData.label;
      this.activeBoard = boardData.id;
      this.activeBoardNumber = this.getBoardIndex(this.activeBoard);
      this.calculatePosition();
      this.$emit('change', this.activeBoardNumber);
    },

    movePrevBoard() {
      let boardsIds = Object.keys(this.boardList);
      let targetIndex = boardsIds.indexOf(this.activeBoard) - 1;
      let target = boardsIds[targetIndex];

      if (target) {
        this.setActiveBoard(this.boardList[target], true);
      } else if (this.mdInfinite) {
        let lastBoard = Object.keys(this.boardList)[Object.keys(this.boardList).length - 1];
        this.setActiveBoard(this.boardList[lastBoard], true);
      }
    },

    moveNextBoard() {
      let boardsIds = Object.keys(this.boardList);
      let targetIndex = boardsIds.indexOf(this.activeBoard) + 1;
      let target = boardsIds[targetIndex];

      if (target) {
        this.setActiveBoard(this.boardList[target], true);
      } else if (this.mdInfinite) {
        let firstBoard = Object.keys(this.boardList)[0];
        this.setActiveBoard(this.boardList[firstBoard], true);
      }
    },

    isHorizontallyInside(positionX) {
      return positionX > this.mountedRect.left && positionX < this.mountedRect.left + this.mountedRect.width;
    },

    isVerticallyInside(positionY) {
      return positionY > this.mountedRect.top && positionY < this.mountedRect.top + this.mountedRect.height;
    },

    handleTouchStart(event) {
      this.mountedRect = this.$refs.boardsContent.getBoundingClientRect();
      const positionX = event.changedTouches[0].clientX;
      const positionY = event.changedTouches[0].clientY;

      if (this.isHorizontallyInside(positionX) && this.isVerticallyInside(positionY)) {
        this.initialTouchPosition = positionX;
        this.canMove = true;
      }
    },

    handleTouchEnd(event) {
      if (this.canMove) {
        const positionX = event.changedTouches[0].clientX;
        const difference = this.initialTouchPosition - positionX;
        const action = difference > 0 ? 'moveNextBoard' : 'movePrevBoard';

        if (Math.abs(difference) > this.mdSwipeDistance) {
          this[action]();
        }

        this.canMove = false;
        this.initialTouchPosition = null;
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.observeElementChanges();
      window.addEventListener('resize', this.calculateOnResize);

      if (Object.keys(this.boardList).length && !this.activeBoard) {
        let firstBoard = Object.keys(this.boardList)[0];
        this.setActiveBoard(this.boardList[firstBoard]);
      }

      if (this.mdSwipeable) {
        this.mountedRect = this.$refs.boardsContent.getBoundingClientRect();
        this.initialTouchPosition = null;
        this.canMove = false;
        document.addEventListener('touchstart', this.handleTouchStart);
        document.addEventListener('touchend', this.handleTouchEnd);
      }

      if (this.mdAuto) {
        this.start();
      }
    });
  },

  beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    if (this.autoTransition) {
      window.clearTimeout(this.autoTransition);
    }

    window.removeEventListener('resize', this.calculateOnResize);

    if (this.mdSwipeable) {
      document.removeEventListener('touchstart', this.handleTouchStart);
      document.removeEventListener('touchend', this.handleTouchEnd);
    }

    this._destroyed = true;
  }

};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-boards",
    class: [_vm.themeClass, _vm.boardClasses]
  }, [_vm._ssrNode("<div class=\"md-boards-content\"" + _vm._ssrStyle(null, {
    height: _vm.contentHeight
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"md-boards-wrapper\"" + _vm._ssrStyle(null, {
    transform: "translate3D(-" + _vm.contentWidth + ", 0, 0)"
  }, null) + ">", "</div>", [_vm._t("default")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<nav" + _vm._ssrClass("md-boards-navigation", _vm.navigationClasses) + ">", "</nav>", [_vm._ssrNode((!_vm.mdControls ? "<span style=\"flex: 1\"></span>" : "<!---->") + " "), _vm.mdControls ? _c('md-button', {
    on: {
      "click": function ($event) {
        return _vm.movePrevBoard();
      }
    }
  }, [_c('div', {
    staticClass: "md-board-header-container"
  }, [_c('md-icon', {
    staticClass: "md-control",
    attrs: {
      "icon-svg": _vm.mdiChevronLeftIcon
    }
  })], 1)]) : _vm._e(), _vm._ssrNode(" <span style=\"flex: 1\"></span> "), !_vm.hideDots ? _vm._ssrNode("<div>", "</div>", _vm._l(_vm.boardList, function (header) {
    return _vm._ssrNode("<button type=\"button\"" + _vm._ssrAttr("disabled", header.disabled) + _vm._ssrClass("md-board-header", _vm.getHeaderClass(header)) + ">", "</button>", [_vm._ssrNode("<div class=\"md-board-header-container\">", "</div>", [_c('md-icon', [_vm._v("fiber_manual_record")])], 1)]);
  }), 0) : _vm._e(), _vm._ssrNode(" <span style=\"flex: 1\"></span> "), _vm.mdControls ? _c('md-button', {
    on: {
      "click": function ($event) {
        return _vm.moveNextBoard();
      }
    }
  }, [_c('div', {
    staticClass: "md-board-header-container"
  }, [_c('md-icon', {
    staticClass: "md-control",
    attrs: {
      "icon-svg": _vm.mdiChevronRightIcon
    }
  })], 1)]) : _vm._e(), _vm._ssrNode(" " + (!_vm.mdControls ? "<span style=\"flex: 1\"></span>" : "<!---->") + " <span></span>")], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-bdaf56fc_0", {
    source: ".md-boards{width:100%;height:100%!important;display:flex;flex-flow:column;position:relative}.md-boards.md-transition-off *{transition:none!important}.md-boards.md-dynamic-height .md-boards-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-boards .md-boards-navigation{bottom:0;width:100%;height:48px;min-height:48px;position:relative;z-index:1;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1);justify-content:space-between}.md-boards .md-board-header{min-width:24px;max-width:24px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:0 0;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-boards .md-board-header.md-disabled{cursor:default;pointer-events:none;user-select:none;-webkit-user-drag:none}.md-boards .md-board-header-container{display:flex;flex-flow:column;justify-content:center;align-items:center}.md-boards .md-board-header-container .md-icon{margin:0}.md-boards .md-board-header-container .md-icon:not(.md-control){width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px}.md-boards .md-boards-content{width:100%;position:relative;overflow:hidden}.md-boards .md-boards-wrapper{width:9999em;height:100%!important;position:absolute;top:0;right:0;bottom:0;left:0;transform:translate3d(0,0,0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-boards .md-board{padding:16px;position:absolute;top:0;left:0;right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-bdaf56fc";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

var tdlBoardsSlideTheme = ".THEME_NAME .tdl-boards-slide {\n  background-color: BACKGROUND-ELEVATION_0;\n}\n.THEME_NAME .tdl-boards-slide__card .slide__button {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME .tdl-boards-slide__card .slide__text {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME .tdl-boards-slide__control-button {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME .tdl-boards-slide .md-board-header:not(.md-active) {\n  color: ACCENT-PRIMARY !important;\n  opacity: 0.24;\n}";

var tdlBoardsSlideLocale = {
  "en": {
    "continue": "continue"
  },
  "es": {
    "continue": "continuar"
  }
};

const TdlBoardsSlide = {
  name: 'tdl-boards-slide',
  components: {
    MdBoard: MdOnboarding,
    MdBoards: __vue_component__,
    MdButton,
    MdCard,
    MdIcon
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    onComplete: {
      type: Function,
      required: true
    },
    eventToTrack: {
      type: String,
      required: false,
      default: 'boardsSlideChange'
    },
    endActionButtonText: {
      type: String,
      required: false,
      default: 'continue'
    },
    hideDots: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentSlide: 0,
      mdiArrowLeftIcon: js.mdiArrowLeft,
      mdiArrowRightIcon: js.mdiArrowRight
    };
  },

  computed: {
    isFirstSlide() {
      return this.currentSlide === 0;
    },

    isLastSlide() {
      return this.currentSlide === this.slides.length - 1;
    },

    trackEvent() {
      return {
        event: this.eventToTrack,
        props: ['currentSlide']
      };
    },

    nextActionButtonText() {
      return this.isLastSlide ? this.$t(this.endActionButtonText) : this.$t('continue');
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlBoardsSlide",
      theme: tdlBoardsSlideTheme
    });
    this.$root.$emit("update-locale-string", tdlBoardsSlideLocale);
  },

  methods: {
    goToPrevSlide() {
      this.$refs.boards.movePrevBoard();
    },

    goToNextSlide() {
      if (!this.isLastSlide) {
        this.$refs.boards.moveNextBoard();
      } else {
        this.onComplete();
      }
    },

    handleBoardChange(next) {
      this.currentSlide = next;
      const videoRef = this.$refs[`video-${next}`];

      if (videoRef) {
        videoRef[0].play();
      }
    }

  }
};

/* script */
const __vue_script__$1 = TdlBoardsSlide;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-boards-slide"
  }, [_c('md-button', {
    class: ['md-fab md-clean tdl-boards-slide__control-button', {
      'tdl-boards-slide__control-button--hidden': _vm.isFirstSlide
    }],
    on: {
      "click": _vm.goToPrevSlide
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiArrowLeftIcon
    }
  })], 1), _vm._ssrNode(" "), _c('md-card', {
    staticClass: "tdl-boards-slide__card"
  }, [_c('md-boards', {
    ref: "boards",
    attrs: {
      "md-swipeable": true,
      "hide-dots": _vm.hideDots
    },
    on: {
      "change": _vm.handleBoardChange
    }
  }, _vm._l(_vm.slides, function (slide, index) {
    return _c('md-board', {
      key: index,
      staticClass: "tdl-boards-slide__slide slide"
    }, [_c('div', {
      staticClass: "slide__media-container"
    }, [slide.component ? _c(slide.component, _vm._b({
      tag: "component"
    }, 'component', slide.props, false)) : _vm._e(), _vm._v(" "), slide.image ? _c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload"
      }],
      attrs: {
        "data-url": slide.image,
        "alt": slide.title
      }
    }) : _vm._e(), _vm._v(" "), slide.video ? _c('video', {
      ref: "video-" + index,
      refInFor: true,
      attrs: {
        "muted": "",
        "loop": "",
        "playsinline": "",
        "poster": slide.poster
      },
      domProps: {
        "muted": true
      }
    }, [_c('source', {
      attrs: {
        "src": slide.video,
        "type": "video/mp4"
      }
    }), _vm._v("\n            Your browser does not support the video tag.\n          ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "slide__content"
    }, [_c('p', {
      staticClass: "md-headline slide__title"
    }, [_vm._v("\n            " + _vm._s(slide.title) + "\n          ")]), _vm._v(" "), _c('p', {
      staticClass: "md-subheading slide__text"
    }, [_vm._v("\n            " + _vm._s(slide.text) + "\n          ")]), _vm._v(" "), _c('md-button', {
      staticClass: "md-raised slide__button",
      on: {
        "click": _vm.goToNextSlide
      }
    }, [_vm._v("\n            " + _vm._s(_vm.nextActionButtonText) + "\n          ")])], 1)]);
  }), 1)], 1), _vm._ssrNode(" "), _c('md-button', {
    class: ['md-fab md-clean tdl-boards-slide__control-button', {
      'tdl-boards-slide__control-button--hidden': _vm.isLastSlide
    }],
    on: {
      "click": _vm.goToNextSlide
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiArrowRightIcon
    }
  })], 1)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-35193aac_0", {
    source: ".tdl-boards-slide[data-v-35193aac]{position:fixed;z-index:10;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center}.tdl-boards-slide__card[data-v-35193aac]{width:450px;min-height:640px;margin:0 48px}.tdl-boards-slide__card .slide[data-v-35193aac]{display:flex;flex-direction:column;align-items:center}.tdl-boards-slide__card .slide__media-container[data-v-35193aac]{display:flex;justify-content:center;align-items:center;height:320px;width:80%}.tdl-boards-slide__card .slide__media-container img[data-v-35193aac],.tdl-boards-slide__card .slide__media-container video[data-v-35193aac]{height:auto;width:100%}@media (max-width:720px){.tdl-boards-slide__card .slide__media-container[data-v-35193aac]{width:60%;height:50vh}}@media (max-width:480px){.tdl-boards-slide__card .slide__media-container[data-v-35193aac]{width:80%;height:66vh}}.tdl-boards-slide__card .slide__content[data-v-35193aac]{position:relative;display:flex;flex-direction:column;align-items:center;height:fit-content}.tdl-boards-slide__card .slide__title[data-v-35193aac]{text-align:center;margin-bottom:6px;margin-top:0}.tdl-boards-slide__card .slide__text[data-v-35193aac]{max-width:350px;text-align:center}@media (max-width:720px){.tdl-boards-slide__card[data-v-35193aac]{min-height:100vh;min-width:100vw}}.tdl-boards-slide__control-button--hidden[data-v-35193aac]{visibility:hidden}@media (max-width:720px){.tdl-boards-slide__control-button[data-v-35193aac]{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-35193aac";
/* module identifier */

const __vue_module_identifier__$1 = "data-v-35193aac";
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__$1;
