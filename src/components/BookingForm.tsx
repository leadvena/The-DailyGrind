import React, { useState } from 'react';
import { Calendar, Users, Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="bookings" className="bg-espresso text-cream p-12 lg:p-16 relative overflow-hidden">
      <div className="relative z-10">
        {!submitted ? (
          <>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-amber-light uppercase mb-6">RESERVE A CORNER</h2>
            <p className="text-4xl md:text-6xl font-serif font-black leading-[0.9] tracking-tighter mb-12 italic">
              BOOK A <span className="not-italic text-amber-light">SESSION</span>
            </p>
            <p className="text-cream/60 max-w-sm mb-12 text-sm leading-relaxed">
              Planning a study group or a book club meeting? Reserve our historic corner table or a cozy nook ahead of time.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-light" />
                    <input type="date" required className="w-full bg-cream/10 border border-cream/10 p-4 pl-12 rounded text-xs font-bold focus:border-amber-light outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-light" />
                    <input type="number" min="1" max="10" placeholder="Number of guests" required className="w-full bg-cream/10 border border-cream/10 p-4 pl-12 rounded text-xs font-bold focus:border-amber-light outline-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Occasion</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about your booking (e.g. Study group, Book club)" 
                  className="w-full bg-cream/10 border border-cream/10 p-4 rounded text-xs font-bold focus:border-amber-light outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <input type="email" placeholder="Email Address" required className="flex-1 bg-cream/10 border border-cream/10 p-4 rounded text-xs font-bold focus:border-amber-light outline-none" />
                <button 
                  type="submit" 
                  className="bg-amber-dark text-white px-8 py-4 rounded font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-espresso transition-all"
                >
                  <Send className="w-4 h-4" />
                  REQUEST BOOKING
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-amber-light rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-10 h-10 text-espresso" />
            </div>
            <h3 className="text-4xl font-serif italic mb-4">Request Sent!</h3>
            <p className="text-cream/60 max-w-xs mx-auto">We've received your request and will confirm via email shortly. Sit back, we've got the coffee ready.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-12 text-[10px] font-black uppercase tracking-widest border-b-2 border-amber-light pb-1 hover:text-amber-light transition-colors"
            >
              make another request
            </button>
          </div>
        )}
      </div>

      {/* Decorative bookstore-inspired icon */}
      <div className="absolute -right-10 -bottom-10 opacity-5">
        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
    </div>
  );
}
