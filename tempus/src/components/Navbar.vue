<template>
<nav>
  <div class="nav-wrapper blue">
    <div class="container">
      <router-link to="/" class="brand-logo">Tempus</router-link>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
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


$(document).ready(() => {
  $(".button-collapse").sideNav()
})
</script>
