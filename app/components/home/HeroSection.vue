<script setup lang="ts">
import { ArrowRight, Sparkles } from 'lucide-vue-next'

const { isDark } = useTheme()
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden pt-4 pb-8">
    <!-- Animated gradient background -->
    <div 
      class="absolute inset-0 transition-colors duration-500 overflow-hidden"
      :class="isDark ? 'hero-gradient-dark' : 'hero-gradient-light'"
    />
    
    <!-- Floating liquid blobs -->
    <div class="hero-blob hero-blob-1" />
    <div class="hero-blob hero-blob-2" />
    <div class="hero-blob hero-blob-3" />
    <div class="hero-blob hero-blob-4" />
    <div class="hero-blob hero-blob-5" />
    
    <div class="container-custom relative z-10 flex-1 flex flex-col items-center justify-center">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Logo with real image -->
        <div 
          class="inline-flex items-center justify-center mb-8 animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
        >
          <img 
            :src="isDark ? '/images/dagsolution-logo.png' : '/images/dagsolution-light-logo.png'" 
            alt="DAGSolution Logo" 
            class="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl"
            :class="isDark ? 'drop-shadow-[0_0_40px_rgba(150,150,170,0.15)]' : 'drop-shadow-[0_0_30px_rgba(99,102,241,0.2)]'"
          />
        </div>

        <h1 
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 100ms"
        >
          <span class="text-text-primary">dağ</span><span class="gradient-text"> solution</span>
          <span class="sr-only"> | dag solution | dagsolution</span>
        </h1>

        <p 
          class="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 max-w-2xl mx-auto animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 200ms"
        >
          {{ $t('hero.tagline') }}
        </p>

        <p 
          class="text-base text-text-muted mb-12 max-w-xl mx-auto animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 250ms"
        >
          {{ $t('hero.description') }}
        </p>

        <div 
          class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 350ms"
        >
          <a href="#projects" class="btn-primary">
            <Sparkles class="w-5 h-5 mr-2" />
            {{ $t('hero.viewProjects') }}
          </a>
          <NuxtLink href="/me" class="btn-secondary group">
            {{ $t('hero.aboutMe') }}
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator - below the buttons with proper spacing -->
    <div 
      class="relative z-10 w-full mt-16 sm:mt-20 animate-bounce"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      style="animation-delay: 500ms"
    >
      <span class="text-xs text-text-muted block mb-2 text-center">{{ $t('hero.scrollHint') }}</span>
      <div class="w-6 h-10 rounded-full border-2 border-text-muted flex items-start justify-center p-2 mx-auto">
        <div class="w-1 h-2 bg-text-muted rounded-full animate-pulse" />
      </div>
    </div>
  </section>
</template>
