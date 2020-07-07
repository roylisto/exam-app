import API from './API'

const api = {
  getRincianTes(data) {
    return API().get(`rincian-test/${data.peserta_id}`, data);
  }
}

export default api;