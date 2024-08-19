import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import './App.css';
import Work from './components/work';
import Contact from './components/Contact';

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Background with Opacity Control */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/reels/demoReel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Transparent Header */}
      <header className="bg-transparent py-4 px-6 fixed top-0 left-0 right-0 z-20">
        <nav className="flex justify-center space-x-4">
          <button onClick={() => scrollToSection(section1Ref)} className="text-white font-bold hover:text-gray-300 transition-colors">HOME</button>
          <button onClick={() => scrollToSection(section2Ref)} className="text-white font-bold hover:text-gray-300 transition-colors">WORK</button>
          <button onClick={() => scrollToSection(section3Ref)} className="text-white font-bold hover:text-gray-300 transition-colors">CONTACT</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        {/* Section 1 */}
        <section ref={section1Ref} className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">BYAB MEDIA</h1>
            <p className="text-xl mb-8">Videographer, Belfast NI. Available worldwide</p>
            <ArrowDown onClick={() => scrollToSection(section2Ref)} className="mx-auto animate-bounce hover:text-gray-300 cursor-pointer transition-colors" size={32} />
          </div>
        </section>

        {/* Section 2 */}
        <section ref={section2Ref} className="min-h-screen flex items-center justify-center">
          <Work />
        </section>

        {/* Section 3 */}
        <section ref={section3Ref} className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;