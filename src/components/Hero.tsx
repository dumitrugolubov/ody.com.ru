import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Odyssey Exchange
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Первая в мире биржа, специализирующаяся на мем-токенах. Инновационная платформа для торговли криптовалютой.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.a
            href="https://ody.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Перейти на Биржу
          </motion.a>
          <motion.a
            href="https://t.me/t_dmi3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Стать партнером
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;