import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/home.vue'
// import About from '../components/about.vue'
// import User from '../components/user.vue'

//懒加载 用户请求效率更高
const Home = () => import('../components/home.vue')
const About = () => import('../components/about.vue')
const User = () => import('../components/user.vue')
const News = () => import('../components/homeNews.vue')
const Message = () => import('../components/homeMessage.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
      beforeEnter: (to, from, next) => {
        console.log('进入关于之前');
        next()
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [{
        path: '/',
        redirect: 'news'
      }, {
        path: 'news',
        component: News
      }, {
        path: 'message',
        component: Message
      }, ]
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history', //hash模式修改为history模式
  linkActiveClass: 'active',
})

//前置钩子(hook)
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子 路由跳转后执行
router.afterEach((to, from) => {
  // to and from are both route objects.

})

export default router
