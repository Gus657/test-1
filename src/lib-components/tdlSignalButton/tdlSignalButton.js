import theme from '../../core/components/mdTheme/mixin';

import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import MdChips from '@/lib-components/mdChips/mdChips.vue';
import MdIcon from '@/lib-components/mdIcon/mdIcon.vue';
import MdInkRipple from "@/core/components/mdInkRipple/mdInkRipple.vue";
import MdMenu from '@/lib-components/mdMenu/mdMenu.vue';
import MdMenuContent from '@/lib-components/mdMenu/mdMenuContent.vue';
import MdMenuItem from '@/lib-components/mdMenu/mdMenuItem.vue';
import MdTooltip from '@/lib-components/mdTooltip/mdTooltip.vue';
import TdlFullscreendialog from '@/lib-components/tdlFullScreenDialog/tdlFullScreenDialog.vue';
import { mdiHumanGreeting, mdiMenuDown, mdiTag, mdiBellOff, mdiBellOutline, mdiBellRing } from "@mdi/js";
import { default as TdlSignalButtonLocale } from "./tdlSignalButton_i18n";
import tdlSignalButtonTheme from './tdlSignalButton-theme.scss';


function signalStates(i18n) {
  return [
    {
      type: 'no-signal',
      buildButtonText: (entityName) => {
        return `signal ${entityName}`.trim();
      },
      buildTooltipText: (entity) => {
        if (entity.type === 'organization') {
          return `${i18n.t('Let')} ${entity.name} ${i18n.t('know you may consider working with them in the future.')}`;
        }
        return `${i18n.t('Let')} ${entity.name} ${i18n.t('know you may consider working together in the future.')}`;

      }
    },
    {
      type: 'signal',
      buildButtonText: (entityName) => {
        return `signaled ${entityName}`.trim();
      }
    }
  ];
}

function notificationStates(i18n) {
  return [
    {
      type: 'all',
      menuTitle: i18n.t('All notifications'),
      menuIcon: mdiBellRing,
      iconHighlighted: true
    },
    {
      type: 'relevant',
      menuTitle: i18n.t('Relevant to you'),
      menuIcon: mdiBellOutline,
      iconHighlighted: true
    },
    {
      type: 'none',
      menuTitle: i18n.t('None'),
      menuIcon: mdiBellOff,
      iconHighlighted: false
    }
  ];
}

const loadingState = {
  type: 'loading',
  buttonText: 'signal'
};

const TdlSignalButton = {
  name: 'tdl-signal-button',
  components: {
    MdButton,
    MdChips,
    MdIcon,
    MdInkRipple,
    MdMenu,
    MdMenuContent,
    MdMenuItem,
    MdTooltip,
    TdlFullscreendialog
  },
  mixins: [theme],
  props: {
    stateType: {
      type: 'no-signal' | 'signal' | 'loading',
      required: true
    },
    notificationsType: {
      type: 'all' | 'relevant' | 'none',
      required: true
    },
    entityName: {
      type: String,
      required: true
    },
    entityType: {
      type: String,
      default: 'person'
    },
    showEntityNameOnButton: {
      type: Boolean,
      required: false
    },
    username: {
      type: String,
      required: true
    },
    openNotificationSettings: {
      type: Boolean,
      required: false
    },
    openNotificationSettingsInPosition: {
      type: Boolean,
      required: false
    },
    menuTitle: {
      type: String,
      required: false
    },
    styleProps: {
      type: Object,
      default: () => ({})
    },
    theme: {
      type: String,
      required: false,
      default: 'lime500'
    },
    menuStyles: {
      type: Object,
      default: () => ({ "--theme-color": "#CDDC39" })
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    hasBackdrop: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      currentState: 0,
      currentNotificationState: 1,
      menuPosition: { x: 0, y: 0 },
      mdiTagIcon: mdiTag,
      mdiMenuDownIcon: mdiMenuDown,
      mdiHumanGreetingIcon: mdiHumanGreeting,
      urls: {
        BIO_BASE_URL: process.env.VUE_APP_BIO_SELF_URL,
        DISCOVERY_BASE_URL: process.env.VUE_APP_BIO_DISCOVERY_URL,
        HOMEPAGES_BASE_URL: process.env.VUE_APP_BIO_HOMEPAGES_URL,
        REMOTER_BASE_URL: process.env.VUE_APP_BIO_REMOTER_URL,
        STARRGATE_BASE_URL: process.env.VUE_APP_BIO_STARRGATE_URL,
        TORRE_ABOUT_BASE_URL: process.env.VUE_APP_BIO_TORRE_ABOUT_BASE_URL,
        TORRE_PROTOCOL_BASE_URL: process.env.VUE_APP_BIO_TORRE_PROTOCOL_BASE_URL
      },
      TORRE_DEFAULT_LOCALE: process.env.VUE_APP_BIO_DEFAULT_LOCALE
    };
  },
  computed: {
    buttonText: function() {
      if (this.signalStates[this.currentState].buildButtonText) {
        return this.signalStates[this.currentState].buildButtonText(this.showEntityNameOnButton ? this.entityName : '');
      }

      return '';
    },
    loadingState: function() {
      return loadingState;
    },
    signalStates: function() {
      return signalStates(this.$i18n);
    },
    notificationStates: function() {
      return notificationStates(this.$i18n);
    },
    isLoading: function() {
      return this.stateType === 'loading';
    },
    tooltipText: function() {
      if (this.signalStates[this.currentState].buildTooltipText) {
        const entityName = this.entityType === 'organization' ? this.entityName : this.entityName.replace(/ .*/, '');

        return this.signalStates[this.currentState].buildTooltipText({name: entityName, type: this.entityType});
      }

      return '';
    },
    hasSignal: function() {
      return this.currentState !== 0 && !this.isLoading;
    },
    aboutSignalsUrl: function() {
      return `${this.urls.DISCOVERY_BASE_URL}/${this.$i18n && this.$i18n.locale && this.$i18n.locale !== 'undefined' ? this.$i18n.locale + '/' : ''}signals/home#about`;
    },
    cssVariables() {
      return {
        '--theme': this.theme
      };
    }
  },
  watch: {
    stateType: {
      handler(newType) {
        if (newType !== 'loading') {
          this.changeToStateByType(newType);
        }
      },
      immediate: true
    },
    notificationsType: {
      handler(newType) {
        this.changeToNotificationStateByType(newType);
      },
      immediate: true
    }
  },
  created() {
    this.$root.$emit("component-created", { name: "tdlSignalButton", theme: tdlSignalButtonTheme });
    this.$root.$emit("update-locale-string", TdlSignalButtonLocale);
  },
  mounted() {
    if (this.openNotificationSettings) {
      this.$nextTick(() => {
        this.$refs.menuTrigger.click();
      });
    }
  },
  methods: {
    openMenu: function() {
      if (this.openNotificationSettingsInPosition) {
        this.$refs.menu.open();
      }
    },
    changeToNextState: function() {
      this.updateState(this.currentState === this.signalStates.length - 1 ? 0 : this.currentState + 1);
    },
    changeToStateByType: function(newType) {
      this.updateState(this.signalStates.findIndex((c) => c.type === newType), false);
    },
    changeToNotificationStateByType: function(newType) {
      this.updateNotificationState(this.notificationStates.findIndex((c) => c.type === newType), false);
    },
    updateState: function(newState, allowEmit = true) {
      if (newState !== -1 && newState !== this.currentState) {
        this.currentState = newState;
        if (this.signalStates[newState].type === 'no-signal') {
          this.currentNotificationState = 1;
          this.$emit('close');
        }
        this.$nextTick(this.updateMenuPosition);

        if (allowEmit) {
          this.$emit('state-update', this.signalStates[newState].type);
        }
      }
    },
    updateNotificationState: function(newState, allowEmit = true) {
      if (newState !== -1 && newState !== this.currentNotificationState) {
        this.currentNotificationState = newState;
        this.$nextTick(this.updateMenuPosition);

        if (allowEmit) {
          this.$emit('notifications-type-update', this.notificationStates[newState].type);
        }
      }
    },
    updateMenuPosition: function() {
      const verticalMenuOffset = 12;
      const defaultMenuOffset = 8;
      const menuWidth = 240;
      const menuHeight = 36;
      const buttonWidth = this.$refs.signalButton ? this.$refs.signalButton.getBoundingClientRect().width : 0;
      const menuTriggerWidth = this.$refs.menuTrigger ? this.$refs.menuTrigger.getBoundingClientRect().width : 0;

      this.menuPosition = {
        x: defaultMenuOffset - (buttonWidth - menuTriggerWidth) - (menuWidth - buttonWidth) / 2,
        y: menuHeight + verticalMenuOffset + defaultMenuOffset
      };
    },
    handleMenuClosed: function () {
      this.$emit('close');
      this.updateMenuPosition();
    },
    handleMenuOpened: function () {
      this.$emit('open');
    },
    aboutSignals: function () {
      this.$refs.menuTrigger.click();
      this.$emit('about-signals');
    }
  }
};

export default TdlSignalButton;
