'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var uniqueId = require('./uniqueId-a0313ec5.js');
var getClosestVueParent = require('./getClosestVueParent-cfb023f4.js');

//
var script = {
  name: 'md-board',
  props: {
    id: [String, Number],
    mdLabel: [String, Number],
    mdIcon: String,
    mdActive: Boolean,
    mdDisabled: Boolean,
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },

  data() {
    return {
      mounted: false,
      boardId: this.id || 'board-' + uniqueId.uniqueId(),
      width: '0px',
      left: '0px'
    };
  },

  watch: {
    mdActive() {
      this.updateBoardData();
    },

    mdDisabled() {
      this.updateBoardData();
    },

    mdIcon() {
      this.updateBoardData();
    },

    mdLabel() {
      this.updateBoardData();
    },

    mdTooltip() {
      this.updateBoardData();
    },

    mdTooltipDelay() {
      this.updateBoardData();
    },

    mdTooltipDirection() {
      this.updateBoardData();
    }

  },
  computed: {
    styles() {
      return {
        width: this.width,
        left: this.left
      };
    }

  },
  methods: {
    getBoardData() {
      return {
        id: this.boardId,
        label: this.mdLabel,
        icon: this.mdIcon,
        active: this.mdActive,
        disabled: this.mdDisabled,
        tooltip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },

    updateBoardData() {
      this.parentBoards.updateBoard(this.getBoardData());
    }

  },

  mounted() {
    let boardData = this.getBoardData();
    this.parentBoards = getClosestVueParent.getClosestVueParent(this.$parent, 'md-boards');

    if (!this.parentBoards) {
      throw new Error('You must wrap the md-board in a md-boards');
    }

    this.mounted = true;
    this.parentBoards.updateBoard(boardData);

    if (this.mdActive) {
      this.parentBoards.setActiveBoard(boardData);
    }
  },

  beforeDestroy() {
    this.parentBoards.unregisterBoard(this.getBoardData());
  }

};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-board",
    style: _vm.styles,
    attrs: {
      "id": _vm.boardId
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-305ba915";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

module.exports = __vue_component__;
