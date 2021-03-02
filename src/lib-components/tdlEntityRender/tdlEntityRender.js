import TdlEntityPicture from '@/lib-components/tdlEntityPicture/tdlEntityPicture.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import TdlWeightRender from '@/lib-components/tdlWeightRender/tdlWeightRender.vue';
import TdlSignalButton from '@/lib-components/tdlSignalButton/tdlSignalButton.vue';
import tdlEntityRenderTheme from './tdlEntityRender-theme.scss';
import { mdiCheckDecagram, mdiMinusCircle } from '@mdi/js';

const TdlEntityRender = {
  name: 'tdl-entity-render',
  components: {
    TdlEntityPicture,
    MdIcon,
    MdTooltip,
    TdlWeightRender,
    TdlSignalButton
  },
  props: {
    entity: {
      type: Object,
      required: true
    },
    entityType: {
      type: String,
      default: 'person'
    },
    signalButtonInfo: {
      type: Object,
      required: false
    },
    imageBorderWidth: {
      type: Number,
      required: false
    },
    imageSize: {
      type: Number,
      default: 20
    },
    imageDefaultMargin: {
      type: Boolean,
      default: true
    },
    trackWeight: {
      type: Function,
      required: false
    },
    iconSize: {
      type: Number,
      required: false
    },
    href: {
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    },
    hide: {
      type: Array,
      required: false,
      default: () => []
    },
    shape: {
      type: String,
      default: 'circle'
    }
  },
  data() {
    return {
      mdiMinusCircleIcon: mdiMinusCircle,
      mdiCheckDecagramIcon: mdiCheckDecagram
    };
  },
  computed: {
    cssProps() {
      return {
        '--size': this.iconSize + 'px',
        '--image-border-width': (this.imageBorderWidth ? this.imageBorderWidth : 4) + 'px'
      };
    },
    displayPicture() {
      return !this.shouldHide('picture');
    },
    displayVerified() {
      return this.entity.verified && !this.shouldHide('verified');
    },
    displayWeight() {
      return this.entity.weight && !this.shouldHide('weight');
    },
    displayProfessionalHeadline() {
      return !!this.entity.professionalHeadline && !this.shouldHide('professionalHeadline');
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlEntityRender", theme: tdlEntityRenderTheme });
  },
  mounted() {
    if (this.trackWeight && this.entity.id) {
      this.trackWeight(this.entity.id);
    }
  },
  methods: {
    handleStateUpdate(state) {
      const signaled = this.signalButtonInfo.signaled;

      this.$emit('signal-update', { state, signaled });
    },
    handleNotificationsTypeUpdate(newType) {
      this.$emit('notifications-type-update', newType);
    },
    shouldHide(type) {
      return this.hide.indexOf(type) !== -1;
    },
    goToAbout() {
      this.$emit('about-signals');
    },
    aboutSignals() {
      this.$emit('about-signals');
    }
  }
};

export default TdlEntityRender;
