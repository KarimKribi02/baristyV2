import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, MapPin, Clock, Mail, Coffee, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
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

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
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
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer 
      className="relative overflow-hidden mt-20"
      style={{ backgroundColor: '#00214a' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 rounded-full border border-yellow-400"
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
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full border border-yellow-400"
        ></motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
            >
              <Coffee className="w-4 h-4" style={{ color: '#cc9809' }} />
              <span className="text-sm font-medium text-white/90">Rejoignez Notre Communauté</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Restez{' '}
              <motion.span
                style={{ color: '#cc9809' }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(204, 152, 9, 0.5)",
                  scale: 1.05 
                }}
                className="inline-block"
              >
                Connectés
              </motion.span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <motion.div
              variants={mapVariants}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#cc9809' }} />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Nous Trouver</h3>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group overflow-hidden rounded-3xl shadow-2xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0713149478474!2d-9.5362643!3d30.3983867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9671235731d%3A0x4547d60b8ae53d70!2sBaristy!5e1!3m2!1sar!2sma!4v1754525469396!5m2!1sar!2sma"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baristy Map"
                  className="transition-all duration-300 group-hover:saturate-110"
                ></iframe>
                
                {/* Map Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end justify-center pb-4"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 text-white text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Ouvrir dans Google Maps</span>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 40px rgba(204, 152, 9, 0.3)`
                  }}
                ></div>
              </motion.div>
            </motion.div>

            {/* Contact & Social Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: '#cc9809' }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Contact</h3>
                </div>

                <div className="space-y-4">
                  <motion.a
                    href="tel:0661666323"
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}>
                      <Phone className="w-5 h-5" style={{ color: '#cc9809' }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                        0661 66 63 23
                      </p>
                      <p className="text-white/60 text-sm">Appelez-nous maintenant</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}>
                      <Clock className="w-5 h-5" style={{ color: '#cc9809' }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                        8h - 23h
                      </p>
                      <p className="text-white/60 text-sm">Ouvert tous les jours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}>
                      <Mail className="w-5 h-5" style={{ color: '#cc9809' }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                        contact@baristy.ma
                      </p>
                      <p className="text-white/60 text-sm">Écrivez-nous</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(204, 152, 9, 0.1)' }}
                  >
                    <Heart className="w-5 h-5" style={{ color: '#cc9809' }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Suivez-nous</h3>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.facebook.com/Baristy.Agadir"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    <Facebook className="w-6 h-6 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    ></motion.div>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    ></motion.div>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/baristy.agadir/?hl=ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)'
                    }}
                  >
                    <Instagram className="w-6 h-6 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    ></motion.div>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    ></motion.div>
                  </motion.a>
                </div>

                <p className="text-white/60 text-sm">
                  Découvrez nos dernières créations et actualités
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                className="text-white/60 text-sm"
                whileHover={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                &copy; {new Date().getFullYear()} Baristy – Tous droits réservés.
              </motion.p>
              
              <motion.div
                className="flex items-center gap-2 text-white/60 text-sm"
                whileHover={{ color: 'rgba(204, 152, 9, 0.8)' }}
              >
                <span>Fait avec</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 fill-current text-red-400" />
                </motion.div>
                <span>à Agadir</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;