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
    'home.artistName': 'Slava Solen',
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
    'inprogress.fragments.title': 'Sweet Violence',
    'inprogress.fragments.description': 'Research into attention economies and cognitive labor.Collaborative embroidery of candy boxes containing symbols of domestic violence. The project examines how social gestures after abuse can conceal actual harm.',
    'inprogress.fragments.status': 'Research phase',
    
    'inprogress.border.title': 'The Public Book',
    'inprogress.border.description': 'Public recording of women’s stories in a book during a 24-hour performance. The project documents collective gender-based experiences through a public and intimate act of testimony.',
    'inprogress.border.status': 'Development',
    
    // Essays
    'essay.systems.title': 'On Systems of Seeing',
    'essay.systems.year': '2024',
    
    'essay.absence.title': 'Notes on Absence',
    'essay.absence.year': '2023',
    
    'essay.machine.title': 'The Machine as Witness',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.practice.title': 'Practice',
    'statement.practice.content': 'My artistic practice focuses on the analysis of perceptual and algorithmic structures through which the experience of trauma is formed. The primary focus is on exploring methods for recording, presenting, and transmitting experiences of gender-based violence without visualizing the violence itself and without reproducing relations of power.',
    'statement.methodology.title': 'Methodology',
    'statement.methodology.content': 'I employ observation, archives, and algorithmic or digital processes as tools and co-authors. Technology is not an end in itself but a means to investigate the limits of visibility, ethical engagement, and collective witnessing. Projects often involve audience participation while remaining anonymous and structured to avoid hierarchy between individual experiences.',
    'statement.themes.title': 'Themes and Investigation',
    'statement.themes.content': '- how assessment systems and algorithmic processes shape subjective experience;\n- how trauma and experiences of violence can be recorded and represented without exploitation;\n- how collective presence and testimony create new forms of documentation and perception.',
    'statement.audience.title': 'Audience Engagement',
    'statement.audience.content': 'The viewer becomes involved in processes of observation, collaboration, and interaction, participating in the system of experience recording and transmission. The work creates space for reflection on the limits of control, responsibility, and participation, ensuring an ethical distance between observer and subject.',
    'statement.ethics.title': 'Ethical Position',
    'statement.ethics.content': 'All projects prioritize respect for lived trauma and exclude exploitative visualization of violence. Anonymity, hidden algorithms, and structured presentation establish conditions in which the fact of existence is documented, rather than the content of trauma.',
    // Contact
    'contact.email': 'slavasolen@gmail.com',
    'contact.cv': 'Download CV (PDF)',
    'contact.instagram': 'iconicyzma',
     // Skiagraphic
    'project.skiagraphic.title': 'Spectral Flesh: Skiagraphic Description',
    'project.skiagraphic.medium': 'Interactive installation, algorithmic voyeurism',
    'project.skiagraphic.description': 'An exploration of "leaky boundaries" through the algorithmic deconstruction of shadows and neural network hallucinations.',
    'project.skiagraphic.longDescription': `
        The project explores the body as an "occlusion system" — a physical object whose presence is documented through the absence of light. 
        At the center of the installation, a white wall and high-contrast light transform the viewer's shadow into a "two-dimensional corpse" (cadere), 
        a liminal state between the living subject and its digital trace.

        Employing methods of algorithmic voyeurism, a neural network analyzes the flat contour of the shadow to 
        reconstruct the volume and details of naked flesh. Lacking depth data, the AI consults its 
        latent space — a digital library of millions of other bodies — to "hallucinate" a probabilistic portrait.

        The result of this reconstruction falls into the "uncanny valley": a monstrous double that exposes 
        human vulnerability to technocratic actors who convert our shadows into raw data. 
        It is a manifestation of necropolitics, where the final battlefield for privacy is 
        our ability to remain invisible in a world of excessive illumination.
    `,
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
    'home.artistName': 'Слава Солен',
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
    'inprogress.fragments.title': 'Сладость насилия',
    'inprogress.fragments.description': 'Коллективная вышивка коробок конфет, внутри которых скрыты символы домашнего насилия. Проект исследует, как социальные жесты после насилия могут маскировать фактический вред.',
    'inprogress.fragments.status': 'Фаза исследования',
    
    'inprogress.border.title': 'Общественная книга',
    'inprogress.border.description': 'Публичная запись историй женщин в книге во время 24-часового перформанса. Проект фиксирует коллективный гендерный опыт через публичный и интимный акт свидетельства.',
    'inprogress.border.status': 'Разработка',
    
    // Essays
    'essay.systems.title': 'О системах видения',
    'essay.systems.year': '2024',
    
    'essay.absence.title': 'Заметки об отсутствии',
    'essay.absence.year': '2023',
    
    'essay.machine.title': 'Машина как свидетель',
    'essay.machine.year': '2022',
    
    // Statement
    'statement.practice.title': 'Практика',
    'statement.practice.content': 'Моя художественная практика сосредоточена на анализе перцептивных и алгоритмических структур, через которые формируется опыт травмы. Основной фокус — исследование способов фиксации, представления и передачи переживаний гендерного насилия без визуализации самого насилия и без репродукции властных отношений.',
    'statement.methodology.title': 'Методология',
    'statement.methodology.content': 'В работе я использую наблюдение, архивы, алгоритмические и цифровые процессы как инструменты и соавторов. Технологии не являются целью сами по себе; они служат средством для исследования границ допустимой видимости, этического взаимодействия и коллективного свидетельства. Проекты часто включают участие публики, но остаются анонимными и структурированы так, чтобы исключить иерархию между индивидуальными переживаниями.',
    'statement.themes.title': 'Темы и исследование',
    'statement.themes.content': '- как системы оценки и алгоритмические процессы влияют на субъективный опыт;\n- как травма и переживания насилия могут фиксироваться и представляться без эксплуатации;\n- как коллективное присутствие и свидетельство создают новые формы документации и восприятия.',
    'statement.audience.title': 'Взаимодействие со зрителем',
    'statement.audience.content': 'Зритель вовлекается в процессы наблюдения, коллаборации и взаимодействия, становясь участником системы фиксации и передачи опыта. Работа формирует пространство для размышления о границах контроля, ответственности и участия, обеспечивая этическую дистанцию между наблюдателем и объектом исследования.',
    'statement.ethics.title': 'Этическая позиция',
    'statement.ethics.content': 'Все проекты ориентированы на уважение к пережитой травме и исключают эксплуатирующую визуализацию насилия. Анонимность, скрытые алгоритмы и структурированное представление создают условия, в которых фиксируется факт существования, а не содержание травмы.',
    
    // Contact
    'contact.email': 'slavasolen@gmail.com',
    'contact.cv': 'Скачать CV (PDF)',
    'contact.instagram': 'iconicyzma',
    
    // Skiagraphic
    'project.skiagraphic.title': 'Спектральная плоть: Скиаграфическая дескрипция',
    'project.skiagraphic.medium': 'Интерактивная инсталляция, алгоритмический вуайеризм',
    'project.skiagraphic.description': 'Исследование «протекающих границ» тела через алгоритмическую деконструкцию тени и нейросетевые галлюцинации.',
    'project.skiagraphic.longDescription': `
        Проект исследует тело как «окклюзионную систему» — физический объект, чье присутствие фиксируется через отсутствие света. 
        В центре инсталляции — белая стена и контрастный свет, превращающие тень зрителя в «двумерный труп» (cadere), 
        лиминальное состояние между живым субъектом и его цифровым следом.

        Используя методы алгоритмического вуайеризма, нейросеть анализирует плоский контур тени и пытается 
        реконструировать объем и детали обнаженной плоти. Не имея данных о глубине, ИИ обращается к своему 
        латентному пространству — цифровой библиотеке миллионов чужих тел — и «галлюцинирует» вероятностный портрет.

        Результат этой реконструкции попадает в «зловещую долину»: монструозный двойник обнажает уязвимость 
        человека перед технократическими силами, которые превращают нашу тень в ресурс для обработки. 
        Это манифестация некрополитики данных, где последним полем битвы за приватность становится 
        наша способность оставаться невидимыми в мире избыточного освещения.
    `,
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
