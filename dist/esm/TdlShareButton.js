import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiShareVariant } from '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import MdDialog from './MdDialog.js';
import MdDialogActions from './MdDialogActions.js';
import MdDialogContent from './MdDialogContent.js';
import { b as isSafari, i as isMobile } from './deviceHelper-575f722e.js';
import MdTooltip from './MdTooltip.js';
import Clipboard from 'clipboard';

var TdlShareButtonLocale = {
  "en": {
    "Share": "Share",
    "copy url": "copy url",
    "close": "close",
    "Share publicly using its URL:": "Share publicly using its URL:"
  },
  "es": {
    "Share": "Compartir",
    "copy url": "copiar URL",
    "close": "cerrar",
    "Share publicly using its URL:": "Comparte públicamente usando su URL:"
  }
};

const TdlShareButton = {
  name: 'tdl-share-button',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdIcon,
    MdTooltip
  },
  props: {
    dialogStyles: {
      type: Object,
      default: () => ({
        "--theme-color": "#CDDC39"
      })
    },
    message: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    primaryColor: {
      type: Boolean,
      required: false
    },
    showTooltip: {
      type: Boolean,
      required: false
    },
    tooltipDirection: {
      type: String,
      required: false
    },
    theme: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      mdiShareVariantIcon: mdiShareVariant
    };
  },

  created: function () {
    this.$root.$emit("update-locale-string", TdlShareButtonLocale);
  },

  mounted() {
    const clipboard = new Clipboard(this.$refs.copy.$el, {
      target: () => this.$refs.url
    });
    clipboard.on('success', event => {
      event.clearSelection();
      this.$emit('shared');
    });
  },

  methods: {
    handleShareClicked() {
      if (navigator.share && (!isSafari() || isMobile())) {
        navigator.share({
          url: this.url
        }).then(() => this.$emit('shared')).catch(error => console.error('Error sharing', error));
      } else {
        this.$refs.shareUrlDialog.open();
      }
    },

    closeDialog() {
      this.$refs.shareUrlDialog.close();
    }

  }
};

/* script */
const __vue_script__ = TdlShareButton;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-share-button"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    class: {
      'md-primary': _vm.primaryColor
    },
    attrs: {
      "theme": _vm.theme
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.handleShareClicked($event);
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiShareVariantIcon
    }
  }), _vm._v(" "), _vm.showTooltip ? _c('md-tooltip', {
    attrs: {
      "md-direction": _vm.tooltipDirection ? _vm.tooltipDirection : 'bottom'
    }
  }, [_vm._v(_vm._s(_vm.$t("Share")))]) : _vm._e()], 1), _vm._v(" "), _c('md-dialog', {
    ref: "shareUrlDialog",
    style: _vm.dialogStyles
  }, [_c('md-dialog-content', [_c('p', {
    staticClass: "md-subheading"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('p', {
    staticClass: "tdl-share-button-url"
  }, [_c('a', {
    ref: "url",
    staticClass: "md-primary",
    attrs: {
      "href": _vm.url,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.url))])])]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    ref: "copy",
    staticClass: "md-primary",
    on: {
      "click": function ($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("copy url")))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function ($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("close")))])], 1)], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-677f9d49_0", {
    source: ".tdl-share-button-url[data-v-677f9d49]{margin-top:20px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-677f9d49";
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
