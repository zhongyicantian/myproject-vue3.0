import { createRouter, createWebHashHistory } from 'vue-router'
//  import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import vuetext from '../components/text.vue'
import kongzhitiao from '../components/kongzhitiao.vue'
import member from '../components/member.vue'
import login from '../components/login.vue'
import vuex from '../store/index.js'
const routes = [
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/vuetext',
    name: 'vuetext',
    component: vuetext
  },
  {
    path: '/kongzhitiao',
    name: 'kongzhitiao',
    component: kongzhitiao
  },
  {
    path: '/member',
    name: 'member',
    component: member
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const loginstate = vuex.state.loginpage.logined
  console.log(loginstate)
  if (to.name !== 'login') {
    if (loginstate) {
      next()
    } else {
      next({ name: 'login' })
      alert('please login!')
    }
  } else {
    next()
  }
})

export default router
