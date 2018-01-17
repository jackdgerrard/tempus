<template>
<div id="registerScreen" class="z-depth-4">
  <div class="container">
    <h2> Register </h2>
    <form @submit.prevent="register" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="email" v-model="email" required>
          <label>Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="password" v-model="pass" required>
          <label>Password</label>
        </div>
      </div>
      <button type="submit" class="btn red">Register</button>
    </form>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'registerScreen',
  data() {
    return {
      email: null,
      pass: null
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).then(
        user => {
          this.$router.push('/')
        },
        err => {
          Materialize.toast(err.message, 2000)
        }
      )
    }
  }
}
</script>
