import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

var tdlCountdownTheme = ".THEME_NAME.tdl-countdown__label--inline {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME.tdl-countdown .timer__separator {\n  border-color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-countdown .timer__box {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.tdl-countdown--contrast .countdown__label, .THEME_NAME.tdl-countdown--contrast .countdown__label--inline {\n  color: BACKGROUND-ELEVATION_0;\n}\n.THEME_NAME.tdl-countdown--contrast .timer__separator {\n  border-color: BACKGROUND-ELEVATION_0;\n}\n.THEME_NAME.tdl-countdown--contrast .timer__box {\n  color: BACKGROUND-ELEVATION_0;\n}";

var TdlCountdownLocale = {
  "en": {
    "days": "days",
    "day": "day",
    "hours": "hours",
    "hour": "hour",
    "min": "min",
    "sec": "sec"
  },
  "es": {
    "days": "días",
    "day": "día",
    "hours": "horas",
    "min": "min",
    "sec": "seg",
    "hour": "hora"
  }
};

const TdlCountdown = {
  name: 'tdl-countdown',
  props: {
    label: {
      required: false,
      type: String
    },
    labelIconset: {
      required: false,
      type: String
    },
    labelClass: {
      type: String,
      default: "md-caption"
    },
    date: {
      type: [String, Date]
    },
    inline: {
      type: Boolean,
      default: false
    },
    contrast: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      timerIsRunning: true,
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      timer: 0
    };
  },

  created() {
    this.$root.$emit("component-created", {
      name: "tdlCountdown",
      theme: tdlCountdownTheme
    });
    this.$root.$emit("update-locale-string", TdlCountdownLocale);
  },

  mounted() {
    if (this.date) {
      this.countdown();
      this.startTimer();
    } else {
      this.timerIsRunning = false;
      this.$emit("timer-stoped");
    }
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    countdown() {
      if (this.date) {
        const timeObject = this.getTimerUntil(new Date(this.date));

        if (timeObject) {
          this.time.days = timeObject.days;
          this.time.hours = timeObject.hours;
          this.time.minutes = timeObject.minutes;
          this.time.seconds = timeObject.seconds;
        } else {
          this.timerIsRunning = false;
          clearInterval(this.timer);
          this.$emit("timer-stoped");
        }
      }
    },

    startTimer() {
      this.timer = window.setInterval(this.countdown, 1000);
    },

    getTimerUntil(pDate) {
      const now = new Date();
      const date = Date.parse(pDate);
      const seconds = (date - now) / 1000;
      const days = Math.floor(seconds / (60 * 60 * 24));
      const remainderSecondsForDay = seconds % (60 * 60 * 24);
      const hours = Math.floor(remainderSecondsForDay / (60 * 60));
      const remainderSecondsForHour = remainderSecondsForDay % (60 * 60);
      const minutes = Math.floor(remainderSecondsForHour / 60);
      const remainderSecondsForMinute = Math.floor(remainderSecondsForHour % 60);
      return seconds > 0 ? {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: remainderSecondsForMinute
      } : undefined;
    }

  }
};

/* script */
const __vue_script__ = TdlCountdown;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.timerIsRunning ? _c('div', {
    class: ['tdl-countdown', {
      'tdl-countdown--inline': _vm.inline
    }, {
      'tdl-countdown--contrast': _vm.contrast
    }, {
      'tdl-countdown--big': _vm.big
    }]
  }, [!_vm.inline && _vm.label ? _c('div', {
    class: ['tdl-countdown__label', _vm.labelClass]
  }, [_c('span', [_vm.labelIconset ? _c('md-icon', {
    attrs: {
      "md-iconset": _vm.labelIconset
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.label))])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: ['tdl-countdown__timer timer', {
      'timer--has-icon': _vm.label && _vm.labelIconset
    }]
  }, [_vm.inline && _vm.label ? _c('span', {
    class: ['tdl-countdown__label--inline', _vm.labelClass]
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "timer__box"
  }, [_c('div', {
    staticClass: "timer__number"
  }, [_vm._v(_vm._s(_vm.time.days))]), _vm._v(" "), _vm.time.days != 1 ? _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("days")))]) : _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("day")))])]), _vm._v(" "), _c('span', {
    staticClass: "timer__separator"
  }), _vm._v(" "), _c('span', {
    staticClass: "timer__box"
  }, [_c('div', {
    staticClass: "timer__number"
  }, [_vm._v(_vm._s(_vm.time.hours))]), _vm._v(" "), _vm.time.hours != 1 ? _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("hours")))]) : _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("hour")))])]), _vm._v(" "), _c('span', {
    staticClass: "timer__separator"
  }), _vm._v(" "), _c('span', {
    staticClass: "timer__box"
  }, [_c('div', {
    staticClass: "timer__number"
  }, [_vm._v(_vm._s(_vm.time.minutes))]), _vm._v(" "), _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("min")))])]), _vm._v(" "), _c('span', {
    staticClass: "timer__separator"
  }), _vm._v(" "), _c('span', {
    staticClass: "timer__box"
  }, [_c('div', {
    staticClass: "timer__number"
  }, [_vm._v(_vm._s(_vm.time.seconds))]), _vm._v(" "), _c('div', {
    staticClass: "timer__small"
  }, [_vm._v(_vm._s(_vm.$t("sec")))])]), _vm._v(" "), _c('div', {
    staticClass: "timer__edit"
  }, [_vm._t("edit-button")], 2)])]) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-59262732_0", {
    source: ".tdl-countdown__label[data-v-59262732]{display:flex;align-items:flex-start;letter-spacing:normal}.tdl-countdown__label--inline[data-v-59262732]{margin-right:6px;font-weight:200}.tdl-countdown__label .md-icon[data-v-59262732]{margin-right:4px}.tdl-countdown .timer[data-v-59262732]{display:flex;align-content:center;text-align:center;margin-top:6px}.tdl-countdown .timer--has-icon[data-v-59262732]{margin-left:28px}.tdl-countdown .timer__separator[data-v-59262732]{font-size:20px;font-weight:100;margin-left:5px;margin-right:5px;opacity:.5;height:27px;border-left:1px solid}.tdl-countdown .timer__box[data-v-59262732]{flex-direction:column;align-content:center}.tdl-countdown .timer__small[data-v-59262732]{font-size:7px;text-transform:uppercase;margin-top:-4px;padding:0;font-weight:100;text-align:center}.tdl-countdown .timer__number[data-v-59262732]{margin:0 6px 4px;font-size:16px;font-weight:100}.tdl-countdown .timer__edit[data-v-59262732]{position:relative;top:-6px;margin-bottom:-6px}.tdl-countdown--big .countdown__label--inline[data-v-59262732]{margin-right:15px}.tdl-countdown--big .timer__small[data-v-59262732]{font-size:9px}.tdl-countdown--big .timer__number[data-v-59262732]{font-size:21px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-59262732";
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
