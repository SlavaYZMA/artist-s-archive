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
  // ── 1. Single Images (Fine Art Prints) ──────────────────────────
  {
    key: 'fine-art-prints',
    labelEn: 'Fine Art Prints',
    labelRu: 'Принты',
    mockups: [
      { id: 'fap-mock-1', src: '/portfolio/fine-art-prints/single-mockup-interior.jpg', alt: 'Interior mockup — Fine Art Print' },
      { id: 'fap-mock-2', src: '/portfolio/fine-art-prints/single-mockup-gallery.jpg', alt: 'Gallery mockup — Fine Art Print' },
    ],
    items: [
      { id: 'extraction-01', title: 'Extraction #01', titleRu: 'Извлечение #01', type: 'image', src: '/portfolio/fine-art-prints/extraction-01.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-02', title: 'Extraction #02', titleRu: 'Извлечение #02', type: 'image', src: '/portfolio/fine-art-prints/extraction-02.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-03', title: 'Extraction #03', titleRu: 'Извлечение #03', type: 'image', src: '/portfolio/fine-art-prints/extraction-03.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-04', title: 'Extraction #04', titleRu: 'Извлечение #04', type: 'image', src: '/portfolio/fine-art-prints/extraction-04.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-05', title: 'Extraction #05', titleRu: 'Извлечение #05', type: 'image', src: '/portfolio/fine-art-prints/extraction-05.webp', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-06', title: 'Extraction #06', titleRu: 'Извлечение #06', type: 'image', src: '/portfolio/fine-art-prints/extraction-06.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-07', title: 'Extraction #07', titleRu: 'Извлечение #07', type: 'image', src: '/portfolio/fine-art-prints/extraction-07.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-08', title: 'Extraction #08', titleRu: 'Извлечение #08', type: 'image', src: '/portfolio/fine-art-prints/extraction-08.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-09', title: 'Extraction #09', titleRu: 'Извлечение #09', type: 'image', src: '/portfolio/fine-art-prints/extraction-09.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-10', title: 'Extraction #10', titleRu: 'Извлечение #10', type: 'image', src: '/portfolio/fine-art-prints/extraction-10.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-11', title: 'Extraction #11', titleRu: 'Извлечение #11', type: 'image', src: '/portfolio/fine-art-prints/extraction-11.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-12', title: 'Extraction #12', titleRu: 'Извлечение #12', type: 'image', src: '/portfolio/fine-art-prints/extraction-12.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-13', title: 'Extraction #13', titleRu: 'Извлечение #13', type: 'image', src: '/portfolio/fine-art-prints/extraction-13.webp', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-14', title: 'Extraction #14', titleRu: 'Извлечение #14', type: 'image', src: '/portfolio/fine-art-prints/extraction-14.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-15', title: 'Extraction #15', titleRu: 'Извлечение #15', type: 'image', src: '/portfolio/fine-art-prints/extraction-15.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-16', title: 'Extraction #16', titleRu: 'Извлечение #16', type: 'image', src: '/portfolio/fine-art-prints/extraction-16.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
      { id: 'extraction-17', title: 'Extraction #17', titleRu: 'Извлечение #17', type: 'image', src: '/portfolio/fine-art-prints/extraction-17.png', caption: 'Fine Art Print on Alu-Dibond. 5840 × 10240. Edition of 5.', captionRu: 'Принт на Alu-Dibond. 5840 × 10240. Тираж 5.' },
    ],
  },

  // ── 2. Diptychs ─────────────────────────────────────────────────
  {
    key: 'diptychs',
    labelEn: 'Diptychs',
    labelRu: 'Диптихи',
    mockups: [
      { id: 'dip-mock-1', src: '/portfolio/diptychs/diptych-mockup-interior.jpg', alt: 'Interior mockup — Diptych' },
      { id: 'dip-mock-2', src: '/portfolio/diptychs/diptych-mockup-gallery.jpg', alt: 'Gallery mockup — Diptych' },
    ],
    items: [
      { id: 'diptych-01', title: 'Diptych I — Collapse / Reform', titleRu: 'Диптих I — Распад / Восстановление', type: 'image', src: '/portfolio/diptychs/diptych-01.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-02', title: 'Diptych II — Signal / Noise', titleRu: 'Диптих II — Сигнал / Шум', type: 'image', src: '/portfolio/diptychs/diptych-02.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-03', title: 'Diptych III', titleRu: 'Диптих III', type: 'image', src: '/portfolio/diptychs/diptych-03.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-04', title: 'Diptych IV', titleRu: 'Диптих IV', type: 'image', src: '/portfolio/diptychs/diptych-04.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-05', title: 'Diptych V', titleRu: 'Диптих V', type: 'image', src: '/portfolio/diptychs/diptych-05.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-06', title: 'Diptych VI', titleRu: 'Диптих VI', type: 'image', src: '/portfolio/diptychs/diptych-06.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-07', title: 'Diptych VII', titleRu: 'Диптих VII', type: 'image', src: '/portfolio/diptychs/diptych-07.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-08', title: 'Diptych VIII', titleRu: 'Диптих VIII', type: 'image', src: '/portfolio/diptychs/diptych-08.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-09', title: 'Diptych IX', titleRu: 'Диптих IX', type: 'image', src: '/portfolio/diptychs/diptych-09.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-10', title: 'Diptych X', titleRu: 'Диптих X', type: 'image', src: '/portfolio/diptychs/diptych-10.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-11', title: 'Diptych XI', titleRu: 'Диптих XI', type: 'image', src: '/portfolio/diptychs/diptych-11.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-12', title: 'Diptych XII', titleRu: 'Диптих XII', type: 'image', src: '/portfolio/diptychs/diptych-12.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-13', title: 'Diptych XIII', titleRu: 'Диптих XIII', type: 'image', src: '/portfolio/diptychs/diptych-13.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-14', title: 'Diptych XIV', titleRu: 'Диптих XIV', type: 'image', src: '/portfolio/diptychs/diptych-14.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-15', title: 'Diptych XV', titleRu: 'Диптих XV', type: 'image', src: '/portfolio/diptychs/diptych-15.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-16', title: 'Diptych XVI', titleRu: 'Диптих XVI', type: 'image', src: '/portfolio/diptychs/diptych-16.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
      { id: 'diptych-17', title: 'Diptych XVII', titleRu: 'Диптих XVII', type: 'image', src: '/portfolio/diptychs/diptych-17.jpg', caption: 'Diptych. Fine Art Print on Alu-Dibond. 4320 × 3840. Edition of 3.', captionRu: 'Диптих. Принт на Alu-Dibond. 4320 × 3840. Тираж 3.' },
    ],
  },

  // ── 3. Video Editions ───────────────────────────────────────────
  {
    key: 'video-editions',
    labelEn: 'Video Editions',
    labelRu: 'Видео-тиражи',
    mockups: [
      { id: 'vid-mock-1', src: '/portfolio/video-editions/video-mockup-landscape.mp4', alt: 'Landscape mockup — Video Edition' },
      { id: 'vid-mock-2', src: '/portfolio/video-editions/video-mockup-portrait-1.mp4', alt: 'Vertical mockup — Video Edition' },
      { id: 'vid-mock-3', src: '/portfolio/video-editions/video-mockup-portrait-2.mp4', alt: 'Vertical mockup — Video Edition' },
    ],
    items: [
      { id: 'video-1', title: 'Loop Body #01', titleRu: 'Тело-петля #01', type: 'video', src: '/portfolio/video-editions/video-1.mp4', caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.', captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.' },
      { id: 'video-2', title: 'Loop Body #02', titleRu: 'Тело-петля #02', type: 'video', src: '/portfolio/video-editions/video-2.mp4', caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.', captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.' },
      { id: 'video-3', title: 'Loop Body #03', titleRu: 'Тело-петля #03', type: 'video', src: '/portfolio/video-editions/video-3.mp4', caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.', captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.' },
      { id: 'video-4', title: 'Loop Body #04', titleRu: 'Тело-петля #04', type: 'video', src: '/portfolio/video-editions/video-4.mp4', caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.', captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.' },
      { id: 'video-5', title: 'Loop Body #05', titleRu: 'Тело-петля #05', type: 'video', src: '/portfolio/video-editions/video-5.mp4', caption: 'Single-channel video, loop. 4K, 9:16. Edition of 3 + 1 AP.', captionRu: 'Одноканальное видео, петля. 4K, 9:16. Тираж 3 + 1 AP.' },
    ],
  },
];
