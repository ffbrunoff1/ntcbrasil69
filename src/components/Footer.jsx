import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Footer links
  const footerLinks = [
    {
      title: 'Links Rápidos',
      links: [
        { name: 'Home', href: 'hero' },
        { name: 'Sobre Nós', href: 'about' },
        { name: 'Serviços', href: 'services' },
        { name: 'Contato', href: 'contact' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Construções Residenciais', href: 'services' },
        { name: 'Construções Comerciais', href: 'services' },
        { name: 'Construções Industriais', href: 'services' },
        { name: 'Reformas e Ampliações', href: 'services' },
      ],
    },
    {
      title: 'Informações',
      links: [
        { name: 'Política de Privacidade', href: '#' },
        { name: 'Termos de Serviço', href: '#' },
        { name: 'Trabalhe Conosco', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753926411824_0.png"
              alt="NTC Brasil"
              className="h-12 mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Construindo sonhos com qualidade e confiança. A NTC Brasil está
              comprometida em transformar suas ideias em projetos concretos e
              duradouros.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <motion.li key={idx} variants={itemVariants}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">›</span> {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter (commented out for now) */}
        {/* <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Assine Nossa Newsletter</h3>
            <p className="text-gray-400 text-center mb-6">Receba novidades sobre o setor de construção e fique por dentro das nossas últimas realizações.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-3 rounded-r-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-sm text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            © {currentYear} NTC Brasil. Todos os direitos reservados.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection('hero')}
            className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
