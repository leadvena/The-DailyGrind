import { motion } from 'motion/react';
import { FEATURED_DRINKS } from '../constants';

export default function Features() {
  return (
    <section className="bg-amber-light/10 grid grid-cols-1 md:grid-cols-12 gap-1 p-1">
      {/* Featured Headline Block */}
      <div className="md:col-span-5 bg-white p-12 flex flex-col justify-center">
        <h2 className="text-[10px] font-bold tracking-[0.3em] text-amber-dark uppercase mb-6">OUR SPECIALTIES</h2>
        <p className="text-5xl md:text-7xl font-serif font-black text-espresso leading-[0.9] tracking-tighter mb-8">
          CURATED BREWS FOR <br />
          <span className="italic font-normal text-amber-light">COFFEE LOVERS</span>
        </p>
        <p className="text-espresso/60 max-w-sm mb-8 leading-relaxed">
          Every cup is a masterpiece of balance and flavor, crafted with beans sourced from independent ethical roasters.
        </p>
        <div className="w-24 h-1 bg-amber-light"></div>
      </div>

      {/* Featured Drink Block - The Signature One */}
      <div className="md:col-span-3 bg-amber-dark p-12 text-white flex flex-col justify-center items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-80">Seasonal Signature</span>
        <h3 className="font-serif text-4xl italic mb-6 leading-tight">Honey Amber <br/> Latte</h3>
        <p className="text-xs opacity-90 leading-relaxed max-w-[200px]">Locally sourced honey with velvet steamed milk and our house espresso.</p>
        <div className="mt-8 bg-white/10 px-4 py-2 rounded text-sm font-bold">$5.25</div>
      </div>

      {/* Drink Grid Blocks */}
      <div className="md:col-span-4 grid grid-cols-2 gap-1 bg-amber-light/20">
        {FEATURED_DRINKS.slice(2, 4).map((drink) => (
          <div key={drink.name} className="bg-white p-6 flex flex-col justify-between group cursor-pointer hover:bg-cream-muted transition-colors">
            <div className="aspect-square relative mb-4 overflow-hidden rounded">
              <img src={drink.image} alt={drink.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-dark mb-1">{drink.name}</h4>
              <p className="text-xs text-espresso/60">{drink.price}</p>
            </div>
          </div>
        ))}
        {/* Hours Block */}
        <div className="col-span-2 bg-espresso p-8 text-cream">
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-amber-light">Opening Hours</h4>
          <div className="flex justify-between text-sm mb-2 pb-2 border-b border-white/5">
            <span className="opacity-60">Mon – Sat</span>
            <span className="font-bold">6:00 AM – 1:00 PM</span>
          </div>
          <div className="flex justify-between text-sm opacity-40">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
