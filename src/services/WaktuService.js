import API from './API'

const api = {
  waktuSisa(data) {
    return API().get(`time/${data.jenis_soal}/${data.paket_soal}/${data.peserta_id}`);
  }
}

export default api;