import { useTranslation } from 'react-i18next';

export default function Instructors({ instructors }) {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-12">{t('instructors.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map(instructor => (
            <div key={instructor.slug} className="flex items-center gap-8 border border-gray-200 p-4 rounded-lg">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-md font-semibold mb-2">{instructor.name}</h3>
                <div 
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: instructor.short_description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}