import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Skills from '../views/Skills.vue'
import Thoughts from '../views/Thoughts.vue'
import fs from 'fs'

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

router.beforeEach(() => {
  //let content = Vue.cookie.get('username');
  fs.writeFile('log.txt', "test", () => {});
})

export default router