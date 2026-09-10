export type ProjectCategory = 'commercial' | 'mobile' | 'web' | 'ai' | 'iot' | 'devops' | 'opensource' | 'demo'

export interface Project {
  id: string
  title: string
  description: string
  titleEn: string
  descriptionEn: string
  longDescription?: string
  longDescriptionEn?: string
  highlights?: string[]
  highlightsEn?: string[]
  category: ProjectCategory
  categories?: ProjectCategory[]
  techStack: string[]
  image?: string
  links?: {
    github?: string
    live?: string
    googlePlay?: string
    appStore?: string
    appGallery?: string
    youtube?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  // Kurumsal Projeler (Commercial)
  {
    id: 'pdks',
    title: 'Mobil PDKS',
    description: 'Donanımsız, poligon geofence ve dinamik QR doğrulamalı yeni nesil personel takip ve mesai yönetim sistemi. React PWA ve Go mimarisiyle canlıda aktif.',
    titleEn: 'Mobile PDKS',
    descriptionEn: 'Next-gen hardware-free time & attendance system with polygon geofencing and dynamic QR. Built with React PWA and Go, active in production.',
    longDescription: 'Geleneksel turnike ve parmak izi donanımlarına ihtiyaç duymayan bulut tabanlı yeni nesil personel devam kontrol sistemi (PDKS). Fabrika ve şantiye sınırlarında poligon geofence ile çalışanların konumunu doğrular; ortak ekranlardaki saniyeler içinde yenilenen dinamik QR kodlar sayesinde sahte mesai basımını %100 engeller. İnternet kesintilerinde çevrimdışı kuyruk mekanizması ile kesintisiz çalışır.',
    longDescriptionEn: 'A next-generation cloud-based time & attendance system that eliminates turnstiles and biometric hardware. Validates employee location using polygon geofencing within architectural job site boundaries; completely prevents buddy punching through dynamic, cryptographically refreshed QR codes. Operates seamlessly offline with automatic queue synchronization.',
    highlights: [
      'Donanımsız & Biyometriksiz: Cihaz bakım maliyeti yok, %100 KVKK uyumlu',
      'Poligon Geofence: Daire yerine işletmenin gerçek mimari sınırlarında harita doğrulaması',
      'Dinamik QR Kod: 10 saniyede bir kriptografik yenilenen ekran görüntüsü korumalı kod',
      'Mola & Vardiya Yönetimi: Esnek nöbet, izin onay ve anlık mesai durum takibi',
      'Otomatik Puantaj: Resmi mevzuata uyumlu Excel/PDF ve muhasebe programı entegrasyonu',
      'Çevrimdışı Çalışma: Hücresel verinin çekmediği bodrum ve sahalarda kuyruklu senkronizasyon'
    ],
    highlightsEn: [
      'Hardware-free & Non-biometric: Zero device maintenance, 100% data privacy compliant',
      'Polygon Geofencing: Architectural boundary verification with OS-level anti-spoofing',
      'Dynamic QR Authentication: Cryptographically refreshed every 10s against remote punching',
      'Shifts & Leave Tracking: Paperless approvals, live break times, and rotational shifts',
      'Automated Payroll Reports: Official labor-compliant Excel/PDF export ready for ERPs',
      'Offline Queueing: Full functionality in low-signal construction sites and basements'
    ],
    category: 'commercial',
    categories: ['commercial', 'mobile'],
    techStack: ['React', 'Go', 'PWA', 'MongoDB', 'Redis', 'MinIO'],
    image: '/images/commercial/pdks-cover.webp',
    links: {
      live: 'https://pdks.dagsolution.com',
    },
    featured: true,
  },
  {
    id: '3d-store',
    title: '3D StoreLink',
    description: 'Endüstriyel CAD çizimlerini (STP, STEP, STL, OBJ) bulutta otomatik Web GLB formatına dönüştüren, tek satır kodla 3D & AR gösterimi ve küresel CDN dağıtımı sağlayan kurumsal SaaS platformu.',
    titleEn: '3D StoreLink',
    descriptionEn: 'Enterprise SaaS platform converting industrial CAD models (STP, STEP, STL, OBJ) into web-optimized GLB files with single-line embed 3D & AR display and global CDN delivery.',
    longDescription: 'Makine üreticileri, endüstriyel tesisler ve e-ticaret markaları için geliştirilmiş yüksek performanslı 3D & Artırılmış Gerçeklik (AR) dağıtım altyapısı. SolidWorks, FreeCAD, CATIA ve Siemens NX gibi CAD yazılımlarından çıkan ağır dosyaları (STP, STEP, STL, OBJ) Go ve OpenCASCADE/FreeCAD çekirdeğiyle işleyerek saniyeler içinde %80+ sıkıştırılmış, web ve AR uyumlu GLB formatına dönüştürür. Dağıtık MinIO nesne depolama, Redis kuyruk mimarisi, PostgreSQL ilişkisel veri tabanı ve WebSocket tabanlı anlık model dönüşüm senkronizasyonu ile çalışır. İleri network ve streaming mimarisi (HTTP Range Requests, geo-routing, CDN önbellekleme) sayesinde megabaytlarca büyüklükteki 3D modelleri gecikmesiz akıtır. WebXR, Apple QuickLook ve Android Scene Viewer ile kullanıcılara uygulama yükletmeden 1:1 ölçekli AR deneyimi sunar.',
    longDescriptionEn: 'High-performance 3D & Augmented Reality (AR) distribution infrastructure designed for industrial manufacturers, machine builders, and e-commerce platforms. Automatically ingests heavy CAD models (STP, STEP, STL, OBJ) from SolidWorks, FreeCAD, CATIA, and Siemens NX, converting them into 80%+ compressed web-optimized GLB files using a Go-powered OpenCASCADE/FreeCAD processing pipeline. Built on distributed MinIO object storage, Redis task queues, PostgreSQL, and WebSocket-based real-time conversion sync. Leverages advanced networking and streaming protocols (HTTP Range Requests, geo-routing, CDN edge caching) for zero-lag 3D mesh streaming, enabling app-free 1:1 scale AR via WebXR, iOS QuickLook, and Android Scene Viewer.',
    highlights: [
      'CAD → Web GLB Dönüşüm Motoru: Golang & FreeCAD / OpenCASCADE mikroservis mimarisiyle STP, STEP, STL, OBJ dosyalarını otomatik dönüştürme',
      'Uygulamasız 1:1 Ölçekli AR: WebXR, iOS QuickLook ve Android Scene Viewer standartları sayesinde ek uygulama indirmeden tarayıcıdan Artırılmış Gerçeklik',
      'Dağıtık Depolama & Kuyruk: MinIO S3 uyumlu nesne depolama, Redis tabanlı asenkron dönüşüm iş kuyrukları ve PostgreSQL ilişkisel veri yapısı',
      'Gerçek Zamanlı WebSocket İletişimi: Model dönüştürme süreçlerinin, durum bildirimlerinin ve 3D stüdyo parametrelerinin anlık senkronizasyonu',
      'İleri Network & Akış (Streaming) Mimarisi: HTTP Range Requests, CORS koruma katmanı, dinamik geo-routing ve yüksek performanslı CDN veri dağıtımı',
      'React PWA Panel & 3D Stüdyo: Three.js ve Vite destekli masaüstü/mobil Progressive Web App stüdyosu ile ışık, materyal ve kamera açılarını özelleştirme'
    ],
    highlightsEn: [
      'CAD to Web GLB Engine: Automated conversion of STP, STEP, STL, OBJ via Go and FreeCAD / OpenCASCADE microservices',
      'Zero-Install 1:1 Scale AR: Browser-native Augmented Reality powered by WebXR, Apple QuickLook, and Google Scene Viewer',
      'Distributed Storage & Queuing: MinIO S3-compatible object store, Redis async task queues, and relational PostgreSQL database',
      'Real-Time WebSocket Sync: Instant pipeline progress updates, conversion event streams, and live 3D studio parameter sync',
      'Advanced Network & Streaming: HTTP Range Requests, strict CORS domain isolation, dynamic geo-routing, and CDN edge delivery',
      'React PWA Studio: Progressive Web App management panel built with React, Vite, and Three.js for custom lighting, textures, and cameras'
    ],
    category: 'commercial',
    categories: ['commercial', 'web'],
    techStack: ['Go', 'React', 'MinIO', 'Redis', 'PostgreSQL', 'FreeCAD', 'WebSocket', 'AR (WebXR)', 'PWA', 'CDN & Network'],
    image: '/images/commercial/3d-store-cover.webp',
    links: {
      live: 'https://3dstorelink.com',
    },
    featured: true,
  },
  {
    id: 'redfirst',
    title: 'Redfirst',
    description: 'Markaların ChatGPT, Claude, Perplexity ve Gemini gibi büyük dil modellerinde (LLM) organik olarak önerilmesini sağlayan, Reddit & OpenAI API entegrasyonlu kurumsal Yapay Zeka SEO (AIO / GEO) platformu.',
    titleEn: 'Redfirst',
    descriptionEn: 'Enterprise Generative Engine Optimization (GEO / AIO) platform with Reddit & OpenAI API integration that positions brands organically inside ChatGPT, Claude, Perplexity, and Gemini.',
    longDescription: 'ChatGPT, Claude, Perplexity ve Gemini gibi yeni nesil yapay zeka asistanları, kullanıcıların ürün, servis ve marka araştırması sorularında kaynaklarının ortalama %41\'ini Reddit ve çevrim içi topluluk tartışmalarından besler. Redfirst; markaların bu yapay zeka referans ve alıntı ekosisteminde organik olarak öne çıkmasını sağlayan kurumsal bir Yapay Zeka SEO (GEO / AIO) yönetim platformudur. Go (Fiber) mikroservis mimarisi, modern React yönetim arayüzü, MongoDB veri tabanı ve Redis önbellekleme katmanıyla geliştirilmiştir. Platform; Reddit API üzerinden ilgili sektör tartışmalarını ve alt dizinleri (subreddits) 7/24 dinler, RAG (Retrieval-Augmented Generation) mimarisi ve OpenAI API entegrasyonu ile markanın kurumsal bilgi tabanına göre doğal, bağlamsal ve insan onayından geçen yanıt stratejileri kurgular. Markaların hem yapay zeka yanıtlarında güvenilir referans olarak tavsiye edilmesini hem de geleneksel arama motorlarında organik otorite kazanmasını sağlar.',
    longDescriptionEn: 'Modern conversational AI models such as ChatGPT, Claude, Perplexity, and Gemini derive an average of 41% of their recommendations directly from Reddit and community discussions. Redfirst is an enterprise Generative Engine Optimization (GEO / AIO) platform designed to position brands at the heart of this LLM citation ecosystem. Engineered with a high-performance Go (Fiber) backend, React management frontend, MongoDB data layer, and Redis caching. The platform continuously monitors industry-specific discussions via the Reddit API, generates context-aware responses aligned with corporate knowledge bases using RAG pipelines and the OpenAI API, and systematically turns LLMs into sustainable organic referral channels.',
    highlights: [
      'Yapay Zeka Referans Optimizasyonu (GEO / AIO): ChatGPT, Claude, Perplexity ve Gemini yanıtlarında markanızın organik tavsiye olarak listelenmesi',
      'Reddit API Entegrasyonu: Sektörünüzle ve ürünlerinizle ilgili alt dizinlerin (subreddits) ve tartışmaların 7/24 otomatik taranması',
      'OpenAI & RAG İçerik Motoru: Jina AI ve vektör bağlamlarıyla zenginleştirilmiş, kurumsal tona uyarlanabilir doğal yapay zeka yanıt üretimi',
      'Yüksek Performanslı Go & MongoDB Mimarisi: Go (Fiber) ile asenkron API işleme, esnek MongoDB doküman modeli ve Redis önbellek katmanı',
      'Kurumsal Görev & Onay Akışları: Bilgi tabanı (Knowledge Base) yönetimi, çoklu müşteri desteği ve insan denetimli yanıt onay süreçleri',
      'Ölçülebilir LLM & Token Analitiği: Yapay zeka görünürlük skorları, token kullanım metrikleri ve organik etkileşim raporlaması'
    ],
    highlightsEn: [
      'LLM Citation Optimization (GEO / AIO): Strategic placement of your brand as a trusted recommendation across ChatGPT, Claude, and Perplexity',
      'Real-Time Reddit API Monitoring: 24/7 automated listening across high-intent industry subreddits and organic discussion threads',
      'OpenAI & RAG Generation Pipeline: Context-aware, natural responses tuned to brand voice using vector embeddings and Jina AI web scraping',
      'High-Throughput Go & MongoDB Stack: Asynchronous REST API powered by Go (Fiber), flexible MongoDB schemas, and Redis caching',
      'Enterprise Workflow & Task Management: Centralized Knowledge Base, client approval workflows, and multi-tenant task distribution',
      'Actionable Token & Visibility Analytics: In-depth metrics tracking LLM presence, organic sentiment, and OpenAI token consumption'
    ],
    category: 'commercial',
    categories: ['commercial', 'ai', 'web'],
    techStack: ['React', 'Go', 'OpenAI API', 'Reddit API', 'MongoDB', 'Redis'],
    image: '/images/commercial/redfirst-cover.webp',
    links: {
      live: 'https://www.redfirst.net',
    },
    featured: true,
  },
  {
    id: 'gecer',
    title: 'GEÇER — SMMM Yeterlilik Soru Bankası & Sınav Platformu',
    description: 'SMMM Yeterlilik sınavına hazırlanan adaylar için 5.000+ çözümlü soru, 8 dersin tamamı, gerçek formatta süreli deneme sınavları, bilgi kartları ve RevenueCat abonelik altyapısı sunan iOS & Android mobil uygulaması.',
    titleEn: 'GEÇER — CPA Exam Prep & Question Bank Mobile Platform',
    descriptionEn: 'Comprehensive CPA qualification exam prep platform for iOS & Android featuring 5,000+ solved questions, full 8-subject curriculum, timed mock exams, flashcards, and RevenueCat subscription monetization.',
    longDescription: 'Türkiye\'de Serbest Muhasebeci Mali Müşavirlik (SMMM) Yeterlilik sınavlarına hazırlanan adaylar için DagSolution tarafından geliştirilmiş ve canlıda binlerce adaya hizmet veren profesyonel mobil EdTech platformu. Flutter ile iOS ve Android platformları için yerel performansla geliştirilen uygulama; 8 temel dersin (Finansal Muhasebe, Vergi Mevzuatı, Hukuk, Denetim, Maliyet Muhasebesi vb.) tamamını kapsayan 5.000\'den fazla ayrıntılı çözümlü soru, gerçek sınav formatında süreli denemeler, hızlı kavram tekrarları için interaktif bilgi kartları ve zayıf konuları tespit eden performans analiz grafikleri sunar. Python FastAPI mikroservis mimarisi, JWT token tabanlı kimlik doğrulama, RevenueCat ile App Store & Google Play uygulama içi abonelik yönetimi ve Firebase Analytics entegrasyonuyla tam teşekküllü bir ticari SaaS ürünüdür.',
    longDescriptionEn: 'A production-grade mobile EdTech SaaS engineered by DagSolution for candidates preparing for the Certified Public Accountant (SMMM / CPA) Qualification Examinations in Turkey. Built with Flutter for native iOS and Android performance, the platform encompasses over 5,000 in-depth solved questions across all 8 curriculum subjects (Financial Accounting, Tax Legislation, Auditing, Cost Accounting, Corporate Law, etc.). Features realistic timed mock examinations, interactive flashcards for micro-learning, cross-device progress synchronization, and granular performance diagnostics identifying weak knowledge areas. Powered by a high-throughput Python FastAPI microservice backend, JWT session security, RevenueCat cross-platform in-app subscriptions, and Firebase Analytics.',
    highlights: [
      '5.000+ Çözümlü Soru Arşivi: Her sorunun gerekçeli ve ayrıntılı açıklamasıyla ezberletmeden kavratan zengin içerik',
      '8 Dersin Eksiksiz Müfredatı: Finansal Muhasebe, Vergi Hukuku, Denetim, Maliyet ve Sermaye Piyasası dahil tüm dersler',
      'Gerçek Formatlı Süreli Deneme Sınavları: Resmi sınav temposunu simüle eden geri sayımlı denemeler ve puanlama motoru',
      'Kaldığı Yerden Devam & Bulut Senkronizasyon: Yarıda bırakılan sınavları cihazlar arasında kayıpsız sürdürme',
      'Akıllı Performans & Gelişim Analizi: Konu ve ders bazında doğru/yanlış oranlarını gösteren veriye dayalı başarı grafikleri',
      'RevenueCat Çapraz Platform Abonelik: App Store ve Google Play üzerinden güvenli ve anlık uygulama içi satın alma/üyelik altyapısı'
    ],
    highlightsEn: [
      '5,000+ In-Depth Solved Questions: Detailed explanatory solutions for every problem teaching core methodology rather than memorization',
      'Complete 8-Subject Curriculum: Full coverage of Financial Accounting, Tax Legislation, Auditing, Cost Accounting, and Commercial Law',
      'Timed Mock Examination Engine: Realistic exam simulation with customizable countdown timers and instant grading analytics',
      'Continuous Cloud Progress Sync: Resume interrupted exams across devices with seamless backend state persistence',
      'Data-Driven Performance Diagnostics: Real-time subject-by-subject accuracy breakdowns highlighting weak topics for targeted revision',
      'RevenueCat Subscription Monetization: Frictionless cross-platform in-app purchases and tiered membership on App Store & Google Play'
    ],
    category: 'commercial',
    categories: ['commercial', 'mobile'],
    techStack: ['Flutter', 'Dart', 'FastAPI', 'Python', 'RevenueCat', 'Firebase', 'iOS', 'Android'],
    image: '/images/commercial/gecer-cover.webp',
    links: {
      live: 'https://gecer.dagsolution.com',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.afk.smmm',
      appStore: 'https://apps.apple.com/tr/app/ge%C3%A7er-smmm-yeterlilik/id6772831872?l=tr',
    },
    featured: true,
  },
  // Mobil Uygulamalar
  {
    id: 'reply-ai',
    title: 'Replai - Cihaz İçi Yapay Zeka E-posta Asistanı',
    description: 'Gizlilik odaklı, tamamen cihaz üzerinde (on-device) yerel LLM çalıştıran Flutter tabanlı akıllı e-posta yanıt asistanı.',
    titleEn: 'Replai - On-Device AI Email Assistant',
    descriptionEn: 'Privacy-first, 100% on-device AI email reply assistant built with Flutter, running local LLMs directly on mobile.',
    longDescription: 'Kişisel verilerin ve iş yazışmalarının gizliliğini en üst seviyede tutmak amacıyla geliştirilmiş, bulut veya harici yapay zeka sunucularına bağlanmadan tamamen mobil cihaz üzerinde (on-device) çalışan yeni nesil e-posta yanıt asistanı. IMAP ve SMTP protokolleri üzerinden mevcut e-posta hesaplarınıza doğrudan bağlanır; Vulkan GPU hızlandırmalı yerel LLM (Llama) motoruyla e-postalarınızı analiz ederek saniyeler içinde bağlama uygun akıllı yanıtlar üretir. E-postalarınız ve şifreleriniz asla cihazınızdan ayrılmaz.',
    longDescriptionEn: 'A privacy-first, on-device AI email reply assistant built with Flutter that runs local Large Language Models (LLM) directly on your device with zero cloud dependency. Connects natively to your email server via IMAP and SMTP, generating context-aware smart replies in real time using Vulkan GPU acceleration. Your emails, prompts, and credentials strictly stay on your phone.',
    highlights: [
      'Cihaz İçi Yerel LLM: llama_flutter_android ve Vulkan GPU hızlandırmasıyla sıfır API maliyetli yerel zeka',
      '%100 Gizlilik & Güvenlik: E-postalar, istemler ve kimlik bilgileri asla harici sunuculara veya buluta aktarılmaz',
      'Doğrudan IMAP & SMTP: enough_mail ve mailer kütüphaneleriyle standart e-posta sunucularına doğrudan bağlantı',
      'Canlı Akış (Streaming) Yanıt: Token bazlı gerçek zamanlı yanıt akışı ve ton seçenekleri (resmi, samimi, kısa)',
      'Akıllı Metin & Konu Üretimi: Gelen e-posta içeriğinden otomatik konu üretimi, özetleme ve metin geliştirme',
      'Donanım Korumalı Güvenlik: flutter_secure_storage ve Hive ile e-posta anahtarları cihaz anahtarlığında şifrelenir'
    ],
    highlightsEn: [
      'On-Device Local LLM: Zero cloud dependency or API fees using llama_flutter_android with Vulkan GPU acceleration',
      '100% Privacy & Security: Personal emails, prompts, and secrets strictly remain on-device without telemetry',
      'Direct IMAP & SMTP: Native email integration via enough_mail and mailer without third-party relays',
      'Real-Time Streaming Generation: Token-by-token streaming responses with customizable tone (formal, friendly, concise)',
      'AI Text & Subject Refinement: Automatic subject line generation, smart summarization, and tone shifting',
      'Hardware Keystore Protection: Email credentials encrypted using flutter_secure_storage and local Hive database'
    ],
    category: 'mobile',
    categories: ['mobile', 'ai', 'opensource'],
    techStack: ['Flutter', 'Dart', 'LLM (Llama.cpp)', 'Riverpod', 'IMAP / SMTP', 'Hive'],
    image: '/images/app-icons/reply-ai-cover.webp',
    links: {
      github: 'https://github.com/poqob/reply-ai',
    },
    featured: true,
  },
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
      appGallery: 'https://appgallery.huawei.com/app/C118239253',
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
    title: 'Agentic-AI — Modüler LLM & Çoklu Model Yönetim Platformu',
    description: 'Ollama API (Llama 3.2), regresyon analizi ve görüntü sınıflandırma modellerini gerçek zamanlı akış (streaming), doğal dil açıklamaları ve akıllı ev simülasyonuyla birleştiren modüler Flask platformu.',
    titleEn: 'Agentic-AI — Modular LLM & Multi-Model Platform',
    descriptionEn: 'Modular Flask application integrating Ollama API (Llama 3.2), regression models, and image classification with real-time streaming, natural language explanations, and smart home simulation.',
    longDescription: 'Ollama API üzerinden yerel ve açık kaynaklı Büyük Dil Modellerini (Llama 3.2 vb.) modern bir web arayüzü ile buluşturan, genişletilebilir ve modüler yapay zeka orkestrasyon platformu. Markdown destekli gerçek zamanlı token akışı (streaming chat), makine öğrenmesi regresyon tahminlerini teknik olmayan kullanıcılar için anlaşılır doğal dille özetleme, görsel sınıflandırma çıktılarını LLM muhakemesiyle açıklama ve sohbet üzerinden sanal akıllı ev aydınlatma kontrolü gibi yetenekleri bir arada sunar. Flask tabanlı modüler mikroservis mimarisi sayesinde yeni AI modelleri, eklentiler ve analitik araçları sisteme kolayca entegre edilebilir.',
    longDescriptionEn: 'An extensible, modular AI orchestration platform providing a modern web interface for Large Language Models (via Ollama API and Llama 3.2), machine learning regression, and computer vision classification. Features real-time token streaming with Markdown rendering, instant cancellation, natural language explanations for ML regression predictions, image classification with human-readable AI reasoning, and simulated smart home lights controlled via conversational prompts. Built with a decoupled microservice architecture ready for custom AI models and extensions.',
    highlights: [
      'Gerçek Zamanlı LLM Akışı: Ollama API entegrasyonuyla (Llama 3.2 vb.) Markdown destekli, anlık durdurulabilir canlı token akışı',
      'Doğal Dil Açıklamalı Regresyon: Sayısal model tahminlerini herkesin anlayabileceği akıcı ve açıklayıcı metinlere dönüştürme',
      'Görüntü Sınıflandırma & AI Muhakemesi: Yüklenen görselleri sınıflandırıp model çıktısını LLM analiziyle gerekçelendirme',
      'Akıllı Ev (IoT) Işık Simülasyonu: Doğal dil komutlarıyla ve API üzerinden kontrol edilebilen sanal ev aydınlatma eklentisi',
      'Modüler Mikroservis Mimarisi: Flask tabanlı bağımsız servis uçları, port bazlı ayrık model yönetimi ve yüksek genişletilebilirlik',
      'Kapsamlı Video Eğitim & Açık Kaynak: Detaylı kurulum, uç nokta konfigürasyonu ve kullanım adımlarını içeren YouTube rehberi'
    ],
    highlightsEn: [
      'Real-Time LLM Token Streaming: Markdown-enabled live streaming chat powered by Ollama API and Llama 3.2 with instant cancellation',
      'Natural Language Regression: Converts numerical ML model predictions into intuitive, narrative explanations',
      'Computer Vision & LLM Reasoning: Image classification backed by deep explanatory reasoning for non-technical users',
      'Smart Home Lights Simulation: Natural language conversational control for virtual home lighting environments',
      'Decoupled Microservice Architecture: Independent Flask service endpoints, multi-port model routing, and clean extensibility',
      'Comprehensive Video Tutorial & Open Source: Step-by-step YouTube guide covering setup, endpoint orchestration, and custom extensions'
    ],
    category: 'ai',
    categories: ['ai', 'opensource'],
    techStack: ['Python', 'Flask', 'Ollama API', 'Llama 3.2', 'JavaScript', 'Tailwind CSS'],
    image: '/images/ai/agentic-ai-cover.webp',
    links: {
      github: 'https://github.com/poqob/agentic-ai',
      youtube: 'https://www.youtube.com/watch?v=LiNRWBQKF_Y',
    },
    featured: true,
  },
  {
    id: 'ecg-vision',
    title: 'ECG Vision App — Doktor Kimlik Doğrulamalı EKG Analiz Platformu',
    description: 'Doktorlar için güvenli kimlik doğrulama, hasta yönetimi ve YOLOv9 derin öğrenme modeliyle EKG ritim ve aritmi analizi sağlayan Flutter ve Python Flask tabanlı mobil sağlık platformu.',
    titleEn: 'ECG Vision App — Doctor Authentication & ECG Analysis Platform',
    descriptionEn: 'Medical AI mobile platform for doctors featuring secure authentication, patient record management, and real-time ECG rhythm & arrhythmia analysis powered by YOLOv9.',
    longDescription: 'Kardiyologlar ve tıp uzmanları için geliştirilmiş, hasta verisi güvenliğini ve derin öğrenme tabanlı elektrokardiyogram (EKG) analizini birleştiren tam kapsamlı mobil sağlık sistemi. Flutter ile geliştirilen modern arayüz (koyu/açık tema desteği, kalıcı güvenli oturum, profil ve hasta yönetimi); kamera veya galeriden yüklenen EKG kâğıt şeritlerini Python Flask ve YOLOv9 derin öğrenme arka ucuna iletir. YOLOv9 modeli kalp atımlarını, ritim dalgalarını ve olası aritmi anomalilerini tespit ederek görsel sınırlayıcı kutularla (bounding box) şerit üzerinde işaretler, güven skorlarıyla raporlar ve geçmiş hasta arşivine kaydeder.',
    longDescriptionEn: 'A comprehensive medical AI application tailored for cardiologists and healthcare professionals, combining secure doctor authentication, patient management, and deep learning-based electrocardiogram (ECG) rhythm analysis. Built with Flutter (featuring light/dark theme support, persistent session management, and patient directory), it transmits scanned ECG strip images to a Python Flask backend powered by a customized YOLOv9 model. The system detects heart rhythms, cardiac waveforms, and arrhythmias, visualizing annotated bounding boxes with confidence scores directly on the mobile app and archiving historical diagnostics.',
    highlights: [
      'Doktor Kimlik Doğrulama & Oturum Güvenliği: E-posta ve kullanıcı adı doğrulaması, güvenli token tabanlı kalıcı oturum yönetimi',
      'Hasta Yönetimi & Analiz Arşivi: Hasta profili oluşturma, geçmiş EKG taramaları arasında anlık arama ve kronolojik takip',
      'YOLOv9 Derin Öğrenme Analizi: EKG ritim anomalilerini ve kalp dalgalarını yüksek doğrulukla tespit eden özel model',
      'Görsel Sınırlayıcı Kutu (Bounding Box) Etiketleme: Tespit edilen dalga ve aritmilerin EKG şeridi üzerinde renkli kutularla işaretlenmesi',
      'Kamera & Galeri Entegrasyonu: Fiziksel EKG çıktılarını doğrudan kamerayla tarama veya görsel dosya olarak yükleme',
      'Koyu & Açık Tema ve Modern UI: Sağlık çalışanlarının klinik ışık koşullarına uyum sağlayan sezgisel Flutter tasarımı'
    ],
    highlightsEn: [
      'Doctor Authentication & Secure Sessions: Robust credential validation and persistent encrypted session management',
      'Patient Management & Diagnostic Archive: Searchable patient database with chronological historical ECG scan records',
      'YOLOv9 Deep Learning Engine: High-accuracy cardiac rhythm and arrhythmia detection trained on electrocardiogram datasets',
      'Visual Bounding Box Annotations: Instant visual overlay of detected waveforms and anomalies directly on the ECG strip',
      'Camera & File Upload Pipeline: Direct camera capture of physical ECG printouts or file selection from device storage',
      'Adaptive Dark & Light UI: Ergonomic Flutter interface designed for clinical workflows across varying lighting conditions'
    ],
    category: 'ai',
    categories: ['ai', 'mobile'],
    techStack: ['Flutter', 'Dart', 'Python', 'Flask', 'YOLOv9', 'OpenCV'],
    image: '/images/ai/ecg-vision-cover.webp',
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
    title: 'Standard ESP Environment — MicroPython Geliştirme Çatısı',
    description: 'ESP32 ve ESP8266 için WiFi, AP modu, WebREPL, gömülü FTP sunucusu, BLE UART ve uzaktan HTTP komut sunucusu içeren standart MicroPython üretim çatısı.',
    titleEn: 'Standard ESP Environment — MicroPython Framework',
    descriptionEn: 'Production-ready MicroPython development framework for ESP32 and ESP8266 featuring WiFi, AP mode, WebREPL, built-in FTP server, BLE UART, and HTTP command server.',
    longDescription: 'ESP32 ve ESP8266 mikrodenetleyicileri için sıfırdan proje başlatmayı saniyelere indiren, modüler ve üretime hazır MicroPython geliştirme ortamı şablonu. Merkezi config.json üzerinden yönetilen sistem; otomatik WiFi istemci ve Access Point yapılandırması, WebSocket üzerinden çalışan tarayıcı tabanlı WebREPL terminali, kablosuz sürükle-bırak dosya transferi sağlayan dahili uftpd FTP sunucusu, mobil haberleşme için BLE UART servisi ve harici REST API üzerinden GPIO/sistem kontrolü sağlayan HTTP komut sunucusunu entegre olarak barındırır. Dinamik CPU frekans ölçekleme ve otomatik yeniden başlatma mekanizmalarıyla endüstriyel ve hobi IoT projeleri için ideal temel altyapıyı sunar.',
    longDescriptionEn: 'A modular, production-ready MicroPython framework template that accelerates IoT firmware development on ESP32 and ESP8266 boards. Managed entirely through a centralized config.json file, the architecture delivers automatic dual WiFi client & Access Point orchestration, a browser-based WebREPL interactive shell, wireless drag-and-drop file transfers via a lightweight built-in FTP server (uftpd), BLE UART communication for mobile pairing, and an authenticated REST HTTP command server for remote device execution. Features dynamic CPU clock frequency management for optimal battery life and automated watchdog health checks.',
    highlights: [
      'Merkezi JSON Yapılandırması: Tüm ağ kimlik bilgileri, servis portları ve sistem parametrelerinin tek bir config.json ile yönetimi',
      'Dahili FTP Sunucusu (uftpd): USB kablo bağımlılığını kaldıran, yerel ağ üzerinden kablosuz dosya transferi ve firmware güncelleme imkânı',
      'WebREPL Terminali: Tarayıcı üzerinden WebSocket aracılığıyla uzaktan interaktif Python komut satırı (REPL) erişimi',
      'BLE UART Periferik & Reklam: Mobil uygulamalar ve çevre birimleriyle düşük enerji tüketimli Bluetooth iletişimi',
      'Yetkili HTTP Komut Sunucusu: API anahtarı korumalı REST uç noktaları üzerinden uzaktan donanım yönetimi ve betik çalıştırma',
      'Dinamik CPU Frekans Kontrolü: Güç tüketimi ile işlemci başarımını dengeleyen dinamik frekans ve otomatik sağlık kontrolleri'
    ],
    highlightsEn: [
      'Centralized JSON Configuration: Unified management of all network credentials, active daemons, and system options via config.json',
      'Built-in FTP Server (uftpd): Cable-free wireless file synchronization and OTA script deployment over local network',
      'WebREPL Browser Terminal: Remote interactive MicroPython shell accessible directly from modern browsers via WebSockets',
      'BLE UART Peripheral & Advertising: Low-energy Bluetooth communication channel for seamless mobile app integration',
      'Secured HTTP Command Server: API-key protected REST endpoints for remote telemetry, GPIO manipulation, and command execution',
      'Dynamic CPU Frequency Scaling: Configurable clock throttling balancing battery efficiency and high-throughput processing'
    ],
    category: 'iot',
    categories: ['iot', 'opensource'],
    techStack: ['MicroPython', 'Python', 'ESP32', 'ESP8266', 'WebREPL', 'FTP Server', 'BLE UART', 'Embedded'],
    image: '/images/iot/std-env-esp-cover.webp',
    links: {
      github: 'https://github.com/poqob/std-env-esp',
    },
    featured: true,
  },
  {
    id: 'ssid-spoofer-pro',
    title: 'ESP32 SSID Spoofer Pro — Web Kontrollü Beacon Flooding & Ağ Analiz Cihazı',
    description: 'ESP32 için ESP-IDF ile geliştirilmiş, dahili web arayüzlü SSID beacon flooding, promiscuous modda Probe/Assoc istek kaydı, OUI cihaz üreticisi tespiti ve per-SSID kilit yönetimi sunan siber güvenlik araştırma aracı.',
    titleEn: 'ESP32 SSID Spoofer Pro — Web-Controlled Beacon Flooding & Network Monitor',
    descriptionEn: 'ESP-IDF powered cybersecurity research tool for ESP32 featuring a web-based control panel, SSID beacon flooding, promiscuous probe/association logging, OUI device vendor lookup, and per-SSID lock toggling.',
    longDescription: 'ESP32 platformu ve ESP-IDF çerçevesi üzerinde C diliyle optimize edilmiş, donanım seviyesinde raw 802.11 frame injection gerçekleştiren profesyonel kablosuz güvenlik araştırma ve eğitim cihazı. Harici bir mobil veya masaüstü uygulamaya gerek duymaksızın doğrudan ESP32 Access Point (http://192.168.4.1) üzerinden sunulan modern koyu temalı web paneline sahiptir. Çevredeki WiFi ağlarını anlık tarayıp tek tıkla taklit listesine ekleyebilir; her SSID için ayrı ayrı açık (🔓) veya WPA2 şifreli (🔒 - RSN IE) yayın yapılmasını sağlar. Promiscuous mod sayesinde çevre cihazlardan gelen Probe ve Association Request paketlerini yakalar, 100+ vendor içeren OUI veritabanıyla cihaz markalarını (Apple, Samsung, Xiaomi vb.) anlık çözümler ve renk kodlu RSSI sinyal gücüyle raporlar.',
    longDescriptionEn: 'A high-performance wireless security research and educational platform engineered in C on the ESP-IDF framework, providing hardware-level 802.11 beacon frame injection directly on ESP32 microcontrollers. Operates an onboard responsive web control panel served over its own WPA2-protected AP (http://192.168.4.1) with zero companion software required. Features a live 2.4GHz RF scanner to clone surrounding SSIDs, per-SSID padlock toggles (switching between open beacons and WPA2-AES-CCMP RSN information elements), and promiscuous packet interception capturing client probe and association requests with an embedded 100+ OUI database for instant device vendor fingerprinting (Apple, Samsung, Xiaomi, etc.) alongside color-coded RSSI telemetry.',
    highlights: [
      'Gömülü Web Tabanlı Kontrol Paneli: Hiçbir harici uygulama gerektirmeyen, doğrudan cihazın WPA2 korumalı yerel ağından (http://192.168.4.1) yönetilen modern arayüz',
      'WiFi Ağ Tarayıcı (RF Scanner): Çevredeki 2.4GHz kablosuz ağları anlık keşfedip tek tıkla taklit ve analiz listesine ekleme',
      'Per-SSID Bağımsız Kilit Yönetimi: Her SSID için ayrı ayrı açık (🔓) veya WPA2 şifreli (🔒 - RSN IE) beacon yayını seçebilme',
      'Promiscuous Mod Paket Yakalama: Ağ kartının havada dolaşan Probe Request ve Association Request çerçevelerini non-blocking DMA ile yakalaması',
      'Dahili Donanım Üretici Tespiti (OUI): Apple, Samsung, Xiaomi, Google, Huawei dahil 100+ üretici MAC önekini anında tanımlama',
      'Gerçek Zamanlı RSSI & Telemetri: İstemci deneme sayıları, son görülen cihazlar ve renk kodlu sinyal gücü göstergeleriyle detaylı analiz paneli'
    ],
    highlightsEn: [
      'Zero-Install Web Dashboard: Intuitive, responsive control interface hosted directly by the ESP32 WPA2 AP (http://192.168.4.1)',
      'RF Network Scanner: Real-time 2.4GHz wireless environment scanning with one-tap cloning of surrounding SSIDs and channels',
      'Independent Per-SSID Lock Toggle: Granular switching between open broadcast (🔓) and WPA2-AES-CCMP (🔒 RSN IE) beacon frames',
      'Promiscuous Mode Interception: High-throughput packet capture for 802.11 Probe and Association frames using DMA-safe buffers',
      'Embedded OUI Vendor Lookup: Fast on-chip resolution of 100+ hardware manufacturer prefixes (Apple, Samsung, Xiaomi, etc.)',
      'Live RSSI & Client Telemetry: Color-coded signal strength metrics, connection attempt counters, and unique device logging'
    ],
    category: 'iot',
    categories: ['iot', 'opensource'],
    techStack: ['C', 'ESP-IDF', 'PlatformIO', '802.11 Frame Injection', 'FreeRTOS', 'Embedded'],
    image: '/images/iot/spoofer-cover.webp',
    links: {
      github: 'https://github.com/poqob/esp32-ssid-spoofer-pro',
    },
    featured: true,
  },
  // DevOps & MCP Servisleri
  {
    id: 'mgr',
    title: 'mgr — Systemd için Docker Compose Benzeri CLI, MCP Sunucusu & Watchdog',
    description: 'Düşük kaynaklı Linux VPS (1-2GB RAM) ve Raspberry Pi üzerinde mikroservisleri sıfır container yüküyle yöneten Docker Compose benzeri CLI, yapay zeka ajanları için yerleşik MCP sunucusu ve otomatik iyileştirici watchdog.',
    titleEn: 'mgr — Lightweight CLI, MCP Server & Auto-Healing Watchdog for Systemd',
    descriptionEn: 'Lightweight, Docker Compose-like CLI, native Model Context Protocol (MCP) server for AI agents, and 24/7 auto-healing watchdog for bare-metal systemd services on budget VPS and Raspberry Pi.',
    longDescription: 'Bütçe dostu Linux VPS sunucularda (Hetzner, DigitalOcean, Linode) ve Raspberry Pi sistemlerinde Docker overhead\'ini (dockerd, containerd-shim, bridge ağları nedeniyle harcanan 150-300MB+ RAM) ortadan kaldırarak mikroservisleri saf bare-metal systemd hızında çalıştıran hafif yönetim aracı. Docker Compose konforunda tek komutla başlatma/durdurma/yeniden başlatma (`mgr up`, `mgr down`, `mgr restart`), anlık bellek/PID/port durum tablosu, tek tıkla log takibi (`mgr logs`) ve JSON çıktı desteği sağlar. En çarpıcı özelliklerinden biri olan yerleşik MCP (Model Context Protocol) sunucusu (`mgr mcp`) sayesinde Claude Desktop, Cursor, Windsurf ve Antigravity gibi yapay zeka kodlama ajanları sunucu servislerini uzaktan inceleyebilir, logları analiz edebilir ve arızalanan servisleri otonom şekilde yeniden başlatabilir. Dakikalık cron watchdog mekanizmasıyla çöken servisleri 7/24 otomatik ayağa kaldırır.',
    longDescriptionEn: 'A high-performance, container-less service manager designed for budget cloud VPS (Hetzner, DigitalOcean, Linode) and Raspberry Pi environments where Docker daemon overhead consumes 150-300MB+ unnecessary RAM. Delivers Docker Compose developer experience (`mgr up`, `mgr down`, `mgr restart`, `mgr logs`) on bare-metal systemd with zero memory footprint. Features an integrated Model Context Protocol (MCP) server (`mgr mcp`), allowing AI coding assistants (Claude Desktop, Cursor, Windsurf, Antigravity) to inspect service health, tail logs, and self-heal failed microservices. Includes multi-syntax mgr.conf parsing, JSON CLI output for CI/CD, and a cron-based auto-healing watchdog that revives crashed services 24/7.',
    highlights: [
      'Sıfır Container Yükü: Docker daemon ve containerd-shim yükünü ortadan kaldırarak 1-2GB RAM VPS ve Raspberry Pi\'de maksimum kaynak tasarrufu',
      'Docker Compose Konforunda CLI: `mgr up`, `mgr down`, `mgr restart`, `mgr logs` gibi sezgisel komutlarla toplu systemd servis orkestrasyonu',
      'Yapay Zeka Ajanları için Yerleşik MCP Sunucusu: Claude, Cursor ve Antigravity ajanlarının sunucu servislerini uzaktan denetleyip onarması için `mgr mcp` desteği',
      '7/24 Otomatik İyileştirme (Watchdog): Çöken veya arızalanan servisleri algılayıp dakikalar içinde yeniden başlatan otomatik onarım mekanizması',
      'Canlı Sistem & Bellek Paneli: Servislerin durumunu, PID, port, bellek tüketimi (MB) ve toplam sunucu RAM kullanımını renkli tabloda gösterme',
      'Esnek & Hata Toleranslı Konfigürasyon: Tek satırlık, INI bloklu veya sade metin `mgr.conf` sözdizimini otomatik tanıma'
    ],
    highlightsEn: [
      'Zero Container Overhead: Eliminates Docker daemon overhead, reclaiming 150MB-300MB+ RAM for bare-metal VPS and Raspberry Pi workloads',
      'Docker Compose-like CLI: Intuitive commands (mgr up, mgr down, mgr restart, mgr logs) for unified systemd orchestration',
      'Native Model Context Protocol (MCP): Built-in MCP server (mgr mcp) enabling AI agents (Claude, Cursor, Antigravity) to inspect and auto-heal services',
      '24/7 Auto-Healing Watchdog: Multi-tier watchdog (systemd restart & cron monitor) that automatically revives crashed microservices',
      'Live Telemetry & Resource Monitor: Formatted dashboard displaying real-time PID, memory consumption (MB), open ports, and system RAM',
      'Ultra-Forgiving Configuration: Flexible mgr.conf parser supporting one-liners, simple key-value pairs, or full INI sections'
    ],
    category: 'devops',
    categories: ['devops', 'opensource'],
    techStack: ['Bash', 'Linux', 'Systemd', 'MCP Protocol', 'DevOps', 'CLI', 'AI Agents'],
    image: '/images/devops/mgr-cover.webp',
    links: {
      github: 'https://github.com/poqob/mgr',
    },
    featured: true,
  },
  // Demo Web Projeleri
  {
    id: 'furniture-exhibition',
    title: 'MONOCHROME — 3D & AR Mobilya Sergisi',
    description: '3D StoreLink bulut altyapısıyla güçlendirilmiş, gerçek zamanlı WebGL 3D modelleme, tek tıkla mobil WebAR ve canlı materyal varyantı entegrasyonu sunan interaktif vitrin ve e-ticaret demosu.',
    titleEn: 'MONOCHROME — 3D & AR Furniture Exhibition',
    descriptionEn: 'Interactive showcase demonstrating real-time WebGL 3D visualization, one-click mobile WebAR, and dynamic material variants powered by 3D StoreLink.',
    longDescription: 'Modern e-ticaret siteleri (Shopify, WooCommerce, özel React/Vue mağazaları) ve çağdaş mobilya markaları için geliştirilmiş referans 3D ve Artırılmış Gerçeklik (WebAR) vitrin projesi. 3D StoreLink bulut platformunun API altyapısı üzerine inşa edilmiştir. Ziyaretçilere tarayıcı üzerinden stüdyo kalitesinde ışıklandırma ve yörünge kontrolüyle 360° 3D model inceleme imkânı tanır. Kullanıcılar tek tıkla sayfa yenilenmeden materyal ve renk varyantlarını (örneğin Bloom Chair kumaşından Red Bloom varyantına) değiştirebilir; REST API üzerinden ürün boyutlarını, materyal bilgilerini ve teknik özellikleri dinamik senkronize edebilir. iOS (Quick Look) ve Android (Scene Viewer) desteği sayesinde harici hiçbir uygulama indirmeden mobilde 1:1 gerçek ölçekli mobilya yerleşim deneyimi sunar.',
    longDescriptionEn: 'A production-ready reference showcase and gallery demonstrating how to integrate interactive 3D models, mobile Augmented Reality (WebAR), material variants, and live dynamic metadata into modern web applications and e-commerce stores (Shopify, WooCommerce, custom React/Vue/HTML). Powered by 3D StoreLink cloud infrastructure. Features studio-grade lighting, smooth 360° orbit controls, zero-install WebAR on iOS and Android, and dynamic REST API synchronization with real-time material swapping without reloading the page.',
    highlights: [
      'Gerçek Zamanlı WebGL 3D Görüntüleyici: Stüdyo kalitesinde aydınlatma, 360° serbest yörünge (orbit) kontrolü ve pürüzsüz model inceleme',
      'Tek Tıkla Uygulamasız WebAR: iOS (Quick Look) ve Android (Scene Viewer) ile mobilde ek uygulama yükletmeden odaya 1:1 ölçekli mobilya yerleştirme',
      'Canlı Materyal ve Varyant Değişimi: Sayfa yenilenmeden kumaş, renk ve doku alternatifleri (Örn: Bloom Chair kumaşından Red Bloom varyantına) arasında dinamik geçiş',
      'Dinamik Metadata REST API: Model boyutları, teknik özellikler ve tasarımcı detaylarının 3D StoreLink API\'den anlık çekilmesi',
      'E-Ticaret & CMS Uyumlu Tek Satır Embed: Shopify, WooCommerce, Webflow ve özel yazılımlara tek satır iframe ile 30 saniyede entegrasyon',
      'Yüksek Performans & GPU Hızlandırma: Hafif ve optimize canvas mimarisiyle sıfır gecikmeli lüks endüstriyel tasarım vitrini'
    ],
    highlightsEn: [
      'Real-Time WebGL 3D Viewers: Studio-grade lighting, auto-rotation, smooth orbit controls, and customizable exposure',
      'One-Click Mobile WebAR: Built-in AR support on iOS (Quick Look) and Android (Scene Viewer) to preview life-sized furniture in any room',
      'Dynamic Variant Switching: Instant client-side swapping between color ways and materials without reloading the page',
      'Live Metadata REST API: Dynamic synchronization with 3D StoreLink API to fetch product dimensions, specifications, and designer details',
      'Zero-Code Responsive Embeds: Single-line iframe integration compatible with Shopify, WooCommerce, Webflow, and custom stacks',
      'High-Performance GPU Pipeline: Ultra-fast canvas rendering and responsive gallery optimized for modern luxury e-commerce'
    ],
    category: 'demo',
    categories: ['demo', 'web'],
    techStack: ['WebGL 2.0', 'WebAR (WebXR)', '3D StoreLink API', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    image: '/images/demo/furniture-exhibition-cover.webp',
    links: {
      live: 'https://exhibition.3dstorelink.com',
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

export interface BrandColor {
  name: string
  hex: string
  description: string
  descriptionEn: string
}

export const brandColors: BrandColor[] = [
  { name: 'accent-blue', hex: '#3B82F6', description: 'Ana marka rengi — butonlar, linkler, vurgular', descriptionEn: 'Primary brand color — buttons, links, accents' },
  { name: 'accent-blue-light', hex: '#60A5FA', description: 'Açık mavi — gradienler, hover durumları', descriptionEn: 'Light blue — gradients, hover states' },
  { name: 'accent-orange', hex: '#F97316', description: 'Vurgu rengi — CTA, öne çıkan öğeler', descriptionEn: 'Accent color — CTAs, highlights' },
  { name: 'metal-start', hex: '#60A5FA', description: 'Gradient başlangıç — metalik efektler', descriptionEn: 'Gradient start — metallic effects' },
  { name: 'metal-end', hex: '#A78BFA', description: 'Gradient bitiş — metalik efektler', descriptionEn: 'Gradient end — metallic effects' },
  { name: 'text-primary', hex: '#FAFAFA', description: 'Koyu temada ana metin rengi', descriptionEn: 'Dark theme primary text' },
  { name: 'text-primary-light', hex: '#09090B', description: 'Açık temada ana metin rengi', descriptionEn: 'Light theme primary text' },
  { name: 'bg-dark', hex: '#09090B', description: 'Koyu tema arka plan', descriptionEn: 'Dark theme background' },
  { name: 'bg-light', hex: '#FFFFFF', description: 'Açık tema arka plan', descriptionEn: 'Light theme background' },
]

export interface LogoVariant {
  name: string
  file: string
  sizes: number[]
}

export const logoVariants: LogoVariant[] = [
  { name: 'dark', file: '/images/dagsolution-logo.png', sizes: [1024, 512, 384, 192, 128, 64, 32] },
  { name: 'light', file: '/images/dagsolution-light-logo.png', sizes: [1024, 512, 384, 192, 128, 64, 32] },
]

export const brandFonts = [
  { name: 'Inter', type: 'sans-serif', usage: 'Başlıklar, body metin, UI öğeleri', usageEn: 'Headings, body text, UI elements', weights: [400, 500, 600, 700] },
  { name: 'JetBrains Mono', type: 'monospace', usage: 'Kod blokları, teknik içerik', usageEn: 'Code blocks, technical content', weights: [400, 500] },
]
