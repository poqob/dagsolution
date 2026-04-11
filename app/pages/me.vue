<script setup lang="ts">
import { Github, Linkedin, Mail, Download, ExternalLink, GraduationCap, MapPin, Award, Briefcase, Code } from 'lucide-vue-next'
import { projects } from '~/data/content'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/poqob', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mustafa-biçer-7164221b4', icon: Linkedin },
  { name: 'Email', url: 'mailto:mustafa@dagsolution.com', icon: Mail },
]

const workExperience = [
  {
    id: 'freelance',
    titleKey: 'me.experienceDetails.freelance.title',
    company: 'Freelance',
    periodKey: 'me.experienceDetails.freelance.period',
    locationKey: 'me.experienceDetails.freelance.location',
    descriptionKey: 'me.experienceDetails.freelance.description',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tubitak',
    titleKey: 'me.experienceDetails.tubitak.title',
    company: 'TÜBİTAK',
    periodKey: 'me.experienceDetails.tubitak.period',
    locationKey: 'me.experienceDetails.tubitak.location',
    descriptionKey: 'me.experienceDetails.tubitak.description',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'ester',
    titleKey: 'me.experienceDetails.ester.title',
    company: 'ESTER Teknoloji',
    periodKey: 'me.experienceDetails.ester.period',
    locationKey: 'me.experienceDetails.ester.location',
    descriptionKey: 'me.experienceDetails.ester.description',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'venhancer',
    titleKey: 'me.experienceDetails.venhancer.title',
    company: 'VENHANCER',
    periodKey: 'me.experienceDetails.venhancer.period',
    locationKey: 'me.experienceDetails.venhancer.location',
    descriptionKey: 'me.experienceDetails.venhancer.description',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'arduino-instructor',
    titleKey: 'me.experienceDetails.arduino.title',
    company: 'Sakarya Üniversitesi Robot Topluluğu',
    periodKey: 'me.experienceDetails.arduino.period',
    locationKey: 'me.experienceDetails.arduino.location',
    descriptionKey: 'me.experienceDetails.arduino.description',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'fec',
    titleKey: 'me.experienceDetails.fec.title',
    company: 'FEC - TEKNOFEST',
    periodKey: 'me.experienceDetails.fec.period',
    locationKey: 'me.experienceDetails.fec.location',
    descriptionKey: 'me.experienceDetails.fec.description',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'yeditek',
    titleKey: 'me.experienceDetails.yeditek.title',
    company: 'Yeditek Yeni Dijital Teknolojiler A.Ş.',
    periodKey: 'me.experienceDetails.yeditek.period',
    locationKey: 'me.experienceDetails.yeditek.location',
    descriptionKey: 'me.experienceDetails.yeditek.description',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'prometheus',
    titleKey: 'me.experienceDetails.prometheus.title',
    company: 'Prometheus - TEKNOFEST',
    periodKey: 'me.experienceDetails.prometheus.period',
    locationKey: 'me.experienceDetails.prometheus.location',
    descriptionKey: 'me.experienceDetails.prometheus.description',
    color: 'from-violet-500 to-purple-500',
  },
]

const education = computed(() => [
  {
    id: 'master',
    title: $t('me.educationData.master.title'),
    school: $t('me.educationData.master.school'),
    department: $t('me.educationData.master.department'),
    period: $t('me.educationData.master.period'),
    location: $t('me.educationData.master.location'),
    status: $t('me.educationData.master.status'),
    logo: 'https://sehirhafizasi.sakarya.edu.tr/wp-content/uploads/2023/07/cropped-dikeylogo.png',
  },
  {
    id: 'bachelor',
    title: $t('me.educationData.bachelor.title'),
    school: $t('me.educationData.bachelor.school'),
    department: $t('me.educationData.bachelor.department'),
    period: $t('me.educationData.bachelor.period'),
    location: $t('me.educationData.bachelor.location'),
    status: $t('me.educationData.bachelor.status'),
    logo: 'https://sehirhafizasi.sakarya.edu.tr/wp-content/uploads/2023/07/cropped-dikeylogo.png',
  },
  {
    id: 'highschool',
    title: $t('me.educationData.highschool.title'),
    school: $t('me.educationData.highschool.school'),
    period: $t('me.educationData.highschool.period'),
    location: $t('me.educationData.highschool.location'),
    status: $t('me.educationData.highschool.status'),
    icon: '🏫',
  },
])

const certifications = computed(() => [
  {
    id: 'green-future',
    title: $t('me.certificationsData.greenFuture.title'),
    issuer: $t('me.certificationsData.greenFuture.issuer'),
    date: $t('me.certificationsData.greenFuture.date'),
    link: $t('me.certificationsData.greenFuture.link'),
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQGoeinYevF6pQ/company-logo_100_100/company-logo_100_100/0/1713349073559/eurodesk_network_logo?e=1777507200&v=beta&t=__Mj1ch0T-gKej_2Q7Wn193ZbUvnmxJDpPrf0TIKGuk',
  },
  {
    id: 'teknofest-industry',
    title: $t('me.certificationsData.teknofestIndustry.title'),
    issuer: $t('me.certificationsData.teknofestIndustry.issuer'),
    date: $t('me.certificationsData.teknofestIndustry.date'),
    link: $t('me.certificationsData.teknofestIndustry.link'),
    image: 'https://media.licdn.com/dms/image/v2/D560BAQEQXJ3ZrzuieA/company-logo_100_100/company-logo_100_100/0/1723620949699/teknofest_logo?e=1777507200&v=beta&t=gdoqol7tLJSyFa83bx_TF_CO3S5Iv6ZOznuwaLxNR08',
  },
  {
    id: 'flutter-btk',
    title: $t('me.certificationsData.flutterBtk.title'),
    issuer: $t('me.certificationsData.flutterBtk.issuer'),
    date: $t('me.certificationsData.flutterBtk.date'),
    link: $t('me.certificationsData.flutterBtk.link'),
    image: 'https://media.licdn.com/dms/image/v2/D560BAQFzhoINQt47kw/company-logo_100_100/company-logo_100_100/0/1733413650231?e=1777507200&v=beta&t=RTKTXpu5fD8W8eTwcFfeTTtIZzaKDcukLqKRXvWL5oA',
  },
  {
    id: 'teknofest-ai',
    title: $t('me.certificationsData.teknofestAi.title'),
    issuer: $t('me.certificationsData.teknofestAi.issuer'),
    date: $t('me.certificationsData.teknofestAi.date'),
    link: $t('me.certificationsData.teknofestAi.link'),
    image: 'https://media.licdn.com/dms/image/v2/D560BAQEQXJ3ZrzuieA/company-logo_100_100/company-logo_100_100/0/1723620949699/teknofest_logo?e=1777507200&v=beta&t=gdoqol7tLJSyFa83bx_TF_CO3S5Iv6ZOznuwaLxNR08',
  },
])

const categories = computed(() => [
  { id: 'all', label: $t('projects.filter.all') },
  { id: 'mobile', label: $t('projects.filter.mobile') },
  { id: 'ai', label: $t('projects.filter.ai') },
  { id: 'iot', label: $t('projects.filter.iot') },
])

const activeCategory = ref('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const skillCategories = [
  {
    title: 'Programlama Dilleri',
    icon: '💻',
    skills: [
      { name: 'Python', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      { name: 'JavaScript', color: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30' },
      { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      { name: 'Dart', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
      { name: 'C/C++', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
      { name: 'Go', color: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30' },
    ],
  },
  {
    title: 'Framework & Libraries',
    icon: '🛠️',
    skills: [
      { name: 'Flutter', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
      { name: 'React', color: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30' },
      { name: 'Vue/Nuxt', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'FastAPI', color: 'bg-green-600/20 text-green-300 border-green-600/30' },
      { name: 'Flask', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      { name: 'PyTorch', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
      { name: 'TensorFlow', color: 'bg-orange-600/20 text-orange-300 border-orange-600/30' },
    ],
  },
  {
    title: 'Veritabanları & Storage',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      { name: 'MongoDB', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'Redis', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
      { name: 'Firebase', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      { name: 'Kafka', color: 'bg-gray-600/20 text-gray-300 border-gray-600/30' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
      { name: 'Docker', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      { name: 'Kubernetes', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
      { name: 'CI/CD', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'Linux', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      { name: 'Git', color: 'bg-orange-600/20 text-orange-300 border-orange-600/30' },
    ],
  },
  {
    title: 'AI & Data Science',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      { name: 'Computer Vision', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
      { name: 'LLM & RAG', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
      { name: 'YOLO', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
      { name: 'OpenCV', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'NLP', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
    ],
  },
  {
    title: 'Mobil & IoT',
    icon: '📱',
    skills: [
      { name: 'iOS Development', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      { name: 'Android Dev', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'ESP-IDF', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
      { name: 'Arduino', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
      { name: 'MQTT', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      { name: 'STM32', color: 'bg-blue-700/20 text-blue-200 border-blue-700/30' },
    ],
  },
]

const achievementMedia = computed(() => [
  {
    id: 'tuva-atasever',
    title: $t('about.award'),
    subtitle: $t('about.awardDesc'),
    person: 'Tuva Cihangir Atasever ile',
    image: '/images/old-portfolio/bel.jpeg',
    size: 'large',
  },
  {
    id: 'fec-team',
    title: $t('about.teknofest2024'),
    subtitle: $t('about.teknofest2024Desc'),
    person: 'Otonom Yönlendirmeli Araç Projesi',
    image: '/images/old-portfolio/2024-takim.jpeg',
    size: 'medium',
  },
  {
    id: 'prometheus',
    title: $t('about.teknofest2022'),
    subtitle: $t('about.teknofest2022Desc'),
    person: 'YOLOv5 Deep Learning Modeli',
    image: '/images/old-portfolio/2022-prometheus.jpeg',
    size: 'medium',
  },
])

useHead({
  title: 'Hakkımda - Mustafa Biçer | DAGSolution',
  meta: [
    { name: 'description', content: 'Mustafa Biçer - Bilgisayar Mühendisi, AI & ML Specialist. Kariyer hikayem, deneyimlerim ve projelerim.' },
    { property: 'og:title', content: 'Hakkımda - Mustafa Biçer | DAGSolution' },
    { property: 'og:description', content: 'Bilgisayar Mühendisi, AI & ML Specialist. Kariyer hikayem, deneyimlerim ve projelerim.' },
    { property: 'og:type', content: 'profile' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:url', content: 'https://dagsolution.com/me' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Hakkımda - Mustafa Biçer | DAGSolution' },
    { name: 'twitter:description', content: 'Bilgisayar Mühendisi, AI & ML Specialist.' },
    { name: 'twitter:image', content: '/og-image.png' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Profile Hero -->
    <section class="section-padding pt-32">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Avatar (D badge kaldırıldı) -->
          <div class="mb-8">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent-blue/50 shadow-glow-blue mx-auto">
              <img 
                src="https://avatars.githubusercontent.com/u/62916167?v=4" 
                alt="Mustafa Biçer"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {{ $t('me.hello') }} <span class="gradient-text">{{ $t('me.mustafa') }}</span>
          </h1>
          
          <div class="flex flex-wrap justify-center gap-2 mb-4">
            <span class="badge">{{ $t('me.engineer') }}</span>
            <span class="badge">{{ $t('me.aiSpecialist') }}</span>
            <span class="badge">{{ $t('me.fullStack') }}</span>
          </div>

          <p class="text-text-secondary max-w-2xl mx-auto mb-8">
            {{ $t('me.bio') }}
          </p>

          <div class="flex justify-center gap-4 mb-8">
            <a 
              v-for="link in socialLinks" 
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="p-3 rounded-xl bg-background-card border border-border text-text-secondary hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200"
            >
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>

          <div class="flex justify-center gap-4">
            <a href="mailto:mustafa@dagsolution.com" class="btn-secondary">
              <Mail class="w-5 h-5 mr-2" />
              {{ $t('me.contactMe') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hikayem & Başarılarım -->
    <section class="section-padding bg-background-card/30">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.storyTitle') }} <span class="gradient-text">{{ $t('me.storyTitleAccent') }}</span>
        </h2>

        <div class="max-w-3xl mx-auto mb-8">
          <div class="card mb-6">
            <p class="text-text-secondary">
              {{ $t('me.story1') }}
            </p>
          </div>
          <div class="card">
            <p class="text-text-secondary">
              {{ $t('me.story2') }}
            </p>
          </div>
        </div>

        <!-- Achievement Media Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div class="md:row-span-2 card p-0 overflow-hidden group">
            <div class="relative h-full min-h-[300px]">
              <img 
                :src="achievementMedia[0].image"
                :alt="achievementMedia[0].title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-accent-orange/20 text-accent-orange text-xs rounded-full border border-accent-orange/30">
                    🏆 Ödül
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-1">{{ achievementMedia[0].title }}</h3>
                <p class="text-gray-300 text-sm mb-2">{{ achievementMedia[0].subtitle }}</p>
                <p class="text-accent-blue text-sm font-medium">{{ achievementMedia[0].person }}</p>
              </div>
            </div>
          </div>

          <div class="card p-0 overflow-hidden group">
            <div class="relative h-48">
              <img 
                :src="achievementMedia[1].image"
                :alt="achievementMedia[1].title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <span class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 mb-2 inline-block">
                  🎯 Teknofest 2024
                </span>
                <h3 class="text-lg font-bold text-white">{{ achievementMedia[1].title }}</h3>
                <p class="text-gray-300 text-sm">{{ achievementMedia[1].subtitle }}</p>
              </div>
            </div>
          </div>

          <div class="card p-0 overflow-hidden group">
            <div class="relative h-48">
              <img 
                :src="achievementMedia[2].image"
                :alt="achievementMedia[2].title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 mb-2 inline-block">
                  🏅 Teknofest 2022
                </span>
                <h3 class="text-lg font-bold text-white">{{ achievementMedia[2].title }}</h3>
                <p class="text-gray-300 text-sm">{{ achievementMedia[2].subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">5+</div>
            <div class="text-text-muted text-sm">{{ $t('me.yearsExp') }}</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">3</div>
            <div class="text-text-muted text-sm">{{ $t('me.storeApps') }}</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">2x</div>
            <div class="text-text-muted text-sm">{{ $t('me.teknofestFinalist') }}</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">1</div>
            <div class="text-text-muted text-sm">{{ $t('me.tubitakBursar') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.experience') }} <span class="gradient-text">{{ $t('me.experienceAccent') }}</span>
        </h2>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-purple-500 to-accent-orange" />
            
            <div class="space-y-8">
              <div 
                v-for="(exp, index) in workExperience" 
                :key="exp.id"
                class="relative pl-12 md:pl-0"
                :class="index % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%] md:ml-auto'"
              >
                <div class="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-lg bg-gradient-to-br" :class="exp.color">
                  <Briefcase class="w-4 h-4 text-white" />
                </div>

                <div class="card ml-4 md:ml-0" :class="index % 2 === 0 ? 'md:mr-[-2rem]' : 'md:ml-[-2rem]'">
                  <div class="flex items-center gap-3 mb-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                    <div>
                      <h3 class="font-semibold text-text-primary">{{ $t(exp.titleKey) }}</h3>
                      <div class="flex items-center gap-2 text-text-secondary text-sm flex-wrap">
                        <span class="font-medium">{{ exp.company }}</span>
                        <span class="text-accent-blue">•</span>
                        <span class="flex items-center gap-1"><MapPin class="w-3 h-3" />{{ $t(exp.locationKey) }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-accent-blue text-sm font-medium mb-3">{{ $t(exp.periodKey) }}</div>
                  <p class="text-text-muted text-sm">{{ $t(exp.descriptionKey) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section-padding bg-background-card/30">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.education') }} <span class="gradient-text">{{ $t('me.educationAccent') }}</span>
        </h2>

        <div class="max-w-4xl mx-auto space-y-6">
          <div 
            v-for="edu in education" 
            :key="edu.id"
            class="card"
          >
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-purple-500/20 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  v-if="edu.logo"
                  :src="edu.logo" 
                  :alt="edu.school"
                  class="w-10 h-10 object-contain"
                />
                <span v-else class="text-2xl">{{ edu.icon }}</span>
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 class="font-semibold text-text-primary">{{ edu.school }}</h3>
                    <p class="text-text-secondary text-sm">{{ edu.title }} {{ edu.department ? `• ${edu.department}` : '' }}</p>
                  </div>
                  <span 
                    class="px-3 py-1 text-xs rounded-full border"
                    :class="edu.status === 'Devam Ediyor' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-accent-blue/20 text-accent-blue border-accent-blue/30'"
                  >
                    {{ edu.status }}
                  </span>
                </div>
                <div class="flex items-center gap-4 mt-2 text-sm text-text-muted">
                  <span class="flex items-center gap-1"><MapPin class="w-4 h-4" />{{ edu.location }}</span>
                  <span>{{ edu.period }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-padding bg-background-card/30">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.certifications') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a 
            v-for="cert in certifications" 
            :key="cert.id"
            :href="cert.link"
            :target="cert.link ? '_blank' : undefined"
            :rel="cert.link ? 'noopener noreferrer' : undefined"
            class="card hover:border-accent-blue/50 transition-all duration-300 cursor-pointer block"
          >
            <div class="flex items-start gap-4">
              <img 
                :src="cert.image" 
                :alt="cert.issuer"
                class="w-12 h-12 rounded-xl object-contain bg-white shrink-0"
              />
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-text-primary text-sm leading-tight">{{ cert.title }}</h3>
                <p class="text-text-secondary text-xs mt-1">{{ cert.issuer }}</p>
                <p class="text-text-muted text-xs mt-1">{{ cert.date }}</p>
                <span 
                  v-if="cert.link"
                  class="inline-flex items-center gap-1 text-accent-blue text-xs mt-2"
                >
                  {{ $t('me.viewCertificate') }}
                  <ExternalLink class="w-3 h-3" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Grid with Icons -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.skills') }} <span class="gradient-text">{{ $t('me.skillsAccent') }}</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div 
            v-for="category in skillCategories" 
            :key="category.title"
            class="card"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">{{ category.icon }}</span>
              <h3 class="font-semibold text-text-primary">{{ category.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in category.skills" 
                :key="skill.name"
                class="px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:scale-105"
                :class="skill.color"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding bg-background-card/30">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          {{ $t('me.allProjects') }} <span class="gradient-text">{{ $t('me.allProjectsAccent') }}</span>
        </h2>

        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="activeCategory === cat.id 
              ? 'bg-accent-blue text-white shadow-glow-blue' 
              : 'bg-background-card text-text-secondary hover:text-text-primary'"
          >
            {{ cat.label }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="card group overflow-hidden p-0"
          >
            <div class="h-32 bg-gradient-to-br from-accent-blue/20 to-purple-500/20 flex items-center justify-center">
              <span class="text-3xl font-bold text-text-muted/50">{{ project.title.charAt(0) }}</span>
            </div>
            
            <div class="p-5">
              <h3 class="font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                {{ project.title }}
              </h3>
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
              </div>

              <div class="flex gap-2">
                <a 
                  v-if="project.links?.github" 
                  :href="project.links.github"
                  target="_blank"
                  class="text-xs text-accent-blue hover:underline flex items-center gap-1"
                >
                  <Github class="w-3 h-3" /> {{ $t('projects.github') }}
                </a>
                <a 
                  v-if="project.links?.googlePlay" 
                  :href="project.links.googlePlay"
                  target="_blank"
                  class="text-xs text-accent-blue hover:underline flex items-center gap-1"
                >
                  <ExternalLink class="w-3 h-3" /> {{ $t('projects.googlePlay') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-padding bg-gradient-to-b from-background to-background-card pb-24">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {{ $t('me.letsCollaborate') }} <span class="gradient-text">{{ $t('me.letsCollaborateAccent') }}</span>
          </h2>
          <p class="text-text-secondary mb-8">
            {{ $t('contact.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mustafa@dagsolution.com" class="btn-primary">
              <Mail class="w-5 h-5 mr-2" />
              {{ $t('contact.email') }}
            </a>
            <a href="https://www.linkedin.com/in/mustafa-biçer-7164221b4" target="_blank" class="btn-secondary">
              <Linkedin class="w-5 h-5 mr-2" />
              {{ $t('contact.linkedin') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
