import { motion } from 'motion/react';
import { MessageSquare, BrainCircuit, Database, Webhook, ShieldCheck, Wrench } from 'lucide-react';

export default function TechArchitecture() {
  return (
    <section id="архитектура" className="py-32 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Pipeline</h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">Архитектура пайплайна данных</h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Как работает наша система. Абсолютная прозрачность, строгий контроль типов, изоляция контекста и надежность на каждом этапе обработки входящего события.
          </p>
        </div>

        {/* Visual Pipeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Center connecting line mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-indigo-600 to-indigo-200 -translate-x-1/2 md:hidden"></div>

          <div className="flex flex-col gap-12 md:gap-0 relative">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-40">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end translate-y-4 md:translate-y-0">
                <div className="bg-white px-8 py-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 flex items-center gap-5 w-full md:w-96 group hover:border-indigo-300 transition-colors">
                  <div className="bg-[#0077FF]/10 text-[#0077FF] p-4 rounded-2xl"><MessageSquare size={28} /></div>
                  <div className="text-left">
                    <h5 className="font-extrabold text-xl text-slate-900 mb-1">VK LongPoll API</h5>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Входящий webhook</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center w-16 relative text-indigo-300">
                <div className="w-1.5 h-40 bg-slate-200 absolute -top-20 -bottom-20 z-0"></div>
                <ShieldCheck size={36} className="bg-slate-50 relative z-10 p-1" />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <p className="text-base text-slate-600 md:max-w-xs font-medium hidden md:block">Прием и валидация входящего контекста от пользователя с проверкой криптографической подписи.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-40">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <p className="text-base text-slate-600 md:max-w-xs text-right font-medium hidden md:block">Маршрутизация агента и классификация намерения пользователя (Intent Reasoning).</p>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center w-16 relative text-indigo-600">
                <div className="w-1.5 h-40 bg-indigo-200 absolute -top-20 -bottom-20 z-0"></div>
                <BrainCircuit size={40} className="bg-slate-50 relative z-10 p-1" />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start translate-y-4 md:translate-y-0">
                <div className="bg-slate-900 px-8 py-6 rounded-3xl shadow-2xl shadow-indigo-900/30 border border-slate-700 flex items-center gap-5 w-full md:w-96 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none group-hover:bg-indigo-500/20 transition-colors"></div>
                  <div className="bg-indigo-600 text-white p-4 rounded-2xl relative z-10"><BrainCircuit size={28} /></div>
                  <div className="text-left relative z-10">
                    <h5 className="font-extrabold text-xl text-white mb-1">LLM Orchestrator</h5>
                    <p className="text-xs text-indigo-300 font-mono font-bold">OpenAI / Anthropic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-40">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end translate-y-4 md:translate-y-0">
                <div className="bg-white px-8 py-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 flex items-center gap-5 w-full md:w-96 group hover:border-emerald-300 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl"><Database size={28} /></div>
                  <div className="text-left">
                    <h5 className="font-extrabold text-xl text-slate-900 mb-1">Vector Search (RAG)</h5>
                    <p className="text-xs text-slate-500 font-mono font-bold">Similarity & Context</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center w-16 relative text-indigo-400">
                <div className="w-1.5 h-40 bg-indigo-100 absolute -top-20 -bottom-20 z-0 bg-gradient-to-b from-indigo-200 to-slate-200"></div>
                <Wrench size={36} className="bg-slate-50 relative z-10 p-1" />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <p className="text-base text-slate-600 md:max-w-xs font-medium hidden md:block">Вызов инструментов (Tool Calling). Поиск чанков документации в векторной БД для формирования точного и актуального контекста.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-40">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <p className="text-base text-slate-600 md:max-w-xs text-right font-medium hidden md:block">Финальный синтез ответа, CRM синхронизация и моментальная отправка обратно пользователю.</p>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center w-16 relative text-indigo-600">
                <div className="w-1.5 h-20 bg-slate-200 absolute top-0 bottom-20 z-0"></div>
                <Webhook size={36} className="bg-slate-50 relative z-10 p-1" />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start translate-y-4 md:translate-y-0">
                <div className="bg-white px-8 py-6 rounded-3xl shadow-xl shadow-indigo-600/10 border-2 border-indigo-100 flex items-center gap-5 w-full md:w-96">
                  <div className="bg-indigo-600 text-white p-4 rounded-2xl"><MessageSquare size={28} /></div>
                  <div className="text-left">
                    <h5 className="font-extrabold text-xl text-slate-900 mb-1">Clean Output</h5>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">VK / CRM Webhook</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
