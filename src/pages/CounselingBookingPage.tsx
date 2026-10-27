import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Lock,
  PhoneCall,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  Building2,
  Video,
} from 'lucide-react';
import { BKCategory, CounselingBooking } from '../types';
import { BK_SERVICES } from '../data/bkData';

interface CounselingBookingPageProps {
  initialCategory?: BKCategory;
}

export const CounselingBookingPage: React.FC<CounselingBookingPageProps> = ({
  initialCategory = 'pribadi',
}) => {
  const [nickname, setNickname] = useState('');
  const [grade, setGrade] = useState('');
  const [category, setCategory] = useState<BKCategory>(initialCategory);
  const [format, setFormat] = useState<'tatap-muka' | 'daring'>('tatap-muka');
  const [preferredDay, setPreferredDay] = useState('Senin, 3 November 2026');
  const [preferredTime, setPreferredTime] = useState('10.00 - 10.45 WIB');
  const [topicNote, setTopicNote] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<CounselingBooking | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const dateOptions = [
    'Senin, 3 November 2026',
    'Selasa, 4 November 2026',
    'Rabu, 5 November 2026',
    'Kamis, 6 November 2026',
    'Jumat, 7 November 2026',
  ];

  const timeOptions = [
    '08.30 - 09.15 WIB (Sesi 1)',
    '10.00 - 10.45 WIB (Jam Istirahat 1)',
    '11.30 - 12.15 WIB (Sesi 2)',
    '13.15 - 14.00 WIB (Jam Istirahat 2)',
    '15.15 - 16.00 WIB (Selesai KBM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      setErrorMsg('Silakan isi nama panggilan terlebih dahulu.');
      return;
    }

    setErrorMsg('');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newBooking: CounselingBooking = {
      id: `BK-RA-${randomCode}`,
      nickname: nickname.trim(),
      grade: grade.trim() || 'Siswa SMA/SMK',
      category,
      format,
      preferredDay,
      preferredTime,
      topicNote: topicNote.trim() || 'Konsultasi dan diskusi bimbingan',
      createdAt: new Date().toLocaleDateString('id-ID'),
    };

    setSubmittedBooking(newBooking);
  };

  const handleCopyTicket = () => {
    if (!submittedBooking) return;
    const text = `BUKTI PENGAJUAN JADWAL KONSELING RUANGARAH BK
Kode: ${submittedBooking.id}
Nama Panggilan: ${submittedBooking.nickname}
Kelas: ${submittedBooking.grade}
Layanan: ${BK_SERVICES[submittedBooking.category].title}
Format: ${submittedBooking.format === 'tatap-muka' ? 'Tatap Muka di Sekolah' : 'Daring (Google Meet)'}
Waktu: ${submittedBooking.preferredDay}, ${submittedBooking.preferredTime}
Catatan: ${submittedBooking.topicNote}
Status: Simulasi Prototipe Edukatif`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-left">
      {/* Header with Floating Speech Bubble (Exact Match to Mockup Screen 3) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#1C2E28] tracking-tight">
            Ajukan Konseling
          </h1>
          <p className="text-xs sm:text-sm text-[#526B61] leading-relaxed">
            Sampaikan kebutuhanmu, dan pilih waktu yang sesuai. Permohonan ini akan membantu guru BK
            menyiapkan layanan yang tepat.
          </p>
        </div>

        {/* Thought bubble on top right */}
        <div className="bg-white px-4 py-2.5 rounded-2xl border border-[#E2DBD1] shadow-2xs text-xs font-medium text-[#244D42] shrink-0 self-start md:self-auto flex items-center gap-1.5">
          <span>Kamu tidak sendiri, kami siap mendampingi. 💕</span>
        </div>
      </div>

      {/* Main 2-Column Grid matching screen 3 of the mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Column (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DA] shadow-2xs space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                {errorMsg}
              </div>
            )}

            {/* 1. Data Diri (Simulasi) */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#1C2E28]">1. Data Diri (Simulasi)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#526B61] mb-1">
                    Nama panggilan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Siswa"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#526B61] mb-1">
                    Kelas (opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: XI IPA 1"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Pilih Layanan */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-[#1C2E28]">2. Pilih Layanan</h3>
              <label className="block text-xs font-medium text-[#526B61]">
                Pilih kategori layanan
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as BKCategory)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
              >
                <option value="pribadi">Bimbingan Pribadi</option>
                <option value="sosial">Bimbingan Sosial</option>
                <option value="belajar">Bimbingan Belajar</option>
                <option value="karier">Bimbingan Karier</option>
              </select>
            </div>

            {/* 3. Bentuk Konseling (Radio Buttons) */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#1C2E28]">3. Bentuk Konseling</h3>
              <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#1C2E28] pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="counselingFormat"
                    checked={format === 'tatap-muka'}
                    onChange={() => setFormat('tatap-muka')}
                    className="accent-[#244D42] w-4 h-4"
                  />
                  <span>Tatap muka (di sekolah)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="counselingFormat"
                    checked={format === 'daring'}
                    onChange={() => setFormat('daring')}
                    className="accent-[#244D42] w-4 h-4"
                  />
                  <span>Daring (online) (Google Meet)</span>
                </label>
              </div>
            </div>

            {/* 4. Pilih Jadwal */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#1C2E28]">4. Pilih Jadwal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#526B61] mb-1">
                    Pilih tanggal
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
                  >
                    {dateOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#526B61] mb-1">
                    Pilih waktu
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 5. Catatan Tambahan (Opsional) */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-[#1C2E28]">5. Catatan Tambahan (Opsional)</h3>
              <textarea
                rows={2}
                placeholder="Contoh: Ingin mengetahui cara mengelola waktu belajar."
                value={topicNote}
                onChange={(e) => setTopicNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD8CC] bg-[#FAF7F2] text-sm text-[#1C2E28] placeholder:text-[#9FB0A9] focus:outline-hidden focus:ring-2 focus:ring-[#244D42]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#244D42] hover:bg-[#1A3B33] text-white font-bold text-sm shadow-xs transition-all"
            >
              Ajukan Jadwal
            </button>

            {/* Red Notice below button (Exact Match to Mockup) */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#E0523C] pt-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Ini hanya simulasi. Data tidak dikirim ke guru BK.</span>
            </div>
          </form>
        </div>

        {/* Right Information & Contact Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Informasi Penting Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#ECE5DA] shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-[#1C2E28]">Informasi Penting</h3>
            <ul className="space-y-3.5 text-xs text-[#526B61] leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Layanan ini untuk membantumu mendapatkan arahan yang tepat.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Tidak perlu menuliskan masalah pribadi secara detail.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <span>Informasi yang kamu sampaikan dijaga kerahasiaannya.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>
                  Jika membutuhkan bantuan segera, hubungi guru BK atau orang dewasa terpercaya.
                </span>
              </li>
            </ul>
          </div>

          {/* Hubungi Admin BK Card with Friendly Counselor Illustration */}
          <div className="bg-white rounded-3xl p-6 border border-[#ECE5DA] shadow-2xs space-y-4 text-center">
            <h3 className="text-sm font-bold text-[#1C2E28]">Hubungi Admin BK</h3>
            <p className="text-xs text-[#637970] leading-relaxed">
              Kontak resmi sekolah belum diatur. Silakan tanya guru BK di sekolah.
            </p>

            {/* Illustrated Counselor Avatar at bottom of card */}
            <div className="pt-2 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#EAF6EF] border-2 border-[#D2ECD9] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 90 90" className="w-full h-full">
                  <circle cx="45" cy="45" r="45" fill="#EAF6EF" />
                  <circle cx="45" cy="40" r="18" fill="#F8D9C2" />
                  <path d="M22 38 C22 20 68 20 68 38 C68 56 58 58 45 52 C32 58 22 56 22 38 Z" fill="#244D42" />
                  <circle cx="40" cy="38" r="1.8" fill="#1C2E28" />
                  <circle cx="50" cy="38" r="1.8" fill="#1C2E28" />
                  <path d="M42 45 Q45 48 48 45" stroke="#D96B43" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M20 85 C20 62 32 56 45 56 C58 56 70 62 70 85 Z" fill="#2E7D52" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {submittedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#FAF7F2] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 border border-[#E5DFD5] shadow-xl text-left">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#EAF6EF] text-[#2E7D52] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1C2E28]">Pengajuan Jadwal Tersimpan</h3>
              <p className="text-xs text-[#637970]">
                Ringkasan permohonan simulasi konseling bimbingan
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#ECE5DA] space-y-2 text-xs">
              <div className="flex justify-between pb-2 border-b border-[#F2ECE3]">
                <span className="text-[#637970]">Kode Tiket</span>
                <span className="font-mono font-bold text-[#244D42]">{submittedBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#637970]">Nama Panggilan</span>
                <span className="font-semibold text-[#1C2E28]">{submittedBooking.nickname}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#637970]">Bidang Layanan</span>
                <span className="font-semibold text-[#244D42]">
                  {BK_SERVICES[submittedBooking.category].title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#637970]">Format</span>
                <span className="font-semibold text-[#1C2E28]">
                  {submittedBooking.format === 'tatap-muka'
                    ? 'Tatap Muka di Sekolah'
                    : 'Daring (Google Meet)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#637970]">Jadwal Sesi</span>
                <span className="font-semibold text-[#1C2E28]">
                  {submittedBooking.preferredDay}, {submittedBooking.preferredTime}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[#E0523C] bg-rose-50 p-3 rounded-xl border border-rose-200">
              *Catatan: Ini adalah prototipe edukatif. Tidak ada data yang dikirim ke server sekolah.
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyTicket}
                className="w-1/2 py-2.5 rounded-xl border border-[#DFD8CC] text-[#244D42] text-xs font-semibold hover:bg-white flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin Tiket'}</span>
              </button>
              <button
                onClick={() => setSubmittedBooking(null)}
                className="w-1/2 py-2.5 rounded-xl bg-[#244D42] text-white text-xs font-semibold hover:bg-[#1A3B33]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
