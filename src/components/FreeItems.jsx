function FreeItems({ freeItems }) {
  if (!freeItems?.name) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">{freeItems.name}</h2>
      {freeItems.values?.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeItems.values.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FreeItems; 