<template>
  <page-auth>
    <template slot="content">
      <h3>Forgot Password</h3>
      <p class="uk-text-small">Send password reset link to your email.</p>
      <div class="uk-margin">
        <label class="uk-form-label">Email</label>
        <input v-model="input.email" v-validate="'required'" name="email" class="uk-input" type="email">
        <p v-if="errors.has('email')" class="uk-margin-small uk-text-small uk-text-danger">{{ errors.first('email') }}</p>
      </div>
      <div class="uk-margin">
        <div v-if="$data.__httpErrorMessage !== null" class="uk-alert-danger" uk-alert>
          <p class="uk-text-small">{{ $data.__httpErrorMessage }}</p>
        </div>
        <div v-if="$data.__httpSuccessMessage !== null" class="uk-alert-success" uk-alert>
          <p class="uk-text-small">{{ $data.__httpSuccessMessage }}</p>
        </div>
      </div>
      <div class="uk-margin-large uk-text-right">
        <button class="uk-button uk-button-primary" @click="reset">Reset</button>
      </div>
    </template>
  </page-auth>
</template>

<script>
import PageAuth from '../../components/PageAuth'

export default {
  name: 'ForgotPassword',

  components: {
    PageAuth
  },

  data () {
    return {
      input: {
        email: ''
      }
    }
  },

  methods: {
    reset () {
      this.$validator.validate().then(async result => {
        if (!result) return

        this.__cleanHttpMessage()

        try {
          const res = await this.$http.post('/password/email', this.input)

          this.$data.__httpSuccessMessage = res.data.message

          this.input = this.$options.data().input
        } catch (err) {
          this.__httpError(this, err)
        }
      })
    }
  }
}
</script>
