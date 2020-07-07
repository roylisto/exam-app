import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import modules from './modules';
import auth from './auth/main';
import ist from './ist/main';
import waktu from './waktu/main'
import soal from './soal/main'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false,
  logActions: true,
  logMutations: true,
  logger: console,
});

export default new Vuex.Store({
  // plugins: [logger],
  plugins: [logger, createPersistedState()],
  modules: {
    auth: auth,
    ist: ist,
    waktu: waktu,
    soal: soal
  }
});
