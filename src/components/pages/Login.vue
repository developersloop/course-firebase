<template lang="pug">
  v-form
    v-container
      v-row(style="flex-flow: column; align-items: center;")
        v-col(

        )
          v-alert(
            v-show="!isEmailVerified || (getMessage && getCode)"
            border="top"
            style="background:red !important"
            dark
          ) {{ !isEmailVerified ? 'Por favor verifique seu email!' : getMessage }}

        v-col(
          v-if="getUser"
          cols="12"
          sm="6"
        )
          v-alert(
            border="top"
            style="background:#4caf50 !important"
            dark
          ) Usuário cadastrado com sucesso, por favor verifique seu email!
        
        v-col(
          v-show="notAccount"
          cols="12"
          sm="6"
        )
          v-text-field(
            v-model="valid.name"
            label="name"
            outlined
          )
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
            @click.submit="loguin"
            :disabled="disabledLog"
          ) Login

            v-progress-circular(
              v-if="loadingLogin"
              :size="20"
              indeterminate
              color="primary"
            )
          
          v-btn(
            style="background:#1867c0; color:white; margin-left: 36px;"
            @click="cadastrar"
          ) {{ notAccount ? 'Cadastrar-se' : 'Não tem Cadastro?' }}

            v-progress-circular(
              v-if="loadingSignUp && !getCode"
              :size="20"
              indeterminate
              color="primary"
            )
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      valid: {},
      disabledLog: false,
      notAccount: false,
      isEmailVerified: true,
      loadingLogin: false,
      loadingSignUp: false,
    }
  },
  methods: {
    ...mapActions({
      'signUp': 'signUp',
      'login': 'login'
    }),
    loguin () {
      this.loadingLogin = true
      this.login(this.valid)
        .then(user => {
          this.isEmailVerified = user.user.emailVerified
          this.$router.push({ name: 'home' })
          console.log(this.$router)
        })
        .finally(() => this.loadingLogin = false)
    },
    cadastrar () {
      if (!this.notAccount) this.notAccount = true
      else {
        this.loadingSignUp = true
        this.signUp(this.valid)
          .finally(() => this.loadingSignUp = false)
      }
    }
  },
  computed: {
    ...mapGetters({
      'getUser': 'user',
      'getCode': 'code',
      'getMessage': 'message',
      'isLoggedIn': 'isLoggedIn'
    })
  },
  watch: {
    isLoggedIn: {
      handler(value) {
        console.log(value)
      }
    }
  }
}
</script>