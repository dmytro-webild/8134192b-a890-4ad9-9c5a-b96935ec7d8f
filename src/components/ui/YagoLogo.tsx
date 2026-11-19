interface YagoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function YagoLogo({ className = '', size = 'md', showSubtitle = true }: YagoLogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Logo Emblem matching ref-1 */}
      <div className={`relative flex-shrink-0 flex items-center justify-center ${iconSizes[size]}`}>
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm">
          {/* Arc of Stars */}
          <g fill="#0b3b8c">
            <polygon points="60,10 62,15 67,15 63,18 64,23 60,20 56,23 57,18 53,15 58,15" />
            <polygon points="40,15 42,19 46,19 43,22 44,26 40,24 36,26 37,22 34,19 38,19" />
            <polygon points="80,15 82,19 86,19 83,22 84,26 80,24 76,26 77,22 74,19 78,19" />
            <polygon points="23,28 25,31 29,31 26,34 27,38 23,36 19,38 20,34 17,31 21,31" />
            <polygon points="97,28 99,31 103,31 100,34 101,38 97,36 93,38 94,34 91,31 95,31" />
          </g>
          {/* Graduation Cap */}
          <path d="M60 26 L98 42 L60 56 L22 42 Z" fill="#0b3b8c" />
          <path d="M38 52 L38 66 C38 72 82 72 82 66 L82 52" fill="none" stroke="#0b3b8c" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M88 47 L88 70 M88 70 L92 78 M88 70 L84 78" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />

          {/* 3D Open Book / Cube Base: Left Wing (Blue), Right Wing (Red) */}
          <g transform="translate(0, 10)">
            {/* Left page (Deep Blue) */}
            <path d="M60 62 L22 76 L22 102 L60 88 Z" fill="#0b3b8c" />
            <path d="M60 62 L22 76 L60 72 Z" fill="#1d4ed8" opacity="0.9" />

            {/* Right page (Bright Red) */}
            <path d="M60 62 L98 76 L98 102 L60 88 Z" fill="#dc2626" />
            <path d="M60 62 L98 76 L60 72 Z" fill="#ef4444" opacity="0.9" />

            {/* Center spine highlight */}
            <line x1="60" y1="62" x2="60" y2="88" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Brand Name & Subtitle */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none text-[#0b3b8c] ${textSizes[size]}`}>
          YAGO <span className="text-[#004494]">SCHOOL</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight mt-0.5">
            Centre de langues et de formations
          </span>
        )}
      </div>
    </div>
  );
}
