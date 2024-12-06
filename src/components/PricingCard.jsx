import useCountdown from '../hooks/useCountDown';

export default function PricingCard({ variant }) {
  const timeLeft = useCountdown(variant.sale_end_time);

  const renderCountdown = () => {
    if (!variant.sale_end_time) return null;

    return (
      <div className="bg-gray-50 rounded p-2 mb-4 text-sm">
        <p className="text-gray-600 text-xs mb-1">Offer ends in:</p>
        <div className="flex justify-center gap-2">
          <div className="text-center">
            <div className="font-bold">{timeLeft.days}</div>
            <div className="text-[10px] text-gray-500">Days</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{timeLeft.hours}</div>
            <div className="text-[10px] text-gray-500">Hours</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{timeLeft.minutes}</div>
            <div className="text-[10px] text-gray-500">Minutes</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{timeLeft.seconds}</div>
            <div className="text-[10px] text-gray-500">Seconds</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{variant.name}</h3>
      <div className="flex items-baseline mb-3">
        <span className="text-2xl font-bold">৳{variant.final_price}</span>
        {variant.discount_value > 0 && (
          <span className="ml-2 text-sm text-gray-500 line-through">৳{variant.price}</span>
        )}
      </div>

      {renderCountdown()}

      <div className="space-y-2 mb-4 text-sm">
        {variant.meta.find(m => m.key === 'checklist')?.values.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.icon && <img src={item.icon} alt="" className="w-4 h-4 mr-2" />}
            <span>{item.meta_value}</span>
          </div>
        ))}
      </div>

      <button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium text-sm"
        disabled={variant.available_stock === 0}
      >
        {variant.available_stock > 0 ? 'Enroll Now' : 'Sold Out'}
      </button>
    </div>
  );
}