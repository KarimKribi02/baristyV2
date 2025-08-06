import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#00214a] via-[#002854] to-[#00214a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#cc9809] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#cc9809] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#cc9809] rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-full mb-6 animate-bounce">
              <Send className="w-8 h-8 text-[#00214a]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#cc9809] to-[#e6b026] bg-clip-text text-transparent mb-6">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cc9809] to-[#e6b026] mx-auto mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pour toute demande de réservation, d'information ou collaboration, n'hésitez pas à nous contacter. Notre équipe est là pour vous accompagner.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 lg:mb-20">
            {/* Téléphone */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#003366] to-[#004080] p-6 sm:p-8 rounded-2xl border border-[#cc9809]/30 hover:border-[#cc9809]/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#cc9809]/20">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-[#00214a]" />
                </div>
                <h3 className="text-xl font-bold text-[#cc9809] mb-3">Téléphone</h3>
                <p className="text-gray-300 text-lg font-medium">0661 666 323</p>
                <div className="mt-4 text-sm text-gray-400">Disponible 24h/7j</div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#003366] to-[#004080] p-6 sm:p-8 rounded-2xl border border-[#cc9809]/30 hover:border-[#cc9809]/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#cc9809]/20">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-[#00214a]" />
                </div>
                <h3 className="text-xl font-bold text-[#cc9809] mb-3">Email</h3>
                <p className="text-gray-300 text-lg font-medium break-all">baristy2022@gmail.com</p>
                <div className="mt-4 text-sm text-gray-400">Réponse rapide garantie</div>
              </div>
            </div>

            {/* Adresse */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#003366] to-[#004080] p-6 sm:p-8 rounded-2xl border border-[#cc9809]/30 hover:border-[#cc9809]/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#cc9809]/20">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#cc9809] to-[#e6b026] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-[#00214a]" />
                </div>
                <h3 className="text-xl font-bold text-[#cc9809] mb-3">Adresse</h3>
                <p className="text-gray-300 text-lg font-medium">Agadir, Maroc</p>
                <div className="mt-4 text-sm text-gray-400">Service à domicile disponible</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#1ebe57] rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
              <a
                href="https://wa.me/212661666323"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:from-[#1ebe57] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/30 active:scale-95"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm sm:text-base">
              Cliquez pour démarrer une conversation instantanée
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-16 lg:mt-20 text-center">
            <div className="bg-gradient-to-r from-[#003366]/50 to-[#004080]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#cc9809]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#cc9809] mb-4">Horaires de disponibilité</h3>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                <div>
                  <div className="font-semibold text-[#cc9809]">Lundi - Vendredi</div>
                  <div>8h00 - 20h00</div>
                </div>
                <div>
                  <div className="font-semibold text-[#cc9809]">Samedi - Dimanche</div>
                  <div>9h00 - 18h00</div>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <div className="font-semibold text-[#cc9809]">Urgences</div>
                  <div>24h/24 sur WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;