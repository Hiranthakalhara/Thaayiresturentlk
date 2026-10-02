import React from 'react';
import { HERO_FEAST_IMAGE } from '../data/menuData';
import {
  Calendar,
  Utensils,
  Star,
  Sparkles,
  Flame,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Compass,
} from 'lucide-react';

interface HomeViewProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
  onOpenTastingJourney: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onExploreMenu,
  onOpenReservation,
  onOpenTastingJourney,
}) => {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1717] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-[#141212] overflow-hidden">
        {/* Background Image with Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_FEAST_IMAGE}
            alt="Sri Lankan feast with rich curries and hoppers in clay pots"
            className="w-full h-full object-cover object-center opacity-45 scale-105 filter brightness-75 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-[#141212]/60 to-[#141212]/30" />
          <div className="absolute inset-0 bg-curry-texture opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#FAF8F5]">
          {/* Cultural Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59B27]/40 mb-8 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold">
              Ceylonese Hospitality &amp; Royal Spices
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Authentic Sri Lankan Flavours, <br />
            <span className="italic font-normal text-[#C59B27]">Served With Love.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#FAF8F5]/85 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience the sensory tapestry of slow-simmered clay pot curries, stone-ground cinnamon, and the unconditional maternal warmth of Ceylon dining at Thaayi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C59B27] hover:bg-[#9E7B1C] text-[#141212] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Table</span>
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#80182A]/90 hover:bg-[#80182A] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl border border-[#C59B27]/40 backdrop-blur-sm transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Repertoire Menu</span>
              <Utensils className="w-4 h-4 text-[#C59B27]" />
            </button>
          </div>

          {/* Quick Trust Indicators Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] shrink-0 border border-[#C59B27]/30">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">4.9 on TripAdvisor</div>
                <div className="text-xs text-[#FAF8F5]/70">1,400+ Verified Diners</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] shrink-0 border border-[#C59B27]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Single-Estate Harvests</div>
                <div className="text-xs text-[#FAF8F5]/70">Matale True Cinnamon</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] shrink-0 border border-[#C59B27]/30">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Heirloom Recipes</div>
                <div className="text-xs text-[#FAF8F5]/70">Three Generations of Passion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THAAYI ("A Taste of Home") */}
      <section className="py-24 bg-[#FDFBF8] border-b border-[#EADFD5]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Composition (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#EADFD5]">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80"
                  alt="Traditional Sri Lankan clay pot curry with roasted spices"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 z-20 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Warm ambient dining atmosphere at Thaayi"
                  className="w-full h-44 object-cover"
                />
              </div>

              {/* Heritage Seal */}
              <div className="absolute -top-6 -left-6 z-20 w-24 h-24 rounded-full bg-[#80182A] text-[#FAF8F5] flex flex-col items-center justify-center text-center p-2 shadow-xl border-2 border-[#C59B27]">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C59B27]">Since</span>
                <span className="font-serif text-2xl font-bold leading-none">1978</span>
              </div>
            </div>

            {/* Narrative Content (Right) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block">
                  Rooted in the Heart of Sri Lanka
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#80182A] tracking-tight">
                  A Taste of Home, <br />
                  <span className="italic font-normal text-[#1A1717]">Curated by Maternal Grace.</span>
                </h2>
              </div>
              <p className="text-lg text-[#1A1717]/90 leading-relaxed font-light">
                In our mother tongue, <strong className="text-[#80182A] font-serif font-semibold">‘Thaayi’</strong> signifies maternal warmth—the silent, devoted love poured into fragrant, steaming pots when family returns home from afar.
              </p>
              <p className="text-base text-[#68615E] leading-relaxed">
                We honor this quiet ritual at dawn every day. Whole Ceylon cinnamon bark is hand-cracked in stone mortars, fresh coconut milk is squeezed by hand from organic coastal groves, and dark Jaffna curry powders are roasted slow over smoldering tamarind wood coals. No artificial shortcuts exist; only the patient rhythm of real Ceylon home kitchens brought to an elevated dining canvas.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-[#EADFD5] shadow-sm">
                  <Flame className="w-5 h-5 text-[#80182A] mb-1.5" />
                  <h4 className="font-serif font-bold text-[#1A1717] text-sm">Wood-Fire Hearth</h4>
                  <p className="text-xs text-[#68615E] mt-1">Simmered in porous earthen clay pots.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#EADFD5] shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#C59B27] mb-1.5" />
                  <h4 className="font-serif font-bold text-[#1A1717] text-sm">Negombo Catch</h4>
                  <p className="text-xs text-[#68615E] mt-1">Fresh lagoon prawns and wild sea crabs.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#EADFD5] shadow-sm">
                  <Compass className="w-5 h-5 text-[#80182A] mb-1.5" />
                  <h4 className="font-serif font-bold text-[#1A1717] text-sm">Heirloom Recipes</h4>
                  <p className="text-xs text-[#68615E] mt-1">Handed down through three generations.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreMenu}
                  className="inline-flex items-center gap-2 font-semibold text-[#80182A] hover:text-[#C59B27] transition-colors group cursor-pointer"
                >
                  <span>Explore The Full Ceylon Repertoire</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE THAAYI */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EADFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block">
              The Thaayi Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#80182A]">
              Why Diners Cherish Our Tables
            </h2>
            <p className="text-[#68615E] text-sm sm:text-base">
              Authenticity shaped by generations of culinary discipline, uncompromised ingredients, and heartfelt island grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#80182A]/10 flex items-center justify-center text-[#80182A]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1717]">Ancestral Recipes</h3>
              <p className="text-[#68615E] text-sm leading-relaxed">
                Preserved through three matriarchal generations. No pre-packaged spice mixes; we roast whole coriander and cumin from scratch daily.
              </p>
              <span className="text-xs font-bold text-[#80182A] block pt-1">Authentic Heritage</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1717]">Fresh Island Ingredients</h3>
              <p className="text-[#68615E] text-sm leading-relaxed">
                Negombo dawn lagoon catches, true C5 Ceylon cinnamon from Matale plantations, and fresh coconut milk pressed in our own kitchen.
              </p>
              <span className="text-xs font-bold text-[#C59B27] block pt-1">Single-Estate Quality</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#80182A]/10 flex items-center justify-center text-[#80182A]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1717]">Ayubowan Warmth</h3>
              <p className="text-[#68615E] text-sm leading-relaxed">
                Hospitality is sacred in Sri Lanka. Patrons are received not merely as customers, but as cherished guests welcomed to our family hearth.
              </p>
              <span className="text-xs font-bold text-[#80182A] block pt-1">Maternal Devotion</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27]">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1717]">Perfect for Families</h3>
              <p className="text-[#68615E] text-sm leading-relaxed">
                Generous sharing platters, custom mild preparations for children, intimate courtyard alcoves, and private dining rooms for celebration.
              </p>
              <span className="text-xs font-bold text-[#C59B27] block pt-1">Warm Sanctuary</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHEF MANIFESTO & PHILOSOPHY */}
      <section className="py-24 bg-[#141212] text-[#FAF8F5] relative overflow-hidden bg-curry-texture" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block">
                  The Kitchen Manifesto
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  “Cooking with Soul, Fire, and the Rhythm of Clay.”
                </h2>
              </div>
              <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#1E1B1B] border border-[#C59B27]/30 shadow-lg space-y-4">
                <p className="font-serif text-lg sm:text-xl text-[#FAF8F5]/90 italic leading-relaxed">
                  “Our cuisine is an ode to the island: the sharp pop of mustard seeds in hot coconut oil, the unhurried whisper of porous clay pots, and the timeless joy of sitting around a shared table.”
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59B27] bg-[#1E1B1B]">
                    <img
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80"
                      alt="Chef Anoma Senanayake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-base">Anoma Senanayake</div>
                    <div className="text-xs text-[#C59B27] font-medium tracking-wider uppercase">
                      Executive Culinary Director &amp; Co-Founder
                    </div>
                  </div>
                </div>
              </blockquote>

              <p className="text-[#FAF8F5]/80 text-sm sm:text-base leading-relaxed font-light">
                In our kitchen, high heat and rushed service take a backseat to slow extraction. We toast coriander, wild cumin, and fenugreek independently—acknowledging that each spice possesses a unique threshold of aroma before caramelization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#1E1B1B]/70 border border-white/10">
                  <div className="text-[#C59B27] font-bold text-sm">Porous Clay Pots</div>
                  <div className="text-xs text-[#FAF8F5]/70 mt-1">Locks moisture and naturally softens spices.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#1E1B1B]/70 border border-white/10">
                  <div className="text-[#C59B27] font-bold text-sm">Live Fire Coals</div>
                  <div className="text-xs text-[#FAF8F5]/70 mt-1">Sun-dried coconut husk and tamarind embers.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#1E1B1B]/70 border border-white/10">
                  <div className="text-[#C59B27] font-bold text-sm">Ayurvedic Wisdom</div>
                  <div className="text-xs text-[#FAF8F5]/70 mt-1">Balancing thermal heat with cooling coconut.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C59B27]/30 aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional granite stone grinding and spice preparation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141212]/90 backdrop-blur-md border border-white/15">
                  <span className="text-[10px] uppercase tracking-widest text-[#C59B27] font-bold">
                    Artisanship in Action
                  </span>
                  <div className="font-serif text-lg text-white font-bold">Traditional Granite Miris Gala</div>
                  <div className="text-xs text-[#FAF8F5]/70 mt-0.5">Hand-grinding sambols fresh for every single table.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL GALLERY */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EADFD5]" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block mb-2">
                Visual Chronicles
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#80182A]">
                Moments at Thaayi
              </h2>
              <p className="text-[#68615E] mt-2 max-w-xl text-sm sm:text-base">
                Glimpses into our live hopper stations, wood-fired hearths, and fragrant courtyard celebrations.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#80182A]">
              <span>#ThaayiColombo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                alt="Clay Pot Jaffna Crab Curry"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">The Hearth</span>
                <h4 className="font-serif text-lg font-bold text-white">Clay Pot Simmering Jaffna Crab</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
                alt="Golden Lacy Egg Hopper Craft"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">Live Theatre</span>
                <h4 className="font-serif text-lg font-bold text-white">Golden Lacy Egg Hopper Craft</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Cinnamon Gardens Courtyard"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">Ambience</span>
                <h4 className="font-serif text-lg font-bold text-white">Cinnamon Gardens Courtyard</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Dry-Roasting Ceylon Cinnamon"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">Artisanship</span>
                <h4 className="font-serif text-lg font-bold text-white">Dry-Roasting Ceylon Cinnamon</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                alt="Banana Leaf Feast"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">Feast Culture</span>
                <h4 className="font-serif text-lg font-bold text-white">The Royal Sambol Spread</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-[#EADFD5] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Dusk Lotus Lamp Blessing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141212]/90 via-[#141212]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-xs text-[#C59B27] uppercase font-semibold">Tradition</span>
                <h4 className="font-serif text-lg font-bold text-white">Dusk Lotus Lamp Blessing</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUEST IMPRESSIONS & REVIEWS */}
      <section className="py-24 bg-[#FDFBF8] border-b border-[#EADFD5]" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block">
              Guest Impressions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#80182A]">
              Celebrated by Palates Worldwide
            </h2>
            <p className="text-[#68615E] text-sm sm:text-base">
              Read candid impressions from resident epicures, food journalists, and visiting families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C59B27] text-sm gap-1">
                  {'★'.repeat(5)}
                </div>
                <p className="text-[#1A1717] text-sm sm:text-base leading-relaxed italic font-serif">
                  “The Jaffna Crab Curry and Colombo Cheese Kottu were transcendent. The flavors carry that rare depth you only taste in home cooking, yet plated with supreme elegance.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADFD5]">
                <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] font-bold flex items-center justify-center font-serif text-sm">
                  CL
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1A1717]">Clara Lindqvist</div>
                  <div className="text-xs text-[#68615E]">Travel &amp; Food Journalist, Stockholm</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C59B27] text-sm gap-1">
                  {'★'.repeat(5)}
                </div>
                <p className="text-[#1A1717] text-sm sm:text-base leading-relaxed italic font-serif">
                  “As someone born in Colombo who has lived in Melbourne for twenty years, Thaayi brought tears of nostalgia. The egg hoppers are as crisp as my grandmother’s wood-fire pan.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADFD5]">
                <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] font-bold flex items-center justify-center font-serif text-sm">
                  DR
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1A1717]">Dr. Rohan De Silva</div>
                  <div className="text-xs text-[#68615E]">Visiting Family Diner, Australia</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EADFD5] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C59B27] text-sm gap-1">
                  {'★'.repeat(5)}
                </div>
                <p className="text-[#1A1717] text-sm sm:text-base leading-relaxed italic font-serif">
                  “The Lamprais wrapped in banana leaf is an absolute masterpiece. The service staff treated our children with immense kindness. Outstanding hospitality.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADFD5]">
                <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] font-bold flex items-center justify-center font-serif text-sm">
                  SP
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1A1717]">Sharanya Pillai</div>
                  <div className="text-xs text-[#68615E]">Food Critic, Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & LOCATION SANCTUARY */}
      <section className="py-24 bg-[#FAF8F5]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase block">
                  Visit Our Sanctuary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#80182A]">
                  In the Heart of Colombo
                </h2>
                <p className="text-[#68615E] text-sm sm:text-base leading-relaxed">
                  Nestled along the tree-lined avenues of Cinnamon Gardens, surrounded by tropical foliage and quiet colonial courtyards.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EADFD5]">
                  <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1A1717]">
                      Restaurant Address
                    </div>
                    <div className="text-sm text-[#68615E] mt-0.5">
                      42 Independence Avenue, Cinnamon Gardens, Colombo 07, Sri Lanka
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EADFD5]">
                  <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1A1717]">
                      Direct Concierge
                    </div>
                    <div className="text-sm text-[#68615E] mt-0.5">
                      +94 11 234 5678 • +94 77 890 1234
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EADFD5]">
                  <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1A1717]">
                      Electronic Mail
                    </div>
                    <div className="text-sm text-[#68615E] mt-0.5">
                      reservations@thaayi.lk • hello@thaayi.lk
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EADFD5]">
                  <div className="w-10 h-10 rounded-full bg-[#80182A]/10 text-[#80182A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1A1717]">
                      Service Hours
                    </div>
                    <div className="text-sm text-[#68615E] mt-0.5">
                      Daily: 12:00 PM – 3:30 PM &amp; 6:00 PM – 11:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Interactive Map Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#EADFD5] bg-[#1E1B1B] relative h-[420px] flex flex-col justify-between p-6">
                <div className="absolute inset-0 opacity-20">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C59B27" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <path d="M 0 150 Q 200 120 400 200 T 800 180" fill="none" stroke="#FAF8F5" strokeWidth="4" />
                    <path d="M 250 0 Q 300 200 350 450" fill="none" stroke="#FAF8F5" strokeWidth="6" />
                    <path d="M 100 300 Q 350 320 600 280" fill="none" stroke="#C59B27" strokeWidth="3" />
                    <circle cx="340" cy="210" r="45" fill="#80182A" opacity="0.3" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-[#141212]/90 text-[#FAF8F5] text-xs font-bold border border-[#C59B27]/30">
                    Colombo 07 • Cinnamon Gardens
                  </span>
                  <span className="text-xs text-[#C59B27] flex items-center gap-1 bg-[#141212]/90 px-3 py-1 rounded-full border border-white/10">
                    ✓ Complimentary Valet Parking
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-[#80182A] text-[#C59B27] flex items-center justify-center shadow-2xl border-2 border-[#C59B27] animate-bounce">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="mt-2 px-4 py-2 rounded-xl bg-[#141212]/95 border border-[#C59B27]/40 text-center shadow-2xl">
                    <div className="text-xs uppercase tracking-widest text-[#C59B27] font-bold">
                      Thaayi Restaurant
                    </div>
                    <div className="text-[11px] text-[#FAF8F5]/80">Near Independence Square &amp; Arcade</div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#141212]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="text-xs text-[#FAF8F5]/80">
                    <span className="font-bold text-white">Walking:</span> 4 mins from Independence Memorial Hall
                  </div>
                  <button
                    onClick={onOpenReservation}
                    className="px-4 py-2 rounded-lg bg-[#C59B27] text-[#141212] text-xs font-bold hover:bg-[#9E7B1C] transition-colors shrink-0 cursor-pointer"
                  >
                    Reserve Table at this Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeView;
