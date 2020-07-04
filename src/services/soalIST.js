import API from './API'

const api = {
  getSingleSoal(data) {
    return API().get('api/soal/ist', {
      params: {
        nomor: data.nomor,
        paket_soal: data.paket
      }
    });
  },
  getSoal() {
    return API().get('api/soal/ist');
  },
}

export default api;