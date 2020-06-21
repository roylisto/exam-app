import Vue from "vue";
import VueRouter from "vue-router";
import App from "./containers/App.vue";
import Buefy from "buefy";
import "./assets/scss/style.scss";
import router from "./router.js";
import store from "./store";

Vue.use(Buefy);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#root",
  render: (h) => h(App),
});
