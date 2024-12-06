function DemoClass({ demoClass }) {
  if (!demoClass?.values?.[0]) return null;

  const data = demoClass.values[0];

  return (
    <div className="container mx-auto px-4 py-16">
      <div 
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${data.background.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 p-8 md:p-12">
          {/* Top left icon */}
          {data.top_left_icon_img && (
            <img 
              src={data.top_left_icon_img} 
              alt="" 
              className="w-12 h-12 mb-6"
            />
          )}

          {/* Content */}
          <div className="max-w-2xl">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: data.title_color }}
            >
              {data.title}
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: data.description_color }}
            >
              {data.description}
            </p>

            {/* Thumbnail image */}
            {data.thumbnail && (
              <img 
                src={data.thumbnail} 
                alt={data.title}
                className="max-w-xs mb-8" 
              />
            )}

            {/* CTA Button */}
            {data.cta && (
              <a
                href={data.cta.clicked_url}
                className={`inline-block px-6 py-3 rounded-lg text-white font-medium 
                  ${data.cta.color ? 
                    `bg-[${data.cta.color}]` : 
                    'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
              >
                {data.cta.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoClass; 