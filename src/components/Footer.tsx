
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-8 px-4 mt-auto border-t border-purple-900/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">СоцМост</h2>
            <p className="text-sm text-gray-400">Ваш быстрый доступ к любимым платформам</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Icon name="Mail" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Icon name="Github" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Icon name="Twitter" />
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-purple-900/30" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} СоцМост. Все права защищены.</p>
          <p className="mt-2">
            Разработано с <span className="text-purple-500">♥</span> командой Поехали!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
