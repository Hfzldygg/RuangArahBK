import { ServiceCategory, Article, FAQItem, QuizQuestion } from '../types';

export const BK_SERVICES: Record<string, ServiceCategory> = {
  pribadi: {
    id: 'pribadi',
    title: 'Bimbingan Pribadi',
    tagline: 'Mengenali diri, mengelola emosi, dan melangkah dengan percaya diri.',
    shortDesc: 'Pendampingan dalam memahami potensi, regulasi emosi, penerimaan diri, serta pengambilan keputusan hidup yang bijak.',
    colorScheme: {
      bgLight: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-900',
      badgeBg: 'bg-sky-100',
      badgeText: 'text-sky-800',
      accent: 'from-sky-500 to-blue-600',
    },
    overview:
      'Masa remaja di SMA/SMK adalah periode pencarian identitas yang penuh dinamika. Bimbingan Pribadi hadir untuk memberikan ruang aman bagi siswa dalam mengeksplorasi siapa dirinya, menguraikan kebingungan batin, mengasah kepercayaan diri, serta belajar mengelola stres sehari-hari dengan cara yang sehat dan konstruktif.',
    problemCases: [
      'Sering merasa kurang percaya diri saat tampil atau berbicara di hadapan teman dan guru.',
      'Mudah cemas, overthinking, atau kewalahan saat menghadapi ekspektasi lingkungan.',
      'Kesulitan mengontrol emosi marah atau rasa sedih yang datang berlarut-larut.',
      'Bingung menentukan pilihan hidup atau ragu terhadap kemampuan diri sendiri.',
      'Merasa tertekan oleh standar media sosial atau penilaian orang lain.',
    ],
    keyTopics: [
      'Pemahaman Konsep Diri & Self-Esteem',
      'Manajemen Stres & Regulasi Emosi',
      'Pengambilan Keputusan Bertanggung Jawab',
      'Membangun Mindset Bertumbuh (Growth Mindset)',
    ],
    tips: [
      {
        title: 'Latihan Menamai Emosi (Name It to Tame It)',
        desc: 'Saat merasa tidak nyaman, tuliskan dengan jelas: "Saya merasa gelisah karena besok ada ujian". Menamai emosi membantu otak memprosesnya secara tenang.',
      },
      {
        title: 'Fokus pada Lingkaran Kendali',
        desc: 'Bedakan hal yang bisa kamu kontrol (usaha, waktu belajar, caramu merespons) dan hal di luar kendali (pikiran orang lain, hasil akhir). Pusatkan energimu pada apa yang bisa kamu kendalikan.',
      },
      {
        title: 'Bicara pada Diri Sendiri Seperti Sahabat',
        desc: 'Ganti kritik batin yang menjatuhkan dengan kalimat suportif: "Aku sedang belajar, wajar jika belum sempurna, mari coba lagi."',
      },
    ],
  },
  sosial: {
    id: 'sosial',
    title: 'Bimbingan Sosial',
    tagline: 'Membangun relasi pertemanan sehat dan komunikasi yang hangat.',
    shortDesc: 'Bantuan dalam menjalin pertemanan suportif, komunikasi asertif, resolusi konflik, dan pencegahan bullying.',
    colorScheme: {
      bgLight: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      accent: 'from-blue-600 to-indigo-600',
    },
    overview:
      'Hubungan dengan teman sebaya sangat berpengaruh terhadap kenyamanan belajar dan kesehatan mental siswa. Bimbingan Sosial membantu siswa membangun relasi yang saling menghargai, belajar mengungkapkan pendapat tanpa menyakiti, mengelola perbedaan pandangan, serta menciptakan lingkungan sekolah yang bebas dari perundungan.',
    problemCases: [
      'Merasa diasingkan, sulit berbaur, atau canggung saat berada dalam kelompok baru.',
      'Mengalami konflik atau kesalahpahaman dengan sahabat dekat yang belum terselesaikan.',
      'Sulit menolak ajakan teman karena takut dijauhi (people pleasing / FOMO).',
      'Menjadi sasaran sindiran, gosip, perundungan di kelas, atau cyberbullying di media sosial.',
      'Kesulitan bekerja sama dalam kelompok tugas sekolah karena perbedaan karakter.',
    ],
    keyTopics: [
      'Komunikasi Asertif & Penetapan Batasan Sehat',
      'Resolusi Konflik Antar Teman Sebaya',
      'Pencegahan Bullying & Cyberbullying',
      'Membangun Empati & Kerja Sama Tim',
    ],
    tips: [
      {
        title: 'Gunakan Pola "I-Message"',
        desc: 'Alih-alih berkata "Kamu egois!", katakan "Aku merasa kurang nyaman ketika tugasku tidak dibagi rata, bisakah kita diskusikan pembagiannya lagi?"',
      },
      {
        title: 'Berani Menolak dengan Santun',
        desc: 'Menjaga batasan pribadi bukan berarti sombong. Katakan: "Maaf, aku tidak bisa ikut nongkrong hari ini karena harus istirahat dan bantu orang tua."',
      },
      {
        title: 'Jadilah Upstander, Bukan Bystander',
        desc: 'Bila melihat teman dirundung, jangan ikut menertawakan. Dampingi korban, jangan sebar konten negatif, dan laporkan secara privat kepada guru BK.',
      },
    ],
  },
  belajar: {
    id: 'belajar',
    title: 'Bimbingan Belajar',
    tagline: 'Menemukan ritme belajar efektif, terarah, dan bermakna.',
    shortDesc: 'Panduan strategi belajar, manajemen waktu, mengatasi prokrastinasi, dan persiapan menghadapi ujian.',
    colorScheme: {
      bgLight: 'bg-sky-50',
      border: 'border-sky-300',
      text: 'text-slate-900',
      badgeBg: 'bg-sky-100',
      badgeText: 'text-sky-900',
      accent: 'from-cyan-500 to-blue-500',
    },
    overview:
      'Tuntutan akademik di jenjang SMA/SMK sering kali menimbulkan tekanan bila tidak diimbangi dengan metode belajar yang tepat. Bimbingan Belajar berfokus pada pengenalan gaya belajar pribadi, perencanaan jadwal realistis, teknik konsentrasi, serta strategi mengatasi rasa malas dan jenuh belajar.',
    problemCases: [
      'Sering menunda tugas sampai mendekati batas waktu (sistem kebut semalam).',
      'Mudah terdistraksi gawai, media sosial, atau game saat hendak belajar.',
      'Sudah membaca buku berkali-kali namun tetap merasa materi tidak menempel di ingatan.',
      'Merasa cemas luar biasa hingga blank saat mengerjakan lembar ujian.',
      'Kesulitan membagi waktu antara pelajaran sekolah, organisasi, hobi, dan istirahat.',
    ],
    keyTopics: [
      'Teknik Belajar Aktif (Feynman, Pomodoro, Spaced Repetition)',
      'Manajemen Waktu & Pembuatan Jadwal Seimbang',
      'Strategi Mengatasi Prokrastinasi Akademik',
      'Manajemen Kecemasan Menjelang Ujian (Exam Anxiety)',
    ],
    tips: [
      {
        title: 'Aturan 2 Menit untuk Mengawali',
        desc: 'Jika tugas terasa sangat berat, janjikan pada diri sendiri hanya membukanya selama 2 menit. Sering kali hambatan terbesar hanyalah langkah awal untuk memulai.',
      },
      {
        title: 'Gunakan Teknik Pomodoro 25/5',
        desc: 'Belajar fokus selama 25 menit penuh tanpa gawai, kemudian istirahat 5 menit untuk minum atau peregangan ringan. Ulangi 3-4 siklus.',
      },
      {
        title: 'Belajar dengan Mengajarkan (Metode Feynman)',
        desc: 'Cobalah jelaskan konsep yang baru dipelajari dengan bahasa sederhana seolah kamu menerangkannya kepada adik kecil. Jika kamu bisa, berarti kamu benar-benar paham.',
      },
    ],
  },
  karier: {
    id: 'karier',
    title: 'Bimbingan Karier',
    tagline: 'Merancang masa depan dengan bekal wawasan yang matang.',
    shortDesc: 'Eksplorasi minat dan bakat, informasi perguruan tinggi, persiapan SMK masuk dunia kerja, dan beasiswa.',
    colorScheme: {
      bgLight: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-slate-900',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-900',
      accent: 'from-blue-700 to-sky-600',
    },
    overview:
      'Apakah lanjut kuliah, bekerja, atau berwirausaha? Setiap pilihan memiliki jalurnya masing-masing. Bimbingan Karier membantu siswa memetakan minat dan potensi diri, menelusuri jurusan kuliah yang relevan, memahami jalur seleksi resmi, serta mengasah keterampilan kerja esensial bagi lulusan SMA maupun SMK.',
    problemCases: [
      'Bingung menentukan arah setelah lulus: apakah kuliah, kerja, atau ikatan dinas.',
      'Merasa bingung memilih jurusan karena ada perbedaan pendapat dengan orang tua.',
      'Khawatir mengenai biaya kuliah dan belum memahami skema bantuan beasiswa/KIP-Kuliah.',
      'Siswa SMK yang ingin mempersiapkan CV, portofolio, dan mental menghadapi dunia industri.',
      'Kurang paham perbedaan jalur masuk PTN seperti SNBP, SNBT, dan Jalur Mandiri.',
    ],
    keyTopics: [
      'Pemetaan Minat, Bakat, dan Tipe Kepribadian Karier (RIASEC)',
      'Pilihan Studi Lanjut (PTN, PTS, Kedinasan, Politeknik)',
      'Akses Informasi Beasiswa Resmi & KIP-Kuliah',
      'Kesiapan Kerja, Portofolio Siswa, & Keterampilan Abad 21',
    ],
    tips: [
      {
        title: 'Riset Kurikulum Jurusan, Bukan Sekadar Nama Kampus',
        desc: 'Buka website program studi yang diminati. Periksa daftar mata kuliah semester 1 hingga 8 untuk memastikan materi tersebut cocok dengan ketertarikanmu.',
      },
      {
        title: 'Bangun Rekam Jejak (Portofolio) Sejak Dini',
        desc: 'Kumpulkan hasil karya tugas, sertifikat kepanitiaan, atau proyek kecil dalam satu folder rapi. Ini akan sangat berharga saat mendaftar magang atau beasiswa.',
      },
      {
        title: 'Gunakan Rujukan Resmi Kemendikbudristek & Kemnaker',
        desc: 'Hindari mempercayai rumor seleksi di media sosial. Pantau informasi resmi hanya melalui portal SNPMB (snpmb.id) dan Karirhub (karirhub.kemnaker.go.id).',
      },
    ],
  },
};

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Cara Menyusun Jadwal Belajar Efektif Tanpa Rasa Burnout',
    category: 'belajar',
    readTime: '4 menit baca',
    updatedAt: '12 Oktober 2026',
    source: 'Panduan Bimbingan Belajar Kurikulum Merdeka & Studi Manajemen Waktu Pelajar',
    summary:
      'Belajar berjam-jam tanpa jeda justru menurunkan daya serap otak. Pelajari cara menyusun time-blocking yang seimbang antara belajar, istirahat, dan hobi.',
    content: [
      'Banyak siswa merasa bersalah jika tidak belajar setiap malam. Padahal, otak manusia memiliki batasan kapasitas kognitif sebelum mengalami kelelahan mental (burnout). Kunci utama belajar bukanlah seberapa lama kamu duduk di meja, melainkan seberapa fokus dan terstruktur waktu yang kamu gunakan.',
      'Langkah pertama adalah membuat pemetaan energi harian. Sebagian siswa lebih segar memahami rumus matematika di pagi atau sore hari, sementara yang lain lebih nyaman membaca materi teori di awal malam. Sesuaikan tingkat kesulitan mata pelajaran dengan jam energi puncakmu.',
      'Terapkan metode Time-Blocking dengan rumus 45-15 atau 25-5. Blok waktu 45 menit murni untuk satu subbab materi, matikan notifikasi ponsel, lalu beri jeda 15 menit untuk meregangkan badan atau minum air putih. Jeda ini krusial agar otak mengonsolidasikan memori jangka panjang.',
      'Jangan lupakan waktu pemulihan (downtime). Masukkan jadwal tidur cukup 7-8 jam dan aktivitas santai tanpa rasa bersalah. Siswa yang beristirahat dengan baik terbukti memiliki kemampuan penalaran dan memori 30% lebih tajam saat ujian.',
    ],
    keyTakeaways: [
      'Gunakan metode Time-Blocking daripada jadwal yang kaku.',
      'Prioritaskan 1-2 mata pelajaran berat di jam energi tertinggi.',
      'Sediakan hari jeda mingguan untuk menyegarkan pikiran.',
    ],
  },
  {
    id: 'art-2',
    title: 'Mengatasi Rasa Gugup dan Takut Saat Presentasi di Depan Kelas',
    category: 'pribadi',
    readTime: '3 menit baca',
    updatedAt: '18 Oktober 2026',
    source: 'Psikologi Komunikasi Remaja & Panduan Kepercayaan Diri Siswa',
    summary:
      'Jantung berdegup kencang, tangan berkeringat, dan suara bergetar saat berdiri di depan kelas? Kenali respons alami tubuh ini dan cara mengendalikannya.',
    content: [
      'Rasa gugup saat berbicara di depan umum adalah respons biologis alami tubuh (fight-or-flight). Otak mempersepsikan tatapan teman-teman sekelas sebagai situasi waspada. Oleh karena itu, jangan menyalahkan diri sendiri ketika jantung berdegup lebih kencang.',
      'Langkah pertama untuk meredakan ketegangan fisik adalah teknik pernapasan perut (Box Breathing). Tarik napas dalam 4 hitungan, tahan 4 hitungan, buang perlahan 4 hitungan, dan tahan 4 hitungan. Latihan ini langsung mengirim sinyal ketenangan ke sistem saraf pusat.',
      'Fokuslah pada pesan yang ingin kamu sampaikan, bukan pada bagaimana penampilanmu. Ingat bahwa sebagian besar teman sekelasmu sebenarnya hanya ingin mendengarkan informasimu atau sedang memikirkan gilirannya sendiri, bukan sedang menilai setiap kesalahan kecilmu.',
      'Sebelum presentasi dimulai, luangkan waktu membaca pembuka kalimat pertama dengan lantang saat latihan di rumah. Memulai kalimat pertama dengan lancar akan memberikan momentum kepercayaan diri untuk menit-menit berikutnya.',
    ],
    keyTakeaways: [
      'Gugup adalah reaksi biologis wajar, bukan tanda kegagalan.',
      'Gunakan pernapasan 4x4 untuk menstabilkan detak jantung.',
      'Kuasai kalimat pembuka 30 detik pertama untuk membangun momentum.',
    ],
  },
  {
    id: 'art-3',
    title: 'Seni Komunikasi Asertif: Berani Berkata Tidak Tanpa Merusak Pertemanan',
    category: 'sosial',
    readTime: '5 menit baca',
    updatedAt: '15 Oktober 2026',
    source: 'Keterampilan Hubungan Teman Sebaya & Bimbingan Sosial Sekolah',
    summary:
      'Sering merasa tidak enak menolak titip tugas atau ajakan nongkrong padahal sedang lelah? Pelajari teknik komunikasi asertif yang ramah dan tegas.',
    content: [
      'Banyak remaja terjebak dalam perilaku people pleasing karena khawatir dicap sombong atau dijauhi kelompok pertemanan. Padahal, terus-menerus mengiyakan permintaan orang lain dengan mengorbankan diri sendiri pada akhirnya memicu kelelahan emosional dan rasa kesal terpendam.',
      'Komunikasi asertif berada di titik tengah antara pasif (selalu mengalah) dan agresif (menyerang orang lain). Asertif berarti kamu menghargai kebutuhan orang lain sekaligus tetap teguh menghargai batasan dan kapasitas dirimu sendiri.',
      'Gunakan teknik "Apresiasi + Alasan Singkat + Solusi Alternatif". Contoh: "Terima kasih banyak sudah mengajak nongkrong sore ini, tapi aku sedang harus menyelesaikan tugas yang tenggatnya malam ini. Bagaimana kalau akhir pekan besok kita mengobrol lagi?"',
      'Kamu tidak perlu memberikan penjelasan berbelit-belit atau mengarang alasan bohong. Kejujuran yang disampaikan dengan nada bicara bersahabat akan jauh lebih dihargai oleh teman yang tulus.',
    ],
    keyTakeaways: [
      'Menolak ajakan bukan berarti menolak pertemanan.',
      'Sampaikan penolakan dengan pola apresiasi dan kejelasan batasan.',
      'Teman yang sehat akan menghormati batasan waktu dan energimu.',
    ],
  },
  {
    id: 'art-4',
    title: 'Mengatasi Konflik Teman Sebaya dengan Kepala Dingin',
    category: 'sosial',
    readTime: '4 menit baca',
    updatedAt: '20 Oktober 2026',
    source: 'Modul Mediasi Sebaya & Penyelesaian Perselisihan Sekolah',
    summary:
      'Perbedaan pendapat dan salah paham wajar terjadi dalam persahabatan. Inilah panduan menyelesaikan konflik tanpa drama berkepanjangan.',
    content: [
      'Perselisihan antarsahabat di lingkungan sekolah biasanya bermula dari masalah sederhana: sindiran di status media sosial, pembagian tugas kelompok yang timpang, atau kesalahpahaman nada teks di grup chat.',
      'Aturan pertama saat terjadi konflik adalah menghindari perang argumen di ruang publik atau grup chat. Teks tertulis sering kali kehilangan intonasi dan ekspresi wajah, sehingga mudah disalahartikan sebagai serangan personal.',
      'Beri jeda "cooling down" minimal beberapa jam sebelum membicarakan masalah. Saat emosi masih meluap, logika sulit bekerja dengan jernih. Ajak teman bicara berdua secara langsung di tempat yang tenang.',
      'Dengarkan sudut pandangnya tanpa memotong pembicaraan. Fokus pada penyelesaian masalah bersama (kamu & dia melawan masalah), bukan kamu melawan dia. Jika jalan buntu, mintalah bantuan guru BK sebagai fasilitator netral yang tidak berpihak.',
    ],
    keyTakeaways: [
      'Hindari membahas perselisihan lewat status media sosial atau grup obrolan.',
      'Beri waktu jeda agar emosi mereda sebelum bertatap muka.',
      'Guru BK selalu siap menjadi penengah yang adil dan menjaga rahasia kedua belah pihak.',
    ],
  },
  {
    id: 'art-5',
    title: 'Menemukan Ikigai Remaja: Mengenali Minat, Bakat, dan Potensi Diri',
    category: 'pribadi',
    readTime: '4 menit baca',
    updatedAt: '22 Oktober 2026',
    source: 'Konsep Pengembangan Diri Remaja & Penelusuran Potensi Siswa',
    summary:
      'Sering merasa tidak memiliki kelebihan apa pun dibanding orang lain? Mari bedah cara sederhana memetakan minat dan potensi tersembunyi dirimu.',
    content: [
      'Banyak siswa merasa minder karena membatasi definisi bakat hanya pada juara olimpiade sains atau jago olahraga. Padahal, bakat mencakup kemampuan mendengarkan dengan penuh empati, keahlian mengorganisasi barang, ketelitian menyusun data, hingga kelincahan berbicara.',
      'Coba tanyakan pada dirimu tiga pertanyaan refleksi: Aktivitas apa yang membuatmu lupa waktu saat melakukannya? Topik apa yang membuatmu penasaran untuk mencari tahu lebih dalam? Masalah apa yang sering dimintai bantuan oleh teman-teman kepadamu?',
      'Catat hal-hal tersebut dalam jurnal kecil selama satu minggu. Dari pola yang muncul, kamu akan melihat kecenderungan bidang yang memicu antusiasmemu, apakah di ranah analitis, seni kreatif, sosial kemanusiaan, atau teknis operasional.',
      'Ingatlah bahwa potensi bukanlah takdir statis yang tiba-tiba jatuh dari langit. Potensi adalah benih yang tumbuh melalui rasa ingin tahu, latihan berulang, dan keberanian untuk mencoba hal-hal baru tanpa takut salah.',
    ],
    keyTakeaways: [
      'Bakat tidak terbatas pada nilai rapor atau medali perlombaan.',
      'Perhatikan aktivitas apa yang membuatmu antusias dan fokus.',
      'Eksplorasi kegiatan baru di sekolah untuk menguji ketertarikanmu.',
    ],
  },
  {
    id: 'art-6',
    title: 'Panduan Menentukan Jurusan Kuliah: Hindari Jebakan Salah Jurusan',
    category: 'karier',
    readTime: '6 menit baca',
    updatedAt: '24 Oktober 2026',
    source: 'Rujukan Bimbingan Karier & Sosialisasi SNPMB Kemendikbudristek',
    summary:
      'Jangan memilih jurusan hanya karena tren atau ikut-ikutan teman dekat. Simak 4 pilar penting dalam memilih program studi masa depan.',
    content: [
      'Fenomena merasa salah jurusan masih dialami oleh ribuan mahasiswa setiap tahunnya. Sebagian besar penyebabnya adalah memilih berdasarkan gengsi nama universitas, mengikuti pilihan teman akrab, atau tergiur mitos peluang kerja tanpa mengecek minat belajar sendiri.',
      'Pilar pertama adalah kesiapan akademik dan ketahanan belajar. Buka silabus jurusan yang kamu incar. Jika kamu memilih Teknik Informatika, siapkah kamu berkutat dengan logika matematika dan algoritma setiap hari? Jika memilih Psikologi, siapkah kamu membaca jurnal ilmiah dan teori perilaku manusia?',
      'Pilar kedua adalah prospek karier jangka panjang yang realistis. Telusuri variasi bidang kerja yang ditekuni alumni program studi tersebut. Apakah industrinya sedang berkembang dan memiliki relevansi dengan kebutuhan masa kini?',
      'Pilar ketiga adalah komunikasi terbuka dengan orang tua. Diskusikan rencana pilihan jurusan beserta argumen riset yang telah kamu kumpulkan. Guru BK dapat menjadi jembatan komunikasi jika terdapat perbedaan pandangan antara harapan orang tua dan minatmu.',
    ],
    keyTakeaways: [
      'Periksa mata kuliah yang diajarkan, bukan sekadar popularitas jurusan.',
      'Pastikan kamu menikmati proses belajarnya, bukan hanya gelar akhirnya.',
      'Konsultasikan keraguan jurusanmu ke guru BK untuk mendapatkan asesmen minat bakat.',
    ],
  },
  {
    id: 'art-7',
    title: 'Menyiapkan Karier Lulusan SMA/SMK: Portofolio dan Keterampilan Relevan',
    category: 'karier',
    readTime: '5 menit baca',
    updatedAt: '25 Oktober 2026',
    source: 'Direktorat Mitras DUDI Kemendikbudristek & Kemenaker RI (Karirhub)',
    summary:
      'Lulus sekolah siap kerja atau wirausaha? Ini dia keterampilan lunak (soft skills) dan portofolio nyata yang dicari industri modern saat ini.',
    content: [
      'Dunia kerja modern kini lebih mengutamakan bukti keterampilan nyata dan sikap kerja profesional daripada sekadar nilai angka di ijazah. Bagi lulusan SMK maupun SMA yang berencana langsung terjun ke dunia kerja, persiapan dimulai sejak di bangku sekolah.',
      'Keterampilan utama yang dicari recruiter meliputi: komunikasi profesional, kemampuan pemecahan masalah (problem solving), kemampuan beradaptasi dengan alat digital, serta integritas ketepatan waktu.',
      'Mulailah mendokumentasikan karya ke dalam portofolio digital. Jika kamu dari jurusan desain atau multimedia, susun karya terbaikmu di platform portofolio. Jika kamu dari otomotif atau teknik mesin, catat proyek perbaikan atau modifikasi yang pernah kamu kerjakan dengan foto before-after.',
      'Pantau portal resmi pemerintah seperti Karirhub Kemnaker (karirhub.kemnaker.go.id) untuk melihat standar lowongan kerja pemula yang sah, menghindari penipuan rekrutmen kerja, dan memahami sertifikasi kompetensi keahlian.',
    ],
    keyTakeaways: [
      'Dokumentasikan tugas praktik terbaikmu sebagai portofolio kerja.',
      'Latih etika komunikasi formal via email dan pesan kerja profesional.',
      'Gunakan portal resmi Kemnaker untuk mencari lowongan kerja terpercaya.',
    ],
  },
  {
    id: 'art-8',
    title: 'Cerdas Beretika di Media Sosial dan Pencegahan Cyberbullying',
    category: 'sosial',
    readTime: '4 menit baca',
    updatedAt: '26 Oktober 2026',
    source: 'Panduan Literasi Digital Remaja & Etika Komunikasi Siber',
    summary:
      'Jejak digital bersifat abadi. Pahami cara melindungi privasi akun, bersikap bijak di kolom komentar, dan bersikap saat melihat perundungan daring.',
    content: [
      'Di era digital, media sosial adalah perpanjangan dari lingkungan sosial sekolah. Namun, ilusi anonimitas sering membuat seseorang lebih mudah menuliskan kalimat kasar, menyebarkan aib teman, atau ikut-ikutan menertawakan konten orang lain.',
      'Pahami prinsip jejak digital (digital footprint). Tangkapan layar dari pesan pribadi atau komentar yang menyinggung dapat tersimpan selamanya dan berdampak pada reputasi seleksi beasiswa, perguruan tinggi, maupun rekrutmen kerja di masa depan.',
      'Bila kamu atau temanmu mengalami cyberbullying: 1) Jangan membalas dengan amarah karena itu tujuan pelaku, 2) Ambil tangkapan layar (screenshot) sebagai bukti, 3) Gunakan fitur block dan report pada platform, 4) Ceritakan segera kepada guru BK atau orang tua.',
      'Mari bersama jadikan ruang digital kita tempat yang ramah, suportif, dan menyenangkan untuk berbagi karya positif.',
    ],
    keyTakeaways: [
      'Pikirkan konsekuensi sebelum mengunggah: Is it True, Helpful, Inspiring, Necessary, Kind?',
      'Dokumentasikan bukti tangkapan layar jika menghadapi perundungan daring.',
      'Laporkan ke pihak sekolah jika perundungan melibatkan lingkungan teman sebaya.',
    ],
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'umum',
    question: 'Apakah masuk ruang BK atau konseling berarti saya siswa yang bermasalah atau nakal?',
    answer:
      'Sama sekali tidak! Ini adalah mitos lama yang keliru. Guru BK di sekolah hadir untuk seluruh siswa, baik untuk konsultasi cita-cita, tips belajar, curhat masalah pertemanan, maupun pengembangan potensi diri. Semua orang berhak mendapatkan ruang untuk didengar.',
  },
  {
    id: 'faq-2',
    category: 'umum',
    question: 'Apakah cerita saya kepada guru BK akan dibocorkan ke teman sekelas atau guru lain?',
    answer:
      'Kerahasiaan adalah asas tertinggi dalam layanan Bimbingan dan Konseling sesuai Permendikbud No. 111 Tahun 2014 dan kode etik konselor. Ceritamu aman dan tidak akan dibagikan kepada siapa pun tanpa izinmu, kecuali ada kondisi khusus menyangkut keselamatan jiwa siswa.',
  },
  {
    id: 'faq-3',
    category: 'belajar',
    question: 'Bagaimana jika saya sering menunda belajar hingga malam sebelum ujian?',
    answer:
      'Kebiasaan prokrastinasi biasanya dipicu rasa takut gagal atau materi yang terasa terlalu menumpuk. Guru BK dapat membantumu memecah materi besar menjadi langkah-langkah kecil 15 menit menggunakan teknik micro-habits sehingga kamu tidak lagi merasa terbebani.',
  },
  {
    id: 'faq-4',
    category: 'sosial',
    question: 'Saya merasa tidak punya teman dekat di kelas dan sering kesepian. Apakah saya aneh?',
    answer:
      'Kamu tidak aneh sama sekali. Transisi pertemanan di SMA/SMK memang membutuhkan adaptasi. Kamu bisa memulai dari menyapa teman sebangku atau bergabung dengan ekstrakurikuler yang sesuai dengan hobimu agar bertemu teman dengan frekuensi minat yang sama.',
  },
  {
    id: 'faq-5',
    category: 'karier',
    question: 'Orang tua saya menginginkan jurusan yang berbeda dari minat saya. Bagaimana solusinya?',
    answer:
      'Perbedaan aspirasi antara siswa dan orang tua sangat sering terjadi. Kuncinya adalah komunikasi berbasis data, bukan sekadar adu emosi. Buat rangkuman minatmu, kurikulum jurusan, dan prospek masa depannya. Jika perlu, guru BK dapat membantu memfasilitasi diskusi keluarga yang sejuk.',
  },
  {
    id: 'faq-6',
    category: 'pribadi',
    question: 'Saya sering merasa cemas berlebihan dan overthinking tiap malam, apa yang harus saya lakukan?',
    answer:
      'Pikiran berlebih biasanya muncul saat tubuh lelah namun otak masih memproses kekhawatiran yang belum tuntas. Cobalah teknik "Brain Dump": tuliskan semua hal yang kamu cemaskan di selembar kertas sebelum tidur, lalu beri tahu dirimu bahwa hal tersebut akan diselesaikan esok hari.',
  },
  {
    id: 'faq-7',
    category: 'karier',
    question: 'Di mana saya bisa mengecek informasi resmi seleksi masuk PTN dan beasiswa?',
    answer:
      'Untuk seleksi masuk PTN (SNBP dan SNBT), selalu rujuk portal resmi Seleksi Nasional Penerimaan Mahasiswa Baru di https://snpmb.id/. Untuk beasiswa KIP-Kuliah, akses portal resmi Puslapdik Kemendikbudristek. Jangan mempercayai informasi berbayar dari calo atau akun tidak terverifikasi.',
  },
  {
    id: 'faq-8',
    category: 'umum',
    question: 'Bagaimana cara mengajukan sesi konseling lewat RuangArah BK?',
    answer:
      'Kamu cukup membuka menu "Ajukan Konseling", mengisi nama panggilan/samaran, memilih topik yang ingin dibahas (Pribadi, Sosial, Belajar, atau Karier), lalu memilih jadwal dan bentuk konseling (tatap muka di ruang BK atau daring). Pada prototipe ini sistem akan menampilkan bukti permohonan simulasi.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apa kondisi yang saat ini paling sering menyita pikiran atau energimu?',
    subtitle: 'Pilihlah salah satu yang paling mendekati apa yang kamu rasakan hari-hari ini.',
    options: [
      {
        label: 'Bingung dengan emosi diri & sering cemas',
        desc: 'Merasa kurang percaya diri, overthinking, atau suasana hati mudah naik-turun.',
        category: 'pribadi',
        recommendationNote: 'Fokus awal yang baik untukmu adalah Bimbingan Pribadi untuk memulihkan ketenangan batin dan rasa percaya diri.',
      },
      {
        label: 'Hubungan dengan teman atau suasana pertemanan',
        desc: 'Ada salah paham, merasa dijauhi, canggung bergaul, atau tertekan di lingkungan kelas.',
        category: 'sosial',
        recommendationNote: 'Fokus yang tepat untukmu adalah Bimbingan Sosial agar dapat membangun relasi sehat dan komunikasi asertif.',
      },
      {
        label: 'Kewalahan dengan tugas & nilai sekolah',
        desc: 'Sering menunda tugas, sulit fokus belajar, atau cemas menghadapi ujian.',
        category: 'belajar',
        recommendationNote: 'Kamu membutuhkan pendampingan Bimbingan Belajar untuk menata strategi manajemen waktu dan teknik belajar aktif.',
      },
      {
        label: 'Gelisah memikirkan masa depan setelah lulus',
        desc: 'Ragu memilih jurusan kuliah, belum tahu minat karier, atau bingung mencari beasiswa.',
        category: 'karier',
        recommendationNote: 'Kamu sangat cocok mengeksplorasi Bimbingan Karier guna memetakan potensi dan langkah studi lanjut terarah.',
      },
    ],
  },
  {
    id: 2,
    question: 'Langkah pertama seperti apa yang terasa paling melegakan bagimu saat ini?',
    subtitle: 'Setiap orang memiliki ritme masing-masing untuk memulai proses pemulihan.',
    options: [
      {
        label: 'Membaca tips mandiri yang tenang tanpa terburu-buru',
        desc: 'Ingin memahami akar persoalan terlebih dahulu lewat artikel edukasi terpercaya.',
        category: 'belajar',
        recommendationNote: 'Membaca artikel edukasi mandiri adalah awalan yang sangat bijak sebelum mengambil langkah besar berikutnya.',
      },
      {
        label: 'Bercerita secara privat kepada pendengar tepercaya',
        desc: 'Menginginkan ruang aman untuk mengeluarkan unek-unek tanpa dihakimi.',
        category: 'pribadi',
        recommendationNote: 'Mengutarakan isi hati kepada guru BK di ruang konseling akan membantumu melepaskan beban yang terpendam.',
      },
      {
        label: 'Mendapat panduan konkret langkah demi langkah',
        desc: 'Membutuhkan peta jalan nyata untuk menyelesaikan masalah yang sedang dihadapi.',
        category: 'karier',
        recommendationNote: 'Menyusun rencana aksi terstruktur akan membantumu melihat kejelasan arah yang realistis.',
      },
      {
        label: 'Memperbaiki cara berkomunikasi dengan orang sekitar',
        desc: 'Ingin bisa menyampaikan perasaan secara jujur tanpa menimbulkan konflik.',
        category: 'sosial',
        recommendationNote: 'Mempelajari teknik komunikasi asertif akan membuat interaksi sosialmu jauh lebih nyaman.',
      },
    ],
  },
  {
    id: 3,
    question: 'Jika kamu ingin berkonsultasi dengan guru BK, format mana yang membuatmu paling rileks?',
    subtitle: 'Kenyamanan siswa selalu menjadi prioritas utama layanan konseling sekolah.',
    options: [
      {
        label: 'Tatap muka langsung di ruang konseling BK sekolah',
        desc: 'Duduk santai di ruang BK yang tenang dan berdiskusi secara hangat.',
        category: 'pribadi',
        recommendationNote: 'Konseling tatap muka memberikan kedekatan emosional dan kehadiran penuh bersama guru BK.',
      },
      {
        label: 'Sesi daring (Google Meet / Pesan Terjadwal)',
        desc: 'Cocok bagi yang lebih nyaman menyampaikan pikiran dari rumah atau gawai.',
        category: 'belajar',
        recommendationNote: 'Konseling daring fleksibel dan memudahkanmu menyusun kata-kata dengan lebih leluasa.',
      },
      {
        label: 'Eksplorasi materi mandiri terlebih dahulu baru konseling jika perlu',
        desc: 'Ingin mencoba tips sederhana secara mandiri sebelum menjadwalkan sesi.',
        category: 'karier',
        recommendationNote: 'Mencoba strategi mandiri membuktikan kemandirianmu, dan pintu ruang BK selalu terbuka kapan pun kamu butuh.',
      },
      {
        label: 'Konsultasi kelompok kecil bersama teman sebaya',
        desc: 'Membahas topik bersama sahabat dengan bimbingan fasilitator guru BK.',
        category: 'sosial',
        recommendationNote: 'Bimbingan kelompok sangat efektif untuk melatih dinamika sosial dan saling mendukung.',
      },
    ],
  },
];

export const MASA_DEPAN_DATA = {
  studiLanjut: {
    title: 'Pilihan Studi Lanjut (Perguruan Tinggi & Kedinasan)',
    summary: 'Ragam jalur masuk pendidikan tinggi formal di Indonesia untuk lulusan SMA/SMK/MA.',
    officialPortal: {
      name: 'Portal Resmi SNPMB (Kemendikbudristek)',
      url: 'https://snpmb.id/',
      desc: 'Satu-satunya kanal resmi untuk informasi pendaftaran SNBP (Prestasi) dan SNBT (Tes UTBK) seluruh Perguruan Tinggi Negeri se-Indonesia.',
    },
    pathways: [
      {
        name: 'SNBP (Seleksi Nasional Berdasarkan Prestasi)',
        target: 'Siswa SMA/SMK eligible semester 1-5',
        focus: 'Penilaian nilai rapor, prestasi akademik/non-akademik, dan portofolio keahlian khusus.',
        tips: 'Pertahankan konsistensi nilai rapor sejak kelas 10 dan simpan sertifikat lomba resmi tingkat kota/provinsi/nasional.',
      },
      {
        name: 'SNBT (Seleksi Nasional Berdasarkan Tes - UTBK)',
        target: 'Seluruh lulusan tahun berjalan & 2 tahun sebelumnya',
        focus: 'Tes Potensi Skolastik (TPS), Literasi Bahasa Indonesia & Inggris, serta Penalaran Matematika.',
        tips: 'Latih kemampuan penalaran logika dan membaca cepat secara berkala setiap minggu, bukan menghafal rumus semata.',
      },
      {
        name: 'Jalur Mandiri PTN',
        target: 'Pendaftar yang ingin opsi tambahan di universitas negeri',
        focus: 'Diselenggarakan oleh masing-masing PTN (menggunakan skor UTBK atau ujian tulis internal).',
        tips: 'Pantau website resmi universitas tujuan dan cermati rincian komponen biaya UKT serta IPI.',
      },
      {
        name: 'Perguruan Tinggi Swasta (PTS) Unggulan',
        target: 'Siswa yang mencari program studi spesifik dan kemitraan industri luas',
        focus: 'Jalur rapor beasiswa, kerja sama industri, dan kurikulum aplikatif.',
        tips: 'Banyak PTS menyediakan beasiswa 100% jalur rapor sebelum kelulusan sekolah tiba.',
      },
      {
        name: 'Perguruan Tinggi Kedinasan',
        target: 'Siswa yang berminat mengabdi di instansi pemerintah (STAN, STIS, IPDN, Poltekip, dll)',
        focus: 'Seleksi Kompetensi Dasar (SKD), tes fisik/kesehatan, dan psikotes ketat.',
        tips: 'Persiapkan fisik, kebugaran, dan pelajari soal-soal SKD (TWK, TIU, TKP) sejak kelas 11.',
      },
    ],
    scholarships: [
      {
        name: 'KIP Kuliah (Kartu Indonesia Pintar Kuliah)',
        provider: 'Puslapdik Kemendikbudristek',
        coverage: 'Bebas biaya pendaftaran seleksi, bebas biaya kuliah penuh, dan bantuan biaya hidup bulanan.',
        link: 'https://kip-kuliah.kemdikbud.go.id/',
      },
      {
        name: 'Beasiswa Indonesia Maju (BIM)',
        provider: 'Pusat Prestasi Nasional (Puspresnas)',
        coverage: 'Dukungan studi jenjang sarjana dalam dan luar negeri bagi siswa berprestasi tingkat nasional/internasional.',
        link: 'https://pusatprestasinasional.kemdikbud.go.id/',
      },
    ],
  },
  duniaKerja: {
    title: 'Kesiapan Menembus Dunia Kerja & Wirausaha',
    summary: 'Strategi praktis bagi siswa yang berencana langsung terjun ke dunia industri dan profesional.',
    officialPortal: {
      name: 'Portal Resmi Karirhub (Kementerian Ketenagakerjaan RI)',
      url: 'https://karirhub.kemnaker.go.id/',
      desc: 'Platform resmi lowongan kerja, pemagangan industri nasional, dan informasi standar kompetensi kerja Indonesia.',
    },
    skillsRequired: [
      {
        title: 'Komunikasi Kerja & Etika Profesional',
        desc: 'Mampu menyusun email formal, berdiskusi sopan, mendengarkan instruksi atasan, dan bekerja sama dalam tim.',
      },
      {
        title: 'Kemampuan Pemecahan Masalah (Problem Solving)',
        desc: 'Inisiatif mencari jalan keluar saat menghadapi kendala operasional tanpa langsung menyerah.',
      },
      {
        title: 'Literasi Digital & Otomasi Dasar',
        desc: 'Menguasai pengolah dokumen, spreadsheet (Excel/Google Sheets), serta adaptif terhadap perangkat lunak kerja baru.',
      },
      {
        title: 'Manajemen Waktu & Keandalan (Reliability)',
        desc: 'Disiplin hadir tepat waktu dan bertanggung jawab menyelesaikan tugas sesuai tenggat waktu yang disepakati.',
      },
    ],
    cvTips: [
      'Gunakan format yang rapi dan mudah dibaca (ATS-friendly), hindari grafik berlebihan yang membingungkan sistem pembaca otomatis.',
      'Sertakan pengalaman magang (PKL), kepanitiaan OSIS/ekskul, atau proyek riil yang pernah kamu selesaikan.',
      'Tuliskan keahlian teknis (misal: pengelasan, desain grafis Figma, pembukuan kasir, instalasi jaringan) secara spesifik.',
      'Periksa kembali tata bahasa dan jangan cantumkan data privat yang berbahaya seperti nomor KTP atau rekening bank.',
    ],
  },
};
