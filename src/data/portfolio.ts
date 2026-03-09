export interface MockupItem {
  id: string;
  src: string;
  alt: string;
}

export interface PortfolioWork {
  id: string;
  title: string;
  titleRu?: string;
  type: 'image' | 'video';
  src: string;
  caption: string;
  captionRu?: string;
}

export interface PortfolioSection {
  key: string;
  labelEn: string;
  labelRu: string;
  mockups: MockupItem[];
  items: PortfolioWork[];
}

export const portfolioSections: PortfolioSection[] = [
  // ── Single Images (Fine Art Prints) ──────────────────────────
  {
    key: 'fine-art-prints',
    labelEn: 'Fine Art Prints',
    labelRu: 'Принты',
    mockups: [
      { id: 'fap-mock-1', src: '/portfolio/fine-art-prints/extraction-01.jpg', alt: 'Interior mockup — Fine Art Print' },
      { id: 'fap-mock-2', src: '/portfolio/fine-art-prints/extraction-02.jpg', alt: 'Gallery mockup — Fine Art Print' },
    ],
    items: [
      {
        id: 'extraction-01',
        title: 'Extraction #01',
        titleRu: 'Извлечение #01',
        type: 'image',
        src: '/portfolio/fine-art-prints/extraction-01.jpg',
        caption: 'Fine Art Print on Alu-Dibond. 1168 × 2048. Edition of 5.',
        captionRu: 'Принт на Alu-Dibond. 1168 × 2048. Тираж 5.',
      },
      {
        id: 'extraction-02',
        title: 'Extraction #02',
        titleRu: 'Извлечение #02',
        type: 'image',
        src: '/portfolio/fine-art-prints/extraction-02.jpg',
        caption: 'Fine Art Print on Alu-Dibond. 1168 × 2048. Edition of 5.',
        captionRu: 'Принт на Alu-Dibond. 1168 × 2048. Тираж 5.',
      },
      {
        id: 'extraction-03',
        title: 'Extraction #03',
        titleRu: 'Извлечение #03',
        type: 'image',
        src: '/portfolio/fine-art-prints/extraction-03.jpg',
        caption: 'Fine Art Print on Alu-Dibond. 1168 × 2048. Edition of 5.',
        captionRu: 'Принт на Alu-Dibond. 1168 × 2048. Тираж 5.',
      },
      {
        id: 'extraction-04',
        title: 'Extraction #04',
        titleRu: 'Извлечение #04',
        type: 'image',
        src: '/portfolio/fine-art-prints/extraction-04.jpg',
        caption: 'Fine Art Print on Alu-Dibond. 1168 × 2048. Edition of 5.',
        captionRu: 'Принт на Alu-Dibond. 1168 × 2048. Тираж 5.',
      },
      {
        id: 'extraction-05',
        title: 'Extraction #05',
        titleRu: 'Извлечение #05',
        type: 'image',
        src: '/portfolio/fine-art-prints/extraction-05.jpg',
        caption: 'Fine Art Print on Alu-Dibond. 1168 × 2048. Edition of 5.',
        captionRu: 'Принт на Alu-Dibond. 1168 × 2048. Тираж 5.',
      },
    ],
  },

  // ── Diptychs ─────────────────────────────────────────────────
  {
    key: 'diptychs',
    labelEn: 'Diptychs',
    labelRu: 'Диптихи',
    mockups: [
      { id: 'dip-mock-1', src: '/portfolio/fine-art-prints/diptych-01.jpg', alt: 'Interior mockup — Diptych' },
      { id: 'dip-mock-2', src: '/portfolio/fine-art-prints/diptych-02.jpg', alt: 'Gallery mockup — Diptych' },
    ],
    items: [
      {
        id: 'diptych-01',
        title: 'Diptych I — Collapse / Reform',
        titleRu: 'Диптих I — Распад / Восстановление',
        type: 'image',
        src: '/portfolio/fine-art-prints/diptych-03.jpg',
        caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.',
        captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.',
      },
      {
        id: 'diptych-02',
        title: 'Diptych II — Signal / Noise',
        titleRu: 'Диптих II — Сигнал / Шум',
        type: 'image',
        src: '/portfolio/fine-art-prints/diptych-04.jpg',
        caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.',
        captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.',
      },
      {
        id: 'diptych-03',
        title: 'Diptych III — Entropy / Order',
        titleRu: 'Диптих III — Энтропия / Порядок',
        type: 'image',
        src: '/portfolio/fine-art-prints/diptych-05.jpg',
        caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.',
        captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.',
      },
      {
        id: 'diptych-04',
        title: 'Diptych IV — Trace / Residue',
        titleRu: 'Диптих IV — След / Осадок',
        type: 'image',
        src: '/portfolio/fine-art-prints/diptych-06.jpg',
        caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.',
        captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.',
      },
    ],
  },

  // ── Video Editions ───────────────────────────────────────────
  {
    key: 'video-editions',
    labelEn: 'Video Editions',
    labelRu: 'Видео-тиражи',
    mockups: [
      { id: 'vid-mock-1', src: '/portfolio/fine-art-prints/extraction-06.jpg', alt: 'Landscape mockup — Video Edition' },
      { id: 'vid-mock-2', src: '/portfolio/fine-art-prints/extraction-07.jpg', alt: 'Vertical mockup — Video Edition' },
      { id: 'vid-mock-3', src: '/portfolio/fine-art-prints/extraction-08.jpg', alt: 'Vertical mockup — Video Edition' },
    ],
    items: [
      {
        id: 'loop-body-01',
        title: 'Loop Body #01',
        titleRu: 'Тело-петля #01',
        type: 'video',
        src: '/portfolio/video-editions/loop-body-01.mp4',
        caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.',
        captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.',
      },
      {
        id: 'loop-body-02',
        title: 'Loop Body #02',
        titleRu: 'Тело-петля #02',
        type: 'video',
        src: '/portfolio/video-editions/loop-body-02.mp4',
        caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.',
        captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.',
      },
      {
        id: 'erosion-study',
        title: 'Erosion Study',
        titleRu: 'Этюд эрозии',
        type: 'video',
        src: '/portfolio/video-editions/erosion-study.mp4',
        caption: 'Single-channel video, loop. 4K, 9:16. Edition of 5.',
        captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 5.',
      },
    ],
  },
];
