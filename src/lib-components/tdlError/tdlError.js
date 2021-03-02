import MdButton from '@/lib-components/mdButton/mdButton.vue';
import TdlCryingTRex from '@/lib-components/tdlCryingTRex/tdlCryingTRex.vue';
import TdlMagnifyingGlass from '@/lib-components/tdlMagnifyingGlass/tdlMagnifyingGlass.vue';
const TdlError = {
  name: 'tdl-error',
  components: {
    MdButton,
    TdlCryingTRex,
    TdlMagnifyingGlass
  },
  props: {
    baseURL: { type: String, default: 'https://www.torre.co' },
    statusCode: { type: Number, default: 404 }
  },
  computed: {
    buttonText() {
      if (this.$props.statusCode === 404) {
        return this.$t('Go to homepage');
      } else {
        return this.$t('Refresh');
      }
    },
    errorStatus() {
      if (this.$props.statusCode === 404) {
        return this.$t('404 Error - Page not found.');
      } else {
        return this.$t('An error occurred');
      }
    },
    errorMessage() {
      if (this.$props.statusCode === 404) {
        return this.$t('We can’t seem to find the page you’re looking for.');
      } else {
        return this.$t('To-rrex, our mascot, made a mistake that ended up a in series of unfortunate events.');
      }
    },
    title() {
      if (this.$props.statusCode === 404) {
        return this.$t('Oops!');
      } else {
        return this.$t('Sorry!');
      }
    }
  }
};

export default TdlError;
