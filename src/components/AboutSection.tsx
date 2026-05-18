import { motion } from 'motion/react';
import { BookOpen, History, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white border-y border-amber-light/20">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-cream-muted border border-amber-light text-amber-dark text-[10px] font-bold uppercase tracking-tighter rounded mb-6">SINCE THE BEGINNING</span>
            <h2 className="text-5xl md:text-[6rem] font-serif font-black italic leading-[0.9] text-espresso mb-10 tracking-tighter">
              A Quiet Corner <br/>
              <span className="text-amber-light not-italic">In The Valley</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-lg text-espresso/80 leading-relaxed font-medium">
                {CAFE_INFO.aboutShort} It's a sanctuary for those who seek solace in the scent of aged paper and fresh-brewed beans.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-espresso rounded-full flex items-center justify-center group-hover:bg-amber-dark transition-colors">
                    <BookOpen className="w-5 h-5 text-amber-light" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest">Readers sanctuary</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-espresso rounded-full flex items-center justify-center group-hover:bg-amber-dark transition-colors">
                    <History className="w-5 h-5 text-amber-light" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest">Heritage Brewing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-8 border-cream-muted shadow-2xl skew-y-3">
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop" 
                alt="Books and Coffee" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-dark p-8 text-white skew-y-[-3deg] hidden md:block">
              <p className="text-3xl font-serif italic">"Where caffeine meets culture."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
