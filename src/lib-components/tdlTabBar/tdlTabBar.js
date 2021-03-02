import tdlTabBarTheme from './tdlTabBar-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

const TdlTabBar = {
  name: 'tdl-tab-bar',
  data() {
    return {
      indicatorStyles: {},
      indicatorStylesTimeout: undefined,
      indicatorClass: ''
    };
  },
  mixins: [theme],
  created: function() {
    this.$root.$emit("component-created", { name: "tdlTabBar", theme: tdlTabBarTheme });
  },
  mounted() {
    this.$on('tds-tab--activated', this.setIndicatorStyles);
    window.addEventListener('resize', this.setIndicatorStyles);
  },
  updated() {
    this.setIndicatorStyles();
  },
  beforeDestroy() {
    this.$off('tds-tab--activated', this.setIndicatorStyles);
    window.removeEventListener('resize', this.setIndicatorStyles);

    if (this.indicatorStylesTimeout) {
      clearTimeout(this.indicatorStylesTimeout);
    }
  },
  methods: {
    setIndicatorStyles() {
      if (this.indicatorStylesTimeout) {
        clearTimeout(this.indicatorStylesTimeout);
      }

      this.indicatorStylesTimeout = setTimeout(() => {
        const activeButton = this.$el.querySelector('.md-button.md-active');

        if (activeButton && this.$refs.indicator) {
          const buttonWidth = activeButton.offsetWidth;
          const buttonLeft = activeButton.offsetLeft;
          const indicatorElement = this.$refs.indicator;
          const indicatorLeft = indicatorElement.offsetLeft;

          this.indicatorClass = this.getIndicatorClass(indicatorLeft, buttonLeft);

          this.indicatorStyles = {
            left: `${buttonLeft}px`,
            right: `calc(100% - ${buttonWidth + buttonLeft}px)`
          };
        }
      }, 200);
    },
    getIndicatorClass(indicatorLeft, buttonLeft) {
      if (indicatorLeft < buttonLeft) {
        return 'tds-tabs-indicator-right';
      }
      return 'tds-tabs-indicator-left';
    }
  }
};

export default TdlTabBar;
