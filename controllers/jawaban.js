const {
  jawaban, logSoalPeserta, waktuSoal, scoreSubtest, soalIST, soalMII,
  user , scorePeserta
} = require('../models/index.js');
const moment = require('moment');

const hitungSubtestPilgan = async (peserta, jawaban, paket_soal, jenis_soal) => {
  const kode_soal = {
    subtest_1_ist: "SE",
    subtest_2_ist: "WA",
    subtest_3_ist: "AN",
    subtest_4_ist: "GE",
    subtest_5_ist: "RA",
    subtest_6_ist: "ZR",
    subtest_7_ist: "FA",
    subtest_8_ist: "WU",
    subtest_9_ist: "ME",
    bagian_1_verb_ling: "M1",
    bagian_2_log_math: "M2",
    bagian_3_spat: "M3",
    bagian_4_mus: "M4",
    bagian_5_bod_kin: "M5",
    bagian_6_inter: "M6",
    bagian_7_intra: "M7",
    bagian_8_nat: "M8"
  }

  const account = await user.findOne({
    where: {
      email: peserta.email
    }
  });

  let rw_peserta = 0;
  if(jenis_soal=='ist') {
    const ist = await soalIST.findAll({
      attributes: ['kunci_jawaban'],
      where: {
        paket_soal: paket_soal
      }
    });
    let kunci_ist = ist.map(x => x.kunci_jawaban);
    if(paket_soal=='subtest_1_ist' || paket_soal=='subtest_2_ist' || paket_soal=='subtest_3_ist'
        || paket_soal=='subtest_7_ist' || paket_soal=='subtest_8_ist' || paket_soal=='subtest_9_ist') {
      kunci_ist.forEach((row, index) => {
        if(row==jawaban[index]) {
          rw_peserta++;
        }
      });
    } else if(paket_soal=='subtest_5_ist' || paket_soal=='subtest_6_ist') {
      kunci_ist.forEach((row, index) => {
        let tmp_jawaban = jawaban[index];
        if(Array.isArray(tmp_jawaban)) {
          tmp_jawaban.sort()
          if(row==tmp_jawaban.join("")) {
            rw_peserta++;
          }
        }
      });
    } else if(paket_soal=='subtest_4_ist') {
      kunci_ist.forEach((row, index) => {
        if(jawaban[index]) {
          let tmp_row = JSON.parse(row);
          let tmp_jawaban = jawaban[index].toLowerCase();
          if(tmp_row[tmp_jawaban]) {
            rw_peserta = rw_peserta+tmp_row[tmp_jawaban];
          }
        }
      });
    }
    console.log("rw: ", rw_peserta);
    let umur = moment().diff(account.tanggal_lahir, 'years');

    if (umur<13) {
      umur = 13;
    } else if(umur>18 && umur<=20) {
      umur = 20;
    } else if(umur>20 && umur <= 24) {
      umur = 24;
    } else if(umur>24 && umur <= 28) {
      umur = 28;
    } else if(umur>28 && umur <= 33) {
      umur = 33;
    } else if(umur>33 && umur <= 39) {
      umur = 39;
    } else if(umur>39 && umur <= 45) {
      umur = 45;
    } else if(umur >= 46) {
      umur = 46;
    }
    const score_subtest = await scoreSubtest.findOne({
      where: {
        kode_soal: kode_soal[paket_soal],
        rw: rw_peserta,
        umur: umur
      }
    });

    let kategori = 'Sangat Rendah';
    if(score_subtest.sw>80 && score_subtest.sw<=94) {
      kategori = 'Rendah';
    } else if(score_subtest.sw > 94 && score_subtest.sw <= 99) {
      kategori = 'Sedang';
    } else if(score_subtest.sw > 99 && score_subtest.sw <= 104) {
      kategori = 'Cukup';
    } else if(score_subtest.sw > 104 && score_subtest.sw <= 118) {
      kategori = 'Tinggi';
    } else if(score_subtest.sw > 118) {
      kategori = 'Sangat Tinggi';
    }

    scorePeserta.create({
      kode_soal: score_subtest.kode_soal,
      rw: score_subtest.rw,
      sw: score_subtest.sw,
      kategori: kategori,
      peserta_id: peserta.id
    });
  } else if(jenis_soal=='mii') {
    let jumlah_ya = jawaban.filter(x => x==='ya').length;
    console.log("ya: ", jumlah_ya);
    scorePeserta.create({
      kode_soal: kode_soal[paket_soal],
      rw: jumlah_ya,
      sw: jumlah_ya,
      kategori: 'mii',
      peserta_id: peserta.id
    });
  }
}

module.exports = {
  store: (req, res) => {
    req.body.peserta_id = req.decoded.data.id;
    req.body.jawaban_peserta = req.body.jawaban_peserta.map((j) => {
      if (j === null) {
        return '#';
      }
      return j;
    });
    jawaban.create(req.body).then(result => {
      hitungSubtestPilgan(req.decoded.data, req.body.jawaban_peserta, req.body.paket_soal, req.body.jenis_soal);
      return res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: result
      });
    }).catch(err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },
  list: async (req, res) => {
    try {
      let check_test = [];
      const all_soal = [
        "subtest_1_ist", "subtest_2_ist", "subtest_3_ist", "subtest_4_ist", "subtest_5_ist",
        "subtest_6_ist", "subtest_7_ist", "subtest_8_ist", "subtest_9_ist",
        "bagian_1_verb_ling", "bagian_2_log_math", "bagian_3_spat", "bagian_4_mus", "bagian_5_bod_kin",
        "bagian_6_inter", "bagian_7_intra", "bagian_8_nat"
      ];

      if(moment().isAfter(req.decoded.data.expired_test)) {
        for(let i=0; i<all_soal.length; i++) {
          let jenis_soal = (i<9) ? 'ist': 'mii';
          check_test.push({
            jenis: jenis_soal,
            test: all_soal[i],
            status: 'Waktu habis'
          });
        }
        return res.json({
          status: 'OK',
          messages: '',
          data: check_test
        });
      }

      const jawaban_user = await jawaban.findAll({where: {
        peserta_id: req.decoded.data.id
      }});

      const log_peserta = await logSoalPeserta.findAll({
        where: {
          peserta_id: req.decoded.data.id
        }
      });

      const log_peserta_mii = await logSoalPeserta.findOne({
        where: {
          jenis_soal: 'mii',
          peserta_id: req.decoded.data.id
        }
      });
      
      let log_test_peserta = {};
      const log_jawaban_user = jawaban_user.map(row => row.paket_soal);

      log_peserta.forEach(row => {
        log_test_peserta[row.paket_soal] = row.created_at;
      });

      let index = 0;
      let status_test = 'Sudah';

      for (const element of all_soal) {

        let jenis_soal = (index<9) ? 'ist': 'mii';
        index++;

        let tmp_status = log_jawaban_user.includes(element);

        if(tmp_status===false) {
          if(log_test_peserta[element]==null) {
            status_test = 'Belum';
            if(jenis_soal=='mii' && log_peserta_mii) {
              let waktu_soal = await waktuSoal.findOne({
                where: {
                  jenis_soal: jenis_soal,
                  paket_soal: element
                }
              });
              waktu_pengerjaan = moment().diff(log_peserta_mii.created_at, 'seconds');
              if(waktu_pengerjaan > waktu_soal.waktu) {
                status_test = 'Waktu habis';
              }
            }
          } else {
            let waktu_soal = await waktuSoal.findOne({
              where: {
                jenis_soal: jenis_soal,
                paket_soal: element
              }
            });
            const last_time = moment(log_test_peserta[element]).format('YYYY-MM-DD HH:mm:ss');
            let waktu_pengerjaan = moment().diff(last_time, 'seconds');

            if(jenis_soal=='mii') {
              waktu_pengerjaan = moment().diff(log_peserta_mii.created_at, 'seconds');
            }

            status_test = (waktu_pengerjaan > waktu_soal.waktu) ? 'Waktu habis' : 'Sedang dikerjakan';
          }
        } else {
          status_test = 'Sudah';
        }

        check_test.push({
          jenis: jenis_soal,
          test: element,
          status: status_test
        });
      }

      res.json({
        status: 'OK',
        messages: '',
        data: check_test
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    }
  },
  delete: async (req, res) => {
    await Promise.all([
      logSoalPeserta.destroy({
        where: {
          peserta_id: req.params.pesertaId,
        },
      }),
      scorePeserta.destroy({
        where: {
          peserta_id: req.params.pesertaId,
        },
      }),
      jawaban.destroy({
        where: {
          peserta_id: req.params.pesertaId,
        },
      }),
    ]);

    res.json({
      status: 'OK',
      messages: 'All answers deleted successfully',
    });
  }
}