'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'Jika seorang anak memiliki 50 rupiah dan memberikan 15 rupiah, berapa rupiahkah yang masih tinggal padanya?','Berapa km-kah yang dapat ditempuh oleh kereta api dalam waktu 7 jam. Jika kecepatannya 40km/jam?','15 peti buah-buahan beratnya 250kg dan setiap peti kosong beratnya 3kg. berapakah berat buah-buahan itu?','Seseorang mempunyai persediaan rumput yang cukup untuk 7 ekor kuda selama 78 hari. Berapa harikah persediaan itu cukup untuk 21 ekor kuda?','3 batang coklat harganya Rp. 5,- Berapa batangkah yang dapat kita beli dengan Rp. 50,-?','Seseorang dapat berjalan 1,75m dalam waktu 1/4 detik. Berapa meterkah yang dapat ia tempuh dalam waktu 10 detik?','Jika sebuah batu terletak 15 m , di sebelah selatan dari sebatang pohon dan pohon itu berada 30 m di sebelah selatan dari sebuah rumah, berapa meterkah jarak antara batu dan rumah itu?','Jika 4 1/2 m bahan sandang harganya Rp. 90,-, berapa rupiahkah harga 2 1/2 m?','7 orang dapat menyelesaikan suatu pekerjaan dalam 6 hari. Berapa orangkah yang diperlukan untuk menyelesaikan pekerjaan itu dalam setengah hari?','Karena dipanaskan kawat yang panjangnya 48 cm akan mengembang menjadi 52 cm. Setelah pemanasan, berapakan panjangnya kawat yang berukuran 72 cm?','Suatu pabrik dapat menghasilkan 304 batang pensil dalam waktu 8 jam. Berapa batangkah yang dihasilkan dalam waktu setengah jam?','Untuk suatu campuran diperlukan 2 bagian perak dan 3 bagian timah. Berapa gramkah perak yang diperlukan untuk mendapatkan campuran itu yang beratnya 15 gram?','Untuk setiap Rp. 3,- yang dimiliki Sidin, Hamid memiliki Rp. 5,- Jika mereka bersama mempunyai Rp. 120,- berapa rupiahkah yang dimiliki Hamid?','Mesin A menenun 60m kain, sedangkan mesin B menenun 40m. Berapa meterkah yang ditenun mesin A, jika mesin B menenun 60m?','Seseorang membelikan 1/10 dari uangnya untuk perangko dan 4 kali jumlah itu untuk alat tulis. sisa uangnya masih Rp.60,-. Berapa rupiahkan uangnya semuala?','Di dalam dua peti terdapat 43 buah piring. Di dalam peti yang satu terdapat 9 buah piring lebih banyak daripada di dalam peti yang lain. Berapakah jumlah piring terdapat di dalam peti yang lebih kecil?','Suatu lembaran kain yang panjangnya 60 cm harus di bagi sedemikan rupa sehingga panjangnya satu bagian ialah 2/3 dari bagian yang lain. Berapakah panjangnya bagian yang terpendek?','Suatu perusahaan meng export 3/4 dari hasil produksinya dan menjual 4/5 dari sisa itu di dalam negeri. Berapa % kah hasil produksi yang masih tinggal?','Jika suatu botol berisi anggur hanya 7/8 bagian dan harganya ialah Rp. 84,- Berapakah harga anggur itu jika botol itu hanya terisi 1/2 penuh?','Di dalam suatu keluarga setiap anak perempuan mempunyai jumlah saudara laki-laki yang sama dengan jumlah saudara perempuan dan setiap anak laki-laki mempunyai dua kali lebih banyak saudara perempuan dari pada saudara laki-laki. Berapa anak laki-lakikah yang terdapat dalam keluarga tersebut?'
    ];
    
    const subtest_kunci = [
      '35', '028', '025', '26', '03', '07', '45', '05', '48', '78', '19', '6', '57', '09', '012', '17', '24', '5', '48', '9'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'nopilgan',
        paket_soal: 'subtest_5_ist',
        pertanyaan: row,
        kunci_jawaban: subtest_kunci[index],
        pilihan: '{}'
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
