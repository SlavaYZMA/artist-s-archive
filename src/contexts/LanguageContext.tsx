import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.inProgress': 'In Progress',
    'nav.essays': 'Essays',
    'nav.exhibitions': 'Exhibitions',
    'nav.statement': 'Statement',
    'nav.contact': 'Contact',
    
    // Home
    'home.statement': 'Working at the intersection of technology, perception, and systems of meaning. Exploring how algorithmic processes reveal hidden structures of contemporary existence.',
    
    // Labels
    'label.year': 'Year',
    'label.medium': 'Medium',
    'label.status': 'Status',
    'label.venue': 'Venue',
    'label.type': 'Type',
    'label.solo': 'Solo',
    'label.group': 'Group',
    'label.ongoing': 'Ongoing',
    'label.research': 'Research',
    'label.viewProject': 'View Project',
    'label.back': '← Back',
    'label.externalLink': 'External Link',
    
    // Projects
    'project.adjudication.title': 'Adjudication',
    'project.adjudication.medium': 'Generative installation, custom software',
    'project.adjudication.description': 'An exploration of automated decision-making systems and their impact on human judgment.',
    'project.adjudication.longDescription': 'Adjudication examines the growing presence of algorithmic decision-making in judicial and administrative systems. The work presents a real-time generative environment where fragments of legal language, case data, and procedural logic collide and reform, questioning the nature of justice when filtered through computational processes.',
    
    'project.present.title': 'Present (Присутствуют)',
    'project.present.medium': 'Video installation, multi-channel',
    'project.present.description': 'Meditation on presence and absence in digital spaces.',
    'project.present.longDescription': 'Present investigates the paradox of digital presence—how we exist in multiple locations simultaneously through our data traces while remaining physically anchored. The installation captures real-time network activity, transforming invisible data flows into visible phenomena.',
    
    'project.quantum.title': 'Quantum Portraits',
    'project.quantum.medium': 'Photography, computational imaging',
    'project.quantum.description': 'Portraits generated through quantum random processes.',
    'project.quantum.longDescription': 'Quantum Portraits uses true random number generators based on quantum phenomena to determine every aspect of portrait composition. The resulting images occupy an uncertain space between intention and chance, reflecting the fundamental indeterminacy at the heart of physical reality.',
    
    // In Progress
    'inprogress.fragments.title': 'Fragments of Attention',
    'inprogress.fragments.description': 'Research into attention economies and cognitive labor.',
    'inprogress.fragments.status': 'Research phase',
    
    'inprogress.border.title': 'Border Conditions',
    'inprogress.border.description': 'Mapping invisible boundaries in networked space.',
    'inprogress.border.status': 'Development',
    
    // Essays
    'essay.systems.title': 'On Systems of Seeing',
    'essay.systems.year': '2024',
    
    'essay.absence.title': 'Notes on Absence',
    'essay.absence.year': '2023',
    
    'essay.machine.title': 'The Machine as Witness',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.text': `My practice operates at the threshold between human perception and computational processes. I am interested in the moment where systems—whether technological, social, or linguistic—become visible through their failures, edges, and unexpected behaviors.

The work does not seek to explain or illustrate technology. Instead, it uses computational methods as a lens through which to examine contemporary conditions of existence: the fragmentation of attention, the automation of judgment, the persistence of presence in networked space.

Each project begins with a question rather than a form. The medium emerges from the inquiry. I work with code, video, installation, and text, choosing whatever substrate best holds the investigation.

I am drawn to processes that operate below the threshold of visibility—data flows, algorithmic decisions, quantum events—and to the challenge of making such processes available to perception without reducing them to spectacle.

The work is ultimately concerned with what remains when systems are stripped of their interfaces: the raw material of contemporary experience, encountered directly.`,
    
    // Contact
    'contact.email': 'studio@artist.com',
    'contact.cv': 'Download CV (PDF)',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.projects': 'Проекты',
    'nav.inProgress': 'В работе',
    'nav.essays': 'Эссе',
    'nav.exhibitions': 'Выставки',
    'nav.statement': 'Заявление',
    'nav.contact': 'Контакт',
    
    // Home
    'home.statement': 'Работаю на пересечении технологий, восприятия и систем значений. Исследую, как алгоритмические процессы раскрывают скрытые структуры современного существования.',
    
    // Labels
    'label.year': 'Год',
    'label.medium': 'Медиум',
    'label.status': 'Статус',
    'label.venue': 'Площадка',
    'label.type': 'Тип',
    'label.solo': 'Персональная',
    'label.group': 'Групповая',
    'label.ongoing': 'В процессе',
    'label.research': 'Исследование',
    'label.viewProject': 'Смотреть проект',
    'label.back': '← Назад',
    'label.externalLink': 'Внешняя ссылка',
    
    // Projects
    'project.adjudication.title': 'Вынесение решений',
    'project.adjudication.medium': 'Генеративная инсталляция, авторское ПО',
    'project.adjudication.description': 'Исследование автоматизированных систем принятия решений и их влияния на человеческое суждение.',
    'project.adjudication.longDescription': 'Работа исследует растущее присутствие алгоритмического принятия решений в судебных и административных системах. Произведение представляет генеративную среду реального времени, где фрагменты юридического языка, данные дел и процедурная логика сталкиваются и преобразуются.',
    
    'project.present.title': 'Присутствуют',
    'project.present.medium': 'Видеоинсталляция, многоканальная',
    'project.present.description': 'Медитация о присутствии и отсутствии в цифровых пространствах.',
    'project.present.longDescription': 'Работа исследует парадокс цифрового присутствия—как мы существуем в нескольких местах одновременно через следы наших данных, оставаясь физически привязанными. Инсталляция захватывает сетевую активность в реальном времени, преобразуя невидимые потоки данных в видимые явления.',
    
    'project.quantum.title': 'Квантовые портреты',
    'project.quantum.medium': 'Фотография, вычислительная визуализация',
    'project.quantum.description': 'Портреты, созданные с помощью квантовых случайных процессов.',
    'project.quantum.longDescription': 'Работа использует генераторы истинных случайных чисел на основе квантовых явлений для определения каждого аспекта композиции портрета. Полученные изображения занимают неопределённое пространство между намерением и случаем.',
    
    // In Progress
    'inprogress.fragments.title': 'Фрагменты внимания',
    'inprogress.fragments.description': 'Исследование экономики внимания и когнитивного труда.',
    'inprogress.fragments.status': 'Фаза исследования',
    
    'inprogress.border.title': 'Пограничные условия',
    'inprogress.border.description': 'Картографирование невидимых границ в сетевом пространстве.',
    'inprogress.border.status': 'Разработка',
    
    // Essays
    'essay.systems.title': 'О системах видения',
    'essay.systems.year': '2024',
    
    'essay.absence.title': 'Заметки об отсутствии',
    'essay.absence.year': '2023',
    
    'essay.machine.title': 'Машина как свидетель',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.text': `Моя практика действует на границе между человеческим восприятием и вычислительными процессами. Меня интересует момент, когда системы—технологические, социальные или лингвистические—становятся видимыми через свои сбои, края и неожиданное поведение.

Работа не стремится объяснить или иллюстрировать технологию. Вместо этого она использует вычислительные методы как линзу для исследования современных условий существования: фрагментации внимания, автоматизации суждения, устойчивости присутствия в сетевом пространстве.

Каждый проект начинается с вопроса, а не с формы. Медиум возникает из исследования. Я работаю с кодом, видео, инсталляцией и текстом, выбирая тот субстрат, который лучше всего удерживает исследование.

Меня привлекают процессы, действующие ниже порога видимости—потоки данных, алгоритмические решения, квантовые события—и задача сделать такие процессы доступными для восприятия без сведения их к зрелищу.`,
    
    // Contact
    'contact.email': 'studio@artist.com',
    'contact.cv': 'Скачать CV (PDF)',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
