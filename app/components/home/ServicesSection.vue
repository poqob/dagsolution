<script setup lang="ts">
import { services } from '~/data/content'
import { Smartphone, Globe, Brain, Cpu, Lightbulb, Server } from 'lucide-vue-next'

const { t } = useI18n()

const iconMap: Record<string, any> = {
  Smartphone,
  Globe,
  Brain,
  Cpu,
  Lightbulb,
  Server,
}

const getServiceTitle = (id: string) => t(`services.${id}.title`)
const getServiceDescription = (id: string) => t(`services.${id}.description`)
</script>

<template>
  <section id="services" class="section-padding bg-background-card/30">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ $t('services.title') }} <span class="gradient-text">{{ $t('services.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="card group hover:scale-[1.02] hover:shadow-glow-blue"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
            <component :is="iconMap[service.icon]" class="w-6 h-6 text-accent-blue" />
          </div>
          <h3 class="text-lg font-semibold text-text-primary mb-2">{{ getServiceTitle(service.id) }}</h3>
          <p class="text-text-secondary text-sm">{{ getServiceDescription(service.id) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
