import { Phone, Mail, MapPin, LinkedinIcon } from 'lucide-react';

export default function Hero() {
  const contactItems = [
    { icon: Phone, text: '+91-9345729059' },
    { icon: Mail, text: 'rupakrupak1818@gmail.com' },
    { icon: MapPin, text: 'Coimbatore,Tamilnadu' },
    { icon: LinkedinIcon, text: 'www.linkedin.com/in/rupakb18' },
  ];

  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-12 slide-in-left">
            LET'S<br />CONNECT
          </h1>

          <div className="space-y-4">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 fade-in-up stagger-${idx + 1} hover:translate-x-2 transition-transform duration-300 group cursor-pointer`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-lg group-hover:text-blue-400 transition-colors duration-300">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:block fade-in-up stagger-5">
          <img
            src="src/image.png"
            alt="Professional working"
            className="w-full h-96 object-cover rounded-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
}
