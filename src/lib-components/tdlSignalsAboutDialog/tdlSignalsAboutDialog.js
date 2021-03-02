import { default as TdlSignalsAboutDialogLocale } from "./tdlSignalsAboutDialog_i18n";
import MdButton from "@/lib-components/mdButton/mdButton.vue";
import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';

const TdlSignalsAboutDialog = {
  name: 'tdl-signals-about-dialog',
  components: {
    MdButton,
    TdlFullscreendialog
  },
  created() {
    this.$root.$emit("update-locale-string", TdlSignalsAboutDialogLocale);
  },
  props: {
    signalsOnboardingLink: {
      type: String
    },
    signalsOnboardingFinished: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    open() {
      this.$refs.dialog.openDialog();
    },
    close() {
      this.$refs.dialog.closeDialog();
    },
    handleClose() {
      this.$emit('close');
    },
    goToTutorial() {
      window.location.href = this.signalsOnboardingLink;
    }
  }
};

export default TdlSignalsAboutDialog;
