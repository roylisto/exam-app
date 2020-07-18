'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'mawar - melati', 'mata - telinga', 'gula - intan', 'hutan - salju', 'pengantar surat - telepon', 'kamera- kacamata', 'lambung -usus', 'banyak -sedikit', 'telur - benih', 'bendera - lencana', 'rumput - gajah', 'ember - kantong', 'awal - akhir', 'kikir - boros', 'penawaran - permintaan', 'atas - bawah'
    ];
    
    const subtest_kunci = [
      {
        "bunga":2,
        "kembang":2,
        "perdu":2,
        "tumbuh-tumbuhan":1, 
        "tumbuhan":1,
        "tanaman":1,
        "tangkai":1,
        "harum":1      
      }, 
      {
        "alat indra":2,
        "indra":2,   
        "panca indra":2,
        "organ":1,
        "organ tubuh":1,
        "alat tubuh":1,
        "bagian tubuh":1
      },
      {
        "hablur":2,
        "kristal":2,   
        "zat arang":2,
        "berkilau":1,
        "berkilauanan":1,
        "mengkilat":1,
        "bening":1
      },
      {
        "cuaca":2,
        "musim":2,   
        "air":1,
        "basah":1,
        "gejala alam":1,
      },
      {
        "pembawa berita":2,
        "alat perhubungan":2,   
        "alat komunikasi":2,
        "pos":1,
        "p.t.t":1,
        "telekomunikasi":1,
        "perhubungan":1,
        "komunikasi":1
      },
      {
        "alat optik":2,
        "optik":2,   
        "lensa":1
      },
      {
        "alat pencernaan":2,
        "jalan makanan":1,   
        "isi perut":1,
        "perut":1,
        "pencernaan":1,
        "pencernaan makanan":1,
      },
      {
        "penyebut jumlah":2,
        "pengertian jumlah":2,   
        "jumlah":2,
        "kuantitas":2,
        "mengukur":1,
        "ukuran":1,
        "ukur":1
      },
      {
        "bibit":2,
        "bakal":2,   
        "alat pembiak":2,
        "permulaan kehidupan":2,
        "sel":1,
        "pembiakan":1,
        "berkembangbiak":1,
        "perkembangbiakan":1
      },
      {
        "simbol":2,
        "lambang":2,   
        "tanda":2,
        "nama":1,
        "pengenal":1,
        "tanda pengenal":1
      },
      {
        "makhluk":2,
        "makhluk hidup":2,   
        "organisme":2,
        "tumbuh":1,
        "biologi":1,
        "ilmu hayat":1,
        "ilmu hayati":1
      },
      {
        "wadah":2,
        "tempat mengisi":2,   
        "tempat penyimpan":2,
        "tempat penyimpanan":2,
        "tempat susuatu":1,
        "alat":1,
        "benda":1,
        "tempat":1
      },
      {
        "pengertian waktu":2,
        "batas":2,   
        "batas waktu":2,
        "waktu":1,
        "saat":1,
        "lamanya":1,
        "lama":1
      },
      {
        "sifat-watak":2,
        "sifat-karakter":2,   
        "karakter":2,
        "watak":2,
        "sifat":1
      },
      {
        "regulator harga":2,
        "regulasi harga":2,   
        "pengertian ekonomi":2,
        "dagang":1,
        "niaga":1,
        "penjualan":1,
        "jual beli":1,
        "pembelian":1
      },
      {
        "pengertian ruang":2,
        "penyebut ruang":2,   
        "arah":1,
        "letak":1,
        "penentuan daerah":1,
        "tempat":1,
        "penunjuk tempat":1,
        "ruang":1
      }
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'nopilgan',
        paket_soal: 'subtest_4_ist',
        pertanyaan: row,
        kunci_jawaban: JSON.stringify(subtest_kunci[index]),
        pilihan: '{}'
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
