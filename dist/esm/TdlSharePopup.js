import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import './MdBackdrop.js';
import MdIcon from './MdIcon.js';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiEmail } from '@mdi/js';
import './isArray-e89cc533.js';
import MdInputContainer from './MdInputContainer.js';
import './common-b6651023.js';
import './getClosestVueParent-5770502b.js';
import MdInput from './MdInput.js';
import './transitionEndEventName-e3bb98be.js';
import MdDialog from './MdDialog.js';
import MdDialogActions from './MdDialogActions.js';
import MdDialogContent from './MdDialogContent.js';
import MdDialogTitle from './MdDialogTitle.js';
import MdList from './MdList.js';
import MdListItem from './MdListItem.js';
import { b as isSafari, i as isMobile } from './deviceHelper-575f722e.js';
import Clipboard from 'clipboard';

var TdlSharePopupLocale = {
  "en": {
    "Share": "Share",
    "Close": "Close",
    "Click to copy link": "Click to copy link",
    "Link copied": "Link copied"
  },
  "es": {
    "Share": "Compartir",
    "Close": "Cerrar",
    "Click to copy link": "Click para copiar enlace",
    "Link copied": "Enlace copiado"
  }
};

const TdlSharePopup = {
  name: 'tdl-share-popup',
  components: {
    MdButton,
    MdDialog,
    MdDialogActions,
    MdDialogContent,
    MdDialogTitle,
    MdInput,
    MdInputContainer,
    MdList,
    MdListItem,
    MdIcon
  },
  mixins: [theme],
  props: {
    text: {
      type: String
    },
    linkedInParams: {
      type: Object,
      required: false,
      default: () => ({
        title: '',
        summary: ''
      })
    },
    url: {
      type: String,
      required: true
    },
    include: {
      type: Array,
      default: () => []
    },
    subject: {
      type: String,
      required: false
    }
  },
  data: function () {
    return {
      popup: null,
      copied: false,
      config: {
        facebook: {
          icon: mdiFacebook,
          label: 'Facebook',
          link: () => {
            const randomValue = Math.floor(Math.random() * 100);
            return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${this.url}?shareKey=${randomValue}&utm_source=facebook&utm_medium=social`)}`;
          }
        },
        twitter: {
          icon: mdiTwitter,
          label: 'Twitter',
          link: () => {
            const randomValue = Math.floor(Math.random() * 100);
            return `https://twitter.com/intent/tweet?url=${encodeURIComponent(`${this.url}?shareKey=${randomValue}&utm_source=twitter&utm_medium=social&text=${this.text}&original_referer=https://torre.co/`)}`;
          }
        },
        linkedin: {
          icon: mdiLinkedin,
          label: 'LinkedIn',
          link: () => {
            const randomValue = Math.floor(Math.random() * 100);
            return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${this.url}&shareKey=${randomValue}&utm_source=linkedin&utm_medium=social`)}`;
          }
        },
        email: {
          icon: mdiEmail,
          label: 'Email',
          link: () => {
            if (this.subject) {
              return `mailto:?subject=${this.subject}&body=${this.text} ${this.encodedUrl}&utm_source=email&utm_medium=social\``;
            } else {
              return `mailto:?body=${this.text} ${this.encodedUrl}&utm_source=email&utm_medium=social`;
            }
          }
        }
      }
    };
  },
  computed: {
    encodedUrl: function () {
      return encodeURIComponent(this.url);
    },
    clipboardText: function () {
      return !this.copied ? this.$t('Click to copy link') : this.$t('Link copied');
    },
    avalableOptions: function () {
      return this.include.filter(x => {
        return this.config[x];
      });
    }
  },

  created() {
    this.$root.$emit("update-locale-string", TdlSharePopupLocale);
  },

  methods: {
    open: function () {
      const share = navigator.share;

      if (share && (!isSafari() || isMobile())) {
        navigator.share({
          title: document.title,
          text: this.text,
          url: this.url
        }).then(() => this.$emit('shared')).catch(error => console.error('Error sharing', error));
      } else {
        this.popup.open();
        this.copied = false;
      }
    },
    close: function () {
      this.popup.close();
    },
    openLink: function (option) {
      this.$emit("selected-share-option", {
        label: option.label,
        link: option.link()
      });
      this.externalLink(option.link());
    },
    httpMatch: function (url) {
      return url.match(/^(https?:\/\/|mailto:)/i);
    },
    externalLink: function (url) {
      let outerUrl = this.httpMatch(url) ? url : 'http://' + url;
      window.open(outerUrl, '_blank');
    }
  },

  mounted() {
    this.popup = this.$refs.shareForm;
    const cliboardItem = this.$refs.clipboardItem;
    const urlInput = this.$refs.urlInput;
    const clipboard = new Clipboard(cliboardItem.$el, {
      target: () => urlInput.$el
    });
    clipboard.on('success', () => {
      this.copied = true;
      this.$emit("link-copied");
    });
  }

};

/* script */
const __vue_script__ = TdlSharePopup;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('md-dialog', {
    ref: "shareForm",
    class: [_vm.themeClass],
    attrs: {
      "md-open-from": "#custom",
      "md-close-to": "#custom"
    }
  }, [_c('md-dialog-title', [_vm._v(_vm._s(_vm.$t("Share")))]), _vm._v(" "), _c('md-dialog-content', [_c('md-list', [_vm._l(_vm.avalableOptions, function (name) {
    return _c('md-list-item', {
      key: name,
      on: {
        "click": function ($event) {
          return _vm.openLink(_vm.config[name]);
        }
      }
    }, [_c('md-icon', {
      attrs: {
        "icon-svg": _vm.config[name].icon
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.config[name].label))])], 1);
  }), _vm._v(" "), _c('md-list-item', {
    ref: "clipboardItem",
    staticClass: "clipboard-item"
  }, [_c('md-input-container', {
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_vm._v(_vm._s(_vm.clipboardText))];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c('md-input', {
    ref: "urlInput",
    staticClass: "clipboard-input",
    attrs: {
      "readonly": ""
    },
    model: {
      value: _vm.url,
      callback: function ($$v) {
        _vm.url = $$v;
      },
      expression: "url"
    }
  })], 1)], 1)], 2)], 1), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": _vm.close
    }
  }, [_vm._v(_vm._s(_vm.$t("Close")))])], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-38225e68_0", {
    source: ".md-dialog-title.md-title{margin-bottom:4px}.md-dialog.md-reference .md-dialog-content{padding:0 24px}.md-dialog.md-reference .md-dialog-content .md-list-item .md-list-item-container{padding:0}.md-dialog.md-reference .md-dialog-content .md-list-item.clipboard-item{margin-top:4px}.md-dialog.md-reference .md-dialog-content .md-list-item.clipboard-item .md-input-container.md-has-value{margin:4px 0}",
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
