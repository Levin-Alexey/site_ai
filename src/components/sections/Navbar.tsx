import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../ui/button';

export default function Navbar() {
  const [pastFirstScreen, setPastFirstScreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastFirstScreen(window.scrollY >= window.innerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-2 sm:px-3">
      <motion.div
        initial={{ opacity: 0, y: -18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-[1064px] h-[60px] mx-auto px-[18px] sm:px-[28px] flex items-center justify-between gap-4 rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 ${pastFirstScreen ? 'bg-black' : 'bg-transparent'}`}
      >
        <a href="#" className="flex items-center gap-2 shrink-0 whitespace-nowrap" aria-label="Главная">
          <span className="font-medium text-[21px] sm:text-[24px] leading-none tracking-[-0.04em]">
            <span className="bg-gradient-to-r from-[#ffcd71] via-[#ff88f5] to-[#8ec1ff] bg-clip-text text-transparent">
              Neuron
            </span>
          </span>
          <span className="w-[2px] h-[27px] bg-white/90 shrink-0" />
          <span className="text-white text-[21px] sm:text-[24px] leading-none font-bold tracking-[-0.08em]">
            AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-[34px] flex-1 justify-center">
          <a href="#solutions" className="text-[15px] font-bold text-white/95 hover:opacity-70 transition-opacity">
            Решения
          </a>
          <a href="#capabilities" className="text-[15px] font-bold text-white/95 hover:opacity-70 transition-opacity">
            Технологии
          </a>
          <a href="#portfolio" className="text-[15px] font-bold text-white/95 hover:opacity-70 transition-opacity">
            Портфолио
          </a>
          <a href="#industries" className="text-[15px] font-bold text-white/95 hover:opacity-70 transition-opacity">
            Индустрии
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            href="#contact"
            className="h-[42px] rounded-full px-[18px] bg-white text-[#005bd8] hover:bg-white shadow-none border-0"
          >
            Оставить заявку
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="#footer"
            className="h-[42px] rounded-full px-[18px] bg-[#5170c0] hover:bg-[#4663ab] shadow-none"
          >
            Контакты
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black shrink-0"
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-2 right-2 top-[76px] rounded-[28px] bg-black px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] md:hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <a href="#solutions" onClick={closeMobileMenu} className="text-[18px] font-bold text-white">
                    Решения
                  </a>
                  <a href="#capabilities" onClick={closeMobileMenu} className="text-[18px] font-bold text-white">
                    Технологии
                  </a>
                  <a href="#portfolio" onClick={closeMobileMenu} className="text-[18px] font-bold text-white">
                    Портфолио
                  </a>
                  <a href="#industries" onClick={closeMobileMenu} className="text-[18px] font-bold text-white">
                    Индустрии
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    href="#contact"
                    className="h-[42px] w-full rounded-full bg-white text-[#005bd8] hover:bg-white/95 border-0"
                    onClick={closeMobileMenu}
                  >
                    Оставить заявку
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    href="#footer"
                    className="h-[42px] w-full rounded-full bg-[#5170c0] hover:bg-[#4663ab] border-0"
                    onClick={closeMobileMenu}
                  >
                    Контакты
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
