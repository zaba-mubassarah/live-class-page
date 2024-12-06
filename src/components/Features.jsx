export default function Features({ features }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Course Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={feature.icon} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}