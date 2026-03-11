export default function Notable() {
  const projects = [
    {
      id: 1,
      title: 'DENTICO',
      image: 'src/Screenshot from 2026-03-11 20-15-34.png',
    },
    {
      id: 2,
      title: 'LUXURY STAY',
      image: 'src/Screenshot from 2026-03-11 20-21-05.png',
    },
    {
      id: 3,
      title: 'NEXGENHUB STUDIO AGENCY',
      image: 'src/Screenshot from 2026-03-11 20-20-48.png',
    },
    {
      id: 4,
      title: 'KRYKARD',
      image: 'src/Screenshot from 2026-03-11 20-21-22.png',
    }
  ];

  return (
    <section className="bg-gray-100 px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black mb-16 fade-in-up">NOTABLE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, idx) => (
            <div key={project.id} className={`space-y-4 fade-in-up stagger-${idx + 1} group`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-black text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{project.title}</h3>
            </div>
          ))}
        </div>
        <a href="https://github.com/Rupak1802 " className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          GitHub
        </a>
        <h2 className="text-6xl md:text-7xl font-black fade-in-up stagger-5">PROJECT</h2>
      </div>
    </section>
  );
}
