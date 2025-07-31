import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set loaded state after initial render
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Handle scroll events
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function for navigation
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="bg-white overflow-x-hidden">
        <Header scrolled={scrolled} scrollToSection={scrollToSection} />

        <main className="overflow-hidden">
          <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />
          <About />
          <Services />
          <Contact />
        </main>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </AnimatePresence>
  );
}
