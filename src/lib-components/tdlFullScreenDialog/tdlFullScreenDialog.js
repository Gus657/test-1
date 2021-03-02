import { mdiClose } from "@mdi/js";

import TdlOverlay from '@/lib-components/tdlOverlay/tdlOverlay.vue';
import MdButton from '@/lib-components/mdButton/mdButton.vue';
import MdDialog from '@/lib-components/mdDialog/mdDialog.vue';
import MdDialogActions from '@/lib-components/mdDialog/mdDialogActions.vue';
import MdDialogContent from '@/lib-components/mdDialog/mdDialogContent.vue';
import MdDialogTitle from '@/lib-components/mdDialog/mdDialogTitle.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdToolbar from '@/lib-components/mdToolbar/mdToolbar.vue';
import MdSpinner from '@/lib-components/mdSpinner/mdSpinner.vue';
import MdWhiteframe from '@/lib-components/mdWhiteframe/mdWhiteframe.vue';
import theme from '../../core/components/mdTheme/mixin';

const TdlFullscreendialog = {
  name: 'tdl-fullscreendialog',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdDialogTitle,
    MdIcon,
    MdToolbar,
    MdSpinner,
    MdWhiteframe,
    TdlOverlay
  },
  mixins: [theme],
  props: {
    dialogAlias: {
      type: String,
      required: false
    },
    dialogOkText: {
      type: String,
      required: false
    },
    dialogCancelText: {
      type: String,
      required: false
    },
    dialogTitle: {
      type: String,
      required: false
    },
    dialogSubtitle: {
      type: String,
      required: false
    },
    dialogSubmitButton: {
      type: String,
      required: false,
      default: 'visible',
      validator: (val) => ['disabled', 'hidden', 'visible'].includes(val)
    },
    dialogContentBackground: {
      type: String,
      required: false
    },
    dialogShutdownTransition: {
      type: Boolean,
      required: false,
      default: true
    },
    dialogProgressBar: {
      type: Boolean,
      default: false
    },
    dialogProcessing: {
      type: Boolean,
      default: false
    },
    plainView: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    allowDialogActionsInMobile: {
      type: Boolean,
      default: false
    },
    alwaysClose: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      opened: false,
      contentHeight: 0,
      currentDialogContent: null,
      mdiCloseIcon: mdiClose
    };
  },
  computed: {
    cancellable: function() {
      return !!this.dialogCancelText;
    },
    showProgressBar: function() {
      return this.dialogProcessing || this.dialogProgressBar;
    }
  },
  methods: {
    openDialog: function() {
      this.$refs.dialog.open();
    },
    closeDialog: function() {
      this.$refs.dialog.close();
    },
    cancelDialog: function () {
      this.$emit('cancel');
      if (this.alwaysClose) {
        this.closeDialog();
      }
    },
    actionDialog: function() {
      this.$emit('ok');
    },
    open: function() {
      this.opened = true;
      this.$emit('on-open');
      this.logScroll();
    },
    logScroll: function() {
      this.currentDialogContent = this.$refs.dialogContent.$el;

      this.contentHeight = this.currentDialogContent.scrollHeight - this.currentDialogContent.offsetHeight;
      this.currentDialogContent.addEventListener('scroll', this.onScrollContent);
    },
    onScrollContent: function() {
      if (this.contentHeight <= this.currentDialogContent.scrollTop) {
        this.$emit('end-reached');
        this.stopLogScroll();
      }
    },
    close: function() {
      this.opened = false;
      this.$emit('on-close');
      this.stopLogScroll();
    },
    stopLogScroll: function() {
      this.currentDialogContent.removeEventListener('scroll', this.onScrollContent);
    }
  },
};

export default TdlFullscreendialog;
