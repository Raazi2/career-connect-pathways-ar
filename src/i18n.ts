import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Add Indian language translations
const translations = {
  en: {
    common: {
      welcome: "Welcome to CareerConnect",
      explore: "Explore Careers",
      scholarships: "Scholarships",
      opportunities: "Opportunities",
      chat: "Chat with Advisor",
      stem: "STEM Tools",
      ar: "AR Experience",
      vr: "VR Experience",
      learn: "Learning Resources",
      download: "Download App",
      language: "Language",
    },
    home: {
      hero: "Discover Your Future Career Path",
      subtitle: "Connecting rural students with career opportunities and resources",
      getStarted: "Get Started",
      featured: "Featured Careers",
      resources: "Educational Resources",
      chatbot: "Have questions? Chat with our virtual advisor!",
    },
    scholarships: {
      title: "Available Scholarships",
      search: "Search scholarships",
      filter: "Filter by",
      deadline: "Application Deadline",
      amount: "Award Amount",
      apply: "Apply Now",
    },
    opportunities: {
      title: "Career Opportunities",
      location: "Filter by Location",
      industry: "Filter by Industry",
      type: "Opportunity Type",
      view: "View Details",
    }
  },
  es: {
    common: {
      welcome: "Bienvenido a CareerConnect",
      explore: "Explorar Carreras",
      scholarships: "Becas",
      opportunities: "Oportunidades",
      chat: "Chatear con un Asesor",
      stem: "Herramientas STEM",
      ar: "Experiencia RA",
      vr: "Experiencia RV",
      learn: "Recursos Educativos",
      download: "Descargar App",
      language: "Idioma",
    },
    home: {
      hero: "Descubre Tu Futura Carrera",
      subtitle: "Conectando a estudiantes rurales con oportunidades y recursos profesionales",
      getStarted: "Comenzar",
      featured: "Carreras Destacadas",
      resources: "Recursos Educativos",
      chatbot: "¿Tienes preguntas? ¡Chatea con nuestro asesor virtual!",
    },
    scholarships: {
      title: "Becas Disponibles",
      search: "Buscar becas",
      filter: "Filtrar por",
      deadline: "Fecha límite",
      amount: "Cantidad",
      apply: "Aplicar Ahora",
    },
    opportunities: {
      title: "Oportunidades Profesionales",
      location: "Filtrar por Ubicación",
      industry: "Filtrar por Industria",
      type: "Tipo de Oportunidad",
      view: "Ver Detalles",
    }
  },
  hi: {
    common: {
      welcome: "CareerConnect में आपका स्वागत है",
      explore: "करियर खोजें",
      scholarships: "छात्रवृत्ति",
      opportunities: "अवसर",
      chat: "सलाहकार से चैट करें",
      stem: "STEM टूल्स",
      ar: "AR अनुभव",
      vr: "VR अनुभव",
      learn: "शैक्षिक संसाधन",
      download: "ऐप डाउनलोड करें",
      language: "भाषा",
    },
    home: {
      hero: "अपना भविष्य का करियर खोजें",
      subtitle: "ग्रामीण छात्रों को करियर के अवसरों और संसाधनों से जोड़ना",
      getStarted: "शुरू करें",
      featured: "विशेष करियर",
      resources: "शैक्षिक संसाधन",
      chatbot: "प्रश्न हैं? हमारे आभासी सलाहकार से चैट करें!",
    },
    scholarships: {
      title: "उपलब्ध छात्रवृत्तियां",
      search: "छात्रवृत्तियां खोजें",
      filter: "फ़िल्टर करें",
      deadline: "आवेदन की अंतिम तिथि",
      amount: "राशि",
      apply: "आवेदन करें",
    },
    opportunities: {
      title: "करियर के अवसर",
      location: "स्थान द्वारा फ़िल्टर करें",
      industry: "उद्योग द्वारा फ़िल्टर करें",
      type: "अवसर का प्रकार",
      view: "विवरण देखें",
    }
  },
  ta: {
    common: {
      welcome: "CareerConnect-க்கு வரவேற்கிறோம்",
      explore: "தொழில்களை ஆராயுங்கள்",
      scholarships: "உதவித்தொகைகள்",
      opportunities: "வாய்ப்புகள்",
      chat: "ஆலோசகருடன் அரட்டை",
      stem: "STEM கருவிகள்",
      ar: "AR அனுபவம்",
      vr: "VR அனுபவம்",
      learn: "கல்வி வளங்கள்",
      download: "செயலியை பதிவிறக்கு",
      language: "மொழி",
    },
    scholarships: {
      title: "கிடைக்கக்கூடிய உதவித்தொகைகள்",
      search: "உதவித்தொகைகளைத் தேடுங்கள்",
      filter: "வடிகட்டி",
      deadline: "விண்ணப்ப முடிவுத் தேதி",
      amount: "விருது தொகை",
      apply: "விண்ணப்பிக்கவும்"
    },
    opportunities: {
      title: "வேலை வாய்ப்புகள்",
      location: "இடம் வாரியாக வடிகட்டவும்",
      industry: "தொழில் வாரியாக வடிகட்டவும்",
      type: "வாய்ப்பு வகை",
      view: "விவரங்களைக் காண்க"
    },
    home: {
      hero: "உங்கள் எதிர்கால வாழ்க்கையைக் கண்டறியுங்கள்",
      subtitle: "கிராமப்புற மாணவர்களை தொழில் வாய்ப்புகள் மற்றும் ஆதாரங்களுடன் இணைக்கிறது",
      getStarted: "தொடங்கு",
      featured: "சிறப்பு தொழில்கள்",
      resources: "கல்வி ஆதாரங்கள்",
      chatbot: "உங்களுக்கு கேள்விகள் இருக்கிறதா? எங்கள் மெய்நிகர் ஆலோசகருடன் அரட்டை அடியுங்கள்!"
    }
  },
  bn: {
    common: {
      welcome: "CareerConnect-এ স্বাগতম",
      explore: "ক্যারিয়ার অন্বেষণ করুন",
      scholarships: "বৃত্তি",
      opportunities: "সুযোগসমূহ",
      chat: "পরামর্শদাতার সাথে চ্যাট",
      stem: "STEM টুলস",
      ar: "AR অভিজ্ঞতা",
      vr: "VR অভিজ্ঞতা",
      learn: "শিক্ষা সংক্রান্ত সংস্থান",
      download: "অ্যাপ ডাউনলোড করুন",
      language: "ভাষা",
    },
    scholarships: {
      title: "উপলব্ধ বৃত্তি",
      search: "বৃত্তি খুঁজুন",
      filter: "ফিল্টার",
      deadline: "আবেদনের শেষ তারিখ",
      amount: "পুরস্কার পরিমাণ",
      apply: "আবেদন করুন"
    },
    opportunities: {
      title: "চাকরির সুযোগ",
      location: "অবস্থান দ্বারা ফিল্টার করুন",
      industry: "শিল্প দ্বারা ফিল্টার করুন",
      type: "সুযোগের প্রকার",
      view: "বিস্তারিত দেখুন"
    },
    home: {
      hero: "আপনার ভবিষ্যতের কর্মজীবন আবিষ্কার করুন",
      subtitle: "গ্রামীণ শিক্ষার্থীদের কর্মজীবনের সুযোগ এবং সংস্থানগুলির সাথে সংযোগ স্থাপন",
      getStarted: "শুরু করুন",
      featured: "বৈশিষ্ট্যযুক্ত পেশা",
      resources: "শিক্ষাগত সম্পদ",
      chatbot: "প্রশ্ন আছে? আমাদের ভার্চুয়াল উপদেষ্টার সাথে চ্যাট করুন!"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
