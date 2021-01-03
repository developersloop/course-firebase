<template lang="pug">
  v-form
    v-container
      v-row(style="flex-flow: column; align-items: center;")
        v-col(
          cols="12"
          sm="6"
        )
          v-text-field(
            v-model="valid.email"
            label="Email"
            outlined
          )
        v-col(
          cols="12"
          sm="6"
        )
          v-text-field(
            v-model="valid.password"
            label="Password"
            type="password"
            outlined
          )
        v-col(
          cols="12"
          sm="6"
        )
         v-btn(
           style="background:#1867c0; color:white"
           @click.submit="validate"
           :disabled="disabledLog"
         ) Login
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      valid: {},
      disabledLog: false
    }
  },
  methods: {
    ...mapActions({
      'login': 'user/signUp'
    }),
    validate () {
       console.log(this.login(this.valid))
    }
  }
}
</script>