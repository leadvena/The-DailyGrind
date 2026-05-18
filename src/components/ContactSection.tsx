import { Phone, MapPin, Clock, Star, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../constants';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-1 border border-amber-light/20 bg-amber-light/20 p-1">
          {/* Left: Info */}
          <div className="flex-1 bg-white p-12">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-amber-dark uppercase mb-6">FIND US HERE</h2>
            <p className="text-4xl md:text-6xl font-serif font-black text-espresso leading-[0.9] tracking-tighter mb-12 italic">
              STOP BY AND <br />
              <span className="not-italic text-amber-light underline underline-offset-8 decoration-1 decoration-amber-light/30">SAY HELLO</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-amber-dark">The Location</h4>
                <p className="text-sm font-bold text-espresso">{CAFE_INFO.address}</p>
                <p className="text-xs text-espresso/50">Stillwater, Minnesota 55082</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-amber-dark">Talk to Us</h4>
                <a href={`tel:${CAFE_INFO.phone}`} className="text-sm font-bold text-espresso hover:text-amber-dark transition-colors">
                  {CAFE_INFO.phone}
                </a>
                <p className="text-xs text-espresso/50 underline decoration-amber-light">Read Google Reviews</p>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-2 pt-4 border-t border-espresso/5">
                 <h4 className="text-[10px] uppercase tracking-widest font-black text-espresso/40">Connect</h4>
                 <div className="flex gap-4">
                    <a href="#" className="text-xs font-black hover:text-amber-dark transition-colors uppercase tracking-widest">Instagram</a>
                    <a href="#" className="text-xs font-black hover:text-amber-dark transition-colors uppercase tracking-widest">Facebook</a>
                    <a href={`https://wa.me/${CAFE_INFO.whatsapp.replace('+', '')}`} className="text-xs font-black text-green-600 hover:text-green-700 transition-colors uppercase tracking-widest">WhatsApp</a>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:w-[40%] min-h-[300px] bg-cream-muted">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.579173950669!2d-92.8306013!3d45.0543669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2cd33649ba3f9%3A0xc4e5904ef2caad72!2s217%20N%20Main%20St%2C%20Stillwater%2C%20MN%2055082!5e0!3m2!1sen!2sus!4v1716189600000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps: The Daily Grind Espresso Cafe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
