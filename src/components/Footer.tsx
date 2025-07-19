"use client";

import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center glow relative">
              <div className="absolute inset-0 rounded-lg border border-cyan-400/30 animate-pulse" />
              <Brain className="w-6 h-6 text-white relative z-10" />
            </div>
            <span className="text-2xl font-bold gradient-text glow-text">NexTech</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 NexTech. Tüm hakları saklıdır. | Geleceğin teknolojileri
          </div>
        </div>
      </div>
    </footer>
  );
} 