function isDesktop() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return width >= 720;
}
function isMobile() {
  return !isDesktop();
}

export { isDesktop as a, isMobile as i };
