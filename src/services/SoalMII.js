import API from './API'

const api = {
  getSingleSoal(data) {
    return API.get('soal/mii', {
      params: {
        nomor: data.nomor,
        paket_soal: data.paket
      }
    });
  },
  getSoal() {
    return API.get('soal/mii');
  },
  submit() {
    return API.post('jawaban');
  }
}

export default api;
