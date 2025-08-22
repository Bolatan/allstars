import React from 'react';
import { Users, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Description */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-green-600 rounded-full p-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ikorodu All-Stars FC</h3>
                <p className="text-sm text-gray-400">Ex-Footballers United</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end space-x-2 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>for the beautiful game</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                © 2025 Ikorodu All-Stars FC. All rights reserved.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              "Once a footballer, always a footballer. The passion never dies, it just finds new ways to shine."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}