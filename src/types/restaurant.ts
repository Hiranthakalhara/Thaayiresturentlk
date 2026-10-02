export type DietaryTag = 'all' | 'vegetarian' | 'vegan' | 'halal' | 'gluten-free' | 'spicy';

export interface Dish {
  id: string;
  name: string;
  nativeName?: string;
  priceLKR: number;
  priceUSD: number;
  spiceLevel?: string;
  heatRating?: number; // 0 to 4
  description: string;
  accompaniment?: string;
  bestWith?: string;
  includes?: string;
  badge?: string;
  category: 'starters' | 'curries' | 'kottu' | 'hoppers' | 'seafood' | 'desserts' | 'drinks';
  categoryLabel: string;
  dietary: ('vegetarian' | 'vegan' | 'halal' | 'gluten-free' | 'spicy')[];
  image: string;
  culturalOrigin?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  selectedSpice?: string;
  specialInstructions?: string;
}

export interface ReservationDetails {
  fullName: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'courtyard' | 'main-dining' | 'private-cinnamon-room' | 'verandah';
  dietaryNotes: string;
  isTastingJourney?: boolean;
  winePairing?: boolean;
}
