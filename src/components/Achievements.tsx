export default function Achievements() {
  const awards = [
    {
      year: '2025 IEEE XTREME HACKATHON (22nd overall India)',
      description:
        'In the 2025 IEEE Xtreme Hackathon, I secured the 22nd position overall in India. This prestigious competition brought together talented individuals from across the country to showcase their skills in problem-solving and innovation. My achievement in this hackathon reflects my dedication, creativity, and ability to work effectively under pressure, demonstrating my commitment to excellence in the field of technology and innovation.',
    },
    {
      year: 'IIC STARTUP CHALLENGE 2025 (1st Runner Up)',
      description:
        'In the 2025 IIC Startup Challenge, I placed as the 1st runner-up. This competition provided a platform for innovative startups to showcase their ideas and solutions. My performance in this challenge highlights my ability to think creatively and develop viable business models under competitive conditions.',
    },
    {
      year: 'PSG TECNOTRONZ 2025 (HACKZEN - Runner Up)',
      description:
        'In the 2025 PSG Tecnotronz Hackzen competition, I achieved the position of runner-up. This event was a rigorous test of technical skills and problem-solving abilities, where participants were challenged to develop innovative solutions to complex problems. My success in this competition underscores my technical expertise and my capacity to collaborate effectively in high-pressure environments.',
    },
    {
      year : 'IEEE XTREME HACKATHON 2024(64th overall India)',
      description :
        'In the 2024 IEEE Xtreme Hackathon, I secured the position of 64th overall India. This prestigious competition brought together talented individuals from around the world to showcase their skills in problem-solving and innovation. My achievement in this hackathon reflects my dedication, creativity, and ability to work effectively under pressure, demonstrating my commitment to excellence in the field of technology and innovation.',
    }
  ];

  return (
    <section className="bg-gray-800 text-white px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {awards.map((award, idx) => (
            <div key={idx} className={`space-y-4 fade-in-up stagger-${idx + 1} p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300`}>
              <h3 className="font-black text-lg text-blue-400">{award.year}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <img
            src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg"
            alt="Achievement showcase"
            className="w-full h-64 object-cover fade-in-up stagger-3 hover:shadow-2xl transition-shadow duration-300"
          />

          <h2 className="text-6xl md:text-7xl font-black fade-in-up stagger-4">ACHIEVEMENT</h2>
        </div>
      </div>
    </section>
  );
}
