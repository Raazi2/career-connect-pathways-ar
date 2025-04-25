
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
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
};

// Spanish translations
const esTranslations = {
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
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      es: esTranslations,
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
