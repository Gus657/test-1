export function isiOS() {
  return !!navigator.userAgent.match(/(iPhone|iPad|iPod)/g);
}

export function isMobile() {
  return !!navigator.userAgent.match(/(Android|webOS|BlackBerry|Windows Phone)/g) || isiOS();
}

export function isSafari() {
  return navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
}

export function isTablet() {
  return (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i).test(navigator.userAgent);
}
