import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.contact')}</h1>
      
      <div className="space-y-6">
        <div>
          <a 
            href={`mailto:${t('contact.email')}`}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            {t('contact.email')}
          </a>
        </div>
        
        <div>
          <a 
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            {t('contact.cv')}
          </a>
        </div>
      </div>
    </div>
  );
}
