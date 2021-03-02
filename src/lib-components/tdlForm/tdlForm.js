import uniqueId from 'lodash-es/uniqueId';

import {
  setCurrentModel,
  removeModel,
  updateSnapshotModel
} from '../../core/utils/forms.js';


const TdlForm = {
  name: 'tdl-form',
  props: {
    model: {
      type: Object,
      required: false
    },
    forceSnapshotUpdate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formKey: function() {
      return uniqueId('tdl-form-model');
    }
  },
  watch: {
    forceSnapshotUpdate: function(newValue) {
      if (newValue) {
        updateSnapshotModel({ key: this.formKey, data: this.model });
      }
    }
  },
  methods: {
    submit: function() {
      const event = new Event('submit', {
        bubbles: true,
        cancelable: true
      });
      const submit = this.$refs.form.dispatchEvent(event);


      if (submit) {
        this.$refs.form.submit();
      }
    },
    handleSubmit: function() {
      updateSnapshotModel({ key: this.formKey, data: this.model });
    },
    discardChanges: function() {
      // waits for possible model updates before discarding current snapshot
      // and taking a new one
      this.$nextTick(() => {
        updateSnapshotModel({ key: this.formKey, data: this.model });
      });
    }
  },
  created: function() {
    // gives time to set everything up if there's logic which setups the model
    // upon element creation
    this.$nextTick(() => {
      updateSnapshotModel({ key: this.formKey, data: this.model });
      setCurrentModel({ key: this.formKey, data: this.model });

      this.$watch('model', (newValue) => {
        setCurrentModel({ key: this.formKey, data: newValue });
      }, { deep: true });
    });
  },
  destroyed: function() {
    removeModel(this.formKey);
  }
};

export default TdlForm;
