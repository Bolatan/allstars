import React from 'react';
import { Play, Star, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/stuu-110.JPG')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold text-yellow-400">ALL-STAR FOOTBALL CLUB</span>
            <Star className="h-6 w-6 text-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">

            <span className="text-2xl md:text-4xl">LASUSTECH</span>
            <span className="block text-green-400 text-2xl md:text-4xl">ALL STARS FOOTBALL CLUB</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Where legends reunite. A community of ex-professional footballers keeping the passion alive through 
            weekly training sessions and brotherhood.
          </p>

          <div className="flex items-center justify-center space-x-2 mb-10 text-lg">
            <MapPin className="h-5 w-5 text-green-400" />
            <span>Training every Saturday at Lagos State University of Science and Technology, Ikorodu</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('membership')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join the Squad
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}