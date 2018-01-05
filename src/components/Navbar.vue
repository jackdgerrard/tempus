<template>
<nav>
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
      <ul class="side-nav" id="mobile-demo">
        <div class="row">
          <div class="col s4">
            <img src="http://via.placeholder.com/100x100" class="">
          </div>
          <div class="col s8">
            <a class="waves-effect waves-light btn blue">user</a>
          </div>
        </div>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import router from '@/router'
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
