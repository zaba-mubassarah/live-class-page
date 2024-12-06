export default function Instructors({ instructors }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Course Instructors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map(instructor => (
            <div key={instructor.slug} className="text-center">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
              <div 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: instructor.short_description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}