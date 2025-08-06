import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#00214a' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-yellow-400"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4" style={{ color: '#cc9809' }} />
              <span className="text-sm font-medium text-white/90">Agadir, Maroc</span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Bienvenue chez{' '}
                <motion.span
                  className="block"
                  style={{ color: '#cc9809' }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(204, 152, 9, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Baristy
                </motion.span>
              </h1>
              
              {/* Stars */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-1"
                variants={itemVariants}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                  >
                    <Star 
                      className="w-5 h-5 fill-current" 
                      style={{ color: '#cc9809' }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed"
            >
              Une expérience café moderne à Agadir, entre tradition marocaine et ambiance chaleureuse. 
              Venez déguster nos plats authentiques servis sur bois.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/70"
            >
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5" style={{ color: '#cc9809' }} />
                <span>Café Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#cc9809' }}></div>
                <span>Plats Marocains</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#cc9809' }}></div>
                <span>Service sur Bois</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                  <Link to = "/menu">
                <button
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ 
                    backgroundColor: '#cc9809',
                    color: '#00214a'
                  }}
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Voir le Menu
                </button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to = "/contact">
                <button
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl border-2 transition-all duration-300 hover:shadow-lg"
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
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Nous Contacter
                </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              {/* Decorative Elements */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-xl"
                style={{ backgroundColor: '#cc9809' }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10 blur-xl"
                style={{ backgroundColor: '#cc9809' }}
              ></div>

              {/* Main Image */}
              <motion.img
                src="/hero-cafe.png"
                alt="Café marocain Baristy"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-yellow-500/30"
                style={{ backgroundColor: 'rgba(204, 152, 9, 0.9)' }}
              >
                <span className="text-sm font-bold" style={{ color: '#00214a' }}>
                  Nouveau !
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;