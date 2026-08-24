import { siteConfig } from '../data/site';

const services = [
  ['Правка сайтов', 'Исправление ошибок, обновление контента и доработка существующих страниц', 'от 10 000 руб.'],
  ['Создание нового сайта', 'Разработка сайта с дизайном, адаптивной вёрсткой и подключением нужных функций', 'от 30 000 руб.'],
  ['Создание чат-бота', 'Сценарии, интеграции и запуск бота для сайта, Telegram или ВКонтакте', 'от 45 000 руб.'],
  ['Голосовой бот', 'Распознавание речи, синтез голоса и сценарии обработки звонков', 'от 80 000 руб.'],
  ['3D-аватар', 'Разработка визуального персонажа и подключение к AI-сценариям', 'от 120 000 руб.'],
  ['AI-консультант для сайта', 'Диалоговый помощник по продуктам, услугам и частым вопросам', 'от 55 000 руб.'],
  ['AI-менеджер продаж', 'Квалификация лидов, ответы клиентам и передача заявок в CRM', 'от 75 000 руб.'],
  ['Автоматизация ВКонтакте', 'Обработка сообщений, комментариев и заявок в сообществе', 'от 40 000 руб.'],
  ['Интеграция с CRM', 'Связка AI-решений с Bitrix24, amoCRM или вашей системой', 'от 35 000 руб.'],
  ['AI-база знаний', 'Поиск ответов по внутренним документам и материалам компании', 'от 60 000 руб.'],
  ['Анализ диалогов с клиентами', 'Выявление тем, качества сервиса и точек роста продаж', 'от 50 000 руб.'],
  ['AI-генерация контента', 'Настройка создания постов, карточек товаров и писем', 'от 30 000 руб.'],
  ['AI-аналитика данных', 'Отчёты, прогнозы и понятные выводы по данным бизнеса', 'от 70 000 руб.'],
  ['AI-ассистент для сотрудников', 'Помощник для регламентов, задач и внутренних запросов', 'от 65 000 руб.'],
  ['Техническое сопровождение AI-решений', 'Поддержка, улучшение сценариев и контроль работы интеграций', 'от 20 000 руб./мес.'],
] as const;

export default function PriceList() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{siteConfig.name}</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Прайс-лист</h1>
            <p className="mt-3 max-w-2xl text-slate-600">Стоимость зависит от задачи, количества интеграций и объёма работ. Точная смета формируется после обсуждения проекта.</p>
          </div>
          <a href="/" className="w-fit text-sm font-semibold text-blue-700 underline underline-offset-4">
            На главную
          </a>
        </header>

        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="min-w-[720px] w-full border-collapse text-left">
            <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Услуга</th>
                <th className="px-5 py-4 font-semibold">Что входит</th>
                <th className="px-5 py-4 text-right font-semibold">Стоимость</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {services.map(([service, description, price]) => (
                <tr key={service}>
                  <td className="px-5 py-4 font-semibold text-slate-900">{service}</td>
                  <td className="px-5 py-4 text-slate-600">{description}</td>
                  <td className="px-5 py-4 text-right font-semibold whitespace-nowrap text-slate-900">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-slate-500">Чтобы получить расчёт для вашей задачи, свяжитесь с нами через форму на главной странице.</p>
      </div>
    </main>
  );
}
