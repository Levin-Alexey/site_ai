import { motion } from 'motion/react';
import icon1 from '/files/icons_m/augmentation-icon-1.png';
import icon2 from '/files/icons_m/augmentation-icon-2.png';
import icon3 from '/files/icons_m/augmentation-icon-3.png';
import icon4 from '/files/icons_m/augmentation-icon-4.png';
import icon5 from '/files/icons_m/augmentation-icon-5.png';

const capabilityCards = [
  {
    id: 'smart-answers',
    title: 'Умные ответы на вопросы',
    description: 'AI-ассистент отвечает мгновенно 24/7, поддерживает естественный диалог и дает клиенту ощущение персонального сервиса без шаблонных скриптов.',
    icon: icon1,
    cta: 'Узнать подробнее',
  },
  {
    id: 'lead-qualification',
    title: 'Сбор и квалификация',
    description: 'Бот проводит мини-интервью, уточняет потребности, бюджет и сроки, а менеджеру передает уже структурированный и подготовленный лид.',
    icon: icon2,
    cta: 'Узнать подробнее',
  },
  {
    id: 'crm-integration',
    title: 'Интеграция с CRM',
    description: 'Сделки, карточки контактов и история переписки автоматически попадают в AmoCRM, Битрикс24 или таблицы без ручного копирования.',
    icon: icon3,
    cta: 'Узнать подробнее',
  },
  {
    id: 'routine-automation',
    title: 'Автоматизация рутины',
    description: 'Триггерные сценарии, напоминания, статусы заказов и типовые операции выполняются автоматически и стабильно, снижая нагрузку на команду.',
    icon: icon4,
    cta: 'Узнать подробнее',
  },
  {
    id: 'request-analytics',
    title: 'Аналитика обращений',
    description: 'Получайте сводки по диалогам, ключевым возражениям и качеству обработки заявок в реальном времени для точных управленческих решений.',
    icon: icon5,
    cta: 'Узнать подробнее',
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden border-t border-slate-100/40 bg-[linear-gradient(180deg,#e7f3fb_0%,#ecf5f8_42%,#e8f1f4_100%)] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-[linear-gradient(180deg,#e8f1f4_0%,rgba(232,241,244,0.68)_44%,rgba(232,241,244,0)_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(255,255,255,0.45),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(212,236,252,0.30),transparent_40%),radial-gradient(circle_at_78%_82%,rgba(191,226,251,0.24),transparent_44%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_88%_74%_at_50%_42%,#000_60%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(232,241,244,0)_0%,rgba(232,241,244,0.74)_54%,#e8f1f4_100%)]"></div>

      <div className="site-shell relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-20">
          <h2 className="text-[clamp(1.8rem,6.4vw,2.7rem)] font-black text-slate-900 tracking-tight leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">Спектр модулей агента и бота</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[clamp(0.95rem,3.8vw,1.12rem)] font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">
            Инженерный подход позволяет выбрать только нужные модули и построить конфигурацию специально под ваши задачи.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-7">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[34px] bg-white/14"></div>
          {capabilityCards.map((card, i) => {
            const cardPlacement = i < 3 ? 'lg:col-span-2' : i === 3 ? 'lg:col-span-2 lg:col-start-2' : 'lg:col-span-2';

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group relative flex min-h-0 flex-col rounded-[22px] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,248,251,0.90))] px-5 pt-6 pb-5 shadow-[0_20px_44px_rgba(25,31,45,0.11),0_6px_18px_rgba(25,31,45,0.05),inset_0_1px_0_rgba(255,255,255,0.85)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-200/95 hover:bg-white hover:shadow-[0_28px_58px_rgba(25,31,45,0.14),0_8px_22px_rgba(25,31,45,0.08)] sm:min-h-[500px] sm:rounded-[28px] sm:px-8 sm:pt-9 sm:pb-6 ${cardPlacement}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(159,211,245,0.34),transparent_68%)] blur-2xl transition-transform duration-500 group-hover:scale-110"></div>
                <div className="mb-7 flex h-28 w-full items-center justify-start">
                  <img
                    className="block h-auto max-h-[108px] w-auto max-w-[108px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.04] group-hover:-rotate-1"
                    src={card.icon}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2.5 text-[1.28rem] leading-[1.35] font-semibold tracking-[-0.02em] text-[#050505] sm:text-[1.55rem]">{card.title}</h3>
                  <p className="mb-6 text-[0.95rem] leading-[1.55] font-normal text-[#4a4a4d] sm:mb-8 sm:text-[1.02rem]">{card.description}</p>

                  <a
                    href="#contact"
                    aria-label={`Узнать подробнее: ${card.title}`}
                    className="mt-auto inline-flex min-h-[50px] w-full items-center justify-center rounded-[16px] border-2 border-[#151515] px-5 py-3 text-[0.92rem] font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white hover:shadow-[0_8px_20px_rgba(17,17,17,0.14)] sm:min-h-[56px] sm:rounded-[18px] sm:text-[0.95rem]"
                  >
                    {card.cta}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
