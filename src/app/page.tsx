"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechnologyDemosSection from '@/components/TechnologyDemosSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      <HeroSection isClient={isClient} />
      <ServicesSection isClient={isClient} />
      <TechnologyDemosSection isClient={isClient} openModal={openModal} />
      <StatsSection isClient={isClient} />
      <Footer />
      
      <VideoModal 
        isOpen={isModalOpen}
        selectedVideo={selectedVideo}
        onClose={closeModal}
      />
    </div>
  );
}
