'use strict';

require('./normalize-component-1d3237ea.js');
require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');

var tdlTypeaheadAddNewItemTheme = ".THEME_NAME .tdl-typeahead-add-new-item {\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME .tdl-typeahead-add-new-item .md-icon {\n  color: TEXT-ACCENT_TITLE !important;\n}\n.THEME_NAME .tdl-typeahead-add-new-item__text p:first-of-type {\n  color: TEXT-ACCENT_DEFAULT;\n}\n.THEME_NAME .tdl-typeahead-add-new-item__text p {\n  color: TEXT-ACCENT_TITLE;\n}";

const TdlTypeaheadAddNewItem = {
  default: 'tdl-typeahead-add-new-item',
  components: {
    MdIcon
  },
  mixins: [mixin.theme],
  props: {
    query: String,
    addNewItemElement: {
      type: Object
    }
  },

  data() {
    return {
      mdiKeyboardReturnIcon: js.mdiKeyboardReturn
    };
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlTypeaheadAddNewItem",
      theme: tdlTypeaheadAddNewItemTheme
    });
  }

};

module.exports = TdlTypeaheadAddNewItem;
