'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

//
//
const MdWhiteframe = {
  name: 'md-whiteframe',
  props: {
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdTag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      let numberedElevation = parseInt(this.mdElevation, 10);
      let elevationClass = 'md-whiteframe-';

      if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
        elevationClass += numberedElevation;
        elevationClass += 'dp';
      } else if (this.mdElevation.indexOf('dp') > -1) {
        elevationClass += this.mdElevation;
      }

      return elevationClass;
    }

  },

  render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-whiteframe',
      class: this.classes,
      on: {
        click: () => this.$emit('click')
      }
    }, this.$slots.default);
  }

};

/* script */
const __vue_script__ = MdWhiteframe;
/* template */

/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-71bceb85_0", {
    source: ".md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-71bceb85";
/* functional template */

const __vue_is_functional_template__ = undefined;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
