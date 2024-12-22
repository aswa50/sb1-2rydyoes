import React from 'react';
import { Home, User, ShoppingCart, Heart } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navbar({ currentLanguage, onLanguageChange }: Props) {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <div className="flex items-center space-x-6">
        <NavItem icon={<Home size={16} />} />
        <NavItem icon={<User size={16} />} />
        <NavItem icon={<ShoppingCart size={16} />} />
        <NavItem icon={<Heart size={16} />} />
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </nav>
  );
}

function NavItem({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
      {icon}
    </button>
  );
}