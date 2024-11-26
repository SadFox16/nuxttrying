// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path' 

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  alias:{
    // '@': resolve(__dirname, '/'), //автоподстановка root url
    assets: "/<rootDir>/assets"
  },

  //root css
  css:[ '~/assets/main.scss'],

  postcss: { //tailwindcss настройки
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // modules: ['@nuxt/content', '@pinia/nuxt']
  modules: ['@nuxt/content']
  // modules: ['@nuxtjs/tailwindcss']
})