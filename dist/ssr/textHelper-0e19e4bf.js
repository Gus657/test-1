'use strict';

const textHelper = {
  methods: {
    extractFirstWord: function (text) {
      return text.replace(/ .*/, '');
    }
  }
};

exports.textHelper = textHelper;
