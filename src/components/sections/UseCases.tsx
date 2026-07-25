import { motion } from 'motion/react';
import iconEducation from '/files/icons/icon-ind-education.svg';
import iconProServices from '/files/icons/icon-ind-pro-services.svg';
import iconRetail from '/files/icons/icon-ind-retail.svg';
import iconFinServices from '/files/icons/icon-ind-fin-services.svg';
import iconDataCloud from '/files/icons/icon-data-cloud.svg';
import iconService from '/files/icons/icon-service.svg';
import iconEng from '/files/icons/icon-ind-eng.svg';
import iconManufacturing from '/files/icons/icon-ind-manufacturing.svg';

const cases = [
  {
    id: 'fin',
    title: 'Финансовые услуги',
    description: 'Проактивная поддержка клиентов и персонализированные AI-сценарии для сервиса высокого уровня.',
    icon: iconFinServices,
    iconScale: 'scale-[0.92]',
  },
  {
    id: 'retail',
    title: 'Ритейл',
    description: 'Быстрый подбор товаров, поддержка по заказам и рост повторных покупок через умные рекомендации.',
    icon: iconRetail,
    iconScale: 'scale-[1.06]',
  },
  {
    id: 'health',
    title: 'Здравоохранение и красота',
    description: 'Автоматизируйте первичные обращения, запись и коммуникацию с пациентами без перегрузки команды.',
    icon: iconService,
    iconScale: 'scale-[1.08]',
  },
  {
    id: 'construction',
    title: 'Строительство и недвижимость',
    description: 'Ускоренная обработка заявок, консультации по объектам и качественная маршрутизация клиентов.',
    icon: iconEng,
    iconScale: 'scale-[0.91]',
  },
  {
    id: 'education',
    title: 'Образование',
    description: 'Поддержка 24/7 для студентов, ответы по курсам и автоматизация типовых учебных процессов.',
    icon: iconEducation,
    iconScale: 'scale-[1.08]',
  },
  {
    id: 'pro-services',
    title: 'Профессиональные услуги',
    description: 'Квалификация обращений, первичный брифинг и подготовка клиента до подключения эксперта.',
    icon: iconProServices,
    iconScale: 'scale-[0.97]',
  },
  {
    id: 'technology',
    title: 'Технологические компании',
    description: 'Техподдержка первой линии, онбординг пользователей и помощь с навигацией по продукту.',
    icon: iconDataCloud,
    iconScale: 'scale-[1.07]',
  },
  {
    id: 'manufacturing',
    title: 'Производство',
    description: 'Единая коммуникация по заявкам, статусам и сервисным обращениям для клиентов и партнеров.',
    icon: iconManufacturing,
    iconScale: 'scale-[1.09]',
  },
];

export default function UseCases() {
  return (
    <section id="industries" className="relative isolate overflow-hidden border-t border-slate-100 py-32 bg-[linear-gradient(180deg,#e8f2f6_0%,#edf4f7_42%,#f5edf3_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(255,255,255,0.46),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(194,226,249,0.24),transparent_42%),radial-gradient(circle_at_80%_84%,rgba(244,214,230,0.22),transparent_46%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_88%_72%_at_50%_44%,#000_62%,transparent_100%)]"></div>

      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col gap-4 relative z-10 items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Решения под разные индустрии</h2>
          <div className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Наш AI-агент адаптируется под тональность (Tone of Voice) вашего бренда и специфику бизнес-процессов отрасли.
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.34 }}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[18px] border border-white/14 bg-[linear-gradient(145deg,#6323da_0%,#7640e6_34%,#9a69ef_100%)] px-5 py-7 text-white shadow-[0_14px_34px_rgba(72,28,145,0.30),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/22 hover:shadow-[0_20px_42px_rgba(72,28,145,0.34),inset_0_1px_0_rgba(255,255,255,0.22)] xl:min-h-[316px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,255,255,0.20),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_28%)]"></div>
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-indigo-200/10 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>

              <h3 className="relative z-10 min-h-[3.9rem] max-w-[88%] text-[1.75rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-white">
                {c.title}
              </h3>

              <p className="relative z-10 mt-3.5 min-h-[4.2rem] max-w-[92%] text-[0.93rem] leading-[1.5] font-medium text-white/90">
                {c.description}
              </p>

              <div className="relative z-10 mt-auto flex items-end justify-between pt-6">
                <a
                  href="#contact"
                  aria-label={`Подробнее: ${c.title}`}
                  className="text-[0.98rem] font-bold text-white/95 underline underline-offset-4 decoration-white/55 decoration-2 hover:text-white"
                >
                  Подробнее
                </a>

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/75 bg-white/96 shadow-[0_10px_22px_rgba(18,26,55,0.20)] ring-1 ring-white/20 ring-inset">
                  <img src={c.icon} alt="" className={`h-14 w-14 origin-center object-contain ${c.iconScale}`} loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
