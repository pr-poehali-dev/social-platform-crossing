
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import SocialGrid from '@/components/SocialGrid';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'СоцМост - Ваш путь к любимым платформам';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F7]">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Все ваши любимые платформы <br /> 
            <span className="text-[#9b87f5]">в одном месте</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Быстрые ссылки на популярные социальные сети и стриминговые сервисы.
            Находите и переходите одним кликом.
          </p>
        </div>
        <SocialGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
