<template>
  <b-container class="mt-5" v-show="!this.$store.getters.isUserOnline">
    <b-row>
      <b-col cols="12" sm="6" offset-sm="3">
        <b-card>
          <div class="card-text">
            <b-form @submit.prevent="onSignUp" class="text-center">
                <h1>Register</h1>
                <b-input-group class="mb-3">
                  <b-input-group-addon>Email</b-input-group-addon>
                  <b-form-input 
                    id="email" 
                    type="email" 
                    v-model="email"
                    placeholder="Email"
                    :required="true"></b-form-input>
                </b-input-group>
                <b-form-group :state="passwordState" :invalid-feedback="invalidPassword">
                  <b-input-group class="mb-3">
                    <b-input-group-addon class="">Password</b-input-group-addon>
                    <b-form-input 
                      id="password" 
                      :state="passwordState" 
                      type="password" 
                      v-model="password"
                      placeholder="Password"
                      :required="true"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group :state="confirmedPassState" :invalid-feedback="invalidConfPass">
                  <b-input-group class="mb-3">
                    <b-input-group-addon class="">Confirm Password</b-input-group-addon>
                    <b-form-input 
                      id="password" 
                      :state="confirmedPassState" 
                      type="password" 
                      v-model="confirmedPassword"
                      placeholder="Confirm Password"
                      :required="true"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-checkbox id="checkbox1"
                     v-model="student"
                     value="Student"
                     unchecked-value="Employer"
                     required>
                  I am a student.
                </b-form-checkbox>
                <b-button variant="success" @submit.prevent type="submit">Make Your Account!</b-button>
            </b-form>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmedPassword: '',
      student: 'Employer'
    }
  },
  methods: {
    onSignUp: function () {
      this.$store.dispatch('registerUser', {email: this.email, password: this.password})
    }
  },
  computed: {
    passwordState: function () { return this.password.length >= 8 },
    invalidPassword: function () { return 'Enter at least 8 characters.' },
    confirmedPassState: function () { return this.password === this.confirmedPassword },
    invalidConfPass: function () { return 'Passwords do not match.' },
    user () { return this.$store.getters.isUserOnline }
  },
  watch: {
    user (value) {
      if (value) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>

</style>
