import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthLayout from '@/views/layouts/AuthLayout.vue'
import PageLayout from '@/views/layouts/PageLayout.vue'
import Home from '@/views/Home.vue'
import Tables from '@/views/Tables.vue'
import Login from "@/views/Login.vue";

import authenticate from "@/auth/authenticate";

Vue.use(VueRouter)

const routes = [
  {
    path: "/auth",
    component: AuthLayout,
    redirect: "/auth/login",
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      }
    ]
  },
  {
    path: "/",
    component: PageLayout,
    beforeEnter: authenticate,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "tables",
        name: "Tables",
        component: Tables
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
