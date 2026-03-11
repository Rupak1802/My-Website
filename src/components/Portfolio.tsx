export default function Portfolio() {
  return (
    <section className="bg-gray-800 text-white px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-12 slide-in-left">
              MY<br />PORT<br />FOLIO
            </h2>

            <div className="space-y-8">
              <div className="fade-in-up stagger-2">
                <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">BY RUPAK B</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  MERN Stack Developer with knowledge of JavaScript, React, Node.js, and MongoDB, and a strong foundation in Data Structures and Algorithms using Java. Experienced in building full-stack web applications with authentication, API integration, and real-time features. Interested in developing scalable web solutions and integrating AI/ML into modern applications.

                </p>
              </div>
            </div>
          </div>

          <img
            src="src/Gemini_Generated_Image_pdphjxpdphjxpdph.png"
            alt="Portfolio showcase"
            className="w-full h-96 object-cover fade-in-up stagger-3 hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
}
