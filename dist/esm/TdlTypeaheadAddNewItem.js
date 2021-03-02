import './normalize-component-ea49d1b5.js';
import './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import MdIcon from './MdIcon.js';
import { mdiKeyboardReturn } from '@mdi/js';

var tdlTypeaheadAddNewItemTheme = ".THEME_NAME .tdl-typeahead-add-new-item {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME .tdl-typeahead-add-new-item .md-icon {\n  color: TEXT-ACCENT_TITLE !important;\n}\n.THEME_NAME .tdl-typeahead-add-new-item__text p:first-of-type {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME .tdl-typeahead-add-new-item__text p {\n  color: TEXT-ACCENT_TITLE;\n}";

const TdlTypeaheadAddNewItem = {
  default: 'tdl-typeahead-add-new-item',
  components: {
    MdIcon
  },
  mixins: [theme],
  props: {
    query: String,
    addNewItemElement: {
      type: Object
    }
  },

  data() {
    return {
      mdiKeyboardReturnIcon: mdiKeyboardReturn
    };
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlTypeaheadAddNewItem",
      theme: tdlTypeaheadAddNewItemTheme
    });
  }

};

export default TdlTypeaheadAddNewItem;
