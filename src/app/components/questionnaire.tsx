import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface QuestionnaireProps {
  onComplete: (answers: Record<string, string>) => void;
}

const STEPS = [
  {
    id: 'mood',
    question: "How are you feeling right now?",
    options: [
      { id: 'anxious', label: 'Anxious or Stressed', icon: '😰' },
      { id: 'tired', label: 'Tired or Lethargic', icon: '😴' },
      { id: 'focused', label: 'Productive and Focused', icon: '🧠' },
      { id: 'overwhelmed', label: 'Overwhelmed', icon: '🤯' },
      { id: 'refreshed', label: 'Refreshed', icon: '🍃' },
      { id: 'sick', label: 'Under the weather', icon: '🤒' },
    ]
  },
  {
    id: 'health',
    question: "What is your main health goal for this cup?",
    options: [
      { id: 'energy', label: 'Energy Boost', icon: '⚡' },
      { id: 'sleep', label: 'Better Sleep', icon: '🌙' },
      { id: 'digestion', label: 'Improve Digestion', icon: '🥣' },
      { id: 'immunity', label: 'Immunity Support', icon: '🛡️' },
      { id: 'relaxation', label: 'Deep Relaxation', icon: '🧘' },
      { id: 'detox', label: 'Gentle Detox', icon: '✨' },
    ]
  },
  {
    id: 'preference',
    question: "Do you prefer a specific taste profile?",
    options: [
      { id: 'floral', label: 'Floral & Delicate', icon: '🌸' },
      { id: 'earthy', label: 'Earthy & Rich', icon: '🌿' },
      { id: 'spicy', label: 'Spicy & Warming', icon: '🔥' },
      { id: 'minty', label: 'Cool & Minty', icon: '❄️' },
      { id: 'citrus', label: 'Zesty & Citrus', icon: '🍋' },
    ]
  }
];

export const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [STEPS[currentStep].id]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-[#5C715E]">Step {currentStep + 1} of {STEPS.length}</span>
          <span className="text-sm font-medium text-[#4A783E]">{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 bg-[#E2E8E2] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#4A783E]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-serif text-[#2D4A22] mb-2">{STEPS[currentStep].question}</h3>
            <p className="text-[#5C715E]">Select the option that best describes you right now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STEPS[currentStep].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`flex items-center p-6 rounded-2xl border-2 transition-all ${answers[STEPS[currentStep].id] === option.id
                    ? 'border-[#4A783E] bg-[#F4F9F4] text-[#2D4A22]'
                    : 'border-[#E2E8E2] bg-white text-[#5C715E] hover:border-[#4A783E]/50'
                  }`}
              >
                <span className="text-3xl mr-4">{option.icon}</span>
                <span className="font-semibold text-lg flex-1 text-left">{option.label}</span>
                {answers[STEPS[currentStep].id] === option.id && (
                  <Check className="w-6 h-6 text-[#4A783E]" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-colors ${currentStep === 0
              ? 'text-[#E2E8E2] cursor-not-allowed'
              : 'text-[#5C715E] hover:bg-[#F4F9F4]'
            }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <button
          onClick={handleNext}
          disabled={!answers[STEPS[currentStep].id]}
          className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all ${!answers[STEPS[currentStep].id]
              ? 'bg-[#E2E8E2] text-[#A0A0A0] cursor-not-allowed'
              : 'bg-[#4A783E] text-white hover:bg-[#3D6333] shadow-lg shadow-[#4A783E]/20'
            }`}
        >
          <span>{currentStep === STEPS.length - 1 ? 'Find My Tea' : 'Next Step'}</span>
          {currentStep === STEPS.length - 1 ? (
            <Sparkles className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};
