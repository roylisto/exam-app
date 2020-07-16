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
      console.log(typeof state.soalIST)
      // state.jawaban.push(payload)
    },
    // RESET(state, payload) {
    //   state.jawaban = payload
    // }
  },
  actions: {
    getSingle({commit}, payload) {
      return soalIST.getSingleSoal(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    },
    simpanJawaban({commit}, payload) {
      commit('SIMPAN_JAWABAN', payload);
      // commit('RESET', "");
    },
    getAllSoal({commit}) {
      return soalIST.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    },
    submitJawaban({commit}, payload) {
      return soalIST.submit(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    }
  },
  getters: {
    soalIST: state => state.soalIST,
    jawabanTersimpan: state => state.jawaban
  }
}

export default soal;