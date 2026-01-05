import { useLanguage } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';

interface StatementSection {
  titleKey: string;
  contentKey: string;
  isList?: boolean;
}

const statementSections: StatementSection[] = [
  { titleKey: 'statement.practice.title', contentKey: 'statement.practice.content' },
  { titleKey: 'statement.methodology.title', contentKey: 'statement.methodology.content' },
  { titleKey: 'statement.themes.title', contentKey: 'statement.themes.content', isList: true },
  { titleKey: 'statement.audience.title', contentKey: 'statement.audience.content' },
  { titleKey: 'statement.ethics.title', contentKey: 'statement.ethics.content' },
];

function formatTextWithBold(text: string): ReactNode[] {
  // Bold key terms
  const boldTerms = [
    // English terms
    'perceptual', 'algorithmic structures', 'trauma', 'gender-based violence',
    'observation', 'archives', 'visibility', 'ethical engagement', 'collective witnessing',
    'vulnerability', 'power', 'fairness', 'anonymity', 'hidden algorithms',
    // Russian terms
    'перцептивных', 'алгоритмических структур', 'травмы', 'гендерного насилия',
    'наблюдение', 'архивы', 'видимости', 'этического взаимодействия', 'коллективного свидетельства',
    'уязвимости', 'власти', 'справедливости', 'анонимность', 'скрытые алгоритмы'
  ];

  let result: ReactNode[] = [text];

  boldTerms.forEach(term => {
    const newResult: ReactNode[] = [];
    result.forEach((part, idx) => {
      if (typeof part !== 'string') {
        newResult.push(part);
        return;
      }
      
      const regex = new RegExp(`(${term})`, 'gi');
      const parts = part.split(regex);
      
      parts.forEach((p, i) => {
        if (regex.test(p)) {
          newResult.push(<strong key={`${idx}-${i}-${term}`} className="font-medium">{p}</strong>);
        } else if (p) {
          newResult.push(p);
        }
      });
    });
    result = newResult;
  });

  return result;
}

export default function Statement() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.statement')}</h1>
      
      <article className="space-y-8">
        {statementSections.map((section, index) => (
          <section key={index}>
            <h2 className="text-sm font-medium mb-4">{t(section.titleKey)}</h2>
            {section.isList ? (
              <ul className="space-y-2 text-body text-muted-foreground">
                {t(section.contentKey).split('\n').filter(line => line.trim()).map((line, i) => (
                  <li key={i} className="pl-4 border-l border-border">
                    {formatTextWithBold(line.replace(/^- /, ''))}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-body text-muted-foreground">
                {formatTextWithBold(t(section.contentKey))}
              </p>
            )}
          </section>
        ))}
      </article>
    </div>
  );
}
