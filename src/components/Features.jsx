import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

export default function Features({ features }) {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('features.title')}
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.id}
              className="h-full"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg h-full transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <img 
                    src={feature.icon} 
                    alt="" 
                    className="w-10 h-10 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.subtitle}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}