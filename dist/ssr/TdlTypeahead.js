'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');
var mixin = require('./mixin-10643a0a.js');
require('./MdInkRipple.js');
var MdButton = require('./MdButton.js');
var MdIcon = require('./MdIcon.js');
var js = require('@mdi/js');
var MdChip = require('./MdChip.js');
require('./isArray-6fbc293c.js');
var MdInputContainer = require('./MdInputContainer.js');
require('./common-5508bc58.js');
require('./getClosestVueParent-cfb023f4.js');
require('./MdInput.js');
require('./transitionEndEventName-137bd43f.js');
require('./MdList.js');
require('./MdListItem.js');
require('./MdProgress.js');
var deviceHelper = require('./deviceHelper-d251a554.js');
var MdTooltip = require('./MdTooltip.js');
require('./MdWhiteframe.js');
var debounce = _interopDefault(require('lodash-es/debounce'));
var reduce = _interopDefault(require('lodash-es/reduce'));
var isEqual = _interopDefault(require('lodash-es/isEqual'));
var isArray$1 = _interopDefault(require('lodash-es/isArray'));
require('./tdlTypeaheadCommon-06052a16.js');
var TdlTypeaheadDialog = require('./TdlTypeaheadDialog.js');
var TdlTypeaheadAddNewItem = require('./TdlTypeaheadAddNewItem.js');
require('lodash-es/throttle');
var TdlTypeaheadList = require('./TdlTypeaheadList.js');

/* script */
const __vue_script__ = TdlTypeaheadDialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "typeahead-dialog",
    class: _vm.themeClass
  }, [_c('md-input', {
    staticClass: "typeahead-dialog__input-trigger",
    attrs: {
      "disabled": _vm.disabled,
      "debounce": 0,
      "placeholder": !_vm.selectedItems.length ? _vm.inputPlaceholder || _vm.inputLabel : ''
    },
    on: {
      "focus": _vm.openDialog
    }
  }), _vm._ssrNode(" "), _vm.hasAfterInputSlot && !_vm.openInputContainer ? _vm._t("mobileAfterInput") : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("typeahead-dialog__input-container", [_vm.inputContainerClasses, _vm.themeClass]) + _vm._ssrStyle(null, _vm.cssProps, null) + ">", "</div>", [_c('md-whiteframe', {
    staticClass: "typeahead-dialog__search-actions"
  }, [_c('md-button', {
    staticClass: "md-icon-button typeahead-dialog__search-actions-close",
    on: {
      "click": _vm.closeInputContainer
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiArrowLeftIcon
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "typeahead-dialog__search-actions-input"
  }, [_c('md-input-container', {
    staticClass: "typeahead-dialog__search-actions-input-container--embed",
    attrs: {
      "md-clear": ""
    }
  }, [_vm.hasChipsSlot ? [_vm._t("mobileChips", null, {
    "value": _vm.selectedItems
  })] : _vm._l(_vm.selectedItems, function (selected) {
    return _c('md-chip', {
      key: selected.id,
      staticClass: "typeahead-dialog__input-container-chip",
      attrs: {
        "md-deletable": ""
      },
      on: {
        "delete": function ($event) {
          return _vm.deleteSelected(selected);
        }
      }
    }, [_vm._t("mobileChip", null, {
      "value": selected
    })], 2);
  }), _vm._v(" "), _c('div', {
    staticClass: "typeahead-dialog__input-container-box"
  }, [_vm.hasBeforeInputSlot ? _vm._t("mobileBeforeInput") : _vm._e(), _vm._v(" "), _c('md-input', {
    ref: "searchInput",
    attrs: {
      "debounce": 0,
      "maxlength": _vm.maxQueryLength,
      "disable-counter": true,
      "placeholder": _vm.inputPlaceholder || _vm.inputLabel
    },
    on: {
      "focus": _vm.onSearchInputFocus,
      "blur": _vm.onSearchInputBlur
    },
    nativeOn: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        $event.preventDefault();
        return _vm.handleEnter($event);
      }, function ($event) {
        return _vm.charHandler($event);
      }],
      "textInput": function ($event) {
        return _vm.textInputHandler($event);
      }
    },
    model: {
      value: _vm.query,
      callback: function ($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  }), _vm._v(" "), _vm.query.length > 0 || _vm.showSearchHint ? [_vm.query.length === 0 ? _c('md-icon', {
    key: "hint",
    staticClass: "typeahead-dialog__search-hint",
    attrs: {
      "icon-svg": _vm.mdiMagnifyIcon
    }
  }) : _c('md-button', {
    key: "clear",
    staticClass: "md-icon-button md-dense",
    on: {
      "click": _vm.handleClearSearch
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1)] : _vm._e(), _vm._v(" "), _vm.hasAfterInputSlot && _vm.openInputContainer ? _vm._t("mobileAfterInput") : _vm._e()], 2)], 2)], 1)], 1), _vm._ssrNode(" "), _vm.loading ? _c('md-progress', {
    key: "stateLoading",
    attrs: {
      "md-indeterminate": ""
    }
  }) : _c('div', {
    key: "stateLoaded",
    ref: "results",
    staticClass: "typeahead-dialog__results results"
  }, [_c('md-list', {
    ref: "list",
    staticClass: "typeahead-dialog__results-list"
  }, [_vm.flattenItemList.length > 0 && _vm.hasBeforeListSlot ? _c('md-list-item', [_vm._t("mobileBeforeList")], 2) : _vm._e(), _vm._v(" "), _vm.noResultsVisible ? _c('md-list-item', [_vm._t("mobileNoResults")], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemList, function (list, title) {
    return _c('div', {
      key: title
    }, [title !== '$default' && list.length > 0 ? _c('h4', {
      staticClass: "md-caption typeahead-dialog__results-subtitle"
    }, [_vm._v(_vm._s(title))]) : _vm._e(), _vm._v(" "), _vm._l(list, function (item) {
      return _c('md-list-item', {
        key: item.id,
        class: _vm.itemClass(item),
        attrs: {
          "disabled": _vm.itemDisabled(item)
        },
        on: {
          "click": function ($event) {
            return _vm.selectItem(item);
          }
        }
      }, [_vm._t("mobileItem", null, {
        "item": item,
        "formatted": _vm.formatText(item)
      })], 2);
    })], 2);
  })], 2), _vm._v(" "), _vm.showAddNewItem && _vm.hasCreateSlot ? _c('div', {
    class: ['results__result', {
      'results__result--top': _vm.addNewItemSlotPosition === 'top'
    }, {
      'results__result--bottom': _vm.addNewItemSlotPosition === 'bottom'
    }],
    on: {
      "click": _vm.createItem
    }
  }, [_vm._t("mobileCreate", null, {
    "query": _vm.query
  })], 2) : _vm._e()], 1)], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-1dc545ce_0", {
    source: ".typeahead-dialog{display:flex;flex-grow:1}.typeahead-dialog__input-container{display:none;position:fixed;top:0;left:0;height:100vh;width:100%;z-index:110}.typeahead-dialog__input-container--open{display:block}.typeahead-dialog__search-actions{display:flex;align-items:center;flex-direction:row;height:64px;padding:0 24px 0 6px}.typeahead-dialog__search-actions-close{margin:0!important}.typeahead-dialog__search-actions-input{flex-grow:1}.typeahead-dialog__search-actions-input-container--embed{flex-wrap:wrap}.typeahead-dialog__input-container-chip{margin-right:8px;margin-bottom:4px}.typeahead-dialog__input-container-box{display:flex;flex-direction:row;flex-grow:1}.typeahead-dialog__results{max-height:calc(var(--vh,1vh) * 100 - 64px);display:flex;flex-direction:column}.typeahead-dialog__results .results__result--top{order:-1}.typeahead-dialog__results .results__result--bottom{flex:1;display:flex;bottom:0;order:1;z-index:4}.typeahead-dialog__results-list{flex:2;overflow-y:scroll}.typeahead-dialog__results-subtitle{padding-left:16px;padding-right:16px;margin-top:24px;margin-bottom:16px;z-index:1}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-1dc545ce";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

/* script */
const __vue_script__$1 = TdlTypeaheadAddNewItem;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-typeahead-add-new-item",
    class: _vm.themeClass
  }, [_vm.addNewItemElement.icon && !_vm.addNewItemElement.iconset ? _c('md-icon', {
    attrs: {
      "icon-svg": _vm.addNewItemElement.icon
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.addNewItemElement.iconset ? _c('md-icon', {
    attrs: {
      "icon-svg": _vm.addNewItemElement.iconset
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tdl-typeahead-add-new-item__text\" data-v-2bee04c7>", "</div>", [_vm._ssrNode("<p class=\"md-body-1\" data-v-2bee04c7>" + _vm._ssrEscape("\n      " + _vm._s(_vm.query) + "\n    ") + "</p> "), _vm.addNewItemElement.text ? _vm._ssrNode("<p class=\"md-subheading-2\" data-v-2bee04c7>", "</p>", [_vm._ssrNode("<span data-v-2bee04c7>", "</span>", [_vm._ssrNode(_vm._ssrEscape("\n        " + _vm._s(_vm.addNewItemElement.text) + "\n        ")), _c('md-icon', {
    staticClass: "tdl-typeahead-add-new-item__icon"
  }, [_vm._v("keyboard_return")])], 2)]) : _vm._ssrNode("<p class=\"md-subheading-2\" data-v-2bee04c7>", "</p>", [_vm._ssrNode(_vm._ssrEscape("\n      " + _vm._s(_vm.$t("Add new")) + "\n      ")), _vm._ssrNode("<span class=\"tdl-typeahead-add-new-item__type\" data-v-2bee04c7>", "</span>", [_vm._ssrNode(_vm._ssrEscape("\n        " + _vm._s(_vm.addNewItemElement.type) + "\n        ")), _c('md-icon', {
    staticClass: "tdl-typeahead-add-new-item__icon",
    attrs: {
      "icon-svg": _vm.mdiKeyboardReturnIcon
    }
  })], 2)], 2)], 2)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-2bee04c7_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-2bee04c7]{background-image:none!important;top:0!important}.tdl-typeahead-add-new-item[data-v-2bee04c7]{display:flex;flex-grow:1;align-items:center;padding:14px 16px;margin:0;overflow:hidden}.tdl-typeahead-add-new-item__text[data-v-2bee04c7]{overflow:hidden;margin-left:25px}.tdl-typeahead-add-new-item p[data-v-2bee04c7]{overflow:hidden;text-overflow:ellipsis;margin:0}.tdl-typeahead-add-new-item .md-icon[data-v-2bee04c7]{margin:0;min-width:var(24px);width:var(24px);min-height:var(24px);height:var(24px);font-size:var(24px)}.tdl-typeahead-add-new-item__type[data-v-2bee04c7]{text-transform:lowercase}.tdl-typeahead-add-new-item__icon[data-v-2bee04c7]{margin-left:4px;min-width:16px;width:16px;min-height:16px;height:16px;font-size:16px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-2bee04c7";
/* module identifier */

const __vue_module_identifier__$1 = "data-v-2bee04c7";
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, server.__vue_create_injector_ssr__, undefined);

/* script */
const __vue_script__$2 = TdlTypeaheadList;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "typeahead-list",
    class: [_vm.themeClass]
  }, [_vm._ssrNode("<div class=\"typeahead-list__input-container\">", "</div>", [_vm.hasBeforeInputSlot ? _vm._t("desktopBeforeInput") : _vm._e(), _vm._ssrNode(" "), _c('md-input', {
    ref: "input",
    staticClass: "typeahead-list__input",
    class: {
      'typeahead-list__input--with-hint': _vm.showSearchHint
    },
    attrs: {
      "disabled": _vm.disabled,
      "debounce": 0,
      "maxlength": _vm.maxQueryLength,
      "disable-counter": true,
      "placeholder": _vm.inputPlaceholder,
      "tabindex": "0",
      "autocomplete": "off"
    },
    on: {
      "focus": function ($event) {
        return _vm.handleFocusChangeThrottled(true);
      },
      "blur": function ($event) {
        return _vm.handleFocusChangeThrottled(false);
      }
    },
    nativeOn: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        $event.preventDefault();
        return _vm.handleEnter($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }

        return _vm.handleEnter($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
          return null;
        }

        return _vm.requestLastItemDeletion($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('up');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('down');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.closeList($event);
      }, function ($event) {
        return _vm.handleKeydown($event);
      }]
    },
    model: {
      value: _vm.query,
      callback: function ($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  }), _vm._ssrNode(" "), _vm.showSearchHint ? _c('md-icon', {
    staticClass: "typeahead-list__search-hint",
    attrs: {
      "icon-svg": _vm.mdiMagnifyIcon
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.hasAfterInputSlot ? _vm._t("desktopAfterInput") : _vm._e()], 2), _vm._ssrNode(" "), _vm.loading ? _c('md-progress', {
    key: "stateLoading",
    attrs: {
      "md-indeterminate": ""
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('md-list', {
    ref: "list",
    staticClass: "typeahead-list__item-list",
    class: {
      'typeahead-list__item-list--loading': _vm.loading,
      'typeahead-list__item-list--active': !_vm.loading && _vm.itemListVisible
    },
    attrs: {
      "disabled": _vm.loading
    }
  }, [_c('div', [_vm.flattenItemList.length > 0 && _vm.hasBeforeListSlot ? _c('md-list-item', [_vm._t("desktopBeforeList")], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.itemList, function (list, title) {
    return _c('div', {
      key: title
    }, [title !== '$default' && list.length > 0 ? _c('h4', {
      staticClass: "md-caption typeahead-list__results-subtitle"
    }, [_vm._v(_vm._s(title))]) : _vm._e(), _vm._v(" "), _vm._l(list, function (item) {
      return _c('md-list-item', {
        key: item.id,
        staticClass: "typeahead-list__results-item",
        class: _vm.itemClass(item),
        attrs: {
          "disabled": _vm.itemDisabled(item)
        },
        on: {
          "click": function ($event) {
            return _vm.handleItemClicked(item);
          }
        },
        nativeOn: {
          "mousedown": function ($event) {
            return _vm.handleItemMouseDown($event);
          },
          "mouseup": function ($event) {
            return _vm.handleItemMouseUp($event);
          },
          "keydown": [function ($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }

            $event.preventDefault();
            return _vm.selectItemAndCloseList(item);
          }, function ($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
              return null;
            }

            $event.preventDefault();
            return _vm.highlightItem('up');
          }, function ($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
              return null;
            }

            $event.preventDefault();
            return _vm.highlightItem('down');
          }, function ($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
              return null;
            }

            $event.preventDefault();
            return _vm.closeList($event);
          }]
        }
      }, [_vm._t("desktopItem", null, {
        "item": item,
        "formatted": _vm.loading ? item.text : _vm.formatText(item)
      })], 2);
    })], 2);
  })], 2), _vm._v(" "), _vm.flattenItemList.length === 0 && _vm.hasNoResultsSlot ? _c('md-list-item', [_vm._t("desktopNoResults")], 2) : _vm._e(), _vm._v(" "), _vm.showAddNewItem && _vm.hasCreateSlot ? _c('md-list-item', {
    class: [_vm.themeClass, 'typeahead-list__results-item', 'typeahead-list__results-item--creatable', {
      'typeahead-list__results-item--top': _vm.addNewItemSlotPosition === 'top'
    }, {
      'typeahead-list__results-item--bottom': _vm.addNewItemSlotPosition === 'bottom'
    }],
    on: {
      "click": _vm.createItemAndCloseList
    },
    nativeOn: {
      "mousedown": function ($event) {
        return _vm.handleItemMouseDown($event);
      },
      "mouseup": function ($event) {
        return _vm.handleItemMouseUp($event);
      },
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        $event.preventDefault();
        return _vm.createItemAndCloseList($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('up');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.highlightItem('down');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.applyInputFocus($event);
      }]
    }
  }, [_vm._t("desktopCreate", null, {
    "query": _vm.query
  })], 2) : _vm._e()], 1)], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-93158722_0", {
    source: ".typeahead-list{display:flex;flex-grow:1}.typeahead-list__input-container{display:flex;flex:1 1 auto}.typeahead-list__input{flex-grow:1}.typeahead-list__input--with-hint{max-width:calc(100% - 48px)}.typeahead-list__search-hint{position:absolute;bottom:0;right:0}.typeahead-list__item-list{z-index:131;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;display:none!important;transition:opacity .3s cubic-bezier(.55,0,.55,.2);will-change:opacity}.typeahead-list__item-list--loading{display:none!important}.typeahead-list__item-list--active{opacity:1;display:flex!important;position:fixed!important;overflow-y:scroll;padding:0}.typeahead-list__results-subtitle{padding:24px 16px;margin-top:0;margin-bottom:0}.typeahead-list__results-item--top{order:-1}.typeahead-list__results-item--bottom{order:1}.typeahead-list__results-item--creatable .md-button{padding:0}.typeahead-list__item-list--active{overflow-y:hidden}.typeahead-list__item-list--active>div{overflow-y:scroll}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = "data-v-93158722";
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, server.__vue_create_injector_ssr__, undefined);

var TdlTypeaheadLocale = {
  "en": {
    "There is something wrong with your connection. Please try again later.": "There is something wrong with your connection. Please try again later.",
    "Select an item from the list or add a new one by clicking on \"Add new": "Select an item from the list or add a new one by clicking on \"Add new",
    "You must select an item from the list": "You must select an item from the list",
    "Add new": "Add new"
  },
  "es": {
    "There is something wrong with your connection. Please try again later.": "Hay problemas con tu conexión. Por favor, inténtalo de nuevo.",
    "Select an item from the list or add a new one by clicking on \"Add new": "Selecciona un ítem de la lista o agrega uno nuevo haciendo clic en \"Agregar nuevo",
    "You must select an item from the list": "Debes seleccionar un ítem de la lista",
    "Add new": "Agregar nuevo"
  }
};

var tdlTypeaheadTheme = ".THEME_NAME.md-input-container.tdl-typeahead.has-only-item.md-input-disabled:after {\n  background-color: BACKGROUND-INVERTED-0.12 !important;\n}";

const FETCH_LIST_TIMEOUT_MS = 5000;
const TdlTypeahead = {
  name: 'tdl-typeahead',
  components: {
    MdInputContainer,
    MdIcon,
    MdTooltip,
    MdChip,
    MdButton,
    TdlTypeaheadDialog: __vue_component__,
    TdlTypeaheadAddNewItem: __vue_component__$1,
    TdlTypeaheadList: __vue_component__$2
  },
  mixins: [mixin.theme],
  props: {
    addItemOnKeypress: String,
    addNewItem: Boolean,
    addNewItemElement: {
      type: Object,
      default: () => ({
        type: 'Person',
        icon: 'person_add',
        iconset: ''
      })
    },
    addNewItemSlotPosition: {
      type: String,
      default: deviceHelper.isMobile() || deviceHelper.isTablet() ? 'top' : 'bottom'
    },
    addNewItemWhenQueryMatches: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 100
    },
    defaultItemSelector: Function,
    desktopCloseListOnItemSelected: Boolean,
    desktopItemListFixed: Boolean,
    desktopItemListOffset: {
      type: Object,
      required: false,
      default: () => ({
        top: 0,
        left: 0
      })
    },
    desktopQueryValidator: Function,
    desktopSelectItemOnInputBlur: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    fetchList: Function,
    filterList: {
      type: Function,
      default: () => true
    },
    inputLabel: String,
    inputPlaceholder: String,
    inputTooltipText: String,
    itemDisabled: {
      type: Function,
      default: () => false
    },
    itemFactory: {
      type: Function,
      default: text => Promise.resolve({
        id: text,
        text: text
      })
    },
    itemSelectedValidator: {
      type: Function,

      default(item) {
        return !this.selectedItems.find(selected => selected.id === item.id);
      }

    },
    minChars: {
      type: Number,
      default: 0
    },
    maxItems: {
      type: Number,
      default: Infinity
    },
    maxQueryLength: {
      type: [Number, String],
      default: Infinity
    },
    mobileAcceptFocusRequests: {
      type: Boolean,
      required: false,
      default: false
    },
    newItemStyles: {
      type: Object,
      default: () => ({
        "--theme-color": "#CDDC39"
      })
    },
    searchHintMode: {
      type: String,
      required: false,
      default: 'focus'
    },
    value: {
      type: Array,
      default: () => []
    },
    mdSimple: Boolean,
    mdClear: Boolean
  },

  data() {
    return {
      focused: false,
      selectedItems: [],
      baseList: {},
      fetchListError: '',
      fetchListDebounced: Function,
      fetching: [],
      queryInvalid: false,
      mdiCloseIcon: js.mdiClose,
      mdiInformationIcon: js.mdiInformation
    };
  },

  watch: {
    value(values) {
      this.selectedItems = values;
    },

    selectedItems(newVal, oldVal) {
      if (!isEqual(newVal, oldVal)) {
        this.$emit('input', newVal);
      }
    }

  },
  computed: {
    isMobile() {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return width < 720 || deviceHelper.isTablet();
    },

    loading: function () {
      return this.fetching.length > 0;
    },
    disabledInput: function () {
      return this.selectedItems.length >= this.maxItems;
    },
    classes: function () {
      return {
        'md-disabled': this.disabled,
        'md-has-value': this.selectedItems.length,
        'md-input-invalid': this.fetchListError || this.queryInvalid,
        'has-only-item': this.selectedItems.length === 1 && this.maxItems === 1,
        'tdl-typeahead--clear': this.mdClear,
        'tdl-typeahead--simple': this.mdSimple
      };
    },
    itemList: function () {
      return reduce(this.baseList, (result, value, key) => {
        result[key] = value.filter(this.filterList);
        return result;
      }, {});
    },
    hasDefaultSlot: function () {
      return !!this.$slots.default;
    },
    hasItemSlot: function () {
      return !!this.$slots['item'] || !!this.$scopedSlots['item'];
    },
    hasAfterInputSlot: function () {
      return !!this.$slots['after-input'] || !!this.$scopedSlots['after-input'];
    },
    hasBeforeInputSlot: function () {
      return !!this.$slots['before-input'] || !!this.$scopedSlots['before-input'];
    },
    hasBeforeListSlot: function () {
      return !!this.$slots['before-list'] || !!this.$scopedSlots['before-list'];
    },
    hasCreateSlot: function () {
      return !!this.$slots['create'] || !!this.$scopedSlots['create'];
    },
    hasChipSlot: function () {
      return !!this.$slots['chip'] || !!this.$scopedSlots['chip'];
    },
    hasChipsSlot: function () {
      return !!this.$slots['chips'] || !!this.$scopedSlots['chips'];
    },
    hasNoResultsSlot: function () {
      return !!this.$slots['no-results'] || !!this.$scopedSlots['no-results'];
    },
    onlyOneSelectedItem: function () {
      return this.selectedItems.length === 1 && this.maxItems === 1;
    }
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlTypeahed",
      theme: tdlTypeaheadTheme
    });
    this.$root.$emit("update-locale-string", TdlTypeaheadLocale);
  },

  mounted() {
    if (this.value) {
      this.selectedItems = this.value;
    }

    this.fetchListDebounced = debounce(this.doFetchList, this.debounce, {
      leading: true,
      trailing: true
    });
  },

  beforeDestroy() {
    this.$emit('selector-closed');
  },

  methods: {
    handleQueryChanged(newVal) {
      if (this.focused) {
        if (this.selectedItems.length < this.maxItems && newVal.length >= this.minChars) {
          this.fetchListDebounced(newVal);
        } else {
          this.baseList = {};
        }
      }

      this.$emit('query-changed', newVal);
    },

    handleQueryInvalid(newVal) {
      this.queryInvalid = newVal;
    },

    handleFocus({
      focused,
      query
    }) {
      if (focused && this.selectedItems.length < this.maxItems) {
        this.baseList = {};

        if (query.length >= this.minChars) {
          this.fetchListDebounced(query);
        }
      }

      this.focused = focused;
    },

    doFetchList(query) {
      const suffix = Math.random();
      const key = `${query}.${suffix}`;
      this.fetchListError = false;
      this.fetching.push(key);
      const timeoutPromise = new Promise((_, rej) => {
        setTimeout(() => rej({
          message: 'fetch-list.timeout'
        }), FETCH_LIST_TIMEOUT_MS);
      });
      Promise.race([this.fetchList(query), timeoutPromise]).then(response => {
        this.baseList = isArray$1(response) ? {
          $default: response
        } : response;
        this.fetching = this.fetching.filter(k => k !== key);
        this.$nextTick(() => {
          const itemListLength = reduce(this.itemList, (result, value) => result + value.length, 0);
          this.$emit('item-list-changed', {
            itemListLength: itemListLength
          });
        });
      }).catch(err => {
        this.fetchListError = err.message;
        this.fetching = this.fetching.filter(k => k !== key);
      });
    },

    deleteChip(item) {
      this.selectedItems = this.selectedItems.filter(selected => selected.id !== item.id);
      this.refreshInput();
    },

    handleItemSelected(item) {
      this.selectedItems = this.selectedItems.concat([item]);
      this.$emit('changed', item);
      this.refreshInput();
    },

    handleItemRemoved(item) {
      this.deleteChip(item);
      this.$emit('changed');
    },

    // Public API
    clear() {
      if (this.$refs['delegatedTypeahead']) {
        this.$refs['delegatedTypeahead'].clear();
      }
    },

    requestFocus() {
      this.$nextTick(() => {
        if (this.$refs['delegatedTypeahead']) {
          this.$refs['delegatedTypeahead'].requestFocus();
        }
      });
    },

    setInput(input) {
      if (this.$refs['delegatedTypeahead']) {
        this.$refs['delegatedTypeahead'].setInput(input);
      }
    },

    refreshInput() {
      const input = this.$refs.delegatedTypeahead;
      input.onInputBlur();
      input.onInputFocus();
    }

  }
};

/* script */
const __vue_script__$3 = TdlTypeahead;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-input-container', {
    ref: "parent",
    class: ['tdl-typeahead', _vm.themeClass, _vm.classes],
    attrs: {
      "md-simple": _vm.mdSimple,
      "md-clear": _vm.mdClear
    },
    scopedSlots: _vm._u([_vm.inputLabel ? {
      key: "label",
      fn: function () {
        return [_c('span', [_vm._v("\n      " + _vm._s(_vm.inputLabel) + "\n    ")]), _vm._v(" "), !!_vm.inputTooltipText ? _c('md-icon', {
          attrs: {
            "icon-svg": _vm.mdiInformationIcon
          }
        }, [_c('md-tooltip', {
          style: {
            'margin-left': _vm.isMobile && !_vm.selectedItems.length ? '-30px' : 'unset'
          },
          attrs: {
            "md-delay": "300",
            "md-direction": "bottom",
            "display-on-mobile": true
          },
          domProps: {
            "innerHTML": _vm._s(_vm.inputTooltipText)
          }
        })], 1) : _vm._e()];
      },
      proxy: true
    } : null], null, true)
  }, [_vm._t("icon"), _vm._v(" "), _vm._v(" "), _c('div', {
    staticClass: "md-chips"
  }, [_vm.hasChipsSlot ? [_vm._t("chips", null, {
    "items": _vm.selectedItems
  })] : [!_vm.onlyOneSelectedItem ? _vm._l(_vm.selectedItems, function (selected) {
    return _c('md-chip', {
      key: selected.id,
      ref: "chips",
      refInFor: true,
      attrs: {
        "md-deletable": ""
      },
      on: {
        "delete": function ($event) {
          return _vm.deleteChip(selected);
        }
      }
    }, [_vm._t("chip", [_vm._v(_vm._s(selected.text))], {
      "value": selected
    })], 2);
  }) : _c('div', {
    staticClass: "only-item"
  }, [_c('div', {
    staticClass: "only-item__text"
  }, [_vm._t("chip", [_vm._v(_vm._s(_vm.selectedItems[0].text))], {
    "value": _vm.selectedItems[0]
  })], 2), _vm._v(" "), !_vm.disabled ? _c('md-button', {
    staticClass: "md-icon-button md-primary",
    on: {
      "click": function ($event) {
        return _vm.deleteChip(_vm.selectedItems[0]);
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1) : _vm._e()], 1)], _vm._v(" "), _vm.isMobile ? [_c('tdl-typeahead-dialog', {
    ref: "delegatedTypeahead",
    attrs: {
      "selected-items": _vm.selectedItems,
      "default-item-selector": _vm.defaultItemSelector,
      "disabled": _vm.disabled || _vm.disabledInput,
      "add-new-item": _vm.addNewItem,
      "add-new-item-when-query-matches": _vm.addNewItemWhenQueryMatches,
      "loading": _vm.loading,
      "item-factory": _vm.itemFactory,
      "item-list": _vm.itemList,
      "add-item-on-keypress": _vm.addItemOnKeypress,
      "accept-focus-requests": _vm.mobileAcceptFocusRequests,
      "input-label": _vm.inputLabel,
      "input-placeholder": _vm.inputPlaceholder,
      "item-disabled": _vm.itemDisabled,
      "item-selected-validator": _vm.itemSelectedValidator,
      "max-query-length": _vm.maxQueryLength,
      "add-new-item-slot-position": _vm.addNewItemSlotPosition,
      "search-hint-mode": _vm.searchHintMode,
      "min-chars": _vm.minChars
    },
    on: {
      "query-changed": _vm.handleQueryChanged,
      "input-keypress": function (key) {
        return _vm.$emit('input-keypress', key);
      },
      "item-selected": _vm.handleItemSelected,
      "item-removed": _vm.handleItemRemoved,
      "focused": _vm.handleFocus,
      "dialog-opened": function ($event) {
        return _vm.$emit('selector-opened');
      },
      "dialog-closed": function ($event) {
        return _vm.$emit('selector-closed');
      },
      "changed": function ($event) {
        return _vm.$emit('changed');
      }
    },
    scopedSlots: _vm._u([{
      key: "mobileItem",
      fn: function (ref) {
        var item = ref.item;
        var formatted = ref.formatted;
        return [_vm.hasItemSlot ? _c('div', {
          staticClass: "tdl-typeahead__item-slot--wrapper"
        }, [_vm._t("item", null, {
          "item": item,
          "formatted": formatted
        })], 2) : _c('div', [_c('span', {
          domProps: {
            "innerHTML": _vm._s(formatted)
          }
        })])];
      }
    }, {
      key: "mobileCreate",
      fn: function (ref) {
        var query = ref.query;
        return [_vm.hasCreateSlot ? _vm._t("create", null, {
          "query": query
        }) : [_c('tdl-typeahead-add-new-item', {
          style: _vm.newItemStyles,
          attrs: {
            "query": query,
            "add-new-item-element": _vm.addNewItemElement
          }
        })]];
      }
    }, {
      key: "mobileChip",
      fn: function (ref) {
        var value = ref.value;
        return [_vm.hasChipSlot ? _vm._t("chip", null, {
          "value": value
        }) : [_vm._v(_vm._s(value.text))]];
      }
    }, {
      key: "mobileChips",
      fn: function (ref) {
        var value = ref.value;
        return [_vm.hasChipsSlot ? _vm._t("chips", null, {
          "items": value
        }) : _vm._e()];
      }
    }], null, true)
  }, [_c('template', {
    slot: "mobileAfterInput"
  }, [_vm.hasAfterInputSlot ? _vm._t("after-input") : _vm._e()], 2), _vm._v(" "), _c('template', {
    slot: "mobileBeforeInput"
  }, [_vm.hasBeforeInputSlot ? _vm._t("before-input") : _vm._e()], 2), _vm._v(" "), _vm.hasBeforeListSlot ? _c('template', {
    slot: "mobileBeforeList"
  }, [_vm._t("before-list")], 2) : _vm._e(), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm.hasNoResultsSlot ? _c('template', {
    slot: "mobileNoResults"
  }, [_vm._t("no-results")], 2) : _vm._e()], 2)] : [_c('tdl-typeahead-list', {
    ref: "delegatedTypeahead",
    attrs: {
      "selected-items": _vm.selectedItems,
      "default-item-selector": _vm.defaultItemSelector,
      "disabled": _vm.disabled || _vm.disabledInput,
      "add-new-item": _vm.addNewItem,
      "add-new-item-when-query-matches": _vm.addNewItemWhenQueryMatches,
      "close-list-on-item-selected": _vm.desktopCloseListOnItemSelected,
      "loading": _vm.loading,
      "item-list": _vm.itemList,
      "item-list-fixed": _vm.desktopItemListFixed,
      "item-list-offset": _vm.desktopItemListOffset,
      "add-item-on-keypress": _vm.addItemOnKeypress,
      "input-placeholder": _vm.inputPlaceholder,
      "item-factory": _vm.itemFactory,
      "item-disabled": _vm.itemDisabled,
      "item-selected-validator": _vm.itemSelectedValidator,
      "max-query-length": _vm.maxQueryLength,
      "add-new-item-slot-position": _vm.addNewItemSlotPosition,
      "query-validator": _vm.desktopQueryValidator,
      "search-hint-mode": _vm.searchHintMode,
      "select-item-on-input-blur": _vm.desktopSelectItemOnInputBlur,
      "min-chars": _vm.minChars
    },
    on: {
      "query-changed": _vm.handleQueryChanged,
      "query-invalid": _vm.handleQueryInvalid,
      "input-keypress": function (key) {
        return _vm.$emit('input-keypress', key);
      },
      "item-selected": _vm.handleItemSelected,
      "item-removed": _vm.handleItemRemoved,
      "focused": _vm.handleFocus,
      "blur-dirty": function ($event) {
        return _vm.$emit('blur-dirty', $event);
      },
      "list-opened": function ($event) {
        return _vm.$emit('selector-opened');
      },
      "list-closed": function ($event) {
        return _vm.$emit('selector-closed');
      },
      "changed": function ($event) {
        return _vm.$emit('changed');
      }
    },
    scopedSlots: _vm._u([{
      key: "desktopItem",
      fn: function (ref) {
        var item = ref.item;
        var formatted = ref.formatted;
        return [_vm.hasItemSlot ? _vm._t("item", null, {
          "item": item,
          "formatted": formatted
        }) : [_c('span', {
          domProps: {
            "innerHTML": _vm._s(formatted)
          }
        })]];
      }
    }, {
      key: "desktopCreate",
      fn: function (ref) {
        var query = ref.query;
        return [_vm.hasCreateSlot ? _vm._t("create", null, {
          "query": query
        }) : [_c('tdl-typeahead-add-new-item', {
          style: _vm.newItemStyles,
          attrs: {
            "query": query,
            "add-new-item-element": _vm.addNewItemElement
          }
        })]];
      }
    }], null, true)
  }, [_c('template', {
    slot: "desktopAfterInput"
  }, [_vm.hasAfterInputSlot ? _vm._t("after-input") : _vm._e()], 2), _vm._v(" "), _c('template', {
    slot: "desktopBeforeInput"
  }, [_vm.hasBeforeInputSlot ? _vm._t("before-input") : _vm._e()], 2), _vm._v(" "), _vm.hasBeforeListSlot ? _c('template', {
    slot: "desktopBeforeList"
  }, [_vm._t("before-list")], 2) : _vm._e(), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm.hasNoResultsSlot ? _c('template', {
    slot: "desktopNoResults"
  }, [_vm._t("no-results")], 2) : _vm._e()], 2)]], 2), _vm._v(" "), _vm._t("default"), _vm._v(" "), !_vm.hasDefaultSlot ? [_vm.fetchListError === 'fetch-list.timeout' ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v(_vm._s(_vm.$t("There is something wrong with your connection. Please try again later.")))]) : _vm.queryInvalid ? [_vm.addNewItem ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v(_vm._s(_vm.$t("Select an item from the list or add a new one by clicking on \"Add new") + " " + _vm.addNewItemElement.type.toLowerCase() + "\""))]) : _c('span', {
    staticClass: "md-error"
  }, [_vm._v(_vm._s(_vm.$t("You must select an item from the list")))])] : _vm._e()] : _vm._e()], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-b40875ba_0", {
    source: ".md-chip{height:32px;padding:8px 12px;display:inline-block;border-radius:32px;transition:all .4s cubic-bezier(.25,.8,.25,1);font-size:13px;line-height:16px;white-space:nowrap;overflow:hidden;background-color:rgba(255,255,255,.16)}.md-chip .md-chip-container{text-overflow:ellipsis;overflow:hidden}.md-chip.md-deletable{display:flex;align-items:center;height:auto;padding:4px 6px 4px 16px}.md-chip.md-deletable .md-chip-container{flex-grow:1;padding:4px 4px 4px 0}.md-chip.md-editable .md-chip-container{cursor:pointer}.md-chip:active,.md-chip:focus{outline:0}.md-chip:active:not(.md-disabled),.md-chip:focus:not(.md-disabled){cursor:pointer;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-chip.md-deletable:focus,.md-chip.md-deletable:hover,.md-chip.md-editable:focus,.md-chip.md-editable:hover{background-color:rgba(255,255,255,.54);color:#27292d}.md-chip.md-deletable:focus .md-delete,.md-chip.md-deletable:hover .md-delete,.md-chip.md-editable:focus .md-delete,.md-chip.md-editable:hover .md-delete{color:#27292d}.md-chip.md-disabled .md-button{pointer-events:none;cursor:default}.md-chip .md-delete{color:rgba(255,255,255,.38)}.md-chip .md-delete .md-ripple{color:#27292d}.md-chip.md-primary{color:rgba(0,0,0,.87)}.md-chip.md-primary.pink100{background-color:#f8bbd0}.md-chip.md-primary.pink200{background-color:#f48fb1}.md-chip.md-primary.pink300{background-color:#f06292}.md-chip.md-primary.purple100{background-color:#e1bee7}.md-chip.md-primary.purple200{background-color:#ce93d8}.md-chip.md-primary.purple300{background-color:#ba68c8}.md-chip.md-primary.deepPurple200{background-color:#b39ddb}.md-chip.md-primary.deepPurple300{background-color:#9575cd}.md-chip.md-primary.blue200{background-color:#90caf9}.md-chip.md-primary.blue500{background-color:#2196f3}.md-chip.md-primary.cyan200{background-color:#80deea}.md-chip.md-primary.cyan500{background-color:#00bcd4}.md-chip.md-primary.teal200{background-color:#80cbc4}.md-chip.md-primary.teal400{background-color:#26a69a}.md-chip.md-primary.lightGreen500{background-color:#8bc34a}.md-chip.md-primary.lime500{background-color:#cddc39}.md-chip.md-primary.amber300{background-color:#ffd54f}.md-chip.md-primary.amber600{background-color:#d69600}.md-chip.md-primary.orange400{background-color:#ffa726}.md-chip.md-primary.deepOrange500{background-color:#ff5722}.md-chip.md-primary.brown100{background-color:#d7ccc8}.md-chip.md-primary.brown200{background-color:#bcaaa4}.md-chip.md-primary.bio{background-color:#cddc39}.md-chip.md-accent{color:rgba(0,0,0,.87)}.md-chip.md-accent.pink100{background-color:#f8bbd0}.md-chip.md-accent.pink200{background-color:#f48fb1}.md-chip.md-accent.pink300{background-color:#f06292}.md-chip.md-accent.purple100{background-color:#e1bee7}.md-chip.md-accent.purple200{background-color:#ce93d8}.md-chip.md-accent.purple300{background-color:#ba68c8}.md-chip.md-accent.deepPurple200{background-color:#b39ddb}.md-chip.md-accent.deepPurple300{background-color:#9575cd}.md-chip.md-accent.blue200{background-color:#90caf9}.md-chip.md-accent.blue500{background-color:#2196f3}.md-chip.md-accent.cyan200{background-color:#80deea}.md-chip.md-accent.cyan500{background-color:#00bcd4}.md-chip.md-accent.teal200{background-color:#80cbc4}.md-chip.md-accent.teal400{background-color:#26a69a}.md-chip.md-accent.lightGreen500{background-color:#8bc34a}.md-chip.md-accent.lime500{background-color:#cddc39}.md-chip.md-accent.amber300{background-color:#ffd54f}.md-chip.md-accent.amber600{background-color:#d69600}.md-chip.md-accent.orange400{background-color:#ffa726}.md-chip.md-accent.deepOrange500{background-color:#ff5722}.md-chip.md-accent.brown100{background-color:#d7ccc8}.md-chip.md-accent.brown200{background-color:#bcaaa4}.md-chip.md-accent.bio{background-color:#cddc39}.md-chip.md-warn{color:rgba(0,0,0,.87)}.md-chip.md-warn.pink100{background-color:#f8bbd0}.md-chip.md-warn.pink200{background-color:#f48fb1}.md-chip.md-warn.pink300{background-color:#f06292}.md-chip.md-warn.purple100{background-color:#e1bee7}.md-chip.md-warn.purple200{background-color:#ce93d8}.md-chip.md-warn.purple300{background-color:#ba68c8}.md-chip.md-warn.deepPurple200{background-color:#b39ddb}.md-chip.md-warn.deepPurple300{background-color:#9575cd}.md-chip.md-warn.blue200{background-color:#90caf9}.md-chip.md-warn.blue500{background-color:#2196f3}.md-chip.md-warn.cyan200{background-color:#80deea}.md-chip.md-warn.cyan500{background-color:#00bcd4}.md-chip.md-warn.teal200{background-color:#80cbc4}.md-chip.md-warn.teal400{background-color:#26a69a}.md-chip.md-warn.lightGreen500{background-color:#8bc34a}.md-chip.md-warn.lime500{background-color:#cddc39}.md-chip.md-warn.amber300{background-color:#ffd54f}.md-chip.md-warn.amber600{background-color:#d69600}.md-chip.md-warn.orange400{background-color:#ffa726}.md-chip.md-warn.deepOrange500{background-color:#ff5722}.md-chip.md-warn.brown100{background-color:#d7ccc8}.md-chip.md-warn.brown200{background-color:#bcaaa4}.md-chip.md-warn.bio{background-color:#cddc39}.md-chip .md-button.md-delete{width:24px;min-width:24px;height:24px;min-height:24px;margin:0;padding:0;border-radius:24px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-chip .md-button.md-delete .md-icon{width:20px;min-width:20px;height:20px;min-height:20px;margin:0;font-size:20px}.md-chip .md-button.md-delete .md-ink-ripple{border-radius:32px}.md-chip .md-button.md-delete .md-ripple{opacity:.54}.md-chips{display:flex;align-items:center;display:flex;flex-wrap:wrap;padding:2px 8px}.md-chips .md-chip{margin-right:8px;margin-bottom:4px}.md-chips .md-input{width:128px;flex:1}.md-chips .md-input::placeholder{opacity:1}.md-chips.md-chips--with-value .md-input::placeholder{opacity:0}",
    map: undefined,
    media: undefined
  }), inject("data-v-b40875ba_1", {
    source: "body.scroll-blocked{overflow:hidden}.md-input-container.tdl-typeahead{height:100%}.md-input-container.tdl-typeahead label span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.md-input-container.tdl-typeahead label .md-icon{margin:0 0 0 4px!important;font-size:16px;cursor:pointer;z-index:1;top:-1px}.md-input-container.tdl-typeahead label .md-icon:after{height:0!important}.md-input-container.tdl-typeahead.has-only-item .md-chips{padding:8px 16px}.md-input-container.tdl-typeahead.has-only-item.md-input-disabled:after{background-image:none!important}.md-input-container.tdl-typeahead.has-only-item.md-input-disabled input{display:none}.md-input-container.tdl-typeahead.md-has-value label .md-icon{font-size:14px}.md-input-container.tdl-typeahead.md-has-value.md-input-focused .md-input{width:initial!important}.md-input-container.tdl-typeahead .md-progress{position:absolute;left:0;bottom:-4px}.md-input-container.tdl-typeahead .md-chips{width:100%;padding:8px 16px 4px}.md-input-container.tdl-typeahead .md-chips .md-chip{margin:0 8px 4px 0}.md-input-container.tdl-typeahead .md-chips input{padding:0!important}.md-input-container.tdl-typeahead .md-icon{min-width:24px;width:24px;min-height:24px;height:24px;padding:0}.md-input-container.tdl-typeahead .typeahead-list__search-hint{position:absolute!important;top:0;left:initial;right:0;margin:auto 16px}.md-input-container.tdl-typeahead--clear .md-chips,.md-input-container.tdl-typeahead--simple .md-chips{padding:0;min-height:initial}.md-input-container.tdl-typeahead--clear .md-chips{padding-left:16px!important}.only-item{display:flex;align-items:center;width:100%;font-size:16px}.only-item__text{display:inline-block;width:calc(100% - 40px);text-overflow:ellipsis;overflow-x:hidden}.only-item .md-button.md-icon-button{position:absolute!important;left:initial;right:0;min-width:24px;width:24px;min-height:24px;height:24px;padding:0;margin:auto 16px}.tdl-typeahead__item-slot--wrapper{max-width:100%}",
    map: undefined,
    media: undefined
  }), inject("data-v-b40875ba_2", {
    source: ".md-tooltip[data-v-b40875ba]{max-width:280px;height:auto;white-space:normal;font-size:12px;padding:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-b40875ba";
/* module identifier */

const __vue_module_identifier__$3 = "data-v-b40875ba";
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__$3;
