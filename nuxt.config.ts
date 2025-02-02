// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src/',
  css: [
    '@/assets/sass/_base.sass'
  ],
})
