import { useState, useEffect } from 'react';
import { Bot, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Bot size={28} />
            </div>
            <span className="font-extrabold text-3xl tracking-tighter text-slate-900">VK<span className="text-indigo-600">.</span>AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Возможности', 'Архитектура', 'Кейсы', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wide">
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-slate-900 rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-[gradient_2s_linear_infinite]"></span>
              <span className="relative flex items-center gap-2 tracking-wide uppercase">
                Консультация
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-900 bg-white shadow-sm border border-slate-200 rounded-full" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 left-4 right-4 bg-white border border-slate-200 shadow-2xl rounded-3xl md:hidden p-6 z-50 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white"><Bot size={24}/></div>
                 <span className="font-extrabold text-2xl tracking-tighter text-slate-900">VK<span className="text-indigo-600">.</span>AI</span>
              </div>
              <button className="p-2 text-slate-500 bg-slate-50 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {['Возможности', 'Архитектура', 'Кейсы', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-6 py-5 mt-4 text-base font-bold text-white bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 uppercase tracking-wide">
                Рассчитать проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
