import React, { useState } from 'react';
import {
  X,
  GraduationCap,
  Copy,
  Check,
  BookOpen,
  Shield,
  Layers,
  Users,
  AlertTriangle,
  Link as LinkIcon,
  ExternalLink,
} from 'lucide-react';

interface AcademicReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicReportModal: React.FC<AcademicReportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sharedAppUrl =
    'https://ais-pre-lajhbnyts5mqyvbtzymt7m-903891200427.asia-southeast1.run.app';
  const devAppUrl =
    'https://ais-dev-lajhbnyts5mqyvbtzymt7m-903891200427.asia-southeast1.run.app';

  const reportFullText = `DESKRIPSI RANCANGAN WEBSITE CYBER COUNSELING "RUANGARAH BK"
Mata Kuliah / Tugas: Rancangan Media dan Teknologi Bimbingan dan Konseling
Disusun untuk Keperluan Presentasi & Evaluasi Akademik

1. NAMA DAN TUJUAN WEBSITE
Website ini diberi nama "RuangArah BK" dengan tagline "Ruang untuk Bercerita, Tempat untuk Menemukan Arah." Platform ini dirancang sebagai inovasi media Cyber Counseling terpadu bagi jenjang sekolah menengah (SMA/SMK) dengan guru Bimbingan dan Konseling (BK) sebagai pengelola utama. Tujuan utama pengembangan RuangArah BK adalah mempermudah aksesibilitas peserta didik dalam memperoleh layanan bimbingan secara fleksibel, mengatasi keengganan atau stigma negatif siswa saat mendatangi ruang BK fisik, serta menyediakan ruang refleksi mandiri untuk mengenali potensi, mengatasi kendala belajar, menjaga relasi sosial, dan merencanakan kelanjutan studi maupun karier secara terarah.

2. SASARAN PENGGUNA
Sasaran pengguna utama terbagi menjadi dua pihak:
a. Siswa SMA/SMK sederajat: Remaja usia 15–19 tahun yang menghadapi dinamika pencarian identitas diri, tekanan akademik, konflik pertemanan, kecemasan ujian, maupun kebingungan menentukan pilihan perguruan tinggi dan dunia kerja.
b. Guru Bimbingan dan Konseling (Konselor Sekolah): Sebagai fasilitator, edukator, dan mediator konseling yang memanfaatkan website sebagai media diseminasi informasi edukatif, skrining kebutuhan awal melalui refleksi mandiri, serta penataan penjadwalan sesi konseling tatap muka maupun daring yang lebih terstruktur.

3. FITUR LAYANAN BK
RuangArah BK mengintegrasikan 4 bidang layanan komprehensif BK (Permendikbud No. 111 Tahun 2014) serta instrumen interaktif:
a. Bimbingan Pribadi: Fasilitas materi dan bimbingan terkait pemahaman konsep diri, pengelolaan stres/emosi, penguatan kepercayaan diri, dan pengambilan keputusan mandiri.
b. Bimbingan Sosial: Pembekalan keterampilan komunikasi asertif, resolusi konflik teman sebaya, pembangunan relasi sehat, serta edukasi pencegahan bullying dan cyberbullying.
c. Bimbingan Belajar: Bantuan mengatasi prokrastinasi, teknik belajar efektif (Feynman, Pomodoro, Spaced Repetition), manajemen waktu seimbang, dan manajemen kecemasan ujian.
d. Bimbingan Karier: Penelusuran minat bakat, informasi studi lanjut perguruan tinggi (terintegrasi portal resmi SNPMB https://snpmb.id/), beasiswa KIP-Kuliah, serta kesiapan dunia kerja lulusan SMA/SMK (terintegrasi portal resmi Karirhub Kemnaker https://karirhub.kemnaker.go.id/).
e. Fitur Interaktif "Peta Arahku": Instrumen refleksi 3 tahap tanpa vonis diagnosis medis yang membantu siswa memetakan kebutuhan mendesak dan merekomendasikan artikel serta bidang layanan terkait.
f. Formulir Jadwal Konseling (Simulasi): Modul pengajuan jadwal konseling (tatap muka di ruang BK atau daring) dengan opsi nama samaran, pemilihan slot waktu fleksibel, dan validasi formulir terarah.
g. Ruang Tanya & FAQ: Pusat informasi tanya jawab terstruktur dengan pencarian pintar dan penjelasan prosedur resmi konsultasi sekolah.
h. Perpustakaan Digital BK: Kumpulan 8 artikel bimbingan aplikatif lengkap dengan estimasi waktu baca dan rujukan sumber terverifikasi.

4. CARA PENGGUNAAN
Alur penggunaan dirancang sederhana dalam 3 tahapan (Three-Step Journey):
Langkah 1: Siswa mengunjungi beranda, lalu dapat mengeksplorasi layanan secara langsung atau menggunakan fitur "Peta Arahku" untuk merefleksikan kondisinya saat ini.
Langkah 2: Siswa mempelajari materi edukasi yang direkomendasikan pada Perpustakaan Digital atau membaca FAQ seputar keluhan yang dialaminya guna menemukan pemahaman awal secara mandiri.
Langkah 3: Apabila siswa merasa membutuhkan pendampingan lebih lanjut, siswa dapat langsung membuka menu "Ajukan Konseling" untuk memilih topik, tanggal, dan format sesi bersama guru BK.

5. MANFAAT BAGI SISWA DAN GURU BK
- Bagi Siswa: Memperoleh ruang aman yang ramah dan suportif tanpa khawatir dihakimi (non-judgmental space), memperoleh informasi studi lanjut dan karier yang tervalidasi dari sumber resmi pemerintah, serta terlatih melakukan refleksi diri secara mandiri.
- Bagi Guru BK: Menghilangkan citra ruang BK sebagai "tempat penghakiman siswa bermasalah", meningkatkan efisiensi waktu guru BK dalam memberikan informasi umum yang repetitif melalui perpustakaan digital, serta memudahkan pengelolaan penjadwalan konseling yang lebih tertib tanpa tumpang tindih waktu belajar siswa di kelas.

6. ASPEK KEAMANAN DAN KERAHASIAAN
Pengembangan website ini menjunjung tinggi Asas Kerahasiaan Bimbingan Konseling, Kode Etik ASCA (2022), serta UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP):
- Prinsip Zero Data Storage pada Prototipe: Tidak ada cerita masalah pribadi sensitif yang dikirim ke server publik atau disimpan di basis data tanpa enkripsi.
- Opsi Penggunaan Nama Samaran (Pseudonym): Siswa diperkenankan menggunakan nama panggilan pada formulir simulasi untuk menjaga rasa aman.
- Batasan Asas Kerahasiaan yang Jelas: Dicantumkan klausul etika bahwa kerahasiaan dapat dialihkan kepada pihak berwenang hanya apabila terdapat indikasi bahaya yang mengancam keselamatan nyawa siswa atau orang lain.
- Edukasi Penggunaan Kanal Pihak Ketiga: Dicantumkan peringatan privasi bahwa saluran seperti WhatsApp tidak disarankan untuk mengirimkan curahan hati masalah sensitif secara mendetail.

7. KETERBATASAN WEBSITE
Sebagai sebuah prototipe akademik tahap awal:
a. Website ini merupakan media pendukung (blended guidance), bukan pengganti seutuhnya dari proses konseling tatap muka mendalam antara guru BK dan konseli.
b. RuangArah BK bukan merupakan layanan tanggap darurat psikologis 24 jam. Pada kondisi krisis mendesak, siswa diarahkan untuk segera menghubungi kontak bantuan darurat resmi (Hotline 119 ext 8 / Sejiwa atau Sahabat Anak 1500-771).
c. Sistem penjadwalan saat ini masih berstatus simulasi interaktif di sisi klien (frontend prototype) dan memerlukan pengembangan API/backend terenkripsi serta otentikasi akun sekolah apabila hendak diimplementasikan secara definitif di institusi pendidikan.

TAUTAN AKSES WEBSITE:
- Shared URL (Dapat dibuka langsung oleh dosen/penilai):
  ${sharedAppUrl}
- Alternatif Development URL:
  ${devAppUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reportFullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-50 via-white to-blue-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-700 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Deskripsi Rancangan Website (Laporan Dosen & Akademik)
              </h3>
              <p className="text-xs text-slate-500">
                Format penjelasan tugas mahasiswa untuk dosen / penguji mata kuliah BK
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Tutup laporan akademik"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar for copying & links */}
        <div className="bg-sky-50/80 border-b border-sky-100 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-sky-900">
            <LinkIcon className="w-3.5 h-3.5 text-sky-700" />
            <span>Tautan Live untuk Pengumpulan Tugas telah tersedia di bawah</span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Naskah Laporan</span>
              </>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-8 py-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Active Web Links Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-sky-600" />
              Tautan Website untuk Pengumpulan Tugas
            </h4>
            <p className="text-xs text-slate-600">
              Gunakan tautan resmi berikut saat mengunggah laporan tugas atau membagikannya kepada dosen pengampu:
            </p>
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="font-mono text-xs text-sky-700 truncate">{sharedAppUrl}</span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded shrink-0">
                  Shared URL (Publik)
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Catatan: Dosen dapat membuka tautan ini langsung dari peramban (browser) di laptop, tablet, maupun ponsel tanpa perlu menginstal aplikasi tambahan.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              Nama dan Tujuan Website
            </h4>
            <p className="pl-7 text-slate-600">
              Website ini dinamai <strong className="text-slate-900">RuangArah BK</strong> dengan tagline{' '}
              <em>"Ruang untuk Bercerita, Tempat untuk Menemukan Arah."</em> Dirancang sebagai media Cyber Counseling berbasis web untuk siswa SMA/SMK dengan guru BK sebagai pengelola layanannya. Tujuannya adalah mempermudah aksesibilitas siswa dalam memperoleh informasi bimbingan, menghapus stigma bahwa ruang BK hanya untuk siswa bermasalah, serta menyediakan sarana konsultasi dan penjadwalan yang ramah dan aman.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              Sasaran Pengguna
            </h4>
            <p className="pl-7 text-slate-600">
              Sasaran utamanya adalah <strong className="text-slate-900">peserta didik jenjang SMA/SMK sederajat</strong> yang memerlukan pendampingan seputar pengembangan diri, interaksi sosial teman sebaya, strategi belajar efektif, serta perencanaan studi lanjut atau karier. Di sisi lain, website ini menjadi media pendukung bagi <strong className="text-slate-900">Guru Bimbingan dan Konseling</strong> dalam mengelola penjadwalan dan menyampaikan literasi edukatif secara terstruktur.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              Fitur Layanan BK yang Dikembangkan
            </h4>
            <ul className="pl-7 space-y-1.5 list-disc list-outside text-slate-600">
              <li>
                <strong className="text-slate-900">4 Bidang Bimbingan BK:</strong> Bimbingan Pribadi, Bimbingan Sosial, Bimbingan Belajar, dan Bimbingan Karier (sesuai Permendikbud No. 111 Tahun 2014).
              </li>
              <li>
                <strong className="text-slate-900">Fitur Interaktif "Peta Arahku":</strong> Alat bantu refleksi mandiri 3 langkah guna mengenali kebutuhan spesifik siswa tanpa diagnosis medis sembarangan.
              </li>
              <li>
                <strong className="text-slate-900">Formulir Simulasi Pengajuan Konseling:</strong> Pemilihan jadwal sesi (tatap muka atau daring), kelas, opsi nama samaran, dan konfirmasi bukti permohonan.
              </li>
              <li>
                <strong className="text-slate-900">Ruang Tanya & FAQ Terkategori:</strong> Pencarian cepat solusi atas permasalahan umum siswa di sekolah.
              </li>
              <li>
                <strong className="text-slate-900">Perpustakaan Digital BK:</strong> 8 artikel panduan praktis siap baca dengan estimasi waktu dan rujukan sumber terverifikasi.
              </li>
              <li>
                <strong className="text-slate-900">Jelajah Masa Depan:</strong> Panduan studi lanjut terhubung dengan portal resmi SNPMB (snpmb.id) dan kesiapan kerja terhubung Karirhub Kemnaker (karirhub.kemnaker.go.id).
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              Cara Penggunaan Website
            </h4>
            <p className="pl-7 text-slate-600">
              Alur penggunaan mengikuti prinsip <em>Three-Step Guided Experience</em>: 1) Siswa memilih topik bimbingan melalui navigasi layanan atau memulai refleksi Peta Arahku, 2) Siswa mendalami artikel literasi atau mencari jawaban pertanyaan umum di Ruang Tanya, 3) Siswa dapat mengajukan jadwal konseling formal bersama guru BK secara privat melalui formulir yang tersedia.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              Manfaat bagi Siswa dan Guru BK
            </h4>
            <p className="pl-7 text-slate-600">
              Bagi siswa, website ini memberikan rasa aman karena tidak ada tatapan menghakimi, menjamin privasi awal, dan menyajikan materi yang relevan dengan kehidupan remaja masa kini. Bagi guru BK, website ini menjadi etalase layanan yang profesional, mengurangi penumpukan antrean manual di ruang BK, serta membantu penapisan awal permasalahan siswa sehingga sesi tatap muka dapat berlangsung lebih mendalam dan tepat sasaran.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                6
              </span>
              Aspek Keamanan dan Kerahasiaan
            </h4>
            <p className="pl-7 text-slate-600">
              Website menerapkan prinsip kehati-hatian data tinggi (UU PDP No. 27 Tahun 2022 dan Standar Etik ASCA 2022). Prototipe ini secara sengaja tidak menyimpan cerita pribadi konseli ke database publik atau penyimpanan lokal tanpa enkripsi. Penggunaan nama samaran diperkenankan, dan dicantumkan batasan kerahasiaan bahwa kerahasiaan konseling hanya dapat dibuka jika menyangkut keselamatan jiwa siswa atau orang lain.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                7
              </span>
              Keterbatasan Website
            </h4>
            <p className="pl-7 text-slate-600">
              Website ini dirancang sebagai media pendukung dan bukan pengganti proses psikoterapi klinis atau konseling langsung yang komprehensif. RuangArah BK bukan layanan tanggap darurat 24 jam; untuk situasi krisis disediakan rujukan hotline nasional. Selain itu, formulir pada tahap prototipe ini berjalan pada sisi antarmuka pengguna (frontend client simulation) dan membutuhkan integrasi backend terautentikasi sekolah apabila hendak diimplementasikan penuh.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Dapat langsung disalin dan ditempelkan pada lembar laporan tugas kuliah.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Tutup Naskah
          </button>
        </div>
      </div>
    </div>
  );
};
