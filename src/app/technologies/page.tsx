"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Play,
  Cloud,
  Shield,
  Monitor,
  Smartphone,
  Server,
  BarChart3,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function TeknolojilerPage() {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo('');
  };

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

  const technologyDemos = [
    {
      title: "Blockchain Technology",
      description: "Güvenli blockchain altyapımızı inceleyin ve DeFi çözümlerimizi keşfedin",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/10 to-pink-500/10",
      videoUrl: "https://www.youtube.com/embed/QJn28fFKUR0",
      features: [
        "Akıllı kontrat geliştirme",
        "DeFi protokolleri",
        "NFT marketplace",
        "Kripto cüzdan entegrasyonu"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Yapay zeka ve makine öğrenmesi çözümlerimizi deneyimleyin",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
      videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
      features: [
        "Özel AI model eğitimi",
        "Doğal dil işleme",
        "Görüntü tanıma",
        "Tahminsel analitik"
      ]
    },
    {
      title: "IoT Solutions",
      description: "Nesnelerin interneti çözümlerimizi ve sensör teknolojilerimizi görün",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/10 to-emerald-500/10",
      videoUrl: "https://www.youtube.com/embed/40NoBOu_sjg",
      features: [
        "IoT sensör entegrasyonu",
        "Gerçek zamanlı veri toplama",
        "Akıllı ev sistemleri",
        "Endüstriyel IoT"
      ]
    }
  ];

  const technologies = [
    {
      category: "Frontend Technologies",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "React", description: "Modern UI geliştirme", level: 95 },
        { name: "Next.js", description: "Full-stack React framework", level: 90 },
        { name: "TypeScript", description: "Tip güvenli JavaScript", level: 88 },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", level: 92 },
        { name: "Framer Motion", description: "Animasyon kütüphanesi", level: 85 }
      ]
    },
    {
      category: "Backend Technologies",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Node.js", description: "JavaScript runtime", level: 90 },
        { name: "Python", description: "AI & ML geliştirme", level: 88 },
        { name: "Java", description: "Enterprise uygulamalar", level: 85 },
        { name: "Go", description: "Yüksek performanslı backend", level: 80 },
        { name: "PostgreSQL", description: "İlişkisel veritabanı", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "AWS", description: "Amazon Web Services", level: 88 },
        { name: "Docker", description: "Container teknolojisi", level: 85 },
        { name: "Kubernetes", description: "Container orchestration", level: 80 },
        { name: "Terraform", description: "Infrastructure as Code", level: 82 },
        { name: "Jenkins", description: "CI/CD pipeline", level: 85 }
      ]
    },
    {
      category: "AI & ML",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "TensorFlow", description: "Machine Learning framework", level: 85 },
        { name: "PyTorch", description: "Deep Learning library", level: 80 },
        { name: "OpenAI API", description: "GPT ve DALL-E entegrasyonu", level: 88 },
        { name: "Scikit-learn", description: "Machine Learning tools", level: 85 },
        { name: "Pandas", description: "Veri analizi", level: 90 }
      ]
    },
    {
      category: "Blockchain",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      items: [
        { name: "Ethereum", description: "Smart contract platform", level: 85 },
        { name: "Solidity", description: "Smart contract dili", level: 80 },
        { name: "Web3.js", description: "Blockchain entegrasyonu", level: 85 },
        { name: "IPFS", description: "Dağıtık dosya sistemi", level: 75 },
        { name: "MetaMask", description: "Kripto cüzdan entegrasyonu", level: 80 }
      ]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-teal-500 to-cyan-500",
      items: [
        { name: "React Native", description: "Cross-platform mobile", level: 85 },
        { name: "Flutter", description: "Google'ın UI framework'ü", level: 80 },
        { name: "iOS Development", description: "Swift & SwiftUI", level: 75 },
        { name: "Android Development", description: "Kotlin & Jetpack", level: 75 },
        { name: "PWA", description: "Progressive Web Apps", level: 85 }
      ]
    }
  ];

  const innovationAreas = [
    {
      title: "Yapay Zeka & Otomasyon",
      description: "İş süreçlerinizi AI ile otomatikleştirin",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Süreç verimliliğini %300 artırın",
        "İnsan hatası riskini minimize edin",
        "7/24 çalışan sistemler",
        "Maliyetleri %50 azaltın"
      ]
    },
    {
      title: "Blockchain & Güvenlik",
      description: "Şeffaf ve güvenli iş süreçleri",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Değiştirilemez kayıtlar",
        "Akıllı kontrat otomasyonu",
        "Güvenli kimlik doğrulama",
        "Şeffaf tedarik zinciri"
      ]
    },
    {
      title: "IoT & Veri Analizi",
      description: "Gerçek zamanlı veri toplama ve analiz",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      benefits: [
        "Gerçek zamanlı izleme",
        "Tahminsel bakım",
        "Veri odaklı kararlar",
        "Operasyonel verimlilik"
      ]
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
              <Cpu className="w-10 h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TEKNOLOJİLERİMİZ
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            En son teknolojilerimizi keşfedin ve geleceğin nasıl göründüğünü deneyimleyin. 
            Uzman ekibimiz ile geliştirdiğimiz çözümleri inceleyin.
          </motion.p>
        </div>
      </section>

      {/* Technology Demos Section */}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologyDemos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
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
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">{demo.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Play Button */}
                  <div className="flex justify-center">
                    <button 
                      onClick={() => openModal(demo.videoUrl)} 
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

      {/* Technologies Stack Section */}
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
                Teknoloji Stackimiz
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Kullandığımız modern teknolojiler ve uzmanlık seviyelerimiz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {technologies.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color.replace('500', '500/10')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Technology Items */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group/item">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="text-white font-semibold group-hover/item:text-cyan-200 transition-colors duration-300">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-sm text-cyan-400 font-semibold">
                            {item.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation Areas Section */}
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
                İnovasyon Alanlarımız
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Geleceğin teknolojilerini bugünden geliştiriyoruz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {innovationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color.replace('500', '500/10')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {area.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400">
                    <span>Daha Fazla Bilgi</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  {/* Simple Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
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
                Teknolojimizi Deneyimleyin
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Hangi teknolojimiz hakkında daha fazla bilgi almak istiyorsunuz? 
              Demo videolarımızı izleyin ve uzman ekibimizle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-base hover:scale-105 transition-all duration-300 glow relative overflow-hidden group">
                <span className="relative z-10">DEMO İZLE</span>
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
      
      <VideoModal 
        isOpen={isModalOpen}
        selectedVideo={selectedVideo}
        onClose={closeModal}
      />
    </div>
  );
} 