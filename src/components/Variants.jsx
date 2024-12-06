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
        <>
            <div className="relative">
                <div className="flex">
                    {variants.map((variant, index) => (
                        <div
                            key={variant.id}
                            className={`w-full px-4 ${index === currentIndex ? 'block' : 'hidden'}`}
                        >
                            <PricingCard variant={variant} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */ }
            <div className="flex justify-center gap-4 mt-6">
                <div className="flex items-center">
                    <button
                        onClick={handlePrevious}
                        className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                        aria-label="Previous batch"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                        aria-label="Next batch"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </>
    );
}
