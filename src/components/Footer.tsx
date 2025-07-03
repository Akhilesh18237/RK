
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const handlePhoneClick = () => {
    window.open('tel:+918319066874', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:rkmetalbhopal@gmail.com', '_self');
  };

  const handleAddressClick = () => {
    const address = encodeURIComponent('Industrial Area, Govindpura, Bhopal, M.P. 462023');
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/1bc1e9be-b639-4884-a545-523ff7e35b87.png" 
                alt="RK Logo" 
                className="h-8 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">
                {language === 'hi' ? 'राम कृष्णा मेटल' : 'Rama Krishna Metal'}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footerDescription')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactTitle')}</h3>
            <div className="space-y-3">
              <div 
                className="flex items-start space-x-3 cursor-pointer hover:text-blue-400 transition-colors"
                onClick={handleAddressClick}
              >
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm hover:text-blue-400 transition-colors">{t('address')}</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:text-green-400 transition-colors"
                onClick={handlePhoneClick}
              >
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-green-400 transition-colors">{t('phone')}</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:text-red-400 transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-red-400 transition-colors">{t('email')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                {t('home')}
              </a>
              <a href="#products" className="block text-gray-300 hover:text-white transition-colors">
                {t('products')}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                {t('about')}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                {t('contact')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rama Krishna Metal. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
