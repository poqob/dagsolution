<script setup lang="ts">
import { ArrowRight, MapPin, Award, Rocket, Brain } from 'lucide-vue-next'

const quickStats = computed(() => [
  { icon: Award, value: '2x', label: $t('stats.teknofestLabel') },
  { icon: Rocket, value: '10.', label: $t('stats.rankingLabel') },
  { icon: Brain, value: 'AI/ML', label: $t('stats.aiLabel') },
])

const achievements = computed(() => [
  {
    title: $t('about.teknofest2024'),
    desc: $t('about.teknofest2024Desc'),
  },
  {
    title: $t('about.teknofest2022'),
    desc: $t('about.teknofest2022Desc'),
  },
  {
    title: $t('about.award'),
    desc: $t('about.awardDesc'),
  },
])
</script>

<template>
  <section id="about" class="section-padding bg-background-card/30">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            {{ $t('about.title') }} <span class="gradient-text">{{ $t('about.titleAccent') }}</span>
          </h2>
          <p class="text-text-secondary mb-4">
            {{ $t('about.paragraph1') }}
          </p>
          <p class="text-text-secondary mb-6">
            {{ $t('about.paragraph2') }}
          </p>
          <NuxtLink href="/me" class="btn-primary">
            {{ $t('about.viewPortfolio') }}
            <ArrowRight class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>

        <div class="space-y-6">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="stat in quickStats" :key="stat.label" class="card text-center py-5">
              <component :is="stat.icon" class="w-6 h-6 text-accent-blue mx-auto mb-2" />
              <div class="text-xl font-bold text-text-primary">{{ stat.value }}</div>
              <div class="text-xs text-text-muted">{{ stat.label }}</div>
            </div>
          </div>

          <div class="card flex items-center gap-4">
            <MapPin class="w-6 h-6 text-accent-blue shrink-0" />
            <div>
              <div class="font-medium text-text-primary">{{ $t('about.location') }}</div>
              <div class="text-sm text-text-muted">{{ $t('about.freelance') }}</div>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider">{{ $t('about.achievements') }}</h3>
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
