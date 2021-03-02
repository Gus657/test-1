import humanFormat from "human-format";
import TdlWeightIcon from '@/lib-components/tdlWeightIcon/tdlWeightIcon.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import { mdiCircle, mdiInformation, mdiWeight } from "@mdi/js";
import tdlWeightRenderTheme from './tdlWeightRender-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

const TdlWeightRender = {
  name: 'tdl-weight-render',
  components: {
    MdIcon,
    MdTooltip,
    TdlWeightIcon
  },
  mixins: [theme],
  props: {
    value: {
      type: Number
    },
    personId: {
      type: String
    },
    trackRender: {
      type: Function
    },
    iconSize: {
      type: Number
    },
    iconPosition: {
      type: String,
      default: 'right'
    },
    iconDisplay: {
      type: Boolean,
      default: true
    },
    infoIconDisplay: {
      type: Boolean,
      default: false
    },
    plusIcon: {
      type: Boolean,
      default: false
    },
    dotDivider: {
      type: Boolean,
      default: false
    },
    dotDividerSize: {
      type: Number,
      default: 8
    },
    themeColor: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      mdiCircleIcon: mdiCircle,
      mdiWeightIcon: mdiWeight,
      mdiInformationIcon: mdiInformation
    };
  },
  computed: {
    readableWeight() {
      return this.getReadableWeight(this.value);
    },
    cssProps() {
      return {
        '--size': this.iconSize + 'px',
        '--dot-divider-size': this.dotDividerSize + 'px',
        '--theme-color': this.theme
      };
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlWeightRender", theme: tdlWeightRenderTheme });
  },
  mounted() {
    if (this.trackRender && this.personId) {
      this.trackRender(this.personId);
    }
  },
  methods: {
    getReadableWeight(weight) {
      let readableWeight;

      if (isNaN(weight)) {
        readableWeight = 0;
      } else if (weight < 1) {
        readableWeight = Number(Math.round(Number(weight * 100)) / 100);
      } else {
        let weightStr = weight.toString();
        const decimalPoint = weightStr.indexOf('.') === -1 ? weightStr.length : weightStr.indexOf('.');
        const integerPart = weightStr.slice(0, decimalPoint).length;
        const integerPartMod3 = integerPart % 3 === 1 ? 1 : 0;
        const charAdjust = integerPart <= 3 ? Math.abs(integerPart - 3) : integerPartMod3;

        readableWeight = humanFormat(weight, {
          decimals: charAdjust,
          separator: ''
        });
      }

      return `${readableWeight}`;
    },
    weightInfo() {
      this.$emit('weight-info-required');
    }
  }
};

export default TdlWeightRender;
