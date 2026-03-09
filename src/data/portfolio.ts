export type PortfolioItemType = 'image' | 'diptych' | 'video';
export type PortfolioCategory = 'fine-art-prints' | 'video-editions' | 'installations';

export interface PortfolioItem {
  id: string;
  title: string;
  titleRu?: string;
  type: PortfolioItemType;
  category: PortfolioCategory;
  src: string;
  src2?: string; // second image for diptychs
  mockupSrc?: string;
  posterSrc?: string; // cover image for videos
  caption: string;
  captionRu?: string;
  description?: string;
  descriptionRu?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // ── Fine Art Prints ──────────────────────────────────────────
  {
    id: 'extraction-01',
    title: 'Extraction #01',
    titleRu: 'Извлечение #01',
    type: 'image',
    category: 'fine-art-prints',
    src: '/portfolio/fine-art-prints/extraction-01.jpg',
    mockupSrc: '/portfolio/fine-art-prints/extraction-01-mockup.jpg',
    caption: 'Fine Art Print on Alu-Dibond. 100 × 150 cm. Edition of 5.',
    captionRu: 'Принт на алюминии Alu-Dibond. 100 × 150 см. Тираж 5.',
  },
  {
    id: 'extraction-02',
    title: 'Extraction #02',
    titleRu: 'Извлечение #02',
    type: 'image',
    category: 'fine-art-prints',
    src: '/portfolio/fine-art-prints/extraction-02.jpg',
    mockupSrc: '/portfolio/fine-art-prints/extraction-02-mockup.jpg',
    caption: 'Fine Art Print on Alu-Dibond. 100 × 150 cm. Edition of 5.',
    captionRu: 'Принт на алюминии Alu-Dibond. 100 × 150 см. Тираж 5.',
  },
  {
    id: 'extraction-03',
    title: 'Extraction #03',
    titleRu: 'Извлечение #03',
    type: 'image',
    category: 'fine-art-prints',
    src: '/portfolio/fine-art-prints/extraction-03.jpg',
    mockupSrc: '/portfolio/fine-art-prints/extraction-03-mockup.jpg',
    caption: 'Fine Art Print on Alu-Dibond. 80 × 120 cm. Edition of 5.',
    captionRu: 'Принт на алюминии Alu-Dibond. 80 × 120 см. Тираж 5.',
  },
  {
    id: 'diptych-01',
    title: 'Diptych I — Collapse / Reform',
    titleRu: 'Диптих I — Распад / Восстановление',
    type: 'diptych',
    category: 'fine-art-prints',
    src: '/portfolio/fine-art-prints/diptych-01-left.jpg',
    src2: '/portfolio/fine-art-prints/diptych-01-right.jpg',
    mockupSrc: '/portfolio/fine-art-prints/diptych-01-mockup.jpg',
    caption: 'Diptych. Fine Art Print on Alu-Dibond. 2 × (70 × 100 cm). Edition of 3.',
    captionRu: 'Диптих. Принт на алюминии Alu-Dibond. 2 × (70 × 100 см). Тираж 3.',
  },
  {
    id: 'diptych-02',
    title: 'Diptych II — Signal / Noise',
    titleRu: 'Диптих II — Сигнал / Шум',
    type: 'diptych',
    category: 'fine-art-prints',
    src: '/portfolio/fine-art-prints/diptych-02-left.jpg',
    src2: '/portfolio/fine-art-prints/diptych-02-right.jpg',
    mockupSrc: '/portfolio/fine-art-prints/diptych-02-mockup.jpg',
    caption: 'Diptych. Fine Art Print on Alu-Dibond. 2 × (70 × 100 cm). Edition of 3.',
    captionRu: 'Диптих. Принт на алюминии Alu-Dibond. 2 × (70 × 100 см). Тираж 3.',
  },

  // ── Video Editions ───────────────────────────────────────────
  {
    id: 'loop-body-01',
    title: 'Loop Body #01',
    titleRu: 'Тело-петля #01',
    type: 'video',
    category: 'video-editions',
    src: '/portfolio/video-editions/loop-body-01.mp4',
    posterSrc: '/portfolio/video-editions/loop-body-01-poster.jpg',
    mockupSrc: '/portfolio/video-editions/loop-body-01-mockup.jpg',
    caption: 'Single-channel video, loop. 4K. Edition of 3 + 1 AP.',
    captionRu: 'Одноканальное видео, петля. 4K. Тираж 3 + 1 AP.',
  },
  {
    id: 'loop-body-02',
    title: 'Loop Body #02',
    titleRu: 'Тело-петля #02',
    type: 'video',
    category: 'video-editions',
    src: '/portfolio/video-editions/loop-body-02.mp4',
    posterSrc: '/portfolio/video-editions/loop-body-02-poster.jpg',
    mockupSrc: '/portfolio/video-editions/loop-body-02-mockup.jpg',
    caption: 'Single-channel video, loop. 4K. Edition of 3 + 1 AP.',
    captionRu: 'Одноканальное видео, петля. 4K. Тираж 3 + 1 AP.',
  },
  {
    id: 'erosion-study',
    title: 'Erosion Study',
    titleRu: 'Этюд эрозии',
    type: 'video',
    category: 'video-editions',
    src: '/portfolio/video-editions/erosion-study.mp4',
    posterSrc: '/portfolio/video-editions/erosion-study-poster.jpg',
    caption: 'Single-channel video, loop. 4K. Edition of 5.',
    captionRu: 'Одноканальное видео, петля. 4K. Тираж 5.',
  },

  // ── Installations ────────────────────────────────────────────
  {
    id: 'installation-shadow',
    title: 'Shadow Translation — Exhibition Kit',
    titleRu: 'Трансляция тени — выставочный комплект',
    type: 'image',
    category: 'installations',
    src: '/portfolio/installations/shadow-translation-01.jpg',
    mockupSrc: '/portfolio/installations/shadow-translation-mockup.jpg',
    caption: 'Interactive installation. Projector, camera, custom software, PC. Variable dimensions.',
    captionRu: 'Интерактивная инсталляция. Проектор, камера, авторское ПО, ПК. Размеры варьируются.',
    description: 'Technical requirements: darkened room (min. 5 × 7 m), short-throw projector (min. 3000 lm), USB camera, dedicated PC with GPU (RTX 3060+). Setup time: 1 day. On-site technical support provided.',
    descriptionRu: 'Технические требования: затемнённое помещение (мин. 5 × 7 м), короткофокусный проектор (мин. 3000 лм), USB-камера, выделенный ПК с GPU (RTX 3060+). Время монтажа: 1 день. Техническое сопровождение на месте.',
  },
  {
    id: 'installation-present',
    title: 'Present — Exhibition Kit',
    titleRu: 'Присутствуют — выставочный комплект',
    type: 'image',
    category: 'installations',
    src: '/portfolio/installations/present-installation-01.jpg',
    mockupSrc: '/portfolio/installations/present-installation-mockup.jpg',
    caption: 'Multi-channel video installation. Monitors or projection. Variable dimensions.',
    captionRu: 'Многоканальная видеоинсталляция. Мониторы или проекция. Размеры варьируются.',
    description: 'Technical requirements: 3–9 monitors (min. 27″) or projection surfaces, media players, darkened or semi-darkened space. Setup time: 1 day.',
    descriptionRu: 'Технические требования: 3–9 мониторов (мин. 27″) или проекционных поверхностей, медиаплееры, затемнённое или полузатемнённое пространство. Время монтажа: 1 день.',
  },
];

export function getItemsByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
