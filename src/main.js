// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuex from 'vuex'

// Stylesheet


Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authorized: false
  }
})

let app
firebase.auth().onAuthStateChanged((user) => {
    if (firebase.auth().currentUser) store.state.authorized = true
    else store.state.authorized = false
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {
        App
      }
    })
  }
})
