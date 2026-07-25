import { motion } from 'motion/react';
import { Brain, ImagePlus, Workflow } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
    title: "Умная база знаний (RAG)",
    description: "Бот изучает документацию, регламенты и сайт вашей компании. Он отвечает на сложные вопросы клиентов мгновенно и без ошибок, опираясь только на базу знаний."
  },
  {
    icon: <ImagePlus className="w-8 h-8 text-violet-600" />,
    title: "Генеративный ИИ",
    description: "Создание уникальных изображений и видео по запросу прямо в диалогах паблика и комментариях. Вовлекайте аудиторию инновационным медиа-контентом."
  },
  {
    icon: <Workflow className="w-8 h-8 text-blue-600" />,
    title: "Автоматизация процессов",
    description: "Умная квалификация лидов, интеграция с популярными CRM, триггерные рассылки и круглосуточная поддержка без участия живого оператора."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Интеллект, который решает задачи</h2>
          <p className="text-lg text-slate-600">Широкий спектр возможностей для роста вашего сообщества и автоматизации продаж.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
