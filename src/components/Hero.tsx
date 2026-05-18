import { motion } from 'motion/react';
import { ArrowRight, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_interior.png" 
          alt="The Daily Grind Coffee Shop Interior" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-deep-brown/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-12 text-cream">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-cream/10 border border-amber-light text-amber-light text-[10px] font-bold uppercase tracking-tighter rounded mb-6">EST. Stillwater, MN</span>
          
          <h1 className="text-6xl md:text-[7rem] font-serif font-black italic leading-[0.85] mb-8 tracking-tighter">
            Stillwater's <br/>
            <span className="text-amber-light not-italic">Oldest</span> <br/>
            Coffee Shop
          </h1>
          
          <p className="text-lg md:text-xl text-cream/70 max-w-sm mb-10 leading-relaxed font-medium">
            Handcrafted espresso and fresh pastries in the heart of downtown Stillwater.
          </p>

          <a 
            href="#menu" 
            className="inline-block border-2 border-cream px-10 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-cream hover:text-espresso transition-all duration-300"
          >
            See Our Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block w-72 p-8 bg-espresso/80 backdrop-blur-md text-cream border border-amber-light/20 rounded-sm relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="font-serif text-3xl italic mb-3">Found Inside a Bookstore</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Browse the shelves of Valley Bookseller while sipping your favorite latte. 
            </p>
            <div className="flex items-center gap-2 text-amber-light text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-amber-light"></span>
              A Reader's Sanctuary
            </div>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-light to-transparent"></div>
      </motion.div>
    </section>
  );
}
