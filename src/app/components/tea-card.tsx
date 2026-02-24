import React from 'react';
import { motion } from 'motion/react';
import { Clock, Thermometer, CheckCircle2 } from 'lucide-react';
import { Tea } from '../data/teas';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeaCardProps {
  tea: Tea;
  onRefresh?: () => void;
}

export const TeaCard: React.FC<TeaCardProps> = ({ tea, onRefresh }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-[#E2E8E2]"
    >
      <div className="relative h-64">
        <ImageWithFallback 
          src={tea.imageUrl} 
          alt={tea.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#4A783E] font-bold text-sm shadow-sm">
          Best Match
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-3xl font-serif text-[#2D4A22] mb-2">{tea.name}</h3>
          <p className="text-[#5C715E] leading-relaxed">{tea.description}</p>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-[#F4F9F4]">
          <div className="flex items-center space-x-2 text-[#5C715E]">
            <Clock className="w-5 h-5 text-[#4A783E]" />
            <span className="text-sm font-medium">{tea.steepTime}</span>
          </div>
          <div className="flex items-center space-x-2 text-[#5C715E]">
            <Thermometer className="w-5 h-5 text-[#4A783E]" />
            <span className="text-sm font-medium">{tea.temperature}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-[#2D4A22] text-sm uppercase tracking-wider">Key Benefits</h4>
          <div className="grid grid-cols-1 gap-2">
            {tea.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-[#5C715E]">
                <CheckCircle2 className="w-4 h-4 text-[#4A783E]" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onRefresh}
          className="w-full bg-[#4A783E] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#3D6333] transition-colors shadow-lg shadow-[#4A783E]/20"
        >
          Start Brewing Guide
        </button>
      </div>
    </motion.div>
  );
};
