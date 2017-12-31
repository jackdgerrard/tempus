<template>
  <div id="app">
    <Navbar />
    <div class="container">
  </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
