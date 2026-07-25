const logoModules = (import.meta as unknown as {
  glob: (pattern: string, options: { eager: boolean; import: string }) => Record<string, string>;
}).glob('../../files/logo/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const logos = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export default function BrandMarquee() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#dfe7e5_0%,#ece0c8_52%,#f6e9cd_100%)] border-b border-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,236,242,0.88),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent_72%)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-55 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:18px_18px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/55 bg-white/52 backdrop-blur-md shadow-[0_12px_28px_rgba(15,23,42,0.055)]">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fbf3e4]/95 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f3ead8]/95 to-transparent z-10"></div>

          <div className="flex w-max items-center gap-10 px-6 py-2 animate-[problemLogoMarquee_34s_linear_infinite]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="h-10 w-44 flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt=""
                  className="max-h-9 max-w-full w-auto object-contain grayscale brightness-0 opacity-55"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes problemLogoMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 1.25rem));
          }
        }
      `}</style>
    </section>
  );
}