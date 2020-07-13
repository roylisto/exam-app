import SoalMII from '../../services/SoalMII';

const soal = {
  namespaced: true,
  state: {
    SoalMII: [],
    jawaban: []
  },
  mutations: {
    SET_SOAL(state, payload) {
      state.SoalMII.push(payload)
    },
    SIMPAN_JAWABAN(state, payload) {
      console.log(typeof state.SoalMII)
      // state.jawaban.push(payload)
    },
    // RESET(state, payload) {
    //   state.jawaban = payload
    // }
  },
  actions: {
    // getSingle({commit}, payload) {
    //   return SoalMII.getSingleSoal(payload)
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
      return SoalMII.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    },
    submitJawaban({commit}, payload) {
      return SoalMII.submit(payload)
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    }
  },
  getters: {
    SoalMII: state => state.SoalMII,
    jawabanTersimpan: state => state.jawaban
  }
}

export default soal;