import API from './API'

const api = {
  getRincianTes(data) {
    return API.get('rincian-test');
  }
}

export default api;