import { motion } from 'motion/react';
import goldBg from '../../files/bg/gold.avif';
import { Button } from '../ui/button';

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundColor: '#e0d5bb',
        backgroundImage: `url(${goldBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0,transparent_100%)] mix-blend-overlay pointer-events-none"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-[linear-gradient(180deg,#e7dcc3_0%,rgba(231,220,195,0.82)_58%,rgba(224,213,187,0)_100%)]"></div>
      <div className="pointer-events-none absolute -top-12 left-[10%] z-[1] h-36 w-36 rounded-full bg-[rgba(168,142,85,0.18)] blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 right-[12%] z-[1] h-44 w-44 rounded-full bg-[rgba(140,112,61,0.16)] blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-black leading-tight tracking-tight text-[#2f2414] md:text-5xl lg:text-5xl"
        >
          Запустите AI-агента, который будет работать на ваш бизнес каждый день
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="outline" size="xl" href="#contact" className="border-none bg-[#2f2414] font-bold uppercase tracking-wide text-[#f5ecda] hover:bg-[#3a2d1a] hover:text-white">
            Оставить заявку
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
