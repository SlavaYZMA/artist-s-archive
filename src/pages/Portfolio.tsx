import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioSections, type PortfolioSection, type PortfolioWork } from '@/data/portfolio';

/* ── animation variants ─────────────────────────────────────── */
const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ── hover-play video card ──────────────────────────────────── */
function VideoCard({ item, language }: { item: PortfolioWork; language: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const handleEnter = useCallback(() => ref.current?.play(), []);
  const handleLeave = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }, []);

  const title = language === 'ru' && item.titleRu ? item.titleRu : item.title;
  const caption = language === 'ru' && item.captionRu ? item.captionRu : item.caption;

  return (
    <div
      /* Уменьшили размер карточки галереи примерно в 2 раза */
      className="min-w-[150px] sm:min-w-[180px] max-w-[220px] flex-shrink-0 snap-start"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="aspect-[9/16] bg-[#050505] overflow-hidden flex items-center justify-center rounded-sm">
        <video
          ref={ref}
          src={`${item.src}#t=0.001`}
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="text-[11px] sm:text-xs font-medium tracking-wide text-foreground">{title}</p>
        <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}

/* ── image card ─────────────────────────────────────────────── */
function ImageCard({
  item,
  language,
  aspectClass = 'aspect-[9/16]',
}: {
  item: PortfolioWork;
  language: string;
  aspectClass?: string;
}) {
  const title = language === 'ru' && item.titleRu ? item.titleRu : item.title;
  const caption = language === 'ru' && item.captionRu ? item.captionRu : item.caption;

  return (
    /* Уменьшили размер карточки галереи примерно в 2 раза */
    <div className="min-w-[150px] sm:min-w-[180px] max-w-[220px] flex-shrink-0 snap-start">
      <div className={`${aspectClass} bg-[#050505] overflow-hidden flex items-center justify-center rounded-sm`}>
        <img src={item.src} alt={title} loading="lazy" className="w-full h-full object-contain" />
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="text-[11px] sm:text-xs font-medium tracking-wide text-foreground">{title}</p>
        <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}

/* ── section component ──────────────────────────────────────── */
function GallerySection({
  section,
  language,
  index,
}: {
  section: PortfolioSection;
  language: string;
  index: number;
}) {
  const aspectClass = section.key === 'diptychs' ? 'aspect-[9/8]' : 'aspect-[9/16]';

  return (
    <motion.section
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={reveal}
      className="mb-24 md:mb-36"
    >
      {/* Section label */}
      <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8 md:mb-12">
        {language === 'ru' ? section.labelRu : section.labelEn}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left — Mockups (Мокапы крупнее, чем карточки в галерее: max-w-[320px]) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20 lg:self-start flex flex-col items-start">
          {section.mockups.map((m) => {
            const isVideo = m.src.toLowerCase().endsWith('.mp4') || m.src.toLowerCase().endsWith('.webm');
            
            return (
              <div key={m.id} className="w-[75%] sm:w-[60%] lg:w-full max-w-[320px] bg-muted overflow-hidden shadow-sm">
                {isVideo ? (
                  <video 
                    src={m.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto object-cover" 
                  />
                ) : (
                  <img 
                    src={m.src} 
                    alt={m.alt} 
                    loading="lazy" 
                    className="w-full h-auto object-cover" 
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right — Horizontal scroll gallery */}
        <div className="lg:col-span-8">
          <div className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {section.items.map((item) =>
              item.type === 'video' ? (
                <VideoCard key={item.id} item={item} language={language} />
              ) : (
                <ImageCard key={item.id} item={item} language={language} aspectClass={aspectClass} />
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ── page ────────────────────────────────────────────────────── */
export default function Portfolio() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-28 pt-8 md:pt-12"
      >
        <h1 className="text-lg md:text-xl tracking-wide mb-2 uppercase">
          {language === 'ru' ? 'Вычисленная телесность' : 'Calculated Corporeality'}
        </h1>
        <p className="text-xs text-muted-foreground font-mono max-w-prose leading-relaxed mt-4">
          {language === 'ru'
            ? 'Избранные работы, доступные для приобретения. Принты, видео-тиражи и инсталляционные комплекты.'
            : 'Selected works available for acquisition. Prints, video editions, and installation kits.'}
        </p>
      </motion.div>

      {/* Sections */}
      {portfolioSections.map((section, i) => (
        <GallerySection key={section.key} section={section} language={language} index={i} />
      ))}

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-border pt-8 mt-16 md:mt-24 pb-16"
      >
        <p className="text-xs text-muted-foreground font-mono leading-relaxed max-w-prose">
          {language === 'ru'
            ? 'По вопросам приобретения, аренды для выставок и технических спецификаций — slavasolen@gmail.com'
            : 'For inquiries regarding acquisition, exhibition loans, and technical specifications — slavasolen@gmail.com'}
        </p>
      </motion.div>
    </div>
  );
}
