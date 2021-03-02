'use strict';

const isArray = value => {
  return value && value.constructor === Array;
};

exports.isArray = isArray;
