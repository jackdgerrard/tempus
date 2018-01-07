<template>
<nav z-depth-4>
  <div class="nav-wrapper">
    <div class="container">
      <h1><router-link to="/" class="brand-logo">Tempus</router-link></h1>
      <ul class="right">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>

          <router-link to="/login" v-on:click.native="logout">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
  name: 'navbar',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
