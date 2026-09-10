export interface FaqItem {
  id: string
  category: string
  categoryEn: string
  question: string
  questionEn: string
  answer: string
  answerEn: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'development-process',
    category: 'Geliştirme & Süreç',
    categoryEn: 'Process & Methodology',
    question: 'Özel yazılım ve mobil uygulama geliştirme süreciniz nasıl işler?',
    questionEn: 'How does your custom software and mobile app development process work?',
    answer: 'İş birliğimiz kapsamlı bir ihtiyaç analizi ve teknik mimari planlamasıyla başlar. Etkileşimli UI/UX prototipleri hazırlandıktan sonra Agile/Scrum prensipleriyle 2 haftalık şeffaf sprint\'ler halinde geliştirme yürütülür. Flutter ile iOS ve Android için tek kod tabanından yerel hızda mobil uygulamalar, Python (FastAPI/Flask) veya Go ile yüksek performanslı arka uç sistemleri inşa edilir. Otomatik testler, güvenlik denetimleri ve mağaza (App Store, Google Play) onay süreçlerinin tamamı ekibimizce uçtan uca yönetilir.',
    answerEn: 'Our collaboration begins with thorough needs assessment and architectural planning. Following interactive UI/UX prototyping, we develop in transparent 2-week Agile sprints. We engineer native-performance cross-platform mobile apps with Flutter (iOS & Android) and high-throughput backends using Python (FastAPI/Flask) or Go. Automated test suites, code security audits, and complete store submission (App Store, Google Play) are fully managed end-to-end by our team.',
  },
  {
    id: 'intellectual-property',
    category: 'Mülkiyet & Lisans',
    categoryEn: 'IP & Ownership',
    question: 'Geliştirilen yazılımın kaynak kodları ve fikri mülkiyeti kime ait olur?',
    questionEn: 'Who owns the intellectual property and source code of the developed software?',
    answer: 'Proje tamamlanıp teslim edildiğinde geliştirilen tüm kaynak kodlar, mimari dökümantasyon, tasarım varlıkları ve fikri mülkiyet hakları %100 müşterimize ait olur. Müşteri veri gizliliğini yasal güvenceye almak adına çalışma öncesinde karşılıklı Gizlilik Sözleşmesi (NDA) imzalanır. Sizi kapalı üçüncü parti platformlara bağımlı kılmayan (zero vendor lock-in), açık standartlara uygun, temiz ve sürdürülebilir kod teslimatı yapıyoruz.',
    answerEn: 'Upon project completion and handoff, 100% of the source code, architecture documentation, design assets, and intellectual property rights belong entirely to you. To legally guarantee confidentiality, we sign a mutual Non-Disclosure Agreement (NDA) prior to kickoff. We deliver clean, modular, and sustainable code adhering to open industry standards with zero vendor lock-in.',
  },
  {
    id: 'ai-privacy',
    category: 'Yapay Zeka & Gizlilik',
    categoryEn: 'AI & Privacy',
    question: 'Şirketimizin özel verileriyle yapay zeka (AI / LLM) ve görüntü işleme çözümleri geliştirebilir miyiz?',
    questionEn: 'Can we build AI/LLM and computer vision solutions using our proprietary company data?',
    answer: 'Kesinlikle. Veri gizliliği ve kurumsal sırlar en kritik önceliğimizdir. Açık kaynaklı Büyük Dil Modellerini (Llama 3.2 vb.) ve derin öğrenme modellerini (YOLOv9, OpenCV) verileriniz harici genel bulutlara çıkmadan, doğrudan şirketinizin kendi yerel (on-premise) sunucularında veya izole sanal sunucunuzda (VPC) çalışacak şekilde entegre ediyoruz. Böylece gizliliğiniz %100 korunurken şirket içi doküman arama, müşteri temsilcisi AI botları, veri analitiği ve görsel hata tespit sistemlerine sahip olursunuz.',
    answerEn: 'Absolutely. Data privacy and corporate confidentiality are our highest priorities. We deploy open-source Large Language Models (e.g. Llama 3.2) and deep learning models (YOLOv9, OpenCV) directly on your local on-premise hardware or isolated Virtual Private Cloud (VPC) with zero external data leakage. Your proprietary business data remains 100% protected while empowering internal document search, AI agents, predictive analytics, and visual defect detection.',
  },
  {
    id: 'enterprise-integration',
    category: 'Kurumsal SaaS & PDKS',
    categoryEn: 'Enterprise SaaS',
    question: 'Mobil PDKS ve kurumsal SaaS çözümleriniz mevcut ERP ve muhasebe sistemlerimizle entegre olabilir mi?',
    questionEn: 'Can your Mobile PDKS and enterprise SaaS solutions integrate with our existing ERP and accounting systems?',
    answer: 'Evet. Mobil PDKS sistemimiz ve diğer kurumsal platformlarımız modern RESTful API ve webhook mimarisiyle inşa edilmiştir. Mevcut ERP (SAP, Logo, Mikro vb.), insan kaynakları ve muhasebe programlarıyla çift yönlü anlık veri senkronizasyonu sağlayabilir. Donanımsız poligon geofence ve dinamik QR teknolojisi sayesinde pahalı turnike ve parmak izi cihaz bakım maliyetlerini sıfırlarken resmi mevzuata tam uyumlu otomatik puantaj ve Excel/PDF raporları üretir.',
    answerEn: 'Yes. Our Mobile PDKS and enterprise platforms are engineered with modern RESTful APIs and webhook pipelines for bidirectional live synchronization with existing ERP (SAP, Logo, etc.), HR, and payroll software. By utilizing hardware-free polygon geofencing and dynamic cryptographic QR technology, it eliminates expensive turnstile and biometric hardware costs while generating official labor-compliant automated payroll reports.',
  },
  {
    id: 'iot-hardware',
    category: 'IoT & Gömülü Sistemler',
    categoryEn: 'IoT & Hardware',
    question: 'IoT projelerinde hem donanım prototipleme hem de gömülü yazılımı üstleniyor musunuz?',
    questionEn: 'Do you handle both hardware prototyping and embedded software in IoT projects?',
    answer: 'Evet, IoT alanında fikir aşamasından saha kurulumuna kadar uçtan uca mühendislik sunuyoruz. ESP32, STM32 ve nRF mikrodenetleyicileri üzerinde C/C++ ve MicroPython ile optimize edilmiş gömülü yazılımlar (firmware), sensör telemetrisi, MQTT/WebSocket haberleşme protokolleri ve bu cihazları dünyanın her yerinden uzaktan izleyip yönetmenizi sağlayan bulut/web kontrol panellerini anahtar teslim üretiyoruz.',
    answerEn: 'Yes, we provide turnkey IoT engineering from initial circuit concept to field deployment. Our scope encompasses optimized embedded firmware in C/C++ and MicroPython for ESP32, STM32, and nRF microcontrollers, sensor telemetry acquisition, low-latency MQTT/WebSocket networking, and responsive cloud web dashboards for remote fleet management worldwide.',
  },
  {
    id: 'maintenance-sla',
    category: 'Bakım & Destek',
    categoryEn: 'Support & SLA',
    question: 'Proje teslimi sonrasında bakım, güncelleme ve SLA teknik destek hizmeti veriyor musunuz?',
    questionEn: 'Do you provide maintenance, updates, and SLA technical support after project delivery?',
    answer: 'Evet. Projelerimizi canlıya aldıktan sonra ilk aşamada kapsamlı bir garanti süresi tanımlayarak sistemin kararlılığını takip ediyoruz. Sonrasında ise 7/24 kesintisiz sunucu izleme (uptime monitoring), yeni iOS ve Android işletim sistemi sürümlerine uyumluluk güncellemeleri, güvenlik yamaları ve düzenli yedekleme içeren esnek Hizmet Seviyesi Anlaşmaları (SLA) ile uzun vadeli teknik ortaklık yürütüyoruz.',
    answerEn: 'Yes. Following production launch, we provide an initial warranty period to supervise system stability and resolve any emerging edge cases. Moving forward, we offer long-term technical partnerships with flexible Service Level Agreements (SLA), including 24/7 uptime monitoring, new iOS and Android OS version compatibility updates, vulnerability patching, and automated backups.',
  },
  {
    id: 'location-remote',
    category: 'Lokasyon & İletişim',
    categoryEn: 'Location & Model',
    question: 'Dağ Solution hangi şehirlerde hizmet veriyor ve çalışma modeliniz nasıldır?',
    questionEn: 'Which regions does Dağ Solution serve, and what is your working collaboration model?',
    answer: 'Dağ Solution olarak Bursa ve Sakarya merkezli faaliyet göstermekle birlikte; İstanbul, Ankara, İzmir başta olmak üzere tüm Türkiye geneline ve küresel kurumsal müşterilerimize uzaktan (remote) ve hibrit çalışma modelleriyle hizmet veriyoruz. Düzenli görüntülü toplantılar, şeffaf sprint raporlamaları ve anlık iletişim kanalları (Slack, Jira, Git) ile mesafeleri önemsiz kılan kusursuz bir proje yönetim disiplini uyguluyoruz.',
    answerEn: 'While based in Bursa and Sakarya, Dağ Solution delivers cutting-edge software solutions to clients across Istanbul, Ankara, Izmir, all of Turkey, and international markets via agile remote and hybrid collaboration models. Through scheduled video syncs, transparent sprint tracking, and real-time collaboration tools (Slack, Jira, Git), we deliver seamless project management irrespective of physical distance.',
  },
]
