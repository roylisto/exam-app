import soalIST from '../../services/soalIST';

const soal = {
  namespaced: true,
  state: {
    soalIST: []
  },
  mutations: {
    SET_SOAL(state, payload) {
      state.soalIST.push(payload)
    }
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
    getAllSoal({commit}) {
      return soalIST.getSoal()
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
    }
  },
  getters: {
    soalIST: state => state.soalIST
  }
}

export default soal;