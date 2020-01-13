import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
