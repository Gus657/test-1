import isEqual from 'lodash-es/isEqual';
import tdlTabTheme from './tdlTab-theme.scss';
import theme from '../../core/components/mdTheme/mixin';
import MdButton  from '@/lib-components/mdButton/mdButton.vue';

const TdlTab = {
  name: 'tdl-tab',
  components: {
    MdButton
  },
  props: {
    routeName: {
      required: true,
      type: String
    },
    routeParams: {
      required: false,
      type: Object,
      default: () => ({})
    },
    routeQuery: {
      required: false,
      type: Object,
      default: () => ({})
    },
    routeHash: {
      required: false,
      type: String
    },
    forceActive: {
      type: Boolean,
      default: false
    }
  },
  mixins: [theme],
  computed: {
    href() {
      const route = this.$router.resolve({
        name: this.routeName,
        params: this.routeParams
      });

      return route.href;
    },
    isActive() {
      return this.forceActive || isEqual(this.$route.name, this.routeName) && isEqual(this.$route.params, this.routeParams) && isEqual(this.$route.query, this.routeQuery);
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlTab", theme: tdlTabTheme });
  },
  mounted() {
    if (this.isActive) {
      // nextTick to allow parent to completely render before setting the indicator
      this.$nextTick(() => {
        this.$parent.$emit('tds-tab--activated');
      });
    }
  },
  methods: {
    tabClicked(evt) {
      if (!evt.ctrlKey && !evt.metaKey) {
        evt.preventDefault();
        this.$router.push({
          name: this.routeName,
          params: this.routeParams,
          query: this.routeQuery !== undefined ? this.routeQuery : this.$route.query,
          hash: this.routeHash !== undefined ? this.routeHash : this.$route.hash
        });
      }
    }
  },
  watch: {
    isActive(newValue) {
      if (newValue) {
        this.$parent.$emit('tds-tab--activated');
        this.$emit('tab-active');
      }
    }
  }
};

export default TdlTab;
