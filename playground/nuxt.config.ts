export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2025-01-08',
  glaze: {
    // the root element which will be searched for elements
    element: document,
    // the attribute to search for
    dataAttribute: 'data-animate',
    // custom breakpoints
    breakpoints: {
      default: '(min-width: 1px)',
    },
    // defaults for animations
    defaults: {
      tl: 'ease-power2.inOut',
      element: 'to:x-500',
    },
    // custom presets
    presets: {
      helicopter: 'from:rotate-2160|duration-10',
    },
    // watch elements for changes and restart animations with new settings
    watch: false,
  },
})
