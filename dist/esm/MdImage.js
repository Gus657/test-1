import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

const getImageLightness = (image, onLoad, onError) => {
  let canvas = document.createElement('canvas');
  image.crossOrigin = 'Anonymous';

  image.onload = function () {
    let colorSum = 0;
    let ctx;
    let imageData;
    let imageMetadata;
    let r;
    let g;
    let b;
    let average;
    canvas.width = this.width;
    canvas.height = this.height;
    ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageMetadata = imageData.data;

    for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
      r = imageMetadata[x];
      g = imageMetadata[x + 1];
      b = imageMetadata[x + 2];
      average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }

    onLoad(Math.floor(colorSum / (this.width * this.height)));
  };

  image.onerror = onError;
};

//
const MdImage = {
  name: 'md-image',
  props: {
    mdSrc: String
  },
  data: () => ({
    loaded: false,
    applyBlack: true,
    imageElement: null
  }),
  watch: {
    mdSrc() {
      this.createImage();
    }

  },
  computed: {
    classes() {
      return {
        'md-loaded': this.loaded,
        'md-black-output': this.applyBlack
      };
    }

  },
  methods: {
    analyzeLightness(image) {
      const applyLoad = () => {
        this.loaded = true;
      };

      getImageLightness(image, lightness => {
        let limit = 256;
        let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          this.applyBlack = true;
        }

        this.$nextTick(applyLoad);
      }, applyLoad);
    },

    createImage() {
      this.loaded = false;
      this.applyBlack = false;
      this.imageElement = null;

      if (this.mdSrc) {
        this.imageElement = document.createElement('img');
        this.imageElement.crossOrigin = '';
        this.imageElement.src = this.mdSrc;
        this.analyzeLightness(this.imageElement);
      }
    }

  },

  created() {
    this.createImage();
  }

};

/* script */
const __vue_script__ = MdImage;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('img', {
    staticClass: "md-image",
    class: _vm.classes,
    attrs: {
      "src": _vm.mdSrc
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-31603bbc_0", {
    source: ".md-image{opacity:0;filter:saturate(20%)}.md-image.md-black-output{filter:brightness(.4) saturate(20%)}.md-image.md-loaded{opacity:1;filter:saturate(100%);transition:opacity 1.1s cubic-bezier(.25,.8,.25,1),filter 2.2s .3s cubic-bezier(.25,.8,.25,1)}",
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
