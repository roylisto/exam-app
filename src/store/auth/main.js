import Auth from '../../services/AuthService';

const user = {
  namespaced: true,
  state: {
    user: [],
    token: ''
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.push(payload)
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_EMPTY_USER(state) {
      state.user = []
      state.token = ''
    }
  },
  actions: {
    login({commit}, payload) {
      return Auth.login(payload)
        .then((response) => {
          var token = response.data.data.token
          localStorage.setItem('token', token)
          commit('SET_TOKEN', token);
          return response
        })
        .catch((error) => {
          return error
        })
    },
    logout({commit}) {
      localStorage.removeItem('token');
      commit('SET_EMPTY_USER');
      return 'Logged out';
    }
  }
}

export default user;