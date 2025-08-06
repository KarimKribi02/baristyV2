import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn, Heart, Share2, Download, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState([]);

  const images = [
    { 
      src: 'baristy_img_1.jpg', 
      title: 'Intérieur chaleureux',
      category: 'food',
      description: 'Ambiance cozy avec décoration marocaine moderne'
    },
    { 
      src: 'baristy_img_2.jpg', 
      title: 'Plats authentiques',
      category: 'food',
      description: 'Nos spécialités servies sur plateaux en bois'
    },
    { 
      src: 'baristy_img_3.jpg', 
      title: 'Café artisanal',
      category: 'food',
      description: 'Café premium torréfié avec passion'
    },
    { 
      src: 'baristy_img_4.jpg', 
      title: 'Terrasse moderne',
      category: 'food',
      description: 'Espace extérieur avec vue sur Agadir'
    },
    { 
      src: 'baristy_img_5.jpg', 
      title: 'Service premium',
      category: 'food',
      description: 'Attention aux détails dans chaque service'
    },
    { 
      src: 'baristy_img_6.jpg', 
      title: 'Ambiance nocturne',
      category: 'food',
      description: 'Atmosphère magique en soirée'
    },
    { 
      src: 'baristy_img_7.jpg', 
      title: 'Pâtisseries maison',
      category: 'drinks',
      description: 'Créations artisanales quotidiennes'
    },
    { 
      src: 'baristy_img_8.jpg', 
      title: 'Cocktails signature',
      category: 'food',
      description: 'Boissons créatives et rafraîchissantes'
    },
    { 
      src: 'baristy_img_9.jpg', 
      title: 'Événements privés',
      category: 'food',
      description: 'Espace privatisable pour vos occasions spéciales'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout voir', icon: <Grid className="w-4 h-4" /> },
    
    { id: 'food', name: 'Plats', icon: <Camera className="w-4 h-4" /> },
    { id: 'drinks', name: 'Boissons', icon: <Camera className="w-4 h-4" /> },

  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
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

  const toggleFavorite = (index) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <>
      <div 
        className="min-h-screen py-20"
        style={{ backgroundColor: '#00214a' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header Section */}
            <div className="text-center space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
              >
                <Camera className="w-4 h-4" style={{ color: '#cc9809' }} />
                <span className="text-sm font-medium text-white/90">Notre Univers Visual</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                <motion.span
                  style={{ color: '#cc9809' }}
                  whileHover={{ 
                    textShadow: "0 0 30px rgba(204, 152, 9, 0.8)",
                    scale: 1.05 
                  }}
                  className="inline-block"
                >
                  Galerie
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-3xl mx-auto text-xl text-white/80 leading-relaxed"
              >
                Découvrez l'atmosphère unique de Baristy à travers ces moments capturés. 
                Chaque image raconte notre passion pour l'excellence et l'authenticité.
              </motion.p>
            </div>

            {/* Controls */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'text-white shadow-lg'
                        : 'text-white/70 hover:text-white border border-white/10 hover:border-yellow-500/30'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id ? '#cc9809' : 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 p-1 rounded-xl border border-white/10 bg-white/5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                  style={{ backgroundColor: viewMode === 'grid' ? '#cc9809' : 'transparent' }}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                  style={{ backgroundColor: viewMode === 'list' ? '#cc9809' : 'transparent' }}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              variants={containerVariants}
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 md:grid-cols-2 gap-8'
              }`}
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative overflow-hidden rounded-3xl cursor-pointer backdrop-blur-sm border border-white/10 bg-white/5"
                    onClick={() => setSelectedImage(image)}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-square' : 'aspect-video'}`}>
                      <img
                        src={`/gallery/${image.src}`}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg mb-1">
                            {image.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {image.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(index);
                          }}
                          className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors ${
                            favorites.includes(index) ? 'text-red-400' : 'text-white hover:text-red-400'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(index) ? 'fill-current' : ''}`} />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                        >
                          <ZoomIn className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30"
                          style={{ backgroundColor: 'rgba(204, 152, 9, 0.9)', color: '#00214a' }}
                        >
                          {categories.find(cat => cat.id === image.category)?.name}
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        boxShadow: `0 0 40px rgba(204, 152, 9, 0.2)`
                      }}
                    ></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <div className="flex flex-wrap justify-center gap-8 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#cc9809' }}>
                    {images.length}
                  </div>
                  <div className="text-sm">Photos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#cc9809' }}>
                    {categories.length - 1}
                  </div>
                  <div className="text-sm">Catégories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#cc9809' }}>
                    {favorites.length}
                  </div>
                  <div className="text-sm">Favoris</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 33, 74, 0.95)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 text-white hover:bg-red-500/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <img
                src={`/gallery/${selectedImage.src}`}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/80">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-green-400 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;