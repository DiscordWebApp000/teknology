"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users,
  Target,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>
      </div>
    );
  }

  const values = [
    {
      icon: Target,
      title: "İnovasyon",
      description: "Sürekli öğrenme ve gelişim ile geleceğin teknolojilerini bugünden geliştiriyoruz",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin başarısı bizim başarımızdır. Her projede mükemmellik hedefliyoruz",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Global Vizyon",
      description: "Dünya çapında teknoloji trendlerini takip ediyor ve global standartlarda çözümler üretiyoruz",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Hız ve Verimlilik",
      description: "Hızlı geliştirme ve verimli çözümler ile müşterilerimizin rekabette öne geçmesini sağlıyoruz",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const team = [
    {
      name: "Ahmet Yılmaz",
      position: "CEO & Kurucu",
      description: "10+ yıl teknoloji sektörü deneyimi",
      expertise: ["Strateji", "Yönetim", "İnovasyon"]
    },
    {
      name: "Ayşe Demir",
      position: "CTO",
      description: "AI ve Blockchain uzmanı",
      expertise: ["Yapay Zeka", "Blockchain", "Mimari"]
    },
    {
      name: "Mehmet Kaya",
      position: "Baş Geliştirici",
      description: "Full-stack geliştirme uzmanı",
      expertise: ["React", "Node.js", "Cloud"]
    },
    {
      name: "Fatma Özkan",
      position: "UX/UI Tasarımcı",
      description: "Kullanıcı deneyimi uzmanı",
      expertise: ["UI/UX", "Prototyping", "Research"]
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Şirket Kuruluşu",
      description: "NexTech'in temelleri atıldı"
    },
    {
      year: "2021",
      title: "İlk Başarılı Proje",
      description: "50+ müşteriye hizmet verildi"
    },
    {
      year: "2022",
      title: "AI Laboratuvarı",
      description: "Yapay zeka çözümleri geliştirildi"
    },
    {
      year: "2023",
      title: "Blockchain Platformu",
      description: "DeFi çözümleri piyasaya sürüldü"
    },
    {
      year: "2024",
      title: "Global Genişleme",
      description: "500+ mutlu müşteri"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            >
              <source src="/videos/tech-background.mp4" type="video/mp4" />
            </video>
          )}
          
          {/* Fallback Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }} />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center glow relative">
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '3s' }} />
              <Users className="w-10 h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HAKKIMIZDA
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Geleceğin teknolojilerini bugünden geliştiren, inovasyon odaklı bir ekibiz. 
            Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir partneriniz.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
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
          >
            <source src="/videos/space.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Değerlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Çalışma prensiplerimizi ve değerlerimizi keşfedin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color.replace('500', '500/10')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Simple Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
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
          >
            <source src="/videos/threed.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ekibimiz
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Uzman ekibimizle tanışın
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto glow group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300 text-center">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3 text-center">
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 text-center group-hover:text-gray-200 transition-colors duration-300">
                    {member.description}
                  </p>
                  
                  {/* Expertise */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Simple Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Yolculuğumuz
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Başarılarımızın hikayesi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              {/* Main Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex items-center"
                  >
                    {/* Left Content */}
                    {index % 2 === 0 ? (
                      <div className="w-1/2 pr-8 text-right">
                        <div className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                          <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/2" />
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full glow relative z-10 border-2 border-black" />
                    </div>
                    
                    {/* Right Content */}
                    {index % 2 === 1 ? (
                      <div className="w-1/2 pl-8 text-left">
                        <div className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                          <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Timeline Dot */}
                    <div className="flex justify-center mb-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full glow relative z-10 border border-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                          <div className="text-3xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 mt-4" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-blue-900/20" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ekibimize Katılın
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Geleceğin teknolojilerini birlikte geliştirelim. 
              Kariyer fırsatlarımızı keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-base hover:scale-105 transition-all duration-300 glow relative overflow-hidden group">
                <span className="relative z-10">KARİYER FIRSATLARI</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-200 font-semibold text-base hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                İLETİŞİME GEÇİN
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 