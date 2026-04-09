<script setup lang="ts">
import { ArrowRight, MapPin, Award, Rocket, Brain } from 'lucide-vue-next'

const quickStats = [
  { icon: Award, value: '2x', label: 'Teknofest Finalist' },
  { icon: Rocket, value: '10.', label: 'Teknofest 2022' },
  { icon: Brain, value: 'AI/ML', label: 'Uzmanı' },
]

const achievements = [
  {
    title: 'Teknofest 2024 Finalist',
    desc: 'FEC Takımı - Otonom Yönlendirmeli Araç (AGV)',
  },
  {
    title: 'Teknofest 2022 İlk 10',
    desc: 'Prometheus - YOLOv5 Derin Öğrenme',
  },
  {
    title: 'Sakarya Belediyesi Ödülü',
    desc: 'Görme Engelliler için RFID Navigasyon',
  },
]
</script>

<template>
  <section id="about" class="section-padding bg-background-card/30">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Hakkımda <span class="gradient-text">& Başarılarım</span>
          </h2>
          <p class="text-text-secondary mb-4">
            Sakarya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yapay zeka, bilgisayarli görü ve gömülü sistemler alanlarında uzmanlaştım. Venhancer, Yeditek ve ESTER gibi şirketlerde staj yaparak deneyim kazandım.
          </p>
          <p class="text-text-secondary mb-6">
            TÜBİTAK ARDEB bursiyeri olarak AI-Powered Arrhythmia Detection System projesini tamamladım. Teknofest yarışmalarında FEC ve Prometheus takımlarıyla finalist ve ilk 10 oldum. Şu anda yüksek lisans eğitimime devam ediyor ve freelance yazılım projeleri geliştiriyorum.
          </p>
          <NuxtLink href="/me" class="btn-primary">
            Detaylı Portföyüm
            <ArrowRight class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>

        <div class="space-y-6">
          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-4">
            <div v-for="stat in quickStats" :key="stat.label" class="card text-center py-5">
              <component :is="stat.icon" class="w-6 h-6 text-accent-blue mx-auto mb-2" />
              <div class="text-xl font-bold text-text-primary">{{ stat.value }}</div>
              <div class="text-xs text-text-muted">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Location -->
          <div class="card flex items-center gap-4">
            <MapPin class="w-6 h-6 text-accent-blue shrink-0" />
            <div>
              <div class="font-medium text-text-primary">Bursa / Sakarya, Türkiye</div>
              <div class="text-sm text-text-muted">Freelance çalışıyorum</div>
            </div>
          </div>

          <!-- Achievements preview -->
          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider">Öne Çıkan Başarılar</h3>
            <div 
              v-for="(achievement, index) in achievements" 
              :key="index"
              class="card py-4 flex items-center gap-4"
            >
              <div class="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center shrink-0">
                <Award class="w-5 h-5 text-accent-orange" />
              </div>
              <div>
                <div class="font-medium text-text-primary">{{ achievement.title }}</div>
                <div class="text-xs text-text-muted">{{ achievement.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
