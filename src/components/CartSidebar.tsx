import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setStep(1);
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
    else {
      setOrderComplete(true);
      clearCart();
    }
  };

  const completeOrder = () => {
    setOrderComplete(true);
    clearCart();
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[100]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-amber-light/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-espresso flex items-center justify-center rounded">
                    <ShoppingBag className="w-4 h-4 text-amber-light" />
                  </div>
                  <h2 className="text-xl font-serif font-bold italic">Your Selection</h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-cream-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-espresso/40" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                {!orderComplete ? (
                  !isCheckingOut ? (
                    cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <ShoppingBag className="w-16 h-16 text-espresso/10 mb-6" />
                        <p className="text-xl font-serif italic text-espresso/40 mb-8">Your cart is empty</p>
                        <button 
                          onClick={() => setIsCartOpen(false)}
                          className="border border-espresso px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-espresso hover:text-white transition-all"
                        >
                          Find your buzz
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {cart.map((item) => (
                          <div key={item.name} className="flex gap-4 group">
                            {item.image && (
                              <div className="w-20 h-20 shrink-0 rounded overflow-hidden border border-espresso/5">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold uppercase text-xs tracking-widest text-espresso">{item.name}</h3>
                                <span className="text-xs font-black text-amber-dark">{item.price}</span>
                              </div>
                              <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center border border-espresso/10 rounded overflow-hidden">
                                  <button 
                                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                    className="p-1.5 hover:bg-cream-muted transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                    className="p-1.5 hover:bg-cream-muted transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                                <button 
                                  onClick={() => removeFromCart(item.name)}
                                  className="text-espresso/30 hover:text-red-500 font-bold uppercase"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    /* Checkout Steps */
                    <div className="space-y-12">
                      <div className="flex justify-between items-center px-4">
                        {[1, 2, 3].map((s) => (
                          <div key={s} className="flex items-center gap-2">
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${step >= s ? 'bg-amber-dark text-white' : 'bg-espresso/5 text-espresso/40'}`}>
                               {s}
                             </div>
                             {s < 3 && <div className={`w-8 h-[1px] ${step > s ? 'bg-amber-dark' : 'bg-espresso/10'}`}></div>}
                          </div>
                        ))}
                      </div>

                      {step === 1 && (
                        <div className="space-y-6">
                           <h4 className="font-serif text-3xl italic">Order Details</h4>
                           <div className="space-y-4">
                              <input type="text" placeholder="Full Name" className="w-full bg-cream-muted p-4 rounded text-xs font-bold border border-transparent focus:border-amber-light focus:outline-none" />
                              <input type="email" placeholder="Email Address" className="w-full bg-cream-muted p-4 rounded text-xs font-bold border border-transparent focus:border-amber-light focus:outline-none" />
                              <input type="tel" placeholder="Phone Number" className="w-full bg-cream-muted p-4 rounded text-xs font-bold border border-transparent focus:border-amber-light focus:outline-none" />
                           </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6">
                           <h4 className="font-serif text-3xl italic">Pickup Time</h4>
                           <p className="text-xs text-espresso/60 uppercase tracking-widest font-bold">Standard prep time: 10-15 mins</p>
                           <div className="grid grid-cols-2 gap-4">
                              {['As soon as possible', 'In 20 mins', 'In 30 mins', 'Custom time'].map(t => (
                                <button key={t} className="p-4 border border-espresso/10 rounded text-[10px] font-black uppercase text-center hover:border-amber-dark hover:bg-cream-muted">
                                  {t}
                                </button>
                              ))}
                           </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6">
                           <h4 className="font-serif text-3xl italic">Payment</h4>
                           <div className="p-8 bg-espresso text-white rounded-sm">
                              <div className="flex items-center gap-4 mb-8">
                                 <CreditCard className="w-6 h-6 text-amber-light" />
                                 <h5 className="font-bold uppercase tracking-widest text-[10px]">Secure Checkout</h5>
                              </div>
                              <p className="text-xs opacity-60 mb-8 italic">Choose payment method at counter or pay now with saved card.</p>
                              <div className="space-y-4">
                                <button className="w-full bg-amber-light text-espresso p-4 rounded font-black text-xs uppercase">Pay with Card</button>
                                <button className="w-full border border-white/20 p-4 rounded font-black text-xs uppercase" onClick={completeOrder}>Pay at Pickup</button>
                              </div>
                           </div>
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  /* Success Screen */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-serif italic mb-4">Ordered!</h2>
                    <p className="text-espresso/60 mb-8 max-w-[250px]">Your caffeine is being prepared. We'll send a text when it's ready for pickup.</p>
                    <div className="p-6 bg-cream-muted rounded-sm w-full space-y-2">
                       <p className="text-[10px] font-black text-amber-dark uppercase tracking-widest">Order ID: #DG-{(Math.random() * 10000).toFixed(0)}</p>
                       <p className="text-xs font-bold">Estimated Ready: 12:45 PM</p>
                    </div>
                    <button 
                      onClick={() => {
                        setIsCartOpen(false);
                        setIsCheckingOut(false);
                        setOrderComplete(false);
                      }}
                      className="mt-12 w-full bg-espresso text-white py-4 font-black text-xs uppercase tracking-widest rounded"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>

              {!orderComplete && cart.length > 0 && (
                <div className="p-8 bg-cream-muted border-t border-amber-light/10">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-espresso/40">Total Order</h4>
                      <p className="text-3xl font-serif italic text-espresso">${totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="text-[10px] font-bold text-espresso/40 italic">Incl. applicable tax</p>
                  </div>
                  
                  {!isCheckingOut ? (
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-espresso text-white py-5 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-dark transition-all rounded-sm"
                    >
                      CHECKOUT NOW <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : step < 3 ? (
                    <button 
                      onClick={handleNextStep}
                      className="w-full bg-amber-dark text-white py-5 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all rounded-sm shadow-xl"
                    >
                      CONTINUE <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : null}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
