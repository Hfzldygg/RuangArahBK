import React, { useState } from 'react';
import {
  X,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Calendar,
  RotateCcw,
  User,
  Heart,
} from 'lucide-react';
import { ARTICLES_DATA, BK_SERVICES } from '../data/bkData';
import { BKCategory, Article } from '../types';

interface PetaArahkuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  onGoToCounseling: (category: BKCategory) => void;
}

export const PetaArahkuModal: React.FC<PetaArahkuModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onGoToCounseling,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (!isOpen) return null;

  const questions = [
    {
      question: '1. Apa yang sedang paling kamu rasakan saat ini?',
      options: [
        {
          label: 'Ingin lebih mengenal diri dan potensi saya',
          category: 'pribadi' as BKCategory,
          icon: <User className="w-5 h-5 text-[#2E7D52]" />,
        },
        {
          label: 'Kesulitan dalam belajar atau fokus tugas',
          category: 'belajar' as BKCategory,
          icon: <BookOpen className="w-5 h-5 text-[#357B8A]" />,
        },
        {
          label: 'Masalah dalam pertemanan atau lingkungan sosial',
          category: 'sosial' as BKCategory,
          icon: <Heart className="w-5 h-5 text-[#D96B43]" />,
        },
        {
          label: 'Ingin merencanakan masa depan dan jurusan kuliah',
          category: 'karier' as BKCategory,
          icon: <Compass className="w-5 h-5 text-[#7C5CBF]" />,
        },
      ],
    },
    {
      question: '2. Bentuk bantuan apa yang paling membuatmu nyaman?',
      options: [
        {
          label: 'Membaca tips dan panduan mandiri secara tenang',
          category: 'belajar' as BKCategory,
          icon: <BookOpen className="w-5 h-5 text-[#357B8A]" />,
        },
        {
          label: 'Bercerita langsung secara privat kepada Guru BK',
          category: 'pribadi' as BKCategory,
          icon: <User className="w-5 h-5 text-[#2E7D52]" />,
        },
        {
          label: 'Belajar cara komunikasi asertif dengan teman',
          category: 'sosial' as BKCategory,
          icon: <Heart className="w-5 h-5 text-[#D96B43]" />,
        },
        {
          label: 'Mendapat peta jalan jelas pilihan perguruan tinggi',
          category: 'karier' as BKCategory,
          icon: <Compass className="w-5 h-5 text-[#7C5CBF]" />,
        },
      ],
    },
    {
      question: '3. Jika ingin konsultasi ke guru BK, format mana yang kamu pilih?',
      options: [
        {
          label: 'Tatap muka langsung di ruang BK sekolah',
          category: 'pribadi' as BKCategory,
          icon: <User className="w-5 h-5 text-[#2E7D52]" />,
        },
        {
          label: 'Sesi daring online (Google Meet) dari rumah',
          category: 'belajar' as BKCategory,
          icon: <BookOpen className="w-5 h-5 text-[#357B8A]" />,
        },
        {
          label: 'Konseling kelompok bersama sahabat dekat',
          category: 'sosial' as BKCategory,
          icon: <Heart className="w-5 h-5 text-[#D96B43]" />,
        },
        {
          label: 'Membaca materi dulu baru konseling jika perlu',
          category: 'karier' as BKCategory,
          icon: <Compass className="w-5 h-5 text-[#7C5CBF]" />,
        },
      ],
    },
  ];

  const currentQ = questions[currentStep];

  const handleSelectOption = (idx: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = idx;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (selectedAnswers[currentStep] === undefined) return;
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const calculateResult = () => {
    const counts: Record<BKCategory, number> = { pribadi: 0, sosial: 0, belajar: 0, karier: 0 };
    selectedAnswers.forEach((ansIdx, qIdx) => {
      const q = questions[qIdx];
      if (q && q.options[ansIdx]) {
        counts[q.options[ansIdx].category] += 1;
      }
    });

    let topCategory: BKCategory = 'pribadi';
    let max = -1;
    (Object.keys(counts) as BKCategory[]).forEach((c) => {
      if (counts[c] > max) {
        max = counts[c];
        topCategory = c;
      }
    });

    return {
      topCategory,
      service: BK_SERVICES[topCategory],
      relatedArticles: ARTICLES_DATA.filter((a) => a.category === topCategory).slice(0, 2),
    };
  };

  const result = isFinished ? calculateResult() : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-xl border border-[#ECE5DA] overflow-hidden my-6 text-left">
        {/* Header bar */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#ECE5DA] bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#244D42] text-white flex items-center justify-center">
              <Compass className="w-4 h-4 text-[#A8C9B5]" />
            </div>
            <div>
              <span className="text-sm font-bold text-[#1C2E28] block">Peta Arahku</span>
              <span className="text-[10px] text-[#637970]">Yuk Kenali Kebutuhanmu</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#637970] hover:text-[#1C2E28]"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Explanatory Section with Thinking Character Graphic (Matching Mockup Screen 5) */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C2E28]">
                  Yuk Kenali Kebutuhanmu
                </h3>
                <p className="text-xs text-[#526B61] leading-relaxed">
                  Jawab beberapa pertanyaan berikut untuk mendapatkan rekomendasi layanan dan
                  informasi yang sesuai dengan kebutuhanmu.
                </p>
                <p className="text-[11px] text-[#8C9E96] italic">
                  Ini bukan tes psikologi, hanya untuk membantumu menemukan arah.
                </p>
              </div>

              {/* Student graphic with question marks / lightbulb */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EBF6EF] border border-[#D2ECD9] flex items-center justify-center shrink-0">
                <span className="text-2xl">💡</span>
              </div>
            </div>

            {/* Current Question */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm sm:text-base font-bold text-[#1C2E28]">
                {currentQ.question}
              </h4>

              {/* 4 Options Grid (Exact Match to Mockup Screen 5) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswers[currentStep] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                        isSelected
                          ? 'bg-white border-[#244D42] shadow-xs'
                          : 'bg-white border-[#DFD8CC] hover:border-[#244D42]'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">{opt.icon}</div>
                      <span className="text-xs font-semibold text-[#1C2E28] leading-snug">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation & Progress Bar (Exact Match to Mockup) */}
            <div className="pt-4 border-t border-[#ECE5DA] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#244D42]">
                  {currentStep + 1}/{questions.length}
                </span>
                <div className="w-24 bg-[#E5DFD5] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#244D42] h-full rounded-full transition-all"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 rounded-full border border-[#DFD8CC] text-xs font-semibold text-[#526B61] hover:bg-white"
                  >
                    Kembali
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentStep] === undefined}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedAnswers[currentStep] === undefined
                      ? 'bg-[#DFD8CC] text-[#8C9E96] cursor-not-allowed'
                      : 'bg-[#244D42] text-white hover:bg-[#1A3B33] shadow-xs'
                  }`}
                >
                  {currentStep === questions.length - 1 ? 'Selesai & Lihat Rekomendasi' : 'Selanjutnya →'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* RESULT VIEW */
          result && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#244D42] space-y-2 text-center">
                <span className="text-xs font-bold uppercase text-[#244D42]">
                  Rekomendasi Utama Kamu
                </span>
                <h4 className="text-xl font-bold text-[#1C2E28]">{result.service.title}</h4>
                <p className="text-xs text-[#526B61] max-w-md mx-auto">
                  "{result.service.tagline}"
                </p>
              </div>

              {/* Related Articles */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase text-[#1C2E28]">
                  Artikel Rekomendasi untuk Kamu
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.relatedArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onClose();
                        onSelectArticle(art);
                      }}
                      className="p-4 rounded-2xl bg-white border border-[#DFD8CC] hover:border-[#244D42] cursor-pointer space-y-2"
                    >
                      <h6 className="text-xs font-bold text-[#1C2E28] line-clamp-2">
                        {art.title}
                      </h6>
                      <span className="text-[11px] text-[#244D42] font-semibold flex items-center gap-1">
                        Baca Artikel <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onGoToCounseling(result.topCategory);
                  }}
                  className="w-full sm:w-1/2 py-2.5 rounded-full bg-[#244D42] text-white text-xs font-bold hover:bg-[#1A3B33] text-center"
                >
                  Jadwalkan Konseling
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setSelectedAnswers([]);
                    setIsFinished(false);
                  }}
                  className="w-full sm:w-1/2 py-2.5 rounded-full border border-[#DFD8CC] text-[#526B61] text-xs font-semibold hover:bg-white"
                >
                  Ulangi Refleksi
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
