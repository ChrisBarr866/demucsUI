const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
    },
    plugins: [require("daisyui"),
    require('@tailwindcss/forms')],
  
    daisyui: {
      themes: ["light"],
    },
  }
};
