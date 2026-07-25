import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import icon1 from '/files/stics/1.webp';
import icon2 from '/files/stics/2.webp';
import icon3 from '/files/stics/3.webp';
import icon4 from '/files/stics/4.webp';
import icon5 from '/files/stics/5.webp';

const cards = [
  {
    id: 'smart-chatbots',
    toneClass: 'ai-step--1',
    badge: 'УМНЫЕ ЧАТ-БОТЫ',
    title: 'Чат-боты, которые закрывают диалог до заявки и продажи',
    description:
      'Проектируем AI-ботов для сайта, Telegram и ВКонтакте, которые отвечают мгновенно, уверенно ведут клиента по воронке, снимают возражения, собирают данные и переводят в заявку без потери интереса.',
    image: icon1,
    alt: 'Умные чат-боты для бизнеса',
  },
  {
    id: 'rag',
    toneClass: 'ai-step--2',
    badge: 'БАЗЫ ЗНАНИЙ RAG',
    title: 'Корпоративные базы знаний с точными ответами без галлюцинаций',
    description:
      'Собираем RAG-архитектуру на ваших документах, регламентах, каталогах и FAQ, чтобы сотрудники и клиенты получали быстрые, проверяемые и контекстные ответы, опирающиеся только на реальную базу компании.',
    image: icon2,
    alt: 'Базы знаний RAG',
  },
  {
    id: 'ai-agents',
    toneClass: 'ai-step--3',
    badge: 'АГЕНТЫ НА БАЗЕ ИИ',
    title: 'ИИ-агенты, которые берут на себя сложные многошаговые процессы',
    description:
      'Создаем агентные системы, способные планировать действия, работать с API и сервисами, анализировать данные, готовить документы, контролировать этапы и подключать человека только там, где это действительно нужно.',
    image: icon3,
    alt: 'Агенты на базе искусственного интеллекта',
  },
  {
    id: 'ai-automation',
    toneClass: 'ai-step--4',
    badge: 'АВТОМАТИЗАЦИЯ НА БАЗЕ ИИ',
    title: 'Автоматизация процессов, которая снижает нагрузку и ускоряет операции',
    description:
      'Интегрируем CRM, мессенджеры, почту, таблицы и внутренние системы в единый поток, чтобы заявки, документы, отчеты и рутинные операции обрабатывались быстрее, стабильнее и с меньшим количеством ручных ошибок.',
    image: icon4,
    alt: 'Автоматизация бизнес-процессов на базе ИИ',
  },
  {
    id: '3d-avatars',
    toneClass: 'ai-step--5',
    badge: '3D-АВАТАРЫ И АССИСТЕНТЫ',
    title: 'Цифровые 3D-ассистенты, которые усиливают бренд и клиентский опыт',
    description:
      'Разрабатываем 3D-ассистентов с голосом, анимацией и AI-логикой для консультаций, обучения, презентаций и вау-эффекта. Это формат, который одновременно повышает вовлечение, узнаваемость и ощущение технологичности бренда.',
    image: icon5,
    alt: '3D-аватары и виртуальные ассистенты',
  },
];

export default function AIServicesStack() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>('.ai-step'));
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let ticking = false;

    const resetCards = () => {
      items.forEach((item) => {
        item.style.setProperty('--scale', '1');
        item.style.setProperty('--brightness', '1');
        item.style.setProperty('--card-opacity', '1');
      });
    };

    const updateCards = () => {
      ticking = false;

      if (!desktopQuery.matches || reduceMotionQuery.matches) {
        resetCards();
        return;
      }

      let activeIndex = -1;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const stickyTop = Number.parseFloat(getComputedStyle(item).top) || 0;

        if (rect.top <= stickyTop + 1) {
          activeIndex = index;
        }
      });

      items.forEach((item, index) => {
        const depth = Math.max(0, activeIndex - index);
        const scale = Math.max(0.94, 1 - depth * 0.022);
        const brightness = Math.max(0.74, 1 - depth * 0.1);
        const opacity = Math.max(0.86, 1 - depth * 0.035);

        item.style.setProperty('--scale', scale.toFixed(3));
        item.style.setProperty('--brightness', brightness.toFixed(3));
        item.style.setProperty('--card-opacity', opacity.toFixed(3));
      });
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateCards);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    desktopQuery.addEventListener('change', requestUpdate);
    reduceMotionQuery.addEventListener('change', requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      desktopQuery.removeEventListener('change', requestUpdate);
      reduceMotionQuery.removeEventListener('change', requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="ai-scroll-section" id="solutions">
      <div className="ai-scroll-grid" aria-hidden="true"></div>
      <div className="ai-scroll-inner">
        <header className="ai-scroll-header">
          <div className="ai-scroll-actions">
            <button type="button" className="ai-scroll-pill-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span>AI Products</span>
            </button>
            <button type="button" className="ai-scroll-pill-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span>AI Tools</span>
            </button>
          </div>
          <h2>Создаем ИИ-продукты, которые дают бизнесу скорость, масштаб и контроль</h2>
          <p>
            От first-response до сложной автоматизации: проектируем решения, которые выглядят премиально, внедряются в процессы без хаоса и создают измеримую ценность для команды, клиентов и выручки.
          </p>
        </header>

        <div className="ai-step-list">
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`ai-step ${card.toneClass}`}
              id={card.id}
              style={{
                ['--card-top' as string]: `calc(var(--ai-sticky-top) + ${index} * var(--ai-stack-gap))`,
                ['--card-z' as string]: `${10 + index}`,
              }}
            >
              <div className="ai-step-content">
                <span className="ai-step-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className="ai-step-link" href="#contact" aria-label={`Узнать больше: ${card.title}`}>
                  Обсудить задачу
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </div>
              <div className="ai-step-image">
                <img src={card.image} alt={card.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}