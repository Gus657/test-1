import { default as TdlSignalDialogLocale } from "./tdlSignalDialog_i18n";
import MdButton from '@/lib-components/mdButton/mdButton.vue';
import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';

const TdlSignalDialog = {
  name: 'tdl-signal-dialog',
  components: {
    MdButton,
    TdlFullscreendialog
  },
  props: {
    firstSignalSent: {
      type: Boolean,
      required: true
    },
    urls: {
      type: Object,
      required: true
    }
  },
  created() {
    this.$root.$emit("update-locale-string", TdlSignalDialogLocale);
  },
  computed: {
    mainAction() {
      return {
        text: this.firstSignalSent ? this.$t("Go to your signals dashboard") : this.$t("Learn how signals work"),
        action: this.firstSignalSent ? this.goToSignals : this.goToSignalsOnboarding
      }
    }
  },
  methods: {
    open() {
      this.$refs.dialog.openDialog();
    },
    close() {
      this.$emit('close');
    },
    goToSignalsOnboarding() {
      window.location.href = `${this.urls.VUE_APP_HEDA_URL}/signals/onboarding`;
    },
    goToSignals() {
      window.location.href = `${this.urls.VUE_APP_HEDA_URL}/signals`;
    }
  }
};

export default TdlSignalDialog;
