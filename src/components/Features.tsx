import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard: React.FC<{ title: string; description: string; delay: number }> = ({ 
  title, 
  description, 
  delay 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300"
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "0% Комиссия на Споте",
      description: "Торгуйте на бирже Odyssey Exchange без комиссий на спотовом рынке"
    },
    {
      title: "10% Возврат при Ликвидациях",
      description: "Получайте 10% возврат средств при ликвидации позиций"
    },
    {
      title: "До 50% от Рефералов",
      description: "Зарабатывайте до 50% дохода от торговли приглашенных пользователей"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Преимущества Odyssey Exchange
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;