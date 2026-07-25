import { motion } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';

const steps = [
  {
    num: '01',
    title: 'Полный анализ задачи',
    desc: 'Брифинг, изучение текущих процессов и точек потерь в поддержке и продажах.',
  },
  {
    num: '02',
    title: 'Проектирование сценариев',
    desc: 'Формируем карту диалогов, логику автоматизации и единый tone of voice.',
  },
  {
    num: '03',
    title: 'Подготовка базы знаний',
    desc: 'Собираем документы и регламенты, структурируем и загружаем в RAG.',
  },
  {
    num: '04',
    title: 'Разработка и интеграции',
    desc: 'Реализуем агента, подключаем API, CRM и внутренние сервисы в общий контур.',
  },
  {
    num: '05',
    title: 'Запуск и развитие проекта',
    desc: 'Тестируем, запускаем в прод и дообучаем на реальных диалогах и бизнес-данных.',
  },
];

export default function Process() {
  const tone = [
    {
      stripe: 'from-cyan-500 to-sky-500',
      badge: 'from-cyan-500/22 to-sky-500/12 border-cyan-200/80 text-cyan-700',
      glow: 'from-cyan-500/26 to-sky-500/16',
    },
    {
      stripe: 'from-blue-500 to-indigo-500',
      badge: 'from-blue-500/22 to-indigo-500/12 border-blue-200/80 text-blue-700',
      glow: 'from-blue-500/24 to-indigo-500/16',
    },
    {
      stripe: 'from-violet-500 to-fuchsia-500',
      badge: 'from-violet-500/22 to-fuchsia-500/12 border-violet-200/80 text-violet-700',
      glow: 'from-violet-500/24 to-fuchsia-500/16',
    },
    {
      stripe: 'from-emerald-500 to-teal-500',
      badge: 'from-emerald-500/22 to-teal-500/12 border-emerald-200/80 text-emerald-700',
      glow: 'from-emerald-500/24 to-teal-500/16',
    },
    {
      stripe: 'from-amber-500 to-orange-500',
      badge: 'from-amber-500/24 to-orange-500/14 border-amber-200/80 text-amber-700',
      glow: 'from-amber-500/26 to-orange-500/16',
    },
  ];

  return (
    <section className="-mt-px pt-[calc(7rem+1px)] pb-28 bg-[linear-gradient(180deg,#e7dcc3_0%,#eef4ee_30%,#edf7fa_68%,#f8fbfc_100%)] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-[linear-gradient(180deg,#e7dcc3_0%,rgba(231,220,195,0.68)_42%,rgba(231,220,195,0)_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[linear-gradient(180deg,#e7dcc3_0%,rgba(231,220,195,0.88)_26%,rgba(233,227,206,0.46)_56%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_2%,rgba(168,142,85,0.23),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(63,146,251,0.16),transparent_36%),radial-gradient(circle_at_90%_84%,rgba(63,146,251,0.10),transparent_34%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_82%_68%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-[linear-gradient(180deg,rgba(248,251,252,0)_0%,rgba(240,247,250,0.66)_52%,#eff6f8_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Как мы работаем"
          subtitle="Прозрачный процесс от первой встречи до запуска готового продукта без срыва сроков."
        />

        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-[2px] bg-gradient-to-r from-transparent via-slate-300/80 to-transparent"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {steps.map((step, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[1.35rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,246,240,0.86))] p-5 lg:h-[258px] shadow-[0_18px_34px_rgba(30,41,59,0.10),0_8px_16px_rgba(30,41,59,0.06),inset_0_1px_0_rgba(255,255,255,0.92)] hover:-translate-y-1.5 hover:shadow-[0_26px_44px_rgba(30,41,59,0.14),0_10px_20px_rgba(30,41,59,0.08)] transition-all duration-300 overflow-hidden"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${tone[i].stripe}`}></div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35),transparent_36%)]"></div>
                <div className={`pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br blur-2xl opacity-75 group-hover:scale-110 transition-transform duration-500 ${tone[i].glow}`}></div>
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>

                <div className="relative mb-4 flex items-center justify-between">
                  <div className={`h-11 w-11 rounded-[0.8rem] border bg-gradient-to-br flex items-center justify-center text-base font-black shadow-[0_8px_18px_rgba(15,23,42,0.08)] ${tone[i].badge}`}>
                    {step.num}
                  </div>
                  <div className="hidden lg:block h-2.5 w-2.5 rounded-full bg-slate-300/75 border border-white shadow-sm"></div>
                </div>

                <div className="relative flex flex-col h-full">
                  <h4 className="text-[1.04rem] lg:text-[1.16rem] font-extrabold text-slate-900 mb-2.5 tracking-tight leading-[1.2]">{step.title}</h4>
                  <p className="text-[0.9rem] text-slate-700/95 font-medium leading-[1.55]">{step.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
