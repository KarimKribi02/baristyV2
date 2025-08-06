import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Mail, Users, Star, Clock } from 'lucide-react';

const Concept = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(204, 152, 9, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-[#00214a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#cc9809] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#cc9809] opacity-3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#cc9809] to-transparent opacity-2 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block p-4 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-full mb-8"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Coffee className="w-10 h-10 text-[#00214a]" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={textVariants}
          >
            À propos de{" "}
            <span className="bg-gradient-to-r from-[#cc9809] to-[#e6a90a] bg-clip-text text-transparent">
              Baristy
            </span>
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Baristy est bien plus qu'un simple café ou restaurant. C'est un espace chaleureux à Agadir où{" "}
              <span className="text-[#cc9809] font-semibold">modernité</span> et{" "}
              <span className="text-[#cc9809] font-semibold">traditions marocaines</span> se rencontrent dans une ambiance conviviale et élégante.
            </p>
            
            {/* Decorative line */}
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 1, duration: 0.8 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Users className="w-8 h-8 text-[#cc9809] mx-auto mb-3" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#cc9809] mb-2">Convivial</h3>
            <p className="text-gray-300">Espace chaleureux</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Star className="w-8 h-8 text-[#cc9809] mx-auto mb-3" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#cc9809] mb-2">Moderne</h3>
            <p className="text-gray-300">Design contemporain</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Clock className="w-8 h-8 text-[#cc9809] mx-auto mb-3" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#cc9809] mb-2">Tradition</h3>
            <p className="text-gray-300">Culture marocaine</p>
          </motion.div>
        </motion.div>

        {/* Main Content Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Category Card */}
          <motion.div
            className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Card background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cc9809]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-2xl mb-6 shadow-lg"
              variants={iconVariants}
              whileHover="hover"
            >
              <Coffee className="w-8 h-8 text-[#00214a]" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold text-[#cc9809] mb-4"
              variants={textVariants}
            >
              Catégorie
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-200 leading-relaxed"
              variants={textVariants}
            >
              Café - Restaurant marocain moderne alliant authenticité et innovation culinaire dans un cadre exceptionnel.
            </motion.p>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#cc9809] opacity-30 rounded-tr-lg"></div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Card background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cc9809]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-2xl mb-6 shadow-lg"
              variants={iconVariants}
              whileHover="hover"
            >
              <MapPin className="w-8 h-8 text-[#00214a]" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold text-[#cc9809] mb-6"
              variants={textVariants}
            >
              Coordonnées
            </motion.h2>
            
            <motion.div className="space-y-4" variants={textVariants}>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#cc9809] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p className="text-gray-300">Agadir, Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#cc9809] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Zone de service</p>
                  <p className="text-gray-300">Agadir et environs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#cc9809] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <motion.a
                    href="mailto:baristy2022@gmail.com"
                    className="text-[#cc9809] hover:text-[#e6a90a] transition-colors duration-300 underline underline-offset-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    baristy2022@gmail.com
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#cc9809] opacity-30 rounded-tr-lg"></div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-full text-[#00214a] font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(204, 152, 9, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Découvrez l'expérience Baristy
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Concept;