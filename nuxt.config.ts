// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path' 

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // hooks: {
  //   ready: (ctx) => console.log('context of the hook (ready)', ctx) //log to terminal console context of the hook 'ready'
  // },
  // app: {
  //   //adding info to <head> for all pages
  //   head:{
  //     title: 'This is head from config',
  //     meta: [
  //       { 
  //         name: 'description',
  //         content: 'This is learning project to learn Nuxt 3'
  //       }
  //     ]
  //   }
  // },

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
  // ssr: false,
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