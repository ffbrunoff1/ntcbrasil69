import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X, Building, ChevronDown } from 'lucide-react';

export default function Header({ scrolled, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (scrolled) {
      controls.start({
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        y: 0,
        height: '80px',
      });
    } else {
      controls.start({
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
        y: 0,
        height: '100px',
      });
    }
  }, [scrolled, controls]);

  // NavLink component for cleaner code
  const NavLink = ({
    href,
    label,
    onClick,
    isDropdown = false,
    dropdownItems = [],
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return isDropdown ? (
      <div className="relative group">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 text-sm font-medium transition duration-300 relative"
        >
          <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {label}
          </span>
          <ChevronDown
            size={16}
            className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray-800' : 'text-white'}`}
          />
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            {dropdownItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onClick(item.href);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    ) : (
      <button
        onClick={() => onClick(href)}
        className={`px-4 py-2 text-sm font-medium transition duration-300 relative 
          ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200'}
        `}
      >
        {label}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    );
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ backgroundColor: 'transparent' }}
      animate={controls}
    >
      <nav className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="flex-shrink-0"
        >
          <img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753926411824_0.png"
            alt="NTC Brasil"
            className="h-12 md:h-14"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center space-x-2"
        >
          <NavLink href="hero" label="Home" onClick={scrollToSection} />
          <NavLink href="about" label="Sobre Nós" onClick={scrollToSection} />
          <NavLink href="services" label="Serviços" onClick={scrollToSection} />
          <NavLink href="contact" label="Contato" onClick={scrollToSection} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-6 bg-primary text-white px-5 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.div
          className="md:hidden flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={
          mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="pt-24 pb-6 px-6 flex flex-col h-full">
          <div className="flex flex-col space-y-6 text-center">
            <button
              onClick={() => {
                scrollToSection('hero');
                setMobileMenuOpen(false);
              }}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-100"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setMobileMenuOpen(false);
              }}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-100"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => {
                scrollToSection('services');
                setMobileMenuOpen(false);
              }}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-100"
            >
              Serviços
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-100"
            >
              Contato
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-primary text-white px-5 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
          >
            Solicitar Orçamento
          </motion.button>

          <div className="mt-auto flex justify-center pt-8">
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753926411824_0.png"
              alt="NTC Brasil"
              className="h-10"
            />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
