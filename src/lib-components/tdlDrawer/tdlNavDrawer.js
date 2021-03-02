import { defaultDrawerOptions } from './defaultDrawerOptions';
import TdlBrandLogo from '@/lib-components/tdlBrandLogo/tdlBrandLogo.vue';
import MdSidenav from '@/lib-components/mdSidenav/mdSidenav.vue';
import MdWhiteframe from '@/lib-components/mdWhiteframe/mdWhiteframe.vue';
import MdToolbar from '@/lib-components/mdToolbar/mdToolbar.vue';
import MdList from '@/lib-components/mdList/mdList.vue';
import MdListItem from '@/lib-components/mdList/mdListItem.js';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdDivider from '@/lib-components/mdDivider/mdDivider.vue';
import TdlLocaleSelector from '@/lib-components/tdlLocaleSelector/tdlLocaleSelector.vue';
import { default as TdlNavDrawerLocale } from "./tdlNavDrawer_i18n";
import tdlNavDrawerTheme from './tdlDrawer-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

const TdlNavDrawer = {
  name: 'tdl-nav-drawer',
  components: {
    MdSidenav,
    MdWhiteframe,
    MdToolbar,
    MdList,
    MdListItem,
    MdIcon,
    MdDivider,
    TdlLocaleSelector,
    TdlBrandLogo
  },
  mixins: [theme],
  props: {
    tdlUser: {
      type: Object,
      required: false
    },
    tdlDrawerOptions: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    tdlLogo: {
      type: Object,
      required: false
    },
    theme: {
      type: String,
      required: false,
      default: 'lime500'
    },
    urls: {
      type: Object,
      required: true
    },
    styleProps: {
      type: Object,
      default: () => ({ "--theme-color": "#CDDC39" })
    },
    defaultLocale: {
      type: String,
      required: true
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlNavDrawer", theme: tdlNavDrawerTheme });
    this.$root.$emit("update-locale-string", TdlNavDrawerLocale);
  },
  methods: {
    toggle: function() {
      this.$refs.drawer.toggle();
    },
    handleClickItem: function(option) {
      if (option.eventName) {
        this.$emit('item-selected', option.eventName);
      }
      if (option.url) {
        window.open(option.url, option.target ? option.target : '_blank');
      }
      if (option.dialogRef) {
        this.$refs[option.dialogRef].open();
      }

      this.$refs.drawer.close();
    },
    handleLocaleSelected: function(locale) {
      this.$emit('locale-selected', locale);
    },
    handleOpen: function() {
      this.$emit('open');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('drawer-open');
    },
    handleClose: function() {
      this.$emit('close');
      document.body.style.overflow = 'scroll';
      document.body.classList.remove('drawer-open');
    }
  },
  computed: {
    allDrawerOptions: function() {
      return [
        ...this.tdlDrawerOptions,
        ...defaultDrawerOptions(this.urls, this.$i18n)
      ];
    },
    cssVariables() {
      return {
        '--theme': this.theme
      };
    }
  }
};

export default TdlNavDrawer;
