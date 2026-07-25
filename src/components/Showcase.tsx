import { motion } from 'motion/react';
import { MessageSquare, Image as ImageIcon, Send, Sparkles } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Полноценный ассистент прямо в сообщениях сообщества</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Вашим клиентам больше не нужно ждать ответа менеджера часами. ИИ-агент понимает детализированный контекст, извлекает нужные данные из базы и ведет диалог так же естественно, как опытный продавец.
            </p>
            <ul className="space-y-4">
              {['Мгновенные ответы (до 2-х секунд)', 'Понимание намерений и работа с возражениями', 'Бесшовная передача сложного диалога оператору'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Sparkles size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mockup Chat UI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-700 bg-slate-800/50">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">VK</div>
              <div>
                <h4 className="text-white font-medium">VK.AI Assistant</h4>
                <p className="text-xs text-slate-400">Бот • В сети</p>
              </div>
            </div>
            
            <div className="p-6 space-y-6 bg-slate-900/50 h-[400px] overflow-y-hidden flex flex-col justify-end">
              <div className="flex flex-col gap-4 w-full">
                <div className="self-end bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] text-sm">
                  Привет! Сколько стоит доставка объемного груза из Китая в Москву?
                </div>
                
                <div className="self-start flex gap-3 max-w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs mt-auto">VK</div>
                  <div className="bg-slate-700 text-slate-100 rounded-2xl rounded-tl-sm px-5 py-4 text-sm leading-relaxed shadow-sm">
                    Здравствуйте! 👋 Стоимость доставки из Китая в Москву зависит от типа транспорта. <br/><br/>
                    • Авиа: от $4.5/кг (5-8 дней)<br/>
                    • Ж/Д: от $1.5/кг (15-20 дней)<br/>
                    • Авто: от $2.0/кг (12-15 дней)<br/><br/>
                    Уточните вес и объем вашего груза, и я сделаю точный расчет прямо сейчас.
                  </div>
                </div>
                
                <div className="self-end bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] text-sm">
                  Примерно 200 кг, 1.5 куба. Авиа.
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-800 border-t border-slate-700 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                <ImageIcon size={16} />
              </div>
              <div className="flex-1 bg-slate-900 rounded-full h-10 px-4 flex items-center text-sm text-slate-500">
                Написать сообщение...
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white relative">
                 <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
