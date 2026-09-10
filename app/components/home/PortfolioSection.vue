<script setup lang="ts">
import { ExternalLink, Github, Play, Info, Video, Apple } from 'lucide-vue-next'
import { projects, type Project } from '~/data/content'

const { container, revealed } = useStaggerReveal()
const { locale } = useI18n()

const categories = computed(() => [
  { id: 'commercial', label: $t('projects.filter.commercial') },
  { id: 'devops', label: $t('projects.filter.devops') },
  { id: 'mobile', label: $t('projects.filter.mobile') },
  { id: 'demo', label: $t('projects.filter.demo') },
  { id: 'ai', label: $t('projects.filter.ai') },
  { id: 'iot', label: $t('projects.filter.iot') },
  { id: 'opensource', label: 'Open Source' },
  { id: 'all', label: $t('projects.filter.all') },
])

const activeCategory = ref('commercial')
const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const localizedProjects = computed(() =>
  projects.map(p => ({
    ...p,
    title: locale.value === 'en' ? p.titleEn : p.title,
    description: locale.value === 'en' ? p.descriptionEn : p.description,
  }))
)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return localizedProjects.value.filter(p => p.featured)
  }
  if (activeCategory.value === 'opensource') {
    return localizedProjects.value.filter(p => p.category === 'ai' || p.category === 'iot' || p.category === 'devops' || p.categories?.includes('opensource'))
  }
  return localizedProjects.value.filter(p => p.category === activeCategory.value || p.categories?.includes(activeCategory.value as any))
})

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'commercial': return 'from-blue-600/30 to-indigo-600/30'
    case 'devops': return 'from-purple-600/30 to-indigo-600/30'
    case 'mobile': return 'from-green-500/20 to-emerald-500/20'
    case 'ai': return 'from-purple-500/20 to-pink-500/20'
    case 'iot': return 'from-amber-500/20 to-cyan-500/20'
    case 'demo': return 'from-orange-500/20 to-yellow-500/20'
    default: return 'from-accent-blue/20 to-purple-500/20'
  }
}
</script>

<template>
  <section id="projects" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-12 section-header">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4 reveal" :class="{ 'reveal-visible': revealed }">
          {{ $t('projects.title') }} <span class="gradient-text">{{ $t('projects.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '100ms' }">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12 reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '150ms' }">
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

      <div ref="container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="card group overflow-hidden p-0 card-reveal cursor-pointer hover:border-accent-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col"
          :class="{ 'reveal-visible': revealed }"
          :style="{ transitionDelay: `${index * 80}ms` }"
          @click="openModal(project)"
        >
          <div class="h-44 bg-gradient-to-br flex items-center justify-center overflow-hidden relative" :class="getCategoryColor(project.category)">
            <img 
              v-if="project.image"
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span v-else class="text-4xl font-bold text-text-muted/50">{{ project.title.charAt(0) }}</span>

            <!-- Quick View Overlay on Hover -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
              <Info class="w-4 h-4" />
              <span>{{ $t('projects.viewDetails') }}</span>
            </div>
          </div>
          
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                {{ project.title }}
              </h3>
              <span class="badge text-xs uppercase font-semibold">{{ project.category }}</span>
            </div>
            
            <p class="text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-5">
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

            <div class="flex items-center justify-between pt-3 border-t border-border/40 mt-auto" @click.stop>
              <button 
                @click="openModal(project)"
                class="text-xs font-medium text-accent-blue hover:underline flex items-center gap-1"
              >
                {{ $t('projects.viewDetails') }} →
              </button>

              <div class="flex gap-2">
                <a 
                  v-if="project.links?.googlePlay" 
                  :href="project.links.googlePlay"
                  target="_blank"
                  class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs hover:bg-green-500/20 transition-colors"
                  title="Google Play"
                >
                  <Play class="w-3 h-3" />
                </a>
                <a 
                  v-if="project.links?.appStore" 
                  :href="project.links.appStore"
                  target="_blank"
                  class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-700/20 text-zinc-300 text-xs hover:bg-zinc-700/40 transition-colors"
                  title="App Store"
                >
                  <Apple class="w-3 h-3" />
                </a>
                <a 
                  v-if="project.links?.appGallery" 
                  :href="project.links.appGallery"
                  target="_blank"
                  class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors"
                  title="AppGallery"
                >
                  <ExternalLink class="w-3 h-3" />
                </a>
                <a 
                  v-if="project.links?.youtube" 
                  :href="project.links.youtube"
                  target="_blank"
                  class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 text-xs hover:bg-red-500/20 transition-colors"
                  title="YouTube Tutorial"
                >
                  <Video class="w-3 h-3" />
                </a>
                <a 
                  v-if="project.links?.github" 
                  :href="project.links.github"
                  target="_blank"
                  class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-500/10 text-gray-300 text-xs hover:bg-gray-500/20 transition-colors"
                  title="GitHub"
                >
                  <Github class="w-3 h-3" />
                </a>
                <a 
                  v-if="project.links?.live" 
                  :href="project.links.live"
                  target="_blank"
                  class="flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent-blue/10 text-accent-blue text-xs hover:bg-accent-blue/20 transition-colors font-medium"
                >
                  <ExternalLink class="w-3 h-3" />
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '300ms' }">
        <NuxtLink href="/me#projects" class="btn-secondary">
          {{ $t('projects.viewAll') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <UiProjectModal 
      :project="selectedProject" 
      :is-open="isModalOpen" 
      @close="isModalOpen = false" 
    />
  </section>
</template>
