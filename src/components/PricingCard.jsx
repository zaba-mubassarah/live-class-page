export default function PricingCard({ variant }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{variant.name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">৳{variant.final_price}</span>
        {variant.discount_value > 0 && (
          <span className="ml-2 text-gray-500 line-through">৳{variant.price}</span>
        )}
      </div>

      <div className="space-y-4 mb-6">
        {variant.meta.find(m => m.key === 'checklist')?.values.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.icon && <img src={item.icon} alt="" className="w-5 h-5 mr-3" />}
            <span>{item.meta_value}</span>
          </div>
        ))}
      </div>

      <button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        disabled={variant.available_stock === 0}
      >
        {variant.available_stock > 0 ? 'Enroll Now' : 'Sold Out'}
      </button>
    </div>
  );
}