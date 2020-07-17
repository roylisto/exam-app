'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'menemukan:menghilangkan = mengingat:?', 'bunga:jambangan = burung:?', 'kereta api:rel = otobis:?', 'perak:emas = cincin:?', 'lingkaran:bola = bujur sangkar:?', 'saran:keputusan = merundingkan:?', 'lidah:asam = hidung:?', 'darah:pembuluh = air:?', 'saraf:penyalur = pupil:?', 'pengantar surat:pengantar telegram = pandai besi:?', 'buta:warna = tuli:?', 'makanan:bumbu = ceramah:?', 'marah:emosi = duka cita:?', 'mantel:jubah = wool:?', 'ketinggian puncak:tekanan udara = ketinggian nada:?', 'negara:revolusi = hidup:?', 'kekurangan:penemuan = panas:?', 'kayu:diketam = besi:?', 'olahragawan:lembing = cendekiawan:?', 'keledai:kuda pacuan = pembakaran:?'
    ];
    
    const subtest_pilgan = [
      '{"a":"menghafal","b":"mengenai","c":"melupakan","d":"berpikir","e":"memimpikan"}', 
      '{"a":"sarang","b":"langit","c":"pagar","d":"pohon","e":"sangkar"}', 
      '{"a":"roda","b":"poros","c":"ban","d":"jalan raya","e":"kecepatan"}', 
      '{"a":"arloji","b":"berlian","c":"permata","d":"gelang","e":"platina"}', 
      '{"a":"bentuk ","b":"gambar","c":"segi empat","d":"kubus","e":"piramida"}', '{"a":"menawarkan","b":"menentukan","c":"menilai","d":"menimbang","e":"merenungkan"}', '{"a":"mencium","b":"bernapas","c":"mengecap","d":"tengik","e":"asin"}', '{"a":"pintu air","b":"sungai","c":"talang","d":"hujan","e":"ember"}', '{"a":"penyinaran","b":"mata","c":"melihat","d":"cahaya","e":"pelindung"}', '{"a":"palu godam","b":"pedagang besi","c":"api","d":"tukang mas","e":"besi tempa"}', '{"a":"pendengaran","b":"mendengar","c":"nada","d":"kata","e":"telinga"}', '{"a":"penghinaan","b":"pidato","c":"kelakar","d":"kesan","e":"ayat"}', '{"a":"suka cita","b":"sakit hati","c":"suasana hati","d":"sedih","e":"rindu"}', '{"a":"bahan sandang","b":"domba ","c":"sutera","d":"jas","e":"tekstil"}', '{"a":"garpu penala","b":"sopran","c":"nyanyian","d":"panjang senar","e":"suara"}', '{"a":"biologi","b":"keturunan","c":"mutasi","d":"seleksi","e":"ilmu hewan"}', '{"a":"haus","b":"khatulistiwa","c":"es","d":"matahari","e":"dingin"}', '{"a":"dipalu","b":"digergaji","c":"dituang","d":"dikikir","e":"ditempa"}', '{"a":"perpustakaan","b":"penelitian","c":"karya","d":"studi","e":"mikroskop"}', '{"a":"pemadam api","b":"obor","c":"letupan","d":"korek api","e":"lautan api"}'
    ];
    
    const subtest_kunci = [
      'c', 'e', 'd', 'd', 'd', 'b', 'd', 'b', 'e', 'd', 'c', 'c', 'c', 'c', 'e', 'c', 'c', 'e', 'e', 'e'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'pilgan',
        paket_soal: 'subtest_3_ist',
        pertanyaan: row,
        kunci_jawaban: subtest_kunci[index],
        pilihan: subtest_pilgan[index]
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
