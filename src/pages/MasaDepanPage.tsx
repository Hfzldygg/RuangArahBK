import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Compass,
  FileCheck,
} from 'lucide-react';
import { MASA_DEPAN_DATA } from '../data/bkData';
import { Page, BKCategory } from '../types';

interface MasaDepanPageProps {
  onNavigate: (page: Page) => void;
  onGoToCounseling: (category: BKCategory) => void;
}

export const MasaDepanPage: React.FC<MasaDepanPageProps> = ({
  onNavigate,
  onGoToCounseling,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'studi' | 'kerja' | 'beasiswa' | 'tips'>('studi');

  const { studiLanjut, duniaKerja } = MASA_DEPAN_DATA;

  const fourExploreCards = [
    {
      title: 'Info Perguruan Tinggi',
      desc: 'Mengenal berbagai perguruan tinggi negeri, swasta, dan politeknik di Indonesia.',
      icon: <GraduationCap className="w-5 h-5 text-[#2E7D52]" />,
      iconBg: 'bg-[#EAF6EF]',
      target: 'studi',
    },
    {
      title: 'Pilihan Jurusan',
      desc: 'Cari tahu program studi dan kurikulum yang sesuai dengan minat dan bakatmu.',
      icon: <Compass className="w-5 h-5 text-[#D96B43]" />,
      iconBg: 'bg-[#FDF0EB]',
      target: 'studi',
    },
    {
      title: 'Jalur Pendaftaran',
      desc: 'Informasi jalur masuk resmi SNBP, SNBT (UTBK), dan jalur mandiri perguruan tinggi.',
      icon: <FileCheck className="w-5 h-5 text-[#357B8A]" />,
      iconBg: 'bg-[#EBF4F6]',
      target: 'studi',
    },
    {
      title: 'Beasiswa Pendidikan',
      desc: 'Berbagai sumber bantuan studi beasiswa KIP Kuliah dan beasiswa prestasi siswa.',
      icon: <Award className="w-5 h-5 text-[#7C5CBF]" />,
      iconBg: 'bg-[#F2EDFA]',
      target: 'beasiswa',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header (Exact Match to Mockup Screen 4) */}
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Jelajah Masa Depan
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Temukan informasi studi lanjut dan karier untuk mempersiapkan langkah berikutnya.
        </p>
      </div>

      {/* Horizontal Tab Pills (Exact Match to Mockup) */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'studi', label: 'Studi Lanjut' },
          { id: 'kerja', label: 'Dunia Kerja' },
          { id: 'beasiswa', label: 'Beasiswa' },
          { id: 'tips', label: 'Tips & Persiapan' },
        ].map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#244D42] text-white shadow-xs'
                  : 'bg-white border border-[#DFD8CC] text-[#526B61] hover:bg-[#F2ECE3]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 4 Cards Grid (Exact Match to Mockup Screen 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {fourExploreCards.map((card, i) => (
          <div
            key={i}
            onClick={() => setActiveSubTab(card.target as any)}
            className="bg-white rounded-3xl p-6 border border-[#ECE5DA] shadow-2xs hover:border-[#244D42] transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div
                className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}
              >
                {card.icon}
              </div>
              <h3 className="text-sm font-bold text-[#1C2E28] group-hover:text-[#244D42] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-[#637970] leading-relaxed">{card.desc}</p>
            </div>

            <div className="pt-2 flex items-center text-xs font-semibold text-[#244D42] group-hover:underline">
              <span>Lihat Informasi →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Content based on active tab */}
      {activeSubTab === 'studi' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#F2ECE3] pb-4">
            <h3 className="text-base font-bold text-[#1C2E28]">
              Jalur Masuk Perguruan Tinggi (SNBP, SNBT & Mandiri)
            </h3>
            <span className="text-xs text-[#637970]">Sumber: SNPMB Kemendikbudristek</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {studiLanjut.pathways.slice(0, 3).map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-2">
                <span className="text-[11px] font-bold text-[#244D42]">Jalur 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-[#1C2E28]">{p.name}</h4>
                <p className="text-xs text-[#637970] leading-relaxed">{p.focus}</p>
                <p className="text-[11px] text-[#2E7D52] italic pt-1">{p.tips}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'kerja' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#F2ECE3] pb-4">
            <h3 className="text-base font-bold text-[#1C2E28]">
              Kesiapan Dunia Kerja & Standar Industri Siswa
            </h3>
            <span className="text-xs text-[#637970]">Sumber: Karirhub Kemnaker RI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {duniaKerja.skillsRequired.map((sk, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-1.5">
                <span className="text-[11px] font-bold text-[#244D42]">Keahlian 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-[#1C2E28]">{sk.title}</h4>
                <p className="text-xs text-[#637970] leading-relaxed">{sk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'beasiswa' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-5">
          <h3 className="text-base font-bold text-[#1C2E28]">
            Informasi Beasiswa Pendidikan Resmi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {studiLanjut.scholarships.map((sch, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-2">
                <span className="text-[11px] font-semibold text-[#637970]">{sch.provider}</span>
                <h4 className="text-sm font-bold text-[#1C2E28]">{sch.name}</h4>
                <p className="text-xs text-[#526B61] leading-relaxed">{sch.coverage}</p>
                <a
                  href={sch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#244D42] inline-flex items-center gap-1 hover:underline pt-1"
                >
                  <span>Buka Informasi Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'tips' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-4">
          <h3 className="text-base font-bold text-[#1C2E28]">Tips Menyusun CV & Portofolio Siswa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#526B61]">
            {duniaKerja.cvTips.map((tip, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-start gap-2">
                <span className="text-[#244D42] font-bold">•</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Row: Sumber Resmi & Quote Card (Exact Match to Mockup Screen 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Sumber Resmi */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-[#1C2E28]">Sumber Resmi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://snpmb.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-[#E5DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#244D42] transition-colors block text-left group"
            >
              <div className="font-bold text-xs text-[#244D42] group-hover:underline">SNPMB</div>
              <p className="text-[11px] text-[#637970] mt-0.5">Info pendaftaran SNBP & SNBT</p>
              <span className="text-[10px] text-[#244D42] mt-1 block font-semibold">snpmb.id →</span>
            </a>

            <a
              href="https://kampusmerdeka.kemdikbud.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-[#E5DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#244D42] transition-colors block text-left group"
            >
              <div className="font-bold text-xs text-[#244D42] group-hover:underline">
                Kampus Merdeka
              </div>
              <p className="text-[11px] text-[#637970] mt-0.5">Informasi perguruan tinggi</p>
              <span className="text-[10px] text-[#244D42] mt-1 block font-semibold">
                kemdikbud.go.id →
              </span>
            </a>

            <a
              href="https://karirhub.kemnaker.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-[#E5DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#244D42] transition-colors block text-left group"
            >
              <div className="font-bold text-xs text-[#244D42] group-hover:underline">
                Karirhub Kemnaker
              </div>
              <p className="text-[11px] text-[#637970] mt-0.5">Informasi kerja & magang</p>
              <span className="text-[10px] text-[#244D42] mt-1 block font-semibold">
                kemnaker.go.id →
              </span>
            </a>
          </div>
        </div>

        {/* Right: Quote Card with Soft Leaf Illustration */}
        <div className="lg:col-span-5 bg-gradient-to-tr from-[#EBF6EF] to-[#FDF8F3] rounded-3xl p-6 sm:p-8 border border-[#DFD8CC] shadow-2xs flex items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-bold text-[#1C2E28] italic">
              "Masa depan tidak harus ditebak, tapi bisa dipersiapkan."
            </p>
            <p className="text-xs text-[#526B61]">— RuangArah BK Sekolah</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-white/80 border border-[#D2ECD9] flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#2E7D52]" />
          </div>
        </div>
      </div>
    </div>
  );
};
