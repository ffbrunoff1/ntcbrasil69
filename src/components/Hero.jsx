import { motion } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Building,
  Construction,
  Award,
} from 'lucide-react';

export default function Hero({ isLoaded, scrollToSection }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  };

  // Feature data
  const features = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Anos de experiência no setor de construção, garantindo qualidade em cada projeto.',
    },
    {
      icon: <Construction className="h-8 w-8 text-primary" />,
      title: 'Projetos Personalizados',
      description:
        'Soluções adaptadas às suas necessidades específicas e objetivos.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Comprometimento com os mais altos padrões de qualidade e segurança.',
    },
  ];

  return (
    <section
      id="hero"
      className="pt-32 pb-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent -z-10" />
      <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10" />

      <div className="container-custom">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              NTC Brasil - Construção de Qualidade
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando <span className="text-primary">sonhos</span> em
              <motion.span
                className="bg-gradient-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                {' '}
                realidade
              </motion.span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Construímos com confiança, qualidade e compromisso, transformando
              ideias em projetos concretos que atendem às suas necessidades e
              excedem suas expectativas.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(86, 169, 222, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Conheça Nossa Empresa
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
            aria-label="Rolar para baixo"
          >
            <span className="text-sm font-medium mb-2">Saiba mais</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
