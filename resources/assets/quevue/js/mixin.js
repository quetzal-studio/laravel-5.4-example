import Vue from 'vue'

import { baseURL } from './lib/http'

const mixin = {
  data () {
    return {
      __httpErrorMessage: null,
      __httpSuccessMessage: null
    }
  },
  methods: {
    __assetImages (filename) {
      return `${baseURL}/img/${filename}`
    },
    __cleanHttpMessage () {
      this.$data.__httpErrorMessage = null
      this.$data.__httpSuccessMessage = null
    },
    __httpError (component, err) {
      if (err.response) {
        if (err.response.status === 422) {
          const errors = err.response.data.errors

          component.$data.__httpErrorMessage = err.response.data.message

          Object.keys(errors).forEach(key => {
            if (component.$validator.errors.has(key)) {
              component.$validator.errors.update({
                field: key,
                msg: errors[key][0]
              })
            } else {
              component.$validator.errors.add({
                field: key,
                msg: errors[key][0]
              })
            }
          })
        }
      }
    }
  }
}

Vue.mixin(mixin)
