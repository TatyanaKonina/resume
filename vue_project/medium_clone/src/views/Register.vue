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
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              placeholder="Email"
              type="text"
              class="form-control form-control-lg"
            />
          </fieldset>

          <fieldset class="form-group">
            <input
              placeholder="Password"
              type="text"
              class="form-control form-control-lg"
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
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {

      })
      .then(user => {
        console.log('success',user)
      })
    }
  }
}
</script>
