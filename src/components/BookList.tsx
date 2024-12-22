import React from 'react';
import { Book } from '../types';
import { ExternalLink } from 'lucide-react';

interface Props {
  books: Book[];
  category: string;
}

export function BookList({ books, category }: Props) {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-yellow-300">{book.title}</h3>
                <ExternalLink className="w-5 h-5 text-yellow-300" />
              </div>
              <p className="text-purple-100 text-sm mb-2">{book.description}</p>
              <span className="inline-block bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full border border-purple-400/30">
                Ages {book.ageRange}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}