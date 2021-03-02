import { mdiKeyboardReturn } from "@mdi/js";

import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import tdlTypeaheadAddNewItemTheme from './tdlTypeaheadAddNewItem-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

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
    this.$root.$emit("component-created", { name: "tdlTypeaheadAddNewItem", theme: tdlTypeaheadAddNewItemTheme });
  }
};

export default TdlTypeaheadAddNewItem;
