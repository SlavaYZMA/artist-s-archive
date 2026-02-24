import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: string;
  titleKey: string;
  year: string;
  mediumKey: string;
  descriptionKey: string;
}

const projects: Project[] = [
  /* {
    id: 'adjudication',
    titleKey: 'project.adjudication.title',
    year: '2025',
    mediumKey: 'project.adjudication.medium',
    descriptionKey: 'project.adjudication.description',
  },
  */
  {
    id: 'skiagraphic-description',
    titleKey: 'project.skiagraphic.title',
    year: '2025',
    mediumKey: 'project.skiagraphic.medium',
    descriptionKey: 'project.skiagraphic.description',
  },
  {
    id: 'present',
    titleKey: 'project.present.title',
    year: '2025 - 2026',
    mediumKey: 'project.present.medium',
    descriptionKey: 'project.present.description',
  },
  /* {
    id: 'quantum-portraits',
    titleKey: 'project.quantum.title',
    year: '2025',
    mediumKey: 'project.quantum.medium',
    descriptionKey: 'project.quantum.description',
  },
  */
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.projects')}</h1>
      
      <div>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-item block hover:opacity-70 transition-opacity"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-2">
              <h2 className="text-foreground">{t(project.titleKey)}</h2>
              <span className="text-muted-foreground text-sm">{project.year}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{t(project.mediumKey)}</p>
            <p className="text-muted-foreground text-sm">{t(project.descriptionKey)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
