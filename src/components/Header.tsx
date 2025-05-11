
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-[#1A1F2C] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="animate-pulse w-8 h-8 rounded-full bg-[#9b87f5]"></div>
          <h1 className="text-xl md:text-2xl font-bold">СоцМост</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
            Главная
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
            О проекте
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
            Контакты
          </Button>
        </nav>
        
        <Button variant="outline" className="md:hidden" size="icon">
          <Icon name="Menu" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
