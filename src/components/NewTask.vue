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
          <input type="text" v-model="task_id" required>
          <label>Task ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Task Name</label>
        </div>
      </div>
      <div class="row">
        <label>Priority</label>
        <br>
        <div class="input-field col s12">
          <input id="slider" type="range" min="1" max="5" step="1" v-model="priority" />
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="desc">
          <label>Details</label>
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
        status: "idle",
        task_id: this.task_id,
        date: moment().unix(),
        project_id: this.$route.params.project_id
      }).then(docRef => this.$router.push('/' + this.$route.params.project_id))
    }

  }
}
</script>
