import soalIST from '../../services/SoalIST';

const soal = {
  namespaced: true,
  state: {
    soalIST: [],
    jawaban: []
  },
  mutations: {
    SET_SOAL(state, payload) {
      state.soalIST.push(payload)
    },
    SIMPAN_JAWABAN(state, payload) {
      state.jawaban = payload
    },
    RESET_JAWABAN(state, payload) {
      state.jawaban = [];
    }
  },
  actions: {
    getSingle({commit}, payload) {
      return soalIST.getSingleSoal(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    resetJawaban({commit}) {
      commit('RESET_JAWABAN');
    },
    getAllSoal({commit}) {
      return soalIST.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    submitJawaban({commit}, payload) {
      return soalIST.submit(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    simpanJawaban({commit}, payload) {
      commit('SIMPAN_JAWABAN', payload);
    }
  },
  getters: {
    soalIST: state => state.soalIST,
    jawabanTersimpan: state => state.jawaban
  }
}

export default soal;