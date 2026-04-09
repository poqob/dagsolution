// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://dagsolution.com',
    name: 'DAGSolution - Yazılım Çözümleri',
  },

  sitemap: {
    siteUrl: 'https://dagsolution.com',
    sources: ['/api/__sitemap__/urls'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      title: 'DAGSolution - Yazılım Çözümleri',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'DAGSolution - Modern yazılım çözümleri, mobil uygulamalar ve AI sistemleri. Mustafa Biçer tarafından kuruldu.' },
        { name: 'theme-color', content: '#09090b' },
        { name: 'author', content: 'Mustafa Biçer' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'DAGSolution' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dagsolution.com' },
        { property: 'og:locale', content: 'tr_TR' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@dagsolution' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        { rel: 'canonical', href: 'https://dagsolution.com' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
  },

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/me'],
    },
  },
})
