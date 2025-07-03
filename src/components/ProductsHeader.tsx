
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
        {t('productsTitle')}
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-4 sm:mb-6 animate-scale-in animation-delay-500"></div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in animation-delay-1000">
        {t('footerDescription')}
      </p>
    </div>
  );
};

export default ProductsHeader;
