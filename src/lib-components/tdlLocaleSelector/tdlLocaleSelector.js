import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdDialog from '@/lib-components/mdDialog/mdDialog.vue';
import MdDialogActions from '@/lib-components/mdDialog/mdDialogActions.vue';
import MdDialogContent from '@/lib-components/mdDialog/mdDialogContent.vue';
import MdDialogTitle from '@/lib-components/mdDialog/mdDialogTitle.vue';
import MdRadio from '@/lib-components/mdRadio/mdRadio.vue';
import { default as tdlLocaleSelectorLocale } from "./tdlLocaleSelector_i18n";

const TdlLocaleSelector = {
  name: 'tdl-locale-selector',
  components: {
    MdDialog,
    MdDialogTitle,
    MdDialogContent,
    MdRadio,
    MdDialogActions,
    MdButton
  },
  props: {
    defaultLocale: {
      type: String,
      required: true
    },
    styleProps: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localeSelected: '',
    };
  },
  created: function() {
    this.$root.$emit("update-locale-string", tdlLocaleSelectorLocale);
  },
  methods: {
    open() {
      this.localeSelected = this.$i18n && this.$i18n.locale ? this.$i18n.locale : this.defaultLocale;
      this.$refs.selectLocale.open();
    },
    close() {
      this.$refs.selectLocale.close();
    },
    handleLocaleSelection() {
      this.$emit('locale-selected', this.localeSelected);
      this.close();
    }
  }
};

export default TdlLocaleSelector;
