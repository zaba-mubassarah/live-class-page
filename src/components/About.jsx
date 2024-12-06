import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function About({ about }) {
  if (!about?.values?.length) return null;

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">
        {about.name}
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {about.values.map((section, index) => (
          <div key={section.id} className="bg-white rounded-lg border">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Title and Icon */}
              <div className="flex items-center gap-4">
                {section.icon && (
                  <img 
                    src={section.icon} 
                    alt="" 
                    className="w-8 h-8"
                  />
                )}
                {section.title && (
                  <div 
                    className="font-semibold text-sm"
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                )}
              </div>
              <ChevronDown 
                className={`transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 border border-gray-300">
                {section.description && (
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;