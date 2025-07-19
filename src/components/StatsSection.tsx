"use client";

import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  TrendingUp,
  Star
} from 'lucide-react';

interface StatsSectionProps {
  isClient: boolean;
}

export default function StatsSection({ isClient }: StatsSectionProps) {
  // Don't render until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Stats Video Background */}
      <div className="absolute inset-0 z-0">
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
            const fallback = target.parentElement?.querySelector('.stats-fallback');
            if (fallback) {
              (fallback as HTMLElement).style.display = 'block';
            }
          }}
        >
          <source src="/videos/space.mp4" type="video/mp4" />
          <source src="/videos/space.webm" type="video/webm" />
        </video>
        
        {/* Stats Fallback Background */}
        <div className="stats-fallback absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20" style={{ display: 'none' }}>
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Subtle Matrix Rain Effect */}
        <div className="absolute inset-0 matrix-rain opacity-10" />
        
        {/* Minimal Energy Beams */}
        <div className="absolute top-1/4 left-1/4 w-0.5 h-20 bg-gradient-to-t from-cyan-400 to-transparent opacity-40 animate-pulse" 
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
            <TrendingUp className="w-8 h-8 text-white relative z-10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Başarılarımız
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Sayılarla kanıtlanmış başarılarımız ve güvenilirliğimiz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Users, number: "500+", label: "Mutlu Müşteri", color: "from-blue-500 to-cyan-500" },
            { icon: Award, number: "50+", label: "Ödül", color: "from-purple-500 to-pink-500" },
            { icon: TrendingUp, number: "99%", label: "Başarı Oranı", color: "from-green-500 to-emerald-500" },
            { icon: Star, number: "24/7", label: "Destek", color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 glow group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 