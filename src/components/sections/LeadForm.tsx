import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';

export default function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Форма отправлена! Спасибо!');
  };

  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Расчет стоимости"
          title="Начните автоматизацию сегодня"
          subtitle="Оставьте заявку, и мы бесплатно оценим, как AI-агент может ускорить ваши процессы и увеличить конверсию."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.06)]"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Ваше Имя</label>
              <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email или Telegram</label>
              <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900" placeholder="@username" />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-bold text-slate-700">Опишите суть проекта</label>
            <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900" placeholder="https://vk.com/..." />
          </div>

          <div className="space-y-4 mb-10">
            <label className="text-sm font-bold text-slate-700">Какие функции вас интересуют? (можно выбрать несколько)</label>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Ответы на вопросы', 'База знаний (RAG)', 'Сбор заявок', 'Интеграция с CRM', 'Автоматизация процессов', 'Пока не знаю (Нужна консультация)'].map((opt, i) => (
                <label key={i} className="flex gap-3 p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-200 cursor-pointer transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/50">
                  <input type="checkbox" className="mt-0.5 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                  <span className="text-sm font-semibold text-slate-800">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 text-lg">
            Получить расчет стоимости
          </button>

          <p className="text-center text-xs text-slate-400 mt-6 font-medium">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
