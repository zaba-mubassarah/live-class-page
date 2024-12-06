function Testimonials({ testimonials }) {
  if (!testimonials?.values?.length) return null;

  const renderVideo = (videoUrl) => {
    if (!videoUrl) return null;
    
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="Testimonial video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12">
          {testimonials.name}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.values.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Video */}
              {renderVideo(testimonial.video_url)}
              
              {/* Profile */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.profile_image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 