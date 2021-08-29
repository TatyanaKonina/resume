<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign Up</h1>
        <p class="text-xs-center">
          <router-link :to="{name: 'login'}"> Need an account?</router-link>
        </p>
        VALIDATION ERRORS
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

          <button :disabled="isSubmitting" class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  data (){
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        email: this.email,
        username:this.username,
        password:this.password

      })
      .then(() => {
        this.$router.push({name:'home'})
      })
    }
  }
}
</script>
