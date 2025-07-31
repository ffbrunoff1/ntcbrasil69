import { motion } from 'framer-motion';
import { Target, ShieldCheck, Clock, Building2, Award } from 'lucide-react';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        damping: 15,
      },
    },
  };

  // Stats data
  const stats = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '150+', label: 'Projetos Concluídos' },
    { value: '98%', label: 'Clientes Satisfeitos' },
    { value: '25+', label: 'Profissionais Qualificados' },
  ];

  // Timeline data
  const journey = [
    {
      year: '2013',
      title: 'Fundação da NTC Brasil',
      description:
        'Iniciamos nossa jornada com compromisso de excelência no setor de construção.',
    },
    {
      year: '2016',
      title: 'Expansão Regional',
      description:
        'Ampliamos nossa atuação para diferentes regiões, levando qualidade a mais clientes.',
    },
    {
      year: '2019',
      title: 'Inovação em Construção',
      description:
        'Implementamos novas tecnologias e métodos para aprimorar nossos serviços.',
    },
    {
      year: '2023',
      title: 'Compromisso Sustentável',
      description:
        'Adotamos práticas sustentáveis, reafirmando nosso compromisso com o futuro.',
    },
  ];

  // Values data
  const values = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Integridade',
      description:
        'Atuamos com ética, transparência e honestidade em todas as relações.',
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Excelência',
      description:
        'Buscamos o mais alto padrão de qualidade em cada aspecto do nosso trabalho.',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Pontualidade',
      description:
        'Respeitamos prazos e compromissos, valorizando o tempo dos nossos clientes.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Construindo um Futuro Sólido e Confiável
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A NTC Brasil é uma empresa especializada em construção, com foco em
            entregar projetos de alta qualidade que atendem e superam as
            expectativas dos nossos clientes. Desde nossa fundação, construímos
            uma reputação baseada em confiabilidade, expertise técnica e
            compromisso com a excelência.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-gradient-secondary text-white rounded-2xl p-8 shadow-custom"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Transformar ideias em estruturas sólidas, oferecendo soluções de
              construção que combinam qualidade, inovação e responsabilidade,
              sempre com foco na satisfação dos nossos clientes e no impacto
              positivo para a sociedade.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow-custom border border-gray-100"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Nossa Visão
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ser reconhecida como referência no setor de construção,
              destacando-se pela qualidade, inovação e compromisso com a
              sustentabilidade, construindo não apenas estruturas, mas
              relacionamentos duradouros baseados na confiança e na excelência.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* History/Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Nossa Jornada
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Conheça os principais marcos da nossa história e como evoluímos ao
              longo dos anos.
            </p>
          </div>

          <div className="relative">
            {/* Timeline center line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            <div className="relative">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div
                    className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md z-10">
                    <span className="text-sm font-bold text-white">
                      {item.year}
                    </span>
                  </div>

                  {/* Mobile and opposite side content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}
                  >
                    <div className="md:hidden mb-3">
                      <h4 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="hidden md:block">
                      {/* This div only exists for spacing in desktop view */}
                      &nbsp;
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Nossos Valores
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Princípios que orientam nossas ações e decisões diárias.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-custom transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
