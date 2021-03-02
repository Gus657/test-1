'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
require('./MdButton.js');
require('./MdIcon.js');
require('@mdi/js');
var MdChip = require('./MdChip.js');
var uniqueId = require('./uniqueId-a0313ec5.js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
var MdInput = require('./MdInput.js');

const MdChips = {
  name: 'md-chips',
  components: {
    MdChip,
    MdInput,
    MdInputContainer
  },
  props: {
    value: Array,
    disabled: Boolean,
    debounce: {
      type: Number,
      default: 1E2
    },
    mdInputId: String,
    mdInputName: String,
    mdInputPlaceholder: String,
    mdInputType: {
      type: String,
      default: 'text'
    },
    mdStatic: Boolean,
    mdMax: {
      type: Number,
      default: Infinity
    }
  },

  data() {
    return {
      currentChip: null,
      selectedChips: this.value,
      inputId: this.mdInputId || 'chips-' + uniqueId.uniqueId()
    };
  },

  watch: {
    value(value) {
      this.selectedChips = value;
    },

    currentChip(value, previousValue) {
      if (!!value !== !!previousValue) {
        this.$emit('current-chip-change', value);
      }
    }

  },
  computed: {
    hasValue() {
      return !!(this.value && this.value.length);
    },

    classes() {
      return {
        'md-static': this.mdStatic,
        'md-disabled': this.disabled,
        'md-chips': true,
        'md-chips--with-value': this.hasValue
      };
    }

  },
  methods: {
    applyInputFocus() {
      this.$nextTick(() => {
        this.$refs.input.$el.focus();
      });
    },

    addChip() {
      if (this.currentChip && this.selectedChips.length < this.mdMax) {
        const value = this.currentChip.trim();

        if (this.selectedChips.indexOf(value) < 0) {
          this.selectedChips.push(value);
          this.currentChip = null;
          this.$emit('input', this.selectedChips);
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    },

    deleteChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },

    editChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.currentChip = chip;
      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },

    deleteLastChip() {
      if (!this.currentChip) {
        this.selectedChips.pop();
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      }
    }

  }
};

/* script */
const __vue_script__ = MdChips;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', [_c('md-input-container', {
    staticClass: "md-chips",
    class: [_vm.themeClass, _vm.classes],
    on: {
      "click": _vm.applyInputFocus
    }
  }, [_vm._l(_vm.selectedChips, function (chip) {
    return _c('md-chip', {
      key: chip,
      attrs: {
        "md-editable": !_vm.mdStatic,
        "md-deletable": !_vm.mdStatic,
        "disabled": _vm.disabled
      },
      on: {
        "edit": function ($event) {
          return _vm.editChip(chip);
        },
        "delete": function ($event) {
          return _vm.deleteChip(chip);
        }
      }
    }, [_vm._t("chip", [_vm._v(_vm._s(chip))], {
      "value": chip
    })], 2);
  }), _vm._v(" "), _c('md-input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.mdStatic,
      expression: "!mdStatic"
    }],
    ref: "input",
    attrs: {
      "type": _vm.mdInputType,
      "placeholder": _vm.mdInputPlaceholder,
      "id": _vm.inputId,
      "name": _vm.mdInputName,
      "disabled": _vm.disabled,
      "tabindex": "0",
      "debounce": 0
    },
    nativeOn: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
          return null;
        }

        return _vm.deleteLastChip($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        $event.preventDefault();
        return _vm.addChip($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && $event.keyCode !== 186) {
          return null;
        }

        $event.preventDefault();
        return _vm.addChip($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && $event.keyCode !== 188) {
          return null;
        }

        $event.preventDefault();
        return _vm.addChip($event);
      }]
    },
    model: {
      value: _vm.currentChip,
      callback: function ($$v) {
        _vm.currentChip = $$v;
      },
      expression: "currentChip"
    }
  }), _vm._v(" "), _vm._t("default")], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-5b211ed8_0", {
    source: ".md-chip{height:32px;padding:8px 12px;display:inline-block;border-radius:32px;transition:all .4s cubic-bezier(.25,.8,.25,1);font-size:13px;line-height:16px;white-space:nowrap;overflow:hidden;background-color:rgba(255,255,255,.16)}.md-chip .md-chip-container{text-overflow:ellipsis;overflow:hidden}.md-chip.md-deletable{display:flex;align-items:center;height:auto;padding:4px 6px 4px 16px}.md-chip.md-deletable .md-chip-container{flex-grow:1;padding:4px 4px 4px 0}.md-chip.md-editable .md-chip-container{cursor:pointer}.md-chip:active,.md-chip:focus{outline:0}.md-chip:active:not(.md-disabled),.md-chip:focus:not(.md-disabled){cursor:pointer;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-chip.md-deletable:focus,.md-chip.md-deletable:hover,.md-chip.md-editable:focus,.md-chip.md-editable:hover{background-color:rgba(255,255,255,.54);color:#27292d}.md-chip.md-deletable:focus .md-delete,.md-chip.md-deletable:hover .md-delete,.md-chip.md-editable:focus .md-delete,.md-chip.md-editable:hover .md-delete{color:#27292d}.md-chip.md-disabled .md-button{pointer-events:none;cursor:default}.md-chip .md-delete{color:rgba(255,255,255,.38)}.md-chip .md-delete .md-ripple{color:#27292d}.md-chip.md-primary{color:rgba(0,0,0,.87)}.md-chip.md-primary.pink100{background-color:#f8bbd0}.md-chip.md-primary.pink200{background-color:#f48fb1}.md-chip.md-primary.pink300{background-color:#f06292}.md-chip.md-primary.purple100{background-color:#e1bee7}.md-chip.md-primary.purple200{background-color:#ce93d8}.md-chip.md-primary.purple300{background-color:#ba68c8}.md-chip.md-primary.deepPurple200{background-color:#b39ddb}.md-chip.md-primary.deepPurple300{background-color:#9575cd}.md-chip.md-primary.blue200{background-color:#90caf9}.md-chip.md-primary.blue500{background-color:#2196f3}.md-chip.md-primary.cyan200{background-color:#80deea}.md-chip.md-primary.cyan500{background-color:#00bcd4}.md-chip.md-primary.teal200{background-color:#80cbc4}.md-chip.md-primary.teal400{background-color:#26a69a}.md-chip.md-primary.lightGreen500{background-color:#8bc34a}.md-chip.md-primary.lime500{background-color:#cddc39}.md-chip.md-primary.amber300{background-color:#ffd54f}.md-chip.md-primary.amber600{background-color:#d69600}.md-chip.md-primary.orange400{background-color:#ffa726}.md-chip.md-primary.deepOrange500{background-color:#ff5722}.md-chip.md-primary.brown100{background-color:#d7ccc8}.md-chip.md-primary.brown200{background-color:#bcaaa4}.md-chip.md-primary.bio{background-color:#cddc39}.md-chip.md-accent{color:rgba(0,0,0,.87)}.md-chip.md-accent.pink100{background-color:#f8bbd0}.md-chip.md-accent.pink200{background-color:#f48fb1}.md-chip.md-accent.pink300{background-color:#f06292}.md-chip.md-accent.purple100{background-color:#e1bee7}.md-chip.md-accent.purple200{background-color:#ce93d8}.md-chip.md-accent.purple300{background-color:#ba68c8}.md-chip.md-accent.deepPurple200{background-color:#b39ddb}.md-chip.md-accent.deepPurple300{background-color:#9575cd}.md-chip.md-accent.blue200{background-color:#90caf9}.md-chip.md-accent.blue500{background-color:#2196f3}.md-chip.md-accent.cyan200{background-color:#80deea}.md-chip.md-accent.cyan500{background-color:#00bcd4}.md-chip.md-accent.teal200{background-color:#80cbc4}.md-chip.md-accent.teal400{background-color:#26a69a}.md-chip.md-accent.lightGreen500{background-color:#8bc34a}.md-chip.md-accent.lime500{background-color:#cddc39}.md-chip.md-accent.amber300{background-color:#ffd54f}.md-chip.md-accent.amber600{background-color:#d69600}.md-chip.md-accent.orange400{background-color:#ffa726}.md-chip.md-accent.deepOrange500{background-color:#ff5722}.md-chip.md-accent.brown100{background-color:#d7ccc8}.md-chip.md-accent.brown200{background-color:#bcaaa4}.md-chip.md-accent.bio{background-color:#cddc39}.md-chip.md-warn{color:rgba(0,0,0,.87)}.md-chip.md-warn.pink100{background-color:#f8bbd0}.md-chip.md-warn.pink200{background-color:#f48fb1}.md-chip.md-warn.pink300{background-color:#f06292}.md-chip.md-warn.purple100{background-color:#e1bee7}.md-chip.md-warn.purple200{background-color:#ce93d8}.md-chip.md-warn.purple300{background-color:#ba68c8}.md-chip.md-warn.deepPurple200{background-color:#b39ddb}.md-chip.md-warn.deepPurple300{background-color:#9575cd}.md-chip.md-warn.blue200{background-color:#90caf9}.md-chip.md-warn.blue500{background-color:#2196f3}.md-chip.md-warn.cyan200{background-color:#80deea}.md-chip.md-warn.cyan500{background-color:#00bcd4}.md-chip.md-warn.teal200{background-color:#80cbc4}.md-chip.md-warn.teal400{background-color:#26a69a}.md-chip.md-warn.lightGreen500{background-color:#8bc34a}.md-chip.md-warn.lime500{background-color:#cddc39}.md-chip.md-warn.amber300{background-color:#ffd54f}.md-chip.md-warn.amber600{background-color:#d69600}.md-chip.md-warn.orange400{background-color:#ffa726}.md-chip.md-warn.deepOrange500{background-color:#ff5722}.md-chip.md-warn.brown100{background-color:#d7ccc8}.md-chip.md-warn.brown200{background-color:#bcaaa4}.md-chip.md-warn.bio{background-color:#cddc39}.md-chip .md-button.md-delete{width:24px;min-width:24px;height:24px;min-height:24px;margin:0;padding:0;border-radius:24px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-chip .md-button.md-delete .md-icon{width:20px;min-width:20px;height:20px;min-height:20px;margin:0;font-size:20px}.md-chip .md-button.md-delete .md-ink-ripple{border-radius:32px}.md-chip .md-button.md-delete .md-ripple{opacity:.54}.md-chips{display:flex;align-items:center;display:flex;flex-wrap:wrap;padding:2px 8px}.md-chips .md-chip{margin-right:8px;margin-bottom:4px}.md-chips .md-input{width:128px;flex:1}.md-chips .md-input::placeholder{opacity:1}.md-chips.md-chips--with-value .md-input::placeholder{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-5b211ed8";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
