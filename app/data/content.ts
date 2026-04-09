export interface Project {
  id: string
  title: string
  description: string
  category: 'mobile' | 'web' | 'ai' | 'iot' | 'opensource'
  techStack: string[]
  image?: string
  links?: {
    github?: string
    live?: string
    googlePlay?: string
    appGallery?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  // Mobil Uygulamalar
  {
    id: 'qr-master',
    title: 'QR Master',
    description: 'QR kod tarama ve oluşturma uygulaması. Hızlı ve güvenilir QR çözümleri.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.dag.qr_2026',
      appGallery: 'https://appgallery.huawei.com/#/app/C116376795',
    },
    featured: true,
  },
  {
    id: 'talkie',
    title: 'Talkie: WIFI Walkie Talkie',
    description: 'WiFi üzerinden kablosuz iletişim sağlayan walkie talkie uygulaması.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'WebSocket'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.dag.ptt_2026',
      appGallery: 'https://appgallery.huawei.com/#/app/C116621043',
    },
    featured: true,
  },
  {
    id: 'kdv-2026',
    title: 'KDV 2026',
    description: 'Katma Değer Vergisi hesaplama ve takip uygulaması.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.dag.kdv_2026',
      appGallery: 'https://appgallery.huawei.com/#/app/C116620695',
    },
    featured: true,
  },
  // AI & ML Projeleri
  {
    id: 'agentic-ai',
    title: 'Agentic-AI',
    description: 'Modüler AI chat uygulaması. LLM, regresyon analizi ve görüntü sınıflandırma özellikleri.',
    category: 'ai',
    techStack: ['Python', 'Flask', 'JavaScript', 'Ollama API'],
    links: {
      github: 'https://github.com/poqob/agentic-ai',
    },
    featured: true,
  },
  {
    id: 'ecg-vision',
    title: 'ECG Vision App',
    description: 'EKG analizi ve doktor kimlik doğrulama sistemi. Yapay zeka destekli kalp ritmi analizi.',
    category: 'ai',
    techStack: ['Flutter', 'Dart', 'Python', 'Flask', 'YOLOv9'],
    links: {
      github: 'https://github.com/poqob/ekg-vision-app',
    },
    featured: true,
  },
  {
    id: 'yolov9-bit',
    title: 'YOLOv9-bit',
    description: 'EKG analizi için özelleştirilmiş YOLOv9 derin öğrenme modeli.',
    category: 'ai',
    techStack: ['Python', 'PyTorch', 'YOLOv9', 'OpenCV'],
    links: {
      github: 'https://github.com/poqob/yolov9-bit',
    },
    featured: true,
  },
  // IoT & Açık Kaynak
  {
    id: 'std-env-esp',
    title: 'Standard ESP Environment',
    description: 'ESP gömülü sistemler için standart geliştirme ortamı ve kütüphaneler.',
    category: 'iot',
    techStack: ['C++', 'ESP-IDF', 'Embedded', 'Arduino'],
    links: {
      github: 'https://github.com/poqob/std-env-esp',
    },
    featured: true,
  },
  {
    id: 'mesh-network-protocol',
    title: 'Mesh Network Protocol',
    description: 'FEC takımı için geliştirilen özel mesh ağ protokolü. STM32, Arduino ve ESP destekler.',
    category: 'iot',
    techStack: ['C++', 'STM32', 'ESP', 'Arduino', 'MQTT'],
    links: {
      github: 'https://github.com/poqob',
    },
    featured: false,
  },
  {
    id: 'rfid-navigation',
    title: 'RFID City Navigation',
    description: 'Görme engelliler için RFID tabanlı şehir navigasyon sistemi. Sakarya Belediyesi ödüllü proje.',
    category: 'iot',
    techStack: ['Python', 'Arduino', 'RFID', 'IoT'],
    links: {
      github: 'https://github.com/poqob',
    },
    featured: false,
  },
]

export const services = [
  {
    id: 'mobile',
    title: 'Mobil Uygulama Geliştirme',
    description: 'iOS ve Android için modern, performanslı mobil uygulamalar.',
    icon: 'Smartphone',
  },
  {
    id: 'web',
    title: 'Web Uygulamaları',
    description: 'Modern frontend ve backend çözümleri ile ölçeklenebilir web uygulamaları.',
    icon: 'Globe',
  },
  {
    id: 'ai',
    title: 'AI & Makine Öğrenmesi',
    description: 'LLM entegrasyonu, Computer Vision ve RAG tabanlı çözümler.',
    icon: 'Brain',
  },
  {
    id: 'iot',
    title: 'IoT Çözümleri',
    description: 'Gömülü sistemler, mesh networking ve endüstriyel otomasyon.',
    icon: 'Cpu',
  },
  {
    id: 'consulting',
    title: 'Yazılım Danışmanlığı',
    description: 'Teknik danışmanlık, mimari tasarım ve kod review.',
    icon: 'Lightbulb',
  },
  {
    id: 'api',
    title: 'API & Backend',
    description: 'RESTful/GraphQL API\'ler ve mikro servis mimarileri.',
    icon: 'Server',
  },
]
