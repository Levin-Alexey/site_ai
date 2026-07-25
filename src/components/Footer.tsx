import { Bot, Youtube, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-900">
                <Bot size={24} />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-white">VK<span className="text-indigo-500">.</span>AI</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-md">
              Сложные инженерные решения и автономные агенты для бизнеса ВКонтакте. Автоматизируйте продажи и поддержку с помощью нейросетей нового поколения.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Архитектура</h4>
            <ul className="space-y-4">
              <li><a href="#возможности" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Enterprise Capabilities</a></li>
              <li><a href="#архитектура" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Data Pipeline</a></li>
              <li><a href="#кейсы" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Use Cases</a></li>
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Контакты</h4>
             <ul className="space-y-4">
              <li className="font-medium text-slate-400">hello@vk-ai-agency.ru</li>
              <li className="font-medium text-slate-400">Москва, Пресненская наб., 12<br/>Башня Федерация, 45 этаж</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} VK.AI Agency. Все права защищены. Powered by AI.</p>
          <div className="flex gap-4">
            <div className="flex gap-2">
               <span className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-xs font-mono">React</span>
               <span className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-xs font-mono">Tailwind</span>
               <span className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-xs font-mono">OpenAI API</span>
               <span className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-xs font-mono">RAG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
