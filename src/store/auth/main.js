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
    async login({commit}, payload) {
      return await Auth.login(payload)
        .then((response) => {
          var token = response.data.data.token

          var decodedToken = VueJwtDecode.decode(token)
          var user = JSON.stringify(decodedToken.data)
          console.log(user)

          sessionStorage.clear();
          localStorage.clear();

          sessionStorage.setItem('token', token);

          commit('SET_TOKEN', token);
          commit('SET_USER', user);

          return Promise.resolve(user)
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    },
    logout({commit}) {
      sessionStorage.clear();
      localStorage.clear();
      commit('SET_EMPTY_USER');
      return 'Logged out';
    }
  },
  getters: {
    user: state => state.user
  }
}

export default user;