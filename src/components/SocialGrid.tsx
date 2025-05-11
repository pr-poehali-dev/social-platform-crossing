
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
  color: string;
  description: string;
}

const platforms: SocialPlatform[] = [
  {
    name: 'TikTok',
    icon: 'Video',
    url: 'https://www.tiktok.com/',
    color: '#000000',
    description: 'Короткие вертикальные видео с музыкой и эффектами'
  },
  {
    name: 'Telegram',
    icon: 'Send',
    url: 'https://telegram.org/',
    color: '#0088cc',
    description: 'Мессенджер с каналами, ботами и групповыми чатами'
  },
  {
    name: 'YouTube',
    icon: 'Youtube',
    url: 'https://www.youtube.com/',
    color: '#FF0000',
    description: 'Крупнейший видеохостинг для любого контента'
  },
  {
    name: 'Twitch',
    icon: 'Twitch',
    url: 'https://www.twitch.tv/',
    color: '#6441a5',
    description: 'Стриминговая платформа для геймеров и не только'
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://www.instagram.com/',
    color: '#E1306C',
    description: 'Фото, видео, сторис и рилс для визуального контента'
  },
  {
    name: 'VK',
    icon: 'MessageCircle',
    url: 'https://vk.com/',
    color: '#4C75A3',
    description: 'Российская социальная сеть с музыкой и сообществами'
  }
];

const SocialGrid = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Выберите платформу</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={platform.name}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <Card className="overflow-hidden border-2 hover:border-[#9b87f5] h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${platform.color}20` }}
                >
                  <Icon 
                    name={platform.icon} 
                    size={32} 
                    className="text-white"
                    style={{ color: platform.color }} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-500 text-center">{platform.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialGrid;
