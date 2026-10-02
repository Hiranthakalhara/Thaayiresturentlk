/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { MenuRepertoire } from './components/MenuRepertoire';
import { HomeView } from './components/HomeView';
import { Footer } from './components/Footer';
import { TableOrderDrawer } from './components/TableOrderDrawer';
import { ReservationModal } from './components/ReservationModal';
import { TastingJourneyModal } from './components/TastingJourneyModal';
import { DishDetailModal } from './components/DishDetailModal';
import { Dish, CartItem } from './types/restaurant';
import { ShoppingBag, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation state (Defaulting to 'menu' so the screen matching Image 3 is instantly visible!)
  const [currentView, setCurrentView] = useState<
    'home' | 'menu' | 'about' | 'story' | 'gallery' | 'reviews' | 'contact'
  >('menu');

  // Currency state
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('LKR');

  // Order Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  // Modals state
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isTastingJourneyOpen, setIsTastingJourneyOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Cart operations
  const handleAddToCart = (dish: Dish, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { dish, quantity }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = (
    view: 'home' | 'menu' | 'about' | 'story' | 'gallery' | 'reviews' | 'contact'
  ) => {
    setCurrentView(view);
    if (['about', 'story', 'gallery', 'reviews', 'contact'].includes(view)) {
      setTimeout(() => {
        const el = document.getElementById(view);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1717] font-sans flex flex-col selection:bg-[#80182A] selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenTastingJourney={() => setIsTastingJourneyOpen(true)}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        cartItemCount={totalCartCount}
        currency={currency}
        onToggleCurrency={() => setCurrency((prev) => (prev === 'LKR' ? 'USD' : 'LKR'))}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'menu' ? (
          <MenuRepertoire
            onSelectDish={(dish) => setSelectedDish(dish)}
            onAddToCart={(dish) => handleAddToCart(dish, 1)}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenTastingJourney={() => setIsTastingJourneyOpen(true)}
            currency={currency}
          />
        ) : (
          <HomeView
            onExploreMenu={() => {
              setCurrentView('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenTastingJourney={() => setIsTastingJourneyOpen(true)}
          />
        )}
      </main>

      {/* Floating Action Button for Table Order if items exist */}
      {totalCartCount > 0 && !isOrderDrawerOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-bounce-subtle">
          <button
            onClick={() => setIsOrderDrawerOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#80182A] hover:bg-[#5C0E1C] text-white shadow-2xl transition-all transform active:scale-95 border border-[#C59B27]/40 cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#C59B27]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C59B27] text-[#141212] text-[10px] font-bold flex items-center justify-center">
                {totalCartCount}
              </span>
            </div>
            <span className="font-serif font-bold text-xs uppercase tracking-wider">
              View Table Tray
            </span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Table Order Drawer */}
      <TableOrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Royal Serendib Tasting Journey Modal */}
      <TastingJourneyModal
        isOpen={isTastingJourneyOpen}
        onClose={() => setIsTastingJourneyOpen(false)}
        currency={currency}
      />

      {/* Dish Detail Inspection Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />
    </div>
  );
}
