export default function Instructors({ instructors }) {
  return (
    <section className="py-16">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-12">Course Instructors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map(instructor => (
            <div key={instructor.slug} className="flex items-center gap-8">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: instructor.short_description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}