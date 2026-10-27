import React, { useState } from 'react';
import {
  MessageSquare,
  Leaf,
  Menu,
  X,
  Search,
  User,
} from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenPetaArahku: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPetaArahku,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      onNavigate('perpustakaan');
      setSearchModalOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#ECE5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Brand with Logo & Tagline */}
            <button
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-3 text-left group focus-visible:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-[#244D42] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform relative">
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <Leaf className="w-3.5 h-3.5 text-[#A8C9B5] absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#1C2E28] tracking-tight block">
                  RuangArah BK
                </span>
                <span className="text-[10px] text-[#637970] hidden sm:block tracking-tight -mt-0.5">
                  Ruang untuk Bercerita, Tempat untuk Menemukan Arah.
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links (with Ruang Tanya added) */}
            <nav className="hidden lg:flex items-center gap-1.5 lg:gap-2.5 text-xs sm:text-[13px] font-medium text-[#465E54]">
              <button
                onClick={() => handleNavClick('beranda')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'beranda'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => handleNavClick('layanan')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'layanan'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Layanan BK
              </button>
              <button
                onClick={onOpenPetaArahku}
                className="px-3 py-1.5 rounded-lg transition-colors hover:text-[#1C2E28] hover:bg-[#F2ECE3]"
              >
                Peta Arahku
              </button>
              <button
                onClick={() => handleNavClick('tanya')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'tanya'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Ruang Tanya
              </button>
              <button
                onClick={() => handleNavClick('konseling')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'konseling'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Jadwal Konseling
              </button>
              <button
                onClick={() => handleNavClick('masa-depan')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'masa-depan'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Masa Depan
              </button>
              <button
                onClick={() => handleNavClick('perpustakaan')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'perpustakaan'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Artikel
              </button>
              <button
                onClick={() => handleNavClick('privasi')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'privasi'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Privasi & Etika
              </button>
              <button
                onClick={() => handleNavClick('tentang')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === 'tentang'
                    ? 'text-[#1C2E28] font-bold bg-[#EDE7DD]'
                    : 'hover:text-[#1C2E28] hover:bg-[#F2ECE3]'
                }`}
              >
                Tentang
              </button>
            </nav>

            {/* Right Action: Search & Masuk (Laporan Tugas completely removed) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-full text-[#465E54] hover:text-[#1C2E28] hover:bg-[#ECE5DA] transition-colors"
                title="Cari materi atau topik"
                aria-label="Cari topik"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-5 py-2 rounded-full bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Masuk</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-[#465E54] hover:text-[#1C2E28]"
                aria-label="Pencarian"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#244D42] hover:bg-[#ECE5DA]"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#ECE5DA] px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="text-xs font-bold text-[#637970] uppercase tracking-wider">
              Layanan BK
            </div>
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#ECE5DA]">
              <button
                onClick={() => handleNavClick('layanan')}
                className="p-2.5 rounded-xl bg-white border border-[#E5DFD5] text-left text-xs font-semibold text-[#1C2E28]"
              >
                🌱 Bimbingan Pribadi
              </button>
              <button
                onClick={() => handleNavClick('layanan')}
                className="p-2.5 rounded-xl bg-white border border-[#E5DFD5] text-left text-xs font-semibold text-[#1C2E28]"
              >
                👥 Bimbingan Sosial
              </button>
              <button
                onClick={() => handleNavClick('layanan')}
                className="p-2.5 rounded-xl bg-white border border-[#E5DFD5] text-left text-xs font-semibold text-[#1C2E28]"
              >
                📖 Bimbingan Belajar
              </button>
              <button
                onClick={() => handleNavClick('layanan')}
                className="p-2.5 rounded-xl bg-white border border-[#E5DFD5] text-left text-xs font-semibold text-[#1C2E28]"
              >
                🧭 Bimbingan Karier
              </button>
            </div>

            <div className="space-y-1 text-sm font-medium text-[#244D42]">
              <button
                onClick={() => handleNavClick('beranda')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Beranda
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPetaArahku();
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Peta Arahku (Refleksi Kebutuhan)
              </button>
              <button
                onClick={() => handleNavClick('tanya')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA] font-semibold"
              >
                Ruang Tanya & FAQ
              </button>
              <button
                onClick={() => handleNavClick('konseling')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Jadwal Konseling
              </button>
              <button
                onClick={() => handleNavClick('masa-depan')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Jelajah Masa Depan
              </button>
              <button
                onClick={() => handleNavClick('perpustakaan')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Artikel Edukasi
              </button>
              <button
                onClick={() => handleNavClick('privasi')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Privasi dan Etika Layanan
              </button>
              <button
                onClick={() => handleNavClick('tentang')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#ECE5DA]"
              >
                Tentang RuangArah BK
              </button>
            </div>

            <div className="pt-2 border-t border-[#ECE5DA]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
                className="py-2.5 px-4 bg-[#244D42] text-white text-xs font-semibold rounded-full w-full"
              >
                Masuk
              </button>
            </div>
          </div>
        )}
      </header>

      {/* QUICK SEARCH MODAL */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#FAF7F2] rounded-2xl max-w-lg w-full p-6 space-y-4 border border-[#E5DFD5] shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#1C2E28]">Cari Layanan & Materi</h4>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-[#637970] hover:text-[#1C2E28]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ketik topik: presentasi, teman, jurusan, beasiswa..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#DFD8CC] text-sm text-[#1C2E28] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
                />
                <Search className="w-4 h-4 text-[#8C9E96] absolute left-3.5 top-3" />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-[#637970]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#244D42] text-white text-xs font-semibold"
                >
                  Cari Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LOGIN MODAL SIMULATION */}
      {loginModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#FAF7F2] rounded-3xl max-w-sm w-full p-6 sm:p-8 space-y-5 border border-[#E5DFD5] shadow-xl text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#1C2E28]">Masuk Siswa / Guru</h4>
              </div>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="p-1 text-[#637970] hover:text-[#1C2E28]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#526B61] leading-relaxed">
              Pada prototipe ini, Anda dapat langsung menjelajahi seluruh fitur bimbingan konseling tanpa perlu login password.
            </p>

            <div className="p-3 bg-white rounded-xl border border-[#E2DBD1] text-[11px] text-[#4A6359] space-y-1">
              <span className="font-bold text-[#244D42] block">Implementasi Riil Sekolah:</span>
              <p>Menggunakan Akun Belajar.id / NISN Siswa terintegrasi Dapodik sekolah.</p>
            </div>

            <button
              onClick={() => setLoginModalOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#244D42] text-white text-xs font-bold hover:bg-[#1A3B33] transition-colors"
            >
              Lanjutkan sebagai Tamu / Siswa
            </button>
          </div>
        </div>
      )}
    </>
  );
};
