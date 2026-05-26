export interface Project {
  id: string
  title: string
  description: string
  titleEn: string
  descriptionEn: string
  category: 'mobile' | 'web' | 'ai' | 'iot' | 'opensource' | 'demo'
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
    titleEn: 'QR Master',
    descriptionEn: 'QR code scanning and generation app. Fast and reliable QR solutions.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: '/images/app-icons/qr-master.png',
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
    titleEn: 'Talkie: WIFI Walkie Talkie',
    descriptionEn: 'Walkie talkie app for wireless communication over WiFi.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'WebSocket'],
    image: '/images/app-icons/talkie.png',
    links: {
      live: 'https://talkie.dagsolution.com',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.dag.ptt_2026',
      appGallery: 'https://appgallery.huawei.com/#/app/C116621043',
    },
    featured: true,
  },
  {
    id: 'harmonia',
    title: 'Harmonia',
    description: 'Frekans tabanlı ses terapi uygulaması. Solfeggio, binaural beats ve isochronic atımlar.',
    titleEn: 'Harmonia',
    descriptionEn: 'Frequency-based sound therapy app. Solfeggio, binaural beats, and isochronic tones.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart'],
    image: '/images/app-icons/harmonia.png',
    links: {
      live: 'https://harmonia.dagsolution.com',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.dag.harmonia',
    },
    featured: true,
  },
  {
    id: 'kdv-2026',
    title: 'KDV 2026',
    description: 'Katma Değer Vergisi hesaplama ve takip uygulaması.',
    titleEn: 'KDV 2026',
    descriptionEn: 'Value Added Tax calculation and tracking app.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart'],
    image: '/images/app-icons/kdv-2026.png',
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
    titleEn: 'Agentic-AI',
    descriptionEn: 'Modular AI chat application. LLM, regression analysis, and image classification features.',
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
    titleEn: 'ECG Vision App',
    descriptionEn: 'ECG analysis and doctor authentication system. AI-powered heart rhythm analysis.',
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
    titleEn: 'YOLOv9-bit',
    descriptionEn: 'Custom YOLOv9 deep learning model for ECG analysis.',
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
    titleEn: 'Standard ESP Environment',
    descriptionEn: 'Standard development environment and libraries for ESP embedded systems.',
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
    titleEn: 'Mesh Network Protocol',
    descriptionEn: 'Custom mesh network protocol for the FEC team. Supports STM32, Arduino, and ESP.',
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
    titleEn: 'RFID City Navigation',
    descriptionEn: 'RFID-based city navigation system for visually impaired. Sakarya Municipality award-winning project.',
    category: 'iot',
    techStack: ['Python', 'Arduino', 'RFID', 'IoT'],
    links: {
      github: 'https://github.com/poqob',
    },
    featured: false,
  },
  {
    id: 'ssid-spoofer-pro',
    title: 'ESP32 SSID Spoofer Pro',
    description: 'ESP32 tabanlı web kontrollü SSID beacon flooding aracı. Bağlantı girişimi kaydı, OUI vendor tespiti, per-SSID kilit yönetimi.',
    titleEn: 'ESP32 SSID Spoofer Pro',
    descriptionEn: 'ESP32-based web-controlled SSID beacon flooding tool. Connection attempt logging, OUI vendor detection, per-SSID lock management.',
    category: 'iot',
    techStack: ['C', 'C++', 'ESP-IDF', 'PlatformIO', 'WiFi', 'Embedded'],
    links: {
      github: 'https://github.com/poqob/esp32-ssid-spoofer-pro',
    },
    featured: true,
  },
  // Demo Web Projeleri
  {
    id: 'balkaymak',
    title: 'Balkaymak Kafe',
    description: 'Dondurma & kafe web sitesi. Demo adisyon ve demo menü sistemi entegre.',
    titleEn: 'Balkaymak Cafe',
    descriptionEn: 'Ice cream & cafe website. Integrated demo checkout and menu system.',
    category: 'demo',
    techStack: ['Nuxt', 'Vue', 'Tailwind', 'TypeScript'],
    image: '/images/demo/balkaymak-cover.svg',
    links: {
      live: 'https://balkaymak.dagsolution.com',
    },
    featured: true,
  },
  {
    id: 'pastry',
    title: 'Pastry Kafe',
    description: 'Pastane & kafe web sitesi. Menü ve adisyon sistemi ile komple çözüm.',
    titleEn: 'Pastry Cafe',
    descriptionEn: 'Patisserie & cafe website. Complete solution with menu and checkout system.',
    category: 'demo',
    techStack: ['Nuxt', 'Vue', 'Tailwind', 'TypeScript'],
    image: '/images/demo/pastry-cover.jpeg',
    links: {
      live: 'https://pastry.dagsolution.com',
    },
    featured: true,
  },
  {
    id: 'berber',
    title: 'Berber Sıra',
    description: 'Berberlere özel ücretsiz kuyruk & sıra yazılımı. PWA, WhatsApp entegrasyonu, geçmiş müşteri kaydı ve tek tuşla arama.',
    titleEn: 'Berber Sıra',
    descriptionEn: 'Free queue & appointment software for barbers. PWA, WhatsApp integration, customer history, and one-touch calling.',
    category: 'demo',
    techStack: ['Vue', 'Vite', 'TypeScript', 'Tailwind', 'PWA'],
    image: '/images/demo/berber-app-icon.svg',
    links: {
      live: 'https://berber.dagsolution.com',
    },
    featured: true,
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
