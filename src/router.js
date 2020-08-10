import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../src/views/Home.vue'),
      beforeEnter: (to, from, next) => {
        let token = sessionStorage.getItem('token');
        if (token) next({path: '/rincian-test'})
        else next();
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../src/views/Login.vue'),
    },
    {
      path: '/rincian-test',
      name: 'Rincian Test',
      component: () => import('../src/views/RincianTest.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/petunjuk-soal',
      name: 'Petunjuk Soal',
      component: () => import('../src/views/PetunjukSoal.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/hafal-soal',
      name: 'Hafal Soal',
      component: () => import('../src/components/IST/HafalSoal.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/soal',
      name: 'Soal',
      component: () => import(/* webpackChunkName: "soal" */ '../src/views/Soal.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/info-soal',
      name: 'Info Soal',
      component: () => import(/* webpackChunkName: "soal" */ '../src/components/IST/InfoSubtest9.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

routes.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');

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