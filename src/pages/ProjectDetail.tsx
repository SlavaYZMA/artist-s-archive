import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectData {
  titleKey: string;
  year: string;
  mediumKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  externalLink?: string;
}

const projectsData: Record<string, ProjectData> = {
  adjudication: {
    titleKey: 'project.adjudication.title',
    year: '2024',
    mediumKey: 'project.adjudication.medium',
    descriptionKey: 'project.adjudication.description',
    longDescriptionKey: 'project.adjudication.longDescription',
  },
  present: {
    titleKey: 'project.present.title',
    year: '2023',
    mediumKey: 'project.present.medium',
    descriptionKey: 'project.present.description',
    longDescriptionKey: 'project.present.longDescription',
  },
  'quantum-portraits': {
    titleKey: 'project.quantum.title',
    year: '2022',
    mediumKey: 'project.quantum.medium',
    descriptionKey: 'project.quantum.description',
    longDescriptionKey: 'project.quantum.longDescription',
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="content-max">
        <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
          {t('label.back')}
        </Link>
        <p className="mt-8">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="content-max">
      <Link 
        to="/projects" 
        className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block mb-8"
      >
        {t('label.back')}
      </Link>

      <h1 className="text-2xl font-light mb-6">{t(project.titleKey)}</h1>

      <div className="space-y-4 mb-8">
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-label block mb-1">{t('label.year')}</span>
            <span className="text-foreground">{project.year}</span>
          </div>
        </div>
        
        <div className="text-sm">
          <span className="text-label block mb-1">{t('label.medium')}</span>
          <span className="text-foreground">{t(project.mediumKey)}</span>
        </div>
      </div>

      <div className="border-t border-border pt-8 space-y-6">
        <p className="text-body">{t(project.descriptionKey)}</p>
        <p className="text-muted-foreground text-body">{t(project.longDescriptionKey)}</p>
      </div>

      {project.externalLink && (
        <div className="mt-8 pt-8 border-t border-border">
          <a 
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('label.externalLink')} →
          </a>
        </div>
      )}
    </div>
  );
}
