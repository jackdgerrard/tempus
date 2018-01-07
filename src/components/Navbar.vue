<template>
  <nav class="nav-wrapper z-depth-4">
      <router-link to="/" class="brand-logo">Tempus</router-link>
    <ul id="nav-mobile" class="right ">
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li>
        <router-link to="/" v-on:click.native="logout">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import db from './firebaseInit'
  import firebase from 'firebase'
  export default {
    name: 'navbar',
    methods: {
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>