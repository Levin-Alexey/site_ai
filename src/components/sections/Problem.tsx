import { SectionTitle } from '../ui/SectionTitle';
import problemBg from '../../files/s2.webp';

export default function Problem() {
  return (
    <section className="relative isolate min-h-screen bg-[#0b1520] border-b border-slate-100 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={problemBg}
          alt=""
          className="absolute left-1/2 top-1/2 min-w-[112%] min-h-[112%] -translate-x-1/2 -translate-y-[calc(50%-75px)] object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          alignment="center"
          className="max-w-3xl mx-auto mb-0"
          title={<span className="text-white/95">Теряете клиентов из-за инфраструктуры, которая не масштабируется?</span>}
          subtitle={<span className="text-[#a3f3fd]">AI агенты могут обрабатывать огромные потоки данных, но ручная обработка делает этот процесс неэффективным и ресурсоемким.</span>}
        />
      </div>
    </section>
  );
}
