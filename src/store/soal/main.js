import Soal from '../../services/SoalService';

const tes = {
  namespaced: true,
  state: {
    test: [],
    timerSoalIST: 180
  },
  mutations: {
    SET_TES(state, payload) {
      state.tes = payload
    },
    COUNTDOWN_TIMER(state) {
      state.timerSoalIST -= 1
    },
    RESET_TIMER(state) {
      state.timerSoalIST = 180
    }
  },
  actions: {
    async getRincianTes({commit}, payload) {
      return await Soal.getRincianTes(payload)
        .then((response) => {
          commit('SET_TES', response);
          return response;
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    async kirimJawaban({commit}, payload) {
      // validate jawaban not more than 20 items
      if (payload.jawaban_peserta.length > 20) {
        payload.jawaban_peserta.slice(0, 20)
      }
      return await Soal.kirimJawaban(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          Promise.reject(error)
        })
    },
    startTimer({commit}) {
      commit('COUNTDOWN_TIMER')
    },
    resetTimer({commit}) {
      commit('RESET_TIMER')
    }
  },
  getters: {
    tes: state => state.tes,
    timer: state => state.timerSoalIST
  }
}

export default tes;