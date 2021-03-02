'use strict';

var normalizeComponent = require('./normalize-component-1d3237ea.js');
var server = require('./server-9b57e5b1.js');

var tdlEntityPictureTheme = ".THEME_NAME .entity-picture__thumbnail {\n  background-color: BACKGROUND-ELEVATION_2;\n  border-color: BACKGROUND-ELEVATION_3;\n}\n.THEME_NAME .entity-picture__thumbnail--text span {\n  color: TEXT-TITLE;\n}\n.THEME_NAME .entity-picture--is-hexagon .hexagon-border {\n  background-color: BACKGROUND-ELEVATION_3;\n}";

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
      validator: function (value) {
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
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlEntityPicture",
      theme: tdlEntityPictureTheme
    });
  },
  methods: {
    clickImage() {
      this.$emit('image-clicked');
    }

  }
};

/* script */
const __vue_script__ = TdlEntityPicture;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.entity ? _c('div', {
    class: ['entity-picture', {
      'entity-picture--is-hexagon': _vm.shape === 'hexagon',
      'entity-picture--has-shadow': _vm.boxShadow
    }],
    style: _vm.cssVariables
  }, [_vm._ssrNode((_vm.shape === 'hexagon' ? "<div" + _vm._ssrClass(null, ['hexagon-border', {
    'hexagon-border--no-margins': !_vm.defaultMargin
  }]) + "></div>" : "<!---->") + " "), _vm.pictureUrl ? _c('img', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload"
    }],
    class: ['entity-picture__thumbnail', 'entity-picture__thumbnail--image', {
      'entity-picture__thumbnail--no-margins': !_vm.defaultMargin
    }],
    attrs: {
      "data-url": _vm.pictureUrl,
      "title": _vm.title,
      "alt": _vm.entity.name
    },
    on: {
      "click": _vm.clickImage
    }
  }, []) : _vm._ssrNode("<div" + _vm._ssrClass(null, ['entity-picture__thumbnail', 'entity-picture__thumbnail--text', {
    'entity-picture__thumbnail--no-margins': !_vm.defaultMargin
  }]) + "><span>" + _vm._ssrEscape(_vm._s(_vm.entity && _vm.entity.name ? _vm.entity.name.substring(0, 1) : '')) + "</span></div>")], 2) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4ca49799_0", {
    source: ".entity-picture{min-width:var(--size)}.entity-picture__thumbnail{display:flex;position:relative;border-radius:var(--size);width:var(--size);height:var(--size)!important;border:var(--border-width) solid;clear:both;margin:16px auto;background-color:#383b40;border-color:#5e626b}.entity-picture__thumbnail--no-margins{margin:auto}.entity-picture__thumbnail--text{text-transform:uppercase;justify-content:center;align-items:center;line-height:var(--size)}.entity-picture__thumbnail--text span{font-size:var(--font-size);color:rgba(255,255,255,.9)}.entity-picture.entity-picture--has-shadow .entity-picture__thumbnail{box-shadow:var(--box-shadow)}.entity-picture--is-hexagon{position:relative}.entity-picture--is-hexagon .entity-picture__thumbnail{border:unset;border-radius:0;width:calc(var(--size) - calc(var(--border-width) * 2));height:calc(var(--size) - calc(var(--border-width) * 2))!important;transform:translateY(var(--border-width));clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.entity-picture--is-hexagon .entity-picture__thumbnail--image{background:0 0!important;object-fit:cover}.entity-picture--is-hexagon.entity-picture--has-shadow{filter:drop-shadow(var(--box-shadow))}.entity-picture--is-hexagon .hexagon-border{position:absolute;top:0;left:calc(50% - calc(var(--size)/ 2));width:var(--size);height:var(--size);margin:16px auto;clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);background-color:#5e626b}.entity-picture--is-hexagon .hexagon-border--no-margins{margin:auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-4ca49799";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent.__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, server.__vue_create_injector_ssr__, undefined);

module.exports = __vue_component__;
