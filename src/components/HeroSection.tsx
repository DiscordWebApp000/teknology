"use client";

import { motion } from 'framer-motion';
import { Rocket, Play, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  isClient: boolean;
}

export default function HeroSection({ isClient }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.4) contrast(1.2) saturate(1.5)',
            }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.hero-fallback');
              if (fallback) {
                (fallback as HTMLElement).style.display = 'block';
              }
            }}
          >
            <source src="/videos/tech-background.mp4" type="video/mp4" />
            <source src="/videos/space.webm" type="video/webm" />
          </video>
        )}
        
        {/* Fallback Background */}
        <div className="hero-fallback absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20" style={{ display: isClient ? 'none' : 'block' }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Minimal Glowing Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" 
               style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-50" 
               style={{ animationDelay: '1s', animationDuration: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-30" 
               style={{ animationDelay: '2s', animationDuration: '4s' }} />
        </div>
      </div>
      
      {/* Hero Content - Simplified and Clean */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rocket Icon - Smaller and Cleaner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center glow relative">
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '3s' }} />
            <Rocket className="w-10 h-10 text-white relative z-10" />
          </div>
        </motion.div>

        {/* Main Headline - Smaller and Cleaner */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            GELECEĞİN TEKNOLOJİSİ
          </span>
        </motion.h1>

        {/* Subtitle - Smaller and Cleaner */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Yapay zeka, blockchain ve IoT teknolojileri ile işinizi geleceğe taşıyoruz
        </motion.p>

        {/* Call to Action Buttons - Smaller and Cleaner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-base hover:scale-105 transition-all duration-300 glow relative overflow-hidden group">
            <span className="relative z-10">PROJEYİ BAŞLAT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-200 font-semibold text-base hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-2 group">
            <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-2.5 h-2.5 text-black" />
            </div>
            <span>DEMO İZLE</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
} 