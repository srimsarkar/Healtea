import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface SignupFormProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSignup, onSwitchToLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#2D4A22] mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C715E] w-5 h-5" />
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8E2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A783E] transition-all"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D4A22] mb-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C715E] w-5 h-5" />
            <input 
              type="email" 
              placeholder="hello@example.com"
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8E2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A783E] transition-all"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D4A22] mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C715E] w-5 h-5" />
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8E2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A783E] transition-all"
              required
            />
          </div>
        </div>
      </div>

      <p className="text-xs text-[#5C715E]">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>

      <button 
        type="submit"
        className="w-full bg-[#4A783E] text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#3D6333] transition-colors"
      >
        <span>Create Account</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-center text-[#5C715E]">
        Already have an account?{' '}
        <button 
          type="button" 
          onClick={onSwitchToLogin}
          className="text-[#4A783E] font-semibold hover:underline"
        >
          Sign in
        </button>
      </p>
    </form>
  );
};
