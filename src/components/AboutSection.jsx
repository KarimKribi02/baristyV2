import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Utensils, Heart, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Café Premium",
      description: "Grains sélectionnés et torréfiés avec passion"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Service sur Bois",
      description: "Présentation authentique sur plateaux artisanaux"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ambiance Chaleureuse",
      description: "Un cadre convivial pour tous vos moments"
    }
  ];

  const stats = [
    { number: "5+", label: "Années d'expérience" },
    { number: "1000+", label: "Clients satisfaits" },
    { number: "50+", label: "Plats authentiques" },
    { number: "100%", label: "Ingrédients frais" }
  ];

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#00214a' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-64 rounded-full border border-yellow-400"></div>
        <div className="absolute bottom-16 right-32 w-48 h-48 rounded-full border border-yellow-400"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-yellow-400"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
            >
              <Award className="w-4 h-4" style={{ color: '#cc9809' }} />
              <span className="text-sm font-medium text-white/90">Notre Excellence</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Notre{' '}
              <motion.span
                style={{ color: '#cc9809' }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(204, 152, 9, 0.5)",
                  scale: 1.05 
                }}
                className="inline-block"
              >
                Concept
              </motion.span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-4xl mx-auto text-xl md:text-2xl text-white/80 leading-relaxed"
            >
              Chez{' '}
              <motion.span
                style={{ color: '#cc9809' }}
                className="font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Baristy
              </motion.span>
              , nous marions l'ambiance marocaine traditionnelle à une touche moderne et urbaine. 
              Nos plats sont soigneusement présentés sur des plateaux en bois dans un décor chic 
              qui célèbre l'art de vivre marocain.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                {/* Icon Container */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}
                  whileHover={{ rotate: 5 }}
                >
                  <div style={{ color: '#cc9809' }}>
                    {feature.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, rgba(204, 152, 9, 0.1), transparent)`,
                    boxShadow: `0 0 30px rgba(204, 152, 9, 0.2)`
                  }}
                ></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
                    style={{ color: '#cc9809' }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/70 font-medium group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-sm border border-yellow-500/30 bg-yellow-500/10"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(204, 152, 9, 0.2)',
                boxShadow: '0 10px 30px rgba(204, 152, 9, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-6 h-6" style={{ color: '#cc9809' }} />
              <span className="text-white font-semibold text-lg">
                Rejoignez notre communauté de passionnés
              </span>
              <Clock className="w-6 h-6" style={{ color: '#cc9809' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;