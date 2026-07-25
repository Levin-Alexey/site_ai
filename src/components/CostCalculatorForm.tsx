import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function CostCalculatorForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const techStack = [
    { id: 'rag', label: 'RAG Knowledge Base', desc: 'Векторный поиск по документам' },
    { id: 'gen', label: 'Generative Media', desc: 'Генерация фото и видео в чате' },
    { id: 'crm', label: 'CRM / ERP Sync', desc: 'Глубокая сквозная интеграция' },
    { id: 'analytics', label: 'Deep Analytics', desc: 'Webhooks, n8n, 1C' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-8">
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 font-bold text-sm mb-6 uppercase tracking-widest border border-indigo-500/20">
                <Zap size={16} /> Estimation
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                Инвестиции<br />в автоматизацию
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                Каждый бизнес уникален. Мы разрабатываем enterprise-решения под конкретные KPI — от умной поддержки до сквозной генерации лидов. Оставьте заявку, и наши инженеры проведут детальную оценку архитектуры проекта.
              </p>
              
              <div className="space-y-6 border-t border-slate-800 pt-8 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">NDA & Safety</h4>
                    <p className="text-sm text-slate-500 font-medium">Строгое соблюдение конфиденциальности.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/40"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100 border border-emerald-200">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Запрос принят в работу</h3>
                  <p className="text-lg text-slate-600 font-medium max-w-sm">Наши ведущие инженеры свяжутся с вами для построения архитектурного плана.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Имя / Компания *</label>
                      <input required type="text" id="name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" placeholder="Acme Corp" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contactInfo" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Telegram / VK *</label>
                      <input required type="text" id="contactInfo" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" placeholder="@username" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Архитектурные требования</label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {techStack.map((tech) => (
                        <label key={tech.id} className="flex gap-4 p-4 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-indigo-200 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/50 group">
                          <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 bg-slate-100" />
                          <div>
                            <span className="block text-sm font-black text-slate-900 mb-0.5">{tech.label}</span>
                            <span className="block text-xs font-medium text-slate-500">{tech.desc}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Краткое описание задачи</label>
                    <textarea id="details" rows={3} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 resize-none" placeholder="Укажите стек, объем трафика или конечную бизнес-цель..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full group flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-5 px-8 rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:shadow-indigo-500/40">
                    Передать на оценку
                    <ChevronRight size={18} className="translate-y-[1px] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-center text-slate-400 font-medium mt-4">
                    Ваши данные защищены современными стандартами шифрования.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
