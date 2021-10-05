import { createRouter, createWebHashHistory } from 'vue-router'
//  import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import vuetext from '../components/text.vue'
import kongzhitiao from '../components/kongzhitiao.vue'
import member from '../components/member.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
