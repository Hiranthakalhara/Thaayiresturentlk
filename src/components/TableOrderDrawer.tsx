import React, { useState } from 'react';
import { CartItem } from '../types/restaurant';
import { X, Trash2, Plus, Minus, CheckCircle, Utensils, AlertCircle } from 'lucide-react';

interface TableOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
  currency: 'LKR' | 'USD';
}

export const TableOrderDrawer: React.FC<TableOrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
}) => {
  const [tableNumber, setTableNumber] = useState('Table 07 (Courtyard)');
  const [specialNote, setSpecialNote] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const totalLKR = items.reduce((sum, item) => sum + item.dish.priceLKR * item.quantity, 0);
  const totalUSD = items.reduce((sum, item) => sum + item.dish.priceUSD * item.quantity, 0);

  const handleSendOrder = () => {
    setOrderSent(true);
  };

  const handleResetAndClose = () => {
    setOrderSent(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#141212]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#EADFD5]">
          {/* Header */}
          <div className="p-6 border-b border-[#EADFD5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A1717]">Table Order Tray</h3>
                <p className="text-xs text-[#68615E]">
                  {items.length} {items.length === 1 ? 'dish' : 'dishes'} selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#68615E] hover:text-[#1A1717] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center mx-auto border-2 border-[#C59B27]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#80182A]">
                  Order Dispatched to Kitchen!
                </h4>
                <p className="text-xs sm:text-sm text-[#68615E] max-w-xs mx-auto leading-relaxed">
                  Ayubowan! Chef Dharshan and the kitchen team have received your order for{' '}
                  <strong className="text-[#1A1717]">{tableNumber}</strong>. Fresh clay pots and hoppers are now being fired.
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#EADFD5] text-left text-xs space-y-1.5 max-w-xs mx-auto">
                  <div className="flex justify-between text-[#68615E]">
                    <span>Table Location:</span>
                    <span className="font-semibold text-[#1A1717]">{tableNumber}</span>
                  </div>
                  <div className="flex justify-between text-[#68615E]">
                    <span>Estimated Prep Time:</span>
                    <span className="font-semibold text-[#80182A]">18–25 Minutes</span>
                  </div>
                  <div className="flex justify-between text-[#68615E]">
                    <span>Total Amount:</span>
                    <span className="font-bold text-[#1A1717]">
                      {currency === 'USD' ? `$${totalUSD.toFixed(2)}` : `LKR ${totalLKR.toLocaleString()}`}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full bg-[#80182A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#5C0E1C] transition-all cursor-pointer"
                >
                  Return to Menu
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#EADFD5]/50 flex items-center justify-center mx-auto text-[#68615E]">
                  <Utensils className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1A1717]">Your Tray is Empty</h4>
                <p className="text-xs text-[#68615E] max-w-xs mx-auto">
                  Explore our Repertoire and click "+ Add to Table Order" on any clay pot curry, hoppers, or kottu.
                </p>
              </div>
            ) : (
              <>
                {/* Table Location Selector */}
                <div className="p-4 rounded-2xl bg-white border border-[#EADFD5] space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717]">
                    Dining Table / Section
                  </label>
                  <select
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#EADFD5] rounded-xl text-xs text-[#1A1717] font-medium focus:ring-1 focus:ring-[#80182A] focus:outline-none"
                  >
                    <option>Table 07 (Courtyard)</option>
                    <option>Table 03 (Indoor Main Salon)</option>
                    <option>Table 12 (Verandah Alcove)</option>
                    <option>Private Cinnamon Room</option>
                    <option>Curbside Takeaway &amp; Pick-up</option>
                  </select>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#68615E]">
                    <span>Items in Order</span>
                    <button
                      onClick={onClearCart}
                      className="text-[#80182A] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.dish.id}
                      className="p-3.5 rounded-xl bg-white border border-[#EADFD5] flex items-center justify-between gap-3 shadow-2xl/5"
                    >
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-14 h-14 rounded-lg object-cover bg-[#FAF8F5] shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-bold text-[#1A1717] truncate">
                          {item.dish.name}
                        </h4>
                        <div className="text-xs text-[#80182A] font-semibold mt-0.5">
                          {currency === 'USD'
                            ? `$${(item.dish.priceUSD * item.quantity).toFixed(2)}`
                            : `LKR ${(item.dish.priceLKR * item.quantity).toLocaleString()}`}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#EADFD5] rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-[#1A1717] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#1A1717] px-1 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-[#1A1717] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                    Special Kitchen Notes
                  </label>
                  <textarea
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    placeholder="e.g. Mild chili for children, extra katta sambol, gluten sensitivity..."
                    rows={2}
                    className="w-full p-3 rounded-xl bg-white border border-[#EADFD5] text-xs text-[#1A1717] placeholder:text-[#68615E]/60 focus:ring-1 focus:ring-[#80182A] focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Bill & Action */}
          {!orderSent && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EADFD5] space-y-4">
              <div className="space-y-1.5 text-xs text-[#68615E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1A1717]">
                    {currency === 'USD' ? `$${totalUSD.toFixed(2)}` : `LKR ${totalLKR.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Charge (10%) &amp; Local Taxes</span>
                  <span className="font-semibold text-[#1A1717]">
                    {currency === 'USD'
                      ? `$${(totalUSD * 0.1).toFixed(2)}`
                      : `LKR ${Math.round(totalLKR * 0.1).toLocaleString()}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#EADFD5] flex justify-between text-sm font-bold text-[#1A1717]">
                  <span>Total Estimated Bill</span>
                  <span className="font-serif text-base text-[#80182A]">
                    {currency === 'USD'
                      ? `$${(totalUSD * 1.1).toFixed(2)}`
                      : `LKR ${Math.round(totalLKR * 1.1).toLocaleString()}`}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSendOrder}
                className="w-full py-3.5 rounded-xl bg-[#80182A] hover:bg-[#5C0E1C] text-white font-serif font-bold text-sm tracking-wide shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#C59B27]" />
                <span>Send Order to Kitchen</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TableOrderDrawer;
