import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, ArrowRight, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: { duration: 0.3 }
    }
  };

  const galleryImages = [
    {
      src: "/gal1.jpg",
      alt: "Intérieur chaleureux du café Baristy",
      title: "Ambiance Cozy"
    },
    {
      src: "/gal2.jpg", 
      alt: "Plats traditionnels servis sur bois",
      title: "Service Authentique"
    },
    {
      src: "/gal3.jpg",
      alt: "Espace détente moderne", 
      title: "Espace Moderne"
    },
    {
      src: "/gal4.jpg",
      alt: "Terrasse extérieure",
      title: "Terrasse Ensoleillée"
    }
  ];

  return (
    <>
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ backgroundColor: '#00214a' }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-yellow-400"></div>
          <div className="absolute bottom-32 left-16 w-48 h-48 rounded-full border border-yellow-400"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-yellow-400"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/10"></div>

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
                <Camera className="w-4 h-4" style={{ color: '#cc9809' }} />
                <span className="text-sm font-medium text-white/90">Découvrez Notre Univers</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Ambiance et{' '}
                <motion.span
                  style={{ color: '#cc9809' }}
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(204, 152, 9, 0.5)",
                    scale: 1.05 
                  }}
                  className="inline-block"
                >
                  Lieu
                </motion.span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="max-w-3xl mx-auto text-xl text-white/80 leading-relaxed"
              >
                Plongez dans l'atmosphère unique de Baristy, où chaque coin raconte une histoire 
                et chaque détail est pensé pour votre bien-être.
              </motion.p>
            </div>

            {/* Gallery Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {image.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">Voir en grand</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                    style={{ backgroundColor: 'rgba(204, 152, 9, 0.9)' }}
                  >
                    <Maximize2 className="w-5 h-5" style={{ color: '#00214a' }} />
                  </motion.div>

                  {/* Border Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      boxShadow: `0 0 30px rgba(204, 152, 9, 0.4)`
                    }}
                  ></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Link to="/galerie">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(204, 152, 9, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
                style={{ 
                  backgroundColor: '#cc9809',
                  color: '#00214a'
                }}
              >
                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Voir toute la galerie
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              </Link>

              {/* Additional Info */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-white/60 text-sm"
              >
                +50 photos haute qualité de notre établissement
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Selected Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 33, 74, 0.95)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 text-white hover:bg-red-500/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;