import React, { useState } from 'react';
import {
  User,
  Users,
  BookOpen,
  Compass,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BK_SERVICES, ARTICLES_DATA } from '../data/bkData';
import { BKCategory, Article } from '../types';

interface ServicesPageProps {
  selectedCategory: BKCategory;
  onSelectCategory: (cat: BKCategory) => void;
  onGoToCounseling: (category: BKCategory) => void;
  onOpenArticle: (article: Article) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onGoToCounseling,
  onOpenArticle,
}) => {
  const [activeDetail, setActiveDetail] = useState<BKCategory | null>(null);

  // Avatar SVGs for each category card matching the mockup
  const avatarIllustrations = {
    pribadi: (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EBF6EF] flex items-center justify-center shrink-0 border-2 border-[#D2ECD9] overflow-hidden">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="40" fill="#EBF6EF" />
          <circle cx="40" cy="36" r="16" fill="#F8D9C2" />
          <path d="M22 34 C22 18 58 18 58 34 C58 48 50 50 40 46 C30 50 22 48 22 34 Z" fill="#244D42" />
          <path d="M20 75 C20 54 30 48 40 48 C50 48 60 54 60 75 Z" fill="#2E7D52" />
          <ellipse cx="36" cy="35" rx="1.5" ry="2" fill="#1C2E28" />
          <ellipse cx="44" cy="35" rx="1.5" ry="2" fill="#1C2E28" />
          <path d="M38 41 Q40 43 42 41" stroke="#D96B43" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    sosial: (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FDF0EB] flex items-center justify-center shrink-0 border-2 border-[#FAD9CC] overflow-hidden">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="40" fill="#FDF0EB" />
          {/* Person 1 */}
          <circle cx="30" cy="34" r="12" fill="#FFE0CC" />
          <path d="M18 32 C18 18 42 18 42 32 Z" fill="#1C2E28" />
          <path d="M16 65 C16 48 24 44 32 44 C40 44 48 48 48 65 Z" fill="#D96B43" />
          {/* Person 2 */}
          <circle cx="50" cy="34" r="12" fill="#F8D9C2" />
          <path d="M38 32 C38 18 62 18 62 32 Z" fill="#244D42" />
          <path d="M36 65 C36 48 44 44 52 44 C60 44 64 48 64 65 Z" fill="#3D6B5C" />
        </svg>
      </div>
    ),
    belajar: (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EBF4F6] flex items-center justify-center shrink-0 border-2 border-[#D5E9ED] overflow-hidden">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="40" fill="#EBF4F6" />
          <circle cx="40" cy="34" r="15" fill="#FFE0CC" />
          <path d="M24 32 C24 16 56 16 56 32 Z" fill="#2D282A" />
          <path d="M22 68 C22 50 32 46 40 46 C48 46 58 50 58 68 Z" fill="#357B8A" />
          <rect x="30" y="58" width="20" height="8" rx="2" fill="#FFFFFF" stroke="#94A3B8" />
        </svg>
      </div>
    ),
    karier: (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F2EDFA] flex items-center justify-center shrink-0 border-2 border-[#E3D7F5] overflow-hidden">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="40" fill="#F2EDFA" />
          <circle cx="40" cy="34" r="15" fill="#F8D9C2" />
          <path d="M25 32 C25 16 55 16 55 32 Z" fill="#7C5CBF" />
          <path d="M22 68 C22 50 32 46 40 46 C48 46 58 50 58 68 Z" fill="#583D99" />
          <circle cx="56" cy="24" r="7" fill="#F59E0B" />
          <path d="M56 20 L58 24 L62 24 L59 26 L60 30 L56 27 L52 30 L53 26 L50 24 L54 24 Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
  };

  const servicesList: {
    id: BKCategory;
    title: string;
    desc: string;
    topics: string[];
  }[] = [
    {
      id: 'pribadi',
      title: 'Bimbingan Pribadi',
      desc: 'Pengenalan diri, kepercayaan diri, pengelolaan emosi, motivasi, dan pengambilan keputusan.',
      topics: ['Rasa cemas dan overthinking', 'Mengelola emosi', 'Meningkatkan percaya diri'],
    },
    {
      id: 'sosial',
      title: 'Bimbingan Sosial',
      desc: 'Hubungan pertemanan, komunikasi, kerja sama, konflik, dan pencegahan bullying.',
      topics: ['Mengatasi konflik teman', 'Membangun komunikasi yang baik', 'Pencegahan cyberbullying'],
    },
    {
      id: 'belajar',
      title: 'Bimbingan Belajar',
      desc: 'Kesulitan konsentrasi, manajemen waktu, strategi belajar, dan persiapan ujian.',
      topics: ['Cara menyusun jadwal belajar', 'Mengatasi rasa malas', 'Persiapan ujian sekolah'],
    },
    {
      id: 'karier',
      title: 'Bimbingan Karier',
      desc: 'Pengenalan minat, pilihan jurusan, dunia kerja, dan perencanaan masa depan.',
      topics: ['Cara memilih jurusan kuliah', 'Mengenal peluang karier', 'Persiapan dunia kerja'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 text-left">
      {/* Header (Exact Match to Mockup Screen 2) */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
          Layanan Bimbingan dan Konseling
        </h1>
        <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
          Pilih layanan yang sesuai dengan kebutuhanmu. Setiap langkah kecil dapat membawamu pada
          perubahan yang berarti.
        </p>
      </div>

      {/* 2x2 Grid Cards with Avatars & "Lihat Materi" (Exact Match to Mockup Screen 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {servicesList.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ECE5DA] shadow-2xs hover:border-[#244D42] transition-all flex flex-col justify-between space-y-5"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {avatarIllustrations[svc.id]}
              <div className="space-y-1.5 flex-1">
                <h3 className="text-lg font-bold text-[#1C2E28]">{svc.title}</h3>
                <p className="text-xs text-[#526B61] leading-relaxed">{svc.desc}</p>

                {/* Topics bullet points */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#1C2E28] block mb-1">
                    Contoh topik:
                  </span>
                  <ul className="space-y-1 text-xs text-[#637970]">
                    {svc.topics.map((t, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#244D42]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#F2ECE3]">
              <button
                onClick={() => {
                  onSelectCategory(svc.id);
                  setActiveDetail(activeDetail === svc.id ? null : svc.id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs font-semibold shadow-xs transition-colors text-center"
              >
                {activeDetail === svc.id ? 'Tutup Detail Materi' : 'Lihat Materi'}
              </button>

              <button
                onClick={() => onGoToCounseling(svc.id)}
                className="text-xs font-semibold text-[#244D42] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Minta Bantuan Guru BK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Detail View when "Lihat Materi" is toggled */}
      {activeDetail && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#244D42] shadow-sm space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#244D42] uppercase tracking-wider">
                Materi Lengkap Bimbingan
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C2E28]">
                {BK_SERVICES[activeDetail].title}
              </h3>
            </div>
            <button
              onClick={() => onGoToCounseling(activeDetail)}
              className="px-4 py-2 rounded-xl bg-[#DDD6F3] text-[#332A55] text-xs font-bold hover:bg-[#D0C7ED] transition-colors"
            >
              Ajukan Sesi {BK_SERVICES[activeDetail].title}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
            {BK_SERVICES[activeDetail].overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {BK_SERVICES[activeDetail].tips.map((tip, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F8F5EE] border border-[#EBE4D8] space-y-2">
                <span className="text-[11px] font-bold text-[#244D42]">Tips 0{idx + 1}</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#1C2E28]">{tip.title}</h4>
                <p className="text-xs text-[#637970] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* Related Articles */}
          <div className="pt-4 border-t border-[#F2ECE3] space-y-3">
            <h4 className="text-xs font-bold text-[#1C2E28] uppercase tracking-wider">
              Artikel Edukasi Terkait
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ARTICLES_DATA.filter((a) => a.category === activeDetail).map((art) => (
                <div
                  key={art.id}
                  onClick={() => onOpenArticle(art)}
                  className="p-3.5 rounded-xl border border-[#ECE5DA] hover:border-[#244D42] bg-[#FAF7F2] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span className="text-xs font-semibold text-[#1C2E28] line-clamp-1">
                    {art.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#244D42] shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
