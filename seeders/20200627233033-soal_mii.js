'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const pertanyaan1 = [
      'Saya senang bermain dengan menggunakan kata-kata, misalnya membuat pantun/sajak',
      'Saya suka membaca apapun, misal: buku pelajaran, majalah, surat kabar',
      'Saya dapat mengungkapkan isi hati saya dengan menggunakan kata-kata apapun tulisan',
      'Saya dapat menggunakan kata-kata kiasan/perumpamaan saat dalam perbincangan dengan orang lain',
      'Saya suka mengerjakan TTS (teka-teki silang) atau permainan melengkapi kalimat/kata',
      'Orang lain sering meminta saya untuk menjelaskan tentang sesuatu hal',
      'Di sekolah, saya menyukai pelajaran bahasa, sejarah atau ilmu-ilmu sosial',
      'Saya dapat menunjukkan siapa diri saya saat sedang beragumentasi/berdebat',
      'Saya suka untuk membicarakan tentang suatu permasalahan, menjelaskan sesuatu atau menjawab pertanyaan',
      'Saya dengan mudah dapat menyerap informasi dari radio, tape, atau televisi'
    ];

    const pertanyaan2 = [
      'Saya suka aktivitas yang melibatkan angka, termasuk hitung-berhitung',
      'Saya tertarik terhadap berita-berita tentang penemuan-penemuan ilmiah baru',
      'Saya dapat dengan mudah membuat seimbang/cocok hitungan pemasukan dan pengeluaran keuangan',
      'Saya dapat dengan mudah membuat rencana detil tentang sebuah perjalanan liburan atau hitung-hitungan sebuah usaha/bisnis',
      'Saya sangat tertantang untuk merangsang otak saya dengan permainan puzzle atau sejenisnya yang memerlukan pemikiran logis',
      'Saya dapat menemukan hal yang tidak logis/masuk akal saat orang lain bercerita atau melakukan sesuatu',
      'Matematika dan ilmu alam adalah pelajaran favorit saya di sekolah',
      'Saya dapat menemukan penjelasan spesifik/khusus yang dapat mendukung pendapat-pendapat saya yang bersifat umum',
      'Saya dapat memecahkan suatu masalah dengan sistematis/urut atau dengan tahapan langkah demi langkah',
      'Saya dapat membuat kategori, kelompok atau menghitung sesuatu yang memiliki hubungan yang relevan satu sama lain'
    ];

    const pertanyaan3 = [
      'Saya sangat menghargai karya seni kriya, seperti patung, atau kerajinan lainnya',
      'Saya berusaha merekam kejadian-kejadian dengan kamera atau alat perekam lainnya',
      'Saya menggambar sambil berkhayal ketika mencatat sesuatu atau memikirkan sesuatu',
      'Saya dengan mudah dapat membaca peta atau arah penunjuk jalan',
      'Saya merasa nyaman memainkan game seperti puzzle/mencari jalan keluar dari suatu tempat',
      'Saya mampu mengambil bagian dari sesuatu bentuk dan meletakkannya kembali seperti bentuk semula',
      'Di sekolah saya menyukai pelajaran geometri/bentuk-bentuk seperti segi tiga,dan sebagainya, dan aljabar, seperti persamaan',
      'Saya sering membuat catatan dengan dilengkapi diagram dan gambar',
      'Saya dapat membayangkan suatu benda dari berbagai arah/sudut pandang',
      'Saya menyukai bacaan-bacaan yang memiliki ilustrasi gambar'
    ];

    const pertanyaan4 = [
      'Saya dapat memainkan suatu alat musik',
      'Saya dapat menemukan kunci sebuah nada lagu',
      'Biasanya, saya dapat mengingat tinggi rendahnya nada setelah mendengarkannya beberapa waktu',
      'Saya sering mendengarkan musik di rumah ataupun tempat lain',
      'Saya mampu menghitung ketukan-ketukan suatu lagu',
      'Saya mampu membedakan berbagai alat musik',
      'Tema-tema musik/jingle-jingle iklan yang menggunakan musik sering muncul di kepala saya',
      'Saya tidak mampu membayangkan jika hidup tanpa musik',
      'Saya sering bersiul atau membunyikan nada-nada',
      'Saya menyukai aktivitas/belajar yang diiringi dengan musik tertentu'
    ];

    const pertanyaan5 = [
      'Saya berpartisipasi dalam kegiatan olah raga atau aktivitas-aktivitas yang membutuhkan latihan fisik',
      'Saya cukup cekatan melakukan gerakan badan sendirian',
      'Saya suka menyelesaikan sesuatu hal yang melibatkan aktivitas fisik, seperti berjalan atau berlari',
      'Saya bisa menari di atas lantai dengan tanpa berpikir lagi',
      'Saya menyukai perjalanan dengan mobil/kendaraan lain yang penuh sensasi dalam sebuah pertandingan yang menyenangkan',
      'Saya harus menyentuh secara fisik sesuatu benda agar lebih mudah memahaminya',
      'Aktivitas/pelajaran di sekolah yang saya sukai adalah membuat ketrampilan/kerajinan tangan',
      'Saya menggunakan bahasa tubuh, misal : tangan, ekspresi wajah, dll untuk mengungkapkan sesuatu',
      'Saya menyuka permainan yang menggunakan aktivitas fisik yang menantang bersama teman-teman/anak-anak',
      'Saya tertantang untuk belajar sesuatu yang baru dengan menggunakan tangan, daripada membaca atau melihat video'
    ];

    const pertanyaan6 = [
      'Saya merasa nyaman beraktivitas bersama orang lain atau menjadi bagian dari suatu kelompok',
      'Saya merasa bangga ketika membimbing/mengajari sesuatu kepada orang lain',
      'Teman-teman membutuhkan nasihat saya',
      'Saya menyukai olah raga dalam tim, misal: basket/sepak bola, daripada olah raga sendirian, seperti renang',
      'Saya menyukai permainan yang melibatkan orang lain',
      'Saya menyukai aktivitas pesta bersama teman-teman daripada di rumah sendiri melihat televisi',
      'Saya memiliki sedikit teman yang tertutup',
      'Saya mampu berkomunikasi dengan baik pada orang lain',
      'Saya tidak memiliki keraguan sedikitpun ketika harus memimpin orang lain atau menunjukkan cara melakukan sesuatu hal',
      'Saya membicarakan masalah dengan orang lain daripada mencoba untuk menyelesaikannya sendiri'
    ];

    const pertanyaan7 = [
      'Saya menuliskan perasaan hati saya dalam sebuah buku harian/catatan pribadi',
      'Saya sering diam dan merenungkan berbagai masalah dalam hidup saya',
      'Saya suka menetapkan tujuan/arah hidup dan langkah-langkah yang harus saya tempuh',
      'Saya adalah seorang pemikir, dan saya tahu apa yang ada dalam pikiran saya dan bagaimana menciptakannya',
      'Saya mempunyai hobby atau minat yang tidak saya ceritakan kepada orang lain',
      'Saya suka memancing atau berjalan santai sendirian, karena saya menyukai kegiatan yang saya lakukan sendirian',
      'Saya suka berlibur di atas puncak bukit sendirian daripada di tempat yang penuh keramaian',
      'Saya memahami kelebihan dan kelemahan saya',
      'Saya menghadiri kursus/pelatihan pengembangan diri atau berbagai konsultasi untuk mempelajari diri saya sendiri',
      'Saya bekerja untuk diri saya sendiri atau merenungkan sesuatu yang saya lakukan sendiri'
    ];

    const pertanyaan8 = [
      'Saya menyukai dan menjaga binatang piaraan',
      'Saya dapat mengenal berbagai jenis pohon, bunga dan tumbuh-tumbuhan',
      'Saya tertarik dengan cara kerja tubuh manusia dan organ-organ bagian dalam',
      'Saya mengenali jejak, sarang dan kehidupan binatang liar dalam perjalanan dan dapat mengenal tanda-tanda yang dimilikinya',
      'Saya dapat memimpikan diri saya kalau bekerja sebagai petani atau nelayan',
      'Saya suka kegiatan berkebun',
      'Saya mengerti dan memahami tentang isu-isu masalah lingkungan global',
      'Saya tertarik dengan dunia astronomi/perbintangan dan asal mula serta proses evolusi kehidupan',
      'Saya tertarik pada isu-isu sosial, psikologi dan proses motivasi manusia',
      'Saya memahami jika konservasi sumber daya alam dan pembangunan berkelanjutan merupakan dua masalah terbesar saat ini'
    ];

    let soal = [];

    pertanyaan1.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_1_verb_ling",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan2.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_2_log_math",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan3.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_3_spat",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan4.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_4_mus",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan5.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_5_bod_kin",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan6.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_6_inter",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan7.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_7_intra",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    pertanyaan8.forEach((row, index) => {
      soal.push({
        nomor: index+1,
        paket_soal: "bagian_8_nat",
        pilihan: "ya|tidak",
        pertanyaan: row
      });
    });

    return queryInterface.bulkInsert('soal_mii', soal, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_mii', null, {});
  }
};
