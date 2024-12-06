import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PricingCard from './PricingCard';
import { CheckList } from './CheckList';

export default function Variants({ variants, checklist }) {
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
            <CheckList checklist={checklist} />
            <div className="relative">
                <div className="flex">
                    {variants.map((variant, index) => (
                        <div
                            key={variant.id}
                            className={`w-full px-4 ${index === currentIndex ? 'block' : 'hidden'}`}
                        >
                            <PricingCard variant={variant} />
                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium text-sm mt-4"
                                disabled={variant.available_stock === 0}
                            >
                                {variant.available_stock > 0 ? 'Enroll Now' : 'Sold Out'}
                            </button>
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
