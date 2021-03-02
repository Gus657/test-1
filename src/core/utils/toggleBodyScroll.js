function toggleBodyScroll(blockScroll) {
  const isSafariMobile = (/(iPhone)/i).test(navigator.userAgent) &&
    !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  const bodyEl = document.body;

  if (blockScroll) {
    bodyEl.style.overflow = 'hidden';
    if (isSafariMobile) {
      const scrolledDistance = document.body.scrollTop || document.documentElement.scrollTop;
      // bodyEl.style.top = `-${scrolledDistance}px`;
    }
  } else {
    bodyEl.style.overflow = 'scroll';
    if (isSafariMobile) {
      bodyEl.style.top = '';
    }
  }
}

export default toggleBodyScroll;
