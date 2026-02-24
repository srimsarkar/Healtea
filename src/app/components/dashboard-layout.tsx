import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Search,
  Heart,
  History,
  User,
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';
import logo from "@/assets/2548ae670d7de9a8ce4eabec95832ec350c86862.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  onNavigate: (page: string) => void;
  activePage: string;
  userName?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onLogout,
  onNavigate,
  activePage,
  userName = "Tea Lover"
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: Search, label: 'Explore Teas', id: 'explore' },
    { icon: Heart, label: 'Favorites', id: 'favorites' },
    { icon: History, label: 'History', id: 'history' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-[#E2E8E2] flex-col">
        <div className="p-6">
          <ImageWithFallback src={logo} alt="Healtea" className="w-32 h-auto" />
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activePage === item.id
                ? 'bg-[#4A783E] text-white'
                : 'text-[#5C715E] hover:bg-[#F4F9F4] hover:text-[#4A783E]'
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#E2E8E2]">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-[#E2E8E2] flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#5C715E]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <ImageWithFallback src={logo} alt="Healtea" className="w-24 h-auto ml-2" />
          </div>

          <div className="hidden lg:block">
            <h2 className="text-xl font-serif text-[#2D4A22]">Welcome back, {userName}</h2>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#5C715E] bg-[#F4F9F4] rounded-full hover:bg-[#E2E8E2] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-[#4A783E] flex items-center justify-center text-white font-semibold">
              {userName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="absolute top-0 left-0 bottom-0 w-64 bg-white flex flex-col"
          >
            <div className="p-6 flex items-center justify-between">
              <ImageWithFallback src={logo} alt="Healtea" className="w-32 h-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-[#5C715E]" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activePage === item.id
                    ? 'bg-[#4A783E] text-white'
                    : 'text-[#5C715E] hover:bg-[#F4F9F4] hover:text-[#4A783E]'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-[#E2E8E2]">
              <button
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
