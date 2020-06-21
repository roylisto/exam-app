import Vue from 'vue'
import Router from 'vue-router'
import Home from "../src/views/Home.vue";
import Login from "../src/views/login.vue";

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
    }
  ]
})