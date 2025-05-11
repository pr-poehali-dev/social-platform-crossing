
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-black text-white border-b border-purple-900/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="animate-pulse w-8 h-8 rounded-full bg-purple-600"></div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">СоцМост</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Главная
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-400">
            О проекте
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Контакты
          </Button>
        </nav>
        
        <Button variant="outline" className="md:hidden border-purple-700 text-purple-400" size="icon">
          <Icon name="Menu" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
