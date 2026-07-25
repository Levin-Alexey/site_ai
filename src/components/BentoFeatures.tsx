import { motion } from 'motion/react';
import { Database, ImagePlus, Target, Workflow } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="возможности" className="py-32 relative bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Технологическое превосходство</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Инфраструктура Enterprise-уровня.
            </h3>
          </div>
          <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
            Мы проектируем отказоустойчивые системы, способные обрабатывать сотни параллельных диалогов, опираясь на вашу закрытую базу знаний.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[340px] md:auto-rows-[400px]">
          {/* Card 1: RAG (Large) 4 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 rounded-[2.5rem] bg-slate-900 text-white p-10 md:p-14 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600/40 via-slate-900 to-slate-900 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"></div>
            {/* Grid Pattern inside */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik02MCAwTDAgMEwwIDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-indigo-500/20 backdrop-blur-xl flex items-center justify-center border border-indigo-400/30 text-indigo-300">
                  <Database size={32} />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-slate-800/80 text-xs font-mono font-bold text-indigo-300 border border-slate-700 tracking-wider uppercase">Pinecone / PGVector</div>
              </div>
              
              <div>
                <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Advanced RAG <br/><span className="text-slate-400">(Knowledge Bases)</span></h4>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                  Мгновенные контекстные ответы, базирующиеся <strong className="text-white">только</strong> на корпоративной документации, регламентах и каталогах. Нулевой уровень галлюцинаций LLM за счет векторного поиска и строгих системных промптов.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Generative Media (Medium) 2 columns */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:col-span-2 rounded-[2.5rem] bg-indigo-50 border-2 border-indigo-100 p-10 md:p-12 relative overflow-hidden group hover:border-indigo-300 transition-colors"
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-xl shadow-indigo-100 flex items-center justify-center text-indigo-600 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <ImagePlus size={32} />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tighter">Генеративный Core</h4>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">
                    Генерация изображений (Midjourney/Flux) и видео on-the-fly прямо в чатах или комментариях VK по текстовому запросу. Удержание аудитории невероятным интерактивом.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Card 3: Lead Gen (Medium) 2 columns */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-2 rounded-[2.5rem] bg-slate-50 border border-slate-200 p-10 md:p-12 relative overflow-hidden group hover:bg-slate-100 hover:border-slate-300 transition-colors"
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-900 mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Target size={32} />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tighter">Smart Lead Gen</h4>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">
                    Анализ интентов в комментариях конкурентных групп. Авто-подогрев лида, маршрутизация в нужную воронку продаж. Скоринг клиентов в реальном времени.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Card 4: Analytics API (Large) 4 columns */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-4 rounded-[2.5rem] bg-white border border-slate-200 p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-slate-100"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                  <Workflow size={32} />
                </div>
                 <div className="px-4 py-1.5 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-600 border border-slate-200 tracking-wider">n8n / Make / Webhooks</div>
              </div>
              
              <div className="max-w-3xl">
                <h4 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">Deep Analytics & CRM Sync</h4>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                  Сквозная двусторонняя интеграция с AmoCRM, Bitrix24, 1C ERP. Бот может не только фиксировать заявки, но и запрашивать статусы возвратов, остатки на складах и обновлять стадии сделок, формируя полностью автономный пайплайн.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
