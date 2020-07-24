const db = require('../models/index.js');
const Excel = require('exceljs');
const moment = require('moment');

module.exports = {
  list_jawaban: async (req, res) => {
    try {
      const event_test = await db.jadwalTest.findByPk(req.params.id);
      if(event_test === null) {
        return res.status(404).json({
          message: 'Jadwal test not found!'
        });
      }
      const peserta = await db.sequelize.query('SELECT user.nama, user.email, \
        peserta.id as peserta_id FROM peserta JOIN user ON user.email = peserta.email \
        WHERE peserta.jadwal_test = ?',
        {
          replacements: [event_test.id],
          type: db.sequelize.QueryTypes.SELECT
        }
      );
      
      
      // return res.send(row);
      const workbook = new Excel.Workbook();

      workbook.creator = 'Bakatku.id';
      workbook.lastModifiedBy = 'Bakatku';
      workbook.created = new Date();
      workbook.modified = new Date();

      const worksheet =  workbook.addWorksheet('Jawaban Ist', {
        pageSetup:{paperSize: 9, orientation:'landscape'}
      });

      const worksheet2 =  workbook.addWorksheet('Jawaban Mii', {
        pageSetup:{paperSize: 9, orientation:'landscape'}
      });

      worksheet.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Nama', key: 'nama', width: 32 },
        { header: 'Email', key: 'email', width: 32 },
        { header: 'subtest 1 ist', key: 'subtest_1_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 2 ist', key: 'subtest_2_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 3 ist', key: 'subtest_3_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 4 ist', key: 'subtest_4_ist', width: 50, style: { alignment: {wrapText: true}}},
        { header: 'subtest 5 ist', key: 'subtest_5_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 6 ist', key: 'subtest_6_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 7 ist', key: 'subtest_7_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 8 ist', key: 'subtest_8_ist', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'subtest 9 ist', key: 'subtest_9_ist', width: 30, style: { alignment: {wrapText: true}}}
      ];

      worksheet2.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Nama', key: 'nama', width: 32 },
        { header: 'Email', key: 'email', width: 32 },
        { header: 'bagian 1 verb_ling', key: 'bagian_1_verb_ling', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 2 log_math', key: 'bagian_2_log_math', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 3 spat', key: 'bagian_3_spat', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 4 mus', key: 'bagian_4_mus', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 5 bod_kin', key: 'bagian_5_bod_kin', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 6 inter', key: 'bagian_6_inter', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 7 intra', key: 'bagian_7_intra', width: 30, style: { alignment: {wrapText: true}}},
        { header: 'bagian 8 nat', key: 'bagian_8_nat', width: 30, style: { alignment: {wrapText: true}}}
      ];

      for(let i=0; i<peserta.length; i++) {
        let row = {};
        row.no = i+1;
        row.nama = peserta[i].nama;
        row.email = peserta[i].email;
        
        const jawabanPeserta = await db.jawaban.findAll({
          where: {
            peserta_id: peserta[i].peserta_id
          }
        }); 
        for(let j=0; j<jawabanPeserta.length; j++) {
          row[jawabanPeserta[j].paket_soal] = jawabanPeserta[j].getDataValue('jawaban_peserta');
        }
        
        worksheet.addRow(row);
        worksheet2.addRow(row);
      }

      let nameFile = `jawaban_${moment(event_test.waktu).format('YYYY-MM-DD')}_${event_test.instansi}`;
      nameFile = nameFile.replace(/ /g,"_").replace(/:/g,"-") +'-'+event_test.id;

      await workbook.xlsx.writeFile(`./files/${nameFile}.xlsx`);
      res.json({
        download:`${process.env.VUE_APP_API_URL}download?file=${nameFile}.xlsx`,
        peserta
      });
    } catch (err) {
      res.status(500).json({
        status: 'ERROR',
        message: err,
        data: {}
      });
    }
  },

  list: async (req, res) => {
    try {
      let event_test = await db.jadwalTest.findByPk(req.params.id);
      if(event_test==null) {
        return res.status(404).json({
          status: 'ERROR',
          message: 'Jadwal test not found!',
          data: {}
        });
      }

      let peserta = await db.peserta.findAll({
        where: {
          jadwal_test: req.params.id
        },
        // include: db.scorePeserta,
        raw: true
      });

      //init workbook
      const workbook = new Excel.Workbook();

      workbook.creator = 'Bakatku.id';
      workbook.lastModifiedBy = 'Bakatku';
      workbook.created = new Date();
      workbook.modified = new Date();

      const worksheet =  workbook.addWorksheet('Hasil Test Ist', {
        pageSetup:{paperSize: 9, orientation:'landscape'}
      });

      const worksheet2 =  workbook.addWorksheet('Hasil Test Mii', {
        pageSetup:{paperSize: 9, orientation:'landscape'}
      });

      worksheet.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Email', key: 'email', width: 32 },
        { header: 'SE_rw', key: 'SE_rw', width: 8},
        { header: 'SE_sw', key: 'SE_sw', width: 8},
        { header: 'WA_rw', key: 'WA_rw', width: 8},
        { header: 'WA_sw', key: 'WA_sw', width: 8},
        { header: 'AN_rw', key: 'AN_rw', width: 8},
        { header: 'AN_sw', key: 'AN_sw', width: 8},
        { header: 'GE_rw', key: 'GE_rw', width: 8},
        { header: 'GE_sw', key: 'GE_sw', width: 8},
        { header: 'RA_rw', key: 'RA_rw', width: 8},
        { header: 'RA_sw', key: 'RA_sw', width: 8},
        { header: 'ZR_rw', key: 'ZR_rw', width: 8},
        { header: 'ZR_sw', key: 'ZR_sw', width: 8},
        { header: 'FA_rw', key: 'FA_rw', width: 8},
        { header: 'FA_sw', key: 'FA_sw', width: 8},
        { header: 'WU_rw', key: 'WU_rw', width: 8},
        { header: 'WU_sw', key: 'WU_sw', width: 8},
        { header: 'ME_rw', key: 'ME_rw', width: 8},
        { header: 'ME_sw', key: 'ME_sw', width: 8},
        { header: 'IQ', key: 'IQ', width: 8},
      ];

      worksheet2.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Email', key: 'email', width: 32 },
        { header: 'M1', key: 'M1', width: 8},
        { header: 'M2', key: 'M2', width: 8},
        { header: 'M3', key: 'M3', width: 8},
        { header: 'M4', key: 'M4', width: 8},
        { header: 'M5', key: 'M5', width: 8},
        { header: 'M6', key: 'M6', width: 8},
        { header: 'M7', key: 'M7', width: 8},
        { header: 'M8', key: 'M8', width: 8}
      ];

      // end init workbook
      for(let i=0; i<peserta.length; i++) {
        let row = {};
        let row2 = {};
        row.no = i+1;
        row2.no = i+1;
        row.email = peserta[i].email;
        row2.email = peserta[i].email;
        peserta[i].scorePeserta = await db.scorePeserta.findAll({
          where: {
            peserta_id: peserta[i].id
          }
        });

        for(let j=0; j<peserta[i].scorePeserta.length; j++) {
          switch(peserta[i].scorePeserta[j].kode_soal) {
            case 'SE':
              row.SE_rw = peserta[i].scorePeserta[j].rw;
              row.SE_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'WA':
              row.WA_rw = peserta[i].scorePeserta[j].rw;
              row.WA_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'AN':
              row.AN_rw = peserta[i].scorePeserta[j].rw;
              row.AN_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'GE':
              row.GE_rw = peserta[i].scorePeserta[j].rw;
              row.GE_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'RA':
              row.RA_rw = peserta[i].scorePeserta[j].rw;
              row.RA_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'ZR':
              row.ZR_rw = peserta[i].scorePeserta[j].rw;
              row.ZR_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'FA':
              row.FA_rw = peserta[i].scorePeserta[j].rw;
              row.FA_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'WU':
              row.WU_rw = peserta[i].scorePeserta[j].rw;
              row.WU_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'ME':
              row.ME_rw = peserta[i].scorePeserta[j].rw;
              row.ME_sw = peserta[i].scorePeserta[j].sw
              break;
            case 'M1':
            case 'M2':
            case 'M3':
            case 'M4':
            case 'M5':
            case 'M6':
            case 'M7':
            case 'M8':
              row2[peserta[i].scorePeserta[j].kode_soal] = peserta[i].scorePeserta[j].rw;
              break;
          }
        }

        let tanggal_lahir = await db.user.findOne({
          where: {
            email: peserta[i].email
          }
        }).then(result => result.tanggal_lahir);

        let umur = moment().diff(tanggal_lahir, 'years');

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

        peserta[i].iq = await db.scorePeserta.getIQ(peserta[i].id, umur);
        row.IQ = peserta[i].iq;

        worksheet.addRow(row);
        worksheet2.addRow(row2);
      }

      let nameFile = `${moment(event_test.waktu).format('YYYY-MM-DD')}_${event_test.instansi}`;
      nameFile = nameFile.replace(/ /g,"_").replace(/:/g,"-") +'-'+event_test.id;

      await workbook.xlsx.writeFile(`./files/${nameFile}.xlsx`);
      res.json({
        download:`${process.env.VUE_APP_API_URL}download?file=${nameFile}.xlsx`,
        peserta
      });
    } catch (err) {
      res.status(500).json({
        status: 'ERROR',
        message: err,
        data: {}
      });
    }
  }

}