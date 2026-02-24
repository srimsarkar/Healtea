import React, { useState } from 'react';
import { AuthLayout } from './components/auth-layout';
import { LoginForm } from './components/login-form';
import { SignupForm } from './components/signup-form';
import { DashboardLayout } from './components/dashboard-layout';
import { Questionnaire } from './components/questionnaire';
import { RecommendationView } from './components/recommendation-view';
import { Toaster, toast } from 'sonner';

type Page = 'login' | 'signup' | 'dashboard' | 'questionnaire' | 'recommendation' | 'explore' | 'favorites' | 'history';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const handleLogin = () => {
    toast.success('Successfully logged in!');
    setCurrentPage('dashboard');
  };

  const handleSignup = () => {
    toast.success('Account created successfully!');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
    toast.info('Logged out');
  };

  const handleQuestionnaireComplete = (answers: Record<string, string>) => {
    setUserAnswers(answers);
    setCurrentPage('recommendation');
    toast.success('Recommendation ready!');
  };

  const wrapInDashboard = (content: React.ReactNode) => (
    <DashboardLayout
      onLogout={handleLogout}
      onNavigate={(page) => setCurrentPage(page as Page)}
      activePage={currentPage}
    >
      {content}
    </DashboardLayout>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'login':
        return (
          <AuthLayout
            title="Welcome Back"
            subtitle="Please enter your details to sign in to Healtea."
          >
            <LoginForm
              onLogin={handleLogin}
              onSwitchToSignup={() => setCurrentPage('signup')}
            />
          </AuthLayout>
        );
      case 'signup':
        return (
          <AuthLayout
            title="Create Account"
            subtitle="Start your journey to better health with personalized tea blends."
          >
            <SignupForm
              onSignup={handleSignup}
              onSwitchToLogin={() => setCurrentPage('login')}
            />
          </AuthLayout>
        );
      case 'dashboard':
        return wrapInDashboard(
          <div className="max-w-4xl mx-auto py-12 text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-serif text-[#2D4A22]">How are you feeling today?</h1>
              <p className="text-[#5C715E] text-lg max-w-xl mx-auto">
                Take our quick quiz to discover which tea blend matches your current mood and health goals.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('questionnaire')}
              className="inline-flex items-center space-x-3 bg-[#4A783E] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#3D6333] transition-all shadow-xl shadow-[#4A783E]/20"
            >
              Start Wellness Quiz
            </button>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Daily Rituals", desc: "Track your tea consumption and notice how you feel.", color: "bg-[#F4F9F4]" },
                { title: "Personalized", desc: "Recommendations based on your unique health profile.", color: "bg-[#FDFCFB]" },
                { title: "Expert Advice", desc: "Learn about the ancient benefits of herbal teas.", color: "bg-[#F4F9F4]" }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-8 rounded-3xl border border-[#E2E8E2]`}>
                  <h3 className="text-xl font-serif text-[#2D4A22] mb-3">{item.title}</h3>
                  <p className="text-[#5C715E] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Flashcards Section */}
            <div className="pt-12 text-left">
              <h2 className="text-2xl font-serif text-[#2D4A22] mb-6">Tea Wisdom Flashcards</h2>
              <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
                {[
                  { q: "What is L-Theanine?", a: "An amino acid found in tea that promotes relaxation without drowsiness." },
                  { q: "Steeping Tip", a: "Never use boiling water for Green Tea; it burns the delicate leaves and makes them bitter." },
                  { q: "Herbal vs True Tea", a: "Herbal teas (tisanes) aren't technically tea! They come from herbs, not the Camellia sinensis plant." },
                  { q: "Antioxidant Power", a: "White tea is the least processed and contains the highest levels of antioxidants." }
                ].map((card, i) => (
                  <div key={i} className="flex-shrink-0 w-72 h-48 [perspective:1000px] group">
                    <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                      <div className="absolute inset-0 bg-white border border-[#E2E8E2] rounded-2xl flex items-center justify-center p-6 text-center shadow-sm [backface-visibility:hidden]">
                        <p className="font-serif text-[#4A783E] text-lg">{card.q}</p>
                      </div>
                      <div className="absolute inset-0 bg-[#4A783E] text-white rounded-2xl flex items-center justify-center p-6 text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p className="text-sm font-medium leading-relaxed">{card.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'questionnaire':
        return wrapInDashboard(<Questionnaire onComplete={handleQuestionnaireComplete} />);
      case 'recommendation':
        return wrapInDashboard(
          <RecommendationView
            answers={userAnswers}
            onReset={() => setCurrentPage('questionnaire')}
          />
        );
      case 'explore':
        return wrapInDashboard(
          <div className="max-w-4xl mx-auto py-12 text-center">
            <h1 className="text-4xl font-serif text-[#2D4A22] mb-4">Explore Our Tea Collection</h1>
            <p className="text-[#5C715E]">Browse our curated selection of premium blends from around the world.</p>
            <div className="mt-12 p-20 border-2 border-dashed border-[#E2E8E2] rounded-[3rem] text-[#A0A0A0]">
              Explore View Coming Soon
            </div>
          </div>
        );
      case 'favorites':
        return wrapInDashboard(
          <div className="max-w-4xl mx-auto py-12 text-center">
            <h1 className="text-4xl font-serif text-[#2D4A22] mb-4">Your Favorites</h1>
            <p className="text-[#5C715E]">Keep track of the blends you love most.</p>
            <div className="mt-12 p-20 border-2 border-dashed border-[#E2E8E2] rounded-[3rem] text-[#A0A0A0]">
              No favorites saved yet
            </div>
          </div>
        );
      case 'history':
        return wrapInDashboard(
          <div className="max-w-4xl mx-auto py-12 text-center">
            <h1 className="text-4xl font-serif text-[#2D4A22] mb-4">Brewing History</h1>
            <p className="text-[#5C715E]">Look back at your wellness journey through tea.</p>
            <div className="mt-12 p-20 border-2 border-dashed border-[#E2E8E2] rounded-[3rem] text-[#A0A0A0]">
              History View Coming Soon
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans antialiased text-[#2D4A22]">
      <Toaster position="top-center" richColors />
      {renderContent()}
    </div>
  );
}
