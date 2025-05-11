
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-white py-8 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">СоцМост</h2>
            <p className="text-sm text-gray-400">Ваш быстрый доступ к любимым платформам</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Mail" />
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Github" />
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Twitter" />
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} СоцМост. Все права защищены.</p>
          <p className="mt-2">
            Разработано с <span className="text-[#9b87f5]">♥</span> командой Поехали!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
