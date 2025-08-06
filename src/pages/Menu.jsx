import { motion } from "framer-motion";
import { QrCode, ExternalLink, Smartphone, Monitor } from "lucide-react";

const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const qrVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(204, 152, 9, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="bg-[#00214a] min-h-screen py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block p-3 bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-full mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <QrCode className="w-8 h-8 text-[#00214a]" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Menu{" "}
            <span className="bg-gradient-to-r from-[#cc9809] to-[#e6a90a] bg-clip-text text-transparent">
              Interactif
            </span>
          </h2>
          
          <p className="text-[#cc9809] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Découvrez notre carte complète avec une expérience digitale moderne
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              variants={qrVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#cc9809] to-[#e6a90a] opacity-20 blur-xl"></div>
              <div className="absolute -inset-2 rounded-2xl border-2 border-[#cc9809] opacity-30"></div>
              
              {/* QR Code Container */}
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <img
                  src="/images/qr-baristy.png"
                  alt="QR Code Menu"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-xl"
                />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-[#cc9809] rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-[#cc9809] rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-[#cc9809] rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-[#cc9809] rounded-br-lg"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Instructions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 bg-[#cc9809] rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#00214a]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Avec votre mobile</h3>
                  <p className="text-gray-300">Scannez le QR code avec l'appareil photo</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 bg-[#cc9809] rounded-full flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-[#00214a]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Sur ordinateur</h3>
                  <p className="text-gray-300">Cliquez sur le bouton ci-dessous</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://online.fliphtml5.com/mdkbb/dmwp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-[#00214a] bg-gradient-to-r from-[#cc9809] to-[#e6a90a] rounded-2xl overflow-hidden shadow-xl"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button background effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative flex items-center gap-3">
                Consulter le menu en ligne
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>

            {/* Additional info */}
            <motion.div
              className="text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p>✨ Menu mis à jour en temps réel</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#cc9809] to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;