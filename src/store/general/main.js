const general = {
  namespaced: true,
  mutations: {
    loadingState (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    changeLoadingState({commit}, payload) {
      commit('loadingState', payload)
    }
  },
}

export default general;