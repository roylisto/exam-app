import Vue from "vue";
import VueRouter from "vue-router";
import App from "./containers/App.vue";
import Buefy from "buefy";
import "./assets/scss/style.scss";
import router from "./router.js";
import store from "./store";
import API from './services/API.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimesCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faTimesCircle, faEye, faEyeSlash)
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
Vue.use(VueRouter);

Vue.config.productionTip = true;
Vue.prototype.$http = API;

API.interceptors.request.use((config) => {
  let token = sessionStorage.getItem('token');
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
