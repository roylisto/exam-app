import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import modules from './modules';
import auth from './auth/main';
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false,
  logActions: true,
  logMutations: true,
  logger: console,
});

export default new Vuex.Store({
  plugins: [logger],
  modules: {
    auth: auth
  }
});
