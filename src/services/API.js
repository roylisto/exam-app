import axios from 'axios';

export default () => {
  axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `x-access-token: ${ token }`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}