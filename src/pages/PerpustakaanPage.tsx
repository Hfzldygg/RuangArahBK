import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data/bkData';
import { Article, BKCategory } from '../types';

interface PerpustakaanPageProps {
  onOpenArticle: (article: Article) => void;
}

export const PerpustakaanPage: React.FC<PerpustakaanPageProps> = ({ onOpenArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('semua');

  // Thumbnails illustrations matching the mockup cards
  const cardIllustrations: Record<string, { bg: string; svg: React.ReactNode }> = {
    'art-1': {
      bg: 'bg-[#EBF4F6]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <circle cx="60" cy="35" r="22" fill="#D5E9ED" />
          <rect x="42" y="24" width="36" height="26" rx="4" fill="#357B8A" />
          <line x1="48" y1="30" x2="72" y2="30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="36" x2="68" y2="36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="48" r="8" fill="#F59E0B" />
        </svg>
      ),
    },
    'art-2': {
      bg: 'bg-[#EBF6EF]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <circle cx="60" cy="35" r="20" fill="#F8D9C2" />
          <path d="M42 32 C42 18 78 18 78 32 C78 48 68 50 60 48 C52 50 42 48 42 32 Z" fill="#244D42" />
          <rect x="48" y="46" width="24" height="20" rx="3" fill="#2E7D52" />
          <circle cx="56" cy="34" r="1.8" fill="#1C2E28" />
          <circle cx="64" cy="34" r="1.8" fill="#1C2E28" />
          <path d="M58 40 Q60 42 62 40" stroke="#D96B43" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    'art-3': {
      bg: 'bg-[#FDF0EB]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <circle cx="48" cy="34" r="14" fill="#FFE0CC" />
          <path d="M36 60 C36 46 44 42 50 42 C56 42 62 46 62 60 Z" fill="#D96B43" />
          <circle cx="72" cy="34" r="14" fill="#F8D9C2" />
          <path d="M60 60 C60 46 68 42 74 42 C80 42 86 46 86 60 Z" fill="#244D42" />
        </svg>
      ),
    },
    'art-4': {
      bg: 'bg-[#FDF0EB]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <circle cx="50" cy="32" r="13" fill="#FFE0CC" />
          <circle cx="70" cy="32" r="13" fill="#F8D9C2" />
          <path d="M52 48 Q60 42 68 48" stroke="#D96B43" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    'art-5': {
      bg: 'bg-[#F2EDFA]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <circle cx="60" cy="35" r="22" fill="#E3D7F5" />
          <circle cx="60" cy="35" r="12" fill="#7C5CBF" />
          <path d="M60 27 L62 33 L68 35 L62 37 L60 43 L58 37 L52 35 L58 33 Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    'art-6': {
      bg: 'bg-[#EBF6EF]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <rect x="44" y="24" width="32" height="24" rx="3" fill="#FFFFFF" stroke="#244D42" strokeWidth="2" />
          <polygon points="60,18 78,26 42,26" fill="#244D42" />
          <circle cx="60" cy="52" r="10" fill="#A8C9B5" />
        </svg>
      ),
    },
    'art-7': {
      bg: 'bg-[#F2EDFA]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <rect x="42" y="26" width="36" height="26" rx="4" fill="#244D42" />
          <path d="M54 26 L54 22 C54 20 66 20 66 22 L66 26" stroke="#244D42" strokeWidth="2" fill="none" />
          <circle cx="60" cy="39" r="4" fill="#F59E0B" />
        </svg>
      ),
    },
    'art-8': {
      bg: 'bg-[#FDF0EB]',
      svg: (
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <rect x="45" y="20" width="30" height="38" rx="5" fill="#1C2E28" />
          <rect x="48" y="24" width="24" height="28" rx="2" fill="#EAF6EF" />
          <circle cx="60" cy="34" r="5" fill="#E0523C" />
        </svg>
      ),
    },
  };

  const filteredArticles = ARTICLES_DATA.filter((item) => {
    let matchCat = true;
    if (categoryFilter === 'pribadi') matchCat = item.category === 'pribadi';
    else if (categoryFilter === 'sosial') matchCat = item.category === 'sosial';
    else if (categoryFilter === 'belajar') matchCat = item.category === 'belajar';
    else if (categoryFilter === 'karier') matchCat = item.category === 'karier';
    else if (categoryFilter === 'studi') matchCat = item.category === 'karier';

    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const categoryBadgeColors: Record<string, string> = {
    pribadi: 'bg-[#EAF6EF] text-[#2E7D52]',
    sosial: 'bg-[#FDF0EB] text-[#D96B43]',
    belajar: 'bg-[#EBF4F6] text-[#357B8A]',
    karier: 'bg-[#F2EDFA] text-[#7C5CBF]',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header (Exact Match to Mockup Screen 7) */}
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Perpustakaan Digital BK
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Temukan berbagai artikel edukatif yang dapat membantumu dalam belajar, pertemanan,
          pengembangan diri, dan perencanaan masa depan.
        </p>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari artikel..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DFD8CC] bg-white text-xs sm:text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
          />
          <Search className="w-4 h-4 text-[#8C9E96] absolute left-3.5 top-3" />
        </div>

        {/* Category Pills (Exact Match: Semua, Pribadi, Sosial, Belajar, Karier, Studi Lanjut) */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {[
            { id: 'semua', label: 'Semua' },
            { id: 'pribadi', label: 'Pribadi' },
            { id: 'sosial', label: 'Sosial' },
            { id: 'belajar', label: 'Belajar' },
            { id: 'karier', label: 'Karier' },
            { id: 'studi', label: 'Studi Lanjut' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                categoryFilter === cat.id
                  ? 'bg-[#244D42] text-white shadow-2xs'
                  : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8 Article Cards Grid (Exact Match to Mockup Screen 7) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredArticles.map((art) => {
          const thumb = cardIllustrations[art.id] || {
            bg: 'bg-[#FAF7F2]',
            svg: <BookOpen className="w-8 h-8 text-[#244D42] m-auto" />,
          };
          return (
            <div
              key={art.id}
              onClick={() => onOpenArticle(art)}
              className="bg-white rounded-2xl border border-[#ECE5DA] overflow-hidden hover:border-[#244D42] shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Illustrated Header Thumbnail */}
              <div className={`h-28 w-full ${thumb.bg} flex items-center justify-center p-2 border-b border-[#F2ECE3]`}>
                {thumb.svg}
              </div>

              {/* Title & Body */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-[#1C2E28] group-hover:text-[#244D42] transition-colors line-clamp-2 leading-snug">
                  {art.title}
                </h3>

                {/* Date & Category Tag at bottom of card */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#637970] border-t border-[#FAF7F2]">
                  <span>{art.updatedAt}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                      categoryBadgeColors[art.category] || 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {art.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
