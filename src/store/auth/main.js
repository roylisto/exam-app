import Auth from '../../services/AuthService';
import VueJwtDecode from 'vue-jwt-decode'

const user = {
  namespaced: true,
  state: {
    user: [],
    token: ''
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
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

          var decodedToken = VueJwtDecode.decode(token)
          var user = JSON.stringify(decodedToken.data)

          localStorage.setItem('token', token)

          commit('SET_TOKEN', token);
          commit('SET_USER', user);
          
          return Promise.resolve(response)
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    logout({commit}) {
      localStorage.removeItem('token');
      localStorage.removeItem('vuex');
      commit('SET_EMPTY_USER');
      return 'Logged out';
    }
  },
  getters: {
    user: state => state.user
  }
}

export default user;