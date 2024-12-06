import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div 
                  className="px-6 pb-4"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}