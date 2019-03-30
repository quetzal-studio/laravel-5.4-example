import Vue from 'vue'
import VueRouter from 'vue-router'

import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'forgot-password'
    }
  },
  {
    path: '/password/reset',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/password/reset/:token',
    name: 'reset-password',
    component: ResetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
