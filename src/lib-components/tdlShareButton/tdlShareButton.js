import Clipboard from 'clipboard';
import {isSafari, isMobile} from '../../core/utils/deviceHelper';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import MdDialog from '@/lib-components/mdDialog/mdDialog.vue';
import MdDialogContent from '@/lib-components/mdDialog/mdDialogContent.vue';
import MdDialogActions from '@/lib-components/mdDialog/mdDialogActions.vue';
import { mdiShareVariant } from "@mdi/js";
import { default as TdlShareButtonLocale } from "./tdlShareButton_i18n";

const TdlShareButton = {
  name: 'tdl-share-button',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdIcon,
    MdTooltip
  },
  props: {
    dialogStyles: {
      type: Object,
      default: () => ({ "--theme-color": "#CDDC39" })
    },
    message: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    primaryColor: {
      type: Boolean,
      required: false
    },
    showTooltip: {
      type: Boolean,
      required: false
    },
    tooltipDirection: {
      type: String,
      required: false
    },
    theme: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      mdiShareVariantIcon: mdiShareVariant
    };
  },
  created: function() {
    this.$root.$emit("update-locale-string", TdlShareButtonLocale);
  },
  mounted() {
    const clipboard = new Clipboard(this.$refs.copy.$el, {
      target: () => this.$refs.url
    });

    clipboard.on('success', (event) => {
      event.clearSelection();
      this.$emit('shared');
    });
  },
  methods: {
    handleShareClicked() {
      if (navigator.share && (!isSafari() || isMobile())) {
        navigator.share({
          url: this.url
        })
          .then(() => this.$emit('shared'))
          .catch((error) => console.error('Error sharing', error));
      } else {
        this.$refs.shareUrlDialog.open();
      }
    },
    closeDialog() {
      this.$refs.shareUrlDialog.close();
    }
  }
};

export default TdlShareButton;
