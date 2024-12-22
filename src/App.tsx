import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BooksSection } from './components/BooksSection';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { StarryBackground } from './components/StarryBackground';
import { getBooks } from './data/books';
import { Language } from './types';
import { useTranslations } from './hooks/useTranslations';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useTranslations(currentLanguage);
  const books = getBooks(currentLanguage);

  if (selectedCategory) {
    const categoryBooks = books[selectedCategory as keyof typeof books] || [];
    return (
      <div className="min-h-screen bg-black relative">
        <StarryBackground />
        <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
        <main className="relative pt-16">
          <BookList 
            books={categoryBooks} 
            category={t(`books.categories.${selectedCategory}`)} 
          />
          <div className="text-center pb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-purple-200 hover:text-white transition-colors"
            >
              {t('navigation.backToHome')}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <StarryBackground />
      <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <main className="relative">
        <Hero translations={t} />
        <BooksSection onCategorySelect={setSelectedCategory} translations={t} books={books} />
      </main>
      <Footer />
    </div>
  );
}

export default App;