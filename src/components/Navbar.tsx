import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, Phone, ShoppingBag } from 'lucide-react';
import { CAFE_INFO } from '../constants';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Bookings', href: '#bookings' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white border-b border-amber-light/30 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-espresso' : 'bg-white'}`}>
            <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-amber-light' : 'text-espresso'}`}>DG</span>
          </div>
          <h1 className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-espresso' : 'text-white'}`}>
            The Daily Grind <span className={`font-normal transition-colors duration-300 ${isScrolled ? 'text-amber-light' : 'text-amber-light'}`}>Espresso Cafe</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 hover:text-amber-dark ${
                isScrolled ? 'text-espresso/60' : 'text-white/60'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 group"
          >
            <ShoppingBag className={`w-5 h-5 transition-colors ${isScrolled ? 'text-espresso' : 'text-white'}`} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-dark text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href={`tel:${CAFE_INFO.phone}`}
            className="bg-amber-dark text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-espresso transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-3 h-3" />
            {CAFE_INFO.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-espresso' : 'text-cream'} />
          ) : (
            <Menu className={isScrolled ? 'text-espresso' : 'text-cream'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-espresso/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black uppercase tracking-[0.2em] text-espresso border-b border-espresso/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => { setIsCartOpen(true); setIsOpen(false); }}
                  className="flex-1 bg-amber-dark text-white py-4 rounded font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  CART ({totalItems})
                </button>
                <a href={`tel:${CAFE_INFO.phone}`} className="flex-1 bg-espresso text-white text-center py-4 rounded font-black text-xs uppercase tracking-widest">
                  CALL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
