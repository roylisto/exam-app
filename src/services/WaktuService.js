import API from './API'

const api = {
  waktuSisa(data) {
    return API.get(`time/${data.jenis_soal}`, {
      params: {
        paket_soal: data.paket_soal
      }
    });
  }
}

export default api;