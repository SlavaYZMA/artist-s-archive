import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectData {
  titleKey: string;
  year: string;
  externalLink?: string;
  mediumKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
}

const projectsData: Record<string, ProjectData> = {
  /* adjudication: {
    titleKey: 'project.adjudication.title',
    year: '2024',
    mediumKey: 'project.adjudication.medium',
    externalLink: 'https://adjudication.netlify.app/',
    descriptionKey: 'project.adjudication.description',
    longDescriptionKey: 'project.adjudication.longDescription',
  },
  'quantum-portraits': {
    titleKey: 'project.quantum.title',
    year: '2022',
    externalLink: 'https://quantportrait.netlify.app/',
    mediumKey: 'project.quantum.medium',
    descriptionKey: 'project.quantum.description',
    longDescriptionKey: 'project.quantum.longDescription',
  },
  */
  present: {
    titleKey: 'project.present.title',
    year: '2025 - 2026',
    externalLink: 'https://vistrum.netlify.app/',
    mediumKey: 'project.present.medium',
    descriptionKey: 'project.present.description',
    longDescriptionKey: 'project.present.longDescription',
  },
  'skiagraphic-description': {
    titleKey: 'project.skiagraphic.title',
    year: '2025',
    mediumKey: 'project.skiagraphic.medium',
    externalLink: 'https://latereal.netlify.app/',
    descriptionKey: 'project.skiagraphic.description',
    longDescriptionKey: 'project.skiagraphic.longDescription',
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

        {project.externalLink && (
          <div className="mt-2">
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

      <div className="border-t border-border pt-8 space-y-6">
        <p className="text-body font-medium">{t(project.descriptionKey)}</p>
        <div className="text-muted-foreground text-body space-y-4">
          {/* Это позволяет разбивать текст на абзацы по символу \n */}
          {t(project.longDescriptionKey).split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
