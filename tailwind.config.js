const butikColors = require('./butikColors')

module.exports = {
  purge: [],
  theme: {
    colors: {
      dark: butikColors.charcoal[800], // black
      white: butikColors.white,
      accent: {
        default: butikColors.seaGreen[400],
        dark: butikColors.seaGreen[500],
      },
      danger: {
        light: butikColors.rad[100],
        default: butikColors.rad[400],
        dark: butikColors.rad[700],
      },
      gray: {
        lightest: butikColors.charcoal[100],
        lighter: butikColors.charcoal[200],
        light: butikColors.charcoal[300],
        default: butikColors.charcoal[500],
        dark: butikColors.charcoal[700],
      },
    },
    extend: {
      borderRadius: {
        'xl': '12px',
      }
    },
  },
  variants: {},
  plugins: [],
}
