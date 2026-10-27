import React, { useState } from 'react';
import {
  Search,
  Plus,
  Minus,
  Calendar,
  MessageCircle,
  AlertTriangle,
  Settings,
  Info,
  Sparkles,
} from 'lucide-react';
import { FAQ_DATA } from '../data/bkData';
import { Page, BKCategory } from '../types';

interface RuangTanyaPageProps {
  onNavigate: (page: Page) => void;
  onGoToCounseling: (category: BKCategory) => void;
}

export const RuangTanyaPage: React.FC<RuangTanyaPageProps> = ({
  onNavigate,
  onGoToCounseling,
}) => {
  const [activeTab, setActiveTab] = useState<'faq' | 'konseling'>('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // WhatsApp configuration simulation
  const [isConfiguringWa, setIsConfiguringWa] = useState(false);
  const [customWaNumber, setCustomWaNumber] = useState('');
  const [activeWaNumber, setActiveWaNumber] = useState('');
  const [waNoticeModal, setWaNoticeModal] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    let matchCat = true;
    if (selectedCategory === 'belajar') matchCat = item.category === 'belajar';
    else if (selectedCategory === 'pertemanan') matchCat = item.category === 'sosial';
    else if (selectedCategory === 'karier') matchCat = item.category === 'karier';
    else if (selectedCategory === 'studi') matchCat = item.category === 'karier';
    else if (selectedCategory === 'pribadi') matchCat = item.category === 'pribadi';

    const matchSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchSearch;
  });

  const handleWhatsAppClick = () => {
    if (!activeWaNumber.trim()) {
      setWaNoticeModal(true);
    } else {
      window.open(
        `https://wa.me/${activeWaNumber.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20Guru%20BK,%20saya%20ingin%20bertanya%20jadwal%20layanan.`,
        '_blank'
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header (Exact Match to Mockup Screen 6) */}
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Ruang Tanya
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Temukan jawaban untuk pertanyaan umum atau ajukan permohonan konseling jika kamu membutuhkan
          bantuan lebih lanjut.
        </p>
      </div>

      {/* Two Tab Buttons: Pertanyaan Umum vs Permohonan Konseling */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab('faq')}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'faq'
              ? 'bg-[#244D42] text-white shadow-xs'
              : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
          }`}
        >
          Pertanyaan Umum
        </button>

        <button
          onClick={() => {
            setActiveTab('konseling');
            onNavigate('konseling');
          }}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'konseling'
              ? 'bg-[#244D42] text-white shadow-xs'
              : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
          }`}
        >
          Permohonan Konseling
        </button>
      </div>

      {/* Main 2-Column Grid (Exact Match to Mockup Screen 6) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left FAQ Section (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DFD8CC] bg-white text-xs sm:text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
            />
            <Search className="w-4 h-4 text-[#8C9E96] absolute left-3.5 top-3" />
          </div>

          {/* Filter Pills (Exact Match: Semua, Belajar, Pertemanan, Karier, Studi Lanjut, Pribadi) */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { id: 'semua', label: 'Semua' },
              { id: 'belajar', label: 'Belajar' },
              { id: 'pertemanan', label: 'Pertemanan' },
              { id: 'karier', label: 'Karier' },
              { id: 'studi', label: 'Studi Lanjut' },
              { id: 'pribadi', label: 'Pribadi' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedCategory(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === f.id
                    ? 'bg-[#244D42] text-white'
                    : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List (with + and -) */}
          <div className="space-y-3 pt-2">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#ECE5DA] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#1C2E28] leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#244D42] shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#526B61] leading-relaxed border-t border-[#F2ECE3] bg-[#FDFBF7]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Counselor Action Card (5 Cols, Exact Match to Mockup Screen 6) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-5 text-center">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-[#1C2E28]">Belum menemukan jawaban?</h3>
            <p className="text-xs text-[#637970] leading-relaxed max-w-sm mx-auto">
              Layanan ini untuk membantumu langsung kepada guru BK atau pembimbing sekolah.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 max-w-xs mx-auto">
            <button
              onClick={() => onNavigate('konseling')}
              className="w-full py-2.5 px-4 rounded-full bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ajukan Konseling</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full py-2.5 px-4 rounded-full border border-[#244D42] text-[#244D42] hover:bg-[#FAF7F2] text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hubungi Admin BK</span>
            </button>
            <p className="text-[10px] text-[#9FB0A9]">Kontak resmi belum diatur.</p>
          </div>

          {/* Friendly Counselor Graphic with Lightbulb Icon */}
          <div className="pt-2 flex justify-center">
            <div className="w-28 h-28 rounded-full bg-[#EBF6EF] border-2 border-[#D2ECD9] flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#EBF6EF" />
                <circle cx="50" cy="42" r="18" fill="#FFE0CC" />
                <path d="M26 40 C26 22 74 22 74 40 C74 58 64 60 50 54 C36 60 26 58 26 40 Z" fill="#244D42" />
                <circle cx="44" cy="40" r="2" fill="#1C2E28" />
                <circle cx="56" cy="40" r="2" fill="#1C2E28" />
                <path d="M47 48 Q50 51 53 48" stroke="#D96B43" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M24 90 C24 66 36 60 50 60 C64 60 76 66 76 90 Z" fill="#2E7D52" />
              </svg>
              <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">
                💡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal Notice */}
      {waNoticeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#FAF7F2] rounded-3xl max-w-sm w-full p-6 space-y-4 border border-[#E5DFD5] shadow-xl text-left">
            <h4 className="text-sm font-bold text-[#1C2E28]">Kontak Resmi Sekolah Belum Diatur</h4>
            <p className="text-xs text-[#526B61] leading-relaxed">
              Nomor WhatsApp resmi Guru BK akan dipasang saat implementasi riil sekolah. Untuk sesi
              privat, silakan gunakan menu <strong>Ajukan Konseling</strong>.
            </p>
            <button
              onClick={() => setWaNoticeModal(false)}
              className="w-full py-2 bg-[#244D42] text-white rounded-full text-xs font-semibold"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
