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
    'home.artistName': 'Vlada Ivanova',
    'home.statement': 'Vlada Ivanova is an interdisciplinary artist based in Berlin, investigating the intersection of body politics, digital violence, and algorithmic perception. Working across interactive performance, AI, and participatory installations, her practice explores how technology inherits and amplifies the human gaze, often objectifying and distorting the female form.',
    
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
    'label.externalLink': 'External Link (Live Project)',
    
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
    'inprogress.fragments.title': 'Sweet Violence',
    'inprogress.fragments.description': 'Research into attention economies and cognitive labor.Collaborative embroidery of candy boxes containing symbols of domestic violence. The project examines how social gestures after abuse can conceal actual harm.',
    'inprogress.fragments.status': 'Research phase',
    
    'inprogress.border.title': 'The Public Book',
    'inprogress.border.description': 'Public recording of women’s stories in a book during a 24-hour performance. The project documents collective gender-based experiences through a public and intimate act of testimony.',
    'inprogress.border.status': 'Development',
    
    // Essays
    'essay.skiagraphic.title': 'Spectral Flesh: Skiagraphic Description',
    'essay.skiagraphic.year': '2025',
    
    'essay.machine.title': 'The Machine as Witness',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.1.title': 'Calculated Corporeality',
    'statement.2.title': 'The Algorithm as an Engine of Abjection',
    'statement.2.content': 'Under the overarching concept of "Calculated Corporeality," Ivanova uses machine learning not as a tool for aesthetic perfection, but as an engine of abjection. In her live interactive performances, physical shadows are fed into real-time neural networks, exposing the hallucinatory and often grotesque ways algorithms process human presence.',
    'statement.3.title': 'The Ethics of Witnessing',
    'statement.3.content': 'A core element of her work is the ethics of witnessing. In video installations like "Present," which features anonymous recordings of eyes, she constructs spaces to document trauma and survival without exploiting the identities of the subjects. Her work challenges the viewer to confront the violence embedded in both physical reality and digital spaces.',
    
    // Contact
    'contact.email': 'slavasolen@gmail.com',
    'contact.cv': 'Download CV (PDF)',
    'contact.instagram': 'iconicyzma',
    
    // Skiagraphic
    'project.skiagraphic.title': 'Calculated Corporeality: Shadow Translation',
    'project.skiagraphic.medium': 'Interactive performance, real-time AI generation',
    'project.skiagraphic.description': 'An exploration of algorithmic violence through the real-time translation of physical shadows into neural network hallucinations.',
    'project.skiagraphic.longDescription': 'In an era of total visibility, even a shadow becomes an object of control. Today, the act of observation is delegated to machine code, yet the algorithm does not seek a hidden truth — it produces its own reality.\n\nFaced with a data deficit in the form of a flat silhouette, AI turns to the latent space — a colossal archive of digitized human forms and textures. Falling into algorithmic hallucination, the machine forcibly reconstructs volume where there is none.\n\nThe subject is reduced to the state of digital biomass — raw material from which the system, like Frankenstein, stitches together an algorithmic chimera. This synthetic construct has nothing in common with your genuine anatomy, but to the machine, it becomes more real than you are.\n\nThe project literalizes the basic mechanics of digital violence. The simple act of casting a shadow on a wall transforms into an act of non-consensual exposure. The practices of creating deepfakes and generating naked bodies are not a system failure, but a direct consequence of this new technological paradigm. Software code evolves, automating the mechanisms of violence and turning our physical presence into a weapon against ourselves.',
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
    'home.artistName': 'Влада Иванова',
    'home.statement': 'Влада Иванова — междисциплинарная художница из Берлина, исследующая пересечение политики телесности, цифрового насилия и алгоритмического восприятия. Работая с интерактивным перформансом, искусственным интеллектом и партиципаторными инсталляциями, она изучает, как технологии перенимают и усиливают человеческую оптику (human gaze), зачастую объективируя и искажая женское тело.',
    
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
    'label.externalLink': 'Смотреть проект',
    
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
    'inprogress.fragments.title': 'Сладость насилия',
    'inprogress.fragments.description': 'Коллективная вышивка коробок конфет, внутри которых скрыты символы домашнего насилия. Проект исследует, как социальные жесты после насилия могут маскировать фактический вред.',
    'inprogress.fragments.status': 'Фаза исследования',
    
    'inprogress.border.title': 'Общественная книга',
    'inprogress.border.description': 'Публичная запись историй женщин в книге во время 24-часового перформанса. Проект фиксирует коллективный гендерный опыт через публичный и интимный акт свидетельства.',
    'inprogress.border.status': 'Разработка',
    
    // Essays
    'essay.skiagraphic.title': 'Спектральная плоть: Скиаграфическая дескрипция',
    'essay.skiagraphic.year': '2026',
    
    'essay.machine.title': 'Машина как свидетель',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.1.title': 'Вычисленная телесность',
    'statement.2.title': 'Алгоритм как генератор абъекции',
    'statement.2.content': 'В рамках глобального концепта «Вычисленная телесность» Иванова использует машинное обучение не как инструмент эстетического совершенства, а как генератор абъекции. В её живых интерактивных перформансах физические тени в реальном времени пропускаются через нейросети, обнажая галлюцинаторные и зачастую гротескные способы, которыми алгоритмы обрабатывают присутствие человека.',
    'statement.3.title': 'Этика свидетельствования',
    'statement.3.content': 'Ключевой элемент её практики — этика свидетельствования. В таких видеоинсталляциях, как «Присутствуют», основанных на анонимных видеозаписях глаз, она конструирует пространства для документации травмы и опыта выживания, не эксплуатируя личности героинь. Её работы бросают вызов зрителю, заставляя его столкнуться с насилием, укоренённым как в физической реальности, так и в цифровой среде.',
    
    // Contact
    'contact.email': 'slavasolen@gmail.com',
    'contact.cv': 'Скачать CV (PDF)',
    'contact.instagram': 'iconicyzma',
    
    // Skiagraphic
    'project.skiagraphic.title': 'Вычисленная телесность: Трансляция тени',
    'project.skiagraphic.medium': 'Интерактивный перформанс, генерация ИИ в реальном времени',
    'project.skiagraphic.description': 'Исследование алгоритмического насилия через трансляцию физических теней в нейросетевые галлюцинации в реальном времени.',
    'project.skiagraphic.longDescription': 'В эпоху тотальной видимости даже тень становится объектом контроля. Сегодня акт наблюдения делегирован машинному коду, однако алгоритм не ищет скрытую истину — он производит собственную реальность.\n\nСталкиваясь с дефицитом данных в виде плоского силуэта, ИИ обращается к латентному пространству — колоссальному архиву оцифрованных человеческих форм и текстур. Впадая в алгоритмическую галлюцинацию, машина насильственно реконструирует объем там, где его нет.\n\nСубъект низводится до состояния цифровой биомассы — сырья, из которого система, подобно Франкенштейну, сшивает алгоритмическую химеру. Этот синтетический конструкт не имеет ничего общего с вашей подлинной анатомией, но для машины он становится реальнее вас самих.\n\nПроект буквализирует базовую механику цифрового насилия. Простое отбрасывание тени на стену превращается в акт неконсенсуального обнажения. Практики создания дипфейков и генерации обнаженных тел — это не сбой системы, а прямое следствие новой технологической парадигмы. Программный код эволюционирует, автоматизируя механизмы насилия и превращая наше физическое присутствие в оружие против нас самих.',
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
