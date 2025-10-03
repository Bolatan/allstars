import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/soccerlogo.jpeg" alt="LASUSTECH ALL STARS FOOTBALL CLUB Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">LASUSTECH ALL STARS FOOTBALL CLUB</h1>
              <p className="text-xs text-gray-600">Ex-Footballers United</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('players')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Players
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Join Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('players')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                Players
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('membership')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                Join Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}