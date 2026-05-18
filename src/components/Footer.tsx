import { Instagram, Facebook, Coffee, Heart } from 'lucide-react';
import { CAFE_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold border-t border-white/5">
      <div className="mb-4 md:mb-0">
        &copy; {currentYear} {CAFE_INFO.name} — Stillwater, MN
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-cream/60">
        <a href="#home" className="hover:text-amber-light transition-colors">Coffee</a>
        <a href="#menu" className="hover:text-amber-light transition-colors">Pastries</a>
        <a href="#about" className="hover:text-amber-light transition-colors">Books</a>
        <a href={`https://wa.me/${CAFE_INFO.whatsapp.replace('+', '')}`} className="text-amber-dark hover:text-white transition-colors">WhatsApp Support</a>
      </div>

      <div className="mt-4 md:mt-0 flex items-center gap-2 text-white/30">
        <span>Handcrafted Excellence</span>
        <Heart className="w-3 h-3 fill-amber-dark text-amber-dark" />
      </div>
    </footer>
  );
}
