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
          loc: `${baseUrl}/images/dagsolution-logo.png`,
          caption: 'dağ solution | dag solution - DAGSolution Yazılım Çözümleri',
          title: 'DAGSolution Ana Sayfa'
        }
      ]
    },
    {
      loc: `${baseUrl}/me/`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: `${baseUrl}/images/dagsolution-logo.png`,
          caption: 'Mustafa Biçer - dağ solution kurucu',
          title: 'Mustafa Biçer Profil'
        }
      ]
    },
    {
      loc: `${baseUrl}/brand/`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: `${baseUrl}/brand/png/dark-512x512.png`,
          caption: 'DAGSolution Marka Kiti ve Logolar',
          title: 'DAGSolution Marka Kiti'
        }
      ]
    },
  ]
})
