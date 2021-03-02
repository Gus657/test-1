export var changeHtmlMetaColor;
export var createNewStyleElement;

if (process.env.VUE_ENV !== 'server' && document) {
  changeHtmlMetaColor = (color) => {
    var elem = document.querySelector('meta[name="theme-color"]');

    if (elem) {
      elem.setAttribute('content', color);
    } else {
      elem = document.createElement('meta');
      elem.setAttribute('name', 'theme-color');
      elem.setAttribute('content', color);

      document.head.appendChild(elem);
    }
  };

  createNewStyleElement = (style, styleId) => {
    const head = document.head;
    const styleElement = head.querySelector('#' + styleId);

    if (!styleElement) {
      const newTag = document.createElement('style');

      newTag.type = 'text/css';
      newTag.id = styleId;
      newTag.textContent = style;

      head.appendChild(newTag);
    } else {
      styleElement.textContent = style;
    }
  };
}
