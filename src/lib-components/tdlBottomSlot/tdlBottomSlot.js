import MdWhiteframe from '@/lib-components/mdWhiteframe/mdWhiteframe.vue';
import MdToolbar from '@/lib-components/mdToolbar/mdToolbar.vue';

const TdlBottomSlot = {
  name: 'tdl-bottom-slot',
  components: {
    MdWhiteframe,
    MdToolbar
  },
  props: {
    theme: {
      type: String,
      required: false,
      default: 'white'
    }
  }
};

export default TdlBottomSlot;
