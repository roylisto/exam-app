import Soal from '../../services/SoalService';

const tes = {
  namespaced: true,
  state: {
    test: [],
  },
  mutations: {
    SET_TES(state, payload) {
      state.tes = payload
    },
  },
  actions: {
    getRincianTes({commit}, payload) {
      return Soal.getRincianTes(payload)
        .then((response) => {
          commit('SET_TES', response);
          return response;
        })
        .catch((error) => {
          return error
        })
    },
    kirimJawaban({commit}, payload) {
      // validate jawaban not more than 20 items
      if (payload.jawaban_peserta.length > 20) {
        payload.jawaban_peserta.slice(0, 20)
      }
      return Soal.kirimJawaban(payload)
        .then((response) => {
          console.log(response)
          return response
        })
        .catch((error) => {
          Promise.reject(error)
        })
    },
  },
  getters: {
    tes: state => state.tes
  }
}

export default tes;