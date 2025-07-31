import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: '',
    loading: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      success: false,
      error: false,
      message: '',
      loading: true,
    });

    try {
      // Prepare data for the endpoint
      const data = {
        ...formData,
        recipientEmail: 'ffbrunoff@yahoo.com.br',
      };

      // Make POST request
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          error: false,
          message:
            'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.',
          loading: false,
        });
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.error || 'Houve um erro ao enviar sua mensagem.'
        );
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message:
          error.message ||
          'Houve um erro ao enviar sua mensagem. Por favor, tente novamente.',
        loading: false,
      });
    }
  };

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

  // Contact info items
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Endereço',
      details: 'Padre Lebret 801 G05 Bloco 03',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Telefone',
      details: '+55 44 99104-0774',
      action: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'E-mail',
      details: 'ffbrunoff@yahoo.com.br',
      action: 'mailto:ffbrunoff@yahoo.com.br',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Construir Juntos?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estamos prontos para transformar suas ideias em projetos concretos.
            Entre em contato conosco e descubra como podemos ajudar a realizar
            seu sonho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  {item.action ? (
                    <a
                      href={item.action}
                      className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-primary rounded-lg text-white shadow-custom"
            >
              <h3 className="text-xl font-bold mb-4">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-xl shadow-custom p-8 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h3>

            {formStatus.submitted && formStatus.success ? (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-700 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-green-600">{formStatus.message}</p>
                <motion.button
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-md shadow-md hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setFormStatus(prev => ({ ...prev, submitted: false }))
                  }
                >
                  Enviar Nova Mensagem
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {formStatus.error && (
                  <motion.div
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Seu endereço de e-mail"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Como podemos ajudar? Descreva seu projeto ou dúvida..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.loading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>

        {/* Map or business hours or FAQ */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Perguntas Frequentes</h3>
            <p className="text-gray-600">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-2">
                  Como é feito o orçamento de um projeto?
                </h4>
                <p className="text-gray-600">
                  Realizamos uma análise detalhada das necessidades do cliente e
                  elaboramos um orçamento personalizado, considerando todos os
                  aspectos do projeto, desde materiais até mão de obra.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">
                  Qual o prazo médio de execução de uma obra?
                </h4>
                <p className="text-gray-600">
                  O prazo varia de acordo com a complexidade e tamanho do
                  projeto. Após a análise inicial, fornecemos um cronograma
                  detalhado com previsão de início e término.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-2">
                  Vocês fornecem garantia para os serviços?
                </h4>
                <p className="text-gray-600">
                  Sim, oferecemos garantia para todos os nossos serviços,
                  conforme as normas técnicas e legislação vigente, assegurando
                  a qualidade e durabilidade de nossas construções.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">
                  Vocês realizam projetos em outras cidades?
                </h4>
                <p className="text-gray-600">
                  Sim, atuamos em diversas localidades. Entre em contato conosco
                  para verificar a disponibilidade para sua região e discutir as
                  condições específicas para o seu projeto.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
