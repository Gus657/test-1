import MdCheckbox from '@/lib-components/mdCheckbox/mdCheckbox.vue';
import MdSwitch from '@/lib-components/mdSwitch/mdSwitch.vue';
import { default as tdlPreferenceSelectorLocale } from "./tdlPreferenceSelector_i18n";
import TdlPreferenceSelectorTheme from './tdlPreferenceSelector-theme.scss';

const TdlPreferenceSelector = {
  name: 'tdl-preference-selector',
  components: {
    MdCheckbox,
    MdSwitch
  },
  props: {
    preference: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      active: false,
      private: false
    };
  },
  watch: {
    preference: {
      handler: function(newValue) {
        if (newValue) {
          this.active = newValue.active;
          this.private = !!newValue.private;
        }
      },
      immediate: true
    },
    active: function(newValue) {
      if (!newValue && this.private !== undefined) {
        this.private = false;
      }
      this.emitData();
    },
    private: function() {
      this.emitData();
    }
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlPreferenceSelector", theme: TdlPreferenceSelectorTheme });
    this.$root.$emit("update-locale-string", tdlPreferenceSelectorLocale);

  },
  methods: {
    emitData: function() {
      this.$emit('preference-updated', { active: this.active, private: this.private });
    }
  }
};

export default TdlPreferenceSelector;
