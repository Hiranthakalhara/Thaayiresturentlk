import React, { useState } from 'react';
import { ThaayiLogo } from './ThaayiLogo';
import { Phone, Mail, MapPin, Instagram, Facebook, Star, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'menu' | 'about' | 'story' | 'gallery' | 'reviews' | 'contact') => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#141212] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand Ethos */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <ThaayiLogo variant="dark" size="md" />
            </button>
            <p className="text-[#FAF8F5]/70 text-xs sm:text-sm leading-relaxed font-light">
              Artisanal Sri Lankan fine dining rooted in royal heritage, coastal spices, and fragrant wood-fired traditions. An epicurean celebration in the heart of Colombo.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest block">
                Colombo · Gourmet Ceylon
              </span>
            </div>
          </div>

          {/* Col 2: Service Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">Service Hours</h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF8F5]/75">
              <div>
                <strong className="text-white block font-medium">Lunch Service</strong>
                <span className="text-[#FAF8F5]/60 text-xs">12:00 PM – 3:30 PM Daily</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Dinner Service</strong>
                <span className="text-[#FAF8F5]/60 text-xs">6:00 PM – 11:00 PM Daily</span>
              </div>
              <div className="pt-1">
                <strong className="text-[#C59B27] block font-medium">Ceylon Tasting Sessions</strong>
                <span className="text-[#FAF8F5]/60 text-xs">Thursdays to Sundays from 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Sanctuary & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">Sanctuary &amp; Contact</h4>
            <div className="space-y-2.5 text-xs text-[#FAF8F5]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>Ward Place, Colombo 07, Western Province, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a href="tel:+94112345678" className="hover:text-white transition-colors">
                  Tel: +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a href="mailto:hello@thaayi.lk" className="hover:text-white transition-colors">
                  Inquiries: hello@thaayi.lk
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="#instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#80182A] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#80182A] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#tripadvisor"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#80182A] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="TripAdvisor"
                >
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: The Thaayi Gazette */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white">The Thaayi Gazette</h4>
            <p className="text-[#FAF8F5]/70 text-xs leading-relaxed font-light">
              Receive discreet private dinner invitations, seasonal wild spice menus, and chef stories.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#1E1B1B] border border-white/15 text-xs text-white placeholder:text-[#FAF8F5]/40 focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#C59B27] hover:bg-[#9E7B1C] text-[#141212] font-serif font-bold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4 text-white" /> : 'Join'}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-[#C59B27] block">
                  ✓ Welcome to the Thaayi Circle.
                </span>
              )}
            </form>
            <span className="text-[11px] text-[#FAF8F5]/50 block">
              We honor your privacy and culinary quietude.
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60 font-light">
          <div>
            © 2025 Thaayi Restaurant. All rights reserved. Authentic Sri Lankan Heritage.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenReservation}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reservations Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
