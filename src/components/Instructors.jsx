import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

export default function Instructors({ instructors }) {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('instructors.title')}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map(instructor => (
            <AnimatedSection key={instructor.slug}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                  <div 
                    className="text-gray-600 prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: instructor.short_description }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}