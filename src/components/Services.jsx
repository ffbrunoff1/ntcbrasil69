import { motion } from 'framer-motion';
import {
  Building,
  LayoutGrid,
  Ruler,
  Hammer,
  HardHat,
  Paintbrush,
  Home,
  Industrial,
  Factory,
  Clock,
  Truck,
} from 'lucide-react';

export default function Services() {
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

  // Main services
  const mainServices = [
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: 'Construções Residenciais',
      description:
        'Transformamos sua casa dos sonhos em realidade, com projetos personalizados e acabamentos de primeira qualidade.',
      color: 'from-primary to-darkBlue',
    },
    {
      icon: <Building className="h-10 w-10 text-white" />,
      title: 'Construções Comerciais',
      description:
        'Desenvolvemos espaços comerciais funcionais, estéticos e adaptados às necessidades do seu negócio.',
      color: 'from-darkBlue to-primary',
    },
    {
      icon: <Industrial className="h-10 w-10 text-white" />,
      title: 'Construções Industriais',
      description:
        'Criamos estruturas industriais robustas, seguindo todas as normas técnicas e de segurança.',
      color: 'from-primary to-darkBlue',
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      icon: <LayoutGrid className="h-6 w-6 text-primary" />,
      title: 'Planejamento Detalhado',
      description:
        'Desenvolvemos um plano meticuloso para cada aspecto do seu projeto.',
    },
    {
      number: '02',
      icon: <Ruler className="h-6 w-6 text-primary" />,
      title: 'Projeto Técnico',
      description:
        'Criamos projetos técnicos precisos que servem como base para toda a construção.',
    },
    {
      number: '03',
      icon: <Hammer className="h-6 w-6 text-primary" />,
      title: 'Construção',
      description:
        'Executamos a construção com equipes especializadas e materiais de qualidade.',
    },
    {
      number: '04',
      icon: <Paintbrush className="h-6 w-6 text-primary" />,
      title: 'Acabamento',
      description:
        'Realizamos os acabamentos com atenção aos detalhes para um resultado perfeito.',
    },
  ];

  // Additional services
  const additionalServices = [
    {
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: 'Reformas e Ampliações',
      description:
        'Transformamos espaços existentes com reformas e ampliações que valorizam seu imóvel.',
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: 'Gerenciamento de Obras',
      description:
        'Coordenamos todas as etapas da obra, garantindo eficiência e qualidade.',
    },
    {
      icon: <HardHat className="h-6 w-6 text-primary" />,
      title: 'Consultoria Técnica',
      description:
        'Oferecemos orientação especializada para otimizar seu projeto de construção.',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Manutenção Predial',
      description:
        'Serviços de manutenção preventiva e corretiva para preservar a vida útil das edificações.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções Completas em Construção
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A NTC Brasil oferece um amplo portfólio de serviços para atender
            desde pequenas reformas até grandes empreendimentos, sempre com o
            mesmo compromisso de qualidade e excelência.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-custom relative group`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-br ${service.color} p-8 h-full flex flex-col`}
              >
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 flex-grow">{service.description}</p>
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="text-white font-medium flex items-center group-hover:underline">
                    Saiba mais
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>

                {/* Decorative background elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/5 z-0" />
                <div className="absolute top-10 -left-6 w-20 h-20 rounded-full bg-white/5 z-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Nosso Processo
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Metodologia estruturada que garante eficiência e qualidade em cada
              etapa do projeto.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <motion.div
              className="absolute top-1/3 left-0 w-full h-1 bg-gray-200 hidden md:block"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-custom transition-all duration-300 relative md:mt-12 flex flex-col h-full"
                >
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center absolute -top-5 md:top-0 md:-mt-16 left-1/2 transform -translate-x-1/2">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-100 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <h4 className="text-xl font-bold mb-3 text-gray-800 mt-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Serviços Complementares
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Soluções específicas para necessidades diversas no setor de
              construção.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm flex-grow">
                  {service.description}
                </p>
                <motion.button
                  className="text-primary font-medium text-sm mt-4 flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Detalhes
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-1"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white shadow-custom relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Pronto para Transformar seu Projeto em Realidade?
              </h3>
              <p className="text-white/90 max-w-xl">
                Entre em contato com nossa equipe e descubra como podemos ajudar
                a concretizar seu sonho com excelência e confiabilidade.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-bold px-8 py-3 rounded-lg shadow-lg"
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
