import soalMII from '../../services/SoalMII';

const soal = {
  namespaced: true,
  state: {
    soalMII: [],
    jawaban: []
  },
  mutations: {
    SET_SOAL(state, payload) {
      state.soalMII.push(payload)
    },
    SIMPAN_JAWABAN(state, payload) {
      console.log(payload)
      console.log(typeof state.soalMII)
      console.log(state.jawaban)
      // state.jawaban.push(payload)
    },
    RESET_JAWABAN(state, payload) {
      state.jawaban = [];
    }
  },
  actions: {
    getSingle({commit}, payload) {
      return soalMII.getSingleSoal(payload)
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
      return soalMII.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    submitJawaban({commit}, payload) {
      return soalMII.submit(payload)
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
    soalMII: state => state.soalMII,
    jawabanTersimpan: state => state.jawaban
  }
}

export default soal;