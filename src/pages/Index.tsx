
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import SocialGrid from '@/components/SocialGrid';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'СоцМост - Ваш путь к любимым платформам';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">
            Все ваши любимые платформы <br /> 
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">в одном месте</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Быстрые ссылки на популярные социальные сети и стриминговые сервисы.
            Находите и переходите одним кликом.
          </p>
          
          <div className="absolute w-full h-64 left-0 top-[20%] opacity-10 pointer-events-none">
            <div className="absolute left-10 top-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
            <div className="absolute right-10 top-20 w-64 h-64 bg-purple-800 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <SocialGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
