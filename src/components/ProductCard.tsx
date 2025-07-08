import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: {
    titleKey: string;
    image: string;
    category: string;
  };
  index: number;
  isVisible: boolean;
}

const ProductCard = ({ product, index, isVisible }: ProductCardProps) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const getProductDescription = (titleKey: string) => {
    return t(`${titleKey}Desc`);
  };

  const getFormattedProductName = (titleKey: string) => {
    return t(titleKey);
  };

  const getProductSpecificFeatures = (titleKey: string) => {
    const featureMap: Record<string, string[]> = {
      'powerTransformerTank': ['robustConstruction', 'leakProof', 'thermalManagement', 'easyAccess', 'corrosionResistant'],
      'distributionTransformerTanks': ['robustConstruction', 'leakProof', 'thermalManagement', 'easyAccess', 'corrosionResistant'],
      'vcross': ['highVoltageRating', 'weatherResistant', 'easyInstallation', 'longLifespan', 'isoCertified'],
      'transformer': ['energyEfficient', 'lowNoiseoperation', 'compactDesign', 'advancedCooling', 'qualityTested'],
      'transformerOil': ['highDielectricStrength', 'lowViscosity', 'thermalStability', 'moistureResistant', 'ecofriendly'],
      'earthingPipeChannel': ['corrosionResistant', 'lowResistance', 'easyMaintenance', 'durableConstruction', 'standardCompliant'],
      'aluminumSuperDPCWire': ['lightWeight', 'highConductivity', 'flexibleDesign', 'costEffective', 'industrialGrade'],
      'copperSuperDPCWire': ['superiorConductivity', 'antiCorrosion', 'highTensileStrength', 'premiumQuality', 'longDurable'],
      'allTypesCablesLugs': ['precisionEngineered', 'multiSizeCompatible', 'easyConnection', 'reliableContact', 'industrialStandard'],
      'conductorWire': ['highPurity', 'flexibleStranding', 'temperatureResistant', 'optimalPerformance', 'standardCompliant'],
      'giWire': ['galvanizedCoating', 'rustProof', 'highTensileStrength', 'uniformThickness', 'longLasting'],
      'robustFuse': t('robustFuseFeatures'),
      'coreChannel': t('coreChannelFeatures'),
      'dropOutFuseSet': t('dropOutFuseSetFeatures')
    };
    if (Array.isArray(featureMap[titleKey])) return featureMap[titleKey];
    if (typeof featureMap[titleKey] === 'string') return t(featureMap[titleKey]).split(',');
    return ['highQualityMaterials', 'industryStandards', 'reliablePerformance', 'quickDelivery', 'technicalSupport'];
  };

  const getProductSpecificSpecs = (titleKey: string) => {
    const specMap: Record<string, string[]> = {
      'powerTransformerTank': ['mildSteelConstruction', 'paintFinish', 'gasketSealing', 'drainValve', 'testPressure'],
      'distributionTransformerTanks': ['mildSteelConstruction', 'paintFinish', 'gasketSealing', 'drainValve', 'testPressure'],
      'vcross': ['11kv33kvRating', 'hotDipGalvanized', 'boltedConnection', 'is2713Standard', 'customizable'],
      'transformer': ['singleThreePhase', 'oilAirCooled', 'tapChanger', 'vectorGroup', 'protectionClass'],
      'transformerOil': ['breakdownVoltage', 'specificGravity', 'flashPoint', 'pourPoint', 'moistureContent'],
      'earthingPipeChannel': ['copperBonded', 'variousLengths', 'threadedConnections', 'earthingCompound', 'testCertificate'],
      'aluminumSuperDPCWire': ['aacsConductor', 'pvcInsulation', 'flexibleStrands', 'ampereRating', 'bsStandard'],
      'copperSuperDPCWire': ['copperConductor', 'superiorInsulation', 'multiCore', 'ampacityRating', 'ieeeStandard'],
      'allTypesCablesLugs': ['aluminumCopper', 'compressionType', 'boltedDesign', 'multipleRanges', 'contactResistance'],
      'conductorWire': ['strandsConfig', 'conductorSize', 'currentRating', 'voltageGrade', 'flexibilityTest'],
      'giWire': ['zincCoating', 'wireGauge', 'tensileTest', 'uniformCoating', 'astmStandard'],
      'robustFuse': t('robustFuseSpecs'),
      'coreChannel': t('coreChannelSpecs'),
      'dropOutFuseSet': t('dropOutFuseSetSpecs')
    };
    if (Array.isArray(specMap[titleKey])) return specMap[titleKey];
    if (typeof specMap[titleKey] === 'string') return t(specMap[titleKey]).split(',');
    return ['variousSizes', 'customSolutions', 'wholesaleRetail', 'fastProcessing', 'qualityCertified'];
  };

  const toggleExpanded = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      data-index={index}
      className={`product-card group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 50}ms`,
        minHeight: isExpanded ? 'auto' : 'auto'
      }}
    >
      <div className="relative overflow-hidden h-48 sm:h-52 lg:h-48 cursor-pointer" onClick={toggleExpanded}>
        <img
          src={product.image}
          alt={getFormattedProductName(product.titleKey)}
          className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-500 p-2"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-blue-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-blue-600" />
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 relative">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">
          {getFormattedProductName(product.titleKey)}
        </h3>
        
        {/* Always visible basic info */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs sm:text-sm text-green-600 font-medium">{t('availableNow')}</span>
          <button 
            onClick={toggleExpanded}
            className="text-blue-600 font-medium text-xs sm:text-sm whitespace-nowrap hover:text-blue-800 transition-colors"
          >
            {isExpanded ? t('tapToCollapse') : t('tapToExpand')}
          </button>
        </div>

        {/* Expandable content with proper visibility */}
        {isExpanded && (
          <div className="pt-4 border-t border-gray-100 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">{t('productDetails')}</h4>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p className="mb-3 text-justify">
                  {getProductDescription(product.titleKey)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t('features')}
                </h5>
                <ul className="text-xs text-gray-600 space-y-2.5 leading-relaxed">
                  {getProductSpecificFeatures(product.titleKey).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-red-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  {t('specifications')}
                </h5>
                <ul className="text-xs text-gray-600 space-y-2.5 leading-relaxed">
                  {getProductSpecificSpecs(product.titleKey).map((spec, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1">•</span>
                      <span>{t(spec)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-red-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;
