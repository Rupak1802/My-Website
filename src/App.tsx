import Hero from './components/Hero';
import Notable from './components/Notable';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="bg-white">
      <Portfolio />
      <Notable />
      <Skills />
      <Achievements />
      <Hero />
    </div>
  );
}

export default App;
