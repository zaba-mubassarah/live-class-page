export default function PricingCard({ variant }) {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col justify-center">
      <div className="flex items-baseline mb-3">
        <span className="text-2xl text-left font-bold">৳{variant.final_price}</span>
        {variant.discount_value > 0 && (
          <span className="ml-2 text-sm text-gray-500 line-through">৳{variant.price}</span>
        )}
      </div>
      <h3 className="text-sm mb-2">{variant.name}</h3>
    </div>
  );
}