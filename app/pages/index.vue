<script setup lang="ts">
useHead({
  title: 'DAGSolution - Yazılım Çözümleri',
  meta: [
    { name: 'description', content: 'DAGSolution - Modern yazılım çözümleri, mobil uygulamalar ve AI sistemleri. Mustafa Biçer tarafından kuruldu.' },
    { name: 'keywords', content: 'yazılım, mobil uygulama, AI, makine öğrenmesi, flutter, python, bursa, türkiye' },
    { property: 'og:title', content: 'DAGSolution - Yazılım Çözümleri' },
    { property: 'og:description', content: 'Modern yazılım çözümleri ile dijital dünyada fark yaratın.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:url', content: 'https://dagsolution.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'DAGSolution - Yazılım Çözümleri' },
    { name: 'twitter:description', content: 'Modern yazılım çözümleri ile dijital dünyada fark yaratın.' },
    { name: 'twitter:image', content: '/og-image.png' },
  ],
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeAboutStrip />
    <HomeServicesSection />
    <HomePortfolioSection />
    <HomeContactCTA />
  </div>
</template>
