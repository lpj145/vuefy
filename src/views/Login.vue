<script>
import FIcon from '../components/shareds/FIcon'
import AInput from '../components/shareds/AInput'
import auth from '../services/auth'

export default {
  components: {
    FIcon,
    AInput
  },
  methods: {
    tryLogin ({target}) {
      if (!this.$refs.formAuth.validate()) {
        return
      }
      const {email, password} = target.elements
      this.tryingLogin = true
      auth().loginwithEmailAndPassword(email.value, password.value)
        .then( () => {
          this.tryingLogin = false
          auth().redirectToHomeOrCalledUrl()
        })
        .catch( () => {
          this.tryingLogin = false
          this.erroLogin = 'Login falho!'
        })
    }
  },
  data () {
    return {
      erroLogin: '',
      tryingLogin: false,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid email.'
        }
      },
    }
  }
}
</script>


<template>
  <v-container grid-list-xl fill-height>
    <div class="background--linear"></div>
    <v-layout columns wrap justify-center :fill-height="true">
      <v-flex xs12 md4 mt-0>
        <v-layout justify-center row wrap>
          <v-flex my-5 shrink style="z-index:99;">
            <h2 class="white--text  mb-0" style="font-size:4.5em;line-height:0.9em;">Vue <span class="font-weight-thin">fy</span></h2>
            <h5 class="white--text mt-0 font-weight-thin ">be more productivy</h5>
          </v-flex>
          <v-flex xs11 md12>
            <v-slide-y-reverse-transition mode="out-in" appear >
              <v-card class="card-shadow pt-2 expand-transition-enter-active">
                <v-form ref="formAuth" @submit.prevent="tryLogin">
                  <v-card-text class="px-5 mt-5">
                    <a-input
                      :rules="[rules.email, rules.required]"
                      name="email"
                      autofocus
                      prepend-inner-icon="mdi-at"
                      placeholder="email@example.com"
                      label="username: admin@example.com"
                      type="email"
                    ></a-input>
                    <a-input
                      :rules="[rules.required]"
                      name="password"
                      prepend-inner-icon="mdi-key-variant"
                      placeholder="Yourpass :)"
                      label="password: admin"
                      type="password"
                    ></a-input>
                    <p class="caption font-weight-thin red--text">{{erroLogin}}</p>
                    <v-flex xs12 class="text-center">
                      <v-btn
                        type="submit"
                        color="primary"
                        depressed
                        :loading="tryingLogin"
                      >
                        Sign in <f-icon icon="ArrowRightCircleIcon" size="1.0x" class="ml-2"></f-icon>
                      </v-btn>
                    </v-flex>
                    <p class="text-muted font-weight-thin text-center mb-0 mt-5 caption">Copyright @2019</p>
                  </v-card-text>
                </v-form>
              </v-card>
            </v-slide-y-reverse-transition>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
