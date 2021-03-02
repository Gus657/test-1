import { textHelper } from '../../core/utils/textHelper';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';
import TdlEntityPicture from '@/lib-components/tdlEntityPicture/tdlEntityPicture.vue';
import { default as TdlSignalsEmailPreviewLocale } from "./tdlSignalsEmailPreview_i18n";
import theme from '../../core/components/mdTheme/mixin';

const TdlSignalsEmailPreview = {
  name: 'tdl-signals-email-preview',
  components: {
    TdlFullscreendialog,
    TdlEntityPicture,
    MdButton
  },
  mixins: [textHelper, theme],
  props: {
    dialogRouteQuery: {
      type: String,
      required: false
    },
    person: {
      type: Object,
      required: true
    }
  },
  created() {
    this.$root.$emit("update-locale-string", TdlSignalsEmailPreviewLocale);
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('preview-dialog-ready');
    });
  },
  methods: {
    openDialog: function() {
      this.$refs.signalsEmailPreviewDialog.openDialog();
    }
  }
};

export default TdlSignalsEmailPreview;
