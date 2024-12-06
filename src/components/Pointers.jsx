function Pointers({ pointers }) {
  if (!pointers?.values?.length) return null;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-12">{pointers.name}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pointers.values.map((pointer) => (
            <div 
              key={pointer.id} 
              className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm"
            >
              {pointer.icon && (
                <div className="flex-shrink-0">
                  <img src={pointer.icon} alt="" className="w-6 h-6" />
                </div>
              )}
              <div 
                className={`text-lg ${pointer.color ? `text-[${pointer.color}]` : 'text-gray-700'}`}
              >
                {pointer.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pointers; 