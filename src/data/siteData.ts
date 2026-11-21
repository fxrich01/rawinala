export interface LanguageOption {
  code: string; // Google Translate code
  shortCode: string; // Display badge code
  nativeLabel: string;
  subLabel: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: "id",
    shortCode: "ID",
    nativeLabel: "Bahasa Indonesia",
    subLabel: "Default",
    dir: "ltr",
  },
  {
    code: "en",
    shortCode: "EN",
    nativeLabel: "English",
    subLabel: "Inggris",
    dir: "ltr",
  },
  {
    code: "zh-CN",
    shortCode: "ZH-CN",
    nativeLabel: "中文",
    subLabel: "Mandarin",
    dir: "ltr",
  },
  {
    code: "ja",
    shortCode: "JA",
    nativeLabel: "日本語",
    subLabel: "Jepang",
    dir: "ltr",
  },
  {
    code: "ko",
    shortCode: "KO",
    nativeLabel: "한국어",
    subLabel: "Korea",
    dir: "ltr",
  },
  {
    code: "ar",
    shortCode: "AR",
    nativeLabel: "العربية",
    subLabel: "Arab",
    dir: "rtl",
  },
];

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Pilar Gerakan", href: "/pilar-gerakan" },
  { label: "Kabar & Pers", href: "/kabar-pers" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export interface PillarItem {
  id: string;
  index: string;
  title: string;
  englishSubtitle: string;
  tagline: string;
  summary: string;
  narrative: string[];
  keyPrograms: {
    title: string;
    detail: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  photoSpec: {
    title: string;
    ratio: string;
    resolution: string;
    caption: string;
    tone: "navy" | "sand" | "terracotta";
  };
}

export const PILLARS: PillarItem[] = [
  {
    id: "dialog-lintas-agama",
    index: "01",
    title: "Dialog Lintas Agama",
    englishSubtitle: "Interfaith Dialogue",
    tagline: "Merawat ruang perjumpaan yang tulus dan toleransi substantif.",
    summary:
      "Membangun jembatan komunikasi yang bermartabat antara pemuka agama, cendekiawan, dan komunitas akar rumput demi menghadirkan harmoni yang melampaui seremoni.",
    narrative: [
      "Keberagaman iman dan keyakinan di Nusantara merupakan kekayaan peradaban yang hanya dapat lestari apabila dirawat melalui dialog yang setara, terbuka, dan berlandaskan rasa saling menghormati.",
      "Melalui pilar Dialog Lintas Agama, Rawinala Haridra Global menghadirkan forum-forum perjumpaan substantif—mulai dari sarasehan tokoh agama, majelis pemuda lintas iman, hingga lokakarya resolusi sosial—agar perbedaan menjadi sumber kebijaksanaan bersama, bukan sekat pemisah.",
    ],
    keyPrograms: [
      {
        title: "Forum Meja Bundar Tokoh Lintas Iman",
        detail:
          "Pertemuan berkala para pemuka agama, budayawan, dan akademisi untuk merumuskan seruan moral serta langkah konkret menjaga kerukunan umat.",
      },
      {
        title: "Kaderisasi Duta Harmoni Muda",
        detail:
          "Ruang kolaborasi lintas kampus dan komunitas muda dalam mempelajari moderasi, literasi sosial, dan kerja bersama antar-umat beragama.",
      },
      {
        title: "Kunjungan Silaturahmi Rumah Ibadah & Pesantren",
        detail:
          "Program perjumpaan langsung untuk mempererat persaudaraan kebangsaan di berbagai daerah Indonesia.",
      },
    ],
    metrics: [
      { value: "6+", label: "Tradisi Iman Terlibat Aktif" },
      { value: "18", label: "Forum Dialog & Sarasehan Terencana" },
      { value: "Nasional", label: "Jejaring Tokoh & Komunitas" },
    ],
    photoSpec: {
      title: "Dokumentasi Forum Dialog Lintas Agama",
      ratio: "4:3",
      resolution: "1600 × 1200 px",
      caption:
        "Tempatkan foto suasana sarasehan atau diskusi meja bundar para pemuka lintas agama bersama pengurus Rawinala Haridra Global.",
      tone: "navy",
    },
  },
  {
    id: "aksi-kemanusiaan",
    index: "02",
    title: "Aksi & Solidaritas Kemanusiaan",
    englishSubtitle: "Humanitarian Action & Solidarity",
    tagline: "Kepedulian nyata yang hadir melampaui batas latar belakang.",
    summary:
      "Menyalurkan solidaritas sosial secara terstruktur, transparan, dan bermartabat—dari layanan bakti sosial hingga tanggap darurat bagi masyarakat rentan.",
    narrative: [
      "Persaudaraan sejati menemukan maknanya ketika diwujudkan dalam kerja kemanusiaan yang menyentuh kehidupan sehari-hari. Cahaya Haridra menjadi simbol kehangatan yang merangkul setiap warga tanpa memandang suku, agama, maupun golongan.",
      "Rawinala Haridra Global menggerakkan jejaring relawan, mitra dermawan, dan komunitas lokal untuk menghadirkan program bakti sosial berkelanjutan, layanan kesehatan masyarakat, dukungan pendidikan anak, serta respons cepat kebencanaan.",
    ],
    keyPrograms: [
      {
        title: "Bakti Sosial & Ketahanan Pangan Masyarakat",
        detail:
          "Distribusi bantuan pangan bergizi dan kebutuhan pokok secara berkala kepada keluarga prasejahtera dan panti sosial lintas wilayah.",
      },
      {
        title: "Klinik Peduli & Layanan Kesehatan Keliling",
        detail:
          "Sinergi tenaga medis sukarela untuk pemeriksaan kesehatan gratis, donor darah kemanusiaan, dan edukasi sanitasi keluarga.",
      },
      {
        title: "Satgas Tanggap Solidaritas Bencana",
        detail:
          "Mobilisasi cepat bantuan logistik dan pendampingan pemulihan warga terdampak bencana alam di berbagai provinsi.",
      },
    ],
    metrics: [
      { value: "100%", label: "Inklusif Lintas Latar Belakang" },
      { value: "3 Jalur", label: "Sosial, Kesehatan & Tanggap Darurat" },
      { value: "Berkala", label: "Audit & Laporan Dampak Terbuka" },
    ],
    photoSpec: {
      title: "Dokumentasi Bakti Sosial & Aksi Kemanusiaan",
      ratio: "4:3",
      resolution: "1600 × 1200 px",
      caption:
        "Tempatkan foto humanis kegiatan penyaluran bantuan kemanusiaan, pemeriksaan kesehatan, atau interaksi relawan di lapangan.",
      tone: "terracotta",
    },
  },
  {
    id: "persatuan-kebangsaan",
    index: "03",
    title: "Penguatan Persatuan & Kebangsaan",
    englishSubtitle: "National Unity & Civic Cohesion",
    tagline: "Sinergi strategis merawat kerukunan nasional dan keutuhan NKRI.",
    summary:
      "Menjalin kemitraan konstruktif bersama lembaga negara, unsur pemerintahan, dan elemen masyarakat sipil dalam memperkuat ketahanan sosial dan wawasan kebangsaan.",
    narrative: [
      "Stabilitas dan kemajuan bangsa bertumpu pada kokohnya kohesi sosial di tengah masyarakat. Sebagai organisasi kemasyarakatan yang berpandangan luas, Rawinala Haridra Global mengambil peran aktif sebagai mitra strategis negara dalam memperkokoh nilai-nilai Pancasila dan Bhinneka Tunggal Ika.",
      "Momentum audiensi resmi bersama Kementerian Koordinator Bidang Politik dan Keamanan RI menjadi tonggak komitmen kami untuk terus menghadirkan program kebangsaan yang menyejukkan, inklusif, serta relevan bagi tantangan zaman.",
    ],
    keyPrograms: [
      {
        title: "Audiensi & Sinergi Kelembagaan Negara",
        detail:
          "Koordinasi strategis bersama kementerian, pemerintah daerah, serta pemangku kepentingan nasional untuk menyelaraskan agenda kerukunan masyarakat.",
      },
      {
        title: "Simposium Kebangsaan & Ketahanan Sosial",
        detail:
          "Forum kajian publik dan diskusi kebijakan mengenai persatuan nasional, etika bermasyarakat, dan mitigasi polarisasi sosial.",
      },
      {
        title: "Diplomasi Budaya & Jejaring Global",
        detail:
          "Memperkenalkan wajah Indonesia yang rukun, toleran, dan berdaya saing kepada mitra kemasyarakatan internasional.",
      },
    ],
    metrics: [
      { value: "NKRI", label: "Komitmen Konstitusional & Pancasila" },
      { value: "Nov 2026", label: "Tonggak Audiensi Kemenko Polkam" },
      { value: "Global", label: "Diplomasi Kerukunan Nusantara" },
    ],
    photoSpec: {
      title: "Dokumentasi Audiensi Kenegaraan & Simposium Kebangsaan",
      ratio: "4:3",
      resolution: "1600 × 1200 px",
      caption:
        "Tempatkan foto audiensi kelembagaan, forum kebangsaan, atau pertemuan resmi pengurus bersama tokoh kenegaraan.",
      tone: "sand",
    },
  },
];

export interface BoardMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  isProtectedName?: boolean;
  photoNote: string;
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Dewan Pembina & Penasihat Kehormatan",
    role: "Dewan Pembina Nasional",
    division: "Pengarah Strategis & Etika Organisasi",
    bio: "Menghimpun tokoh masyarakat, pemuka lintas agama, serta figur kenegaraan yang memberikan arahan moral dan visi jangka panjang organisasi.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Ketua Umum Terpilih",
    role: "Ketua Umum (Periode 2026–2031)",
    division: "Pimpinan Eksekutif Pusat",
    bio: "Memimpin pelaksanaan mandat organisasi, representasi kelembagaan nasional, serta koordinasi seluruh pilar gerakan hasil pelantikan November 2026.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Sekretaris Jenderal",
    role: "Sekretaris Jenderal",
    division: "Tata Kelola & Kesekretariatan",
    bio: "Mengelola sistem administrasi organisasi, korespondensi kenegaraan, dokumentasi kelembagaan, serta sinkronisasi program lintas wilayah.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Bendahara Umum",
    role: "Bendahara Umum",
    division: "Akuntabilitas & Tata Kelola Sumber Daya",
    bio: "Menjaga transparansi pendanaan sosial, kepatuhan pelaporan, dan keberlanjutan program kemanusiaan lintas sektor.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Ketua Bidang I",
    role: "Ketua Bidang Dialog Lintas Agama",
    division: "Pilar Interfaith Dialogue",
    bio: "Merancang forum dialog pemuka agama, majelis kerukunan pemuda, dan inisiatif literasi toleransi di berbagai daerah.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Ketua Bidang II",
    role: "Ketua Bidang Aksi Kemanusiaan & Sosial",
    division: "Pilar Solidaritas Kemanusiaan",
    bio: "Mengoordinasikan bakti sosial, layanan kesehatan masyarakat, serta satuan tugas respons cepat kemanusiaan.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
  {
    name: "Ketua Bidang III",
    role: "Ketua Bidang Kebangsaan & Hubungan Kelembagaan",
    division: "Pilar Persatuan & Diplomasi",
    bio: "Membina kemitraan strategis dengan lembaga negara, pemerintah daerah, organisasi kemasyarakatan, serta jejaring internasional.",
    photoNote: "Potret Resmi • Rasio 3:4 (900 × 1200 px)",
  },
];

export type ArticleCategory =
  | "Audiensi Kenegaraan"
  | "Dialog Lintas Iman"
  | "Kemanusiaan";

export interface ArticleItem {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  location: string;
  readTime: string;
  featured?: boolean;
  excerpt: string;
  heroCaption: string;
  heroRatio: string;
  leadParagraph: string;
  bodyParagraphs: string[];
  quotes: {
    text: string;
    speaker: string;
    role: string;
  }[];
  highlights: string[];
  galleryFrames: {
    title: string;
    caption: string;
    ratio: string;
    resolution: string;
  }[];
}

export const ARTICLES: ArticleItem[] = [
  {
    slug: "pelantikan-pengurus-dan-audiensi-menko-polkam-november-2026",
    title:
      "Pelantikan Pengurus Rawinala Haridra Global & Audiensi Strategis Bersama Menko Polkam Jenderal (Purn.) Dudung Abdurachman (November 2026)",
    category: "Audiensi Kenegaraan",
    date: "November 2026",
    location: "Jakarta",
    readTime: "6 Menit Baca",
    featured: true,
    excerpt:
      "Menandai babak baru kiprah kelembagaan, jajaran pengurus Rawinala Haridra Global resmi dilantik dan melaksanakan audiensi strategis bersama Menko Polkam Jenderal (Purn.) Dudung Abdurachman guna memperkuat sinergi kerukunan nasional, dialog lintas agama, dan aksi kemanusiaan.",
    heroCaption:
      "Momen audiensi resmi delegasi pengurus Rawinala Haridra Global bersama Menko Polkam Jenderal (Purn.) Dudung Abdurachman di Jakarta, November 2026.",
    heroRatio: "16:9",
    leadParagraph:
      "Jakarta, November 2026 — Organisasi kemasyarakatan dan sosial Rawinala Haridra Global resmi mengukuhkan jajaran Dewan Pengurus periode terbaru melalui rangkaian pelantikan yang khidmat dan dilanjutkan dengan audiensi strategis bersama Menteri Koordinator Bidang Politik dan Keamanan RI, Jenderal (Purn.) Dudung Abdurachman.",
    bodyParagraphs: [
      "Pertemuan kenegaraan ini menjadi tonggak penting bagi konsolidasi visi Rawinala Haridra Global dalam menghadirkan kontribusi nyata bagi persatuan nasional. Di hadapan Menko Polkam, delegasi pengurus yang dipimpin langsung bersama pendiri Fu Kwet Khiong memaparkan mandat organisasi serta peta jalan kerja tiga pilar utama: Dialog Lintas Agama, Aksi dan Solidaritas Kemanusiaan, serta Penguatan Persatuan dan Kebangsaan.",
      "Dalam suasana dialog yang hangat, terbuka, dan konstruktif, Jenderal (Purn.) Dudung Abdurachman menyampaikan apresiasi mendalam terhadap hadirnya inisiatif masyarakat sipil yang secara konsisten menempatkan kerukunan antar-umat beragama dan kepedulian kemanusiaan sebagai fondasi ketahanan nasional. Beliau menekankan bahwa stabilitas politik dan keamanan Indonesia tidak hanya dibangun melalui instrumen negara, melainkan juga melalui modal sosial dan persaudaraan tulus di tengah masyarakat.",
      "Pendiri Rawinala Haridra Global, Fu Kwet Khiong, menegaskan bahwa pelantikan pengurus pada November 2026 bukanlah sekadar seremoni struktural, melainkan ikrar pelayanan jangka panjang. Nama Rawinala dan Haridra dimaknai sebagai pelita cahaya yang menghangatkan kemanusiaan dan menyatukan berbagai elemen bangsa dalam semangat gotong royong.",
      "Sebagai tindak lanjut dari audiensi strategis tersebut, Rawinala Haridra Global berkomitmen memperluas jangkauan forum dialog lintas tokoh agama di sejumlah wilayah strategis, memperkuat jejaring bakti sosial terpadu, serta membangun komunikasi kelembagaan yang berkesinambungan demi menjaga keutuhan Negara Kesatuan Republik Indonesia.",
    ],
    quotes: [
      {
        text: "Kehadiran organisasi masyarakat seperti Rawinala Haridra Global yang mengedepankan dialog lintas iman dan solidaritas kemanusiaan merupakan energi positif yang sangat dibutuhkan untuk merawat persatuan dan ketahanan nasional kita.",
        speaker: "Jenderal (Purn.) Dudung Abdurachman",
        role: "Apresiasi dalam Audiensi Strategis, Jakarta — November 2026",
      },
      {
        text: "Pelantikan pengurus ini adalah ikrar pengabdian. Kami ingin Rawinala Haridra Global menjadi rumah bersama yang menghadirkan terang bagi kemanusiaan dan kekuatan nyata bagi Indonesia.",
        speaker: "Fu Kwet Khiong",
        role: "Pendiri Rawinala Haridra Global",
      },
    ],
    highlights: [
      "Pengukuhan resmi struktur Dewan Pengurus Rawinala Haridra Global periode 2026–2031 pada November 2026.",
      "Penyampaian peta jalan tiga pilar gerakan: Dialog Lintas Agama, Aksi Kemanusiaan, dan Penguatan Persatuan Kebangsaan.",
      "Peneguhan komitmen sinergi masyarakat sipil bersama Kementerian Koordinator Bidang Politik dan Keamanan RI dalam merawat kerukunan nasional.",
      "Kesepakatan penguatan program kolaboratif lintas komunitas menuju ketahanan sosial yang inklusif di seluruh Nusantara.",
    ],
    galleryFrames: [
      {
        title: "Foto Bersama Audiensi Menko Polkam",
        caption:
          "Delegasi Dewan Pengurus Rawinala Haridra Global dan pendiri Fu Kwet Khiong berfoto bersama Jenderal (Purn.) Dudung Abdurachman.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
      {
        title: "Prosesi Pelantikan Pengurus November 2026",
        caption:
          "Pengucapan ikrar pengabdian dan penyematan pin kelembagaan jajaran pengurus pusat Rawinala Haridra Global.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
      {
        title: "Diskusi Strategis & Penyerahan Cenderamata",
        caption:
          "Suasana pemaparan program kerja dan penyerahan dokumen visi organisasi dalam sesi audiensi kenegaraan.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
    ],
  },
  {
    slug: "sarasehan-kebangsaan-dan-dialog-lintas-iman-nusantara",
    title:
      "Sarasehan Kebangsaan & Dialog Lintas Iman: Merajut Toleransi Substantif di Tengah Dinamika Global",
    category: "Dialog Lintas Iman",
    date: "Oktober 2026",
    location: "Jakarta Pusat",
    readTime: "4 Menit Baca",
    excerpt:
      "Para pemuka agama, akademisi, dan tokoh pemuda lintas latar belakang berkumpul dalam forum meja bundar Rawinala Haridra Global untuk merumuskan agenda kolaborasi sosial berbasis nilai kemanusiaan universal.",
    heroCaption:
      "Suasana forum dialog meja bundar lintas iman yang mempertemukan perwakilan tokoh agama dan cendekiawan muda.",
    heroRatio: "16:9",
    leadParagraph:
      "Jakarta — Rawinala Haridra Global menyelenggarakan Sarasehan Kebangsaan dan Dialog Lintas Iman bertema 'Merajut Toleransi Substantif di Tengah Dinamika Global' dengan menghadirkan para pemuka agama, cendekiawan, serta pegiat komunitas pemuda.",
    bodyParagraphs: [
      "Diskusi menekankan pentingnya membawa semangat toleransi dari ruang wacana menuju ruang kerja bersama. Para peserta sepakat bahwa tantangan sosial modern—mulai dari kesenjangan ekonomi hingga polarisasi digital—memerlukan jawaban kolektif lintas keyakinan.",
      "Dalam forum ini, Rawinala Haridra Global juga memperkenalkan inisiatif Duta Harmoni Muda yang mempertemukan mahasiswa dan profesional muda lintas agama untuk merancang proyek pengabdian masyarakat secara bersama-sama.",
    ],
    quotes: [
      {
        text: "Toleransi yang matang lahir ketika kita tidak berhenti pada saling mengenal, melainkan melangkah bersama untuk melayani sesama yang membutuhkan.",
        speaker: "Perwakilan Bidang Dialog Lintas Agama",
        role: "Rawinala Haridra Global",
      },
    ],
    highlights: [
      "Dihadiri perwakilan pemuka lintas agama, akademisi, dan tokoh komunitas muda.",
      "Lahirnya deklarasi kolaborasi kerja kemanusiaan lintas rumah ibadah.",
      "Peluncuran silabus awal program Kaderisasi Duta Harmoni Muda.",
    ],
    galleryFrames: [
      {
        title: "Sesi Diskusi Panel Lintas Iman",
        caption:
          "Pemaparan pandangan kebangsaan oleh para narasumber lintas tradisi keagamaan.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
      {
        title: "Foto Bersama Peserta Sarasehan",
        caption:
          "Kebersamaan hangat seluruh delegasi setelah penutupan sarasehan.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
    ],
  },
  {
    slug: "gerakan-solidaritas-pangan-dan-layanan-kesehatan-masyarakat",
    title:
      "Gerakan Solidaritas Pangan & Layanan Kesehatan Gratis bagi Masyarakat Prasejahtera",
    category: "Kemanusiaan",
    date: "September 2026",
    location: "Jabodetabek & Jawa Barat",
    readTime: "4 Menit Baca",
    excerpt:
      "Relawan kemanusiaan dan tim medis mitra Rawinala Haridra Global menyalurkan ribuan paket pangan bergizi sekaligus membuka layanan pemeriksaan kesehatan terpadu secara inklusif.",
    heroCaption:
      "Relawan Rawinala Haridra Global bersama warga dalam kegiatan bakti sosial pangan dan layanan kesehatan keliling.",
    heroRatio: "16:9",
    leadParagraph:
      "Melalui pilar Aksi dan Solidaritas Kemanusiaan, Rawinala Haridra Global kembali menggelar rangkaian bakti sosial terpadu berupa distribusi paket ketahanan pangan dan pemeriksaan kesehatan gratis bagi warga lansia, pekerja sektor informal, dan keluarga prasejahtera.",
    bodyParagraphs: [
      "Kegiatan ini melibatkan puluhan relawan lintas komunitas serta tenaga dokter dan perawat sukarela. Setiap titik layanan diselenggarakan dengan mengedepankan martabat penerima manfaat melalui sistem pendataan tertib dan pelayanan ramah keluarga.",
      "Program solidaritas pangan ini merupakan wujud nyata prinsip organisasi bahwa bantuan kemanusiaan harus menjangkau siapa pun yang membutuhkan tanpa sekat perbedaan.",
    ],
    quotes: [
      {
        text: "Bakti sosial bukan sekadar menyerahkan bantuan, melainkan memastikan setiap saudara kita merasakan kehadiran dan kepedulian sesama anak bangsa.",
        speaker: "Tim Aksi Kemanusiaan",
        role: "Rawinala Haridra Global",
      },
    ],
    highlights: [
      "Penyaluran paket sembako dan nutrisi keluarga lintas wilayah sasaran.",
      "Pemeriksaan kesehatan umum, pengecekan tekanan darah, serta konsultasi medis gratis.",
      "Kolaborasi relawan lintas komunitas dan tenaga kesehatan sukarela.",
    ],
    galleryFrames: [
      {
        title: "Layanan Pemeriksaan Kesehatan",
        caption:
          "Tenaga medis relawan melayani pemeriksaan kesehatan warga lansia.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
      {
        title: "Distribusi Paket Pangan Bergizi",
        caption:
          "Penyerahan paket ketahanan pangan secara langsung kepada keluarga penerima manfaat.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
    ],
  },
  {
    slug: "konsolidasi-kelembagaan-dan-peta-jalan-kebangsaan-2026-2031",
    title:
      "Konsolidasi Kelembagaan: Merumuskan Peta Jalan Pengabdian Rawinala Haridra Global 2026–2031",
    category: "Audiensi Kenegaraan",
    date: "Agustus 2026",
    location: "Jakarta",
    readTime: "5 Menit Baca",
    excerpt:
      "Menjelang pelantikan pengurus pusat, para inisiator dan pengurus inti menyepakati standar tata kelola transparan, penguatan diplomasi kebangsaan, dan perluasan jejaring daerah.",
    heroCaption:
      "Rapat pleno konsolidasi kelembagaan penyusunan peta jalan strategis lima tahunan organisasi.",
    heroRatio: "16:9",
    leadParagraph:
      "Sebagai persiapan menuju babak kelembagaan baru pada akhir 2026, pendiri Fu Kwet Khiong bersama jajaran perumus organisasi menggelar rapat kerja konsolidasi untuk memantapkan arah kebijakan Rawinala Haridra Global periode 2026–2031.",
    bodyParagraphs: [
      "Rapat konsolidasi memfokuskan pembahasan pada tiga hal mendasar: penguatan tata kelola organisasi yang akuntabel, standarisasi protokol audiensi kelembagaan, serta pengembangan model kolaborasi berkelanjutan dengan mitra masyarakat sipil di tingkat nasional maupun internasional.",
      "Dokumen peta jalan lima tahunan ini selanjutnya menjadi rujukan utama dalam pelaksanaan seluruh program di bawah tiga pilar gerakan organisasi.",
    ],
    quotes: [
      {
        text: "Organisasi sosial yang ingin memberi dampak lintas generasi harus dibangun di atas fondasi integritas, keterbukaan, dan disiplin kelembagaan.",
        speaker: "Fu Kwet Khiong",
        role: "Pendiri Rawinala Haridra Global",
      },
    ],
    highlights: [
      "Penetapan arsitektur tiga pilar strategis periode 2026–2031.",
      "Pengesahan pedoman tata kelola dan transparansi pelaporan sosial.",
      "Persiapan agenda pelantikan pengurus dan audiensi kelembagaan negara.",
    ],
    galleryFrames: [
      {
        title: "Rapat Kerja Penyusunan Peta Jalan",
        caption:
          "Sesi perumusan program strategis bersama pendiri dan tim perumus organisasi.",
        ratio: "16:10",
        resolution: "1600 × 1000 px",
      },
    ],
  },
];

export type GalleryAlbum =
  | "Pelantikan Pengurus Nov 2026"
  | "Audiensi Menko Polkam"
  | "Forum Dialog Lintas Iman";

export interface GalleryItem {
  id: string;
  album: GalleryAlbum;
  title: string;
  date: string;
  location: string;
  caption: string;
  ratio: "16:10" | "4:3" | "3:4" | "1:1";
  resolution: string;
  tone: "navy" | "sand" | "terracotta";
}

export const GALLERY_ALBUMS: ("Semua Album" | GalleryAlbum)[] = [
  "Semua Album",
  "Pelantikan Pengurus Nov 2026",
  "Audiensi Menko Polkam",
  "Forum Dialog Lintas Iman",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    album: "Audiensi Menko Polkam",
    title: "Audiensi Resmi Bersama Menko Polkam Jenderal (Purn.) Dudung Abdurachman",
    date: "November 2026",
    location: "Kemenko Polkam RI, Jakarta",
    caption:
      "Foto resmi delegasi pengurus pusat Rawinala Haridra Global bersama Menteri Koordinator Bidang Politik dan Keamanan RI dalam sesi audiensi strategis.",
    ratio: "16:10",
    resolution: "1920 × 1200 px",
    tone: "navy",
  },
  {
    id: "gal-02",
    album: "Pelantikan Pengurus Nov 2026",
    title: "Prosesi Pengukuhan Dewan Pengurus Rawinala Haridra Global",
    date: "November 2026",
    location: "Jakarta",
    caption:
      "Momen khidmat pelantikan jajaran Dewan Pengurus periode 2026–2031 sebagai peneguhan komitmen pelayanan kemanusiaan dan kebangsaan.",
    ratio: "4:3",
    resolution: "1600 × 1200 px",
    tone: "sand",
  },
  {
    id: "gal-03",
    album: "Audiensi Menko Polkam",
    title: "Pemaparan Visi & Tiga Pilar Gerakan oleh Pendiri Fu Kwet Khiong",
    date: "November 2026",
    location: "Kemenko Polkam RI, Jakarta",
    caption:
      "Sesi dialog mendalam mengenai sinergi kerukunan nasional, moderasi lintas agama, dan solidaritas kemanusiaan.",
    ratio: "4:3",
    resolution: "1600 × 1200 px",
    tone: "navy",
  },
  {
    id: "gal-04",
    album: "Pelantikan Pengurus Nov 2026",
    title: "Sambutan Pendiri & Penyerahan Pataka Organisasi",
    date: "November 2026",
    location: "Jakarta",
    caption:
      "Pendiri Fu Kwet Khiong menyampaikan amanat manifesto pendirian organisasi di hadapan pengurus, tokoh masyarakat, dan tamu undangan.",
    ratio: "3:4",
    resolution: "900 × 1200 px",
    tone: "terracotta",
  },
  {
    id: "gal-05",
    album: "Forum Dialog Lintas Iman",
    title: "Meja Bundar Tokoh Agama & Cendekiawan Nusantara",
    date: "Oktober 2026",
    location: "Jakarta Pusat",
    caption:
      "Suasana dialog terbuka lintas tradisi keagamaan membahas peran masyarakat sipil dalam merawat harmoni sosial.",
    ratio: "16:10",
    resolution: "1920 × 1200 px",
    tone: "sand",
  },
  {
    id: "gal-06",
    album: "Pelantikan Pengurus Nov 2026",
    title: "Potret Kebersamaan Seluruh Jajaran Pengurus & Tamu Kehormatan",
    date: "November 2026",
    location: "Jakarta",
    caption:
      "Dokumentasi resmi seluruh pengurus terlantik bersama jajaran penasihat dan mitra organisasi.",
    ratio: "16:10",
    resolution: "1920 × 1200 px",
    tone: "navy",
  },
  {
    id: "gal-07",
    album: "Forum Dialog Lintas Iman",
    title: "Silaturahmi Pemuda Lintas Iman & Duta Harmoni",
    date: "Oktober 2026",
    location: "Jakarta",
    caption:
      "Generasi muda lintas agama berdiskusi merancang agenda bakti sosial bersama sebagai implementasi toleransi nyata.",
    ratio: "4:3",
    resolution: "1600 × 1200 px",
    tone: "terracotta",
  },
  {
    id: "gal-08",
    album: "Audiensi Menko Polkam",
    title: "Penyerahan Dokumen Cetak Biru & Cenderamata Kelembagaan",
    date: "November 2026",
    location: "Kemenko Polkam RI, Jakarta",
    caption:
      "Simbol komitmen kemitraan strategis antara Rawinala Haridra Global dan pemerintah dalam menjaga persatuan NKRI.",
    ratio: "4:3",
    resolution: "1600 × 1200 px",
    tone: "sand",
  },
  {
    id: "gal-09",
    album: "Forum Dialog Lintas Iman",
    title: "Kunjungan Persaudaraan ke Tokoh Masyarakat & Rumah Ibadah",
    date: "September 2026",
    location: "Jawa Barat",
    caption:
      "Rangkaian silaturahmi pengurus dalam mempererat jalinan persaudaraan antar-komunitas di tingkat akar rumput.",
    ratio: "3:4",
    resolution: "900 × 1200 px",
    tone: "navy",
  },
];

export interface InstagramCard {
  id: string;
  handle: string;
  accountRole: string;
  date: string;
  title: string;
  caption: string;
  tags: string[];
  ratio: "4:5" | "1:1";
  resolution: string;
  postUrl: string;
}

export const INSTAGRAM_POSTS: InstagramCard[] = [
  {
    id: "ig-1",
    handle: "@rawinalaharidraglobal",
    accountRole: "Akun Resmi Organisasi",
    date: "November 2026",
    title: "Audiensi Strategis Bersama Menko Polkam RI",
    caption:
      "Sebuah kehormatan bagi jajaran pengurus Rawinala Haridra Global diterima langsung oleh Menko Polkam Jenderal (Purn.) Dudung Abdurachman. Sinergi untuk kerukunan dan keutuhan Indonesia.",
    tags: ["#RawinalaHaridraGlobal", "#PersatuanIndonesia", "#AudiensiKenegaraan"],
    ratio: "4:5",
    resolution: "1080 × 1350 px",
    postUrl: "https://instagram.com",
  },
  {
    id: "ig-2",
    handle: "@rawinalaharidraglobal",
    accountRole: "Akun Resmi Organisasi",
    date: "November 2026",
    title: "Pelantikan Dewan Pengurus Periode 2026–2031",
    caption:
      "Melangkah dengan satu tekad: Terang Bagi Kemanusiaan, Kekuatan Bagi Indonesia. Selamat mengemban amanah bagi seluruh pengurus yang resmi dilantik.",
    tags: ["#PelantikanPengurus", "#TerangBagiKemanusiaan", "#IndonesiaRukun"],
    ratio: "4:5",
    resolution: "1080 × 1350 px",
    postUrl: "https://instagram.com",
  },
  {
    id: "ig-3",
    handle: "@pengurus.rhg",
    accountRole: "Sorotan Dokumentasi Pengurus",
    date: "Oktober 2026",
    title: "Catatan Lapangan: Dialog Lintas Iman Nusantara",
    caption:
      "Ketika hati terbuka dan duduk sejajar, perbedaan menjelma menjadi kekuatan. Cuplikan hangat sarasehan tokoh lintas agama di Jakarta.",
    tags: ["#DialogLintasAgama", "#HarmoniNusantara", "#ToleransiSubstantif"],
    ratio: "4:5",
    resolution: "1080 × 1350 px",
    postUrl: "https://instagram.com",
  },
  {
    id: "ig-4",
    handle: "@rawinalaharidraglobal",
    accountRole: "Akun Resmi Organisasi",
    date: "September 2026",
    title: "Aksi Solidaritas Kemanusiaan Tanpa Sekat",
    caption:
      "Bakti sosial pangan dan pemeriksaan kesehatan gratis bersama para relawan. Terima kasih kepada seluruh mitra kebaikan yang terus menyalakan pelita kepedulian.",
    tags: ["#AksiKemanusiaan", "#SolidaritasSosial", "#HaridraPeduli"],
    ratio: "4:5",
    resolution: "1080 × 1350 px",
    postUrl: "https://instagram.com",
  },
];
