"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  Rocket,
  Code,
  Database,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function HizmetlerPage() {
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

  const services = [
    {
      icon: Brain,
      title: "Yapay Zeka & Machine Learning",
      description: "Gelişmiş AI algoritmaları ile iş süreçlerinizi otomatikleştirin ve veri analizi yapın",
      features: [
        "Özel AI model geliştirme",
        "Veri analizi ve görselleştirme",
        "Doğal dil işleme",
        "Görüntü ve ses tanıma",
        "Tahminsel analitik",
        "Chatbot ve sanal asistanlar"
      ],
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Cpu,
      title: "Blockchain Teknolojileri",
      description: "Güvenli ve şeffaf blockchain çözümleri ile işinizi geleceğe taşıyın",
      features: [
        "Akıllı kontrat geliştirme",
        "DeFi uygulamaları",
        "NFT platformları",
        "Kripto para cüzdanları",
        "Supply chain takibi",
        "Dijital kimlik çözümleri"
      ],
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Globe,
      title: "IoT Çözümleri",
      description: "Nesnelerin interneti ile veri toplama ve analiz süreçlerinizi optimize edin",
      features: [
        "IoT sensör entegrasyonu",
        "Gerçek zamanlı veri toplama",
        "Akıllı ev sistemleri",
        "Endüstriyel IoT",
        "Veri analizi ve raporlama",
        "Uzaktan izleme sistemleri"
      ],
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Gelişmiş güvenlik çözümleri ile verilerinizi ve sistemlerinizi koruyun",
      features: [
        "Penetrasyon testleri",
        "Güvenlik denetimleri",
        "Tehdit analizi",
        "Güvenlik duvarı yapılandırması",
        "Şifreleme çözümleri",
        "Güvenlik eğitimleri"
      ],
      color: "from-red-500 to-orange-500",
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: Zap,
      title: "Cloud Computing",
      description: "Ölçeklenebilir cloud çözümleri ile maliyetlerinizi düşürün ve performansı artırın",
      features: [
        "AWS/Azure/GCP entegrasyonu",
        "Mikroservis mimarisi",
        "Container orchestration",
        "Serverless computing",
        "Auto-scaling çözümleri",
        "Cloud migration"
      ],
      color: "from-yellow-500 to-orange-500",
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: Rocket,
      title: "Dijital Dönüşüm",
      description: "İşinizi dijital dünyaya taşıyın ve verimliliğinizi artırın",
      features: [
        "Süreç otomasyonu",
        "Dijital strateji danışmanlığı",
        "Legacy sistem modernizasyonu",
        "Çalışan eğitimleri",
        "Değişim yönetimi",
        "Performans optimizasyonu"
      ],
      color: "from-indigo-500 to-purple-500",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: Code,
      title: "Yazılım Geliştirme",
      description: "Modern teknolojiler ile özel yazılım çözümleri geliştirin",
      features: [
        "Web uygulama geliştirme",
        "Mobil uygulama geliştirme",
        "API geliştirme",
        "DevOps süreçleri",
        "Test otomasyonu",
        "Sürekli entegrasyon"
      ],
      color: "from-teal-500 to-cyan-500",
      gradient: "from-teal-500/10 to-cyan-500/10"
    },
    {
      icon: Database,
      title: "Veri Yönetimi",
      description: "Büyük veri analizi ve veri yönetimi çözümleri ile kararlarınızı veri odaklı alın",
      features: [
        "Veri analizi ve mining",
        "Business Intelligence",
        "Veri warehouse tasarımı",
        "ETL süreçleri",
        "Veri kalitesi yönetimi",
        "Veri görselleştirme"
      ],
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-500/10 to-rose-500/10"
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Analiz & Planlama",
      description: "İhtiyaçlarınızı analiz eder ve en uygun çözümü planlarız"
    },
    {
      icon: Code,
      title: "Geliştirme",
      description: "Modern teknolojiler ile çözümünüzü geliştiririz"
    },
    {
      icon: CheckCircle,
      title: "Test & Kalite",
      description: "Kapsamlı testler ile kaliteyi garanti ederiz"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Çözümünüzü güvenli bir şekilde canlıya alırız"
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
              <Zap className="w-10 h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HİZMETLERİMİZ
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            En son teknolojiler ile işinizi büyütün ve rekabette öne geçin. 
            Uzman ekibimiz ile size özel çözümler geliştiriyoruz.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60">
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400">
                    <span>Detayları Gör</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  {/* Simple Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
                Çalışma Sürecimiz
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Projelerinizi başarıyla tamamlamak için izlediğimiz adımlar
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
              
              <div className="grid grid-cols-4 gap-8 relative">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    {/* Timeline Dot */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto glow group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-black">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300 border-2 border-black">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-400" />
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
                Projenizi Başlatalım
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Hangi hizmetimiz hakkında daha fazla bilgi almak istiyorsunuz? 
              Uzman ekibimiz size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-base hover:scale-105 transition-all duration-300 glow relative overflow-hidden group">
                <span className="relative z-10">İLETİŞİME GEÇİN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-200 font-semibold text-base hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                ÜCRETSİZ DANIŞMANLIK
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 