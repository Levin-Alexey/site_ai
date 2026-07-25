import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, GraduationCap, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 'e-commerce',
    icon: <ShoppingBag size={24} />,
    title: 'E-commerce & Ритейл',
    description: 'Полный цикл продаж и поддержки прямо в диалоге VK.',
    features: [
      'Автоматический подбор товаров по фото или текстовому описанию',
      'Синхронизация наличия со складом ERP-системы в реальном времени',
      'Бесшовное оформление заказа и выдача платежной ссылки',
      'Обработка статусов доставки и трекинг-номеров через API ТК',
    ]
  },
  {
    id: 'edtech',
    icon: <GraduationCap size={24} />,
    title: 'EdTech & Инфобизнес',
    description: 'Умный куратор и автономная первая линия поддержки.',
    features: [
      'Мгновенные ответы на сложные вопросы по урокам (на базе базы знаний RAG)',
      'Полностью автоматизированный онбординг и выдача доступов в GetCourse',
      'Предварительный авто-скоринг домашних заданий базового уровня',
      'Персонализированные триггерные напоминания о предстоящих вебинарах',
    ]
  },
  {
    id: 'real-estate',
    icon: <Building2 size={24} />,
    title: 'Недвижимость & Develop',
    description: 'Квалификация лидов с высоким чеком без участия оператора.',
    features: [
      'Глубокий сбор параметров: бюджет, район, тип недвижимости, ипотека',
      'Динамическая генерация персональных PDF-подборок квартир (документы + фото)',
      'Прямая запись на просмотр в CRM-календарь конкретного брокера',
      'Авто-прогрев: рассылка ипотечных программ под профиль клиента',
    ]
  }
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(cases[0].id);

  return (
    <section id="кейсы" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Отраслевые решения</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Адаптация под любой бизнес</h3>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Наши ИИ-агенты настраиваются под специфику вашей ниши, перенимая регламенты, tone of voice и структуру воронки продаж.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex items-center gap-4 text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeTab === c.id 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20' 
                  : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${activeTab === c.id ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-900'}`}>
                  {c.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${activeTab === c.id ? 'text-white' : 'text-slate-900'}`}>{c.title}</h4>
                  <p className={`text-sm font-medium ${activeTab === c.id ? 'text-slate-300' : 'text-slate-500'}`}>Синхронизация процессов</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200">
             <AnimatePresence mode="wait">
                {cases.map((c) => (
                  c.id === activeTab && (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-6 w-fit uppercase tracking-wider">
                        {c.title}
                      </div>
                      <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{c.description}</h4>
                      
                      <div className="space-y-5 mb-10">
                        {c.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 bg-indigo-100 text-indigo-600 rounded-full p-0.5 border border-indigo-200 shrink-0">
                               <CheckCircle2 size={18} />
                            </div>
                            <p className="text-lg text-slate-700 font-medium leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <a href="#contact" className="mt-auto group inline-flex items-center justify-between w-full sm:w-auto sm:inline-flex bg-white px-8 py-4 rounded-full border border-slate-200 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all text-slate-900 font-bold uppercase tracking-wide">
                        Обсудить интеграцию
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </a>
                    </motion.div>
                  )
                ))}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
