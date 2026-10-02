import React, { useState } from 'react';
import { Dish } from '../types/restaurant';
import { X, Flame, Plus, Minus, Check, Sparkles, Compass } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number) => void;
  currency: 'LKR' | 'USD';
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
  currency,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-[#141212]/75 backdrop-blur-sm transition-opacity"
        />

        <div className="inline-block w-full max-w-2xl my-8 text-left align-middle transition-all transform bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden border border-[#EADFD5]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#141212]/60 text-white hover:bg-[#141212] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dish Image Banner */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
              <div>
                {dish.badge && (
                  <span className="px-2.5 py-1 rounded-full bg-[#C59B27] text-[#141212] text-[10px] font-bold uppercase tracking-wider mb-1.5 inline-block">
                    {dish.badge}
                  </span>
                )}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">{dish.name}</h3>
                {dish.nativeName && (
                  <span className="text-xs text-white/80 font-serif italic block mt-0.5">
                    {dish.nativeName}
                  </span>
                )}
              </div>

              <div className="text-right">
                <span className="text-xl sm:text-2xl font-bold text-[#C59B27]">
                  {currency === 'USD' ? `$${dish.priceUSD.toFixed(2)}` : `LKR ${dish.priceLKR.toLocaleString()}`}
                </span>
                <span className="text-xs text-white/70 block">
                  {currency === 'USD' ? `LKR ${dish.priceLKR.toLocaleString()}` : `$${dish.priceUSD.toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>

          {/* Dish Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Spice and Tags */}
            <div className="flex flex-wrap items-center gap-3">
              {dish.spiceLevel && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#80182A]/10 text-[#80182A] text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{dish.spiceLevel}</span>
                </div>
              )}

              {dish.dietary.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#EADFD5] text-[11px] font-semibold text-[#1A1717] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#68615E]">
                Culinary Description
              </h4>
              <p className="text-sm text-[#1A1717]/90 leading-relaxed font-light">
                {dish.description}
              </p>
            </div>

            {/* Cultural Heritage and Pairing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {dish.culturalOrigin && (
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EADFD5] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#80182A]">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Cultural Roots</span>
                  </div>
                  <p className="text-xs text-[#68615E] leading-relaxed">
                    {dish.culturalOrigin}
                  </p>
                </div>
              )}

              {(dish.accompaniment || dish.bestWith || dish.includes) && (
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EADFD5] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#C59B27]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {dish.accompaniment ? 'Recommended Chutney' : dish.bestWith ? 'Recommended Pairing' : 'Included Garnish'}
                    </span>
                  </div>
                  <p className="text-xs text-[#68615E] leading-relaxed">
                    {dish.accompaniment || dish.bestWith || dish.includes}
                  </p>
                </div>
              )}
            </div>

            {/* Quantity and Add to Tray */}
            <div className="pt-4 border-t border-[#EADFD5] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#EADFD5] rounded-xl p-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#1A1717] hover:bg-white transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-[#1A1717] px-2 font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#1A1717] hover:bg-white transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded-xl font-serif font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  added
                    ? 'bg-[#C59B27] text-[#141212]'
                    : 'bg-[#80182A] hover:bg-[#5C0E1C] text-white active:scale-98'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Table Tray</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-[#C59B27]" />
                    <span>
                      Add to Table Order (
                      {currency === 'USD'
                        ? `$${(dish.priceUSD * quantity).toFixed(2)}`
                        : `LKR ${(dish.priceLKR * quantity).toLocaleString()}`}
                      )
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DishDetailModal;
