export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },
  modules: [
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['echarts', 'vue-echarts']
  },
  plugins: [
    '~/plugins/echarts.js'
  ]
})