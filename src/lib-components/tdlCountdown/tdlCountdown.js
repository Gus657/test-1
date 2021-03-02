import tdlCountdownTheme from './tdlCountdown-theme.scss';
import { default as TdlCountdownLocale } from "./tdlCountdown_i18n";

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
    this.$root.$emit("component-created", { name: "tdlCountdown", theme: tdlCountdownTheme });
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
      return seconds > 0 ? { days: days, hours: hours, minutes: minutes, seconds: remainderSecondsForMinute } : undefined;
    }
  }
};

export default TdlCountdown;
