import React, { useState, useMemo } from 'react';
import { Dish, DietaryTag } from '../types/restaurant';
import { MENU_ITEMS, COURSE_SECTIONS } from '../data/menuData';
import { Search, Flame, Plus, ShieldCheck, Phone, Calendar, Check, ArrowRight, Sparkles } from 'lucide-react';

interface MenuRepertoireProps {
  onSelectDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
  onOpenReservation: () => void;
  onOpenTastingJourney: () => void;
  currency: 'LKR' | 'USD';
}

export const MenuRepertoire: React.FC<MenuRepertoireProps> = ({
  onSelectDish,
  onAddToCart,
  onOpenReservation,
  onOpenTastingJourney,
  currency,
}) => {
  const [activeDietary, setActiveDietary] = useState<DietaryTag>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseNav, setActiveCourseNav] = useState('starters');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const dietaryFilterOptions: { tag: DietaryTag; label: string; icon?: string }[] = [
    { tag: 'all', label: 'All Items' },
    { tag: 'vegetarian', label: '🌱 Vegetarian' },
    { tag: 'vegan', label: 'Vegan' },
    { tag: 'halal', label: 'حلال Halal Certified' },
    { tag: 'gluten-free', label: 'Gluten-Free' },
    { tag: 'spicy', label: '🌶️ Spicy Signatures' },
  ];

  // Filter items by search query and dietary selection
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.nativeName && item.nativeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        activeDietary === 'all' || item.dietary.includes(activeDietary as any);

      return matchesSearch && matchesDietary;
    });
  }, [searchQuery, activeDietary]);

  const handleAddClick = (e: React.MouseEvent, dish: Dish) => {
    e.stopPropagation();
    onAddToCart(dish);
    setAddedItemIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  const scrollToCourse = (courseId: string) => {
    setActiveCourseNav(courseId);
    const element = document.getElementById(`course-${courseId}`);
    if (element) {
      const yOffset = -140; // account for sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const formatPrice = (dish: Dish) => {
    if (currency === 'USD') {
      return (
        <div>
          <span className="text-[#80182A] font-bold text-base sm:text-lg">
            ${dish.priceUSD.toFixed(2)}
          </span>
          <span className="text-[11px] text-[#68615E] block font-medium">
            LKR {dish.priceLKR.toLocaleString()}
          </span>
        </div>
      );
    }
    return (
      <div>
        <span className="text-[#80182A] font-bold text-base sm:text-lg">
          LKR {dish.priceLKR.toLocaleString()}
        </span>
        <span className="text-[11px] text-[#68615E] block font-medium">
          ${dish.priceUSD.toFixed(2)}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* 1. HERO TITLE & SEARCH BAR */}
      <section className="pt-10 sm:pt-14 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#EADFD5]">
          {/* Title Area */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#80182A]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#80182A] uppercase">
                Artisanal Gastronomy · Colombo 07
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1717] leading-[1.15]">
              The Culinary Repertoire of Ceylon
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#68615E] leading-relaxed max-w-2xl font-light">
              Explore artisanal curries, clay pot delicacies, sizzling street-food classics, and traditional desserts prepared daily with slow-roasted spices and coastal harvest.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-80 shrink-0">
            <label className="block text-[11px] uppercase tracking-wider text-[#68615E] font-semibold mb-1.5">
              Search our kitchen archive
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#C59B27] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crab, kottu, watalappam..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#EADFD5] rounded-xl text-xs sm:text-sm text-[#1A1717] placeholder:text-[#68615E]/60 focus:outline-none focus:ring-2 focus:ring-[#80182A] focus:border-transparent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#68615E] hover:text-[#1A1717]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="pt-6 flex flex-wrap items-center gap-2">
          {dietaryFilterOptions.map((opt) => {
            const isActive = activeDietary === opt.tag;
            return (
              <button
                key={opt.tag}
                onClick={() => setActiveDietary(opt.tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#80182A] text-white shadow-sm'
                    : 'bg-white border border-[#EADFD5] text-[#1A1717]/80 hover:border-[#80182A]/40 hover:text-[#80182A]'
                }`}
              >
                <span>{opt.label}</span>
                {opt.tag === 'all' && (
                  <span className="text-[10px] opacity-75 font-mono">
                    ({MENU_ITEMS.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. STICKY COURSE NAVIGATION BAR */}
      <div className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#EADFD5] shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {COURSE_SECTIONS.map((sec) => {
              const isActive = activeCourseNav === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToCourse(sec.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1E1B1B] text-[#FAF8F5] shadow-sm'
                      : 'text-[#68615E] hover:text-[#80182A] hover:bg-[#EADFD5]/40'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 3. COURSES & DISHES CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-20">
        {COURSE_SECTIONS.map((course, index) => {
          const courseDishes = filteredDishes.filter((d) => d.category === course.id);

          return (
            <React.Fragment key={course.id}>
              {/* Special Insertion: Tasting Journey Banner before Seafood section */}
              {course.id === 'seafood' && (
                <section
                  aria-label="Tasting experience"
                  className="rounded-3xl bg-[#1E1B1B] text-[#FAF8F5] p-8 sm:p-10 lg:p-12 border border-[#C59B27]/30 shadow-2xl relative overflow-hidden bg-curry-texture"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C59B27]/40 text-[#C59B27] text-xs font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Evening Tasting Experience · 7 Courses</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        The Royal Serendib Tasting Journey
                      </h2>
                      <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed font-light max-w-2xl">
                        An evening odyssey charting ancient Sinhalese kingdoms through Kandyan highland spices, Southern coastal fishing ports, and Moorish aromatic traditions. Curated by Executive Chef Dharshan.
                      </p>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
                        <div>
                          <div className="text-[11px] text-[#FAF8F5]/60 uppercase tracking-wider">Course Count</div>
                          <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">7 Courses</div>
                        </div>
                        <div>
                          <div className="text-[11px] text-[#FAF8F5]/60 uppercase tracking-wider">Tea Pairing</div>
                          <div className="text-xs sm:text-sm font-semibold text-[#C59B27] mt-0.5">Nuwara Eliya Single-Estate</div>
                        </div>
                        <div>
                          <div className="text-[11px] text-[#FAF8F5]/60 uppercase tracking-wider">Price Per Guest</div>
                          <div className="text-base sm:text-lg font-serif font-bold text-[#FAF8F5] mt-0.5">
                            {currency === 'USD' ? '$62.00' : 'LKR 18,500'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#141212]/90 p-6 rounded-2xl border border-white/10 space-y-4 text-center">
                      <div className="text-xs uppercase tracking-widest text-[#C59B27] font-bold">
                        SEATINGS DAILY AT 7:00 PM
                      </div>
                      <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
                        Limited to 16 guests per evening in the Private Cinnamon Room. Reservations required 24 hours in advance.
                      </p>
                      <button
                        onClick={onOpenTastingJourney}
                        className="w-full py-3.5 px-4 rounded-xl bg-[#C59B27] hover:bg-[#9E7B1C] text-[#141212] font-serif font-bold text-sm tracking-wide shadow-lg transition-all transform active:scale-95 cursor-pointer"
                      >
                        Reserve Serendib Tasting
                      </button>
                      <div className="text-[11px] text-[#FAF8F5]/60 italic flex items-center justify-center gap-1">
                        <span>🍷</span>
                        <span>Optional Sommelier Wine Pairing Available</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Course Group */}
              <section id={`course-${course.id}`} className="scroll-mt-36">
                {/* Course Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#EADFD5] mb-8">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C59B27] uppercase block mb-1">
                      {course.courseNumber}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1717]">
                      {course.label}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#68615E] max-w-xl text-left sm:text-right font-light leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                {/* If no dishes match filter */}
                {courseDishes.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-[#EADFD5] text-[#68615E] text-xs">
                    No items in this section match the active filter.
                  </div>
                ) : (
                  <div
                    className={`grid gap-6 sm:gap-7 ${
                      course.id === 'curries'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : course.id === 'seafood'
                        ? 'grid-cols-1 md:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    }`}
                  >
                    {courseDishes.map((dish) => {
                      const isAdded = addedItemIds[dish.id];

                      return (
                        <div
                          key={dish.id}
                          onClick={() => onSelectDish(dish)}
                          className="group bg-white rounded-2xl overflow-hidden border border-[#EADFD5] hover:border-[#80182A]/30 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                        >
                          <div>
                            {/* Card Image Slot with Badge */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                              <img
                                src={dish.image}
                                alt={dish.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  // Fallback graceful styling
                                  (e.target as HTMLImageElement).src =
                                    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
                                }}
                              />

                              {/* Corner Badge */}
                              {dish.badge && (
                                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#1E1B1B]/80 text-[#FAF8F5] text-[10px] font-semibold backdrop-blur-md border border-white/10 tracking-wide">
                                  {dish.badge}
                                </span>
                              )}

                              {/* Spice level pill if heatRating > 0 */}
                              {dish.heatRating !== undefined && dish.heatRating > 0 && (
                                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#FAF8F5]/90 text-[#80182A] text-[10px] font-bold backdrop-blur-sm flex items-center gap-1 shadow-sm">
                                  <Flame className="w-3 h-3 text-[#80182A] fill-[#80182A]" />
                                  <span>Level {dish.heatRating}</span>
                                </span>
                              )}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 sm:p-6 space-y-2.5">
                              {/* Title and Price */}
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1717] group-hover:text-[#80182A] transition-colors leading-snug">
                                    {dish.name}
                                  </h3>
                                  {dish.nativeName && (
                                    <span className="text-[11px] text-[#68615E] italic block font-serif">
                                      {dish.nativeName}
                                    </span>
                                  )}
                                </div>
                                <div className="text-right shrink-0">
                                  {formatPrice(dish)}
                                </div>
                              </div>

                              {/* Spice Label Tag */}
                              {dish.spiceLevel && (
                                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#C59B27]">
                                  <Flame className="w-3 h-3 fill-current" />
                                  <span>{dish.spiceLevel}</span>
                                </div>
                              )}

                              {/* Description */}
                              <p className="text-xs sm:text-[13px] text-[#68615E] leading-relaxed line-clamp-3">
                                {dish.description}
                              </p>

                              {/* Accompaniments or Pairings */}
                              {(dish.accompaniment || dish.bestWith || dish.includes) && (
                                <div className="pt-2 text-[11px] text-[#1A1717]/80 border-t border-[#EADFD5]/60 flex items-start gap-1 font-medium">
                                  <span className="text-[#80182A] font-semibold">
                                    {dish.accompaniment
                                      ? 'Accompaniment:'
                                      : dish.bestWith
                                      ? 'Best with:'
                                      : 'Includes:'}
                                  </span>
                                  <span className="text-[#68615E]">
                                    {dish.accompaniment || dish.bestWith || dish.includes}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Card Footer: Add to Table Order Button */}
                          <div className="px-5 pb-5 pt-1">
                            <button
                              onClick={(e) => handleAddClick(e, dish)}
                              className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                                isAdded
                                  ? 'bg-[#80182A] text-white shadow-sm'
                                  : 'bg-[#FAF8F5] border border-[#EADFD5] text-[#1A1717] hover:bg-[#80182A] hover:text-white hover:border-[#80182A]'
                              }`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-[#C59B27]" />
                                  <span>Added to Order</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 text-[#80182A] group-hover:text-white transition-colors" />
                                  <span>+ Add to Table Order</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </React.Fragment>
          );
        })}

        {/* 4. KITCHEN SANCTUARY & ALLERGEN TRANSPARENCY BANNER */}
        <section
          aria-label="Allergen information"
          className="rounded-2xl bg-white border border-[#EADFD5] p-6 sm:p-8 flex items-start gap-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-[#80182A]/10 text-[#80182A] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-[#1A1717]">
              Kitchen Sanctuary &amp; Allergen Transparency
            </h4>
            <p className="text-xs sm:text-sm text-[#68615E] leading-relaxed font-light">
              At Thaayi, we take pride in authentic heritage cooking. Our kitchen prepares dishes containing crustaceans, tree nuts (cashews, coconut), and mustard seeds. Our meats are strictly Halal certified. Please inform your server or mention in reservation notes if anyone in your dining party has acute allergies. Customized Jain and pure satvik preparations can be crafted with 24 hours advance notification.
            </p>
          </div>
        </section>

        {/* 5. RESERVE YOUR TABLE AT THAAYI BANNER */}
        <section
          aria-label="Table reservation callout"
          className="rounded-3xl bg-[#80182A] text-[#FAF8F5] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C59B27] uppercase block">
              PLAN YOUR VISIT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Reserve Your Table at Thaayi
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/85 max-w-xl font-light">
              Experience the sensory richness of traditional Ceylon hospitality. We recommend booking 2–3 days in advance for weekend dinners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+94112345678"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#5C0E1C] hover:bg-[#450914] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>+94 11 234 5678</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C59B27] hover:bg-[#9E7B1C] text-[#141212] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default MenuRepertoire;
