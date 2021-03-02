function transitionEndEventName() {
  if (process.env.VUE_ENV !== "server") {
    const el = document.createElement('span');
    const transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (let transition in transitions) {
      if (el.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
  }
}

var transitionEndEventName$1 = transitionEndEventName();

export { transitionEndEventName$1 as t };
