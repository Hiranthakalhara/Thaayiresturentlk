import React from 'react';

interface ThaayiLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const ThaayiLogo: React.FC<ThaayiLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  const sizeStyles = {
    sm: {
      icon: 'w-7 h-7',
      title: 'text-xl tracking-wider',
      subtitle: 'text-[7.5px] tracking-[0.25em]',
      gap: 'gap-2.5',
    },
    md: {
      icon: 'w-10 h-10',
      title: 'text-2xl sm:text-[26px] tracking-wide',
      subtitle: 'text-[8.5px] sm:text-[9.5px] tracking-[0.28em]',
      gap: 'gap-3',
    },
    lg: {
      icon: 'w-14 h-14',
      title: 'text-3xl sm:text-4xl tracking-wide',
      subtitle: 'text-[10px] sm:text-[12px] tracking-[0.3em]',
      gap: 'gap-4',
    },
  }[size];

  return (
    <div className={`flex items-center ${sizeStyles.gap} ${className}`}>
      {/* Sacred Ceylon Lotus Flame Emblem */}
      <div className={`${sizeStyles.icon} shrink-0 relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Golden Cradle Line */}
          <path
            d="M20 80 Q 50 94 80 80"
            stroke="#C59B27"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Wing Petal */}
          <path
            d="M40 70 C 18 64 8 50 18 42 C 28 36 38 52 42 66 Z"
            fill="#C59B27"
          />
          {/* Right Wing Petal */}
          <path
            d="M60 70 C 82 64 92 50 82 42 C 72 36 62 52 58 66 Z"
            fill="#C59B27"
          />

          {/* Center Outer Golden Petal */}
          <path
            d="M50 16 C 58 32 70 48 68 68 C 66 76 58 82 50 82 C 42 82 34 76 32 68 C 30 48 42 32 50 16 Z"
            fill="#C59B27"
          />

          {/* Inner Sacred Burgundy Flame Droplet */}
          <path
            d="M50 28 C 55 40 62 52 60 66 C 58 72 54 75 50 75 C 46 75 42 72 40 66 C 38 52 45 40 50 28 Z"
            fill="#80182A"
          />

          {/* Central Golden Core / Bindu Seed */}
          <circle cx="50" cy="62" r="4.5" fill="#FAF8F5" />
          <circle cx="50" cy="62" r="3" fill="#C59B27" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col select-none">
        <span
          className={`font-serif font-extrabold uppercase leading-none ${sizeStyles.title} ${
            isDark ? 'text-white' : 'text-[#80182A]'
          }`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          THAAYI
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-bold uppercase mt-1 ${sizeStyles.subtitle} ${
              isDark ? 'text-[#C59B27]' : 'text-[#9E7B1C]'
            }`}
            style={{ letterSpacing: '0.28em' }}
          >
            SRI LANKAN CUISINE
          </span>
        )}
      </div>
    </div>
  );
};
export default ThaayiLogo;
