import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, Share2, Heart } from 'lucide-react';
import { Tea, TEAS } from '../data/teas';
import { TeaCard } from './tea-card';

interface RecommendationViewProps {
  answers: Record<string, string>;
  onReset: () => void;
}

export const RecommendationView: React.FC<RecommendationViewProps> = ({ answers, onReset }) => {
  // Simple matching logic
  const recommendedTea = React.useMemo(() => {
    const mood = answers.mood;
    const health = answers.health;
    
    // Find tea that matches either mood or health
    const match = TEAS.find(tea => 
      tea.moods.includes(mood) || tea.healthGoals.includes(health)
    );
    
    return match || TEAS[0]; // Fallback
  }, [answers]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-serif text-[#2D4A22] mb-4">Your Perfect Blend</h2>
        <p className="text-[#5C715E] max-w-md mx-auto">
          Based on your feelings and goals today, we've selected a tea that will help you find balance.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="flex-1 w-full">
          <TeaCard tea={recommendedTea} onRefresh={() => {}} />
        </div>

        <div className="lg:w-80 space-y-6">
          <div className="bg-[#F4F9F4] p-6 rounded-3xl border border-[#E2E8E2]">
            <h4 className="font-serif text-[#2D4A22] text-xl mb-4">Why this tea?</h4>
            <p className="text-[#5C715E] text-sm leading-relaxed">
              We noticed you're feeling <span className="font-bold text-[#4A783E]">{answers.mood}</span> and focusing on <span className="font-bold text-[#4A783E]">{answers.health}</span>. 
              {recommendedTea.name} is specifically chosen for its properties that address these needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={onReset}
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-2xl border-2 border-[#E2E8E2] text-[#5C715E] font-semibold hover:bg-white transition-all"
            >
              <RefreshCcw className="w-5 h-5" />
              <span>Retake Quiz</span>
            </button>
            <button className="flex items-center justify-center space-x-3 w-full py-4 rounded-2xl border-2 border-[#E2E8E2] text-[#5C715E] font-semibold hover:bg-white transition-all">
              <Heart className="w-5 h-5" />
              <span>Save to Favorites</span>
            </button>
            <button className="flex items-center justify-center space-x-3 w-full py-4 rounded-2xl border-2 border-[#E2E8E2] text-[#5C715E] font-semibold hover:bg-white transition-all">
              <Share2 className="w-5 h-5" />
              <span>Share Result</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
