import React from 'react';
import { useTranslation } from 'react-i18next';

export function CheckList({ checklist }) {
  const { t } = useTranslation();

  return (
    <div className="p-4 border rounded-lg mt-4 bg-white">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{t('pricing.whatYouGet')}</h3>
          {checklist.map((item, index) => (
            <div key={item.id} className="flex items-start gap-3 bg-white">
              <img 
                src={item.icon}
                alt=""
                className="w-5 h-5 flex-shrink-0 mt-1"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
    </div>
  );
}