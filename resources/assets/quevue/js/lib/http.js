import Vue from 'vue'
import axios from 'axios'

export const baseURL = document.querySelectorAll('meta[name=app-url]')[0].getAttribute('content')

Vue.http = () => {
  const http = axios.create({
    baseURL: `${baseURL}/api`
  })

  return http
}

Object.defineProperties(Vue.prototype, {
  $http: {
    get: () => { return Vue.http() }
  }
})
