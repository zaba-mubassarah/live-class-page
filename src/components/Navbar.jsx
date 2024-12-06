import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <img 
              src="/vite.svg" 
              alt="Logo" 
              className="h-8 w-8"
            />
          </div>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">
              {i18n.language === 'en' ? 'বাংলা' : 'English'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
} 