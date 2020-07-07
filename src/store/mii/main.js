import SoalIST from '../../services/SoalIST';

const soal = {
  namespaced: true,
  state: {
    SoalIST: [],
    jawaban: []
  },
  mutations: {
    SET_SOAL(state, payload) {
      state.SoalIST.push(payload)
    },
    SIMPAN_JAWABAN(state, payload) {
      console.log(typeof state.SoalIST)
      // state.jawaban.push(payload)
    },
    // RESET(state, payload) {
    //   state.jawaban = payload
    // }
  },
  actions: {
    // getSingle({commit}, payload) {
    //   return SoalIST.getSingleSoal(payload)
    //     .then((response) => {
    //       return response
    //     })
    //     .catch((error) => {
    //       return error
    //     })
    // },
    simpanJawaban({commit}, payload) {
      commit('SIMPAN_JAWABAN', payload);
      // commit('RESET', "");
    },
    getAllSoal({commit}) {
      return SoalIST.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    },
    submitJawaban({commit}, payload) {
      return SoalIST.submit(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    }
  },
  getters: {
    SoalIST: state => state.SoalIST,
    jawabanTersimpan: state => state.jawaban
  }
}

export default soal;