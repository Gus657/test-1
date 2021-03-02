'use strict';

const uniqueId = () => {
  return Math.random().toString(36).slice(4);
};

exports.uniqueId = uniqueId;
