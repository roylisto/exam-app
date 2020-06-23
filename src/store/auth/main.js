import Auth from '../../services/AuthService';

const user = {
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.push(payload)
    }
  },
  actions: {
    login({commit}, payload) {
      return Auth.login(payload)
        .then((response) => {
          localStorage.setItem('user', response)
          return response
        })
        .catch((error) => {
          return error
        })
    }
  }
}

export default user;