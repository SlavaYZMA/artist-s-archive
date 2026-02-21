import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface Essay {
  id: string;
  titleKey: string;
  yearKey: string;
}

const essays: Essay[] = [
  {
    id: 'spectral-flesh',
    titleKey: 'essay.skiagraphic.title',
    yearKey: 'essay.skiagraphic.year',
  },
  {
    id: 'machine-as-witness',
    titleKey: 'essay.machine.title',
    yearKey: 'essay.machine.year',
  },
];

export default function Essays() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.essays')}</h1>
      
      <div>
        {essays.map((essay) => (
          <Link
            key={essay.id}
            to={`/essays/${essay.id}`}
            className="project-item block"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
              <h2 className="text-foreground">{t(essay.titleKey)}</h2>
              <span className="text-muted-foreground text-sm">{t(essay.yearKey)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
