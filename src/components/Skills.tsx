export default function Skills() {
  const skills = [
    'VIDEO\nEDITING',
    'CONTENT\nWRITING',
    'AI\nAUTOMATION',
  ];

  return (
    <section className="bg-gray-800 text-white px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="grid grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`w-full aspect-square bg-gray-100 rounded-full flex items-center justify-center text-gray-800 font-black text-center p-6 fade-in-up stagger-${idx + 1} hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110`}
              >
                <span className="text-sm md:text-base whitespace-pre-line">{skill}</span>
              </div>
            ))}
          </div>

          <img
            src="src/image copy.png"
            alt="Professional portrait"
            className="w-full h-96 object-cover fade-in-up stagger-4 hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-black fade-in-up">What I Bring to the Table</h2>

          <h3 className="text-6xl md:text-7xl font-black fade-in-up stagger-2">PERSONAL<br />SKILLS</h3>

          <p className="text-lg leading-relaxed max-w-2xl text-gray-300 fade-in-up stagger-3">
            Learning automation and being a quick learner, I have a strong passion for learning new technologies and tools. I am a team player who enjoys collaborating with others to achieve common goals. I am also a problem solver who is not afraid to take on challenges and find creative solutions. With my dedication and enthusiasm, I am confident that I can contribute to any project or team I am a part of.
          </p>
        </div>
      </div>
    </section>
  );
}
