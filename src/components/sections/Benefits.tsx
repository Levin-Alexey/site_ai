import { motion } from 'motion/react';
import { Rocket, Layers, Database, Sparkles, Infinity } from 'lucide-react';

const benefits = [
  { icon: Rocket, label: 'Быстрый запуск' },
  { icon: Layers, label: 'Глубокая интеграция' },
  { icon: Database, label: 'База знаний RAG' },
  { icon: Sparkles, label: 'Генерация контента' },
  //{ icon: Infinity, label: 'Поддержка и развитие' }
];

export default function Benefits() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <benefit.icon size={18} />
              </div>
              <span className="font-semibold text-sm text-slate-700 tracking-wide uppercase">{benefit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
