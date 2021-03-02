import tdlEntityPictureTheme from "./tdlEntityPicture-theme.scss";

const TdlEntityPicture = {
  name: 'tdl-entity-picture',
  props: {
    entity: Object,
    title: String,
    borderWidth: {
      type: Number,
      default: 3
    },
    size: {
      type: Number,
      default: 64
    },
    defaultMargin: {
      type: Boolean,
      default: true
    },
    boxShadow: {
      type: String
    },
    shape: {
      type: String,
      default: 'circle',
      validator: function(value) {
        return ['circle', 'hexagon'].indexOf(value) >= 0;
      }
    },
    thumbnail: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cssVariables() {
      return {
        '--size': this.size + 'px',
        '--font-size': this.fontSize + 'px',
        '--border-width': this.borderWidth + 'px',
        '--box-shadow': this.boxShadow
      };
    },
    fontSize() {
      if (this.size < 64 || this.shape === 'hexagon' && this.size < 82) {
        return this.size * 14 / 32;
      }
      return this.size * 75 / 120;
    },
    pictureUrl() {
      if (this.thumbnail && this.entity.pictureThumbnail) {
        return this.entity.pictureThumbnail;
      } else if (this.entity.picture) {
        return this.entity.picture;
      }
      return '';
    }
  },
  created: function() {
    this.$root.$emit("component-created", { name: "tdlEntityPicture", theme: tdlEntityPictureTheme });
  },
  methods: {
    clickImage() {
      this.$emit('image-clicked');
    }
  }
};

export default TdlEntityPicture;
