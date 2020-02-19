import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Search from '../views/Search'
import Home from '../views/Home'

Vue.use(VueRouter)

function loggedInRedirect(to, from, next) {
  if (localStorage.authToken) {
    next("/dashboard");
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: loggedInRedirect
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: loggedInRedirect
  },
  {
    path: '/homes',
    name: 'Search',
    component: Search
  },
  {
    path: '/homes/:homeId',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
