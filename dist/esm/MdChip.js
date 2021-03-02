import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import MdIcon from './MdIcon.js';
import { mdiCloseCircle } from '@mdi/js';

var mdChipTheme = ".THEME_NAME.md-chip {\n  background-color: BACKGROUND-INVERTED-0.16;\n}\n.THEME_NAME.md-chip.md-deletable:hover, .THEME_NAME.md-chip.md-deletable:focus, .THEME_NAME.md-chip.md-editable:hover, .THEME_NAME.md-chip.md-editable:focus {\n  background-color: BACKGROUND-INVERTED-0.54;\n  color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-chip.md-deletable:hover .md-delete, .THEME_NAME.md-chip.md-deletable:focus .md-delete, .THEME_NAME.md-chip.md-editable:hover .md-delete, .THEME_NAME.md-chip.md-editable:focus .md-delete {\n  color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-chip .md-delete {\n  color: BACKGROUND-INVERTED-0.38;\n}\n.THEME_NAME.md-chip .md-delete .md-ripple {\n  color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.md-chip.md-primary {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-chip.md-accent {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-chip.md-warn {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-WARN;\n}";

//
const MdChip = {
  name: 'md-chip',
  components: {
    MdButton,
    MdIcon
  },
  props: {
    disabled: Boolean,
    mdDeletable: Boolean,
    mdEditable: Boolean
  },

  data() {
    return {
      mdiCloseIcon: mdiCloseCircle
    };
  },

  computed: {
    classes() {
      return {
        'md-deletable': this.mdDeletable,
        'md-disabled': this.disabled,
        'md-editable': this.mdEditable
      };
    }

  },

  created() {
    this.$root.$emit("component-created", {
      name: "mdChip",
      theme: mdChipTheme
    });
  }

};

/* script */
const __vue_script__ = MdChip;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-chip",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-chip-container",
    on: {
      "click": function ($event) {
        !_vm.disabled && _vm.mdEditable && _vm.$emit('edit');
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.mdDeletable ? _c('md-button', {
    staticClass: "md-icon-button md-dense md-delete",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": function ($event) {
        !_vm.disabled && _vm.$emit('delete');
      }
    },
    nativeOn: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
          return null;
        }

        !_vm.disabled && _vm.$emit('delete');
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-icon-delete",
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1) : _vm._e()], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-2b9f2b3b_0", {
    source: ".md-chip{height:32px;padding:8px 12px;display:inline-block;border-radius:32px;transition:all .4s cubic-bezier(.25,.8,.25,1);font-size:13px;line-height:16px;white-space:nowrap;overflow:hidden;background-color:rgba(255,255,255,.16)}.md-chip .md-chip-container{text-overflow:ellipsis;overflow:hidden}.md-chip.md-deletable{display:flex;align-items:center;height:auto;padding:4px 6px 4px 16px}.md-chip.md-deletable .md-chip-container{flex-grow:1;padding:4px 4px 4px 0}.md-chip.md-editable .md-chip-container{cursor:pointer}.md-chip:active,.md-chip:focus{outline:0}.md-chip:active:not(.md-disabled),.md-chip:focus:not(.md-disabled){cursor:pointer;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-chip.md-deletable:focus,.md-chip.md-deletable:hover,.md-chip.md-editable:focus,.md-chip.md-editable:hover{background-color:rgba(255,255,255,.54);color:#27292d}.md-chip.md-deletable:focus .md-delete,.md-chip.md-deletable:hover .md-delete,.md-chip.md-editable:focus .md-delete,.md-chip.md-editable:hover .md-delete{color:#27292d}.md-chip.md-disabled .md-button{pointer-events:none;cursor:default}.md-chip .md-delete{color:rgba(255,255,255,.38)}.md-chip .md-delete .md-ripple{color:#27292d}.md-chip.md-primary{color:rgba(0,0,0,.87)}.md-chip.md-primary.pink100{background-color:#f8bbd0}.md-chip.md-primary.pink200{background-color:#f48fb1}.md-chip.md-primary.pink300{background-color:#f06292}.md-chip.md-primary.purple100{background-color:#e1bee7}.md-chip.md-primary.purple200{background-color:#ce93d8}.md-chip.md-primary.purple300{background-color:#ba68c8}.md-chip.md-primary.deepPurple200{background-color:#b39ddb}.md-chip.md-primary.deepPurple300{background-color:#9575cd}.md-chip.md-primary.blue200{background-color:#90caf9}.md-chip.md-primary.blue500{background-color:#2196f3}.md-chip.md-primary.cyan200{background-color:#80deea}.md-chip.md-primary.cyan500{background-color:#00bcd4}.md-chip.md-primary.teal200{background-color:#80cbc4}.md-chip.md-primary.teal400{background-color:#26a69a}.md-chip.md-primary.lightGreen500{background-color:#8bc34a}.md-chip.md-primary.lime500{background-color:#cddc39}.md-chip.md-primary.amber300{background-color:#ffd54f}.md-chip.md-primary.amber600{background-color:#d69600}.md-chip.md-primary.orange400{background-color:#ffa726}.md-chip.md-primary.deepOrange500{background-color:#ff5722}.md-chip.md-primary.brown100{background-color:#d7ccc8}.md-chip.md-primary.brown200{background-color:#bcaaa4}.md-chip.md-primary.bio{background-color:#cddc39}.md-chip.md-accent{color:rgba(0,0,0,.87)}.md-chip.md-accent.pink100{background-color:#f8bbd0}.md-chip.md-accent.pink200{background-color:#f48fb1}.md-chip.md-accent.pink300{background-color:#f06292}.md-chip.md-accent.purple100{background-color:#e1bee7}.md-chip.md-accent.purple200{background-color:#ce93d8}.md-chip.md-accent.purple300{background-color:#ba68c8}.md-chip.md-accent.deepPurple200{background-color:#b39ddb}.md-chip.md-accent.deepPurple300{background-color:#9575cd}.md-chip.md-accent.blue200{background-color:#90caf9}.md-chip.md-accent.blue500{background-color:#2196f3}.md-chip.md-accent.cyan200{background-color:#80deea}.md-chip.md-accent.cyan500{background-color:#00bcd4}.md-chip.md-accent.teal200{background-color:#80cbc4}.md-chip.md-accent.teal400{background-color:#26a69a}.md-chip.md-accent.lightGreen500{background-color:#8bc34a}.md-chip.md-accent.lime500{background-color:#cddc39}.md-chip.md-accent.amber300{background-color:#ffd54f}.md-chip.md-accent.amber600{background-color:#d69600}.md-chip.md-accent.orange400{background-color:#ffa726}.md-chip.md-accent.deepOrange500{background-color:#ff5722}.md-chip.md-accent.brown100{background-color:#d7ccc8}.md-chip.md-accent.brown200{background-color:#bcaaa4}.md-chip.md-accent.bio{background-color:#cddc39}.md-chip.md-warn{color:rgba(0,0,0,.87)}.md-chip.md-warn.pink100{background-color:#f8bbd0}.md-chip.md-warn.pink200{background-color:#f48fb1}.md-chip.md-warn.pink300{background-color:#f06292}.md-chip.md-warn.purple100{background-color:#e1bee7}.md-chip.md-warn.purple200{background-color:#ce93d8}.md-chip.md-warn.purple300{background-color:#ba68c8}.md-chip.md-warn.deepPurple200{background-color:#b39ddb}.md-chip.md-warn.deepPurple300{background-color:#9575cd}.md-chip.md-warn.blue200{background-color:#90caf9}.md-chip.md-warn.blue500{background-color:#2196f3}.md-chip.md-warn.cyan200{background-color:#80deea}.md-chip.md-warn.cyan500{background-color:#00bcd4}.md-chip.md-warn.teal200{background-color:#80cbc4}.md-chip.md-warn.teal400{background-color:#26a69a}.md-chip.md-warn.lightGreen500{background-color:#8bc34a}.md-chip.md-warn.lime500{background-color:#cddc39}.md-chip.md-warn.amber300{background-color:#ffd54f}.md-chip.md-warn.amber600{background-color:#d69600}.md-chip.md-warn.orange400{background-color:#ffa726}.md-chip.md-warn.deepOrange500{background-color:#ff5722}.md-chip.md-warn.brown100{background-color:#d7ccc8}.md-chip.md-warn.brown200{background-color:#bcaaa4}.md-chip.md-warn.bio{background-color:#cddc39}.md-chip .md-button.md-delete{width:24px;min-width:24px;height:24px;min-height:24px;margin:0;padding:0;border-radius:24px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-chip .md-button.md-delete .md-icon{width:20px;min-width:20px;height:20px;min-height:20px;margin:0;font-size:20px}.md-chip .md-button.md-delete .md-ink-ripple{border-radius:32px}.md-chip .md-button.md-delete .md-ripple{opacity:.54}.md-chips{display:flex;align-items:center;display:flex;flex-wrap:wrap;padding:2px 8px}.md-chips .md-chip{margin-right:8px;margin-bottom:4px}.md-chips .md-input{width:128px;flex:1}.md-chips .md-input::placeholder{opacity:1}.md-chips.md-chips--with-value .md-input::placeholder{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

export default __vue_component__;
