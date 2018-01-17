<template>
<div id="newTask" class=" z-depth-4">
  <router-link :to="{name: 'projecttasks', params:{project_id: this.$route.params.project_id} }" class="btn">
    <i class="material-icons">arrow_back</i>
  </router-link>
  <div class="container">
    <h3>Add new Task</h3>
    <form @submit.prevent="createTask" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required/>
          <label>Task</label>
        </div>
      </div>
      <div class="row">
        
        <label for="slider">Priority</label>

        <div class="input-field col s12">
          <input id="slider" type="range" min="1" max="5" step="1" v-model="priority" required />

          
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="description" class="materialize-textarea" v-model="desc"> </textarea>
          <label for="description">Description</label>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import moment from 'moment'
import db from './firebaseInit'
export default {
  name: 'newTask',
  data() {
    return {
      name: null,
      desc: null,
      priority: 0,
      status: null,
      task_id: null,
      date: null,
      project_id: this.$route.params.project_id
    }
  },
  methods: {
    createTask() {
      db.collection('Tasks').add({
        name: this.name,
        desc: this.desc,
        priority: this.priority,
        status: "to-do",
        project_id: this.$route.params.project_id
      }).then(docRef => this.$router.push('/' + this.$route.params.project_id))
    }
  }
}
</script>
