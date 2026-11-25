/*
  DAFTAR MATERI LAB
  ==========================
  Halaman utama dibangun dari daftar ini. Untuk menambah materi PDF atau sample,
  cukup ubah file ini (bisa langsung lewat GitHub: buka file > ikon pensil > Commit).

  Struktur folder yang disarankan per section:
    /<slug>/index.html        lab interaktif
    /<slug>/materi/<file>.pdf materi PDF
    /<slug>/sample/<file>.zip file sample (kecil, < 25 MB per file)

  Setiap section:
    slug      nama folder (huruf kecil, pakai tanda -)
    title     nama section
    status    'ready' (lab sudah ada) atau 'soon' (belum ada)
    summary   satu kalimat untuk kartu
    detail    penjelasan singkat di panel
    facts     angka-angka kecil [nilai, keterangan]
    lab       alamat lab, atau null jika belum ada
    slides    alamat presentasi (presentasi/?d=<slug>), atau null
    pdf       daftar materi PDF:   { name: 'Judul', href: 'slug/materi/file.pdf', size: '2,1 MB' }
    sample    daftar file sample:  { name: 'Judul', href: '...', size: '...', note: 'Password ZIP: infected' }
              href boleh berupa link luar (GitHub Release, Google Drive) untuk file besar.
*/
window.LAB_SECTIONS = [
  {
    slug: 'cti-apt-profiling',
    title: 'Cyber Threat Intelligence',
    short: 'CTI',
    status: 'ready',
    summary: 'Membaca laporan APT dan menentukan grup mana yang relevan bagi organisasi.',
    detail: 'Sepuluh profil grup APT dari laporan open source. Untuk setiap grup, peserta memutuskan Related, Partial, atau Unrelated bagi organisasi peserta dan menuliskan alasannya. Ringkasan prioritas terisi otomatis dan bisa diunduh.',
    facts: [['10', 'grup APT'], ['17', 'sumber laporan']],
    lab: 'cti-apt-profiling/',
    slides: 'presentasi/?d=cti-apt-profiling',
    slidesCount: 121,
    pdf: [
      { name: 'Cyber Threat Intelligence (versi presentasi)', href: 'cti-apt-profiling/materi/Cyber-Threat-Intelligence.pdf', size: '1,2 MB · 121 halaman' }
    ],
    sample: []
  },
  {
    slug: 'threat-hunting-lab',
    title: 'Threat Hunting',
    short: 'Threat Hunting',
    status: 'ready',
    summary: 'Mencari jejak penyerang di log firewall, salinan bukti, dan event log Windows.',
    detail: 'Satu kasus di jaringan fiktif Nusantara: log firewall 30 hari, salinan bukti lima host untuk dipindai dengan Loki-RS, dan event log Windows untuk Hayabusa. Peserta menyusun IOC dari laporan APT, memperbaiki aturan Sigma, lalu menulis laporan singkat.',
    facts: [['3', 'alat: Firewall, Loki-RS, Hayabusa'], ['4', 'bagian tugas']],
    lab: 'threat-hunting-lab/',
    slides: 'presentasi/?d=threat-hunting-lab',
    slidesCount: 49,
    pdf: [
      { name: 'Cyber Threat Hunting', href: 'threat-hunting-lab/materi/Threat-Hunting.pdf', size: '0,4 MB · 49 halaman' }
    ],
    sample: []
  },
  {
    slug: 'malware-analysis',
    title: 'Malware Analysis',
    short: 'Malware Analysis',
    status: 'ready',
    summary: 'Triage, analisis statis, skrip, dinamis, dan jaringan, berurutan sesuai slide.',
    detail: 'Latihan dari Section 3 sampai Section 8: triage dan analisis statis, analisis kode dan skrip, analisis dinamis, analisis jaringan, dan latihan akhir. Setiap pertanyaan punya jawaban pasti yang diperiksa otomatis.',
    facts: [['36', 'latihan'], ['292', 'soal']],
    lab: 'malware-analysis/',
    slides: 'presentasi/?d=malware-analysis',
    slidesCount: 95,
    pdf: [
      { name: 'Malware Analysis: Teori', href: 'malware-analysis/materi/Malware-Analysis-Teori.pdf', size: '1,5 MB · 95 halaman' }
    ],
    sample: []
  },
  {
    slug: 'digital-forensic',
    title: 'Digital Forensic',
    short: 'Digital Forensic',
    status: 'ready',
    summary: 'Memeriksa barang bukti perkara fiktif Operasi KABUT GELAP dengan Autopsy.',
    detail: 'Sebelas barang bukti dari satu perkara fiktif, mulai dari flashdisk pelaku phishing, laptop korban BEC, sampai ujian akhir di file server. Setiap barang bukti punya skenario, pertanyaan penyidik, dan tingkat kesulitan.',
    facts: [['11', 'barang bukti'], ['Autopsy', 'alat utama']],
    lab: 'digital-forensic/',
    slides: 'presentasi/?d=digital-forensic',
    slidesCount: 402,
    pdf: [
      { name: 'Digital Forensics', href: 'digital-forensic/materi/Digital-Forensics.pdf', size: '1,7 MB · 402 halaman' }
    ],
    sample: []
  },
  {
    slug: 'phishing',
    title: 'Phishing',
    short: 'Phishing',
    status: 'soon',
    summary: 'Analisis email phishing, header, tautan, dan lampiran.',
    detail: 'Section ini sedang disiapkan. Lab, materi PDF, dan sample akan muncul di sini begitu tersedia.',
    facts: [],
    lab: null,
    slides: null,
    pdf: [],
    sample: []
  },
  {
    slug: 'incident-response',
    title: 'Incident Response',
    short: 'Incident Response',
    status: 'soon',
    summary: 'Menangani insiden dari deteksi, penahanan, sampai pemulihan dan laporan.',
    detail: 'Section ini sedang disiapkan. Lab, materi PDF, dan sample akan muncul di sini begitu tersedia.',
    facts: [],
    lab: null,
    slides: null,
    pdf: [],
    sample: []
  }
];
