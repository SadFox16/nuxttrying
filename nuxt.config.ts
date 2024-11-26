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
  // build: {
  //   transpile: ['pinia-plugin-persistedstate'],
  // },
  // modules: ['@nuxt/content', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt']
  modules: ['@nuxt/content'],
  // modules: ['@nuxtjs/tailwindcss']
  // ssr: true,
  // routeRules: {

  // }
})