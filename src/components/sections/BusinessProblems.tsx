import f1 from '/files/fases/f1.png';
import f2 from '/files/fases/f2.png';
import f3 from '/files/fases/f3.png';
import f4 from '/files/fases/f4.png';

export default function BusinessProblems() {
  return (
    <section className="ai-problems-section" id="business-problems">
      <div className="ai-problems-grid-overlay" aria-hidden="true"></div>
      <div className="ai-problems-bg-orb" aria-hidden="true"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-[linear-gradient(180deg,rgba(224,213,187,0)_0%,rgba(231,220,195,0.78)_62%,#e7dcc3_100%)]"></div>
      <div className="pointer-events-none absolute -bottom-16 left-[12%] z-[1] h-44 w-44 rounded-full bg-[rgba(168,142,85,0.20)] blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-20 right-[9%] z-[1] h-52 w-52 rounded-full bg-[rgba(63,146,251,0.14)] blur-3xl"></div>
      <div className="ai-problems-container">
        <div className="ai-problems-header">
          <h2 className="ai-problems-title">ИИ устраняет узкие места, которые мешают бизнесу расти</h2>

          <p className="ai-problems-subtitle">
            Автоматизируем рутину, ускоряем обработку заявок, снижаем нагрузку на сотрудников и помогаем бизнесу масштабироваться без хаоса в процессах.
          </p>
        </div>

        <div className="ai-problems-grid">
          <div className="ai-problem-card">
            <div className="ai-problem-image-wrap">
              <img className="ai-problem-photo ai-problem-photo--f1" src={f1} alt="ИИ решает проблему низкой скорости ответа" loading="lazy" />
            </div>

            <div className="ai-problem-content">
              <div className="ai-problem-number">Проблема 01</div>

              <h3 className="ai-problem-name">Клиенты уходят, потому что долго ждут ответа</h3>

              <div className="ai-problem-role">Низкая скорость ответа</div>

              <p className="ai-problem-description">
                Пока менеджер занят, заявка остывает, клиент теряет интерес и выбирает конкурента. ИИ-бот отвечает мгновенно, консультирует 24/7, задает уточняющие вопросы,
                квалифицирует лид и передает данные в CRM без задержек.
              </p>

              <a href="#contact" className="ai-problem-btn">
                Решить проблему
              </a>
            </div>
          </div>

          <div className="ai-problem-card is-reverse">
            <div className="ai-problem-image-wrap">
              <img className="ai-problem-photo ai-problem-photo--f2" src={f2} alt="ИИ снижает ошибки сотрудников" loading="lazy" />
            </div>

            <div className="ai-problem-content">
              <div className="ai-problem-number">Проблема 02</div>

              <h3 className="ai-problem-name">Сотрудники ошибаются и выгорают из-за рутины</h3>

              <div className="ai-problem-role">Ошибки сотрудников</div>

              <p className="ai-problem-description">
                Повторяющиеся задачи забирают внимание, силы и время команды. ИИ-ассистенты берут на себя типовые ответы, проверку данных, заполнение таблиц,
                подготовку документов, обработку заявок и работу по регламентам.
              </p>

              <a href="#contact" className="ai-problem-btn">
                Решить проблему
              </a>
            </div>
          </div>

          <div className="ai-problem-card">
            <div className="ai-problem-image-wrap">
              <img className="ai-problem-photo" src={f3} alt="ИИ снижает расходы на HR" loading="lazy" />
            </div>

            <div className="ai-problem-content">
              <div className="ai-problem-number">Проблема 03</div>

              <h3 className="ai-problem-name">Слишком дорого постоянно нанимать и обучать людей</h3>

              <div className="ai-problem-role">Высокие издержки на HR</div>

              <p className="ai-problem-description">
                Найм, адаптация и обучение сотрудников требуют времени и денег, а текучка снова возвращает бизнес в начало. ИИ помогает закрывать часть операционных задач,
                сохраняет знания компании и работает стабильно без отпусков и перегрузок.
              </p>

              <a href="#contact" className="ai-problem-btn">
                Решить проблему
              </a>
            </div>
          </div>

          <div className="ai-problem-card is-reverse">
            <div className="ai-problem-image-wrap">
              <img className="ai-problem-photo ai-problem-photo--f4" src={f4} alt="ИИ помогает масштабировать бизнес" loading="lazy" />
            </div>

            <div className="ai-problem-content">
              <div className="ai-problem-number">Проблема 04</div>

              <h3 className="ai-problem-name">Бизнес не растет, потому что уперся в ресурсы</h3>

              <div className="ai-problem-role">Проблема масштабирования</div>

              <p className="ai-problem-description">
                Когда каждый новый клиент требует больше людей, больше контроля и больше ручной работы, рост становится дорогим и хаотичным. ИИ автоматизирует процессы,
                ускоряет операции и позволяет обрабатывать больше заявок без пропорционального увеличения штата.
              </p>

              <a href="#contact" className="ai-problem-btn">
                Решить проблему
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}