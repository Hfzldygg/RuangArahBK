import React from 'react';
import { X, Clock, Calendar, BookmarkCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onConsultationRequest: (category: Article['category']) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsultationRequest,
}) => {
  if (!article) return null;

  const categoryNames: Record<Article['category'], string> = {
    pribadi: 'Bimbingan Pribadi',
    sosial: 'Bimbingan Sosial',
    belajar: 'Bimbingan Belajar',
    karier: 'Bimbingan Karier',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-xl border border-[#ECE5DA] overflow-hidden my-6 text-left">
        {/* Header bar */}
        <div className="sticky top-0 bg-white border-b border-[#ECE5DA] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-xs font-medium text-[#637970]">
            <span className="font-bold text-[#244D42]">{categoryNames[article.category]}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.updatedAt}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#637970] hover:text-[#1C2E28] hover:bg-[#F2ECE3] transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-8 py-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C2E28] leading-snug">
              {article.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#526B61] leading-relaxed italic border-l-2 border-[#244D42] pl-3">
              {article.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#EAF6EF] border border-[#D2ECD9] rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#244D42] flex items-center gap-1.5 mb-2">
              <BookmarkCheck className="w-4 h-4 text-[#2E7D52]" />
              Poin Penting untuk Diingat
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#1C2E28]">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#2E7D52] font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content paragraphs */}
          <div className="space-y-3.5 text-[#3D524A] text-xs sm:text-sm leading-relaxed">
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Source Attribution */}
          <div className="pt-3 border-t border-[#ECE5DA] text-[11px] text-[#637970] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8C9E96] shrink-0" />
            <span>Rujukan & Sumber Edukasi: {article.source}</span>
          </div>

          {/* Counselor Callout */}
          <div className="bg-white border border-[#DFD8CC] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1C2E28]">
                Butuh teman diskusi untuk topik ini?
              </h4>
              <p className="text-[11px] text-[#637970]">
                Guru BK selalu siap mendengarkan secara privat di ruang konseling.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onConsultationRequest(article.category);
              }}
              className="px-4 py-2 bg-[#244D42] hover:bg-[#1A3B33] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Ajukan Konseling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-3 border-t border-[#ECE5DA] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#526B61] hover:text-[#1C2E28] rounded-lg transition-colors"
          >
            Tutup Bacaan
          </button>
        </div>
      </div>
    </div>
  );
};
