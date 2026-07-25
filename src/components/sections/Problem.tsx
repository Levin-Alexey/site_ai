import { SectionTitle } from '../ui/SectionTitle';
import problemBg from '/files/s2.webp';

export default function Problem() {
  return (
    <section className="relative isolate flex min-h-[54svh] items-center justify-center overflow-hidden border-b border-slate-100 bg-[#0b1520] py-12 sm:min-h-[78svh] sm:py-12 lg:min-h-[84svh]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={problemBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[46%_21%] opacity-100 sm:object-[50%_25%]"
        />
        <div className="section-fade-top fade-beige fade-soft h-[2.25rem] sm:h-[3rem] lg:h-[3.5rem]"></div>
        <div className="absolute inset-0 bg-black/22 sm:bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_56%_42%_at_50%_52%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0)_78%)] sm:bg-[radial-gradient(ellipse_50%_36%_at_50%_52%,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0)_78%)]"></div>
        <div className="absolute inset-0 opacity-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        <div className="section-fade-bottom fade-clay fade-soft h-[2.5rem] sm:h-[3.25rem] lg:h-[3.9rem]"></div>
      </div>

      <div className="site-shell relative z-10 [--site-padding-inline:0.75rem] sm:[--site-padding-inline:clamp(1rem,2.4vw,2rem)]">
        <SectionTitle
          alignment="center"
          className="max-w-3xl mx-auto mb-0"
          title={<span className="text-white/95">Теряете клиентов из-за инфраструктуры, которая не масштабируется?</span>}
          subtitle={<span className="text-[#a3f3fd] text-[clamp(1.06rem,4.25vw,1.3rem)] sm:text-[clamp(1.08rem,1.95vw,1.34rem)] max-w-[36ch] sm:max-w-none mx-auto block">AI агенты могут обрабатывать огромные потоки данных, но ручная обработка делает этот процесс неэффективным и ресурсоемким.</span>}
        />
      </div>
    </section>
  );
}
