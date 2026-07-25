import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ChevronRight, Play } from 'lucide-react';
import heroVideo from '/files/main.mp4';

export default function Hero() {
  const mainHeadline = 'AI агенты и боты нового поколения для бизнеса, которые ';
  const accentHeadline = 'продают и автоматизируют';
  const [typedAccentLength, setTypedAccentLength] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setTypedAccentLength(accentHeadline.length);
      return;
    }

    setTypedAccentLength(0);
    let typeInterval: ReturnType<typeof setInterval> | null = null;

    const startDelay = setTimeout(() => {
      typeInterval = setInterval(() => {
        setTypedAccentLength((current: number) => {
          if (current >= accentHeadline.length) {
            if (typeInterval) {
              clearInterval(typeInterval);
            }
            return current;
          }
          return current + 1;
        });
      }, 135);
    }, 250);

    return () => {
      clearTimeout(startDelay);
      if (typeInterval) {
        clearInterval(typeInterval);
      }
    };
  }, [isMobile, accentHeadline.length]);

  const typedAccentText = isMobile
    ? accentHeadline
    : accentHeadline.slice(0, typedAccentLength);

  return (
    <section className="relative h-screen overflow-hidden bg-white flex items-center">
      {/* Fullscreen background video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/45"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {isMobile ? (
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05] max-w-5xl">
            {mainHeadline}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 block sm:inline">
              {accentHeadline}
            </span>
          </h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05] max-w-5xl"
          >
            {mainHeadline}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 block sm:inline">
              {typedAccentText}
            </span>
            <span className="ml-1 inline-block h-[0.9em] w-[0.08em] align-[-0.08em] bg-white animate-pulse" aria-hidden="true" />
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-slate-100/90 mb-12 leading-relaxed font-medium"
        >
          Мы внедряем интеллектуальных автономных агентов с RAG-базами знаний, интеграцией мультимедиа и сквозной аналитикой.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" href="#contact" icon={<ChevronRight size={18} className="translate-y-[1px]" />} className="w-full sm:w-auto group">
            Рассчитать стоимость проекта
          </Button>
          <Button variant="outline" size="lg" href="#capabilities" icon={<Play size={18} className="text-white/70 group-hover:text-white transition-colors" />} className="w-full sm:w-auto group border-white/70 text-white hover:bg-white/10 hover:border-white bg-transparent shadow-none">
            Посмотреть возможности
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
