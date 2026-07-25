import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import projectPreviewMp2 from '/files/portfolio/mp2.webp';
import projectPreviewIm from '/files/portfolio/im.webp';
import projectPreviewManagerAi from '/files/portfolio/managerAI.webp';
import projectPreviewVoice from '/files/portfolio/voice.webp';
import projectPreviewMed from '/files/portfolio/med.webp';
import projectPreviewAssist from '/files/portfolio/assist.webp';

const previewImages = [
  projectPreviewMp2,
  projectPreviewIm,
  projectPreviewManagerAi,
  projectPreviewVoice,
  projectPreviewMed,
  projectPreviewAssist,
];

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  task: string;
  features: string[];
  technologies: string[];
  result: string;
};

const firstProjectCard: Project = {
  id: 'project-marketplace-analytics-agent',
  category: 'AI-агент · Маркетплейсы',
  title: 'AI-агент для аналитики Wildberries и Ozon',
  description:
    'Собственник магазина получил вместо ручных таблиц AI-агента, который автоматически собирает данные, выявляет точки роста и выдает понятные управленческие рекомендации.',
  image: previewImages[0],
  task:
    'Проблема: аналитика по заказам, выкупам, остаткам и марже велась вручную, отчеты собирались долго, а решения по поставкам и ценам принимались с опозданием. Это приводило к потере выручки, кассовым разрывам и росту операционной нагрузки на команду.',
  features: [
    'Подключили API-источники Wildberries и Ozon для автоматической загрузки актуальных метрик без ручного ввода.',
    'Построили единый контур обработки данных: заказы, выкупы, возвраты, остатки, комиссии и финансовые показатели.',
    'Реализовали AI-модуль сегментации ассортимента и выявления аномалий по продажам, марже и оборачиваемости.',
    'Настроили генерацию текстовых отчетов на естественном языке с конкретными действиями по SKU и категориям.',
    'Добавили прогноз спроса и рекомендации по объему поставок, чтобы снижать дефицит и избыточные остатки.',
    'Внедрили сценарии контроля ценообразования: агент подсвечивает точки потерь и варианты корректировки цен.',
  ],
  technologies: ['LLM', 'Python', 'FastAPI', 'PostgreSQL', 'RAG', 'n8n', 'WB API', 'Ozon API'],
  result:
    'Результат: управление магазином перешло в проактивный режим. Команда ежедневно получает приоритеты по ассортименту, поставкам и ценам, сокращает время на рутинную аналитику и масштабирует продажи без расширения штата аналитиков.',
};

const placeholderCards: Project[] = [
  firstProjectCard,
  ...Array.from({ length: 5 }).map((_, index) => ({
    id: `project-placeholder-${index + 2}`,
    category:
      index === 0
        ? 'AI-чат-бот · Продажи'
        : index === 1
          ? 'AI-голосовой консультант'
          : index === 2
            ? 'AI-консультант · E-commerce'
            : index === 3
              ? 'AI-ассистент · Медицина'
              : index === 4
                ? 'AI-ассистент · Корпоративный сервер'
                : 'AI · Разработка',
    title:
      index === 0
        ? 'AI чат-бот менеджер по продажам (On-Prem, RAG)'
        : index === 1
          ? 'AI-голосовой консультант на базе VAPI с RAG-архитектурой'
          : index === 2
            ? 'AI-консультант для интернет-магазина на платформе Dify'
            : index === 3
              ? 'Внутренний AI-ассистент для сети медицинских клиник'
              : index === 4
                ? 'Корпоративный AI-ассистент на сервере организации'
                : 'Интеллектуальная система автоматизации',
    description:
      index === 0
        ? 'Онбордированный AI-чат-бот консультирует клиентов по ассортименту, помогает выбрать товар и мягко ведет к покупке, работая на сервере заказчика без внешних API-зависимостей.'
        : index === 1
          ? 'Голосовой AI-ассистент в реальном времени отвечает на вопросы клиентов, объясняет услуги компании и передает диалоги в CRM без потери качества консультации.'
          : index === 2
            ? 'AI-консультант на Dify круглосуточно отвечает на вопросы покупателей, помогает выбрать товар и консультирует по доставке, оплате и условиям заказа на основе базы знаний магазина.'
            : index === 3
              ? 'Внутренний AI-ассистент для врачей и администраторов мгновенно находит ответы в базе знаний по МКБ и регламентам клиники, снижая время поиска информации и риск ошибок.'
              : index === 4
                ? 'Локальный AI-ассистент развернут на внутренних серверах компании и дает сотрудникам доступ к возможностям ИИ без утечки данных, внешних API и зависимости от облачных сервисов.'
                : 'Здесь будет описание проекта: задачи, внедренные модули и бизнес-результаты после запуска решения.',
    image: previewImages[index + 1],
    task:
      index === 0
        ? 'Проблема: менеджеры не успевали быстро и одинаково качественно консультировать клиентов по ассортименту, наличию, отличиям товаров и типовым возражениям. Из-за этого часть лидов терялась еще на этапе выбора.'
        : index === 1
          ? 'Проблема: первичные консультации и звонки перегружали операторов, ответы были не всегда быстрыми и единообразными, а часть обращений терялась в пиковые часы. Бизнесу нужен был голосовой консультант, который работает 24/7 и отвечает одинаково корректно на основе знаний компании.'
          : index === 2
            ? 'Проблема: интернет-магазину был нужен умный виртуальный консультант, который сможет круглосуточно отвечать на вопросы покупателей, подбирать товары, объяснять условия заказа и доставки, а также сокращать нагрузку на поддержку без потери качества сервиса.'
            : index === 3
              ? 'Проблема: врачи и администраторы клиник тратили слишком много времени на ручной поиск по МКБ, внутренним регламентам и справочной документации. Это замедляло работу, повышало риск ошибок и отвлекало персонал от пациентов.'
              : index === 4
                ? 'Проблема: компании требовался собственный AI-сервис, размещенный внутри корпоративного периметра, чтобы сохранить полный контроль над данными, соответствовать требованиям информационной безопасности и при этом дать сотрудникам удобный доступ к ИИ-инструментам без внешних API и токенов.'
                : 'В этом блоке будет описана бизнес-задача проекта, которую решает интеллектуальная система.',
    features:
      index === 0
        ? [
          'Обучили чат-бота на базе знаний компании с применением RAG, чтобы ответы опирались на актуальную внутреннюю информацию.',
          'Подключили актуальные остатки и ассортимент, чтобы бот рекомендовал только реально доступные товары.',
          'Настроили сценарии выявления потребности клиента, уточняющих вопросов и подбора подходящих вариантов.',
          'Проработали обработку возражений: «дорого», «подумаю», «не уверен», чтобы диалог не ломался и вел к покупке.',
          'Развернули решение на сервере заказчика, без внешних SaaS-зависимостей, токенов и сторонних API-ключей.',
          'Сделали архитектуру, которую легко масштабировать, дополнять новыми знаниями и адаптировать под продажи B2B и retail.',
        ]
        : index === 1
          ? [
            'Использовали VAPI как голосовой интерфейс: бот ведет естественный диалог, распознает речь и отвечает синтезированным голосом без задержек.',
            'Оркестрацию сценариев, маршрутизацию запросов и управление ветками диалога собрали в n8n для гибкой и масштабируемой логики.',
            'Интегрировали RAG-архитектуру, чтобы все ответы формировались строго по актуальной базе знаний компании без галлюцинаций.',
            'Добавили запись разговоров, логирование диалогов и передачу данных в CRM / внутренние системы для последующей работы команды.',
            'Настроили голосовые консультации 24/7, презентацию услуг и мягкое сопровождение клиента по сценарию без потери качества сервиса.',
            'Сделали решение, которое снижает нагрузку на операторов и повышает скорость обработки обращений в пиковые часы.',
          ]
          : index === 2
            ? [
              'Создали AI-агента на платформе Dify, который автоматизирует консультацию клиентов и помогает им быстрее принимать решение о покупке.',
              'Собрали и структурировали базу знаний по товарному каталогу, условиям доставки, оплате и логике обслуживания клиентов.',
              'Разработали диалоговые сценарии под разные намерения: выбор товара, сравнение вариантов, уточнение параметров и ответы на вопросы по заказу.',
              'Интегрировали магазинную систему для получения актуальной информации о продуктах, остатках и условиях покупки.',
              'Провели тестирование на реальных кейсах и дообучение агента, чтобы ответы звучали естественно и оставались корректными.',
              'Настроили масштабируемую архитектуру на базе RAG, чтобы легко расширять базу знаний и адаптировать сценарии под бизнес.',
            ]
            : index === 3
              ? [
                'Собрали и структурировали базу знаний по МКБ, внутренней медицинской документации и регламентам клиник, чтобы ответы опирались на актуальные источники.',
                'Использовали LlamaIndex для чанкинга и индексации документов, затем подключили их к Dify через RAG-архитектуру.',
                'Реализовали контекстный чат для врачей и администраторов с точными ответами по кодам МКБ, симптомам, диагнозам и справочной информации.',
                'Сократили время поиска данных и снизили риск ошибок за счет быстрых, релевантных и проверяемых ответов внутри организации.',
                'Развернули веб-чат на базе Chatlit, чтобы сотрудники могли пользоваться ассистентом без сложной установки и дополнительного обучения.',
                'Спроектировали решение под закрытое использование в сети клиник с возможностью адаптации под разные роли сотрудников.',
              ]
              : index === 4
                ? [
                  'Провели аудит серверной инфраструктуры и требований к производительности, чтобы выбрать корректную схему локального развертывания.',
                  'Развернули LLM на внутренних серверах заказчика с оптимизацией под доступные аппаратные ресурсы и графические ускорители.',
                  'Установили и настроили Open WebUI как современный корпоративный интерфейс для комфортной работы сотрудников с моделью.',
                  'Настроили систему доступа и разграничение прав пользователей, чтобы AI-сервис был безопасен для корпоративного использования.',
                  'Интегрировали решение в существующую IT-инфраструктуру и провели тестирование производительности на реальных сценариях.',
                  'Оптимизировали работу сервиса так, чтобы компания получила стабильную локальную AI-среду без зависимости от облачных поставщиков.',
                ]
                : [
                  'Автоматическая обработка обращений',
                  'Интеграция с CRM и внутренними сервисами',
                  'Сценарии квалификации и маршрутизации лидов',
                  'Сводки и аналитика по диалогам',
                ],
    technologies:
      index === 0
        ? ['On-Prem', 'LLM', 'RAG', 'Knowledge Base', 'Sales AI', 'Python', 'FastAPI']
        : index === 1
          ? ['VAPI', 'n8n', 'RAG', 'LLM', 'STT', 'TTS', 'CRM']
          : index === 2
            ? ['Dify', 'LLM', 'Knowledge Base', 'API Integration', 'RAG', 'E-commerce']
            : index === 3
              ? ['Dify', 'LlamaIndex', 'RAG', 'LLM', 'МКБ', 'Chatlit', 'Medical Knowledge Base']
              : index === 4
                ? ['LLM', 'Open WebUI', 'Docker', 'Linux', 'GPU Optimization', 'On-Prem', 'Security']
                : ['LLM', 'RAG', 'n8n', 'CRM API'],
    result:
      index === 0
        ? 'Результат: бизнес получил автономного AI-менеджера, который стабильно консультирует клиентов, ускоряет выбор товара и помогает доводить больше диалогов до покупки, снимая нагрузку с команды продаж.'
        : index === 1
          ? 'Результат: компания получила полноценного голосового AI-консультанта, который работает в реальном времени, обрабатывает первичные обращения 24/7, повышает качество сервиса и освобождает операторов от рутинных звонков.'
          : index === 2
            ? 'Результат: интернет-магазин получил умного AI-консультанта, который закрывает до 80% типовых вопросов без участия операторов, мгновенно отвечает на запросы покупателей и повышает конверсию за счет более быстрого и точного сопровождения клиента на пути к покупке.'
            : index === 3
              ? 'Результат: сеть клиник получила внутреннего AI-ассистента, который ускоряет доступ к профессиональной информации, помогает персоналу быстрее ориентироваться в МКБ и документации, а также снижает операционные риски и нагрузку на команду.'
              : index === 4
                ? 'Результат: заказчик получил полностью локальную AI-систему с удобным интерфейсом, защищенным хранением данных и нулевой зависимостью от внешних API. Сотрудники теперь используют ИИ внутри корпоративного периметра, а компания сохраняет контроль над информацией и операционными затратами.'
                : 'Здесь будет итог внедрения: измеримые показатели, оптимизация процессов и эффект для бизнеса.',
  })),
];

export default function Architecture() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <section
        id="projects"
        className="relative isolate overflow-hidden border-t border-slate-100 py-24 md:py-28 bg-[linear-gradient(180deg,#e7f3fb_0%,#ecf5f8_42%,#e8f1f4_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(255,255,255,0.45),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(212,236,252,0.30),transparent_40%),radial-gradient(circle_at_78%_82%,rgba(191,226,251,0.24),transparent_44%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_88%_74%_at_50%_42%,#000_60%,transparent_100%)]"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(232,241,244,0)_0%,rgba(232,241,244,0.74)_54%,#e8f1f4_100%)]"></div>

        <div id="portfolio" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Наше портфолио проектов
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
              Внедрение AI-агентов в бизнес-процессы.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {placeholderCards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 16, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[22px] border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,248,251,0.9))] shadow-[0_16px_36px_rgba(25,31,45,0.10),0_6px_18px_rgba(25,31,45,0.05),inset_0_1px_0_rgba(255,255,255,0.88)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-200/95 hover:shadow-[0_24px_48px_rgba(25,31,45,0.14),0_8px_24px_rgba(25,31,45,0.08)]"
              >
                <div className="relative h-52 overflow-hidden bg-[linear-gradient(135deg,#d7e7f2_0%,#e8f1f7_52%,#dce9f4_100%)]">
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  {card.image && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,25,31,0.18)_0%,rgba(5,25,31,0.32)_50%,rgba(5,25,31,0.70)_100%)]"></div>}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:26px_26px]"></div>
                  <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(148,196,231,0.34),transparent_68%)] blur-2xl"></div>
                  <div className="pointer-events-none absolute -bottom-20 -left-14 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(186,223,245,0.32),transparent_70%)] blur-2xl"></div>

                  <span className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] rounded-full border border-white/70 bg-sky-600/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-white shadow-[0_8px_18px_rgba(2,132,199,0.28)]">
                    {card.category}
                  </span>

                  <h3 className={`absolute bottom-4 left-4 right-4 text-[1.25rem] font-extrabold leading-[1.2] tracking-[-0.02em] ${card.image ? 'text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]' : 'text-slate-900'}`}>
                    {card.title}
                  </h3>
                </div>

                <div className="flex min-h-[220px] flex-col px-6 pb-6 pt-5">
                  <p className="text-[0.98rem] leading-[1.65] text-slate-600">{card.description}</p>

                  <button
                    type="button"
                    onClick={() => setActiveProject(card)}
                    className="mt-auto inline-flex min-h-[50px] w-full items-center justify-center rounded-[16px] border-2 border-[#151515] px-5 py-3 text-[0.93rem] font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white hover:shadow-[0_8px_20px_rgba(17,17,17,0.14)]"
                  >
                    Смотреть проект
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute inset-0 bg-[rgba(3,20,26,0.74)] backdrop-blur-[8px]"
            onClick={() => setActiveProject(null)}
          ></button>

          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_35px_90px_rgba(3,20,26,0.35)]">
            <div className="relative h-[130px] sm:h-[160px] overflow-hidden bg-[linear-gradient(135deg,#d7e7f2_0%,#e8f1f7_52%,#dce9f4_100%)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,25,31,0.06)_0%,rgba(5,25,31,0.22)_50%,rgba(5,25,31,0.9)_100%)]"></div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              <button
                type="button"
                aria-label="Закрыть описание проекта"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white transition-colors hover:bg-sky-600"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-8 sm:right-8">
                <span className="inline-flex rounded-full bg-sky-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-white">
                  {activeProject.category}
                </span>
                <h3 id="project-modal-title" className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <div className="max-h-[calc(100vh-340px)] overflow-y-auto px-6 py-7 sm:px-8 sm:py-9">
              <p className="text-[1.02rem] leading-[1.7] text-slate-600">{activeProject.description}</p>

              <div className="mt-7 border-t border-slate-200 pt-7">
                <h4 className="text-[1.2rem] font-bold tracking-tight text-slate-900">Задача проекта</h4>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-slate-600">{activeProject.task}</p>
              </div>

              <div className="mt-7">
                <h4 className="text-[1.2rem] font-bold tracking-tight text-slate-900">Что было реализовано</h4>
                <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[0.92rem] leading-[1.6] text-slate-600"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="text-[1.2rem] font-bold tracking-tight text-slate-900">Использованные технологии</h4>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {activeProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-sky-200/90 bg-[linear-gradient(135deg,#edf8f6_0%,#f8fbfa_100%)] p-5">
                <span className="text-[11px] font-black uppercase tracking-[0.1em] text-sky-700">Результат проекта</span>
                <p className="mt-2 text-[0.98rem] leading-[1.7] text-slate-700">{activeProject.result}</p>
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-[0.92rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                onClick={() => setActiveProject(null)}
              >
                Обсудить похожий проект
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
