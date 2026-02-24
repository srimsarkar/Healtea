import React from 'react';
import { motion } from 'motion/react';
import logo from "@/assets/2548ae670d7de9a8ce4eabec95832ec350c86862.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FDFCFB]">
      {/* Left side: Branding/Image */}
      <div className="hidden md:flex md:w-1/2 bg-[#F4F9F4] items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-center"
        >
          <ImageWithFallback
            src={logo}
            alt="Healtea Logo"
            className="w-64 h-auto mx-auto mb-8"
          />
          <h1 className="text-4xl font-serif text-[#2D4A22] mb-4">Brewing Wellness Daily</h1>
          <p className="text-lg text-[#5C715E]">
            Discover the perfect tea for your current state of mind and health.
            Join our community of tea enthusiasts today.
          </p>
        </motion.div>
      </div>

      {/* Right side: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden text-center mb-8">
            <ImageWithFallback
              src={logo}
              alt="Healtea Logo"
              className="w-32 h-auto mx-auto mb-4"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-serif text-[#2D4A22] mb-2">{title}</h2>
            <p className="text-[#5C715E]">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
