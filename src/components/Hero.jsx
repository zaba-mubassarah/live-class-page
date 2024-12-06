import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero({ title, description }) {
  const { t } = useTranslation();

  return (
    <div className="relative text-white flex">
      <div className="px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl lg:text-base mb-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors"
          >
            {t('hero.enrollButton')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}