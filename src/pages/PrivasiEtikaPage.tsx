import React from 'react';
import {
  ShieldCheck,
  Lock,
  Scale,
  AlertTriangle,
  FileText,
  UserCheck,
  PhoneCall,
  HeartHandshake,
} from 'lucide-react';

export const PrivasiEtikaPage: React.FC = () => {
  const ethicPoints = [
    {
      title: 'Kerahasiaan Informasi',
      desc: 'Informasi yang kamu sampaikan hanya dapat diakses oleh guru BK atau pihak yang berwenang.',
      icon: <Lock className="w-5 h-5 text-[#2E7D52]" />,
      bg: 'bg-[#EAF6EF]',
    },
    {
      title: 'Tujuan Pengumpulan Data',
      desc: 'Data digunakan untuk memberikan layanan BK yang tepat dan tidak akan dipublikasikan tanpa dasar yang sah.',
      icon: <FileText className="w-5 h-5 text-[#D96B43]" />,
      bg: 'bg-[#FDF0EB]',
    },
    {
      title: 'Batas Kerahasiaan',
      desc: 'Kerahasiaan memiliki batas tertentu jika diperlukan tindakan perlindungan keselamatan sesuai ketentuan hukum dan etika.',
      icon: <AlertTriangle className="w-5 h-5 text-[#357B8A]" />,
      bg: 'bg-[#EBF4F6]',
    },
    {
      title: 'Keamanan Data',
      desc: 'Pada instalasi nyata, data akan disimpan secara aman dan terenkripsi sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.',
      icon: <ShieldCheck className="w-5 h-5 text-[#7C5CBF]" />,
      bg: 'bg-[#F2EDFA]',
    },
    {
      title: 'Etika Layanan',
      desc: 'Layanan digital ini mengikuti prinsip etika BK (ASCA, 2022) dan Permendikbud No. 111 Tahun 2014.',
      icon: <Scale className="w-5 h-5 text-[#2E7D52]" />,
      bg: 'bg-[#EAF6EF]',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header (Exact Match to Mockup Screen 8) */}
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Privasi dan Etika Layanan
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Kami berkomitmen menjaga kerahasiaan dan kenyamanan informasi siswa dalam setiap layanan
          Bimbingan dan Konseling.
        </p>
      </div>

      {/* 2-Column Grid (Exact Match to Mockup Screen 8) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 5 Principles Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {ethicPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#ECE5DA] shadow-2xs flex items-start gap-4 hover:border-[#244D42] transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}
              >
                {item.icon}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-bold text-[#1C2E28]">{item.title}</h3>
                <p className="text-xs text-[#526B61] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Guarantee Card with Counselor & Plant Graphic (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-tr from-[#EBF6EF] via-white to-[#FDF8F3] rounded-3xl p-6 sm:p-8 border border-[#DFD8CC] shadow-2xs space-y-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#244D42] text-white flex items-center justify-center mx-auto shadow-xs">
            <Lock className="w-6 h-6 text-[#A8C9B5]" />
          </div>

          <div className="space-y-2 max-w-sm mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-[#1C2E28] leading-snug">
              "Informasi aman, karena setiap cerita dipercayakan dengan penuh tanggung jawab."
            </h3>
            <p className="text-xs text-[#526B61]">
              Pondasi utama cyber counseling adalah kepercayaan dan kenyamanan konseli.
            </p>
          </div>

          {/* Counselor and Plant Illustration */}
          <div className="py-2 flex justify-center">
            <div className="w-28 h-28 rounded-full bg-white border-2 border-[#D2ECD9] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#FDFBF7" />
                <path d="M25 80 C20 50 40 30 50 20 C60 30 80 50 75 80 Z" fill="#6B9B8A" opacity="0.4" />
                <circle cx="50" cy="40" r="18" fill="#F8D9C2" />
                <path d="M26 38 C26 20 74 20 74 38 C74 58 64 60 50 54 C36 60 26 58 26 38 Z" fill="#244D42" />
                <path d="M24 88 C24 64 36 58 50 58 C64 58 76 64 76 88 Z" fill="#2E7D52" />
              </svg>
            </div>
          </div>

          {/* Bottom Crisis Box */}
          <div className="p-4 rounded-2xl bg-white border border-[#DFD8CC] text-[11px] text-[#637970] leading-relaxed text-left space-y-1">
            <span className="font-bold text-[#1C2E28] block">Catatan Bantuan Darurat:</span>
            <p>
              Website ini bukan tanggap darurat 24 jam. Jika membutuhkan bantuan segera terkait
              krisis keselamatan diri atau orang lain, hubungi Hotline Kemenkes 119 (ext. 8) atau
              orang dewasa tepercaya di sekitarmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
