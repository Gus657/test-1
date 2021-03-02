function isiOS() {
  return !!navigator.userAgent.match(/(iPhone|iPad|iPod)/g);
}
function isMobile() {
  return !!navigator.userAgent.match(/(Android|webOS|BlackBerry|Windows Phone)/g) || isiOS();
}
function isSafari() {
  return navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
}
function isTablet() {
  return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);
}

export { isiOS as a, isSafari as b, isTablet as c, isMobile as i };
