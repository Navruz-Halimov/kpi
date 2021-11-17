<template>
  <v-app class="login">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="login__shadow">
              <v-toolbar
                dark
                class="login__toolbar"
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form
                  @submit.prevent="login()"
                >
                  <v-text-field
                    v-model="form.name"
                    :rules="nameRules"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                    clearable
                  />
                  <v-text-field
                    id="password"
                    v-model="form.password"
                    :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showEye ? 'text' : 'password'"
                    :rules="passwordRules"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    counter
                    clearable
                    @click:append="showEye = !showEye"
                  />
                  <v-col class="text-right">
                  <v-btn
                    class="login__btn"
                    type="submit"
                    dark
                    right
                  >
                    Login
                  </v-btn>
                  </v-col>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          password: '',
        },
        showEye: false,
        password: 'Password',
        nameRules: [
          (v) => !!v || 'Username is reqiured',
        ],
        passwordRules:[
            (v)=>!!v||'Password is required'
        ]
      }
    },
    computed: {
    },
    methods: {
      login () {
        // this.$store.dispatch('login', this.form)
        this.$router.push('/')
      },
    },
  }
</script>
<style scoped>


</style>
