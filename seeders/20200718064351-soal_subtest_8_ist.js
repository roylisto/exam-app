'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'ist_subtest_8/137.PNG', 'ist_subtest_8/138.PNG', 'ist_subtest_8/139.PNG', 'ist_subtest_8/140.PNG', 'ist_subtest_8/141.PNG', 'ist_subtest_8/142.PNG', 'ist_subtest_8/143.PNG', 'ist_subtest_8/144.PNG', 'ist_subtest_8/145.PNG', 'ist_subtest_8/146.PNG', 'ist_subtest_8/147.PNG', 'ist_subtest_8/148.PNG', 'ist_subtest_8/149.PNG', 'ist_subtest_8/150.PNG', 'ist_subtest_8/151.PNG', 'ist_subtest_8/152.PNG', 'ist_subtest_8/153.PNG', 'ist_subtest_8/154.PNG', 'ist_subtest_8/155.PNG', 'ist_subtest_8/156.PNG'
    ];
    
    const subtest_pilgan = [
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
      '{"a":"ist_subtest_8/a.PNG","b":"ist_subtest_8/b.PNG","c":"ist_subtest_8/c.PNG","d":"ist_subtest_8/d.PNG","e":"ist_subtest_8/e.PNG"}',
    ];
    
    const subtest_kunci = [
      'a', 'c', 'd', 'e', 'a', 'c', 'd', 'c', 'e', 'a', 'b', 'd', 'e', 'b', 'd', 'b', 'a', 'e', 'b', 'c'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'gambar',
        paket_soal: 'subtest_8_ist',
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
