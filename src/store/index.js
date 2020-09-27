import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import modules from './modules';
import auth from './auth/main';
import ist from './ist/main';
import mii from './mii/main';
import waktu from './waktu/main'
import soal from './soal/main'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false,
  logActions: process.env.VUE_APP_NODE_ENV === 'development' ? true : false,
  logMutations: process.env.VUE_APP_NODE_ENV === 'development' ? true : false,
  logger: console,
});

export default new Vuex.Store({
  // plugins: [logger],
  plugins: [logger, createPersistedState()],
  state: {
    loading: true
  },
  modules: {
    auth: auth,
    ist: ist,
    waktu: waktu,
    soal: soal,
    mii: mii
  }
});
