import { useCallback, useEffect, useState } from 'react';
import Preloader from './components/ui/Preloader';
import Background from './components/ui/Background';
import CursorGlow from './components/ui/CursorGlow';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  // While the intro plays, <body class="is-preloading"> pauses the hero entrance animations
  useEffect(() => {
    document.body.classList.toggle('is-preloading', !introDone);
  }, [introDone]);

  return (
    <>
      <Preloader onDone={handleIntroDone} />
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

