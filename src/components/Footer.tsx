import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/soccerlogo.jpeg" alt="LASUSTECH ALL STARS FOOTBALL CLUB Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">LASUSTECH ALL STARS</h3>
                <p className="text-sm text-gray-400">One Love, Never Tired....</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A community of ex-professional footballers united by passion, brotherhood, and the love of the beautiful game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('players')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Our Players
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('training')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Training Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('membership')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Lagos State University of Science and Technology, Ikorodu
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+234" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@lasustechallstars.com" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                  info@lasustechallstars.com
                </a>
              </li>
            </ul>
          </div>

          {/* Training & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Training Schedule</h3>
            <p className="text-gray-400 text-sm mb-4">
              <strong className="text-white">Every Saturday</strong><br />
              4:00 PM - 6:00 PM
            </p>
            <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider with Quote */}
        <div className="border-t border-gray-800 mt-8 pt-8 mb-8 text-center">
          <p className="text-sm text-gray-400 italic">
            "Once a footballer, always a footballer. The passion never dies, it just finds new ways to shine."
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the beautiful game</span>
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LASUSTECH ALL STARS FOOTBALL CLUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
