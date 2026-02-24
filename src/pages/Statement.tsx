import { useLanguage } from '@/contexts/LanguageContext';

export default function Statement() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.statement')}</h1>
      
      <article className="space-y-8">
        <section>
          <h2 className="text-sm font-medium mb-4">{t('statement.1.title')}</h2>
          <p className="text-body text-muted-foreground">
            {t('home.statement')}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-4">{t('statement.2.title')}</h2>
          <p className="text-body text-muted-foreground">
            {t('statement.2.content')}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-4">{t('statement.3.title')}</h2>
          <p className="text-body text-muted-foreground">
            {t('statement.3.content')}
          </p>
        </section>
      </article>
    </div>
  );
}
