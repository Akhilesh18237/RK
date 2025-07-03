
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Index component mounted');
    const timer = setTimeout(() => {
      console.log('Loading screen timeout completed');
      setIsLoading(false);
    }, 1000); // Reduced from 2.5s to 1s

    return () => clearTimeout(timer);
  }, []);

  console.log('Index rendering, isLoading:', isLoading);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen w-full">
        <ScrollAnimations />
        <Navigation />
        <main className="w-full">
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
