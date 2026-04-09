<script setup lang="ts">
import { Github, Linkedin, Mail, Download, ExternalLink, GraduationCap, MapPin, Award, Briefcase, Code } from 'lucide-vue-next'
import { projects } from '~/data/content'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/poqob', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mustafa-biçer-7164221b4', icon: Linkedin },
  { name: 'Email', url: 'mailto:mustafabicer.iletisim@gmail.com', icon: Mail },
]

const workExperience = [
  {
    id: 'freelance',
    title: 'Freelance AI Engineer & Full Stack Developer',
    company: 'Freelance',
    period: 'Ağustos 2025 - Present',
    location: 'İstanbul, Türkiye',
    description: 'Kafka ve FastAPI merkezli asenkron mimari üzerinde büyük ölçekli veri analizi servisleri. PostgreSQL, MongoDB, Kafka ve Redis ile modern mikroservis çözümleri.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tubitak',
    title: 'Research Intern / Student Researcher',
    company: 'TÜBİTAK',
    period: 'Mart 2025 - Ekim 2025',
    location: 'Sakarya, Türkiye',
    description: 'AI-Powered Automatic Arrhythmia Detection System projesi. TÜBİTAK ARDEB 1005 - New Ideas and Products Grant bursiyoneri. Proje tamamlandı.',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'ester',
    title: 'Mobile Developer Intern',
    company: 'ESTER Teknoloji',
    period: 'Ağustos 2025 - Eylül 2025',
    location: 'Eskişehir, Türkiye',
    description: 'Spor eşleştirme platformu geliştirme. Flutter ile OpenStreetMap entegrasyonu ve coğrafi konum tabanlı kullanıcı eşleştirme.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'venhancer',
    title: 'AI Engineer and R&D Intern',
    company: 'VENHANCER',
    period: 'Şubat 2025 - Haziran 2025',
    location: 'Sakarya, Türkiye',
    description: 'Agentic AI araştırma ve geliştirme. LLM ve RAG tabanlı otonom AI sistemleri. Sigorta veri analizi için TensorFlow/PyTorch modelleri.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'arduino-instructor',
    title: 'Arduino Instructor',
    company: 'Sakarya Üniversitesi Robot Topluluğu',
    period: 'Kasım 2024 - Ocak 2025',
    location: 'Sakarya, Türkiye',
    description: 'Haftalık 3 saatlik yüz yüze Arduino eğitimleri. Öğrencilere üniversite onaylı katılım sertifikası.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'fec',
    title: 'Team Lead & Developer',
    company: 'FEC - TEKNOFEST',
    period: 'Ekim 2023 - Eylül 2024',
    location: 'Sakarya, Türkiye',
    description: 'TEKNOFEST finalist takım lideri. Otonom Yönlendirmeli Araç (AGV) teknolojileri. Özel mesh network protokolü tasarımı. YOLO, Python, Flask, Flutter.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'yeditek',
    title: 'Computer Vision Intern',
    company: 'Yeditek Yeni Dijital Teknolojiler A.Ş.',
    period: 'Haziran 2024 - Ağustos 2024',
    location: 'Bursa, Türkiye',
    description: 'Endüstriyel kalite kontrol için derin öğrenme tabanlı yazılım. Babe Metal için %92 doğruluk oranıyla ürün hata sınıflandırması.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'prometheus',
    title: 'Co-Founder & Developer',
    company: 'Prometheus - TEKNOFEST',
    period: '2022 - Mayıs 2023',
    location: 'Sakarya, Türkiye',
    description: 'YOLOv5 derin öğrenme modeli geliştirme. Yapay Zeka kategorisinde Türkiye 10.su. Ertuğrul Yapan, Arda Elmacı ve Kemal Emirhan Ceylan ile kurucu ortak.',
    color: 'from-violet-500 to-purple-500',
  },
]

const education = [
  {
    id: 'master',
    title: 'Yüksek Lisans',
    school: 'Sakarya Üniversitesi',
    department: 'Bilgisayar Mühendisliği',
    period: 'Ocak 2026 - Aralık 2027',
    location: 'Sakarya, Türkiye',
    status: 'Devam Ediyor',
    icon: '🎓',
  },
  {
    id: 'bachelor',
    title: 'Lisans',
    school: 'Sakarya Üniversitesi',
    department: 'Bilgisayar Mühendisliği',
    period: 'Eylül 2020 - Temmuz 2025',
    location: 'Sakarya, Türkiye',
    status: 'Mezun',
    icon: '🎓',
  },
  {
    id: 'highschool',
    title: 'Lise',
    school: 'Emir Sultan Anadolu Lisesi',
    department: '',
    period: '2016 - 2020',
    location: 'Türkiye',
    status: 'Mezun (3.sü)',
    icon: '🏫',
  },
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'mobile', label: 'Mobil' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'iot', label: 'IoT' },
]

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

const achievementMedia = [
  {
    id: 'tuva-atasever',
    title: 'Sakarya Belediyesi Ödülü',
    subtitle: 'Görme Engelliler için RFID Navigasyon',
    person: 'Tuva Cihangir Atasever ile',
    image: '/images/old-portfolio/bel.jpeg',
    size: 'large',
  },
  {
    id: 'fec-team',
    title: 'Teknofest 2024 Finalist',
    subtitle: 'FEC Takımı - Dijital Teknolojiler',
    person: 'Otonom Yönlendirmeli Araç Projesi',
    image: '/images/old-portfolio/2024-takim.jpeg',
    size: 'medium',
  },
  {
    id: 'prometheus',
    title: 'Teknofest 2022 İlk 10',
    subtitle: 'Prometheus - Yapay Zeka',
    person: 'YOLOv5 Deep Learning Modeli',
    image: '/images/old-portfolio/2022-prometheus.jpeg',
    size: 'medium',
  },
]

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
            Merhaba, ben <span class="gradient-text">Mustafa</span>
          </h1>
          
          <div class="flex flex-wrap justify-center gap-2 mb-4">
            <span class="badge">Computer Engineer</span>
            <span class="badge">AI & ML Specialist</span>
            <span class="badge">Full-Stack Developer</span>
          </div>

          <p class="text-text-secondary max-w-2xl mx-auto mb-8">
            Yazılım dünyasında sürekli öğrenen ve kendini geliştiren bir mühendis. Yapay zeka, gömülü sistemler ve modern web teknolojileri ile ilgileniyorum. Temiz ve pratik çözümler üretmek benim tutkum.
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

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about-me/resumes/linkedin-resume.pdf" class="btn-primary">
              <Download class="w-5 h-5 mr-2" />
              CV İndir
            </a>
            <a href="mailto:mustafabicer.iletisim@gmail.com" class="btn-secondary">
              <Mail class="w-5 h-5 mr-2" />
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hikayem & Başarılarım -->
    <section class="section-padding bg-background-card/30">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          Hikayem <span class="gradient-text">& Başarılarım</span>
        </h2>

        <div class="max-w-3xl mx-auto mb-8">
          <div class="card mb-6">
            <p class="text-text-secondary">
              Yazılıma olan tutkum lise yıllarında başladı. Sakarya Üniversitesi Bilgisayar Mühendisliği bölümünde okurken, robotics kulübünde arkadaşlarıma Arduino ve yazılım eğitimi verdim. Mezun olduktan sonra Venhancer, Yeditek ve ESTER gibi şirketlerde çalışarak deneyim kazandım.
            </p>
          </div>
          <div class="card">
            <p class="text-text-secondary">
              Şu anda hem freelance olarak AI ve Full Stack projeler üzerinde çalışıyor, hem de yüksek lisans eğitimime devam ediyorum. TÜBİTAK bursiyoneri olarak AI-Powered Arrhythmia Detection projesi üzerinde araştırma yapıyorum. Teknofest yarışmalarında FEC ve Prometheus takımlarıyla çalışarak hem teknik hem de liderlik becerilerimi geliştirdim.
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

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">5+</div>
            <div class="text-text-muted text-sm">Yıl Deneyim</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">3</div>
            <div class="text-text-muted text-sm">Store Uygulaması</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">2x</div>
            <div class="text-text-muted text-sm">Teknofest Finalist</div>
          </div>
          <div class="card text-center py-6">
            <div class="text-3xl font-bold gradient-text mb-1">1</div>
            <div class="text-text-muted text-sm">TÜBİTAK Bursiyeri</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          Deneyimlerim <span class="gradient-text">& Kariyer</span>
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
                      <h3 class="font-semibold text-text-primary">{{ exp.title }}</h3>
                      <div class="flex items-center gap-2 text-text-secondary text-sm flex-wrap">
                        <span class="font-medium">{{ exp.company }}</span>
                        <span class="text-accent-blue">•</span>
                        <span class="flex items-center gap-1"><MapPin class="w-3 h-3" />{{ exp.location }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-accent-blue text-sm font-medium mb-3">{{ exp.period }}</div>
                  <p class="text-text-muted text-sm">{{ exp.description }}</p>
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
          Eğitim <span class="gradient-text">& Sertifikalar</span>
        </h2>

        <div class="max-w-4xl mx-auto space-y-6">
          <div 
            v-for="edu in education" 
            :key="edu.id"
            class="card"
          >
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-purple-500/20 flex items-center justify-center shrink-0">
                <span class="text-2xl">{{ edu.icon }}</span>
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

    <!-- Skills Grid with Icons -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          Yeteneklerim <span class="gradient-text">& Teknolojiler</span>
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
          Tüm <span class="gradient-text">Projelerim</span>
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
                  <Github class="w-3 h-3" /> GitHub
                </a>
                <a 
                  v-if="project.links?.googlePlay" 
                  :href="project.links.googlePlay"
                  target="_blank"
                  class="text-xs text-accent-blue hover:underline flex items-center gap-1"
                >
                  <ExternalLink class="w-3 h-3" /> Play Store
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
            İş Birliği için <span class="gradient-text">İletişime Geç</span>
          </h2>
          <p class="text-text-secondary mb-8">
            Bir projeniz mi var? Birlikte çalışmak ister misiniz? Her zaman yeni fikirlere açığım.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mustafabicer.iletisim@gmail.com" class="btn-primary">
              <Mail class="w-5 h-5 mr-2" />
              Email Gönder
            </a>
            <a href="https://www.linkedin.com/in/mustafa-biçer-7164221b4" target="_blank" class="btn-secondary">
              <Linkedin class="w-5 h-5 mr-2" />
              LinkedIn Üzerinden Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
