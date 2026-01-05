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
    year: '2024',
    title: 'Systems of Sight',
    titleRu: 'Системы зрения',
    venue: 'Museum of Contemporary Art',
    venueRu: 'Музей современного искусства',
    location: 'Berlin, Germany',
    locationRu: 'Берлин, Германия',
    type: 'solo',
  },
  {
    year: '2024',
    title: 'Digital Traces',
    titleRu: 'Цифровые следы',
    venue: 'Ars Electronica',
    venueRu: 'Ars Electronica',
    location: 'Linz, Austria',
    locationRu: 'Линц, Австрия',
    type: 'group',
  },
  {
    year: '2023',
    title: 'Present Tense',
    titleRu: 'Настоящее время',
    venue: 'New Media Gallery',
    venueRu: 'Галерея новых медиа',
    location: 'Moscow, Russia',
    locationRu: 'Москва, Россия',
    type: 'solo',
  },
  {
    year: '2023',
    title: 'Algorithmic Unconscious',
    titleRu: 'Алгоритмическое бессознательное',
    venue: 'ZKM',
    venueRu: 'ZKM',
    location: 'Karlsruhe, Germany',
    locationRu: 'Карлсруэ, Германия',
    type: 'group',
  },
  {
    year: '2022',
    title: 'Quantum States',
    titleRu: 'Квантовые состояния',
    venue: 'FACT',
    venueRu: 'FACT',
    location: 'Liverpool, UK',
    locationRu: 'Ливерпуль, Великобритания',
    type: 'group',
  },
  {
    year: '2022',
    title: 'Boundaries',
    titleRu: 'Границы',
    venue: 'Garage Museum',
    venueRu: 'Музей Гараж',
    location: 'Moscow, Russia',
    locationRu: 'Москва, Россия',
    type: 'solo',
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
