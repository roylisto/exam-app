import API from './API'

const api = {
  login(data) {
    return API.post('auth', data);
  }
}

export default api;