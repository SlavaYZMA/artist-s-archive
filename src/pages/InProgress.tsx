import { useLanguage } from '@/contexts/LanguageContext';

interface WorkInProgress {
  id: string;
  titleKey: string;
  descriptionKey: string;
  statusKey: string;
}

const worksInProgress: WorkInProgress[] = [
  {
    id: 'fragments',
    titleKey: 'inprogress.fragments.title',
    descriptionKey: 'inprogress.fragments.description',
    statusKey: 'inprogress.fragments.status',
  },
  {
    id: 'border',
    titleKey: 'inprogress.border.title',
    descriptionKey: 'inprogress.border.description',
    statusKey: 'inprogress.border.status',
  },
];

export default function InProgress() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.inProgress')}</h1>
      
      <div>
        {worksInProgress.map((work) => (
          <div key={work.id} className="list-item py-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-2">
              <h2 className="text-foreground">{t(work.titleKey)}</h2>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                {t(work.statusKey)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{t(work.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
