import React from 'react';
import {
  MessageSquare,
  Leaf,
  ShieldAlert,
  Lock,
  PhoneCall,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenAcademicReport: () => void;
  onOpenPetaArahku: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAcademicReport,
  onOpenPetaArahku,
}) => {
  return (
    <footer className="bg-[#1C2E28] text-[#D1DDD7] pt-12 pb-8 border-t border-[#2A443C] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Emergency Notice Card */}
        <div className="bg-[#244D42] border border-[#316154] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Membutuhkan Bantuan Segera atau Mengalami Krisis?
              </h4>
              <p className="text-xs text-[#B2C7BF] mt-1 max-w-2xl leading-relaxed">
                Website ini bukan layanan darurat 24 jam. Jika membutuhkan pertolongan mendesak,
                segera hubungi orang dewasa tepercaya, guru BK sekolah, atau kontak darurat
                nasional.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C2E28] text-white text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5 text-[#A8C9B5]" />
              <span>Hotline Kemenkes: 119 ext. 8</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C2E28] text-white text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5 text-[#DDD6F3]" />
              <span>Sahabat Anak: 1500-771</span>
            </span>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#B2C7BF]">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2E7D52] text-white flex items-center justify-center font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">RuangArah BK</span>
            </div>
            <p className="italic text-[#A8C9B5]">
              "Ruang untuk Bercerita, Tempat untuk Menemukan Arah."
            </p>
            <p className="leading-relaxed">
              Layanan Bimbingan dan Konseling berbasis web untuk siswa SMA/SMK dengan guru BK
              sebagai pengelola layanannya.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenAcademicReport}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#244D42] hover:bg-[#2F5E52] text-white text-xs font-semibold rounded-lg transition-colors border border-[#316154]"
              >
                <FileText className="w-3.5 h-3.5 text-[#A8C9B5]" />
                <span>Naskah Laporan Tugas Dosen</span>
              </button>
            </div>
          </div>

          {/* Col 2: Layanan BK */}
          <div className="space-y-2.5">
            <h5 className="font-bold uppercase tracking-wider text-white text-xs">Layanan BK</h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="hover:text-white transition-colors"
                >
                  Bimbingan Pribadi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="hover:text-white transition-colors"
                >
                  Bimbingan Sosial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="hover:text-white transition-colors"
                >
                  Bimbingan Belajar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="hover:text-white transition-colors"
                >
                  Bimbingan Karier
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPetaArahku}
                  className="text-[#A8C9B5] hover:text-white font-semibold transition-colors"
                >
                  Peta Arahku (Refleksi)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi */}
          <div className="space-y-2.5">
            <h5 className="font-bold uppercase tracking-wider text-white text-xs">Menu Cepat</h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('konseling')}
                  className="hover:text-white transition-colors"
                >
                  Jadwal Konseling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('perpustakaan')}
                  className="hover:text-white transition-colors"
                >
                  Artikel & Perpustakaan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tanya')}
                  className="hover:text-white transition-colors"
                >
                  Ruang Tanya & FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('masa-depan')}
                  className="hover:text-white transition-colors"
                >
                  Jelajah Masa Depan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privasi')}
                  className="hover:text-white transition-colors"
                >
                  Privasi & Etika Layanan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Sumber Rujukan */}
          <div className="space-y-2.5">
            <h5 className="font-bold uppercase tracking-wider text-white text-xs">Rujukan Resmi</h5>
            <p className="leading-relaxed text-[11px]">
              Sesuai Permendikbud No. 111 Tahun 2014 & UU PDP No. 27 Tahun 2022.
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <a
                href="https://snpmb.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#A8C9B5] hover:underline"
              >
                <span>Portal Resmi SNPMB</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://karirhub.kemnaker.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#A8C9B5] hover:underline"
              >
                <span>Portal Resmi Karirhub Kemnaker</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#2A443C] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8EA69D]">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#A8C9B5]" />
            <span>Prototipe layanan Bimbingan dan Konseling untuk keperluan pendidikan.</span>
          </div>
          <p>© {new Date().getFullYear()} RuangArah BK. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
