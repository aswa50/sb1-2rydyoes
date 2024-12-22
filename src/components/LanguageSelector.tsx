import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { languages } from '../data/languages';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
      >
        <Languages size={16} />
        <span className="text-sm">{languages.find(l => l.code === currentLanguage)?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}