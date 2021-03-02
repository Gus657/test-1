import TdlWeightRender from '@/lib-components/tdlWeightRender/tdlWeightRender.vue';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdCard from '@/lib-components/mdCard/mdCard.vue';
import MdCardContent from '@/lib-components/mdCard/mdCardContent.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import TdlEntityPicture from '@/lib-components/tdlEntityPicture/tdlEntityPicture.vue';
import { mdiClipboardCheck, mdiClockOutline, mdiPin, mdiWeight, mdiCheckDecagram } from "@mdi/js";
import { default as TdlRecommendationsCardLocale } from "./tdlRecommendationsCard_i18n";
import tdlRecommendationsCardTheme from './tdlRecommendationsCard-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

const TdlRecommendationsCard = {
  name: 'tdl-recommendations-card',
  components: {
    MdButton,
    MdCard,
    MdCardContent,
    MdIcon,
    MdTooltip,
    TdlEntityPicture,
    TdlWeightRender
  },
  mixins: [theme],
  props: {
    connection: Object,
    action: String,
    highlight: String,
    noShadow: {
      type: Boolean,
      default: false
    },
    strengthsColor: {
      type: String,
      default: 'rgba(4, 172, 193, 0.8)'
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    },
    hoverColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlRecommendationsCard", theme: tdlRecommendationsCardTheme });
    this.$root.$emit("update-locale-string", TdlRecommendationsCardLocale);
  },
  data() {
    return {
      mdiVerifiedIcon: mdiCheckDecagram
    };
  },
  computed: {
    highlights: function() {
      return {
        pinned: {
          iconset: mdiPin,
          title: this.$t('Pinned recommendation')
        },
        recent: {
          iconset: mdiClockOutline,
          title: this.$t('Most recent recommendation')
        },
        weighted: {
          iconset: mdiWeight,
          title: this.$t('Most weighted recommendation')
        },
        'view-all': {
          iconset: mdiClipboardCheck,
          title: this.$t('View all recommendations')
        }
      };
    },
    relationships: function() {
      return {
        lead: (name) => this.$t('is/was reporting to ') + name,
        led: (name) => this.$t('reported to ') + name,
        employ: (name) => this.$t('is/was leading ') + name,
        employed: (name) => this.$t('led ') + name,
        work: (name) => this.$t('is/was working alongside ') + name,
        worked: (name) => this.$t('worked alongside ') + name,
        provide: (name) => this.$t('is/was ') + name + this.$t('\'s supplier'),
        provided: (name) => this.$t('was ') + name + this.$t('\'s supplier'),
        purchase: (name) => this.$t('is/was a client of ') + name,
        purchased: (name) => this.$t('was a client of ') + name,
        learn: (name) => this.$t('is/was teaching ') + name,
        learnt: (name) => this.$t('taught ') + name,
        teach: (name) => this.$t('is/was a student of ') + name,
        taught: (name) => this.$t('was a student of ') + name,
        study: (name) => this.$t('is/was studying alongside ') + name,
        studied: (name) => this.$t('studied alongside ') + name,
        awarder: (name) => this.$t('gave ') + name + this.$t(' an award'),
        awardee: (name) => this.$t('received an award from ') + name,
        achieved: (name) => this.$t('shared this achievement with ') + name,
        interacted: (name) => this.$t('had a brief interaction with ') + name,
        consume: (name) => this.$t('is/was ') + name + this.$t('\'s consumer'),
        consumed: (name) => this.$t('was ') + name + this.$t('\'s consumer')
      };
    },
    duration: function() {
      return {
        minutes: this.$t('minutes'),
        hours: this.$t('hours'),
        days: this.$t('days'),
        weeks: this.$t('weeks'),
        months: this.$t('months'),
        years: this.$t('years')
      };
    },
    person: function() {
      if (this.connection) {
        return this.action === 'received' ? this.connection.personSource : this.connection.personTarget;
      }
    },
    cssProps: function() {
      return {
        '--background-color': this.backgroundColor,
        '--hover-color': this.hoverColor
      };
    }
  },
  methods: {
    personFirstName: function(personName) {
      return personName.replace(/ .*/, '');
    },
    strengthsToString: function(strengths) {
      return strengths.map((strength) => strength).join(',<br>');
    },
    cardClicked: function() {
      this.$emit('card-clicked');
    },
    relationshipAction(name) {
      return this.relationships[this.connection.relationship] ? this.relationships[this.connection.relationship](name) : '';
    },
    relationshipActionBeforeAndAfter() {
      const fakeName = 'Yd6oPgrp';
      const text = this.relationshipAction(fakeName);
      const before = text.substring(0, text.search(fakeName));
      const after = text.substring(text.search(fakeName) + fakeName.length);

      return [before, after];
    }
  }
};

export default TdlRecommendationsCard;
