<template>
<div id="newproject" class="z-depth-4">
  <div class="container">
    <h3>Add new Project</h3>
    <form @submit.prevent="createProject" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="project_id" required>
          <label>Project ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Project name</label>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey"> Cancel </router-link>
    </form>
  </div>
</div>
</template>


<script>
import moment from 'moment'
import db from './firebaseInit'
export default {
  name: 'newproject',
  data() {
    return {
      project_id: null,
      name: null,
      date: null
    }
  },
  methods: {
    createProject() {
      db.collection('projects').add({
        project_id: this.project_id,
        name: this.name,
        date: moment().unix()
      }).then(docRef => this.$router.push('/'))
    }
  }
}
</script>
