import { useState } from 'react';

function MediaGallery({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const previewGallery = media.filter(item => item.name === 'preview_gallery');
  
  const handlePrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? previewGallery.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(current => 
      current === previewGallery.length - 1 ? 0 : current + 1
    );
  };

  const renderMedia = (item) => {
    if (item.resource_type === 'video') {
      return (
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${item.resource_value}`}
            title="Course Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    
    return (
      <img
        src={item.resource_value}
        alt="Course Preview"
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Main Display */}
      <div className="relative">
        {renderMedia(previewGallery[currentIndex])}
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4">
        {previewGallery.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MediaGallery; 