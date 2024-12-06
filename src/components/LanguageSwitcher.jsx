import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-50"
    >
      {i18n.language === 'en' ? 'বাংলা' : 'English'}
    </button>
  );
} 