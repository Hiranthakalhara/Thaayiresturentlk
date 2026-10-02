import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ReservationDetails } from '../types/restaurant';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [details, setDetails] = useState<ReservationDetails>({
    fullName: '',
    phone: '',
    email: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Dinner: 7:30 PM',
    seatingArea: 'courtyard',
    dietaryNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'THY-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-[#141212]/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <div className="inline-block w-full max-w-xl p-6 sm:p-8 my-8 text-left align-middle transition-all transform bg-[#FAF8F5] rounded-3xl shadow-2xl relative z-10 border border-[#EADFD5]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#68615E] hover:text-[#1A1717] hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center mx-auto border-2 border-[#C59B27]">
                <CheckCircle2 className="w-8 h-8 text-[#C59B27]" />
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#C59B27] uppercase">
                  Table Reservation Confirmed
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#80182A] mt-1">
                  Ayubowan, {details.fullName}!
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#68615E] leading-relaxed max-w-md mx-auto font-light">
                We eagerly await welcoming your dining party to Thaayi. A formal invitation card and calendar invite have been sent to{' '}
                <strong className="text-[#1A1717]">{details.email}</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#EADFD5] text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
                <div className="flex justify-between border-b border-[#EADFD5]/60 pb-2">
                  <span className="text-[#68615E]">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#80182A] text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68615E]">Date &amp; Time:</span>
                  <span className="font-semibold text-[#1A1717]">
                    {details.date} at {details.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68615E]">Party Size:</span>
                  <span className="font-semibold text-[#1A1717]">
                    {details.guests} {details.guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68615E]">Seating Sanctuary:</span>
                  <span className="font-semibold text-[#1A1717] capitalize">
                    {details.seatingArea.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-full bg-[#80182A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#5C0E1C] transition-all cursor-pointer shadow-md"
                >
                  Close &amp; Return to Restaurant
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C59B27] uppercase block mb-1">
                  An Evening in Colombo 07
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#80182A]">
                  Reserve Your Table
                </h3>
                <p className="text-xs sm:text-sm text-[#68615E] mt-1 font-light">
                  Instant confirmation with complimentary valet parking in Cinnamon Gardens.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={details.fullName}
                      onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
                      placeholder="e.g. Kasun Fernando"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={details.phone}
                      onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                      placeholder="+94 77 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={details.email}
                      onChange={(e) => setDetails({ ...details, email: e.target.value })}
                      placeholder="kasun@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={details.guests}
                      onChange={(e) => setDetails({ ...details, guests: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    >
                      <option value={1}>1 Guest (Solo Epicure)</option>
                      <option value={2}>2 Guests (Intimate Table)</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests (Family Dining)</option>
                      <option value={6}>5–6 Guests (Courtyard Alcove)</option>
                      <option value={8}>7–8 Guests (Celebration Table)</option>
                      <option value={12}>9–12+ Guests (Private Verandah)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={details.date}
                      onChange={(e) => setDetails({ ...details, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={details.timeSlot}
                      onChange={(e) => setDetails({ ...details, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                    >
                      <option>Lunch: 12:30 PM</option>
                      <option>Lunch: 1:30 PM</option>
                      <option>Lunch: 2:30 PM</option>
                      <option>Dinner: 6:30 PM</option>
                      <option>Dinner: 7:30 PM</option>
                      <option>Dinner: 8:30 PM</option>
                      <option>Dinner: 9:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'courtyard', label: 'Courtyard' },
                      { id: 'main-dining', label: 'Main Salon' },
                      { id: 'verandah', label: 'Verandah' },
                      { id: 'private-cinnamon-room', label: 'Private Room' },
                    ].map((area) => (
                      <button
                        type="button"
                        key={area.id}
                        onClick={() =>
                          setDetails({ ...details, seatingArea: area.id as any })
                        }
                        className={`py-2 px-2 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          details.seatingArea === area.id
                            ? 'bg-[#80182A] text-white border-[#80182A]'
                            : 'bg-white border-[#EADFD5] text-[#1A1717] hover:border-[#80182A]/40'
                        }`}
                      >
                        {area.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1717] mb-1">
                    Dietary Requirements or Special Celebration
                  </label>
                  <textarea
                    rows={2}
                    value={details.dietaryNotes}
                    onChange={(e) => setDetails({ ...details, dietaryNotes: e.target.value })}
                    placeholder="e.g. Anniversary celebration, peanut allergy, high chair needed..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EADFD5] text-xs sm:text-sm text-[#1A1717] focus:ring-2 focus:ring-[#80182A] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#80182A] hover:bg-[#5C0E1C] text-white font-serif font-bold text-sm tracking-wide shadow-lg transition-all transform active:scale-98 cursor-pointer"
                  >
                    Confirm Table Reservation
                  </button>
                  <p className="text-center text-[11px] text-[#68615E] mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>No deposit required · Reschedule anytime up to 2 hours prior</span>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ReservationModal;
