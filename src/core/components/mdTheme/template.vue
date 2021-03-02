<template>
  <span></span>
</template>
<script>
import themes from './themes';
import palette from './palette';
import mdTheme from './mdTheme.vue';
import { changeHtmlMetaColor, createNewStyleElement } from './dom';
import rgba from './rgba';

const THEME_TYPE = ['background', 'component', 'accent', 'raised', 'text'];
const THEME_VARIANT = ['elevation_0', 'elevation_1', 'elevation_2', 'elevation_3', 'inverted',
  'text', 'logo', 'appbar', 'snackbar', 'tooltip', 'badge', 'switch_thumb', 'button',
  'primary', 'secondary', 'warn',
  'default', 'title', 'disabled', 'accent_default', 'accent_title', 'accent_disabled'];
const THEME_TYPE_REGEX = new RegExp('(' + THEME_TYPE.join('|').toUpperCase() + ')-(' + THEME_VARIANT.join('|').toUpperCase() + ')-?(0\\.[0-9]{1,2})?', 'g');

const injectedStyles = {};

const parseStyle = (style, theme) => {
  return style.replace(THEME_TYPE_REGEX, (match, type, variant, opacity) => {
    const color = theme[type.toLowerCase()][variant.toLowerCase()];
    return opacity ? rgba(color, opacity) : color;
  });
};

function warnNotFound(themeName) {
  console.warn(`The theme '${themeName}' doesn't exists. You need to register` +
    ' it first in order to use.');
}

function injectStyle(style, spec, styleId) {
  if (createNewStyleElement) {
    style = parseStyle(style, spec);
    style = style.replace(/THEME_NAME/g, styleId);

    createNewStyleElement(style, styleId);
  }
}

export default {
  data: {
    currentTheme: null,
    currentBioTheme: null,
    inkRipple: true,
    prefix: 'md-theme-',
    styles: [],
    themes: {
      light: themes.light,
      dark: themes.dark
    }
  },
  watch: {
    styles() {
      this.refreshInjectedStyles();
    }
  },
  methods: {
    useTheme(name) {
      if (name in injectedStyles) {
        return;
      }
      const spec = this.themes[name];

      if (!spec) {
        return warnNotFound(name);
      }

      injectStyle(this.styles.join('\n'), spec, this.prefix + name);

      return injectedStyles[name] = true;
    },
    refreshInjectedStyles() {
      const styles = this.styles.join('\n');
      const prefix = this.prefix;

      Object.keys(injectedStyles).forEach((name) => {
        const spec = this.themes[name];

        injectStyle(styles, spec, prefix + name);
      });
    },
    setCurrentTheme(name) {
      if (name === this.currentTheme) {
        return;
      }
      this.useTheme(name);
      if (this.currentTheme) {
        document.body.classList.remove(this.prefix + this.currentTheme);
      }
      this.currentTheme = name;
      document.body.classList.add(this.prefix + name);
    },
    setBioTheme(color) {
      if (color === 'default' || color === 'bio') {
        return;
      }

      const themeMatch = (/^([a-z]*)?([A-Z][a-z]*)?([0-9]*)$/g).exec(color);
      let themeName = themeMatch[1].toLowerCase();
      if (themeMatch[2]) {
        themeName += `-${themeMatch[2].toLowerCase()}`;
      }
      const themeColor = palette[themeName][themeMatch[3] ? themeMatch[3] : '600'];

      if (changeHtmlMetaColor) {
        changeHtmlMetaColor(themeColor);
      }
      this.setAccentColor(themeColor);
      this.currentBioTheme = color;
    },
    setAccentColor(hexCode) {
      let currentThemePalette = this.themes[this.currentTheme ? this.currentTheme : 'default'];
      currentThemePalette.accent.primary = hexCode;
      currentThemePalette.raised.primary = hexCode;
      currentThemePalette.accent.secondary = hexCode;
      currentThemePalette.raised.secondary = hexCode;
      this.refreshInjectedStyles();
    }
  },
  created() {
    // set the default theme by default
    this.setCurrentTheme('dark');
  }
}
</script>