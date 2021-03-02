export function isDesktop() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return width >= 720;
}

export function isMobile() {
  return !isDesktop();
}
