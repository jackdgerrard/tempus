<template>
<div id="loginScreen" class="z-depth-4">

  <div class="container">

    <h2> Log in </h2>

    <form @submit.prevent="login" class="col s12">

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

      <button type="submit" class="btn">Login</button>

      <router-link to="/register" class="btn"> Register </router-link>

    </form>
  </div>

</div>
</template>
<script>
import firebase from "firebase";
import Vuex from "vuex";
export default {
  name: "loginScreen",
  data() {
    return {
      email: null,
      pass: null
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(
          user => {
            this.$store.state.authorized = true;
            this.$router.push("/");
          },
          err => {
            Materialize.toast(err.message, 2000);
          }
        );
    }
  }
};
</script>
