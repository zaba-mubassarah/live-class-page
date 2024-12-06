import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PricingCard from './PricingCard';

export default function Variants({ variants }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? variants.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === variants.length - 1 ? 0 : prev + 1
    );
  };

  if (!variants?.length) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Available Batches</h2>
      
      <div className="relative max-w-md mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute -left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
          aria-label="Previous variant"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
          aria-label="Next variant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Variant Cards Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${variants.length * 100}%`,
              display: 'grid',
              gridTemplateColumns: `repeat(${variants.length}, 1fr)`
            }}
          >
            {variants.map((variant, index) => (
              <div 
                key={variant.id}
                className="w-full"
                style={{
                  gridColumn: index + 1,
                  opacity: currentIndex === index ? 1 : 0,
                  transition: 'opacity 300ms ease-in-out'
                }}
              >
                <PricingCard variant={variant} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {variants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to variant ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}