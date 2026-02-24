import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToSignup }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="rounded text-[#4A783E]" />
          <span className="text-[#5C715E]">Remember me</span>
        </label>
        <button type="button" className="text-[#4A783E] font-medium hover:underline">Forgot password?</button>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#4A783E] text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#3D6333] transition-colors"
      >
        <span>Sign In</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-center text-[#5C715E]">
        Don't have an account?{' '}
        <button 
          type="button" 
          onClick={onSwitchToSignup}
          className="text-[#4A783E] font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};
