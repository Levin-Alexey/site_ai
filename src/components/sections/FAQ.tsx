import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';
import { faqs } from '../../data/faq';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionTitle 
          badge="FAQ"
          title="Частые вопросы"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${
                open === i 
                ? 'bg-white border-blue-600 shadow-lg shadow-blue-900/5' 
                : 'bg-white border-slate-100 hover:border-blue-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left outline-none"
              >
                <span className="text-xl font-bold text-slate-900 pr-8">{faq.question}</span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${open === i ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500'}`}>
                   {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 font-medium leading-relaxed text-lg border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
