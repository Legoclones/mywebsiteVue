import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Skills from '../views/Skills.vue'
import Thoughts from '../views/Thoughts.vue'
import fs from 'fs'
import { nextTick } from 'process'
import { format } from 'path'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/my-thoughts',
    name: 'Thoughts',
    component: Thoughts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //let content = Vue.cookie.get('username');
  fs.writeFile('log.txt', "test", () => {})
  to.name = ""
  from.name = ""
  next()
})

export default router