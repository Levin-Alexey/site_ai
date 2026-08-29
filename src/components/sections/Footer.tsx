import { siteConfig } from '../../data/site';
import footerBg from '/files/bg/68015b04a2bc285f1bc99809_footer-bg.webp';

export default function Footer() {
  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-slate-50 pt-20 pb-10 sm:pt-24">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={footerBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 opacity-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="section-fade-top fade-gold fade-soft"></div>

      <div className="site-shell relative z-10">
        <div className="grid gap-6 md:grid-cols-4 mb-16">
          <div className="md:col-span-2 space-y-4 rounded-xl bg-[rgba(229,227,211,0.80)] p-10 backdrop-blur-[20px]">
            <span className="font-black text-2xl tracking-tight text-slate-900">{siteConfig.name}</span>
            <p className="text-slate-500 font-medium max-w-sm">
              Интеллектуальные автономные агенты для бизнеса ВКонтакте. Автоматизируйте продажи и работу с клиентами с помощью лучших AI моделей.
            </p>
          </div>

          <div className="rounded-xl bg-[rgba(229,227,211,0.80)] p-10 backdrop-blur-[20px]">
            <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-slate-900">Отзывы о нас</h4>
            <div className="flex flex-nowrap items-center justify-center gap-4">
              <a
                href="https://www.fl.ru/users/levin-am2/portfolio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Портфолио на FL.ru"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14"
              >
                <img src="/files/freelance_logo/fl.png" alt="FL.ru" className="h-full w-full object-contain" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://profi.ru/profile/LevinAM14"
                target="_blank"
                rel="noreferrer"
                aria-label="Профиль на Profi.ru"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14"
              >
                <img src="/files/freelance_logo/profi.png" alt="Profi.ru" className="h-full w-full object-contain" loading="lazy" decoding="async" />
              </a>
            </div>
            {/* <a href="/price-list" className="mt-5 block text-center text-sm font-semibold text-slate-900 underline underline-offset-4">
              Прайс-лист
            </a> */}
          </div>

          <div className="rounded-xl bg-[rgba(229,227,211,0.80)] p-10 backdrop-blur-[20px]">
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm">Связь</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.vk}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  VK
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 font-medium text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
