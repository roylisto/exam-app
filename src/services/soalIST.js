import API from './API'

const api = {
  getSingleSoal(data) {
    return API().get('soal/ist', {
      params: {
        nomor: data.nomor,
        paket_soal: data.paket
      }
    });
  },
  getSoal() {
    return API().get('soal/ist');
  },
  submit() {
    return API().post('jawaban');
  }
}

export default api;