export default function Features({ features }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">How the course is laid out
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-gray-900 text-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <img src={feature.icon} alt="" className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}