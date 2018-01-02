<template>
<div id="loginScreen">
  <p>Login: root </br> Password: root </br>
  </p>
  <div class="container">
    <h2> Login </h2>
    <form @submit.prevent="login" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="user" required>
          <label>Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="password" v-model="pass" required>
          <label>Password</label>
        </div>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'loginScreen',
  data() {
    return {
      user: null,
      pass: null,
      password: null
    }
  },
  methods: {
    login() {
      db.collection('users').where('username', '==', this.user).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.password = doc.data().password
        })
      })
      if (this.pass == this.password){
        console.log(this.password)
        this.$router.push('/')}
      else{
        console.log(this.password)
        Materialize.toast('Incorrect Details!', 2000)
      }
    }
  }
}
</script>
