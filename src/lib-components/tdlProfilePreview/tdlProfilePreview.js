import { textHelper } from '../../core/utils/textHelper';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';
import TdlWeightRender from '@/lib-components/tdlWeightRender/tdlWeightRender.vue';

const TdlProfilePreview = {
  name: 'tdl-profile-preview',
  components: {
    TdlFullscreendialog,
    MdIcon,
    MdButton,
    TdlWeightRender
  },
  mixins: [textHelper],
  props: {
    dialogRouteQuery: {
      type: String,
      required: false
    },
    displayFeatureDiscovery: {
      type: Boolean,
      required: false,
      default: function() {
        return false;
      }
    },
    person: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      target: null,
      isFeatureDiscoveryOpen: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('preview-dialog-ready');
    });
  },
  methods: {
    openDialog: function() {
      this.$refs.profilePreviewDialog.openDialog();
    },
    closeDialog: function() {
      this.$refs.profilePreviewDialog.closeDialog();
      this.$emit('preview-dialog-closed');
    },
    mountSignalsFeatureDiscovery() {
      if (this.displayFeatureDiscovery) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.target = this.$refs.signalButtonPreview.$el;
            this.target.classList.add('call-to-action__button--target');
            this.positionFeatureDiscovery();
            this.isFeatureDiscoveryOpen = true;
            window.addEventListener('resize', this.positionFeatureDiscovery);
          }, 0);
        });
      }
    },
    positionFeatureDiscovery() {
      const featureDiscoveryRadius = 400;
      const featureDiscovery = this.$refs.signalsFeatureDiscovery;
      const featureDiscoveryParent = featureDiscovery.parentElement;
      const featureDiscoveryParentX = (featureDiscoveryParent.getBoundingClientRect()).x;
      const featureDiscoveryParentY = (featureDiscoveryParent.getBoundingClientRect()).y;
      const { x, y, height, width } = this.target.getBoundingClientRect();

      featureDiscovery.style.top = y + height / 2 - featureDiscoveryRadius - featureDiscoveryParentY + 'px';
      featureDiscovery.style.left = x + width / 2 - featureDiscoveryRadius - featureDiscoveryParentX + 'px';
    }
  }
};

export default TdlProfilePreview;
