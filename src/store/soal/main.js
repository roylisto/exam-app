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
          console.log(response)
          commit('SET_TES', response);
          
          return response;
        })
        .catch((error) => {
          return error
        })
    },
  },
  getters: {
    tes: state => state.tes
  }
}

export default tes;