"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', company: '', message: '' });
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

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "info@nextech.com",
      description: "Genel sorularınız için",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (212) 555 0123",
      description: "Acil durumlar için",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "İstanbul, Türkiye",
      description: "Ana ofisimiz",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cuma",
      description: "09:00 - 18:00",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Yapay Zeka Projeleri",
      description: "AI ve ML çözümleri için danışmanlık",
      icon: MessageSquare
    },
    {
      title: "Blockchain Geliştirme",
      description: "Smart contract ve DeFi projeleri",
      icon: Globe
    },
    {
      title: "IoT Çözümleri",
      description: "Nesnelerin interneti projeleri",
      icon: Send
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
              <MessageSquare className="w-10 h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              İLETİŞİM
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Projeleriniz hakkında konuşalım. Uzman ekibimiz size yardımcı olmaya hazır.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
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
                İletişim Bilgileri
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Bizimle iletişime geçin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color.replace('500', '500/10')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {info.value}
                  </p>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {info.description}
                  </p>
                  
                  {/* Simple Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Services Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-cyan-200 transition-colors duration-300">
                  Mesaj Gönderin
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Şirket adınız (opsiyonel)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında bilgi verin..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400"
                  >
                    <span>Mesaj Gönder</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Hizmet Alanlarımız
                </span>
              </h3>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Subtle Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                    
                    {/* Main Card */}
                    <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/50">
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                            {service.title}
                          </h4>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/30">
                <h4 className="text-xl font-bold text-white mb-3">Hızlı Yanıt Garantisi</h4>
                <p className="text-gray-300 mb-4">
                  Mesajınızı aldıktan sonra 24 saat içinde size dönüş yapıyoruz.
                </p>
                <div className="flex items-center text-cyan-400">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">24 Saat İçinde Yanıt</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ofisimizi Ziyaret Edin
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              İstanbuldaki ofisimizde sizi ağırlamaktan mutluluk duyarız
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Map Card */}
            <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-cyan-400/30">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold mb-2">İstanbul, Türkiye</p>
                  <p className="text-gray-300">Harita yükleniyor...</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-cyan-400 font-semibold">Adres</p>
                  <p className="text-gray-300 text-sm">Levent, İstanbul</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold">Telefon</p>
                  <p className="text-gray-300 text-sm">+90 (212) 555 0123</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold">E-posta</p>
                  <p className="text-gray-300 text-sm">info@nextech.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 