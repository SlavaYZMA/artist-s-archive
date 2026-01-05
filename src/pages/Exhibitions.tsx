import { useLanguage } from '@/contexts/LanguageContext';

interface Exhibition {
  year: string;
  title: string;
  titleRu: string;
  venue: string;
  venueRu: string;
  location: string;
  locationRu: string;
  type: 'solo' | 'group';
}

const exhibitions: Exhibition[] = [
  {
    year: '2025',
    title: 'Quantum Portraits',
    titleRu: 'Квантовые портреты',
    venue: 'Online exhibition with Zoom mediation',
    venueRu: 'Онлайн-выставка с медиацией через Zoom',
    location: 'online',
    locationRu: 'онлайн',
    type: 'group',
  },
  {
   year: '2023',
    title: 'The Course of Nature',
    titleRu: 'Ход природы',
    venue: 'AIR, ITMO University',
    venueRu: 'AIR, университет ИТМО',
    location: 'Saint Petersburg, Russia',
    locationRu: 'Санкт-Петербург, Россия',
    type: 'group',
  },
];

export default function Exhibitions() {
  const { t, language } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.exhibitions')}</h1>
      
      <div>
        {exhibitions.map((exhibition, index) => (
          <div key={index} className="list-item py-4">
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
              <span className="text-muted-foreground text-sm w-12 flex-shrink-0">
                {exhibition.year}
              </span>
              <div className="flex-grow">
                <h2 className="text-foreground mb-1">
                  {language === 'ru' ? exhibition.titleRu : exhibition.title}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {language === 'ru' ? exhibition.venueRu : exhibition.venue}
                  <span className="mx-2">·</span>
                  {language === 'ru' ? exhibition.locationRu : exhibition.location}
                </p>
              </div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider flex-shrink-0">
                {exhibition.type === 'solo' ? t('label.solo') : t('label.group')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
