import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center mt-10">
      <div className="content-max">
        <h1 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">
          {t('home.artistName')}
        </h1>
        
        {/* ФОТО ТЕНИ. Обязательно положи файл shadow.jpg в папку public/ */}
        <div className="mb-8">
           <img 
             src="/shadow.jpg" 
             alt="Calculated Corporeality" 
             className="w-full max-h-[60vh] object-cover grayscale opacity-90" 
           />
        </div>

        <p className="text-muted-foreground text-body leading-relaxed text-lg">
          {t('home.statement')}
        </p>
      </div>
    </div>
  );
}
