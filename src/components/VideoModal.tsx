"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  selectedVideo: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, selectedVideo, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_50px_rgba(0,255,255,0.3)]">
              <iframe
                src={selectedVideo}
                title="YouTube Video"
                className="w-full h-full rounded-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-red-500/90 backdrop-blur-sm rounded-full hover:bg-red-600 transition-colors duration-200 z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 