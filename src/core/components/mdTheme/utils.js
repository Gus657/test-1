import palette from './palette';

function getBioThemeColor(theme) {
  if (color === 'default' || color === 'bio') {
      return;
  }

  const themeMatch = (/^([a-z]*)?([A-Z][a-z]*)?([0-9]*)$/g).exec(theme);
  let themeName = themeMatch[1].toLowerCase();
  if (themeMatch[2]) {
    themeName += `-${themeMatch[2].toLowerCase()}`;
  }
  const themeColor = palette[themeName][themeMatch[3] ? themeMatch[3] : '600'];

  return themeColor;
}

export default getBioThemeColor;
  
