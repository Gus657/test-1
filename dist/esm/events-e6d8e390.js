function applyPassive() {
  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  let passiveSupported = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    window.addEventListener('test', null, options);
  } catch (err) {}

  return passiveSupported ? {
    passive: true
  } : false;
}

export { applyPassive as a };
