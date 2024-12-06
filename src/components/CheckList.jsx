import React from 'react';

export function CheckList({ checklist }) {
  return (
    <div>
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">What you'll get:</h3>
          {checklist.map((item, index) => (
            <div key={item.id} className="flex items-start gap-3">
              <img 
                src={item.icon}
                alt=""
                className="w-5 h-5 flex-shrink-0 mt-1"
              />
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
    </div>
  );
}