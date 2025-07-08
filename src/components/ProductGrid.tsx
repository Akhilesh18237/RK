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
  const gridRef = React.useRef<HTMLDivElement>(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => prev.includes(index) ? prev : [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = gridRef.current?.querySelectorAll('.product-card') || [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isSpecialFusesGrid = products.length === 3;
  return (
    <>
      {/* Products Grid with improved layout for expandable cards */}
      <div
        ref={gridRef}
        className={isSpecialFusesGrid
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto items-start justify-center"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 auto-rows-auto items-start"}
      >
        {products.map((product, index) => (
          <ProductCard
            key={`${product.titleKey}-${index}`}
            product={product}
            index={index}
            isVisible={visibleItems.includes(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
