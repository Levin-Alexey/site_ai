import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import BrandMarquee from './components/sections/BrandMarquee';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Capabilities from './components/sections/Capabilities';
import UseCases from './components/sections/UseCases';
import Architecture from './components/sections/Architecture';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import PriceList from './components/PriceList';

export default function App() {
  if (window.location.pathname === '/price-list' || window.location.pathname === '/price-list/') {
    return <PriceList />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Problem />
      <Solution />
      <Capabilities />
      <Architecture />
      <UseCases />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
