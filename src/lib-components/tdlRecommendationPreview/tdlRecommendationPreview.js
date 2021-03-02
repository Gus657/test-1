import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';
import TdlEntityPicture from '@/lib-components/tdlEntityPicture/tdlEntityPicture.vue';
import MdChips from '@/lib-components/mdChips/mdChips.vue';
import MdInputContainer from '@/lib-components/mdInputContainer/mdInputContainer.vue';
import MdRadio from '@/lib-components/mdRadio/mdRadio.vue';
import MdButton from '@/lib-components/mdButton/mdButton.vue';

const TdlRecommendationPreview = {
  name: 'tdl-recommendation-preview',
  components: {
    TdlFullscreendialog,
    TdlEntityPicture,
    MdChips,
    MdInputContainer,
    MdRadio,
    MdButton
  },
  props: {
    dialogContentBackground: {
      type: String,
      required: false
    },
    dialogBorderColor: {
      type: String,
      required: false
    },
    person: {
      type: Object,
      required: true
    },
    dialogRouteQuery: {
      type: String,
      required: false
    },
    strengths: {
      type: Array,
      required: true
    },
    entityPictureBorderColor: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {
      radioModel: ''
    };
  },
  computed: {
    radioOptions: function() {
      return [
        { value: 'minutes', label: this.$t('Minutes') },
        { value: 'hours', label: this.$t('Hours') },
        { value: 'days', label: this.$t('Days') },
        { value: 'weeks', label: this.$t('Weeks') },
        { value: 'months', label: this.$t('Months') },
        { value: 'years', label: this.$t('Years') }
      ];
    }
  },
  methods: {
    closePreview() {
      this.$emit('closePreviewDialog');
    },
    firstWord(phrase) {
      return phrase.replace(/ .*/, '');
    }
  }
};

export default TdlRecommendationPreview;
