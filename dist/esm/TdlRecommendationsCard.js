import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';
import { t as theme } from './mixin-66e9c47b.js';
import './MdInkRipple.js';
import MdButton from './MdButton.js';
import MdCard from './MdCard.js';
import MdCardContent from './MdCardContent.js';
import MdIcon from './MdIcon.js';
import { mdiCheckDecagram, mdiPin, mdiClockOutline, mdiWeight, mdiClipboardCheck } from '@mdi/js';
import './transitionEndEventName-e3bb98be.js';
import './deviceHelper-575f722e.js';
import MdTooltip from './MdTooltip.js';
import TdlEntityPicture from './TdlEntityPicture.js';
import 'human-format';
import './TdlWeightIcon.js';
import TdlWeightRender from './TdlWeightRender.js';

var TdlRecommendationsCardLocale = {
  "en": {
    "Pinned recommendation": "Pinned recommendation",
    "Most recent recommendation": "Most recent recommendation",
    "Most weighted recommendation": "Most weighted recommendation",
    "View all recommendations": "View all recommendations",
    "recommends:": "recommends:",
    "Recommends": "Recommends",
    "for": "for",
    "Verified": "Verified",
    "Recommendation weight:": "Recommendation weight:",
    "is/was reporting to ": "is/was reporting to ",
    "reported to ": "reported to ",
    "is/was leading ": "is/was leading ",
    "led ": "led ",
    "is/was working alongside ": "is/was working alongside ",
    "worked alongside ": "worked alongside ",
    "is/was ": "is/was ",
    "\\'s supplier": "\\'s supplier",
    "was ": "was ",
    "is/was a client of ": "is/was a client of ",
    "was a client of ": "was a client of ",
    "is/was teaching ": "is/was teaching ",
    "taught ": "taught ",
    "is/was a student of ": "is/was a student of ",
    "was a student of ": "was a student of ",
    "is/was studying alongside ": "is/was studying alongside ",
    "studied alongside ": "studied alongside ",
    "gave ": "gave ",
    " an award": " an award",
    "received an award from ": "received an award from ",
    "shared this achievement with ": "shared this achievement with ",
    "had a brief interaction with ": "had a brief interaction with ",
    "\\'s consumer": "\\'s consumer",
    "minutes": "minutes",
    "hours": "hours",
    "days": "days",
    "weeks": "weeks",
    "months": "months",
    "years": "years"
  },
  "es": {
    "Pinned recommendation": "Recomendación fijada",
    "Most recent recommendation": "Recomendación más reciente",
    "Most weighted recommendation": "Recomendación con más peso",
    "View all recommendations": "Ver todas las recomendaciones",
    "recommends:": "recomienda:",
    "Recommends": "Recomienda",
    "for": "por",
    "Verified": "Verificado",
    "Recommendation weight:": "Peso de la recomendación:",
    "is/was reporting to ": "reporta(ó) a ",
    "reported to ": "reportó a ",
    "is/was leading ": "lidera(ó) a ",
    "led ": "lideró a ",
    "is/was working alongside ": "trabaja/ó con ",
    "worked alongside ": "trabajó con ",
    "is/was ": "es/era de ",
    "\\'s supplier": " su proveedor",
    "was ": "era de ",
    "is/was a client of ": "es/era cliente de ",
    "was a client of ": "era cliente de ",
    "is/was teaching ": "enseña(ó) a ",
    "taught ": "enseñó a ",
    "is/was a student of ": "es/era alumno de ",
    "was a student of ": "era alumno de ",
    "is/was studying alongside ": "estudia(ó) con ",
    "studied alongside ": "estudió con ",
    "gave ": "dió a ",
    " an award": " un premio",
    "received an award from ": "recibió un premio de ",
    "shared this achievement with ": "compartió este logro con ",
    "had a brief interaction with ": "tuvo una breve interacción con ",
    "\\'s consumer": " su cliente",
    "minutes": "minutos",
    "hours": "horas",
    "days": "días",
    "weeks": "semanas",
    "months": "meses",
    "years": "años"
  }
};

var tdlRecommendationsCardTheme = ".THEME_NAME.tdl-recommendations-card .recommendation-card__content--view-all .md-icon {\n  color: ACCENT-PRIMARY !important;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-subheading {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-subheading .mdi-weight {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-subheading__icon {\n  color: TEXT-DEFAULT !important;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-subheading__dot {\n  color: BACKGROUND-INVERTED-0.25;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-body {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-strengths__title, .THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-strengths__content {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__content .content-relationship .md-body-1 {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card:hover {\n  background-color: BACKGROUND-ELEVATION_2;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card hr {\n  background-color: BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.tdl-recommendations-card .recommendation-card__title {\n  color: TEXT-DEFAULT !important;\n}";

const TdlRecommendationsCard = {
  name: 'tdl-recommendations-card',
  components: {
    MdButton,
    MdCard,
    MdCardContent,
    MdIcon,
    MdTooltip,
    TdlEntityPicture,
    TdlWeightRender
  },
  mixins: [theme],
  props: {
    connection: Object,
    action: String,
    highlight: String,
    noShadow: {
      type: Boolean,
      default: false
    },
    strengthsColor: {
      type: String,
      default: 'rgba(4, 172, 193, 0.8)'
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    },
    hoverColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    }
  },
  created: function () {
    this.$root.$emit("component-created", {
      name: "tdlRecommendationsCard",
      theme: tdlRecommendationsCardTheme
    });
    this.$root.$emit("update-locale-string", TdlRecommendationsCardLocale);
  },

  data() {
    return {
      mdiVerifiedIcon: mdiCheckDecagram
    };
  },

  computed: {
    highlights: function () {
      return {
        pinned: {
          iconset: mdiPin,
          title: this.$t('Pinned recommendation')
        },
        recent: {
          iconset: mdiClockOutline,
          title: this.$t('Most recent recommendation')
        },
        weighted: {
          iconset: mdiWeight,
          title: this.$t('Most weighted recommendation')
        },
        'view-all': {
          iconset: mdiClipboardCheck,
          title: this.$t('View all recommendations')
        }
      };
    },
    relationships: function () {
      return {
        lead: name => this.$t('is/was reporting to ') + name,
        led: name => this.$t('reported to ') + name,
        employ: name => this.$t('is/was leading ') + name,
        employed: name => this.$t('led ') + name,
        work: name => this.$t('is/was working alongside ') + name,
        worked: name => this.$t('worked alongside ') + name,
        provide: name => this.$t('is/was ') + name + this.$t('\'s supplier'),
        provided: name => this.$t('was ') + name + this.$t('\'s supplier'),
        purchase: name => this.$t('is/was a client of ') + name,
        purchased: name => this.$t('was a client of ') + name,
        learn: name => this.$t('is/was teaching ') + name,
        learnt: name => this.$t('taught ') + name,
        teach: name => this.$t('is/was a student of ') + name,
        taught: name => this.$t('was a student of ') + name,
        study: name => this.$t('is/was studying alongside ') + name,
        studied: name => this.$t('studied alongside ') + name,
        awarder: name => this.$t('gave ') + name + this.$t(' an award'),
        awardee: name => this.$t('received an award from ') + name,
        achieved: name => this.$t('shared this achievement with ') + name,
        interacted: name => this.$t('had a brief interaction with ') + name,
        consume: name => this.$t('is/was ') + name + this.$t('\'s consumer'),
        consumed: name => this.$t('was ') + name + this.$t('\'s consumer')
      };
    },
    duration: function () {
      return {
        minutes: this.$t('minutes'),
        hours: this.$t('hours'),
        days: this.$t('days'),
        weeks: this.$t('weeks'),
        months: this.$t('months'),
        years: this.$t('years')
      };
    },
    person: function () {
      if (this.connection) {
        return this.action === 'received' ? this.connection.personSource : this.connection.personTarget;
      }
    },
    cssProps: function () {
      return {
        '--background-color': this.backgroundColor,
        '--hover-color': this.hoverColor
      };
    }
  },
  methods: {
    personFirstName: function (personName) {
      return personName.replace(/ .*/, '');
    },
    strengthsToString: function (strengths) {
      return strengths.map(strength => strength).join(',<br>');
    },
    cardClicked: function () {
      this.$emit('card-clicked');
    },

    relationshipAction(name) {
      return this.relationships[this.connection.relationship] ? this.relationships[this.connection.relationship](name) : '';
    },

    relationshipActionBeforeAndAfter() {
      const fakeName = 'Yd6oPgrp';
      const text = this.relationshipAction(fakeName);
      const before = text.substring(0, text.search(fakeName));
      const after = text.substring(text.search(fakeName) + fakeName.length);
      return [before, after];
    }

  }
};

/* script */
const __vue_script__ = TdlRecommendationsCard;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tdl-recommendations-card",
    class: [_vm.themeClass],
    style: _vm.cssProps
  }, [_c('div', {
    staticClass: "tdl-recommendations-card__container",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.cardClicked();
      }
    }
  }, [_c('md-card', {
    staticClass: "recommendation-card",
    class: {
      'recommendation-card--no-shadow': _vm.noShadow
    }
  }, [_vm.highlight !== 'view-all' && _vm.person ? _c('md-card-content', {
    staticClass: "recommendation-card__content"
  }, [_c('div', {
    staticClass: "md-body-1 recommendation-card__title"
  }, [_vm.highlight ? _c('span', [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.highlights[_vm.highlight].iconset
    }
  }), _vm._v("\n            " + _vm._s(_vm.highlights[_vm.highlight].title) + "\n          ")], 1) : _vm._e()]), _vm._v(" "), _c('hr', {
    class: {
      'no-highlight': !_vm.highlight
    }
  }), _vm._v(" "), _vm.action === 'given' ? _c('p', {
    staticClass: "md-body-1 content-body content-body--first-name"
  }, [_vm._v(_vm._s(_vm.personFirstName(_vm.connection.personSource.name)) + " " + _vm._s(_vm.$t("recommends:")))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content-picture"
  }, [_c('tdl-entity-picture', {
    attrs: {
      "entity": _vm.person,
      "size": 80,
      "border-width": 6,
      "border-color": "#ffffff",
      "box-shadow": "0px 2px 4px rgba(0,0,0,0.5)",
      "default-margin": false
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "md-subheading content-subheading"
  }, [_c('span', {
    staticClass: "content-subheading--nowrap content-subheading--overflow"
  }, [_vm._v("\n            " + _vm._s(_vm.person.name) + "\n            "), _vm.person.verified ? _c('md-icon', {
    staticClass: "mdi mdi-check-decagram content-subheading__icon",
    attrs: {
      "icon-svg": _vm.mdiVerifiedIcon
    }
  }, [_c('md-tooltip', {
    attrs: {
      "md-direction": "bottom"
    }
  }, [_vm._v(_vm._s(_vm.$t("Verified")))])], 1) : _vm._e()], 1), _vm._v(" "), _c('span', {
    staticClass: "content-subheading--nowrap"
  }, [_c('tdl-weight-render', {
    attrs: {
      "value": _vm.person.weight,
      "icon-color": "rgba(0,0,0,0.87)",
      "icon-size": 19,
      "person-id": _vm.person.id,
      "icon-position": "left",
      "infoIcon-display": false,
      "trackable": true,
      "dot-divider": true,
      "dot-divider-size": 8
    }
  })], 1)]), _vm._v(" "), _c('p', {
    staticClass: "md-body-1 content-body content-body--nowrap"
  }, [_vm._v(_vm._s(_vm.person.professionalHeadline))]), _vm._v(" "), _c('div', {
    staticClass: "content-strengths",
    style: {
      'background-color': _vm.strengthsColor
    }
  }, [_vm.action === 'received' ? _c('div', {
    staticClass: "md-body-1 content-strengths__title"
  }, [_vm._v(_vm._s(_vm.$t("Recommends")) + " "), _c('span', {
    staticClass: "tdl-recommendations-card__person-target-name"
  }, [_vm._v(_vm._s(_vm.personFirstName(_vm.connection.personTarget.name)))]), _vm._v(" " + _vm._s(_vm.$t("for")))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "md-subheading content-strengths__content",
    domProps: {
      "innerHTML": _vm._s(_vm.strengthsToString(_vm.connection.recommendation.strengths))
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-strengths__quotations content-strengths__quotations--open"
  }), _vm._v(" "), _c('div', {
    staticClass: "content-strengths__quotations content-strengths__quotations--close"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content-relationship"
  }, [_vm.action === 'received' && _vm.connection.relationship ? _c('p', {
    staticClass: "md-body-1"
  }, [_vm._v(_vm._s(_vm.personFirstName(_vm.person.name)) + " " + _vm._s(_vm.relationshipActionBeforeAndAfter()[0])), _c('span', {
    staticClass: "tdl-recommendations-card__person-target-name"
  }, [_vm._v(_vm._s(_vm.personFirstName(_vm.connection.personTarget.name)))]), _vm._v(_vm._s(_vm.relationshipActionBeforeAndAfter()[1]) + " "), _vm.connection.relationship !== 'awarder' && _vm.connection.relationship !== 'awardee' && _vm.connection.relationship !== 'achieved' ? [_vm._v(_vm._s(_vm.$t("for")) + " " + _vm._s(_vm.duration[_vm.connection.recommendation.duration]))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.action === 'given' && _vm.connection.relationship ? _c('p', {
    staticClass: "md-body-1"
  }, [_vm._v(_vm._s(_vm.personFirstName(_vm.connection.personSource.name)) + " " + _vm._s(_vm.relationshipAction(_vm.personFirstName(_vm.person.name))) + " "), _vm.connection.relationship !== 'awarder' && _vm.connection.relationship !== 'awardee' && _vm.connection.relationship !== 'achieved' ? [_vm._v(_vm._s(_vm.$t("for")) + " " + _vm._s(_vm.duration[_vm.connection.recommendation.duration]))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "md-body-1 recommendation-weight-wrapper"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Recommendation weight:")) + "\n            "), _c('tdl-weight-render', {
    attrs: {
      "value": _vm.connection.recommendation.weight,
      "icon-color": "rgba(255,255,255,0.65)",
      "icon-size": 20,
      "person-id": _vm.person.id,
      "icon-position": "left",
      "infoIcon-display": false,
      "trackable": true,
      "plus-icon": true
    }
  })], 1)])]) : _c('md-card-content', {
    staticClass: "recommendation-card__content recommendation-card__content--view-all"
  }, [_c('span', [_c('md-icon', {
    attrs: {
      "icon-svg": _vm.highlights[_vm.highlight].iconset,
      "size": "62px"
    }
  })], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary"
  }, [_vm._v(_vm._s(_vm.highlights[_vm.highlight].title))])], 1)], 1)], 1)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-b244927a_0", {
    source: ".tdl-lazy-loader-hide-background-image{background-image:none!important;top:0!important}.tdl-recommendations-card{z-index:0;padding:0;width:300px;justify-self:center}.tdl-recommendations-card__container{height:100%}.tdl-recommendations-card .recommendation-card{white-space:normal;border-radius:16px;min-height:428px;height:100%}.tdl-recommendations-card .recommendation-card--no-shadow{box-shadow:none}.tdl-recommendations-card .recommendation-card hr{border:none;height:1px}.tdl-recommendations-card .recommendation-card hr.no-highlight{background-color:transparent!important}.tdl-recommendations-card .recommendation-card:hover{transition:all .3s cubic-bezier(.55,0,.55,.2)}.tdl-recommendations-card .recommendation-card__title{min-height:20px}.tdl-recommendations-card .recommendation-card__title .md-icon{min-width:12px;width:12px;min-height:12px;height:12px;font-size:12px}.tdl-recommendations-card .recommendation-card__content{padding:8px 0 16px!important;text-align:center;border-radius:16px;overflow:hidden;cursor:pointer;background-color:var(--background-color)!important}.tdl-recommendations-card .recommendation-card__content:hover{background-color:var(--hover-color)!important}.tdl-recommendations-card .recommendation-card__content--view-all{display:flex;flex-direction:column;justify-content:center;flex-grow:2;cursor:pointer;background-color:var(--background-color)}.tdl-recommendations-card .recommendation-card__content--view-all:hover{background-color:var(--hover-color)}.tdl-recommendations-card .recommendation-card__content--view-all .md-button{pointer-events:none;white-space:normal;height:fit-content;line-height:24px!important}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon{min-width:62px;width:62px;min-height:62px;height:62px;font-size:62px}.tdl-recommendations-card .recommendation-card__content .content-picture{margin:16px 0}.tdl-recommendations-card .recommendation-card__content .content-subheading{margin-top:8px;margin-bottom:0;padding:0 8px;display:flex;justify-content:center;align-items:center}.tdl-recommendations-card .recommendation-card__content .content-subheading--nowrap{white-space:nowrap}.tdl-recommendations-card .recommendation-card__content .content-subheading--overflow{text-overflow:ellipsis;overflow:hidden}.tdl-recommendations-card .recommendation-card__content .content-subheading__icon{min-width:16px;width:16px;min-height:16px;height:16px;font-size:16px}.tdl-recommendations-card .recommendation-card__content .content-subheading__dot .md-icon{min-width:8px;width:8px;min-height:8px;height:8px;font-size:8px}.tdl-recommendations-card .recommendation-card__content .content-body{margin-top:4px;margin-bottom:0;padding:0 16px}.tdl-recommendations-card .recommendation-card__content .content-body--first-name{margin-top:0;margin-bottom:6px}.tdl-recommendations-card .recommendation-card__content .content-body--nowrap{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tdl-recommendations-card .recommendation-card__content .content-strengths{position:relative;display:flex;flex-direction:column;justify-content:center;margin-top:16px;margin-bottom:12px;height:128px;width:auto}.tdl-recommendations-card .recommendation-card__content .content-strengths__quotations{position:absolute;height:44px;width:48px;object-fit:contain;content:\"\";background-color:var(--background-color)}.tdl-recommendations-card .recommendation-card__content .content-strengths__quotations--open{top:16px;left:-1px;-webkit-mask:url(https://bio-media.s3-us-west-2.amazonaws.com/static/quotations_open.svg) no-repeat;mask:url(https://bio-media.s3-us-west-2.amazonaws.com/static/quotations_open.svg) no-repeat}.tdl-recommendations-card .recommendation-card__content .content-strengths__quotations--close{bottom:16px;right:-8px;-webkit-mask:url(https://bio-media.s3-us-west-2.amazonaws.com/static/quotations_close.svg) no-repeat;mask:url(https://bio-media.s3-us-west-2.amazonaws.com/static/quotations_close.svg) no-repeat}.tdl-recommendations-card .recommendation-card__content .content-strengths__content,.tdl-recommendations-card .recommendation-card__content .content-strengths__title{padding:0 40px}.tdl-recommendations-card .recommendation-card__content .content-strengths--content,.tdl-recommendations-card .recommendation-card__content .content-strengths__content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tdl-recommendations-card .recommendation-card__content .content-strengths .content-strengths__title+.content-strengths__content{margin-top:16px}.tdl-recommendations-card .recommendation-card__content .content-relationship{position:relative;display:flex;flex-direction:column;justify-content:center;height:64px}.tdl-recommendations-card .recommendation-card__content .content-relationship p{margin:0 16px}.tdl-recommendations-card .recommendation-card__content .content-relationship p .recommendation-weight-wrapper{display:flex;justify-content:center;margin:4px 16px}.tdl-recommendations-card .recommendation-card__content .content-relationship p .recommendation-weight{margin-left:4px}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.pink100{color:#f8bbd0}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.pink200{color:#f48fb1}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.pink300{color:#f06292}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.purple100{color:#e1bee7}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.purple200{color:#ce93d8}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.purple300{color:#ba68c8}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.deepPurple200{color:#b39ddb}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.deepPurple300{color:#9575cd}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.blue200{color:#90caf9}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.blue500{color:#2196f3}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.cyan200{color:#80deea}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.cyan500{color:#00bcd4}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.teal200{color:#80cbc4}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.teal400{color:#26a69a}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.lightGreen500{color:#8bc34a}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.lime500{color:#cddc39}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.amber300{color:#ffd54f}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.amber600{color:#d69600}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.orange400{color:#ffa726}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.deepOrange500{color:#ff5722}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.brown100{color:#d7ccc8}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.brown200{color:#bcaaa4}.tdl-recommendations-card .recommendation-card__content--view-all .md-icon.bio{color:#cddc39}.tdl-recommendations-card .recommendation-card__content .content-subheading{color:rgba(255,255,255,.9)}.tdl-recommendations-card .recommendation-card__content .content-subheading .mdi-weight{color:rgba(255,255,255,.9)}.tdl-recommendations-card .recommendation-card__content .content-subheading__icon{color:rgba(255,255,255,.65)!important}.tdl-recommendations-card .recommendation-card__content .content-subheading__dot{color:rgba(255,255,255,.25)}.tdl-recommendations-card .recommendation-card__content .content-body{color:rgba(255,255,255,.65)}.tdl-recommendations-card .recommendation-card__content .content-strengths__content,.tdl-recommendations-card .recommendation-card__content .content-strengths__title{color:rgba(255,255,255,.9)}.tdl-recommendations-card .recommendation-card__content .content-relationship .md-body-1{color:rgba(255,255,255,.65)}.tdl-recommendations-card .recommendation-card:hover{background-color:#383b40}.tdl-recommendations-card .recommendation-card hr{background-color:rgba(255,255,255,.12)}.tdl-recommendations-card .recommendation-card__title{color:rgba(255,255,255,.65)!important}",
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
