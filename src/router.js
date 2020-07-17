import Vue from 'vue'
import Router from 'vue-router'
import Home from "../src/views/Home.vue";
import Login from "../src/views/Login.vue";
import RincianTest from "../src/views/RincianTest.vue";
import PetunjukSoal from "../src/views/PetunjukSoal.vue";
import Soal from "../src/views/SoalIST.vue";

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token');
        if (token) next({path: '/rincian-test'})
        next();
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/rincian-test',
      name: 'Rincian Test',
      component: RincianTest,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/petunjuk-soal',
      name: 'Petunjuk Soal',
      component: PetunjukSoal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/soal',
      name: 'Soal',
      component: Soal,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

routes.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');

  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (token) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  next();
})

export default routes;