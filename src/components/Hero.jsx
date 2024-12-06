import { Play } from 'lucide-react';

export default function Hero({ title, description, media }) {
  const previewVideo = media.find(m => m.name === 'preview_gallery' && m.resource_type === 'video');
  const thumbnail = media.find(m => m.name === 'thumbnail')?.resource_value;

  return (
    <div className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div 
              className="text-gray-300 mb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Enroll Now
            </button>
          </div>
          
          {previewVideo && (
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={thumbnail} 
                alt="Course Preview"
                className="w-full h-auto"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity">
                <Play size={64} className="text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}