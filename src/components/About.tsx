
import React from 'react';
import { CheckCircle, Award, Shield, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: 'premiumQuality',
      descKey: 'premiumQualityDesc'
    },
    {
      icon: Shield,
      titleKey: 'reliableProducts',
      descKey: 'reliableProductsDesc'
    },
    {
      icon: Truck,
      titleKey: 'fastDelivery',
      descKey: 'fastDeliveryDesc'
    },
    {
      icon: CheckCircle,
      titleKey: 'excellentService',
      descKey: 'excellentServiceDesc'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mb-4 sm:mb-6"></div>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                  >
                    <IconComponent className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Company Image with Floating Cards Above and Below */}
          <div className="relative mt-8 lg:mt-0">
            {/* ISO Certified - Positioned Above Image with improved mobile visibility */}
            <div className="flex justify-center sm:justify-end mb-4 px-4 sm:px-0">
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl shadow-xl animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-110 z-10 relative">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">ISO</div>
                  <div className="text-sm sm:text-base text-gray-600 whitespace-nowrap">{t('isoCertified')}</div>
                </div>
              </div>
            </div>

            {/* Company Image */}
            <div className="relative px-4 sm:px-0">
              <img 
                src="/lovable-uploads/2eeecc13-5198-482e-9de1-b7f7241b3aa2.png" 
                alt="Rama Krishna Metal Company" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* 24/7 Support - Positioned Below Image with improved mobile visibility */}
            <div className="flex justify-center sm:justify-start mt-4 px-4 sm:px-0">
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl shadow-xl animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-110 animation-delay-1000 z-10 relative">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm sm:text-base text-gray-600 whitespace-nowrap">{t('support247')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('whyChooseUs')}
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { titleKey: 'premiumMaterials', descKey: 'premiumMaterialsDesc' },
              { titleKey: 'expertTeam', descKey: 'expertTeamDesc' },
              { titleKey: 'competitivePricing', descKey: 'competitivePricingDesc' },
              { titleKey: 'customerFocus', descKey: 'customerFocusDesc' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-red-50 transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t(item.titleKey)}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
