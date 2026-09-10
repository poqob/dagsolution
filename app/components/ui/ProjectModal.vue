<script setup lang="ts">
import { X, ExternalLink, Github, Play, CheckCircle2, Layers, Sparkles, Video, Apple } from 'lucide-vue-next'
import type { Project } from '~/data/content'

const props = defineProps<{
  project: Project | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { locale } = useI18n()

const title = computed(() => {
  if (!props.project) return ''
  return locale.value === 'en' ? props.project.titleEn : props.project.title
})

const description = computed(() => {
  if (!props.project) return ''
  if (locale.value === 'en') {
    return props.project.longDescriptionEn || props.project.descriptionEn
  }
  return props.project.longDescription || props.project.description
})

const highlights = computed(() => {
  if (!props.project) return []
  return locale.value === 'en' 
    ? (props.project.highlightsEn || props.project.highlights || [])
    : (props.project.highlights || [])
})

// Close on escape key
onMounted(() => {
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
      emit('close')
    }
  }
  window.addEventListener('keydown', onKeydown)
  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen && project" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity" 
          @click="emit('close')" 
        />

        <!-- Modal Dialog -->
        <div 
          class="relative w-full max-w-2xl bg-[#121217] text-zinc-100 rounded-2xl shadow-2xl border border-zinc-800/80 overflow-hidden my-8 z-10 animate-fade-in"
          @click.stop
        >
          <!-- Close Button -->
          <button 
            @click="emit('close')"
            class="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            title="Kapat"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Cover Image -->
          <div v-if="project.image" class="relative w-full h-52 sm:h-64 bg-zinc-900 overflow-hidden border-b border-zinc-800">
            <img 
              :src="project.image" 
              :alt="title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/30" />
            
            <!-- Category Badge on Image -->
            <div class="absolute bottom-4 left-6 flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-blue/90 text-white shadow-lg backdrop-blur-sm">
                {{ project.category === 'devops' ? 'DevOps / MCP' : project.category }}
              </span>
              <span v-if="project.links?.live" class="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-sm flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live in Production
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div class="p-6 sm:p-8 space-y-6">
            <!-- Header -->
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                {{ title }}
              </h2>
              <p class="text-zinc-300 text-base leading-relaxed">
                {{ description }}
              </p>
            </div>

            <!-- Key Features / Highlights -->
            <div v-if="highlights.length > 0" class="space-y-3 bg-zinc-900/60 p-4 sm:p-5 rounded-xl border border-zinc-800/80">
              <h4 class="text-xs font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                <Sparkles class="w-4 h-4" />
                {{ $t('projects.features') }}
              </h4>
              <ul class="grid grid-cols-1 gap-2.5">
                <li 
                  v-for="(item, i) in highlights" 
                  :key="i"
                  class="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Tech Stack -->
            <div class="space-y-2.5">
              <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Layers class="w-4 h-4" />
                {{ $t('projects.technologies') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-200 border border-zinc-700/60 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-wrap items-center gap-3">
                <a 
                  v-if="project.links?.live" 
                  :href="project.links.live" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold shadow-glow-blue"
                >
                  <ExternalLink class="w-4 h-4" />
                  {{ $t('projects.visitSite') }}
                </a>

                <a 
                  v-if="project.links?.googlePlay" 
                  :href="project.links.googlePlay" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium transition-colors"
                >
                  <Play class="w-4 h-4" />
                  Google Play
                </a>

                <a 
                  v-if="project.links?.appStore" 
                  :href="project.links.appStore" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-sm font-medium transition-colors"
                >
                  <Apple class="w-4 h-4" />
                  App Store
                </a>

                <a 
                  v-if="project.links?.youtube" 
                  :href="project.links.youtube" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-medium transition-colors"
                >
                  <Video class="w-4 h-4" />
                  YouTube Rehberi
                </a>

                <a 
                  v-if="project.links?.github" 
                  :href="project.links.github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-sm font-medium transition-colors"
                >
                  <Github class="w-4 h-4" />
                  GitHub
                </a>
              </div>

              <button 
                @click="emit('close')"
                class="text-xs text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors ml-auto"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
