import waktu from '../../services/WaktuService';

const soal = {
  namespaced: true,
  state: {
    waktu: []
  },
  mutations: {
    SET_WAKTU(state, payload) {
      state.waktu.push(payload)
    },
  },
  actions: {
    sisaWaktu({commit}, payload) {
      return waktu.waktuSisa(payload)
        .then((response) => {
          Promise.resolve(response)
        })
        .catch((error) => {
          Promise.reject(error)
        })
    },
  },
  getters: {
    waktu: state => state.waktu,
  }
}

export default soal;