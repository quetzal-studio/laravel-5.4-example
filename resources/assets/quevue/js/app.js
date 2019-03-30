import Vue from 'vue'
import 'uikit'

import router from './router'
import './mixin'
import './lib'

import App from './App'

Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  el: '#app',

  router,

  render: h => h(App)
})
