import Vue from 'vue'
import Router from 'vue-router'
import Home from "../src/views/Home.vue";
import Login from "../src/views/Login.vue";
import RincianTest from "../src/views/RincianTest.vue";
import PetunjukSoal from "../src/views/PetunjukSoal.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/rincian-test',
      name: 'Rincian Test',
      component: RincianTest
    },
    {
      path: '/petunjuk-soal',
      name: 'Petunjuk Soal',
      component: PetunjukSoal
    }
  ]
})