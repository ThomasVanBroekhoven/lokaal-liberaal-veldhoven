/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          50: '#85d7ff',
          100: '#147F7A',
          200: '#147F7A',
          300: '#147F7A',
          400: '#147F7A',
          500: '#147F7A',
          600: '#147F7A',
          700: '#147F7A',
          800: '#147F7A',
          900: '#009eeb'
        },
        secondary: {
          50: '#ecf5ff',
          100: '#dbebfd',
          200: '#ccddf1',
          300: '#0B509B',
          400: '#0B509B',
          500: '#0B509B',
          600: '#0B509B',
          700: '#0B509B',
          800: '#0B509B',
          900: '#009eeb'
        }
      },
      screens: {
        xs: '480px' // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
