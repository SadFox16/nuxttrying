// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path' 

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias:{
    '@': resolve(__dirname, '/'), //автоподстановка root url
  },
  css:[ '~/assets/main.scss'], //root css
  postcss: { //tailwindcss настройки
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
