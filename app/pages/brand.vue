<script setup lang="ts">
import { Download, Palette, Type, Image, Copy, Check, ExternalLink } from 'lucide-vue-next'
import { brandColors, logoVariants, brandFonts } from '~/data/content'

const { isDark } = useTheme()
const { container: mainReveal, revealed: mainVisible } = useStaggerReveal()
const { container: logoReveal, revealed: logosVisible } = useStaggerReveal()
const { container: colorsReveal, revealed: colorsVisible } = useStaggerReveal()
const { container: typoReveal, revealed: typoVisible } = useStaggerReveal()

const copiedColor = ref<string | null>(null)

function copyHex(hex: string) {
  navigator.clipboard.writeText(hex)
  copiedColor.value = hex
  setTimeout(() => { copiedColor.value = null }, 2000)
}

const logoPreviewSrc = computed(() =>
  isDark.value ? '/brand/png/dark-512x512.png' : '/brand/png/light-512x512.png'
)

const displaySizes = [1024, 512, 192, 64]

const zipUrl = '/downloads/dagsolution-marka-kiti.zip'
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="section-padding pt-32 pb-16">
      <div ref="mainReveal" class="container-custom">
        <div
          class="text-center max-w-3xl mx-auto"
          :class="[mainVisible ? 'animate-fade-in' : 'opacity-0']"
        >
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm mb-6">
            <Palette class="w-4 h-4" />
            {{ $t('brand.brandKit') }}
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {{ $t('brand.title') }} <span class="gradient-text">{{ $t('brand.titleAccent') }}</span>
          </h1>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            {{ $t('brand.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Logos Section -->
    <section class="section-padding bg-background-card/30">
      <div ref="logoReveal" class="container-custom">
        <div
          :class="[logosVisible ? 'animate-fade-in' : 'opacity-0']"
        >
          <div class="flex items-center gap-3 mb-2">
            <Image class="w-6 h-6 text-accent-blue" />
            <h2 class="text-2xl md:text-3xl font-bold text-text-primary">
              {{ $t('brand.logos') }}
            </h2>
          </div>
          <p class="text-text-secondary mb-10 max-w-2xl">
            {{ $t('brand.logosDesc') }}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div
              v-for="variant in logoVariants"
              :key="variant.name"
              class="rounded-xl border border-border bg-background p-8 flex flex-col items-center gap-4"
            >
              <div class="w-48 h-48 flex items-center justify-center rounded-lg bg-background-hover/50 p-4">
                <img
                  :src="`/brand/png/${variant.name}-512x512.png`"
                  :alt="`DAGSolution logo - ${variant.name}`"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <span class="text-sm font-medium text-text-secondary uppercase tracking-wider">{{ variant.name }} tema</span>
              <div class="flex flex-wrap gap-2 justify-center">
                <a
                  v-for="size in displaySizes"
                  :key="size"
                  :href="`/brand/png/${variant.name}-${size}x${size}.png`"
                  download
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors text-sm"
                >
                  <Download class="w-3.5 h-3.5" />
                  {{ size }}×{{ size }}
                </a>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a
              :href="zipUrl"
              download
              class="btn-primary inline-flex items-center gap-2"
            >
              <Download class="w-5 h-5" />
              {{ $t('brand.downloadZip') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Palette -->
    <section class="section-padding">
      <div ref="colorsReveal" class="container-custom">
        <div
          :class="[colorsVisible ? 'animate-fade-in' : 'opacity-0']"
        >
          <div class="flex items-center gap-3 mb-2">
            <Palette class="w-6 h-6 text-accent-blue" />
            <h2 class="text-2xl md:text-3xl font-bold text-text-primary">
              {{ $t('brand.colors') }}
            </h2>
          </div>
          <p class="text-text-secondary mb-10 max-w-2xl">
            {{ $t('brand.colorsDesc') }}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div
              v-for="color in brandColors"
              :key="color.hex"
              class="group rounded-xl border border-border bg-background-card overflow-hidden"
            >
              <div
                class="h-24 w-full relative"
                :style="{ backgroundColor: color.hex }"
              >
                <button
                  @click="copyHex(color.hex)"
                  class="absolute top-2 right-2 p-1.5 rounded-md bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  :title="$t('brand.copyHex')"
                >
                  <Copy v-if="copiedColor !== color.hex" class="w-3.5 h-3.5 text-white" />
                  <Check v-else class="w-3.5 h-3.5 text-green-400" />
                </button>
              </div>
              <div class="p-3">
                <p class="text-sm font-mono text-text-primary font-medium">{{ color.hex }}</p>
                <p class="text-xs text-text-secondary mt-1 leading-relaxed">{{ color.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="section-padding bg-background-card/30">
      <div ref="typoReveal" class="container-custom">
        <div
          :class="[typoVisible ? 'animate-fade-in' : 'opacity-0']"
        >
          <div class="flex items-center gap-3 mb-2">
            <Type class="w-6 h-6 text-accent-blue" />
            <h2 class="text-2xl md:text-3xl font-bold text-text-primary">
              {{ $t('brand.typography') }}
            </h2>
          </div>
          <p class="text-text-secondary mb-10 max-w-2xl">
            {{ $t('brand.typographyDesc') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="font in brandFonts"
              :key="font.name"
              class="rounded-xl border border-border bg-background p-6"
            >
              <h3
                class="text-2xl font-bold text-text-primary mb-2"
                :style="{ fontFamily: font.name }"
              >
                {{ font.name }}
              </h3>
              <p class="text-sm text-text-secondary mb-1">{{ font.type }}</p>
              <p class="text-sm text-text-muted mb-4">{{ font.usage }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="w in font.weights"
                  :key="w"
                  class="px-2.5 py-1 rounded-md bg-background-hover text-text-secondary text-xs border border-border"
                  :style="{ fontWeight: w, fontFamily: font.name }"
                >
                  {{ $t('brand.fontWeights') }}: {{ w }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Guidelines -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto rounded-xl border border-border bg-background-card/50 p-8 text-center">
          <p class="text-text-secondary text-sm">
            {{ $t('brand.usageDesc') }}
          </p>
          <div class="mt-6 flex items-center justify-center gap-4 text-sm">
            <a
              :href="zipUrl"
              download
              class="btn-primary inline-flex items-center gap-2"
            >
              <Download class="w-4 h-4" />
              {{ $t('brand.downloadZip') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
