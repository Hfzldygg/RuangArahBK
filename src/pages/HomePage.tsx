import React from 'react';
import {
  ArrowRight,
  User,
  Users,
  BookOpen,
  Compass,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { HeroIllustration } from '../components/HeroIllustration';
import { BK_SERVICES, ARTICLES_DATA } from '../data/bkData';
import { Page, BKCategory, Article } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectCategory: (category: BKCategory) => void;
  onOpenArticle: (article: Article) => void;
  onOpenPetaArahku: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenArticle,
  onOpenPetaArahku,
}) => {
  const featuredArticles = ARTICLES_DATA.slice(0, 3);

  // Exact 4 card definitions from the user's mockup
  const fourCards = [
    {
      id: 'pribadi' as BKCategory,
      title: 'Bimbingan Pribadi',
      desc: 'Kenali diri, kelola emosi, dan ambil keputusan.',
      iconBg: 'bg-[#EAF6EF]',
      iconColor: 'text-[#2E7D52]',
      icon: <User className="w-5 h-5 text-[#2E7D52]" />,
    },
    {
      id: 'sosial' as BKCategory,
      title: 'Bimbingan Sosial',
      desc: 'Bangun hubungan positif dan lingkungan yang sehat.',
      iconBg: 'bg-[#FDF0EB]',
      iconColor: 'text-[#D96B43]',
      icon: <Users className="w-5 h-5 text-[#D96B43]" />,
    },
    {
      id: 'belajar' as BKCategory,
      title: 'Bimbingan Belajar',
      desc: 'Strategi belajar, motivasi, dan persiapan ujian.',
      iconBg: 'bg-[#EBF4F6]',
      iconColor: 'text-[#357B8A]',
      icon: <BookOpen className="w-5 h-5 text-[#357B8A]" />,
    },
    {
      id: 'karier' as BKCategory,
      title: 'Bimbingan Karier',
      desc: 'Studi lanjut, dunia kerja, dan perencanaan masa depan.',
      iconBg: 'bg-[#F2EDFA]',
      iconColor: 'text-[#7C5CBF]',
      icon: <Compass className="w-5 h-5 text-[#7C5CBF]" />,
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* HERO SECTION (Exact layout from top-left screen of reference mockup) */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1C2E28] tracking-tight leading-[1.15]">
              Setiap Cerita
              <br />
              Berharga, Setiap
              <br />
              Langkah Punya Arah.
            </h1>

            <p className="text-sm sm:text-base text-[#526B61] leading-relaxed max-w-lg">
              Tidak harus menghadapi semuanya sendiri. RuangArah BK hadir untuk membantumu mengenali
              diri, menemukan informasi, dan terhubung dengan guru BK.
            </p>

            {/* Two Action Buttons (Exact colors from mockup: deep green + lavender pastel) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigate('layanan')}
                className="px-6 py-3 rounded-xl bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center gap-2"
              >
                <span>Jelajahi Layanan</span>
              </button>

              <button
                onClick={() => onNavigate('konseling')}
                className="px-6 py-3 rounded-xl bg-[#DDD6F3] hover:bg-[#D0C7ED] text-[#332A55] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <span>Ajukan Konseling</span>
              </button>
            </div>
          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroIllustration />
          </div>
        </div>

        {/* 4 CARDS AT BOTTOM OF HERO (Exact replica of top-left mockup screen) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fourCards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                onSelectCategory(card.id);
                onNavigate('layanan');
              }}
              className="bg-white rounded-2xl p-5 border border-[#ECE5DA] shadow-2xs hover:border-[#244D42] hover:shadow-xs transition-all cursor-pointer text-left space-y-3 group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
              >
                {card.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#1C2E28] group-hover:text-[#244D42] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#637970] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK PETA ARAHKU BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#EBF5EF] to-[#F5EFE6] border border-[#DFD8CC] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#244D42] bg-white/70 px-2.5 py-1 rounded-md">
              Refleksi Mandiri
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C2E28]">
              Peta Arahku — Yuk Kenali Kebutuhanmu
            </h2>
            <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
              Jawab beberapa pertanyaan berikut untuk mendapatkan rekomendasi layanan dan informasi
              yang sesuai dengan kebutuhanmu saat ini.
            </p>
          </div>
          <button
            onClick={onOpenPetaArahku}
            className="px-6 py-3 rounded-full bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 shrink-0"
          >
            <Compass className="w-4 h-4 text-[#A8C9B5]" />
            <span>Mulai Refleksi Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3 STEPS WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-[#1C2E28]">3 Langkah Menggunakan Website</h2>
          <p className="text-xs sm:text-sm text-[#637970]">
            Proses sederhana dan nyaman untuk menemukan panduan yang kamu butuhkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-2xl p-6 border border-[#ECE5DA] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white text-xs font-bold flex items-center justify-center">
              1
            </div>
            <h3 className="text-sm font-bold text-[#1C2E28]">Pilih Kebutuhan atau Refleksi</h3>
            <p className="text-xs text-[#637970] leading-relaxed">
              Pilih bidang bimbingan yang sesuai atau jawab kuis refleksi santai di Peta Arahku.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#ECE5DA] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white text-xs font-bold flex items-center justify-center">
              2
            </div>
            <h3 className="text-sm font-bold text-[#1C2E28]">Pelajari Materi & Solusi Mandiri</h3>
            <p className="text-xs text-[#637970] leading-relaxed">
              Baca artikel edukasi di perpustakaan atau telusuri FAQ di Ruang Tanya secara mandiri.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#ECE5DA] shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white text-xs font-bold flex items-center justify-center">
              3
            </div>
            <h3 className="text-sm font-bold text-[#1C2E28]">Ajukan Konseling Lanjutan</h3>
            <p className="text-xs text-[#637970] leading-relaxed">
              Pilih jadwal tatap muka di ruang BK atau daring bersama guru BK yang berwenang.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C2E28]">Artikel Pilihan Siswa</h2>
            <p className="text-xs text-[#637970] mt-1">Materi edukatif seputar pengembangan diri.</p>
          </div>
          <button
            onClick={() => onNavigate('perpustakaan')}
            className="text-xs font-semibold text-[#244D42] hover:underline flex items-center gap-1"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="bg-white rounded-2xl border border-[#ECE5DA] p-6 hover:border-[#244D42] transition-all cursor-pointer flex flex-col justify-between group shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-[#637970]">
                  <span className="font-semibold text-[#244D42] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-[#1C2E28] group-hover:text-[#244D42] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#637970] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2ECE3] flex items-center justify-between text-xs font-semibold text-[#244D42]">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
