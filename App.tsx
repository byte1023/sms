
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import DevSection from './components/DevSection';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import SubPage from './components/SubPage';

export type PageType = 'home' | 'docs' | 'api' | 'company' | 'legal' | 'privacy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isAiOpen, setIsAiOpen] = useState(false);

  // 模拟路由：当点击链接时切换页面并回到顶部
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar onNavigate={navigateTo} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onStart={() => navigateTo('docs')} />
            <Stats />
            <Features />
            <UseCases />
            <DevSection onDocs={() => navigateTo('docs')} onApi={() => navigateTo('api')} />
            <Pricing />
          </>
        ) : (
          <SubPage type={currentPage} onBack={() => navigateTo('home')} />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} />
      
      {/* AI Assistant FAB */}
      <button 
        onClick={() => setIsAiOpen(!isAiOpen)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-50 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          AI 助手
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isAiOpen && (
        <div className="fixed bottom-24 right-8 w-96 max-w-[90vw] z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <AIAssistant onClose={() => setIsAiOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
