import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // Create a dynamic PDF-like document with site content
    const cvContent = generateCVContent(t);
    const blob = new Blob([cvContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Open in new tab for printing/saving as PDF
    const printWindow = window.open(url, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="content-max">
      <h1 className="text-label mb-8">{t('nav.contact')}</h1>
      
      <div className="space-y-6">
        <div>
          <span className="text-label block mb-2">Email</span>
          <a 
            href={`mailto:${t('contact.email')}`}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            {t('contact.email')}
          </a>
        </div>
        
        <div>
          <span className="text-label block mb-2">Instagram</span>
          <a 
            href={`https://instagram.com/${t('contact.instagram')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            @{t('contact.instagram')}
          </a>
        </div>
        
        <div className="pt-4">
          <button
            onClick={handleDownloadCV}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-4"
          >
            {t('contact.cv')}
          </button>
        </div>
      </div>
    </div>
  );
}

function generateCVContent(t: (key: string) => string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${t('home.artistName')} - CV</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      line-height: 1.6;
      color: #000;
      background: #fff;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 20px;
      letter-spacing: -0.02em;
    }
    
    h2 {
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 30px;
      margin-bottom: 15px;
      color: #666;
    }
    
    p {
      margin-bottom: 10px;
    }
    
    .section {
      margin-bottom: 25px;
    }
    
    .project {
      margin-bottom: 15px;
    }
    
    .project-title {
      font-weight: 500;
    }
    
    .project-meta {
      color: #666;
    }
    
    .exhibition {
      margin-bottom: 8px;
    }
    
    .contact {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    
    @media print {
      body {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <h1>${t('home.artistName')}</h1>
  
  <div class="section">
    <p>${t('home.statement')}</p>
  </div>
  
  <h2>Projects</h2>
  <div class="section">
    <div class="project">
      <div class="project-title">${t('project.adjudication.title')}</div>
      <div class="project-meta">2024 — ${t('project.adjudication.medium')}</div>
      <p>${t('project.adjudication.description')}</p>
    </div>
    <div class="project">
      <div class="project-title">${t('project.present.title')}</div>
      <div class="project-meta">2023 — ${t('project.present.medium')}</div>
      <p>${t('project.present.description')}</p>
    </div>
    <div class="project">
      <div class="project-title">${t('project.quantum.title')}</div>
      <div class="project-meta">2022 — ${t('project.quantum.medium')}</div>
      <p>${t('project.quantum.description')}</p>
    </div>
  </div>
  
  <h2>In Progress</h2>
  <div class="section">
    <div class="project">
      <div class="project-title">${t('inprogress.fragments.title')}</div>
      <p>${t('inprogress.fragments.description')}</p>
    </div>
    <div class="project">
      <div class="project-title">${t('inprogress.border.title')}</div>
      <p>${t('inprogress.border.description')}</p>
    </div>
  </div>
  
  <div class="contact">
    <p>Email: ${t('contact.email')}</p>
    <p>Instagram: @${t('contact.instagram')}</p>
  </div>
</body>
</html>
  `;
}
