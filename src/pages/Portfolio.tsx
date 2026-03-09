import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getItemsByCategory, type PortfolioItem, type PortfolioCategory } from '@/data/portfolio';
import VideoPlayer from '@/components/VideoPlayer';

const categories: { key: PortfolioCategory; labelEn: string; labelRu: string }[] = [
  { key: 'fine-art-prints', labelEn: 'Fine Art Prints', labelRu: 'Принты' },
  { key: 'video-editions', labelEn: 'Video Editions', labelRu: 'Видео-тиражи' },
  { key: 'installations', labelEn: 'Installations', labelRu: 'Инсталляции' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function ItemCaption({ item, language }: { item: PortfolioItem; language: string }) {
  const title = language === 'ru' && item.titleRu ? item.titleRu : item.title;
  const caption = language === 'ru' && item.captionRu ? item.captionRu : item.caption;
  const description = language === 'ru' && item.descriptionRu ? item.descriptionRu : item.description;

  return (
    <div className="mt-4 space-y-1">
      <p className="text-sm text-foreground tracking-wide">{title}</p>
      <p className="text-xs text-muted-foreground font-mono leading-relaxed">{caption}</p>
      {description && (
        <p className="text-xs text-muted-foreground/70 leading-relaxed pt-1 max-w-prose">{description}</p>
      )}
    </div>
  );
}

function ImageItem({ item, index, language }: { item: PortfolioItem; index: number; language: string }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      className="mb-20 md:mb-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-auto bg-muted"
          />
        </div>
        {item.mockupSrc && (
          <div>
            <img
              src={item.mockupSrc}
              alt={`${item.title} — in situ`}
              loading="lazy"
              className="w-full h-auto bg-muted"
            />
          </div>
        )}
      </div>
      <ItemCaption item={item} language={language} />
    </motion.div>
  );
}

function DiptychItem({ item, index, language }: { item: PortfolioItem; index: number; language: string }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      className="mb-20 md:mb-28"
    >
      {/* Diptych pair */}
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <img
          src={item.src}
          alt={`${item.title} — left`}
          loading="lazy"
          className="w-full h-auto bg-muted"
        />
        {item.src2 && (
          <img
            src={item.src2}
            alt={`${item.title} — right`}
            loading="lazy"
            className="w-full h-auto bg-muted"
          />
        )}
      </div>
      {/* Mockup below */}
      {item.mockupSrc && (
        <div className="mt-6 md:mt-10 md:max-w-[70%]">
          <img
            src={item.mockupSrc}
            alt={`${item.title} — mockup`}
            loading="lazy"
            className="w-full h-auto bg-muted"
          />
        </div>
      )}
      <ItemCaption item={item} language={language} />
    </motion.div>
  );
}

function VideoItem({ item, index, language }: { item: PortfolioItem; index: number; language: string }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      className="mb-20 md:mb-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <VideoPlayer
          src={item.src}
          posterSrc={item.posterSrc}
          className="aspect-video"
        />
        {item.mockupSrc && (
          <div>
            <img
              src={item.mockupSrc}
              alt={`${item.title} — mockup`}
              loading="lazy"
              className="w-full h-auto bg-muted"
            />
          </div>
        )}
      </div>
      <ItemCaption item={item} language={language} />
    </motion.div>
  );
}

function PortfolioSection({ category, language }: { category: PortfolioCategory; language: string }) {
  const items = getItemsByCategory(category);

  return (
    <div>
      {items.map((item, i) => {
        if (item.type === 'diptych') return <DiptychItem key={item.id} item={item} index={i} language={language} />;
        if (item.type === 'video') return <VideoItem key={item.id} item={item} index={i} language={language} />;
        return <ImageItem key={item.id} item={item} index={i} language={language} />;
      })}
    </div>
  );
}

export default function Portfolio() {
  const { language } = useLanguage();
  const [active, setActive] = useState<PortfolioCategory>('fine-art-prints');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-lg md:text-xl tracking-wide mb-2">
          {language === 'ru' ? 'Вычисленная телесность' : 'Calculated Corporeality'}
        </h1>
        <p className="text-xs text-muted-foreground font-mono max-w-prose leading-relaxed">
          {language === 'ru'
            ? 'Избранные работы, доступные для приобретения. Принты, видео-тиражи и инсталляционные комплекты.'
            : 'Selected works available for acquisition. Prints, video editions, and installation kits.'}
        </p>
      </motion.div>

      {/* Tab navigation */}
      <div className="sticky top-14 md:top-[57px] z-40 bg-background border-b border-border -mx-[var(--spacing-page)] px-[var(--spacing-page)] mb-16 md:mb-24">
        <div className="flex gap-8 py-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-xs font-mono tracking-wider transition-colors duration-150 pb-0.5 ${
                active === cat.key
                  ? 'text-foreground border-b border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {language === 'ru' ? cat.labelRu : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <PortfolioSection category={active} language={language} />

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
