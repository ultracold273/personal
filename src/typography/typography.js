import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

import { theme } from "../../_config.json";

// const fontFamily = ["Lora", "Noto Serif SC", "serif"];
// const fontFamily = ["Lora", "Noto Serif SC"];

// Wordpress2016.headerFontFamily = fontFamily;
// Wordpress2016.bodyFontFamily = fontFamily;
Wordpress2016.baseFontSize = "18px";

Wordpress2016.overrideThemeStyles = ({ rhythm }) => ({
  body: {
    color: '#2e3444',
    letterSpacing: '0.01em',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: Wordpress2016.headerFontFamily.join(','),
    fontWeight: '400',
    marginTop: '2rem',
    marginBottom: '1.25rem',
    letterSpacing: '0.01em',
    textTransform: 'none',
  },
  h1: {
    fontSize: '26px',
  },
  h2: {
    fontSize: '22px',
  },
  h3: {
    fontSize: '20px',
  },
  a: {
    boxShadow: `0 1px 0 0 ${theme.color}`,
    color: `${theme.color}`,
    textDecoration: "none",
  },
  p: {
    lineHeight: rhythm(1),
    marginBottom: rhythm(1 / 2),
  },
  blockquote: {
    fontSize: '1rem',
  },
  ul: {
    listStyle: 'square',
  },
  li: {
    lineHeight: rhythm(1),
    marginBottom: '0',
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
