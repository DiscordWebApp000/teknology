"use client";

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center glow relative">
              <div className="absolute inset-0 rounded-lg border border-cyan-400/30 animate-pulse" />
              <Brain className="w-6 h-6 text-white relative z-10" />
            </div>
            <span className="text-2xl font-bold gradient-text glow-text">NexTech</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            {[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Hizmetler', href: '/services' },
              { name: 'Teknolojiler', href: '/technologies' },
              { name: 'Hakkımızda', href: '/about' },
              { name: 'İletişim', href: '/contact' }
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-cyan-200 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
} 