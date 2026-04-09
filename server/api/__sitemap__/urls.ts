export default defineEventHandler((event) => {
  const baseUrl = 'https://dagsolution.com'
  
  return [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/en`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/me`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/en/me`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
  ]
})
