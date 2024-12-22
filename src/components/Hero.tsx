import React from 'react';
import { BookOpen, Star, Award, Sparkles } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function Hero() {
  return (
    <header className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4 overflow-hidden">
      <StarryBackground />
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to the Magical World of
          <span className="block text-yellow-300 mt-2">Aswath Krishna</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Creating enchanting stories that spark imagination and inspire young minds
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <StatsCard icon={<BookOpen className="w-8 h-8" />} label="20+ Books" />
          <StatsCard icon={<Star className="w-8 h-8" />} label="Award Winning" />
          <StatsCard icon={<Award className="w-8 h-8" />} label="Best Seller" />
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
          Explore Books
        </button>
      </div>
    </header>
  );
}

function StatsCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
      <div className="text-yellow-300 mr-3">{icon}</div>
      <span className="text-white font-medium">{label}</span>
    </div>
  );
}