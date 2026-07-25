import { motion } from 'motion/react';
import { ChevronRight, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden border-b border-slate-200/50 bg-[#FAFAFA]">
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-normal"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-normal"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-900 text-xs sm:text-sm font-bold tracking-widest uppercase mb-12"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          Next-Gen AI Inside VK
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.05] max-w-5xl"
        >
          ИИ-системы и боты <br className="hidden md:block" />нового поколения для VK.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 block mt-3">
            Разработка любой сложности.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl lg:text-2xl text-slate-600 mb-14 leading-relaxed font-medium"
        >
          Мы не делаем кнопочные скрипты. Мы создаем автономных ИИ-агентов с интеграцией RAG-баз знаний, генеративных нейросетей (мультимедиа) и сквозной автоматизацией бизнес-процессов.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <a href="#contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-5 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-slate-900/20 hover:shadow-indigo-500/30 tracking-wide uppercase">
            Оценить проект
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#архитектура" className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 text-base font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors tracking-wide uppercase shadow-sm">
            Изучить архитектуру
          </a>
        </motion.div>

        {/* Live Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl pt-12 border-t border-slate-200"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <Activity size={28} />
              <span className="text-4xl font-black tracking-tighter">3M+</span>
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Запросов/мес</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <ShieldCheck size={28} />
              <span className="text-4xl font-black tracking-tighter">99.9%</span>
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Uptime SLA</span>
          </div>
           <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <Zap size={28} />
              <span className="text-4xl font-black tracking-tighter">&lt;150ms</span>
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Отклик LLM (RAG)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
