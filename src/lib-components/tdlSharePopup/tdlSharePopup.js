import { mdiEmail, mdiFacebook, mdiLinkedin, mdiTwitter} from "@mdi/js";
import Clipboard from 'clipboard';
import {isSafari, isMobile} from '../../core/utils/deviceHelper';
import theme from '../../core/components/mdTheme/mixin';
import { default as TdlSharePopupLocale } from "./tdlSharePopup_i18n";

import MdButton from '@/lib-components/mdButton/mdButton.vue';
import MdDialog from '@/lib-components/mdDialog/mdDialog.vue';
import MdDialogActions from '@/lib-components/mdDialog/mdDialogActions.vue';
import MdDialogContent from '@/lib-components/mdDialog/mdDialogContent.vue';
import MdDialogTitle from '@/lib-components/mdDialog/mdDialogTitle.vue';
import MdInput from '@/lib-components/mdInputContainer/mdInput.vue';
import MdInputContainer from '@/lib-components/mdInputContainer/mdInputContainer.vue';
import MdList from '@/lib-components/mdList/mdList.vue';
import MdListItem from '@/lib-components/mdList/mdListItem.js';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';

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
      default: () => ({ title: '', summary: '' })
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
  data: function() {
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
    encodedUrl: function() {
      return encodeURIComponent(this.url);
    },
    clipboardText: function() {
      return !this.copied ? this.$t('Click to copy link') : this.$t('Link copied');
    },
    avalableOptions: function() {
      return this.include.filter((x) => {
        return this.config[x];
      });
    }
  },
  created() {
    this.$root.$emit("update-locale-string", TdlSharePopupLocale);
  },
  methods: {
    open: function() {
      const share = navigator.share;
      if (share && (!isSafari() || isMobile())) {
        navigator.share({
          title: document.title,
          text: this.text,
          url: this.url
        }).then(() => this.$emit('shared'))
        .catch((error) => console.error('Error sharing', error));
      } else {
        this.popup.open();
        this.copied = false;
      }
    },
    close: function() {
      this.popup.close();
    },
    openLink: function(option) {
      this.$emit("selected-share-option", { label: option.label, link: option.link() });
      this.externalLink(option.link());
    },
    httpMatch: function(url) {
      return url.match(/^(https?:\/\/|mailto:)/i);
    },
    externalLink: function(url) {
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

export default TdlSharePopup;
