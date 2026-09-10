<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { faqItems } from '~/data/faq'

const { locale } = useI18n()

const activeId = ref<string | null>(faqItems[0]?.id || null)

const toggleFaq = (id: string) => {
  activeId.value = activeId.value === id ? null : id
}

// Localized FAQ items
const localizedFaq = computed(() =>
  faqItems.map(item => ({
    id: item.id,
    category: locale.value === 'en' ? item.categoryEn : item.category,
    question: locale.value === 'en' ? item.questionEn : item.question,
    answer: locale.value === 'en' ? item.answerEn : item.answer,
  }))
)

// Dynamic Google FAQPage JSON-LD Schema for SERP Rich Snippets
const faqJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': localizedFaq.value.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.answer,
    },
  })),
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify(faqJsonLd.value)),
    },
  ],
})
</script>

<template>
  <section id="faq" class="section-padding bg-background-card/20 border-t border-border/30 relative overflow-hidden">
    <!-- Ambient Background Glow -->
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ locale === 'en' ? 'Got Questions? ' : 'Merak Edilen ' }}
          <span class="gradient-text">{{ locale === 'en' ? 'We Have Answers.' : 'Tüm Detaylar' }}</span>
        </h2>
        
        <p class="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {{ locale === 'en' 
            ? 'Everything you need to know about our custom software development, AI models, and enterprise solutions.' 
            : 'Özel yazılım geliştirme süreçlerimiz, yapay zeka entegrasyonlarımız, PDKS ve çalışma modelimiz hakkında sık sorulan sorular.' 
          }}
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="max-w-4xl mx-auto space-y-3.5">
        <div 
          v-for="item in localizedFaq" 
          :key="item.id"
          class="rounded-xl border transition-all duration-300 overflow-hidden"
          :class="[
            activeId === item.id 
              ? 'bg-background-card/90 border-accent-blue/50 shadow-lg shadow-accent-blue/5' 
              : 'bg-background-card/40 hover:bg-background-card/70 border-border/60 hover:border-border'
          ]"
        >
          <!-- Accordion Trigger Button -->
          <button
            @click="toggleFaq(item.id)"
            class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue cursor-pointer"
            :aria-expanded="activeId === item.id"
            :aria-controls="`faq-answer-${item.id}`"
          >
            <div class="flex items-start sm:items-center gap-3.5 flex-1">
              <span 
                class="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide shrink-0 hidden sm:inline-block"
                :class="activeId === item.id ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30' : 'bg-background-hover text-text-muted border border-border/40'"
              >
                {{ item.category }}
              </span>
              <h3 class="text-base sm:text-lg font-semibold text-text-primary hover:text-accent-blue transition-colors">
                {{ item.question }}
              </h3>
            </div>

            <div 
              class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="activeId === item.id ? 'bg-accent-blue text-white rotate-180' : 'bg-background-hover text-text-muted'"
            >
              <ChevronDown class="w-4 h-4" />
            </div>
          </button>

          <!-- Accordion Content -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div 
              v-show="activeId === item.id" 
              :id="`faq-answer-${item.id}`"
              class="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-border/30 overflow-hidden"
            >
              <p class="mt-2">{{ item.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
