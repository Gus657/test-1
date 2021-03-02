import { mdiClose } from "@mdi/js";
import { default as TdlInterstitialLocale } from "./tdlInterstitial_i18n";
import tdlInterstitialTheme from './tdlInterstitial-theme.scss';

import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdDialog from '@/lib-components/mdDialog/mdDialog.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';

const storage = {
  markDisplayed: function(key) {
    const data = JSON.parse(localStorage.getItem('tdl.interstitial')) || {};

    data[key] = true;
    localStorage.setItem('tdl.interstitial', JSON.stringify(data));
  },
  displayed: function(key) {
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
  boost: [
    'Gain more visibility on Torre.',
    'Rank higher in search results.',
    'Starting at $9/month.'
  ],
  scout: ['Have an assistant apply to jobs for you. Starting at $9/month.'],
  prime: [
    'Get year-round career coaching.',
    'Boost your visibility with recruiters.',
    'Have an assistant apply to jobs for you.',
    'Starting at $9/month.'
  ]
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
      default: function() {
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
  created: function() {
    this.$root.$emit("component-created", { name: "tdlInterstitial", theme: tdlInterstitialTheme });
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
    open: function() {
      this.$nextTick(() => {
        this.$refs.dialogInterstitial.open();
        if (this.displayOnce) {
          storage.markDisplayed(this.type);
        }
      });
    },
    close: function() {
      this.$refs.dialogInterstitial.close();
    },
    closed: function() {
      this.$emit('closed');
    }
  },
  mounted: function() {
    const shouldDisplay = !this.displayOnce || this.displayOnce && !storage.displayed(this.type);
    if ( this.showInterstitial && shouldDisplay ) {
      this.$nextTick(() => {
        this.open();
      });
    }
  }
};

export default TdlInterstitial;
