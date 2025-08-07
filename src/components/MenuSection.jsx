import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Star, Clock, ArrowRight, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: "Sandwich Poulet",
    img: "/menu1.jpg",
    description: "Poulet grillé, légumes frais et sauce spéciale",
    
    time: "15 min",
    rating: 4.8,
    category: "Plat Principal",
    popular: true
  },
  {
    name: "Avocado Toast",
    img: "/menu2.jpg", 
    description: "Avocat frais, pain artisanal et graines de sésame",
    
    time: "10 min",
    rating: 4.9,
    category: "Petit Déjeuner",
    popular: false
  },
  {
    name: "Café Spécial",
    img: "/menu3.jpg",
    description: "Mélange unique de grains torréfiés, crème onctueuse",
   
    time: "5 min", 
    rating: 5.0,
    category: "Boisson",
    popular: true
  },
];

const MenuSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -15, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#00214a' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-64 h-64 rounded-full border border-yellow-400"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 rounded-full border border-yellow-400"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-yellow-400"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/10"></div>

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
              <ChefHat className="w-4 h-4" style={{ color: '#cc9809' }} />
              <span className="text-sm font-medium text-white/90">Notre Menu</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Découvrez quelques{' '}
              <motion.span
                style={{ color: '#cc9809' }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(204, 152, 9, 0.5)",
                  scale: 1.05 
                }}
                className="inline-block"
              >
                Saveurs
              </motion.span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-xl text-white/80 leading-relaxed"
            >
              Chaque plat raconte une histoire, chaque saveur éveille vos sens. 
              Découvrez notre sélection de spécialités préparées avec passion.
            </motion.p>
          </div>

          {/* Menu Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/30"
                    style={{ 
                      backgroundColor: 'rgba(204, 152, 9, 0.9)',
                      color: '#00214a'
                    }}
                  >
                    Populaire
                  </motion.div>
                )}

                {/* Heart Icon */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors"
                >
                  <Heart className="w-5 h-5 text-white group-hover:text-red-400 transition-colors" />
                </motion.button>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredItem === index ? 1 : 0,
                          y: hoveredItem === index ? 0 : 20
                        }}
                        className="flex items-center gap-4 text-white"
                      >
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" style={{ color: '#cc9809' }} />
                          <span className="text-sm">{item.rating}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10"
                      style={{ color: '#cc9809' }}
                    >
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`}
                          style={{ color: '#cc9809' }}
                        />
                      ))}
                      <span className="text-xs text-white/60 ml-1">({item.rating})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-2xl font-bold" style={{ color: '#cc9809' }}>
                      {item.price}
                    </div>
                    
                    
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 40px rgba(204, 152, 9, 0.2)`
                  }}
                ></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <Link to = "/menu">
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
              <ChefHat className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Voir le menu complet
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
              </Link>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-sm"
            >
              Plus de 50 plats et boissons vous attendent
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;