import axios from 'axios';

export default axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    baseURL: process.env.VUE_APP_API_URL,
  });