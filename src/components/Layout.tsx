import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/in-progress', label: t('nav.inProgress') },
    { path: '/essays', label: t('nav.essays') },
    { path: '/exhibitions', label: t('nav.exhibitions') },
    { path: '/statement', label: t('nav.statement') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="px-page py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors duration-150 ${
                  isActive(item.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="px-page py-4 flex items-center justify-between">
          <Link to="/" className="text-sm font-medium">
            {t('nav.home')}
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {language === 'en' ? 'RU' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background">
            <div className="px-page py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm transition-colors duration-150 ${
                    isActive(item.path)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-14">
        <div className="page-container">
          <div className="fade-in">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
