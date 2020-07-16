'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_1_pertanyaan = [
      'Pengaruh seseorang terhadap orang lain seharusnya bergantung pada', 'Lawannya "hemat" adalah', '... tidak termasuk cuaca', 'Lawannya "setia" ialah', 'Seekor kuda selalu mempunyai', 'Seorang paman .... lebih tua dari pada kemenakannya', 'Pada jumlah yang sama, nilai kalori yang tertinggi terdapat pada', 'Pada suatu pertandingan selalu terdapat', 'Suatu pernyataan yang belum dipastikan dikatakan sebagai pernyataan yang', 'Pada sepatu selalu terdapat', 'Suatu .... tidak menyangkut persoalan pencegahan kecelakaan', 'Mata uang dari Rp. 50,- garis tengahnya ialah .... mm.', 'Seseorang yang bersikap menyangsikan setiap kemajuan ialah seorang yang', 'Lawannya "tidak pernah" ialah', 'Jarak antara Surabaya - Jakarta ialah kira-kira .... km.', 'Untuk membuat nada yang rendah dan mendalam, kita memerlukan banyak', 'Ayah .... lebih berpengalaman dari pada anaknya', 'Di antara kota-kota berikut ini, maka kota .... letaknya paling selatan.', 'Jika kita mengetahui jumlah presentase nomor-nomor lotere yang tidak menang maka kita dapat menghitung', 'Seorang anak yang berumur 10 tahun tingginya rata-rata .... cm.'
    ];
    
    const subtest_1_pilgan = [
      '{"a":"kekuasaan","b":"bujukan","c":"kekayaan","d":"keberanian","e":"kewibawaan"}', 
      '{"a":"murah","b":"kikir","c":"boros","d":"bernilai","e":"kaya"}', 
      '{"a":"angin puyuh","b":"halilintar","c":"salju","d":"gempa bumi","e":"kabut"}', 
      '{"a":"cinta","b":"benci","c":"persahabatan","d":"khianat","e":"permusuhan"}', 
      '{"a":"kandang","b":"ladam","c":"pelana","d":"kuku","e":"surai"}', '{"a":"jarang","b":"biasanya","c":"selalu","d":"tak pernah","e":"kadang-kadang"}', '{"a":"ikan","b":"daging","c":"lemak","d":"tahu","e":"sayuran"}', '{"a":"lawan","b":"wasit","c":"penonton","d":"sorak","e":"kemenangan"}', '{"a":"paradoks","b":"tergesa-gesa","c":"mempunyai arti rangkap","d":"menyesatkan","e":"hipotesis"}', '{"a":"kulit","b":"sol","c":"tali sepatu","d":"gesper","e":"lidah"}', '{"a":"lampu lalu lintas","b":"kacamata pelindung","c":"kotak PPPK","d":"tanda peringatan","e":"palang kereta api"}', '{"a":"17","b":"29","c":"25","d":"24","e":"15"}', '{"a":"demokratis","b":"radikal","c":"liberal","d":"konservatif","e":"anarkis"}', '{"a":"sering","b":"kadang-kadang","c":"jarang","d":"kerapkali","e":"selalu"}', '{"a":"650","b":"1000","c":"800","d":"600","e":"950"}', '{"a":"kekuatan","b":"peranan","c":"ayunan","d":"berat","e":"suara"}', '{"a":"selalu","b":"biasanya","c":"jauh ","d":"jarang","e":"pada dasarnya"}', '{"a":"Jakarta","b":"Bandung","c":"Cirebon","d":"Semarang","e":"Surabaya"}', '{"a":"jumlah nomor yang menang","b":"pajak lotere","c":"kemungkinan menang","d":"jumlah pengikut","e":"tinggi keuntungan"}', '{"a":"150","b":"130","c":"110","d":"105","e":"115"}'
    ];
    
    const subtest_1_kunci = [
      'e', 'c', 'd', 'd', 'e', 'b', 'c', 'a', 'e', 'b', 'c', 'd', 'd', 'e', 'c', 'a', 'b', 'b', 'c', 'a'
    ];
    let soal_subtest1 = [];
    subtest_1_pertanyaan.forEach((row, index) => {
      soal_subtest1.push({
        nomor: index+1,
        kategori: 'pilgan',
        paket_soal: 'subtest_1_ist',
        pertanyaan: row,
        kunci_jawaban: subtest_1_kunci[index],
        pilihan: subtest_1_pilgan[index]
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest1, {});
    // return queryInterface.bulkInsert('soal_ist', [{
    //   nomor: 1,
    //   kategori: 'pilgan',
    //   paket_soal: 'subtest_1_ist',
    //   pertanyaan: 'test soal no 1 subtest1?',
    //   kunci_jawaban: 'a',
    //   pilihan: '{"a":"bandung", "b":"jakarta", "c":"palembang", "d":"jambi"}'
    // }, {
    //   nomor: 2,
    //   kategori: 'pilgan',
    //   paket_soal: 'subtest_1_ist',
    //   pertanyaan: 'test soal no 2 subtest3?',
    //   kunci_jawaban: 'a',
    //   pilihan: '{"a":"motor", "b":"mobil"}'
    // }, {
    //   nomor: 3,
    //   kategori: 'gambar',
    //   paket_soal: 'subtest_5_ist',
    //   pertanyaan: 'test soal no 1 subtest5?',
    //   kunci_jawaban: 'd',
    //   pilihan: '{"a":"bandung.jpg", "b":"jakarta.jpg", "c":"palembang.jpg", "d":"jambi.jpg"}'
    // }, {
    //   nomor: 4,
    //   kategori: 'nosoal',
    //   paket_soal: 'subtest_6_ist',
    //   pertanyaan: null,
    //   kunci_jawaban: 'c',
    //   pilihan: '{"a":"bandung", "b":"jakarta", "c":"pempek", "d":"jambi"}'
    // }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
