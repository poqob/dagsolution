// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  site: {
    url: 'https://dagsolution.com',
    name: 'dağ solution | dag solution - DAGSolution Yazılım Çözümleri',
  },

  sitemap: {
    siteUrl: 'https://dagsolution.com',
    sources: ['/api/__sitemap__/urls'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      title: 'dağ solution | dag solution - DAGSolution Yazılım Çözümleri | AI, Mobil, IoT',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'dağ solution, dag solution olarak da bilinen DAGSolution. Bursa/Sakarya merkezli yazılım şirketi. AI, mobil uygulama geliştirme ve IoT çözümleri. Mustafa Biçer tarafından kuruldu.' },
        { name: 'keywords', content: 'dağ solution, dag solution, dagsolution, dağsolution, yazılım şirketi, mobil uygulama, AI, makine öğrenmesi, flutter, python, bursa, sakarya, türkiye' },
        { name: 'theme-color', content: '#09090b' },
        { name: 'author', content: 'Mustafa Biçer' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { property: 'og:site_name', content: 'dağ solution | dag solution - DAGSolution' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dagsolution.com' },
        { property: 'og:locale', content: 'tr_TR' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@dagsolution' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        { rel: 'canonical', href: 'https://dagsolution.com' },
        { rel: 'alternate', hreflang: 'tr', href: 'https://dagsolution.com' },
        { rel: 'alternate', hreflang: 'en', href: 'https://dagsolution.com/en' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://dagsolution.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://dagsolution.com/#organization',
                'name': 'DAGSolution',
                'alternateName': ['dağ solution', 'dag solution', 'dagsolution', 'dağsolution'],
                'url': 'https://dagsolution.com',
                'logo': 'https://dagsolution.com/images/dagsolution-logo.png',
                'description': 'dağ solution, dag solution olarak da bilinen DAGSolution. AI, IoT ve mobil teknolojiler ile kurumsal ve kişisel yazılım çözümleri.',
                'founder': {
                  '@type': 'Person',
                  'name': 'Mustafa Biçer',
                  'jobTitle': 'Computer Engineer & AI Specialist',
                  'email': 'mustafa@dagsolution.com',
                  'url': 'https://dagsolution.com/me',
                  'sameAs': [
                    'https://github.com/poqob',
                    'https://www.linkedin.com/in/mustafa-biçer-7164221b4'
                  ]
                },
                'areaServed': {
                  '@type': 'Country',
                  'name': 'Turkey'
                },
                'contactPoint': {
                  '@type': 'ContactPoint',
                  'email': 'mustafa@dagsolution.com',
                  'contactType': 'customer service'
                },
                'sameAs': [
                  'https://github.com/poqob',
                  'https://www.linkedin.com/in/mustafa-biçer-7164221b4'
                ]
              },
              {
                '@type': 'WebSite',
                '@id': 'https://dagsolution.com/#website',
                'url': 'https://dagsolution.com',
                'name': 'dağ solution | dag solution - DAGSolution',
                'publisher': { '@id': 'https://dagsolution.com/#organization' },
                'potentialAction': {
                  '@type': 'SearchAction',
                  'target': 'https://dagsolution.com/me?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@type': 'WebPage',
                '@id': 'https://dagsolution.com/#webpage',
                'url': 'https://dagsolution.com',
                'name': 'dağ solution | dag solution - DAGSolution Yazılım Çözümleri',
                'isPartOf': { '@id': 'https://dagsolution.com/#website' },
                'about': { '@id': 'https://dagsolution.com/#organization' },
                'description': 'dağ solution, dag solution olarak da bilinen DAGSolution. Bursa/Sakarya merkezli yazılım şirketi. AI, mobil uygulama geliştirme ve IoT çözümleri.'
              },
              {
                '@type': 'SoftwareApplication',
                'name': 'QR Master',
                'applicationCategory': 'MobileApplication',
                'operatingSystem': 'Android',
                'offers': {
                  '@type': 'Offer',
                  'price': '0',
                  'priceCurrency': 'USD'
                },
                'aggregateRating': {
                  '@type': 'AggregateRating',
                  'ratingValue': '4.5',
                  'ratingCount': '100'
                },
                'url': 'https://play.google.com/store/apps/details?id=com.dag.qr_2026'
              },
              {
                '@type': 'SoftwareApplication',
                'name': 'Talkie: WIFI Walkie Talkie',
                'applicationCategory': 'MobileApplication',
                'operatingSystem': 'Android',
                'offers': {
                  '@type': 'Offer',
                  'price': '0',
                  'priceCurrency': 'USD'
                },
                'url': 'https://play.google.com/store/apps/details?id=com.dag.ptt_2026'
              },
              {
                '@type': 'SoftwareApplication',
                'name': 'KDV 2026',
                'applicationCategory': 'MobileApplication',
                'operatingSystem': 'Android',
                'offers': {
                  '@type': 'Offer',
                  'price': '0',
                  'priceCurrency': 'USD'
                },
                'url': 'https://play.google.com/store/apps/details?id=com.dag.kdv_2026'
              },
              {
                '@type': 'Person',
                '@id': 'https://dagsolution.com/me/#person',
                'name': 'Mustafa Biçer',
                'jobTitle': 'Computer Engineer & AI Specialist',
                'description': 'Yazılım dünyasında sürekli öğrenen ve kendini geliştiren bir mühendis. Yapay zeka, gömülü sistemler ve modern web teknolojileri ile ilgileniyorum.',
                'url': 'https://dagsolution.com/me',
                'image': 'https://avatars.githubusercontent.com/u/62916167?v=4',
                'sameAs': [
                  'https://github.com/poqob',
                  'https://www.linkedin.com/in/mustafa-biçer-7164221b4'
                ],
                'alumniOf': [
                  {
                    '@type': 'CollegeOrUniversity',
                    'name': 'Sakarya Üniversitesi',
                    'department': 'Bilgisayar Mühendisliği'
                  }
                ],
                'knowsAbout': ['Artificial Intelligence', 'Machine Learning', 'Mobile Development', 'Flutter', 'Python', 'IoT', 'Computer Vision', 'YOLO', 'LLM', 'RAG'],
                'award': ['Teknofest 2024 Finalist', 'Teknofest 2022 First 10', 'TÜBİTAK ARDEB Grant']
              }
            ]
          })
        }
      ]
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
      routes: ['/', '/me'],
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        'lucide-vue-next',
      ]
    }
  },
})
