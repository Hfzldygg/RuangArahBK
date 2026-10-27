import React, { useState } from 'react';
import {
  Search,
  Plus,
  Minus,
  Calendar,
  MessageCircle,
  AlertTriangle,
  Lock,
  ArrowRight,
  Settings,
  ShieldCheck,
  CheckCircle2,
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

  // WhatsApp configuration simulation state (Sesuai Poin 6 Ketentuan Prompt 1)
  const [isConfiguringWa, setIsConfiguringWa] = useState(false);
  const [customWaNumber, setCustomWaNumber] = useState('');
  const [activeWaNumber, setActiveWaNumber] = useState(''); // Default kosong: "Kontak resmi sekolah belum diatur"
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
        `https://wa.me/${activeWaNumber.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20Guru%20BK,%20saya%20ingin%20menanyakan%20informasi%20layanan%20BK.`,
        '_blank'
      );
    }
  };

  const handleSaveWaConfig = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveWaNumber(customWaNumber.trim());
    setIsConfiguringWa(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header */}
      <div className="space-y-2 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EF] text-[#2E7D52] text-xs font-bold">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Layanan Informasi & Tanya Jawab Siswa</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Ruang Tanya Guru BK
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Temukan jawaban untuk pertanyaan umum seputar sekolah dan pengembangan diri, atau ajukan
          permohonan konseling jika kamu membutuhkan ruang privat.
        </p>
      </div>

      {/* Bagian A & B Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setActiveTab('faq')}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'faq'
              ? 'bg-[#244D42] text-white shadow-xs'
              : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
          }`}
        >
          Bagian A: Pertanyaan Umum (FAQ)
        </button>

        <button
          onClick={() => setActiveTab('konseling')}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'konseling'
              ? 'bg-[#244D42] text-white shadow-xs'
              : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
          }`}
        >
          Bagian B: Permohonan Konseling Pribadi & WhatsApp
        </button>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* BAGIAN A: PERTANYAAN UMUM (7 COLS) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-[#1C2E28]">
              Pertanyaan yang Sering Diajukan
            </h2>
            <span className="text-xs text-[#637970]">{filteredFaqs.length} pertanyaan</span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan... (misal: gugup, jurusan, rahasia, cemas)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DFD8CC] bg-white text-xs sm:text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
            />
            <Search className="w-4 h-4 text-[#8C9E96] absolute left-3.5 top-3" />
          </div>

          {/* Filter Pills */}
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

          {/* FAQ Accordion List */}
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

        {/* BAGIAN B: PERMOHONAN KONSELING PRIBADI & WHATSAPP (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card Permohonan Konseling Pribadi (Sesuai Poin 6 Prompt) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ECE5DA] shadow-2xs space-y-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#1C2E28]">
                Permohonan Konseling Pribadi
              </h3>
              <p className="text-xs text-[#526B61] leading-relaxed">
                Kami <strong>tidak menyediakan kolom komentar publik</strong> untuk menceritakan
                masalah pribadi demi menjaga kehormatan dan kerahasiaan siswa.
              </p>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] text-xs text-[#526B61] space-y-1">
              <span className="font-bold text-[#1C2E28] block">Alur yang Aman:</span>
              <p>
                Siswa langsung diarahkan menuju halaman pengajuan jadwal konseling yang terlindungi.
              </p>
            </div>

            <button
              onClick={() => onNavigate('konseling')}
              className="w-full py-3 rounded-xl bg-[#244D42] hover:bg-[#1A3B33] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Buka Formulir Konseling Privat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card WhatsApp Admin BK (Sesuai Poin 6: Tidak ada nomor palsu, ada konfigurasi resmi, peringatan privasi pihak ketiga) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ECE5DA] shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#EAF6EF] text-[#2E7D52]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#1C2E28]">
                  Hubungi Admin BK melalui WhatsApp
                </h3>
              </div>
              <button
                onClick={() => setIsConfiguringWa(!isConfiguringWa)}
                className="p-1 rounded text-[#8C9E96] hover:text-[#1C2E28]"
                title="Konfigurasi nomor sekolah"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#637970] leading-relaxed">
              Kanal tambahan untuk menanyakan jadwal piket guru BK atau informasi umum sekolah.
            </p>

            {/* Status Nomor Resmi */}
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] text-xs space-y-1">
              <span className="text-[#8C9E96] block text-[11px] font-medium">Status Nomor Resmi:</span>
              {activeWaNumber ? (
                <span className="font-mono font-bold text-[#2E7D52]">
                  {activeWaNumber} (Terhubung)
                </span>
              ) : (
                <span className="font-semibold text-amber-800">
                  Kontak resmi sekolah belum diatur
                </span>
              )}
            </div>

            {/* Formulir Konfigurasi Nomor (Simulasi untuk Pengelola Sekolah) */}
            {isConfiguringWa && (
              <form onSubmit={handleSaveWaConfig} className="p-3 bg-[#EAF6EF] rounded-xl border border-[#D2ECD9] space-y-2">
                <span className="text-[11px] font-bold text-[#244D42] block">
                  Pengaturan Nomor WhatsApp Guru BK:
                </span>
                <input
                  type="text"
                  placeholder="Contoh: 6281234567890"
                  value={customWaNumber}
                  onChange={(e) => setCustomWaNumber(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#D2ECD9] bg-white text-[#1C2E28]"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-3 py-1 rounded bg-[#244D42] text-white text-[11px] font-bold"
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveWaNumber('');
                      setCustomWaNumber('');
                      setIsConfiguringWa(false);
                    }}
                    className="px-2 py-1 rounded text-[#526B61] text-[11px]"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* Tombol WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeWaNumber
                  ? 'bg-[#2E7D52] hover:bg-[#256643] text-white'
                  : 'bg-[#FAF7F2] hover:bg-[#F2ECE3] text-[#526B61] border border-[#DFD8CC]'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {activeWaNumber
                  ? 'Hubungi Admin BK melalui WhatsApp'
                  : 'Periksa Kontak WhatsApp Resmi'}
              </span>
            </button>

            {/* Peringatan Privasi Pihak Ketiga (Wajib sesuai prompt 1) */}
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Peringatan Privasi:</strong> WhatsApp merupakan layanan pihak ketiga. Tidak
                dianjurkan untuk mengirim cerita pribadi yang sensitif melalui chat sebelum memahami
                risiko privasinya.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL KETIKA NOMOR BELUM DIATUR */}
      {waNoticeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#FAF7F2] rounded-3xl max-w-sm w-full p-6 space-y-4 border border-[#E5DFD5] shadow-xl text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1C2E28]">Kontak Resmi Sekolah Belum Diatur</h4>
              <p className="text-xs text-[#526B61] mt-1.5 leading-relaxed">
                Sesuai prinsip etika, sistem ini tidak menggunakan nomor palsu dan tidak membuka
                tautan yang tidak berfungsi. Kontak resmi akan dipasang oleh pihak sekolah saat
                peluncuran definitif.
              </p>
            </div>
            <p className="text-[11px] text-[#8C9E96]">
              *Anda dapat mencoba menyetel nomor melalui tombol ikon roda gigi pengaturan di pojok kartu WhatsApp.
            </p>
            <button
              onClick={() => setWaNoticeModal(false)}
              className="w-full py-2 rounded-full bg-[#244D42] text-white text-xs font-semibold"
            >
              Mengerti & Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
