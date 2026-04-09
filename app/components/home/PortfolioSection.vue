<script setup lang="ts">
import { ExternalLink, Github, Play } from 'lucide-vue-next'
import { projects } from '~/data/content'

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'mobile', label: 'Mobil' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'opensource', label: 'Açık Kaynak' },
]

const activeCategory = ref('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.filter(p => p.featured)
  }
  if (activeCategory.value === 'opensource') {
    return projects.filter(p => p.category === 'ai' || p.category === 'iot')
  }
  return projects.filter(p => p.category === activeCategory.value)
})

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'mobile': return 'from-green-500/20 to-emerald-500/20'
    case 'ai': return 'from-purple-500/20 to-pink-500/20'
    case 'iot': return 'from-blue-500/20 to-cyan-500/20'
    default: return 'from-accent-blue/20 to-purple-500/20'
  }
}
</script>

<template>
  <section id="projects" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Öne Çıkan <span class="gradient-text">Çalışmalarım</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto">
          Geliştirdiğim mobil uygulamalar, AI/ML projeleri ve açık kaynak çalışmalarım
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat.id 
            ? 'bg-accent-blue text-white shadow-glow-blue' 
            : 'bg-background-card text-text-secondary hover:text-text-primary hover:bg-background-hover'"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="card group overflow-hidden p-0"
        >
          <div class="h-40 bg-gradient-to-br flex items-center justify-center" :class="getCategoryColor(project.category)">
            <span class="text-4xl font-bold text-text-muted/50">{{ project.title.charAt(0) }}</span>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                {{ project.title }}
              </h3>
              <span class="badge text-xs">{{ project.category.toUpperCase() }}</span>
            </div>
            <p class="text-text-secondary text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.techStack.slice(0, 3)" 
                :key="tech"
                class="badge text-xs"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 3" class="badge text-xs">
                +{{ project.techStack.length - 3 }}
              </span>
            </div>

            <div class="flex gap-3">
              <a 
                v-if="project.links?.googlePlay" 
                :href="project.links.googlePlay"
                target="_blank"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs hover:bg-green-500/20 transition-colors"
              >
                <Play class="w-3.5 h-3.5" />
                Play Store
              </a>
              <a 
                v-if="project.links?.github" 
                :href="project.links.github"
                target="_blank"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-500/10 text-gray-300 text-xs hover:bg-gray-500/20 transition-colors"
              >
                <Github class="w-3.5 h-3.5" />
                GitHub
              </a>
              <a 
                v-if="project.links?.live" 
                :href="project.links.live"
                target="_blank"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue/10 text-accent-blue text-xs hover:bg-accent-blue/20 transition-colors"
              >
                <ExternalLink class="w-3.5 h-3.5" />
                Canlı
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink href="/me#projects" class="btn-secondary">
          Tüm Projeleri Gör
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
