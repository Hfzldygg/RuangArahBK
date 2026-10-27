import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`}>
      {/* Decorative Warm Arched Backdrop */}
      <div className="absolute inset-0 bg-[#F4EFEA] rounded-[2.5rem] -rotate-1 scale-95 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF2ED] to-[#FDF8F3] rounded-[2.5rem] border border-[#E8E2D8] -z-10" />

      {/* Floating Thought Bubble with Heart (Exact match to reference mockup) */}
      <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-sm border border-[#E2DBD1] max-w-[190px] text-left transform rotate-2 animate-bounce duration-1000">
        <p className="text-[11px] leading-tight font-medium text-[#234E43]">
          Ruang untuk cerita, tumbuh, dan melangkah <span className="font-bold text-[#E06D53]">lebih jauh 💕</span>
        </p>
      </div>

      <svg
        viewBox="0 0 540 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xs"
        aria-label="Ilustrasi siswa SMA/SMK ceria berdiskusi bersama di RuangArah BK"
      >
        <defs>
          <linearGradient id="warmBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF5EE" />
            <stop offset="100%" stopColor="#F0EAE1" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A7C6B" />
            <stop offset="100%" stopColor="#2E5A4D" />
          </linearGradient>
        </defs>

        {/* Background Arch Window & Plants */}
        <path d="M70 120 C70 40 470 40 470 120 L470 380 L70 380 Z" fill="#FDFBF7" stroke="#EBE4D8" strokeWidth="2" opacity="0.9" />

        {/* Decorative Plants on sides */}
        <g opacity="0.85">
          {/* Left Plant */}
          <path d="M85 360 C70 320 65 260 90 220 C100 250 95 310 85 360" fill="url(#leafGrad)" />
          <path d="M85 360 C60 330 45 285 60 250 C75 280 80 320 85 360" fill="#6B9B8A" opacity="0.8" />
          <path d="M85 360 C95 330 115 290 110 260 C100 290 92 330 85 360" fill="#3D6B5C" />
          {/* Right Plant */}
          <path d="M455 360 C470 320 475 260 450 220 C440 250 445 310 455 360" fill="url(#leafGrad)" />
          <path d="M455 360 C480 330 495 285 480 250 C465 280 460 320 455 360" fill="#6B9B8A" opacity="0.8" />
        </g>

        {/* Study Table */}
        <ellipse cx="270" cy="380" rx="230" ry="26" fill="#EDE7DD" />
        <rect x="90" y="350" width="360" height="30" rx="15" fill="#FFFFFF" stroke="#DFD7CB" strokeWidth="2" />

        {/* Laptop & Books on Table */}
        <g>
          {/* Laptop Base */}
          <path d="M225 342 L315 342 L325 352 L215 352 Z" fill="#CBD5E1" />
          {/* Laptop Screen */}
          <rect x="230" y="295" width="80" height="47" rx="3" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
          <rect x="234" y="299" width="72" height="39" rx="2" fill="#E2F1ED" />
          {/* Heart on Laptop screen */}
          <path d="M270 317 C270 314 267 311 264 311 C261 311 259 313 259 316 C259 321 270 327 270 327 C270 327 281 321 281 316 C281 313 279 311 276 311 C273 311 270 314 270 317 Z" fill="#E06D53" />

          {/* Book on left */}
          <path d="M145 345 L190 338 L200 350 L155 354 Z" fill="#DDD6F3" stroke="#B8AEDB" strokeWidth="1.5" />
          <line x1="152" y1="346" x2="190" y2="340" stroke="#7C5CBF" strokeWidth="1.5" />

          {/* Book on right */}
          <rect x="350" y="340" width="45" height="12" rx="2" fill="#A8C9B5" stroke="#7BA88E" strokeWidth="1.5" />
          <rect x="353" y="334" width="40" height="8" rx="2" fill="#F5D5C3" stroke="#DBAB95" strokeWidth="1.5" />
        </g>

        {/* CHARACTER 1 (Left): Siswa Laki-laki Seragam Putih-Abu / Cardigan Hijau Tua */}
        <g>
          {/* Body */}
          <path d="M125 350 C125 285 160 260 190 260 C215 260 230 285 230 350 Z" fill="#244D42" />
          <path d="M165 260 L175 300 L185 260 Z" fill="#FFFFFF" />
          <path d="M172 275 L178 275 L176 320 L174 320 Z" fill="#1C2E28" />
          {/* Neck */}
          <rect x="170" y="240" width="10" height="15" fill="#F8D9C2" />
          {/* Head */}
          <circle cx="175" cy="225" r="24" fill="#F8D9C2" />
          {/* Black Stylized Hair */}
          <path d="M150 220 C150 190 185 190 200 205 C205 215 200 235 195 240 C190 230 180 235 170 235 C160 235 155 240 150 220" fill="#1E242B" />
          {/* Face: eyes & friendly smile */}
          <circle cx="166" cy="225" r="2.2" fill="#1E242B" />
          <circle cx="184" cy="225" r="2.2" fill="#1E242B" />
          <path d="M171 234 Q175 238 179 234" stroke="#D97757" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Cheeks blush */}
          <circle cx="163" cy="230" r="3" fill="#FCA5A5" opacity="0.6" />
          <circle cx="187" cy="230" r="3" fill="#FCA5A5" opacity="0.6" />
        </g>

        {/* CHARACTER 2 (Center): Siswi Ceria dengan Rambut Sebahu & Blazer Biru Pastel */}
        <g>
          {/* Body */}
          <path d="M225 350 C225 270 260 245 285 245 C310 245 345 270 345 350 Z" fill="#E8EDF2" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M275 245 L285 280 L295 245 Z" fill="#FFFFFF" />
          <circle cx="285" cy="290" r="3" fill="#E06D53" />
          {/* Neck */}
          <rect x="280" y="225" width="10" height="15" fill="#FFE0CC" />
          {/* Head */}
          <circle cx="285" cy="210" r="25" fill="#FFE0CC" />
          {/* Hair: Bob style with bangs */}
          <path d="M258 208 C258 175 312 175 312 208 C312 245 305 255 295 245 C285 235 275 235 265 245 C258 245 258 230 258 208 Z" fill="#2D282A" />
          {/* Face: Happy Anime/Manga style */}
          <ellipse cx="276" cy="208" rx="2.5" ry="3.5" fill="#1E242B" />
          <ellipse cx="294" cy="208" rx="2.5" ry="3.5" fill="#1E242B" />
          <path d="M280 220 Q285 226 290 220" stroke="#E06D53" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          {/* Cute Blush */}
          <circle cx="270" cy="216" r="4" fill="#F87171" opacity="0.5" />
          <circle cx="300" cy="216" r="4" fill="#F87171" opacity="0.5" />
          {/* Hands typing on laptop */}
          <path d="M255 315 C265 330 280 340 290 340" stroke="#FFE0CC" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* CHARACTER 3 (Right): Siswa Kacamata dengan Seragam Rapi & Tas Ransel */}
        <g>
          {/* Backpack strap */}
          <path d="M370 270 Q395 280 405 340" stroke="#D97757" strokeWidth="9" strokeLinecap="round" />
          {/* Body */}
          <path d="M340 350 C340 280 365 255 390 255 C415 255 440 280 440 350 Z" fill="#244D42" />
          <path d="M380 255 L390 295 L400 255 Z" fill="#FFFFFF" />
          <polygon points="387,280 393,280 390,320" fill="#E06D53" />
          {/* Neck */}
          <rect x="385" y="235" width="10" height="15" fill="#F8D9C2" />
          {/* Head */}
          <circle cx="390" cy="220" r="23" fill="#F8D9C2" />
          {/* Hair: Fluffy short haircut */}
          <path d="M365 215 C365 185 415 185 415 215 C415 225 410 235 405 230 C395 225 385 225 375 230 C368 235 365 225 365 215" fill="#2D282A" />
          {/* Glasses */}
          <rect x="375" y="213" width="13" height="11" rx="3" stroke="#1E293B" strokeWidth="1.8" fill="none" />
          <rect x="392" y="213" width="13" height="11" rx="3" stroke="#1E293B" strokeWidth="1.8" fill="none" />
          <line x1="388" y1="218" x2="392" y2="218" stroke="#1E293B" strokeWidth="1.8" />
          {/* Eyes behind glasses */}
          <circle cx="381" cy="218" r="2" fill="#1E293B" />
          <circle cx="398" cy="218" r="2" fill="#1E293B" />
          {/* Warm Grin */}
          <path d="M386 229 Q390 234 395 229" stroke="#D97757" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="376" cy="225" r="3" fill="#FCA5A5" opacity="0.6" />
          <circle cx="404" cy="225" r="3" fill="#FCA5A5" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
