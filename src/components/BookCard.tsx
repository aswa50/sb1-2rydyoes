import React from 'react';
import { BookOpen } from 'lucide-react';

interface BookProps {
  title: string;
  coverImage: string;
  description: string;
  ageRange: string;
}

export function BookCard({ title, coverImage, description, ageRange }: BookProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-yellow-300">{title}</h3>
          <BookOpen className="w-5 h-5 text-yellow-300" />
        </div>
        <span className="inline-block bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full mb-3 border border-purple-400/30">
          Ages {ageRange}
        </span>
        <p className="text-purple-100 leading-relaxed">{description}</p>
        <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
}