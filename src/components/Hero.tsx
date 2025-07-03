
import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const handlePhoneClick = () => {
    window.open('tel:+918319066874', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:rkmetalbhopal@gmail.com', '_self');
  };

  const handleGetQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 md:py-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-40 sm:w-60 h-40 sm:h-60 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            {/* Company Name */}
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Rama Krishna Metal
              </h2>
            </div>
            
            {/* Main Heading - Fixed Hindi text overflow */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 block whitespace-normal">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed break-words">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={handleGetQuote}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('getQuote')}
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start pt-4">
              <div 
                className="flex items-center justify-center lg:justify-start space-x-2 cursor-pointer hover:text-blue-600 transition-colors group"
                onClick={handlePhoneClick}
              >
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 group-hover:animate-pulse flex-shrink-0" />
                <span className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm lg:text-base">+91 8319066874</span>
              </div>
              <div 
                className="flex items-center justify-center lg:justify-start space-x-2 cursor-pointer hover:text-blue-600 transition-colors group"
                onClick={handleEmailClick}
              >
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 group-hover:animate-pulse flex-shrink-0" />
                <span className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm lg:text-base break-all sm:break-normal">rkmetalbhopal@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {!imageError ? (
                <img 
                  src="/lovable-uploads/587fb62d-9f0f-4d7d-842b-ec859b5498a3.png" 
                  alt="Rama Krishna Metal Products" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-2">RK</div>
                    <div className="text-gray-600 font-medium">Rama Krishna Metal</div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold text-xs lg:text-sm">{t('premiumQuality').split(' ')[0]}</span>
            </div>
            
            <div className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold text-xs lg:text-sm">{t('reliableProducts').split(' ')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-gray-400 rounded-full mt-1 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
