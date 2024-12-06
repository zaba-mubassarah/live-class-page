import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Features({ features }) {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12">
            {t('features.title')}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 bg-gray-900 rounded-lg p-4 text-white">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full  p-6 rounded-xl shadow transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-10 h-10 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}