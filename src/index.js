import Vue from "vue";
import VueRouter from "vue-router";
import App from "./containers/App.vue";
import Buefy from "buefy";
import "./assets/scss/style.scss";
import router from "./router.js";
import store from "./store";
import API from './services/API.js'

Vue.use(Buefy);
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.prototype.$http = API;

API.interceptors.request.use((config) => {
  let token = localStorage.getItem('token');
  if (token) {
    config.headers['x-access-token'] = `${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  el: "#root",
  render: (h) => h(App),
});
