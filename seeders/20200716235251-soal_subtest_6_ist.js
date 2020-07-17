'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      '6	9	12	15	18	21	24 ?', '15	16	18	19	21	22	24 ?', '19	18	22	21	25	24	28 ?', '16	12	17	13	18	14	19 ?', '2	4	8	10	20	22	44 ?', '15	13	16	12	17	11	18 ?', '25	22	11	33	30	15	45 ?', '49	51	54	27	9	11	14 ?', '2	3	1	3	4	2	4 ?', '19	17	20	16	21	15	22 ?', '94	92	46	44	22	20	10 ?', '5	8	9	8	11	12	11 ?', '12	15	19	23	28	33	39 ?', '7	5	10	7	21	17	68 ?', '11	15	18	9	13	16	8 ?', '3	8	15	24	35	48	63 ?', '4	5	7	4	8	13	7 ?', '8	5	15	18	6	3	9 ?', '15	6	18	10	30	23	69 ?', '5	35	28	4	11	77	70 ?'
    ];
    
    const subtest_kunci = [
      '27', '25', '27', '15', '46', '01', '24', '7', '5', '14', '8', '14', '45', '36', '12', '08', '14', '12', '36', '01'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'nopilgan',
        paket_soal: 'subtest_6_ist',
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
