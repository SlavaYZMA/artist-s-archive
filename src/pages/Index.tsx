import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="content-max">
        <h1 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">
          {t('home.artistName')}
        </h1>
        <p className="text-muted-foreground text-body leading-relaxed">
          {t('home.statement')}
        </p>
      </div>
    </div>
  );
}
