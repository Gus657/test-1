import { _ as __vue_normalize__ } from './normalize-component-ea49d1b5.js';
import { _ as __vue_create_injector__ } from './browser-e4cbaf23.js';

//
//
const MdLayout = {
  name: 'md-layout',
  props: {
    mdTag: {
      type: String,
      default: 'div'
    },
    mdRow: Boolean,
    mdRowXsmall: Boolean,
    mdRowSmall: Boolean,
    mdRowMedium: Boolean,
    mdRowLarge: Boolean,
    mdRowXlarge: Boolean,
    mdColumn: Boolean,
    mdColumnXsmall: Boolean,
    mdColumnSmall: Boolean,
    mdColumnMedium: Boolean,
    mdColumnLarge: Boolean,
    mdColumnXlarge: Boolean,
    mdHideXsmall: Boolean,
    mdHideSmall: Boolean,
    mdHideMedium: Boolean,
    mdHideLarge: Boolean,
    mdHideXlarge: Boolean,
    mdHideXsmallAndUp: Boolean,
    mdHideSmallAndUp: Boolean,
    mdHideMediumAndUp: Boolean,
    mdHideLargeAndUp: Boolean,
    mdHideXlargeAndUp: Boolean,
    mdGutter: [String, Number, Boolean],
    mdAlign: String,
    mdAlignXsmall: String,
    mdAlignSmall: String,
    mdAlignMedium: String,
    mdAlignLarge: String,
    mdAlignXlarge: String,
    mdVerticalAlign: String,
    mdVerticalAlignXsmall: String,
    mdVerticalAlignSmall: String,
    mdVerticalAlignMedium: String,
    mdVerticalAlignLarge: String,
    mdVerticalAlignXlarge: String,
    mdFlex: [String, Number, Boolean],
    mdFlexXsmall: [String, Number, Boolean],
    mdFlexSmall: [String, Number, Boolean],
    mdFlexMedium: [String, Number, Boolean],
    mdFlexLarge: [String, Number, Boolean],
    mdFlexXlarge: [String, Number, Boolean],
    mdFlexOffset: [String, Number, Boolean],
    mdFlexOffsetXsmall: [String, Number, Boolean],
    mdFlexOffsetSmall: [String, Number, Boolean],
    mdFlexOffsetMedium: [String, Number, Boolean],
    mdFlexOffsetLarge: [String, Number, Boolean],
    mdFlexOffsetXlarge: [String, Number, Boolean]
  },
  computed: {
    classes() {
      let classes = {
        'md-row': this.mdRow,
        'md-row-xsmall': this.mdRowXsmall,
        'md-row-small': this.mdRowSmall,
        'md-row-medium': this.mdRowMedium,
        'md-row-large': this.mdRowLarge,
        'md-row-xlarge': this.mdRowXlarge,
        'md-column': this.mdColumn,
        'md-column-xsmall': this.mdColumnXsmall,
        'md-column-small': this.mdColumnSmall,
        'md-column-medium': this.mdColumnMedium,
        'md-column-large': this.mdColumnLarge,
        'md-column-xlarge': this.mdColumnXlarge,
        'md-hide-xsmall': this.mdHideXsmall,
        'md-hide-small': this.mdHideSmall,
        'md-hide-medium': this.mdHideMedium,
        'md-hide-large': this.mdHideLarge,
        'md-hide-xlarge': this.mdHideXlarge,
        'md-hide-xsmall-and-up': this.mdHideXsmallAndUp,
        'md-hide-small-and-up': this.mdHideSmallAndUp,
        'md-hide-medium-and-up': this.mdHideMediumAndUp,
        'md-hide-large-and-up': this.mdHideLargeAndUp,
        'md-hide-xlarge-and-up': this.mdHideXlargeAndUp
      };

      if (this.mdGutter) {
        if (typeof this.mdGutter === 'boolean') {
          classes['md-gutter'] = true;
        } else if (this.mdGutter) {
          classes['md-gutter-' + this.mdGutter] = true;
        }
      }
      /* Flex */


      this.generatePropClasses('md-flex', '', 'mdFlex', classes);
      this.generatePropClasses('md-flex', 'xsmall', 'mdFlexXsmall', classes);
      this.generatePropClasses('md-flex', 'small', 'mdFlexSmall', classes);
      this.generatePropClasses('md-flex', 'medium', 'mdFlexMedium', classes);
      this.generatePropClasses('md-flex', 'large', 'mdFlexLarge', classes);
      this.generatePropClasses('md-flex', 'xlarge', 'mdFlexXlarge', classes);
      /* Flex Offset */

      this.generatePropClasses('md-flex-offset', '', 'mdFlexOffset', classes);
      this.generatePropClasses('md-flex-offset', 'xsmall', 'mdFlexOffsetXsmall', classes);
      this.generatePropClasses('md-flex-offset', 'small', 'mdFlexOffsetSmall', classes);
      this.generatePropClasses('md-flex-offset', 'medium', 'mdFlexOffsetMedium', classes);
      this.generatePropClasses('md-flex-offset', 'large', 'mdFlexOffsetLarge', classes);
      this.generatePropClasses('md-flex-offset', 'xlarge', 'mdFlexOffsetXlarge', classes);
      /* Horizontal Alignment */

      this.generatePropClasses('md-align', '', 'mdAlign', classes);
      this.generatePropClasses('md-align', 'xsmall', 'mdAlignXsmall', classes);
      this.generatePropClasses('md-align', 'small', 'mdAlignSmall', classes);
      this.generatePropClasses('md-align', 'medium', 'mdAlignMedium', classes);
      this.generatePropClasses('md-align', 'large', 'mdAlignLarge', classes);
      this.generatePropClasses('md-align', 'xlarge', 'mdAlignXlarge', classes);
      /* Vertical Alignment */

      this.generatePropClasses('md-vertical-align', '', 'mdVerticalAlign', classes);
      this.generatePropClasses('md-vertical-align', 'xsmall', 'mdVerticalAlignXsmall', classes);
      this.generatePropClasses('md-vertical-align', 'small', 'mdVerticalAlignSmall', classes);
      this.generatePropClasses('md-vertical-align', 'medium', 'mdVerticalAlignMedium', classes);
      this.generatePropClasses('md-vertical-align', 'large', 'mdVerticalAlignLarge', classes);
      this.generatePropClasses('md-vertical-align', 'xlarge', 'mdVerticalAlignXlarge', classes);
      return classes;
    }

  },
  methods: {
    generatePropClasses(prop, size, name, object) {
      if (size) {
        size = '-' + size;
      }

      if (this[name]) {
        if (typeof this[name] === 'boolean') {
          if (!this[name]) {
            object[prop + size + '-none'] = true;
          } else {
            object[prop + size] = true;
          }
        } else {
          object[prop + size + '-' + this[name]] = true;
        }
      }
    }

  },

  render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-layout',
      class: this.classes
    }, this.$slots.default);
  }

};

/* script */
const __vue_script__ = MdLayout;
/* template */

/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-777cd3b9_0", {
    source: ".md-layout{display:flex;flex-direction:row;flex-wrap:wrap;flex:1}.md-row{flex-direction:row}.md-column{flex-direction:column}.md-layout.md-container{width:100%;max-width:1200px}.md-layout.md-container.md-centered{margin:0 auto}.md-align-start{justify-content:flex-start}.md-align-center{justify-content:center}.md-align-end{justify-content:flex-end}.md-vertical-align-start{align-items:flex-start;align-content:flex-start}.md-vertical-align-center{align-items:center;align-content:center}.md-vertical-align-end{align-items:flex-end;align-content:flex-end}.md-vertical-align-stretch{align-items:stretch;align-content:stretch}.md-gutter:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter .md-column>.md-layout{padding-top:12px;padding-bottom:12px}@media (max-width:944px){.md-gutter:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter .md-column>.md-layout{padding-top:8px;padding-bottom:8px}}.md-gutter-8:not(.md-column){margin-right:-4px;margin-left:-4px}.md-gutter-8:not(.md-column)>.md-layout{padding-right:4px;padding-left:4px}.md-gutter-8 .md-column{margin-top:-4px;margin-bottom:-4px}.md-gutter-8 .md-column>.md-layout{padding-top:4px;padding-bottom:4px}.md-gutter-16:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter-16:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter-16 .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter-16 .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-gutter-24:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter-24:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter-24 .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter-24 .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-40:not(.md-column){margin-right:-20px;margin-left:-20px}.md-gutter-40:not(.md-column)>.md-layout{padding-right:20px;padding-left:20px}.md-gutter-40 .md-column{margin-top:-20px;margin-bottom:-20px}.md-gutter-40 .md-column>.md-layout{padding-top:20px;padding-bottom:20px}.md-flex{flex:1 1}.md-flex-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-33{margin-left:33.33333%}.md-flex-offset-66{margin-left:66.66666%}.md-flex-5{min-width:5%;flex:0 1 5%}.md-flex-offset-5{margin-left:5%}.md-flex-10{min-width:10%;flex:0 1 10%}.md-flex-offset-10{margin-left:10%}.md-flex-15{min-width:15%;flex:0 1 15%}.md-flex-offset-15{margin-left:15%}.md-flex-20{min-width:20%;flex:0 1 20%}.md-flex-offset-20{margin-left:20%}.md-flex-25{min-width:25%;flex:0 1 25%}.md-flex-offset-25{margin-left:25%}.md-flex-30{min-width:30%;flex:0 1 30%}.md-flex-offset-30{margin-left:30%}.md-flex-35{min-width:35%;flex:0 1 35%}.md-flex-offset-35{margin-left:35%}.md-flex-40{min-width:40%;flex:0 1 40%}.md-flex-offset-40{margin-left:40%}.md-flex-45{min-width:45%;flex:0 1 45%}.md-flex-offset-45{margin-left:45%}.md-flex-50{min-width:50%;flex:0 1 50%}.md-flex-offset-50{margin-left:50%}.md-flex-55{min-width:55%;flex:0 1 55%}.md-flex-offset-55{margin-left:55%}.md-flex-60{min-width:60%;flex:0 1 60%}.md-flex-offset-60{margin-left:60%}.md-flex-65{min-width:65%;flex:0 1 65%}.md-flex-offset-65{margin-left:65%}.md-flex-70{min-width:70%;flex:0 1 70%}.md-flex-offset-70{margin-left:70%}.md-flex-75{min-width:75%;flex:0 1 75%}.md-flex-offset-75{margin-left:75%}.md-flex-80{min-width:80%;flex:0 1 80%}.md-flex-offset-80{margin-left:80%}.md-flex-85{min-width:85%;flex:0 1 85%}.md-flex-offset-85{margin-left:85%}.md-flex-90{min-width:90%;flex:0 1 90%}.md-flex-offset-90{margin-left:90%}.md-flex-95{min-width:95%;flex:0 1 95%}.md-flex-offset-95{margin-left:95%}.md-flex-100{min-width:100%;flex:0 1 100%}.md-flex-offset-100{margin-left:100%}@media (min-width:1904px){.md-row-xlarge{flex-direction:row}.md-column-xlarge{flex-direction:column}.md-flex-xlarge{flex:1 1}.md-flex-xlarge-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-xlarge-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-xlarge-33{margin-left:33.33333%}.md-flex-offset-xlarge-66{margin-left:66.66666%}.md-flex-xlarge-5{min-width:5%;flex:0 1 5%}.md-flex-offset-xlarge-5{margin-left:5%}.md-flex-xlarge-10{min-width:10%;flex:0 1 10%}.md-flex-offset-xlarge-10{margin-left:10%}.md-flex-xlarge-15{min-width:15%;flex:0 1 15%}.md-flex-offset-xlarge-15{margin-left:15%}.md-flex-xlarge-20{min-width:20%;flex:0 1 20%}.md-flex-offset-xlarge-20{margin-left:20%}.md-flex-xlarge-25{min-width:25%;flex:0 1 25%}.md-flex-offset-xlarge-25{margin-left:25%}.md-flex-xlarge-30{min-width:30%;flex:0 1 30%}.md-flex-offset-xlarge-30{margin-left:30%}.md-flex-xlarge-35{min-width:35%;flex:0 1 35%}.md-flex-offset-xlarge-35{margin-left:35%}.md-flex-xlarge-40{min-width:40%;flex:0 1 40%}.md-flex-offset-xlarge-40{margin-left:40%}.md-flex-xlarge-45{min-width:45%;flex:0 1 45%}.md-flex-offset-xlarge-45{margin-left:45%}.md-flex-xlarge-50{min-width:50%;flex:0 1 50%}.md-flex-offset-xlarge-50{margin-left:50%}.md-flex-xlarge-55{min-width:55%;flex:0 1 55%}.md-flex-offset-xlarge-55{margin-left:55%}.md-flex-xlarge-60{min-width:60%;flex:0 1 60%}.md-flex-offset-xlarge-60{margin-left:60%}.md-flex-xlarge-65{min-width:65%;flex:0 1 65%}.md-flex-offset-xlarge-65{margin-left:65%}.md-flex-xlarge-70{min-width:70%;flex:0 1 70%}.md-flex-offset-xlarge-70{margin-left:70%}.md-flex-xlarge-75{min-width:75%;flex:0 1 75%}.md-flex-offset-xlarge-75{margin-left:75%}.md-flex-xlarge-80{min-width:80%;flex:0 1 80%}.md-flex-offset-xlarge-80{margin-left:80%}.md-flex-xlarge-85{min-width:85%;flex:0 1 85%}.md-flex-offset-xlarge-85{margin-left:85%}.md-flex-xlarge-90{min-width:90%;flex:0 1 90%}.md-flex-offset-xlarge-90{margin-left:90%}.md-flex-xlarge-95{min-width:95%;flex:0 1 95%}.md-flex-offset-xlarge-95{margin-left:95%}.md-flex-xlarge-100{min-width:100%;flex:0 1 100%}.md-flex-offset-xlarge-100{margin-left:100%}.md-align-xlarge-start{justify-content:flex-start}.md-align-xlarge-center{justify-content:center}.md-align-xlarge-end{justify-content:flex-end}.md-hide-xlarge{display:none}}@media (max-width:1903px){.md-row-large{flex-direction:row}.md-column-large{flex-direction:column}.md-flex-large{flex:1 1}.md-flex-large-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-large-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-large-33{margin-left:33.33333%}.md-flex-offset-large-66{margin-left:66.66666%}.md-flex-large-5{min-width:5%;flex:0 1 5%}.md-flex-offset-large-5{margin-left:5%}.md-flex-large-10{min-width:10%;flex:0 1 10%}.md-flex-offset-large-10{margin-left:10%}.md-flex-large-15{min-width:15%;flex:0 1 15%}.md-flex-offset-large-15{margin-left:15%}.md-flex-large-20{min-width:20%;flex:0 1 20%}.md-flex-offset-large-20{margin-left:20%}.md-flex-large-25{min-width:25%;flex:0 1 25%}.md-flex-offset-large-25{margin-left:25%}.md-flex-large-30{min-width:30%;flex:0 1 30%}.md-flex-offset-large-30{margin-left:30%}.md-flex-large-35{min-width:35%;flex:0 1 35%}.md-flex-offset-large-35{margin-left:35%}.md-flex-large-40{min-width:40%;flex:0 1 40%}.md-flex-offset-large-40{margin-left:40%}.md-flex-large-45{min-width:45%;flex:0 1 45%}.md-flex-offset-large-45{margin-left:45%}.md-flex-large-50{min-width:50%;flex:0 1 50%}.md-flex-offset-large-50{margin-left:50%}.md-flex-large-55{min-width:55%;flex:0 1 55%}.md-flex-offset-large-55{margin-left:55%}.md-flex-large-60{min-width:60%;flex:0 1 60%}.md-flex-offset-large-60{margin-left:60%}.md-flex-large-65{min-width:65%;flex:0 1 65%}.md-flex-offset-large-65{margin-left:65%}.md-flex-large-70{min-width:70%;flex:0 1 70%}.md-flex-offset-large-70{margin-left:70%}.md-flex-large-75{min-width:75%;flex:0 1 75%}.md-flex-offset-large-75{margin-left:75%}.md-flex-large-80{min-width:80%;flex:0 1 80%}.md-flex-offset-large-80{margin-left:80%}.md-flex-large-85{min-width:85%;flex:0 1 85%}.md-flex-offset-large-85{margin-left:85%}.md-flex-large-90{min-width:90%;flex:0 1 90%}.md-flex-offset-large-90{margin-left:90%}.md-flex-large-95{min-width:95%;flex:0 1 95%}.md-flex-offset-large-95{margin-left:95%}.md-flex-large-100{min-width:100%;flex:0 1 100%}.md-flex-offset-large-100{margin-left:100%}.md-align-large-start{justify-content:flex-start}.md-align-large-center{justify-content:center}.md-align-large-end{justify-content:flex-end}.md-hide-large{display:none}}@media (max-width:1264px){.md-row-medium{flex-direction:row}.md-column-medium{flex-direction:column}.md-flex-medium{flex:1 1}.md-flex-medium-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-medium-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-medium-33{margin-left:33.33333%}.md-flex-offset-medium-66{margin-left:66.66666%}.md-flex-medium-5{min-width:5%;flex:0 1 5%}.md-flex-offset-medium-5{margin-left:5%}.md-flex-medium-10{min-width:10%;flex:0 1 10%}.md-flex-offset-medium-10{margin-left:10%}.md-flex-medium-15{min-width:15%;flex:0 1 15%}.md-flex-offset-medium-15{margin-left:15%}.md-flex-medium-20{min-width:20%;flex:0 1 20%}.md-flex-offset-medium-20{margin-left:20%}.md-flex-medium-25{min-width:25%;flex:0 1 25%}.md-flex-offset-medium-25{margin-left:25%}.md-flex-medium-30{min-width:30%;flex:0 1 30%}.md-flex-offset-medium-30{margin-left:30%}.md-flex-medium-35{min-width:35%;flex:0 1 35%}.md-flex-offset-medium-35{margin-left:35%}.md-flex-medium-40{min-width:40%;flex:0 1 40%}.md-flex-offset-medium-40{margin-left:40%}.md-flex-medium-45{min-width:45%;flex:0 1 45%}.md-flex-offset-medium-45{margin-left:45%}.md-flex-medium-50{min-width:50%;flex:0 1 50%}.md-flex-offset-medium-50{margin-left:50%}.md-flex-medium-55{min-width:55%;flex:0 1 55%}.md-flex-offset-medium-55{margin-left:55%}.md-flex-medium-60{min-width:60%;flex:0 1 60%}.md-flex-offset-medium-60{margin-left:60%}.md-flex-medium-65{min-width:65%;flex:0 1 65%}.md-flex-offset-medium-65{margin-left:65%}.md-flex-medium-70{min-width:70%;flex:0 1 70%}.md-flex-offset-medium-70{margin-left:70%}.md-flex-medium-75{min-width:75%;flex:0 1 75%}.md-flex-offset-medium-75{margin-left:75%}.md-flex-medium-80{min-width:80%;flex:0 1 80%}.md-flex-offset-medium-80{margin-left:80%}.md-flex-medium-85{min-width:85%;flex:0 1 85%}.md-flex-offset-medium-85{margin-left:85%}.md-flex-medium-90{min-width:90%;flex:0 1 90%}.md-flex-offset-medium-90{margin-left:90%}.md-flex-medium-95{min-width:95%;flex:0 1 95%}.md-flex-offset-medium-95{margin-left:95%}.md-flex-medium-100{min-width:100%;flex:0 1 100%}.md-flex-offset-medium-100{margin-left:100%}.md-align-medium-start{justify-content:flex-start}.md-align-medium-center{justify-content:center}.md-align-medium-end{justify-content:flex-end}.md-hide-medium{display:none}}@media (max-width:944px){.md-row-small{flex-direction:row}.md-column-small{flex-direction:column}.md-flex-small{flex:1 1}.md-flex-small-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-small-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-small-33{margin-left:33.33333%}.md-flex-offset-small-66{margin-left:66.66666%}.md-flex-small-5{min-width:5%;flex:0 1 5%}.md-flex-offset-small-5{margin-left:5%}.md-flex-small-10{min-width:10%;flex:0 1 10%}.md-flex-offset-small-10{margin-left:10%}.md-flex-small-15{min-width:15%;flex:0 1 15%}.md-flex-offset-small-15{margin-left:15%}.md-flex-small-20{min-width:20%;flex:0 1 20%}.md-flex-offset-small-20{margin-left:20%}.md-flex-small-25{min-width:25%;flex:0 1 25%}.md-flex-offset-small-25{margin-left:25%}.md-flex-small-30{min-width:30%;flex:0 1 30%}.md-flex-offset-small-30{margin-left:30%}.md-flex-small-35{min-width:35%;flex:0 1 35%}.md-flex-offset-small-35{margin-left:35%}.md-flex-small-40{min-width:40%;flex:0 1 40%}.md-flex-offset-small-40{margin-left:40%}.md-flex-small-45{min-width:45%;flex:0 1 45%}.md-flex-offset-small-45{margin-left:45%}.md-flex-small-50{min-width:50%;flex:0 1 50%}.md-flex-offset-small-50{margin-left:50%}.md-flex-small-55{min-width:55%;flex:0 1 55%}.md-flex-offset-small-55{margin-left:55%}.md-flex-small-60{min-width:60%;flex:0 1 60%}.md-flex-offset-small-60{margin-left:60%}.md-flex-small-65{min-width:65%;flex:0 1 65%}.md-flex-offset-small-65{margin-left:65%}.md-flex-small-70{min-width:70%;flex:0 1 70%}.md-flex-offset-small-70{margin-left:70%}.md-flex-small-75{min-width:75%;flex:0 1 75%}.md-flex-offset-small-75{margin-left:75%}.md-flex-small-80{min-width:80%;flex:0 1 80%}.md-flex-offset-small-80{margin-left:80%}.md-flex-small-85{min-width:85%;flex:0 1 85%}.md-flex-offset-small-85{margin-left:85%}.md-flex-small-90{min-width:90%;flex:0 1 90%}.md-flex-offset-small-90{margin-left:90%}.md-flex-small-95{min-width:95%;flex:0 1 95%}.md-flex-offset-small-95{margin-left:95%}.md-flex-small-100{min-width:100%;flex:0 1 100%}.md-flex-offset-small-100{margin-left:100%}.md-align-small-start{justify-content:flex-start}.md-align-small-center{justify-content:center}.md-align-small-end{justify-content:flex-end}.md-hide-small{display:none}}@media (max-width:600px){.md-row-xsmall{flex-direction:row}.md-column-xsmall{flex-direction:column}.md-flex-xsmall{flex:1 1}.md-flex-xsmall-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-xsmall-33{margin-left:33.33333%}.md-flex-offset-xsmall-66{margin-left:66.66666%}.md-flex-xsmall-5{min-width:5%;flex:0 1 5%}.md-flex-offset-xsmall-5{margin-left:5%}.md-flex-xsmall-10{min-width:10%;flex:0 1 10%}.md-flex-offset-xsmall-10{margin-left:10%}.md-flex-xsmall-15{min-width:15%;flex:0 1 15%}.md-flex-offset-xsmall-15{margin-left:15%}.md-flex-xsmall-20{min-width:20%;flex:0 1 20%}.md-flex-offset-xsmall-20{margin-left:20%}.md-flex-xsmall-25{min-width:25%;flex:0 1 25%}.md-flex-offset-xsmall-25{margin-left:25%}.md-flex-xsmall-30{min-width:30%;flex:0 1 30%}.md-flex-offset-xsmall-30{margin-left:30%}.md-flex-xsmall-35{min-width:35%;flex:0 1 35%}.md-flex-offset-xsmall-35{margin-left:35%}.md-flex-xsmall-40{min-width:40%;flex:0 1 40%}.md-flex-offset-xsmall-40{margin-left:40%}.md-flex-xsmall-45{min-width:45%;flex:0 1 45%}.md-flex-offset-xsmall-45{margin-left:45%}.md-flex-xsmall-50{min-width:50%;flex:0 1 50%}.md-flex-offset-xsmall-50{margin-left:50%}.md-flex-xsmall-55{min-width:55%;flex:0 1 55%}.md-flex-offset-xsmall-55{margin-left:55%}.md-flex-xsmall-60{min-width:60%;flex:0 1 60%}.md-flex-offset-xsmall-60{margin-left:60%}.md-flex-xsmall-65{min-width:65%;flex:0 1 65%}.md-flex-offset-xsmall-65{margin-left:65%}.md-flex-xsmall-70{min-width:70%;flex:0 1 70%}.md-flex-offset-xsmall-70{margin-left:70%}.md-flex-xsmall-75{min-width:75%;flex:0 1 75%}.md-flex-offset-xsmall-75{margin-left:75%}.md-flex-xsmall-80{min-width:80%;flex:0 1 80%}.md-flex-offset-xsmall-80{margin-left:80%}.md-flex-xsmall-85{min-width:85%;flex:0 1 85%}.md-flex-offset-xsmall-85{margin-left:85%}.md-flex-xsmall-90{min-width:90%;flex:0 1 90%}.md-flex-offset-xsmall-90{margin-left:90%}.md-flex-xsmall-95{min-width:95%;flex:0 1 95%}.md-flex-offset-xsmall-95{margin-left:95%}.md-flex-xsmall-100{min-width:100%;flex:0 1 100%}.md-flex-offset-xsmall-100{margin-left:100%}.md-align-xsmall-start{justify-content:flex-start}.md-align-xsmall-center{justify-content:center}.md-align-xsmall-end{justify-content:flex-end}.md-hide-xsmall{display:none}}@media (min-width:1265px){.md-row-large-and-up{flex-direction:row}.md-column-large-and-up{flex-direction:column}.md-flex-large-and-up{flex:1 1}.md-flex-large-and-up-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-large-and-up-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-large-and-up-33{margin-left:33.33333%}.md-flex-offset-large-and-up-66{margin-left:66.66666%}.md-flex-large-and-up-5{min-width:5%;flex:0 1 5%}.md-flex-offset-large-and-up-5{margin-left:5%}.md-flex-large-and-up-10{min-width:10%;flex:0 1 10%}.md-flex-offset-large-and-up-10{margin-left:10%}.md-flex-large-and-up-15{min-width:15%;flex:0 1 15%}.md-flex-offset-large-and-up-15{margin-left:15%}.md-flex-large-and-up-20{min-width:20%;flex:0 1 20%}.md-flex-offset-large-and-up-20{margin-left:20%}.md-flex-large-and-up-25{min-width:25%;flex:0 1 25%}.md-flex-offset-large-and-up-25{margin-left:25%}.md-flex-large-and-up-30{min-width:30%;flex:0 1 30%}.md-flex-offset-large-and-up-30{margin-left:30%}.md-flex-large-and-up-35{min-width:35%;flex:0 1 35%}.md-flex-offset-large-and-up-35{margin-left:35%}.md-flex-large-and-up-40{min-width:40%;flex:0 1 40%}.md-flex-offset-large-and-up-40{margin-left:40%}.md-flex-large-and-up-45{min-width:45%;flex:0 1 45%}.md-flex-offset-large-and-up-45{margin-left:45%}.md-flex-large-and-up-50{min-width:50%;flex:0 1 50%}.md-flex-offset-large-and-up-50{margin-left:50%}.md-flex-large-and-up-55{min-width:55%;flex:0 1 55%}.md-flex-offset-large-and-up-55{margin-left:55%}.md-flex-large-and-up-60{min-width:60%;flex:0 1 60%}.md-flex-offset-large-and-up-60{margin-left:60%}.md-flex-large-and-up-65{min-width:65%;flex:0 1 65%}.md-flex-offset-large-and-up-65{margin-left:65%}.md-flex-large-and-up-70{min-width:70%;flex:0 1 70%}.md-flex-offset-large-and-up-70{margin-left:70%}.md-flex-large-and-up-75{min-width:75%;flex:0 1 75%}.md-flex-offset-large-and-up-75{margin-left:75%}.md-flex-large-and-up-80{min-width:80%;flex:0 1 80%}.md-flex-offset-large-and-up-80{margin-left:80%}.md-flex-large-and-up-85{min-width:85%;flex:0 1 85%}.md-flex-offset-large-and-up-85{margin-left:85%}.md-flex-large-and-up-90{min-width:90%;flex:0 1 90%}.md-flex-offset-large-and-up-90{margin-left:90%}.md-flex-large-and-up-95{min-width:95%;flex:0 1 95%}.md-flex-offset-large-and-up-95{margin-left:95%}.md-flex-large-and-up-100{min-width:100%;flex:0 1 100%}.md-flex-offset-large-and-up-100{margin-left:100%}.md-align-large-and-up-start{justify-content:flex-start}.md-align-large-and-up-center{justify-content:center}.md-align-large-and-up-end{justify-content:flex-end}.md-hide-large-and-up{display:none}}@media (min-width:945px){.md-row-medium-and-up{flex-direction:row}.md-column-medium-and-up{flex-direction:column}.md-flex-medium-and-up{flex:1 1}.md-flex-medium-and-up-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-medium-and-up-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-medium-and-up-33{margin-left:33.33333%}.md-flex-offset-medium-and-up-66{margin-left:66.66666%}.md-flex-medium-and-up-5{min-width:5%;flex:0 1 5%}.md-flex-offset-medium-and-up-5{margin-left:5%}.md-flex-medium-and-up-10{min-width:10%;flex:0 1 10%}.md-flex-offset-medium-and-up-10{margin-left:10%}.md-flex-medium-and-up-15{min-width:15%;flex:0 1 15%}.md-flex-offset-medium-and-up-15{margin-left:15%}.md-flex-medium-and-up-20{min-width:20%;flex:0 1 20%}.md-flex-offset-medium-and-up-20{margin-left:20%}.md-flex-medium-and-up-25{min-width:25%;flex:0 1 25%}.md-flex-offset-medium-and-up-25{margin-left:25%}.md-flex-medium-and-up-30{min-width:30%;flex:0 1 30%}.md-flex-offset-medium-and-up-30{margin-left:30%}.md-flex-medium-and-up-35{min-width:35%;flex:0 1 35%}.md-flex-offset-medium-and-up-35{margin-left:35%}.md-flex-medium-and-up-40{min-width:40%;flex:0 1 40%}.md-flex-offset-medium-and-up-40{margin-left:40%}.md-flex-medium-and-up-45{min-width:45%;flex:0 1 45%}.md-flex-offset-medium-and-up-45{margin-left:45%}.md-flex-medium-and-up-50{min-width:50%;flex:0 1 50%}.md-flex-offset-medium-and-up-50{margin-left:50%}.md-flex-medium-and-up-55{min-width:55%;flex:0 1 55%}.md-flex-offset-medium-and-up-55{margin-left:55%}.md-flex-medium-and-up-60{min-width:60%;flex:0 1 60%}.md-flex-offset-medium-and-up-60{margin-left:60%}.md-flex-medium-and-up-65{min-width:65%;flex:0 1 65%}.md-flex-offset-medium-and-up-65{margin-left:65%}.md-flex-medium-and-up-70{min-width:70%;flex:0 1 70%}.md-flex-offset-medium-and-up-70{margin-left:70%}.md-flex-medium-and-up-75{min-width:75%;flex:0 1 75%}.md-flex-offset-medium-and-up-75{margin-left:75%}.md-flex-medium-and-up-80{min-width:80%;flex:0 1 80%}.md-flex-offset-medium-and-up-80{margin-left:80%}.md-flex-medium-and-up-85{min-width:85%;flex:0 1 85%}.md-flex-offset-medium-and-up-85{margin-left:85%}.md-flex-medium-and-up-90{min-width:90%;flex:0 1 90%}.md-flex-offset-medium-and-up-90{margin-left:90%}.md-flex-medium-and-up-95{min-width:95%;flex:0 1 95%}.md-flex-offset-medium-and-up-95{margin-left:95%}.md-flex-medium-and-up-100{min-width:100%;flex:0 1 100%}.md-flex-offset-medium-and-up-100{margin-left:100%}.md-align-medium-and-up-start{justify-content:flex-start}.md-align-medium-and-up-center{justify-content:center}.md-align-medium-and-up-end{justify-content:flex-end}.md-hide-medium-and-up{display:none}}@media (min-width:601px){.md-row-small-and-up{flex-direction:row}.md-column-small-and-up{flex-direction:column}.md-flex-small-and-up{flex:1 1}.md-flex-small-and-up-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-small-and-up-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-small-and-up-33{margin-left:33.33333%}.md-flex-offset-small-and-up-66{margin-left:66.66666%}.md-flex-small-and-up-5{min-width:5%;flex:0 1 5%}.md-flex-offset-small-and-up-5{margin-left:5%}.md-flex-small-and-up-10{min-width:10%;flex:0 1 10%}.md-flex-offset-small-and-up-10{margin-left:10%}.md-flex-small-and-up-15{min-width:15%;flex:0 1 15%}.md-flex-offset-small-and-up-15{margin-left:15%}.md-flex-small-and-up-20{min-width:20%;flex:0 1 20%}.md-flex-offset-small-and-up-20{margin-left:20%}.md-flex-small-and-up-25{min-width:25%;flex:0 1 25%}.md-flex-offset-small-and-up-25{margin-left:25%}.md-flex-small-and-up-30{min-width:30%;flex:0 1 30%}.md-flex-offset-small-and-up-30{margin-left:30%}.md-flex-small-and-up-35{min-width:35%;flex:0 1 35%}.md-flex-offset-small-and-up-35{margin-left:35%}.md-flex-small-and-up-40{min-width:40%;flex:0 1 40%}.md-flex-offset-small-and-up-40{margin-left:40%}.md-flex-small-and-up-45{min-width:45%;flex:0 1 45%}.md-flex-offset-small-and-up-45{margin-left:45%}.md-flex-small-and-up-50{min-width:50%;flex:0 1 50%}.md-flex-offset-small-and-up-50{margin-left:50%}.md-flex-small-and-up-55{min-width:55%;flex:0 1 55%}.md-flex-offset-small-and-up-55{margin-left:55%}.md-flex-small-and-up-60{min-width:60%;flex:0 1 60%}.md-flex-offset-small-and-up-60{margin-left:60%}.md-flex-small-and-up-65{min-width:65%;flex:0 1 65%}.md-flex-offset-small-and-up-65{margin-left:65%}.md-flex-small-and-up-70{min-width:70%;flex:0 1 70%}.md-flex-offset-small-and-up-70{margin-left:70%}.md-flex-small-and-up-75{min-width:75%;flex:0 1 75%}.md-flex-offset-small-and-up-75{margin-left:75%}.md-flex-small-and-up-80{min-width:80%;flex:0 1 80%}.md-flex-offset-small-and-up-80{margin-left:80%}.md-flex-small-and-up-85{min-width:85%;flex:0 1 85%}.md-flex-offset-small-and-up-85{margin-left:85%}.md-flex-small-and-up-90{min-width:90%;flex:0 1 90%}.md-flex-offset-small-and-up-90{margin-left:90%}.md-flex-small-and-up-95{min-width:95%;flex:0 1 95%}.md-flex-offset-small-and-up-95{margin-left:95%}.md-flex-small-and-up-100{min-width:100%;flex:0 1 100%}.md-flex-offset-small-and-up-100{margin-left:100%}.md-align-small-and-up-start{justify-content:flex-start}.md-align-small-and-up-center{justify-content:center}.md-align-small-and-up-end{justify-content:flex-end}.md-hide-small-and-up{display:none}}@media (min-width:300px){.md-row-xsmall-and-up{flex-direction:row}.md-column-xsmall-and-up{flex-direction:column}.md-flex-xsmall-and-up{flex:1 1}.md-flex-xsmall-and-up-33{min-width:33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-and-up-66{min-width:33.33333%;flex:0 1 66.66666%}.md-flex-offset-xsmall-and-up-33{margin-left:33.33333%}.md-flex-offset-xsmall-and-up-66{margin-left:66.66666%}.md-flex-xsmall-and-up-5{min-width:5%;flex:0 1 5%}.md-flex-offset-xsmall-and-up-5{margin-left:5%}.md-flex-xsmall-and-up-10{min-width:10%;flex:0 1 10%}.md-flex-offset-xsmall-and-up-10{margin-left:10%}.md-flex-xsmall-and-up-15{min-width:15%;flex:0 1 15%}.md-flex-offset-xsmall-and-up-15{margin-left:15%}.md-flex-xsmall-and-up-20{min-width:20%;flex:0 1 20%}.md-flex-offset-xsmall-and-up-20{margin-left:20%}.md-flex-xsmall-and-up-25{min-width:25%;flex:0 1 25%}.md-flex-offset-xsmall-and-up-25{margin-left:25%}.md-flex-xsmall-and-up-30{min-width:30%;flex:0 1 30%}.md-flex-offset-xsmall-and-up-30{margin-left:30%}.md-flex-xsmall-and-up-35{min-width:35%;flex:0 1 35%}.md-flex-offset-xsmall-and-up-35{margin-left:35%}.md-flex-xsmall-and-up-40{min-width:40%;flex:0 1 40%}.md-flex-offset-xsmall-and-up-40{margin-left:40%}.md-flex-xsmall-and-up-45{min-width:45%;flex:0 1 45%}.md-flex-offset-xsmall-and-up-45{margin-left:45%}.md-flex-xsmall-and-up-50{min-width:50%;flex:0 1 50%}.md-flex-offset-xsmall-and-up-50{margin-left:50%}.md-flex-xsmall-and-up-55{min-width:55%;flex:0 1 55%}.md-flex-offset-xsmall-and-up-55{margin-left:55%}.md-flex-xsmall-and-up-60{min-width:60%;flex:0 1 60%}.md-flex-offset-xsmall-and-up-60{margin-left:60%}.md-flex-xsmall-and-up-65{min-width:65%;flex:0 1 65%}.md-flex-offset-xsmall-and-up-65{margin-left:65%}.md-flex-xsmall-and-up-70{min-width:70%;flex:0 1 70%}.md-flex-offset-xsmall-and-up-70{margin-left:70%}.md-flex-xsmall-and-up-75{min-width:75%;flex:0 1 75%}.md-flex-offset-xsmall-and-up-75{margin-left:75%}.md-flex-xsmall-and-up-80{min-width:80%;flex:0 1 80%}.md-flex-offset-xsmall-and-up-80{margin-left:80%}.md-flex-xsmall-and-up-85{min-width:85%;flex:0 1 85%}.md-flex-offset-xsmall-and-up-85{margin-left:85%}.md-flex-xsmall-and-up-90{min-width:90%;flex:0 1 90%}.md-flex-offset-xsmall-and-up-90{margin-left:90%}.md-flex-xsmall-and-up-95{min-width:95%;flex:0 1 95%}.md-flex-offset-xsmall-and-up-95{margin-left:95%}.md-flex-xsmall-and-up-100{min-width:100%;flex:0 1 100%}.md-flex-offset-xsmall-and-up-100{margin-left:100%}.md-align-xsmall-and-up-start{justify-content:flex-start}.md-align-xsmall-and-up-center{justify-content:center}.md-align-xsmall-and-up-end{justify-content:flex-end}.md-hide-xsmall-and-up{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = undefined;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/__vue_normalize__({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

export default __vue_component__;
