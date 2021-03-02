import debounce from 'lodash-es/debounce';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';

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
      type: Array,
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
      return this.allowComputedCardWidth ?
        this.fullWidthView / Math.floor(this.cardsPerScreen) - this.cardGap : this.cardWidth;
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
      this.currentCard = Math.floor(this.currentCard + this.cardsPerMovement) < this.cardsNumber ?
        Math.floor(this.currentCard + this.cardsPerMovement) : this.cardsNumber - Math.floor(this.cardsPerScreen);

      this.$nextTick(() => {
        this.animateList();
      });
    },
    moveToPreviousCard() {
      this.currentCard = Math.ceil(this.currentCard - this.cardsPerMovement) >= 0 ?
        Math.ceil(this.currentCard - this.cardsPerMovement) : 0;

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
      this.maxContentWidth = Math.floor(this.cardsPerScreen) * this.cardWidth +
                              this.cardGap * (Math.floor(this.cardsPerScreen) - 1) +
                              this.shadowGap;
    }
  }
};

export default TdlCardsGallery;
