import React from 'react';
import PricingCard from './PricingCard';
import { CheckList } from './CheckList';
import { useTranslation } from 'react-i18next';

export default function Variants({ variants, checklist, currentIndex, setCurrentIndex }) {
    const { t } = useTranslation();

    // Navigate to the next variant
    const handleNext = () => {
        setCurrentIndex(prev =>
            prev === variants.length - 1 ? 0 : prev + 1
        );
    };

    // Navigate to the previous variant
    const handlePrev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? variants.length - 1 : prev - 1
        );
    };

    if (!variants?.length) return null;

    return (
        <div className="relative flex flex-col">
            <div className="flex mt-4">
                {variants.map((variant, index) => (
                    <div
                        key={variant.id}
                        className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                    >
                        <PricingCard variant={variant} />
                        <div className="flex mt-4 w-full">
                            {/* Primary Button: Enroll Now */}
                            <button
                                className={`w-1/2 ${variant.available_stock > 0
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    } py-2 rounded font-medium text-sm`}
                                disabled={variant.available_stock === 0}
                            >
                                {variant.available_stock > 0 ? t('variants.enroll_now') : t('variants.sold_out')}
                            </button>

                            {/* Secondary Button: Next Batch or Prev Batch */}
                            <button
                                onClick={
                                    variants.length === 2
                                        ? (currentIndex === 0 ? handleNext : handlePrev)
                                        : currentIndex === variants.length - 1
                                            ? handlePrev
                                            : handleNext
                                }
                                className={`w-1/2 ml-2 py-2 rounded font-medium text-sm flex items-center justify-center ${variants.length > 1
                                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                                aria-label={
                                    currentIndex === variants.length - 1
                                        ? t('variants.previous_batch')
                                        : t('variants.next_batch')
                                }
                                disabled={variants.length <= 1}
                            >
                                {variants.length <= 1
                                    ? t('variants.no_more_batches')
                                    : currentIndex === variants.length - 1
                                        ? t('variants.prev_batch')
                                        : t('variants.next_batch')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <CheckList checklist={checklist} />
        </div>
    );
}
