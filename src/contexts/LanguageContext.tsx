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
    'home.statement': 'Practice focuses on the analysis of perceptual and algorithmic structures through which the experience of trauma is formed. Working with observation, archives, and systems of evaluation, I investigate how gender-based violence can be recorded and presented without visualizing the violence itself and without reproducing relations of power.',
    
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
    'project.adjudication.description': 'Exploring algorithmic evaluation that assesses a person without their intervention, highlighting questions of power, vulnerability, and fairness.',
    'project.adjudication.longDescription': 'The work investigates the experience of being evaluated by a system without the possibility of influencing or altering the outcome. Regardless of actions, appearance, or behavior, a person receives a characterization, the reasoning for which remains undisclosed. The installation functions as a hidden algorithm, creating a sense of vulnerability before incomprehensible systems of power. The viewer is confronted with questions: what does it mean to be assessed without knowing the criteria? What is it like to become an object subjected to harm through an evaluative process? The work does not reveal the mechanism of assessment, leaving it entirely authorial and hidden.',
    
    'project.present.title': 'Present (Присутствуют)',
    'project.present.medium': 'Video installation, participatory',
    'project.present.description': 'Anonymous close-up recordings of the eyes of women who have survived gender-based violence. The project registers presence without visualizing violence or narrating trauma.',
    'project.present.longDescription': '“Present” is a digital video installation based on the anonymous participation of women who have survived gender-based violence. The project collects five-second close-ups of the eyes, excluding the face, body, voice, or story. The gaze becomes the sole visual element, representing a minimal form of presence. Each recording is added equally, without hierarchy, forming an ever-expanding digital field of multiple gazes. The viewer enters this space, where presence is recorded as a fact of existence rather than a narrative or depiction of violence. The project explores the resilience of presence and collective witnessing, maintaining anonymity and respect for the trauma experienced.',
    
    'project.quantum.title': 'Quantum Portraits',
    'project.quantum.medium': 'Photography, computational imaging',
    'project.quantum.description': 'Portrait as a process that exists only during observation. Uses quantum random number generators to create probabilistic images of the face.',
    'project.quantum.longDescription': 'The project investigates personality not as a fixed object but as an event that emerges over time through observation. The portrait is generated using true quantum random number generators, with each image point treated as a “quantum particle” governed by the principles of superposition, wave function, and entanglement. Through interaction with the system, the face “occurs” — it trembles, changes, and disassembles depending on the angle of observation. The project transforms the portrait into a process, demonstrating the impossibility of fixing identity and illustrating the interaction between observer and object. The digital archive captures the wave-like nature of the face, creating a collection of probabilistic images, where each act of observation is unique.',
    
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
    'home.statement': 'Практика фокусируется на анализе перцептивных и алгоритмических структур, через которые формируется опыт травмы. Работая с наблюдением, архивами и системами оценки, я исследую, каким образом гендерное насилие может быть зафиксировано и представлено без визуализации самого насилия и без воспроизводства властных отношений.',
    
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
    'project.adjudication.description': 'Исследование алгоритмической оценки, демонстрирующей, как система оценивает человека без его влияния, раскрывая вопросы власти, уязвимости и справедливости.',
    'project.adjudication.longDescription': 'Работа исследует опыт оценки, произведённой системой без возможности вмешательства или изменения результата. Независимо от действий, внешности или поведения, человек получает характеристику, о причинах которой не информирован. Инсталляция функционирует как скрытый алгоритм, создающий ощущение уязвимости перед непостижимыми системами власти. Зритель сталкивается с вопросами: что значит быть оценённым без понимания критериев? Каково это — оказаться объектом, над которым совершено насилие через процесс оценки? Работа не раскрывает механизм генерации оценки, оставляя его полностью авторским и скрытым.',
    
    'project.present.title': 'Присутствуют',
    'project.present.medium': 'Видеоинсталляция, партиципаторная',
    'project.present.description': 'Анонимные крупноплановые записи глаз женщин, переживших гендерное насилие. Проект фиксирует факт присутствия без визуализации насилия и без рассказа о травме.',
    'project.present.longDescription': 'Присутствуют» — цифровая видеоинсталляция, основанная на анонимном участии женщин, переживших гендерное насилие. Проект собирает пятисекундные крупноплановые записи глаз, исключая лицо, тело, голос или историю. Единственным визуальным элементом остаётся взгляд как минимальная форма присутствия. Каждая запись добавляется равноправно, без иерархии, создавая постоянно расширяющееся цифровое поле множественных взглядов. Зритель оказывается внутри этого пространства, где присутствие фиксируется как факт существования, а не как повествование или визуализация насилия. Проект исследует устойчивость присутствия и коллективное свидетельство, обеспечивая анонимность и уважение к пережитой травме.',
    
    'project.quantum.title': 'Квантовые портреты',
    'project.quantum.medium': 'Фотография, вычислительная визуализация',
    'project.quantum.description': 'Портрет как процесс, существующий только во время наблюдения. Использует квантовые генераторы случайных чисел для создания вероятностного изображения лица.',
    'project.quantum.longDescription': 'Проект исследует личность не как фиксированный объект, а как событие, возникающее во времени наблюдения. Портрет формируется с помощью генераторов истинных случайных чисел на основе квантовых процессов, где каждая точка изображения — «квантовая частица», подчиняющаяся принципам суперпозиции, волновой функции и запутанности. При взаимодействии с системой лицо «происходит» — дрожит, изменяется и распадается в зависимости от угла наблюдения. Проект превращает портрет в процесс, демонстрируя невозможность закрепления личности и иллюстрируя взаимодействие наблюдателя и объекта. Цифровой архив портретов фиксирует волновую природу лица, создавая коллекцию вероятностных образов, где каждый акт наблюдения уникален.',
    
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
