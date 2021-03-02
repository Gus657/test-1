import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';
import TdlWeightDialogFormula from '@/lib-components/tdlWeightDialog/tdlWeightDialogFormula.vue';
import tdlWeightDialogTheme from './tdlWeightDialog-theme.scss';
import { default as TdlWeightDialogLocale } from "./tdlWeightDialog_i18n";

const TdlWeightDialog = {
  name: 'tdl-weight-dialog',
  components: {
    TdlFullscreendialog,
    TdlWeightDialogFormula
  },
  data() {
    return {
      video: { }
    };
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlWeightDialog", theme: tdlWeightDialogTheme });
    this.$root.$emit("update-locale-string", TdlWeightDialogLocale);
  },
  methods: {
    open() {
      this.$refs.dialog.openDialog();
      this.setupVideo();
    },
    close() {
      this.$refs.dialog.closeDialog();
    },
    setupVideo() {
      this.video = document.querySelector('#reputationWeightVideo');

      this.video.addEventListener('play', () => {
        this.$emit('played');
      });

      this.video.addEventListener('ended', () => {
        this.$emit('ended');
      });
    },
    handleClose() {
      this.$emit('closed', this.video.currentTime);
    }
  }
};

export default TdlWeightDialog;
