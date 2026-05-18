import { motion } from 'motion/react';
import { Plus, ShoppingBag } from 'lucide-react';
import { MENU_CATEGORIES } from '../constants';
import { useCart } from '../context/CartContext';

export default function MenuSection() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-24 bg-cream-muted">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-amber-dark uppercase mb-4">THE FULL SELECTION</h2>
            <p className="text-5xl md:text-7xl font-serif font-black leading-[0.9] text-espresso tracking-tighter">
              POURED WITH <br/> <span className="italic font-normal text-amber-light">PASSION</span>
            </p>
          </div>
          <div className="bg-white p-6 border border-amber-light/20 rounded italic text-xs max-w-xs text-center shadow-sm">
            "Best espresso in the valley! The atmosphere is unbeatable."
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {MENU_CATEGORIES.map((category) => (
            <div key={category.name} className="flex flex-col gap-8">
              <div className="space-y-6">
                <div className="aspect-[16/9] rounded-sm overflow-hidden border border-espresso/10">
                   <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                   />
                </div>
                <h3 className="font-serif text-3xl text-espresso border-b border-espresso/10 pb-4">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex gap-4 group items-start">
                    {item.image && (
                      <div className="w-16 h-16 shrink-0 rounded overflow-hidden border border-espresso/5 bg-white">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" 
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold uppercase tracking-tight text-espresso transition-colors group-hover:text-amber-dark">
                          {item.name}
                        </span>
                        <div className="flex-1 border-b border-dashed border-espresso/10 mx-3 mb-1"></div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-amber-dark">{item.price}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="p-1.5 bg-espresso text-white rounded hover:bg-amber-dark transition-colors"
                            title="Add to order"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      {item.description && (
                        <p className="text-[10px] uppercase tracking-widest text-espresso/40 font-bold leading-tight">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
