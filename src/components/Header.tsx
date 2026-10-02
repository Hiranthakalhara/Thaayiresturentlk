import React, { useState } from 'react';
import { ThaayiLogo } from './ThaayiLogo';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Globe, Phone } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'menu' | 'about' | 'story' | 'gallery' | 'reviews' | 'contact';
  onNavigate: (view: 'home' | 'menu' | 'about' | 'story' | 'gallery' | 'reviews' | 'contact') => void;
  onOpenReservation: () => void;
  onOpenTastingJourney: () => void;
  onOpenOrderDrawer: () => void;
  cartItemCount: number;
  currency: 'LKR' | 'USD';
  onToggleCurrency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenReservation,
  onOpenTastingJourney,
  onOpenOrderDrawer,
  cartItemCount,
  currency,
  onToggleCurrency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: HeaderProps['currentView']; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'story', label: 'Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (view: HeaderProps['currentView']) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BANNER */}
      <aside
        aria-label="Tasting experience announcement"
        className="bg-[#1E1B1B] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#C59B27]/30 flex items-center justify-center gap-2 select-none"
      >
        <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
        <span className="text-[#FAF8F5]/90 text-[11px] sm:text-xs">
          Reservations Open for Special Ceylon Feast Tasting Evenings
        </span>
        <button
          onClick={onOpenTastingJourney}
          className="text-[#C59B27] font-semibold underline underline-offset-2 hover:text-white transition-colors cursor-pointer ml-1 inline-flex items-center gap-0.5 text-[11px] sm:text-xs"
        >
          <span>Explore Tasting Journey</span>
          <span>&rarr;</span>
        </button>
      </aside>

      {/* MAIN NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADFD5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* ZONE 1: BRAND LOGO */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#80182A] rounded-lg transition-transform hover:opacity-95"
            aria-label="Thaayi Restaurant Home"
          >
            <ThaayiLogo size="md" />
          </button>

          {/* ZONE 2: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1A1717]">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors hover:text-[#80182A] cursor-pointer ${
                    isActive
                      ? 'text-[#80182A] font-bold'
                      : 'text-[#1A1717]/80 hover:text-[#80182A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#80182A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#EADFD5] text-[11px] font-semibold text-[#1A1717]/80 hover:text-[#80182A] hover:border-[#80182A]/30 bg-white transition-all cursor-pointer"
              title="Toggle Price Currency Display (LKR / USD)"
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{currency}</span>
            </button>

            {/* Table Order Cart Button */}
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2.5 rounded-full bg-white border border-[#EADFD5] hover:border-[#80182A]/40 text-[#1A1717] hover:text-[#80182A] transition-all shadow-sm cursor-pointer"
              aria-label="View current table order"
              title="Current Table Order"
            >
              <ShoppingBag className="w-4 h-4 text-[#80182A]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#80182A] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#FAF8F5] animate-scale-in">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Book a Table */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#80182A] hover:bg-[#5C0E1C] text-white font-medium text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 border border-[#80182A]/20 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1A1717] hover:text-[#80182A] hover:bg-[#EADFD5]/30 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EADFD5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#EADFD5]/60 mb-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 px-3 rounded-lg bg-[#80182A] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Book Table</span>
              </button>
              <button
                onClick={onOpenOrderDrawer}
                className="w-full py-2.5 px-3 rounded-lg bg-white border border-[#EADFD5] text-[#1A1717] text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#80182A]" />
                <span>Order ({cartItemCount})</span>
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? 'bg-[#80182A]/10 text-[#80182A] font-bold'
                    : 'text-[#1A1717]/80 hover:bg-[#EADFD5]/40 hover:text-[#80182A]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#EADFD5]/60 flex items-center justify-between text-xs text-[#68615E] px-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#80182A]" />
                +94 11 234 5678
              </span>
              <button
                onClick={onToggleCurrency}
                className="underline text-[#80182A] font-medium"
              >
                Currency: {currency}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
