import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

//
//
//
//
//
//
//
//
const MdBottomBar = {
  name: 'md-bottom-bar',
  props: {
    mdShift: Boolean
  },
  computed: {
    classes() {
      return this.mdShift ? 'md-shift' : 'md-fixed';
    }

  },
  methods: {
    setActive(item) {
      this.$children.forEach(child => {
        child.active = child === item;
      });
      this.$emit('change', this.$children.findIndex(i => i === item));
    }

  }
};

/* script */
const __vue_script__ = MdBottomBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-bottom-bar",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-5319e144_0", {
    source: ".md-bottom-bar{width:100%;min-width:100%;height:56px;position:relative;display:flex;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar.md-fixed{background-color:#383b40}.md-bottom-bar.md-fixed .md-bottom-bar-item{color:rgba(255,255,255,.65)}.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:rgba(255,255,255,.9)}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.pink100{color:#f8bbd0}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.pink200{color:#f48fb1}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.pink300{color:#f06292}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.purple100{color:#e1bee7}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.purple200{color:#ce93d8}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.purple300{color:#ba68c8}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.deepPurple200{color:#b39ddb}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.deepPurple300{color:#9575cd}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.blue200{color:#90caf9}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.blue500{color:#2196f3}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.cyan200{color:#80deea}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.cyan500{color:#00bcd4}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.teal200{color:#80cbc4}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.teal400{color:#26a69a}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.lightGreen500{color:#8bc34a}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.lime500{color:#cddc39}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.amber300{color:#ffd54f}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.amber600{color:#d69600}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.orange400{color:#ffa726}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.deepOrange500{color:#ff5722}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.brown100{color:#d7ccc8}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.brown200{color:#bcaaa4}.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active.bio{color:#cddc39}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.pink100{color:#f8bbd0}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.pink200{color:#f48fb1}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.pink300{color:#f06292}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.purple100{color:#e1bee7}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.purple200{color:#ce93d8}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.purple300{color:#ba68c8}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.deepPurple200{color:#b39ddb}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.deepPurple300{color:#9575cd}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.blue200{color:#90caf9}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.blue500{color:#2196f3}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.cyan200{color:#80deea}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.cyan500{color:#00bcd4}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.teal200{color:#80cbc4}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.teal400{color:#26a69a}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.lightGreen500{color:#8bc34a}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.lime500{color:#cddc39}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.amber300{color:#ffd54f}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.amber600{color:#d69600}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.orange400{color:#ffa726}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.deepOrange500{color:#ff5722}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.brown100{color:#d7ccc8}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.brown200{color:#bcaaa4}.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active.bio{color:#cddc39}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.pink100{color:#f8bbd0}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.pink200{color:#f48fb1}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.pink300{color:#f06292}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.purple100{color:#e1bee7}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.purple200{color:#ce93d8}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.purple300{color:#ba68c8}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.deepPurple200{color:#b39ddb}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.deepPurple300{color:#9575cd}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.blue200{color:#90caf9}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.blue500{color:#2196f3}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.cyan200{color:#80deea}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.cyan500{color:#00bcd4}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.teal200{color:#80cbc4}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.teal400{color:#26a69a}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.lightGreen500{color:#8bc34a}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.lime500{color:#cddc39}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.amber300{color:#ffd54f}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.amber600{color:#d69600}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.orange400{color:#ffa726}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.deepOrange500{color:#ff5722}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.brown100{color:#d7ccc8}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.brown200{color:#bcaaa4}.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active.bio{color:#cddc39}.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift.pink100{background-color:#f8bbd0}.md-bottom-bar.md-shift.pink200{background-color:#f48fb1}.md-bottom-bar.md-shift.pink300{background-color:#f06292}.md-bottom-bar.md-shift.purple100{background-color:#e1bee7}.md-bottom-bar.md-shift.purple200{background-color:#ce93d8}.md-bottom-bar.md-shift.purple300{background-color:#ba68c8}.md-bottom-bar.md-shift.deepPurple200{background-color:#b39ddb}.md-bottom-bar.md-shift.deepPurple300{background-color:#9575cd}.md-bottom-bar.md-shift.blue200{background-color:#90caf9}.md-bottom-bar.md-shift.blue500{background-color:#2196f3}.md-bottom-bar.md-shift.cyan200{background-color:#80deea}.md-bottom-bar.md-shift.cyan500{background-color:#00bcd4}.md-bottom-bar.md-shift.teal200{background-color:#80cbc4}.md-bottom-bar.md-shift.teal400{background-color:#26a69a}.md-bottom-bar.md-shift.lightGreen500{background-color:#8bc34a}.md-bottom-bar.md-shift.lime500{background-color:#cddc39}.md-bottom-bar.md-shift.amber300{background-color:#ffd54f}.md-bottom-bar.md-shift.amber600{background-color:#d69600}.md-bottom-bar.md-shift.orange400{background-color:#ffa726}.md-bottom-bar.md-shift.deepOrange500{background-color:#ff5722}.md-bottom-bar.md-shift.brown100{background-color:#d7ccc8}.md-bottom-bar.md-shift.brown200{background-color:#bcaaa4}.md-bottom-bar.md-shift.bio{background-color:#cddc39}.md-bottom-bar.md-shift .md-bottom-bar-item{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-accent.pink100{background-color:#f8bbd0}.md-bottom-bar.md-shift.md-accent.pink200{background-color:#f48fb1}.md-bottom-bar.md-shift.md-accent.pink300{background-color:#f06292}.md-bottom-bar.md-shift.md-accent.purple100{background-color:#e1bee7}.md-bottom-bar.md-shift.md-accent.purple200{background-color:#ce93d8}.md-bottom-bar.md-shift.md-accent.purple300{background-color:#ba68c8}.md-bottom-bar.md-shift.md-accent.deepPurple200{background-color:#b39ddb}.md-bottom-bar.md-shift.md-accent.deepPurple300{background-color:#9575cd}.md-bottom-bar.md-shift.md-accent.blue200{background-color:#90caf9}.md-bottom-bar.md-shift.md-accent.blue500{background-color:#2196f3}.md-bottom-bar.md-shift.md-accent.cyan200{background-color:#80deea}.md-bottom-bar.md-shift.md-accent.cyan500{background-color:#00bcd4}.md-bottom-bar.md-shift.md-accent.teal200{background-color:#80cbc4}.md-bottom-bar.md-shift.md-accent.teal400{background-color:#26a69a}.md-bottom-bar.md-shift.md-accent.lightGreen500{background-color:#8bc34a}.md-bottom-bar.md-shift.md-accent.lime500{background-color:#cddc39}.md-bottom-bar.md-shift.md-accent.amber300{background-color:#ffd54f}.md-bottom-bar.md-shift.md-accent.amber600{background-color:#d69600}.md-bottom-bar.md-shift.md-accent.orange400{background-color:#ffa726}.md-bottom-bar.md-shift.md-accent.deepOrange500{background-color:#ff5722}.md-bottom-bar.md-shift.md-accent.brown100{background-color:#d7ccc8}.md-bottom-bar.md-shift.md-accent.brown200{background-color:#bcaaa4}.md-bottom-bar.md-shift.md-accent.bio{background-color:#cddc39}.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active{color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-warn.pink100{background-color:#f8bbd0}.md-bottom-bar.md-shift.md-warn.pink200{background-color:#f48fb1}.md-bottom-bar.md-shift.md-warn.pink300{background-color:#f06292}.md-bottom-bar.md-shift.md-warn.purple100{background-color:#e1bee7}.md-bottom-bar.md-shift.md-warn.purple200{background-color:#ce93d8}.md-bottom-bar.md-shift.md-warn.purple300{background-color:#ba68c8}.md-bottom-bar.md-shift.md-warn.deepPurple200{background-color:#b39ddb}.md-bottom-bar.md-shift.md-warn.deepPurple300{background-color:#9575cd}.md-bottom-bar.md-shift.md-warn.blue200{background-color:#90caf9}.md-bottom-bar.md-shift.md-warn.blue500{background-color:#2196f3}.md-bottom-bar.md-shift.md-warn.cyan200{background-color:#80deea}.md-bottom-bar.md-shift.md-warn.cyan500{background-color:#00bcd4}.md-bottom-bar.md-shift.md-warn.teal200{background-color:#80cbc4}.md-bottom-bar.md-shift.md-warn.teal400{background-color:#26a69a}.md-bottom-bar.md-shift.md-warn.lightGreen500{background-color:#8bc34a}.md-bottom-bar.md-shift.md-warn.lime500{background-color:#cddc39}.md-bottom-bar.md-shift.md-warn.amber300{background-color:#ffd54f}.md-bottom-bar.md-shift.md-warn.amber600{background-color:#d69600}.md-bottom-bar.md-shift.md-warn.orange400{background-color:#ffa726}.md-bottom-bar.md-shift.md-warn.deepOrange500{background-color:#ff5722}.md-bottom-bar.md-shift.md-warn.brown100{background-color:#d7ccc8}.md-bottom-bar.md-shift.md-warn.brown200{background-color:#bcaaa4}.md-bottom-bar.md-shift.md-warn.bio{background-color:#cddc39}.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active{color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-transparent{background-color:transparent}.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item{color:rgba(255,255,255,.65)}.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:rgba(255,255,255,.9)}.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active{color:rgba(255,255,255,.9)}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;flex:1;position:relative;cursor:pointer;border:none;background:0 0;transform:translate3d(0,0,0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,0,0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar-item[disabled]{opacity:.38}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translate3d(0,0,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear,opacity .15s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear}",
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
