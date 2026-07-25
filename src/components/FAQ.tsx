import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const coreFaqs = [
  {
    q: 'Может ли бот ошибиться или выдумать несуществующую информацию (галлюцинация LLM)?',
    a: 'При использовании технологии RAG (Retrieval-Augmented Generation) риск галлюцинаций сводится к минимуму. Мы настраиваем LLM так, чтобы она отвечала строго на основе переданного контекста (ваша корпоративная база знаний). Если ответа в базе нет, бот честно признается в этом и переводит диалог на оператора, а не фантазирует.'
  },
  {
    q: 'Как решается вопрос с Rate Limits API ВКонтакте при большой нагрузке?',
    a: 'Наша архитектура включает встроенные Message Queues (например, Redis или RabbitMQ) и систему троттлинга. Это означает, что входящие запросы аккумулируются в очередь и отправляются во VK строго в рамках лимитов платформы, исключая риск блокировки токена сообщества даже при пиковых нагрузках во время рекламных кампаний.'
  },
  {
    q: 'Возможна ли сквозная авторизация и связка профиля VK с аккаунтом на сайте (CRM)?',
    a: 'Да. Мы реализуем механизмы Seamless Login и Account Linking через защищенные OAuth-подобные токены. Бот в VK будет точно знать, какой заказ на сайте принадлежит клиенту, и сможет выводить персональный статус доставки или баланс бонусных баллов прямо в чате.'
  },
  {
    q: 'Сколько времени занимает разработка и развертывание enterprise-бота?',
    a: 'От 2 до 6 недель в зависимости от сложности. Базовый бот с RAG разворачивается за 2 недели. Интеграции с тяжелыми ERP (1C, кастомные решения) и разработка пайплайна генерации контента могут потребовать больше времени на тестирование и синхронизацию.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <div className="w-16 h-16 rounded-3xl bg-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <MessageCircleQuestion size={32} />
           </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 font-medium">Ответы на сложные технические вопросы от нашей engineering team.</p>
        </div>

        <div className="space-y-4">
          {coreFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-indigo-600 bg-white shadow-xl shadow-indigo-100' : 'border-slate-200 bg-white hover:border-indigo-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
                      {faq.a}
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
