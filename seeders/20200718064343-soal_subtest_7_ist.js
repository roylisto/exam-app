'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'ist_subtest_7/117.PNG', 'ist_subtest_7/118.PNG', 'ist_subtest_7/119.PNG', 'ist_subtest_7/120.PNG', 'ist_subtest_7/121.PNG', 'ist_subtest_7/122.PNG', 'ist_subtest_7/123.PNG', 'ist_subtest_7/124.PNG', 'ist_subtest_7/125.PNG', 'ist_subtest_7/126.PNG', 'ist_subtest_7/127.PNG', 'ist_subtest_7/128.PNG', 'ist_subtest_7/129.PNG', 'ist_subtest_7/130.PNG', 'ist_subtest_7/131.PNG', 'ist_subtest_7/132.PNG', 'ist_subtest_7/133.PNG', 'ist_subtest_7/134.PNG', 'ist_subtest_7/135.PNG', 'ist_subtest_7/136.PNG'
    ];
    
    const subtest_pilgan = [
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_117-128/a.PNG","b":"ist_subtest_7/jawaban_117-128/b.PNG","c":"ist_subtest_7/jawaban_117-128/c.PNG","d":"ist_subtest_7/jawaban_117-128/d.PNG","e":"ist_subtest_7/jawaban_117-128/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
      '{"a":"ist_subtest_7/jawaban_129-136/a.PNG","b":"ist_subtest_7/jawaban_129-136/b.PNG","c":"ist_subtest_7/jawaban_129-136/c.PNG","d":"ist_subtest_7/jawaban_129-136/d.PNG","e":"ist_subtest_7/jawaban_129-136/e.PNG"}',
    ];
    
    const subtest_kunci = [
      'a','c','b','a','d','b','c','e','e','d','e','b','d','c','b','a','b','d','c','c'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'gambar',
        paket_soal: 'subtest_7_ist',
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
