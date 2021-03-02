const TdlNavigation = {
  name: 'tdl-navigation',
  props: {
    activeIndex: {
      type: Number,
      required: false,
      default: function() {
        return -1;
      }
    },
    navigationItems: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    allowSideNavigation: {
      type: Boolean,
      required: false,
      default: function() {
        return false;
      }
    }
  },
  created: function() {
    if (this.allowSideNavigation) {
      this.$root.$emit('tdl-bottom-navigation--added');
    }
  },
  methods: {
    handleClickItem: function(option, index) {
      if (typeof option.click === 'function') {
        option.click(option);
      }
      this.$emit('item-selected', index);
    }
  }
};

export default TdlNavigation;
