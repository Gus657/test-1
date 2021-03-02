import { mdiCheck, mdiCreation, mdiLock, mdiRocket } from "@mdi/js";

import theme from '../../core/components/mdTheme/mixin';
import { isiOS } from '../../core/utils/deviceHelper';
import { isMobile } from '../../core/utils/platform';

import MdInputContainer from '@/lib-components/mdInputContainer/mdInputContainer.vue';
import MdOption from '@/lib-components/mdSelect/mdOption.vue';
import MdSelect from '@/lib-components/mdSelect/mdSelect.vue';
import MdToolbar from '@/lib-components/mdToolbar/mdToolbar.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';

import tdlCandidateBarTheme from './tdlCandidateBarTheme.scss';
import { default as TdlCandidateBarLocale } from "./tdlCandidateBar_i18n";

const tdlCandidateBar = {
  name: 'tdl-candidate-bar',
  components: {
    MdInputContainer,
    MdOption,
    MdSelect,
    MdToolbar,
    MdIcon
  },
  mixins: [theme],
  props: {
    completion: {
      type: Object,
      required: true
    },
    opportunitiesAndRanks: {
      type: Array,
      default: []
    },
    user: {
      type: Object,
      required: false
    },
    hasBottomBar: {
      type: Boolean,
      default: false
    },
    urls: {
      type: Object,
      required: true
    },
    isInGenomeCompletionPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedOpportunityId: undefined,
      animatedStep: undefined,
      mdiCheck,
      mdiCreation,
      mdiLock,
      mdiRocket
    };
  },
  watch: {
    opportunitiesAndRanks: {
      handler(newVal) {
        const hasSelectedOpportunity = this.selectedOpportunityId && newVal.some((o) => o.opportunityId === this.selectedOpportunityId);

        if (this.opportunitiesAndRanks.length && !hasSelectedOpportunity) {
          this.selectedOpportunityId = this.opportunitiesAndRanks[0].opportunityId;
        }
      },
      immediate: true
    },
    selectedOpportunityId: {
      handler(newVal) {
        if (newVal) {
          this.$emit('opportunity-selected', newVal);
        }
      },
      immediate: true
    },
    completion(newVal, oldVal) {
      const newStep = newVal.step;
      const oldStep = oldVal.step;

      if (newStep > oldStep) {
        this.animateStep(oldStep);
      }
    }
  },
  computed: {
    completionSteps() {
      return 3;
    },
    genomeIsComplete() {
      return this.completion.step + this.completion.progress === this.completionSteps + 1;
    },
    selectedOpportunityIsPending() {
      return this.selectedOpportunityRank.pending && this.completion.step === 1;
    },
    style() {
      const percentage = (this.completion.step - 1 + this.completion.progress) / this.completionSteps * 100;
      const { total, position } = this.selectedOpportunityRank || { total: 1, position: 1 };
      const rankProgress = position === 1 ? 100 : (total - position) / (total - 1) * 100;

      return {
        '--completion': Math.min(100, percentage) + '%',
        '--rank-progress': Math.min(100, rankProgress) + '%',
        '--animation-left': this.animatedStep ? this.animatedStep.getBoundingClientRect().x + 'px' : 0
      };
    },
    selectedOpportunityRank() {
      return this.opportunitiesAndRanks.find((o) => o.opportunityId === this.selectedOpportunityId);
    },
    completeYourGenomeUrl() {
      const queryParams = this.selectedOpportunityRank
        ? `?backUrl=${this.selectedCandidateRankingURL}&opportunityId=${this.selectedOpportunityRank.opportunityId}`
        : '';

      return `${this.urls.BIO_BASE_URL}/${this.user.username}/genome-completion` + queryParams;
    },
    rankingCriteriaUrl() {
      const locale = this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale : '';
      const opportunityId = this.selectedOpportunityRank.opportunityId;

      return `${this.urls.DISCOVERY_BASE_URL}/${locale}/postings/${opportunityId}/match-and-rank`;
    },
    selectedCandidateRankingURL() {
      const locale = this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale : '';
      const opportunityId = this.selectedOpportunityRank.opportunityId;

      return `${this.urls.DISCOVERY_BASE_URL}/${locale}/postings/${opportunityId}/candidates-ranking`;
    }
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlCandidateBar", theme: tdlCandidateBarTheme });
    this.$root.$emit("update-locale-string", TdlCandidateBarLocale);
    this.$root.$emit("candidate-bar-added");
  },
  destroyed() {
    this.$root.$emit("candidate-bar-removed");
  },
  methods: {
    numberToOrdinal(cardinalNumber) {
      if (this.$i18n.locale === 'en') {
        const mod10 = cardinalNumber % 10;
        const mod100 = cardinalNumber % 100;

        if (mod10 === 1 && mod100 !== 11) {
          return cardinalNumber + 'st';
        } else if (mod10 === 2 && mod100 !== 12) {
          return cardinalNumber + 'nd';
        } else if (mod10 === 3 && mod100 !== 13) {
          return cardinalNumber + 'rd';
        }

        return cardinalNumber + 'th';
      }

      return cardinalNumber + 'º';
    },
    animateStep(step) {
      this.animatedStep = this.$refs['step' + step][0];

      this.$nextTick(() => {
        const animationElement = this.$refs.animation;
        animationElement.classList.toggle('completion__animation--active');

        setTimeout(() => {
          animationElement.classList.toggle('completion__animation--active');
        }, 2000);
      });
    },
    isMobile() {
      return isMobile();
    },
    isiOS() {
      return isiOS();
    }
  }
};

export default tdlCandidateBar;
