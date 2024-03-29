// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Adicionado o caminho para todos os arquivos que vão usar a estilização
  // do Tailwind
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blurred: 'url(/src/assets/img/pages/home/background-home-01.png)',
      },
      //   blurred: 'url(/src/assets/img/pages/home/comp-miriam-m-carrilho-web-4.png)',
      // },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'] 
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
      },
    },
  },
  plugins: [],
}
