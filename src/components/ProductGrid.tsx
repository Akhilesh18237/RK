
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Array<{
    titleKey: string;
    image: string;
    category: string;
  }>;
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.product-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Products Grid with improved layout for expandable cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 auto-rows-auto items-start">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.titleKey}-${index}`}
            product={product}
            index={index}
            isVisible={visibleItems.includes(index)}
          />
        ))}
      </div>

      {/* Product Categories Image */}
      <div className="mt-12 sm:mt-16 text-center animate-fade-in-up animation-delay-2000">
        <div className="relative group">
          <img 
            src="/lovable-uploads/a2240816-4403-4fb4-9571-b5a1306f5dca.png" 
            alt="Product Categories" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-700 hover:shadow-3xl animate-float"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
