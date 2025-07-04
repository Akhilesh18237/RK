import React from 'react';
import ProductsHeader from './ProductsHeader';
import ProductGrid from './ProductGrid';

const Products = () => {
  const products = [
    // 1st - Power Transformer Tank (Display: "Power Transformer Tank" with spaces)
    {
      titleKey: 'powerTransformerTank',
      image: '/lovable-uploads/c4d5dc1c-6952-4892-b5f6-a802e9009705.png',
      category: 'Transformers'
    },
    // 2nd - Distribution Transformer Tanks (Display: "Distribution Transformer Tanks" with spaces)
    {
      titleKey: 'distributionTransformerTanks',
      image: '/lovable-uploads/1000297836-removebg-preview%20(1).png',
      category: 'Transformers'
    },
    // 3rd - Distribution Transformers (image updated)
    {
      titleKey: 'transformer',
      image: '/lovable-uploads/0590b300-7102-4d44-9c29-35fe62cfa3d3.png',
      category: 'Transformers'
    },
    // 4th - Conductor Wire
    {
      titleKey: 'conductorWire',
      image: '/lovable-uploads/5f8142ed-18e1-4ae5-bcde-c62ffa0fdcd3.png',
      category: 'Wires'
    },
    // 5th - V Cross Arms
    {
      titleKey: 'vcross',
      image: '/lovable-uploads/1f62a90b-4151-4d33-8f34-792cf2d2dde4.png',
      category: 'Electrical'
    },
    // 6th - GI Wire
    {
      titleKey: 'giWire',
      image: '/lovable-uploads/8700699b-5201-431a-bb43-b7b28766f833.png',
      category: 'Wires'
    },
    // 7th - Earthing Pipe & Channel
    {
      titleKey: 'earthingPipeChannel',
      image: '/lovable-uploads/1425a293-0239-4d86-bd4e-25668b519bdb.png',
      category: 'Earthing'
    },
    // 8th - Copper Super DPC Wire
    {
      titleKey: 'copperSuperDPCWire',
      image: '/lovable-uploads/9cae85a2-c8cd-405e-8569-0c07ca4831bd.png',
      category: 'Wires'
    },
    // 9th - Aluminium Super DPC Wire
    {
      titleKey: 'aluminumSuperDPCWire',
      image: '/lovable-uploads/e0bdfb8f-30e7-4630-affa-b5ed7f34ddc8.png',
      category: 'Wires'
    },
    // 10th - All Types Cables & Lugs
    {
      titleKey: 'allTypesCablesLugs',
      image: '/lovable-uploads/047727b6-cdf0-4633-84f1-f2ef0db9f939.png',
      category: 'Cables & Accessories'
    },
    // 11th - Transformer Oil
    {
      titleKey: 'transformerOil',
      image: '/lovable-uploads/88de6e4c-2957-4d1d-811a-ce243a3f5c7b.png',
      category: 'Oil & Materials'
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-200/30 rounded-full mix-blend-multiply animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply animate-float animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProductsHeader />
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default Products;
