import MdButton  from '@/lib-components/mdButton/mdButton.vue';
import tdlScrollTabTheme from './tdlScrollTab-theme.scss';
import theme from '../../core/components/mdTheme/mixin';

const TdlScrollTab = {
  name: 'tdl-scroll-tab',
  components: {
    MdButton
  },
  props: {
    targetId: {
      required: true,
      type: String
    }
  },
  mixins: [theme],
  computed: {
    href() {
      const route = this.$router.resolve({
        name: this.$route.name,
        params: this.$route.params,
        query: {
          section: this.targetId
        }
      });

      return route.href;
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlNavDrawer", theme: tdlScrollTabTheme });
  },
  methods: {
    tabClicked(evt) {
      if (!evt.ctrlKey && !evt.metaKey) {
        evt.preventDefault();
        this.$parent.$emit('activated', this.targetId);
      }
    },
    getTabId() {
      return this.targetId;
    }
  }
};

export default TdlScrollTab;
