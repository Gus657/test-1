import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiClose } from '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import MdDialog from './MdDialog.js';

var TdlInterstitialLocale = {
  "en": {
    "Consider Torre $type": "Consider Torre {type}",
    "Learn more": "Learn more",
    "Get year-round career coaching.": "Get year-round career coaching.",
    "Boost your visibility with recruiters.": "Boost your visibility with recruiters.",
    "Have an assistant apply to jobs for you.": "Have an assistant apply to jobs for you.",
    "Starting at $15/month.": "Starting at $15/month.",
    "Starting at $9/month.": "Starting at $9/month.",
    "No, Thank you": "No, Thank you",
    "Have an assistant apply to jobs for you. Starting at $9/month.": "Have an assistant apply to jobs for you. Starting at $9/month.",
    "Gain more visibility on Torre.": "Gain more visibility on Torre."
  },
  "es": {
    "Consider Torre $type": "Considera Torre {type}",
    "Learn more": "Conoce más",
    "Get year-round career coaching.": "Recibe entrenamiento profesional durante todo el año.",
    "Boost your visibility with recruiters.": "Aumenta tu visibilidad con los reclutadores.",
    "Have an assistant apply to jobs for you.": "Haz que un asistente aplique a trabajos por ti.",
    "Starting at $15/month.": "Desde USD$ 15 al mes.",
    "Starting at $9/month.": "Desde USD$ 9 al mes.",
    "Have an assistant apply to jobs for you. Starting at $9/month.": "Haz que un asistente aplique a trabajos por ti. Desde USD$ 9 al mes.",
    "No, Thank you": "No, gracias",
    "Gain more visibility on Torre.": "Recibe más visibilidad en Torre."
  }
};

var tdlInterstitialTheme = ".THEME_NAME.tdl-interstitial__content {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.tdl-interstitial__header {\n  background-color: BACKGROUND-ELEVATION_2;\n}";

const storage = {
  markDisplayed: function (key) {
    const data = JSON.parse(localStorage.getItem('tdl.interstitial')) || {};
    data[key] = true;
    localStorage.setItem('tdl.interstitial', JSON.stringify(data));
  },
  displayed: function (key) {
    const data = JSON.parse(localStorage.getItem('tdl.interstitial')) || {};
    return data[key] || false;
  }
};
const interstitialsUrl = {
  boost: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1591783595/origin/materrial/wjm0ukt7twjr2oea2ibw.png',
  scout: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1591783654/origin/materrial/dlgfayhh9cqv2iap5sze.svg',
  prime: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1591783654/origin/materrial/dlgfayhh9cqv2iap5sze.svg'
};
const interstitialString = {
  boost: ['Gain more visibility on Torre.', 'Rank higher in search results.', 'Starting at $9/month.'],
  scout: ['Have an assistant apply to jobs for you. Starting at $9/month.'],
  prime: ['Get year-round career coaching.', 'Boost your visibility with recruiters.', 'Have an assistant apply to jobs for you.', 'Starting at $9/month.']
};
const TdlInterstitial = {
  name: 'tdl-interstitial',
  components: {
    MdButton,
    MdDialog,
    MdIcon
  },
  props: {
    showInterstitial: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    displayOnce: {
      type: Boolean,
      required: false,
      default: function () {
        return false;
      }
    }
  },

  data() {
    return {
      mdiCloseIcon: mdiClose
    };
  },

  watch: {
    showInterstitial: {
      immediate: true,

      handler(newVal) {
        if (newVal === true) {
          this.open();
        }
      }

    }
  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlInterstitial",
      theme: tdlInterstitialTheme
    });
    this.$root.$emit("update-locale-string", TdlInterstitialLocale);
  },
  computed: {
    link() {
      return `https://www.torre.co/${this.type}`;
    },

    interstitialContent() {
      return interstitialString[this.type];
    },

    imageUrl() {
      return interstitialsUrl[this.type];
    }

  },
  methods: {
    open: function () {
      this.$nextTick(() => {
        this.$refs.dialogInterstitial.open();

        if (this.displayOnce) {
          storage.markDisplayed(this.type);
        }
      });
    },
    close: function () {
      this.$refs.dialogInterstitial.close();
    },
    closed: function () {
      this.$emit('closed');
    }
  },
  mounted: function () {
    const shouldDisplay = !this.displayOnce || this.displayOnce && !storage.displayed(this.type);

    if (this.showInterstitial && shouldDisplay) {
      this.$nextTick(() => {
        this.open();
      });
    }
  }
};

/* script */
const __vue_script__ = TdlInterstitial;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-dialog', {
    ref: "dialogInterstitial",
    staticClass: "tdl-interstitial",
    on: {
      "close": _vm.closed
    }
  }, [_c('div', {
    staticClass: "tdl-interstitial__header"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    on: {
      "click": _vm.close
    }
  }, [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.mdiCloseIcon
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "md-title tdl-interstitial__header--text"
  }, [_vm._v("Torre " + _vm._s(_vm.type))])], 1), _vm._v(" "), _c('div', {
    staticClass: "tdl-interstitial__content"
  }, [_c('div', {
    staticClass: "tdl-interstitial__content--text"
  }, [_c('span', {
    staticClass: "md-title tdl-interstitial__content--text__caption"
  }, [_vm._v(_vm._s(_vm.$t('Consider Torre $type', {
    type: _vm.type
  })))]), _vm._v(" "), _c('div', {
    staticClass: "md-title tdl-interstitial__content--text__benefits"
  }, _vm._l(_vm.interstitialContent, function (content, index) {
    return _c('p', {
      key: index,
      staticClass: "md-subheading-2"
    }, [_vm._v(" - " + _vm._s(_vm.$t(content)))]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "tdl-interstitial__content--image"
  }, [_c('img', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload"
    }],
    attrs: {
      "data-url": _vm.imageUrl,
      "alt": _vm.type
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tdl-interstitial__buttons"
  }, [_c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "href": _vm.link
    }
  }, [_vm._v(_vm._s(_vm.$t('Learn more')))]), _vm._v(" "), _c('md-button', {
    on: {
      "click": _vm.close
    }
  }, [_vm._v(_vm._s(_vm.$t('No, Thank you')))])], 1)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-5f3f84bb_0", {
    source: ".tdl-lazy-loader-hide-background-image[data-v-5f3f84bb]{background-image:none!important;top:0!important}.tdl-interstitial[data-v-5f3f84bb]{display:flex;flex-direction:column}.tdl-interstitial[data-v-5f3f84bb]  .md-dialog{width:600px;height:640px;overflow-y:scroll}@media (max-width:720px){.tdl-interstitial[data-v-5f3f84bb]  .md-dialog{min-width:360px;min-height:640px}}.tdl-interstitial__header[data-v-5f3f84bb]{display:flex;align-items:center;padding-left:10px;min-height:56px;background-color:#383b40}.tdl-interstitial__header--text[data-v-5f3f84bb]{text-transform:capitalize;font-weight:300}.tdl-interstitial__header h4[data-v-5f3f84bb]{margin:0 5px}.tdl-interstitial__header button[data-v-5f3f84bb]{margin:0}.tdl-interstitial__header button i[data-v-5f3f84bb]{margin:auto}.tdl-interstitial__content[data-v-5f3f84bb]{display:flex;flex-direction:column;width:100%;align-items:center;justify-content:space-between}.tdl-interstitial__content--text[data-v-5f3f84bb]{align-self:flex-start;padding-left:16px;margin:25px 0}.tdl-interstitial__content--text__caption[data-v-5f3f84bb]{text-transform:capitalize;font-weight:300}.tdl-interstitial__content--text__benefits[data-v-5f3f84bb]{margin-top:20px}.tdl-interstitial__content--text__benefits .md-subheading-2[data-v-5f3f84bb]{line-height:20px}.tdl-interstitial__content--image[data-v-5f3f84bb]{width:85%;height:280px;display:flex;align-items:center;justify-content:center}@media (max-width:720px){.tdl-interstitial__content--image[data-v-5f3f84bb]{height:auto}}.tdl-interstitial__content--image img[data-v-5f3f84bb]{max-width:100%;max-height:100%;height:auto;display:block}.tdl-interstitial__buttons[data-v-5f3f84bb]{display:flex;flex-direction:column;margin-top:15px;width:85%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-5f3f84bb";
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
