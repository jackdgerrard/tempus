<template>
<div id="app">
  <Navbar />
  <div class="container"/>
  <router-view/>
  <VueFooter /> 
</div>
</template>

<script>
import Navbar from './components/Navbar'
import VueFooter from './components/VueFooter'
export default {
  name: 'app',
  components: {
    Navbar,
    VueFooter
  }
}
</script>
