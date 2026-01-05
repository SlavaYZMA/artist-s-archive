import { useLanguage } from '@/contexts/LanguageContext';

export default function Statement() {
  const { t } = useLanguage();

  const statementText = t('statement.text');

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.statement')}</h1>
      
      <article>
        {statementText.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-body mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}
