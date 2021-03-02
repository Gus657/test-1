'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var MdIcon = require('./MdIcon.js');
var debounce = _interopDefault(require('lodash-es/debounce'));

const TdlCardsGallery = {
  name: 'tdl-cards-gallery',
  components: {
    MdButton,
    MdIcon
  },
  props: {
    cardWidth: {
      type: Number,
      default: 235
    },
    cardGap: {
      type: Number,
      default: 8
    },
    cardsNumber: {
      type: Number,
      default: 0
    },
    allowComputedCardWidth: {
      type: Boolean,
      default: false
    },
    removeMaxWidthConstraint: {
      type: Boolean,
      default: false
    },
    singleCardMovement: {
      type: Boolean,
      default: true
    },
    buttonIconSet: {
      type: Array
    },
    buttonRaised: {
      type: Boolean,
      default: false
    },
    buttonIconSize: {
      type: String,
      default: '24px'
    },
    buttonOverlapping: {
      type: Boolean,
      default: false
    },
    animationTime: {
      type: Number,
      default: 300
    },
    theme: {
      type: String
    }
  },
  computed: {
    cssProps() {
      return {
        '--card-gap': `${this.cardGap}px`,
        '--icon-size': this.buttonIconSize,
        '--computed-card-width': `${this.computedCardWidth}px`
      };
    },

    currentContainerWidth() {
      return this.maxContentWidth;
    },

    showMoreButton() {
      return this.currentCard + this.cardsPerScreen < this.cardsNumber;
    },

    showLessButton() {
      return this.currentCard > 0;
    },

    computedCardWidth() {
      return this.allowComputedCardWidth ? this.fullWidthView / Math.floor(this.cardsPerScreen) - this.cardGap : this.cardWidth;
    },

    cardsPerMovement() {
      return this.singleCardMovement ? 1 : Math.floor(this.cardsPerScreen);
    },

    currentTheme() {
      return this.theme;
    }

  },
  watch: {
    cardsNumber() {
      this.computeCardsPerScreen();
    }

  },
  data: () => {
    return {
      fullWidthView: 0,
      currentCard: 0,
      cardsPerScreen: 0,
      isMoving: false,
      maxContentWidth: 0,
      shadowGap: 4,
      resizeDebounce: null
    };
  },

  mounted() {
    setTimeout(() => {
      this.computeCardsPerScreen();
      this.setupListeners();
    }, 500);
  },

  beforeDestroy() {
    this.removeListeners();
  },

  methods: {
    setupListeners() {
      const container = this.$refs.container;

      if (container) {
        container.addEventListener('scroll', this.handleScroll);
      }

      window.addEventListener('resize', this.computeCardsPerScreen);
    },

    removeListeners() {
      const container = this.$refs.container;

      if (container) {
        container.removeEventListener('scroll', this.handleScroll);
      }

      window.removeEventListener('resize', this.computeCardsPerScreen);
    },

    handleScroll() {
      if (!this.isMoving) {
        debounce(() => {
          this.currentCard = this.$refs.container.scrollLeft / (this.computedCardWidth + this.cardGap);
        })();
      }
    },

    computeCardsPerScreen() {
      this.maxContentWidth = 0;
      this.$nextTick(() => {
        this.fullWidthView = document.querySelector('.tdl-cards-gallery__cards-container').getBoundingClientRect().width;
        this.cardsPerScreen = (this.fullWidthView + this.cardGap) / (this.cardWidth + this.cardGap);
        clearTimeout(this.resizeDebounce);
        this.resizeDebounce = setTimeout(() => {
          this.setDisplaySize();
        }, 500);
      });
    },

    moveToNextCard() {
      this.currentCard = Math.floor(this.currentCard + this.cardsPerMovement) < this.cardsNumber ? Math.floor(this.currentCard + this.cardsPerMovement) : this.cardsNumber - Math.floor(this.cardsPerScreen);
      this.$nextTick(() => {
        this.animateList();
      });
    },

    moveToPreviousCard() {
      this.currentCard = Math.ceil(this.currentCard - this.cardsPerMovement) >= 0 ? Math.ceil(this.currentCard - this.cardsPerMovement) : 0;
      this.$nextTick(() => {
        this.animateList();
      });
    },

    animateList() {
      const currentCard = this.$refs.cardsList.children[this.currentCard];
      this.$scrollTo(currentCard, this.animationTime, {
        container: this.$refs.container,
        easing: 'ease-in-out',
        offset: -2,
        cancelable: true,
        x: true,
        y: false,
        onStart: () => {
          this.isMoving = true;
        },
        onDone: () => {
          setTimeout(() => {
            this.isMoving = false;
          }, 100);
        },
        onCancel: () => {
          this.isMoving = false;
        }
      });
    },

    setDisplaySize() {
      this.maxContentWidth = Math.floor(this.cardsPerScreen) * this.cardWidth + this.cardGap * (Math.floor(this.cardsPerScreen) - 1) + this.shadowGap;
    }

  }
};

/* script */
const __vue_script__ = TdlCardsGallery;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-cards-gallery",
    style: _vm.cssProps
  }, [_vm._ssrNode("<div class=\"tdl-cards-gallery__section-container\" data-v-34b0d136>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, ['tdl-cards-gallery__action tdl-cards-gallery__action--less', {
    'tdl-cards-gallery__action--overlapping': _vm.buttonOverlapping
  }]) + " data-v-34b0d136>", "</div>", [_vm.showLessButton ? _c('md-button', {
    class: ['md-icon-button md-primary', {
      'md-raised': _vm.buttonRaised
    }],
    attrs: {
      "disabled": _vm.isMoving,
      "theme": _vm.theme
    },
    on: {
      "click": _vm.moveToPreviousCard
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.buttonIconSet[0],
      "size": "30px"
    }
  })], 1) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("tdl-cards-gallery__cards-container", {
    'tdl-cards-gallery__cards-container--less-content': _vm.cardsNumber <= _vm.cardsPerScreen
  }) + _vm._ssrStyle(null, {
    'max-width': _vm.currentContainerWidth > 0 && !_vm.removeMaxWidthConstraint ? _vm.currentContainerWidth + "px" : ''
  }, null) + " data-v-34b0d136>", "</div>", [_vm._ssrNode("<div class=\"tdl-cards-gallery__cards-list\" data-v-34b0d136>", "</div>", [_vm._t("default")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, ['tdl-cards-gallery__action tdl-cards-gallery__action--more', {
    'tdl-cards-gallery__action--overlapping': _vm.buttonOverlapping
  }]) + " data-v-34b0d136>", "</div>", [_vm.showMoreButton ? _c('md-button', {
    class: ['md-icon-button md-primary', {
      'md-raised': _vm.buttonRaised
    }],
    attrs: {
      "disabled": _vm.isMoving,
      "theme": _vm.theme
    },
    on: {
      "click": _vm.moveToNextCard
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.buttonIconSet[1],
      "size": "30px"
    }
  })], 1) : _vm._e()], 1)], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-34b0d136_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-34b0d136]{background-image:none!important;top:0!important}.tdl-cards-gallery[data-v-34b0d136]{display:flex;flex-direction:column;margin-top:24px;margin-bottom:40px;opacity:0;animation:increaseOpacity-data-v-34b0d136 .5s 1s;animation-fill-mode:forwards}.tdl-cards-gallery__section-container[data-v-34b0d136]{position:relative;display:flex;align-items:center;min-width:100%}.tdl-cards-gallery__cards-container[data-v-34b0d136]{display:flex;justify-content:flex-start;width:100%;margin:0 auto;padding:2px;overflow-y:hidden;overflow-x:scroll;scrollbar-width:none}.tdl-cards-gallery__cards-container[data-v-34b0d136]::-webkit-scrollbar{display:none}.tdl-cards-gallery__cards-container--less-content[data-v-34b0d136]{max-width:100%!important}.tdl-cards-gallery__cards-list[data-v-34b0d136]{display:flex;justify-content:flex-start;transition:all .2s}.tdl-cards-gallery__cards-list>*[data-v-34b0d136]{margin-right:var(--card-gap);width:var(--computed-card-width)!important;min-width:var(--computed-card-width)!important}@media (max-width:720px){.tdl-cards-gallery__cards-list[data-v-34b0d136]>:first-child{margin-left:var(--card-gap)!important}.tdl-cards-gallery__cards-list[data-v-34b0d136]>:last-child{margin-right:var(--card-gap)!important}}.tdl-cards-gallery__action[data-v-34b0d136]{min-width:40px;max-width:40px}@media (max-width:720px){.tdl-cards-gallery__action[data-v-34b0d136]{min-width:32px}}.tdl-cards-gallery__action .md-icon[data-v-34b0d136]{display:flex;min-width:var(--icon-size);width:var(--icon-size);min-height:var(--icon-size);height:var(--icon-size);font-size:var(--icon-size);line-height:var(--icon-size)}.tdl-cards-gallery__action--overlapping[data-v-34b0d136]{position:absolute;top:calc(50% - 20px)}.tdl-cards-gallery__action--overlapping>.md-button[data-v-34b0d136]{z-index:2}.tdl-cards-gallery__action--overlapping.tdl-cards-gallery__action--less[data-v-34b0d136]{left:-24px}.tdl-cards-gallery__action--overlapping.tdl-cards-gallery__action--more[data-v-34b0d136]{right:-12px}@media (max-width:720px){.tdl-cards-gallery__action--overlapping[data-v-34b0d136]{display:none}}.tdl-cards-gallery__action--more .md-button[data-v-34b0d136]{margin-right:0}@media (max-width:720px){.tdl-cards-gallery__action--more .md-button[data-v-34b0d136]{margin-right:8px;margin-left:0;padding-left:0}}.tdl-cards-gallery__action--less .md-button[data-v-34b0d136]{margin-left:0}@keyframes increaseOpacity-data-v-34b0d136{from{opacity:0}to{opacity:1}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-34b0d136";
/* module identifier */

const __vue_module_identifier__ = "data-v-34b0d136";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
