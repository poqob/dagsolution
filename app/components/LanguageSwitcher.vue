<script setup lang="ts">
import { Globe } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value)
})

const switchLocale = () => {
  const newLocale = locale.value === 'tr' ? 'en' : 'tr'
  setLocale(newLocale)
}
</script>

<template>
  <button 
    @click="switchLocale" 
    class="flex items-center gap-2 p-2.5 rounded-lg bg-background-hover border border-border text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-all duration-200"
    :title="$t('language.switchTo')"
  >
    <Globe class="w-5 h-5" />
    <span class="text-sm font-medium">{{ locale === 'tr' ? 'EN' : 'TR' }}</span>
  </button>
</template>
