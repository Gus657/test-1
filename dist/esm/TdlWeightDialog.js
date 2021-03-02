import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import './mixin-66e9c47b.js';
import './MdInkRipple.js';
import './MdButton.js';
import './MdBackdrop.js';
import './MdIcon.js';
import '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import './MdDialog.js';
import './MdDialogActions.js';
import './MdDialogContent.js';
import './MdDialogTitle.js';
import './MdSpinner.js';
import './MdWhiteframe.js';
import './MdToolbar.js';
import './TdlOverlay.js';
import TdlFullscreendialog from './TdlFullscreendialog.js';
import TdlWeightDialogFormula from './TdlWeightDialogFormula.js';

var tdlWeightDialogTheme = ".THEME_NAME.recommendations-weight-dialog .content-area {\n  border-bottom: 1px solid BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.recommendations-weight-dialog .top-actions-toolbar {\n  background-color: BACKGROUND-ELEVATION_2 !important;\n  color: TEXT-DEFAULT !important;\n}\n.THEME_NAME.recommendations-weight-dialog .md-dialog .md-dialog-content {\n  background-color: BACKGROUND-ELEVATION_1;\n}\n.THEME_NAME.recommendations-weight-dialog .tdl-weight-formula path {\n  fill: TEXT-TITLE;\n}";

var TdlWeightDialogLocale = {
  "en": {
    "Recommendation weight": "Recommendation weight",
    "Recommendation weight equation": "Recommendation weight equation",
    "Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.": "Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.",
    "Your browser does not support the video tag.": "Your browser does not support the video tag.",
    "How weight is calculated": "How weight is calculated",
    "The weight of each recommendation is determined by:": "The weight of each recommendation is determined by:",
    "Weights per skill": "Weights per skill",
    "The recommendation weight of a skill is the sum of the recommendations that include such skill. The weight of recommendations with multiple skills is divided equally among all.": "The recommendation weight of a skill is the sum of the recommendations that include such skill. The weight of recommendations with multiple skills is divided equally among all.",
    "The math": "The math",
    "The weight of any given recommendation,": "The weight of any given recommendation,",
    "is calculated using this formula:": "is calculated using this formula:",
    "This formula may be adjusted from time to time to guarantee the relevance of the overall recommendation weight.": "This formula may be adjusted from time to time to guarantee the relevance of the overall recommendation weight.",
    "The <i>longevity of the affiliation</i> between the <i>recommender</i> and the <i>recommended</i>. Longer relationships will yield greater weight.": "The <i>longevity of the affiliation</i> between the <i>recommender</i> and the <i>recommended</i>. Longer relationships will yield greater weight.",
    "The <i>weight of recommendations</i> received by the recommender. So the more recommendations you have, the greater the weight of the recommendations you give.": "The <i>weight of recommendations</i> received by the recommender. So the more recommendations you have, the greater the weight of the recommendations you give.",
    "The <i>type of relationship</i> between the <i>recommender</i> and the <i>recommended</i>.": "The <i>type of relationship</i> between the <i>recommender</i> and the <i>recommended</i>.",
    "The <i>number of recommendations</i> given by the <i>recommender</i>. With each recommendation you give, the overall weight of your recommendations diminishes proportionally. This means that if you recommend selectively, your recommendations will have greater weight than those given by someone who doesn't recommend selectively.": "The <i>number of recommendations</i> given by the <i>recommender</i>. With each recommendation you give, the overall weight of your recommendations diminishes proportionally. This means that if you recommend selectively, your recommendations will have greater weight than those given by someone who doesn't recommend selectively.",
    "<i><b>t</b></i> is the recommendation weight of the recommender. When the <i>recommender</i> is verified and has a recommendation weight below 100 (for example, new users), <i><b>t</b></i> becomes 100. When the <i>recommender</i> hasn’t been verified yet, <i><b>t</b></i> becomes 0.": "<i><b>t</b></i> is the recommendation weight of the recommender. When the <i>recommender</i> is verified and has a recommendation weight below 100 (for example, new users), <i><b>t</b></i> becomes 100. When the <i>recommender</i> hasn’t been verified yet, <i><b>t</b></i> becomes 0.",
    "<i><b>Lr</b></i> is the longevity of the affiliation between the <i>recommender</i> and the <i>recommended</i>.": "<i><b>Lr</b></i> is the longevity of the affiliation between the <i>recommender</i> and the <i>recommended</i>.",
    "<i><b>Fr</b></i> is the relationship type factor. For most relationships, the factor is 1. For recommendations where the <i>recommender</i> is the subordinate (for example, if you were led, hired, taught, mentored by - or received investment from - the person you’re recommending) the factor is the golden ratio (φ = 1.6180339887…).": "<i><b>Fr</b></i> is the relationship type factor. For most relationships, the factor is 1. For recommendations where the <i>recommender</i> is the subordinate (for example, if you were led, hired, taught, mentored by - or received investment from - the person you’re recommending) the factor is the golden ratio (φ = 1.6180339887…).",
    "The summation adds the multiplication of longevities as well as factors for all the recommendations given by the <i>recommender</i>.": "The summation adds the multiplication of longevities as well as factors for all the recommendations given by the <i>recommender</i>.",
    "is the damping factor. A new recommendation can alter the weight of many other recommendations both directly and indirectly. Because of that, recommendation weights must be calculated cyclically. To make recommendation weights easier and faster to compute, the dampening factor slightly reduces the weight of a recommendation. The damping factor is 0.9.": "is the damping factor. A new recommendation can alter the weight of many other recommendations both directly and indirectly. Because of that, recommendation weights must be calculated cyclically. To make recommendation weights easier and faster to compute, the dampening factor slightly reduces the weight of a recommendation. The damping factor is 0.9."
  },
  "es": {
    "Recommendation weight": "El peso de una recomendación",
    "Recommendation weight equation": "Ecuación",
    "Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.": "El peso le da credibilidad a tus recomendaciones. Las recomendaciones con peso las pueden dar personas que han sido recomendadas por otros. Entonces, tu peso de recomendación es la suma de los pesos de las recomendaciones que has recibido.",
    "Your browser does not support the video tag.": "Tu navegador no soporta video.",
    "How weight is calculated": "¿Cómo se calcula el peso?",
    "The weight of each recommendation is determined by:": "El peso de cada recomendación se determina por:",
    "Weights per skill": "Pesos por habilidad",
    "The recommendation weight of a skill is the sum of the recommendations that include such skill. The weight of recommendations with multiple skills is divided equally among all.": "El peso de recomendación de una habilidad es la suma de las recomendaciones que tienen esa habilidad asociada. El peso de una recomendación con múltiples habilidades se divide igual entre todas.",
    "The math": "Las matemáticas",
    "The weight of any given recommendation,": "El peso de cualquier recomendación dada,",
    "is calculated using this formula:": "es calculado usando la siguiente fórmula:",
    "This formula may be adjusted from time to time to guarantee the relevance of the overall recommendation weight.": "Esta fórmula podrá ser ajustada en algunas ocasiones para garantizar la relevancia del peso de recomendación general.",
    "The <i>longevity of the affiliation</i> between the <i>recommender</i> and the <i>recommended</i>. Longer relationships will yield greater weight.": "La <i>longevidad de la afiliación</i> entre <i>quien recomienda</i> y <i>quien es recomendado</i>. Relaciones más largas producirán mayor peso.",
    "The <i>weight of recommendations</i> received by the recommender. So the more recommendations you have, the greater the weight of the recommendations you give.": "El <i>peso de las recomendaciones</i> recibido por quien recomienda. Es decir, entre más recomendaciones tengas, mayor será el peso de las recomendaciones que das.",
    "The <i>type of relationship</i> between the <i>recommender</i> and the <i>recommended</i>.": "El <i>tipo de relación</i> entre <i>quien recomienda</i> y el <i>recomendado</i>.",
    "The <i>number of recommendations</i> given by the <i>recommender</i>. With each recommendation you give, the overall weight of your recommendations diminishes proportionally. This means that if you recommend selectively, your recommendations will have greater weight than those given by someone who doesn't recommend selectively.": "El <i>número de recomendaciones</i> dado por <i>quien recomienda</i>. Con cada recomendación que das, el peso total de tus recomendaciones disminuye proporcionalmente. Esto significa que si recomiendas de forma selectiva, tus recomendaciones tendrán más peso que aquellas dadas por alguien que no es selectivo.",
    "<i><b>t</b></i> is the recommendation weight of the recommender. When the <i>recommender</i> is verified and has a recommendation weight below 100 (for example, new users), <i><b>t</b></i> becomes 100. When the <i>recommender</i> hasn’t been verified yet, <i><b>t</b></i> becomes 0.": "<i><b>t</b></i> es el peso de recomendación de quien recomienda. Cuando <i>quien recomienda</i> se verifica y tiene un peso de recomendación por debajo de 100 (por ejemplo, usuarios nuevos), <i><b>t</b></i> se vuelve 100. Cuando <i>el que recomienda</i> no ha sido verificado, <i><b>t</b></i> es 0.",
    "<i><b>Lr</b></i> is the longevity of the affiliation between the <i>recommender</i> and the <i>recommended</i>.": "<i><b>Lr</b></i> es la longevidad de la relación entre <i>quien recomienda</i> y <i>el recomendado</i>.",
    "<i><b>Fr</b></i> is the relationship type factor. For most relationships, the factor is 1. For recommendations where the <i>recommender</i> is the subordinate (for example, if you were led, hired, taught, mentored by - or received investment from - the person you’re recommending) the factor is the golden ratio (φ = 1.6180339887…).": "<i><b>Fr</b></i> es el factor de tipo de relación. Para la mayoría de relaciones, el factor es 1. Para las recomendaciones en las que <i>quien recomienda</i> es el subordinado (por ejemplo, si fuiste dirigido, contratado, aprendiste, o recibiste mentorías o inversiones por/de la persona que estás recomendando) el factor es la proporción áurea (φ = 1.6180339887…).",
    "The summation adds the multiplication of longevities as well as factors for all the recommendations given by the <i>recommender</i>.": "La suma agrega la multiplicación de las longevidades así como los factores para todas las recomendaciones dadas por <i>quien recomienda</i>.",
    "is the damping factor. A new recommendation can alter the weight of many other recommendations both directly and indirectly. Because of that, recommendation weights must be calculated cyclically. To make recommendation weights easier and faster to compute, the dampening factor slightly reduces the weight of a recommendation. The damping factor is 0.9.": "es el factor de amortiguación. Una nueva recomendación puede alterar el peso de muchas más recomendaciones de forma directa o indirecta. Debido a esto, los pesos de recomendación se deben recalcular frecuentemente. Para hacer los pesos de recomendación más fáciles y rápidos de procesar, el factor de amortiguación reduce un poco el peso de la recomendación. El factor de amortiguación es 0.9."
  }
};

const TdlWeightDialog = {
  name: 'tdl-weight-dialog',
  components: {
    TdlFullscreendialog,
    TdlWeightDialogFormula
  },

  data() {
    return {
      video: {}
    };
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlWeightDialog",
      theme: tdlWeightDialogTheme
    });
    this.$root.$emit("update-locale-string", TdlWeightDialogLocale);
  },

  methods: {
    open() {
      this.$refs.dialog.openDialog();
      this.setupVideo();
    },

    close() {
      this.$refs.dialog.closeDialog();
    },

    setupVideo() {
      this.video = document.querySelector('#reputationWeightVideo');
      this.video.addEventListener('play', () => {
        this.$emit('played');
      });
      this.video.addEventListener('ended', () => {
        this.$emit('ended');
      });
    },

    handleClose() {
      this.$emit('closed', this.video.currentTime);
    }

  }
};

/* script */
const __vue_script__ = TdlWeightDialog;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('tdl-fullscreendialog', {
    ref: "dialog",
    staticClass: "recommendations-weight-dialog",
    attrs: {
      "dialog-ok-text": "",
      "plain-view": true,
      "dialog-title": _vm.$t('Recommendation weight')
    },
    on: {
      "on-close": _vm.handleClose,
      "cancel": _vm.close
    }
  }, [_c('div', {
    staticClass: "content-area content-area--first"
  }, [_c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.")))]), _vm._v(" "), _c('div', {
    staticClass: "recommendations-weight-dialog__video-container"
  }, [_c('video', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload"
    }],
    attrs: {
      "id": "reputationWeightVideo",
      "data-url": "https://s3-us-west-2.amazonaws.com/bio-media/static/reputationWeight.mp4",
      "controls": "",
      "controlsList": "nodownload nofullscreen",
      "poster": "https://s3-us-west-2.amazonaws.com/bio-media/static/reputationWeight.png"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Your browser does not support the video tag.")) + "\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.$t("How weight is calculated")))]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("The weight of each recommendation is determined by:")))]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('The <i>longevity of the affiliation</i> between the <i>recommender</i> and the <i>recommended</i>. Longer relationships will yield greater weight.'))
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('The <i>weight of recommendations</i> received by the recommender. So the more recommendations you have, the greater the weight of the recommendations you give.'))
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('The <i>type of relationship</i> between the <i>recommender</i> and the <i>recommended</i>.'))
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('The <i>number of recommendations</i> given by the <i>recommender</i>. With each recommendation you give, the overall weight of your recommendations diminishes proportionally. This means that if you recommend selectively, your recommendations will have greater weight than those given by someone who doesn\'t recommend selectively.'))
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.$t("Weights per skill")))]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("The recommendation weight of a skill is the sum of the recommendations that include such skill. The weight of recommendations with multiple skills is divided equally among all.")))])]), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.$t("The math")))]), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("The weight of any given recommendation,")) + " "), _c('b', [_vm._v("wr")]), _vm._v(", " + _vm._s(_vm.$t("is calculated using this formula:")))]), _vm._v(" "), _c('tdl-weight-dialog-formula'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('<i><b>t</b></i> is the recommendation weight of the recommender. When the <i>recommender</i> is verified and has a recommendation weight below 100 (for example, new users), <i><b>t</b></i> becomes 100. When the <i>recommender</i> hasn’t been verified yet, <i><b>t</b></i> becomes 0.'))
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('<i><b>Lr</b></i> is the longevity of the affiliation between the <i>recommender</i> and the <i>recommended</i>.'))
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('<i><b>Fr</b></i> is the relationship type factor. For most relationships, the factor is 1. For recommendations where the <i>recommender</i> is the subordinate (for example, if you were led, hired, taught, mentored by - or received investment from - the person you’re recommending) the factor is the golden ratio (φ = 1.6180339887…).'))
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_c('i', [_c('b', [_vm._v("d")])]), _vm._v(" " + _vm._s(_vm.$t("is the damping factor. A new recommendation can alter the weight of many other recommendations both directly and indirectly. Because of that, recommendation weights must be calculated cyclically. To make recommendation weights easier and faster to compute, the dampening factor slightly reduces the weight of a recommendation. The damping factor is 0.9.")))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('The summation adds the multiplication of longevities as well as factors for all the recommendations given by the <i>recommender</i>.'))
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "md-subheading-1"
  }, [_vm._v(_vm._s(_vm.$t("This formula may be adjusted from time to time to guarantee the relevance of the overall recommendation weight.")))])], 1)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-58ad4d30_0", {
    source: ".recommendations-weight-dialog{overflow-y:scroll;-webkit-overflow-scrolling:touch}.recommendations-weight-dialog .content-area{padding:16px 16px 32px}.recommendations-weight-dialog .content-area--first{padding-top:40px}.recommendations-weight-dialog .content-area .tdl-weight-formula{padding:32px 16px;width:100%;max-width:480px;margin:0 auto;display:block}.recommendations-weight-dialog__video-container{margin-top:32px}.recommendations-weight-dialog__video-container video{width:100%;max-height:380px}.recommendations-weight-dialog .top-action{display:none}.recommendations-weight-dialog .top-actions-toolbar .md-button{min-width:0;padding-left:8px;padding-right:8px}.recommendations-weight-dialog .top-actions-toolbar .md-button:last-child{margin:0}.recommendations-weight-dialog .md-dialog{max-width:720px!important;width:100%!important}.recommendations-weight-dialog .md-dialog .md-dialog-content{padding:0;z-index:0;overflow-x:hidden;min-height:200px}@media (min-height:565px){.recommendations-weight-dialog .md-dialog .md-dialog-content{min-height:128px}}",
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
