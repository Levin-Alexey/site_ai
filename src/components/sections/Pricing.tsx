import { motion } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/button';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          badge="Стоимость"
          title="Инвестируйте в эффективность"
          subtitle="Мы не продаем коробочные решения. Каждый проект оценивается индивидуально, исходя из сложности архитектуры и глубины интеграции с вашим бизнесом."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            {
              title: "Умный консультант",
              desc: "Базовый бот с RAG-базой знаний для ответов на частые вопросы по вашим документам.",
              features: ["RAG База знаний", "До 500 стр. документов", "Сбор контактов"]
            },
            {
              title: "AI-Ассистент + Интеграции",
              desc: "Продвинутое решение с маршрутизацией лидов в CRM и сложной воронкой продаж.",
              features: ["AmoCRM / Bitrix24 / 1C", "Умная квалификация лида", "Своя логика (Webhooks)"],
              highlight: true
            },
            {
              title: "Мультимодальный Enterprise",
              desc: "Полноформатная разработка с генерацией медиа (фото/видео) и сложными аналитическими дашбордами.",
              features: ["Генерация Фото / Видео", "Кастомные LLM-промпты", "Выделенный сервер обработки"]
            }
          ].map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2.5rem] p-8 md:p-10 text-left border ${tier.highlight
                  ? 'bg-slate-900 border-slate-800 text-white shadow-2xl scale-105 z-10 relative'
                  : 'bg-white border-slate-200 shadow-sm'
                }`}
            >
              <h4 className={`text-2xl font-bold mb-4 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.title}</h4>
              <p className={`font-medium leading-relaxed min-h-[80px] mb-8 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>

              <ul className="space-y-4 mb-10">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${tier.highlight ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                    <span className={`font-medium ${tier.highlight ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlight ? 'primary' : 'outline'}
                className="w-full"
                href="#contact"
              >
                Запросить расчет
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
