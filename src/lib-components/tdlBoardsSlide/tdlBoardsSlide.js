import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdCard from '@/lib-components/mdCard/mdCard.vue';
import MdBoards from '@/lib-components/mdOnboarding/mdBoards.vue';
import MdBoard from '@/lib-components/mdOnboarding/mdBoard.vue';
import tdlBoardsSlideTheme from './tdlBoardsSlide-theme.scss';
import { default as tdlBoardsSlideLocale } from "./tdlBoardsSlide_i18n";


const TdlBoardsSlide = {
  name: 'tdl-boards-slide',
  components: {
    MdBoard,
    MdBoards,
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
      mdiArrowLeftIcon: mdiArrowLeft,
      mdiArrowRightIcon: mdiArrowRight
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
    this.$root.$emit("component-created", { name: "tdlBoardsSlide", theme: tdlBoardsSlideTheme });
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

export default TdlBoardsSlide;
