"use client";

import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Play 
} from 'lucide-react';

interface TechnologyDemosSectionProps {
  isClient: boolean;
  openModal: (videoUrl: string) => void;
}

export default function TechnologyDemosSection({ isClient, openModal }: TechnologyDemosSectionProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // YouTube video URLs for each demo (embed format)
  const demoVideos = [
    "https://www.youtube.com/embed/QJn28fFKUR0", // Blockchain demo
    "https://www.youtube.com/embed/ukzFI9rgwfU", // AI & ML demo
    "https://www.youtube.com/embed/40NoBOu_sjg"  // IoT demo
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Tech Demos Video Background */}
      <div className="absolute inset-0 z-0">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.3) contrast(1.2) saturate(1.3)',
            }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.tech-demos-fallback');
              if (fallback) {
                (fallback as HTMLElement).style.display = 'block';
              }
            }}
          >
            <source src="/videos/threed.mp4" type="video/mp4" />
            <source src="/videos/space.webm" type="video/webm" />
          </video>
        )}
        
        {/* Tech Demos Fallback Background */}
        <div className="tech-demos-fallback absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20" style={{ display: isClient ? 'none' : 'block' }}>
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Subtle Matrix Rain Effect */}
        <div className="absolute inset-0 matrix-rain opacity-10" />
        
        {/* Minimal Energy Beams */}
        <div className="absolute top-1/3 left-1/4 w-0.5 h-20 bg-gradient-to-t from-cyan-400 to-transparent opacity-40 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-16 bg-gradient-to-t from-blue-400 to-transparent opacity-40 animate-pulse" 
             style={{ animationDuration: '3s', animationDelay: '2s' }} />
        
        {/* Subtle Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30" 
               style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-25" 
               style={{ animationDelay: '2s', animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-20" 
               style={{ animationDelay: '1s', animationDuration: '5s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center glow relative"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping" style={{ animationDuration: '3s' }} />
            <Cpu className="w-8 h-8 text-white relative z-10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Teknoloji Demoları
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            En son teknolojilerimizi keşfedin ve geleceğin nasıl göründüğünü deneyimleyin
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Blockchain Technology",
              description: "Güvenli blockchain altyapımızı inceleyin",
              icon: Cpu,
              color: "from-purple-500 to-pink-500",
              gradient: "from-purple-500/10 to-pink-500/10"
            },
            {
              title: "AI & Machine Learning",
              description: "Yapay zeka ve makine öğrenmesi çözümlerimizi keşfedin",
              icon: Brain,
              color: "from-blue-500 to-cyan-500",
              gradient: "from-blue-500/10 to-cyan-500/10"
            },
            {
              title: "IoT Solutions",
              description: "Nesnelerin interneti çözümlerimizi görün",
              icon: Globe,
              color: "from-green-500 to-emerald-500",
              gradient: "from-green-500/10 to-emerald-500/10"
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${demo.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:bg-black/60">
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">{demo.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{demo.description}</p>
                
                {/* Simple Play Button */}
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => openModal(demoVideos[index])} 
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group-hover:scale-110"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
                
                {/* Simple Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 