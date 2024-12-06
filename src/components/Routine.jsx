function Routine({ routine }) {
  if (!routine?.values?.[0]?.html) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">{routine.name}</h2>
      <div className="flex flex-col items-center gap-4">
        <div 
          className="w-full max-w-4xl" 
          dangerouslySetInnerHTML={{ __html: routine.values[0].html }}
        />
        {routine.values[0].download_link && (
          <a 
            href={routine.values[0].download_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Download Routine
          </a>
        )}
      </div>
    </div>
  );
}

export default Routine; 