import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock, Coffee, Sparkles } from 'lucide-react';

const CallToAction = () => {
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
  const whatsappNumber = "212661666323";
  const phoneNumber = "0661666323";
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#00214a' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-yellow-400"
        ></motion.div>
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full border border-yellow-400"
        ></motion.div>
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-yellow-400"
        ></motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-12"
        >
          {/* Sparkles Animation */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8"
            >
              <Sparkles className="w-6 h-6" style={{ color: '#cc9809' }} />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-6"
            >
              <Sparkles className="w-4 h-4" style={{ color: '#cc9809' }} />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              variants={pulseVariants}
              animate="animate"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Envie d'une pause{' '}
              <motion.span
                style={{ color: '#cc9809' }}
                whileHover={{ 
                  textShadow: "0 0 30px rgba(204, 152, 9, 0.8)",
                  scale: 1.05 
                }}
                className="inline-block"
              >
                gourmande
              </motion.span>
              <motion.span className="inline-block ml-2">
                <Coffee 
                  className="w-12 h-12 md:w-16 md:h-16 inline" 
                  style={{ color: '#cc9809' }}
                />
              </motion.span>
              ?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Rejoignez-nous pour une expérience culinaire inoubliable ! 
              Passez nous voir ou réservez facilement par WhatsApp.
            </motion.p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Ouvert 7j/7",
                subtitle: "8h - 23h"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Centre Agadir",
                subtitle: "Facilement accessible"
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: "Service Rapide",
                subtitle: "Commande en 5 min"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}
                  whileHover={{ rotate: 10 }}
                >
                  <div style={{ color: '#cc9809' }}>
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(204, 152, 9, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg"
              style={{ 
                backgroundColor: '#cc9809',
                color: '#00214a'
              }}
            ><a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              ></motion.div>
              
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              <span className="relative z-10">Réserver sur WhatsApp</span>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              ></motion.div>
              </a>
            </motion.button>

            {/* Contact Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: '#cc9809',
                color: '#cc9809'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#cc9809';
                e.target.style.color = '#00214a';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#cc9809';
              }}
            ><a
                          href={`tel:${phoneNumber}`}
                          
        
                          className="flex items-center gap-3"
                        >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="group-hover:rotate-12 transition-transform"
              >
                <Phone className="w-5 h-5" />
              </motion.div>
              Nous Appeler
              </a>
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm">Réponse rapide garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#cc9809' }}></div>
                <span className="text-sm">Service client 24/7</span>
              </div>
            </div>

            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-white/50 text-sm"
            >
              🎉 Offre spéciale : -10% sur votre première commande !
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;