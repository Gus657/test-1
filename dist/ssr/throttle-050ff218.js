'use strict';

const debounce = (callback, limit) => {
  var wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      window.setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

exports.throttle = debounce;
