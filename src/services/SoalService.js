import API from './API'

const api = {
  getRincianTes(data) {
    return API.get('rincian-test');
  },
  kirimJawaban(data) {
    return API.post('jawaban', data);
  }
}

export default api;