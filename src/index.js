import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './containers/App.vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import route from './router.js';
import store from './store';

Vue.component(Buefy);
Vue.use(VueRouter)

Vue.config.productionTip = false;

new Vue({
  route,
  store,
  el: '#root',
  render: h => h(App),
});