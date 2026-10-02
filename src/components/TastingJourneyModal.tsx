import React, { useState } from 'react';
import { X, Sparkles, Check, Wine, Calendar, Users, Clock, Award } from 'lucide-react';

interface TastingJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'LKR' | 'USD';
}

export const TastingJourneyModal: React.FC<TastingJourneyModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [guests, setGuests] = useState(2);
  const [winePairing, setWinePairing] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const basePriceLKR = 18500;
  const basePriceUSD = 62.0;
  const winePriceLKR = 8500;
  const winePriceUSD = 28.0;

  const perGuestLKR = basePriceLKR + (winePairing ? winePriceLKR : 0);
  const perGuestUSD = basePriceUSD + (winePairing ? winePriceUSD : 0);

  const totalLKR = perGuestLKR * guests;
  const totalUSD = perGuestUSD * guests;

  const courses = [
    { number: 'I', title: 'Amuse-Bouche', dish: 'Smoked Woodapple & Mustard Seed Crisp', desc: 'Tangy woodapple pulp reduction with crisp rice wafer and cold-pressed mustard oil.' },
    { number: 'II', title: 'The Cold Coastal Catch', dish: 'Negombo Crab & Coconut Water Crudo', desc: 'Sweet lagoon crab claw meat, fresh finger lime pearls, green kochchi chili oil.' },
    { number: 'III', title: 'Sacred Clay Pot Broth', dish: 'Wild Morel & Lemongrass Kiri Hodi', desc: 'Foraged forest mushrooms steeped in aromatic warm coconut broth perfumed with pandan.' },
    { number: 'IV', title: 'Indian Ocean Reef', dish: 'Banana Leaf Baked Ceylon Modha', desc: 'White sea butterfish charred in fragrant wild banana leaf with turmeric coconut paste.' },
    { number: 'V', title: 'Kandyan Kingdom Main', dish: 'Spiced Duck & Suwandel Heirloom Rice', desc: 'Slow-braised duck in dark roasted highland spices, accompanied by 5 artisanal sambols.' },
    { number: 'VI', title: 'Palate Cleanser', dish: 'King Coconut & Wild Lime Sorbet', desc: 'Golden palm thambili water with sour lime zest and cracked pink sea salt.' },
    { number: 'VII', title: 'The Royal Finale', dish: 'Smoked Kithul Watalappam & Pekoe Tea', desc: 'Dense rainforest palm treacle custard served alongside Nuwara Eliya single-estate tea.' },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleResetAndClose = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-[#141212]/80 backdrop-blur-md transition-opacity"
        />

        <div className="inline-block w-full max-w-3xl p-6 sm:p-10 my-8 text-left align-middle transition-all transform bg-[#1E1B1B] text-[#FAF8F5] rounded-3xl shadow-2xl relative z-10 border border-[#C59B27]/40 bg-curry-texture">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#FAF8F5]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {booked ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center mx-auto border-2 border-[#C59B27]">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
                  Royal Serendib Tasting Journey
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  Private Salon Reserved
                </h3>
              </div>

              <p className="text-sm text-[#FAF8F5]/85 max-w-md mx-auto leading-relaxed font-light">
                Ayubowan, {guestName}. We are honored to host you for this 7-course Ceylonese culinary odyssey on{' '}
                <strong className="text-white">{date} at 7:00 PM</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-[#141212]/90 border border-[#C59B27]/30 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#FAF8F5]/60">Seating:</span>
                  <span className="text-white font-semibold">Private Cinnamon Room</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF8F5]/60">Guests:</span>
                  <span className="text-white font-semibold">{guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF8F5]/60">Wine Pairing:</span>
                  <span className="text-[#C59B27] font-semibold">
                    {winePairing ? 'Included (5 Sommelier Pours)' : 'Single-Estate Tea Pairing'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold">
                  <span>Total Amount:</span>
                  <span className="text-[#C59B27]">
                    {currency === 'USD' ? `$${totalUSD.toFixed(2)}` : `LKR ${totalLKR.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-full bg-[#C59B27] text-[#141212] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#9E7B1C] transition-all cursor-pointer shadow-lg"
              >
                Return to Repertoire
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C59B27]/40 text-[#C59B27] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Private Cinnamon Room Experience</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  The Royal Serendib Tasting Journey
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light max-w-xl">
                  A multi-sensory seven-course odyssey through 2,500 years of Ceylon gastronomy, hosted daily at 7:00 PM for up to 16 guests.
                </p>
              </div>

              {/* 7 Course Sequence Scroll */}
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-[#C59B27] font-bold block">
                  The 7-Course Curated Menu
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                  {courses.map((c) => (
                    <div
                      key={c.number}
                      className="p-3.5 rounded-xl bg-[#141212]/80 border border-white/10 space-y-1"
                    >
                      <div className="flex items-center justify-between text-[11px] text-[#C59B27]">
                        <span className="font-bold">Course {c.number}</span>
                        <span className="text-[10px] opacity-80 uppercase">{c.title}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-white">{c.dish}</h4>
                      <p className="text-[11px] text-[#FAF8F5]/70 leading-relaxed font-light">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Options Form */}
              <form onSubmit={handleBook} className="space-y-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#FAF8F5]/80 mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Maya Wickremasinghe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141212] border border-white/15 text-xs sm:text-sm text-white focus:ring-1 focus:ring-[#C59B27] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#FAF8F5]/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141212] border border-white/15 text-xs sm:text-sm text-white focus:ring-1 focus:ring-[#C59B27] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#FAF8F5]/80 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141212] border border-white/15 text-xs sm:text-sm text-white focus:ring-1 focus:ring-[#C59B27] focus:outline-none"
                    >
                      {[1, 2, 3, 4, 6, 8, 12, 16].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#FAF8F5]/80 mb-1">
                      Date (Daily 7:00 PM) *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141212] border border-white/15 text-xs sm:text-sm text-white focus:ring-1 focus:ring-[#C59B27] focus:outline-none"
                    />
                  </div>

                  {/* Wine Pairing Toggle */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#141212] border border-white/15">
                    <div className="flex items-center gap-2">
                      <Wine className="w-4 h-4 text-[#C59B27]" />
                      <div>
                        <div className="text-xs font-bold text-white">Sommelier Wine Pairing</div>
                        <div className="text-[10px] text-[#FAF8F5]/60">
                          +{currency === 'USD' ? `$${winePriceUSD}` : `LKR ${winePriceLKR.toLocaleString()}`} / guest
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWinePairing(!winePairing)}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        winePairing ? 'bg-[#C59B27]' : 'bg-white/20'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          winePairing ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Summary & Reserve Button */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                  <div>
                    <div className="text-[11px] text-[#FAF8F5]/60">
                      Total Experience for {guests} {guests === 1 ? 'Guest' : 'Guests'}:
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#C59B27]">
                      {currency === 'USD' ? `$${totalUSD.toFixed(2)}` : `LKR ${totalLKR.toLocaleString()}`}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3.5 px-8 rounded-full bg-[#C59B27] hover:bg-[#9E7B1C] text-[#141212] font-serif font-bold text-sm tracking-wide shadow-xl transition-all active:scale-95 cursor-pointer"
                  >
                    Confirm Tasting Reservation
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TastingJourneyModal;
