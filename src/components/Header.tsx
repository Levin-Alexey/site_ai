import { Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
              <Bot size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">VK.AI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Возможности</a>
            <a href="#showcase" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Кейсы</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Стоимость</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-colors cursor-pointer">
              Рассчитать проект
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
