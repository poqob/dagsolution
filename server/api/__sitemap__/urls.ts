export default defineEventHandler((event) => {
  const baseUrl = 'https://dagsolution.com'
  const now = new Date().toISOString()
  
  return [
    {
      loc: `${baseUrl}/`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/og-image.svg`,
          caption: 'dağ solution | dag solution - DAGSolution Yazılım Çözümleri',
          title: 'DAGSolution Ana Sayfa'
        }
      ]
    },
    {
      loc: `${baseUrl}/en`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: `${baseUrl}/og-image.svg`,
          caption: 'dağ solution | dag solution - DAGSolution Software Solutions',
          title: 'DAGSolution Home'
        }
      ]
    },
    {
      loc: `${baseUrl}/me`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: 'https://www.gravatar.com/avatar/522c480ffa943deea2beecdcf801a4d8?s=400&d=mp',
          caption: 'Mustafa Biçer - dağ solution kurucu',
          title: 'Mustafa Biçer Profil'
        }
      ]
    },
    {
      loc: `${baseUrl}/en/me`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ]
})
