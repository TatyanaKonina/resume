<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign Up</h1>
        <p class="text-xs-center">
          <router-link :to="{name: 'login'}">Have an account? </router-link>
        </p>
        <mcv-validation-errors
          v-if="validationErrors"
          :validation-errors="validationErrors"
        ></mcv-validation-errors>
        <form @submit.prevent="onSubmit">
          <fieldset class="form-group">
            <input
              placeholder="Username"
              type="text"
              class="form-control form-control-lg"
              v-model="username"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              placeholder="Email"
              type="text"
              class="form-control form-control-lg"
              v-model="email"
            />
          </fieldset>

          <fieldset class="form-group">
            <input
              placeholder="Password"
              type="text"
              class="form-control form-control-lg"
              v-model="password"
            />
          </fieldset>

          <button
            :disabled="isSubmitting"
            class="btn btn-lg btn-primary pull-xs-right"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'
export default {
  name: 'McvRegister',
  components: {
    McvValidationErrors
  },
  data() {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>
