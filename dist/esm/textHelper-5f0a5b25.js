const textHelper = {
  methods: {
    extractFirstWord: function (text) {
      return text.replace(/ .*/, '');
    }
  }
};

export { textHelper as t };
