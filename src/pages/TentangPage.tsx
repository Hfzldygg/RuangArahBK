import React from 'react';
import {
  HeartHandshake,
  Users,
  Compass,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { Page } from '../types';

interface TentangPageProps {
  onNavigate: (page: Page) => void;
  onOpenPetaArahku: () => void;
}

export const TentangPage: React.FC<TentangPageProps> = ({
  onNavigate,
  onOpenPetaArahku,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 text-left">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EF] text-[#2E7D52] rounded-full text-xs font-bold">
          <HeartHandshake className="w-4 h-4 text-[#2E7D52]" />
          <span>Tentang Inovasi Layanan</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Mengenal RuangArah BK
        </h1>
        <p className="text-sm sm:text-base text-[#244D42] font-semibold italic">
          "Ruang untuk Bercerita, Tempat untuk Menemukan Arah."
        </p>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          RuangArah BK adalah platform rancangan layanan Cyber Counseling (Bimbingan dan Konseling
          berbasis web) yang dirancang khusus untuk memfasilitasi kebutuhan peserta didik jenjang
          SMA/SMK secara interaktif, ramah remaja, dan berpegang teguh pada prinsip kerahasiaan
          profesi konselor.
        </p>
      </div>

      {/* Purpose & Target Audience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1C2E28]">Tujuan Pengembangan</h3>
          <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
            Menjembatani komunikasi antara siswa dan Guru BK di era digital. Membantu siswa
            mengenali potensi diri, mengatasi rintangan belajar, membina interaksi sosial positif,
            serta memberikan literasi karier terpercaya sehingga siswa dapat menentukan arah masa
            depan tanpa rasa takut atau kebingungan.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FDF0EB] text-[#D96B43] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1C2E28]">Sasaran Pengguna</h3>
          <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
            Ditujukan bagi seluruh peserta didik kelas X, XI, dan XII jenjang SMA/SMK serta MA,
            dengan Guru BK sekolah sebagai fasilitator dan pengelola layanan. RuangArah BK hadir
            untuk semua siswa, bukan hanya bagi mereka yang sedang mengalami masalah berat.
          </p>
        </div>
      </div>

      {/* 3 Step Interactive Workflow */}
      <div className="bg-gradient-to-br from-[#EAF6EF] via-white to-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#DFD8CC] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1C2E28]">
            Alur Tiga Langkah RuangArah BK
          </h2>
          <p className="text-xs sm:text-sm text-[#526B61]">
            Dirancang praktis dan bertahap agar siswa merasa nyaman di setiap langkahnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DFD8CC] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h4 className="text-sm font-bold text-[#1C2E28]">Pilih Kebutuhan atau Refleksi</h4>
            <p className="text-xs text-[#637970] leading-relaxed">
              Siswa membuka menu Layanan BK atau mencoba kuis refleksi mandiri di Peta Arahku.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD8CC] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h4 className="text-sm font-bold text-[#1C2E28]">Pelajari Materi & Solusi Mandiri</h4>
            <p className="text-xs text-[#637970] leading-relaxed">
              Siswa membaca artikel panduan di perpustakaan atau menyimak FAQ di Ruang Tanya.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DFD8CC] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h4 className="text-sm font-bold text-[#1C2E28]">Ajukan Konseling Lanjutan</h4>
            <p className="text-xs text-[#637970] leading-relaxed">
              Siswa mengajukan permohonan sesi tatap muka di ruang BK sekolah atau daring secara
              privat bersama Guru BK.
            </p>
          </div>
        </div>
      </div>

      {/* Action Callout */}
      <div className="p-6 rounded-3xl bg-[#244D42] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-bold flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#A8C9B5]" />
            <span>Punya Pertanyaan atau Butuh Teman Bercerita?</span>
          </h4>
          <p className="text-xs text-[#D1DDD7] leading-relaxed">
            Guru BK sekolah selalu siap menyambutmu dengan hangat, aman, dan tanpa menghakimi.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('tanya')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
          >
            <span>Buka Ruang Tanya</span>
          </button>
          <button
            onClick={() => onNavigate('konseling')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-[#244D42] hover:bg-[#FAF7F2] text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <span>Ajukan Konseling</span>
          </button>
        </div>
      </div>
    </div>
  );
};
