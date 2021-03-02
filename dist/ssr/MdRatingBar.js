'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let iconSize = 24; //size of each icon from rating bar in pixels

const MdRatingBar = {
  props: {
    mdMaxRating: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    value: {
      type: Number,
      default: 0
    },
    mdIconSize: {
      type: Number,
      default: 1
    },
    mdFullIconset: String,
    mdEmptyIconset: String,
    mdFullIcon: {
      type: String,
      default: 'star'
    },
    mdEmptyIcon: {
      type: String,
      default: 'star'
    }
  },

  data() {
    return {
      srcFullIcon: null,
      srcEmptyIcon: null,
      rating: this.value
    };
  },

  mounted: function () {
    this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
  },
  computed: {
    emptyIcon() {
      if (this.mdEmptyIconset) {
        return '';
      }

      return this.mdEmptyIcon;
    },

    fullIcon() {
      if (this.mdFullIconset) {
        return '';
      }

      return this.mdFullIcon;
    },

    iconClasses() {
      let classes = {};

      if (this.mdIconSize) {
        classes[`md-size-${this.mdIconSize}x`] = true;
      }

      return classes;
    },

    fullIconStyle() {
      return {
        width: 100 / this.mdMaxRating * this.rating + '%',
        'margin-left': -iconSize * this.mdIconSize * this.mdMaxRating + 'px'
      };
    }

  },
  watch: {
    mdFullIcon() {
      this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    },

    mdEmptyIcon() {
      this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
    },

    value() {
      this.rating = this.value;
    }

  },
  methods: {
    hoverStars(evt) {
      if (!this.disabled) {
        this.rating = this.getIconIndex(evt.currentTarget);
        this.$emit('hover', this.rating);
      }
    },

    clickStars(evt) {
      if (!this.disabled) {
        var selected = this.getIconIndex(evt.currentTarget);
        this.$emit('input', selected);
        this.$emit('change', selected);
      }
    },

    getIconIndex(iconSelected) {
      //iconSelected is a dom element
      let ratingIcons = this.$el.querySelectorAll('.md-empty-icon > .md-icon, .md-full-icon > .md-icon');
      let selected = -1;
      ratingIcons = Array.prototype.slice.call(ratingIcons); //find index from iconSelected

      ratingIcons.some((icon, i) => {
        if (icon === iconSelected) {
          selected = (i + 1) % this.mdMaxRating;
          selected = !selected ? this.mdMaxRating : selected;
          return true;
        }
      });
      return selected;
    },

    checkSrc(src) {
      if (src && /.+\.(svg|png)/.test(src)) {
        //check if src is a image source
        return src;
      }

      return null;
    },

    onMouseOut() {
      this.rating = this.value;
    }

  }
};

/* script */
const __vue_script__ = MdRatingBar;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "md-rating-bar",
    class: [_vm.themeClass],
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_vm.srcEmptyIcon ? _vm._ssrNode("<div class=\"md-empty-icon\">", "</div>", _vm._l(_vm.mdMaxRating, function (i) {
    return _vm.srcEmptyIcon ? _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcEmptyIcon
      },
      nativeOn: {
        "mouseover": function ($event) {
          return _vm.hoverStars($event);
        },
        "click": function ($event) {
          return _vm.clickStars($event);
        },
        "mouseout": function ($event) {
          return _vm.onMouseOut($event);
        }
      }
    }) : _vm._e();
  }), 1) : _vm._ssrNode("<div class=\"md-empty-icon\">", "</div>", _vm._l(_vm.mdMaxRating, function (i) {
    return _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdEmptyIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.emptyIcon)
      },
      nativeOn: {
        "mouseover": function ($event) {
          return _vm.hoverStars($event);
        },
        "click": function ($event) {
          return _vm.clickStars($event);
        },
        "mouseout": function ($event) {
          return _vm.onMouseOut($event);
        }
      }
    });
  }), 1), _vm._ssrNode(" "), _vm.srcFullIcon ? _vm._ssrNode("<div class=\"md-full-icon\"" + _vm._ssrStyle(null, _vm.fullIconStyle, null) + ">", "</div>", _vm._l(_vm.mdMaxRating, function (i) {
    return _vm.srcFullIcon ? _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcFullIcon
      },
      nativeOn: {
        "mouseover": function ($event) {
          return _vm.hoverStars($event);
        },
        "click": function ($event) {
          return _vm.clickStars($event);
        },
        "mouseout": function ($event) {
          return _vm.onMouseOut($event);
        }
      }
    }) : _vm._e();
  }), 1) : _vm._ssrNode("<div class=\"md-full-icon\"" + _vm._ssrStyle(null, _vm.fullIconStyle, null) + ">", "</div>", _vm._l(_vm.mdMaxRating, function (i) {
    return _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdFullIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.fullIcon)
      },
      nativeOn: {
        "mouseover": function ($event) {
          return _vm.hoverStars($event);
        },
        "click": function ($event) {
          return _vm.clickStars($event);
        },
        "mouseout": function ($event) {
          return _vm.onMouseOut($event);
        }
      }
    });
  }), 1)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6ae869d4_0", {
    source: ".md-rating-bar{width:auto;display:flex;width:fit-content;padding:3px;border-radius:2px}.md-rating-bar>.md-full-icon{overflow-x:hidden;display:inherit}.md-rating-bar>.md-empty-icon>.md-icon,.md-rating-bar>.md-full-icon>.md-icon{margin:0;white-space:nowrap;cursor:pointer}.md-rating-bar[disabled]>.md-empty-icon>.md-icon,.md-rating-bar[disabled]>.md-full-icon>.md-icon{cursor:default}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-6ae869d4";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
