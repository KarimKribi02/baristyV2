import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Accueil", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Concept", to: "/concept" },
    { name: "Galerie", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const whatsappNumber = "212661666323";
  const phoneNumber = "0661666323";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: { duration: 0.6 }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#cc9809",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const whatsappVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const phoneVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(204, 152, 9, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#00214a]/95 backdrop-blur-lg shadow-xl border-b border-[#cc9809]/20' 
          : 'bg-[#00214a]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div 
            variants={logoVariants} 
            whileHover="hover"
            className="cursor-pointer select-none"
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src="/Logo.png" 
                alt="Baristy Logo" 
                className="h-14 w-auto"
                whileHover={{ 
                  filter: "drop-shadow(0 0 10px rgba(204, 152, 9, 0.3))" 
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={item.to}
                    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[#cc9809] bg-[#cc9809]/10 shadow-lg'
                        : 'text-white hover:text-[#cc9809] hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc9809] to-[#ffb700] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              variants={phoneVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#cc9809] to-[#ffb700] text-[#00214a]"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={whatsappVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              <span>WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button & Quick Actions */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={whatsappVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            </motion.a>

            {/* Mobile Phone Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              variants={phoneVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 rounded-xl bg-gradient-to-r from-[#cc9809] to-[#ffb700] text-[#00214a] shadow-lg"
            >
              <Phone className="w-5 h-5" />
            </motion.a>

            {/* Hamburger Menu */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#cc9809]/10 text-[#cc9809] hover:bg-[#cc9809]/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <motion.nav 
                className="px-2 pt-2 pb-6 space-y-2 bg-[#00214a]/95 backdrop-blur-lg rounded-2xl mt-4 border border-[#cc9809]/20 shadow-2xl"
              >
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      custom={index}
                    >
                      <Link
                        to={item.to}
                        className={`block px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-[#cc9809] bg-[#cc9809]/10 border-l-4 border-[#cc9809] shadow-lg'
                            : 'text-white hover:text-[#cc9809] hover:bg-white/5'
                        }`}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA Section */}
                <motion.div
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  custom={navItems.length}
                  className="pt-4 border-t border-[#cc9809]/20 mt-6"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#cc9809] to-[#ffb700] text-[#00214a]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Appeler</span>
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc9809] to-[#ffb700] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-4 left-1/4 w-2 h-2 bg-[#cc9809]/30 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-6 right-1/3 w-1 h-1 bg-[#cc9809]/40 rounded-full"
          animate={{
            y: [0, -8, 0],
            x: [0, 5, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.header>
  );
};

export default Navbar;